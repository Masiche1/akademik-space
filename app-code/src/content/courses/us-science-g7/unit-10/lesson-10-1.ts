import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "s7-u10-lesson-10-1",
  code: "10-1",
  title: "Earth's Resources and Human Use",
  goal: "I CAN describe how humans use Earth's resources, evaluate resource sustainability, and analyze the environmental impact of resource extraction.",
  standards: [
    "MS-ESS3-1",
    "MS-ESS3-2",
    "MS-ESS3-3",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Resource extraction",
      definition:
        "The removal of natural resources from the Earth for human use.",
    },
    {
      term: "Mining",
      definition: "The extraction of minerals and metals from the Earth.",
    },
    {
      term: "Deforestation",
      definition:
        "The clearing of forests for agriculture, development or resources.",
    },
    {
      term: "Overfishing",
      definition: "Harvesting fish faster than they can reproduce.",
    },
    {
      term: "Ecosystem service",
      definition:
        "A benefit humans receive from ecosystems, such as clean water or pollination.",
    },
    {
      term: "Environmental impact",
      definition: "The effect of human activities on the environment.",
    },
    {
      term: "Resource depletion",
      definition:
        "The reduction of a resource to the point where it's no longer available.",
    },
  ],
  concepts: [
    {
      id: "s7-u10-resource-use",
      title: "How humans use Earth's resources",
      skill: "Describe how humans extract and use Earth's resources.",
      lesson: {
        sections: [
          {
            heading: "Types of resource use",
            body: "Humans use Earth's resources for:\n\n- **Energy**: fossil fuels (coal, oil, gas), solar, wind, hydroelectric, nuclear.\n- **Materials**: metals (construction), wood (building), plastics (from oil).\n- **Food**: agriculture, fishing, livestock.\n- **Water**: drinking, irrigation, industry.\n\nEach use has environmental impacts that must be managed.",
          },
          {
            heading: "Extraction methods",
            body: "- **Mining**: extracting minerals and metals from underground or surface deposits.\n- **Drilling**: extracting oil and natural gas.\n- **Logging**: cutting trees for timber.\n- **Fishing**: harvesting fish and other aquatic organisms.\n- **Agriculture**: growing crops and raising livestock.",
          },
        ],
        keyFormulas: [
          {
            name: "Resource uses",
            statement: "Energy, materials, food, water.",
          },
          {
            name: "Extraction methods",
            statement: "Mining, drilling, logging, fishing, agriculture.",
          },
          {
            name: "Environmental impact",
            statement: "Each extraction method has environmental costs.",
          },
        ],
        workedExample: {
          problem: "How does mining affect the environment?",
          solution:
            "Mining can cause habitat destruction, water pollution, soil erosion, and landscape changes.",
        },
      },
      questions: [
        {
          id: "s7-u10-use-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a use of Earth's resources?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy production" },
              { id: "b", text: "Building materials" },
              { id: "c", text: "Creating new elements" },
              { id: "d", text: "Food production" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Resource uses",
                statement:
                  "Energy, materials, food, water — not creating elements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Humans use resources for energy, materials, food and water; we cannot create new elements.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Creating new elements.",
            commonErrors: ["Choosing a valid use."],
          },
        },
        {
          id: "s7-u10-use-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three methods of resource extraction and their products.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Extraction methods",
                statement: "Mining, drilling, logging, fishing, agriculture.",
              },
            ],
            steps: [
              {
                reasoning: "Mining → minerals and metals.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Drilling → oil and natural gas.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Logging → timber; fishing → fish; agriculture → crops/livestock.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Mining (minerals), drilling (oil/gas), logging (timber), fishing (fish), agriculture (food).",
            commonErrors: ["Listing only one method."],
          },
        },
        {
          id: "s7-u10-use-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how logging affects the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Logging impacts",
                statement:
                  "Deforestation, habitat loss, soil erosion, climate effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Removes trees, destroying habitat for many species.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Reduces photosynthesis, increasing atmospheric CO2.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Causes soil erosion and landslides without tree roots.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Changes local climate (less shade, more runoff).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Habitat loss, less photosynthesis, soil erosion, climate changes.",
            commonErrors: ["Saying logging has no environmental impact."],
          },
        },
        {
          id: "s7-u10-use-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A community depends on a nearby forest for timber, water and recreation.",
          parts: [
            {
              label: "a",
              prompt: "What resources does the forest provide?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does logging affect each resource?",
              marks: 2,
            },
            { label: "c", prompt: "What are ecosystem services?", marks: 2 },
            {
              label: "d",
              prompt: "How can logging be done sustainably?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Forest resources",
                statement: "Timber, water, recreation, ecosystem services.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Timber, clean water, recreation, wildlife habitat, carbon storage.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Logging reduces timber temporarily but affects water quality, habitat, recreation.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Benefits humans get from ecosystems: clean water, pollination, climate regulation.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Selective cutting, replanting, protected areas, certification.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Timber/water/recreation (b) Affects all (c) Benefits from ecosystems (d) Selective cutting, replanting.",
            commonErrors: ["Saying forests only provide timber."],
          },
        },
      ],
    },
    {
      id: "s7-u10-sustainability",
      title: "Resource Sustainability",
      skill:
        "Evaluate whether resource use is sustainable and propose alternatives.",
      lesson: {
        sections: [
          {
            heading: "Sustainable vs unsustainable",
            body: "**Sustainable** resource use meets present needs without compromising future generations. **Unsustainable** use depletes resources faster than they can be replenished.\n\n- **Sustainable**: renewable energy, managed forestry, sustainable fishing.\n- **Unsustainable**: overfishing, deforestation, fossil fuel dependence.",
          },
          {
            heading: "Alternatives and solutions",
            body: "- **Energy**: solar, wind, geothermal instead of fossil fuels.\n- **Materials**: recycling, sustainable forestry, alternatives to plastics.\n- **Food**: sustainable agriculture, aquaculture, reduced food waste.\n- **Water**: conservation, recycling, pollution prevention.",
          },
        ],
        keyFormulas: [
          {
            name: "Sustainable",
            statement: "Meet present needs without compromising future.",
          },
          {
            name: "Unsustainable",
            statement: "Deplete faster than replenish.",
          },
          {
            name: "Alternatives",
            statement: "Renewables, recycling, sustainable practices.",
          },
        ],
        workedExample: {
          problem: "Is using solar energy sustainable? Why?",
          solution:
            "Yes — solar energy is renewable and doesn't deplete; it's sustainable if managed properly.",
        },
      },
      questions: [
        {
          id: "s7-u10-sustain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which resource use is sustainable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Overfishing" },
              { id: "b", text: "Deforestation" },
              { id: "c", text: "Solar energy" },
              { id: "d", text: "Fossil fuel burning" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainable",
                statement: "Meet present needs without compromising future.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solar energy is renewable and sustainable; the others deplete resources.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Solar energy.",
            commonErrors: ["Choosing a nonrenewable resource."],
          },
        },
        {
          id: "s7-u10-sustain-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between sustainable and unsustainable resource use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainable vs unsustainable",
                statement: "Replenished vs depleted.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sustainable: meets needs without depleting resources for future.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Unsustainable: depletes faster than replenished.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Example: managed forestry = sustainable; clear-cutting = unsustainable.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Sustainable = replenished; unsustainable = depleted.",
            commonErrors: ["Saying all resource use is sustainable."],
          },
        },
        {
          id: "s7-u10-sustain-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why overfishing is unsustainable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Overfishing",
                statement:
                  "Harvest faster than reproduction → population decline.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Overfishing harvests fish faster than they can reproduce.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Fish populations decline, affecting food webs and ecosystems.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Eventually, fish stocks collapse and can no longer support fishing.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Sustainable fishing limits catch to allow populations to recover.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Overfishing depletes fish faster than they reproduce → collapse.",
            commonErrors: ["Saying overfishing is sustainable."],
          },
        },
        {
          id: "s7-u10-sustain-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A town relies on well water for its residents.",
          parts: [
            {
              label: "a",
              prompt: "Is well water renewable? Explain.",
              marks: 2,
            },
            { label: "b", prompt: "What happens if it's overused?", marks: 2 },
            {
              label: "c",
              prompt: "How can water use be made sustainable?",
              marks: 2,
            },
            { label: "d", prompt: "What alternatives exist?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Groundwater sustainability",
                statement: "Renewable if recharged faster than used.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Renewable if rainfall replenishes aquifers; nonrenewable if depleted.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Aquifer depletes, wells dry up, land may sink (subsidence).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Conservation, rainwater collection, efficient fixtures, recharge protection.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Surface water, desalination, water recycling, conservation.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Renewable if recharged (b) Depletion, subsidence (c) Conservation, recharge (d) Surface water, desalination.",
            commonErrors: ["Saying groundwater is always renewable."],
          },
        },
      ],
    },
    {
      id: "s7-u10-engineering",
      title: "Engineering Solutions",
      skill:
        "Describe how engineering solutions address environmental problems.",
      lesson: {
        sections: [
          {
            heading: "Engineering for sustainability",
            body: "Engineers design solutions to environmental problems:\n\n- **Clean energy**: solar panels, wind turbines, geothermal systems.\n- **Water treatment**: filtration, desalination, recycling.\n- **Waste management**: recycling, composting, waste-to-energy.\n- **Sustainable buildings**: green roofs, energy-efficient design.\n- **Transportation**: electric vehicles, public transit, cycling infrastructure.",
          },
          {
            heading: "Design process",
            body: "Engineering solutions follow a design process:\n\n1. **Identify the problem** (e.g., air pollution).\n2. **Research** existing solutions and constraints.\n3. **Design** possible solutions.\n4. **Test** and evaluate.\n5. **Implement** the best solution.",
          },
        ],
        keyFormulas: [
          {
            name: "Engineering solutions",
            statement:
              "Clean energy, water treatment, waste management, sustainable buildings.",
          },
          {
            name: "Design process",
            statement: "Identify → research → design → test → implement.",
          },
          {
            name: "Sustainability",
            statement:
              "Solutions should be environmentally, economically, socially sustainable.",
          },
        ],
        workedExample: {
          problem: "How could engineering reduce plastic pollution?",
          solution:
            "Biodegradable plastics, better recycling systems, waste-to-energy, reduced packaging.",
        },
      },
      questions: [
        {
          id: "s7-u10-engineer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an engineering solution to environmental problems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Burning more fossil fuels" },
              { id: "b", text: "Solar panels" },
              { id: "c", text: "More mining" },
              { id: "d", text: "More deforestation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Engineering solutions",
                statement: "Clean energy, water treatment, waste management.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solar panels are an engineering solution; the others worsen problems.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Solar panels.",
            commonErrors: ["Choosing an option that worsens problems."],
          },
        },
        {
          id: "s7-u10-engineer-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three engineering solutions to environmental problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Engineering solutions",
                statement: "Clean energy, water treatment, waste management.",
              },
            ],
            steps: [
              {
                reasoning: "Solar panels/wind turbines for clean energy.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Water treatment plants for clean water.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Recycling systems, waste-to-energy for waste management.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Clean energy, water treatment, waste management.",
            commonErrors: ["Listing only one solution."],
          },
        },
        {
          id: "s7-u10-engineer-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the engineering design process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Design process",
                statement: "Identify → research → design → test → implement.",
              },
            ],
            steps: [
              {
                reasoning: "Identify the problem to solve.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Research existing solutions and constraints.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Design possible solutions.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Test, evaluate, and implement the best solution.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Identify → research → design → test → implement.",
            commonErrors: ["Skipping the research or testing steps."],
          },
        },
        {
          id: "s7-u10-engineer-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design an engineering solution to reduce air pollution in a city.",
          parts: [
            { label: "a", prompt: "What is the problem?", marks: 2 },
            { label: "b", prompt: "Propose two solutions.", marks: 2 },
            { label: "c", prompt: "What are the benefits of each?", marks: 2 },
            { label: "d", prompt: "What challenges might arise?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Engineering design",
                statement: "Problem → solutions → benefits → challenges.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Air pollution from vehicles, industry, heating.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Electric vehicles; public transit; clean energy; emissions standards.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "EVs: less tailpipe emissions. Transit: fewer cars. Clean energy: less pollution.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Cost, infrastructure, behavior change, energy source for EVs.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Pollution sources (b) EVs, transit (c) Less emissions (d) Cost, infrastructure.",
            commonErrors: ["Not considering challenges."],
          },
        },
      ],
    },
    {
      id: "s7-u10-integrated-review",
      title: "Integrated Review and Synthesis",
      skill: "Synthesize knowledge across all Grade 7 science strands.",
      lesson: {
        sections: [
          {
            heading: "Connecting the strands",
            body: "Grade 7 science integrates four strands:\n\n- **Life Science**: cells, body systems, ecosystems, matter cycling.\n- **Physical Science**: atoms, matter, mixtures, states of matter.\n- **Earth Science**: rocks, plate tectonics, water cycle, climate.\n- **Earth & Human Activity**: resources, sustainability, engineering solutions.",
          },
          {
            heading: "Science practices",
            body: "Throughout the year, you've practiced:\n\n- **Developing and using models** to explain phenomena.\n- **Planning and carrying out investigations** to answer questions.\n- **Analyzing and interpreting data** to draw conclusions.\n- **Constructing explanations** using evidence and reasoning.",
          },
        ],
        keyFormulas: [
          {
            name: "Four strands",
            statement: "Life, physical, Earth science, Earth & human activity.",
          },
          {
            name: "Science practices",
            statement: "Models, investigations, data analysis, explanations.",
          },
          {
            name: "Integration",
            statement: "Real-world problems require multiple strands.",
          },
        ],
        workedExample: {
          problem: "How do climate change and ecosystems connect?",
          solution:
            "Climate change affects ecosystems through temperature changes, habitat loss, and species migration — connecting Earth science and life science.",
        },
      },
      questions: [
        {
          id: "s7-u10-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which strand covers cells and body systems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physical Science" },
              { id: "b", text: "Life Science" },
              { id: "c", text: "Earth Science" },
              { id: "d", text: "Engineering" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Science strands",
                statement: "Life science = cells, body systems, ecosystems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Life science covers cells, body systems, ecosystems, matter cycling.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Life Science.",
            commonErrors: ["Choosing wrong strand."],
          },
        },
        {
          id: "s7-u10-review-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the four NGSS strands covered in Grade 7.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "NGSS strands",
                statement: "MS-LS, MS-PS, MS-ESS, MS-ESS3.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Life Science (MS-LS): cells, body systems, ecosystems.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Physical Science (MS-PS): matter, atoms, mixtures.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Earth Science (MS-ESS) and Earth & Human Activity (MS-ESS3).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Life Science, Physical Science, Earth Science, Earth & Human Activity.",
            commonErrors: ["Missing a strand."],
          },
        },
        {
          id: "s7-u10-review-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the carbon cycle connects life science and Earth science.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Carbon cycle",
                statement: "Connects biosphere and atmosphere.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photosynthesis (life science) removes CO2 from atmosphere (Earth science).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Respiration (life science) releases CO2 back to atmosphere.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This cycle links organisms and Earth's atmosphere.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Human activities (fossil fuels) disrupt this cycle, affecting both strands.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Carbon cycle connects organisms (life) and atmosphere (Earth) through photosynthesis/respiration.",
            commonErrors: ["Saying carbon cycle is only life science."],
          },
        },
        {
          id: "s7-u10-review-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A community wants to reduce its environmental impact.",
          parts: [
            {
              label: "a",
              prompt: "Which science strands are relevant?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What are two sources of pollution?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Propose two solutions using different strands.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "How would you evaluate if solutions work?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Integrated problem solving",
                statement: "Real problems need multiple strands.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "All strands: life (ecosystems), physical (pollution), Earth (climate), human activity (resources).",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Vehicle emissions, industrial pollution, waste.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Solar energy (physical/Earth); recycling (life/engineering); conservation (all).",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Measure pollution levels, track resource use, monitor ecosystem health.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) All strands (b) Emissions, waste (c) Solar, recycling (d) Measure pollution/resources.",
            commonErrors: ["Using only one strand."],
          },
        },
      ],
    },
  ],
};
