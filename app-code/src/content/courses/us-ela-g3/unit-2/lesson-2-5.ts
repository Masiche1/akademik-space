import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "ela3-u2-lesson-2-5",
  code: "2-5",
  title: "Story Structure Review",
  goal: "I CAN identify problem/solution, elements, purpose and compare stories.",
  standards: ["RL.3.3", "RL.3.8", "RL.3.9"],
  vocabulary: [
    { term: "Problem", definition: "Challenge." },
    { term: "Solution", definition: "Fix." },
    { term: "Character", definition: "Who is in story." },
    { term: "Setting", definition: "Where it happens." },
    { term: "Event", definition: "What happens." },
    { term: "Purpose", definition: "Why written." },
    { term: "Compare", definition: "Same/different." },
    { term: "Story", definition: "A tale." },
  ],
  concepts: [
    {
      id: "ela3-u2-structure-review",
      title: "Story structure review",
      skill: "Combine problem/solution, story elements, purpose and comparison.",
      lesson: {
        sections: [
          {
            heading: "All story skills",
            body: "Stories have **elements** (characters, setting, events), **problem/solution**, **author's purpose**, and can be **compared** to other stories.",
          },
          {
            heading: "Put it together",
            body: "Identify all story elements and compare stories.",
          },
        ],
        keyFormulas: [
          { name: "Story structure", statement: "Elements + problem/solution + purpose + compare = all skills." },
        ],
        workedExample: {
          problem: "Read a story: identify elements, problem/solution, purpose, and compare to another story.",
          solution: "All story skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "ela3-u2-structure-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Story skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only characters"
                    },
                    {
                              "id": "b",
                              "text": "elements, problem/solution, purpose, compare"
                    },
                    {
                              "id": "c",
                              "text": "only setting"
                    },
                    {
                              "id": "d",
                              "text": "only purpose"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All story skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All story skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela3-u2-structure-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Identify characters, setting, problem/solution, author's purpose, and compare to another story.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All story",
                                                  "All skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All story",
                                                  "All skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all five.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**All elements identified**"
          ]
},
        },
        {
          id: "ela3-u2-structure-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'solution' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the problem"
                    },
                    {
                              "id": "b",
                              "text": "how the problem is fixed"
                    },
                    {
                              "id": "c",
                              "text": "the beginning"
                    },
                    {
                              "id": "d",
                              "text": "a character"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Solution = how fixed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solution = how fixed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**how fixed**",
          "commonErrors": [
                    "Confuses with problem."
          ]
},
        },
        {
          id: "ela3-u2-structure-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fix."
                    },
                    {
                              "id": "b",
                              "text": "Challenge."
                    },
                    {
                              "id": "c",
                              "text": "Who is in story."
                    },
                    {
                              "id": "d",
                              "text": "Where it happens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Problem\" means Challenge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Problem\" means Challenge.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Problem** = Challenge.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u2-structure-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solution\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who is in story."
                    },
                    {
                              "id": "b",
                              "text": "Where it happens."
                    },
                    {
                              "id": "c",
                              "text": "What happens."
                    },
                    {
                              "id": "d",
                              "text": "Fix."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Solution\" means Fix."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solution\" means Fix.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Solution** = Fix.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u2-structure-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where it happens."
                    },
                    {
                              "id": "b",
                              "text": "Who is in story."
                    },
                    {
                              "id": "c",
                              "text": "What happens."
                    },
                    {
                              "id": "d",
                              "text": "Why written."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Who is in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Who is in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Who is in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u2-structure-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Setting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens."
                    },
                    {
                              "id": "b",
                              "text": "Why written."
                    },
                    {
                              "id": "c",
                              "text": "Same/different."
                    },
                    {
                              "id": "d",
                              "text": "Where it happens."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Setting\" means Where it happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Setting\" means Where it happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Setting** = Where it happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u2-structure-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Event\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why written."
                    },
                    {
                              "id": "b",
                              "text": "What happens."
                    },
                    {
                              "id": "c",
                              "text": "Same/different."
                    },
                    {
                              "id": "d",
                              "text": "A tale."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Event\" means What happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Event\" means What happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Event** = What happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
