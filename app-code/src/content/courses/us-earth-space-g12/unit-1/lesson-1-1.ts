import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ess12-u1-lesson-1-1",
  code: "1-1",
  title: "Earth's Interconnected Systems",
  goal: "I CAN explain how Earth's systems interact and respond to change.",
  standards: ["HS-ESS2-1", "HS-ESS2-2", "HS-ESS2-3", "HS-ESS2-4", "HS-ESS2-5", "HS-ESS2-6"],
  vocabulary: [
    { term: "Geosphere", definition: "Solid Earth: rocks, tectonics." },
    { term: "Hydrosphere", definition: "All water." },
    { term: "Atmosphere", definition: "Gas envelope." },
    { term: "Biosphere", definition: "All living things." },
    { term: "Feedback", definition: "Change triggers response." },
  ],
  concepts: [
    {
      id: "ess12-u1-earth-systems",
      title: "Earth's systems",
      skill: "Explain interactions between Earth's systems.",
      lesson: {
        sections: [
          {
            heading: "Four interconnected spheres",
            body: "Geosphere (solid Earth), hydrosphere (water), atmosphere (air), biosphere (life) constantly interact: the atmosphere and hydrosphere drive weathering; the biosphere depends on all others; the geosphere provides nutrients and land.",
          },
          {
            heading: "Feedback and change",
            body: "Systems respond to change through feedback: melting ice reduces albedo (reflectivity), causing more warming — a positive feedback. Volcanoes inject aerosols that cool climate temporarily — a negative feedback.",
          },
        ],
        keyFormulas: [
          { name: "Geosphere", statement: "Solid Earth." },
          { name: "Hydrosphere", statement: "Water." },
          { name: "Atmosphere", statement: "Air." },
          { name: "Biosphere", statement: "Life." },
        ],
        workedExample: {
          problem: "How does the hydrosphere affect the geosphere?",
          solution: "Water drives weathering and erosion of rock, and groundwater dissolves minerals — reshaping the geosphere over time.",
        },
      },
      questions: [
        {
          id: "ess12-u1-earth-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The hydrosphere includes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only oceans"
                    },
                    {
                              "id": "b",
                              "text": "all water on Earth"
                    },
                    {
                              "id": "c",
                              "text": "only rivers"
                    },
                    {
                              "id": "d",
                              "text": "water vapor only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hydrosphere",
                              "statement": "All Earth's water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The hydrosphere includes all water: oceans, lakes, rivers, groundwater, ice and vapor.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** all water on Earth",
          "commonErrors": [
                    "Thinking only liquid oceans."
          ]
},
        },
        {
          id: "ess12-u1-earth-systems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Melting ice reducing albedo is an example of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "negative feedback"
                    },
                    {
                              "id": "b",
                              "text": "positive feedback"
                    },
                    {
                              "id": "c",
                              "text": "no feedback"
                    },
                    {
                              "id": "d",
                              "text": "equilibrium"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Albedo feedback",
                              "statement": "Less ice → less reflection → more warming."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Less reflective ice → more absorbed sunlight → more warming — amplifies change = positive feedback.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** positive feedback",
          "commonErrors": [
                    "Choosing negative feedback."
          ]
},
        },
        {
          id: "ess12-u1-earth-systems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth has 4 major interacting systems (spheres). How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Systems",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Geosphere, hydrosphere, atmosphere, biosphere."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 systems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Missing the biosphere."
          ]
},
        },
        {
          id: "ess12-u1-earth-systems-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain one way human activity affects two different Earth systems simultaneously.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Interaction",
                              "statement": "Multiple system effects."
                    },
                    {
                              "kind": "technique",
                              "name": "Example",
                              "statement": "Real scenario."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Example: burning fossil fuels releases CO2 (atmosphere) which absorbs heat → warming → ocean absorbs CO2 → acidification (hydrosphere). Two systems affected through one activity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly identifies effects on two systems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**CO2 → atmosphere warming + ocean acidification.**",
          "commonErrors": [
                    "Describing only one system."
          ]
},
        },
      ],
    },
  ],
};
