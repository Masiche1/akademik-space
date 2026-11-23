import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ela5-u2-lesson-2-1",
  code: "2-1",
  title: "Figurative Language",
  goal: "I CAN identify and explain similes, metaphors and personification.",
  standards: ["RL.5.4"],
  vocabulary: [
    { term: "Figurative language", definition: "Non-literal language." },
    { term: "Simile", definition: "Comparison using 'like' or 'as'." },
    { term: "Metaphor", definition: "Direct comparison." },
    { term: "Personification", definition: "Giving human traits to non-human." },
    { term: "Literal", definition: "Actual meaning." },
    { term: "Image", definition: "Mental picture." },
    { term: "Tone", definition: "Feeling of text." },
    { term: "Effect", definition: "Impact on reader." },
  ],
  concepts: [
    {
      id: "ela5-u2-figurative-language",
      title: "Figurative language",
      skill: "Identify similes, metaphors and personification and explain their effect.",
      lesson: {
        sections: [
          {
            heading: "Not literal",
            body: "**Figurative language** means something **other than the literal meaning**. It creates **images** and **feeling**.",
          },
          {
            heading: "Types",
            body: "**Simile**: 'brave as a lion' (uses like/as). **Metaphor**: 'she is a shining star' (direct). **Personification**: 'the wind whispered' (human traits).",
          },
        ],
        keyFormulas: [
          { name: "Figurative", statement: "Simile + metaphor + personification = figurative language." },
        ],
        workedExample: {
          problem: "Identify: 'The classroom was a zoo.'",
          solution: "**Metaphor** — directly compares classroom to zoo (chaotic).",
        },
      },
      questions: [
        {
          id: "ela5-u2-figurative-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'simile' compares using...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no comparison words"
                    },
                    {
                              "id": "b",
                              "text": "like or as"
                    },
                    {
                              "id": "c",
                              "text": "is/are"
                    },
                    {
                              "id": "d",
                              "text": "metaphor"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Simile uses like/as."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Simile uses like/as.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "like or as",
          "commonErrors": [
                    "Confuses with metaphor."
          ]
},
        },
        {
          id: "ela5-u2-figurative-language-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'The wind whispered' is an example of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "simile"
                    },
                    {
                              "id": "b",
                              "text": "personification"
                    },
                    {
                              "id": "c",
                              "text": "metaphor"
                    },
                    {
                              "id": "d",
                              "text": "literal language"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Personification — wind acts human."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Personification — wind acts human.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "personification",
          "commonErrors": [
                    "Wrong type."
          ]
},
        },
        {
          id: "ela5-u2-figurative-language-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find one simile, one metaphor and one personification in a passage. Explain what each adds.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Figurative",
                              "statement": "All three types found."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., Simile: 'fast as lightning'; Metaphor: 'time is money'; Personification: 'the sun smiled'.**",
          "commonErrors": [
                    "Cannot find all.",
                    "Wrong types."
          ]
},
        },
        {
          id: "ela5-u2-figurative-language-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Figurative language is used to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "confuse readers"
                    },
                    {
                              "id": "b",
                              "text": "create images and feelings"
                    },
                    {
                              "id": "c",
                              "text": "be literal"
                    },
                    {
                              "id": "d",
                              "text": "make text longer"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Create images/feelings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Create images/feelings.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "create images and feelings",
          "commonErrors": [
                    "Thinks it's literal."
          ]
},
        },
        {
          id: "ela5-u2-figurative-language-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how figurative language affects the mood or tone of a passage.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Figurative",
                              "statement": "Effect on mood/tone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies figurative language.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains effect.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Dark clouds frowned overhead' creates a gloomy, foreboding tone.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No effect."
          ]
},
        },
        {
          id: "ela5-u2-figurative-language-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Figurative language\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Comparison using like/as."
                    },
                    {
                              "id": "b",
                              "text": "Non-literal language."
                    },
                    {
                              "id": "c",
                              "text": "Direct comparison."
                    },
                    {
                              "id": "d",
                              "text": "Giving human traits to non-human."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Figurative language\" means Non-literal language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Figurative language\" means Non-literal language.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Figurative language** = Non-literal language.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u2-figurative-language-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Simile\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Direct comparison."
                    },
                    {
                              "id": "b",
                              "text": "Giving human traits to non-human."
                    },
                    {
                              "id": "c",
                              "text": "Actual meaning."
                    },
                    {
                              "id": "d",
                              "text": "Comparison using like/as."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Simile\" means Comparison using like/as."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Simile\" means Comparison using like/as.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Simile** = Comparison using like/as.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u2-figurative-language-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Metaphor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Giving human traits to non-human."
                    },
                    {
                              "id": "b",
                              "text": "Direct comparison."
                    },
                    {
                              "id": "c",
                              "text": "Actual meaning."
                    },
                    {
                              "id": "d",
                              "text": "Mental picture."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Metaphor\" means Direct comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Metaphor\" means Direct comparison.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Metaphor** = Direct comparison.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
