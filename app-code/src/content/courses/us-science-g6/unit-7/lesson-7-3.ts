import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "sci6-u7-lesson-7-3",
  code: "7-3",
  title: "Moon Phases and Eclipses",
  goal: "I CAN explain moon phases and eclipses.",
  standards: ["ESS1.A"],
  vocabulary: [
    { term: "Moon", definition: "Earth's satellite." },
    { term: "Phase", definition: "How much lit." },
    { term: "New moon", definition: "Dark side facing us." },
    { term: "Full moon", definition: "Fully lit." },
    { term: "Waxing", definition: "Growing." },
    { term: "Waning", definition: "Shrinking." },
    { term: "Eclipse", definition: "Shadow blocking." },
    { term: "Lunar", definition: "Moon eclipse." },
    { term: "Solar", definition: "Sun eclipse." },
  ],
  concepts: [
    {
      id: "sci6-u7-moon-phases-eclipses",
      title: "Moon phases and eclipses",
      skill: "Explain moon phases and the difference between lunar and solar eclipses.",
      lesson: {
        sections: [
          {
            heading: "Phases",
            body: "Moon **phases** cycle every ~29 days as we see different amounts of lit side: new -> waxing -> full -> waning -> new.",
          },
          {
            heading: "Eclipses",
            body: "**Lunar eclipse**: Earth's shadow on Moon. **Solar eclipse**: Moon's shadow on Earth.",
          },
        ],
        keyFormulas: [
          { name: "Phases", statement: "New -> waxing -> full -> waning = 29-day cycle." },
          { name: "Eclipse", statement: "Lunar = Earth's shadow on Moon; Solar = Moon's shadow on Earth." },
        ],
        workedExample: {
          problem: "What's the difference between lunar and solar eclipse?",
          solution: "**Lunar: Earth blocks Sun's light to Moon (Earth's shadow); Solar: Moon blocks Sun's light to Earth (Moon's shadow).**",
        },
      },
      questions: [
        {
          id: "sci6-u7-moon-phases-eclipses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Full moon' occurs when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moon is between Earth and Sun"
                    },
                    {
                              "id": "b",
                              "text": "we see the fully lit side"
                    },
                    {
                              "id": "c",
                              "text": "Moon is dark"
                    },
                    {
                              "id": "d",
                              "text": "Earth blocks light"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fully lit side."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fully lit side.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "we see the fully lit side",
          "commonErrors": [
                    "Wrong phase."
          ]
},
        },
        {
          id: "sci6-u7-moon-phases-eclipses-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'lunar eclipse' happens when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moon blocks Sun"
                    },
                    {
                              "id": "b",
                              "text": "Earth's shadow falls on Moon"
                    },
                    {
                              "id": "c",
                              "text": "Sun blocks Moon"
                    },
                    {
                              "id": "d",
                              "text": "Moon is new"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Earth's shadow on Moon."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Earth's shadow on Moon.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Earth's shadow falls on Moon",
          "commonErrors": [
                    "Confuses with solar."
          ]
},
        },
        {
          id: "sci6-u7-moon-phases-eclipses-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the moon phase cycle and explain the difference between lunar and solar eclipses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Phases",
                              "statement": "Cycle + eclipse difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes phases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains eclipses.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Phases: new->waxing->full->waning (29 days); Lunar: Earth's shadow on Moon; Solar: Moon's shadow on Earth.**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong eclipses."
          ]
},
        },
        {
          id: "sci6-u7-moon-phases-eclipses-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Waxing' moon means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "shrinking"
                    },
                    {
                              "id": "b",
                              "text": "growing"
                    },
                    {
                              "id": "c",
                              "text": "full"
                    },
                    {
                              "id": "d",
                              "text": "new"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Growing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Growing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "growing",
          "commonErrors": [
                    "Confuses with waning."
          ]
},
        },
        {
          id: "sci6-u7-moon-phases-eclipses-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the moon phase cycle and describe what happens during a solar eclipse.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Phases",
                              "statement": "Cycle + eclipse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains phases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes eclipse.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Phases cycle every 29 days; Solar eclipse: Moon passes between Earth and Sun, blocking sunlight.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No eclipse described."
          ]
},
        },
        {
          id: "sci6-u7-moon-phases-eclipses-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How much lit."
                    },
                    {
                              "id": "b",
                              "text": "Earth's satellite."
                    },
                    {
                              "id": "c",
                              "text": "Dark side facing us."
                    },
                    {
                              "id": "d",
                              "text": "Fully lit."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Moon\" means Earth's satellite."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Moon\" means Earth's satellite.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Moon** = Earth's satellite.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-moon-phases-eclipses-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Phase\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dark side facing us."
                    },
                    {
                              "id": "b",
                              "text": "Fully lit."
                    },
                    {
                              "id": "c",
                              "text": "Growing."
                    },
                    {
                              "id": "d",
                              "text": "How much lit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Phase\" means How much lit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Phase\" means How much lit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Phase** = How much lit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-moon-phases-eclipses-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"New moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fully lit."
                    },
                    {
                              "id": "b",
                              "text": "Dark side facing us."
                    },
                    {
                              "id": "c",
                              "text": "Growing."
                    },
                    {
                              "id": "d",
                              "text": "Shrinking."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"New moon\" means Dark side facing us."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"New moon\" means Dark side facing us.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**New moon** = Dark side facing us.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
