import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "ela6-u3-lesson-3-5",
  code: "3-5",
  title: "Setting/Plot Review",
  goal: "I CAN use all setting and plot skills.",
  standards: ["RL.6.3", "RL.6.5"],
  vocabulary: [
    { term: "Setting", definition: "Where/when." },
    { term: "Plot", definition: "What happens." },
    { term: "Exposition", definition: "Setup." },
    { term: "Rising action", definition: "Builds." },
    { term: "Climax", definition: "Peak." },
    { term: "Resolution", definition: "Ending." },
    { term: "Conflict", definition: "Problem." },
    { term: "Mood", definition: "Feeling." },
  ],
  concepts: [
    {
      id: "ela6-u3-setting-plot-review",
      title: "Setting/plot review",
      skill: "Combine setting analysis with plot structure and conflict.",
      lesson: {
        sections: [
          {
            heading: "All setting/plot skills",
            body: "Analyze **setting** and its effect, trace **plot structure**, and identify **conflicts/resolutions**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to understand stories deeply.",
          },
        ],
        keyFormulas: [
          { name: "Setting/plot", statement: "Setting + plot + conflict = all skills." },
        ],
        workedExample: {
          problem: "Use all setting/plot skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "ela6-u3-setting-plot-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Setting/plot skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only setting"
                    },
                    {
                              "id": "b",
                              "text": "setting, plot, conflict, resolution"
                    },
                    {
                              "id": "c",
                              "text": "only plot"
                    },
                    {
                              "id": "d",
                              "text": "only conflict"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "setting, plot, conflict, resolution",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela6-u3-setting-plot-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Analyze a setting, trace a plot structure, identify a conflict, and explain the resolution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All set/plot",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All set/plot",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Setting: stormy night; Plot: setup->rising->climax->resolution; Conflict: character vs storm; Resolution: finds shelter.'**"
          ]
},
        },
        {
          id: "ela6-u3-setting-plot-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Understanding setting and plot helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only memorize"
                    },
                    {
                              "id": "b",
                              "text": "understand stories deeply and see how they work"
                    },
                    {
                              "id": "c",
                              "text": "only test"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Understand stories deeply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand stories deeply.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "understand stories deeply and see how they work",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "ela6-u3-setting-plot-review-q4",
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
                              "text": "Setup."
                    },
                    {
                              "id": "d",
                              "text": "Builds."
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
        {
          id: "ela6-u3-setting-plot-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Setup."
                    },
                    {
                              "id": "b",
                              "text": "Builds."
                    },
                    {
                              "id": "c",
                              "text": "Peak."
                    },
                    {
                              "id": "d",
                              "text": "What happens."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "ela6-u3-setting-plot-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Exposition\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Builds."
                    },
                    {
                              "id": "b",
                              "text": "Setup."
                    },
                    {
                              "id": "c",
                              "text": "Peak."
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
                              "statement": "\"Exposition\" means Setup."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Exposition\" means Setup.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Exposition** = Setup.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u3-setting-plot-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rising action\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Peak."
                    },
                    {
                              "id": "b",
                              "text": "Ending."
                    },
                    {
                              "id": "c",
                              "text": "Problem."
                    },
                    {
                              "id": "d",
                              "text": "Builds."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Rising action\" means Builds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rising action\" means Builds.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Rising action** = Builds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u3-setting-plot-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Climax\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ending."
                    },
                    {
                              "id": "b",
                              "text": "Peak."
                    },
                    {
                              "id": "c",
                              "text": "Problem."
                    },
                    {
                              "id": "d",
                              "text": "Feeling."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Climax\" means Peak."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Climax\" means Peak.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Climax** = Peak.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
