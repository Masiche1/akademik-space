import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "sci3-u4-lesson-4-2",
  code: "4-2",
  title: "Changing States",
  goal: "I CAN describe how matter changes from one state to another.",
  standards: ["PS1.A"],
  vocabulary: [
    { term: "Melt", definition: "Solid -> liquid." },
    { term: "Freeze", definition: "Liquid -> solid." },
    { term: "Evaporate", definition: "Liquid -> gas." },
    { term: "Condense", definition: "Gas -> liquid." },
    { term: "Heat", definition: "Adds energy." },
    { term: "Cool", definition: "Removes energy." },
    { term: "Boil", definition: "Liquid -> gas fast." },
    { term: "Melt", definition: "Solid -> liquid slow." },
  ],
  concepts: [
    {
      id: "sci3-u4-state-changes",
      title: "Changing states",
      skill: "Describe state changes: melting (solid->liquid), freezing (liquid->solid), evaporation (liquid->gas), condensation (gas->liquid).",
      lesson: {
        sections: [
          {
            heading: "Heat and cool",
            body: "**Heat** changes matter to higher energy states: melting (solid->liquid), boiling/evaporation (liquid->gas). **Cool** changes to lower states: condensation (gas->liquid), freezing (liquid->solid).",
          },
          {
            heading: "Water cycle example",
            body: "Water **evaporates** (liquid->gas) from ocean, **condenses** (gas->liquid) into clouds, **precipitates** (falls as rain), **evaporates** again — the water cycle!",
          },
        ],
        keyFormulas: [
          { name: "State changes", statement: "Melt (S->L) + Freeze (L->S) + Evaporate (L->G) + Condense (G->L) = state changes." },
        ],
        workedExample: {
          problem: "What happens when ice melts?",
          solution: "Ice **melts** — it changes from **solid to liquid** (water).",
        },
      },
      questions: [
        {
          id: "sci3-u4-state-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Melting is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "liquid -> solid"
                    },
                    {
                              "id": "b",
                              "text": "solid -> liquid"
                    },
                    {
                              "id": "c",
                              "text": "liquid -> gas"
                    },
                    {
                              "id": "d",
                              "text": "gas -> liquid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Melt = solid -> liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Melt = solid -> liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "solid -> liquid",
          "commonErrors": [
                    "Thinks melting is freezing."
          ]
},
        },
        {
          id: "sci3-u4-state-changes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evaporation is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "gas -> liquid"
                    },
                    {
                              "id": "b",
                              "text": "liquid -> gas"
                    },
                    {
                              "id": "c",
                              "text": "solid -> liquid"
                    },
                    {
                              "id": "d",
                              "text": "liquid -> solid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Evaporate = liquid -> gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaporate = liquid -> gas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "liquid -> gas",
          "commonErrors": [
                    "Thinks evaporation is condensation."
          ]
},
        },
        {
          id: "sci3-u4-state-changes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two ways matter changes state and give an example for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "State changes",
                              "statement": "2 changes + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 changes + examples.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Melting: ice->water. Freezing: water->ice.'**",
          "commonErrors": [
                    "Cannot name changes.",
                    "No examples."
          ]
},
        },
        {
          id: "sci3-u4-state-changes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Condensation is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "liquid -> gas"
                    },
                    {
                              "id": "b",
                              "text": "gas -> liquid"
                    },
                    {
                              "id": "c",
                              "text": "solid -> liquid"
                    },
                    {
                              "id": "d",
                              "text": "liquid -> solid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Condense = gas -> liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Condense = gas -> liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "gas -> liquid",
          "commonErrors": [
                    "Thinks condensation is evaporation."
          ]
},
        },
        {
          id: "sci3-u4-state-changes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the water cycle using evaporation, condensation, and precipitation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "State changes",
                              "statement": "Evaporate+condense+precipitate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes evaporation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes condensation + precipitation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Water evaporates from ocean -> condenses into clouds -> falls as rain -> evaporates again.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci3-u4-state-changes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Melt\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid -> solid."
                    },
                    {
                              "id": "b",
                              "text": "Solid -> liquid."
                    },
                    {
                              "id": "c",
                              "text": "Liquid -> gas."
                    },
                    {
                              "id": "d",
                              "text": "Gas -> liquid."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Melt\" means Solid -> liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Melt\" means Solid -> liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Melt** = Solid -> liquid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u4-state-changes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Freeze\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid -> gas."
                    },
                    {
                              "id": "b",
                              "text": "Gas -> liquid."
                    },
                    {
                              "id": "c",
                              "text": "Adds energy."
                    },
                    {
                              "id": "d",
                              "text": "Liquid -> solid."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Freeze\" means Liquid -> solid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Freeze\" means Liquid -> solid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Freeze** = Liquid -> solid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u4-state-changes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Evaporate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gas -> liquid."
                    },
                    {
                              "id": "b",
                              "text": "Liquid -> gas."
                    },
                    {
                              "id": "c",
                              "text": "Adds energy."
                    },
                    {
                              "id": "d",
                              "text": "Removes energy."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Evaporate\" means Liquid -> gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Evaporate\" means Liquid -> gas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Evaporate** = Liquid -> gas.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
