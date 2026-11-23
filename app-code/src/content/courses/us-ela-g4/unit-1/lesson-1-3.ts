import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ela4-u1-lesson-1-3",
  code: "1-3",
  title: "Describing Characters",
  goal: "I CAN describe characters using text details.",
  standards: ["RL.4.3"],
  vocabulary: [
    { term: "Character", definition: "Who is in story." },
    { term: "Trait", definition: "Personality quality." },
    { term: "Describe", definition: "Tell what they're like." },
    { term: "Detail", definition: "Small fact." },
    { term: "Evidence", definition: "Supporting detail." },
    { term: "Dialogue", definition: "What they say." },
    { term: "Action", definition: "What they do." },
    { term: "Feeling", definition: "Emotion they show." },
  ],
  concepts: [
    {
      id: "ela4-u1-characters",
      title: "Describing characters",
      skill: "Describe characters using traits supported by text details.",
      lesson: {
        sections: [
          {
            heading: "Traits and evidence",
            body: "A **trait** is a personality quality (kind, brave, stubborn). Describe characters by citing **what they say, do, and feel** — that's your **evidence**.",
          },
          {
            heading: "Example",
            body: "'Mia is **brave** because she climbed the tall tree even though she was scared (the story says her hands shook).'",
          },
        ],
        keyFormulas: [
          { name: "Character", statement: "Trait + evidence from text = description." },
        ],
        workedExample: {
          problem: "Character: 'Sam shared his lunch with a hungry friend.' Trait?",
          solution: "Sam is **generous/kind** — sharing shows it.",
        },
      },
      questions: [
        {
          id: "ela4-u1-characters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'trait' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a detail"
                    },
                    {
                              "id": "b",
                              "text": "a personality quality"
                    },
                    {
                              "id": "c",
                              "text": "a setting"
                    },
                    {
                              "id": "d",
                              "text": "a plot point"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Trait = personality quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trait = personality quality.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a personality quality**",
          "commonErrors": [
                    "Confuses with detail."
          ]
},
        },
        {
          id: "ela4-u1-characters-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To describe a character, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess"
                    },
                    {
                              "id": "b",
                              "text": "cite what they say/do/feel"
                    },
                    {
                              "id": "c",
                              "text": "ignore the text"
                    },
                    {
                              "id": "d",
                              "text": "use the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Use text evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use text evidence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**cite what they say/do/feel**",
          "commonErrors": [
                    "Guesses instead."
          ]
},
        },
        {
          id: "ela4-u1-characters-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Pick a character. Describe one trait and cite two pieces of evidence (what they say and do).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Character",
                              "statement": "Trait + two evidence pieces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names trait.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cites two evidence pieces.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Brave: climbed the tree; said 'I can do it.'**",
          "commonErrors": [
                    "No trait.",
                    "No evidence."
          ]
},
        },
        {
          id: "ela4-u1-characters-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Dialogue' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a picture"
                    },
                    {
                              "id": "b",
                              "text": "what a character says"
                    },
                    {
                              "id": "c",
                              "text": "a setting"
                    },
                    {
                              "id": "d",
                              "text": "a theme"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Dialogue = what they say."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dialogue = what they say.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what a character says**",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela4-u1-characters-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe two characters. How are their traits different? Use evidence for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Character",
                              "statement": "Two traits + evidence + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes both characters.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Compares traits.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Mia is cautious (waited), Sam is bold (jumped first); both faced fear.'**",
          "commonErrors": [
                    "Only one character.",
                    "No comparison."
          ]
},
        },
        {
          id: "ela4-u1-characters-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Personality quality."
                    },
                    {
                              "id": "b",
                              "text": "Who is in story."
                    },
                    {
                              "id": "c",
                              "text": "Tell what they're like."
                    },
                    {
                              "id": "d",
                              "text": "Small fact."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Who is in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Who is in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Who is in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-characters-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trait\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tell what they're like."
                    },
                    {
                              "id": "b",
                              "text": "Small fact."
                    },
                    {
                              "id": "c",
                              "text": "Supporting detail."
                    },
                    {
                              "id": "d",
                              "text": "Personality quality."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Trait\" means Personality quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Trait\" means Personality quality.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Trait** = Personality quality.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-characters-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Describe\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small fact."
                    },
                    {
                              "id": "b",
                              "text": "Tell what they're like."
                    },
                    {
                              "id": "c",
                              "text": "Supporting detail."
                    },
                    {
                              "id": "d",
                              "text": "What they say."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Describe\" means Tell what they're like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Describe\" means Tell what they're like.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Describe** = Tell what they're like.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
