import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ela4-u6-lesson-6-1",
  code: "6-1",
  title: "Orienting the Reader",
  goal: "I CAN orient readers by establishing time, place and characters.",
  standards: ["W.4.3a"],
  vocabulary: [
    { term: "Orient", definition: "Set up the scene." },
    { term: "Setting", definition: "Where/when." },
    { term: "Character", definition: "Who is in story." },
    { term: "Time", definition: "When it happens." },
    { term: "Place", definition: "Where it happens." },
    { term: "Introduce", definition: "Present first." },
    { term: "Establish", definition: "Set up." },
    { term: "Scene", definition: "Setting of story." },
  ],
  concepts: [
    {
      id: "ela4-u6-story-opening",
      title: "Orienting the reader",
      skill: "Orient readers by establishing time, place and characters at the start.",
      lesson: {
        sections: [
          {
            heading: "Set the scene",
            body: "**Orient** the reader by establishing **time**, **place**, and **characters** early: 'On a cold Monday morning in January, Maya woke up in her small apartment above the bakery.'",
          },
          {
            heading: "Why it matters",
            body: "Readers need to know **where** and **when** and **who** to follow the story.",
          },
        ],
        keyFormulas: [
          { name: "Orient", statement: "Time + place + characters = reader knows where they are." },
        ],
        workedExample: {
          problem: "Write an opening that orients the reader.",
          solution: "'It was a rainy Tuesday in April when Jake discovered the old map in his grandfather's attic.'",
        },
      },
      questions: [
        {
          id: "ela4-u6-story-opening-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To 'orient' the reader means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "confuse them"
                    },
                    {
                              "id": "b",
                              "text": "establish time, place and characters"
                    },
                    {
                              "id": "c",
                              "text": "skip details"
                    },
                    {
                              "id": "d",
                              "text": "end quickly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Orient = set the scene."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orient = set the scene.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**establish time, place and characters**",
          "commonErrors": [
                    "Thinks it's confusing."
          ]
},
        },
        {
          id: "ela4-u6-story-opening-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A good story opening should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "start with dialogue only"
                    },
                    {
                              "id": "b",
                              "text": "establish time, place, characters"
                    },
                    {
                              "id": "c",
                              "text": "skip setting"
                    },
                    {
                              "id": "d",
                              "text": "end immediately"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Establish all three."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Establish all three.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**establish time, place, characters**",
          "commonErrors": [
                    "Missing elements."
          ]
},
        },
        {
          id: "ela4-u6-story-opening-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a 2-sentence opening that establishes time, place and one character.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Orient",
                              "statement": "Time + place + character."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Establishes all three.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'It was a sunny Saturday in June when Ana found the key under the porch of her new house.'**",
          "commonErrors": [
                    "Missing elements.",
                    "Too vague."
          ]
},
        },
        {
          id: "ela4-u6-story-opening-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Setting' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only characters"
                    },
                    {
                              "id": "b",
                              "text": "time and place"
                    },
                    {
                              "id": "c",
                              "text": "only plot"
                    },
                    {
                              "id": "d",
                              "text": "only dialogue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Setting = time + place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Setting = time + place.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**time and place**",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela4-u6-story-opening-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two story openings. Which orients the reader better? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Orient",
                              "statement": "Two openings + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares openings.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Argues better.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Opening A names time/place/character; Opening B starts mid-action, harder to follow.'**",
          "commonErrors": [
                    "One opening only.",
                    "No argument."
          ]
},
        },
        {
          id: "ela4-u6-story-opening-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Orient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where/when."
                    },
                    {
                              "id": "b",
                              "text": "Set up the scene."
                    },
                    {
                              "id": "c",
                              "text": "Who is in story."
                    },
                    {
                              "id": "d",
                              "text": "When it happens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Orient\" means Set up the scene."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Orient\" means Set up the scene.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Orient** = Set up the scene.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u6-story-opening-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Setting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who is in story."
                    },
                    {
                              "id": "b",
                              "text": "When it happens."
                    },
                    {
                              "id": "c",
                              "text": "Where it happens."
                    },
                    {
                              "id": "d",
                              "text": "Where/when."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Setting\" means Where/when."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Setting\" means Where/when.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Setting** = Where/when.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u6-story-opening-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When it happens."
                    },
                    {
                              "id": "b",
                              "text": "Who is in story."
                    },
                    {
                              "id": "c",
                              "text": "Where it happens."
                    },
                    {
                              "id": "d",
                              "text": "Present first."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Who is in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Who is in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Who is in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
