import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "ela4-u6-lesson-6-4",
  code: "6-4",
  title: "Narrative Conclusions",
  goal: "I CAN write conclusions that wrap up the story's conflict and events.",
  standards: ["W.4.3d"],
  vocabulary: [
    { term: "Conclusion", definition: "How story ends." },
    { term: "Resolve", definition: "Solve the conflict." },
    { term: "Wrap up", definition: "Finish the story." },
    { term: "Feeling", definition: "Emotion at end." },
    { term: "Lesson", definition: "What we learn." },
    { term: "Aftermath", definition: "What happens after." },
    { term: "Closure", definition: "Sense of ending." },
    { term: "Final scene", definition: "Last part." },
  ],
  concepts: [
    {
      id: "ela4-u6-narrative-conclusions",
      title: "Narrative conclusions",
      skill: "Write conclusions that resolve the conflict and provide closure.",
      lesson: {
        sections: [
          {
            heading: "Wrap it up",
            body: "The **conclusion** **resolves** the conflict and shows what happens after. It should feel **finished** — readers shouldn't wonder 'what happened next?'",
          },
          {
            heading: "Example",
            body: "'Mia finally found her dog under the porch. She hugged him tight and never let him out of her sight again.' — conflict resolved, closure provided.",
          },
        ],
        keyFormulas: [
          { name: "Conclusion", statement: "Resolve conflict + show aftermath + provide closure." },
        ],
        workedExample: {
          problem: "Write a conclusion for a story about losing and finding a pet.",
          solution: "'Max licked Jake's face as if to say sorry. They were home at last, and Jake promised to always keep the gate closed.'",
        },
      },
      questions: [
        {
          id: "ela4-u6-narrative-conclusions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'conclusion' should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "leave questions"
                    },
                    {
                              "id": "b",
                              "text": "resolve the conflict and provide closure"
                    },
                    {
                              "id": "c",
                              "text": "end abruptly"
                    },
                    {
                              "id": "d",
                              "text": "start a new story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Resolve + closure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resolve + closure.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**resolve the conflict and provide closure**",
          "commonErrors": [
                    "Leaves unresolved."
          ]
},
        },
        {
          id: "ela4-u6-narrative-conclusions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A good ending should NOT...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "resolve conflict"
                    },
                    {
                              "id": "b",
                              "text": "leave readers wondering"
                    },
                    {
                              "id": "c",
                              "text": "show aftermath"
                    },
                    {
                              "id": "d",
                              "text": "feel finished"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Shouldn't leave wondering."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shouldn't leave wondering.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**leave readers wondering**",
          "commonErrors": [
                    "Thinks unresolved is good."
          ]
},
        },
        {
          id: "ela4-u6-narrative-conclusions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a 2-sentence conclusion that resolves the conflict and shows what happens after.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conclusion",
                              "statement": "Resolve + aftermath."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resolves conflict.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Shows aftermath.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Mia hugged her dog. She promised to always check the gate.'**",
          "commonErrors": [
                    "Unresolved.",
                    "No aftermath."
          ]
},
        },
        {
          id: "ela4-u6-narrative-conclusions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Closure' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the beginning"
                    },
                    {
                              "id": "b",
                              "text": "a sense that the story is finished"
                    },
                    {
                              "id": "c",
                              "text": "the conflict"
                    },
                    {
                              "id": "d",
                              "text": "the characters"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Closure = finished feeling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Closure = finished feeling.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a sense that the story is finished**",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela4-u6-narrative-conclusions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two story endings. Which provides better closure? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conclusion",
                              "statement": "Two endings + closure comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares endings.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Argues better closure.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Ending A resolves conflict clearly; Ending B is vague, leaves conflict open.'**",
          "commonErrors": [
                    "One ending only.",
                    "No argument."
          ]
},
        },
        {
          id: "ela4-u6-narrative-conclusions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conclusion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solve the conflict."
                    },
                    {
                              "id": "b",
                              "text": "How story ends."
                    },
                    {
                              "id": "c",
                              "text": "Finish the story."
                    },
                    {
                              "id": "d",
                              "text": "Emotion at end."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Conclusion\" means How story ends."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conclusion\" means How story ends.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Conclusion** = How story ends.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u6-narrative-conclusions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Resolve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Finish the story."
                    },
                    {
                              "id": "b",
                              "text": "Emotion at end."
                    },
                    {
                              "id": "c",
                              "text": "What we learn."
                    },
                    {
                              "id": "d",
                              "text": "Solve the conflict."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Resolve\" means Solve the conflict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Resolve\" means Solve the conflict.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Resolve** = Solve the conflict.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u6-narrative-conclusions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wrap up\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Emotion at end."
                    },
                    {
                              "id": "b",
                              "text": "Finish the story."
                    },
                    {
                              "id": "c",
                              "text": "What we learn."
                    },
                    {
                              "id": "d",
                              "text": "What happens after."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Wrap up\" means Finish the story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Wrap up\" means Finish the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Wrap up** = Finish the story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
