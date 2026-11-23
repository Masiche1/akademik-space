import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "epk-u7-lesson-7-3",
  code: "7-3",
  title: "Express Feelings",
  goal: "I CAN use words to tell how I feel.",
  standards: ["ELOF-PK.LL.SPEAK.4"],
  vocabulary: [
    { term: "Feeling", definition: "An emotion like happy, sad, mad or scared." },
    { term: "Happy", definition: "Feeling good and smiling." },
    { term: "Sad", definition: "Feeling unhappy or crying." },
    { term: "Angry", definition: "Feeling mad or upset." },
    { term: "Scared", definition: "Feeling afraid or nervous." },
  ],
  concepts: [
    {
      id: "epk-u7-express-feelings",
      title: "Expressing feelings",
      skill: "Use words to name and express emotions.",
      lesson: {
        sections: [
          {
            heading: "Name your feelings",
            body: "We all have **feelings**: happy, sad, mad, scared, excited, tired. Naming them helps you understand yourself and tell others.",
          },
          {
            heading: "Say how you feel",
            body: "Use sentences like 'I feel happy because...' or 'I am sad that...'. Sharing feelings helps people understand and support you.",
          },
        ],
        keyFormulas: [
          { name: "Feelings", statement: "Name them: happy, sad, mad, scared, excited, tired. Say 'I feel...'" },
          { name: "Express", statement: "Share feelings with words: 'I feel happy because I got a hug.'" },
        ],
        workedExample: {
          problem: "How would you express feeling happy about a birthday party?",
          solution: "'I feel **happy** because it is my birthday and I got presents!'",
        },
      },
      questions: [
        {
          id: "epk-u7-express-feelings-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word names a feeling?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "run"
                    },
                    {
                              "id": "b",
                              "text": "happy"
                    },
                    {
                              "id": "c",
                              "text": "big"
                    },
                    {
                              "id": "d",
                              "text": "blue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'happy' is a feeling word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'happy' is a feeling word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**happy**",
          "commonErrors": [
                    "Picks an action or color."
          ]
},
        },
        {
          id: "epk-u7-express-feelings-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If you feel 'mad', you feel...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "happy"
                    },
                    {
                              "id": "b",
                              "text": "angry or upset"
                    },
                    {
                              "id": "c",
                              "text": "tired"
                    },
                    {
                              "id": "d",
                              "text": "scared"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Mad' = angry or upset."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Mad' = angry or upset.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Angry or upset**",
          "commonErrors": [
                    "Confuses mad with happy."
          ]
},
        },
        {
          id: "epk-u7-express-feelings-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Say a sentence about how you feel right now and why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Express feelings",
                              "statement": "Use 'I feel...' + reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses feeling word + reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I feel happy because I see my friend.'**",
          "commonErrors": [
                    "No feeling word.",
                    "No reason."
          ]
},
        },
        {
          id: "epk-u7-express-feelings-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is it good to express feelings with words?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It is not good"
                    },
                    {
                              "id": "b",
                              "text": "People understand you and can help"
                    },
                    {
                              "id": "c",
                              "text": "To be loud"
                    },
                    {
                              "id": "d",
                              "text": "To confuse others"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Expressing feelings helps others understand and support you."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Expressing feelings helps others understand and support you.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**People understand you**",
          "commonErrors": [
                    "Thinks feelings should be hidden."
          ]
},
        },
        {
          id: "epk-u7-express-feelings-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Name three feelings. Then say which one you feel most often and why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Express feelings",
                              "statement": "Name feelings + explain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 feelings.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says which and why.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Happy, sad, mad; I feel happy most because I play.'**",
          "commonErrors": [
                    "Cannot name feelings.",
                    "No explanation."
          ]
},
        },
        {
          id: "epk-u7-express-feelings-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Feeling\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feeling good and smiling."
                    },
                    {
                              "id": "b",
                              "text": "An emotion like happy, sad, mad or scared."
                    },
                    {
                              "id": "c",
                              "text": "Feeling unhappy or crying."
                    },
                    {
                              "id": "d",
                              "text": "Feeling mad or upset."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Feeling\" means An emotion like happy, sad, mad or scared."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Feeling\" means An emotion like happy, sad, mad or scared.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Feeling** = An emotion like happy, sad, mad or scared.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u7-express-feelings-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Happy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feeling unhappy or crying."
                    },
                    {
                              "id": "b",
                              "text": "Feeling mad or upset."
                    },
                    {
                              "id": "c",
                              "text": "Feeling afraid or nervous."
                    },
                    {
                              "id": "d",
                              "text": "Feeling good and smiling."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Happy\" means Feeling good and smiling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Happy\" means Feeling good and smiling.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Happy** = Feeling good and smiling.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u7-express-feelings-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sad\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feeling mad or upset."
                    },
                    {
                              "id": "b",
                              "text": "Feeling unhappy or crying."
                    },
                    {
                              "id": "c",
                              "text": "Feeling afraid or nervous."
                    },
                    {
                              "id": "d",
                              "text": "An emotion like happy, sad, mad or scared."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sad\" means Feeling unhappy or crying."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sad\" means Feeling unhappy or crying.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sad** = Feeling unhappy or crying.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
