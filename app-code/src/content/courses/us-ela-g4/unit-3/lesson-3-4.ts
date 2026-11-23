import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "ela4-u3-lesson-3-4",
  code: "3-4",
  title: "Comparing Genres",
  goal: "I CAN compare stories, poems and other literary genres.",
  standards: ["RL.4.9"],
  vocabulary: [
    { term: "Genre", definition: "Type of writing." },
    { term: "Story", definition: "Narrative." },
    { term: "Poem", definition: "Verse." },
    { term: "Drama", definition: "Play." },
    { term: "Compare", definition: "See how alike." },
    { term: "Contrast", definition: "See how differ." },
    { term: "Theme", definition: "Central message." },
    { term: "Structure", definition: "How organized." },
  ],
  concepts: [
    {
      id: "ela4-u3-comparing-genres",
      title: "Comparing genres",
      skill: "Compare and contrast different literary genres.",
      lesson: {
        sections: [
          {
            heading: "Different forms",
            body: "**Stories** tell events in prose; **poems** use verse and rhythm; **drama** is meant to be performed. Each **genre** has different **structure** and **purpose**.",
          },
          {
            heading: "Comparing",
            body: "Compare how the same **topic** is treated differently across genres — a poem about friendship may be more emotional, a story more detailed.",
          },
        ],
        keyFormulas: [
          { name: "Genres", statement: "Story + poem + drama = different ways to tell." },
          { name: "Compare", statement: "Alike + different = full comparison." },
        ],
        workedExample: {
          problem: "Compare a poem and a story about friendship.",
          solution: "Both about friendship (alike); poem uses rhythm and imagery, story uses plot and characters (different).",
        },
      },
      questions: [
        {
          id: "ela4-u3-comparing-genres-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'genre' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a character"
                    },
                    {
                              "id": "b",
                              "text": "a type of writing"
                    },
                    {
                              "id": "c",
                              "text": "a setting"
                    },
                    {
                              "id": "d",
                              "text": "a theme"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Genre = type of writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Genre = type of writing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a type of writing**",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela4-u3-comparing-genres-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Poems differ from stories because poems...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "are longer"
                    },
                    {
                              "id": "b",
                              "text": "use verse and rhythm"
                    },
                    {
                              "id": "c",
                              "text": "have more characters"
                    },
                    {
                              "id": "d",
                              "text": "are always sad"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Poems use verse/rhythm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poems use verse/rhythm.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**use verse and rhythm**",
          "commonErrors": [
                    "Thinks they're the same."
          ]
},
        },
        {
          id: "ela4-u3-comparing-genres-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare a poem and a story on the same topic. How does each genre treat the topic differently?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Genres",
                              "statement": "Comparison + genre differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares genres.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains differences.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Poem: brief, emotional; Story: detailed plot, character development.'**",
          "commonErrors": [
                    "Only one genre.",
                    "No comparison."
          ]
},
        },
        {
          id: "ela4-u3-comparing-genres-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Drama is different because it's...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read silently"
                    },
                    {
                              "id": "b",
                              "text": "meant to be performed"
                    },
                    {
                              "id": "c",
                              "text": "always a poem"
                    },
                    {
                              "id": "d",
                              "text": "always long"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Drama = performed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Drama = performed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**meant to be performed**",
          "commonErrors": [
                    "Thinks it's read only."
          ]
},
        },
        {
          id: "ela4-u3-comparing-genres-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Choose three genres (story, poem, drama). How does each deliver its message differently?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Genres",
                              "statement": "Three genres + delivery comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes three genres.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Compares delivery.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Story: plot+characters; Poem: rhythm+imagery; Drama: dialogue+performance.'**",
          "commonErrors": [
                    "Two genres only.",
                    "No comparison."
          ]
},
        },
        {
          id: "ela4-u3-comparing-genres-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Genre\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Narrative."
                    },
                    {
                              "id": "b",
                              "text": "Type of writing."
                    },
                    {
                              "id": "c",
                              "text": "Verse."
                    },
                    {
                              "id": "d",
                              "text": "Play."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Genre\" means Type of writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Genre\" means Type of writing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Genre** = Type of writing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-comparing-genres-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Story\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Verse."
                    },
                    {
                              "id": "b",
                              "text": "Play."
                    },
                    {
                              "id": "c",
                              "text": "See how alike."
                    },
                    {
                              "id": "d",
                              "text": "Narrative."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Story\" means Narrative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Story\" means Narrative.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Story** = Narrative.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-comparing-genres-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Poem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Play."
                    },
                    {
                              "id": "b",
                              "text": "Verse."
                    },
                    {
                              "id": "c",
                              "text": "See how alike."
                    },
                    {
                              "id": "d",
                              "text": "See how differ."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Poem\" means Verse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Poem\" means Verse.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Poem** = Verse.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
