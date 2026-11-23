import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "ela0-u5-lesson-5-4",
  code: "5-4",
  title: "Real and Imagined Narratives",
  goal: "I CAN write narratives about real events and imagined adventures.",
  standards: ["W.K.3"],
  vocabulary: [
    { term: "Real", definition: "Something that actually happened." },
    { term: "Imagined", definition: "Make-believe; not real." },
    { term: "Adventure", definition: "An exciting or unusual event." },
    { term: "Pretend", definition: "Make-believe play." },
    { term: "Experience", definition: "Something we lived through." },
    { term: "Make-believe", definition: "Imaginary." },
    { term: "True", definition: "Really happened." },
  ],
  concepts: [
    {
      id: "ela0-u5-narrative-real-imagined",
      title: "Real and imagined narratives",
      skill: "Write narratives about real experiences and imagined adventures.",
      lesson: {
        sections: [
          {
            heading: "Real or imagined?",
            body: "A narrative can be about something **real** (what you actually did) or **imagined** (make-believe). Both are valid stories.",
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
          solution: "It's **imagined** — make-believe, not something that really happened.",
        },
      },
      questions: [
        {
          id: "ela0-u5-narrative-real-imagined-q1",
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
                              "statement": "Flying to the moon is imagined/make-believe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flying to the moon is imagined/make-believe.",
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
          id: "ela0-u5-narrative-real-imagined-q2",
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
                              "statement": "Going to the park is real/experience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Going to the park is real/experience.",
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
          id: "ela0-u5-narrative-real-imagined-q3",
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
          id: "ela0-u5-narrative-real-imagined-q4",
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
          id: "ela0-u5-narrative-real-imagined-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a short narrative about an imagined adventure. Then tell how it is different from a real story.",
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
          "finalAnswer": "**e.g., 'I flew a rocket to Mars; it's imagined because rockets can't fly people to Mars.'**",
          "commonErrors": [
                    "Writes real story.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "ela0-u5-narrative-real-imagined-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Real\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make-believe; not real."
                    },
                    {
                              "id": "b",
                              "text": "Something that actually happened."
                    },
                    {
                              "id": "c",
                              "text": "An exciting or unusual event."
                    },
                    {
                              "id": "d",
                              "text": "Make-believe play."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Real\" means Something that actually happened."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Real\" means Something that actually happened.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Real** = Something that actually happened.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u5-narrative-real-imagined-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Imagined\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An exciting or unusual event."
                    },
                    {
                              "id": "b",
                              "text": "Make-believe play."
                    },
                    {
                              "id": "c",
                              "text": "Something we lived through."
                    },
                    {
                              "id": "d",
                              "text": "Make-believe; not real."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Imagined\" means Make-believe; not real."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Imagined\" means Make-believe; not real.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Imagined** = Make-believe; not real.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u5-narrative-real-imagined-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Adventure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make-believe play."
                    },
                    {
                              "id": "b",
                              "text": "An exciting or unusual event."
                    },
                    {
                              "id": "c",
                              "text": "Something we lived through."
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
                              "statement": "\"Adventure\" means An exciting or unusual event."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Adventure\" means An exciting or unusual event.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Adventure** = An exciting or unusual event.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
