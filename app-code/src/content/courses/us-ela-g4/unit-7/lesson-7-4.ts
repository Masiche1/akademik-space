import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "ela4-u7-lesson-7-4",
  code: "7-4",
  title: "Informative Conclusions",
  goal: "I CAN write conclusions that summarize key information.",
  standards: ["W.4.2d"],
  vocabulary: [
    { term: "Conclusion", definition: "End of informative." },
    { term: "Summarize", definition: "Short version." },
    { term: "Key information", definition: "Important facts." },
    { term: "Restate", definition: "Say again." },
    { term: "Review", definition: "Go over." },
    { term: "Final thought", definition: "Last idea." },
    { term: "Wrap up", definition: "Finish." },
    { term: "Closure", definition: "Sense of ending." },
  ],
  concepts: [
    {
      id: "ela4-u7-informative-conclusions",
      title: "Informative conclusions",
      skill: "Write conclusions that summarize the key information without adding new content.",
      lesson: {
        sections: [
          {
            heading: "End informatively",
            body: "The **conclusion** **summarizes** the **key information** — it reviews what was learned without adding new facts. It can end with a **final thought** or connection.",
          },
          {
            heading: "Example",
            body: "'In conclusion, dolphins are intelligent, social mammals that communicate through complex sounds. Understanding them helps us protect ocean life.'",
          },
        ],
        keyFormulas: [
          { name: "Conclusion", statement: "Summarize key info + final thought = informative ending." },
        ],
        workedExample: {
          problem: "Write a conclusion for a report on volcanoes.",
          solution: "'In conclusion, volcanoes form when magma rises to Earth's surface. They can create new land but also cause destruction. Studying them helps us prepare for eruptions.'",
        },
      },
      questions: [
        {
          id: "ela4-u7-informative-conclusions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An informative conclusion should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add new facts"
                    },
                    {
                              "id": "b",
                              "text": "summarize key information"
                    },
                    {
                              "id": "c",
                              "text": "ask questions"
                    },
                    {
                              "id": "d",
                              "text": "tell a story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Summarize key info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Summarize key info.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**summarize key information**",
          "commonErrors": [
                    "Adds new content."
          ]
},
        },
        {
          id: "ela4-u7-informative-conclusions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'In conclusion' signals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the beginning"
                    },
                    {
                              "id": "b",
                              "text": "the end"
                    },
                    {
                              "id": "c",
                              "text": "a new topic"
                    },
                    {
                              "id": "d",
                              "text": "a question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Signals the end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Signals the end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the end**",
          "commonErrors": [
                    "Wrong signal."
          ]
},
        },
        {
          id: "ela4-u7-informative-conclusions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a 2-sentence conclusion that summarizes the main points of your informative piece.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conclusion",
                              "statement": "Summarize + final thought."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes complete conclusion.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'In conclusion, bees are essential pollinators. Protecting them protects our food supply.'**",
          "commonErrors": [
                    "New facts.",
                    "No summary."
          ]
},
        },
        {
          id: "ela4-u7-informative-conclusions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Informative conclusions should NOT...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "summarize"
                    },
                    {
                              "id": "b",
                              "text": "add new information"
                    },
                    {
                              "id": "c",
                              "text": "end clearly"
                    },
                    {
                              "id": "d",
                              "text": "connect ideas"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Shouldn't add new info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shouldn't add new info.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**add new information**",
          "commonErrors": [
                    "Adds new content."
          ]
},
        },
        {
          id: "ela4-u7-informative-conclusions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write two different conclusions for the same informative piece. Which summarizes better? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conclusion",
                              "statement": "Two conclusions + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes two conclusions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Argues better summary.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Weak: 'That's all.' Strong: 'In conclusion, X, Y, Z — key points reviewed.'**",
          "commonErrors": [
                    "One conclusion only.",
                    "No argument."
          ]
},
        },
        {
          id: "ela4-u7-informative-conclusions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conclusion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Short version."
                    },
                    {
                              "id": "b",
                              "text": "End of informative."
                    },
                    {
                              "id": "c",
                              "text": "Important facts."
                    },
                    {
                              "id": "d",
                              "text": "Say again."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Conclusion\" means End of informative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conclusion\" means End of informative.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Conclusion** = End of informative.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-informative-conclusions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Summarize\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Important facts."
                    },
                    {
                              "id": "b",
                              "text": "Say again."
                    },
                    {
                              "id": "c",
                              "text": "Go over."
                    },
                    {
                              "id": "d",
                              "text": "Short version."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Summarize\" means Short version."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Summarize\" means Short version.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Summarize** = Short version.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-informative-conclusions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Key information\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Say again."
                    },
                    {
                              "id": "b",
                              "text": "Important facts."
                    },
                    {
                              "id": "c",
                              "text": "Go over."
                    },
                    {
                              "id": "d",
                              "text": "Last idea."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Key information\" means Important facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Key information\" means Important facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Key information** = Important facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
