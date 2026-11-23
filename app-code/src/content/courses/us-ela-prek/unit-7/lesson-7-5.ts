import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "epk-u7-lesson-7-5",
  code: "7-5",
  title: "Speaking and Listening Review",
  goal: "I CAN tell stories, ask questions, express feelings and converse.",
  standards: ["ELOF-PK.LL.SPEAK.6"],
  vocabulary: [
    { term: "Review", definition: "Practice all speaking skills." },
    { term: "Story", definition: "Beginning, middle, end." },
    { term: "Question", definition: "Ask to learn." },
    { term: "Feeling", definition: "Name emotions." },
    { term: "Conversation", definition: "Back-and-forth talking." },
  ],
  concepts: [
    {
      id: "epk-u7-speaking-review",
      title: "Speaking and listening review",
      skill: "Combine oral language skills: stories, questions, feelings, conversation.",
      lesson: {
        sections: [
          {
            heading: "All the speaking skills",
            body: "Oral language has four parts: **telling stories**, **asking questions**, **expressing feelings**, and **having conversations**. Together they make you a strong communicator.",
          },
          {
            heading: "Use them together",
            body: "Tell a story about your day, ask a question about it, share a feeling about it, and have a conversation about it with someone.",
          },
        ],
        keyFormulas: [
          { name: "Oral language", statement: "Stories + questions + feelings + conversation = strong communicator." },
        ],
        workedExample: {
          problem: "Combine: tell a story, ask a question, share a feeling about your day.",
          solution: "'I went to the park (story). What did you do today? (question). I felt happy playing (feeling).'",
        },
      },
      questions: [
        {
          id: "epk-u7-speaking-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Oral language includes which four skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reading, writing, spelling, grammar"
                    },
                    {
                              "id": "b",
                              "text": "Stories, questions, feelings, conversation"
                    },
                    {
                              "id": "c",
                              "text": "Singing, dancing, drawing, painting"
                    },
                    {
                              "id": "d",
                              "text": "Only talking"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Oral language = stories + questions + feelings + conversation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oral language = stories + questions + feelings + conversation.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Stories, questions, feelings, conversation**",
          "commonErrors": [
                    "Lists non-oral skills."
          ]
},
        },
        {
          id: "epk-u7-speaking-review-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of 'expressing feelings'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "I ran fast."
                    },
                    {
                              "id": "b",
                              "text": "I feel happy today."
                    },
                    {
                              "id": "c",
                              "text": "The sky is blue."
                    },
                    {
                              "id": "d",
                              "text": "I have a dog."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'I feel happy' expresses a feeling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'I feel happy' expresses a feeling.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**I feel happy**",
          "commonErrors": [
                    "Picks a non-feeling statement."
          ]
},
        },
        {
          id: "epk-u7-speaking-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tell a short story, then ask a question about it, then share a feeling about it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Oral language",
                              "statement": "Story + question + feeling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combines all three skills.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'I played outside. What did you do? I felt happy.'**",
          "commonErrors": [
                    "Only does one skill.",
                    "Cannot combine."
          ]
},
        },
        {
          id: "epk-u7-speaking-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A good conversation requires...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only talking"
                    },
                    {
                              "id": "b",
                              "text": "listening and responding"
                    },
                    {
                              "id": "c",
                              "text": "shouting"
                    },
                    {
                              "id": "d",
                              "text": "silence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Conversation = listening + responding + turn-taking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conversation = listening + responding + turn-taking.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Listening and responding**",
          "commonErrors": [
                    "Thinks talking only is enough."
          ]
},
        },
        {
          id: "epk-u7-speaking-review-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Have a conversation with someone: tell them about your day, ask them about theirs, and share how you feel about it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Oral language",
                              "statement": "Story + question + feeling + conversation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tells about day.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Asks question and shares feeling.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I played at recess. What did you do? I felt tired but happy.'**",
          "commonErrors": [
                    "Only talks about self.",
                    "No question or feeling."
          ]
},
        },
        {
          id: "epk-u7-speaking-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Review\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Beginning, middle, end."
                    },
                    {
                              "id": "b",
                              "text": "Practice all speaking skills."
                    },
                    {
                              "id": "c",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "d",
                              "text": "Name emotions."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Review\" means Practice all speaking skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Review\" means Practice all speaking skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Review** = Practice all speaking skills.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u7-speaking-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Story\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "b",
                              "text": "Name emotions."
                    },
                    {
                              "id": "c",
                              "text": "Back-and-forth talking."
                    },
                    {
                              "id": "d",
                              "text": "Beginning, middle, end."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Story\" means Beginning, middle, end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Story\" means Beginning, middle, end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Story** = Beginning, middle, end.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u7-speaking-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Name emotions."
                    },
                    {
                              "id": "b",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "c",
                              "text": "Back-and-forth talking."
                    },
                    {
                              "id": "d",
                              "text": "Practice all speaking skills."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Question\" means Ask to learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Question\" means Ask to learn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Question** = Ask to learn.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
