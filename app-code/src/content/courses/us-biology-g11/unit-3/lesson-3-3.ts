import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "bio11-u3-lesson-3-3",
  code: "3-3",
  title: "Ecosystems and Ecology",
  goal: "I CAN analyze ecosystem dynamics, energy flow and human impact.",
  standards: ["HS-LS2-1", "HS-LS2-2", "HS-LS2-3", "HS-LS2-4", "HS-LS2-5", "HS-LS2-6", "HS-LS2-7"],
  vocabulary: [
    { term: "Population", definition: "Same species in area." },
    { term: "Community", definition: "All populations together." },
    { term: "Ecosystem", definition: "Community + environment." },
    { term: "Carrying capacity", definition: "Max sustainable population." },
    { term: "Keystone species", definition: "Disproportionate impact." },
  ],
  concepts: [
    {
      id: "bio11-u3-ecosystems-ecology",
      title: "Ecosystems",
      skill: "Analyze ecosystem dynamics and human impact.",
      lesson: {
        sections: [
          {
            heading: "Levels of organization",
            body: "Population (one species) → community (all species) → ecosystem (community + abiotic environment). Energy flows one way through trophic levels; matter cycles (carbon, nitrogen, water).",
          },
          {
            heading: "Human impact",
            body: "Humans affect ecosystems through habitat destruction, pollution, climate change and resource overuse. Keystone species loss can collapse ecosystems. Conservation and sustainable practices aim to reduce impact.",
          },
        ],
        keyFormulas: [
          { name: "Levels", statement: "Population → community → ecosystem." },
          { name: "Energy", statement: "Flows one way." },
          { name: "Matter", statement: "Cycles." },
        ],
        workedExample: {
          problem: "Why are sea otters called a keystone species?",
          solution: "They control sea urchin populations; without otters, urchins overgraze kelp forests and the whole ecosystem collapses.",
        },
      },
      questions: [
        {
          id: "bio11-u3-ecosystems-ecology-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An ecosystem includes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only animals"
                    },
                    {
                              "id": "b",
                              "text": "community + abiotic environment"
                    },
                    {
                              "id": "c",
                              "text": "only plants"
                    },
                    {
                              "id": "d",
                              "text": "a single species"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ecosystem",
                              "statement": "Community + environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An ecosystem includes the biological community plus abiotic factors like water, soil and sunlight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** community + abiotic environment",
          "commonErrors": [
                    "Thinking it's just living things."
          ]
},
        },
        {
          id: "bio11-u3-ecosystems-ecology-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Energy flow through an ecosystem is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cyclical"
                    },
                    {
                              "id": "b",
                              "text": "one direction"
                    },
                    {
                              "id": "c",
                              "text": "reversed"
                    },
                    {
                              "id": "d",
                              "text": "random"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Energy flow",
                              "statement": "Flows one way, ~10% per level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Energy flows one way from producers to consumers, decreasing at each trophic level.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** one direction",
          "commonErrors": [
                    "Confusing with matter cycling."
          ]
},
        },
        {
          id: "bio11-u3-ecosystems-ecology-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "An ecosystem has 5 trophic levels. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Levels",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Count trophic levels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 levels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Counting species instead."
          ]
},
        },
        {
          id: "bio11-u3-ecosystems-ecology-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between how energy and matter move through an ecosystem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Energy",
                              "statement": "Flows one way, lost as heat."
                    },
                    {
                              "kind": "definition",
                              "name": "Matter",
                              "statement": "Cycles and is reused."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Energy flows one direction: sun → producers → consumers → lost as heat at each level. Matter (carbon, nitrogen, water) cycles: it's reused through decomposition and biogeochemical cycles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both flows correctly contrasted.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy flows; matter cycles.**",
          "commonErrors": [
                    "Saying matter is also one-way."
          ]
},
        },
      ],
    },
  ],
};
