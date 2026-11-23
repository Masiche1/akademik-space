import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "ela6-u4-lesson-4-4",
  code: "4-4",
  title: "Author's Purpose",
  goal: "I CAN determine an author's purpose in an informational text.",
  standards: ["RI.6.6"],
  vocabulary: [
    { term: "Author's purpose", definition: "Why written." },
    { term: "Inform", definition: "Teach facts." },
    { term: "Explain", definition: "Make clear." },
    { term: "Describe", definition: "Give details." },
    { term: "Persuade", definition: "Convince." },
    { term: "Entertain", definition: "Amuse." },
    { term: "Audience", definition: "Who it's for." },
    { term: "Tone", definition: "Author's attitude." },
  ],
  concepts: [
    {
      id: "ela6-u4-author-purpose-informational",
      title: "Author's purpose",
      skill: "Determine why an author wrote an informational text and who it's for.",
      lesson: {
        sections: [
          {
            heading: "Why written?",
            body: "Authors write to **inform** (teach facts), **explain** (make clear), **describe** (give details), **persuade** (convince), or **entertain** (amuse).",
          },
          {
            heading: "Audience",
            body: "Consider **who** the text is for — students, experts, general public? This affects language and depth.",
          },
        ],
        keyFormulas: [
          { name: "Author's purpose", statement: "Inform, explain, describe, persuade, or entertain." },
        ],
        workedExample: {
          problem: "A textbook chapter explains how photosynthesis works with diagrams and examples. What is the author's purpose?",
          solution: "**To inform/explain** — teach students how photosynthesis works.",
        },
      },
      questions: [
        {
          id: "ela6-u4-author-purpose-informational-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An author's purpose can be to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only entertain"
                    },
                    {
                              "id": "b",
                              "text": "inform, explain, describe, persuade, or entertain"
                    },
                    {
                              "id": "c",
                              "text": "only inform"
                    },
                    {
                              "id": "d",
                              "text": "only persuade"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Multiple purposes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiple purposes.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "inform, explain, describe, persuade, or entertain",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u4-author-purpose-informational-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Audience' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the author"
                    },
                    {
                              "id": "b",
                              "text": "who the text is written for"
                    },
                    {
                              "id": "c",
                              "text": "the characters"
                    },
                    {
                              "id": "d",
                              "text": "the setting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Who it's for."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Who it's for.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "who the text is written for",
          "commonErrors": [
                    "Confuses with author."
          ]
},
        },
        {
          id: "ela6-u4-author-purpose-informational-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A news article describes a new scientific discovery with technical details and expert quotes. What is the author's purpose and likely audience?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Purpose",
                              "statement": "Inform + expert audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies purpose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies audience.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Purpose: inform about discovery; Audience: scientifically literate readers interested in research.**",
          "commonErrors": [
                    "Wrong purpose.",
                    "Wrong audience."
          ]
},
        },
        {
          id: "ela6-u4-author-purpose-informational-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Tone' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the volume"
                    },
                    {
                              "id": "b",
                              "text": "the author's attitude toward the topic"
                    },
                    {
                              "id": "c",
                              "text": "the length"
                    },
                    {
                              "id": "d",
                              "text": "the format"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Author's attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Author's attitude.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the author's attitude toward the topic",
          "commonErrors": [
                    "Confuses with style."
          ]
},
        },
        {
          id: "ela6-u4-author-purpose-informational-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Determine the author's purpose and explain how the text's features support that purpose.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Purpose",
                              "statement": "Purpose + features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Determines purpose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains features.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Purpose: persuade; Features: statistics, emotional language, call to action.'**",
          "commonErrors": [
                    "Cannot determine.",
                    "No features explained."
          ]
},
        },
        {
          id: "ela6-u4-author-purpose-informational-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Author's purpose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Teach facts."
                    },
                    {
                              "id": "b",
                              "text": "Why written."
                    },
                    {
                              "id": "c",
                              "text": "Make clear."
                    },
                    {
                              "id": "d",
                              "text": "Give details."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Author's purpose\" means Why written."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Author's purpose\" means Why written.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Author's purpose** = Why written.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u4-author-purpose-informational-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inform\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make clear."
                    },
                    {
                              "id": "b",
                              "text": "Give details."
                    },
                    {
                              "id": "c",
                              "text": "Convince."
                    },
                    {
                              "id": "d",
                              "text": "Teach facts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Inform\" means Teach facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inform\" means Teach facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Inform** = Teach facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u4-author-purpose-informational-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Explain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Give details."
                    },
                    {
                              "id": "b",
                              "text": "Make clear."
                    },
                    {
                              "id": "c",
                              "text": "Convince."
                    },
                    {
                              "id": "d",
                              "text": "Amuse."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Explain\" means Make clear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Explain\" means Make clear.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Explain** = Make clear.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
