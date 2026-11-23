import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "s7-u9-lesson-9-3",
  code: "9-3",
  title: "Water Cycle, Weather and Climate",
  goal: "I CAN describe the water cycle in detail, explain how weather systems form, and distinguish between weather and climate.",
  standards: [
    "MS-ESS2-4",
    "MS-ESS2-5",
    "MS-ESS2-6",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Water cycle",
      definition:
        "The continuous movement of water through evaporation, condensation, precipitation and collection.",
    },
    {
      term: "Evaporation",
      definition:
        "The change of water from liquid to vapor, driven by solar energy.",
    },
    {
      term: "Condensation",
      definition:
        "The change of water vapor to liquid droplets, forming clouds.",
    },
    {
      term: "Precipitation",
      definition: "Water falling from clouds as rain, snow, sleet or hail.",
    },
    {
      term: "Weather",
      definition:
        "Short-term atmospheric conditions at a specific time and place.",
    },
    {
      term: "Climate",
      definition: "Long-term average weather patterns over decades.",
    },
    {
      term: "Air mass",
      definition: "A large body of air with uniform temperature and humidity.",
    },
  ],
  concepts: [
    {
      id: "s7-u9-water-cycle",
      title: "The water cycle in detail",
      skill: "Describe all processes in the water cycle and how they connect.",
      lesson: {
        sections: [
          {
            heading: "Complete water cycle",
            body: "The water cycle has several interconnected processes:\n\n- **Evaporation**: liquid water → vapor (oceans, lakes, rivers).\n- **Transpiration**: water vapor released from plants.\n- **Condensation**: vapor → liquid droplets (clouds).\n- **Precipitation**: rain, snow, sleet, hail.\n- **Runoff**: water flows over land to rivers and oceans.\n- **Infiltration**: water seeps into ground (groundwater).\n- **Collection**: water gathers in oceans, lakes, groundwater.",
          },
          {
            heading: "Energy and matter",
            body: "The water cycle is powered by **solar energy** (evaporation) and **gravity** (precipitation, runoff). Water is not created or destroyed — it cycles continuously. The same water has been cycling for billions of years.",
          },
        ],
        keyFormulas: [
          {
            name: "Water cycle processes",
            statement:
              "Evaporation, transpiration, condensation, precipitation, runoff, infiltration, collection.",
          },
          {
            name: "Energy source",
            statement:
              "Solar energy drives evaporation; gravity drives precipitation/runoff.",
          },
          {
            name: "Conservation",
            statement: "Water is recycled; not created or destroyed.",
          },
        ],
        workedExample: {
          problem:
            "Trace a drop of water from ocean to cloud to mountain to river.",
          solution:
            "Evaporation → condensation in clouds → precipitation on mountain → runoff down mountain → river → back to ocean.",
        },
      },
      questions: [
        {
          id: "s7-u9-water-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process releases water vapor from plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporation" },
              { id: "b", text: "Transpiration" },
              { id: "c", text: "Condensation" },
              { id: "d", text: "Precipitation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transpiration",
                statement: "Water vapor released from plants.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transpiration is water vapor release from plant leaves.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Transpiration.",
            commonErrors: ["Confusing with evaporation (from water surfaces)."],
          },
        },
        {
          id: "s7-u9-water-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the role of gravity in the water cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Gravity in water cycle",
                statement: "Drives precipitation and runoff.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gravity pulls water droplets down as precipitation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Gravity pulls water downhill as runoff to rivers and oceans.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Gravity helps water infiltrate into groundwater.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Gravity drives precipitation, runoff and infiltration.",
            commonErrors: ["Saying gravity doesn't affect the water cycle."],
          },
        },
        {
          id: "s7-u9-water-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how human activities can disrupt the water cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Human impact on water cycle",
                statement:
                  "Deforestation, urbanization, overuse disrupt natural cycling.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deforestation reduces transpiration, affecting atmospheric moisture.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Urbanization increases runoff and reduces infiltration.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Overuse of groundwater depletes aquifers faster than they recharge.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Pollution contaminates water, making it unusable.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Deforestation, urbanization, overuse, pollution disrupt the water cycle.",
            commonErrors: ["Saying humans don't affect the water cycle."],
          },
        },
        {
          id: "s7-u9-water-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A region experiences both drought and flooding in different years.",
          parts: [
            {
              label: "a",
              prompt: "How can the same region have both?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What water cycle processes are affected by drought?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What processes are affected by flooding?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "How does climate change affect this variability?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Water cycle variability",
                statement: "Natural variability + climate change = extremes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Climate variability can bring both extremes; also human water management affects distribution.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Drought: less precipitation, increased evaporation, depleted groundwater.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Flooding: excessive precipitation, rapid runoff, overwhelmed drainage.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Climate change increases extremes — more intense droughts and floods.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Variability + management (b) Less precip, more evaporation (c) Excess precip, runoff (d) More extremes.",
            commonErrors: [
              "Saying drought and flood can't happen in same place.",
            ],
          },
        },
      ],
    },
    {
      id: "s7-u9-weather-systems",
      title: "Weather Systems and Fronts",
      skill:
        "Describe how air masses and fronts create weather, and how to predict weather changes.",
      lesson: {
        sections: [
          {
            heading: "Air masses and fronts",
            body: "**Air masses** are large bodies of air with uniform temperature and humidity. When air masses meet, they form **fronts**:\n\n- **Cold front**: cold air pushes under warm air → steep slope → thunderstorms, heavy rain, sudden temperature drop.\n- **Warm front**: warm air rises over cold air → gentle slope → steady rain, gradual warming.\n- **Occluded front**: cold front catches warm front → complex weather.\n- **Stationary front**: air masses don't move → prolonged precipitation.",
          },
          {
            heading: "Weather prediction",
            body: "Weather can be predicted by:\n\n- **Satellite images**: cloud patterns.\n- **Radar**: precipitation location and intensity.\n- **Weather balloons**: temperature, pressure, humidity at altitude.\n- **Computer models**: simulate atmospheric conditions.\n\nForecasts are more accurate for near-term (1-3 days) than long-term.",
          },
        ],
        keyFormulas: [
          {
            name: "Cold front",
            statement: "Steep slope → thunderstorms, heavy rain.",
          },
          {
            name: "Warm front",
            statement: "Gentle slope → steady rain, gradual warming.",
          },
          {
            name: "Stationary front",
            statement: "No movement → prolonged precipitation.",
          },
        ],
        workedExample: {
          problem:
            "A cold front is approaching. What weather should you expect?",
          solution:
            "Sudden thunderstorms, heavy rain, strong winds, and a sharp temperature drop.",
        },
      },
      questions: [
        {
          id: "s7-u9-weather-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an air mass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A small pocket of air" },
              {
                id: "b",
                text: "A large body of air with uniform temperature and humidity",
              },
              { id: "c", text: "A type of cloud" },
              { id: "d", text: "A wind pattern" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Air mass",
                statement: "Large body of uniform temperature and humidity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Air masses are large regions of air with similar temperature and moisture.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Large body of air with uniform temperature and humidity.",
            commonErrors: ["Choosing (a): air masses are large, not small."],
          },
        },
        {
          id: "s7-u9-weather-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what happens when a cold front passes through.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cold front",
                statement:
                  "Steep slope → thunderstorms, heavy rain, temperature drop.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cold air pushes under warm air, forcing it up steeply.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Rapid uplift causes thunderstorms and heavy precipitation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "After the front passes, temperature drops sharply and skies clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Thunderstorms, heavy rain, strong winds, sharp temperature drop.",
            commonErrors: ["Saying cold fronts bring gentle rain."],
          },
        },
        {
          id: "s7-u9-weather-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why weather forecasts are more accurate for short-term than long-term predictions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Weather prediction",
                statement:
                  "Atmosphere is chaotic; small errors amplify over time.",
              },
            ],
            steps: [
              {
                reasoning: "Atmospheric conditions are complex and chaotic.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Small measurement errors grow over time (butterfly effect).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Short-term forecasts use current data that's more reliable.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Long-term forecasts have more uncertainty due to accumulated errors.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Chaotic atmosphere + small errors amplify → short-term more accurate.",
            commonErrors: ["Saying forecasts are always accurate."],
          },
        },
        {
          id: "s7-u9-weather-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A warm front is moving into a region currently experiencing cold air.",
          parts: [
            { label: "a", prompt: "What type of front is this?", marks: 2 },
            {
              label: "b",
              prompt:
                "What weather will the region experience as the front arrives?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How does this differ from a cold front?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What happens after the warm front passes?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Warm front",
                statement: "Gentle slope → steady rain, gradual warming.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Warm front — warm air advancing into cold air.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Steady rain or drizzle, gradual temperature rise, thickening clouds.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Warm front = gentle, gradual; cold front = steep, sudden.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Milder temperatures, clearing skies, warm sector.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Warm front (b) Steady rain, gradual warming (c) Gentle vs sudden (d) Mild, clearing.",
            commonErrors: ["Saying warm fronts cause thunderstorms."],
          },
        },
      ],
    },
    {
      id: "s7-u9-climate-patterns",
      title: "Climate Patterns and Zones",
      skill:
        "Describe global climate zones and factors that determine regional climates.",
      lesson: {
        sections: [
          {
            heading: "Global climate zones",
            body: "Earth has climate zones based on latitude:\n\n- **Tropical** (0-23.5°): hot year-round, high rainfall.\n- **Subtropical** (23.5-35°): warm, dry summers, mild winters.\n- **Temperate** (35-55°): four seasons, moderate temperatures.\n- **Polar** (55-90°): cold year-round, ice caps.\n\nThese zones are caused by uneven solar heating — equator gets more direct sunlight.",
          },
          {
            heading: "Regional climate factors",
            body: "Within zones, local factors modify climate:\n\n- **Altitude**: higher = colder.\n- **Proximity to water**: moderates temperatures.\n- **Ocean currents**: warm/cold currents affect coastal climates.\n- **Mountain ranges**: create rain shadows (dry on leeward side).\n- **Prevailing winds**: bring moisture or dry air.",
          },
        ],
        keyFormulas: [
          {
            name: "Climate zones",
            statement:
              "Tropical, subtropical, temperate, polar — based on latitude.",
          },
          {
            name: "Latitude effect",
            statement:
              "Equator = direct sunlight = warm; poles = slanted = cold.",
          },
          {
            name: "Local factors",
            statement: "Altitude, water proximity, currents, mountains, winds.",
          },
        ],
        workedExample: {
          problem: "Why is it colder at the poles than the equator?",
          solution:
            "Sunlight hits the equator more directly; at poles it's slanted, spreading the same energy over a larger area.",
        },
      },
      questions: [
        {
          id: "s7-u9-climate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which climate zone is hottest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperate" },
              { id: "b", text: "Polar" },
              { id: "c", text: "Tropical" },
              { id: "d", text: "Subtropical" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Climate zones",
                statement: "Tropical = hottest, near equator.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tropical zones near the equator receive the most direct sunlight.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Tropical.",
            commonErrors: ["Choosing (a): temperate has four seasons."],
          },
        },
        {
          id: "s7-u9-climate-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the equator is warmer than the poles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Solar heating",
                statement: "Equator gets direct sunlight; poles get slanted.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sunlight hits the equator more directly (perpendicular).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "At poles, sunlight is slanted, spreading energy over larger area.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This creates temperature differences that drive global wind patterns.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Equator gets direct sunlight; poles get slanted sunlight spread over larger area.",
            commonErrors: ["Saying poles are farther from the sun."],
          },
        },
        {
          id: "s7-u9-climate-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how mountain ranges affect climate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rain shadow",
                statement:
                  "Mountains block moisture, creating dry leeward side.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Moist air rises over mountains, cools, and releases precipitation on windward side.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Dry air descends on leeward side, creating a rain shadow.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Windward side is wet; leeward side is dry.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Example: Sierra Nevada creates dry Great Basin to the east.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Mountains block moisture; windward wet, leeward dry (rain shadow).",
            commonErrors: ["Saying mountains make both sides wet."],
          },
        },
        {
          id: "s7-u9-climate-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare the climate of two cities at the same latitude: one coastal, one inland.",
          parts: [
            {
              label: "a",
              prompt: "Which would have milder winters? Explain.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which would have more extreme temperatures?",
              marks: 2,
            },
            { label: "c", prompt: "What role does the ocean play?", marks: 2 },
            {
              label: "d",
              prompt: "Name another factor that could modify their climates.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Continental vs maritime",
                statement: "Coastal = milder; inland = more extreme.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Coastal city has milder winters — ocean moderates temperature.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Inland city has more extreme temperatures — no ocean to moderate.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Ocean absorbs and releases heat slowly, buffering temperature changes.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Altitude, prevailing winds, nearby mountains, urban heat island.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Coastal milder (b) Inland extreme (c) Ocean moderates (d) Altitude/winds/urban.",
            commonErrors: ["Saying latitude is the only factor."],
          },
        },
      ],
    },
  ],
};
