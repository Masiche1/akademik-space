import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ela2-u2-lesson-2-1",
  code: "2-1",
  title: "Character Traits",
  goal: "I CAN describe characters and their traits.",
  standards: ["RL.2.3"],
  vocabulary: [
    { term: "Character", definition: "Person or animal in story." },
    { term: "Trait", definition: "A quality of a character." },
    { term: "Describe", definition: "Tell what it is like." },
    { term: "Kind", definition: "Nice to others." },
    { term: "Brave", definition: "Not afraid." },
    { term: "Silly", definition: "Funny/playful." },
    { term: "Helpful", definition: "Helps others." },
    { term: "Mean", definition: "Not nice." },
  ],
  concepts: [
    {
      id: "ela2-u2-character-traits",
      title: "Character traits",
      skill: "Describe characters and their traits (qualities).",
      lesson: {
        sections: [
          {
            heading: "What is a trait?",
            body: "A **trait** is a quality of a character — **kind**, **brave**, **silly**, **helpful**, **mean**. Traits tell us what a character is like.",
          },
          {
            heading: "Describe characters",
            body: "To **describe** a character, name their traits and give examples: 'Sam is **kind** because he shares his toys.'",
          },
        ],
        keyFormulas: [
          { name: "Trait", statement: "Quality of a character; describe with examples." },
        ],
        workedExample: {
          problem: "Describe a character who helps others. What trait do they have?",
          solution: "They are **helpful** — they help others.",
        },
      },
      questions: [
        {
          id: "ela2-u2-character-traits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'trait' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a feeling"
                    },
                    {
                              "id": "b",
                              "text": "a quality of a character"
                    },
                    {
                              "id": "c",
                              "text": "a place"
                    },
                    {
                              "id": "d",
                              "text": "a thing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Trait = character quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trait = character quality.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**character quality**",
          "commonErrors": [
                    "Confuses with feeling."
          ]
},
        },
        {
          id: "ela2-u2-character-traits-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If a character shares toys, they are probably...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "mean"
                    },
                    {
                              "id": "b",
                              "text": "kind"
                    },
                    {
                              "id": "c",
                              "text": "silly"
                    },
                    {
                              "id": "d",
                              "text": "brave"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Sharing = kind."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sharing = kind.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**kind**",
          "commonErrors": [
                    "Picks wrong trait."
          ]
},
        },
        {
          id: "ela2-u2-character-traits-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a character. Describe them with two traits and give an example for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Traits",
                              "statement": "2 traits + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 traits + examples.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Kind: shares toys; Brave: faces fears.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No examples."
          ]
},
        },
        {
          id: "ela2-u2-character-traits-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Brave' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "scared"
                    },
                    {
                              "id": "b",
                              "text": "not afraid"
                    },
                    {
                              "id": "c",
                              "text": "silly"
                    },
                    {
                              "id": "d",
                              "text": "mean"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Brave = not afraid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Brave = not afraid.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**not afraid**",
          "commonErrors": [
                    "Confuses with scared."
          ]
},
        },
        {
          id: "ela2-u2-character-traits-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two characters' traits. How are they alike? How are they different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Traits",
                              "statement": "Two characters + traits comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names traits for both.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Compares alike/different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Both kind; one is also brave, one is silly.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only one character."
          ]
},
        },
        {
          id: "ela2-u2-character-traits-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A quality of a character."
                    },
                    {
                              "id": "b",
                              "text": "Person or animal in story."
                    },
                    {
                              "id": "c",
                              "text": "Tell what it is like."
                    },
                    {
                              "id": "d",
                              "text": "Nice to others."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Person or animal in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person or animal in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person or animal in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u2-character-traits-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trait\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tell what it is like."
                    },
                    {
                              "id": "b",
                              "text": "Nice to others."
                    },
                    {
                              "id": "c",
                              "text": "Not afraid."
                    },
                    {
                              "id": "d",
                              "text": "A quality of a character."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Trait\" means A quality of a character."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Trait\" means A quality of a character.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Trait** = A quality of a character.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u2-character-traits-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Describe\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Nice to others."
                    },
                    {
                              "id": "b",
                              "text": "Tell what it is like."
                    },
                    {
                              "id": "c",
                              "text": "Not afraid."
                    },
                    {
                              "id": "d",
                              "text": "Funny/playful."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Describe\" means Tell what it is like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Describe\" means Tell what it is like.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Describe** = Tell what it is like.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
