import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "ela1-u8-lesson-8-5",
  code: "8-5",
  title: "Grade 1 Final Review",
  goal: "I CAN use all Grade 1 ELA skills together.",
  standards: ["RL.1.1", "RI.1.1", "W.1.1", "W.1.2", "W.1.3", "L.1.1", "L.1.2", "SL.1.1"],
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
      id: "ela1-u8-grade1-final",
      title: "Grade 1 final review",
      skill: "Combine all Grade 1 ELA: reading, writing and language.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 1 ELA",
            body: "Grade 1 ELA covers **reading** (stories + info texts), **writing** (opinion, narrative, informational), **language** (capitals, punctuation, sentences, vocabulary), and **speaking/listening**.",
          },
          {
            heading: "You are a Grade 1 reader and writer!",
            body: "You can ask questions, retell stories, find details, write opinions/narratives/info texts, use correct conventions, and communicate clearly. These are the foundations for Grade 2!",
          },
        ],
        keyFormulas: [
          { name: "Grade 1 ELA", statement: "Read + write + language + speak/listen = Grade 1 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: read a text, ask a question, write an opinion, write a correct sentence, and have a conversation.",
          solution: "All skills demonstrated = Grade 1 ELA mastery.",
        },
      },
      questions: [
        {
          id: "ela1-u8-grade1-final-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 1 ELA includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only reading"
                    },
                    {
                              "id": "b",
                              "text": "reading, writing, language, speaking/listening"
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
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela1-u8-grade1-final-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: read a text and ask a question, write an opinion sentence, write a correct sentence with capitals and punctuation, and ask a partner a question.",
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
                                                  "Read + write + language + speak."
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
                                                  "Read + write + language + speak."
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
                    "**e.g., 'Read story, asked Q, wrote opinion, wrote correct sentence, asked partner.'**"
          ]
},
        },
        {
          id: "ela1-u8-grade1-final-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 2 ELA because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "write essays"
                    },
                    {
                              "id": "b",
                              "text": "read, ask questions, retell, write opinions/narratives/info, use conventions, communicate"
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
                              "statement": "Grade 1 ELA skills prepare you for Grade 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grade 1 ELA skills prepare you for Grade 2.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**G1 ELA skills**",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "ela1-u8-grade1-final-q4",
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
          id: "ela1-u8-grade1-final-q5",
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
          id: "ela1-u8-grade1-final-q6",
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
          id: "ela1-u8-grade1-final-q7",
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
          id: "ela1-u8-grade1-final-q8",
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
