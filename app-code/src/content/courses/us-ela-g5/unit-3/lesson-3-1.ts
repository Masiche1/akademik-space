import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ela5-u3-lesson-3-1",
  code: "3-1",
  title: "Comparing Texts",
  goal: "I CAN compare and contrast two texts on the same topic.",
  standards: ["RL.5.9"],
  vocabulary: [
    { term: "Compare", definition: "Find similarities." },
    { term: "Contrast", definition: "Find differences." },
    { term: "Text", definition: "Written work." },
    { term: "Topic", definition: "Subject." },
    { term: "Perspective", definition: "Point of view." },
    { term: "Format", definition: "Type of text." },
    { term: "Genre", definition: "Category of text." },
    { term: "Similar", definition: "Alike." },
  ],
  concepts: [
    {
      id: "ela5-u3-comparing-texts",
      title: "Comparing texts",
      skill: "Compare and contrast two texts on the same topic or theme.",
      lesson: {
        sections: [
          {
            heading: "Two texts",
            body: "When comparing **two texts** on the same topic, look at how they are **similar** (same facts, same message) and **different** (different perspectives, different details).",
          },
          {
            heading: "Across formats",
            body: "Texts can be **stories, poems, articles, or plays**. Compare how the **format** affects what you learn.",
          },
        ],
        keyFormulas: [
          { name: "Compare texts", statement: "Similarities + differences + format = comparison." },
        ],
        workedExample: {
          problem: "Compare a story about friendship to a poem about friendship.",
          solution: "Both about friendship, but story shows it through events; poem shows it through feelings and images.",
        },
      },
      questions: [
        {
          id: "ela5-u3-comparing-texts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Comparing two texts means finding...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only similarities"
                    },
                    {
                              "id": "b",
                              "text": "similarities and differences"
                    },
                    {
                              "id": "c",
                              "text": "only differences"
                    },
                    {
                              "id": "d",
                              "text": "the longer one"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Similarities and differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Similarities and differences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "similarities and differences",
          "commonErrors": [
                    "Only finds one."
          ]
},
        },
        {
          id: "ela5-u3-comparing-texts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When comparing texts in different formats, you should consider...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only the words"
                    },
                    {
                              "id": "b",
                              "text": "how the format affects what you learn"
                    },
                    {
                              "id": "c",
                              "text": "only the pictures"
                    },
                    {
                              "id": "d",
                              "text": "only the length"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "How format affects learning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "How format affects learning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "how the format affects what you learn",
          "commonErrors": [
                    "Ignores format."
          ]
},
        },
        {
          id: "ela5-u3-comparing-texts-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare two texts on the same topic. State one similarity and one difference with evidence from each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparing",
                              "statement": "Similarity + difference + evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds similarity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds difference + evidence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Both about animals; Text A is factual, Text B is a story — different purposes.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No evidence."
          ]
},
        },
        {
          id: "ela5-u3-comparing-texts-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'genre' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a topic"
                    },
                    {
                              "id": "b",
                              "text": "a category of text"
                    },
                    {
                              "id": "c",
                              "text": "a format"
                    },
                    {
                              "id": "d",
                              "text": "an author"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Category of text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Category of text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a category of text",
          "commonErrors": [
                    "Confuses with topic."
          ]
},
        },
        {
          id: "ela5-u3-comparing-texts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does comparing texts in different formats deepen your understanding of a topic?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparing",
                              "statement": "Effect on understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares formats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains effect.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Story shows emotions; article shows facts — together give complete picture.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No effect."
          ]
},
        },
        {
          id: "ela5-u3-comparing-texts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find differences."
                    },
                    {
                              "id": "b",
                              "text": "Find similarities."
                    },
                    {
                              "id": "c",
                              "text": "Written work."
                    },
                    {
                              "id": "d",
                              "text": "Subject."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Compare\" means Find similarities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means Find similarities.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Compare** = Find similarities.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-comparing-texts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Contrast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Written work."
                    },
                    {
                              "id": "b",
                              "text": "Subject."
                    },
                    {
                              "id": "c",
                              "text": "Point of view."
                    },
                    {
                              "id": "d",
                              "text": "Find differences."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Contrast\" means Find differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Contrast\" means Find differences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Contrast** = Find differences.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-comparing-texts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Subject."
                    },
                    {
                              "id": "b",
                              "text": "Written work."
                    },
                    {
                              "id": "c",
                              "text": "Point of view."
                    },
                    {
                              "id": "d",
                              "text": "Type of text."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text\" means Written work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text\" means Written work.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text** = Written work.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
