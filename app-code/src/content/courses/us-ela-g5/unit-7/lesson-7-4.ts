import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "ela5-u7-lesson-7-4",
  code: "7-4",
  title: "Vocabulary Strategy",
  goal: "I CAN use word parts and context to learn new vocabulary.",
  standards: ["L.5.4", "L.5.5"],
  vocabulary: [
    { term: "Root", definition: "Base of word." },
    { term: "Prefix", definition: "Beginning." },
    { term: "Suffix", definition: "Ending." },
    { term: "Context", definition: "Surrounding words." },
    { term: "Infer", definition: "Figure out." },
    { term: "Compound", definition: "Two words joined." },
    { term: "Etymology", definition: "Word origin." },
    { term: "Nuance", definition: "Subtle difference." },
  ],
  concepts: [
    {
      id: "ela5-u7-vocabulary-strategy",
      title: "Vocabulary Strategy",
      skill: "Use roots, prefixes, suffixes and context to determine word meanings.",
      lesson: {
        sections: [
          {
            heading: "Word parts",
            body: "Root + prefix + suffix = meaning.",
          },
          {
            heading: "Context",
            body: "Surrounding words give clues.",
          },
        ],
        keyFormulas: [
          { name: "Vocabulary", statement: "Word parts + context = strategies" },
        ],
        workedExample: {
          problem: "Break down \"unhappiness\": un- (not) + happy + -ness (state) = not happy.",
          solution: "un- = not; happy = happy; -ness = state of being; unhappiness = state of not being happy.",
        },
      },
      questions: [
        {
          id: "ela5-u7-vocabulary-strategy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A prefix is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "word ending"
                    },
                    {
                              "id": "b",
                              "text": "beginning of a word that changes meaning"
                    },
                    {
                              "id": "c",
                              "text": "root"
                    },
                    {
                              "id": "d",
                              "text": "suffix"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Beginning of word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beginning of word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "beginning of a word that changes meaning",
          "commonErrors": [
                    "Confuses with suffix."
          ]
},
        },
        {
          id: "ela5-u7-vocabulary-strategy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In unhappy, un- means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "very"
                    },
                    {
                              "id": "b",
                              "text": "not"
                    },
                    {
                              "id": "c",
                              "text": "again"
                    },
                    {
                              "id": "d",
                              "text": "before"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "un- = not."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "un- = not.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "not",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "ela5-u7-vocabulary-strategy-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Break down a word into root + prefix/suffix and explain its meaning. Then use context to confirm.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vocabulary",
                              "statement": "Breakdown + context."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Breaks down word.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Uses context.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., replay: re- (again) + play = play again; context confirms.**",
          "commonErrors": [
                    "Cannot break down.",
                    "No context."
          ]
},
        },
        {
          id: "ela5-u7-vocabulary-strategy-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A suffix is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "word beginning"
                    },
                    {
                              "id": "b",
                              "text": "ending of a word that changes meaning"
                    },
                    {
                              "id": "c",
                              "text": "root"
                    },
                    {
                              "id": "d",
                              "text": "prefix"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Ending of word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ending of word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "ending of a word that changes meaning",
          "commonErrors": [
                    "Confuses with prefix."
          ]
},
        },
        {
          id: "ela5-u7-vocabulary-strategy-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how knowing word parts helps you understand unfamiliar words. Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vocabulary",
                              "statement": "Benefit + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains benefit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Word parts reveal meaning: transport = trans- (across) + port (carry) = carry across.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "ela5-u7-vocabulary-strategy-q6",
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
                              "text": "Base of word."
                    },
                    {
                              "id": "c",
                              "text": "Ending."
                    },
                    {
                              "id": "d",
                              "text": "Surrounding words."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Root\" means Base of word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Root\" means Base of word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Root** = Base of word.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u7-vocabulary-strategy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Prefix\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ending."
                    },
                    {
                              "id": "b",
                              "text": "Surrounding words."
                    },
                    {
                              "id": "c",
                              "text": "Figure out."
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
          id: "ela5-u7-vocabulary-strategy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Suffix\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Surrounding words."
                    },
                    {
                              "id": "b",
                              "text": "Ending."
                    },
                    {
                              "id": "c",
                              "text": "Figure out."
                    },
                    {
                              "id": "d",
                              "text": "Two words joined."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Suffix\" means Ending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Suffix\" means Ending.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Suffix** = Ending.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
