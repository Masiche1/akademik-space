import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "m0-u1-lesson-1-5",
  code: "1-5",
  title: "Write Numbers 0-20",
  goal: "I CAN write numerals from 0 to 20.",
  standards: ["K.CC.A.3"],
  vocabulary: [
    { term: "Numeral", definition: "The written symbol for a number." },
    { term: "Digit", definition: "A single number symbol like 3 or 7." },
    { term: "Zero", definition: "The numeral for none — 0." },
    { term: "Thirteen", definition: "The number 13." },
    { term: "Write", definition: "Make the numeral correctly." },
  ],
  concepts: [
    {
      id: "m0-u1-numbers-0-20",
      title: "Writing numbers 0-20",
      skill: "Write numerals for numbers 0 through 20.",
      lesson: {
        sections: [
          {
            heading: "Numerals",
            body: "Each number has a **numeral** — its written symbol. 0 means none, 1-9 are single **digits**, and 10-20 are two-digit numbers.",
          },
          {
            heading: "Write carefully",
            body: "Practice writing each numeral: 0, 1, 2... 9, 10, 11, 12... 20. Match the numeral to the number of objects you count.",
          },
        ],
        keyFormulas: [
          { name: "Numerals 0-20", statement: "0-9 single digits; 10-20 two-digit numbers (a ten plus ones)." },
        ],
        workedExample: {
          problem: "Write the numeral for 'eight'.",
          solution: "Eight is written as the numeral **8**.",
        },
      },
      questions: [
        {
          id: "m0-u1-numbers-0-20-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which numeral means 'none' or zero objects?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "0"
                    },
                    {
                              "id": "c",
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "O"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "0 = zero = none."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0 = zero = none.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**0**",
          "commonErrors": [
                    "Picks letter O or 1."
          ]
},
        },
        {
          id: "m0-u1-numbers-0-20-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The numeral for 'thirteen' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "30"
                    },
                    {
                              "id": "b",
                              "text": "13"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "31"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Thirteen = 13."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thirteen = 13.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**13**",
          "commonErrors": [
                    "Reverses digits."
          ]
},
        },
        {
          id: "m0-u1-numbers-0-20-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write the numerals for these numbers: five, twelve, nineteen, twenty.",
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
                                                  "Write numerals",
                                                  "5, 12, 19, 20."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Write numerals",
                                                  "5, 12, 19, 20."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Writes all 4 correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**5, 12, 19, 20**"
          ]
},
        },
        {
          id: "m0-u1-numbers-0-20-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which numeral shows 'twenty'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "12"
                    },
                    {
                              "id": "b",
                              "text": "20"
                    },
                    {
                              "id": "c",
                              "text": "2"
                    },
                    {
                              "id": "d",
                              "text": "200"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Twenty = 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Twenty = 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**20**",
          "commonErrors": [
                    "Picks 12 or 2."
          ]
},
        },
        {
          id: "m0-u1-numbers-0-20-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Count 14 objects. Write the numeral. Then write the numeral for 'eleven'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Numerals",
                              "statement": "Count -> 14; eleven -> 11."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Writes 14 for counted objects.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Writes 11 for eleven.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**14 and 11**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Wrong numerals.",
                    "Cannot count."
          ]
},
        },
        {
          id: "m0-u1-numbers-0-20-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numeral\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A single number symbol like 3 or 7."
                    },
                    {
                              "id": "b",
                              "text": "The written symbol for a number."
                    },
                    {
                              "id": "c",
                              "text": "The numeral for none — 0."
                    },
                    {
                              "id": "d",
                              "text": "The number 13."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numeral\" means The written symbol for a number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numeral\" means The written symbol for a number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numeral** = The written symbol for a number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u1-numbers-0-20-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Digit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The numeral for none — 0."
                    },
                    {
                              "id": "b",
                              "text": "The number 13."
                    },
                    {
                              "id": "c",
                              "text": "Make the numeral correctly."
                    },
                    {
                              "id": "d",
                              "text": "A single number symbol like 3 or 7."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Digit\" means A single number symbol like 3 or 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Digit\" means A single number symbol like 3 or 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Digit** = A single number symbol like 3 or 7.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u1-numbers-0-20-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Zero\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number 13."
                    },
                    {
                              "id": "b",
                              "text": "The numeral for none — 0."
                    },
                    {
                              "id": "c",
                              "text": "Make the numeral correctly."
                    },
                    {
                              "id": "d",
                              "text": "The written symbol for a number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Zero\" means The numeral for none — 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Zero\" means The numeral for none — 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Zero** = The numeral for none — 0.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
