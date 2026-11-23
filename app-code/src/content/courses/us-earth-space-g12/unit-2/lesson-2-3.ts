import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ess12-u2-lesson-2-3",
  code: "2-3",
  title: "Space Exploration",
  goal: "I CAN describe space exploration history and its contributions to science.",
  standards: ["HS-ESS1-6", "HS-ESS1-7"],
  vocabulary: [
    { term: "Satellite", definition: "Orbiting instrument." },
    { term: "Space probe", definition: "Uncrewed spacecraft." },
    { term: "ISS", definition: "Orbiting laboratory." },
    { term: "Remote sensing", definition: "Gathering data from orbit." },
    { term: "Human spaceflight", definition: "Crewed missions." },
  ],
  concepts: [
    {
      id: "ess12-u2-space-exploration",
      title: "Space exploration",
      skill: "Describe exploration history and scientific contributions.",
      lesson: {
        sections: [
          {
            heading: "History and technology",
            body: "Space exploration began with satellites (1957 Sputnik) → crewed missions (1969 Moon landing) → space stations (ISS) → robotic probes to other planets. Each era advanced technology: rockets, computers, materials, life support.",
          },
          {
            heading: "Scientific contributions",
            body: "Satellites enable weather forecasting, GPS, communications and Earth observation. Probes revealed planetary science (Mars rovers, Voyager's grand tour). Space research advances medicine, materials and our understanding of Earth's place in the cosmos.",
          },
        ],
        keyFormulas: [
          { name: "Satellite", statement: "Orbiting instrument." },
          { name: "Probe", statement: "Uncrewed spacecraft." },
          { name: "Remote sensing", statement: "Orbital data." },
        ],
        workedExample: {
          problem: "Name two everyday technologies that depend on space satellites.",
          solution: "GPS navigation and weather forecasting — both rely on satellite data.",
        },
      },
      questions: [
        {
          id: "ess12-u2-space-exploration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first artificial satellite was ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Apollo 11"
                    },
                    {
                              "id": "b",
                              "text": "Sputnik"
                    },
                    {
                              "id": "c",
                              "text": "Hubble"
                    },
                    {
                              "id": "d",
                              "text": "Voyager"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sputnik",
                              "statement": "First satellite, 1957."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sputnik was the first artificial satellite, launched by the USSR in 1957.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** Sputnik",
          "commonErrors": [
                    "Choosing a crewed mission."
          ]
},
        },
        {
          id: "ess12-u2-space-exploration-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a benefit of satellite remote sensing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only entertainment"
                    },
                    {
                              "id": "b",
                              "text": "weather forecasting and Earth monitoring"
                    },
                    {
                              "id": "c",
                              "text": "space tourism"
                    },
                    {
                              "id": "d",
                              "text": "nothing useful"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Remote sensing",
                              "statement": "Orbital Earth observation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Satellites provide weather data, climate monitoring, disaster tracking and resource mapping.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** weather forecasting and Earth monitoring",
          "commonErrors": [
                    "Underestimating satellite value."
          ]
},
        },
        {
          id: "ess12-u2-space-exploration-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Space exploration eras: satellites, crewed missions, stations, probes — how many types?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Types",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Count mission types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 types.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Missing probes."
          ]
},
        },
        {
          id: "ess12-u2-space-exploration-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain two ways space exploration has contributed to science or technology beyond space itself.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Contributions",
                              "statement": "Spinoff benefits."
                    },
                    {
                              "kind": "technique",
                              "name": "Examples",
                              "statement": "Real applications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Example 1: Satellite weather forecasting saves lives and enables agriculture. Example 2: Space research advanced materials (memory foam, insulated clothing) and medical imaging (CT/MRI derived from space tech).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Two valid contributions explained.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather forecasting + technology spinoffs.**",
          "commonErrors": [
                    "Listing space achievements only."
          ]
},
        },
      ],
    },
  ],
};
