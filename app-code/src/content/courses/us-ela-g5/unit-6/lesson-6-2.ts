import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ela5-u6-lesson-6-2",
  code: "6-2",
  title: "Descriptive Writing",
  goal: "I CAN write descriptive pieces using sensory details.",
  standards: ["W.5.3"],
  vocabulary: [
    { term: "Descriptive", definition: "Detailed description." },
    { term: "Sensory details", definition: "Sight, sound, smell, taste, touch." },
    { term: "Imagery", definition: "Mental pictures." },
    { term: "Specific", definition: "Precise." },
    { term: "Vivid", definition: "Lively." },
    { term: "Show don't tell", definition: "Use details not labels." },
    { term: "Setting", definition: "Where/when." },
    { term: "Mood", definition: "Feeling of place." },
  ],
  concepts: [
    {
      id: "ela5-u6-descriptive-writing",
      title: "Descriptive writing",
      skill: "Use sensory details and imagery to create vivid descriptions.",
      lesson: {
        sections: [
          {
            heading: "Show, don't tell",
            body: "**Descriptive writing** uses **sensory details** (sight, sound, smell, taste, touch) to **show** what something is like, not just **tell** (label) it.",
          },
          {
            heading: "Techniques",
            body: "Use **specific** words, **imagery** (mental pictures), and details that create **mood** and help readers **see** what you see.",
          },
        ],
        keyFormulas: [
          { name: "Descriptive", statement: "Sensory details + imagery + specific words = vivid description." },
        ],
        workedExample: {
          problem: "Describe a beach using sensory details.",
          solution: "**'The salty breeze stung my nose; waves crashed like drums; warm sand squished between my toes.'**",
        },
      },
      questions: [
        {
          id: "ela5-u6-descriptive-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Show, don't tell' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "use labels"
                    },
                    {
                              "id": "b",
                              "text": "use sensory details to describe"
                    },
                    {
                              "id": "c",
                              "text": "only say facts"
                    },
                    {
                              "id": "d",
                              "text": "be brief"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Use sensory details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use sensory details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "use sensory details to describe",
          "commonErrors": [
                    "Tells instead of shows."
          ]
},
        },
        {
          id: "ela5-u6-descriptive-writing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sensory details include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only sight"
                    },
                    {
                              "id": "b",
                              "text": "sight, sound, smell, taste, touch"
                    },
                    {
                              "id": "c",
                              "text": "only words"
                    },
                    {
                              "id": "d",
                              "text": "only feelings"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All five senses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All five senses.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "sight, sound, smell, taste, touch",
          "commonErrors": [
                    "Only one sense."
          ]
},
        },
        {
          id: "ela5-u6-descriptive-writing-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a descriptive paragraph about a place using at least three different senses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Descriptive",
                              "statement": "3+ senses used."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses sensory details.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Creates vivid image.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'I saw..., heard..., smelled...' — vivid description.**",
          "commonErrors": [
                    "Missing senses.",
                    "Not descriptive."
          ]
},
        },
        {
          id: "ela5-u6-descriptive-writing-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Imagery' in writing creates...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "confusion"
                    },
                    {
                              "id": "b",
                              "text": "mental pictures for the reader"
                    },
                    {
                              "id": "c",
                              "text": "facts"
                    },
                    {
                              "id": "d",
                              "text": "arguments"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Mental pictures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mental pictures.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "mental pictures for the reader",
          "commonErrors": [
                    "Thinks it's just words."
          ]
},
        },
        {
          id: "ela5-u6-descriptive-writing-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Rewrite a 'telling' sentence as 'showing' using sensory details. Explain the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Descriptive",
                              "statement": "Rewritten + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rewrites correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'The dog was scared' -> 'The dog's tail tucked and it whined.' Explanation: showing uses details, not labels.**",
          "commonErrors": [
                    "Cannot rewrite.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela5-u6-descriptive-writing-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Descriptive\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sight, sound, smell, taste, touch."
                    },
                    {
                              "id": "b",
                              "text": "Detailed description."
                    },
                    {
                              "id": "c",
                              "text": "Mental pictures."
                    },
                    {
                              "id": "d",
                              "text": "Precise."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Descriptive\" means Detailed description."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Descriptive\" means Detailed description.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Descriptive** = Detailed description.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u6-descriptive-writing-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sensory details\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mental pictures."
                    },
                    {
                              "id": "b",
                              "text": "Precise."
                    },
                    {
                              "id": "c",
                              "text": "Lively."
                    },
                    {
                              "id": "d",
                              "text": "Sight, sound, smell, taste, touch."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sensory details\" means Sight, sound, smell, taste, touch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sensory details\" means Sight, sound, smell, taste, touch.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sensory details** = Sight, sound, smell, taste, touch.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u6-descriptive-writing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Imagery\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Precise."
                    },
                    {
                              "id": "b",
                              "text": "Mental pictures."
                    },
                    {
                              "id": "c",
                              "text": "Lively."
                    },
                    {
                              "id": "d",
                              "text": "Use details not labels."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Imagery\" means Mental pictures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Imagery\" means Mental pictures.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Imagery** = Mental pictures.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
