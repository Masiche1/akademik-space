import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "ela6-u1-lesson-1-4",
  code: "1-4",
  title: "Comparing Themes",
  goal: "I CAN compare themes across two texts.",
  standards: ["RL.6.9"],
  vocabulary: [
    { term: "Compare", definition: "Find similarities." },
    { term: "Contrast", definition: "Find differences." },
    { term: "Theme", definition: "Lesson." },
    { term: "Similar", definition: "Alike." },
    { term: "Different", definition: "Unlike." },
    { term: "Both", definition: "Two texts." },
    { term: "Text A", definition: "First text." },
    { term: "Text B", definition: "Second text." },
  ],
  concepts: [
    {
      id: "ela6-u1-comparing-themes",
      title: "Comparing themes",
      skill: "Compare and contrast themes across two different texts.",
      lesson: {
        sections: [
          {
            heading: "Same theme?",
            body: "Two stories can have the **same theme** (both about friendship) or **different themes** (one about courage, one about honesty).",
          },
          {
            heading: "How to compare",
            body: "Identify each theme, then note **similarities** and **differences** in how they are explored.",
          },
        ],
        keyFormulas: [
          { name: "Compare themes", statement: "Same or different? How are they explored?" },
        ],
        workedExample: {
          problem: "Story A is about a girl who learns to share. Story B is about a boy who learns to apologize. Compare their themes.",
          solution: "**Both about relationships/growth, but different lessons: sharing vs apologizing.**",
        },
      },
      questions: [
        {
          id: "ela6-u1-comparing-themes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When comparing themes, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only read one text"
                    },
                    {
                              "id": "b",
                              "text": "identify each theme then compare"
                    },
                    {
                              "id": "c",
                              "text": "count pages"
                    },
                    {
                              "id": "d",
                              "text": "look at covers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Identify then compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify then compare.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "identify each theme then compare",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "ela6-u1-comparing-themes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two stories can have...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only same theme"
                    },
                    {
                              "id": "b",
                              "text": "same or different themes"
                    },
                    {
                              "id": "c",
                              "text": "no themes"
                    },
                    {
                              "id": "d",
                              "text": "only different themes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Same or different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same or different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "same or different themes",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u1-comparing-themes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare the themes of these two stories: 'The Tortoise and the Hare' (slow and steady wins) and 'The Lion and the Mouse' (even small creatures can help big ones).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparing",
                              "statement": "Underestimated ≠ unimportant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies both themes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Both about underestimated characters succeeding: Tortoise wins by persistence; Mouse helps Lion by kindness.**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only one theme."
          ]
},
        },
        {
          id: "ela6-u1-comparing-themes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Contrast' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "find similarities"
                    },
                    {
                              "id": "b",
                              "text": "find differences"
                    },
                    {
                              "id": "c",
                              "text": "summarize"
                    },
                    {
                              "id": "d",
                              "text": "predict"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Find differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Find differences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "find differences",
          "commonErrors": [
                    "Confuses with compare."
          ]
},
        },
        {
          id: "ela6-u1-comparing-themes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the themes of two stories and explain how each theme is developed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparing",
                              "statement": "Comparison + development."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares themes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains development.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Both about perseverance; Story A develops through repeated failures; Story B through gradual improvement.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No development."
          ]
},
        },
        {
          id: "ela6-u1-comparing-themes-q6",
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
                              "text": "Lesson."
                    },
                    {
                              "id": "d",
                              "text": "Alike."
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
          id: "ela6-u1-comparing-themes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Contrast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lesson."
                    },
                    {
                              "id": "b",
                              "text": "Alike."
                    },
                    {
                              "id": "c",
                              "text": "Unlike."
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
          id: "ela6-u1-comparing-themes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Alike."
                    },
                    {
                              "id": "b",
                              "text": "Lesson."
                    },
                    {
                              "id": "c",
                              "text": "Unlike."
                    },
                    {
                              "id": "d",
                              "text": "Two texts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Theme\" means Lesson."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Theme\" means Lesson.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Theme** = Lesson.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
