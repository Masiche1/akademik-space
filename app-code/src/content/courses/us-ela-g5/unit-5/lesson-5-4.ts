import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "ela5-u5-lesson-5-4",
  code: "5-4",
  title: "Research and Note-Taking",
  goal: "I CAN gather information from sources and take notes.",
  standards: ["W.5.7", "W.5.8"],
  vocabulary: [
    { term: "Research", definition: "Find information." },
    { term: "Source", definition: "Where info comes from." },
    { term: "Note", definition: "Key point written down." },
    { term: "Reliable", definition: "Trustworthy." },
    { term: "Cite", definition: "Credit source." },
    { term: "Paraphrase", definition: "Restate in own words." },
    { term: "Quote", definition: "Exact words." },
    { term: "Organize", definition: "Arrange notes." },
  ],
  concepts: [
    {
      id: "ela5-u5-research-writing",
      title: "Research and Note-Taking",
      skill: "Gather information from reliable sources and organize notes.",
      lesson: {
        sections: [
          {
            heading: "Research",
            body: "Find + evaluate sources.",
          },
          {
            heading: "Notes",
            body: "Key points + citations.",
          },
        ],
        keyFormulas: [
          { name: "Research", statement: "Sources + notes + citations = research skills" },
        ],
        workedExample: {
          problem: "Research a topic: find two reliable sources, take notes, and cite them.",
          solution: "Sources: encyclopedia + science site. Notes: key facts with source names.",
        },
      },
      questions: [
        {
          id: "ela5-u5-research-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A reliable source is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any website"
                    },
                    {
                              "id": "b",
                              "text": "a trustworthy, accurate source"
                    },
                    {
                              "id": "c",
                              "text": "the longest"
                    },
                    {
                              "id": "d",
                              "text": "the newest"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Trustworthy/accurate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trustworthy/accurate.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a trustworthy, accurate source",
          "commonErrors": [
                    "Thinks any source works."
          ]
},
        },
        {
          id: "ela5-u5-research-writing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When taking notes, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "copy everything"
                    },
                    {
                              "id": "b",
                              "text": "write key points and cite the source"
                    },
                    {
                              "id": "c",
                              "text": "only write quotes"
                    },
                    {
                              "id": "d",
                              "text": "write in full sentences only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Key points + citations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key points + citations.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "write key points and cite the source",
          "commonErrors": [
                    "Copies everything."
          ]
},
        },
        {
          id: "ela5-u5-research-writing-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Research a topic: find one reliable source, write two notes with the source cited, and paraphrase one fact.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research",
                              "statement": "Source + notes + paraphrase."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds source.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Takes notes + paraphrases.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Source: [name]; Notes: [fact 1, fact 2 with source]; Paraphrase: [own words].**",
          "commonErrors": [
                    "Cannot research.",
                    "Missing citations."
          ]
},
        },
        {
          id: "ela5-u5-research-writing-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To cite a source means to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ignore it"
                    },
                    {
                              "id": "b",
                              "text": "give credit to where information came from"
                    },
                    {
                              "id": "c",
                              "text": "copy it"
                    },
                    {
                              "id": "d",
                              "text": "hide it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Give credit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Give credit.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "give credit to where information came from",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "ela5-u5-research-writing-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between quoting and paraphrasing. When would you use each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research",
                              "statement": "Difference + when to use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Says when to use each.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Quote: exact words (for important statements); Paraphrase: own words (for most info).**",
          "commonErrors": [
                    "Cannot explain.",
                    "No when-to-use."
          ]
},
        },
        {
          id: "ela5-u5-research-writing-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Research\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where info comes from."
                    },
                    {
                              "id": "b",
                              "text": "Find information."
                    },
                    {
                              "id": "c",
                              "text": "Key point written down."
                    },
                    {
                              "id": "d",
                              "text": "Trustworthy."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Research\" means Find information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Research\" means Find information.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Research** = Find information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u5-research-writing-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Source\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Key point written down."
                    },
                    {
                              "id": "b",
                              "text": "Trustworthy."
                    },
                    {
                              "id": "c",
                              "text": "Credit source."
                    },
                    {
                              "id": "d",
                              "text": "Where info comes from."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Source\" means Where info comes from."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Source\" means Where info comes from.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Source** = Where info comes from.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u5-research-writing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Note\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Trustworthy."
                    },
                    {
                              "id": "b",
                              "text": "Key point written down."
                    },
                    {
                              "id": "c",
                              "text": "Credit source."
                    },
                    {
                              "id": "d",
                              "text": "Restate in own words."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Note\" means Key point written down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Note\" means Key point written down.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Note** = Key point written down.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
