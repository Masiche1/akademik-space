import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "ela6-u6-lesson-6-4",
  code: "6-4",
  title: "Descriptive Details",
  goal: "I CAN use descriptive details in narratives and informative texts.",
  standards: ["W.6.3", "W.6.2"],
  vocabulary: [
    { term: "Description", definition: "Details about." },
    { term: "Sensory", definition: "Five senses." },
    { term: "Imagery", definition: "Mental pictures." },
    { term: "Vivid", definition: "Clear/lively." },
    { term: "Specific", definition: "Detailed." },
    { term: "Concrete", definition: "Real/tangible." },
    { term: "Abstract", definition: "Ideas." },
    { term: "Engage", definition: "Capture interest." },
  ],
  concepts: [
    {
      id: "ela6-u6-descriptive-details",
      title: "Descriptive details",
      skill: "Use sensory and specific details to create vivid descriptions in writing.",
      lesson: {
        sections: [
          {
            heading: "Show don't tell",
            body: "Use **sensory details** (sight, sound, smell, taste, touch) instead of just saying things. 'The air smelled of salt and seaweed' vs 'It smelled good.'",
          },
          {
            heading: "Specific vs abstract",
            body: "**Specific/concrete** details ('a red apple') are more vivid than **abstract** ('fruit').",
          },
        ],
        keyFormulas: [
          { name: "Description", statement: "Sensory + specific details = vivid writing." },
        ],
        workedExample: {
          problem: "Rewrite 'The food was good' using sensory details.",
          solution: "**'The stew simmered with rich aromas of garlic and thyme; each spoonful was hearty and warm.'**",
        },
      },
      questions: [
        {
          id: "ela6-u6-descriptive-details-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Sensory details' appeal to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only sight"
                    },
                    {
                              "id": "b",
                              "text": "the five senses"
                    },
                    {
                              "id": "c",
                              "text": "only sound"
                    },
                    {
                              "id": "d",
                              "text": "only taste"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Five senses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Five senses.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the five senses",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u6-descriptive-details-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Show don't tell' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "just state facts"
                    },
                    {
                              "id": "b",
                              "text": "use details to create images"
                    },
                    {
                              "id": "c",
                              "text": "be brief"
                    },
                    {
                              "id": "d",
                              "text": "use opinions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Use details for images."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use details for images.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "use details to create images",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "ela6-u6-descriptive-details-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rewrite this sentence with sensory details: 'The beach was nice.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Description",
                              "statement": "Sensory rewrite."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rewrites with details.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**'The beach stretched golden under the sun, waves crashing rhythmically, salt spray kissing my skin.'**",
          "commonErrors": [
                    "No sensory details.",
                    "Still vague."
          ]
},
        },
        {
          id: "ela6-u6-descriptive-details-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Concrete details' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "abstract ideas"
                    },
                    {
                              "id": "b",
                              "text": "specific, tangible things"
                    },
                    {
                              "id": "c",
                              "text": "opinions"
                    },
                    {
                              "id": "d",
                              "text": "questions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Specific/tangible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specific/tangible.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "specific, tangible things",
          "commonErrors": [
                    "Confuses with abstract."
          ]
},
        },
        {
          id: "ela6-u6-descriptive-details-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a descriptive paragraph using at least three different sensory details.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Description",
                              "statement": "Three senses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes description.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Uses three senses.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'The bakery smelled of fresh bread (smell); the warm loaves felt crusty (touch); the display glowed golden (sight).'**",
          "commonErrors": [
                    "Fewer than three.",
                    "No sensory details."
          ]
},
        },
        {
          id: "ela6-u6-descriptive-details-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Description\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Five senses."
                    },
                    {
                              "id": "b",
                              "text": "Details about."
                    },
                    {
                              "id": "c",
                              "text": "Mental pictures."
                    },
                    {
                              "id": "d",
                              "text": "Clear/lively."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Description\" means Details about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Description\" means Details about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Description** = Details about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u6-descriptive-details-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sensory\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mental pictures."
                    },
                    {
                              "id": "b",
                              "text": "Clear/lively."
                    },
                    {
                              "id": "c",
                              "text": "Detailed."
                    },
                    {
                              "id": "d",
                              "text": "Five senses."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sensory\" means Five senses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sensory\" means Five senses.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sensory** = Five senses.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u6-descriptive-details-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Imagery\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Clear/lively."
                    },
                    {
                              "id": "b",
                              "text": "Mental pictures."
                    },
                    {
                              "id": "c",
                              "text": "Detailed."
                    },
                    {
                              "id": "d",
                              "text": "Real/tangible."
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
