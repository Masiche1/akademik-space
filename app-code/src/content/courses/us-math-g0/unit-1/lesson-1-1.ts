import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m0-u1-lesson-1-1",
  code: "1-1",
  title: "Count Objects Once",
  goal: "I CAN count a group of objects and say how many there are.",
  standards: ["K.CC.A.1", "K.CC.A.3"],
  vocabulary: [
    { term: "Count", definition: "Say number names in order while pointing to each object." },
    { term: "Once", definition: "Touch each object only one time." },
    { term: "How many", definition: "The total number of objects." },
    { term: "Last number", definition: "The number you say last tells how many." },
    { term: "Order", definition: "Numbers said in the same sequence every time." },
  ],
  concepts: [
    {
      id: "m0-u1-count-once",
      title: "Counting objects once",
      skill: "Count a set of objects accurately, touching each once, and state the total.",
      lesson: {
        sections: [
          {
            heading: "Touch each once",
            body: "To count, point to each object and say one number name. Touch each object **only once** — skipping or double-counting gives the wrong total.",
          },
          {
            heading: "The last number is the answer",
            body: "The number you say **last** is how many objects there are. Five objects: you say 1, 2, 3, 4, 5 — the last number, 5, is the total.",
          },
        ],
        keyFormulas: [
          { name: "Counting", statement: "Touch each object once, say numbers in order; the last number is how many." },
        ],
        workedExample: {
          problem: "Count: * * * * (4 stars). How many?",
          solution: "Touch each star once: 1, 2, 3, 4. **The last number is 4 — there are 4 stars.**",
        },
      },
      questions: [
        {
          id: "m0-u1-count-once-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count the dots: . . . . . . How many dots?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Dots",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Touch each dot once: 1-2-3-4-5-6. Last number is 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Touch each dot once: 1-2-3-4-5-6. Last number is 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$6$",
          "commonErrors": [
                    "Counts one dot twice."
          ]
},
        },
        {
          id: "m0-u1-count-once-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When counting objects, you should touch each object...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "twice"
                    },
                    {
                              "id": "b",
                              "text": "once"
                    },
                    {
                              "id": "c",
                              "text": "zero times"
                    },
                    {
                              "id": "d",
                              "text": "as many times as you want"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Touch each object once to count correctly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Touch each object once to count correctly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Once**",
          "commonErrors": [
                    "Thinks counting can skip objects."
          ]
},
        },
        {
          id: "m0-u1-count-once-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 2 red blocks and 3 blue blocks. How many blocks in all?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "In all",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Join the groups: 2 + 3 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Join the groups: 2 + 3 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Counts only one color."
          ]
},
        },
        {
          id: "m0-u1-count-once-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 2 red blocks and 3 blue blocks. How many blocks in all?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "8"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2 + 3 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 + 3 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5**",
          "commonErrors": [
                    "Subtracts instead of adds."
          ]
},
        },
        {
          id: "m0-u1-count-once-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count the apples in a picture or group: how many are there? Say each number as you point.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "Count once",
                                                  "Point to each object once, last number is total."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Count once",
                                                  "Point to each object once, last number is total."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Counts each object once.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., counts 5 objects and says '5'**"
          ]
},
        },
        {
          id: "m0-u1-count-once-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "You count 1, 2, 3, 4, 5 objects. How many are there?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "3"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "The last number said (5) is how many."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The last number said (5) is how many.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5**",
          "commonErrors": [
                    "Picks the second-to-last number."
          ]
},
        },
        {
          id: "m0-u1-count-once-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Touch each object only one time."
                    },
                    {
                              "id": "b",
                              "text": "Say number names in order while pointing to each object."
                    },
                    {
                              "id": "c",
                              "text": "The total number of objects."
                    },
                    {
                              "id": "d",
                              "text": "The number you say last tells how many."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count\" means Say number names in order while pointing to each object."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count\" means Say number names in order while pointing to each object.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count** = Say number names in order while pointing to each object.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u1-count-once-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Once\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The total number of objects."
                    },
                    {
                              "id": "b",
                              "text": "The number you say last tells how many."
                    },
                    {
                              "id": "c",
                              "text": "Numbers said in the same sequence every time."
                    },
                    {
                              "id": "d",
                              "text": "Touch each object only one time."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Once\" means Touch each object only one time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Once\" means Touch each object only one time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Once** = Touch each object only one time.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u1-count-once-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"How many\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number you say last tells how many."
                    },
                    {
                              "id": "b",
                              "text": "The total number of objects."
                    },
                    {
                              "id": "c",
                              "text": "Numbers said in the same sequence every time."
                    },
                    {
                              "id": "d",
                              "text": "Say number names in order while pointing to each object."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"How many\" means The total number of objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"How many\" means The total number of objects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**How many** = The total number of objects.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
