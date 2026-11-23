import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ela5-u4-lesson-4-1",
  code: "4-1",
  title: "Main Idea in Informational Text",
  goal: "I CAN determine the main idea of an informational text.",
  standards: ["RI.5.2"],
  vocabulary: [
    { term: "Main idea", definition: "Big point." },
    { term: "Informational", definition: "Teaches facts." },
    { term: "Topic", definition: "Subject." },
    { term: "Detail", definition: "Supporting fact." },
    { term: "Summary", definition: "Short version." },
    { term: "Central idea", definition: "What it's really about." },
    { term: "Key point", definition: "Important idea." },
    { term: "Evidence", definition: "Supporting details." },
  ],
  concepts: [
    {
      id: "ela5-u4-main-idea-informational",
      title: "Main idea in informational text",
      skill: "Find the main idea of non-fiction texts.",
      lesson: {
        sections: [
          {
            heading: "Big point",
            body: "The **main idea** is what the whole text is **about** — the **big point** the author wants you to understand.",
          },
          {
            heading: "Topic vs main idea",
            body: "**Topic** is just the subject (e.g., 'volcanoes'); **main idea** is what the author says about it (e.g., 'volcanoes can be dangerous').",
          },
        ],
        keyFormulas: [
          { name: "Main idea", statement: "Topic + what author says = main idea." },
        ],
        workedExample: {
          problem: "A text about how bees make honey. Topic? Main idea?",
          solution: "Topic: bees; Main idea: bees work together to produce honey.",
        },
      },
      questions: [
        {
          id: "ela5-u4-main-idea-informational-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'main idea' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "just the topic"
                    },
                    {
                              "id": "b",
                              "text": "what the author wants you to understand"
                    },
                    {
                              "id": "c",
                              "text": "a detail"
                    },
                    {
                              "id": "d",
                              "text": "the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "What author wants you to understand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "What author wants you to understand.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "what the author wants you to understand",
          "commonErrors": [
                    "Confuses with topic."
          ]
},
        },
        {
          id: "ela5-u4-main-idea-informational-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Topic' vs 'main idea' difference is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're the same"
                    },
                    {
                              "id": "b",
                              "text": "topic is subject; main idea is what author says about it"
                    },
                    {
                              "id": "c",
                              "text": "topic is longer"
                    },
                    {
                              "id": "d",
                              "text": "main idea is shorter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Topic = subject; Main idea = author's point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Topic = subject; Main idea = author's point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "topic is subject; main idea is what author says about it",
          "commonErrors": [
                    "Thinks they're the same."
          ]
},
        },
        {
          id: "ela5-u4-main-idea-informational-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read an informational text. State the topic and main idea, citing two supporting details.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Main idea",
                              "statement": "Topic + main idea + details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States topic + main idea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cites details.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Topic: [subject]; Main idea: [author's point]; Details: [supporting facts].**",
          "commonErrors": [
                    "Confuses topic/main idea.",
                    "No details."
          ]
},
        },
        {
          id: "ela5-u4-main-idea-informational-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find the main idea, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read only the first sentence"
                    },
                    {
                              "id": "b",
                              "text": "look at the whole text and ask what it's really about"
                    },
                    {
                              "id": "c",
                              "text": "read only the title"
                    },
                    {
                              "id": "d",
                              "text": "guess"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Look at whole text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Look at whole text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "look at the whole text and ask what it's really about",
          "commonErrors": [
                    "Only reads part."
          ]
},
        },
        {
          id: "ela5-u4-main-idea-informational-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how details support the main idea in an informational text.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Main idea",
                              "statement": "Details -> main idea."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies main idea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains detail connection.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Details provide evidence/examples that prove the main idea is true.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No connection."
          ]
},
        },
        {
          id: "ela5-u4-main-idea-informational-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Main idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "b",
                              "text": "Big point."
                    },
                    {
                              "id": "c",
                              "text": "Subject."
                    },
                    {
                              "id": "d",
                              "text": "Supporting fact."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Main idea\" means Big point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Main idea\" means Big point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main idea** = Big point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u4-main-idea-informational-q7",
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
                              "text": "Supporting fact."
                    },
                    {
                              "id": "c",
                              "text": "Short version."
                    },
                    {
                              "id": "d",
                              "text": "Teaches facts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Informational\" means Teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Informational\" means Teaches facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Informational** = Teaches facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u4-main-idea-informational-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supporting fact."
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
                              "text": "What it's really about."
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
