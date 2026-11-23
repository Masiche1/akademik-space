import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "s0-u6-lesson-6-2",
  code: "6-2",
  title: "Animal Body Parts",
  goal: "I CAN identify body parts and what they do.",
  standards: ["K-LS1-1"],
  vocabulary: [
    { term: "Body part", definition: "A part of an animal's body." },
    { term: "Leg", definition: "Used for walking/moving." },
    { term: "Wing", definition: "Used for flying." },
    { term: "Eye", definition: "Used for seeing." },
    { term: "Ear", definition: "Used for hearing." },
    { term: "Nose", definition: "Used for smelling/breathing." },
    { term: "Mouth", definition: "Used for eating." },
    { term: "Tail", definition: "Used for balance/movement." },
  ],
  concepts: [
    {
      id: "s0-u6-animal-body",
      title: "Animal body parts",
      skill: "Identify animal body parts and their functions.",
      lesson: {
        sections: [
          {
            heading: "Body parts have jobs",
            body: "Animals have **body parts** that do different **jobs**: **legs** for walking, **wings** for flying, **eyes** for seeing, **ears** for hearing, **nose** for smelling, **mouth** for eating.",
          },
          {
            heading: "Parts fit the animal",
            body: "Each animal's parts fit its life — birds have **wings** to fly, fish have **fins** to swim, snakes have no legs.",
          },
        ],
        keyFormulas: [
          { name: "Body parts", statement: "Legs (walk), Wings (fly), Eyes (see), Ears (hear), Nose (smell), Mouth (eat)." },
        ],
        workedExample: {
          problem: "What body part does a bird use to fly? What does a fish use to swim?",
          solution: "Bird uses **wings** to fly. Fish uses **fins** to swim.",
        },
      },
      questions: [
        {
          id: "s0-u6-animal-body-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bird uses its... to fly.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "legs"
                    },
                    {
                              "id": "b",
                              "text": "wings"
                    },
                    {
                              "id": "c",
                              "text": "tail only"
                    },
                    {
                              "id": "d",
                              "text": "ears"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Wings = fly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wings = fly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**wings**",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "s0-u6-animal-body-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "An animal's 'eyes' are used for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hearing"
                    },
                    {
                              "id": "b",
                              "text": "seeing"
                    },
                    {
                              "id": "c",
                              "text": "smelling"
                    },
                    {
                              "id": "d",
                              "text": "eating"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Eyes = seeing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Eyes = seeing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**seeing**",
          "commonErrors": [
                    "Confuses with ears."
          ]
},
        },
        {
          id: "s0-u6-animal-body-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose an animal. Name two body parts and describe what each does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Body parts",
                              "statement": "2 parts + functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 parts + functions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog: legs walk, tail wags.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No functions."
          ]
},
        },
        {
          id: "s0-u6-animal-body-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'wing' is used for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "walking"
                    },
                    {
                              "id": "b",
                              "text": "flying"
                    },
                    {
                              "id": "c",
                              "text": "smelling"
                    },
                    {
                              "id": "d",
                              "text": "hearing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Wings = fly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wings = fly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**flying**",
          "commonErrors": [
                    "Confuses with leg."
          ]
},
        },
        {
          id: "s0-u6-animal-body-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two animals (like a bird and a fish). How are their body parts different? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Body parts",
                              "statement": "Two animals + part differences + why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names part differences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains why (environment).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Bird has wings to fly; fish has fins to swim — different environments.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No reason."
          ]
},
        },
        {
          id: "s0-u6-animal-body-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Body part\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Used for walking/moving."
                    },
                    {
                              "id": "b",
                              "text": "A part of an animal's body."
                    },
                    {
                              "id": "c",
                              "text": "Used for flying."
                    },
                    {
                              "id": "d",
                              "text": "Used for seeing."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Body part\" means A part of an animal's body."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Body part\" means A part of an animal's body.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Body part** = A part of an animal's body.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u6-animal-body-q7",
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
                              "text": "Used for seeing."
                    },
                    {
                              "id": "c",
                              "text": "Used for hearing."
                    },
                    {
                              "id": "d",
                              "text": "Used for walking/moving."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Leg\" means Used for walking/moving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Leg\" means Used for walking/moving.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Leg** = Used for walking/moving.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u6-animal-body-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wing\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Used for seeing."
                    },
                    {
                              "id": "b",
                              "text": "Used for flying."
                    },
                    {
                              "id": "c",
                              "text": "Used for hearing."
                    },
                    {
                              "id": "d",
                              "text": "Used for smelling/breathing."
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
