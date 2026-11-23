import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "epk-u2-lesson-2-3",
  code: "2-3",
  title: "Syllables",
  goal: "I CAN clap and count the syllables in words.",
  standards: ["ELOF-PK.LL.PHONO.3"],
  vocabulary: [
    { term: "Syllable", definition: "A beat or chunk of sound in a word." },
    { term: "Clap", definition: "Hit your hands together to mark syllables." },
    { term: "One syllable", definition: "A word with one beat, like 'cat'." },
    { term: "Two syllables", definition: "A word with two beats, like 'wa-ter'." },
    { term: "Beat", definition: "The rhythm chunk in a word." },
  ],
  concepts: [
    {
      id: "epk-u2-syllables",
      title: "Syllables",
      skill: "Count syllables by clapping or tapping.",
      lesson: {
        sections: [
          {
            heading: "Clap the beats",
            body: "Say a word slowly and **clap once for each beat**: wa-ter = clap-clap (2 syllables). Cat = clap (1 syllable).",
          },
          {
            heading: "Short and long words",
            body: "Some words have 1 syllable (cat, dog), some have 2 (wa-ter, ba-by), some have 3 (el-e-phant). Clapping helps you hear the beats.",
          },
        ],
        keyFormulas: [
          { name: "Syllable", statement: "One beat in a word; clap to count them." },
        ],
        workedExample: {
          problem: "How many syllables in 'banana'?",
          solution: "Ba-na-na = **3 syllables** (clap clap clap).",
        },
      },
      questions: [
        {
          id: "epk-u2-syllables-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many syllables in 'cat'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "2"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "0"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'cat' is one beat = 1 syllable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'cat' is one beat = 1 syllable.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**1**",
          "commonErrors": [
                    "Over-counts the beats."
          ]
},
        },
        {
          id: "epk-u2-syllables-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many syllables in 'water'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "2"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Wa-ter = 2 beats = 2 syllables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wa-ter = 2 beats = 2 syllables.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**2**",
          "commonErrors": [
                    "Says 1 or 3."
          ]
},
        },
        {
          id: "epk-u2-syllables-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Clap out the syllables in 'elephant'. How many did you count?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Syllables",
                              "statement": "Clap once per beat: el-e-phant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Counts 3 syllables.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**3 syllables**",
          "commonErrors": [
                    "Counts wrong.",
                    "Cannot clap the beats."
          ]
},
        },
        {
          id: "epk-u2-syllables-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word has 2 syllables?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cat"
                    },
                    {
                              "id": "b",
                              "text": "water"
                    },
                    {
                              "id": "c",
                              "text": "dog"
                    },
                    {
                              "id": "d",
                              "text": "sun"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'water' = wa-ter = 2 syllables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'water' = wa-ter = 2 syllables.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**water**",
          "commonErrors": [
                    "Picks a 1-syllable word."
          ]
},
        },
        {
          id: "epk-u2-syllables-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pick a word with 3 syllables. Clap it out and say how many beats you heard.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Syllables",
                              "statement": "Clap once per beat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Picks a 3-syllable word.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Claps out 3 beats correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'banana' = 3 beats**",
          "commonErrors": [
                    "Picks 1-2 syllable word.",
                    "Wrong beat count."
          ]
},
        },
        {
          id: "epk-u2-syllables-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Syllable\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hit your hands together to mark syllables."
                    },
                    {
                              "id": "b",
                              "text": "A beat or chunk of sound in a word."
                    },
                    {
                              "id": "c",
                              "text": "A word with one beat, like 'cat'."
                    },
                    {
                              "id": "d",
                              "text": "A word with two beats, like 'wa-ter'."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Syllable\" means A beat or chunk of sound in a word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Syllable\" means A beat or chunk of sound in a word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Syllable** = A beat or chunk of sound in a word.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u2-syllables-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Clap\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A word with one beat, like 'cat'."
                    },
                    {
                              "id": "b",
                              "text": "A word with two beats, like 'wa-ter'."
                    },
                    {
                              "id": "c",
                              "text": "The rhythm chunk in a word."
                    },
                    {
                              "id": "d",
                              "text": "Hit your hands together to mark syllables."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Clap\" means Hit your hands together to mark syllables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Clap\" means Hit your hands together to mark syllables.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Clap** = Hit your hands together to mark syllables.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u2-syllables-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"One syllable\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A word with two beats, like 'wa-ter'."
                    },
                    {
                              "id": "b",
                              "text": "A word with one beat, like 'cat'."
                    },
                    {
                              "id": "c",
                              "text": "The rhythm chunk in a word."
                    },
                    {
                              "id": "d",
                              "text": "A beat or chunk of sound in a word."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"One syllable\" means A word with one beat, like 'cat'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"One syllable\" means A word with one beat, like 'cat'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**One syllable** = A word with one beat, like 'cat'.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
