import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ela5-u8-lesson-8-2",
  code: "8-2",
  title: "Listening Skills",
  goal: "I CAN listen actively and ask clarifying questions.",
  standards: ["SL.5.1", "SL.5.3"],
  vocabulary: [
    { term: "Active listening", definition: "Fully paying attention." },
    { term: "Clarifying", definition: "Asking questions." },
    { term: "Summarize", definition: "Restate main points." },
    { term: "Attention", definition: "Focus." },
    { term: "Question", definition: "Ask for info." },
    { term: "Feedback", definition: "Response." },
    { term: "Understand", definition: "Grasp meaning." },
    { term: "Note", definition: "Write down key points." },
  ],
  concepts: [
    {
      id: "ela5-u8-listening-skills",
      title: "Listening skills",
      skill: "Listen actively, ask clarifying questions and summarize what you hear.",
      lesson: {
        sections: [
          {
            heading: "Active listening",
            body: "**Active listening** means **fully paying attention**, not just hearing. Ask **clarifying questions** if confused, and **summarize** what you heard.",
          },
          {
            heading: "Skills",
            body: "**Focus** on the speaker, **take notes** on key points, **ask questions**, and **confirm understanding** by restating.",
          },
        ],
        keyFormulas: [
          { name: "Listening", statement: "Focus + notes + questions + summary = active listening." },
        ],
        workedExample: {
          problem: "Listen to a classmate explain a concept. Summarize what you heard and ask one clarifying question.",
          solution: "**Summary: [main points]; Question: 'Can you explain [unclear part] again?'**",
        },
      },
      questions: [
        {
          id: "ela5-u8-listening-skills-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Active listening' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hearing only"
                    },
                    {
                              "id": "b",
                              "text": "fully paying attention and engaging"
                    },
                    {
                              "id": "c",
                              "text": "ignoring speaker"
                    },
                    {
                              "id": "d",
                              "text": "talking over"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Fully paying attention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fully paying attention.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "fully paying attention and engaging",
          "commonErrors": [
                    "Just hears."
          ]
},
        },
        {
          id: "ela5-u8-listening-skills-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Clarifying questions' help you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "confuse the speaker"
                    },
                    {
                              "id": "b",
                              "text": "understand better by asking for more info"
                    },
                    {
                              "id": "c",
                              "text": "end the conversation"
                    },
                    {
                              "id": "d",
                              "text": "show off"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Understand better."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand better.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "understand better by asking for more info",
          "commonErrors": [
                    "Wrong purpose."
          ]
},
        },
        {
          id: "ela5-u8-listening-skills-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Listen to someone present. Write a summary of their main points and ask one clarifying question.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Listening",
                              "statement": "Summary + question."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes summary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Asks clarifying question.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Summary: [main points]; Question: 'Could you explain [part] more?'**",
          "commonErrors": [
                    "Cannot summarize.",
                    "No question."
          ]
},
        },
        {
          id: "ela5-u8-listening-skills-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Summarizing what you hear helps you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "forget it"
                    },
                    {
                              "id": "b",
                              "text": "confirm you understood"
                    },
                    {
                              "id": "c",
                              "text": "talk more"
                    },
                    {
                              "id": "d",
                              "text": "avoid listening"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Confirm understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Confirm understanding.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "confirm you understood",
          "commonErrors": [
                    "Thinks it doesn't help."
          ]
},
        },
        {
          id: "ela5-u8-listening-skills-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between hearing and active listening. Give an example of active listening.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Listening",
                              "statement": "Difference + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Hearing: sound reaches ears; Active listening: focus, notes, questions, summary. Example: taking notes + asking questions.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "ela5-u8-listening-skills-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Active listening\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Asking questions."
                    },
                    {
                              "id": "b",
                              "text": "Fully paying attention."
                    },
                    {
                              "id": "c",
                              "text": "Restate main points."
                    },
                    {
                              "id": "d",
                              "text": "Focus."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Active listening\" means Fully paying attention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Active listening\" means Fully paying attention.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Active listening** = Fully paying attention.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-listening-skills-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Clarifying\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Restate main points."
                    },
                    {
                              "id": "b",
                              "text": "Focus."
                    },
                    {
                              "id": "c",
                              "text": "Ask for info."
                    },
                    {
                              "id": "d",
                              "text": "Asking questions."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Clarifying\" means Asking questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Clarifying\" means Asking questions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Clarifying** = Asking questions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-listening-skills-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Summarize\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Focus."
                    },
                    {
                              "id": "b",
                              "text": "Restate main points."
                    },
                    {
                              "id": "c",
                              "text": "Ask for info."
                    },
                    {
                              "id": "d",
                              "text": "Response."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Summarize\" means Restate main points."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Summarize\" means Restate main points.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Summarize** = Restate main points.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
