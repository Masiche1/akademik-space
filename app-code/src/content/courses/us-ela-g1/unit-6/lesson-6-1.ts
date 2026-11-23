import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ela1-u6-lesson-6-1",
  code: "6-1",
  title: "What Is an Informational Text?",
  goal: "I CAN tell the difference between a story and an informational text.",
  standards: ["W.1.2"],
  vocabulary: [
    { term: "Informational", definition: "Teaches facts." },
    { term: "Fact", definition: "Something true." },
    { term: "Topic", definition: "What we write about." },
    { term: "Explain", definition: "Tell how or why." },
    { term: "Teach", definition: "Give information." },
    { term: "Real", definition: "True information." },
    { term: "Nonfiction", definition: "Real, not made up." },
    { term: "Write", definition: "Put words together." },
  ],
  concepts: [
    {
      id: "ela1-u6-info-intro",
      title: "What is an informational text?",
      skill: "Understand that informational writing teaches facts about a topic.",
      lesson: {
        sections: [
          {
            heading: "Teach, don't tell a story",
            body: "An **informational text** **teaches** facts about a **topic** — like 'How bees make honey'. It is **nonfiction** — real information.",
          },
          {
            heading: "Facts, not fiction",
            body: "Informational writing gives **real** information. It **explains** how or why something is.",
          },
        ],
        keyFormulas: [
          { name: "Informational", statement: "Teaches facts; nonfiction; explains how/why." },
        ],
        workedExample: {
          problem: "Is 'How to plant a seed' informational or a story?",
          solution: "It's **informational** — it teaches real steps/facts.",
        },
      },
      questions: [
        {
          id: "ela1-u6-info-intro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'informational text' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a made-up story"
                    },
                    {
                              "id": "b",
                              "text": "a text that teaches facts"
                    },
                    {
                              "id": "c",
                              "text": "a poem"
                    },
                    {
                              "id": "d",
                              "text": "a joke"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Informational = teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Informational = teaches facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**teaches facts**",
          "commonErrors": [
                    "Thinks it's fiction."
          ]
},
        },
        {
          id: "ela1-u6-info-intro-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Informational writing is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fiction"
                    },
                    {
                              "id": "b",
                              "text": "nonfiction — real information"
                    },
                    {
                              "id": "c",
                              "text": "a narrative"
                    },
                    {
                              "id": "d",
                              "text": "a poem only"
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
          "finalAnswer": "**nonfiction**",
          "commonErrors": [
                    "Confuses with fiction."
          ]
},
        },
        {
          id: "ela1-u6-info-intro-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tell whether these are informational or stories: 'How bees make honey' and 'The Three Little Pigs'.",
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
          "finalAnswer": "**'How bees'=info; 'Three Pigs'=story**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Cannot tell."
          ]
},
        },
        {
          id: "ela1-u6-info-intro-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'topic' of an informational text is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a character"
                    },
                    {
                              "id": "b",
                              "text": "what we write about"
                    },
                    {
                              "id": "c",
                              "text": "the ending"
                    },
                    {
                              "id": "d",
                              "text": "a picture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Topic = what we write about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Topic = what we write about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what we write about**",
          "commonErrors": [
                    "Confuses with character."
          ]
},
        },
        {
          id: "ela1-u6-info-intro-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write one sentence that teaches a fact and one that tells a story event.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Info vs story",
                              "statement": "Fact sentence + story sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes fact sentence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Writes story sentence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Bees make honey. The pig built a house.'**",
          "commonErrors": [
                    "Both same type.",
                    "Cannot distinguish."
          ]
},
        },
        {
          id: "ela1-u6-info-intro-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something true."
                    },
                    {
                              "id": "b",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "c",
                              "text": "What we write about."
                    },
                    {
                              "id": "d",
                              "text": "Tell how or why."
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
          id: "ela1-u6-info-intro-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we write about."
                    },
                    {
                              "id": "b",
                              "text": "Tell how or why."
                    },
                    {
                              "id": "c",
                              "text": "Give information."
                    },
                    {
                              "id": "d",
                              "text": "Something true."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ela1-u6-info-intro-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tell how or why."
                    },
                    {
                              "id": "b",
                              "text": "What we write about."
                    },
                    {
                              "id": "c",
                              "text": "Give information."
                    },
                    {
                              "id": "d",
                              "text": "True information."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Topic\" means What we write about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Topic\" means What we write about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Topic** = What we write about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
