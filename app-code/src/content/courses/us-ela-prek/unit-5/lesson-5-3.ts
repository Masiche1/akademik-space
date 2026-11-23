import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "epk-u5-lesson-5-3",
  code: "5-3",
  title: "Story Meaning",
  goal: "I CAN say what a simple story is about.",
  standards: ["ELOF-PK.LL.READ.3"],
  vocabulary: [
    { term: "Meaning", definition: "What the story is about." },
    { term: "About", definition: "The main idea or topic." },
    { term: "Main idea", definition: "What the story is mostly about." },
    { term: "Topic", definition: "The subject of the story." },
    { term: "Summarize", definition: "Say the story in a few words." },
  ],
  concepts: [
    {
      id: "epk-u5-story-meaning",
      title: "Story meaning",
      skill: "Identify what a simple story is about.",
      lesson: {
        sections: [
          {
            heading: "What is it about?",
            body: "Every story has a **main idea** — what it is mostly about. 'The dog digs a hole' is about a dog digging. 'Two friends share a toy' is about sharing.",
          },
          {
            heading: "Summarize briefly",
            body: "You can **summarize** a story in a few words: 'It's about a cat who lost its hat.' Short and sweet.",
          },
        ],
        keyFormulas: [
          { name: "Main idea", statement: "What the story is mostly about; summarize in a few words." },
        ],
        workedExample: {
          problem: "Story: 'A girl plants a seed and it grows into a flower.' What is it about?",
          solution: "It's about a girl **planting a seed that grows** — about growth/nature.",
        },
      },
      questions: [
        {
          id: "epk-u5-story-meaning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a story 'about'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Its length"
                    },
                    {
                              "id": "b",
                              "text": "Its main idea or topic"
                    },
                    {
                              "id": "c",
                              "text": "Its pictures"
                    },
                    {
                              "id": "d",
                              "text": "Its author"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'About' = the main idea or topic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'About' = the main idea or topic.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main idea**",
          "commonErrors": [
                    "Thinks 'about' means length."
          ]
},
        },
        {
          id: "epk-u5-story-meaning-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Story: 'A boy rides his bike to school.' What is it about?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A school"
                    },
                    {
                              "id": "b",
                              "text": "A boy riding his bike"
                    },
                    {
                              "id": "c",
                              "text": "A car"
                    },
                    {
                              "id": "d",
                              "text": "Weather"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "It's about a boy riding his bike to school."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It's about a boy riding his bike to school.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Boy riding bike**",
          "commonErrors": [
                    "Picks a detail not main idea."
          ]
},
        },
        {
          id: "epk-u5-story-meaning-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Say what this story is about: 'Two cats share a bowl of milk.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Main idea",
                              "statement": "What the story is mostly about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says it's about cats sharing milk.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**About two cats sharing milk**",
          "commonErrors": [
                    "Cannot say topic.",
                    "Gives wrong idea."
          ]
},
        },
        {
          id: "epk-u5-story-meaning-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Summarize' a story means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read every word"
                    },
                    {
                              "id": "b",
                              "text": "say it in a few words"
                    },
                    {
                              "id": "c",
                              "text": "draw it"
                    },
                    {
                              "id": "d",
                              "text": "act it out"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Summarize = tell briefly in a few words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Summarize = tell briefly in a few words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Say it briefly**",
          "commonErrors": [
                    "Thinks summarize means retell everything."
          ]
},
        },
        {
          id: "epk-u5-story-meaning-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read or hear a short story. Tell what it is about in one sentence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Main idea",
                              "statement": "Identify the story's topic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies correct topic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says it in one clear sentence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'It's about a dog who finds a bone.'**",
          "commonErrors": [
                    "Wrong topic.",
                    "Too vague."
          ]
},
        },
        {
          id: "epk-u5-story-meaning-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Meaning\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The main idea or topic."
                    },
                    {
                              "id": "b",
                              "text": "What the story is about."
                    },
                    {
                              "id": "c",
                              "text": "What the story is mostly about."
                    },
                    {
                              "id": "d",
                              "text": "The subject of the story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Meaning\" means What the story is about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Meaning\" means What the story is about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Meaning** = What the story is about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u5-story-meaning-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"About\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What the story is mostly about."
                    },
                    {
                              "id": "b",
                              "text": "The subject of the story."
                    },
                    {
                              "id": "c",
                              "text": "Say the story in a few words."
                    },
                    {
                              "id": "d",
                              "text": "The main idea or topic."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"About\" means The main idea or topic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"About\" means The main idea or topic.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**About** = The main idea or topic.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u5-story-meaning-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Main idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The subject of the story."
                    },
                    {
                              "id": "b",
                              "text": "What the story is mostly about."
                    },
                    {
                              "id": "c",
                              "text": "Say the story in a few words."
                    },
                    {
                              "id": "d",
                              "text": "What the story is about."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Main idea\" means What the story is mostly about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Main idea\" means What the story is mostly about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main idea** = What the story is mostly about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
