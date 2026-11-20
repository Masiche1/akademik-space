import type { Lesson } from "../../../types.ts";

export const lesson323: Lesson = {
  id: "cieigeo-u3-lesson-3-3",
  code: "3-3",
  title: "Geographical Skills: Map Interpretation",
  goal: "I CAN interpret topographic and thematic maps.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 4: map skills"],
  
  vocabulary: [
    { term: "Topographic map", definition: "Map showing relief/landforms." },
    { term: "Contour line", definition: "Line joining points of equal height." },
    { term: "Gradient", definition: "Steepness of slope." },
    { term: "Grid reference", definition: "Location code on map." },
    { term: "Scale", definition: "Ratio of map distance to ground distance." },
    { term: "Thematic map", definition: "Map showing specific data/theme." },
  ],
  concepts: [
    {
      id: "cieigeo-u3-s3-map",
      title: "Map interpretation",
      skill: "Read and interpret geographical maps.",
      lesson: {
        sections: [
          {
            heading: "Topographic maps",
            body: "Contour lines show relief. Close contours = steep; far apart = gentle. Spot heights = exact elevations. River symbols, road symbols, settlement symbols.",
          },
          {
            heading: "Map elements",
            body: "Scale: 1:50,000 means 1cm = 500m. Grid references: 4-figure (km), 6-figure (100m). Legend explains symbols. Compass shows direction.",
          },
          {
            heading: "Thematic maps",
            body: "Choropleth: shaded regions by value. Isoline: lines of equal value (temperature, pressure). Proportional symbols: sized by value (population).",
          },
        ],
        keyFormulas: [
          { name: "Contour", statement: "equal height lines" },
          { name: "Scale", statement: "map:ground ratio" },
          { name: "Grid ref", statement: "location code" },
        ],
        workedExample: {
          problem: "On a 1:50,000 map, two points are 4cm apart. What's the real distance?",
          solution: "4cm × 50,000 = 200,000cm = 2km.",
        },
      },
      questions: [
        {
          id: "cieigeo-u3-mp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a contour line show?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Points of equal height"
                    },
                    {
                              "id": "b",
                              "text": "Temperature"
                    },
                    {
                              "id": "c",
                              "text": "Population"
                    },
                    {
                              "id": "d",
                              "text": "Rainfall"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Contour",
                              "statement": "Equal height."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contour = line of equal elevation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Equal height line"
},
        },
        {
          id: "cieigeo-u3-mp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a 1:50,000 scale mean?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Scale",
                              "statement": "Map:ground ratio."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1cm on map = 50,000cm (500m) on ground.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Map is 1/50,000 of actual size.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1cm = 500m"
},
        },
        {
          id: "cieigeo-u3-mp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What do closely spaced contour lines indicate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Contour interpretation",
                              "statement": "Gradient reading."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Close contours = steep slope.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Far apart = gentle slope.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shows gradient/relief.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Steep slope"
},
        },
        {
          id: "cieigeo-u3-mp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define topographic map, contour line, gradient, grid reference, scale, thematic map. (b) What is a contour line? (c) What does 1:50,000 scale mean? (d) What do close contours show? (e) What is a grid reference? (f) What is a choropleth map? (g) How do you find distance on a map? (h) Interpret a map showing a river valley with contour lines.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Map skills",
                              "statement": "Interpretation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Equal height line.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 1cm=500m.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Steep slope.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Location code.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Shaded regions by value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Measure × scale.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid map interpretation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Map interpretation skills."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u3-mp-notes",
      title: "Map skills — notes",
      summary: "Contours=equal height; close=steep. Scale=map:ground ratio. Grid refs locate positions.",
      sections: [
        { heading: "Key idea", body: "Maps are essential tools for geographical analysis." },
        { heading: "Thematic maps", body: "Choropleth, isoline, proportional symbols show specific data." },
      ],
    },
  ],
};
