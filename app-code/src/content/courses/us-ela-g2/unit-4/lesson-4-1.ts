import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ela2-u4-lesson-4-1",
  code: "4-1",
  title: "What Is an Opinion?",
  goal: "I CAN tell facts from opinions.",
  standards: ["W.2.1"],
  vocabulary: [
    { term: "Opinion", definition: "What we think or like." },
    { term: "Fact", definition: "Something true." },
    { term: "Like", definition: "Enjoy or prefer." },
    { term: "Think", definition: "Our belief." },
    { term: "Prefer", definition: "Like more." },
    { term: "Belief", definition: "What we think is true." },
    { term: "Favorite", definition: "The one we like most." },
    { term: "Different", definition: "Can vary by person." },
  ],
  concepts: [
    {
      id: "ela2-u4-opinion-intro",
      title: "Facts vs opinions",
      skill: "Distinguish facts (true) from opinions (what we think or like).",
      lesson: {
        sections: [
          {
            heading: "Fact vs opinion",
            body: "A **fact** is something **true** — 'Dogs have four legs.' An **opinion** is what we **think** or **like** — 'Dogs are the best pets.' Opinions can be **different** for different people.",
          },
          {
            heading: "Your opinion",
            body: "An **opinion** tells what you **like**, **prefer**, or **think**. 'My favorite food is pizza' is an opinion.",
          },
        ],
        keyFormulas: [
          { name: "Fact", statement: "Something true." },
          { name: "Opinion", statement: "What we think/like — can vary." },
        ],
        workedExample: {
          problem: "Is 'Ice cream is delicious' a fact or opinion?",
          solution: "It's an **opinion** — some people might not think so.",
        },
      },
      questions: [
        {
          id: "ela2-u4-opinion-intro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an OPINION?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dogs have four legs"
                    },
                    {
                              "id": "b",
                              "text": "Pizza is the best food"
                    },
                    {
                              "id": "c",
                              "text": "The sky is blue"
                    },
                    {
                              "id": "d",
                              "text": "Water is wet"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Pizza is best' is opinion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Pizza is best' is opinion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Pizza is best**",
          "commonErrors": [
                    "Picks a fact."
          ]
},
        },
        {
          id: "ela2-u4-opinion-intro-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a FACT?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cats are cuter than dogs"
                    },
                    {
                              "id": "b",
                              "text": "The sun is hot"
                    },
                    {
                              "id": "c",
                              "text": "Vanilla is best"
                    },
                    {
                              "id": "d",
                              "text": "Summer is best"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Sun is hot' is fact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Sun is hot' is fact.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**sun is hot**",
          "commonErrors": [
                    "Picks an opinion."
          ]
},
        },
        {
          id: "ela2-u4-opinion-intro-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Give one fact and one opinion about animals.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fact vs opinion",
                              "statement": "Fact=true, opinion=think/like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives one fact + one opinion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Fact: birds have feathers. Opinion: birds are beautiful.'**",
          "commonErrors": [
                    "Both same type.",
                    "Cannot distinguish."
          ]
},
        },
        {
          id: "ela2-u4-opinion-intro-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An opinion can be...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only one answer"
                    },
                    {
                              "id": "b",
                              "text": "different for different people"
                    },
                    {
                              "id": "c",
                              "text": "always wrong"
                    },
                    {
                              "id": "d",
                              "text": "a fact"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Opinions can differ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opinions can differ.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**different for people**",
          "commonErrors": [
                    "Thinks one answer."
          ]
},
        },
        {
          id: "ela2-u4-opinion-intro-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write one fact and one opinion. Explain why the second is an opinion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fact vs opinion",
                              "statement": "Fact + opinion + why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes fact + opinion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains why opinion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Fact: dogs bark. Opinion: dogs are loyal — because I think so.'**",
          "commonErrors": [
                    "Both facts.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "ela2-u4-opinion-intro-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Opinion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something true."
                    },
                    {
                              "id": "b",
                              "text": "What we think or like."
                    },
                    {
                              "id": "c",
                              "text": "Enjoy or prefer."
                    },
                    {
                              "id": "d",
                              "text": "Our belief."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Opinion\" means What we think or like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Opinion\" means What we think or like.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Opinion** = What we think or like.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u4-opinion-intro-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Enjoy or prefer."
                    },
                    {
                              "id": "b",
                              "text": "Our belief."
                    },
                    {
                              "id": "c",
                              "text": "Like more."
                    },
                    {
                              "id": "d",
                              "text": "Something true."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fact\" means Something true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Something true.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fact** = Something true.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u4-opinion-intro-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Like\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Our belief."
                    },
                    {
                              "id": "b",
                              "text": "Enjoy or prefer."
                    },
                    {
                              "id": "c",
                              "text": "Like more."
                    },
                    {
                              "id": "d",
                              "text": "What we think is true."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Like\" means Enjoy or prefer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Like\" means Enjoy or prefer.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Like** = Enjoy or prefer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
