import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m4-u3-lesson-3-1",
  code: "3-1",
  title: "Multiplication Basics",
  goal: "I CAN multiply multi-digit numbers using the standard algorithm.",
  standards: ["4.NBT.B.5"],
  vocabulary: [
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Product", definition: "Answer to multiplication." },
    { term: "Factor", definition: "Numbers being multiplied." },
    { term: "Algorithm", definition: "Step-by-step method." },
    { term: "Partial product", definition: "Part of the answer." },
    { term: "Place value", definition: "Position in number." },
    { term: "Regroup", definition: "Carry to next place." },
    { term: "Estimate", definition: "Check reasonableness." },
  ],
  concepts: [
    {
      id: "m4-u3-multiply-basics",
      title: "Multiplication basics",
      skill: "Multiply multi-digit numbers using the standard algorithm.",
      lesson: {
        sections: [
          {
            heading: "Standard algorithm",
            body: "To **multiply**, line up numbers, multiply each digit, and **add partial products**. For 2-digit x 2-digit, multiply ones, then tens, then add.",
          },
          {
            heading: "Example",
            body: "$23 \\times 4$: 3x4=12 (write 2, carry 1), 2x4=8+1=9. **Answer: 92.**",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "Ones x ones -> carry -> tens x ones -> add partials." },
        ],
        workedExample: {
          problem: "Calculate $34 \\times 6$.",
          solution: "4x6=24 (write 4, carry 2), 3x6=18+2=20. **Answer: 204.**",
        },
      },
      questions: [
        {
          id: "m4-u3-multiply-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $34 \\times 6$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "204"
                    },
                    {
                              "id": "b",
                              "text": "184"
                    },
                    {
                              "id": "c",
                              "text": "214"
                    },
                    {
                              "id": "d",
                              "text": "194"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "34 x 6 = 204."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "34 x 6 = 204.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "204",
          "commonErrors": [
                    "Misses carry."
          ]
},
        },
        {
          id: "m4-u3-multiply-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $47 \\times 8$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "376"
                    },
                    {
                              "id": "b",
                              "text": "386"
                    },
                    {
                              "id": "c",
                              "text": "366"
                    },
                    {
                              "id": "d",
                              "text": "396"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "47 x 8 = 376."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "47 x 8 = 376.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "376",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m4-u3-multiply-basics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $56 \\times 7$ and $89 \\times 4$. Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply",
                              "statement": "392 and 356."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiplies first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Multiplies second.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**56 x 7 = 392; 89 x 4 = 356**",
          "commonErrors": [
                    "Wrong products.",
                    "Missing work."
          ]
},
        },
        {
          id: "m4-u3-multiply-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Estimate: $47 \\times 8$ is about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "300"
                    },
                    {
                              "id": "b",
                              "text": "400"
                    },
                    {
                              "id": "c",
                              "text": "500"
                    },
                    {
                              "id": "d",
                              "text": "600"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "50 x 8 = 400."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "50 x 8 = 400.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "400",
          "commonErrors": [
                    "Poor estimate."
          ]
},
        },
        {
          id: "m4-u3-multiply-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate $67 \\times 9$ and explain how you used place value.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply",
                              "statement": "603."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiplies correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains place value.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**67 x 9 = 603; ones x ones, tens x ones, add partials**",
          "commonErrors": [
                    "Wrong product.",
                    "No explanation."
          ]
},
        },
        {
          id: "m4-u3-multiply-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer to multiplication."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Numbers being multiplied."
                    },
                    {
                              "id": "d",
                              "text": "Step-by-step method."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Multiply\" means Repeated addition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Multiply\" means Repeated addition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Multiply** = Repeated addition.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u3-multiply-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Product\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers being multiplied."
                    },
                    {
                              "id": "b",
                              "text": "Step-by-step method."
                    },
                    {
                              "id": "c",
                              "text": "Part of the answer."
                    },
                    {
                              "id": "d",
                              "text": "Answer to multiplication."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Product\" means Answer to multiplication."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Product\" means Answer to multiplication.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Product** = Answer to multiplication.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u3-multiply-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Factor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Step-by-step method."
                    },
                    {
                              "id": "b",
                              "text": "Numbers being multiplied."
                    },
                    {
                              "id": "c",
                              "text": "Part of the answer."
                    },
                    {
                              "id": "d",
                              "text": "Position in number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Factor\" means Numbers being multiplied."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Factor\" means Numbers being multiplied.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Factor** = Numbers being multiplied.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
