import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "sci6-u5-lesson-5-4",
  code: "5-4",
  title: "Human Impact on Ecosystems",
  goal: "I CAN explain how humans affect ecosystems.",
  standards: ["LS2.C"],
  vocabulary: [
    { term: "Human impact", definition: "Effect on nature." },
    { term: "Pollution", definition: "Contamination." },
    { term: "Habitat loss", definition: "Losing homes." },
    { term: "Climate change", definition: "Global warming." },
    { term: "Overfishing", definition: "Too much fishing." },
    { term: "Deforestation", definition: "Cutting forests." },
    { term: "Conservation", definition: "Protecting nature." },
    { term: "Sustainability", definition: "Long-term balance." },
  ],
  concepts: [
    {
      id: "sci6-u5-human-impact-ecosystems",
      title: "Human impact on ecosystems",
      skill: "Explain how human activities affect ecosystems and ways to protect them.",
      lesson: {
        sections: [
          {
            heading: "Negative impacts",
            body: "**Pollution**, **habitat loss**, **climate change**, **overfishing**, and **deforestation** harm ecosystems.",
          },
          {
            heading: "Positive actions",
            body: "**Conservation**, **sustainability**, **recycling**, and **protected areas** help restore balance.",
          },
        ],
        keyFormulas: [
          { name: "Impact", statement: "Pollution + habitat loss + climate = negative; Conservation + sustainability = positive." },
        ],
        workedExample: {
          problem: "How does deforestation affect an ecosystem?",
          solution: "**Destroys habitat, reduces biodiversity, increases soil erosion, and releases carbon dioxide contributing to climate change.**",
        },
      },
      questions: [
        {
          id: "sci6-u5-human-impact-ecosystems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Habitat loss' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "animals moving"
                    },
                    {
                              "id": "b",
                              "text": "destruction of natural homes"
                    },
                    {
                              "id": "c",
                              "text": "new animals"
                    },
                    {
                              "id": "d",
                              "text": "only forests"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Destruction of homes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Destruction of homes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "destruction of natural homes",
          "commonErrors": [
                    "Confuses with migration."
          ]
},
        },
        {
          id: "sci6-u5-human-impact-ecosystems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Conservation' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "destroying nature"
                    },
                    {
                              "id": "b",
                              "text": "protecting and preserving ecosystems"
                    },
                    {
                              "id": "c",
                              "text": "only farming"
                    },
                    {
                              "id": "d",
                              "text": "only pollution"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Protecting ecosystems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protecting ecosystems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "protecting and preserving ecosystems",
          "commonErrors": [
                    "Confuses with destruction."
          ]
},
        },
        {
          id: "sci6-u5-human-impact-ecosystems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe two ways humans negatively impact ecosystems and two ways to protect them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Impact",
                              "statement": "Two negative + two positive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes impacts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Negative: pollution, deforestation; Positive: conservation, recycling/sustainability.**",
          "commonErrors": [
                    "Fewer than two each.",
                    "Wrong examples."
          ]
},
        },
        {
          id: "sci6-u5-human-impact-ecosystems-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Sustainability' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "using everything now"
                    },
                    {
                              "id": "b",
                              "text": "meeting needs without harming future"
                    },
                    {
                              "id": "c",
                              "text": "only growth"
                    },
                    {
                              "id": "d",
                              "text": "only profit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Future balance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Future balance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "meeting needs without harming future",
          "commonErrors": [
                    "Confuses with consumption."
          ]
},
        },
        {
          id: "sci6-u5-human-impact-ecosystems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how climate change affects ecosystems and what humans can do to reduce their impact.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Impact",
                              "statement": "Effects + solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains effects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Suggests solutions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Effects: habitat loss, species migration, extreme weather; Solutions: reduce emissions, conserve energy, protect habitats.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No solutions."
          ]
},
        },
        {
          id: "sci6-u5-human-impact-ecosystems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Human impact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Contamination."
                    },
                    {
                              "id": "b",
                              "text": "Effect on nature."
                    },
                    {
                              "id": "c",
                              "text": "Losing homes."
                    },
                    {
                              "id": "d",
                              "text": "Global warming."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Human impact\" means Effect on nature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Human impact\" means Effect on nature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Human impact** = Effect on nature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u5-human-impact-ecosystems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pollution\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Losing homes."
                    },
                    {
                              "id": "b",
                              "text": "Global warming."
                    },
                    {
                              "id": "c",
                              "text": "Too much fishing."
                    },
                    {
                              "id": "d",
                              "text": "Contamination."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pollution\" means Contamination."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pollution\" means Contamination.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pollution** = Contamination.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u5-human-impact-ecosystems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Habitat loss\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Global warming."
                    },
                    {
                              "id": "b",
                              "text": "Losing homes."
                    },
                    {
                              "id": "c",
                              "text": "Too much fishing."
                    },
                    {
                              "id": "d",
                              "text": "Cutting forests."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Habitat loss\" means Losing homes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Habitat loss\" means Losing homes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Habitat loss** = Losing homes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
