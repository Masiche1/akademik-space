import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "s1-u3-lesson-3-4",
  code: "3-4",
  title: "Friction and Surfaces",
  goal: "I CAN describe how surfaces affect motion through friction.",
  standards: ["1-PS1-2"],
  vocabulary: [
    { term: "Friction", definition: "Force that slows motion." },
    { term: "Surface", definition: "What object moves on." },
    { term: "Rough", definition: "Not smooth — more friction." },
    { term: "Smooth", definition: "Not rough — less friction." },
    { term: "Slow", definition: "Move less fast." },
    { term: "Fast", definition: "Move quickly." },
    { term: "Slide", definition: "Move smoothly." },
    { term: "Grip", definition: "Hold firmly." },
  ],
  concepts: [
    {
      id: "s1-u3-friction-surfaces",
      title: "Friction and surfaces",
      skill: "Friction slows moving objects; rough surfaces have more friction than smooth ones.",
      lesson: {
        sections: [
          {
            heading: "Friction slows things",
            body: "**Friction** is a force that **slows** moving objects. The **surface** matters: **rough** surfaces (carpet, sandpaper) have **more friction**; **smooth** surfaces (ice, glass) have **less**.",
          },
          {
            heading: "Test it",
            body: "Push a toy car on carpet vs tile. It goes **farther** on smooth tile because there's **less friction** to slow it.",
          },
        ],
        keyFormulas: [
          { name: "Friction", statement: "Rough=more friction=slower; Smooth=less friction=faster." },
        ],
        workedExample: {
          problem: "Why does a toy car roll farther on tile than carpet?",
          solution: "Tile is **smooth** — **less friction** lets it roll farther.",
        },
      },
      questions: [
        {
          id: "s1-u3-friction-surfaces-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Friction' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a push"
                    },
                    {
                              "id": "b",
                              "text": "a force that slows moving things"
                    },
                    {
                              "id": "c",
                              "text": "a pull"
                    },
                    {
                              "id": "d",
                              "text": "a color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Friction slows motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Friction slows motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**slows motion**",
          "commonErrors": [
                    "Confuses with push."
          ]
},
        },
        {
          id: "s1-u3-friction-surfaces-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which surface has MORE friction?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ice"
                    },
                    {
                              "id": "b",
                              "text": "carpet"
                    },
                    {
                              "id": "c",
                              "text": "glass"
                    },
                    {
                              "id": "d",
                              "text": "plastic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Carpet is rough = more friction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carpet is rough = more friction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**carpet**",
          "commonErrors": [
                    "Picks smooth surface."
          ]
},
        },
        {
          id: "s1-u3-friction-surfaces-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Push a toy car on two different surfaces. Which goes farther? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Friction",
                              "statement": "Compare surfaces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares distances.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains friction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Goes farther on smooth floor — less friction.'**",
          "commonErrors": [
                    "No comparison.",
                    "No explanation."
          ]
},
        },
        {
          id: "s1-u3-friction-surfaces-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rough surface causes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "less friction"
                    },
                    {
                              "id": "b",
                              "text": "more friction"
                    },
                    {
                              "id": "c",
                              "text": "no friction"
                    },
                    {
                              "id": "d",
                              "text": "faster motion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rough = more friction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rough = more friction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**more friction**",
          "commonErrors": [
                    "Picks less friction."
          ]
},
        },
        {
          id: "s1-u3-friction-surfaces-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Test how surface affects motion. Push same object on rough vs smooth. Record distances and explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Friction",
                              "statement": "Test + record + explain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tests both surfaces.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Records + explains friction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Carpet: 30cm; tile: 80cm — less friction on tile.'**",
          "commonErrors": [
                    "Only one surface.",
                    "No explanation."
          ]
},
        },
        {
          id: "s1-u3-friction-surfaces-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Friction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What object moves on."
                    },
                    {
                              "id": "b",
                              "text": "Force that slows motion."
                    },
                    {
                              "id": "c",
                              "text": "Not smooth — more friction."
                    },
                    {
                              "id": "d",
                              "text": "Not rough — less friction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Friction\" means Force that slows motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Friction\" means Force that slows motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Friction** = Force that slows motion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u3-friction-surfaces-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Surface\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Not smooth — more friction."
                    },
                    {
                              "id": "b",
                              "text": "Not rough — less friction."
                    },
                    {
                              "id": "c",
                              "text": "Move less fast."
                    },
                    {
                              "id": "d",
                              "text": "What object moves on."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Surface\" means What object moves on."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Surface\" means What object moves on.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Surface** = What object moves on.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u3-friction-surfaces-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rough\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Not rough — less friction."
                    },
                    {
                              "id": "b",
                              "text": "Not smooth — more friction."
                    },
                    {
                              "id": "c",
                              "text": "Move less fast."
                    },
                    {
                              "id": "d",
                              "text": "Move quickly."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rough\" means Not smooth — more friction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rough\" means Not smooth — more friction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rough** = Not smooth — more friction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
