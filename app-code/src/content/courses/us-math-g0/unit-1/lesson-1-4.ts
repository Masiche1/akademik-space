import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "m0-u1-lesson-1-4",
  code: "1-4",
  title: "Count to 100",
  goal: "I CAN count to 100 by ones and by tens.",
  standards: ["K.CC.A.1"],
  vocabulary: [
    { term: "Hundred", definition: "One hundred — ten tens." },
    { term: "Tens", definition: "Groups of ten." },
    { term: "By tens", definition: "Count 10, 20, 30, 40..." },
    { term: "By ones", definition: "Count 1, 2, 3, 4..." },
    { term: "Skip count", definition: "Count by a number other than 1." },
  ],
  concepts: [
    {
      id: "m0-u1-count-100",
      title: "Counting to 100",
      skill: "Count to 100 by ones and skip-count by tens.",
      lesson: {
        sections: [
          {
            heading: "Counting by ones",
            body: "We can count all the way to **100** by saying every number: 1, 2, 3... 99, 100. This takes practice but gets easier.",
          },
          {
            heading: "Counting by tens",
            body: "We can also **skip count by tens**: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100. Each number is ten more than the last.",
          },
        ],
        keyFormulas: [
          { name: "Count to 100", statement: "By ones: 1-100. By tens: 10, 20, 30... 100." },
          { name: "Tens pattern", statement: "Each ten is ten more: 10, 20, 30..." },
        ],
        workedExample: {
          problem: "Count by tens from 10 to 50.",
          solution: "10, 20, 30, **40, 50** — each is ten more.",
        },
      },
      questions: [
        {
          id: "m0-u1-count-100-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What number comes after 90 when counting by tens?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "91"
                    },
                    {
                              "id": "b",
                              "text": "100"
                    },
                    {
                              "id": "c",
                              "text": "80"
                    },
                    {
                              "id": "d",
                              "text": "95"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "By tens: 90, then 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "By tens: 90, then 100.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**100**",
          "commonErrors": [
                    "Counts by ones instead of tens."
          ]
},
        },
        {
          id: "m0-u1-count-100-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Counting by tens means saying...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1, 2, 3"
                    },
                    {
                              "id": "b",
                              "text": "10, 20, 30"
                    },
                    {
                              "id": "c",
                              "text": "5, 10, 15"
                    },
                    {
                              "id": "d",
                              "text": "100, 99, 98"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "By tens = 10, 20, 30..."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "By tens = 10, 20, 30...",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10, 20, 30**",
          "commonErrors": [
                    "Picks wrong pattern."
          ]
},
        },
        {
          id: "m0-u1-count-100-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count by tens from 10 to 100. Say each number.",
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
                                                  "Count by tens",
                                                  "10, 20, 30... 100."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Count by tens",
                                                  "10, 20, 30... 100."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Counts by tens to 100.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**10, 20, 30, 40, 50, 60, 70, 80, 90, 100**"
          ]
},
        },
        {
          id: "m0-u1-count-100-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many tens make 100?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5"
                    },
                    {
                              "id": "b",
                              "text": "10"
                    },
                    {
                              "id": "c",
                              "text": "100"
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
                              "statement": "100 = ten tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100 = ten tens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10**",
          "commonErrors": [
                    "Picks wrong count."
          ]
},
        },
        {
          id: "m0-u1-count-100-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Count by tens from 30 to 80. Then say what number comes after 70 by tens.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count by tens",
                              "statement": "30,40,50,60,70,80; after 70 is 80."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Counts 30-80 by tens.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Says 80 after 70.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**30-80 by tens; 80**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Wrong sequence.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m0-u1-count-100-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hundred\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Groups of ten."
                    },
                    {
                              "id": "b",
                              "text": "One hundred — ten tens."
                    },
                    {
                              "id": "c",
                              "text": "Count 10, 20, 30, 40..."
                    },
                    {
                              "id": "d",
                              "text": "Count 1, 2, 3, 4..."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hundred\" means One hundred — ten tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hundred\" means One hundred — ten tens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hundred** = One hundred — ten tens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u1-count-100-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tens\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Count 10, 20, 30, 40..."
                    },
                    {
                              "id": "b",
                              "text": "Count 1, 2, 3, 4..."
                    },
                    {
                              "id": "c",
                              "text": "Count by a number other than 1."
                    },
                    {
                              "id": "d",
                              "text": "Groups of ten."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tens\" means Groups of ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tens\" means Groups of ten.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tens** = Groups of ten.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u1-count-100-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"By tens\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Count 1, 2, 3, 4..."
                    },
                    {
                              "id": "b",
                              "text": "Count 10, 20, 30, 40..."
                    },
                    {
                              "id": "c",
                              "text": "Count by a number other than 1."
                    },
                    {
                              "id": "d",
                              "text": "One hundred — ten tens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"By tens\" means Count 10, 20, 30, 40..."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"By tens\" means Count 10, 20, 30, 40...",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**By tens** = Count 10, 20, 30, 40...",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
