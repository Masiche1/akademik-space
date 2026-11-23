import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "sci5-u4-lesson-4-3",
  code: "4-3",
  title: "Energy Pyramids",
  goal: "I CAN explain energy flow through trophic levels.",
  standards: ["LS2.B"],
  vocabulary: [
    { term: "Trophic level", definition: "Feeding level." },
    { term: "Energy pyramid", definition: "Energy at each level." },
    { term: "Producer", definition: "First level." },
    { term: "Primary consumer", definition: "Eats producers." },
    { term: "Secondary consumer", definition: "Eats primary." },
    { term: "Tertiary", definition: "Eats secondary." },
    { term: "10% rule", definition: "Only ~10% energy transfers." },
    { term: "Decomposer", definition: "Recycles." },
    { term: "Apex", definition: "Top predator." },
  ],
  concepts: [
    {
      id: "sci5-u4-energy-pyramids",
      title: "Energy pyramids",
      skill: "Explain energy flow through trophic levels.",
      lesson: {
        sections: [
          {
            heading: "Levels",
            body: "**Trophic levels**: producers (level 1) -> primary consumers (herbivores) -> secondary consumers (carnivores) -> tertiary consumers (top predators).",
          },
          {
            heading: "10% rule",
            body: "Only about **10%** of energy transfers to the next level — most is **lost** as heat. This is why there are **fewer** organisms at higher levels.",
          },
        ],
        keyFormulas: [
          { name: "Energy pyramid", statement: "Each level ~10% of below = energy decreases up." },
        ],
        workedExample: {
          problem: "Why are there fewer foxes than rabbits in an ecosystem?",
          solution: "**Only ~10% energy transfers; foxes (carnivore) need more energy than rabbits (herbivore) can provide.**",
        },
      },
      questions: [
        {
          id: "sci5-u4-energy-pyramids-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The '10% rule' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all energy transfers"
                    },
                    {
                              "id": "b",
                              "text": "only ~10% of energy moves to next level"
                    },
                    {
                              "id": "c",
                              "text": "no energy transfers"
                    },
                    {
                              "id": "d",
                              "text": "50% transfers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "~10% transfers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "~10% transfers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "only ~10% of energy moves to next level",
          "commonErrors": [
                    "Wrong percentage."
          ]
},
        },
        {
          id: "sci5-u4-energy-pyramids-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Primary consumers' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "plants"
                    },
                    {
                              "id": "b",
                              "text": "herbivores that eat producers"
                    },
                    {
                              "id": "c",
                              "text": "top predators"
                    },
                    {
                              "id": "d",
                              "text": "decomposers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Herbivores."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Herbivores.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "herbivores that eat producers",
          "commonErrors": [
                    "Confuses with other levels."
          ]
},
        },
        {
          id: "sci5-u4-energy-pyramids-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Construct an energy pyramid with 4 levels and explain why each level has less energy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Energy pyramid",
                              "statement": "Pyramid + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constructs pyramid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains 10% rule.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Producer -> Herbivore -> Carnivore -> Top predator; each level ~10% energy (rest lost as heat).**",
          "commonErrors": [
                    "Cannot construct.",
                    "No explanation."
          ]
},
        },
        {
          id: "sci5-u4-energy-pyramids-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why are top predators rare?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're lazy"
                    },
                    {
                              "id": "b",
                              "text": "less energy available at high trophic levels"
                    },
                    {
                              "id": "c",
                              "text": "they reproduce fast"
                    },
                    {
                              "id": "d",
                              "text": "they eat everything"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Less energy at high levels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Less energy at high levels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "less energy available at high trophic levels",
          "commonErrors": [
                    "Wrong reason."
          ]
},
        },
        {
          id: "sci5-u4-energy-pyramids-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the 10% rule and its effect on ecosystem populations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Energy pyramid",
                              "statement": "Rule + effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains rule.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains effect.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Only ~10% energy transfers up; fewer organisms can be supported at each higher level.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No effect."
          ]
},
        },
        {
          id: "sci5-u4-energy-pyramids-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trophic level\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy at each level."
                    },
                    {
                              "id": "b",
                              "text": "Feeding level."
                    },
                    {
                              "id": "c",
                              "text": "First level."
                    },
                    {
                              "id": "d",
                              "text": "Eats producers."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Trophic level\" means Feeding level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Trophic level\" means Feeding level.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Trophic level** = Feeding level.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u4-energy-pyramids-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy pyramid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "First level."
                    },
                    {
                              "id": "b",
                              "text": "Eats producers."
                    },
                    {
                              "id": "c",
                              "text": "Eats primary."
                    },
                    {
                              "id": "d",
                              "text": "Energy at each level."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy pyramid\" means Energy at each level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy pyramid\" means Energy at each level.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy pyramid** = Energy at each level.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u4-energy-pyramids-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Producer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Eats producers."
                    },
                    {
                              "id": "b",
                              "text": "First level."
                    },
                    {
                              "id": "c",
                              "text": "Eats primary."
                    },
                    {
                              "id": "d",
                              "text": "Eats secondary."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Producer\" means First level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Producer\" means First level.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Producer** = First level.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
