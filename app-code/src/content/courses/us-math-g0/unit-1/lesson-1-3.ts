import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m0-u1-lesson-1-3",
  code: "1-3",
  title: "Count to 20",
  goal: "I CAN count to 20 and understand teen numbers.",
  standards: ["K.CC.A.1", "K.NBT.A.1"],
  vocabulary: [
    { term: "Teen number", definition: "A number from 11 to 19, like eleven or fifteen." },
    { term: "Ten", definition: "A group of ten ones." },
    { term: "Ones", definition: "Single items after the ten." },
    { term: "Eleven", definition: "The number after ten." },
    { term: "Twenty", definition: "Two tens." },
  ],
  concepts: [
    {
      id: "m0-u1-count-to-20",
      title: "Counting to 20 and teen numbers",
      skill: "Count to 20 and recognize teen numbers as ten plus some ones.",
      lesson: {
        sections: [
          {
            heading: "From 10 to 20",
            body: "After 10, numbers are **teen numbers**: 11 (eleven), 12 (twelve), up to 19 (nineteen). Each teen number is **ten and some ones** — 14 is ten and four.",
          },
          {
            heading: "Twenty",
            body: "20 is **two tens** — twenty. We write it as 20. Counting to 20 means saying every number in order without skipping.",
          },
        ],
        keyFormulas: [
          { name: "Teen numbers", statement: "11-19 = ten plus 1-9 ones. 20 = two tens." },
        ],
        workedExample: {
          problem: "What is 13 made of?",
          solution: "13 = **ten and three** — one ten and three ones.",
        },
      },
      questions: [
        {
          id: "m0-u1-count-to-20-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What number comes after 12?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "11"
                    },
                    {
                              "id": "b",
                              "text": "13"
                    },
                    {
                              "id": "c",
                              "text": "14"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "After 12 comes 13."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "After 12 comes 13.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**13**",
          "commonErrors": [
                    "Picks wrong neighbor."
          ]
},
        },
        {
          id: "m0-u1-count-to-20-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The number 15 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "five"
                    },
                    {
                              "id": "b",
                              "text": "ten and five"
                    },
                    {
                              "id": "c",
                              "text": "fifty"
                    },
                    {
                              "id": "d",
                              "text": "five tens"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "15 = ten and five ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "15 = ten and five ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**ten and five**",
          "commonErrors": [
                    "Thinks 15 is just 5."
          ]
},
        },
        {
          id: "m0-u1-count-to-20-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count from 10 to 15. What teen numbers did you say?",
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
                                                  "Teen numbers",
                                                  "10, 11, 12, 13, 14, 15."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Teen numbers",
                                                  "10, 11, 12, 13, 14, 15."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Says 10-15 correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**10, 11, 12, 13, 14, 15**"
          ]
},
        },
        {
          id: "m0-u1-count-to-20-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many tens are in 20?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "2"
                    },
                    {
                              "id": "c",
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "20"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "20 = two tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20 = two tens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2**",
          "commonErrors": [
                    "Picks wrong count."
          ]
},
        },
        {
          id: "m0-u1-count-to-20-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Break 17 into ten and ones. Then count on from 17 to 20.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Teen decomposition",
                              "statement": "17 = ten + 7; count 18, 19, 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Says 17 = ten + 7.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Counts 18, 19, 20.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**17 = ten + 7; then 18, 19, 20**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Wrong decomposition.",
                    "Cannot count on."
          ]
},
        },
        {
          id: "m0-u1-count-to-20-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Teen number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A group of ten ones."
                    },
                    {
                              "id": "b",
                              "text": "A number from 11 to 19, like eleven or fifteen."
                    },
                    {
                              "id": "c",
                              "text": "Single items after the ten."
                    },
                    {
                              "id": "d",
                              "text": "The number after ten."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Teen number\" means A number from 11 to 19, like eleven or fifteen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Teen number\" means A number from 11 to 19, like eleven or fifteen.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Teen number** = A number from 11 to 19, like eleven or fifteen.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u1-count-to-20-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Single items after the ten."
                    },
                    {
                              "id": "b",
                              "text": "The number after ten."
                    },
                    {
                              "id": "c",
                              "text": "Two tens."
                    },
                    {
                              "id": "d",
                              "text": "A group of ten ones."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ten\" means A group of ten ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ten\" means A group of ten ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ten** = A group of ten ones.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u1-count-to-20-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number after ten."
                    },
                    {
                              "id": "b",
                              "text": "Single items after the ten."
                    },
                    {
                              "id": "c",
                              "text": "Two tens."
                    },
                    {
                              "id": "d",
                              "text": "A number from 11 to 19, like eleven or fifteen."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ones\" means Single items after the ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ones\" means Single items after the ten.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ones** = Single items after the ten.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
