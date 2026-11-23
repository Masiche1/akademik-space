import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m4-u1-lesson-1-2",
  code: "1-2",
  title: "Comparing Large Numbers",
  goal: "I CAN compare and order numbers up to 1,000,000.",
  standards: ["4.NBT.A.2"],
  vocabulary: [
    { term: "Compare", definition: "See which is more." },
    { term: "Greater than", definition: "> symbol." },
    { term: "Less than", definition: "< symbol." },
    { term: "Equal to", definition: "= symbol." },
    { term: "Order", definition: "From least to greatest." },
    { term: "Digit", definition: "Single number 0-9." },
    { term: "Place", definition: "Position in number." },
    { term: "First difference", definition: "Where numbers differ." },
  ],
  concepts: [
    {
      id: "m4-u1-compare-numbers",
      title: "Comparing large numbers",
      skill: "Compare and order numbers up to 1,000,000 using >, <, =.",
      lesson: {
        sections: [
          {
            heading: "Compare digit by digit",
            body: "To **compare**, start from the **left** (largest place) and find the **first digit** that is different. That digit tells you which is greater.",
          },
          {
            heading: "Symbols",
            body: "**>** = greater than, **<** = less than, **=** = equal to. 456,789 < 567,890 because 4 < 5 in hundred thousands.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Left to right; first different digit decides." },
          { name: "Order", statement: "Least -> greatest or greatest -> least." },
        ],
        workedExample: {
          problem: "Compare 345,678 and 354,321.",
          solution: "Hundred thousands: 3 = 3. Ten thousands: 4 < 5. So 345,678 < 354,321.",
        },
      },
      questions: [
        {
          id: "m4-u1-compare-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is greater: 456,789 or 465,789?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "456,789"
                    },
                    {
                              "id": "b",
                              "text": "465,789"
                    },
                    {
                              "id": "c",
                              "text": "equal"
                    },
                    {
                              "id": "d",
                              "text": "cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ten thousands: 5 < 6, so 465,789 > 456,789."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ten thousands: 5 < 6, so 465,789 > 456,789.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "465,789",
          "commonErrors": [
                    "Compares wrong place."
          ]
},
        },
        {
          id: "m4-u1-compare-numbers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which symbol: 789,012 ___ 798,012?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": ">"
                    },
                    {
                              "id": "b",
                              "text": "<"
                    },
                    {
                              "id": "c",
                              "text": "="
                    },
                    {
                              "id": "d",
                              "text": "none"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ten thousands: 8 < 9, so 789,012 < 798,012."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ten thousands: 8 < 9, so 789,012 < 798,012.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "<",
          "commonErrors": [
                    "Wrong symbol."
          ]
},
        },
        {
          id: "m4-u1-compare-numbers-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Order these from least to greatest: 456,789, 465,789, 445,789.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "445,789 < 456,789 < 465,789."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orders correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**445,789 < 456,789 < 465,789**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing numbers."
          ]
},
        },
        {
          id: "m4-u1-compare-numbers-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the greatest?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "999,999"
                    },
                    {
                              "id": "b",
                              "text": "1,000,000"
                    },
                    {
                              "id": "c",
                              "text": "999,998"
                    },
                    {
                              "id": "d",
                              "text": "100,000"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1,000,000 > 999,999."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1,000,000 > 999,999.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1,000,000",
          "commonErrors": [
                    "Thinks 999,999 is bigger."
          ]
},
        },
        {
          id: "m4-u1-compare-numbers-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare 234,567 and 243,576. Which is greater and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "243,576 > 234,567."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names greater.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains why.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**243,576 > 234,567; ten thousands 4 > 3**",
          "commonErrors": [
                    "Wrong comparison.",
                    "No explanation."
          ]
},
        },
        {
          id: "m4-u1-compare-numbers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "> symbol."
                    },
                    {
                              "id": "b",
                              "text": "See which is more."
                    },
                    {
                              "id": "c",
                              "text": "< symbol."
                    },
                    {
                              "id": "d",
                              "text": "= symbol."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means See which is more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means See which is more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = See which is more.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u1-compare-numbers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Greater than\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "< symbol."
                    },
                    {
                              "id": "b",
                              "text": "= symbol."
                    },
                    {
                              "id": "c",
                              "text": "From least to greatest."
                    },
                    {
                              "id": "d",
                              "text": "> symbol."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Greater than\" means > symbol."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Greater than\" means > symbol.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Greater than** = > symbol.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u1-compare-numbers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Less than\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "= symbol."
                    },
                    {
                              "id": "b",
                              "text": "< symbol."
                    },
                    {
                              "id": "c",
                              "text": "From least to greatest."
                    },
                    {
                              "id": "d",
                              "text": "Single number 0-9."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Less than\" means < symbol."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Less than\" means < symbol.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Less than** = < symbol.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
