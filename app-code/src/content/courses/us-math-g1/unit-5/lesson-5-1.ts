import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "m1-u5-lesson-5-1",
  code: "5-1",
  title: "Adding within 100",
  goal: "I CAN add within 100 using place value.",
  standards: ["1.NBT.C.4", "1.OA.A.1", "1.NBT.B.2"],
  vocabulary: [
    { term: "Add", definition: "Put together." },
    { term: "Within 100", definition: "Numbers up to 100." },
    { term: "Place value", definition: "Tens and ones." },
    { term: "Tens", definition: "Groups of 10." },
    { term: "Ones", definition: "Single units." },
    { term: "Regroup", definition: "Carry over to tens." },
    { term: "Sum", definition: "Answer." },
    { term: "Equation", definition: "Math sentence." },
  ],
  concepts: [
    {
      id: "m1-u5-add-within-100",
      title: "Adding within 100",
      skill: "Add within 100 by adding tens and ones separately.",
      lesson: {
        sections: [
          {
            heading: "Add tens and ones",
            body: "To add within 100, add the **tens** and **ones** separately. $34 + 25$: 3 tens + 2 tens = 5 tens; 4 ones + 5 ones = 9 ones; total = 59.",
          },
          {
            heading: "Regrouping",
            body: "If ones add to 10 or more, **regroup** — carry 1 ten to the tens place. $38 + 15$: 8 + 5 = 13 ones = 1 ten + 3 ones, so 38 + 15 = 53.",
          },
        ],
        keyFormulas: [
          { name: "Add within 100", statement: "Add tens + add ones; regroup if ones >= 10." },
        ],
        workedExample: {
          problem: "Solve $45 + 32$.",
          solution: "Tens: $40 + 30 = 70$. Ones: $5 + 2 = 7$. Total: $70 + 7 = 77$. **$45 + 32 = 77$**.",
        },
      },
      questions: [
        {
          id: "m1-u5-add-within-100-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $34 + 25$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 59
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "30+20=50, 4+5=9, 50+9=59."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "30+20=50, 4+5=9, 50+9=59.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(59)**",
          "commonErrors": [
                    "Adds wrong places."
          ]
},
        },
        {
          id: "m1-u5-add-within-100-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $47 + 36$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 83
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "40+30=70, 7+6=13=1 ten+3, 70+10+3=83."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "40+30=70, 7+6=13=1 ten+3, 70+10+3=83.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(83)**",
          "commonErrors": [
                    "Does not regroup."
          ]
},
        },
        {
          id: "m1-u5-add-within-100-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $58 + 27$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 85
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "50+20=70, 8+7=15=1 ten+5, 70+10+5=85."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "50+20=70, 8+7=15=1 ten+5, 70+10+5=85.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(85)**",
          "commonErrors": [
                    "Does not regroup."
          ]
},
        },
        {
          id: "m1-u5-add-within-100-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $36 + 48$ showing tens and ones separately, including regrouping.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Add within 100",
                              "statement": "30+40=70, 6+8=14=1 ten+4, 70+10+4=84."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adds tens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Adds ones + regroups.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**84**",
          "commonErrors": [
                    "No regrouping.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m1-u5-add-within-100-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers up to 100."
                    },
                    {
                              "id": "b",
                              "text": "Put together."
                    },
                    {
                              "id": "c",
                              "text": "Tens and ones."
                    },
                    {
                              "id": "d",
                              "text": "Groups of 10."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Put together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Put together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Put together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-add-within-100-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Within 100\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tens and ones."
                    },
                    {
                              "id": "b",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "c",
                              "text": "Single units."
                    },
                    {
                              "id": "d",
                              "text": "Numbers up to 100."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Within 100\" means Numbers up to 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Within 100\" means Numbers up to 100.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Within 100** = Numbers up to 100.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-add-within-100-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "b",
                              "text": "Tens and ones."
                    },
                    {
                              "id": "c",
                              "text": "Single units."
                    },
                    {
                              "id": "d",
                              "text": "Carry over to tens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Tens and ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Tens and ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Tens and ones.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-add-within-100-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tens\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Single units."
                    },
                    {
                              "id": "b",
                              "text": "Carry over to tens."
                    },
                    {
                              "id": "c",
                              "text": "Answer."
                    },
                    {
                              "id": "d",
                              "text": "Groups of 10."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tens\" means Groups of 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tens\" means Groups of 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tens** = Groups of 10.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
