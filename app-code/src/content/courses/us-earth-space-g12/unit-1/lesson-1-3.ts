import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ess12-u1-lesson-1-3",
  code: "1-3",
  title: "Natural Hazards and Resources",
  goal: "I CAN analyze natural hazards and evaluate resource management.",
  standards: ["HS-ESS3-1", "HS-ESS3-2", "HS-ESS3-3", "HS-ESS3-4", "HS-ESS3-5", "HS-ESS3-6"],
  vocabulary: [
    { term: "Natural hazard", definition: "Natural event threatening humans." },
    { term: "Risk", definition: "Hazard × exposure × vulnerability." },
    { term: "Renewable resource", definition: "Replenishes naturally." },
    { term: "Nonrenewable", definition: "Finite supply." },
    { term: "Sustainability", definition: "Meeting needs without compromising future." },
  ],
  concepts: [
    {
      id: "ess12-u1-natural-hazards",
      title: "Hazards and resources",
      skill: "Analyze hazards and resource sustainability.",
      lesson: {
        sections: [
          {
            heading: "Natural hazards",
            body: "Hazards (earthquakes, hurricanes, floods, wildfires) become disasters when they intersect human populations. Risk depends on hazard magnitude, exposure (people/assets in path) and vulnerability (ability to withstand).",
          },
          {
            heading: "Resources and sustainability",
            body: "Renewable resources (solar, wind, water, forests) replenish; nonrenewable (fossil fuels, minerals) are finite. Sustainability means meeting present needs without compromising future generations — requires conservation, efficiency and renewable transition.",
          },
        ],
        keyFormulas: [
          { name: "Hazard", statement: "Natural threat." },
          { name: "Risk", statement: "Hazard × exposure × vulnerability." },
          { name: "Renewable", statement: "Replenishes." },
          { name: "Nonrenewable", statement: "Finite." },
        ],
        workedExample: {
          problem: "Why is an earthquake in an uninhabited area not a disaster?",
          solution: "Low exposure — few people/assets at risk, so hazard doesn't become a disaster despite same magnitude.",
        },
      },
      questions: [
        {
          id: "ess12-u1-natural-hazards-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A natural hazard becomes a disaster when ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it always happens"
                    },
                    {
                              "id": "b",
                              "text": "it affects human populations"
                    },
                    {
                              "id": "c",
                              "text": "it's predicted"
                    },
                    {
                              "id": "d",
                              "text": "it's small"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Disaster",
                              "statement": "Hazard + human impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A hazard becomes a disaster when it impacts people, property or infrastructure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** it affects human populations",
          "commonErrors": [
                    "Thinking all hazards are disasters."
          ]
},
        },
        {
          id: "ess12-u1-natural-hazards-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a renewable resource?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "coal"
                    },
                    {
                              "id": "b",
                              "text": "natural gas"
                    },
                    {
                              "id": "c",
                              "text": "solar energy"
                    },
                    {
                              "id": "d",
                              "text": "petroleum"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Renewable",
                              "statement": "Replenishes naturally."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solar energy is renewable — the sun provides ongoing energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** solar energy",
          "commonErrors": [
                    "Choosing a fossil fuel."
          ]
},
        },
        {
          id: "ess12-u1-natural-hazards-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Risk = hazard × exposure × vulnerability — how many factors?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Factors",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Risk",
                              "statement": "Three multiplicative factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 factors.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Missing vulnerability."
          ]
},
        },
        {
          id: "ess12-u1-natural-hazards-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between a natural hazard and a natural disaster, using an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hazard",
                              "statement": "Natural event itself."
                    },
                    {
                              "kind": "definition",
                              "name": "Disaster",
                              "statement": "Hazard + human impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A hazard is the natural event (earthquake, hurricane). A disaster occurs when the hazard impacts human populations — e.g., a magnitude 7 earthquake in a remote desert is a hazard but not a disaster; the same quake in a city is a disaster.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly distinguishes with example.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hazard = event; disaster = event + human impact.**",
          "commonErrors": [
                    "Using the terms interchangeably."
          ]
},
        },
      ],
    },
  ],
};
