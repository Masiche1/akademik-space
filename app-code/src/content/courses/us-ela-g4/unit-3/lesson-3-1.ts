import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ela4-u3-lesson-3-1",
  code: "3-1",
  title: "Text-to-Self Connections",
  goal: "I CAN make connections between the text and my own life.",
  standards: ["RL.4.3"],
  vocabulary: [
    { term: "Connection", definition: "Link between text and life." },
    { term: "Text-to-self", definition: "Story to my life." },
    { term: "Text-to-text", definition: "Story to another story." },
    { term: "Text-to-world", definition: "Story to real world." },
    { term: "Relate", definition: "See similarities." },
    { term: "Experience", definition: "Something I lived." },
    { term: "Feeling", definition: "Emotion I felt." },
    { term: "Similar", definition: "Alike." },
  ],
  concepts: [
    {
      id: "ela4-u3-text-to-self",
      title: "Text-to-self connections",
      skill: "Make connections between the text and personal experiences.",
      lesson: {
        sections: [
          {
            heading: "Three types",
            body: "**Text-to-self** (story to my life), **text-to-text** (story to another story), **text-to-world** (story to real world). All help us understand deeper.",
          },
          {
            heading: "Example",
            body: "'The character was nervous about the test — **I** felt that way too' = text-to-self connection.",
          },
        ],
        keyFormulas: [
          { name: "Connections", statement: "Text-to-self + text-to-text + text-to-world = deeper understanding." },
        ],
        workedExample: {
          problem: "Story: character moves to a new school. Your connection?",
          solution: "'I moved once and felt scared at first, but made friends' = text-to-self.",
        },
      },
      questions: [
        {
          id: "ela4-u3-text-to-self-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'text-to-self connection' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "story to another story"
                    },
                    {
                              "id": "b",
                              "text": "story to your own life"
                    },
                    {
                              "id": "c",
                              "text": "story to real world"
                    },
                    {
                              "id": "d",
                              "text": "story to fiction"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Text-to-self = story to your life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Text-to-self = story to your life.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**story to your own life**",
          "commonErrors": [
                    "Confuses connection types."
          ]
},
        },
        {
          id: "ela4-u3-text-to-self-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Making connections helps because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's required"
                    },
                    {
                              "id": "b",
                              "text": "it makes the story more meaningful"
                    },
                    {
                              "id": "c",
                              "text": "it's faster"
                    },
                    {
                              "id": "d",
                              "text": "it's easier"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Connections = deeper meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Connections = deeper meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**it makes the story more meaningful**",
          "commonErrors": [
                    "Thinks it's just a task."
          ]
},
        },
        {
          id: "ela4-u3-text-to-self-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read a story. Make one text-to-self connection and explain how it helps you understand the character.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Connection",
                              "statement": "Connection + how it helps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Makes connection.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains help.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Character was scared; I was scared on first day of school; now I understand her fear.'**",
          "commonErrors": [
                    "No connection.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela4-u3-text-to-self-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Text-to-text' connection is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "story to your life"
                    },
                    {
                              "id": "b",
                              "text": "story to another story"
                    },
                    {
                              "id": "c",
                              "text": "story to real world"
                    },
                    {
                              "id": "d",
                              "text": "story to movie"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Text-to-text = story to story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Text-to-text = story to story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**story to another story**",
          "commonErrors": [
                    "Confuses connection types."
          ]
},
        },
        {
          id: "ela4-u3-text-to-self-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Make one text-to-self and one text-to-world connection for a story. How do they differ?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Connection",
                              "statement": "Two connections + difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Makes both connections.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Self: I was nervous; World: many kids start new schools; self=personal, world=general.'**",
          "commonErrors": [
                    "One connection only.",
                    "No difference."
          ]
},
        },
        {
          id: "ela4-u3-text-to-self-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Connection\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story to my life."
                    },
                    {
                              "id": "b",
                              "text": "Link between text and life."
                    },
                    {
                              "id": "c",
                              "text": "Story to another story."
                    },
                    {
                              "id": "d",
                              "text": "Story to real world."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Connection\" means Link between text and life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Connection\" means Link between text and life.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Connection** = Link between text and life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-text-to-self-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text-to-self\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story to another story."
                    },
                    {
                              "id": "b",
                              "text": "Story to real world."
                    },
                    {
                              "id": "c",
                              "text": "See similarities."
                    },
                    {
                              "id": "d",
                              "text": "Story to my life."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text-to-self\" means Story to my life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text-to-self\" means Story to my life.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text-to-self** = Story to my life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-text-to-self-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text-to-text\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story to real world."
                    },
                    {
                              "id": "b",
                              "text": "Story to another story."
                    },
                    {
                              "id": "c",
                              "text": "See similarities."
                    },
                    {
                              "id": "d",
                              "text": "Something I lived."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text-to-text\" means Story to another story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text-to-text\" means Story to another story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text-to-text** = Story to another story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
