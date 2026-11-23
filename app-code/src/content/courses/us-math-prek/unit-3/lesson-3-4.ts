import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "mpk-u3-lesson-3-4",
  code: "3-4",
  title: "Number Bonds to 5",
  goal: "I CAN break numbers up to 5 into two parts.",
  standards: ["ELOF-PK.MATH.BOND.1"],
  vocabulary: [
    { term: "Number bond", definition: "Two parts that make a whole number." },
    { term: "Part", definition: "One piece of a whole." },
    { term: "Whole", definition: "The total before splitting." },
    { term: "Break apart", definition: "Split a number into two groups." },
    { term: "Together", definition: "The parts joined back into the whole." },
  ],
  concepts: [
    {
      id: "mpk-u3-number-bonds-5",
      title: "Number bonds",
      skill: "Break numbers 2-5 into two parts and recombine them.",
      lesson: {
        sections: [
          {
            heading: "Break and join",
            body: "The number 4 can be **2 + 2**, but also **1 + 3** or **4 + 0**. Different pairs make the same total — these pairs are **number bonds**.",
          },
          {
            heading: "Why bonds help",
            body: "Knowing the parts of a number makes adding and subtracting easier. If you know 5 = 2 + 3, then 5 - 2 = 3 comes free.",
          },
        ],
        keyFormulas: [
          { name: "Number bond", statement: "whole = part + part; e.g., 5 = 2 + 3" },
        ],
        workedExample: {
          problem: "Write two number bonds for 4.",
          solution: "4 = 2 + 2 and 4 = 1 + 3. (Also 4 = 4 + 0, 4 = 3 + 1.)",
        },
      },
      questions: [
        {
          id: "mpk-u3-number-bonds-5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair makes 3?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 + 1"
                    },
                    {
                              "id": "b",
                              "text": "2 + 1"
                    },
                    {
                              "id": "c",
                              "text": "1 + 3"
                    },
                    {
                              "id": "d",
                              "text": "2 + 2"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2 + 1 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 + 1 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2 + 1**",
          "commonErrors": [
                    "Picks a pair that does not sum to 3."
          ]
},
        },
        {
          id: "mpk-u3-number-bonds-5-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "5 can be broken into...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2 + 2"
                    },
                    {
                              "id": "b",
                              "text": "3 + 2"
                    },
                    {
                              "id": "c",
                              "text": "1 + 4"
                    },
                    {
                              "id": "d",
                              "text": "5 + 5"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1 + 4 = 5 is a number bond for 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1 + 4 = 5 is a number bond for 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**1 + 4**",
          "commonErrors": [
                    "Chooses pairs that do not total 5."
          ]
},
        },
        {
          id: "mpk-u3-number-bonds-5-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "4 = 1 + __. What is the missing part?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing part",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1 + 3 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1 + 3 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Answers 4 instead of the missing part."
          ]
},
        },
        {
          id: "mpk-u3-number-bonds-5-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "2 + __ = 5. What is the missing number?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing addend",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 2 to 5: that is 3 steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 2 to 5: that is 3 steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Subtracts the wrong way round."
          ]
},
        },
        {
          id: "mpk-u3-number-bonds-5-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write two different number bonds for 5, then use one bond to solve 5 - 2 = ?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Number bonds",
                              "statement": "Break 5 into parts; subtracting removes one part."
                    },
                    {
                              "kind": "property",
                              "name": "Bond subtraction",
                              "statement": "5 = 2 + 3, so 5 - 2 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Bonds: 5 = 1 + 4 and 5 = 2 + 3.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "5 - 2 = 3 (the other part).",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**5 = 1+4, 5 = 2+3; 5 - 2 = 3**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Uses the same bond twice.",
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "mpk-u3-number-bonds-5-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Number bond\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One piece of a whole."
                    },
                    {
                              "id": "b",
                              "text": "Two parts that make a whole number."
                    },
                    {
                              "id": "c",
                              "text": "The total before splitting."
                    },
                    {
                              "id": "d",
                              "text": "Split a number into two groups."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Number bond\" means Two parts that make a whole number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Number bond\" means Two parts that make a whole number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Number bond** = Two parts that make a whole number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u3-number-bonds-5-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Part\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The total before splitting."
                    },
                    {
                              "id": "b",
                              "text": "Split a number into two groups."
                    },
                    {
                              "id": "c",
                              "text": "The parts joined back into the whole."
                    },
                    {
                              "id": "d",
                              "text": "One piece of a whole."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Part\" means One piece of a whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Part\" means One piece of a whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Part** = One piece of a whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u3-number-bonds-5-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Whole\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split a number into two groups."
                    },
                    {
                              "id": "b",
                              "text": "The total before splitting."
                    },
                    {
                              "id": "c",
                              "text": "The parts joined back into the whole."
                    },
                    {
                              "id": "d",
                              "text": "Two parts that make a whole number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Whole\" means The total before splitting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Whole\" means The total before splitting.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Whole** = The total before splitting.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
