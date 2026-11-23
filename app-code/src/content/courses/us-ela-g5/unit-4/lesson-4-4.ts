import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "ela5-u4-lesson-4-4",
  code: "4-4",
  title: "Multiple Sources",
  goal: "I CAN integrate information from multiple informational texts.",
  standards: ["RI.5.9"],
  vocabulary: [
    { term: "Source", definition: "Where info comes from." },
    { term: "Multiple", definition: "More than one." },
    { term: "Integrate", definition: "Combine info." },
    { term: "Compare", definition: "See similarities/differences." },
    { term: "Synthesize", definition: "Combine into whole." },
    { term: "Reliable", definition: "Trustworthy." },
    { term: "Author", definition: "Who wrote it." },
    { term: "Purpose", definition: "Why it was written." },
  ],
  concepts: [
    {
      id: "ela5-u4-multiple-sources",
      title: "Multiple sources",
      skill: "Integrate information from multiple informational texts on the same topic.",
      lesson: {
        sections: [
          {
            heading: "More than one source",
            body: "When you read **multiple texts** on the same topic, **integrate** (combine) the information. Look for **similarities** (what they agree on) and **differences** (what they say differently).",
          },
          {
            heading: "Evaluating sources",
            body: "Consider each source's **author**, **purpose**, and **reliability**. Not all sources are equally trustworthy.",
          },
        ],
        keyFormulas: [
          { name: "Multiple sources", statement: "Similarities + differences + reliability = integrated understanding." },
        ],
        workedExample: {
          problem: "Read two articles about renewable energy. How do they differ?",
          solution: "Article A focuses on solar; Article B on wind — different angles on same topic.",
        },
      },
      questions: [
        {
          id: "ela5-u4-multiple-sources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Integrating multiple sources' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "reading only one"
                    },
                    {
                              "id": "b",
                              "text": "combining information from several texts"
                    },
                    {
                              "id": "c",
                              "text": "ignoring differences"
                    },
                    {
                              "id": "d",
                              "text": "copying one source"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Combine several texts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combine several texts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "combining information from several texts",
          "commonErrors": [
                    "Only reads one."
          ]
},
        },
        {
          id: "ela5-u4-multiple-sources-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When evaluating sources, you should consider...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only length"
                    },
                    {
                              "id": "b",
                              "text": "author, purpose and reliability"
                    },
                    {
                              "id": "c",
                              "text": "only pictures"
                    },
                    {
                              "id": "d",
                              "text": "only title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Author, purpose, reliability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Author, purpose, reliability.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "author, purpose and reliability",
          "commonErrors": [
                    "Ignores key factors."
          ]
},
        },
        {
          id: "ela5-u4-multiple-sources-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read two informational texts on the same topic. State one thing they agree on and one thing they say differently.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiple sources",
                              "statement": "Agreement + difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds agreement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Agree: [shared fact]; Differ: [different perspective/detail].**",
          "commonErrors": [
                    "Cannot compare.",
                    "No difference."
          ]
},
        },
        {
          id: "ela5-u4-multiple-sources-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'reliable' source is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any source"
                    },
                    {
                              "id": "b",
                              "text": "a trustworthy, accurate source"
                    },
                    {
                              "id": "c",
                              "text": "the longest"
                    },
                    {
                              "id": "d",
                              "text": "the newest"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Trustworthy/accurate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trustworthy/accurate.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a trustworthy, accurate source",
          "commonErrors": [
                    "Thinks any source works."
          ]
},
        },
        {
          id: "ela5-u4-multiple-sources-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does reading multiple sources give you a better understanding than reading just one?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiple sources",
                              "statement": "Benefit of multiple."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains benefit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives reasoning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Multiple sources show different perspectives, fill gaps, and help verify facts.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No reasoning."
          ]
},
        },
        {
          id: "ela5-u4-multiple-sources-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Source\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More than one."
                    },
                    {
                              "id": "b",
                              "text": "Where info comes from."
                    },
                    {
                              "id": "c",
                              "text": "Combine info."
                    },
                    {
                              "id": "d",
                              "text": "See similarities/differences."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Source\" means Where info comes from."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Source\" means Where info comes from.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Source** = Where info comes from.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u4-multiple-sources-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiple\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine info."
                    },
                    {
                              "id": "b",
                              "text": "See similarities/differences."
                    },
                    {
                              "id": "c",
                              "text": "Combine into whole."
                    },
                    {
                              "id": "d",
                              "text": "More than one."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Multiple\" means More than one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Multiple\" means More than one.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Multiple** = More than one.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u4-multiple-sources-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Integrate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See similarities/differences."
                    },
                    {
                              "id": "b",
                              "text": "Combine info."
                    },
                    {
                              "id": "c",
                              "text": "Combine into whole."
                    },
                    {
                              "id": "d",
                              "text": "Trustworthy."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Integrate\" means Combine info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Integrate\" means Combine info.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Integrate** = Combine info.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
