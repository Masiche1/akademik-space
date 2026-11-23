import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "spk-u8-lesson-8-1",
  code: "8-1",
  title: "Review: Observing and Weather",
  goal: "I CAN observe the world and describe weather and seasons.",
  standards: ["ELOF-PK.SCI.REVIEW.1"],
  vocabulary: [
    { term: "Sense", definition: "Way we notice." },
    { term: "Observe", definition: "Look closely." },
    { term: "Weather", definition: "Current conditions." },
    { term: "Season", definition: "Part of year." },
    { term: "Sort", definition: "Group alike things." },
    { term: "Compare", definition: "Find same/different." },
    { term: "Describe", definition: "Say what something is like." },
  ],
  concepts: [
    {
      id: "spk-u8-review-observing-weather",
      title: "Observing and weather review",
      skill: "Combine senses, observation, sorting, comparing and weather.",
      lesson: {
        sections: [
          {
            heading: "Observe + weather",
            body: "Observing uses senses, details, sorting, comparing and describing. Weather is current conditions; seasons are the four parts of the year. Animals adapt to seasonal weather.",
          },
          {
            heading: "Put it together",
            body: "Observe the weather, describe it, sort objects by properties, and compare two objects.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Observing skills + weather + seasons = scientific awareness." },
        ],
        workedExample: {
          problem: "Observe today's weather. Sort two objects. Compare them.",
          solution: "Weather: describe conditions; Sort: group by property; Compare: same + different.",
        },
      },
      questions: [
        {
          id: "spk-u8-review-observing-weather-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Observing the world uses which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only guessing"
                    },
                    {
                              "id": "b",
                              "text": "senses + details + sorting + comparing + describing"
                    },
                    {
                              "id": "c",
                              "text": "only counting"
                    },
                    {
                              "id": "d",
                              "text": "only drawing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All observing skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All observing skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**All observing skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "spk-u8-review-observing-weather-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which season is coldest?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "summer"
                    },
                    {
                              "id": "b",
                              "text": "winter"
                    },
                    {
                              "id": "c",
                              "text": "spring"
                    },
                    {
                              "id": "d",
                              "text": "fall"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Winter is coldest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Winter is coldest.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**winter**",
          "commonErrors": [
                    "Picks wrong season."
          ]
},
        },
        {
          id: "spk-u8-review-observing-weather-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe today's weather using two words. Then sort two objects by a property and compare them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Observe + weather",
                              "statement": "Weather + sort + compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes weather.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sorts + compares objects.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sunny and warm; sorted blocks by color; both blocks but different colors.'**",
          "commonErrors": [
                    "Only does weather.",
                    "Cannot sort/compare."
          ]
},
        },
        {
          id: "spk-u8-review-observing-weather-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Animals adapt to seasons by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "changing planets"
                    },
                    {
                              "id": "b",
                              "text": "migrating, hibernating or changing fur"
                    },
                    {
                              "id": "c",
                              "text": "stopping breathing"
                    },
                    {
                              "id": "d",
                              "text": "becoming plants"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Animals adapt via migration, hibernation, fur changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Animals adapt via migration, hibernation, fur changes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**migrate/hibernate/fur**",
          "commonErrors": [
                    "Thinks animals don't adapt."
          ]
},
        },
        {
          id: "spk-u8-review-observing-weather-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Keep a 3-day weather journal: each day describe weather, season, and observe one object (sort + compare). What did you notice?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Observe + weather",
                              "statement": "Daily journal + observation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Records 3 days.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Notes observations.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Day1 sunny, Day2 cloudy, Day3 rainy; noticed leaves are smooth.'**",
          "commonErrors": [
                    "Cannot record.",
                    "No observations."
          ]
},
        },
        {
          id: "spk-u8-review-observing-weather-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sense\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Look closely."
                    },
                    {
                              "id": "b",
                              "text": "Way we notice."
                    },
                    {
                              "id": "c",
                              "text": "Current conditions."
                    },
                    {
                              "id": "d",
                              "text": "Part of year."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sense\" means Way we notice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sense\" means Way we notice.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sense** = Way we notice.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u8-review-observing-weather-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Observe\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Current conditions."
                    },
                    {
                              "id": "b",
                              "text": "Part of year."
                    },
                    {
                              "id": "c",
                              "text": "Group alike things."
                    },
                    {
                              "id": "d",
                              "text": "Look closely."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Observe\" means Look closely."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Observe\" means Look closely.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Observe** = Look closely.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u8-review-observing-weather-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of year."
                    },
                    {
                              "id": "b",
                              "text": "Current conditions."
                    },
                    {
                              "id": "c",
                              "text": "Group alike things."
                    },
                    {
                              "id": "d",
                              "text": "Find same/different."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Current conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Current conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Current conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
