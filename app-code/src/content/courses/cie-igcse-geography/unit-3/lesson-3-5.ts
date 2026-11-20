import type { Lesson } from "../../../types.ts";

export const lesson325: Lesson = {
  id: "cieigeo-u3-lesson-3-5",
  code: "3-5",
  title: "Geographical Skills: GIS and Remote Sensing",
  goal: "I CAN explain GIS and remote sensing applications in geography.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 4: technology skills"],
  
  vocabulary: [
    { term: "GIS", definition: "Geographic Information System — computer-based mapping." },
    { term: "Remote sensing", definition: "Collecting data from satellites/aircraft." },
    { term: "Satellite imagery", definition: "Images of Earth from space." },
    { term: "GPS", definition: "Global Positioning System — location technology." },
    { term: "Spatial data", definition: "Data with geographic location." },
    { term: "Raster data", definition: "Grid-based data (satellite images)." },
  ],
  concepts: [
    {
      id: "cieigeo-u3-s5-gis",
      title: "GIS and remote sensing",
      skill: "Understand geospatial technologies.",
      lesson: {
        sections: [
          {
            heading: "GIS",
            body: "Computer system for storing, analysing, displaying geographic data. Layers: roads, buildings, land use, elevation. Applications: planning, emergency response, resource management.",
          },
          {
            heading: "Remote sensing",
            body: "Collecting data without physical contact — satellites, aircraft, drones. Types: visible, infrared, radar, thermal. Applications: weather forecasting, disaster monitoring, agriculture, urban planning.",
          },
          {
            heading: "GPS",
            body: "Satellite-based location system. Uses: navigation, surveying, tracking, precision agriculture.",
          },
        ],
        keyFormulas: [
          { name: "GIS", statement: "geographic data analysis" },
          { name: "Remote sensing", statement: "satellite/aircraft data" },
          { name: "GPS", statement: "location technology" },
        ],
        workedExample: {
          problem: "How can GIS help manage a flood?",
          solution: "Layer flood extent, population, infrastructure, emergency routes. Identify vulnerable areas, plan evacuation, allocate resources.",
        },
      },
      questions: [
        {
          id: "cieigeo-u3-gis-q1",
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
                              "text": "A type of satellite"
                    },
                    {
                              "id": "c",
                              "text": "A weather pattern"
                    },
                    {
                              "id": "d",
                              "text": "A landform"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GIS",
                              "statement": "Geographic data system."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GIS = geographic information system.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Geographic Information System"
},
        },
        {
          id: "cieigeo-u3-gis-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is remote sensing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Remote sensing",
                              "statement": "Satellite/aircraft data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Collecting data without physical contact.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Uses satellites, aircraft, drones.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Remote data collection"
},
        },
        {
          id: "cieigeo-u3-gis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are applications of GIS?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "GIS applications",
                              "statement": "Uses of GIS."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Urban planning, emergency response.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resource management, environmental monitoring.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Multiple valid applications.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Planning, emergency, resource management"
},
        },
        {
          id: "cieigeo-u3-gis-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define GIS, remote sensing, satellite imagery, GPS, spatial data, raster data. (b) What is GIS? (c) What is remote sensing? (d) What is GPS? (e) What are GIS applications? (f) What are remote sensing applications? (g) What types of satellite imagery exist? (h) Explain how technology has transformed geographical research.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "GIS/remote sensing",
                              "statement": "Geospatial tech."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Geographic data system.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Remote data collection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Location technology.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Planning, emergency, resource management.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Weather, disaster monitoring, agriculture.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Visible, infrared, radar, thermal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid technology impact explanation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Geospatial technologies."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u3-gis-notes",
      title: "GIS/remote sensing — notes",
      summary: "GIS=geographic data analysis; remote sensing=satellite data; GPS=location. Transform geographical research.",
      sections: [
        { heading: "Key idea", body: "Technology enables large-scale, real-time geographical analysis." },
        { heading: "Applications", body: "Urban planning, disaster management, agriculture, environmental monitoring." },
      ],
    },
  ],
};
