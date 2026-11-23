import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "spk-u1-lesson-1-1",
  code: "1-1",
  title: "The Five Senses",
  goal: "I CAN name and use my five senses to explore.",
  standards: ["ELOF-PK.SCI.SENSE.1"],
  vocabulary: [
    { term: "Sense", definition: "A way we notice the world." },
    { term: "See", definition: "Use eyes to notice light and color." },
    { term: "Hear", definition: "Use ears to notice sounds." },
    { term: "Touch", definition: "Use skin to notice feel and temperature." },
    { term: "Smell", definition: "Use nose to notice odors." },
    { term: "Taste", definition: "Use tongue to notice flavors." },
  ],
  concepts: [
    {
      id: "spk-u1-five-senses",
      title: "The five senses",
      skill: "Name and use the five senses to explore the world.",
      lesson: {
        sections: [
          {
            heading: "Our senses",
            body: "We have **five senses**: sight (eyes), hearing (ears), touch (skin), smell (nose) and taste (tongue). Each sense lets us notice different things.",
          },
          {
            heading: "Use them all",
            body: "When you explore, use **all your senses**: What do you see? Hear? Feel? Smell? Taste? Scientists use their senses to observe the world.",
          },
        ],
        keyFormulas: [
          { name: "Five senses", statement: "Sight, hearing, touch, smell, taste — each notices something different." },
        ],
        workedExample: {
          problem: "You smell cookies baking. Which sense are you using?",
          solution: "You are using your **nose** — the sense of **smell**.",
        },
      },
      questions: [
        {
          id: "spk-u1-five-senses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense do you use to see colors?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ears"
                    },
                    {
                              "id": "b",
                              "text": "eyes"
                    },
                    {
                              "id": "c",
                              "text": "nose"
                    },
                    {
                              "id": "d",
                              "text": "tongue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Eyes give us sight — we see colors and shapes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Eyes give us sight — we see colors and shapes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Eyes (sight)**",
          "commonErrors": [
                    "Confuses sight with another sense."
          ]
},
        },
        {
          id: "spk-u1-five-senses-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sense do you use to hear music?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eyes"
                    },
                    {
                              "id": "b",
                              "text": "ears"
                    },
                    {
                              "id": "c",
                              "text": "skin"
                    },
                    {
                              "id": "d",
                              "text": "tongue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ears give us hearing — we hear sounds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ears give us hearing — we hear sounds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ears (hearing)**",
          "commonErrors": [
                    "Confuses hearing with sight."
          ]
},
        },
        {
          id: "spk-u1-five-senses-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two things you can notice with your sense of touch.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Touch",
                              "statement": "Feel texture, temperature, shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 touchable properties.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'soft/hard, hot/cold, rough/smooth'**",
          "commonErrors": [
                    "Cannot name touchable things.",
                    "Names non-touchable."
          ]
},
        },
        {
          id: "spk-u1-five-senses-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sense tells you if milk is sour?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eyes"
                    },
                    {
                              "id": "b",
                              "text": "ears"
                    },
                    {
                              "id": "c",
                              "text": "nose/tongue"
                    },
                    {
                              "id": "d",
                              "text": "skin"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Smell (nose) and taste (tongue) tell you if milk is sour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Smell (nose) and taste (tongue) tell you if milk is sour.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nose/tongue**",
          "commonErrors": [
                    "Thinks only eyes can tell."
          ]
},
        },
        {
          id: "spk-u1-five-senses-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explore an object (a toy, a rock, a leaf). Describe what you notice with at least three senses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Use senses",
                              "statement": "Observe with sight, touch, smell, etc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observes with 3+ senses.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Describes what each sense notices.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I see it's red, feel it's rough, smell nothing.'**",
          "commonErrors": [
                    "Uses only 1 sense.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "spk-u1-five-senses-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sense\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use eyes to notice light and color."
                    },
                    {
                              "id": "b",
                              "text": "A way we notice the world."
                    },
                    {
                              "id": "c",
                              "text": "Use ears to notice sounds."
                    },
                    {
                              "id": "d",
                              "text": "Use skin to notice feel and temperature."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sense\" means A way we notice the world."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sense\" means A way we notice the world.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sense** = A way we notice the world.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-five-senses-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"See\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use ears to notice sounds."
                    },
                    {
                              "id": "b",
                              "text": "Use skin to notice feel and temperature."
                    },
                    {
                              "id": "c",
                              "text": "Use nose to notice odors."
                    },
                    {
                              "id": "d",
                              "text": "Use eyes to notice light and color."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"See\" means Use eyes to notice light and color."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"See\" means Use eyes to notice light and color.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**See** = Use eyes to notice light and color.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-five-senses-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hear\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use skin to notice feel and temperature."
                    },
                    {
                              "id": "b",
                              "text": "Use ears to notice sounds."
                    },
                    {
                              "id": "c",
                              "text": "Use nose to notice odors."
                    },
                    {
                              "id": "d",
                              "text": "Use tongue to notice flavors."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hear\" means Use ears to notice sounds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hear\" means Use ears to notice sounds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hear** = Use ears to notice sounds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
