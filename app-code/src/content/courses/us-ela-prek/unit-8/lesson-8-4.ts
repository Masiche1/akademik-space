import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "epk-u8-lesson-8-4",
  code: "8-4",
  title: "Review: Speaking and Listening",
  goal: "I CAN tell stories, ask questions, express feelings and converse.",
  standards: ["ELOF-PK.LL.REVIEW.4"],
  vocabulary: [
    { term: "Story", definition: "Beginning, middle, end." },
    { term: "Question", definition: "Ask to learn." },
    { term: "Feeling", definition: "Name emotions." },
    { term: "Conversation", definition: "Back-and-forth talking." },
    { term: "Listen", definition: "Pay attention to others." },
  ],
  concepts: [
    {
      id: "epk-u8-review-speaking-listening",
      title: "Speaking and listening review",
      skill: "Combine oral language skills.",
      lesson: {
        sections: [
          {
            heading: "Oral language skills",
            body: "Speaking and listening include: **telling stories**, **asking questions**, **expressing feelings**, and **having conversations**. These make you a strong communicator.",
          },
          {
            heading: "Use them all",
            body: "Tell a story about your day, ask a question, share a feeling, and have a conversation with someone about it.",
          },
        ],
        keyFormulas: [
          { name: "Oral language", statement: "Stories + questions + feelings + conversation = strong communicator." },
        ],
        workedExample: {
          problem: "Combine: tell a story, ask a question, share a feeling about your weekend.",
          solution: "'I played outside (story). What did you do? (question). I felt happy (feeling).'",
        },
      },
      questions: [
        {
          id: "epk-u8-review-speaking-listening-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Oral language skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only reading"
                    },
                    {
                              "id": "b",
                              "text": "stories, questions, feelings, conversation"
                    },
                    {
                              "id": "c",
                              "text": "only writing"
                    },
                    {
                              "id": "d",
                              "text": "only listening"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Stories + questions + feelings + conversation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stories + questions + feelings + conversation.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**All four skills**",
          "commonErrors": [
                    "Lists wrong skills."
          ]
},
        },
        {
          id: "epk-u8-review-speaking-listening-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which shows 'expressing feelings'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "I ran fast."
                    },
                    {
                              "id": "b",
                              "text": "I feel excited."
                    },
                    {
                              "id": "c",
                              "text": "The sky is blue."
                    },
                    {
                              "id": "d",
                              "text": "I have a cat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'I feel excited' expresses a feeling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'I feel excited' expresses a feeling.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**I feel excited**",
          "commonErrors": [
                    "Picks non-feeling statement."
          ]
},
        },
        {
          id: "epk-u8-review-speaking-listening-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tell a story about your day, ask a question, and share a feeling about it.",
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
          "finalAnswer": "**e.g., 'I played at recess. What did you do? I felt happy.'**",
          "commonErrors": [
                    "Only one skill.",
                    "Cannot combine."
          ]
},
        },
        {
          id: "epk-u8-review-speaking-listening-q4",
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
          id: "epk-u8-review-speaking-listening-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Have a conversation with someone: tell them about your day, ask about theirs, share a feeling.",
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
          "finalAnswer": "**e.g., 'I played outside. What did you do? I felt tired.'**",
          "commonErrors": [
                    "Only talks about self.",
                    "No question or feeling."
          ]
},
        },
        {
          id: "epk-u8-review-speaking-listening-q6",
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
                              "text": "Beginning, middle, end."
                    },
                    {
                              "id": "c",
                              "text": "Name emotions."
                    },
                    {
                              "id": "d",
                              "text": "Back-and-forth talking."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "epk-u8-review-speaking-listening-q7",
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
                              "text": "Back-and-forth talking."
                    },
                    {
                              "id": "c",
                              "text": "Pay attention to others."
                    },
                    {
                              "id": "d",
                              "text": "Ask to learn."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "epk-u8-review-speaking-listening-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Feeling\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Back-and-forth talking."
                    },
                    {
                              "id": "b",
                              "text": "Name emotions."
                    },
                    {
                              "id": "c",
                              "text": "Pay attention to others."
                    },
                    {
                              "id": "d",
                              "text": "Beginning, middle, end."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Feeling\" means Name emotions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Feeling\" means Name emotions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Feeling** = Name emotions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
