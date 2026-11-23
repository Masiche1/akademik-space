import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "ela6-u7-lesson-7-4",
  code: "7-4",
  title: "Word Parts: Roots, Prefixes, Suffixes",
  goal: "I CAN use word parts to determine meaning.",
  standards: ["L.6.4"],
  vocabulary: [
    { term: "Root", definition: "Base meaning." },
    { term: "Prefix", definition: "Beginning." },
    { term: "Suffix", definition: "End." },
    { term: "Combine", definition: "Put together." },
    { term: "Meaning", definition: "What word means." },
    { term: "Un-", definition: "Not." },
    { term: "Re-", definition: "Again." },
    { term: "-tion", definition: "Noun ending." },
  ],
  concepts: [
    {
      id: "ela6-u7-word-parts",
      title: "Word parts",
      skill: "Use roots, prefixes, and suffixes to determine word meanings.",
      lesson: {
        sections: [
          {
            heading: "Breaking down",
            body: "**Root** = base meaning; **prefix** = beginning (un-, re-, pre-); **suffix** = end (-tion, -ly, -able).",
          },
          {
            heading: "Combining",
            body: "Put parts together: 'unhappy' = un- (not) + happy = not happy. 'Rewrite' = re- (again) + write = write again.",
          },
        ],
        keyFormulas: [
          { name: "Word parts", statement: "Prefix + root + suffix = complete meaning." },
        ],
        workedExample: {
          problem: "What does 'unhappiness' mean? Break it down.",
          solution: "**un- (not) + happy + -ness (state) = state of not being happy.**",
        },
      },
      questions: [
        {
          id: "ela6-u7-word-parts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'root' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "beginning of word"
                    },
                    {
                              "id": "b",
                              "text": "base meaning"
                    },
                    {
                              "id": "c",
                              "text": "end of word"
                    },
                    {
                              "id": "d",
                              "text": "whole word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Base meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Base meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "base meaning",
          "commonErrors": [
                    "Confuses with affix."
          ]
},
        },
        {
          id: "ela6-u7-word-parts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 'rewrite', the prefix 're-' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "not"
                    },
                    {
                              "id": "b",
                              "text": "again"
                    },
                    {
                              "id": "c",
                              "text": "before"
                    },
                    {
                              "id": "d",
                              "text": "after"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Again."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Again.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "again",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "ela6-u7-word-parts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Break down the word 'unbelievable' into its parts and explain the meaning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Word parts",
                              "statement": "Parts + meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Breaks down word.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**un- (not) + believe + -able (can be) = cannot be believed; very surprising.**",
          "commonErrors": [
                    "Wrong breakdown.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "ela6-u7-word-parts-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'suffix' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "beginning of word"
                    },
                    {
                              "id": "b",
                              "text": "end of word"
                    },
                    {
                              "id": "c",
                              "text": "base meaning"
                    },
                    {
                              "id": "d",
                              "text": "whole word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "End of word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "End of word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "end of word",
          "commonErrors": [
                    "Confuses with prefix."
          ]
},
        },
        {
          id: "ela6-u7-word-parts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Break down a word into prefix, root, and suffix, then explain how the parts create the meaning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Word parts",
                              "statement": "Breakdown + meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Breaks down word.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains meaning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Misunderstand: mis- (wrongly) + under + stand = understand incorrectly.'**",
          "commonErrors": [
                    "Cannot break down.",
                    "No meaning explained."
          ]
},
        },
        {
          id: "ela6-u7-word-parts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Root\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Beginning."
                    },
                    {
                              "id": "b",
                              "text": "Base meaning."
                    },
                    {
                              "id": "c",
                              "text": "End."
                    },
                    {
                              "id": "d",
                              "text": "Put together."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Root\" means Base meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Root\" means Base meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Root** = Base meaning.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-word-parts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Prefix\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "End."
                    },
                    {
                              "id": "b",
                              "text": "Put together."
                    },
                    {
                              "id": "c",
                              "text": "What word means."
                    },
                    {
                              "id": "d",
                              "text": "Beginning."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Prefix\" means Beginning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Prefix\" means Beginning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Prefix** = Beginning.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-word-parts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Suffix\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put together."
                    },
                    {
                              "id": "b",
                              "text": "End."
                    },
                    {
                              "id": "c",
                              "text": "What word means."
                    },
                    {
                              "id": "d",
                              "text": "Not."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Suffix\" means End."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Suffix\" means End.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Suffix** = End.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
