import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ela6-u4-lesson-4-1",
  code: "4-1",
  title: "Main Idea in Informational Text",
  goal: "I CAN determine the main idea of an informational text.",
  standards: ["RI.6.2"],
  vocabulary: [
    { term: "Main idea", definition: "Central point." },
    { term: "Informational", definition: "Facts/text." },
    { term: "Topic", definition: "Subject." },
    { term: "Details", definition: "Supporting facts." },
    { term: "Summary", definition: "Short version." },
    { term: "Key details", definition: "Most important." },
    { term: "Structure", definition: "Organization." },
    { term: "Author's purpose", definition: "Why written." },
  ],
  concepts: [
    {
      id: "ela6-u4-main-idea-informational",
      title: "Main idea in informational text",
      skill: "Determine the main idea of an informational text and explain how details support it.",
      lesson: {
        sections: [
          {
            heading: "Facts vs stories",
            body: "**Informational text** presents facts, not fiction. The **main idea** is the central point the author wants us to understand.",
          },
          {
            heading: "Details",
            body: "**Key details** support the main idea. Ask: What is the text mostly about? What do all the details have in common?",
          },
        ],
        keyFormulas: [
          { name: "Main idea", statement: "Central point supported by key details." },
        ],
        workedExample: {
          problem: "A text explains how volcanoes form, what causes eruptions, and how they affect the environment. What is the main idea?",
          solution: "**Volcanoes are powerful natural phenomena with significant effects.**",
        },
      },
      questions: [
        {
          id: "ela6-u4-main-idea-informational-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Main idea' in informational text is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a detail"
                    },
                    {
                              "id": "b",
                              "text": "the central point"
                    },
                    {
                              "id": "c",
                              "text": "the title"
                    },
                    {
                              "id": "d",
                              "text": "a quote"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Central point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Central point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the central point",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u4-main-idea-informational-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Informational text differs from fiction because it...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "has characters"
                    },
                    {
                              "id": "b",
                              "text": "presents facts and information"
                    },
                    {
                              "id": "c",
                              "text": "has a plot"
                    },
                    {
                              "id": "d",
                              "text": "is made up"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Presents facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Presents facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "presents facts and information",
          "commonErrors": [
                    "Confuses with fiction."
          ]
},
        },
        {
          id: "ela6-u4-main-idea-informational-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read this summary: 'The article explains how the water cycle works, why it's important for life, and how human activities affect it.' What is the main idea?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Main idea",
                              "statement": "Water cycle importance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies main idea.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**The water cycle is essential for life on Earth and can be affected by human activities.**",
          "commonErrors": [
                    "Wrong idea.",
                    "Cannot identify."
          ]
},
        },
        {
          id: "ela6-u4-main-idea-informational-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Key details' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all details"
                    },
                    {
                              "id": "b",
                              "text": "the most important supporting facts"
                    },
                    {
                              "id": "c",
                              "text": "only the title"
                    },
                    {
                              "id": "d",
                              "text": "only the first paragraph"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Most important facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Most important facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the most important supporting facts",
          "commonErrors": [
                    "Too broad."
          ]
},
        },
        {
          id: "ela6-u4-main-idea-informational-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "State the main idea of an informational text and cite two key details that support it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Main idea",
                              "statement": "Idea + details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States main idea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cites details.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Main idea: Exercise benefits health; Details: strengthens heart, improves mood, reduces stress.'**",
          "commonErrors": [
                    "Cannot state.",
                    "No details cited."
          ]
},
        },
        {
          id: "ela6-u4-main-idea-informational-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Main idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Facts/text."
                    },
                    {
                              "id": "b",
                              "text": "Central point."
                    },
                    {
                              "id": "c",
                              "text": "Subject."
                    },
                    {
                              "id": "d",
                              "text": "Supporting facts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Main idea\" means Central point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Main idea\" means Central point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main idea** = Central point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u4-main-idea-informational-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Subject."
                    },
                    {
                              "id": "b",
                              "text": "Supporting facts."
                    },
                    {
                              "id": "c",
                              "text": "Short version."
                    },
                    {
                              "id": "d",
                              "text": "Facts/text."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Informational\" means Facts/text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Informational\" means Facts/text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Informational** = Facts/text.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u4-main-idea-informational-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supporting facts."
                    },
                    {
                              "id": "b",
                              "text": "Subject."
                    },
                    {
                              "id": "c",
                              "text": "Short version."
                    },
                    {
                              "id": "d",
                              "text": "Most important."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Topic\" means Subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Topic\" means Subject.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Topic** = Subject.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
