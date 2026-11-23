import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ela0-u2-lesson-2-1",
  code: "2-1",
  title: "Compare Characters",
  goal: "I CAN compare and contrast characters in familiar stories.",
  standards: ["RL.K.9"],
  vocabulary: [
    { term: "Compare", definition: "Look at how two things are alike and different." },
    { term: "Contrast", definition: "Look at how two things are different." },
    { term: "Character", definition: "Person or animal in story." },
    { term: "Same", definition: "Alike in some way." },
    { term: "Different", definition: "Not alike." },
    { term: "Alike", definition: "Similar." },
    { term: "Trait", definition: "A quality of a character." },
  ],
  concepts: [
    {
      id: "ela0-u2-compare-characters",
      title: "Comparing characters",
      skill: "Compare and contrast characters in stories.",
      lesson: {
        sections: [
          {
            heading: "Same and different",
            body: "When you **compare** characters, you look at how they are **the same** and **different**. Two characters might both be animals (same) but one is big and one is small (different).",
          },
          {
            heading: "Traits",
            body: "A **trait** is a quality of a character — brave, kind, silly, fast. Comparing traits helps us understand characters better.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Find same and different between two characters." },
        ],
        workedExample: {
          problem: "Compare a big dog and a small cat in a story. How are they the same? Different?",
          solution: "Same: both animals/pets. Different: dog is big, cat is small; dog barks, cat meows.",
        },
      },
      questions: [
        {
          id: "ela0-u2-compare-characters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When you 'compare' two characters, you look for...",
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
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Compare = find same AND different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare = find same AND different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**same and different**",
          "commonErrors": [
                    "Thinks compare means only differences."
          ]
},
        },
        {
          id: "ela0-u2-compare-characters-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'trait' of a character is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "their name"
                    },
                    {
                              "id": "b",
                              "text": "a quality like brave or silly"
                    },
                    {
                              "id": "c",
                              "text": "their color"
                    },
                    {
                              "id": "d",
                              "text": "their size only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Trait = a quality of a character."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trait = a quality of a character.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a quality**",
          "commonErrors": [
                    "Confuses trait with name."
          ]
},
        },
        {
          id: "ela0-u2-compare-characters-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare two characters from stories you know. How are they the same? How are they different?",
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
          "finalAnswer": "**e.g., 'Both heroes; one is brave, one is silly.'**",
          "commonErrors": [
                    "Only says same.",
                    "Only says different."
          ]
},
        },
        {
          id: "ela0-u2-compare-characters-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two characters are 'alike' when they...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "are enemies"
                    },
                    {
                              "id": "b",
                              "text": "are similar in some way"
                    },
                    {
                              "id": "c",
                              "text": "never meet"
                    },
                    {
                              "id": "d",
                              "text": "are the same person"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Alike = similar in some way."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alike = similar in some way.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**similar**",
          "commonErrors": [
                    "Thinks alike means identical."
          ]
},
        },
        {
          id: "ela0-u2-compare-characters-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare a character from two different stories. What is the same? What is different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "Same + different across stories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds similarities.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Finds differences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Both kind; one helps animals, one helps people.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only one side."
          ]
},
        },
        {
          id: "ela0-u2-compare-characters-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Look at how two things are different."
                    },
                    {
                              "id": "b",
                              "text": "Look at how two things are alike and different."
                    },
                    {
                              "id": "c",
                              "text": "Person or animal in story."
                    },
                    {
                              "id": "d",
                              "text": "Alike in some way."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Compare\" means Look at how two things are alike and different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means Look at how two things are alike and different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Compare** = Look at how two things are alike and different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u2-compare-characters-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Contrast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person or animal in story."
                    },
                    {
                              "id": "b",
                              "text": "Alike in some way."
                    },
                    {
                              "id": "c",
                              "text": "Not alike."
                    },
                    {
                              "id": "d",
                              "text": "Look at how two things are different."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Contrast\" means Look at how two things are different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Contrast\" means Look at how two things are different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Contrast** = Look at how two things are different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u2-compare-characters-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Alike in some way."
                    },
                    {
                              "id": "b",
                              "text": "Person or animal in story."
                    },
                    {
                              "id": "c",
                              "text": "Not alike."
                    },
                    {
                              "id": "d",
                              "text": "Similar."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Person or animal in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person or animal in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person or animal in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
