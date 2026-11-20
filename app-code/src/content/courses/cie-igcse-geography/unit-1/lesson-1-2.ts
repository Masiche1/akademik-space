import type { Lesson } from "../../../types.ts";

export const lesson302: Lesson = {
  id: "cieigeo-u1-lesson-1-2",
  code: "1-2",
  title: "Weather and Climate",
  goal: "I CAN distinguish weather from climate and describe atmospheric circulation.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 1: weather and climate"],
  
  vocabulary: [
    { term: "Weather", definition: "Atmospheric conditions at a specific time/place." },
    { term: "Climate", definition: "Average weather conditions over long period." },
    { term: "Atmospheric circulation", definition: "Global air movement patterns." },
    { term: "Jet stream", definition: "Fast-moving air currents in upper atmosphere." },
    { term: "Monsoon", definition: "Seasonal wind reversal bringing rain." },
    { term: "El Niño", definition: "Periodic warming of Pacific Ocean affecting global weather." },
  ],
  concepts: [
    {
      id: "cieigeo-u1-s2-clim",
      title: "Weather and climate",
      skill: "Understand weather systems and climate patterns.",
      lesson: {
        sections: [
          {
            heading: "Weather vs climate",
            body: "Weather: daily conditions (temperature, precipitation, wind). Climate: long-term averages (30+ years). Weather is what you experience; climate is what you expect.",
          },
          {
            heading: "Atmospheric circulation",
            body: "Global air movement: Hadley cells (equator), Ferrel cells (mid-latitudes), Polar cells. Creates trade winds, westerlies, polar easterlies. Jet streams affect weather systems.",
          },
          {
            heading: "Climate influences",
            body: "Latitude (solar energy), altitude, distance from sea, ocean currents, prevailing winds.",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "daily conditions" },
          { name: "Climate", statement: "long-term averages" },
          { name: "Circulation", statement: "Hadley/Ferrel/Polar cells" },
        ],
        workedExample: {
          problem: "Why is it warmer at equator than poles?",
          solution: "Sun's rays hit equator more directly — more concentrated solar energy. Less atmospheric absorption.",
        },
      },
      questions: [
        {
          id: "cieigeo-u1-wc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between weather and climate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Weather=daily conditions; climate=long-term averages"
                    },
                    {
                              "id": "b",
                              "text": "They're the same"
                    },
                    {
                              "id": "c",
                              "text": "Weather is long-term"
                    },
                    {
                              "id": "d",
                              "text": "Climate is daily"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Weather vs climate",
                              "statement": "Daily vs average."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weather=daily; climate=long-term average.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Daily vs long-term"
},
        },
        {
          id: "cieigeo-u1-wc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What drives global atmospheric circulation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Circulation",
                              "statement": "Global air movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uneven solar heating creates pressure differences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Air moves from high to low pressure.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Uneven solar heating"
},
        },
        {
          id: "cieigeo-u1-wc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What factors influence climate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Climate factors",
                              "statement": "Influences on climate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Latitude, altitude, distance from sea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ocean currents, prevailing winds.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All major factors identified.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Latitude, altitude, proximity to sea"
},
        },
        {
          id: "cieigeo-u1-wc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define weather, climate, atmospheric circulation, jet stream, monsoon, El Niño. (b) What is weather? (c) What is climate? (d) What drives atmospheric circulation? (e) What factors influence climate? (f) What is the jet stream? (g) What is El Niño? (h) Explain why coastal areas have milder climates than inland.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Weather/climate",
                              "statement": "Systems, factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Daily conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Long-term averages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Uneven solar heating.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Latitude, altitude, distance from sea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Fast upper-atmosphere winds.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Pacific warming affecting weather.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Sea moderates temperature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Weather and climate systems."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u1-wc-notes",
      title: "Weather/climate — notes",
      summary: "Weather=daily, climate=long-term. Circulation driven by solar heating. Latitude, altitude, sea proximity affect climate.",
      sections: [
        { heading: "Key idea", body: "Climate = weather averaged over 30+ years." },
        { heading: "Factors", body: "Latitude, altitude, distance from sea, ocean currents, winds." },
      ],
    },
  ],
};
