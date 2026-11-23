import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "ela3-u3-lesson-3-4",
  code: "3-4",
  title: "Informational vs Story",
  goal: "I CAN tell the difference between informational text and stories.",
  standards: ["RI.3.8"],
  vocabulary: [
    { term: "Informational", definition: "Teaches facts." },
    { term: "Story", definition: "Made-up tale." },
    { term: "Fact", definition: "Something true." },
    { term: "Fiction", definition: "Made-up." },
    { term: "Nonfiction", definition: "Real information." },
    { term: "Character", definition: "Who is in story." },
    { term: "Topic", definition: "What it's about." },
    { term: "Purpose", definition: "Why written." },
  ],
  concepts: [
    {
      id: "ela3-u3-info-vs-story",
      title: "Informational vs story",
      skill: "Distinguish between informational (nonfiction) and story (fiction) texts.",
      lesson: {
        sections: [
          {
            heading: "Two types of text",
            body: "**Informational** texts teach **facts** (nonfiction); **stories** tell made-up tales (fiction). Stories have **characters**; informational texts have **topics**.",
          },
          {
            heading: "How to tell",
            body: "Ask: does it teach real information or tell a made-up story? 'How bees make honey' = informational; 'The Very Hungry Caterpillar' = story.",
          },
        ],
        keyFormulas: [
          { name: "Informational", statement: "Teaches facts (nonfiction)." },
          { name: "Story", statement: "Tells made-up tale (fiction)." },
        ],
        workedExample: {
          problem: "Is 'How to Plant a Seed' informational or a story?",
          solution: "It's **informational** — it teaches real facts/steps.",
        },
      },
      questions: [
        {
          id: "ela3-u3-info-vs-story-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is informational text?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The Three Little Pigs"
                    },
                    {
                              "id": "b",
                              "text": "How Bees Make Honey"
                    },
                    {
                              "id": "c",
                              "text": "Cinderella"
                    },
                    {
                              "id": "d",
                              "text": "A fairy tale"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'How Bees' teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'How Bees' teaches facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "How Bees Make Honey",
          "commonErrors": [
                    "Picks fiction."
          ]
},
        },
        {
          id: "ela3-u3-info-vs-story-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Nonfiction' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "made up"
                    },
                    {
                              "id": "b",
                              "text": "real information"
                    },
                    {
                              "id": "c",
                              "text": "a story"
                    },
                    {
                              "id": "d",
                              "text": "a poem"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Nonfiction = real info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nonfiction = real info.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "real information",
          "commonErrors": [
                    "Confuses with fiction."
          ]
},
        },
        {
          id: "ela3-u3-info-vs-story-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tell whether these are informational or stories: 'How volcanoes erupt' and 'The Gingerbread Man'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Info vs story",
                              "statement": "Info=teaches facts, story=made-up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies both correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**'Volcanoes'=info; 'Gingerbread'=story**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Cannot tell."
          ]
},
        },
        {
          id: "ela3-u3-info-vs-story-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story usually has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only facts"
                    },
                    {
                              "id": "b",
                              "text": "characters and a plot"
                    },
                    {
                              "id": "c",
                              "text": "only topics"
                    },
                    {
                              "id": "d",
                              "text": "only headings"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Stories have characters + plot."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stories have characters + plot.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "characters + plot",
          "commonErrors": [
                    "Confuses with info text."
          ]
},
        },
        {
          id: "ela3-u3-info-vs-story-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find one informational text and one story. Explain how you know which is which.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Info vs story",
                              "statement": "Identify both types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names info text.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names story + explains difference.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Info: How X works (facts). Story: Once upon a time (made up).'**",
          "commonErrors": [
                    "Only one type.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "ela3-u3-info-vs-story-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Made-up tale."
                    },
                    {
                              "id": "b",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "c",
                              "text": "Something true."
                    },
                    {
                              "id": "d",
                              "text": "Made-up."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Informational\" means Teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Informational\" means Teaches facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Informational** = Teaches facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u3-info-vs-story-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Story\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something true."
                    },
                    {
                              "id": "b",
                              "text": "Made-up."
                    },
                    {
                              "id": "c",
                              "text": "Real information."
                    },
                    {
                              "id": "d",
                              "text": "Made-up tale."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Story\" means Made-up tale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Story\" means Made-up tale.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Story** = Made-up tale.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u3-info-vs-story-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Made-up."
                    },
                    {
                              "id": "b",
                              "text": "Something true."
                    },
                    {
                              "id": "c",
                              "text": "Real information."
                    },
                    {
                              "id": "d",
                              "text": "Who is in story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fact\" means Something true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Something true.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fact** = Something true.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
