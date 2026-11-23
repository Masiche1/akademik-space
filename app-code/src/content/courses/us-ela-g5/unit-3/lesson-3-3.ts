import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ela5-u3-lesson-3-3",
  code: "3-3",
  title: "Themes Across Genres",
  goal: "I CAN compare themes across different genres (fiction, poetry, drama).",
  standards: ["RL.5.9"],
  vocabulary: [
    { term: "Theme", definition: "Main message." },
    { term: "Genre", definition: "Category of text." },
    { term: "Fiction", definition: "Made-up story." },
    { term: "Poetry", definition: "Verse form." },
    { term: "Drama", definition: "Play." },
    { term: "Compare", definition: "Find similarities." },
    { term: "Contrast", definition: "Find differences." },
    { term: "Across", definition: "In different." },
  ],
  concepts: [
    {
      id: "ela5-u3-themes-across-genres",
      title: "Themes across genres",
      skill: "Compare how themes appear across fiction, poetry and drama.",
      lesson: {
        sections: [
          {
            heading: "Same theme, different form",
            body: "A **theme** like 'friendship matters' can appear in a **story**, a **poem**, or a **play** — but the **genre** changes how it's expressed.",
          },
          {
            heading: "Comparing genres",
            body: "Look at how each genre uses **different techniques**: stories use plot; poems use imagery; plays use dialogue.",
          },
        ],
        keyFormulas: [
          { name: "Themes across genres", statement: "Same theme + different techniques = comparison." },
        ],
        workedExample: {
          problem: "Compare the theme of courage in a novel vs a poem about courage.",
          solution: "Novel shows courage through actions/events; poem shows it through powerful images and rhythm.",
        },
      },
      questions: [
        {
          id: "ela5-u3-themes-across-genres-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Comparing themes across genres means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only comparing plots"
                    },
                    {
                              "id": "b",
                              "text": "how the same theme appears in different text types"
                    },
                    {
                              "id": "c",
                              "text": "only comparing authors"
                    },
                    {
                              "id": "d",
                              "text": "only comparing lengths"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Same theme in different types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same theme in different types.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "how the same theme appears in different text types",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela5-u3-themes-across-genres-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Different genres express themes through...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the same techniques"
                    },
                    {
                              "id": "b",
                              "text": "different techniques (plot vs imagery vs dialogue)"
                    },
                    {
                              "id": "c",
                              "text": "no techniques"
                    },
                    {
                              "id": "d",
                              "text": "only words"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Different techniques."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different techniques.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "different techniques (plot vs imagery vs dialogue)",
          "commonErrors": [
                    "Thinks they're the same."
          ]
},
        },
        {
          id: "ela5-u3-themes-across-genres-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare the theme of 'perseverance' in a story and a poem. How does each genre express it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Themes across genres",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains genre differences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Story: through character's actions; Poem: through imagery and rhythm.**",
          "commonErrors": [
                    "Cannot compare.",
                    "No genre differences."
          ]
},
        },
        {
          id: "ela5-u3-themes-across-genres-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'genre' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a theme"
                    },
                    {
                              "id": "b",
                              "text": "a category of text"
                    },
                    {
                              "id": "c",
                              "text": "an author"
                    },
                    {
                              "id": "d",
                              "text": "a plot"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Category of text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Category of text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a category of text",
          "commonErrors": [
                    "Confuses with theme."
          ]
},
        },
        {
          id: "ela5-u3-themes-across-genres-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does the genre affect how a theme is expressed? Give examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Themes across genres",
                              "statement": "Effect of genre."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains effect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Fiction: plot and character; Poetry: imagery and sound; Drama: dialogue and action.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No examples."
          ]
},
        },
        {
          id: "ela5-u3-themes-across-genres-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Category of text."
                    },
                    {
                              "id": "b",
                              "text": "Main message."
                    },
                    {
                              "id": "c",
                              "text": "Made-up story."
                    },
                    {
                              "id": "d",
                              "text": "Verse form."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Theme\" means Main message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Theme\" means Main message.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Theme** = Main message.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-themes-across-genres-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Genre\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Made-up story."
                    },
                    {
                              "id": "b",
                              "text": "Verse form."
                    },
                    {
                              "id": "c",
                              "text": "Play."
                    },
                    {
                              "id": "d",
                              "text": "Category of text."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Genre\" means Category of text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Genre\" means Category of text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Genre** = Category of text.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-themes-across-genres-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fiction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Verse form."
                    },
                    {
                              "id": "b",
                              "text": "Made-up story."
                    },
                    {
                              "id": "c",
                              "text": "Play."
                    },
                    {
                              "id": "d",
                              "text": "Find similarities."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fiction\" means Made-up story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fiction\" means Made-up story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fiction** = Made-up story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
