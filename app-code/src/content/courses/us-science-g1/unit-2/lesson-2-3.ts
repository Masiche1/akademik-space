import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "s1-u2-lesson-2-3",
  code: "2-3",
  title: "How Animals Move",
  goal: "I CAN describe how different animals move.",
  standards: ["1-LS1-2"],
  vocabulary: [
    { term: "Move", definition: "Change position." },
    { term: "Walk", definition: "Move on legs." },
    { term: "Run", definition: "Move fast on legs." },
    { term: "Fly", definition: "Move through air." },
    { term: "Swim", definition: "Move through water." },
    { term: "Crawl", definition: "Move on belly." },
    { term: "Hop", definition: "Jump with back legs." },
    { term: "Slither", definition: "Move without legs." },
  ],
  concepts: [
    {
      id: "s1-u2-animal-movement",
      title: "How animals move",
      skill: "Animals move in different ways: walk, run, fly, swim, crawl, hop, slither.",
      lesson: {
        sections: [
          {
            heading: "Many ways to move",
            body: "Animals **move** in different ways. Some **walk** or **run** on legs; some **fly** with wings; some **swim** with fins; some **crawl**, **hop** or **slither**.",
          },
          {
            heading: "Movement fits environment",
            body: "How an animal moves fits where it lives — fish **swim** because they live in water; birds **fly** because they live in the air/trees.",
          },
        ],
        keyFormulas: [
          { name: "Movement", statement: "Walk/run/fly/swim/crawl/hop/slither = ways animals move." },
        ],
        workedExample: {
          problem: "How does a snake move? A bird? A fish?",
          solution: "Snake **slithers**, bird **flies**, fish **swims**.",
        },
      },
      questions: [
        {
          id: "s1-u2-animal-movement-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does a fish move?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fly"
                    },
                    {
                              "id": "b",
                              "text": "swim"
                    },
                    {
                              "id": "c",
                              "text": "hop"
                    },
                    {
                              "id": "d",
                              "text": "slither"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fish swim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fish swim.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**swim**",
          "commonErrors": [
                    "Picks fly/hop."
          ]
},
        },
        {
          id: "s1-u2-animal-movement-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does a snake move?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "walk"
                    },
                    {
                              "id": "b",
                              "text": "slither"
                    },
                    {
                              "id": "c",
                              "text": "fly"
                    },
                    {
                              "id": "d",
                              "text": "hop"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Snakes slither."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Snakes slither.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**slither**",
          "commonErrors": [
                    "Picks walk/fly."
          ]
},
        },
        {
          id: "s1-u2-animal-movement-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose three animals. Describe how each one moves.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Movement",
                              "statement": "3 animals + movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 3 movements correctly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Bird flies, fish swims, dog walks.'**",
          "commonErrors": [
                    "Fewer than 3.",
                    "Wrong movements."
          ]
},
        },
        {
          id: "s1-u2-animal-movement-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does a frog move?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fly"
                    },
                    {
                              "id": "b",
                              "text": "hop"
                    },
                    {
                              "id": "c",
                              "text": "swim only"
                    },
                    {
                              "id": "d",
                              "text": "slither"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Frogs hop."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Frogs hop.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**hop**",
          "commonErrors": [
                    "Picks fly/slither."
          ]
},
        },
        {
          id: "s1-u2-animal-movement-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare how a land animal moves vs a water animal. How does movement fit their environment?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Movement",
                              "statement": "Compare land/water movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes land animal movement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes water animal movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog walks on land; fish swims in water — movement fits home.'**",
          "commonErrors": [
                    "Same answer for both.",
                    "No environment link."
          ]
},
        },
        {
          id: "s1-u2-animal-movement-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Move\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move on legs."
                    },
                    {
                              "id": "b",
                              "text": "Change position."
                    },
                    {
                              "id": "c",
                              "text": "Move fast on legs."
                    },
                    {
                              "id": "d",
                              "text": "Move through air."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Move\" means Change position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Move\" means Change position.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Move** = Change position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u2-animal-movement-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Walk\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move fast on legs."
                    },
                    {
                              "id": "b",
                              "text": "Move through air."
                    },
                    {
                              "id": "c",
                              "text": "Move through water."
                    },
                    {
                              "id": "d",
                              "text": "Move on legs."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Walk\" means Move on legs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Walk\" means Move on legs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Walk** = Move on legs.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u2-animal-movement-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Run\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move through air."
                    },
                    {
                              "id": "b",
                              "text": "Move fast on legs."
                    },
                    {
                              "id": "c",
                              "text": "Move through water."
                    },
                    {
                              "id": "d",
                              "text": "Move on belly."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Run\" means Move fast on legs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Run\" means Move fast on legs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Run** = Move fast on legs.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
