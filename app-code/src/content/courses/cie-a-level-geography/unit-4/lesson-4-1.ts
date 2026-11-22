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
    {
      term: "Projection",
      definition: "Method of representing Earth on flat surface.",
    },
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
          solution:
            "Layers population, infrastructure, hazard zones → identify vulnerable areas, plan evacuation routes, allocate resources.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u4-gis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is GIS?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A survey method",
              },
              {
                id: "b",
                text: "Geographic Information System",
              },
              {
                id: "c",
                text: "A type of map",
              },
              {
                id: "d",
                text: "A climate model",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GIS",
                statement: "Spatial analysis.",
              },
            ],
            steps: [
              {
                reasoning: "GIS = Geographic Information System.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Spatial analysis",
          },
        },
        {
          id: "ciealgeo-u4-gis-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between raster and vector data?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Raster vs vector",
                statement: "Data types.",
              },
            ],
            steps: [
              {
                reasoning: "Raster: grid-based.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vector: point/line/polygon.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Grid vs points/lines",
          },
        },
        {
          id: "ciealgeo-u4-gis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does GIS help urban planning?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "GIS application",
                statement: "Planning.",
              },
            ],
            steps: [
              {
                reasoning: "Layers population, infrastructure, land use.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Identifies patterns, gaps, conflicts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Informs evidence-based decisions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Spatial planning",
          },
        },
        {
          id: "ciealgeo-u4-gis-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define GIS, raster data, vector data, projection, scale, topographic map. (b) What is GIS? (c) What is raster vs vector? (d) What is projection? (e) What is scale? (f) How does GIS help planning? (g) What are map types? (h) Evaluate importance of GIS in modern geography.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "GIS",
                statement: "Skills.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Spatial analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Grid vs points/lines.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Flat representation method.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Map:ground ratio.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Layers, patterns, decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Topographic, thematic, choropleth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Essential for spatial analysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "GIS and maps skills.",
          },
        },
        {
          id: "ciealgeo-u4-gis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of map represents data by shading whole regions with different colours or tones?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Ordnance Survey base map",
              },
              {
                id: "b",
                text: "Topographic map",
              },
              {
                id: "c",
                text: "Isoline map",
              },
              {
                id: "d",
                text: "Choropleth map",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Choropleth",
                statement: "Shaded regions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choropleth = shaded regions representing data values.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Choropleth map",
          },
        },
        {
          id: "ciealgeo-u4-gis-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A map has a scale of 1:50 000. A measured distance on the map is 4 cm. Calculate the equivalent ground distance in km.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
                unit: "km",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Scale",
                statement: "map distance : ground distance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ground distance = map distance x scale denominator: 4 cm x 50 000 = 200 000 cm = 2 km.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to km: 200 000 cm = 2 km.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2 km",
          },
        },
        {
          id: "ciealgeo-u4-gis-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a map projection? Why is one needed?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Projection",
                statement: "Method of representing Earth on flat surface.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Projection = method of representing Earth's curved surface on a flat map.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Needed because every flat projection distorts shape, area, distance or direction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Flat representation method; distortion unavoidable",
          },
        },
        {
          id: "ciealgeo-u4-gis-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an example of vector data in a GIS?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A rainfall raster layer",
              },
              {
                id: "b",
                text: "A road network stored as lines with attributes",
              },
              {
                id: "c",
                text: "A satellite image stored as a grid of pixels",
              },
              {
                id: "d",
                text: "A digital elevation model grid",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vector data",
                statement: "Point/line/polygon data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vector data = points, lines and polygons; a road network is line data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Road network as lines",
          },
        },
        {
          id: "ciealgeo-u4-gis-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a map with scale 1:25 000, two points are 3.5 cm apart. Calculate the actual distance between them in metres.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 875,
                unit: "m",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Scale",
                statement: "map distance : ground distance.",
              },
            ],
            steps: [
              {
                reasoning: "Ground distance = 3.5 cm x 25 000 = 87 500 cm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert cm to m: 87 500 cm = 875 m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "875 m",
          },
        },
        {
          id: "ciealgeo-u4-gis-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of storing geographical data as vectors rather than rasters.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Vector vs raster",
                statement: "Data storage trade-offs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vector files are smaller and can represent sharp boundaries accurately at any scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Attributes can be attached directly to features, aiding analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Suitable for discrete features such as roads, boundaries and buildings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Compact, precise boundaries, attached attributes",
          },
        },
        {
          id: "ciealgeo-u4-gis-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which GIS operation best identifies settlements most at risk from flooding?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Measuring map scale",
              },
              {
                id: "b",
                text: "Digitising contour lines",
              },
              {
                id: "c",
                text: "Buffer analysis around rivers only",
              },
              {
                id: "d",
                text: "Overlaying hazard, population and infrastructure layers",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "GIS overlay",
                statement: "Layer combination.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Overlaying hazard, population and infrastructure layers identifies vulnerable areas.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Layer overlay analysis",
          },
        },
        {
          id: "ciealgeo-u4-gis-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A raster layer has a grid of 6 by 8 cells, each cell covering 0.25 km². Calculate the total area represented by the layer in km².",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 12,
                unit: "km²",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Raster area",
                statement: "number of cells x cell area.",
              },
            ],
            steps: [
              {
                reasoning: "Number of cells = 6 x 8 = 48.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total area = 48 x 0.25 km² = 12 km².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12 km²",
          },
        },
        {
          id: "ciealgeo-u4-gis-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher must store two datasets in a GIS: (i) elevation across a mountain region and (ii) land-use categories (forest, farmland, urban). Compare the suitability of raster and vector formats for each dataset.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Raster vs vector",
                statement: "Continuous vs discrete data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Elevation is continuous surface data, best stored as raster cells or a digital elevation model.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Land use is discrete with sharp boundaries, so polygons (vectors) represent it more precisely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Raster resolution affects accuracy of elevation; vector polygons give exact boundaries.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Conclusion: choose format matched to data type.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Raster for elevation, vectors for land use",
          },
        },
        {
          id: "ciealgeo-u4-gis-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which combination of GIS layers would best identify 'food deserts' in a city?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Road network and railway lines only",
              },
              {
                id: "b",
                text: "Grocery store locations, population density and income levels",
              },
              {
                id: "c",
                text: "Elevation, geology and soil type",
              },
              {
                id: "d",
                text: "Rainfall, temperature and wind speed",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "GIS application",
                statement: "Food access analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Food deserts depend on access to food stores relative to population and affordability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Stores + population + income layers",
          },
        },
        {
          id: "ciealgeo-u4-gis-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A study area of 64 km² must be represented by a raster with 256 pixels. Calculate the required pixel (cell) size in metres.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 500,
                unit: "m",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Raster resolution",
                statement: "cell area = total area / number of cells.",
              },
            ],
            steps: [
              {
                reasoning: "Cell area = 64 km² / 256 = 0.25 km².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cell side = sqrt(0.25 km²) = 0.5 km = 500 m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "500 m",
          },
        },
        {
          id: "ciealgeo-u4-gis-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A planner wants to combine population density and flood-risk layers to find where the most vulnerable residents live. What is the key advantage of doing this in a GIS rather than on paper maps?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "GIS can overlay layers and quantify the overlap precisely",
              },
              {
                id: "b",
                text: "GIS removes the need for fieldwork",
              },
              {
                id: "c",
                text: "Paper maps are always more accurate",
              },
              {
                id: "d",
                text: "GIS can only display one layer at a time",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "GIS overlay",
                statement: "Spatial analysis advantage.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GIS overlays layers and quantifies spatial overlap precisely.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Precise layer overlay and quantification",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u4-gis-notes",
      title: "GIS — notes",
      summary:
        "GIS=spatial analysis. Raster=grid, vector=points/lines/polygons. Map types vary.",
      sections: [
        {
          heading: "Key idea",
          body: "GIS integrates spatial data for analysis and decision-making.",
        },
        {
          heading: "Applications",
          body: "Planning, disaster management, environmental monitoring.",
        },
      ],
    },
  ],
};
