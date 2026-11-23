import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ess12-u1-lesson-1-2",
  code: "1-2",
  title: "Weather and Climate",
  goal: "I CAN distinguish weather from climate and explain climate drivers.",
  standards: ["HS-ESS2-4", "HS-ESS2-5", "HS-ESS2-6"],
  vocabulary: [
    { term: "Weather", definition: "Short-term atmospheric conditions." },
    { term: "Climate", definition: "Long-term patterns." },
    { term: "Greenhouse gases", definition: "Trap outgoing heat." },
    { term: "Albedo", definition: "Surface reflectivity." },
    { term: "Climate model", definition: "Prediction tool." },
  ],
  concepts: [
    {
      id: "ess12-u1-weather-climate",
      title: "Weather and climate",
      skill: "Distinguish weather/climate and explain drivers.",
      lesson: {
        sections: [
          {
            heading: "Weather vs climate",
            body: "Weather is short-term (day-to-day: today's temperature, storm). Climate is long-term average patterns (decades+: regional averages). One hot day isn't climate change; decades of warming trend is.",
          },
          {
            heading: "Climate drivers",
            body: "Climate is driven by solar input, greenhouse gases, albedo and orbital factors. Human burning of fossil fuels increases CO2 → enhanced greenhouse effect → global warming. Climate models project future changes using these factors.",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "Short-term." },
          { name: "Climate", statement: "Long-term." },
          { name: "CO2", statement: "Greenhouse gas." },
          { name: "Albedo", statement: "Reflectivity." },
        ],
        workedExample: {
          problem: "Is a single record-hot summer proof of climate change?",
          solution: "No — weather is variable. Climate change is shown by long-term trends over decades, not single events.",
        },
      },
      questions: [
        {
          id: "ess12-u1-weather-climate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Climate refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "today's weather"
                    },
                    {
                              "id": "b",
                              "text": "long-term atmospheric patterns"
                    },
                    {
                              "id": "c",
                              "text": "a single storm"
                    },
                    {
                              "id": "d",
                              "text": "hourly temperature"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Climate",
                              "statement": "Long-term average patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Climate is long-term average weather patterns over decades or more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** long-term atmospheric patterns",
          "commonErrors": [
                    "Confusing with weather."
          ]
},
        },
        {
          id: "ess12-u1-weather-climate-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which gas is the main driver of enhanced greenhouse effect from human activity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "oxygen"
                    },
                    {
                              "id": "b",
                              "text": "nitrogen"
                    },
                    {
                              "id": "c",
                              "text": "carbon dioxide"
                    },
                    {
                              "id": "d",
                              "text": "hydrogen"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CO2",
                              "statement": "Main anthropogenic greenhouse gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CO2 from fossil fuel burning is the primary human-caused greenhouse gas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** carbon dioxide",
          "commonErrors": [
                    "Choosing a non-greenhouse gas."
          ]
},
        },
        {
          id: "ess12-u1-weather-climate-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Climate change evidence requires trends over how many years minimum? (decades)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 30
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Trend",
                              "statement": "Decades of data needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "30 years (WMO standard for climate normals).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$30$",
          "commonErrors": [
                    "Saying 1-5 years."
          ]
},
        },
        {
          id: "ess12-u1-weather-climate-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Distinguish weather from climate and explain why a single cold winter doesn't disprove global warming.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Weather",
                              "statement": "Short-term variability."
                    },
                    {
                              "kind": "definition",
                              "name": "Climate",
                              "statement": "Long-term trend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weather is day-to-day conditions (variable); climate is long-term averages. One cold winter is weather variability — climate trends are measured over decades. A single cold event doesn't reverse the multi-decade warming trend.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly distinguishes and explains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather ≠ climate; trend is long-term.**",
          "commonErrors": [
                    "Treating weather as climate."
          ]
},
        },
      ],
    },
  ],
};
