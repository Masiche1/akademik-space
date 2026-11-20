module.exports = [
  {
    file: "lesson-4-1.ts", exportName: "lesson541",
    lesson: {
      id: "ciealgeo-u4-lesson-4-1", code: "4-1",
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
      concept: {
        id: "ciealgeo-u4-s1-gis", title: "GIS and maps",
        skill: "Use spatial analysis tools.",
        sections: [
          { heading: "Map types", body: "Topographic: relief, contours. Thematic: specific data (population, climate). Choropleth: shaded regions. Isoline: lines of equal value." },
          { heading: "GIS", body: "Layers spatial data: physical, social, economic. Analyse patterns, relationships, changes over time. Applications: planning, disaster management, environmental monitoring." },
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
        questions: [
          {
            id: "ciealgeo-u4-gis-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is GIS?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Geographic Information System" }, { id: "b", text: "A type of map" }, { id: "c", text: "A climate model" }, { id: "d", text: "A survey method" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "GIS", statement: "Spatial analysis." }],
              steps: [{ reasoning: "GIS = Geographic Information System.", marks: 1, markCode: "M" }],
              finalAnswer: "Spatial analysis",
            },
          },
          {
            id: "ciealgeo-u4-gis-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between raster and vector data?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Raster vs vector", statement: "Data types." }],
              steps: [
                { reasoning: "Raster: grid-based.", marks: 1, markCode: "M" },
                { reasoning: "Vector: point/line/polygon.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Grid vs points/lines",
            },
          },
          {
            id: "ciealgeo-u4-gis-q3", difficulty: "core", totalMarks: 3,
            stem: "How does GIS help urban planning?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "GIS application", statement: "Planning." }],
              steps: [
                { reasoning: "Layers population, infrastructure, land use.", marks: 1, markCode: "M" },
                { reasoning: "Identifies patterns, gaps, conflicts.", marks: 1, markCode: "M" },
                { reasoning: "Informs evidence-based decisions.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Spatial planning",
            },
          },
          {
            id: "ciealgeo-u4-gis-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define GIS, raster data, vector data, projection, scale, topographic map. (b) What is GIS? (c) What is raster vs vector? (d) What is projection? (e) What is scale? (f) How does GIS help planning? (g) What are map types? (h) Evaluate importance of GIS in modern geography.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "GIS", statement: "Skills." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Spatial analysis.", marks: 1, markCode: "M" },
                { reasoning: "(c) Grid vs points/lines.", marks: 1, markCode: "M" },
                { reasoning: "(d) Flat representation method.", marks: 1, markCode: "M" },
                { reasoning: "(e) Map:ground ratio.", marks: 1, markCode: "M" },
                { reasoning: "(f) Layers, patterns, decisions.", marks: 1, markCode: "M" },
                { reasoning: "(g) Topographic, thematic, choropleth.", marks: 1, markCode: "M" },
                { reasoning: "(h) Essential for spatial analysis.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "GIS and maps skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u4-gis-notes", title: "GIS — notes",
      summary: "GIS=spatial analysis. Raster=grid, vector=points/lines/polygons. Map types vary.",
      sections: [
        { heading: "Key idea", body: "GIS integrates spatial data for analysis and decision-making." },
        { heading: "Applications", body: "Planning, disaster management, environmental monitoring." },
      ],
    },
  },
  {
    file: "lesson-4-2.ts", exportName: "lesson542",
    lesson: {
      id: "ciealgeo-u4-lesson-4-2", code: "4-2",
      title: "Fieldwork Skills and Data Analysis",
      goal: "I CAN conduct fieldwork and analyse geographical data.",
      standards: ["Cambridge A Level Geography 9696", "Paper 3: fieldwork"],
      vocabulary: [
        { term: "Fieldwork", definition: "Data collection outside classroom." },
        { term: "Primary data", definition: "Data collected first-hand." },
        { term: "Secondary data", definition: "Data from existing sources." },
        { term: "Sampling", definition: "Selecting subset for study." },
        { term: "Reliability", definition: "Consistency of results." },
        { term: "Validity", definition: "Measuring what intended." },
      ],
      concept: {
        id: "ciealgeo-u4-s2-field", title: "Fieldwork",
        skill: "Conduct and evaluate fieldwork.",
        sections: [
          { heading: "Data types", body: "Primary: surveys, observations, measurements. Secondary: census, maps, reports. Triangulation: combining methods for reliability." },
          { heading: "Sampling", body: "Random: unbiased but may miss areas. Systematic: regular intervals. Stratified: proportional to groups. Opportunity: convenient but biased." },
          { heading: "Evaluation", body: "Reliability: consistent results. Validity: measuring intended. Ethics: permission, safety, confidentiality." },
        ],
        keyFormulas: [
          { name: "Primary", statement: "first-hand" },
          { name: "Secondary", statement: "existing" },
          { name: "Sampling", statement: "subset selection" },
        ],
        workedExample: {
          problem: "How would you measure pedestrian flows in a city centre?",
          solution: "Primary data: count pedestrians at locations/times. Secondary: transport data. Stratified sampling across areas/times. Ensure reliability with repeat counts.",
        },
        questions: [
          {
            id: "ciealgeo-u4-fld-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is primary data?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Data collected first-hand" }, { id: "b", text: "Data from existing sources" }, { id: "c", text: "A type of map" }, { id: "d", text: "A statistical test" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Primary", statement: "First-hand." }],
              steps: [{ reasoning: "Primary = collected first-hand.", marks: 1, markCode: "M" }],
              finalAnswer: "First-hand data",
            },
          },
          {
            id: "ciealgeo-u4-fld-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between reliability and validity?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Reliability vs validity", statement: "Consistency vs accuracy." }],
              steps: [
                { reasoning: "Reliability: consistent results.", marks: 1, markCode: "M" },
                { reasoning: "Validity: measuring intended.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Consistency vs accuracy",
            },
          },
          {
            id: "ciealgeo-u4-fld-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the main sampling methods?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Sampling", statement: "Methods." }],
              steps: [
                { reasoning: "Random, systematic, stratified, opportunity.", marks: 1, markCode: "M" },
                { reasoning: "Each has advantages/disadvantages.", marks: 1, markCode: "M" },
                { reasoning: "Choice affects representativeness.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Sampling methods",
            },
          },
          {
            id: "ciealgeo-u4-fld-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define fieldwork, primary data, secondary data, sampling, reliability, validity. (b) What is primary data? (c) What is secondary? (d) What is reliability vs validity? (e) What are sampling methods? (f) What is triangulation? (g) What are ethics in fieldwork? (h) Evaluate importance of reliable fieldwork data.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Fieldwork", statement: "Skills." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) First-hand.", marks: 1, markCode: "M" },
                { reasoning: "(c) Existing sources.", marks: 1, markCode: "M" },
                { reasoning: "(d) Consistency vs accuracy.", marks: 1, markCode: "M" },
                { reasoning: "(e) Random, systematic, stratified.", marks: 1, markCode: "M" },
                { reasoning: "(f) Combining methods.", marks: 1, markCode: "M" },
                { reasoning: "(g) Permission, safety, confidentiality.", marks: 1, markCode: "M" },
                { reasoning: "(h) Reliable data essential for conclusions.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Fieldwork skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u4-fld-notes", title: "Fieldwork — notes",
      summary: "Primary=first-hand, secondary=existing. Sampling methods affect representativeness.",
      sections: [
        { heading: "Key idea", body: "Good fieldwork requires reliable, valid, ethical data collection." },
        { heading: "Evaluation", body: "Reliability (consistent) and validity (accurate) both essential." },
      ],
    },
  },
  {
    file: "lesson-4-3.ts", exportName: "lesson543",
    lesson: {
      id: "ciealgeo-u4-lesson-4-3", code: "4-3",
      title: "Geographical Enquiry and Essay Skills",
      goal: "I CAN structure geographical enquiries and write extended responses.",
      standards: ["Cambridge A Level Geography 9696", "Paper 3: enquiry"],
      vocabulary: [
        { term: "Geographical enquiry", definition: "Investigation of geographical question." },
        { term: "Hypothesis", definition: "Testable prediction." },
        { term: "Case study", definition: "Detailed examination of example." },
        { term: "Synthesis", definition: "Combining multiple perspectives." },
        { term: "Evaluation", definition: "Judging quality of analysis." },
        { term: "Significance", definition: "Historical/geographical importance." },
      ],
      concept: {
        id: "ciealgeo-u4-s3-enq", title: "Geographical enquiry",
        skill: "Conduct enquiries and write essays.",
        sections: [
          { heading: "Enquiry process", body: "Question → hypothesis → data collection → analysis → conclusion → evaluation. Geographic questions often spatial: 'How does X vary with Y?'" },
          { heading: "Essay structure", body: "Introduction: context + argument. Body: points with evidence. Conclusion: answer question. PEEL: Point, Evidence, Explanation, Link." },
        ],
        keyFormulas: [
          { name: "Enquiry", statement: "question→data→conclusion" },
          { name: "PEEL", statement: "essay structure" },
        ],
        workedExample: {
          problem: "Write enquiry plan for 'How does house price vary with distance from city centre?'",
          solution: "Hypothesis: prices decrease with distance. Data: house prices at locations + distances. Analysis: scatter graph, correlation. Conclusion: relationship strength/direction.",
        },
        questions: [
          {
            id: "ciealgeo-u4-enq-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a geographical enquiry?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Investigation of geographical question" }, { id: "b", text: "A type of map" }, { id: "c", text: "A data table" }, { id: "d", text: "A statistical test" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Enquiry", statement: "Investigation." }],
              steps: [{ reasoning: "Enquiry = geographical investigation.", marks: 1, markCode: "M" }],
              finalAnswer: "Geographical investigation",
            },
          },
          {
            id: "ciealgeo-u4-enq-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is PEEL structure?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "PEEL", statement: "Essay structure." }],
              steps: [
                { reasoning: "Point, Evidence, Explanation, Link.", marks: 1, markCode: "M" },
                { reasoning: "Used for essay paragraphs.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Point, Evidence, Explanation, Link",
            },
          },
          {
            id: "ciealgeo-u4-enq-q3", difficulty: "core", totalMarks: 3,
            stem: "How do you structure a geographical enquiry?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Enquiry", statement: "Process." }],
              steps: [
                { reasoning: "Question → hypothesis → data → analysis → conclusion.", marks: 1, markCode: "M" },
                { reasoning: "Geographic questions often spatial.", marks: 1, markCode: "M" },
                { reasoning: "Evaluation essential.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Question→data→conclusion",
            },
          },
          {
            id: "ciealgeo-u4-enq-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define enquiry, hypothesis, case study, synthesis, evaluation, significance. (b) What is enquiry? (c) What is hypothesis? (d) What is PEEL? (e) How structure enquiry? (f) What is case study? (g) What is synthesis? (h) Write enquiry plan for 'How does house price vary with distance from centre?'",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Enquiry", statement: "Skills." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Investigation.", marks: 1, markCode: "M" },
                { reasoning: "(c) Testable prediction.", marks: 1, markCode: "M" },
                { reasoning: "(d) PEEL structure.", marks: 1, markCode: "M" },
                { reasoning: "(e) Question→data→conclusion.", marks: 1, markCode: "M" },
                { reasoning: "(f) Detailed example.", marks: 1, markCode: "M" },
                { reasoning: "(g) Combining perspectives.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid enquiry plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Geographical enquiry skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u4-enq-notes", title: "Enquiry — notes",
      summary: "Enquiry=question→hypothesis→data→conclusion. PEEL structure for essays.",
      sections: [
        { heading: "Key idea", body: "Geographical enquiry tests spatial relationships and patterns." },
        { heading: "Essays", body: "PEEL structure ensures clear argument with evidence." },
      ],
    },
  },
  {
    file: "lesson-4-4.ts", exportName: "lesson544",
    lesson: {
      id: "ciealgeo-u4-lesson-4-4", code: "4-4",
      title: "Contemporary Geographical Issues",
      goal: "I CAN analyse current geographical challenges and solutions.",
      standards: ["Cambridge A Level Geography 9696", "Paper 4: contemporary"],
      vocabulary: [
        { term: "Climate change", definition: "Long-term climate alteration." },
        { term: "Sea level rise", definition: "Rising ocean levels from warming." },
        { term: "Food security", definition: "Reliable access to sufficient food." },
        { term: "Water stress", definition: "Demand exceeds supply." },
        { term: "Sustainable development", definition: "Meeting needs without compromising future." },
        { term: "Resilience", definition: "Ability to recover from shocks." },
      ],
      concept: {
        id: "ciealgeo-u4-s4-cont", title: "Contemporary issues",
        skill: "Analyse current geographical challenges.",
        sections: [
          { heading: "Climate change", body: "Rising temperatures, sea level rise, extreme weather. Impacts: agriculture, water, health, displacement. Mitigation vs adaptation." },
          { heading: "Resource issues", body: "Food security, water stress, energy transitions. Population growth vs resource limits." },
          { heading: "Solutions", body: "Renewable energy, sustainable agriculture, water management, international cooperation." },
        ],
        keyFormulas: [
          { name: "Climate change", statement: "long-term alteration" },
          { name: "Sea level rise", statement: "ocean warming" },
          { name: "Resilience", statement: "recovery ability" },
        ],
        workedExample: {
          problem: "How can cities adapt to climate change?",
          solution: "Green infrastructure, flood defences, heat action plans, resilient building codes, water management.",
        },
        questions: [
          {
            id: "ciealgeo-u4-cont-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is climate change?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Long-term climate alteration" }, { id: "b", text: "Daily weather" }, { id: "c", text: "Seasonal change" }, { id: "d", text: "A natural cycle" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Climate change", statement: "Long-term alteration." }],
              steps: [{ reasoning: "Climate change = long-term alteration.", marks: 1, markCode: "M" }],
              finalAnswer: "Long-term alteration",
            },
          },
          {
            id: "ciealgeo-u4-cont-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is sea level rise caused by?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Sea level rise", statement: "Ocean warming." }],
              steps: [
                { reasoning: "Thermal expansion of water.", marks: 1, markCode: "M" },
                { reasoning: "Melting glaciers/ice caps.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Thermal expansion + melting",
            },
          },
          {
            id: "ciealgeo-u4-cont-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the impacts of climate change?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Climate impacts", statement: "Effects." }],
              steps: [
                { reasoning: "Agriculture, water, health affected.", marks: 1, markCode: "M" },
                { reasoning: "Extreme weather, displacement.", marks: 1, markCode: "M" },
                { reasoning: "Disproportionate impact on poor.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Agriculture, water, health",
            },
          },
          {
            id: "ciealgeo-u4-cont-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define climate change, sea level rise, food security, water stress, sustainable development, resilience. (b) What is climate change? (c) What causes sea level rise? (d) What are climate impacts? (e) What is water stress? (f) What are solutions? (g) What is resilience? (h) Evaluate whether countries should prioritise mitigation or adaptation.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Contemporary", statement: "Issues, solutions." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Long-term alteration.", marks: 1, markCode: "M" },
                { reasoning: "(c) Thermal expansion + melting.", marks: 1, markCode: "M" },
                { reasoning: "(d) Agriculture, water, health.", marks: 1, markCode: "M" },
                { reasoning: "(e) Demand exceeds supply.", marks: 1, markCode: "M" },
                { reasoning: "(f) Renewables, sustainable agriculture.", marks: 1, markCode: "M" },
                { reasoning: "(g) Recovery ability.", marks: 1, markCode: "M" },
                { reasoning: "(h) Both needed — context dependent.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Contemporary issues analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u4-cont-notes", title: "Contemporary — notes",
      summary: "Climate change impacts agriculture/water/health. Mitigation vs adaptation needed.",
      sections: [
        { heading: "Key idea", body: "Contemporary challenges require both mitigation and adaptation." },
        { heading: "Resilience", body: "Ability to recover from shocks crucial for vulnerable communities." },
      ],
    },
  },
];
