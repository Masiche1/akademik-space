import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ela6-u6-lesson-6-1",
  code: "6-1",
  title: "Narrative Elements",
  goal: "I CAN write narratives with developed plot and characters.",
  standards: ["W.6.3"],
  vocabulary: [
    { term: "Narrative", definition: "Story." },
    { term: "Character", definition: "Person." },
    { term: "Setting", definition: "Where/when." },
    { term: "Plot", definition: "What happens." },
    { term: "Dialogue", definition: "Speech." },
    { term: "Description", definition: "Details." },
    { term: "Sequence", definition: "Order." },
    { term: "Point of view", definition: "Who tells." },
  ],
  concepts: [
    {
      id: "ela6-u6-narrative-elements",
      title: "Narrative elements",
      skill: "Write narratives with developed characters, settings, plot and dialogue.",
      lesson: {
        sections: [
          {
            heading: "Story elements",
            body: "A good **narrative** includes **characters** (who), **setting** (where/when), **plot** (what happens), and **dialogue** (what they say).",
          },
          {
            heading: "Description",
            body: "Use **sensory details** (sight, sound, smell, taste, touch) to make the story vivid.",
          },
        ],
        keyFormulas: [
          { name: "Narrative", statement: "Characters + setting + plot + dialogue = complete story." },
        ],
        workedExample: {
          problem: "Write the opening of a narrative about a character discovering a hidden room.",
          solution: "**'The door was old and rusted, but the handle turned easily. Inside, dust motes danced in the beam of light. Sarah held her breath — what secrets lay within?'**",
        },
      },
      questions: [
        {
          id: "ela6-u6-narrative-elements-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A narrative should include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only characters"
                    },
                    {
                              "id": "b",
                              "text": "characters, setting, plot, dialogue"
                    },
                    {
                              "id": "c",
                              "text": "only plot"
                    },
                    {
                              "id": "d",
                              "text": "only setting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All elements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All elements.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "characters, setting, plot, dialogue",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u6-narrative-elements-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Sensory details' help narratives by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "making them longer"
                    },
                    {
                              "id": "b",
                              "text": "making them vivid and engaging"
                    },
                    {
                              "id": "c",
                              "text": "adding facts"
                    },
                    {
                              "id": "d",
                              "text": "changing topic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Making vivid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Making vivid.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "making them vivid and engaging",
          "commonErrors": [
                    "Wrong purpose."
          ]
},
        },
        {
          id: "ela6-u6-narrative-elements-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write the beginning of a narrative story, including character, setting, and an interesting opening.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Narrative",
                              "statement": "Character + setting + hook."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes narrative.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Jake the detective had solved fifty cases, but tonight's was different. The shadows in the abandoned warehouse seemed to whisper his name.'**",
          "commonErrors": [
                    "No narrative.",
                    "Missing elements."
          ]
},
        },
        {
          id: "ela6-u6-narrative-elements-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Dialogue' in a narrative is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the narrator's voice"
                    },
                    {
                              "id": "b",
                              "text": "what characters say to each other"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
                    },
                    {
                              "id": "d",
                              "text": "the plot"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "What characters say."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "What characters say.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "what characters say to each other",
          "commonErrors": [
                    "Confuses with narration."
          ]
},
        },
        {
          id: "ela6-u6-narrative-elements-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a narrative paragraph that includes character development, setting description, and dialogue.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Narrative",
                              "statement": "All elements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes narrative.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Includes elements.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Maria's hands trembled as she approached the podium. The gym was silent except for her heartbeat. 'I...' she began, her voice cracking.'**",
          "commonErrors": [
                    "No narrative.",
                    "Missing elements."
          ]
},
        },
        {
          id: "ela6-u6-narrative-elements-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Narrative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person."
                    },
                    {
                              "id": "b",
                              "text": "Story."
                    },
                    {
                              "id": "c",
                              "text": "Where/when."
                    },
                    {
                              "id": "d",
                              "text": "What happens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Narrative\" means Story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Narrative\" means Story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Narrative** = Story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u6-narrative-elements-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where/when."
                    },
                    {
                              "id": "b",
                              "text": "What happens."
                    },
                    {
                              "id": "c",
                              "text": "Speech."
                    },
                    {
                              "id": "d",
                              "text": "Person."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Person."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u6-narrative-elements-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Setting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens."
                    },
                    {
                              "id": "b",
                              "text": "Where/when."
                    },
                    {
                              "id": "c",
                              "text": "Speech."
                    },
                    {
                              "id": "d",
                              "text": "Details."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
