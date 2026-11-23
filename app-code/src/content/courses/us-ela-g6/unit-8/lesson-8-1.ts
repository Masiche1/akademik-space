import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ela6-u8-lesson-8-1",
  code: "8-1",
  title: "Speaking Skills",
  goal: "I CAN speak clearly and effectively.",
  standards: ["SL.6.1"],
  vocabulary: [
    { term: "Speaking", definition: "Oral communication." },
    { term: "Clear", definition: "Easy to understand." },
    { term: "Volume", definition: "Loudness." },
    { term: "Pace", definition: "Speed." },
    { term: "Eye contact", definition: "Look at audience." },
    { term: "Body language", definition: "Nonverbal cues." },
    { term: "Organized", definition: "Structured." },
    { term: "Engaging", definition: "Captivating." },
  ],
  concepts: [
    {
      id: "ela6-u8-speaking-skills",
      title: "Speaking skills",
      skill: "Speak clearly, effectively and engage an audience.",
      lesson: {
        sections: [
          {
            heading: "Effective speaking",
            body: "Good speakers are **clear** (easy to understand), **organized** (structured), and **engaging** (captures attention).",
          },
          {
            heading: "Delivery",
            body: "Use appropriate **volume**, **pace**, **eye contact**, and **body language** to connect with audience.",
          },
        ],
        keyFormulas: [
          { name: "Speaking", statement: "Clear + organized + engaging = effective speech." },
        ],
        workedExample: {
          problem: "You're giving a presentation. What should you focus on?",
          solution: "**Clear voice, organized points, eye contact with audience, appropriate gestures, engaging opening.**",
        },
      },
      questions: [
        {
          id: "ela6-u8-speaking-skills-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Effective speaking requires...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only loud voice"
                    },
                    {
                              "id": "b",
                              "text": "clarity, organization, and engagement"
                    },
                    {
                              "id": "c",
                              "text": "only reading"
                    },
                    {
                              "id": "d",
                              "text": "only memorization"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Clarity + organization + engagement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clarity + organization + engagement.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "clarity, organization, and engagement",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u8-speaking-skills-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Eye contact' helps speakers by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "making them nervous"
                    },
                    {
                              "id": "b",
                              "text": "connecting with the audience"
                    },
                    {
                              "id": "c",
                              "text": "showing they're reading"
                    },
                    {
                              "id": "d",
                              "text": "avoiding questions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Connecting with audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Connecting with audience.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "connecting with the audience",
          "commonErrors": [
                    "Wrong effect."
          ]
},
        },
        {
          id: "ela6-u8-speaking-skills-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe three speaking techniques that would make your presentation more effective.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Speaking",
                              "statement": "Three techniques."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes techniques.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**1. Speak clearly and at appropriate volume; 2. Make eye contact with audience; 3. Use gestures and vary pace for engagement.**",
          "commonErrors": [
                    "Vague techniques.",
                    "Fewer than three."
          ]
},
        },
        {
          id: "ela6-u8-speaking-skills-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Body language' in speaking refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what you say"
                    },
                    {
                              "id": "b",
                              "text": "nonverbal cues like gestures and posture"
                    },
                    {
                              "id": "c",
                              "text": "the slides"
                    },
                    {
                              "id": "d",
                              "text": "the topic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Nonverbal cues."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nonverbal cues.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "nonverbal cues like gestures and posture",
          "commonErrors": [
                    "Confuses with verbal."
          ]
},
        },
        {
          id: "ela6-u8-speaking-skills-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Plan a short presentation and describe how you would use speaking techniques to engage your audience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Speaking",
                              "statement": "Plan + techniques."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plans presentation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes techniques.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Topic: recycling; Opening: hook question; Body: three points with visuals; Closing: call to action; Use eye contact, gestures, varied pace.'**",
          "commonErrors": [
                    "No plan.",
                    "No techniques."
          ]
},
        },
        {
          id: "ela6-u8-speaking-skills-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Speaking\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Easy to understand."
                    },
                    {
                              "id": "b",
                              "text": "Oral communication."
                    },
                    {
                              "id": "c",
                              "text": "Loudness."
                    },
                    {
                              "id": "d",
                              "text": "Speed."
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
          id: "ela6-u8-speaking-skills-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Clear\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Loudness."
                    },
                    {
                              "id": "b",
                              "text": "Speed."
                    },
                    {
                              "id": "c",
                              "text": "Look at audience."
                    },
                    {
                              "id": "d",
                              "text": "Easy to understand."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "ela6-u8-speaking-skills-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Volume\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Speed."
                    },
                    {
                              "id": "b",
                              "text": "Loudness."
                    },
                    {
                              "id": "c",
                              "text": "Look at audience."
                    },
                    {
                              "id": "d",
                              "text": "Nonverbal cues."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Volume\" means Loudness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Volume\" means Loudness.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Volume** = Loudness.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
