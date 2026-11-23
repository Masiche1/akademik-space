import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "sci2-u2-lesson-2-3",
  code: "2-3",
  title: "Solids, Liquids, Gases",
  goal: "I CAN observe how matter changes between states.",
  standards: ["NGSS 2-PS1-1"],
  vocabulary: [
    { term: "Freeze", definition: "Liquid to solid." },
    { term: "Melt", definition: "Solid to liquid." },
    { term: "Evaporate", definition: "Liquid to gas." },
    { term: "Condense", definition: "Gas to liquid." },
    { term: "Ice", definition: "Frozen water." },
    { term: "Water", definition: "Liquid water." },
    { term: "Steam", definition: "Water vapor." },
    { term: "Change", definition: "Different state." },
  ],
  concepts: [
    {
      id: "sci2-u2-solids-liquids-gases",
      title: "Matter changes state",
      skill: "Observe how matter changes between solid, liquid and gas states.",
      lesson: {
        sections: [
          {
            heading: "Matter changes",
            body: "Matter can **change** states: water **freezes** to ice (liquid to solid), **melts** back to water, **evaporates** to steam (liquid to gas), and **condenses** back to liquid.",
          },
          {
            heading: "Water cycle",
            body: "These changes happen in the **water cycle**: ice melts, water evaporates, steam condenses into clouds, clouds make rain.",
          },
        ],
        keyFormulas: [
          { name: "Freeze", statement: "Liquid -> solid (cold)." },
          { name: "Melt", statement: "Solid -> liquid (heat)." },
          { name: "Evaporate", statement: "Liquid -> gas (heat)." },
          { name: "Condense", statement: "Gas -> liquid (cool)." },
        ],
        workedExample: {
          problem: "What happens to ice when it warms up?",
          solution: "It **melts** — changes from solid to liquid.",
        },
      },
      questions: [
        {
          id: "sci2-u2-solids-liquids-gases-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Melting' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "liquid to solid"
                    },
                    {
                              "id": "b",
                              "text": "solid to liquid"
                    },
                    {
                              "id": "c",
                              "text": "liquid to gas"
                    },
                    {
                              "id": "d",
                              "text": "gas to liquid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Melting = solid to liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Melting = solid to liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**solid to liquid**",
          "commonErrors": [
                    "Confuses with freezing."
          ]
},
        },
        {
          id: "sci2-u2-solids-liquids-gases-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Water turning into steam is called...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "melting"
                    },
                    {
                              "id": "b",
                              "text": "evaporating"
                    },
                    {
                              "id": "c",
                              "text": "freezing"
                    },
                    {
                              "id": "d",
                              "text": "condensing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Evaporating = liquid to gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaporating = liquid to gas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**evaporating**",
          "commonErrors": [
                    "Picks wrong change."
          ]
},
        },
        {
          id: "sci2-u2-solids-liquids-gases-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the water cycle: ice -> water -> steam -> cloud -> rain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "State changes",
                              "statement": "Freeze/melt/evaporate/condense."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes cycle correctly.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Ice melts, water evaporates, steam condenses to rain.'**",
          "commonErrors": [
                    "Wrong order.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "sci2-u2-solids-liquids-gases-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Condensing' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "gas to liquid"
                    },
                    {
                              "id": "b",
                              "text": "liquid to gas"
                    },
                    {
                              "id": "c",
                              "text": "solid to liquid"
                    },
                    {
                              "id": "d",
                              "text": "liquid to solid"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Condensing = gas to liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Condensing = gas to liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**gas to liquid**",
          "commonErrors": [
                    "Confuses with evaporating."
          ]
},
        },
        {
          id: "sci2-u2-solids-liquids-gases-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Observe ice melting and water freezing. Describe both changes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "State changes",
                              "statement": "Melt + freeze."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes melting.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes freezing.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Ice melts to water when warm; water freezes to ice when cold.'**",
          "commonErrors": [
                    "Cannot observe.",
                    "Only one change."
          ]
},
        },
        {
          id: "sci2-u2-solids-liquids-gases-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Freeze\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solid to liquid."
                    },
                    {
                              "id": "b",
                              "text": "Liquid to solid."
                    },
                    {
                              "id": "c",
                              "text": "Liquid to gas."
                    },
                    {
                              "id": "d",
                              "text": "Gas to liquid."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Freeze\" means Liquid to solid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Freeze\" means Liquid to solid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Freeze** = Liquid to solid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-solids-liquids-gases-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Melt\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid to gas."
                    },
                    {
                              "id": "b",
                              "text": "Gas to liquid."
                    },
                    {
                              "id": "c",
                              "text": "Frozen water."
                    },
                    {
                              "id": "d",
                              "text": "Solid to liquid."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Melt\" means Solid to liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Melt\" means Solid to liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Melt** = Solid to liquid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-solids-liquids-gases-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Evaporate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gas to liquid."
                    },
                    {
                              "id": "b",
                              "text": "Liquid to gas."
                    },
                    {
                              "id": "c",
                              "text": "Frozen water."
                    },
                    {
                              "id": "d",
                              "text": "Liquid water."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Evaporate\" means Liquid to gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Evaporate\" means Liquid to gas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Evaporate** = Liquid to gas.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
