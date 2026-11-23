import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m4-u1-lesson-1-1",
  code: "1-1",
  title: "Place Value to Millions",
  goal: "I CAN read, write and identify place value to the millions.",
  standards: ["4.NBT.A.1"],
  vocabulary: [
    { term: "Place value", definition: "Value of a digit by position." },
    { term: "Million", definition: "1,000,000." },
    { term: "Hundred thousand", definition: "100,000." },
    { term: "Ten thousand", definition: "10,000." },
    { term: "Thousand", definition: "1,000." },
    { term: "Standard form", definition: "Digits with commas." },
    { term: "Expanded form", definition: "Sum of place values." },
    { term: "Word form", definition: "Number in words." },
  ],
  concepts: [
    {
      id: "m4-u1-place-value-millions",
      title: "Place value to millions",
      skill: "Read, write and identify place value to the millions.",
      lesson: {
        sections: [
          {
            heading: "Up to a million",
            body: "Numbers go: ones, tens, hundreds, thousands, ten thousands, hundred thousands, **millions**. Each place is 10 times the one before.",
          },
          {
            heading: "Three forms",
            body: "We write numbers in **standard form** (4,567,890), **expanded form** (4,000,000 + 500,000 + ...), and **word form** (four million five hundred sixty-seven thousand...).",
          },
        ],
        keyFormulas: [
          { name: "Place value", statement: "Each place = 10x the one before." },
          { name: "Forms", statement: "Standard + expanded + word = 3 ways to write." },
        ],
        workedExample: {
          problem: "Write 3,456,789 in word form.",
          solution: "Three million four hundred fifty-six thousand seven hundred eighty-nine.",
        },
      },
      questions: [
        {
          id: "m4-u1-place-value-millions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 4,567,890, what is the value of the 6?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "600"
                    },
                    {
                              "id": "b",
                              "text": "6,000"
                    },
                    {
                              "id": "c",
                              "text": "60,000"
                    },
                    {
                              "id": "d",
                              "text": "600,000"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6 is in hundred thousands place = 600,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 is in hundred thousands place = 600,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "600,000",
          "commonErrors": [
                    "Wrong place value."
          ]
},
        },
        {
          id: "m4-u1-place-value-millions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the standard form of 'two million three hundred four thousand five hundred sixty-seven'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2,304,567"
                    },
                    {
                              "id": "b",
                              "text": "2,340,567"
                    },
                    {
                              "id": "c",
                              "text": "2,304,657"
                    },
                    {
                              "id": "d",
                              "text": "2,034,567"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2 million + 304 thousand + 567 = 2,304,567."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 million + 304 thousand + 567 = 2,304,567.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2,304,567",
          "commonErrors": [
                    "Wrong digits."
          ]
},
        },
        {
          id: "m4-u1-place-value-millions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 5,678,901 in expanded form.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Place value",
                              "statement": "5M + 600K + 70K + 8K + 900 + 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes expanded form correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**5,000,000 + 600,000 + 70,000 + 8,000 + 900 + 1**",
          "commonErrors": [
                    "Missing places.",
                    "Wrong values."
          ]
},
        },
        {
          id: "m4-u1-place-value-millions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 10 times 45,678?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "456,780"
                    },
                    {
                              "id": "b",
                              "text": "4,567,800"
                    },
                    {
                              "id": "c",
                              "text": "45,6780"
                    },
                    {
                              "id": "d",
                              "text": "456,78"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10x shifts one place left = 456,780."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10x shifts one place left = 456,780.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "456,780",
          "commonErrors": [
                    "Wrong shift."
          ]
},
        },
        {
          id: "m4-u1-place-value-millions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write 7,654,321 in word form AND expanded form.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Place value",
                              "statement": "Word + expanded forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes word form.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Writes expanded form.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Seven million six hundred fifty-four thousand three hundred twenty-one; 7,000,000 + 600,000 + 50,000 + 4,000 + 300 + 20 + 1**",
          "commonErrors": [
                    "Wrong forms.",
                    "Missing places."
          ]
},
        },
        {
          id: "m4-u1-place-value-millions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1,000,000."
                    },
                    {
                              "id": "b",
                              "text": "Value of a digit by position."
                    },
                    {
                              "id": "c",
                              "text": "100,000."
                    },
                    {
                              "id": "d",
                              "text": "10,000."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Value of a digit by position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Value of a digit by position.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Value of a digit by position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u1-place-value-millions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Million\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "100,000."
                    },
                    {
                              "id": "b",
                              "text": "10,000."
                    },
                    {
                              "id": "c",
                              "text": "1,000."
                    },
                    {
                              "id": "d",
                              "text": "1,000,000."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Million\" means 1,000,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Million\" means 1,000,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Million** = 1,000,000.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u1-place-value-millions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hundred thousand\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10,000."
                    },
                    {
                              "id": "b",
                              "text": "100,000."
                    },
                    {
                              "id": "c",
                              "text": "1,000."
                    },
                    {
                              "id": "d",
                              "text": "Digits with commas."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hundred thousand\" means 100,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hundred thousand\" means 100,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hundred thousand** = 100,000.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
