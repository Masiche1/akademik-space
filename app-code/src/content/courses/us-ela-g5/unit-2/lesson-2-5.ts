import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "ela5-u2-lesson-2-5",
  code: "2-5",
  title: "Craft and Structure Review",
  goal: "I CAN use all craft and structure skills.",
  standards: ["RL.5.4", "RL.5.5", "RL.5.6"],
  vocabulary: [
    { term: "Figurative language", definition: "Non-literal language." },
    { term: "Point of view", definition: "Who tells story." },
    { term: "Flashback", definition: "Past event." },
    { term: "Foreshadowing", definition: "Future hint." },
    { term: "Climax", definition: "Turning point." },
    { term: "Resolution", definition: "Ending." },
    { term: "Structure", definition: "Story organization." },
    { term: "Tone", definition: "Feeling of text." },
  ],
  concepts: [
    {
      id: "ela5-u2-craft-review",
      title: "Craft and structure review",
      skill: "Combine figurative language, point of view, flashbacks, foreshadowing and story structure.",
      lesson: {
        sections: [
          {
            heading: "All craft skills",
            body: "Analyze **figurative language**, **point of view**, **flashbacks**, **foreshadowing**, and **story structure**.",
          },
          {
            heading: "Put it together",
            body: "Use all craft skills for deep analysis.",
          },
        ],
        keyFormulas: [
          { name: "Craft", statement: "Figurative + POV + flashback + foreshadow + structure = all skills." },
        ],
        workedExample: {
          problem: "Use all craft skills on a story.",
          solution: "All skills = complete craft understanding.",
        },
      },
      questions: [
        {
          id: "ela5-u2-craft-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Craft and structure skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only figurative"
                    },
                    {
                              "id": "b",
                              "text": "figurative, POV, flashback, foreshadow, structure"
                    },
                    {
                              "id": "c",
                              "text": "only structure"
                    },
                    {
                              "id": "d",
                              "text": "only POV"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All craft skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All craft skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "figurative, POV, flashback, foreshadow, structure",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela5-u2-craft-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify figurative language, point of view, flashback/foreshadowing, and story structure in a text.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All craft",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All craft",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Metaphor; third person; flashback in para 2; climax at fight.'**"
          ]
},
        },
        {
          id: "ela5-u2-craft-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Understanding craft helps you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only read faster"
                    },
                    {
                              "id": "b",
                              "text": "appreciate how authors create meaning"
                    },
                    {
                              "id": "c",
                              "text": "skip reading"
                    },
                    {
                              "id": "d",
                              "text": "memorize"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Appreciate author's craft."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Appreciate author's craft.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "appreciate how authors create meaning",
          "commonErrors": [
                    "Thinks it's not useful."
          ]
},
        },
        {
          id: "ela5-u2-craft-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Figurative language\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who tells story."
                    },
                    {
                              "id": "b",
                              "text": "Non-literal language."
                    },
                    {
                              "id": "c",
                              "text": "Past event."
                    },
                    {
                              "id": "d",
                              "text": "Future hint."
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
          id: "ela5-u2-craft-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Point of view\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Past event."
                    },
                    {
                              "id": "b",
                              "text": "Future hint."
                    },
                    {
                              "id": "c",
                              "text": "Turning point."
                    },
                    {
                              "id": "d",
                              "text": "Who tells story."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Point of view\" means Who tells story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Point of view\" means Who tells story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Point of view** = Who tells story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u2-craft-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Flashback\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Future hint."
                    },
                    {
                              "id": "b",
                              "text": "Past event."
                    },
                    {
                              "id": "c",
                              "text": "Turning point."
                    },
                    {
                              "id": "d",
                              "text": "Ending."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Flashback\" means Past event."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Flashback\" means Past event.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Flashback** = Past event.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u2-craft-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Foreshadowing\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Turning point."
                    },
                    {
                              "id": "b",
                              "text": "Ending."
                    },
                    {
                              "id": "c",
                              "text": "Story organization."
                    },
                    {
                              "id": "d",
                              "text": "Future hint."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Foreshadowing\" means Future hint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Foreshadowing\" means Future hint.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Foreshadowing** = Future hint.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u2-craft-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Climax\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ending."
                    },
                    {
                              "id": "b",
                              "text": "Turning point."
                    },
                    {
                              "id": "c",
                              "text": "Story organization."
                    },
                    {
                              "id": "d",
                              "text": "Feeling of text."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Climax\" means Turning point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Climax\" means Turning point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Climax** = Turning point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
