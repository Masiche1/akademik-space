import type { Lesson } from "../../../types.ts";

export const lesson325: Lesson = {
  id: "cieigeo-u3-lesson-3-5",
  code: "3-5",
  title: "Geographical Skills: GIS and Remote Sensing",
  goal: "I CAN explain GIS and remote sensing applications in geography.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 4: technology skills"],

  vocabulary: [
    {
      term: "GIS",
      definition: "Geographic Information System — computer-based mapping.",
    },
    {
      term: "Remote sensing",
      definition: "Collecting data from satellites/aircraft.",
    },
    { term: "Satellite imagery", definition: "Images of Earth from space." },
    {
      term: "GPS",
      definition: "Global Positioning System — location technology.",
    },
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
          solution:
            "Layer flood extent, population, infrastructure, emergency routes. Identify vulnerable areas, plan evacuation, allocate resources.",
        },
      },
      questions: [
        {
          id: "cieigeo-u3-gis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is GIS?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of satellite",
              },
              {
                id: "b",
                text: "Geographic Information System",
              },
              {
                id: "c",
                text: "A weather pattern",
              },
              {
                id: "d",
                text: "A landform",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GIS",
                statement: "Geographic data system.",
              },
            ],
            steps: [
              {
                reasoning: "GIS = geographic information system.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Geographic Information System",
          },
        },
        {
          id: "cieigeo-u3-gis-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is remote sensing?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Remote sensing",
                statement: "Satellite/aircraft data.",
              },
            ],
            steps: [
              {
                reasoning: "Collecting data without physical contact.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Uses satellites, aircraft, drones.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Remote data collection",
          },
        },
        {
          id: "cieigeo-u3-gis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are applications of GIS?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "GIS applications",
                statement: "Uses of GIS.",
              },
            ],
            steps: [
              {
                reasoning: "Urban planning, emergency response.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Resource management, environmental monitoring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiple valid applications.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Planning, emergency, resource management",
          },
        },
        {
          id: "cieigeo-u3-gis-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define GIS, remote sensing, satellite imagery, GPS, spatial data, raster data. (b) What is GIS? (c) What is remote sensing? (d) What is GPS? (e) What are GIS applications? (f) What are remote sensing applications? (g) What types of satellite imagery exist? (h) Explain how technology has transformed geographical research.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "GIS/remote sensing",
                statement: "Geospatial tech.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Geographic data system.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Remote data collection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Location technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Planning, emergency, resource management.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Weather, disaster monitoring, agriculture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Visible, infrared, radar, thermal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid technology impact explanation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Geospatial technologies.",
          },
        },
        {
          id: "cieigeo-u3-gis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "GPS is best described as:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "A type of satellite image" },
              { "id": "b", "text": "A map drawing technique" },
              { "id": "c", "text": "A satellite system that determines location" },
              { "id": "d", "text": "A weather forecasting model" }
            ],
            "correctChoiceId": "c"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "GPS", "statement": "Global Positioning System for location." }
            ],
            "steps": [
              { "reasoning": "GPS uses satellites to calculate position.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Satellite location system"
          }
        },
        {
          id: "cieigeo-u3-gis-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A raster image covers 90 km² using square cells of 30 m by 30 m. Calculate the number of cells.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 100000, "unit": "cells" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Raster cells", "statement": "Cells = area ÷ cell area." }
            ],
            "steps": [
              { "reasoning": "90 km² = 90 000 000 m²; each cell = 900 m²; 90 000 000 ÷ 900 = 100 000.", "working": "90000000 / 900 = 100000", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "100 000 cells"
          }
        },
        {
          id: "cieigeo-u3-gis-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish between GIS and remote sensing.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "GIS vs remote sensing", "statement": "GIS analyses geographic data; remote sensing collects it." }
            ],
            "steps": [
              { "reasoning": "Remote sensing collects data from satellites, aircraft or drones.", "marks": 1, "markCode": "M" },
              { "reasoning": "GIS stores, layers and analyses geographic information for planning.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Remote sensing collects; GIS analyses"
          }
        },
        {
          id: "cieigeo-u3-gis-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which type of remote sensing is particularly useful for detecting heat or vegetation stress at night?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Paper maps" },
              { "id": "b", "text": "Infrared or thermal sensing" },
              { "id": "c", "text": "Field interviews" },
              { "id": "d", "text": "Only visible-light photography" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Remote sensing types", "statement": "Visible, infrared, radar and thermal collect different data." }
            ],
            "steps": [
              { "reasoning": "Thermal/infrared detects heat differences without visible light.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Infrared or thermal sensing"
          }
        },
        {
          id: "cieigeo-u3-gis-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A GIS layer uses square grid cells of 2 km by 2 km. (a) How many cells cover 1 km²? (b) How many cells cover an area of 36 km²?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "(a) Cells per km²", "answer": 0.25, "unit": "cells/km²", "tolerance": 0.01 },
              { "label": "(b) Cells for 36 km²", "answer": 9, "unit": "cells" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Raster resolution", "statement": "Each cell covers its own area." }
            ],
            "steps": [
              { "reasoning": "(a) Each 2 km x 2 km cell covers 4 km², so 1 ÷ 4 = 0.25 cells per km².", "working": "1 / 4 = 0.25", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) 36 ÷ 4 = 9 cells.", "working": "36 / 4 = 9", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "(a) 0.25 (b) 9"
          }
        },
        {
          id: "cieigeo-u3-gis-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how GIS layers could be used to manage a flood.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "method", "name": "GIS application", "statement": "Layers combine spatial data for decisions." }
            ],
            "steps": [
              { "reasoning": "Map flood extent, population, roads and buildings as separate layers.", "marks": 1, "markCode": "M" },
              { "reasoning": "Overlay layers to identify vulnerable areas and evacuation routes.", "marks": 1, "markCode": "M" },
              { "reasoning": "Use the analysis to allocate emergency resources and plan prevention.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Layers identify risk and guide response"
          }
        },
        {
          id: "cieigeo-u3-gis-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Remote sensing is especially useful for:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Drawing hand-written field sketches" },
              { "id": "b", "text": "Monitoring large areas such as forests or floods" },
              { "id": "c", "text": "Counting people in a small classroom" },
              { "id": "d", "text": "Conducting face-to-face interviews" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Remote sensing", "statement": "Collects data over large or inaccessible areas." }
            ],
            "steps": [
              { "reasoning": "Satellites and aircraft cover broad areas repeatedly.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Monitoring large areas"
          }
        },
        {
          id: "cieigeo-u3-gis-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the advantages and limitations of remote sensing for geographical research.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "comparison", "name": "Remote sensing", "statement": "Broad coverage versus detail and cost." }
            ],
            "steps": [
              { "reasoning": "Advantage: covers large or dangerous areas quickly and repeatedly.", "marks": 1, "markCode": "M" },
              { "reasoning": "Advantage: provides consistent images for monitoring change over time.", "marks": 1, "markCode": "M" },
              { "reasoning": "Limitation: resolution may be too coarse for small features and interpretation requires skills.", "marks": 1, "markCode": "M" },
              { "reasoning": "Conclusion: powerful for broad patterns but often needs field checking.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Remote sensing is broad but needs validation"
          }
        },
        {
          id: "cieigeo-u3-gis-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A drone image covers 8 km² at a resolution of 20 m by 20 m. (a) Calculate the number of cells per km². (b) Calculate the total number of cells.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "(a) Cells per km²", "answer": 2500, "unit": "cells/km²" },
              { "label": "(b) Total cells", "answer": 20000, "unit": "cells" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Raster resolution", "statement": "Cell area determines number of cells." }
            ],
            "steps": [
              { "reasoning": "(a) 1 km² = 1 000 000 m²; cell = 400 m²; 1 000 000 ÷ 400 = 2 500.", "working": "1000000 / 400 = 2500", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) 8 x 2 500 = 20 000 cells.", "working": "8 \\times 2500 = 20000", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "(a) 2 500 (b) 20 000"
          }
        },
        {
          id: "cieigeo-u3-gis-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss the ethical and practical issues of using GPS and satellite tracking in geographical research.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "principle", "name": "Geospatial ethics", "statement": "Location data can be powerful and sensitive." }
            ],
            "steps": [
              { "reasoning": "Practical benefits include precise surveying, navigation and resource tracking.", "marks": 1, "markCode": "M" },
              { "reasoning": "Privacy concerns arise if individuals' movements are tracked without consent.", "marks": 1, "markCode": "M" },
              { "reasoning": "Data security and accuracy must be managed to avoid harm or misuse.", "marks": 1, "markCode": "M" },
              { "reasoning": "Conclusion: use ethical guidelines, consent and secure data handling.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Powerful tools require privacy and security safeguards"
          }
        },
        {
          id: "cieigeo-u3-gis-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which remote sensing type is most useful for monitoring sea-surface temperature or urban heat at night?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Hand-drawn maps" },
              { "id": "b", "text": "Visible photography only" },
              { "id": "c", "text": "Thermal sensing" },
              { "id": "d", "text": "Questionnaires" }
            ],
            "correctChoiceId": "c"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Thermal sensing", "statement": "Detects heat emitted by surfaces." }
            ],
            "steps": [
              { "reasoning": "Thermal sensors record temperature differences directly.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Thermal sensing"
          }
        },
        {
          id: "cieigeo-u3-gis-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define GIS, remote sensing, GPS and spatial data. (b) Give two GIS applications. (c) Give two remote sensing applications. (d) Name three types of satellite imagery. (e) Explain why raster data uses grid cells. (f) Give one advantage of remote sensing. (g) Give one limitation. (h) Explain how GIS and remote sensing can work together in flood management.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "technique", "name": "Geospatial technology", "statement": "Data collection and analysis." }
            ],
            "steps": [
              { "reasoning": "(a) GIS = geographic data system; remote sensing = remote data collection; GPS = location; spatial data = located data.", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) e.g. urban planning and emergency response.", "marks": 1, "markCode": "M" },
              { "reasoning": "(c) e.g. weather forecasting and disaster monitoring.", "marks": 1, "markCode": "M" },
              { "reasoning": "(d) Visible, infrared, radar or thermal.", "marks": 1, "markCode": "M" },
              { "reasoning": "(e) Raster data stores values in a grid of cells.", "marks": 1, "markCode": "M" },
              { "reasoning": "(f) Covers large areas quickly and repeatedly.", "marks": 1, "markCode": "M" },
              { "reasoning": "(g) Coarse resolution or interpretation difficulty.", "marks": 1, "markCode": "M" },
              { "reasoning": "(h) Remote sensing detects flood extent; GIS layers it with population and infrastructure.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Geospatial technologies."
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u3-gis-notes",
      title: "GIS/remote sensing — notes",
      summary:
        "GIS=geographic data analysis; remote sensing=satellite data; GPS=location. Transform geographical research.",
      sections: [
        {
          heading: "Key idea",
          body: "Technology enables large-scale, real-time geographical analysis.",
        },
        {
          heading: "Applications",
          body: "Urban planning, disaster management, agriculture, environmental monitoring.",
        },
      ],
    },
  ],
};
