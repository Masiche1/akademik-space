import type { Lesson } from "../../../types.ts";

export const lesson323: Lesson = {
  id: "cieigeo-u3-lesson-3-3",
  code: "3-3",
  title: "Geographical Skills: Map Interpretation",
  goal: "I CAN interpret topographic and thematic maps.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 4: map skills"],

  vocabulary: [
    { term: "Topographic map", definition: "Map showing relief/landforms." },
    {
      term: "Contour line",
      definition: "Line joining points of equal height.",
    },
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
          problem:
            "On a 1:50,000 map, two points are 4cm apart. What's the real distance?",
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
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Rainfall",
              },
              {
                id: "b",
                text: "Points of equal height",
              },
              {
                id: "c",
                text: "Temperature",
              },
              {
                id: "d",
                text: "Population",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contour",
                statement: "Equal height.",
              },
            ],
            steps: [
              {
                reasoning: "Contour = line of equal elevation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Equal height line",
          },
        },
        {
          id: "cieigeo-u3-mp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a 1:50,000 scale mean?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scale",
                statement: "Map:ground ratio.",
              },
            ],
            steps: [
              {
                reasoning: "1cm on map = 50,000cm (500m) on ground.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Map is 1/50,000 of actual size.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1cm = 500m",
          },
        },
        {
          id: "cieigeo-u3-mp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What do closely spaced contour lines indicate?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Contour interpretation",
                statement: "Gradient reading.",
              },
            ],
            steps: [
              {
                reasoning: "Close contours = steep slope.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Far apart = gentle slope.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows gradient/relief.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Steep slope",
          },
        },
        {
          id: "cieigeo-u3-mp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define topographic map, contour line, gradient, grid reference, scale, thematic map. (b) What is a contour line? (c) What does 1:50,000 scale mean? (d) What do close contours show? (e) What is a grid reference? (f) What is a choropleth map? (g) How do you find distance on a map? (h) Interpret a map showing a river valley with contour lines.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Map skills",
                statement: "Interpretation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Equal height line.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) 1cm=500m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Steep slope.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Location code.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Shaded regions by value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Measure × scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid map interpretation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Map interpretation skills.",
          },
        },
        {
          id: "cieigeo-u3-mp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a map with scale 1:25 000, 1 cm represents:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "25 m" },
              { "id": "b", "text": "25 km" },
              { "id": "c", "text": "2.5 km" },
              { "id": "d", "text": "250 m" }
            ],
            "correctChoiceId": "d"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Scale", "statement": "Map distance compared with ground distance." }
            ],
            "steps": [
              { "reasoning": "1 cm x 25 000 = 25 000 cm = 250 m.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "250 m"
          }
        },
        {
          id: "cieigeo-u3-mp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a 1:50 000 map, two points are 3 cm apart. Calculate the real distance.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 1.5, "unit": "km" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Scale distance", "statement": "Ground distance = map distance x scale." }
            ],
            "steps": [
              { "reasoning": "3 x 50 000 = 150 000 cm = 1.5 km.", "working": "3 \\times 50000 = 150000", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "1.5 km"
          }
        },
        {
          id: "cieigeo-u3-mp-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the purpose of a map legend and a compass rose?",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Map elements", "statement": "Legend explains symbols; compass shows direction." }
            ],
            "steps": [
              { "reasoning": "The legend explains what map symbols represent.", "marks": 1, "markCode": "M" },
              { "reasoning": "The compass rose shows north and other directions.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Legend explains symbols; compass shows direction"
          }
        },
        {
          id: "cieigeo-u3-mp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Contour lines that are close together indicate:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Flat land" },
              { "id": "b", "text": "A steep slope" },
              { "id": "c", "text": "A river" },
              { "id": "d", "text": "A road" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Contour interpretation", "statement": "Spacing shows gradient." }
            ],
            "steps": [
              { "reasoning": "Close contours mean height changes rapidly over a short distance.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Steep slope"
          }
        },
        {
          id: "cieigeo-u3-mp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two points are 6 cm apart on a 1:25 000 map and 2 cm apart on a 1:100 000 map. (a) Calculate the ground distance on the first map. (b) Calculate the ground distance on the second map.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "(a) First map distance (km)", "answer": 1.5, "unit": "km" },
              { "label": "(b) Second map distance (km)", "answer": 2, "unit": "km" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Scale", "statement": "Ground = map distance x denominator." }
            ],
            "steps": [
              { "reasoning": "(a) 6 x 25 000 = 150 000 cm = 1.5 km.", "working": "6 \\times 25000 = 150000", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) 2 x 100 000 = 200 000 cm = 2 km.", "working": "2 \\times 100000 = 200000", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "(a) 1.5 km (b) 2 km"
          }
        },
        {
          id: "cieigeo-u3-mp-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a choropleth map and a proportional symbol map.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Thematic maps", "statement": "Maps display data using shading or symbols." }
            ],
            "steps": [
              { "reasoning": "A choropleth shades areas by data value, such as population density.", "marks": 1, "markCode": "M" },
              { "reasoning": "A proportional symbol map sizes symbols, such as circles, by value.", "marks": 1, "markCode": "M" },
              { "reasoning": "Choropleths suit regional data; symbols suit point or city data.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Shading versus sized symbols"
          }
        },
        {
          id: "cieigeo-u3-mp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A choropleth map is used to show:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Exact building heights" },
              { "id": "b", "text": "Data values by shading regions" },
              { "id": "c", "text": "Only roads and rivers" },
              { "id": "d", "text": "Weather forecasts" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Choropleth", "statement": "Areas shaded according to value." }
            ],
            "steps": [
              { "reasoning": "Different shading represents different data values.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Data values by shaded regions"
          }
        },
        {
          id: "cieigeo-u3-mp-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how contour patterns can be used to identify a valley and a steep slope.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Contour patterns", "statement": "Contour shape and spacing reveal relief." }
            ],
            "steps": [
              { "reasoning": "Contours bending upstream around a river usually indicate a valley.", "marks": 1, "markCode": "M" },
              { "reasoning": "A V-shaped contour pattern often marks a valley or gorge.", "marks": 1, "markCode": "M" },
              { "reasoning": "Closely spaced contours indicate a steep slope.", "marks": 1, "markCode": "M" },
              { "reasoning": "Contour spacing and direction together describe gradient and drainage.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Contour bends show valleys; spacing shows steepness"
          }
        },
        {
          id: "cieigeo-u3-mp-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "On a 1:50 000 map, a rectangular field measures 4 cm by 2 cm. (a) Calculate the ground length. (b) Calculate the ground width.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "(a) Ground length (km)", "answer": 2, "unit": "km" },
              { "label": "(b) Ground width (km)", "answer": 1, "unit": "km" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Scale", "statement": "Ground = map x denominator." }
            ],
            "steps": [
              { "reasoning": "(a) 4 x 50 000 = 200 000 cm = 2 km.", "working": "4 \\times 50000 = 200000", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) 2 x 50 000 = 100 000 cm = 1 km.", "working": "2 \\times 50000 = 100000", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "(a) 2 km (b) 1 km"
          }
        },
        {
          id: "cieigeo-u3-mp-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate which thematic map is better for showing population distribution: a choropleth or proportional symbols.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "comparison", "name": "Thematic maps", "statement": "Choose according to data type and purpose." }
            ],
            "steps": [
              { "reasoning": "Choropleth suits population density across regions or districts.", "marks": 1, "markCode": "M" },
              { "reasoning": "Proportional symbols suit total population of cities or points.", "marks": 1, "markCode": "M" },
              { "reasoning": "Choropleths show areal patterns; symbols show discrete urban centres.", "marks": 1, "markCode": "M" },
              { "reasoning": "Conclusion: use density choropleth for spread and symbols for city sizes.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Use choropleth for density and symbols for city totals"
          }
        },
        {
          id: "cieigeo-u3-mp-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Contour lines forming a V shape pointing upstream most likely indicate:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "A plateau" },
              { "id": "b", "text": "A hilltop" },
              { "id": "c", "text": "A valley" },
              { "id": "d", "text": "A road junction" }
            ],
            "correctChoiceId": "c"
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Contour patterns", "statement": "V-shaped contours indicate valleys." }
            ],
            "steps": [
              { "reasoning": "Contours bend around valleys and ridges in characteristic ways.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "A valley"
          }
        },
        {
          id: "cieigeo-u3-mp-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define topographic map, contour line, scale and thematic map. (b) Explain what close contours show. (c) Explain what a 1:25 000 scale means. (d) Calculate ground distance for 5 cm on a 1:50 000 map. (e) Explain a grid reference. (f) Describe a choropleth map. (g) Describe proportional symbols. (h) Interpret a map showing closely spaced contours along a river valley.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "technique", "name": "Map skills", "statement": "Elements and interpretation." }
            ],
            "steps": [
              { "reasoning": "(a) Topographic = relief; contour = equal height; scale = map:ground; thematic = data theme.", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) Close contours indicate steep slopes.", "marks": 1, "markCode": "M" },
              { "reasoning": "(c) 1 cm = 25 000 cm = 250 m.", "marks": 1, "markCode": "M" },
              { "reasoning": "(d) 5 x 50 000 = 250 000 cm = 2.5 km.", "marks": 1, "markCode": "M" },
              { "reasoning": "(e) A code locating a point using eastings and northings.", "marks": 1, "markCode": "M" },
              { "reasoning": "(f) Areas shaded by data value.", "marks": 1, "markCode": "M" },
              { "reasoning": "(g) Symbols sized by data value.", "marks": 1, "markCode": "M" },
              { "reasoning": "(h) Steep valley sides and a flatter valley floor/drainage pattern.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Map interpretation skills."
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u3-mp-notes",
      title: "Map skills — notes",
      summary:
        "Contours=equal height; close=steep. Scale=map:ground ratio. Grid refs locate positions.",
      sections: [
        {
          heading: "Key idea",
          body: "Maps are essential tools for geographical analysis.",
        },
        {
          heading: "Thematic maps",
          body: "Choropleth, isoline, proportional symbols show specific data.",
        },
      ],
    },
  ],
};
