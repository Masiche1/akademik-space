import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "ela5-u3-lesson-3-4",
  code: "3-4",
  title: "Media Literacy",
  goal: "I CAN analyze how media messages are created and their purpose.",
  standards: ["RL.5.7"],
  vocabulary: [
    { term: "Media", definition: "Films, images, ads." },
    { term: "Message", definition: "What it says." },
    { term: "Purpose", definition: "Why it was made." },
    { term: "Audience", definition: "Who it targets." },
    { term: "Technique", definition: "How it persuades." },
    { term: "Analyze", definition: "Study carefully." },
    { term: "Bias", definition: "Slanted view." },
    { term: "Reliable", definition: "Trustworthy." },
  ],
  concepts: [
    {
      id: "ela5-u3-media-literacy",
      title: "Media Literacy",
      skill: "Analyze media messages, their purpose and techniques used.",
      lesson: {
        sections: [
          {
            heading: "Media",
            body: "Created to persuade or inform.",
          },
          {
            heading: "Techniques",
            body: "Images, music, words to influence.",
          },
        ],
        keyFormulas: [
          { name: "Media", statement: "Purpose + audience + techniques = analysis" },
        ],
        workedExample: {
          problem: "Analyze a commercial: what is its purpose and what techniques does it use?",
          solution: "Purpose: sell product. Techniques: catchy music, celebrity, happy images, repetition.",
        },
      },
      questions: [
        {
          id: "ela5-u3-media-literacy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The purpose of an advertisement is to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "inform only"
                    },
                    {
                              "id": "b",
                              "text": "persuade you to buy something"
                    },
                    {
                              "id": "c",
                              "text": "entertain"
                    },
                    {
                              "id": "d",
                              "text": "educate"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Persuade to buy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Persuade to buy.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "persuade you to buy something",
          "commonErrors": [
                    "Wrong purpose."
          ]
},
        },
        {
          id: "ela5-u3-media-literacy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Media techniques include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only words"
                    },
                    {
                              "id": "b",
                              "text": "images, music, repetition, celebrity"
                    },
                    {
                              "id": "c",
                              "text": "only facts"
                    },
                    {
                              "id": "d",
                              "text": "only text"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Images, music, repetition, celebrity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Images, music, repetition, celebrity.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "images, music, repetition, celebrity",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela5-u3-media-literacy-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Analyze a media message (ad, poster, video). State its purpose, audience, and two techniques used.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Media",
                              "statement": "Purpose + audience + techniques."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States purpose + audience.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies techniques.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Purpose: sell/inform; Audience: [who]; Techniques: [images, music, etc.].**",
          "commonErrors": [
                    "Cannot analyze.",
                    "Missing parts."
          ]
},
        },
        {
          id: "ela5-u3-media-literacy-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bias in media means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "balance"
                    },
                    {
                              "id": "b",
                              "text": "a slanted or unfair view"
                    },
                    {
                              "id": "c",
                              "text": "accuracy"
                    },
                    {
                              "id": "d",
                              "text": "clarity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Slanted view."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slanted view.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a slanted or unfair view",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "ela5-u3-media-literacy-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How do media creators use techniques to influence their audience? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Media",
                              "statement": "Techniques + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains techniques.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., Ads use bright colors and happy music to make products seem appealing.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "ela5-u3-media-literacy-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Media\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it says."
                    },
                    {
                              "id": "b",
                              "text": "Films, images, ads."
                    },
                    {
                              "id": "c",
                              "text": "Why it was made."
                    },
                    {
                              "id": "d",
                              "text": "Who it targets."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Media\" means Films, images, ads."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Media\" means Films, images, ads.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Media** = Films, images, ads.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-media-literacy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Message\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why it was made."
                    },
                    {
                              "id": "b",
                              "text": "Who it targets."
                    },
                    {
                              "id": "c",
                              "text": "How it persuades."
                    },
                    {
                              "id": "d",
                              "text": "What it says."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Message\" means What it says."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Message\" means What it says.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Message** = What it says.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-media-literacy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Purpose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who it targets."
                    },
                    {
                              "id": "b",
                              "text": "Why it was made."
                    },
                    {
                              "id": "c",
                              "text": "How it persuades."
                    },
                    {
                              "id": "d",
                              "text": "Study carefully."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Purpose\" means Why it was made."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Purpose\" means Why it was made.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Purpose** = Why it was made.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
