import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "spk-u1-lesson-1-4",
  code: "1-4",
  title: "Compare Objects",
  goal: "I CAN say how two objects are the same and different.",
  standards: ["ELOF-PK.SCI.COMPARE.1"],
  vocabulary: [
    { term: "Compare", definition: "Look at how two things are alike and different." },
    { term: "Same", definition: "Alike in some way." },
    { term: "Different", definition: "Not alike." },
    { term: "Bigger", definition: "Larger in size." },
    { term: "Smaller", definition: "Tinier in size." },
    { term: "Heavier", definition: "Weighs more." },
    { term: "Lighter", definition: "Weighs less." },
  ],
  concepts: [
    {
      id: "spk-u1-compare-objects",
      title: "Comparing objects",
      skill: "Compare two objects by size, weight, color and other properties.",
      lesson: {
        sections: [
          {
            heading: "Same and different",
            body: "When you **compare**, you look at how two things are **the same** and **different**. Two cups might both be cups (same) but one is bigger (different).",
          },
          {
            heading: "Compare words",
            body: "Use words like **bigger, smaller, heavier, lighter, longer, shorter, same, different** to describe how objects compare.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Find same and different: bigger/smaller, heavier/lighter, same/different." },
        ],
        workedExample: {
          problem: "Compare a big ball and a small ball.",
          solution: "They are **the same** (both balls) but the big ball is **bigger** and the small ball is **smaller**.",
        },
      },
      questions: [
        {
          id: "spk-u1-compare-objects-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When you 'compare' two objects, you look for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only differences"
                    },
                    {
                              "id": "b",
                              "text": "how they are the same and different"
                    },
                    {
                              "id": "c",
                              "text": "only similarities"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Compare = find same AND different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare = find same AND different.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Same and different**",
          "commonErrors": [
                    "Thinks compare means only differences."
          ]
},
        },
        {
          id: "spk-u1-compare-objects-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A big rock and a small rock are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "exactly the same"
                    },
                    {
                              "id": "b",
                              "text": "the same kind but different sizes"
                    },
                    {
                              "id": "c",
                              "text": "completely different"
                    },
                    {
                              "id": "d",
                              "text": "not comparable"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Both rocks (same kind) but different sizes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both rocks (same kind) but different sizes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Same kind, different size**",
          "commonErrors": [
                    "Says they're completely different."
          ]
},
        },
        {
          id: "spk-u1-compare-objects-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare two objects you can hold (two cups, two blocks). How are they the same? How are they different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "Find same and different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names same and different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Both cups; one is bigger and blue, one is smaller and red.'**",
          "commonErrors": [
                    "Only says same.",
                    "Only says different."
          ]
},
        },
        {
          id: "spk-u1-compare-objects-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word means 'weighs more'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "lighter"
                    },
                    {
                              "id": "b",
                              "text": "heavier"
                    },
                    {
                              "id": "c",
                              "text": "smaller"
                    },
                    {
                              "id": "d",
                              "text": "shorter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "'Heavier' = weighs more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Heavier' = weighs more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Heavier**",
          "commonErrors": [
                    "Confuses with 'lighter'."
          ]
},
        },
        {
          id: "spk-u1-compare-objects-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two objects of different sizes. Use at least three comparing words (bigger, smaller, heavier, etc.) to describe them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "Use comparing words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares two objects.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Uses 3+ comparing words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'The big rock is heavier and bigger; the small one is lighter and smaller.'**",
          "commonErrors": [
                    "Fewer than 3 words.",
                    "Cannot compare."
          ]
},
        },
        {
          id: "spk-u1-compare-objects-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Alike in some way."
                    },
                    {
                              "id": "b",
                              "text": "Look at how two things are alike and different."
                    },
                    {
                              "id": "c",
                              "text": "Not alike."
                    },
                    {
                              "id": "d",
                              "text": "Larger in size."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means Look at how two things are alike and different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means Look at how two things are alike and different.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = Look at how two things are alike and different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-compare-objects-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Same\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Not alike."
                    },
                    {
                              "id": "b",
                              "text": "Larger in size."
                    },
                    {
                              "id": "c",
                              "text": "Tinier in size."
                    },
                    {
                              "id": "d",
                              "text": "Alike in some way."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Same\" means Alike in some way."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Same\" means Alike in some way.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Same** = Alike in some way.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-compare-objects-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Different\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Larger in size."
                    },
                    {
                              "id": "b",
                              "text": "Not alike."
                    },
                    {
                              "id": "c",
                              "text": "Tinier in size."
                    },
                    {
                              "id": "d",
                              "text": "Weighs more."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Different\" means Not alike."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Different\" means Not alike.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Different** = Not alike.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
