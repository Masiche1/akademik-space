import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "ela5-u1-lesson-1-4",
  code: "1-4",
  title: "Comparing Characters",
  goal: "I CAN compare and contrast characters across texts.",
  standards: ["RL.5.9"],
  vocabulary: [
    { term: "Compare", definition: "Find similarities." },
    { term: "Contrast", definition: "Find differences." },
    { term: "Character", definition: "Person in story." },
    { term: "Trait", definition: "Quality of character." },
    { term: "Across texts", definition: "In different stories." },
    { term: "Similar", definition: "Alike." },
    { term: "Different", definition: "Not alike." },
    { term: "Evidence", definition: "Supporting details." },
  ],
  concepts: [
    {
      id: "ela5-u1-comparing-characters",
      title: "Comparing characters",
      skill: "Compare and contrast characters from different texts.",
      lesson: {
        sections: [
          {
            heading: "Same and different",
            body: "**Comparing** means finding **similarities**; **contrasting** means finding **differences**. You can do both at once.",
          },
          {
            heading: "Across texts",
            body: "When comparing characters from **different stories**, look at their **traits** (brave, kind, selfish) and **how they act** in similar situations.",
          },
        ],
        keyFormulas: [
          { name: "Compare/contrast", statement: "Similarities + differences = comparison." },
        ],
        workedExample: {
          problem: "Compare a brave hero in one story to a fearful character in another.",
          solution: "Both face danger, but one acts bravely while the other runs away — different responses to fear.",
        },
      },
      questions: [
        {
          id: "ela5-u1-comparing-characters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Comparing' characters means finding...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only differences"
                    },
                    {
                              "id": "b",
                              "text": "similarities and differences"
                    },
                    {
                              "id": "c",
                              "text": "only similarities"
                    },
                    {
                              "id": "d",
                              "text": "the plot"
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
          id: "ela5-u1-comparing-characters-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When comparing characters across texts, you should look at...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only their names"
                    },
                    {
                              "id": "b",
                              "text": "their traits and how they act"
                    },
                    {
                              "id": "c",
                              "text": "only the settings"
                    },
                    {
                              "id": "d",
                              "text": "only the endings"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Traits and actions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traits and actions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "their traits and how they act",
          "commonErrors": [
                    "Looks at wrong things."
          ]
},
        },
        {
          id: "ela5-u1-comparing-characters-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare two characters from different stories. State one similarity and one difference with evidence.",
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
          "finalAnswer": "**Similarity: both are students. Difference: one is brave, one is fearful (evidence: actions).**",
          "commonErrors": [
                    "Cannot compare.",
                    "No evidence."
          ]
},
        },
        {
          id: "ela5-u1-comparing-characters-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'trait' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a name"
                    },
                    {
                              "id": "b",
                              "text": "a quality of a character"
                    },
                    {
                              "id": "c",
                              "text": "a setting"
                    },
                    {
                              "id": "d",
                              "text": "a plot point"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Quality of character."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quality of character.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a quality of a character",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela5-u1-comparing-characters-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare how two characters respond to a challenge. How are their responses similar or different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparing",
                              "statement": "Comparison of responses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes both responses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares them.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Both face a problem; one solves it with help, the other solves it alone — different strategies.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No responses."
          ]
},
        },
        {
          id: "ela5-u1-comparing-characters-q6",
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
                              "text": "Person in story."
                    },
                    {
                              "id": "d",
                              "text": "Quality of character."
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
          id: "ela5-u1-comparing-characters-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Contrast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person in story."
                    },
                    {
                              "id": "b",
                              "text": "Quality of character."
                    },
                    {
                              "id": "c",
                              "text": "In different stories."
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
          id: "ela5-u1-comparing-characters-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quality of character."
                    },
                    {
                              "id": "b",
                              "text": "Person in story."
                    },
                    {
                              "id": "c",
                              "text": "In different stories."
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
                              "statement": "\"Character\" means Person in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
