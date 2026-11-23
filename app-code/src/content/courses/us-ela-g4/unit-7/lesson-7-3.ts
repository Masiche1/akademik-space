import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ela4-u7-lesson-7-3",
  code: "7-3",
  title: "Developing with Facts and Details",
  goal: "I CAN develop ideas with facts, definitions and details.",
  standards: ["W.4.2c"],
  vocabulary: [
    { term: "Develop", definition: "Expand ideas." },
    { term: "Fact", definition: "True thing." },
    { term: "Definition", definition: "What it means." },
    { term: "Detail", definition: "Small fact." },
    { term: "Elaborate", definition: "Add more." },
    { term: "Describe", definition: "Tell what it's like." },
    { term: "Example", definition: "Specific case." },
    { term: "Explain", definition: "Make clear." },
  ],
  concepts: [
    {
      id: "ela4-u7-developing-details",
      title: "Developing with facts and details",
      skill: "Develop ideas using facts, definitions, details and examples.",
      lesson: {
        sections: [
          {
            heading: "Expand",
            body: "**Develop** each idea with **facts**, **definitions**, **details**, and **examples**. Don't just state — **explain** and **describe**.",
          },
          {
            heading: "Example",
            body: "Instead of 'Dolphins are smart', write 'Dolphins are highly intelligent mammals. They can recognize themselves in mirrors, use tools, and communicate with complex sounds.'",
          },
        ],
        keyFormulas: [
          { name: "Develop", statement: "Idea + facts + details + examples = developed paragraph." },
        ],
        workedExample: {
          problem: "Develop the idea 'Bees are important'.",
          solution: "'Bees are important because they pollinate flowers, which helps plants reproduce. Without bees, many crops would fail.'",
        },
      },
      questions: [
        {
          id: "ela4-u7-developing-details-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To 'develop' an idea means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "state it once"
                    },
                    {
                              "id": "b",
                              "text": "expand with facts and details"
                    },
                    {
                              "id": "c",
                              "text": "skip it"
                    },
                    {
                              "id": "d",
                              "text": "repeat it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Develop = expand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Develop = expand.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**expand with facts and details**",
          "commonErrors": [
                    "Just states."
          ]
},
        },
        {
          id: "ela4-u7-developing-details-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Strong development includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only opinions"
                    },
                    {
                              "id": "b",
                              "text": "facts, definitions, examples, details"
                    },
                    {
                              "id": "c",
                              "text": "only questions"
                    },
                    {
                              "id": "d",
                              "text": "only guesses"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Facts/details/examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Facts/details/examples.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**facts, definitions, examples, details**",
          "commonErrors": [
                    "Weak development."
          ]
},
        },
        {
          id: "ela4-u7-developing-details-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Take one idea. Develop it into a full paragraph using facts, definitions and examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Develop",
                              "statement": "Idea + facts + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Develops fully.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'Volcanoes are mountains that can erupt. Magma rises from Earth's core...'**",
          "commonErrors": [
                    "Only states idea.",
                    "No details."
          ]
},
        },
        {
          id: "ela4-u7-developing-details-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'definition' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "an example"
                    },
                    {
                              "id": "b",
                              "text": "what a word means"
                    },
                    {
                              "id": "c",
                              "text": "a fact"
                    },
                    {
                              "id": "d",
                              "text": "a detail"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Definition = meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Definition = meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what a word means**",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela4-u7-developing-details-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Take a simple statement and develop it into a detailed paragraph. Add facts, examples and explanations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Develop",
                              "statement": "Statement -> detailed paragraph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Develops fully.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Adds facts/examples.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Cats are cute' -> 'Cats are popular pets. They have soft fur, purr when happy, and have been companions for thousands of years.'**",
          "commonErrors": [
                    "Still simple.",
                    "No facts."
          ]
},
        },
        {
          id: "ela4-u7-developing-details-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Develop\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "True thing."
                    },
                    {
                              "id": "b",
                              "text": "Expand ideas."
                    },
                    {
                              "id": "c",
                              "text": "What it means."
                    },
                    {
                              "id": "d",
                              "text": "Small fact."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Develop\" means Expand ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Develop\" means Expand ideas.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Develop** = Expand ideas.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-developing-details-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it means."
                    },
                    {
                              "id": "b",
                              "text": "Small fact."
                    },
                    {
                              "id": "c",
                              "text": "Add more."
                    },
                    {
                              "id": "d",
                              "text": "True thing."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fact\" means True thing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means True thing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fact** = True thing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-developing-details-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Definition\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small fact."
                    },
                    {
                              "id": "b",
                              "text": "What it means."
                    },
                    {
                              "id": "c",
                              "text": "Add more."
                    },
                    {
                              "id": "d",
                              "text": "Tell what it's like."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Definition\" means What it means."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Definition\" means What it means.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Definition** = What it means.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
