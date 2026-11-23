import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "mpk-u4-lesson-4-4",
  code: "4-4",
  title: "Count and Show Data",
  goal: "I CAN count how many of each kind and show it simply.",
  standards: ["ELOF-PK.MATH.DATA.2"],
  vocabulary: [
    { term: "Data", definition: "Information we collect, like counts of objects." },
    { term: "How many", definition: "The count for each group." },
    { term: "Tally", definition: "A quick mark for each count." },
    { term: "Most", definition: "The biggest count." },
    { term: "Least", definition: "The smallest count." },
  ],
  concepts: [
    {
      id: "mpk-u4-count-data",
      title: "Simple data",
      skill: "Count objects in sorted groups and compare the counts.",
      lesson: {
        sections: [
          {
            heading: "Count each group",
            body: "After sorting, count each group: '4 cats, 2 dogs.' These counts are **data** — information about your collection.",
          },
          {
            heading: "Most and least",
            body: "The group with the **most** has the biggest count. The group with the **least** has the smallest. Compare the numbers to find them.",
          },
        ],
        keyFormulas: [
          { name: "Data", statement: "Counts per group; most = biggest count, least = smallest." },
        ],
        workedExample: {
          problem: "Sort toys: 5 cars, 3 dolls, 2 balls. Which has the most?",
          solution: "5 > 3 > 2, so **cars have the most**.",
        },
      },
      questions: [
        {
          id: "mpk-u4-count-data-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Counts: 6 apples, 4 bananas. Which has more?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bananas"
                    },
                    {
                              "id": "b",
                              "text": "Apples"
                    },
                    {
                              "id": "c",
                              "text": "They are equal"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6 > 4, apples have more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 > 4, apples have more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Apples**",
          "commonErrors": [
                    "Picks the fruit they like."
          ]
},
        },
        {
          id: "mpk-u4-count-data-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Red: 3, Blue: 5, Green: 2. How many are in all?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "In all",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 + 5 + 2 = 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 + 5 + 2 = 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$10$",
          "commonErrors": [
                    "Adds only two groups."
          ]
},
        },
        {
          id: "mpk-u4-count-data-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which count is the 'least'? 7, 3, 9, 5",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "9"
                    },
                    {
                              "id": "d",
                              "text": "5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 is the smallest number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 is the smallest number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3**",
          "commonErrors": [
                    "Picks the first or favorite number."
          ]
},
        },
        {
          id: "mpk-u4-count-data-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tally mark looks like...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a picture"
                    },
                    {
                              "id": "b",
                              "text": "a quick mark for each count"
                    },
                    {
                              "id": "c",
                              "text": "a letter"
                    },
                    {
                              "id": "d",
                              "text": "a number word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tallies are quick marks, one per count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tallies are quick marks, one per count.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**A quick mark**",
          "commonErrors": [
                    "Thinks tallies are full pictures."
          ]
},
        },
        {
          id: "mpk-u4-count-data-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "You sorted buttons into red (4), blue (2), green (5). Which color has the most? Which has the least? How many buttons total?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compare counts",
                              "statement": "5 > 4 > 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Green has most (5), blue has least (2).",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Total: 4 + 2 + 5 = 11.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Green most, blue least, 11 total**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Picks red as most.",
                    "Adds only two colors."
          ]
},
        },
        {
          id: "mpk-u4-count-data-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The count for each group."
                    },
                    {
                              "id": "b",
                              "text": "Information we collect, like counts of objects."
                    },
                    {
                              "id": "c",
                              "text": "A quick mark for each count."
                    },
                    {
                              "id": "d",
                              "text": "The biggest count."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Data\" means Information we collect, like counts of objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Information we collect, like counts of objects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Information we collect, like counts of objects.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u4-count-data-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"How many\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A quick mark for each count."
                    },
                    {
                              "id": "b",
                              "text": "The biggest count."
                    },
                    {
                              "id": "c",
                              "text": "The smallest count."
                    },
                    {
                              "id": "d",
                              "text": "The count for each group."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"How many\" means The count for each group."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"How many\" means The count for each group.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**How many** = The count for each group.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u4-count-data-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tally\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The biggest count."
                    },
                    {
                              "id": "b",
                              "text": "A quick mark for each count."
                    },
                    {
                              "id": "c",
                              "text": "The smallest count."
                    },
                    {
                              "id": "d",
                              "text": "Information we collect, like counts of objects."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tally\" means A quick mark for each count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tally\" means A quick mark for each count.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tally** = A quick mark for each count.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
