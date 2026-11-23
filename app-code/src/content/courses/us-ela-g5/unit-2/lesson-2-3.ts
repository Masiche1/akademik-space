import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ela5-u2-lesson-2-3",
  code: "2-3",
  title: "Flashbacks and Foreshadowing",
  goal: "I CAN identify flashbacks and foreshadowing in stories.",
  standards: ["RL.5.5"],
  vocabulary: [
    { term: "Flashback", definition: "Memory of past event." },
    { term: "Foreshadowing", definition: "Hint of future event." },
    { term: "Timeline", definition: "Order of events." },
    { term: "Past", definition: "Before now." },
    { term: "Future", definition: "What will happen." },
    { term: "Reveal", definition: "Show information." },
    { term: "Clue", definition: "Hint." },
    { term: "Structure", definition: "How story is organized." },
  ],
  concepts: [
    {
      id: "ela5-u2-flashbacks-foreshadowing",
      title: "Flashbacks and foreshadowing",
      skill: "Identify when authors use flashbacks (past) and foreshadowing (future hints).",
      lesson: {
        sections: [
          {
            heading: "Two time tricks",
            body: "**Flashback**: jumps to the **past** to show a memory or earlier event. **Foreshadowing**: hints at what will happen **later** — a clue or warning.",
          },
          {
            heading: "Why use them",
            body: "Flashbacks give **background**; foreshadowing builds **suspense** and makes you **predict**. Both affect how you understand the story.",
          },
        ],
        keyFormulas: [
          { name: "Flashback", statement: "Past event shown later." },
          { name: "Foreshadowing", statement: "Future event hinted earlier." },
        ],
        workedExample: {
          problem: "A story says 'Little did she know, this would be her last adventure.'",
          solution: "**Foreshadowing** — hints that something important will happen.",
        },
      },
      questions: [
        {
          id: "ela5-u2-flashbacks-foreshadowing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'flashback' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a future event"
                    },
                    {
                              "id": "b",
                              "text": "a memory or past event"
                    },
                    {
                              "id": "c",
                              "text": "the ending"
                    },
                    {
                              "id": "d",
                              "text": "the beginning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Flashback = past event."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flashback = past event.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a memory or past event",
          "commonErrors": [
                    "Confuses with foreshadowing."
          ]
},
        },
        {
          id: "ela5-u2-flashbacks-foreshadowing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Foreshadowing' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "showing the past"
                    },
                    {
                              "id": "b",
                              "text": "hinting at a future event"
                    },
                    {
                              "id": "c",
                              "text": "the main plot"
                    },
                    {
                              "id": "d",
                              "text": "character description"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Foreshadowing = future hint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Foreshadowing = future hint.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "hinting at a future event",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "ela5-u2-flashbacks-foreshadowing-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find one flashback and one foreshadowing in a story. Explain what each does for the reader.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Flashback/foreshadow",
                              "statement": "Both found + explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds flashback.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds foreshadowing + explains.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., Flashback: character remembers childhood; Foreshadowing: 'storm clouds gathered' hints at trouble.**",
          "commonErrors": [
                    "Cannot find both.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela5-u2-flashbacks-foreshadowing-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Foreshadowing helps readers...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "understand the past"
                    },
                    {
                              "id": "b",
                              "text": "predict what will happen"
                    },
                    {
                              "id": "c",
                              "text": "memorize facts"
                    },
                    {
                              "id": "d",
                              "text": "skip ahead"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Predict future."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predict future.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "predict what will happen",
          "commonErrors": [
                    "Thinks it's about past."
          ]
},
        },
        {
          id: "ela5-u2-flashbacks-foreshadowing-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does a flashback change your understanding of a character or event?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Flashback",
                              "statement": "Effect on understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies flashback.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains effect.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'A flashback shows why the character is afraid — adds depth to their actions.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No effect."
          ]
},
        },
        {
          id: "ela5-u2-flashbacks-foreshadowing-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Flashback\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hint of future event."
                    },
                    {
                              "id": "b",
                              "text": "Memory of past event."
                    },
                    {
                              "id": "c",
                              "text": "Order of events."
                    },
                    {
                              "id": "d",
                              "text": "Before now."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Flashback\" means Memory of past event."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Flashback\" means Memory of past event.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Flashback** = Memory of past event.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u2-flashbacks-foreshadowing-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Foreshadowing\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Order of events."
                    },
                    {
                              "id": "b",
                              "text": "Before now."
                    },
                    {
                              "id": "c",
                              "text": "What will happen."
                    },
                    {
                              "id": "d",
                              "text": "Hint of future event."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Foreshadowing\" means Hint of future event."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Foreshadowing\" means Hint of future event.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Foreshadowing** = Hint of future event.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u2-flashbacks-foreshadowing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Timeline\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Before now."
                    },
                    {
                              "id": "b",
                              "text": "Order of events."
                    },
                    {
                              "id": "c",
                              "text": "What will happen."
                    },
                    {
                              "id": "d",
                              "text": "Show information."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Timeline\" means Order of events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Timeline\" means Order of events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Timeline** = Order of events.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
