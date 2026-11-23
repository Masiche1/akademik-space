import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "m2-u5-lesson-5-3",
  code: "5-3",
  title: "Counting Money",
  goal: "I CAN count coins and bills.",
  standards: ["2.MD.C.8"],
  vocabulary: [
    { term: "Money", definition: "Coins and bills." },
    { term: "Coin", definition: "Metal money." },
    { term: "Bill", definition: "Paper money." },
    { term: "Penny", definition: "1 cent." },
    { term: "Nickel", definition: "5 cents." },
    { term: "Dime", definition: "10 cents." },
    { term: "Quarter", definition: "25 cents." },
    { term: "Dollar", definition: "100 cents." },
  ],
  concepts: [
    {
      id: "m2-u5-measure-money",
      title: "Counting money",
      skill: "Identify coins and bills and count their values.",
      lesson: {
        sections: [
          {
            heading: "Know your money",
            body: "**Pennies** (1¢), **nickels** (5¢), **dimes** (10¢), **quarters** (25¢), **dollars** (100¢). Count the value of each.",
          },
          {
            heading: "Count totals",
            body: "Add up coin values: 2 quarters + 1 dime + 1 nickel = 50¢ + 10¢ + 5¢ = 65¢.",
          },
        ],
        keyFormulas: [
          { name: "Coins", statement: "Penny=1, nickel=5, dime=10, quarter=25, dollar=100." },
          { name: "Count", statement: "Add all coin values." },
        ],
        workedExample: {
          problem: "Count: 1 quarter, 2 dimes, 3 pennies.",
          solution: "25¢ + 10¢ + 10¢ + 1¢ + 1¢ + 1¢ = 48¢.",
        },
      },
      questions: [
        {
          id: "m2-u5-measure-money-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quarter is worth...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10¢"
                    },
                    {
                              "id": "b",
                              "text": "25¢"
                    },
                    {
                              "id": "c",
                              "text": "5¢"
                    },
                    {
                              "id": "d",
                              "text": "50¢"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Quarter = 25¢."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quarter = 25¢.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "25¢",
          "commonErrors": [
                    "Picks wrong coin."
          ]
},
        },
        {
          id: "m2-u5-measure-money-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count: 2 dimes and 1 nickel.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "15¢"
                    },
                    {
                              "id": "b",
                              "text": "25¢"
                    },
                    {
                              "id": "c",
                              "text": "30¢"
                    },
                    {
                              "id": "d",
                              "text": "20¢"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10¢ + 10¢ + 5¢ = 25¢."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10¢ + 10¢ + 5¢ = 25¢.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "25¢",
          "commonErrors": [
                    "Wrong sum."
          ]
},
        },
        {
          id: "m2-u5-measure-money-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count the value: 1 dollar bill, 2 quarters, 1 dime.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "money",
                              "name": "Count value",
                              "statement": "Add all values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100¢ + 25¢ + 25¢ + 10¢ = 160¢.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "160¢",
          "commonErrors": "Wrong total."
},
        },
        {
          id: "m2-u5-measure-money-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many cents are in a dime?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Dime = 10 cents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Wrong value."
          ]
},
        },
        {
          id: "m2-u5-measure-money-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "You have 3 quarters, 2 dimes and 4 pennies. How much money do you have?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "money",
                              "name": "Count coins",
                              "statement": "Add all coin values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "75¢ + 20¢ + 4¢ = 99¢.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "99¢ = 0.99 dollars.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "99¢",
          "commonErrors": "Wrong total."
},
        },
        {
          id: "m2-u5-measure-money-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Money\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Metal money."
                    },
                    {
                              "id": "b",
                              "text": "Coins and bills."
                    },
                    {
                              "id": "c",
                              "text": "Paper money."
                    },
                    {
                              "id": "d",
                              "text": "1 cent."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Money\" means Coins and bills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Money\" means Coins and bills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Money** = Coins and bills.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u5-measure-money-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coin\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Paper money."
                    },
                    {
                              "id": "b",
                              "text": "1 cent."
                    },
                    {
                              "id": "c",
                              "text": "5 cents."
                    },
                    {
                              "id": "d",
                              "text": "Metal money."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Coin\" means Metal money."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Coin\" means Metal money.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Coin** = Metal money.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u5-measure-money-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bill\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 cent."
                    },
                    {
                              "id": "b",
                              "text": "Paper money."
                    },
                    {
                              "id": "c",
                              "text": "5 cents."
                    },
                    {
                              "id": "d",
                              "text": "10 cents."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Bill\" means Paper money."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bill\" means Paper money.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bill** = Paper money.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
