import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "ela3-u5-lesson-5-4",
  code: "5-4",
  title: "Real and Imagined Narratives",
  goal: "I CAN write narratives about real events and imagined adventures.",
  standards: ["W.3.3"],
  vocabulary: [
    { term: "Real", definition: "Something that happened." },
    { term: "Imagined", definition: "Make-believe." },
    { term: "Adventure", definition: "Exciting event." },
    { term: "Pretend", definition: "Make-believe." },
    { term: "Experience", definition: "Something we lived." },
    { term: "Make-believe", definition: "Imaginary." },
    { term: "True", definition: "Really happened." },
    { term: "Story", definition: "A tale." },
  ],
  concepts: [
    {
      id: "ela3-u5-real-imagined",
      title: "Real and imagined narratives",
      skill: "Write narratives about real experiences and imagined adventures.",
      lesson: {
        sections: [
          {
            heading: "Real or imagined?",
            body: "A narrative can be about something **real** (what you did) or **imagined** (make-believe). Both are valid stories.",
          },
          {
            heading: "Both work",
            body: "Real narratives use details from **experience**; imagined ones use **pretend** and **make-believe**. 'I went to the zoo' is real; 'I flew to the moon' is imagined.",
          },
        ],
        keyFormulas: [
          { name: "Real vs imagined", statement: "Real=experience, Imagined=make-believe; both are narratives." },
        ],
        workedExample: {
          problem: "Is 'I rode a dragon to school' real or imagined?",
          solution: "It's **imagined** — make-believe.",
        },
      },
      questions: [
        {
          id: "ela3-u5-real-imagined-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A narrative about 'I flew to the moon' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "real"
                    },
                    {
                              "id": "b",
                              "text": "imagined"
                    },
                    {
                              "id": "c",
                              "text": "a fact"
                    },
                    {
                              "id": "d",
                              "text": "a list"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Flying to moon is imagined."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flying to moon is imagined.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**imagined**",
          "commonErrors": [
                    "Thinks it's real."
          ]
},
        },
        {
          id: "ela3-u5-real-imagined-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A narrative about 'I went to the park yesterday' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "imagined"
                    },
                    {
                              "id": "b",
                              "text": "real"
                    },
                    {
                              "id": "c",
                              "text": "a lie"
                    },
                    {
                              "id": "d",
                              "text": "a fact only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Going to park is real."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Going to park is real.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**real**",
          "commonErrors": [
                    "Thinks it's imagined."
          ]
},
        },
        {
          id: "ela3-u5-real-imagined-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write one sentence about a real event and one about an imagined adventure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Real vs imagined",
                              "statement": "Real=experience, imagined=make-believe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes one real + one imagined.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Real: I ate breakfast. Imagined: I rode a unicorn.'**",
          "commonErrors": [
                    "Both same type.",
                    "Cannot distinguish."
          ]
},
        },
        {
          id: "ela3-u5-real-imagined-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Imagined' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "really happened"
                    },
                    {
                              "id": "b",
                              "text": "make-believe"
                    },
                    {
                              "id": "c",
                              "text": "a fact"
                    },
                    {
                              "id": "d",
                              "text": "a list"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Imagined = make-believe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Imagined = make-believe.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**make-believe**",
          "commonErrors": [
                    "Confuses with real."
          ]
},
        },
        {
          id: "ela3-u5-real-imagined-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a short narrative about an imagined adventure. Tell how it differs from a real story.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Imagined narrative",
                              "statement": "Make-believe story + difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes imagined narrative.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains it's make-believe.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I flew a rocket to Mars; imagined because rockets can't fly people.'**",
          "commonErrors": [
                    "Writes real story.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "ela3-u5-real-imagined-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Real\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make-believe."
                    },
                    {
                              "id": "b",
                              "text": "Something that happened."
                    },
                    {
                              "id": "c",
                              "text": "Exciting event."
                    },
                    {
                              "id": "d",
                              "text": "Something we lived."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Real\" means Something that happened."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Real\" means Something that happened.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Real** = Something that happened.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u5-real-imagined-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Imagined\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Exciting event."
                    },
                    {
                              "id": "b",
                              "text": "Something we lived."
                    },
                    {
                              "id": "c",
                              "text": "Imaginary."
                    },
                    {
                              "id": "d",
                              "text": "Make-believe."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Imagined\" means Make-believe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Imagined\" means Make-believe.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Imagined** = Make-believe.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u5-real-imagined-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Adventure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make-believe."
                    },
                    {
                              "id": "b",
                              "text": "Exciting event."
                    },
                    {
                              "id": "c",
                              "text": "Something we lived."
                    },
                    {
                              "id": "d",
                              "text": "Imaginary."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Adventure\" means Exciting event."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Adventure\" means Exciting event.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Adventure** = Exciting event.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
