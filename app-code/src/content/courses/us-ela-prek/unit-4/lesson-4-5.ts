import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "epk-u4-lesson-4-5",
  code: "4-5",
  title: "Speak Clearly",
  goal: "I CAN speak in complete sentences and take turns talking.",
  standards: ["ELOF-PK.LL.SPEAK.1"],
  vocabulary: [
    { term: "Sentence", definition: "A group of words that tells something complete." },
    { term: "Complete", definition: "Having all the parts needed." },
    { term: "Turn", definition: "Your chance to talk." },
    { term: "Listen", definition: "Pay attention while others talk." },
    { term: "Express", definition: "Share your thoughts and feelings." },
  ],
  concepts: [
    {
      id: "epk-u4-speak-clearly",
      title: "Speaking clearly",
      skill: "Use complete sentences and take turns in conversation.",
      lesson: {
        sections: [
          {
            heading: "Complete sentences",
            body: "A **complete sentence** has a who/what and what they do: 'The dog runs.' Not just 'dog runs fast' — make it a full thought.",
          },
          {
            heading: "Take turns",
            body: "In a conversation, we **take turns** — one person talks while others listen. Listening is as important as speaking.",
          },
        ],
        keyFormulas: [
          { name: "Complete sentence", statement: "Who/what + action: 'The dog runs.'" },
          { name: "Turn-taking", statement: "One talks, others listen, then switch." },
        ],
        workedExample: {
          problem: "Is 'dog runs' a complete sentence?",
          solution: "Almost — 'The dog runs' is more complete because it names **who** (the dog) and **what they do** (runs).",
        },
      },
      questions: [
        {
          id: "epk-u4-speak-clearly-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a complete sentence?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dog runs"
                    },
                    {
                              "id": "b",
                              "text": "The dog runs."
                    },
                    {
                              "id": "c",
                              "text": "runs fast"
                    },
                    {
                              "id": "d",
                              "text": "dog"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'The dog runs.' has who (dog) + action (runs)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'The dog runs.' has who (dog) + action (runs).",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**The dog runs.**",
          "commonErrors": [
                    "Picks incomplete phrase."
          ]
},
        },
        {
          id: "epk-u4-speak-clearly-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a conversation, 'taking turns' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "everyone talks at once"
                    },
                    {
                              "id": "b",
                              "text": "one talks while others listen, then switch"
                    },
                    {
                              "id": "c",
                              "text": "only one person ever talks"
                    },
                    {
                              "id": "d",
                              "text": "no one talks"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Turn-taking = talk, listen, switch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Turn-taking = talk, listen, switch.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Talk, listen, switch**",
          "commonErrors": [
                    "Thinks everyone talks at once."
          ]
},
        },
        {
          id: "epk-u4-speak-clearly-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Say a complete sentence about what you did today.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Complete sentence",
                              "statement": "Who/what + action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says a complete sentence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I played with my dog.'**",
          "commonErrors": [
                    "Incomplete phrase.",
                    "Cannot make sentence."
          ]
},
        },
        {
          id: "epk-u4-speak-clearly-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is listening important when someone else talks?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It is not"
                    },
                    {
                              "id": "b",
                              "text": "So you understand and can respond"
                    },
                    {
                              "id": "c",
                              "text": "To ignore them"
                    },
                    {
                              "id": "d",
                              "text": "To talk louder"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Listening helps you understand and take your turn well."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Listening helps you understand and take your turn well.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**To understand and respond**",
          "commonErrors": [
                    "Thinks listening is pointless."
          ]
},
        },
        {
          id: "epk-u4-speak-clearly-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Have a short conversation with someone. Take turns: one talks, the other listens, then switch. What did you talk about?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Turn-taking",
                              "statement": "Talk, listen, switch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Takes turns correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says what was discussed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'We talked about our pets.'**",
          "commonErrors": [
                    "Talks over the other.",
                    "Cannot say topic."
          ]
},
        },
        {
          id: "epk-u4-speak-clearly-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sentence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Having all the parts needed."
                    },
                    {
                              "id": "b",
                              "text": "A group of words that tells something complete."
                    },
                    {
                              "id": "c",
                              "text": "Your chance to talk."
                    },
                    {
                              "id": "d",
                              "text": "Pay attention while others talk."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sentence\" means A group of words that tells something complete."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sentence\" means A group of words that tells something complete.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sentence** = A group of words that tells something complete.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u4-speak-clearly-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Complete\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Your chance to talk."
                    },
                    {
                              "id": "b",
                              "text": "Pay attention while others talk."
                    },
                    {
                              "id": "c",
                              "text": "Share your thoughts and feelings."
                    },
                    {
                              "id": "d",
                              "text": "Having all the parts needed."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Complete\" means Having all the parts needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Complete\" means Having all the parts needed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Complete** = Having all the parts needed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u4-speak-clearly-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Turn\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pay attention while others talk."
                    },
                    {
                              "id": "b",
                              "text": "Your chance to talk."
                    },
                    {
                              "id": "c",
                              "text": "Share your thoughts and feelings."
                    },
                    {
                              "id": "d",
                              "text": "A group of words that tells something complete."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Turn\" means Your chance to talk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Turn\" means Your chance to talk.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Turn** = Your chance to talk.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
