import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "epk-u5-lesson-5-4",
  code: "5-4",
  title: "Emergent Reading Review",
  goal: "I CAN use sight words, picture clues and story meaning together.",
  standards: ["ELOF-PK.LL.READ.4"],
  vocabulary: [
    { term: "Emergent reader", definition: "A child just beginning to read." },
    { term: "Sight word", definition: "Word recognized instantly." },
    { term: "Picture clue", definition: "Picture that helps reading." },
    { term: "Main idea", definition: "What the story is about." },
    { term: "Strategy", definition: "A way to figure out words." },
  ],
  concepts: [
    {
      id: "epk-u5-emergent-reading",
      title: "Emergent reading",
      skill: "Combine sight words, picture clues and comprehension.",
      lesson: {
        sections: [
          {
            heading: "Use all your tools",
            body: "When you read, use **sight words** (words you know), **picture clues** (pictures that help), and think about the **main idea** (what it's about). Together these make you a strong reader.",
          },
          {
            heading: "Read and understand",
            body: "Reading is not just saying words — it's **understanding** them. Ask yourself: what is this story about? What happened?",
          },
        ],
        keyFormulas: [
          { name: "Emergent reading", statement: "Sight words + picture clues + main idea = understanding." },
        ],
        workedExample: {
          problem: "You see 'The ___ runs.' with a picture of a dog. What word fits?",
          solution: "The picture of a dog is a clue — **'dog'** fits: 'The dog runs.'",
        },
      },
      questions: [
        {
          id: "epk-u5-emergent-reading-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "When reading, which helps you most?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only guessing"
                    },
                    {
                              "id": "b",
                              "text": "Sight words + picture clues + meaning"
                    },
                    {
                              "id": "c",
                              "text": "Skipping all words"
                    },
                    {
                              "id": "d",
                              "text": "Only pictures"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Combine sight words, picture clues and meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combine sight words, picture clues and meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**All three together**",
          "commonErrors": [
                    "Uses only one strategy."
          ]
},
        },
        {
          id: "epk-u5-emergent-reading-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'emergent reader' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "an expert reader"
                    },
                    {
                              "id": "b",
                              "text": "a child just beginning to read"
                    },
                    {
                              "id": "c",
                              "text": "a teacher"
                    },
                    {
                              "id": "d",
                              "text": "a book"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Emergent reader = beginner reader."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Emergent reader = beginner reader.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Beginner reader**",
          "commonErrors": [
                    "Thinks it means expert."
          ]
},
        },
        {
          id: "epk-u5-emergent-reading-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read a simple sentence with a picture. What sight words did you use? What did the picture tell you?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Emergent reading",
                              "statement": "Use sight words + picture clues."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies sight words used.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains picture clue.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Used 'the' and 'is'; picture showed a cat.'**",
          "commonErrors": [
                    "Cannot identify strategies.",
                    "Ignores picture."
          ]
},
        },
        {
          id: "epk-u5-emergent-reading-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reading is about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "saying words fast"
                    },
                    {
                              "id": "b",
                              "text": "understanding what words mean"
                    },
                    {
                              "id": "c",
                              "text": "turning pages"
                    },
                    {
                              "id": "d",
                              "text": "looking at pictures only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Reading = decoding words AND understanding meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reading = decoding words AND understanding meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Understanding meaning**",
          "commonErrors": [
                    "Thinks reading is just saying words."
          ]
},
        },
        {
          id: "epk-u5-emergent-reading-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read a short storybook page. Name one sight word you recognized, one picture clue you used, and what the story was about.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Emergent reading",
                              "statement": "Use sight words, picture clues, find main idea."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names a sight word.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names a picture clue and the main idea.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sight word: the; picture: dog; about: dog playing.'**",
          "commonErrors": [
                    "Cannot identify strategies.",
                    "Wrong main idea."
          ]
},
        },
        {
          id: "epk-u5-emergent-reading-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Emergent reader\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Word recognized instantly."
                    },
                    {
                              "id": "b",
                              "text": "A child just beginning to read."
                    },
                    {
                              "id": "c",
                              "text": "Picture that helps reading."
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
                              "statement": "\"Emergent reader\" means A child just beginning to read."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Emergent reader\" means A child just beginning to read.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Emergent reader** = A child just beginning to read.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u5-emergent-reading-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sight word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Picture that helps reading."
                    },
                    {
                              "id": "b",
                              "text": "What the story is about."
                    },
                    {
                              "id": "c",
                              "text": "A way to figure out words."
                    },
                    {
                              "id": "d",
                              "text": "Word recognized instantly."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sight word\" means Word recognized instantly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sight word\" means Word recognized instantly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sight word** = Word recognized instantly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u5-emergent-reading-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Picture clue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What the story is about."
                    },
                    {
                              "id": "b",
                              "text": "Picture that helps reading."
                    },
                    {
                              "id": "c",
                              "text": "A way to figure out words."
                    },
                    {
                              "id": "d",
                              "text": "A child just beginning to read."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Picture clue\" means Picture that helps reading."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Picture clue\" means Picture that helps reading.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Picture clue** = Picture that helps reading.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
