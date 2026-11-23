import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ela5-u8-lesson-8-1",
  code: "8-1",
  title: "Speaking and Presenting",
  goal: "I CAN speak clearly and present information to an audience.",
  standards: ["SL.5.4"],
  vocabulary: [
    { term: "Speaking", definition: "Talking to audience." },
    { term: "Presenting", definition: "Sharing information." },
    { term: "Clear", definition: "Easy to understand." },
    { term: "Organize", definition: "Arrange logically." },
    { term: "Audience", definition: "Listeners." },
    { term: "Volume", definition: "Loudness." },
    { term: "Eye contact", definition: "Look at audience." },
    { term: "Pace", definition: "Speed of speech." },
  ],
  concepts: [
    {
      id: "ela5-u8-speaking-presenting",
      title: "Speaking and presenting",
      skill: "Speak clearly and present information effectively to an audience.",
      lesson: {
        sections: [
          {
            heading: "Effective speaking",
            body: "Good speakers **organize** their thoughts, **speak clearly**, use appropriate **volume** and **pace**, and make **eye contact** with the audience.",
          },
          {
            heading: "Presenting",
            body: "When **presenting**, introduce your topic, present information **logically**, and conclude clearly. Practice helps!",
          },
        ],
        keyFormulas: [
          { name: "Speaking", statement: "Organize + clear + volume + eye contact = effective speaking." },
        ],
        workedExample: {
          problem: "Prepare a 1-minute presentation on your favorite book.",
          solution: "**Intro: title/author; Main: summarize plot/themes; Conclusion: why you recommend it.**",
        },
      },
      questions: [
        {
          id: "ela5-u8-speaking-presenting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Effective speaking includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "mumbling"
                    },
                    {
                              "id": "b",
                              "text": "clear voice, organization, eye contact"
                    },
                    {
                              "id": "c",
                              "text": "reading only"
                    },
                    {
                              "id": "d",
                              "text": "no preparation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Clear + organized + eye contact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear + organized + eye contact.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "clear voice, organization, eye contact",
          "commonErrors": [
                    "Poor delivery."
          ]
},
        },
        {
          id: "ela5-u8-speaking-presenting-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When presenting, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "speak as fast as possible"
                    },
                    {
                              "id": "b",
                              "text": "organize information logically and speak clearly"
                    },
                    {
                              "id": "c",
                              "text": "avoid eye contact"
                    },
                    {
                              "id": "d",
                              "text": "use only notes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Organize + clear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organize + clear.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "organize information logically and speak clearly",
          "commonErrors": [
                    "Poor presentation."
          ]
},
        },
        {
          id: "ela5-u8-speaking-presenting-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give a short presentation on a topic. Describe how you organized your information and engaged the audience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Speaking",
                              "statement": "Presentation + description."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives presentation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes techniques.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Organized: intro, main points, conclusion; Engaged: eye contact, clear voice, questions.'**",
          "commonErrors": [
                    "Cannot present.",
                    "No techniques."
          ]
},
        },
        {
          id: "ela5-u8-speaking-presenting-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Eye contact' when speaking helps...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nothing"
                    },
                    {
                              "id": "b",
                              "text": "connect with the audience"
                    },
                    {
                              "id": "c",
                              "text": "speak faster"
                    },
                    {
                              "id": "d",
                              "text": "avoid questions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Connect with audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Connect with audience.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "connect with the audience",
          "commonErrors": [
                    "Thinks it's optional."
          ]
},
        },
        {
          id: "ela5-u8-speaking-presenting-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain what makes a presentation effective. Include speaking techniques and audience engagement.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Speaking",
                              "statement": "Effectiveness explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies techniques.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains engagement.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Clear voice, organization, eye contact, appropriate pace, engaging content/questions.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No techniques."
          ]
},
        },
        {
          id: "ela5-u8-speaking-presenting-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Speaking\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sharing information."
                    },
                    {
                              "id": "b",
                              "text": "Talking to audience."
                    },
                    {
                              "id": "c",
                              "text": "Easy to understand."
                    },
                    {
                              "id": "d",
                              "text": "Arrange logically."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Speaking\" means Talking to audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Speaking\" means Talking to audience.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Speaking** = Talking to audience.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-speaking-presenting-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Presenting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Easy to understand."
                    },
                    {
                              "id": "b",
                              "text": "Arrange logically."
                    },
                    {
                              "id": "c",
                              "text": "Listeners."
                    },
                    {
                              "id": "d",
                              "text": "Sharing information."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Presenting\" means Sharing information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Presenting\" means Sharing information.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Presenting** = Sharing information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-speaking-presenting-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Clear\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Arrange logically."
                    },
                    {
                              "id": "b",
                              "text": "Easy to understand."
                    },
                    {
                              "id": "c",
                              "text": "Listeners."
                    },
                    {
                              "id": "d",
                              "text": "Loudness."
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
      ],
    },
  ],
};
