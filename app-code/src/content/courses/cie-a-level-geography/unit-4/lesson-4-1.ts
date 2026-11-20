import type { Lesson } from "../../../types.ts";

export const lesson541: Lesson = {
  id: "ciealgeo-u4-lesson-4-1",
  code: "4-1",
  title: "Geographical Skills: Maps and GIS",
  goal: "I CAN interpret maps, use GIS and analyse spatial data.",
  standards: ["Cambridge A Level Geography 9696", "Paper 3: skills"],
  
  vocabulary: [
    { term: "GIS", definition: "Geographic Information System." },
    { term: "Raster data", definition: "Grid-based spatial data." },
    { term: "Vector data", definition: "Point/line/polygon data." },
    { term: "Projection", definition: "Method of representing Earth on flat surface." },
    { term: "Scale", definition: "Ratio of map distance to ground distance." },
    { term: "Topographic map", definition: "Map showing relief and features." },
  ],
  concepts: [
    {
      id: "ciealgeo-u4-s1-gis",
      title: "GIS and maps",
      skill: "Use spatial analysis tools.",
      lesson: {
        sections: [
          {
            heading: "Map types",
            body: "Topographic: relief, contours. Thematic: specific data (population, climate). Choropleth: shaded regions. Isoline: lines of equal value.",
          },
          {
            heading: "GIS",
            body: "Layers spatial data: physical, social, economic. Analyse patterns, relationships, changes over time. Applications: planning, disaster management, environmental monitoring.",
          },
        ],
        keyFormulas: [
          { name: "GIS", statement: "spatial analysis" },
          { name: "Scale", statement: "map:ground ratio" },
          { name: "Choropleth", statement: "shaded regions" },
        ],
        workedExample: {
          problem: "How does GIS help disaster management?",
          solution: "Layers population, infrastructure, hazard zones → identify vulnerable areas, plan evacuation routes, allocate resources.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u4-gis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is GIS?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Geographic Information System"
                    },
                    {
                              "id": "b",
                              "text": "A type of map"
                    },
                    {
                              "id": "c",
                              "text": "A climate model"
                    },
                    {
                              "id": "d",
                              "text": "A survey method"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GIS",
                              "statement": "Spatial analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GIS = Geographic Information System.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Spatial analysis"
},
        },
        {
          id: "ciealgeo-u4-gis-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between raster and vector data?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Raster vs vector",
                              "statement": "Data types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Raster: grid-based.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Vector: point/line/polygon.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Grid vs points/lines"
},
        },
        {
          id: "ciealgeo-u4-gis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does GIS help urban planning?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "GIS application",
                              "statement": "Planning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Layers population, infrastructure, land use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies patterns, gaps, conflicts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Informs evidence-based decisions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Spatial planning"
},
        },
        {
          id: "ciealgeo-u4-gis-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define GIS, raster data, vector data, projection, scale, topographic map. (b) What is GIS? (c) What is raster vs vector? (d) What is projection? (e) What is scale? (f) How does GIS help planning? (g) What are map types? (h) Evaluate importance of GIS in modern geography.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "GIS",
                              "statement": "Skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Spatial analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Grid vs points/lines.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Flat representation method.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Map:ground ratio.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Layers, patterns, decisions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Topographic, thematic, choropleth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Essential for spatial analysis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "GIS and maps skills."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u4-gis-notes",
      title: "GIS — notes",
      summary: "GIS=spatial analysis. Raster=grid, vector=points/lines/polygons. Map types vary.",
      sections: [
        { heading: "Key idea", body: "GIS integrates spatial data for analysis and decision-making." },
        { heading: "Applications", body: "Planning, disaster management, environmental monitoring." },
      ],
    },
  ],
};
