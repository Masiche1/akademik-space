import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "epk-u2-lesson-2-4",
  code: "2-4",
  title: "Beginning Sounds",
  goal: "I CAN hear the first sound in a word.",
  standards: ["ELOF-PK.LL.PHONO.4"],
  vocabulary: [
    { term: "Beginning sound", definition: "The first sound you hear in a word." },
    { term: "First sound", definition: "The sound at the start." },
    { term: "Initial", definition: "At the beginning." },
    { term: "Phoneme", definition: "A single sound in a word." },
    { term: "Sound out", definition: "Say the sounds in a word slowly." },
  ],
  concepts: [
    {
      id: "epk-u2-beginning-sounds",
      title: "Beginning sounds",
      skill: "Identify the first sound in a spoken word.",
      lesson: {
        sections: [
          {
            heading: "First sound",
            body: "Every word starts with a sound. 'Cat' starts with 'k', 'sun' starts with 's'. Say the word slowly and listen to the **first sound**.",
          },
          {
            heading: "Sound it out",
            body: "Say the word slowly: c-a-t. The first sound is 'k' (the letter c makes a k sound). Practice hearing just the beginning.",
          },
        ],
        keyFormulas: [
          { name: "Beginning sound", statement: "The first phoneme you hear when saying a word slowly." },
        ],
        workedExample: {
          problem: "What is the beginning sound of 'dog'?",
          solution: "Say it slowly: d-o-g. First sound is **'d'**.",
        },
      },
      questions: [
        {
          id: "epk-u2-beginning-sounds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the beginning sound of 'cat'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a"
                    },
                    {
                              "id": "b",
                              "text": "t"
                    },
                    {
                              "id": "c",
                              "text": "k"
                    },
                    {
                              "id": "d",
                              "text": "c"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'cat' starts with 'k' sound (letter c)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'cat' starts with 'k' sound (letter c).",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**k**",
          "commonErrors": [
                    "Picks the letter name not the sound."
          ]
},
        },
        {
          id: "epk-u2-beginning-sounds-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the beginning sound of 'sun'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "u"
                    },
                    {
                              "id": "b",
                              "text": "n"
                    },
                    {
                              "id": "c",
                              "text": "s"
                    },
                    {
                              "id": "d",
                              "text": "o"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'sun' starts with 's' sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'sun' starts with 's' sound.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**s**",
          "commonErrors": [
                    "Picks a middle sound."
          ]
},
        },
        {
          id: "epk-u2-beginning-sounds-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Say the word 'ball' slowly. What is the first sound you hear?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Beginning sound",
                              "statement": "First phoneme of 'ball'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says 'b'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**b**",
          "commonErrors": [
                    "Says a different sound.",
                    "Cannot isolate first sound."
          ]
},
        },
        {
          id: "epk-u2-beginning-sounds-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word starts with the 'm' sound?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cat"
                    },
                    {
                              "id": "b",
                              "text": "moon"
                    },
                    {
                              "id": "c",
                              "text": "sun"
                    },
                    {
                              "id": "d",
                              "text": "dog"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'moon' starts with 'm'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'moon' starts with 'm'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**moon**",
          "commonErrors": [
                    "Picks wrong beginning sound."
          ]
},
        },
        {
          id: "epk-u2-beginning-sounds-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pick three words. For each, say the word slowly and name the first sound.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Beginning sounds",
                              "statement": "Isolate first phoneme of each word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says 3 words slowly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names correct first sound for each.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'cat'->k, 'sun'->s, 'moon'->m**",
          "commonErrors": [
                    "Cannot isolate sounds.",
                    "Wrong sounds."
          ]
},
        },
        {
          id: "epk-u2-beginning-sounds-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Beginning sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The sound at the start."
                    },
                    {
                              "id": "b",
                              "text": "The first sound you hear in a word."
                    },
                    {
                              "id": "c",
                              "text": "At the beginning."
                    },
                    {
                              "id": "d",
                              "text": "A single sound in a word."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "epk-u2-beginning-sounds-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"First sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "At the beginning."
                    },
                    {
                              "id": "b",
                              "text": "A single sound in a word."
                    },
                    {
                              "id": "c",
                              "text": "Say the sounds in a word slowly."
                    },
                    {
                              "id": "d",
                              "text": "The sound at the start."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"First sound\" means The sound at the start."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"First sound\" means The sound at the start.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**First sound** = The sound at the start.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u2-beginning-sounds-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Initial\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A single sound in a word."
                    },
                    {
                              "id": "b",
                              "text": "At the beginning."
                    },
                    {
                              "id": "c",
                              "text": "Say the sounds in a word slowly."
                    },
                    {
                              "id": "d",
                              "text": "The first sound you hear in a word."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Initial\" means At the beginning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Initial\" means At the beginning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Initial** = At the beginning.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
