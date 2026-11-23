import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ela6-u3-lesson-3-3",
  code: "3-3",
  title: "Conflict and Resolution",
  goal: "I CAN identify conflicts and explain resolutions.",
  standards: ["RL.6.3"],
  vocabulary: [
    { term: "Conflict", definition: "Problem/struggle." },
    { term: "Internal", definition: "Inside character." },
    { term: "External", definition: "Outside character." },
    { term: "Man vs man", definition: "Person vs person." },
    { term: "Man vs nature", definition: "Person vs nature." },
    { term: "Man vs self", definition: "Person vs self." },
    { term: "Resolution", definition: "How it ends." },
    { term: "Climax", definition: "Peak moment." },
  ],
  concepts: [
    {
      id: "ela6-u3-conflict-resolution",
      title: "Conflict and resolution",
      skill: "Identify types of conflict and explain how they are resolved.",
      lesson: {
        sections: [
          {
            heading: "Types of conflict",
            body: "**Internal**: character vs themselves (fear, doubt). **External**: character vs others, nature, or society.",
          },
          {
            heading: "Resolution",
            body: "The **resolution** is how the conflict ends — the character's growth or the problem's solution.",
          },
        ],
        keyFormulas: [
          { name: "Conflict", statement: "Internal (self) vs external (others/nature)." },
        ],
        workedExample: {
          problem: "A character struggles with fear of public speaking (internal) and must give a speech to save their school (external). Identify both conflicts.",
          solution: "**Internal: fear of speaking; External: must save school.**",
        },
      },
      questions: [
        {
          id: "ela6-u3-conflict-resolution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Internal conflict' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fighting another person"
                    },
                    {
                              "id": "b",
                              "text": "struggle within the character"
                    },
                    {
                              "id": "c",
                              "text": "fighting nature"
                    },
                    {
                              "id": "d",
                              "text": "fighting society"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Within character."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Within character.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "struggle within the character",
          "commonErrors": [
                    "Confuses with external."
          ]
},
        },
        {
          id: "ela6-u3-conflict-resolution-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Man vs nature' conflict means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "person vs person"
                    },
                    {
                              "id": "b",
                              "text": "person vs natural forces"
                    },
                    {
                              "id": "c",
                              "text": "person vs self"
                    },
                    {
                              "id": "d",
                              "text": "person vs society"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Person vs nature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Person vs nature.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "person vs natural forces",
          "commonErrors": [
                    "Wrong type."
          ]
},
        },
        {
          id: "ela6-u3-conflict-resolution-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify the conflict and resolution: 'Tom was afraid to ask his crush to the dance (internal). He practiced his speech all week and finally asked her. She said yes.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conflict",
                              "statement": "Internal + resolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies conflict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains resolution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Conflict: fear of rejection (internal); Resolution: overcame fear, asked, succeeded.**",
          "commonErrors": [
                    "Wrong conflict.",
                    "No resolution."
          ]
},
        },
        {
          id: "ela6-u3-conflict-resolution-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Resolution' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the beginning"
                    },
                    {
                              "id": "b",
                              "text": "how the conflict ends"
                    },
                    {
                              "id": "c",
                              "text": "the climax"
                    },
                    {
                              "id": "d",
                              "text": "the setting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "How conflict ends."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "How conflict ends.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "how the conflict ends",
          "commonErrors": [
                    "Confuses with other parts."
          ]
},
        },
        {
          id: "ela6-u3-conflict-resolution-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Identify the type of conflict in a story and explain how it is resolved.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conflict",
                              "statement": "Type + resolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies type.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains resolution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Internal conflict: self-doubt; Resolution: character gains confidence and succeeds.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No resolution."
          ]
},
        },
        {
          id: "ela6-u3-conflict-resolution-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conflict\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Inside character."
                    },
                    {
                              "id": "b",
                              "text": "Problem/struggle."
                    },
                    {
                              "id": "c",
                              "text": "Outside character."
                    },
                    {
                              "id": "d",
                              "text": "Person vs person."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Conflict\" means Problem/struggle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conflict\" means Problem/struggle.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Conflict** = Problem/struggle.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u3-conflict-resolution-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Internal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Outside character."
                    },
                    {
                              "id": "b",
                              "text": "Person vs person."
                    },
                    {
                              "id": "c",
                              "text": "Person vs nature."
                    },
                    {
                              "id": "d",
                              "text": "Inside character."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Internal\" means Inside character."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Internal\" means Inside character.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Internal** = Inside character.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u3-conflict-resolution-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"External\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person vs person."
                    },
                    {
                              "id": "b",
                              "text": "Outside character."
                    },
                    {
                              "id": "c",
                              "text": "Person vs nature."
                    },
                    {
                              "id": "d",
                              "text": "Person vs self."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"External\" means Outside character."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"External\" means Outside character.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**External** = Outside character.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
