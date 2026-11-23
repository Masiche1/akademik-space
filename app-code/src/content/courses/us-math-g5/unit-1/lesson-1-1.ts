import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m5-u1-lesson-1-1",
  code: "1-1",
  title: "Place Value to Billions",
  goal: "I CAN read, write and compare numbers to billions.",
  standards: ["5.NBT.A.1"],
  vocabulary: [
    { term: "Place value", definition: "Digit position value." },
    { term: "Billion", definition: "1,000,000,000." },
    { term: "Hundred million", definition: "100,000,000." },
    { term: "Ten million", definition: "10,000,000." },
    { term: "Million", definition: "1,000,000." },
    { term: "Standard form", definition: "Digits with commas." },
    { term: "Expanded form", definition: "Sum of places." },
    { term: "Word form", definition: "Number in words." },
  ],
  concepts: [
    {
      id: "m5-u1-place-value-billions",
      title: "Place value to billions",
      skill: "Read, write and compare numbers up to billions.",
      lesson: {
        sections: [
          {
            heading: "Up to billions",
            body: "Numbers now go to **billions**: ones, tens, hundreds, thousands, ten/hundred thousands, ten/hundred millions, **billions**. Each place is 10x the one before.",
          },
          {
            heading: "Three forms",
            body: "**Standard** (123,456,789), **expanded** (100,000,000 + 20,000,000 + ...), **word** (one hundred twenty-three million...).",
          },
        ],
        keyFormulas: [
          { name: "Place value", statement: "Each place = 10x before." },
          { name: "Forms", statement: "Standard + expanded + word." },
        ],
        workedExample: {
          problem: "Write 123,456,789 in word form.",
          solution: "One hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine.",
        },
      },
      questions: [
        {
          id: "m5-u1-place-value-billions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 123,456,789, what is the value of 4?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "400"
                    },
                    {
                              "id": "b",
                              "text": "4,000"
                    },
                    {
                              "id": "c",
                              "text": "40,000"
                    },
                    {
                              "id": "d",
                              "text": "400,000"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 is in hundred thousands = 400,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 is in hundred thousands = 400,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "400,000",
          "commonErrors": [
                    "Wrong place."
          ]
},
        },
        {
          id: "m5-u1-place-value-billions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'two billion three hundred million' in standard form?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2,300,000"
                    },
                    {
                              "id": "b",
                              "text": "2,300,000,000"
                    },
                    {
                              "id": "c",
                              "text": "230,000,000"
                    },
                    {
                              "id": "d",
                              "text": "2,003,000,000"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2B + 300M = 2,300,000,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2B + 300M = 2,300,000,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2,300,000,000",
          "commonErrors": [
                    "Wrong digits."
          ]
},
        },
        {
          id: "m5-u1-place-value-billions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 987,654,321 in expanded form.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Place value",
                              "statement": "900M + 80M + 7M + 600K + 50K + 4K + 300 + 20 + 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes expanded form.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**900,000,000 + 80,000,000 + 7,000,000 + 600,000 + 50,000 + 4,000 + 300 + 20 + 1**",
          "commonErrors": [
                    "Missing places.",
                    "Wrong values."
          ]
},
        },
        {
          id: "m5-u1-place-value-billions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 100 times 45,678?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4,567,800"
                    },
                    {
                              "id": "b",
                              "text": "456,780"
                    },
                    {
                              "id": "c",
                              "text": "4,567,8000"
                    },
                    {
                              "id": "d",
                              "text": "45,67800"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "100x adds 2 zeros = 4,567,800."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100x adds 2 zeros = 4,567,800.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4,567,800",
          "commonErrors": [
                    "Wrong zeros."
          ]
},
        },
        {
          id: "m5-u1-place-value-billions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write 456,789,012 in word form AND expanded form.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Place value",
                              "statement": "Word + expanded."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes word form.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Writes expanded.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Four hundred fifty-six million seven hundred eighty-nine thousand twelve; 400M+50M+6M+700K+80K+9K+12**",
          "commonErrors": [
                    "Wrong forms.",
                    "Missing parts."
          ]
},
        },
        {
          id: "m5-u1-place-value-billions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1,000,000,000."
                    },
                    {
                              "id": "b",
                              "text": "Digit position value."
                    },
                    {
                              "id": "c",
                              "text": "100,000,000."
                    },
                    {
                              "id": "d",
                              "text": "10,000,000."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Digit position value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Digit position value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Digit position value.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u1-place-value-billions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Billion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "100,000,000."
                    },
                    {
                              "id": "b",
                              "text": "10,000,000."
                    },
                    {
                              "id": "c",
                              "text": "1,000,000."
                    },
                    {
                              "id": "d",
                              "text": "1,000,000,000."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Billion\" means 1,000,000,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Billion\" means 1,000,000,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Billion** = 1,000,000,000.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u1-place-value-billions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hundred million\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10,000,000."
                    },
                    {
                              "id": "b",
                              "text": "100,000,000."
                    },
                    {
                              "id": "c",
                              "text": "1,000,000."
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
                              "statement": "\"Hundred million\" means 100,000,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hundred million\" means 100,000,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hundred million** = 100,000,000.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
