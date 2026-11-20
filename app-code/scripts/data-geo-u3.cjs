module.exports = [
  {
    file: "lesson-3-1.ts", exportName: "lesson321",
    lesson: {
      id: "cieigeo-u3-lesson-3-1", code: "3-1",
      title: "Geographical Skills: Fieldwork and Data Collection",
      goal: "I CAN plan and conduct geographical fieldwork and collect data.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 4: geographical skills"],
      vocabulary: [
        { term: "Fieldwork", definition: "Data collection in the field." },
        { term: "Primary data", definition: "Data collected directly by researcher." },
        { term: "Secondary data", definition: "Data from existing sources." },
        { term: "Sampling", definition: "Selecting representative subset of population." },
        { term: "Questionnaire", definition: "Structured set of questions for data collection." },
        { term: "Observation", definition: "Systematic watching and recording." },
      ],
      concept: {
        id: "cieigeo-u3-s1-field", title: "Fieldwork",
        skill: "Plan and conduct geographical fieldwork.",
        sections: [
          { heading: "Fieldwork methods", body: "Primary: questionnaires, interviews, observations, measurements, photography. Secondary: maps, satellite images, census data, reports. Choose method based on research question." },
          { heading: "Sampling", body: "Random: every member has equal chance. Systematic: every nth item. Stratified: proportional to groups. Opportunity: whoever is available. Sample size affects reliability." },
        ],
        keyFormulas: [
          { name: "Primary", statement: "collected directly" },
          { name: "Secondary", statement: "existing sources" },
          { name: "Sampling", statement: "representative subset" },
        ],
        workedExample: {
          problem: "You want to study pedestrian flows in a city centre. What fieldwork method?",
          solution: "Observation/counting at different times + questionnaire for pedestrian opinions.",
        },
        questions: [
          {
            id: "cieigeo-u3-fw-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is fieldwork?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Data collection in the field" }, { id: "b", text: "Desk research" }, { id: "c", text: "A type of map" }, { id: "d", text: "A weather pattern" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Fieldwork", statement: "Field data collection." }],
              steps: [{ reasoning: "Fieldwork = collecting data in field.", marks: 1, markCode: "M" }],
              finalAnswer: "Field data collection",
            },
          },
          {
            id: "cieigeo-u3-fw-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between primary and secondary data?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Primary vs secondary", statement: "New vs existing data." }],
              steps: [
                { reasoning: "Primary = collected directly by researcher.", marks: 1, markCode: "M" },
                { reasoning: "Secondary = from existing sources.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "New vs existing data",
            },
          },
          {
            id: "cieigeo-u3-fw-q3", difficulty: "core", totalMarks: 3,
            stem: "What is random sampling?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Random sampling", statement: "Equal chance selection." }],
              steps: [
                { reasoning: "Every member has equal chance of selection.", marks: 1, markCode: "M" },
                { reasoning: "Reduces bias.", marks: 1, markCode: "M" },
                { reasoning: "Most representative method.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Equal chance selection",
            },
          },
          {
            id: "cieigeo-u3-fw-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define fieldwork, primary data, secondary data, sampling, questionnaire, observation. (b) What is fieldwork? (c) What is primary data? (d) What is secondary data? (e) What is random sampling? (f) What are fieldwork methods? (g) How do you choose a sampling method? (h) Design a fieldwork plan to study local river pollution.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Fieldwork", statement: "Methods, sampling." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Field data collection.", marks: 1, markCode: "M" },
                { reasoning: "(c) Directly collected data.", marks: 1, markCode: "M" },
                { reasoning: "(d) Existing data.", marks: 1, markCode: "M" },
                { reasoning: "(e) Equal chance selection.", marks: 1, markCode: "M" },
                { reasoning: "(f) Questionnaires, interviews, observations.", marks: 1, markCode: "M" },
                { reasoning: "(g) Based on research question/population.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid fieldwork plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Fieldwork planning and methods.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u3-fw-notes", title: "Fieldwork — notes",
      summary: "Primary=collected directly; secondary=existing. Sampling=random/systematic/stratified. Methods: questionnaires, observations.",
      sections: [
        { heading: "Key idea", body: "Good fieldwork requires careful planning, appropriate methods, representative sampling." },
        { heading: "Sampling", body: "Random=simplest; stratified=most representative for groups." },
      ],
    },
  },
  {
    file: "lesson-3-2.ts", exportName: "lesson322",
    lesson: {
      id: "cieigeo-u3-lesson-3-2", code: "3-2",
      title: "Geographical Skills: Data Interpretation and Presentation",
      goal: "I CAN interpret and present geographical data using appropriate techniques.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 4: data skills"],
      vocabulary: [
        { term: "Data presentation", definition: "Visual representation of data." },
        { term: "Graph", definition: "Visual display of numerical data." },
        { term: "Table", definition: "Organised data in rows/columns." },
        { term: "Map", definition: "Visual representation of spatial data." },
        { term: "Scatter graph", definition: "Shows relationship between two variables." },
        { term: "Bar chart", definition: "Compares categories using bars." },
      ],
      concept: {
        id: "cieigeo-u3-s2-data", title: "Data interpretation",
        skill: "Interpret and present geographical data.",
        sections: [
          { heading: "Data types", body: "Quantitative: numbers (measurements). Qualitative: descriptions (observations). Choose presentation based on data type and purpose." },
          { heading: "Presentation methods", body: "Bar charts: compare categories. Line graphs: show trends over time. Scatter graphs: show correlations. Pie charts: show proportions. Maps: show spatial patterns. Tables: detailed data." },
        ],
        keyFormulas: [
          { name: "Bar chart", statement: "compare categories" },
          { name: "Line graph", statement: "show trends" },
          { name: "Scatter graph", statement: "show correlation" },
        ],
        workedExample: {
          problem: "You have data on rainfall in 12 months. How should you present it?",
          solution: "Line graph — shows trend over time. Bar chart also possible for monthly comparison.",
        },
        questions: [
          {
            id: "cieigeo-u3-di-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a scatter graph used for?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Showing relationship between two variables" }, { id: "b", text: "Comparing categories" }, { id: "c", text: "Showing proportions" }, { id: "d", text: "Showing trends over time" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Scatter graph", statement: "Correlation display." }],
              steps: [{ reasoning: "Scatter graph shows variable relationship.", marks: 1, markCode: "M" }],
              finalAnswer: "Variable relationship",
            },
          },
          {
            id: "cieigeo-u3-di-q2", difficulty: "foundation", totalMarks: 2,
            stem: "When should you use a bar chart?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Data presentation", statement: "Chart selection." }],
              steps: [
                { reasoning: "For comparing categories.", marks: 1, markCode: "M" },
                { reasoning: "e.g. population by city.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Comparing categories",
            },
          },
          {
            id: "cieigeo-u3-di-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between quantitative and qualitative data?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Data types", statement: "Numbers vs descriptions." }],
              steps: [
                { reasoning: "Quantitative = numerical measurements.", marks: 1, markCode: "M" },
                { reasoning: "Qualitative = descriptive observations.", marks: 1, markCode: "M" },
                { reasoning: "Choose presentation accordingly.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Numbers vs descriptions",
            },
          },
          {
            id: "cieigeo-u3-di-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define data presentation, graph, table, map, scatter graph, bar chart. (b) What is data presentation? (c) When use a bar chart? (d) When use a line graph? (e) When use a scatter graph? (f) What is quantitative data? (g) What is qualitative data? (h) Choose appropriate presentation for: (i) monthly rainfall, (ii) population by city, (iii) relationship between income and life expectancy.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Data skills", statement: "Interpretation, presentation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Visual data representation.", marks: 1, markCode: "M" },
                { reasoning: "(c) Comparing categories.", marks: 1, markCode: "M" },
                { reasoning: "(d) Showing trends over time.", marks: 1, markCode: "M" },
                { reasoning: "(e) Showing correlations.", marks: 1, markCode: "M" },
                { reasoning: "(f) Numerical measurements.", marks: 1, markCode: "M" },
                { reasoning: "(g) Descriptive observations.", marks: 1, markCode: "M" },
                { reasoning: "(h) Correct chart choices.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Data interpretation and presentation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u3-di-notes", title: "Data skills — notes",
      summary: "Bar=compare, line=trend, scatter=correlation, pie=proportion. Choose based on data type/purpose.",
      sections: [
        { heading: "Key idea", body: "Effective data presentation makes patterns clear and accessible." },
        { heading: "Maps", body: "Show spatial patterns — choropleth, isoline, proportional symbols." },
      ],
    },
  },
  {
    file: "lesson-3-3.ts", exportName: "lesson323",
    lesson: {
      id: "cieigeo-u3-lesson-3-3", code: "3-3",
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
      concept: {
        id: "cieigeo-u3-s3-map", title: "Map interpretation",
        skill: "Read and interpret geographical maps.",
        sections: [
          { heading: "Topographic maps", body: "Contour lines show relief. Close contours = steep; far apart = gentle. Spot heights = exact elevations. River symbols, road symbols, settlement symbols." },
          { heading: "Map elements", body: "Scale: 1:50,000 means 1cm = 500m. Grid references: 4-figure (km), 6-figure (100m). Legend explains symbols. Compass shows direction." },
          { heading: "Thematic maps", body: "Choropleth: shaded regions by value. Isoline: lines of equal value (temperature, pressure). Proportional symbols: sized by value (population)." },
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
        questions: [
          {
            id: "cieigeo-u3-mp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does a contour line show?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Points of equal height" }, { id: "b", text: "Temperature" }, { id: "c", text: "Population" }, { id: "d", text: "Rainfall" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Contour", statement: "Equal height." }],
              steps: [{ reasoning: "Contour = line of equal elevation.", marks: 1, markCode: "M" }],
              finalAnswer: "Equal height line",
            },
          },
          {
            id: "cieigeo-u3-mp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What does a 1:50,000 scale mean?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Scale", statement: "Map:ground ratio." }],
              steps: [
                { reasoning: "1cm on map = 50,000cm (500m) on ground.", marks: 1, markCode: "M" },
                { reasoning: "Map is 1/50,000 of actual size.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "1cm = 500m",
            },
          },
          {
            id: "cieigeo-u3-mp-q3", difficulty: "core", totalMarks: 3,
            stem: "What do closely spaced contour lines indicate?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Contour interpretation", statement: "Gradient reading." }],
              steps: [
                { reasoning: "Close contours = steep slope.", marks: 1, markCode: "M" },
                { reasoning: "Far apart = gentle slope.", marks: 1, markCode: "M" },
                { reasoning: "Shows gradient/relief.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Steep slope",
            },
          },
          {
            id: "cieigeo-u3-mp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define topographic map, contour line, gradient, grid reference, scale, thematic map. (b) What is a contour line? (c) What does 1:50,000 scale mean? (d) What do close contours show? (e) What is a grid reference? (f) What is a choropleth map? (g) How do you find distance on a map? (h) Interpret a map showing a river valley with contour lines.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Map skills", statement: "Interpretation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Equal height line.", marks: 1, markCode: "M" },
                { reasoning: "(c) 1cm=500m.", marks: 1, markCode: "M" },
                { reasoning: "(d) Steep slope.", marks: 1, markCode: "M" },
                { reasoning: "(e) Location code.", marks: 1, markCode: "M" },
                { reasoning: "(f) Shaded regions by value.", marks: 1, markCode: "M" },
                { reasoning: "(g) Measure × scale.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid map interpretation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Map interpretation skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u3-mp-notes", title: "Map skills — notes",
      summary: "Contours=equal height; close=steep. Scale=map:ground ratio. Grid refs locate positions.",
      sections: [
        { heading: "Key idea", body: "Maps are essential tools for geographical analysis." },
        { heading: "Thematic maps", body: "Choropleth, isoline, proportional symbols show specific data." },
      ],
    },
  },
  {
    file: "lesson-3-4.ts", exportName: "lesson324",
    lesson: {
      id: "cieigeo-u3-lesson-3-4", code: "3-4",
      title: "Geographical Skills: Graphical and Statistical Analysis",
      goal: "I CAN analyse geographical data using statistical techniques.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 4: statistical skills"],
      vocabulary: [
        { term: "Mean", definition: "Average value — sum ÷ count." },
        { term: "Median", definition: "Middle value when data ordered." },
        { term: "Mode", definition: "Most frequent value." },
        { term: "Range", definition: "Difference between highest and lowest." },
        { term: "Correlation", definition: "Relationship between two variables." },
        { term: "Scatter graph", definition: "Shows correlation between variables." },
      ],
      concept: {
        id: "cieigeo-u3-s4-stat", title: "Statistical analysis",
        skill: "Analyse geographical data statistically.",
        sections: [
          { heading: "Central tendency", body: "Mean: sum ÷ count — affected by outliers. Median: middle value — resistant to outliers. Mode: most frequent — good for categorical data." },
          { heading: "Spread", body: "Range: max - min. Shows variability. Standard deviation: more precise measure of spread." },
          { heading: "Correlation", body: "Positive: both increase together. Negative: one increases, other decreases. No correlation: no relationship. Scatter graphs show patterns." },
        ],
        keyFormulas: [
          { name: "Mean", statement: "sum ÷ count" },
          { name: "Median", statement: "middle value" },
          { name: "Range", statement: "max - min" },
          { name: "Correlation", statement: "variable relationship" },
        ],
        workedExample: {
          problem: "Data: 10, 15, 20, 25, 100. Calculate mean, median, range.",
          solution: "Mean = 170/5 = 34. Median = 20. Range = 100-10 = 90. Mean skewed by outlier (100).",
        },
        questions: [
          {
            id: "cieigeo-u3-st-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the mean?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Average value — sum ÷ count" }, { id: "b", text: "Middle value" }, { id: "c", text: "Most frequent" }, { id: "d", text: "Highest value" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Mean", statement: "Average." }],
              steps: [{ reasoning: "Mean = sum ÷ count.", marks: 1, markCode: "M" }],
              finalAnswer: "Sum ÷ count",
            },
          },
          {
            id: "cieigeo-u3-st-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between mean and median?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Mean vs median", statement: "Average vs middle." }],
              steps: [
                { reasoning: "Mean = sum ÷ count; median = middle value.", marks: 1, markCode: "M" },
                { reasoning: "Mean affected by outliers; median resistant.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Average vs middle value",
            },
          },
          {
            id: "cieigeo-u3-st-q3", difficulty: "core", totalMarks: 3,
            stem: "What is positive correlation? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Correlation", statement: "Variable relationship." }],
              steps: [
                { reasoning: "Both variables increase together.", marks: 1, markCode: "M" },
                { reasoning: "Example: income and life expectancy.", marks: 1, markCode: "M" },
                { reasoning: "Shown on scatter graph.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Both increase together",
            },
          },
          {
            id: "cieigeo-u3-st-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define mean, median, mode, range, correlation, scatter graph. (b) What is mean? (c) What is median? (d) What is range? (e) What is positive correlation? Give example. (f) What is negative correlation? Give example. (g) Data: 5, 10, 15, 20, 25. Calculate mean, median, range. (h) Why might median be better than mean for skewed data?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Statistics", statement: "Analysis, calculation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Sum ÷ count.", marks: 1, markCode: "M" },
                { reasoning: "(c) Middle value.", marks: 1, markCode: "M" },
                { reasoning: "(d) Max - min.", marks: 1, markCode: "M" },
                { reasoning: "(e) Both increase; e.g. income/life expectancy.", marks: 1, markCode: "M" },
                { reasoning: "(f) One increases, other decreases; e.g. price/demand.", marks: 1, markCode: "M" },
                { reasoning: "(g) Mean=15, median=15, range=20.", marks: 1, markCode: "M" },
                { reasoning: "(h) Median resistant to outliers.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Statistical analysis of geographical data.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u3-st-notes", title: "Statistics — notes",
      summary: "Mean=average, median=middle, range=max-min. Correlation=variable relationship.",
      sections: [
        { heading: "Key idea", body: "Statistical measures summarise and reveal patterns in geographical data." },
        { heading: "Correlation", body: "Scatter graphs show relationships — positive, negative, or none." },
      ],
    },
  },
  {
    file: "lesson-3-5.ts", exportName: "lesson325",
    lesson: {
      id: "cieigeo-u3-lesson-3-5", code: "3-5",
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
      concept: {
        id: "cieigeo-u3-s5-gis", title: "GIS and remote sensing",
        skill: "Understand geospatial technologies.",
        sections: [
          { heading: "GIS", body: "Computer system for storing, analysing, displaying geographic data. Layers: roads, buildings, land use, elevation. Applications: planning, emergency response, resource management." },
          { heading: "Remote sensing", body: "Collecting data without physical contact — satellites, aircraft, drones. Types: visible, infrared, radar, thermal. Applications: weather forecasting, disaster monitoring, agriculture, urban planning." },
          { heading: "GPS", body: "Satellite-based location system. Uses: navigation, surveying, tracking, precision agriculture." },
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
        questions: [
          {
            id: "cieigeo-u3-gis-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is GIS?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Geographic Information System" }, { id: "b", text: "A type of satellite" }, { id: "c", text: "A weather pattern" }, { id: "d", text: "A landform" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "GIS", statement: "Geographic data system." }],
              steps: [{ reasoning: "GIS = geographic information system.", marks: 1, markCode: "M" }],
              finalAnswer: "Geographic Information System",
            },
          },
          {
            id: "cieigeo-u3-gis-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is remote sensing?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Remote sensing", statement: "Satellite/aircraft data." }],
              steps: [
                { reasoning: "Collecting data without physical contact.", marks: 1, markCode: "M" },
                { reasoning: "Uses satellites, aircraft, drones.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Remote data collection",
            },
          },
          {
            id: "cieigeo-u3-gis-q3", difficulty: "core", totalMarks: 3,
            stem: "What are applications of GIS?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "GIS applications", statement: "Uses of GIS." }],
              steps: [
                { reasoning: "Urban planning, emergency response.", marks: 1, markCode: "M" },
                { reasoning: "Resource management, environmental monitoring.", marks: 1, markCode: "M" },
                { reasoning: "Multiple valid applications.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Planning, emergency, resource management",
            },
          },
          {
            id: "cieigeo-u3-gis-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define GIS, remote sensing, satellite imagery, GPS, spatial data, raster data. (b) What is GIS? (c) What is remote sensing? (d) What is GPS? (e) What are GIS applications? (f) What are remote sensing applications? (g) What types of satellite imagery exist? (h) Explain how technology has transformed geographical research.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "GIS/remote sensing", statement: "Geospatial tech." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Geographic data system.", marks: 1, markCode: "M" },
                { reasoning: "(c) Remote data collection.", marks: 1, markCode: "M" },
                { reasoning: "(d) Location technology.", marks: 1, markCode: "M" },
                { reasoning: "(e) Planning, emergency, resource management.", marks: 1, markCode: "M" },
                { reasoning: "(f) Weather, disaster monitoring, agriculture.", marks: 1, markCode: "M" },
                { reasoning: "(g) Visible, infrared, radar, thermal.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid technology impact explanation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Geospatial technologies.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u3-gis-notes", title: "GIS/remote sensing — notes",
      summary: "GIS=geographic data analysis; remote sensing=satellite data; GPS=location. Transform geographical research.",
      sections: [
        { heading: "Key idea", body: "Technology enables large-scale, real-time geographical analysis." },
        { heading: "Applications", body: "Urban planning, disaster management, agriculture, environmental monitoring." },
      ],
    },
  },
];
