import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "sci4-u1-lesson-1-1",
  code: "1-1",
  title: "What is Heat?",
  goal: "I CAN explain what heat is and how it moves.",
  standards: ["PS3.A"],
  vocabulary: [
    { term: "Heat", definition: "Energy that moves." },
    { term: "Temperature", definition: "How hot or cold." },
    { term: "Energy", definition: "Ability to do work." },
    { term: "Transfer", definition: "Move from one place to another." },
    { term: "Hot", definition: "High temperature." },
    { term: "Cold", definition: "Low temperature." },
    { term: "Flow", definition: "Move naturally." },
    { term: "Matter", definition: "Stuff that takes up space." },
  ],
  concepts: [
    {
      id: "sci4-u1-heat-basics",
      title: "What is heat?",
      skill: "Explain that heat is energy that transfers from hotter to colder objects.",
      lesson: {
        sections: [
          {
            heading: "Heat is energy",
            body: "**Heat** is a form of **energy** that **transfers** from hotter objects to colder ones. The hotter something is, the more heat energy its particles have.",
          },
          {
            heading: "Temperature",
            body: "**Temperature** measures how hot or cold something is. Heat flows from **hot to cold** until temperatures equalize.",
          },
        ],
        keyFormulas: [
          { name: "Heat", statement: "Hot -> cold = heat transfer until equal temperature." },
        ],
        workedExample: {
          problem: "Ice cream melts on a warm day. What happened?",
          solution: "Heat from the air transferred to the ice cream, raising its temperature and melting it.",
        },
      },
      questions: [
        {
          id: "sci4-u1-heat-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Heat is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a substance"
                    },
                    {
                              "id": "b",
                              "text": "energy that transfers"
                    },
                    {
                              "id": "c",
                              "text": "a temperature"
                    },
                    {
                              "id": "d",
                              "text": "cold"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Heat = energy that transfers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heat = energy that transfers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "energy that transfers",
          "commonErrors": [
                    "Thinks heat is a substance."
          ]
},
        },
        {
          id: "sci4-u1-heat-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Heat flows from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cold to hot"
                    },
                    {
                              "id": "b",
                              "text": "hot to cold"
                    },
                    {
                              "id": "c",
                              "text": "nowhere"
                    },
                    {
                              "id": "d",
                              "text": "sideways only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Heat flows hot to cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heat flows hot to cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "hot to cold",
          "commonErrors": [
                    "Reverses the direction."
          ]
},
        },
        {
          id: "sci4-u1-heat-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain why a metal spoon gets hot in hot soup. Where does the heat come from?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Heat",
                              "statement": "Heat transfer explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains heat source + transfer.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Heat from soup transfers to spoon because metal conducts heat.'**",
          "commonErrors": [
                    "No explanation.",
                    "Wrong source."
          ]
},
        },
        {
          id: "sci4-u1-heat-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Temperature measures...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "heat"
                    },
                    {
                              "id": "b",
                              "text": "how hot or cold something is"
                    },
                    {
                              "id": "c",
                              "text": "mass"
                    },
                    {
                              "id": "d",
                              "text": "volume"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Temperature = hot/cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Temperature = hot/cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "how hot or cold something is",
          "commonErrors": [
                    "Confuses with heat."
          ]
},
        },
        {
          id: "sci4-u1-heat-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design an experiment to show that heat moves from hot to cold. What would you measure?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Heat",
                              "statement": "Experiment design."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs experiment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies measurement.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Put hot water and cold water together; measure temperature change over time.'**",
          "commonErrors": [
                    "Cannot design.",
                    "No measurement."
          ]
},
        },
        {
          id: "sci4-u1-heat-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How hot or cold."
                    },
                    {
                              "id": "b",
                              "text": "Energy that moves."
                    },
                    {
                              "id": "c",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "d",
                              "text": "Move from one place to another."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Heat\" means Energy that moves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Heat\" means Energy that moves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Heat** = Energy that moves.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u1-heat-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Temperature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "b",
                              "text": "Move from one place to another."
                    },
                    {
                              "id": "c",
                              "text": "High temperature."
                    },
                    {
                              "id": "d",
                              "text": "How hot or cold."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Temperature\" means How hot or cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Temperature\" means How hot or cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Temperature** = How hot or cold.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u1-heat-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move from one place to another."
                    },
                    {
                              "id": "b",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "c",
                              "text": "High temperature."
                    },
                    {
                              "id": "d",
                              "text": "Low temperature."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy\" means Ability to do work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy\" means Ability to do work.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy** = Ability to do work.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
