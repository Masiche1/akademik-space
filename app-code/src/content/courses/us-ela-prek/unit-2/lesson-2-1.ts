import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "epk-u2-lesson-2-1",
  code: "2-1",
  title: "Rhyming Words",
  goal: "I CAN hear and say words that rhyme.",
  standards: ["ELOF-PK.LL.PHONO.1"],
  vocabulary: [
    { term: "Rhyme", definition: "Words that end with the same sound." },
    { term: "Rhyming word", definition: "A word that sounds like another at the end." },
    { term: "Cat", definition: "An animal that says 'meow'." },
    { term: "Hat", definition: "Something you wear on your head." },
    { term: "Bat", definition: "A flying animal that sleeps upside down." },
  ],
  concepts: [
    {
      id: "epk-u2-rhyming-words",
      title: "Rhyming words",
      skill: "Hear and produce rhyming words.",
      lesson: {
        sections: [
          {
            heading: "What is a rhyme?",
            body: "Words **rhyme** when they end with the same sound: cat-hat, dog-frog, sun-run. The ending sounds match even if the beginnings are different.",
          },
          {
            heading: "Play with rhymes",
            body: "Say two rhyming words and ask 'Do they rhyme?' Make up silly rhymes: 'The cat wore a hat!' Rhyming helps us hear sounds in words.",
          },
        ],
        keyFormulas: [
          { name: "Rhyme", statement: "Words ending with the same sound: cat-hat, dog-frog." },
        ],
        workedExample: {
          problem: "Do 'cat' and 'hat' rhyme?",
          solution: "Yes — both end with the 'at' sound. **They rhyme.**",
        },
      },
      questions: [
        {
          id: "epk-u2-rhyming-words-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word rhymes with 'cat'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dog"
                    },
                    {
                              "id": "b",
                              "text": "hat"
                    },
                    {
                              "id": "c",
                              "text": "sun"
                    },
                    {
                              "id": "d",
                              "text": "run"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'hat' ends with the same 'at' sound as 'cat'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'hat' ends with the same 'at' sound as 'cat'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**hat**",
          "commonErrors": [
                    "Picks a word with different ending sound."
          ]
},
        },
        {
          id: "epk-u2-rhyming-words-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Do 'dog' and 'frog' rhyme?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "No"
                    },
                    {
                              "id": "b",
                              "text": "Yes"
                    },
                    {
                              "id": "c",
                              "text": "Only sometimes"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Both end with 'og' sound — they rhyme."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both end with 'og' sound — they rhyme.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Yes**",
          "commonErrors": [
                    "Thinks rhyming needs same beginning."
          ]
},
        },
        {
          id: "epk-u2-rhyming-words-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Say a word that rhymes with 'sun'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rhyming",
                              "statement": "Word ending with same sound as 'sun'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says a rhyming word like 'run' or 'fun'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'run', 'fun', 'bun'**",
          "commonErrors": [
                    "Says a non-rhyming word.",
                    "Cannot think of one."
          ]
},
        },
        {
          id: "epk-u2-rhyming-words-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair rhymes?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cat and dog"
                    },
                    {
                              "id": "b",
                              "text": "sun and run"
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
                              "statement": "'sun' and 'run' both end with 'un'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'sun' and 'run' both end with 'un'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**sun and run**",
          "commonErrors": [
                    "Picks pair with different endings."
          ]
},
        },
        {
          id: "epk-u2-rhyming-words-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Think of two rhyming words and use them in a silly sentence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rhyming",
                              "statement": "Two words with same ending sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names two rhyming words.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Uses them in a sentence.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'The cat wore a hat to the party.'**",
          "commonErrors": [
                    "Words do not rhyme.",
                    "No sentence."
          ]
},
        },
        {
          id: "epk-u2-rhyming-words-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rhyme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A word that sounds like another at the end."
                    },
                    {
                              "id": "b",
                              "text": "Words that end with the same sound."
                    },
                    {
                              "id": "c",
                              "text": "An animal that says 'meow'."
                    },
                    {
                              "id": "d",
                              "text": "Something you wear on your head."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Rhyme\" means Words that end with the same sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rhyme\" means Words that end with the same sound.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Rhyme** = Words that end with the same sound.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u2-rhyming-words-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rhyming word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An animal that says 'meow'."
                    },
                    {
                              "id": "b",
                              "text": "Something you wear on your head."
                    },
                    {
                              "id": "c",
                              "text": "A flying animal that sleeps upside down."
                    },
                    {
                              "id": "d",
                              "text": "A word that sounds like another at the end."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Rhyming word\" means A word that sounds like another at the end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rhyming word\" means A word that sounds like another at the end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Rhyming word** = A word that sounds like another at the end.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u2-rhyming-words-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something you wear on your head."
                    },
                    {
                              "id": "b",
                              "text": "An animal that says 'meow'."
                    },
                    {
                              "id": "c",
                              "text": "A flying animal that sleeps upside down."
                    },
                    {
                              "id": "d",
                              "text": "Words that end with the same sound."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Cat\" means An animal that says 'meow'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cat\" means An animal that says 'meow'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Cat** = An animal that says 'meow'.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
