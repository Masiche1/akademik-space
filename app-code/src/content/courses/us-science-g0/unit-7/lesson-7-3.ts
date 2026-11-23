import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "s0-u7-lesson-7-3",
  code: "7-3",
  title: "Habitat Changes",
  goal: "I CAN describe how habitats change and what happens to living things.",
  standards: ["K-ESS2-2"],
  vocabulary: [
    { term: "Change", definition: "Something different happens." },
    { term: "Habitat change", definition: "Habitat becomes different." },
    { term: "Season", definition: "Time of year." },
    { term: "Weather", definition: "Sky/air conditions." },
    { term: "Adapt", definition: "Fit new conditions." },
    { term: "Move", definition: "Go to a new place." },
    { term: "Survive", definition: "Stay alive." },
    { term: "Effect", definition: "What happens because." },
  ],
  concepts: [
    {
      id: "s0-u7-habitat-changes",
      title: "Habitat changes",
      skill: "Describe how habitats change and how living things respond.",
      lesson: {
        sections: [
          {
            heading: "Habitats change",
            body: "Habitats **change** — seasons change weather, storms damage habitats, humans build things. These changes **affect** the living things that live there.",
          },
          {
            heading: "How living things respond",
            body: "Living things may **adapt** (change to fit), **move** to a new habitat, or struggle to **survive** if their habitat changes too much.",
          },
        ],
        keyFormulas: [
          { name: "Habitat changes", statement: "Seasons/weather/humans -> habitat changes -> animals adapt/move/survive." },
        ],
        workedExample: {
          problem: "A forest fire destroys a habitat. What might happen to the animals there?",
          solution: "Animals may **move** to a new habitat, **adapt** if possible, or struggle to **survive**.",
        },
      },
      questions: [
        {
          id: "s0-u7-habitat-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Habitats can change because of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nothing"
                    },
                    {
                              "id": "b",
                              "text": "seasons, weather, or human activity"
                    },
                    {
                              "id": "c",
                              "text": "only animals"
                    },
                    {
                              "id": "d",
                              "text": "only plants"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Seasons, weather, humans."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Seasons, weather, humans.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**seasons/weather/humans**",
          "commonErrors": [
                    "Thinks habitats never change."
          ]
},
        },
        {
          id: "s0-u7-habitat-changes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When a habitat changes, animals might...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do nothing"
                    },
                    {
                              "id": "b",
                              "text": "adapt, move, or struggle to survive"
                    },
                    {
                              "id": "c",
                              "text": "turn into plants"
                    },
                    {
                              "id": "d",
                              "text": "disappear always"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Adapt, move, or struggle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adapt, move, or struggle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**adapt/move/survive**",
          "commonErrors": [
                    "Thinks they can't respond."
          ]
},
        },
        {
          id: "s0-u7-habitat-changes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a way a habitat might change. What might happen to the animals that live there?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat changes",
                              "statement": "Change + animal response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes change + response.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Season change: leaves fall; animals adapt or migrate.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No response."
          ]
},
        },
        {
          id: "s0-u7-habitat-changes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Adapt' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "move away"
                    },
                    {
                              "id": "b",
                              "text": "change to fit new conditions"
                    },
                    {
                              "id": "c",
                              "text": "die"
                    },
                    {
                              "id": "d",
                              "text": "hide forever"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Adapt = change to fit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adapt = change to fit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**change to fit**",
          "commonErrors": [
                    "Confuses with move."
          ]
},
        },
        {
          id: "s0-u7-habitat-changes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Imagine a habitat changes (like a pond dries up). What could animals do? Give two possible responses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat changes",
                              "statement": "Habitat change + 2 responses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives 2 responses.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Pond dries -> fish move to another water source or die.'**",
          "commonErrors": [
                    "No change.",
                    "Fewer than 2 responses."
          ]
},
        },
        {
          id: "s0-u7-habitat-changes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Habitat becomes different."
                    },
                    {
                              "id": "b",
                              "text": "Something different happens."
                    },
                    {
                              "id": "c",
                              "text": "Time of year."
                    },
                    {
                              "id": "d",
                              "text": "Sky/air conditions."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Change\" means Something different happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Change\" means Something different happens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Change** = Something different happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitat-changes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Habitat change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Time of year."
                    },
                    {
                              "id": "b",
                              "text": "Sky/air conditions."
                    },
                    {
                              "id": "c",
                              "text": "Fit new conditions."
                    },
                    {
                              "id": "d",
                              "text": "Habitat becomes different."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Habitat change\" means Habitat becomes different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Habitat change\" means Habitat becomes different.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Habitat change** = Habitat becomes different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitat-changes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Season\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sky/air conditions."
                    },
                    {
                              "id": "b",
                              "text": "Time of year."
                    },
                    {
                              "id": "c",
                              "text": "Fit new conditions."
                    },
                    {
                              "id": "d",
                              "text": "Go to a new place."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Season\" means Time of year."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Season\" means Time of year.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Season** = Time of year.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
