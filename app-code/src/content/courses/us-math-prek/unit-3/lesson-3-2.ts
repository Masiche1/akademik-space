import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mpk-u3-lesson-3-2",
  code: "3-2",
  title: "Take Away to Subtract",
  goal: "I CAN take objects away and say how many are left.",
  standards: ["ELOF-PK.MATH.SUB.1"],
  vocabulary: [
    { term: "Subtract", definition: "Take away from a group to find how many are left." },
    { term: "Minus", definition: "The subtraction sign: -" },
    { term: "Left", definition: "How many remain after taking away." },
    { term: "Separate", definition: "Split a group into parts." },
    { term: "Difference", definition: "The answer to a subtraction problem." },
  ],
  concepts: [
    {
      id: "mpk-u3-take-away",
      title: "Taking away",
      skill: "Subtract within 10 using objects.",
      lesson: {
        sections: [
          {
            heading: "Take some away",
            body: "When we subtract, we **start with a group and remove some**. 4 cookies - 1 cookie = 3 cookies left. Count what remains.",
          },
          {
            heading: "Watch for 'left'",
            body: "The word **left** tells you to subtract — how many are left after some leave or are taken away.",
          },
        ],
        keyFormulas: [
          { name: "Subtraction", statement: "whole - part = part left" },
        ],
        workedExample: {
          problem: "5 balloons - 2 balloons = ?",
          solution: "Take away 2: 5 - 2 = **3 balloons left**.",
        },
      },
      questions: [
        {
          id: "mpk-u3-take-away-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 3 - 1?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count back from 3: 2, ..., 2. 3 - 1 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 3: 2, ..., 2. 3 - 1 = 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "mpk-u3-take-away-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 3 - 1?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "0"
                    },
                    {
                              "id": "d",
                              "text": "5"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away 1 from 3: 3 - 1 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away 1 from 3: 3 - 1 = 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2**",
          "commonErrors": [
                    "Reverses the subtraction."
          ]
},
        },
        {
          id: "mpk-u3-take-away-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 4 - 2?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count back from 4: 3, ..., 2. 4 - 2 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 4: 3, ..., 2. 4 - 2 = 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "mpk-u3-take-away-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "4 fish - 2 fish = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "1"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 - 2 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 - 2 = 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2**",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "mpk-u3-take-away-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "5 ducks - 3 ducks = ? ducks left",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Left",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 - 3 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 - 3 = 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Counts the ducks that left as still there."
          ]
},
        },
        {
          id: "mpk-u3-take-away-q6",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "There are 4 cups on the table. You take 1 cup to drink. How many cups are on the table now?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Take away",
                              "statement": "Start with 4, remove 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "4 - 1 = 3 cups left.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "The cup you are drinking is not on the table.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**3 cups**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Says 4 cups are still there.",
                    "Counts the cup you took as still on the table."
          ]
},
        },
        {
          id: "mpk-u3-take-away-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The subtraction sign: -"
                    },
                    {
                              "id": "b",
                              "text": "Take away from a group to find how many are left."
                    },
                    {
                              "id": "c",
                              "text": "How many remain after taking away."
                    },
                    {
                              "id": "d",
                              "text": "Split a group into parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away from a group to find how many are left."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away from a group to find how many are left.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away from a group to find how many are left.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u3-take-away-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Minus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How many remain after taking away."
                    },
                    {
                              "id": "b",
                              "text": "Split a group into parts."
                    },
                    {
                              "id": "c",
                              "text": "The answer to a subtraction problem."
                    },
                    {
                              "id": "d",
                              "text": "The subtraction sign: -"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Minus\" means The subtraction sign: -"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Minus\" means The subtraction sign: -",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Minus** = The subtraction sign: -",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
