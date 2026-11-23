import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m2-u1-lesson-1-1",
  code: "1-1",
  title: "Counting to 1000",
  goal: "I CAN count to 1000 and skip-count by 5s, 10s and 100s.",
  standards: ["2.NBT.A.2"],
  vocabulary: [
    { term: "Count", definition: "Say numbers in order." },
    { term: "Skip count", definition: "Count by equal jumps." },
    { term: "Hundred", definition: "10 tens." },
    { term: "Thousand", definition: "10 hundreds." },
    { term: "Ones", definition: "Single digits." },
    { term: "Tens", definition: "Groups of ten." },
    { term: "Sequence", definition: "Order of numbers." },
    { term: "Pattern", definition: "Repeated rule." },
  ],
  concepts: [
    {
      id: "m2-u1-count-1000",
      title: "Counting to 1000",
      skill: "Count to 1000 and skip-count by 5s, 10s and 100s.",
      lesson: {
        sections: [
          {
            heading: "Count to 1000",
            body: "We can **count** all the way to **1000**. Practice counting by **1s**, then **skip count** by 5s, 10s and 100s.",
          },
          {
            heading: "Skip counting",
            body: "**Skip counting** means counting by jumps: by 5s (5, 10, 15...), by 10s (10, 20, 30...), by 100s (100, 200, 300...).",
          },
        ],
        keyFormulas: [
          { name: "Skip count", statement: "By 5: 5,10,15... By 10: 10,20,30... By 100: 100,200,300..." },
        ],
        workedExample: {
          problem: "Skip count by 10s starting at 30.",
          solution: "30, 40, 50, 60, 70, 80, 90, 100.",
        },
      },
      questions: [
        {
          id: "m2-u1-count-1000-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes after 99 when counting by 1s?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "100"
                    },
                    {
                              "id": "b",
                              "text": "90"
                    },
                    {
                              "id": "c",
                              "text": "110"
                    },
                    {
                              "id": "d",
                              "text": "101"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "After 99 comes 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "After 99 comes 100.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "100",
          "commonErrors": [
                    "Picks wrong number."
          ]
},
        },
        {
          id: "m2-u1-count-1000-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Skip count by 10s: 20, 30, 40, ...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "41"
                    },
                    {
                              "id": "b",
                              "text": "50"
                    },
                    {
                              "id": "c",
                              "text": "45"
                    },
                    {
                              "id": "d",
                              "text": "60"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "By 10s: next is 50."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "By 10s: next is 50.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "50",
          "commonErrors": [
                    "Adds 1 instead of 10."
          ]
},
        },
        {
          id: "m2-u1-count-1000-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Skip count by 5s starting at 15. Write the next 6 numbers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skip",
                              "name": "By 5s",
                              "statement": "Add 5 each time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists 15,20,25,30,35,40.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "15, 20, 25, 30, 35, 40",
          "commonErrors": "Adds 1 or 10 instead of 5."
},
        },
        {
          id: "m2-u1-count-1000-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many tens are in 100?",
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
                              "statement": "100 = 10 tens."
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
                    "Counts ones instead."
          ]
},
        },
        {
          id: "m2-u1-count-1000-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Count by 100s from 100 to 1000. Write all the numbers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skip",
                              "name": "By 100s",
                              "statement": "Add 100 each time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists 100,200,...,1000.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Correct order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "100, 200, 300, 400, 500, 600, 700, 800, 900, 1000",
          "commonErrors": "Wrong numbers."
},
        },
        {
          id: "m2-u1-count-1000-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Count by equal jumps."
                    },
                    {
                              "id": "b",
                              "text": "Say numbers in order."
                    },
                    {
                              "id": "c",
                              "text": "10 tens."
                    },
                    {
                              "id": "d",
                              "text": "10 hundreds."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count\" means Say numbers in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count\" means Say numbers in order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count** = Say numbers in order.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u1-count-1000-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Skip count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 tens."
                    },
                    {
                              "id": "b",
                              "text": "10 hundreds."
                    },
                    {
                              "id": "c",
                              "text": "Single digits."
                    },
                    {
                              "id": "d",
                              "text": "Count by equal jumps."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Skip count\" means Count by equal jumps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Skip count\" means Count by equal jumps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Skip count** = Count by equal jumps.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u1-count-1000-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hundred\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 hundreds."
                    },
                    {
                              "id": "b",
                              "text": "10 tens."
                    },
                    {
                              "id": "c",
                              "text": "Single digits."
                    },
                    {
                              "id": "d",
                              "text": "Groups of ten."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hundred\" means 10 tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hundred\" means 10 tens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hundred** = 10 tens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
