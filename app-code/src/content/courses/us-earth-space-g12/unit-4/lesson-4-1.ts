import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ess12-u4-lesson-4-1",
  code: "4-1",
  title: "Earth Observation from Space",
  goal: "I CAN explain how satellites monitor Earth's systems.",
  standards: ["HS-ESS1-6", "HS-ESS2-4", "HS-ESS2-5"],
  vocabulary: [
    { term: "Remote sensing", definition: "Collecting data without contact." },
    { term: "Satellite imagery", definition: "Pictures from orbit." },
    { term: "Weather satellite", definition: "Tracks storms/climate." },
    { term: "Earth observation", definition: "Monitoring systems." },
    { term: "Data", definition: "Information for analysis." },
  ],
  concepts: [
    {
      id: "ess12-u4-earth-observation",
      title: "Earth observation",
      skill: "Explain satellite monitoring of Earth systems.",
      lesson: {
        sections: [
          {
            heading: "How it works",
            body: "Satellites carry sensors that measure reflected/emitted radiation — detecting temperature, moisture, vegetation, ice cover and atmospheric gases. Different wavelengths reveal different features.",
          },
          {
            heading: "Applications",
            body: "Weather forecasting (storm tracking), climate monitoring (ice loss, sea level), agriculture (crop health), disaster response (floods, fires), and environmental protection (deforestation, pollution).",
          },
        ],
        keyFormulas: [
          { name: "Remote sensing", statement: "Non-contact data." },
          { name: "Imagery", statement: "Orbital pictures." },
          { name: "Wavelengths", statement: "Different features." },
        ],
        workedExample: {
          problem: "How do satellites detect deforestation?",
          solution: "Satellite images show forest cover changes over time — comparing images reveals where trees have been cleared.",
        },
      },
      questions: [
        {
          id: "ess12-u4-earth-observation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Remote sensing means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "touching the object"
                    },
                    {
                              "id": "b",
                              "text": "collecting data without physical contact"
                    },
                    {
                              "id": "c",
                              "text": "only using cameras on ground"
                    },
                    {
                              "id": "d",
                              "text": "guessing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Remote sensing",
                              "statement": "Non-contact data collection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Remote sensing collects data about Earth without physically touching it — via satellites.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** collecting data without physical contact",
          "commonErrors": [
                    "Thinking it requires contact."
          ]
},
        },
        {
          id: "ess12-u4-earth-observation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Weather satellites primarily help with ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "space travel"
                    },
                    {
                              "id": "b",
                              "text": "storm tracking and forecasting"
                    },
                    {
                              "id": "c",
                              "text": "only photography"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Weather satellite",
                              "statement": "Tracks storms and climate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weather satellites track storms, measure temperatures and humidity, enabling forecasts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** storm tracking and forecasting",
          "commonErrors": [
                    "Underestimating their role."
          ]
},
        },
        {
          id: "ess12-u4-earth-observation-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Satellites can detect features using different wavelengths. How many types of data mentioned? (temp, moisture, vegetation, ice, gases = 5)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Types",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Count detectable features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 types.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Counting only one type."
          ]
},
        },
        {
          id: "ess12-u4-earth-observation-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how satellite remote sensing helps respond to a natural disaster like a hurricane.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Application",
                              "statement": "Disaster monitoring."
                    },
                    {
                              "kind": "technique",
                              "name": "Example",
                              "statement": "Hurricane tracking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Satellites track the hurricane's path and intensity in real time, providing data for forecasts and evacuation warnings. Before/after images assess damage extent and guide relief efforts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains tracking + damage assessment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Real-time tracking + damage assessment.**",
          "commonErrors": [
                    "Saying satellites prevent hurricanes."
          ]
},
        },
      ],
    },
  ],
};
