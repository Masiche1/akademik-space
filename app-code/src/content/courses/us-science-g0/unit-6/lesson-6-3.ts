import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "s0-u6-lesson-6-3",
  code: "6-3",
  title: "How Animals Move",
  goal: "I CAN describe how different animals move.",
  standards: ["K-PS2-1", "K-LS1-1"],
  vocabulary: [
    { term: "Move", definition: "Change position." },
    { term: "Walk", definition: "Move on legs." },
    { term: "Run", definition: "Move fast on legs." },
    { term: "Fly", definition: "Move through air with wings." },
    { term: "Swim", definition: "Move through water." },
    { term: "Crawl", definition: "Move on belly/close to ground." },
    { term: "Hop", definition: "Jump on two legs." },
    { term: "Slither", definition: "Move like a snake." },
  ],
  concepts: [
    {
      id: "s0-u6-animal-movement",
      title: "How animals move",
      skill: "Describe how different animals move: walk, run, fly, swim, crawl, hop, slither.",
      lesson: {
        sections: [
          {
            heading: "Many ways to move",
            body: "Animals move in different ways: **walk** and **run** on legs, **fly** with wings, **swim** in water, **crawl** on the ground, **hop** (like rabbits), **slither** (like snakes).",
          },
          {
            heading: "Movement fits the animal",
            body: "Each animal's movement fits its body and home — birds **fly**, fish **swim**, snakes **slither**, rabbits **hop**.",
          },
        ],
        keyFormulas: [
          { name: "Movement", statement: "Walk, run, fly, swim, crawl, hop, slither — fits body + home." },
        ],
        workedExample: {
          problem: "How does a fish move? How does a rabbit move?",
          solution: "Fish **swims** (fins in water). Rabbit **hops** (long hind legs).",
        },
      },
      questions: [
        {
          id: "s0-u6-animal-movement-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fish moves by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "flying"
                    },
                    {
                              "id": "b",
                              "text": "swimming"
                    },
                    {
                              "id": "c",
                              "text": "hopping"
                    },
                    {
                              "id": "d",
                              "text": "slithering"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fish swims."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fish swims.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**swims**",
          "commonErrors": [
                    "Picks wrong movement."
          ]
},
        },
        {
          id: "s0-u6-animal-movement-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A snake moves by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "walking"
                    },
                    {
                              "id": "b",
                              "text": "slithering"
                    },
                    {
                              "id": "c",
                              "text": "flying"
                    },
                    {
                              "id": "d",
                              "text": "hopping"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Snake slithers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Snake slithers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**slithers**",
          "commonErrors": [
                    "Picks wrong movement."
          ]
},
        },
        {
          id: "s0-u6-animal-movement-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Choose three animals. Describe how each moves and which body part helps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Movement",
                              "statement": "3 animals + movement + body part."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 3 movements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Links to body parts.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Bird flies (wings); fish swims (fins); rabbit hops (legs).'**",
          "commonErrors": [
                    "Fewer than 3.",
                    "No body parts."
          ]
},
        },
        {
          id: "s0-u6-animal-movement-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Crawl' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fly"
                    },
                    {
                              "id": "b",
                              "text": "move on belly/close to ground"
                    },
                    {
                              "id": "c",
                              "text": "swim"
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
                              "statement": "Crawl = on ground/belly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Crawl = on ground/belly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**on ground**",
          "commonErrors": [
                    "Confuses with fly."
          ]
},
        },
        {
          id: "s0-u6-animal-movement-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare how two animals move. How are they different? Why do you think they move that way?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Movement",
                              "statement": "Two animals + difference + reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares movements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives reason (body/home).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Bird flies (wings); snake slithers (no legs) — body differences.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No reason."
          ]
},
        },
        {
          id: "s0-u6-animal-movement-q6",
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
                              "text": "Move through air with wings."
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
          id: "s0-u6-animal-movement-q7",
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
                              "text": "Move through air with wings."
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
          id: "s0-u6-animal-movement-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Run\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move through air with wings."
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
                              "text": "Move on belly/close to ground."
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
