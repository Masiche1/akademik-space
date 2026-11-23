import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "epk-u1-lesson-1-4",
  code: "1-4",
  title: "Letters Are Not Pictures",
  goal: "I CAN tell the difference between letters, words and pictures.",
  standards: ["ELOF-PK.LL.PRINT.4"],
  vocabulary: [
    { term: "Letter", definition: "A single symbol like A, B, C." },
    { term: "Word", definition: "Letters grouped together." },
    { term: "Picture", definition: "An image, not meant to be read as words." },
    { term: "Alphabet", definition: "All the letters of a language." },
    { term: "Symbol", definition: "A mark that stands for something." },
  ],
  concepts: [
    {
      id: "epk-u1-letters-vs-pictures",
      title: "Letters, words and pictures",
      skill: "Distinguish letters, words and pictures on a page.",
      lesson: {
        sections: [
          {
            heading: "Letters make words",
            body: "A **letter** is one symbol (A, B, C). Put letters together and you get a **word** like 'cat'. Words are meant to be read; pictures are meant to be looked at.",
          },
          {
            heading: "Pictures vs print",
            body: "A picture of a cat is not the word 'cat'. Pictures show; words tell. Both can be on the same page but they work differently.",
          },
        ],
        keyFormulas: [
          { name: "Letter -> word", statement: "Letters combine to form words; pictures are images, not read as words." },
        ],
        workedExample: {
          problem: "On a page you see 'DOG' and a picture of a dog. Which is the word?",
          solution: "'DOG' is the word (letters); the picture is an image.",
        },
      },
      questions: [
        {
          id: "epk-u1-letters-vs-pictures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'letter'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A whole word"
                    },
                    {
                              "id": "b",
                              "text": "A single symbol like A or B"
                    },
                    {
                              "id": "c",
                              "text": "A picture"
                    },
                    {
                              "id": "d",
                              "text": "A sentence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "A letter is one symbol; letters combine into words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A letter is one symbol; letters combine into words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**A single symbol**",
          "commonErrors": [
                    "Confuses letter with word."
          ]
},
        },
        {
          id: "epk-u1-letters-vs-pictures-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a WORD (not a picture or single letter)?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A"
                    },
                    {
                              "id": "b",
                              "text": "cat"
                    },
                    {
                              "id": "c",
                              "text": "a drawing of a cat"
                    },
                    {
                              "id": "d",
                              "text": "123"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'cat' is a word made of letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'cat' is a word made of letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**cat**",
          "commonErrors": [
                    "Picks a letter or picture."
          ]
},
        },
        {
          id: "epk-u1-letters-vs-pictures-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point to a letter, a word and a picture in a book. Explain the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Letter/word/picture",
                              "statement": "Letter=1 symbol, word=letters, picture=image."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correctly identifies all three.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**letter=A, word=cat, picture=image**",
          "commonErrors": [
                    "Confuses the three.",
                    "Cannot find examples."
          ]
},
        },
        {
          id: "epk-u1-letters-vs-pictures-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'alphabet' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all the pictures in a book"
                    },
                    {
                              "id": "b",
                              "text": "all the letters of a language"
                    },
                    {
                              "id": "c",
                              "text": "a type of picture book"
                    },
                    {
                              "id": "d",
                              "text": "a number system"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "The alphabet is all the letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The alphabet is all the letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**All the letters**",
          "commonErrors": [
                    "Thinks alphabet is pictures."
          ]
},
        },
        {
          id: "epk-u1-letters-vs-pictures-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between a letter, a word and a picture. Give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Print concepts",
                              "statement": "Letter=1 symbol, word=letters, picture=image."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines letter correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Defines word and picture correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**Letter=A, word=cat, picture=image of cat**",
          "commonErrors": [
                    "Mixes up definitions.",
                    "No examples."
          ]
},
        },
        {
          id: "epk-u1-letters-vs-pictures-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Letter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Letters grouped together."
                    },
                    {
                              "id": "b",
                              "text": "A single symbol like A, B, C."
                    },
                    {
                              "id": "c",
                              "text": "An image, not meant to be read as words."
                    },
                    {
                              "id": "d",
                              "text": "All the letters of a language."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Letter\" means A single symbol like A, B, C."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Letter\" means A single symbol like A, B, C.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Letter** = A single symbol like A, B, C.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u1-letters-vs-pictures-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An image, not meant to be read as words."
                    },
                    {
                              "id": "b",
                              "text": "All the letters of a language."
                    },
                    {
                              "id": "c",
                              "text": "A mark that stands for something."
                    },
                    {
                              "id": "d",
                              "text": "Letters grouped together."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Word\" means Letters grouped together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word\" means Letters grouped together.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Word** = Letters grouped together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u1-letters-vs-pictures-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Picture\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "All the letters of a language."
                    },
                    {
                              "id": "b",
                              "text": "An image, not meant to be read as words."
                    },
                    {
                              "id": "c",
                              "text": "A mark that stands for something."
                    },
                    {
                              "id": "d",
                              "text": "A single symbol like A, B, C."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Picture\" means An image, not meant to be read as words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Picture\" means An image, not meant to be read as words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Picture** = An image, not meant to be read as words.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
