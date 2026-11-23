import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "mpk-u5-lesson-5-4",
  code: "5-4",
  title: "Position Words",
  goal: "I CAN use words like in, on, under, next to and behind.",
  standards: ["ELOF-PK.MATH.GEO.4"],
  vocabulary: [
    { term: "In", definition: "Inside something." },
    { term: "On", definition: "On top of something." },
    { term: "Under", definition: "Below something." },
    { term: "Next to", definition: "Beside something." },
    { term: "Behind", definition: "At the back of something." },
  ],
  concepts: [
    {
      id: "mpk-u5-position-words",
      title: "Position words",
      skill: "Describe where objects are using position words.",
      lesson: {
        sections: [
          {
            heading: "Where is it?",
            body: "Position words tell us **where** things are: **in** the box, **on** the table, **under** the chair, **next to** the door, **behind** the couch.",
          },
          {
            heading: "Practice",
            body: "Point to things around you and describe their position: 'The cat is **under** the table.' 'My shoes are **next to** the bed.'",
          },
        ],
        keyFormulas: [
          { name: "Position", statement: "in / on / under / next to / behind / in front of / above / below" },
        ],
        workedExample: {
          problem: "Where is the ball if it is beneath the table?",
          solution: "Beneath = **under** the table.",
        },
      },
      questions: [
        {
          id: "mpk-u5-position-words-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The cat is beneath the table. The cat is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "on"
                    },
                    {
                              "id": "b",
                              "text": "under"
                    },
                    {
                              "id": "c",
                              "text": "next to"
                    },
                    {
                              "id": "d",
                              "text": "behind"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Beneath = under."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beneath = under.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Under**",
          "commonErrors": [
                    "Says 'on' because the cat is near the table."
          ]
},
        },
        {
          id: "mpk-u5-position-words-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Your shoes are beside your bed. They are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "in"
                    },
                    {
                              "id": "b",
                              "text": "under"
                    },
                    {
                              "id": "c",
                              "text": "next to"
                    },
                    {
                              "id": "d",
                              "text": "behind"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Beside = next to."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beside = next to.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Next to**",
          "commonErrors": [
                    "Confuses beside with behind."
          ]
},
        },
        {
          id: "mpk-u5-position-words-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many position words are in this list? in, on, under, next to, behind",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Words",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count: in, on, under, next to, behind = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count: in, on, under, next to, behind = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Counts 'next to' as two words."
          ]
},
        },
        {
          id: "mpk-u5-position-words-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bird is above the tree. The bird is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "under"
                    },
                    {
                              "id": "b",
                              "text": "on"
                    },
                    {
                              "id": "c",
                              "text": "above"
                    },
                    {
                              "id": "d",
                              "text": "behind"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Above = higher than."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Above = higher than.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Above**",
          "commonErrors": [
                    "Says 'on' because it is near the tree."
          ]
},
        },
        {
          id: "mpk-u5-position-words-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Look around you. Describe where two objects are using position words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Use position words",
                              "statement": "in / on / under / next to / behind / above / below"
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Describes 2 objects with correct position words.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Positions make sense (e.g., 'book is on the desk').",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**e.g., 'The book is on the desk; the cat is under the chair.'**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Uses wrong position words.",
                    "Describes only one object."
          ]
},
        },
        {
          id: "mpk-u5-position-words-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"In\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "On top of something."
                    },
                    {
                              "id": "b",
                              "text": "Inside something."
                    },
                    {
                              "id": "c",
                              "text": "Below something."
                    },
                    {
                              "id": "d",
                              "text": "Beside something."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"In\" means Inside something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"In\" means Inside something.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**In** = Inside something.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u5-position-words-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"On\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Below something."
                    },
                    {
                              "id": "b",
                              "text": "Beside something."
                    },
                    {
                              "id": "c",
                              "text": "At the back of something."
                    },
                    {
                              "id": "d",
                              "text": "On top of something."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"On\" means On top of something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"On\" means On top of something.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**On** = On top of something.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u5-position-words-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Under\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Beside something."
                    },
                    {
                              "id": "b",
                              "text": "Below something."
                    },
                    {
                              "id": "c",
                              "text": "At the back of something."
                    },
                    {
                              "id": "d",
                              "text": "Inside something."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Under\" means Below something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Under\" means Below something.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Under** = Below something.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
