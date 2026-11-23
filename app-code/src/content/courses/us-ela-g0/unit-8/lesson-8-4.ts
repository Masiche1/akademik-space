import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "ela0-u8-lesson-8-4",
  code: "8-4",
  title: "Review: Speaking and Listening",
  goal: "I CAN listen to and speak about stories and information clearly.",
  standards: ["SL.K.1", "SL.K.2", "SL.K.4", "SL.K.5", "SL.K.6"],
  vocabulary: [
    { term: "Speaker", definition: "Who is talking." },
    { term: "Listener", definition: "Who is hearing." },
    { term: "Eye contact", definition: "Looking at the person who talks." },
    { term: "Take turns", definition: "Let each person speak." },
    { term: "Question", definition: "Ask to learn." },
    { term: "Answer", definition: "What we say." },
    { term: "Tell", definition: "Share information." },
    { term: "Ask", definition: "Request an answer." },
  ],
  concepts: [
    {
      id: "ela0-u8-review-speaking",
      title: "Speaking and listening review",
      skill: "Listen carefully, take turns, ask and answer questions, and speak clearly.",
      lesson: {
        sections: [
          {
            heading: "Good listeners",
            body: "A good **listener** pays **attention**, makes **eye contact**, and waits for their **turn** to speak. Listening helps us learn.",
          },
          {
            heading: "Good speakers",
            body: "A good **speaker** **tells** information clearly, **asks** questions, and answers when asked. Speaking helps us share.",
          },
        ],
        keyFormulas: [
          { name: "Speaking/listening", statement: "Listen well + speak clearly + ask/answer questions = good communication." },
        ],
        workedExample: {
          problem: "Your friend tells you about their dog. What do you do to be a good listener?",
          solution: "Look at them (eye contact), listen without interrupting (wait for turn), then ask a question or comment.",
        },
      },
      questions: [
        {
          id: "ela0-u8-review-speaking-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A good listener should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "talk the whole time"
                    },
                    {
                              "id": "b",
                              "text": "pay attention and wait for their turn"
                    },
                    {
                              "id": "c",
                              "text": "look away"
                    },
                    {
                              "id": "d",
                              "text": "interrupt"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Listen, pay attention, take turns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Listen, pay attention, take turns.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**pay attention + turn**",
          "commonErrors": [
                    "Thinks listening means talking."
          ]
},
        },
        {
          id: "ela0-u8-review-speaking-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Eye contact' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "closing eyes"
                    },
                    {
                              "id": "b",
                              "text": "looking at the person who is talking"
                    },
                    {
                              "id": "c",
                              "text": "looking at the floor"
                    },
                    {
                              "id": "d",
                              "text": "looking at a book"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Eye contact = looking at speaker."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Eye contact = looking at speaker.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**looking at speaker**",
          "commonErrors": [
                    "Thinks it's looking away."
          ]
},
        },
        {
          id: "ela0-u8-review-speaking-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your partner tells you about their favorite animal. Listen, then ask one question and say one thing you heard.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Speaking/listening",
                              "statement": "Listen + question + retell."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Listens and asks question.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says what they heard.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I heard your dog likes to run. What is its name?'**",
          "commonErrors": [
                    "Interrupts.",
                    "Cannot ask question."
          ]
},
        },
        {
          id: "ela0-u8-review-speaking-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Take turns' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "talk at the same time"
                    },
                    {
                              "id": "b",
                              "text": "let each person speak in turn"
                    },
                    {
                              "id": "c",
                              "text": "never speak"
                    },
                    {
                              "id": "d",
                              "text": "only one person talks"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Take turns = each person speaks in turn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take turns = each person speaks in turn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**each person speaks**",
          "commonErrors": [
                    "Thinks it means one person only."
          ]
},
        },
        {
          id: "ela0-u8-review-speaking-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Have a short conversation with a partner about a story or topic. Ask a question, listen to the answer, and say one thing you learned.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conversation",
                              "statement": "Ask + listen + learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Asks a question.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Listens and says what they learned.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Asked what their favorite color is; learned it's blue.'**",
          "commonErrors": [
                    "Does not ask.",
                    "Does not listen."
          ]
},
        },
        {
          id: "ela0-u8-review-speaking-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Speaker\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who is hearing."
                    },
                    {
                              "id": "b",
                              "text": "Who is talking."
                    },
                    {
                              "id": "c",
                              "text": "Looking at the person who talks."
                    },
                    {
                              "id": "d",
                              "text": "Let each person speak."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Speaker\" means Who is talking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Speaker\" means Who is talking.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Speaker** = Who is talking.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u8-review-speaking-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Listener\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Looking at the person who talks."
                    },
                    {
                              "id": "b",
                              "text": "Let each person speak."
                    },
                    {
                              "id": "c",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "d",
                              "text": "Who is hearing."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Listener\" means Who is hearing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Listener\" means Who is hearing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Listener** = Who is hearing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u8-review-speaking-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Eye contact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Let each person speak."
                    },
                    {
                              "id": "b",
                              "text": "Looking at the person who talks."
                    },
                    {
                              "id": "c",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "d",
                              "text": "What we say."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Eye contact\" means Looking at the person who talks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Eye contact\" means Looking at the person who talks.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Eye contact** = Looking at the person who talks.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
