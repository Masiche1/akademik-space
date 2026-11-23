import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m2-u1-lesson-1-3",
  code: "1-3",
  title: "Comparing Numbers",
  goal: "I CAN compare numbers using <, > and =.",
  standards: ["2.NBT.A.4"],
  vocabulary: [
    { term: "Compare", definition: "See which is more/less." },
    { term: "Greater than", definition: "More than." },
    { term: "Less than", definition: "Fewer than." },
    { term: "Equal to", definition: "Same as." },
    { term: "Symbol", definition: "Sign for comparing." },
    { term: "Alligator", definition: "Symbol that eats bigger side." },
    { term: "Order", definition: "Arrange by size." },
    { term: "Hundreds", definition: "Groups of hundred." },
  ],
  concepts: [
    {
      id: "m2-u1-compare-numbers",
      title: "Comparing numbers",
      skill: "Compare numbers to 1000 using <, > and =.",
      lesson: {
        sections: [
          {
            heading: "Compare with symbols",
            body: "Use **<** (less than), **>** (greater than), **=** (equal). 45 < 52; 78 > 23; 60 = 60.",
          },
          {
            heading: "Compare by place value",
            body: "Compare the **hundreds** digit first, then tens, then ones. 234 > 198 because 2 hundreds > 1 hundred.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "< = less, > = greater, = = equal. Compare hundreds, then tens, then ones." },
          { name: "Example", statement: "234 > 198 (2 hundreds > 1 hundred)" },
        ],
        workedExample: {
          problem: "Compare 156 and 165.",
          solution: "156 < 165 (same hundreds, 5 tens < 6 tens).",
        },
      },
      questions: [
        {
          id: "m2-u1-compare-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which symbol means 'greater than'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "<"
                    },
                    {
                              "id": "b",
                              "text": ">"
                    },
                    {
                              "id": "c",
                              "text": "="
                    },
                    {
                              "id": "d",
                              "text": "+"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "> means greater."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "> means greater.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": ">",
          "commonErrors": [
                    "Picks wrong symbol."
          ]
},
        },
        {
          id: "m2-u1-compare-numbers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare 87 and 78.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "87 < 78"
                    },
                    {
                              "id": "b",
                              "text": "87 > 78"
                    },
                    {
                              "id": "c",
                              "text": "87 = 78"
                    },
                    {
                              "id": "d",
                              "text": "can't tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "87 > 78 (more tens)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "87 > 78 (more tens).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "87 > 78",
          "commonErrors": [
                    "Compares ones first."
          ]
},
        },
        {
          id: "m2-u1-compare-numbers-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare 203 and 230 using the correct symbol.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "compare",
                              "name": "Hundreds/tens/ones",
                              "statement": "Compare place by place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "203 < 230 (same hundreds, 0 tens < 3 tens).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "203 < 230",
          "commonErrors": "Compares wrong place."
},
        },
        {
          id: "m2-u1-compare-numbers-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Is 999 greater than 100? Answer 1 for yes, 0 for no.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "999 > 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Compares ones only."
          ]
},
        },
        {
          id: "m2-u1-compare-numbers-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Order these numbers from least to greatest: 145, 154, 135. Use < symbols.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "compare",
                              "name": "Order numbers",
                              "statement": "Least to greatest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "135 < 145 < 154.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Correct order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "135 < 145 < 154",
          "commonErrors": "Wrong order."
},
        },
        {
          id: "m2-u1-compare-numbers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More than."
                    },
                    {
                              "id": "b",
                              "text": "See which is more/less."
                    },
                    {
                              "id": "c",
                              "text": "Fewer than."
                    },
                    {
                              "id": "d",
                              "text": "Same as."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means See which is more/less."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means See which is more/less.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = See which is more/less.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u1-compare-numbers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Greater than\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fewer than."
                    },
                    {
                              "id": "b",
                              "text": "Same as."
                    },
                    {
                              "id": "c",
                              "text": "Sign for comparing."
                    },
                    {
                              "id": "d",
                              "text": "More than."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Greater than\" means More than."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Greater than\" means More than.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Greater than** = More than.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u1-compare-numbers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Less than\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same as."
                    },
                    {
                              "id": "b",
                              "text": "Fewer than."
                    },
                    {
                              "id": "c",
                              "text": "Sign for comparing."
                    },
                    {
                              "id": "d",
                              "text": "Symbol that eats bigger side."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Less than\" means Fewer than."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Less than\" means Fewer than.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Less than** = Fewer than.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
