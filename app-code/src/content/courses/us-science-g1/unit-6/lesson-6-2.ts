import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "s1-u6-lesson-6-2",
  code: "6-2",
  title: "Observing the Moon",
  goal: "I CAN describe the moon's phases and patterns.",
  standards: ["1-ESS1-1"],
  vocabulary: [
    { term: "Moon", definition: "Earth's natural satellite." },
    { term: "Phase", definition: "Shape of moon we see." },
    { term: "New moon", definition: "Moon not visible." },
    { term: "Full moon", definition: "Whole moon visible." },
    { term: "Crescent", definition: "Thin curved moon." },
    { term: "Cycle", definition: "Phases repeat ~monthly." },
    { term: "Night", definition: "When moon visible." },
    { term: "Orbit", definition: "Path around Earth." },
  ],
  concepts: [
    {
      id: "s1-u6-moon-observe",
      title: "Observing the moon",
      skill: "The moon goes through phases (new, crescent, half, full) in a repeating cycle.",
      lesson: {
        sections: [
          {
            heading: "Moon phases",
            body: "The **moon** orbits Earth and goes through **phases**: **new moon** (not visible), **crescent** (thin curve), **half**, **full** (whole moon visible). The cycle repeats about every month.",
          },
          {
            heading: "Track the phases",
            body: "We can observe the moon's **phase** each night and see the pattern. Phases happen because we see different amounts of the moon's sunlit side.",
          },
        ],
        keyFormulas: [
          { name: "Moon phases", statement: "New -> crescent -> half -> full, repeating monthly." },
        ],
        workedExample: {
          problem: "What is a 'full moon'?",
          solution: "A **full moon** is when we see the whole lit side of the moon.",
        },
      },
      questions: [
        {
          id: "s1-u6-moon-observe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'phase' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the moon's color"
                    },
                    {
                              "id": "b",
                              "text": "the shape of the moon we see"
                    },
                    {
                              "id": "c",
                              "text": "the moon's size"
                    },
                    {
                              "id": "d",
                              "text": "the moon's distance"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Phase = shape we see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phase = shape we see.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**shape we see**",
          "commonErrors": [
                    "Confuses with color/size."
          ]
},
        },
        {
          id: "s1-u6-moon-observe-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'full moon' is when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "moon is invisible"
                    },
                    {
                              "id": "b",
                              "text": "we see the whole lit side"
                    },
                    {
                              "id": "c",
                              "text": "moon is half lit"
                    },
                    {
                              "id": "d",
                              "text": "moon is a thin curve"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Full moon = whole lit side."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Full moon = whole lit side.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**whole lit side**",
          "commonErrors": [
                    "Picks new/crescent."
          ]
},
        },
        {
          id: "s1-u6-moon-observe-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Observe the moon tonight. What phase is it? How does it differ from last night?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Moon",
                              "statement": "Phase + change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names current phase.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes change from yesterday.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Tonight is half moon; yesterday was crescent — growing.'**",
          "commonErrors": [
                    "Cannot observe.",
                    "No change noted."
          ]
},
        },
        {
          id: "s1-u6-moon-observe-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Moon phases repeat about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "every day"
                    },
                    {
                              "id": "b",
                              "text": "every month"
                    },
                    {
                              "id": "c",
                              "text": "every year"
                    },
                    {
                              "id": "d",
                              "text": "never"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Phases repeat ~monthly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phases repeat ~monthly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**monthly**",
          "commonErrors": [
                    "Picks daily/yearly."
          ]
},
        },
        {
          id: "s1-u6-moon-observe-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Keep a moon phase chart for a month. Record each night's phase and describe the pattern.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Moon",
                              "statement": "Track phases + pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Records phases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes pattern.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'New -> crescent -> half -> full -> repeats — cycle pattern.'**",
          "commonErrors": [
                    "No records.",
                    "No pattern."
          ]
},
        },
        {
          id: "s1-u6-moon-observe-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shape of moon we see."
                    },
                    {
                              "id": "b",
                              "text": "Earth's natural satellite."
                    },
                    {
                              "id": "c",
                              "text": "Moon not visible."
                    },
                    {
                              "id": "d",
                              "text": "Whole moon visible."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Moon\" means Earth's natural satellite."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Moon\" means Earth's natural satellite.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Moon** = Earth's natural satellite.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-moon-observe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Phase\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moon not visible."
                    },
                    {
                              "id": "b",
                              "text": "Whole moon visible."
                    },
                    {
                              "id": "c",
                              "text": "Thin curved moon."
                    },
                    {
                              "id": "d",
                              "text": "Shape of moon we see."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Phase\" means Shape of moon we see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Phase\" means Shape of moon we see.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Phase** = Shape of moon we see.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-moon-observe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"New moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Whole moon visible."
                    },
                    {
                              "id": "b",
                              "text": "Moon not visible."
                    },
                    {
                              "id": "c",
                              "text": "Thin curved moon."
                    },
                    {
                              "id": "d",
                              "text": "Phases repeat ~monthly."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"New moon\" means Moon not visible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"New moon\" means Moon not visible.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**New moon** = Moon not visible.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
