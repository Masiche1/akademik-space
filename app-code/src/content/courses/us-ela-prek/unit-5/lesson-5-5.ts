import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "epk-u5-lesson-5-5",
  code: "5-5",
  title: "Reread Favorite Books",
  goal: "I CAN choose and reread books I enjoy.",
  standards: ["ELOF-PK.LL.READ.5"],
  vocabulary: [
    { term: "Reread", definition: "Read a book again." },
    { term: "Favorite", definition: "Something you like the most." },
    { term: "Choose", definition: "Pick the one you want." },
    { term: "Enjoy", definition: "Have fun with." },
    { term: "Repeat", definition: "Do again." },
  ],
  concepts: [
    {
      id: "epk-u5-reread-favorites",
      title: "Rereading favorites",
      skill: "Choose favorite books and reread them for enjoyment and learning.",
      lesson: {
        sections: [
          {
            heading: "Read it again",
            body: "You can **reread** a book you liked. The second time, you understand more because you already know the story.",
          },
          {
            heading: "Choose what you like",
            body: "**Choose** books that interest you — animals, trucks, princesses, dinosaurs. Reading what you **enjoy** makes you want to read more.",
          },
        ],
        keyFormulas: [
          { name: "Rereading", statement: "Read favorites again to build fluency and understanding." },
        ],
        workedExample: {
          problem: "Why is rereading a favorite book good?",
          solution: "You understand it **better** the second time and it is **fun** to read again.",
        },
      },
      questions: [
        {
          id: "epk-u5-reread-favorites-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Reread' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read once"
                    },
                    {
                              "id": "b",
                              "text": "read a book again"
                    },
                    {
                              "id": "c",
                              "text": "never read"
                    },
                    {
                              "id": "d",
                              "text": "read backwards"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Reread = read again."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reread = read again.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Read again**",
          "commonErrors": [
                    "Thinks reread means read once."
          ]
},
        },
        {
          id: "epk-u5-reread-favorites-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is rereading a favorite book good?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It is boring"
                    },
                    {
                              "id": "b",
                              "text": "You understand it better and it is fun"
                    },
                    {
                              "id": "c",
                              "text": "It wastes time"
                    },
                    {
                              "id": "d",
                              "text": "Books get old"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Rereading builds understanding and enjoyment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rereading builds understanding and enjoyment.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Understand better + fun**",
          "commonErrors": [
                    "Thinks rereading is pointless."
          ]
},
        },
        {
          id: "epk-u5-reread-favorites-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name a favorite book or story. Why do you like it? Would you reread it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Choose favorites",
                              "statement": "Name favorite + reason + reread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names favorite and gives reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I like 'The Very Hungry Caterpillar' because of the pictures; yes I would reread it.'**",
          "commonErrors": [
                    "Cannot name favorite.",
                    "No reason."
          ]
},
        },
        {
          id: "epk-u5-reread-favorites-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Choose' a book means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "take any book"
                    },
                    {
                              "id": "b",
                              "text": "pick the one you want"
                    },
                    {
                              "id": "c",
                              "text": "never pick"
                    },
                    {
                              "id": "d",
                              "text": "read all at once"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Choose = pick what you want."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Choose = pick what you want.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Pick what you want**",
          "commonErrors": [
                    "Thinks choose means random."
          ]
},
        },
        {
          id: "epk-u5-reread-favorites-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pick a book you enjoy. Read it once, then reread it. What did you notice the second time?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rereading",
                              "statement": "Read twice, notice difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reads the book twice.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says what they noticed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Second time I knew what would happen and enjoyed it more.'**",
          "commonErrors": [
                    "Reads only once.",
                    "Cannot say difference."
          ]
},
        },
        {
          id: "epk-u5-reread-favorites-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reread\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something you like the most."
                    },
                    {
                              "id": "b",
                              "text": "Read a book again."
                    },
                    {
                              "id": "c",
                              "text": "Pick the one you want."
                    },
                    {
                              "id": "d",
                              "text": "Have fun with."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reread\" means Read a book again."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reread\" means Read a book again.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reread** = Read a book again.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u5-reread-favorites-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Favorite\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pick the one you want."
                    },
                    {
                              "id": "b",
                              "text": "Have fun with."
                    },
                    {
                              "id": "c",
                              "text": "Do again."
                    },
                    {
                              "id": "d",
                              "text": "Something you like the most."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Favorite\" means Something you like the most."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Favorite\" means Something you like the most.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Favorite** = Something you like the most.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u5-reread-favorites-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Choose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Have fun with."
                    },
                    {
                              "id": "b",
                              "text": "Pick the one you want."
                    },
                    {
                              "id": "c",
                              "text": "Do again."
                    },
                    {
                              "id": "d",
                              "text": "Read a book again."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Choose\" means Pick the one you want."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Choose\" means Pick the one you want.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Choose** = Pick the one you want.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
