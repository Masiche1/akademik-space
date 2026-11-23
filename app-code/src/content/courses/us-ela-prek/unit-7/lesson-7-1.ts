import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "epk-u7-lesson-7-1",
  code: "7-1",
  title: "Tell Stories Orally",
  goal: "I CAN tell a story with a beginning, middle and end.",
  standards: ["ELOF-PK.LL.SPEAK.2"],
  vocabulary: [
    { term: "Tell", definition: "Say a story out loud." },
    { term: "Oral", definition: "Spoken, not written." },
    { term: "Sequence", definition: "The order of events." },
    { term: "Detail", definition: "Extra information that makes it interesting." },
    { term: "Audience", definition: "The people listening to you." },
  ],
  concepts: [
    {
      id: "epk-u7-tell-stories",
      title: "Telling stories orally",
      skill: "Tell a simple story with beginning, middle and end.",
      lesson: {
        sections: [
          {
            heading: "Tell it aloud",
            body: "You can **tell a story** without writing it down: 'Once there was a puppy. He ran to the park. He played all day. Then he went home.' Beginning, middle, end.",
          },
          {
            heading: "Make it interesting",
            body: "Add **details**: what the puppy looked like, how he felt, what happened next. Details make your story fun to hear.",
          },
        ],
        keyFormulas: [
          { name: "Oral story", statement: "Beginning + middle + end + details = engaging story." },
        ],
        workedExample: {
          problem: "Tell a story about your weekend in 3 parts.",
          solution: "Beginning: 'On Saturday...' Middle: 'First we...' End: 'Then we...'",
        },
      },
      questions: [
        {
          id: "epk-u7-tell-stories-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'oral' story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "written down"
                    },
                    {
                              "id": "b",
                              "text": "spoken out loud"
                    },
                    {
                              "id": "c",
                              "text": "drawn"
                    },
                    {
                              "id": "d",
                              "text": "read silently"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Oral = spoken, not written."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oral = spoken, not written.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Spoken out loud**",
          "commonErrors": [
                    "Thinks oral means written."
          ]
},
        },
        {
          id: "epk-u7-tell-stories-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What makes an oral story interesting?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Being very short"
                    },
                    {
                              "id": "b",
                              "text": "Adding details"
                    },
                    {
                              "id": "c",
                              "text": "Speaking very fast"
                    },
                    {
                              "id": "d",
                              "text": "Nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Details (descriptions, feelings, events) make stories engaging."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Details (descriptions, feelings, events) make stories engaging.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Adding details**",
          "commonErrors": [
                    "Thinks brevity is best."
          ]
},
        },
        {
          id: "epk-u7-tell-stories-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tell a 3-part story about something you did recently: beginning, middle, end.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Oral story",
                              "statement": "Beginning, middle, end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tells 3-part story with sequence.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'First X, then Y, finally Z.'**",
          "commonErrors": [
                    "No sequence.",
                    "Cannot tell story."
          ]
},
        },
        {
          id: "epk-u7-tell-stories-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'audience' for your story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "yourself only"
                    },
                    {
                              "id": "b",
                              "text": "the people listening to you"
                    },
                    {
                              "id": "c",
                              "text": "the book"
                    },
                    {
                              "id": "d",
                              "text": "the TV"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Audience = people listening."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Audience = people listening.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**People listening**",
          "commonErrors": [
                    "Thinks audience is yourself."
          ]
},
        },
        {
          id: "epk-u7-tell-stories-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tell a story about a pet or favorite animal. Include what it looks like and what it does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Oral story",
                              "statement": "Story with details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tells story with beginning-middle-end.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Includes descriptive details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'My dog Rex is brown. He runs fast. He likes to fetch.'**",
          "commonErrors": [
                    "No clear story.",
                    "No details."
          ]
},
        },
        {
          id: "epk-u7-tell-stories-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Spoken, not written."
                    },
                    {
                              "id": "b",
                              "text": "Say a story out loud."
                    },
                    {
                              "id": "c",
                              "text": "The order of events."
                    },
                    {
                              "id": "d",
                              "text": "Extra information that makes it interesting."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Tell\" means Say a story out loud."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tell\" means Say a story out loud.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Tell** = Say a story out loud.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u7-tell-stories-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Oral\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The order of events."
                    },
                    {
                              "id": "b",
                              "text": "Extra information that makes it interesting."
                    },
                    {
                              "id": "c",
                              "text": "The people listening to you."
                    },
                    {
                              "id": "d",
                              "text": "Spoken, not written."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Oral\" means Spoken, not written."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Oral\" means Spoken, not written.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Oral** = Spoken, not written.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u7-tell-stories-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sequence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Extra information that makes it interesting."
                    },
                    {
                              "id": "b",
                              "text": "The order of events."
                    },
                    {
                              "id": "c",
                              "text": "The people listening to you."
                    },
                    {
                              "id": "d",
                              "text": "Say a story out loud."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sequence\" means The order of events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sequence\" means The order of events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sequence** = The order of events.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
