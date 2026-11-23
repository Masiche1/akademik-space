import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "s7-u4-lesson-4-3",
  code: "4-3",
  title: "Capstone: Interdisciplinary Science and Review",
  goal: "I CAN apply concepts from biology, chemistry, and earth science together to analyze real-world phenomena.",
  standards: [
    "MS-ESS3-1",
    "MS-ESS3-4",
    "MS-LS2-1",
    "SEP: Constructing Explanations",
    "CCC: Systems and System Models",
  ],
  vocabulary: [
    {
      term: "Interdisciplinary",
      definition:
        "Combining knowledge and methods from multiple scientific fields.",
    },
    {
      term: "Feedback",
      definition:
        "Output that influences input — stabilizing or amplifying system behavior.",
    },
    {
      term: "Human impact",
      definition: "The effect of human activities on natural systems.",
    },
    {
      term: "Sustainability",
      definition:
        "Meeting present needs without compromising future generations' ability to meet theirs.",
    },
    {
      term: "Eutrophication",
      definition:
        "Excess nutrients causing algal blooms that deplete oxygen in water.",
    },
    {
      term: "Bioaccumulation",
      definition:
        "Build-up of substances in organisms over time through the food chain.",
    },
    {
      term: "Carbon footprint",
      definition:
        "Total greenhouse gas emissions caused by an individual, event, or product.",
    },
    {
      term: "Mitigation",
      definition:
        "Actions that reduce the severity of a problem or its effects.",
    },
  ],
  concepts: [
    {
      id: "s7-u4-interdisciplinary",
      title: "Connecting science disciplines",
      skill:
        "Apply biology, chemistry, and earth science together to understand complex phenomena.",
      lesson: {
        sections: [
          {
            heading: "Real problems are interdisciplinary",
            body: "Climate change involves: physics (energy transfer), chemistry (greenhouse gases), biology (ecosystem impacts), earth science (atmosphere, oceans). Water pollution involves chemistry (contaminants), biology (organism effects), earth science (watershed dynamics).",
          },
          {
            heading: "Systems thinking",
            body: "Everything is connected: human activities → emissions → climate → ecosystems → human health. Feedback loops amplify or stabilize. Understanding one part requires understanding the whole system.",
          },
          {
            heading: "Science for solutions",
            body: "Interdisciplinary science informs solutions: renewable energy (physics + chemistry), conservation (biology + ecology), pollution control (chemistry + engineering). Effective solutions address root causes across systems.",
          },
        ],
        keyFormulas: [
          {
            name: "Interdisciplinary",
            statement: "Multiple fields combine for complete understanding",
          },
          {
            name: "Systems",
            statement: "Everything connected through feedback",
          },
        ],
        workedExample: {
          problem:
            "Explain how fertilizer runoff affects a lake ecosystem using multiple disciplines.",
          solution:
            "Chemistry: nutrients dissolve in water; biology: algae bloom depletes oxygen; earth science: runoff carries nutrients from land; result: fish kills — all disciplines connect.",
        },
      },
      questions: [
        {
          id: "s7-u4-interdisciplinary-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'interdisciplinary' science mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Science within one field" },
              { id: "b", text: "Combining multiple scientific fields" },
              { id: "c", text: "Science without experiments" },
              { id: "d", text: "Theoretical science only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interdisciplinary",
                statement: "Multiple fields combined.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interdisciplinary = using multiple scientific disciplines together.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Multiple fields",
            commonErrors: ["Thinking it means single discipline."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u4-interdisciplinary-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how photosynthesis connects chemistry and biology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chemical process",
                statement: "CO₂ + H₂O → glucose + O₂ is a chemical reaction.",
              },
              {
                kind: "principle",
                name: "Biological function",
                statement: "Plants use it for energy and growth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chemically: photosynthesis is a chemical reaction converting light energy to chemical energy.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Biologically: plants use it to produce food and release oxygen for other organisms.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "It connects: chemistry provides mechanism, biology provides function and context.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Chemistry explains the reaction; biology explains its role in life.",
            commonErrors: ["Treating as purely chemical or biological."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "s7-u4-interdisciplinary-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a single human activity (driving a car) affects multiple Earth systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System interconnection",
                statement: "One activity cascades through systems.",
              },
              {
                kind: "principle",
                name: "Human impact",
                statement:
                  "Activities affect atmosphere, hydrosphere, biosphere.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Atmosphere: CO₂ emissions contribute to greenhouse effect.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Biosphere: oil extraction and spills affect ecosystems; road construction fragments habitats.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Hydrosphere: oil refining pollutes water; climate change affects precipitation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Geosphere: mining for materials disturbs land; infrastructure alters landscapes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Affects atmosphere (emissions), biosphere (habitats), hydrosphere (pollution), geosphere (mining).",
            commonErrors: ["Only mentioning emissions."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "s7-u4-interdisciplinary-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyze this scenario: A factory discharges nitrogen-rich wastewater into a river.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe the chemical and biological processes involved.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how this affects downstream ecosystems.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest two solutions using interdisciplinary thinking.",
              marks: 2,
            },
            { label: "d", prompt: "What policy would prevent this?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eutrophication",
                statement: "Excess nutrients cause algal blooms.",
              },
              {
                kind: "principle",
                name: "Interdisciplinary solutions",
                statement: "Chemistry + biology + policy together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chemistry: nitrogen compounds dissolve and travel downstream.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Biology: algae use nutrients, bloom rapidly, then die and decompose.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Decomposition consumes oxygen → hypoxia → fish kills.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Downstream: oxygen depletion kills fish/invertebrates; food web collapses.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Drinking water contaminated; recreation harmed; biodiversity lost.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Eutrophication can create dead zones lasting years.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Solution 1: treat wastewater to remove nitrogen before discharge (chemistry + engineering).",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Solution 2: restore wetlands as natural nutrient filters (biology + earth science).",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Policy: regulate discharge limits, require treatment, monitor water quality.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning: "Enforcement + incentives for cleaner production.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) nutrients→algae→decomposition→hypoxia (b) ecosystem collapse (c) treatment + wetlands (d) discharge regulations.",
            commonErrors: ["Only describing problem, not solutions."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "s7-u4-sustainability",
      title: "Human impact and sustainability",
      skill:
        "Evaluate human impacts on Earth systems and propose sustainable solutions.",
      lesson: {
        sections: [
          {
            heading: "Human impacts",
            body: "Deforestation, pollution, overfishing, climate change — human activities stress Earth systems. Impacts cascade: one change affects multiple systems. Understanding impacts requires systems thinking.",
          },
          {
            heading: "Sustainability principles",
            body: "Renewable resources used at sustainable rates. Pollution minimized or eliminated. Biodiversity protected. Future needs considered alongside present. Circular economy: waste becomes resource.",
          },
          {
            heading: "Solutions require trade-offs",
            body: "Every solution has costs: solar requires land and materials; recycling requires energy; conservation requires behavior change. Evaluate solutions by: effectiveness, feasibility, equity, and long-term sustainability.",
          },
        ],
        keyFormulas: [
          {
            name: "Sustainability",
            statement: "Meet needs without compromising future",
          },
          { name: "Trade-offs", statement: "Every solution has costs" },
        ],
        workedExample: {
          problem: "Is electric vehicles 'sustainable'?",
          solution:
            "Depends: zero tailpipe emissions but battery production has environmental costs; electricity source matters; still better than fossil fuels overall.",
        },
      },
      questions: [
        {
          id: "s7-u4-sustainability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does sustainability mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using resources as fast as possible" },
              { id: "b", text: "Meeting needs without compromising future" },
              { id: "c", text: "Stopping all development" },
              { id: "d", text: "Only using renewable energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainability",
                statement: "Present needs without compromising future.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sustainability = balance between present and future needs.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Meet needs without compromising future",
            commonErrors: ["Thinking it means no development."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u4-sustainability-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'reduce, reuse, recycle' is more effective than just recycling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Waste hierarchy",
                statement: "Prevention > reuse > recycling.",
              },
              {
                kind: "principle",
                name: "Energy cost",
                statement:
                  "Recycling still requires energy; reducing/reusing avoids it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reducing waste prevents resource use and pollution at source.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Reusing avoids manufacturing new products entirely.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Recycling is last resort — still uses energy and resources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reduce/reuse prevent waste before it happens; recycling is last resort.",
            commonErrors: ["Thinking recycling alone solves waste."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "s7-u4-sustainability-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A city wants to reduce plastic pollution. Evaluate three possible solutions and their trade-offs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Solution evaluation",
                statement:
                  "Consider effectiveness, feasibility, and trade-offs.",
              },
              {
                kind: "principle",
                name: "Systems approach",
                statement: "Address multiple points in the system.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ban single-use plastics: effective but needs alternatives and enforcement.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Improve recycling: convenient but requires infrastructure and participation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Biodegradable plastics: reduces persistence but production costs and composting needed.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Best: combination approach — reduce + recycle + alternatives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ban+recycle+alternatives combined is most effective; each has trade-offs.",
            commonErrors: [
              "Choosing one solution without considering trade-offs.",
            ],
            examinerNote: "R1, B1, A2.",
          },
        },
        {
          id: "s7-u4-sustainability-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Your community is deciding between building a new coal plant or investing in solar+storage.",
          parts: [
            {
              label: "a",
              prompt: "List two advantages of each option.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Identify two environmental impacts of coal vs solar.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What economic factors should be considered?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Write a recommendation with justification.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade-off analysis",
                statement: "Compare benefits and costs across systems.",
              },
              {
                kind: "principle",
                name: "Sustainability",
                statement: "Long-term vs short-term impacts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Coal: reliable, proven technology, high energy density.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Solar: renewable, no emissions, lower operating costs long-term.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Coal: CO₂ emissions, air pollution, mining impacts.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Solar: land use, manufacturing impacts, intermittent supply.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Or: solar has much lower lifecycle emissions overall.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Economic: upfront costs, operating costs, fuel costs, job creation, energy prices.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Long-term: solar costs declining; coal has hidden environmental costs.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Recommendation: solar+storage for sustainability, possibly hybrid during transition.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) coal reliable/dense; solar renewable/clean (b) coal emits/mines; solar land/manufacturing (c) costs/jobs/prices (d) solar recommended.",
            commonErrors: ["Ignoring long-term costs or trade-offs."],
            examinerNote: "4+3+2+1 = 10.",
          },
        },
      ],
    },
    {
      id: "s7-u4-review",
      title: "Course review and synthesis",
      skill:
        "Integrate all grade 7 science concepts for comprehensive understanding.",
      lesson: {
        sections: [
          {
            heading: "Complete concept map",
            body: "- **Life science**: cells, body systems, homeostasis, ecosystems, energy flow, nutrient cycling\n- **Physical science**: atoms, density, chemical reactions, energy changes\n- **Earth science**: rock cycle, plate tectonics, water cycle, weather, resources\n- **Scientific practice**: investigation design, data analysis, evidence evaluation, communication",
          },
          {
            heading: "Big ideas",
            body: "Matter and energy flow through systems. Structure determines function. Systems interact through feedback. Science is evidence-based and provisional. Understanding requires multiple perspectives.",
          },
          {
            heading: "Science in your life",
            body: "Everyday phenomena connect to these concepts: cooking (chemistry), exercise (biology), weather (earth science), recycling (sustainability). Science isn't just in textbooks — it's how we understand and interact with the world.",
          },
        ],
        keyFormulas: [
          {
            name: "Systems",
            statement: "Everything connected through feedback loops",
          },
          {
            name: "Evidence",
            statement: "Scientific claims require testing and replication",
          },
        ],
        workedExample: {
          problem:
            "Review: Explain photosynthesis using chemistry and biology concepts.",
          solution:
            "Chemistry: CO₂ + H₂O → C₆H₁₂O₆ + O₂ is a chemical reaction storing energy. Biology: plants use it for growth; oxygen supports animal respiration; energy flows through ecosystems.",
        },
      },
      questions: [
        {
          id: "s7-u4-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main energy source for most ecosystems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soil" },
              { id: "b", text: "Sunlight" },
              { id: "c", text: "Water" },
              { id: "d", text: "Wind" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy source",
                statement: "Sunlight captured by producers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sunlight is primary energy source for most ecosystems.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Sunlight",
            commonErrors: ["Thinking soil or water is energy source."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u4-review-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the rock cycle using one example pathway.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rock cycle",
                statement: "Rocks transform between types through processes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Example: igneous rock weathers → sediment → sedimentary rock → metamorphic → melts → igneous.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Each transformation driven by energy (solar or internal heat).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Cycle has no beginning or end — continuous recycling.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Igneous → sedimentary → metamorphic → igneous via weathering, burial, heat, melting.",
            commonErrors: ["Describing as linear process."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "s7-u4-review-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the water cycle connects to weather and climate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water cycle",
                statement: "Evaporation, condensation, precipitation, runoff.",
              },
              {
                kind: "principle",
                name: "Weather/climate",
                statement: "Atmospheric conditions affect water distribution.",
              },
            ],
            steps: [
              {
                reasoning: "Solar energy evaporates water → atmosphere.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Condensation forms clouds → precipitation returns water to surface.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Weather patterns determine where/when precipitation occurs.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Climate is long-term pattern of these processes; changes affect water availability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Water cycle driven by solar energy; weather determines distribution; climate sets patterns.",
            commonErrors: ["Treating weather and climate as same."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "s7-u4-review-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Comprehensive problem: A community is experiencing drought and must choose water conservation strategies.",
          parts: [
            {
              label: "a",
              prompt: "Explain the water cycle processes affected by drought.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe two impacts on local ecosystems.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest three conservation strategies.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain how this connects biology, earth science, and chemistry.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water cycle",
                statement: "Drought reduces precipitation and soil moisture.",
              },
              {
                kind: "principle",
                name: "Interdisciplinary",
                statement: "Multiple sciences inform solutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reduced precipitation → less infiltration → lower groundwater.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Increased evaporation → higher atmospheric demand → less runoff.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Soil moisture depleted → plant stress → reduced transpiration.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Impact 1: plants die → food web disruption → animal populations decline.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Impact 2: water bodies shrink → habitat loss → species migration or extinction.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Or: increased wildfire risk → further habitat destruction.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Strategy 1: reduce consumption (shorter showers, efficient fixtures).",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Strategy 2: capture rainwater; Strategy 3: drought-resistant landscaping.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Biology: ecosystem impacts; earth science: water cycle/climate; chemistry: water quality/contaminants.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Solutions require understanding all three disciplines.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) reduced infiltration/groundwater (b) ecosystem collapse (c) conserve/capture/drought-resistant (d) all sciences connect.",
            commonErrors: ["Only addressing one aspect or discipline."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
