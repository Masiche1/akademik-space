import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ela6-u3-lesson-3-2",
  code: "3-2",
  title: "Plot Structure",
  goal: "I CAN trace the plot structure of a story.",
  standards: ["RL.6.5"],
  vocabulary: [
    { term: "Plot", definition: "What happens." },
    { term: "Exposition", definition: "Beginning/setup." },
    { term: "Rising action", definition: "Building tension." },
    { term: "Climax", definition: "Peak moment." },
    { term: "Falling action", definition: "Resolution begins." },
    { term: "Resolution", definition: "Ending." },
    { term: "Conflict", definition: "Problem." },
    { term: "Structure", definition: "Organization." },
  ],
  concepts: [
    {
      id: "ela6-u3-plot-structure",
      title: "Plot structure",
      skill: "Identify and explain the parts of plot: exposition, rising action, climax, falling action, resolution.",
      lesson: {
        sections: [
          {
            heading: "Five parts",
            body: "**Exposition** (setup) → **Rising action** (builds tension) → **Climax** (peak moment) → **Falling action** (winds down) → **Resolution** (ending).",
          },
          {
            heading: "Conflict",
            body: "The **conflict** drives the plot — the problem the character faces.",
          },
        ],
        keyFormulas: [
          { name: "Plot", statement: "Exposition -> rising -> climax -> falling -> resolution." },
        ],
        workedExample: {
          problem: "A story starts with a peaceful village (setup), builds to a dragon attack (rising), peaks when the knight faces the dragon (climax), then the dragon is defeated (falling/resolution). Identify each part.",
          solution: "**Exposition: village; Rising: attack; Climax: knight vs dragon; Resolution: dragon defeated.**",
        },
      },
      questions: [
        {
          id: "ela6-u3-plot-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'climax' of a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the beginning"
                    },
                    {
                              "id": "b",
                              "text": "the peak/tension moment"
                    },
                    {
                              "id": "c",
                              "text": "the ending"
                    },
                    {
                              "id": "d",
                              "text": "the setup"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Peak moment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Peak moment.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the peak/tension moment",
          "commonErrors": [
                    "Wrong part."
          ]
},
        },
        {
          id: "ela6-u3-plot-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Exposition' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the climax"
                    },
                    {
                              "id": "b",
                              "text": "the beginning/setup of story"
                    },
                    {
                              "id": "c",
                              "text": "the ending"
                    },
                    {
                              "id": "d",
                              "text": "the conflict"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Beginning/setup."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beginning/setup.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the beginning/setup of story",
          "commonErrors": [
                    "Wrong part."
          ]
},
        },
        {
          id: "ela6-u3-plot-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify the plot structure of this scenario: 'A girl finds a map (setup), travels through dangers (builds), faces the treasure guardian (peak), escapes with treasure (ends). Label each part.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plot",
                              "statement": "All five parts labeled."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labels all parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Exposition: finds map; Rising: dangers; Climax: faces guardian; Falling: escapes; Resolution: has treasure.**",
          "commonErrors": [
                    "Wrong labels.",
                    "Missing parts."
          ]
},
        },
        {
          id: "ela6-u3-plot-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Rising action' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the ending"
                    },
                    {
                              "id": "b",
                              "text": "events that build tension"
                    },
                    {
                              "id": "c",
                              "text": "the setup"
                    },
                    {
                              "id": "d",
                              "text": "the resolution"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Builds tension."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Builds tension.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "events that build tension",
          "commonErrors": [
                    "Wrong part."
          ]
},
        },
        {
          id: "ela6-u3-plot-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Trace the plot structure of a story and explain how conflict drives the plot.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plot",
                              "statement": "Structure + conflict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traces structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains conflict.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Conflict: character vs nature; Plot: setup -> rising danger -> climax -> resolution.'**",
          "commonErrors": [
                    "Cannot trace.",
                    "No conflict explained."
          ]
},
        },
        {
          id: "ela6-u3-plot-structure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Beginning/setup."
                    },
                    {
                              "id": "b",
                              "text": "What happens."
                    },
                    {
                              "id": "c",
                              "text": "Building tension."
                    },
                    {
                              "id": "d",
                              "text": "Peak moment."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Plot\" means What happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plot\" means What happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Plot** = What happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u3-plot-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Exposition\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Building tension."
                    },
                    {
                              "id": "b",
                              "text": "Peak moment."
                    },
                    {
                              "id": "c",
                              "text": "Resolution begins."
                    },
                    {
                              "id": "d",
                              "text": "Beginning/setup."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Exposition\" means Beginning/setup."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Exposition\" means Beginning/setup.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Exposition** = Beginning/setup.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u3-plot-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rising action\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Peak moment."
                    },
                    {
                              "id": "b",
                              "text": "Building tension."
                    },
                    {
                              "id": "c",
                              "text": "Resolution begins."
                    },
                    {
                              "id": "d",
                              "text": "Ending."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Rising action\" means Building tension."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rising action\" means Building tension.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Rising action** = Building tension.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
