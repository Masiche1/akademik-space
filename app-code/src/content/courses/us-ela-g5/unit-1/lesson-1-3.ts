import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ela5-u1-lesson-1-3",
  code: "1-3",
  title: "Summarizing Stories",
  goal: "I CAN summarize a story including key events and characters.",
  standards: ["RL.5.2"],
  vocabulary: [
    { term: "Summary", definition: "Short version." },
    { term: "Key events", definition: "Important things that happen." },
    { term: "Character", definition: "Person in story." },
    { term: "Setting", definition: "Where/when." },
    { term: "Plot", definition: "What happens." },
    { term: "Main idea", definition: "Big point." },
    { term: "Detail", definition: "Small fact." },
    { term: "Condense", definition: "Make shorter." },
  ],
  concepts: [
    {
      id: "ela5-u1-summarizing-stories",
      title: "Summarizing stories",
      skill: "Write a summary that includes key events, characters and setting.",
      lesson: {
        sections: [
          {
            heading: "Short version",
            body: "A **summary** tells the **main events** in a **short** form. Include **who**, **what**, **where**, and **the ending**.",
          },
          {
            heading: "What to include",
            body: "**Characters** (who), **setting** (where/when), **key events** (what happens), and **resolution** (how it ends). Leave out small details.",
          },
        ],
        keyFormulas: [
          { name: "Summary", statement: "Who + where + what happens + ending = summary." },
        ],
        workedExample: {
          problem: "Summarize: A girl finds a lost dog, takes it home, and returns it to its owner.",
          solution: "**A girl finds a lost dog, cares for it, and returns it to its happy owner.**",
        },
      },
      questions: [
        {
          id: "ela5-u1-summarizing-stories-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'summary' should include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "every detail"
                    },
                    {
                              "id": "b",
                              "text": "only the main events"
                    },
                    {
                              "id": "c",
                              "text": "your opinion"
                    },
                    {
                              "id": "d",
                              "text": "the illustrations"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Only main events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only main events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "only the main events",
          "commonErrors": [
                    "Includes too much detail."
          ]
},
        },
        {
          id: "ela5-u1-summarizing-stories-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When summarizing, you should include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "minor details"
                    },
                    {
                              "id": "b",
                              "text": "characters, setting, key events and ending"
                    },
                    {
                              "id": "c",
                              "text": "only the ending"
                    },
                    {
                              "id": "d",
                              "text": "only the beginning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Characters, setting, events, ending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Characters, setting, events, ending.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "characters, setting, key events and ending",
          "commonErrors": [
                    "Misses key parts."
          ]
},
        },
        {
          id: "ela5-u1-summarizing-stories-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Write a 3-4 sentence summary including who, where, what happens, and how it ends.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Summarizing",
                              "statement": "Complete summary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Includes all parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'In a small town, a boy finds a mysterious map. He follows it through the forest and discovers an old treasure. He shares it with his friends.'**",
          "commonErrors": [
                    "Missing parts.",
                    "Too detailed."
          ]
},
        },
        {
          id: "ela5-u1-summarizing-stories-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A summary should be...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "very long"
                    },
                    {
                              "id": "b",
                              "text": "much shorter than the original"
                    },
                    {
                              "id": "c",
                              "text": "the same length"
                    },
                    {
                              "id": "d",
                              "text": "your own story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Much shorter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Much shorter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "much shorter than the original",
          "commonErrors": [
                    "Not condensed enough."
          ]
},
        },
        {
          id: "ela5-u1-summarizing-stories-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Summarize a story in your own words. Then explain which details you left out and why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Summarizing",
                              "statement": "Summary + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes summary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains choices.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Summary: main events only; Left out: minor descriptions, repeated actions.**",
          "commonErrors": [
                    "Cannot summarize.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela5-u1-summarizing-stories-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Summary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Important things that happen."
                    },
                    {
                              "id": "b",
                              "text": "Short version."
                    },
                    {
                              "id": "c",
                              "text": "Person in story."
                    },
                    {
                              "id": "d",
                              "text": "Where/when."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Summary\" means Short version."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Summary\" means Short version.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Summary** = Short version.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u1-summarizing-stories-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Key events\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person in story."
                    },
                    {
                              "id": "b",
                              "text": "Where/when."
                    },
                    {
                              "id": "c",
                              "text": "What happens."
                    },
                    {
                              "id": "d",
                              "text": "Important things that happen."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Key events\" means Important things that happen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Key events\" means Important things that happen.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Key events** = Important things that happen.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u1-summarizing-stories-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where/when."
                    },
                    {
                              "id": "b",
                              "text": "Person in story."
                    },
                    {
                              "id": "c",
                              "text": "What happens."
                    },
                    {
                              "id": "d",
                              "text": "Big point."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Person in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
