import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "spk-u1-lesson-1-6",
  code: "1-6",
  title: "Tools for Observing",
  goal: "I CAN use simple tools like magnifiers and balance scales.",
  standards: ["ELOF-PK.SCI.TOOLS.1"],
  vocabulary: [
    { term: "Tool", definition: "Something that helps you do a job." },
    { term: "Magnifier", definition: "A lens that makes things look bigger." },
    { term: "Balance scale", definition: "A tool that compares weight." },
    { term: "Observe", definition: "Notice closely." },
    { term: "Measure", definition: "Find out how much or how big." },
  ],
  concepts: [
    {
      id: "spk-u1-science-tools",
      title: "Tools for observing",
      skill: "Use magnifiers and balance scales to observe and compare.",
      lesson: {
        sections: [
          {
            heading: "Tools help us see more",
            body: "A **magnifier** (or magnifying glass) makes small things look **bigger** so you can see details. A **balance scale** lets you compare which object is **heavier**.",
          },
          {
            heading: "Measure and compare",
            body: "Put objects on a balance scale to see which is heavier or lighter. Use a magnifier to see tiny details on leaves, bugs or fabric.",
          },
        ],
        keyFormulas: [
          { name: "Magnifier", statement: "Makes small things look bigger." },
          { name: "Balance scale", statement: "Compares weight: heavier side goes down." },
        ],
        workedExample: {
          problem: "You want to see the veins on a leaf clearly. What tool helps?",
          solution: "Use a **magnifier** — it makes the leaf look bigger so you can see veins.",
        },
      },
      questions: [
        {
          id: "spk-u1-science-tools-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A magnifier helps you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hear better"
                    },
                    {
                              "id": "b",
                              "text": "see small things bigger"
                    },
                    {
                              "id": "c",
                              "text": "smell things"
                    },
                    {
                              "id": "d",
                              "text": "run faster"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "A magnifier makes small things look bigger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A magnifier makes small things look bigger.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**See small things bigger**",
          "commonErrors": [
                    "Thinks magnifier is for hearing."
          ]
},
        },
        {
          id: "spk-u1-science-tools-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A balance scale is used to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "measure length"
                    },
                    {
                              "id": "b",
                              "text": "compare weight"
                    },
                    {
                              "id": "c",
                              "text": "see colors"
                    },
                    {
                              "id": "d",
                              "text": "tell time"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "A balance scale compares which object is heavier."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A balance scale compares which object is heavier.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare weight**",
          "commonErrors": [
                    "Thinks scale measures length."
          ]
},
        },
        {
          id: "spk-u1-science-tools-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Use a magnifier to look at a small object. What new details can you see?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Magnifier",
                              "statement": "See details bigger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses magnifier and names new details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I can see tiny hairs on the leaf.'**",
          "commonErrors": [
                    "Cannot use magnifier.",
                    "No new details."
          ]
},
        },
        {
          id: "spk-u1-science-tools-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a balance scale, the **heavier** object makes its side...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "go up"
                    },
                    {
                              "id": "b",
                              "text": "go down"
                    },
                    {
                              "id": "c",
                              "text": "stay level"
                    },
                    {
                              "id": "d",
                              "text": "disappear"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Heavier side goes down on a balance scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heavier side goes down on a balance scale.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Go down**",
          "commonErrors": [
                    "Reverses the rule."
          ]
},
        },
        {
          id: "spk-u1-science-tools-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Use a balance scale to compare two objects. Which is heavier? How do you know?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Balance scale",
                              "statement": "Heavier side goes down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses scale to compare.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says which is heavier and why.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'The rock is heavier because its side went down.'**",
          "commonErrors": [
                    "Cannot use scale.",
                    "Wrong conclusion."
          ]
},
        },
        {
          id: "spk-u1-science-tools-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tool\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A lens that makes things look bigger."
                    },
                    {
                              "id": "b",
                              "text": "Something that helps you do a job."
                    },
                    {
                              "id": "c",
                              "text": "A tool that compares weight."
                    },
                    {
                              "id": "d",
                              "text": "Notice closely."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tool\" means Something that helps you do a job."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tool\" means Something that helps you do a job.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tool** = Something that helps you do a job.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-science-tools-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Magnifier\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A tool that compares weight."
                    },
                    {
                              "id": "b",
                              "text": "Notice closely."
                    },
                    {
                              "id": "c",
                              "text": "Find out how much or how big."
                    },
                    {
                              "id": "d",
                              "text": "A lens that makes things look bigger."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Magnifier\" means A lens that makes things look bigger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Magnifier\" means A lens that makes things look bigger.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Magnifier** = A lens that makes things look bigger.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-science-tools-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Balance scale\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Notice closely."
                    },
                    {
                              "id": "b",
                              "text": "A tool that compares weight."
                    },
                    {
                              "id": "c",
                              "text": "Find out how much or how big."
                    },
                    {
                              "id": "d",
                              "text": "Something that helps you do a job."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Balance scale\" means A tool that compares weight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Balance scale\" means A tool that compares weight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Balance scale** = A tool that compares weight.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
