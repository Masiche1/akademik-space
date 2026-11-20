import type { Lesson } from "../../../types.ts";

export const lesson513: Lesson = {
  id: "ciealgeo-u1-lesson-1-3",
  code: "1-3",
  title: "Weather and Climate Systems",
  goal: "I CAN explain global atmospheric circulation, pressure systems and climate zones.",
  standards: ["Cambridge A Level Geography 9696", "Paper 1: physical"],
  
  vocabulary: [
    { term: "Hadley cell", definition: "Tropical atmospheric circulation cell." },
    { term: "Ferrel cell", definition: "Mid-latitude circulation cell." },
    { term: "Polar cell", definition: "High-latitude circulation cell." },
    { term: "Intertropical Convergence Zone (ITCZ)", definition: "Low-pressure belt near equator." },
    { term: "Jet stream", definition: "Fast-moving air current in upper atmosphere." },
    { term: "El Niño", definition: "Pacific warming event affecting global climate." },
  ],
  concepts: [
    {
      id: "ciealgeo-u1-s3-weather",
      title: "Weather and climate",
      skill: "Analyse atmospheric systems.",
      lesson: {
        sections: [
          {
            heading: "Global circulation",
            body: "Hadley (0-30°), Ferrel (30-60°), Polar (60-90°). ITCZ: rising air, low pressure, heavy rain near equator. Descending air at 30° → deserts.",
          },
          {
            heading: "Pressure systems",
            body: "Low pressure: rising air, clouds, rain. High pressure: descending air, clear, dry. Jet streams steer weather systems.",
          },
          {
            heading: "Climate zones",
            body: "Tropical: hot, wet/dry seasons. Temperate: distinct seasons. Polar: cold, low precipitation. Monsoon, Mediterranean, continental climates.",
          },
        ],
        keyFormulas: [
          { name: "Hadley", statement: "0-30°" },
          { name: "ITCZ", statement: "equatorial low pressure" },
          { name: "Jet stream", statement: "upper air current" },
        ],
        workedExample: {
          problem: "Why are deserts found at 30° latitude?",
          solution: "Hadley cell descending air at 30° → high pressure, dry conditions → deserts (Sahara, Arabian).",
        },
      },
      questions: [
        {
          id: "ciealgeo-u1-wx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the ITCZ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Low-pressure belt near equator"
                    },
                    {
                              "id": "b",
                              "text": "High-pressure zone"
                    },
                    {
                              "id": "c",
                              "text": "A jet stream"
                    },
                    {
                              "id": "d",
                              "text": "A climate type"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ITCZ",
                              "statement": "Equatorial low pressure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ITCZ = equatorial convergence zone.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Equatorial low pressure"
},
        },
        {
          id: "ciealgeo-u1-wx-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What causes deserts at 30° latitude?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Climate zones",
                              "statement": "Desert formation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hadley cell descending air.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "High pressure, dry conditions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Descending air deserts"
},
        },
        {
          id: "ciealgeo-u1-wx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the three global circulation cells?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Circulation cells",
                              "statement": "Hadley, Ferrel, Polar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hadley (0-30°), Ferrel (30-60°), Polar (60-90°).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different temperature/pressure patterns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Determine global climate zones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Three circulation cells"
},
        },
        {
          id: "ciealgeo-u1-wx-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Hadley cell, Ferrel cell, Polar cell, ITCZ, jet stream, El Niño. (b) What is ITCZ? (c) What causes deserts? (d) What are circulation cells? (e) What is jet stream? (f) What is El Niño? (g) What are climate zones? (h) Evaluate impact of climate change on weather systems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Weather/climate",
                              "statement": "Systems, impacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Equatorial low pressure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Descending air at 30°.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Hadley, Ferrel, Polar.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Upper air current.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Pacific warming event.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Tropical, temperate, polar.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Extreme weather, shifting patterns.",
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
      id: "ciealgeo-u1-wx-notes",
      title: "Weather/climate — notes",
      summary: "Hadley/Ferrel/Polar cells. ITCZ equatorial low pressure. Jet streams steer weather.",
      sections: [
        { heading: "Key idea", body: "Global circulation determines climate zones and weather patterns." },
        { heading: "Climate change", body: "Shifting patterns, extreme weather, sea level rise." },
      ],
    },
  ],
};
