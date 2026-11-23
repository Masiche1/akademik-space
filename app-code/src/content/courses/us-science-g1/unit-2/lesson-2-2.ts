import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "s1-u2-lesson-2-2",
  code: "2-2",
  title: "Animal Bodies",
  goal: "I CAN describe animal body parts and what they do.",
  standards: ["1-LS1-2"],
  vocabulary: [
    { term: "Body part", definition: "Piece of animal body." },
    { term: "Leg", definition: "Used for walking/running." },
    { term: "Wing", definition: "Used for flying." },
    { term: "Fin", definition: "Used for swimming." },
    { term: "Eye", definition: "Used for seeing." },
    { term: "Ear", definition: "Used for hearing." },
    { term: "Nose", definition: "Used for smelling." },
    { term: "Mouth", definition: "Used for eating." },
  ],
  concepts: [
    {
      id: "s1-u2-animal-bodies",
      title: "Animal body parts",
      skill: "Animals have body parts for moving, sensing and eating.",
      lesson: {
        sections: [
          {
            heading: "Body parts have jobs",
            body: "Animals have body parts with specific jobs: **legs** walk, **wings** fly, **fins** swim, **eyes** see, **ears** hear, **noses** smell, **mouths** eat.",
          },
          {
            heading: "Adapted for life",
            body: "Body parts help animals survive in their environment — birds have wings to fly, fish have fins to swim.",
          },
        ],
        keyFormulas: [
          { name: "Body parts", statement: "Legs=walk, wings=fly, fins=swim, eyes=see, ears=hear, nose=smell, mouth=eat." },
        ],
        workedExample: {
          problem: "What body part does a fish use to move?",
          solution: "A fish uses **fins** to swim.",
        },
      },
      questions: [
        {
          id: "s1-u2-animal-bodies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do birds use to fly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fins"
                    },
                    {
                              "id": "b",
                              "text": "wings"
                    },
                    {
                              "id": "c",
                              "text": "legs"
                    },
                    {
                              "id": "d",
                              "text": "tails"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Birds use wings to fly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Birds use wings to fly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**wings**",
          "commonErrors": [
                    "Picks fins/legs."
          ]
},
        },
        {
          id: "s1-u2-animal-bodies-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do fish use to swim?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "wings"
                    },
                    {
                              "id": "b",
                              "text": "fins"
                    },
                    {
                              "id": "c",
                              "text": "legs"
                    },
                    {
                              "id": "d",
                              "text": "arms"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fish use fins to swim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fish use fins to swim.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**fins**",
          "commonErrors": [
                    "Picks wings."
          ]
},
        },
        {
          id: "s1-u2-animal-bodies-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose an animal. Name three body parts and what each does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Body parts",
                              "statement": "3 parts + jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 parts + jobs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog: legs run, nose smells, mouth eats.'**",
          "commonErrors": [
                    "Fewer than 3 parts.",
                    "No jobs."
          ]
},
        },
        {
          id: "s1-u2-animal-bodies-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an eye do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hear"
                    },
                    {
                              "id": "b",
                              "text": "see"
                    },
                    {
                              "id": "c",
                              "text": "smell"
                    },
                    {
                              "id": "d",
                              "text": "eat"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Eyes see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Eyes see.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**see**",
          "commonErrors": [
                    "Picks sense organ wrong."
          ]
},
        },
        {
          id: "s1-u2-animal-bodies-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare how a bird moves vs how a fish moves. What body parts are different and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Body parts",
                              "statement": "Compare bird/fish movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names bird uses wings.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names fish uses fins.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Bird flies with wings; fish swims with fins — different environments.'**",
          "commonErrors": [
                    "Same answer for both.",
                    "No body parts."
          ]
},
        },
        {
          id: "s1-u2-animal-bodies-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Body part\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Used for walking/running."
                    },
                    {
                              "id": "b",
                              "text": "Piece of animal body."
                    },
                    {
                              "id": "c",
                              "text": "Used for flying."
                    },
                    {
                              "id": "d",
                              "text": "Used for swimming."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Body part\" means Piece of animal body."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Body part\" means Piece of animal body.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Body part** = Piece of animal body.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u2-animal-bodies-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Leg\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Used for flying."
                    },
                    {
                              "id": "b",
                              "text": "Used for swimming."
                    },
                    {
                              "id": "c",
                              "text": "Used for seeing."
                    },
                    {
                              "id": "d",
                              "text": "Used for walking/running."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Leg\" means Used for walking/running."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Leg\" means Used for walking/running.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Leg** = Used for walking/running.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u2-animal-bodies-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wing\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Used for swimming."
                    },
                    {
                              "id": "b",
                              "text": "Used for flying."
                    },
                    {
                              "id": "c",
                              "text": "Used for seeing."
                    },
                    {
                              "id": "d",
                              "text": "Used for hearing."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Wing\" means Used for flying."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Wing\" means Used for flying.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Wing** = Used for flying.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
