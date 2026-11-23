import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "mpk-u4-lesson-4-5",
  code: "4-5",
  title: "How Much Does It Hold?",
  goal: "I CAN compare how much containers hold.",
  standards: ["ELOF-PK.MATH.MEAS.3"],
  vocabulary: [
    { term: "Capacity", definition: "How much a container can hold." },
    { term: "Full", definition: "Holding as much as it can." },
    { term: "Empty", definition: "Holding nothing." },
    { term: "Half full", definition: "Holding half of its capacity." },
    { term: "Pour", definition: "Move liquid or small objects from one container to another." },
  ],
  concepts: [
    {
      id: "mpk-u4-capacity",
      title: "Capacity",
      skill: "Compare containers by how much they hold.",
      lesson: {
        sections: [
          {
            heading: "How much can it hold?",
            body: "**Capacity** is how much a container can hold. A cup holds less than a bucket; a bucket holds less than a bathtub.",
          },
          {
            heading: "Compare by pouring",
            body: "Pour water or sand from one container to another to see which holds more. The one that holds more has **greater capacity**.",
          },
        ],
        keyFormulas: [
          { name: "Capacity", statement: "How much a container holds; compare by pouring or by size." },
        ],
        workedExample: {
          problem: "A small cup and a big bowl. Which holds more?",
          solution: "The **big bowl** has greater capacity.",
        },
      },
      questions: [
        {
          id: "mpk-u4-capacity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which holds more: a cup or a bucket?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The cup"
                    },
                    {
                              "id": "b",
                              "text": "The bucket"
                    },
                    {
                              "id": "c",
                              "text": "They hold the same"
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
                              "statement": "A bucket is bigger and holds more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A bucket is bigger and holds more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**The bucket**",
          "commonErrors": [
                    "Thinks small always holds more."
          ]
},
        },
        {
          id: "mpk-u4-capacity-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A container that is 'full' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "empty"
                    },
                    {
                              "id": "b",
                              "text": "holding as much as it can"
                    },
                    {
                              "id": "c",
                              "text": "half full"
                    },
                    {
                              "id": "d",
                              "text": "broken"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Full = holding maximum capacity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Full = holding maximum capacity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Holding as much as it can**",
          "commonErrors": [
                    "Thinks full means empty."
          ]
},
        },
        {
          id: "mpk-u4-capacity-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bottle holds 4 cups of water. A glass holds 1 cup. How many more cups does the bottle hold?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "More",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 - 1 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 - 1 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Adds 4 + 1."
          ]
},
        },
        {
          id: "mpk-u4-capacity-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "To compare capacity fairly, you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess by color"
                    },
                    {
                              "id": "b",
                              "text": "pour water from one to the other"
                    },
                    {
                              "id": "c",
                              "text": "weigh them"
                    },
                    {
                              "id": "d",
                              "text": "shake them"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pouring shows which holds more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pouring shows which holds more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pour water**",
          "commonErrors": [
                    "Compares by appearance only."
          ]
},
        },
        {
          id: "mpk-u4-capacity-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how you would find out whether a mug or a bowl holds more water.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Pour and compare",
                              "statement": "Fill each and pour into the other, or pour both into a bigger container."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "The one that holds more has greater capacity.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Describes a fair comparison method.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Pour water to compare; the one that holds more has greater capacity.**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Guesses by size only.",
                    "Does not describe a method."
          ]
},
        },
        {
          id: "mpk-u4-capacity-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Capacity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Holding as much as it can."
                    },
                    {
                              "id": "b",
                              "text": "How much a container can hold."
                    },
                    {
                              "id": "c",
                              "text": "Holding nothing."
                    },
                    {
                              "id": "d",
                              "text": "Holding half of its capacity."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Capacity\" means How much a container can hold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Capacity\" means How much a container can hold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Capacity** = How much a container can hold.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u4-capacity-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Full\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Holding nothing."
                    },
                    {
                              "id": "b",
                              "text": "Holding half of its capacity."
                    },
                    {
                              "id": "c",
                              "text": "Move liquid or small objects from one container to another."
                    },
                    {
                              "id": "d",
                              "text": "Holding as much as it can."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Full\" means Holding as much as it can."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Full\" means Holding as much as it can.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Full** = Holding as much as it can.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u4-capacity-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Empty\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Holding half of its capacity."
                    },
                    {
                              "id": "b",
                              "text": "Holding nothing."
                    },
                    {
                              "id": "c",
                              "text": "Move liquid or small objects from one container to another."
                    },
                    {
                              "id": "d",
                              "text": "How much a container can hold."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Empty\" means Holding nothing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Empty\" means Holding nothing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Empty** = Holding nothing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
