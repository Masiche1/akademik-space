import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "spk-u4-lesson-4-2",
  code: "4-2",
  title: "Day and Night",
  goal: "I CAN explain why we have day and night.",
  standards: ["ELOF-PK.SCI.EARTH.2"],
  vocabulary: [
    { term: "Day", definition: "When the sun is shining on us." },
    { term: "Night", definition: "When it is dark and we cannot see the sun." },
    { term: "Rotate", definition: "Spin around an axis." },
    { term: "Axis", definition: "An imaginary line through the center of a spinning object." },
    { term: "Sunlight", definition: "Light from the sun." },
    { term: "Dark", definition: "Without light." },
    { term: "Spin", definition: "Turn around a center." },
  ],
  concepts: [
    {
      id: "spk-u4-day-night",
      title: "Day and night",
      skill: "Explain that Earth rotating causes day and night.",
      lesson: {
        sections: [
          {
            heading: "Why day and night?",
            body: "Earth **spins** (rotates) on its **axis**. When your part of Earth faces the **sun**, it is **day** (sunlight). When it faces away, it is **night** (dark).",
          },
          {
            heading: "The cycle",
            body: "This spin takes about **24 hours** — one full day. The sun appears to move across the sky, but really Earth is turning.",
          },
        ],
        keyFormulas: [
          { name: "Day/night", statement: "Earth rotates on axis; facing sun = day, away = night. Takes ~24 hours." },
        ],
        workedExample: {
          problem: "Why is it dark at night?",
          solution: "Because Earth has **rotated** so your part faces **away** from the sun — no sunlight = night.",
        },
      },
      questions: [
        {
          id: "spk-u4-day-night-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "We have day and night because Earth...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stops moving"
                    },
                    {
                              "id": "b",
                              "text": "rotates (spins) on its axis"
                    },
                    {
                              "id": "c",
                              "text": "gets bigger"
                    },
                    {
                              "id": "d",
                              "text": "has two moons"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Earth rotates on its axis, causing day/night."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Earth rotates on its axis, causing day/night.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rotates on axis**",
          "commonErrors": [
                    "Thinks sun moves instead."
          ]
},
        },
        {
          id: "spk-u4-day-night-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When your part of Earth faces the sun, it is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "night"
                    },
                    {
                              "id": "b",
                              "text": "day"
                    },
                    {
                              "id": "c",
                              "text": "noon only"
                    },
                    {
                              "id": "d",
                              "text": "evening"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Facing the sun = day (sunlight)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Facing the sun = day (sunlight).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**day**",
          "commonErrors": [
                    "Reverses day/night."
          ]
},
        },
        {
          id: "spk-u4-day-night-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain why it is dark at night using the idea of Earth spinning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Day/night",
                              "statement": "Earth rotates; away from sun = night."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains rotation causes night.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Earth spins; my side faces away from sun so no light = night.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong reason."
          ]
},
        },
        {
          id: "spk-u4-day-night-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "One full rotation of Earth takes about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 hour"
                    },
                    {
                              "id": "b",
                              "text": "24 hours"
                    },
                    {
                              "id": "c",
                              "text": "1 week"
                    },
                    {
                              "id": "d",
                              "text": "1 month"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "One rotation = about 24 hours = one day."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "One rotation = about 24 hours = one day.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**24 hours**",
          "commonErrors": [
                    "Wrong time period."
          ]
},
        },
        {
          id: "spk-u4-day-night-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw Earth with the sun. Show which side has day and which has night. Label the axis. Explain the rotation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Day/night",
                              "statement": "Draw Earth, label day/night sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Draws Earth + sun correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Labels day/night + axis.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sun side = day, opposite = night, axis through center.'**",
          "commonErrors": [
                    "Wrong drawing.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "spk-u4-day-night-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Day\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When it is dark and we cannot see the sun."
                    },
                    {
                              "id": "b",
                              "text": "When the sun is shining on us."
                    },
                    {
                              "id": "c",
                              "text": "Spin around an axis."
                    },
                    {
                              "id": "d",
                              "text": "An imaginary line through the center of a spinning object."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Day\" means When the sun is shining on us."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Day\" means When the sun is shining on us.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Day** = When the sun is shining on us.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u4-day-night-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Night\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Spin around an axis."
                    },
                    {
                              "id": "b",
                              "text": "An imaginary line through the center of a spinning object."
                    },
                    {
                              "id": "c",
                              "text": "Light from the sun."
                    },
                    {
                              "id": "d",
                              "text": "When it is dark and we cannot see the sun."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Night\" means When it is dark and we cannot see the sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Night\" means When it is dark and we cannot see the sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Night** = When it is dark and we cannot see the sun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u4-day-night-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rotate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An imaginary line through the center of a spinning object."
                    },
                    {
                              "id": "b",
                              "text": "Spin around an axis."
                    },
                    {
                              "id": "c",
                              "text": "Light from the sun."
                    },
                    {
                              "id": "d",
                              "text": "Without light."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rotate\" means Spin around an axis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rotate\" means Spin around an axis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rotate** = Spin around an axis.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
