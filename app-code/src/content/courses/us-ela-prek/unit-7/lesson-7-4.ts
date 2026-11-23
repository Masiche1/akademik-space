import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "epk-u7-lesson-7-4",
  code: "7-4",
  title: "Conversation Skills",
  goal: "I CAN have a conversation: listen, respond and take turns.",
  standards: ["ELOF-PK.LL.SPEAK.5"],
  vocabulary: [
    { term: "Conversation", definition: "Talking back and forth with someone." },
    { term: "Respond", definition: "Say something back." },
    { term: "Topic", definition: "What you are talking about." },
    { term: "Stay on topic", definition: "Keep talking about the same subject." },
    { term: "Polite", definition: "Using manners like please and thank you." },
  ],
  concepts: [
    {
      id: "epk-u7-conversation-skills",
      title: "Conversation skills",
      skill: "Have a real conversation with turn-taking and responses.",
      lesson: {
        sections: [
          {
            heading: "Conversations go both ways",
            body: "A **conversation** is not just one person talking — it is back and forth. You **respond** to what the other person says, then they respond to you.",
          },
          {
            heading: "Be a good conversationalist",
            body: "**Listen** to what the other person says, **respond** to it, and **stay on topic**. Use polite words like 'please' and 'thank you'.",
          },
        ],
        keyFormulas: [
          { name: "Conversation", statement: "Listen -> respond -> take turn -> stay on topic -> be polite." },
        ],
        workedExample: {
          problem: "Your friend says 'I like dogs.' How do you respond?",
          solution: "'I like dogs too! Do you have a dog?' — respond and keep the conversation going.",
        },
      },
      questions: [
        {
          id: "epk-u7-conversation-skills-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'conversation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one person talking only"
                    },
                    {
                              "id": "b",
                              "text": "talking back and forth"
                    },
                    {
                              "id": "c",
                              "text": "silence"
                    },
                    {
                              "id": "d",
                              "text": "reading"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Conversation = back-and-forth talking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conversation = back-and-forth talking.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Talking back and forth**",
          "commonErrors": [
                    "Thinks conversation is one-way."
          ]
},
        },
        {
          id: "epk-u7-conversation-skills-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To be a good conversationalist, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "talk only about yourself"
                    },
                    {
                              "id": "b",
                              "text": "listen, respond and stay on topic"
                    },
                    {
                              "id": "c",
                              "text": "ignore others"
                    },
                    {
                              "id": "d",
                              "text": "never take turns"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Listen, respond, stay on topic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Listen, respond, stay on topic.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Listen, respond, stay on topic**",
          "commonErrors": [
                    "Thinks monologue is conversation."
          ]
},
        },
        {
          id: "epk-u7-conversation-skills-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Your friend says 'I went to the park.' Respond to keep the conversation going.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Respond",
                              "statement": "Respond to what friend said."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Responds and asks a question or adds comment.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'That's fun! What did you do at the park?'**",
          "commonErrors": [
                    "Does not respond.",
                    "Changes topic randomly."
          ]
},
        },
        {
          id: "epk-u7-conversation-skills-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Stay on topic' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "talk about anything"
                    },
                    {
                              "id": "b",
                              "text": "keep talking about the same subject"
                    },
                    {
                              "id": "c",
                              "text": "change subject every sentence"
                    },
                    {
                              "id": "d",
                              "text": "be quiet"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Stay on topic = keep the same subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stay on topic = keep the same subject.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Same subject**",
          "commonErrors": [
                    "Thinks jumping topics is good."
          ]
},
        },
        {
          id: "epk-u7-conversation-skills-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Have a 3-turn conversation with someone about a favorite animal or food. Take turns listening and responding.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conversation",
                              "statement": "Listen, respond, take turns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Has 3-turn conversation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Stays on topic and is polite.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I like cats.' 'Me too! Do you have one?' 'Yes, she's named Whiskers.'**",
          "commonErrors": [
                    "Monologue only.",
                    "Off topic."
          ]
},
        },
        {
          id: "epk-u7-conversation-skills-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conversation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Say something back."
                    },
                    {
                              "id": "b",
                              "text": "Talking back and forth with someone."
                    },
                    {
                              "id": "c",
                              "text": "What you are talking about."
                    },
                    {
                              "id": "d",
                              "text": "Keep talking about the same subject."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Conversation\" means Talking back and forth with someone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conversation\" means Talking back and forth with someone.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Conversation** = Talking back and forth with someone.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u7-conversation-skills-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Respond\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What you are talking about."
                    },
                    {
                              "id": "b",
                              "text": "Keep talking about the same subject."
                    },
                    {
                              "id": "c",
                              "text": "Using manners like please and thank you."
                    },
                    {
                              "id": "d",
                              "text": "Say something back."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Respond\" means Say something back."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Respond\" means Say something back.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Respond** = Say something back.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u7-conversation-skills-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Keep talking about the same subject."
                    },
                    {
                              "id": "b",
                              "text": "What you are talking about."
                    },
                    {
                              "id": "c",
                              "text": "Using manners like please and thank you."
                    },
                    {
                              "id": "d",
                              "text": "Talking back and forth with someone."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Topic\" means What you are talking about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Topic\" means What you are talking about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Topic** = What you are talking about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
