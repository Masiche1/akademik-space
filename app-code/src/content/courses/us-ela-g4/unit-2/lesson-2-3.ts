import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ela4-u2-lesson-2-3",
  code: "2-3",
  title: "Figurative Language",
  goal: "I CAN identify similes, metaphors and other figurative language.",
  standards: ["RL.4.4"],
  vocabulary: [
    { term: "Figurative language", definition: "Non-literal meaning." },
    { term: "Simile", definition: "Like or as." },
    { term: "Metaphor", definition: "Is/are comparison." },
    { term: "Personification", definition: "Giving human traits." },
    { term: "Hyperbole", definition: "Extreme exaggeration." },
    { term: "Literal", definition: "Real meaning." },
    { term: "Imagery", definition: "Sensory description." },
    { term: "Alliteration", definition: "Same starting sounds." },
  ],
  concepts: [
    {
      id: "ela4-u2-figurative-language",
      title: "Figurative language",
      skill: "Identify similes, metaphors, personification and other figurative language.",
      lesson: {
        sections: [
          {
            heading: "Not literal",
            body: "**Figurative language** means something other than the literal meaning. **Simile** uses 'like/as'; **metaphor** says 'is/are'; **personification** gives human traits.",
          },
          {
            heading: "Examples",
            body: "'Brave as a lion' = simile; 'The wind whispered' = personification; 'He is a rock' = metaphor.",
          },
        ],
        keyFormulas: [
          { name: "Figurative", statement: "Simile (like/as) + metaphor (is/are) + personification (human traits)." },
        ],
        workedExample: {
          problem: "'The classroom was a zoo.' What type?",
          solution: "**Metaphor** — says the classroom 'is' a zoo.",
        },
      },
      questions: [
        {
          id: "ela4-u2-figurative-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'As brave as a lion' is a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "metaphor"
                    },
                    {
                              "id": "b",
                              "text": "simile"
                    },
                    {
                              "id": "c",
                              "text": "personification"
                    },
                    {
                              "id": "d",
                              "text": "hyperbole"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'As...as' = simile."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'As...as' = simile.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**simile**",
          "commonErrors": [
                    "Wrong type."
          ]
},
        },
        {
          id: "ela4-u2-figurative-language-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'The wind whispered secrets' is...",
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
                              "text": "literal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Wind 'whispering' = personification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wind 'whispering' = personification.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**personification**",
          "commonErrors": [
                    "Wrong type."
          ]
},
        },
        {
          id: "ela4-u2-figurative-language-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find one example of figurative language. Identify its type and explain the non-literal meaning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Figurative",
                              "statement": "Example + type + meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds example.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Identifies type + meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Time is a thief' = metaphor; time steals moments.'**",
          "commonErrors": [
                    "Literal only.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela4-u2-figurative-language-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'He is a rock' is a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "simile"
                    },
                    {
                              "id": "b",
                              "text": "metaphor"
                    },
                    {
                              "id": "c",
                              "text": "personification"
                    },
                    {
                              "id": "d",
                              "text": "literal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Is' = metaphor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Is' = metaphor.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**metaphor**",
          "commonErrors": [
                    "Wrong type."
          ]
},
        },
        {
          id: "ela4-u2-figurative-language-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find two examples of figurative language. How does each make the writing more interesting?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Figurative",
                              "statement": "Two examples + effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds two examples.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains effect.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Simile: busy as bees (vivid); Metaphor: heart of gold (shows kindness).'**",
          "commonErrors": [
                    "One example only.",
                    "No effect."
          ]
},
        },
        {
          id: "ela4-u2-figurative-language-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Figurative language\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Like or as."
                    },
                    {
                              "id": "b",
                              "text": "Non-literal meaning."
                    },
                    {
                              "id": "c",
                              "text": "Is/are comparison."
                    },
                    {
                              "id": "d",
                              "text": "Giving human traits."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Figurative language\" means Non-literal meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Figurative language\" means Non-literal meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Figurative language** = Non-literal meaning.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-figurative-language-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Simile\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Is/are comparison."
                    },
                    {
                              "id": "b",
                              "text": "Giving human traits."
                    },
                    {
                              "id": "c",
                              "text": "Extreme exaggeration."
                    },
                    {
                              "id": "d",
                              "text": "Like or as."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Simile\" means Like or as."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Simile\" means Like or as.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Simile** = Like or as.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-figurative-language-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Metaphor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Giving human traits."
                    },
                    {
                              "id": "b",
                              "text": "Is/are comparison."
                    },
                    {
                              "id": "c",
                              "text": "Extreme exaggeration."
                    },
                    {
                              "id": "d",
                              "text": "Real meaning."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Metaphor\" means Is/are comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Metaphor\" means Is/are comparison.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Metaphor** = Is/are comparison.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
