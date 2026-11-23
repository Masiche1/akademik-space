import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "ela6-u5-lesson-5-4",
  code: "5-4",
  title: "Audience and Purpose",
  goal: "I CAN tailor my argument to my audience and purpose.",
  standards: ["W.6.1"],
  vocabulary: [
    { term: "Audience", definition: "Who it's for." },
    { term: "Purpose", definition: "Why writing." },
    { term: "Tone", definition: "Attitude." },
    { term: "Formal", definition: "Official." },
    { term: "Informal", definition: "Casual." },
    { term: "Adapt", definition: "Change for audience." },
    { term: "Consider", definition: "Think about." },
    { term: "Effective", definition: "Works well." },
  ],
  concepts: [
    {
      id: "ela6-u5-audience-purpose",
      title: "Audience and purpose",
      skill: "Adapt arguments for different audiences and purposes.",
      lesson: {
        sections: [
          {
            heading: "Know your audience",
            body: "**Audience** = who will read your argument. **Purpose** = why you're writing (inform, persuade, explain).",
          },
          {
            heading: "Adapting",
            body: "Change **tone**, **language**, and **evidence** based on audience. Formal for officials, casual for friends.",
          },
        ],
        keyFormulas: [
          { name: "Audience/purpose", statement: "Adapt tone and evidence for who reads and why." },
        ],
        workedExample: {
          problem: "Write about school uniforms for (a) students and (b) school board. How would you adapt?",
          solution: "**Students: casual tone, peer examples; Board: formal tone, research data, policy implications.**",
        },
      },
      questions: [
        {
          id: "ela6-u5-audience-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Audience' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the author"
                    },
                    {
                              "id": "b",
                              "text": "who will read your writing"
                    },
                    {
                              "id": "c",
                              "text": "the topic"
                    },
                    {
                              "id": "d",
                              "text": "the purpose"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Who reads."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Who reads.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "who will read your writing",
          "commonErrors": [
                    "Confuses with author."
          ]
},
        },
        {
          id: "ela6-u5-audience-purpose-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To adapt writing for different audiences, you should change...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only the topic"
                    },
                    {
                              "id": "b",
                              "text": "tone, language, and evidence"
                    },
                    {
                              "id": "c",
                              "text": "only the title"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Tone + language + evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tone + language + evidence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "tone, language, and evidence",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u5-audience-purpose-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe how you would adapt an argument about homework for two different audiences: your teacher and your friends.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Audience",
                              "statement": "Two adaptations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes adaptations.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Teacher: formal, cite research, respectful tone; Friends: casual, relatable examples, conversational tone.**",
          "commonErrors": [
                    "Same for both.",
                    "Cannot adapt."
          ]
},
        },
        {
          id: "ela6-u5-audience-purpose-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Purpose' in writing refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the topic"
                    },
                    {
                              "id": "b",
                              "text": "why you are writing"
                    },
                    {
                              "id": "c",
                              "text": "the audience"
                    },
                    {
                              "id": "d",
                              "text": "the length"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Why writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Why writing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "why you are writing",
          "commonErrors": [
                    "Confuses with topic."
          ]
},
        },
        {
          id: "ela6-u5-audience-purpose-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how you would adapt a persuasive argument for a formal audience vs an informal audience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Audience",
                              "statement": "Two adaptations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes formal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes informal.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Formal: statistics, expert quotes, professional tone; Informal: personal stories, casual language, relatable examples.**",
          "commonErrors": [
                    "Cannot adapt.",
                    "Same for both."
          ]
},
        },
        {
          id: "ela6-u5-audience-purpose-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Audience\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why writing."
                    },
                    {
                              "id": "b",
                              "text": "Who it's for."
                    },
                    {
                              "id": "c",
                              "text": "Attitude."
                    },
                    {
                              "id": "d",
                              "text": "Official."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Audience\" means Who it's for."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Audience\" means Who it's for.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Audience** = Who it's for.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u5-audience-purpose-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Purpose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Attitude."
                    },
                    {
                              "id": "b",
                              "text": "Official."
                    },
                    {
                              "id": "c",
                              "text": "Casual."
                    },
                    {
                              "id": "d",
                              "text": "Why writing."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Purpose\" means Why writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Purpose\" means Why writing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Purpose** = Why writing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u5-audience-purpose-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tone\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Official."
                    },
                    {
                              "id": "b",
                              "text": "Attitude."
                    },
                    {
                              "id": "c",
                              "text": "Casual."
                    },
                    {
                              "id": "d",
                              "text": "Change for audience."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Tone\" means Attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tone\" means Attitude.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Tone** = Attitude.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
