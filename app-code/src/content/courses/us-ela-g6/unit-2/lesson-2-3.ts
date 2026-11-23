import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ela6-u2-lesson-2-3",
  code: "2-3",
  title: "Character Motivation",
  goal: "I CAN analyze why characters act as they do.",
  standards: ["RL.6.3"],
  vocabulary: [
    { term: "Motivation", definition: "Why they act." },
    { term: "Desire", definition: "What they want." },
    { term: "Fear", definition: "What they avoid." },
    { term: "Goal", definition: "What they try to achieve." },
    { term: "Obstacles", definition: "What blocks them." },
    { term: "Choices", definition: "Decisions they make." },
    { term: "Consequences", definition: "Results." },
    { term: "Analyze", definition: "Break down." },
  ],
  concepts: [
    {
      id: "ela6-u2-character-motivation",
      title: "Character motivation",
      skill: "Analyze the reasons behind characters' actions and decisions.",
      lesson: {
        sections: [
          {
            heading: "Why?",
            body: "**Motivation** = why a character acts. What do they **want** (desire), what do they **fear**, what are their **goals**?",
          },
          {
            heading: "Choices",
            body: "Characters' **choices** reveal motivation. Consider what they stand to gain or lose.",
          },
        ],
        keyFormulas: [
          { name: "Motivation", statement: "Desires + fears + goals = why they act." },
        ],
        workedExample: {
          problem: "A character steals medicine for their sick mother. What might motivate this?",
          solution: "**Love for mother + fear of losing her + goal of saving her life.**",
        },
      },
      questions: [
        {
          id: "ela6-u2-character-motivation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Motivation' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what they look like"
                    },
                    {
                              "id": "b",
                              "text": "why they act as they do"
                    },
                    {
                              "id": "c",
                              "text": "where they live"
                    },
                    {
                              "id": "d",
                              "text": "what they say"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Why they act."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Why they act.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "why they act as they do",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela6-u2-character-motivation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To understand motivation, you should consider...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only their words"
                    },
                    {
                              "id": "b",
                              "text": "their desires, fears and goals"
                    },
                    {
                              "id": "c",
                              "text": "only their actions"
                    },
                    {
                              "id": "d",
                              "text": "only their appearance"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Desires, fears, goals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Desires, fears, goals.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "their desires, fears and goals",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u2-character-motivation-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A character gives up a scholarship to care for their grandmother. What might be their motivation? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Motivation",
                              "statement": "Love/duty/family."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies motivation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Love and duty to family; grandmother's wellbeing more important than scholarship.**",
          "commonErrors": [
                    "Wrong motivation.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "ela6-u2-character-motivation-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Obstacles' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what helps characters"
                    },
                    {
                              "id": "b",
                              "text": "what blocks or challenges characters"
                    },
                    {
                              "id": "c",
                              "text": "where characters live"
                    },
                    {
                              "id": "d",
                              "text": "what characters say"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "What blocks them."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "What blocks them.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "what blocks or challenges characters",
          "commonErrors": [
                    "Confuses with help."
          ]
},
        },
        {
          id: "ela6-u2-character-motivation-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Analyze a character's motivation for a key decision and explain the consequences.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Motivation",
                              "statement": "Motivation + consequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Analyzes motivation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains consequences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Motivation: protect friend; Decision: takes blame; Consequence: friend goes free, character punished.'**",
          "commonErrors": [
                    "Cannot analyze.",
                    "No consequences."
          ]
},
        },
        {
          id: "ela6-u2-character-motivation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Motivation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What they want."
                    },
                    {
                              "id": "b",
                              "text": "Why they act."
                    },
                    {
                              "id": "c",
                              "text": "What they avoid."
                    },
                    {
                              "id": "d",
                              "text": "What they try to achieve."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Motivation\" means Why they act."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Motivation\" means Why they act.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Motivation** = Why they act.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u2-character-motivation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Desire\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What they avoid."
                    },
                    {
                              "id": "b",
                              "text": "What they try to achieve."
                    },
                    {
                              "id": "c",
                              "text": "What blocks them."
                    },
                    {
                              "id": "d",
                              "text": "What they want."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Desire\" means What they want."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Desire\" means What they want.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Desire** = What they want.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u2-character-motivation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fear\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What they try to achieve."
                    },
                    {
                              "id": "b",
                              "text": "What they avoid."
                    },
                    {
                              "id": "c",
                              "text": "What blocks them."
                    },
                    {
                              "id": "d",
                              "text": "Decisions they make."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fear\" means What they avoid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fear\" means What they avoid.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fear** = What they avoid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
