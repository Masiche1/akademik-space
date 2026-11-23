import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "ela0-u8-lesson-8-5",
  code: "8-5",
  title: "Review: Everything",
  goal: "I CAN use all kindergarten ELA skills together.",
  standards: ["RL.K.1", "RI.K.1", "W.K.1", "W.K.2", "W.K.3", "L.K.1", "L.K.2"],
  vocabulary: [
    { term: "Read", definition: "Understand stories and info texts." },
    { term: "Write", definition: "Opinion, narrative, informational." },
    { term: "Language", definition: "Capitals, punctuation, sentences." },
    { term: "Question", definition: "Ask to learn." },
    { term: "Detail", definition: "Small fact." },
    { term: "Opinion", definition: "What we think." },
    { term: "Story", definition: "Beginning-middle-end." },
    { term: "Fact", definition: "Something true." },
  ],
  concepts: [
    {
      id: "ela0-u8-review-everything",
      title: "Everything review",
      skill: "Combine all kindergarten ELA: reading, writing and language.",
      lesson: {
        sections: [
          {
            heading: "All of ELA",
            body: "Kindergarten ELA covers **reading** (stories + info texts), **writing** (opinion, narrative, informational), and **language** (capitals, punctuation, sentences, vocabulary).",
          },
          {
            heading: "You are a reader and writer!",
            body: "You can ask questions, retell stories, find details, write opinions/narratives/info texts, and use correct conventions. These are the foundations of literacy!",
          },
        ],
        keyFormulas: [
          { name: "Kindergarten ELA", statement: "Read + write + language = literacy foundation." },
        ],
        workedExample: {
          problem: "Show all skills: read a text, ask a question, write an opinion, and write a correct sentence.",
          solution: "Read + ask Q + write opinion + correct sentence = all ELA skills.",
        },
      },
      questions: [
        {
          id: "ela0-u8-review-everything-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Kindergarten ELA includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only reading"
                    },
                    {
                              "id": "b",
                              "text": "reading, writing (3 types), language"
                    },
                    {
                              "id": "c",
                              "text": "only writing"
                    },
                    {
                              "id": "d",
                              "text": "only spelling"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All ELA skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All ELA skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**all ELA skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela0-u8-review-everything-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: read a text and ask a question, write an opinion sentence, and write a correct sentence with capitals and punctuation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All ELA",
                                                  "Read + write + language."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All ELA",
                                                  "Read + write + language."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Demonstrates all skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Read story, asked Q, wrote opinion, wrote correct sentence.'**"
          ]
},
        },
        {
          id: "ela0-u8-review-everything-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 1 ELA because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "write essays"
                    },
                    {
                              "id": "b",
                              "text": "read, ask questions, retell, write opinions/narratives/info, use conventions"
                    },
                    {
                              "id": "c",
                              "text": "do algebra"
                    },
                    {
                              "id": "d",
                              "text": "read chapter books"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Kindergarten ELA skills prepare you for Grade 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Kindergarten ELA skills prepare you for Grade 1.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**K ELA skills**",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "ela0-u8-review-everything-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Read\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opinion, narrative, informational."
                    },
                    {
                              "id": "b",
                              "text": "Understand stories and info texts."
                    },
                    {
                              "id": "c",
                              "text": "Capitals, punctuation, sentences."
                    },
                    {
                              "id": "d",
                              "text": "Ask to learn."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Read\" means Understand stories and info texts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Read\" means Understand stories and info texts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Read** = Understand stories and info texts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u8-review-everything-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Write\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Capitals, punctuation, sentences."
                    },
                    {
                              "id": "b",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "c",
                              "text": "Small fact."
                    },
                    {
                              "id": "d",
                              "text": "Opinion, narrative, informational."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Write\" means Opinion, narrative, informational."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Write\" means Opinion, narrative, informational.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Write** = Opinion, narrative, informational.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u8-review-everything-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Language\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "b",
                              "text": "Capitals, punctuation, sentences."
                    },
                    {
                              "id": "c",
                              "text": "Small fact."
                    },
                    {
                              "id": "d",
                              "text": "What we think."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Language\" means Capitals, punctuation, sentences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Language\" means Capitals, punctuation, sentences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Language** = Capitals, punctuation, sentences.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u8-review-everything-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small fact."
                    },
                    {
                              "id": "b",
                              "text": "What we think."
                    },
                    {
                              "id": "c",
                              "text": "Beginning-middle-end."
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
          id: "ela0-u8-review-everything-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we think."
                    },
                    {
                              "id": "b",
                              "text": "Small fact."
                    },
                    {
                              "id": "c",
                              "text": "Beginning-middle-end."
                    },
                    {
                              "id": "d",
                              "text": "Something true."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
