import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "epk-u2-lesson-2-2",
  code: "2-2",
  title: "Alliteration and Beginning Sounds",
  goal: "I CAN hear words that start with the same sound.",
  standards: ["ELOF-PK.LL.PHONO.2"],
  vocabulary: [
    { term: "Alliteration", definition: "Words that start with the same sound." },
    { term: "Beginning sound", definition: "The first sound you hear in a word." },
    { term: "Same sound", definition: "Two words starting alike." },
    { term: "Initial sound", definition: "The sound at the start of a word." },
    { term: "Alliterative", definition: "Having the same beginning sound." },
  ],
  concepts: [
    {
      id: "epk-u2-alliteration",
      title: "Alliteration",
      skill: "Hear and produce words with the same beginning sound.",
      lesson: {
        sections: [
          {
            heading: "Same beginning sound",
            body: "**Alliteration** is when words start with the same sound: 'big brown bear', 'seven silly snakes'. The first sounds match.",
          },
          {
            heading: "Listen for it",
            body: "Say 'Peter Piper picked a peck of pickled peppers.' Every word starts with 'p'. Tongue twisters are alliteration!",
          },
        ],
        keyFormulas: [
          { name: "Alliteration", statement: "Words starting with the same sound: big brown bear." },
        ],
        workedExample: {
          problem: "Do 'cat' and 'cup' have the same beginning sound?",
          solution: "Yes — both start with 'k' sound. **Same beginning sound.**",
        },
      },
      questions: [
        {
          id: "epk-u2-alliteration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which words have the same beginning sound?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cat and dog"
                    },
                    {
                              "id": "b",
                              "text": "sun and sock"
                    },
                    {
                              "id": "c",
                              "text": "hat and cup"
                    },
                    {
                              "id": "d",
                              "text": "pig and cow"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'sun' and 'sock' both start with 's'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'sun' and 'sock' both start with 's'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**sun and sock**",
          "commonErrors": [
                    "Picks words with different starts."
          ]
},
        },
        {
          id: "epk-u2-alliteration-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Big brown bear' is an example of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rhyme"
                    },
                    {
                              "id": "b",
                              "text": "alliteration"
                    },
                    {
                              "id": "c",
                              "text": "a sentence"
                    },
                    {
                              "id": "d",
                              "text": "a picture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All words start with 'b' — alliteration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All words start with 'b' — alliteration.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Alliteration**",
          "commonErrors": [
                    "Confuses alliteration with rhyme."
          ]
},
        },
        {
          id: "epk-u2-alliteration-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Say two words that start with the same sound.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Alliteration",
                              "statement": "Two words with same beginning sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says two words with same start sound.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'moon' and 'mouse'**",
          "commonErrors": [
                    "Words start differently.",
                    "Cannot think of any."
          ]
},
        },
        {
          id: "epk-u2-alliteration-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The beginning sound of 'dog' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "o"
                    },
                    {
                              "id": "b",
                              "text": "d"
                    },
                    {
                              "id": "c",
                              "text": "g"
                    },
                    {
                              "id": "d",
                              "text": "do"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'dog' starts with the 'd' sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'dog' starts with the 'd' sound.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**d**",
          "commonErrors": [
                    "Picks a middle or end sound."
          ]
},
        },
        {
          id: "epk-u2-alliteration-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create an alliterative phrase with three words that start with the same sound.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Alliteration",
                              "statement": "Three words, same beginning sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates 3 words with same start.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "All start with same sound.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'three tiny turtles'**",
          "commonErrors": [
                    "Words start differently.",
                    "Only 2 words."
          ]
},
        },
        {
          id: "epk-u2-alliteration-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Alliteration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The first sound you hear in a word."
                    },
                    {
                              "id": "b",
                              "text": "Words that start with the same sound."
                    },
                    {
                              "id": "c",
                              "text": "Two words starting alike."
                    },
                    {
                              "id": "d",
                              "text": "The sound at the start of a word."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Alliteration\" means Words that start with the same sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Alliteration\" means Words that start with the same sound.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Alliteration** = Words that start with the same sound.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u2-alliteration-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Beginning sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two words starting alike."
                    },
                    {
                              "id": "b",
                              "text": "The sound at the start of a word."
                    },
                    {
                              "id": "c",
                              "text": "Having the same beginning sound."
                    },
                    {
                              "id": "d",
                              "text": "The first sound you hear in a word."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Beginning sound\" means The first sound you hear in a word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Beginning sound\" means The first sound you hear in a word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Beginning sound** = The first sound you hear in a word.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u2-alliteration-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Same sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The sound at the start of a word."
                    },
                    {
                              "id": "b",
                              "text": "Two words starting alike."
                    },
                    {
                              "id": "c",
                              "text": "Having the same beginning sound."
                    },
                    {
                              "id": "d",
                              "text": "Words that start with the same sound."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Same sound\" means Two words starting alike."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Same sound\" means Two words starting alike.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Same sound** = Two words starting alike.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
