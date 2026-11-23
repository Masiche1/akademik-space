import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "sci3-u3-lesson-3-1",
  code: "3-1",
  title: "What Is a Life Cycle?",
  goal: "I CAN describe what a life cycle is.",
  standards: ["LS1.B"],
  vocabulary: [
    { term: "Life cycle", definition: "Stages of life." },
    { term: "Stage", definition: "Step in cycle." },
    { term: "Birth", definition: "Coming into life." },
    { term: "Growth", definition: "Getting bigger." },
    { term: "Adult", definition: "Fully grown." },
    { term: "Reproduction", definition: "Making offspring." },
    { term: "Death", definition: "End of life." },
    { term: "Cycle", definition: "Repeating stages." },
  ],
  concepts: [
    {
      id: "sci3-u3-life-cycles",
      title: "What is a life cycle?",
      skill: "Describe life cycle stages: birth, growth, reproduction, death.",
      lesson: {
        sections: [
          {
            heading: "Life repeats",
            body: "A **life cycle** is the stages of life — **birth**, **growth**, becoming **adult**, **reproduction** (making babies), and **death**. Then it starts again.",
          },
          {
            heading: "All living things",
            body: "Plants and animals both have life cycles. The cycle repeats from generation to generation.",
          },
        ],
        keyFormulas: [
          { name: "Life cycle", statement: "Birth -> growth -> adult -> reproduction -> death -> (repeat)." },
        ],
        workedExample: {
          problem: "What are the main stages of a life cycle?",
          solution: "Birth -> growth -> adult -> reproduction -> death.",
        },
      },
      questions: [
        {
          id: "sci3-u3-life-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'life cycle' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one day"
                    },
                    {
                              "id": "b",
                              "text": "the stages of life that repeat"
                    },
                    {
                              "id": "c",
                              "text": "a toy"
                    },
                    {
                              "id": "d",
                              "text": "a game"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Life cycle = repeating stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Life cycle = repeating stages.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the stages of life that repeat",
          "commonErrors": [
                    "Thinks it's just one event."
          ]
},
        },
        {
          id: "sci3-u3-life-cycles-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which comes first in a life cycle?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "death"
                    },
                    {
                              "id": "b",
                              "text": "birth"
                    },
                    {
                              "id": "c",
                              "text": "reproduction"
                    },
                    {
                              "id": "d",
                              "text": "adult"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Birth comes first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Birth comes first.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "birth",
          "commonErrors": [
                    "Thinks adult comes first."
          ]
},
        },
        {
          id: "sci3-u3-life-cycles-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Put the life cycle stages in order: death, birth, reproduction, growth, adult.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "Birth->growth->adult->reproduction->death."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orders stages correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Birth -> growth -> adult -> reproduction -> death**",
          "commonErrors": [
                    "Wrong order.",
                    "Cannot order."
          ]
},
        },
        {
          id: "sci3-u3-life-cycles-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Reproduction' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dying"
                    },
                    {
                              "id": "b",
                              "text": "making offspring"
                    },
                    {
                              "id": "c",
                              "text": "growing"
                    },
                    {
                              "id": "d",
                              "text": "sleeping"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Reproduction = making offspring."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reproduction = making offspring.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "making offspring",
          "commonErrors": [
                    "Thinks it's growth."
          ]
},
        },
        {
          id: "sci3-u3-life-cycles-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe a life cycle in your own words. Does it repeat?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "Stages + repeats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes stages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Says it repeats.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Life starts as baby, grows to adult, has babies, dies — then the cycle repeats.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Doesn't mention repeat."
          ]
},
        },
        {
          id: "sci3-u3-life-cycles-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Life cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Step in cycle."
                    },
                    {
                              "id": "b",
                              "text": "Stages of life."
                    },
                    {
                              "id": "c",
                              "text": "Coming into life."
                    },
                    {
                              "id": "d",
                              "text": "Getting bigger."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Life cycle\" means Stages of life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Life cycle\" means Stages of life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Life cycle** = Stages of life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-life-cycles-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Stage\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Coming into life."
                    },
                    {
                              "id": "b",
                              "text": "Getting bigger."
                    },
                    {
                              "id": "c",
                              "text": "Fully grown."
                    },
                    {
                              "id": "d",
                              "text": "Step in cycle."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Stage\" means Step in cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Stage\" means Step in cycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Stage** = Step in cycle.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-life-cycles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Birth\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Getting bigger."
                    },
                    {
                              "id": "b",
                              "text": "Coming into life."
                    },
                    {
                              "id": "c",
                              "text": "Fully grown."
                    },
                    {
                              "id": "d",
                              "text": "Making offspring."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Birth\" means Coming into life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Birth\" means Coming into life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Birth** = Coming into life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
