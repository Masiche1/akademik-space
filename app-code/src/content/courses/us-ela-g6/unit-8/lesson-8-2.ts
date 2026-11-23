import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ela6-u8-lesson-8-2",
  code: "8-2",
  title: "Listening Skills",
  goal: "I CAN listen actively and respond thoughtfully.",
  standards: ["SL.6.1"],
  vocabulary: [
    { term: "Listening", definition: "Paying attention." },
    { term: "Active", definition: "Engaged." },
    { term: "Focus", definition: "Concentrate." },
    { term: "Questions", definition: "Ask for clarity." },
    { term: "Respond", definition: "Reply thoughtfully." },
    { term: "Summarize", definition: "Shorten." },
    { term: "Evaluate", definition: "Judge." },
    { term: "Empathy", definition: "Understand feelings." },
  ],
  concepts: [
    {
      id: "ela6-u8-listening-skills",
      title: "Listening skills",
      skill: "Listen actively, ask questions, and respond thoughtfully.",
      lesson: {
        sections: [
          {
            heading: "Active listening",
            body: "**Active listening** means fully focusing on the speaker, asking questions, and responding thoughtfully.",
          },
          {
            heading: "Responding",
            body: "Good listeners **summarize** what they heard, **ask clarifying questions**, and **respond** with empathy and understanding.",
          },
        ],
        keyFormulas: [
          { name: "Listening", statement: "Focus + questions + thoughtful response = active listening." },
        ],
        workedExample: {
          problem: "Someone is explaining a complex idea. How should you listen?",
          solution: "**Focus on speaker, take notes, ask clarifying questions, summarize to check understanding, respond thoughtfully.**",
        },
      },
      questions: [
        {
          id: "ela6-u8-listening-skills-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Active listening' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "just hearing"
                    },
                    {
                              "id": "b",
                              "text": "fully engaging with speaker"
                    },
                    {
                              "id": "c",
                              "text": "interrupting"
                    },
                    {
                              "id": "d",
                              "text": "ignoring"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Fully engaging."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fully engaging.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "fully engaging with speaker",
          "commonErrors": [
                    "Too passive."
          ]
},
        },
        {
          id: "ela6-u8-listening-skills-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Good listeners should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "interrupt often"
                    },
                    {
                              "id": "b",
                              "text": "ask clarifying questions and respond thoughtfully"
                    },
                    {
                              "id": "c",
                              "text": "look away"
                    },
                    {
                              "id": "d",
                              "text": "only nod"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Ask questions + respond."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ask questions + respond.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "ask clarifying questions and respond thoughtfully",
          "commonErrors": [
                    "Too passive."
          ]
},
        },
        {
          id: "ela6-u8-listening-skills-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe three ways you can be a better listener in a class discussion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Listening",
                              "statement": "Three ways."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes ways.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**1. Focus fully on speaker without distractions; 2. Ask clarifying questions; 3. Summarize what you heard to confirm understanding.**",
          "commonErrors": [
                    "Vague ways.",
                    "Fewer than three."
          ]
},
        },
        {
          id: "ela6-u8-listening-skills-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Empathy' in listening means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "agreeing with everything"
                    },
                    {
                              "id": "b",
                              "text": "understanding the speaker's feelings"
                    },
                    {
                              "id": "c",
                              "text": "ignoring feelings"
                    },
                    {
                              "id": "d",
                              "text": "only facts"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Understanding feelings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understanding feelings.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "understanding the speaker's feelings",
          "commonErrors": [
                    "Confuses with agreement."
          ]
},
        },
        {
          id: "ela6-u8-listening-skills-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how you would actively listen during a presentation and what questions you might ask.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Listening",
                              "statement": "Listening + questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains listening.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Suggests questions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Listen: focus, take notes, maintain eye contact; Questions: Can you clarify X? How does that relate to Y?'**",
          "commonErrors": [
                    "No listening plan.",
                    "No questions."
          ]
},
        },
        {
          id: "ela6-u8-listening-skills-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Listening\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Engaged."
                    },
                    {
                              "id": "b",
                              "text": "Paying attention."
                    },
                    {
                              "id": "c",
                              "text": "Concentrate."
                    },
                    {
                              "id": "d",
                              "text": "Ask for clarity."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Listening\" means Paying attention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Listening\" means Paying attention.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Listening** = Paying attention.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u8-listening-skills-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Active\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Concentrate."
                    },
                    {
                              "id": "b",
                              "text": "Ask for clarity."
                    },
                    {
                              "id": "c",
                              "text": "Reply thoughtfully."
                    },
                    {
                              "id": "d",
                              "text": "Engaged."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Active\" means Engaged."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Active\" means Engaged.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Active** = Engaged.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u8-listening-skills-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Focus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ask for clarity."
                    },
                    {
                              "id": "b",
                              "text": "Concentrate."
                    },
                    {
                              "id": "c",
                              "text": "Reply thoughtfully."
                    },
                    {
                              "id": "d",
                              "text": "Shorten."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Focus\" means Concentrate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Focus\" means Concentrate.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Focus** = Concentrate.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
