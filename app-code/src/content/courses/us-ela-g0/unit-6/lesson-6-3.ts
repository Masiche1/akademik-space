import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ela0-u6-lesson-6-3",
  code: "6-3",
  title: "Informational Writing Structure",
  goal: "I CAN organize facts about my topic clearly.",
  standards: ["W.K.2"],
  vocabulary: [
    { term: "Introduction", definition: "Tells what the topic is." },
    { term: "Fact", definition: "Information to share." },
    { term: "Detail", definition: "More information." },
    { term: "Order", definition: "Logical sequence." },
    { term: "Group", definition: "Put related facts together." },
    { term: "Clear", definition: "Easy to understand." },
    { term: "Conclusion", definition: "Wraps up." },
  ],
  concepts: [
    {
      id: "ela0-u6-info-structure",
      title: "Informational writing structure",
      skill: "Organize facts logically: introduction, grouped facts, conclusion.",
      lesson: {
        sections: [
          {
            heading: "Organize your facts",
            body: "An informational text has an **introduction** (tell what the topic is), **body** (share facts, grouped logically), and **conclusion** (wrap it up).",
          },
          {
            heading: "Group related facts",
            body: "Put **related facts together** — all facts about what penguins eat in one place, all about where they live in another. This makes it **clear**.",
          },
        ],
        keyFormulas: [
          { name: "Info structure", statement: "Intro (topic) + body (grouped facts) + conclusion (wrap up)." },
        ],
        workedExample: {
          problem: "Organize facts about dogs: they bark, they have fur, they are loyal, they need walks.",
          solution: "Intro: 'Dogs are pets.' Body: 'Dogs have fur and bark. They are loyal and need walks.' Conclusion: 'Dogs make great pets.'",
        },
      },
      questions: [
        {
          id: "ela0-u6-info-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The parts of an informational text are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "beginning, middle, end only"
                    },
                    {
                              "id": "b",
                              "text": "introduction, body facts, conclusion"
                    },
                    {
                              "id": "c",
                              "text": "title, picture, name"
                    },
                    {
                              "id": "d",
                              "text": "question, answer, question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Intro + body facts + conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Intro + body facts + conclusion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**intro, facts, conclusion**",
          "commonErrors": [
                    "Picks wrong structure."
          ]
},
        },
        {
          id: "ela0-u6-info-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Grouping' facts means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "putting them randomly"
                    },
                    {
                              "id": "b",
                              "text": "putting related facts together"
                    },
                    {
                              "id": "c",
                              "text": "deleting them"
                    },
                    {
                              "id": "d",
                              "text": "counting them"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Group = related facts together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Group = related facts together.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**related together**",
          "commonErrors": [
                    "Thinks grouping is random."
          ]
},
        },
        {
          id: "ela0-u6-info-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a short informational text about a topic: introduce it, share two facts, and wrap up.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Info structure",
                              "statement": "Intro + 2 facts + conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes all three parts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Cats are pets. Cats have fur and like to sleep. Cats are cute pets.'**",
          "commonErrors": [
                    "Missing parts.",
                    "Not informational."
          ]
},
        },
        {
          id: "ela0-u6-info-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'conclusion' in informational writing...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "starts it"
                    },
                    {
                              "id": "b",
                              "text": "wraps it up at the end"
                    },
                    {
                              "id": "c",
                              "text": "is a fact only"
                    },
                    {
                              "id": "d",
                              "text": "is optional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Conclusion = wrap up at end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conclusion = wrap up at end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**wraps up**",
          "commonErrors": [
                    "Confuses with intro."
          ]
},
        },
        {
          id: "ela0-u6-info-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write an informational text about an animal or thing. Include an introduction, three facts, and a conclusion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Info structure",
                              "statement": "Intro + 3 facts + conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes intro + conclusion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Includes 3 facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Penguins are birds. They live in cold places, have feathers, and swim well. Penguins are amazing birds.'**",
          "commonErrors": [
                    "Missing structure.",
                    "Fewer than 3 facts."
          ]
},
        },
        {
          id: "ela0-u6-info-structure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Introduction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Information to share."
                    },
                    {
                              "id": "b",
                              "text": "Tells what the topic is."
                    },
                    {
                              "id": "c",
                              "text": "More information."
                    },
                    {
                              "id": "d",
                              "text": "Logical sequence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Introduction\" means Tells what the topic is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Introduction\" means Tells what the topic is.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Introduction** = Tells what the topic is.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u6-info-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More information."
                    },
                    {
                              "id": "b",
                              "text": "Logical sequence."
                    },
                    {
                              "id": "c",
                              "text": "Put related facts together."
                    },
                    {
                              "id": "d",
                              "text": "Information to share."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fact\" means Information to share."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Information to share.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fact** = Information to share.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u6-info-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Logical sequence."
                    },
                    {
                              "id": "b",
                              "text": "More information."
                    },
                    {
                              "id": "c",
                              "text": "Put related facts together."
                    },
                    {
                              "id": "d",
                              "text": "Easy to understand."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Detail\" means More information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Detail\" means More information.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Detail** = More information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
