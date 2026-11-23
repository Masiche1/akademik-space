import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ela3-u3-lesson-3-2",
  code: "3-2",
  title: "Main Idea and Key Details",
  goal: "I CAN identify the main idea and key details.",
  standards: ["RI.3.2"],
  vocabulary: [
    { term: "Main idea", definition: "What it's mostly about." },
    { term: "Key detail", definition: "Important detail." },
    { term: "Title", definition: "Name of text." },
    { term: "Topic", definition: "The subject." },
    { term: "Support", definition: "Details backing idea." },
    { term: "Mostly", definition: "For the most part." },
    { term: "Central", definition: "Main/most important." },
    { term: "Focus", definition: "Main point." },
  ],
  concepts: [
    {
      id: "ela3-u3-main-idea",
      title: "Main idea and key details",
      skill: "Identify what an informational text is mostly about and find key details.",
      lesson: {
        sections: [
          {
            heading: "What is it about?",
            body: "The **main idea** is what the text is **mostly about**. A text about bees is mostly about bees.",
          },
          {
            heading: "Title helps",
            body: "The **title** often tells us the topic. 'All About Dinosaurs' is mostly about dinosaurs. **Key details** support the main idea.",
          },
        ],
        keyFormulas: [
          { name: "Main idea", statement: "What text is mostly about; title reveals it; details support." },
        ],
        workedExample: {
          problem: "Text titled 'Why the Sky Is Blue' — main idea?",
          solution: "**Why the sky is blue** — that's what it's mostly about.",
        },
      },
      questions: [
        {
          id: "ela3-u3-main-idea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'main idea' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a small detail"
                    },
                    {
                              "id": "b",
                              "text": "what the text is mostly about"
                    },
                    {
                              "id": "c",
                              "text": "a picture"
                    },
                    {
                              "id": "d",
                              "text": "the author"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Main idea = mostly about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Main idea = mostly about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**mostly about**",
          "commonErrors": [
                    "Confuses with detail."
          ]
},
        },
        {
          id: "ela3-u3-main-idea-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Title 'All About Frogs' tells us topic is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "birds"
                    },
                    {
                              "id": "b",
                              "text": "frogs"
                    },
                    {
                              "id": "c",
                              "text": "insects"
                    },
                    {
                              "id": "d",
                              "text": "water"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Title reveals topic = frogs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Title reveals topic = frogs.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**frogs**",
          "commonErrors": [
                    "Picks wrong topic."
          ]
},
        },
        {
          id: "ela3-u3-main-idea-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read an informational text. What is the main idea? Name two key details that support it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Main idea",
                              "statement": "Idea + supporting details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names idea.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names 2 details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Idea: rain; details: clouds make rain, rain waters plants.'**",
          "commonErrors": [
                    "Wrong idea.",
                    "No details."
          ]
},
        },
        {
          id: "ela3-u3-main-idea-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Key details 'support' the main idea by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "changing it"
                    },
                    {
                              "id": "b",
                              "text": "giving more information"
                    },
                    {
                              "id": "c",
                              "text": "contradicting it"
                    },
                    {
                              "id": "d",
                              "text": "ignoring it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Details support with more info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Details support with more info.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**more information**",
          "commonErrors": [
                    "Thinks details change idea."
          ]
},
        },
        {
          id: "ela3-u3-main-idea-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Identify the main idea and explain how two details support it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Main idea",
                              "statement": "Idea + supporting details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names idea.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains how details support.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Idea: rain; detail1: clouds make rain, detail2: rain waters plants.'**",
          "commonErrors": [
                    "Wrong idea.",
                    "No support."
          ]
},
        },
        {
          id: "ela3-u3-main-idea-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Main idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Important detail."
                    },
                    {
                              "id": "b",
                              "text": "What it's mostly about."
                    },
                    {
                              "id": "c",
                              "text": "Name of text."
                    },
                    {
                              "id": "d",
                              "text": "The subject."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Main idea\" means What it's mostly about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Main idea\" means What it's mostly about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main idea** = What it's mostly about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u3-main-idea-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Key detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Name of text."
                    },
                    {
                              "id": "b",
                              "text": "The subject."
                    },
                    {
                              "id": "c",
                              "text": "Details backing idea."
                    },
                    {
                              "id": "d",
                              "text": "Important detail."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Key detail\" means Important detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Key detail\" means Important detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Key detail** = Important detail.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u3-main-idea-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Title\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The subject."
                    },
                    {
                              "id": "b",
                              "text": "Name of text."
                    },
                    {
                              "id": "c",
                              "text": "Details backing idea."
                    },
                    {
                              "id": "d",
                              "text": "For the most part."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Title\" means Name of text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Title\" means Name of text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Title** = Name of text.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
