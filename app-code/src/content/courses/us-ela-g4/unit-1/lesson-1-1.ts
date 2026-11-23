import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ela4-u1-lesson-1-1",
  code: "1-1",
  title: "Referencing Key Details",
  goal: "I CAN answer questions using specific details from the text.",
  standards: ["RL.4.1"],
  vocabulary: [
    { term: "Reference", definition: "Point to the text." },
    { term: "Detail", definition: "Small fact." },
    { term: "Key detail", definition: "Important detail." },
    { term: "Evidence", definition: "Detail supporting answer." },
    { term: "Cite", definition: "Name where it says it." },
    { term: "Quote", definition: "Exact words from text." },
    { term: "Paragraph", definition: "Section of text." },
    { term: "Page", definition: "Where to find it." },
  ],
  concepts: [
    {
      id: "ela4-u1-referencing-details",
      title: "Referencing key details",
      skill: "Answer questions using specific details and cite where they appear.",
      lesson: {
        sections: [
          {
            heading: "Point to the text",
            body: "When you answer, **cite** the detail: 'Sam was worried **because** the story says he bit his nails.' Naming the **page or paragraph** shows exactly where.",
          },
          {
            heading: "Why it matters",
            body: "Citing details proves your answer is from the text, not a guess.",
          },
        ],
        keyFormulas: [
          { name: "Cite", statement: "Answer + where it says it = strong evidence." },
        ],
        workedExample: {
          problem: "Question: 'Why was Mia late?' Story says 'Mia missed the bus and had to walk.'",
          solution: "Mia was late **because she missed the bus** — that's in the second paragraph.",
        },
      },
      questions: [
        {
          id: "ela4-u1-referencing-details-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Citing evidence' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guessing"
                    },
                    {
                              "id": "b",
                              "text": "naming where the text says it"
                    },
                    {
                              "id": "c",
                              "text": "ignoring the text"
                    },
                    {
                              "id": "d",
                              "text": "using a picture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Cite = name where it says it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cite = name where it says it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**naming where the text says it**",
          "commonErrors": [
                    "Thinks citing is guessing."
          ]
},
        },
        {
          id: "ela4-u1-referencing-details-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A strong answer includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only your opinion"
                    },
                    {
                              "id": "b",
                              "text": "details from the text with location"
                    },
                    {
                              "id": "c",
                              "text": "no details"
                    },
                    {
                              "id": "d",
                              "text": "just the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Details + location = strong answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Details + location = strong answer.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**details from the text with location**",
          "commonErrors": [
                    "Omits evidence."
          ]
},
        },
        {
          id: "ela4-u1-referencing-details-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a paragraph. Answer one question and cite the exact detail that proves it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cite evidence",
                              "statement": "Answer + cited detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Answers with cited detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Q: Why? A: Because she was late (p.2 says missed bus).'**",
          "commonErrors": [
                    "No citation.",
                    "Not from text."
          ]
},
        },
        {
          id: "ela4-u1-referencing-details-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'key detail' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any word"
                    },
                    {
                              "id": "b",
                              "text": "an important detail that helps understanding"
                    },
                    {
                              "id": "c",
                              "text": "the title"
                    },
                    {
                              "id": "d",
                              "text": "a picture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Key detail = important."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key detail = important.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**important detail**",
          "commonErrors": [
                    "Thinks any word qualifies."
          ]
},
        },
        {
          id: "ela4-u1-referencing-details-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read two paragraphs. For each, find one detail and explain how it supports the main idea.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cite evidence",
                              "statement": "Two details + how they support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds two details.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains how they support.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Detail: she cried (sadness); Detail: she hid (fear); both show the storm scared her.'**",
          "commonErrors": [
                    "Only one detail.",
                    "No connection."
          ]
},
        },
        {
          id: "ela4-u1-referencing-details-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reference\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small fact."
                    },
                    {
                              "id": "b",
                              "text": "Point to the text."
                    },
                    {
                              "id": "c",
                              "text": "Important detail."
                    },
                    {
                              "id": "d",
                              "text": "Detail supporting answer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reference\" means Point to the text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reference\" means Point to the text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reference** = Point to the text.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-referencing-details-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Important detail."
                    },
                    {
                              "id": "b",
                              "text": "Detail supporting answer."
                    },
                    {
                              "id": "c",
                              "text": "Name where it says it."
                    },
                    {
                              "id": "d",
                              "text": "Small fact."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Detail\" means Small fact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Detail\" means Small fact.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Detail** = Small fact.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-referencing-details-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Key detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Detail supporting answer."
                    },
                    {
                              "id": "b",
                              "text": "Important detail."
                    },
                    {
                              "id": "c",
                              "text": "Name where it says it."
                    },
                    {
                              "id": "d",
                              "text": "Exact words from text."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
