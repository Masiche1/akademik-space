import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ela6-u8-lesson-8-3",
  code: "8-3",
  title: "Speaking/Listening Review",
  goal: "I CAN use all speaking and listening skills.",
  standards: ["SL.6.1"],
  vocabulary: [
    { term: "Speaking", definition: "Oral communication." },
    { term: "Listening", definition: "Paying attention." },
    { term: "Clear", definition: "Easy to understand." },
    { term: "Active", definition: "Engaged." },
    { term: "Questions", definition: "Ask for clarity." },
    { term: "Respond", definition: "Reply." },
    { term: "Engaging", definition: "Captivating." },
    { term: "Empathy", definition: "Understand feelings." },
  ],
  concepts: [
    {
      id: "ela6-u8-speaking-listening-review",
      title: "Speaking/listening review",
      skill: "Combine speaking and listening skills for effective communication.",
      lesson: {
        sections: [
          {
            heading: "All communication skills",
            body: "**Speak** clearly and engagingly; **listen** actively and respond thoughtfully.",
          },
          {
            heading: "Put it together",
            body: "Use all skills for effective communication in discussions and presentations.",
          },
        ],
        keyFormulas: [
          { name: "Communication", statement: "Speaking + listening = effective interaction." },
        ],
        workedExample: {
          problem: "Use all speaking/listening skills.",
          solution: "All skills = complete communication.",
        },
      },
      questions: [
        {
          id: "ela6-u8-speaking-listening-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Speaking/listening skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only speaking"
                    },
                    {
                              "id": "b",
                              "text": "speaking, listening, responding, engaging"
                    },
                    {
                              "id": "c",
                              "text": "only listening"
                    },
                    {
                              "id": "d",
                              "text": "only responding"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "speaking, listening, responding, engaging",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela6-u8-speaking-listening-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plan a presentation (speaking skills) and describe how you would listen to questions (listening skills).",
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
                                                  "All comm",
                                                  "Both skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All comm",
                                                  "Both skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Speaking: clear, organized, engaging; Listening: focus, ask clarifying questions, respond thoughtfully.'**"
          ]
},
        },
        {
          id: "ela6-u8-speaking-listening-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Effective communication requires...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only speaking"
                    },
                    {
                              "id": "b",
                              "text": "both speaking and listening"
                    },
                    {
                              "id": "c",
                              "text": "only listening"
                    },
                    {
                              "id": "d",
                              "text": "only reading"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Both speaking and listening."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both speaking and listening.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "both speaking and listening",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u8-speaking-listening-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Speaking\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Paying attention."
                    },
                    {
                              "id": "b",
                              "text": "Oral communication."
                    },
                    {
                              "id": "c",
                              "text": "Easy to understand."
                    },
                    {
                              "id": "d",
                              "text": "Engaged."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Speaking\" means Oral communication."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Speaking\" means Oral communication.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Speaking** = Oral communication.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u8-speaking-listening-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Listening\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Easy to understand."
                    },
                    {
                              "id": "b",
                              "text": "Engaged."
                    },
                    {
                              "id": "c",
                              "text": "Ask for clarity."
                    },
                    {
                              "id": "d",
                              "text": "Paying attention."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "ela6-u8-speaking-listening-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Clear\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Engaged."
                    },
                    {
                              "id": "b",
                              "text": "Easy to understand."
                    },
                    {
                              "id": "c",
                              "text": "Ask for clarity."
                    },
                    {
                              "id": "d",
                              "text": "Reply."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Clear\" means Easy to understand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Clear\" means Easy to understand.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Clear** = Easy to understand.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u8-speaking-listening-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Active\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ask for clarity."
                    },
                    {
                              "id": "b",
                              "text": "Reply."
                    },
                    {
                              "id": "c",
                              "text": "Captivating."
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
          id: "ela6-u8-speaking-listening-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Questions\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reply."
                    },
                    {
                              "id": "b",
                              "text": "Ask for clarity."
                    },
                    {
                              "id": "c",
                              "text": "Captivating."
                    },
                    {
                              "id": "d",
                              "text": "Understand feelings."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Questions\" means Ask for clarity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Questions\" means Ask for clarity.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Questions** = Ask for clarity.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
