import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "m3-u5-lesson-5-3",
  code: "5-3",
  title: "Fractions on a Number Line",
  goal: "I CAN place fractions on a number line.",
  standards: ["3.NF.A.2"],
  vocabulary: [
    { term: "Number line", definition: "Shows numbers in order." },
    { term: "Interval", definition: "Space between marks." },
    { term: "Partition", definition: "Divide into equal parts." },
    { term: "Mark", definition: "Point on line." },
    { term: "Between", definition: "In the middle of." },
    { term: "Order", definition: "From least to greatest." },
    { term: "Tick", definition: "Small mark." },
    { term: "Endpoint", definition: "Start or end." },
  ],
  concepts: [
    {
      id: "m3-u5-fractions-on-number-line",
      title: "Fractions on a number line",
      skill: "Partition a number line into equal parts and mark fractions.",
      lesson: {
        sections: [
          {
            heading: "Partition the line",
            body: "To show fractions, **partition** (divide) the line into **equal parts**. For fourths, divide 0 to 1 into 4 equal parts.",
          },
          {
            heading: "Mark fractions",
            body: "Each mark is a fraction: the first mark is $\\frac{1}{4}$, second is $\\frac{2}{4}$, etc. The **denominator** tells how many equal parts; the **numerator** counts the marks.",
          },
        ],
        keyFormulas: [
          { name: "Number line", statement: "Partition into equal parts; mark fractions." },
          { name: "Order", statement: "Fractions increase left to right." },
        ],
        workedExample: {
          problem: "Where does $\\frac{3}{4}$ go on a number line from 0 to 1?",
          solution: "Divide into 4 equal parts; $\\frac{3}{4}$ is at the third mark.",
        },
      },
      questions: [
        {
          id: "m3-u5-fractions-on-number-line-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To show fourths on a number line, you divide 0 to 1 into...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2 parts"
                    },
                    {
                              "id": "b",
                              "text": "3 parts"
                    },
                    {
                              "id": "c",
                              "text": "4 parts"
                    },
                    {
                              "id": "d",
                              "text": "5 parts"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fourth = 4 equal parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fourth = 4 equal parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4 parts",
          "commonErrors": [
                    "Wrong parts."
          ]
},
        },
        {
          id: "m3-u5-fractions-on-number-line-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a number line divided into 4 parts, $\\frac{2}{4}$ is at...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "first mark"
                    },
                    {
                              "id": "b",
                              "text": "second mark"
                    },
                    {
                              "id": "c",
                              "text": "third mark"
                    },
                    {
                              "id": "d",
                              "text": "fourth mark"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2/4 = second mark."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2/4 = second mark.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "second mark",
          "commonErrors": [
                    "Wrong position."
          ]
},
        },
        {
          id: "m3-u5-fractions-on-number-line-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a number line divided into 3 parts, what fraction is at the second mark?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2/3"
                    },
                    {
                              "id": "b",
                              "text": "3/2"
                    },
                    {
                              "id": "c",
                              "text": "1/3"
                    },
                    {
                              "id": "d",
                              "text": "2/2"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2 of 3 parts = 2/3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 of 3 parts = 2/3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2/3",
          "commonErrors": [
                    "Wrong fraction."
          ]
},
        },
        {
          id: "m3-u5-fractions-on-number-line-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Order these fractions from least to greatest: 1/4, 1/2, 1/3. Which is greatest?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1/2"
                    },
                    {
                              "id": "b",
                              "text": "1/3"
                    },
                    {
                              "id": "c",
                              "text": "1/4"
                    },
                    {
                              "id": "d",
                              "text": "all equal"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/2 > 1/3 > 1/4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/2 > 1/3 > 1/4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1/2",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "m3-u5-fractions-on-number-line-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw a number line from 0 to 1. Partition it into 4 equal parts and mark $\\frac{1}{4}$, $\\frac{2}{4}$, $\\frac{3}{4}$, $\\frac{4}{4}$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Number line",
                              "statement": "Partition + mark fractions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Partitions correctly.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Marks all fractions.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**0, 1/4, 2/4, 3/4, 1**",
          "commonErrors": [
                    "Wrong partition.",
                    "Missing marks."
          ]
},
        },
        {
          id: "m3-u5-fractions-on-number-line-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Number line\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Space between marks."
                    },
                    {
                              "id": "b",
                              "text": "Shows numbers in order."
                    },
                    {
                              "id": "c",
                              "text": "Divide into equal parts."
                    },
                    {
                              "id": "d",
                              "text": "Point on line."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Number line\" means Shows numbers in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Number line\" means Shows numbers in order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Number line** = Shows numbers in order.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u5-fractions-on-number-line-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Interval\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Divide into equal parts."
                    },
                    {
                              "id": "b",
                              "text": "Point on line."
                    },
                    {
                              "id": "c",
                              "text": "In the middle of."
                    },
                    {
                              "id": "d",
                              "text": "Space between marks."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Interval\" means Space between marks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Interval\" means Space between marks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Interval** = Space between marks.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u5-fractions-on-number-line-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Partition\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Point on line."
                    },
                    {
                              "id": "b",
                              "text": "Divide into equal parts."
                    },
                    {
                              "id": "c",
                              "text": "In the middle of."
                    },
                    {
                              "id": "d",
                              "text": "From least to greatest."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Partition\" means Divide into equal parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Partition\" means Divide into equal parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Partition** = Divide into equal parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
