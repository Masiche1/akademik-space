import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "pypsc-u3-lesson-3-1",
  code: "3-1",
  title: "Weather, Seasons and the Water Cycle",
  goal: "I CAN describe weather and seasons and explain the water cycle.",
  standards: [
    "PYP Science: Earth and space",
    "PYP transdisciplinary theme: Where We Are in Place and Time",
    "PYP transdisciplinary theme: How the World Works",
  ],
  vocabulary: [
    { term: "Weather", definition: "What the sky and air are like right now — sunny, rainy, windy, snowy." },
    { term: "Season", definition: "A period of the year with particular weather — spring, summer, autumn, winter." },
    { term: "Evaporation", definition: "When water heats up and turns into water vapour (gas) that rises." },
    { term: "Condensation", definition: "When water vapour cools and turns back into liquid droplets — forming clouds." },
    { term: "Precipitation", definition: "Water falling from clouds — rain, snow, hail or sleet." },
    { term: "Water cycle", definition: "The continuous movement of water: evaporation → condensation → precipitation → collection." },
  ],
  concepts: [
    {
      id: "pypsc-u3l1-c1-weather-seasons",
      title: "Weather and seasons",
      skill: "Describe weather conditions and explain the four seasons.",
      lesson: {
        sections: [
          {
            heading: "Weather",
            body: "**Weather** is what the sky and air are like now. We describe it with words like **sunny**, **cloudy**, **rainy**, **windy**, **snowy** and **foggy**. We can measure it with tools: a **thermometer** measures temperature, a **rain gauge** measures rainfall, and a **wind vane** shows wind direction. Weather changes from day to day and hour to hour.",
          },
          {
            heading: "Seasons",
            body: "**Seasons** are longer periods of weather patterns caused by Earth's tilt as it orbits the Sun. **Spring**: warming, plants grow. **Summer**: hottest, longest days. **Autumn**: cooling, leaves fall. **Winter**: coldest, shortest days. Different places have different seasons — near the equator it stays warm all year; near the poles it is cold.",
          },
        ],
        keyFormulas: [
          { name: "Weather words", statement: "Sunny, cloudy, rainy, windy, snowy, foggy" },
          { name: "Four seasons", statement: "Spring → Summer → Autumn → Winter (caused by Earth's tilt)" },
        ],
        workedExample: {
          problem: "Why is summer warmer than winter?",
          solution: "Earth's tilt means the Sun's rays hit more directly in summer, giving more heat and longer days.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u3l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tool measures temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rain gauge" },
              { id: "b", text: "Wind vane" },
              { id: "c", text: "Thermometer" },
              { id: "d", text: "Barometer only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weather tools", statement: "Thermometer measures temperature; rain gauge measures rainfall." },
            ],
            steps: [
              { reasoning: "Thermometer measures temperature.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Thermometer",
            commonErrors: ["Choosing 'rain gauge' — that measures rainfall, not temperature."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two things that happen in autumn.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Autumn features", statement: "Autumn: cooling temperatures, leaves change colour and fall, days get shorter." },
            ],
            steps: [
              { reasoning: "One feature, e.g. leaves fall or temperatures cool.", marks: 1, markCode: "M" },
              { reasoning: "Second feature, e.g. days get shorter or animals prepare for winter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Leaves fall/change colour; temperatures cool; days shorten.",
            commonErrors: ["Saying 'flowers bloom' — that is spring."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A place near the equator stays warm all year while a place near the poles is cold. Explain why seasons are different in different places.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Earth's tilt and seasons", statement: "Earth's tilt changes how directly sunlight hits different latitudes." },
            ],
            steps: [
              { reasoning: "Near the equator the Sun's rays hit almost directly all year — consistent warmth.", marks: 1, markCode: "M" },
              { reasoning: "Near the poles the rays hit at a shallow angle — less heat, colder.", marks: 1, markCode: "M" },
              { reasoning: "So seasons vary by location because of Earth's tilt and position.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Earth's tilt means equator gets direct sun year-round; poles get angled sun — different seasons.",
            commonErrors: ["Saying 'the Sun moves closer' — the Sun stays same distance; tilt changes angle."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your class keeps a weather diary for a week.",
          parts: [
            { label: "a", prompt: "List three weather words you could use.", marks: 1 },
            { label: "b", prompt: "Which tool would you use to measure temperature?", marks: 1 },
            { label: "c", prompt: "Describe how you would record the weather each day.", marks: 2 },
            { label: "d", prompt: "After a week, how could you tell if the weather was changing?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Weather observation", statement: "Record weather daily with consistent methods to spot patterns." },
            ],
            steps: [
              { part: "a", reasoning: "Sunny, cloudy, rainy, windy, snowy (any three).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Thermometer.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Method: same time each day, note conditions, measure temperature, describe sky.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Consistent recording method described.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Compare daily records — look for patterns or trends.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "E.g. temperatures rising, more sunny days — evidence of change.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Data-based conclusion about weather change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 weather words (b) thermometer (c) consistent daily recording (d) compare records for trends",
            commonErrors: ["In (d), guessing without looking at records — must use data."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tool measures temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rain gauge" },
              { id: "b", text: "Thermometer" },
              { id: "c", text: "Wind vane" },
              { id: "d", text: "Magnifying glass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weather tools", statement: "A thermometer measures temperature." },
            ],
            steps: [
              { reasoning: "The thermometer measures temperature.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Thermometer",
            commonErrors: ["Choosing rain gauge — that measures rainfall."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many weather words are listed: sunny, cloudy, rainy, windy, snowy and foggy?",
          response: {
            type: "numeric",
            parts: [{ label: "Weather words", answer: 6, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weather words", statement: "Weather can be sunny, cloudy, rainy, windy, snowy or foggy." },
            ],
            steps: [
              { reasoning: "The weather words are sunny, cloudy, rainy, windy, snowy and foggy.", marks: 1, markCode: "M" },
              { reasoning: "There are six words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
            commonErrors: ["Counting only five by forgetting foggy."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what causes the four seasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Seasons cause", statement: "Earth's tilted axis changes how directly sunlight hits different places." },
            ],
            steps: [
              { reasoning: "Earth's axis is tilted as it orbits the Sun.", marks: 1, markCode: "M" },
              { reasoning: "Different parts get more or less direct sunlight at different times, causing seasons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Earth's tilt changes the angle and amount of sunlight, causing seasons.",
            commonErrors: ["Saying the Sun moves closer — tilt changes the light angle."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tool measures rainfall?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thermometer" },
              { id: "b", text: "Rain gauge" },
              { id: "c", text: "Wind vane" },
              { id: "d", text: "Clock" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rain gauge", statement: "A rain gauge measures how much rain falls." },
            ],
            steps: [
              { reasoning: "The rain gauge measures rainfall.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Rain gauge",
            commonErrors: ["Choosing thermometer — that measures temperature."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many seasons are there: spring, summer, autumn and winter?",
          response: {
            type: "numeric",
            parts: [{ label: "Seasons", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Four seasons", statement: "The four seasons are spring, summer, autumn and winter." },
            ],
            steps: [
              { reasoning: "Spring, summer, autumn and winter are the seasons.", marks: 1, markCode: "M" },
              { reasoning: "There are four seasons.", marks: 1, markCode: "M" },
              { reasoning: "They repeat through the year.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting three by forgetting autumn or winter."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many weather tools are named: thermometer, rain gauge and wind vane?",
          response: {
            type: "numeric",
            parts: [{ label: "Tools", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weather tools", statement: "Thermometer, rain gauge and wind vane measure weather." },
            ],
            steps: [
              { reasoning: "Thermometer, rain gauge and wind vane are tools.", marks: 1, markCode: "M" },
              { reasoning: "There are three tools.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting only two by forgetting the wind vane."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare seasons near the equator and near the poles. Why are they different?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Seasons by location", statement: "Earth's tilt gives different sunlight angles at different latitudes." },
            ],
            steps: [
              { reasoning: "Near the equator the Sun's rays hit almost directly all year.", marks: 1, markCode: "M" },
              { reasoning: "Near the poles the rays hit at a shallow angle, so it stays colder.", marks: 1, markCode: "M" },
              { reasoning: "This is why seasons are warmer near the equator and colder near poles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Equator gets direct sun year-round; poles get angled sun and colder seasons.",
            commonErrors: ["Saying poles are always night — they have seasons but with less direct sun."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What typically happens to leaves in autumn?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They turn bright and fall" },
              { id: "b", text: "They all stay green" },
              { id: "c", text: "They become snow" },
              { id: "d", text: "They grow bigger every day" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Autumn", statement: "In autumn temperatures cool and leaves change colour and fall." },
            ],
            steps: [
              { reasoning: "Autumn brings cooler weather and falling leaves.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** They turn bright and fall",
            commonErrors: ["Choosing stay green — that is more like spring or summer."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many seasons are there in a year?",
          response: {
            type: "numeric",
            parts: [{ label: "Seasons", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Seasons", statement: "There are four seasons in a year." },
            ],
            steps: [
              { reasoning: "Spring, summer, autumn and winter make four seasons.", marks: 1, markCode: "M" },
              { reasoning: "The answer is four.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting two by thinking only hot and cold."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which best explains why summer is warmer than winter in many places?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Sun's rays hit more directly and days are longer" },
              { id: "b", text: "Earth stops moving" },
              { id: "c", text: "Clouds always disappear" },
              { id: "d", text: "The Moon blocks winter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Seasons and sunlight", statement: "More direct sunlight and longer days make summer warmer." },
            ],
            steps: [
              { reasoning: "Tilt makes summer sunlight more direct.", marks: 1, markCode: "M" },
              { reasoning: "Longer days also give more time for heating.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The Sun's rays hit more directly and days are longer",
            commonErrors: ["Choosing Earth stops moving — Earth keeps moving all year."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many weather tools match their job: thermometer-temperature, rain gauge-rainfall and wind vane-wind direction?",
          response: {
            type: "numeric",
            parts: [{ label: "Correct matches", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weather tools", statement: "Each weather tool measures a different thing." },
            ],
            steps: [
              { reasoning: "Thermometer, rain gauge and wind vane each match their job.", marks: 1, markCode: "M" },
              { reasoning: "All three matches are correct.", marks: 1, markCode: "M" },
              { reasoning: "There are three correct matches.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting only two — wind vane direction is also correct."],
          },
        },
        {
          id: "pypsc-q-u3l1c1-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is it summer warmer than winter even though Earth is about the same distance from the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tilt changes how directly sunlight hits" },
              { id: "b", text: "The Sun becomes bigger" },
              { id: "c", text: "Earth moves much closer" },
              { id: "d", text: "Winter has no Sun" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tilt and heat", statement: "Earth's tilt changes the angle of sunlight and the length of days." },
            ],
            steps: [
              { reasoning: "Direct sunlight and longer days heat summer more.", marks: 1, markCode: "M" },
              { reasoning: "Distance is not the main cause; tilt is.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Tilt changes how directly sunlight hits",
            commonErrors: ["Choosing Earth moves closer — distance is not the main cause."],
          },
        },
      ],
    },
    {
      id: "pypsc-u3l1-c2-water-cycle",
      title: "The water cycle",
      skill: "Describe the stages of the water cycle: evaporation, condensation, precipitation and collection.",
      lesson: {
        sections: [
          {
            heading: "Water's journey",
            body: "The **water cycle** is how water moves around Earth. **Evaporation**: the Sun heats water in oceans, lakes and rivers, turning it into water vapour (gas) that rises. **Condensation**: the vapour cools high in the sky and turns back into tiny droplets, forming **clouds**. **Precipitation**: when clouds get heavy, water falls as rain, snow or hail. **Collection**: water collects in oceans, lakes, rivers and underground — and the cycle starts again.",
          },
          {
            heading: "Why it matters",
            body: "The water cycle has no beginning or end — the same water keeps moving. It provides fresh water for plants, animals and people. When we pollute water, we harm the whole cycle and everything that depends on it. The cycle is powered by the **Sun's heat** and Earth's gravity pulling water back down.",
          },
        ],
        keyFormulas: [
          { name: "Water cycle stages", statement: "Evaporation → Condensation → Precipitation → Collection → repeat" },
          { name: "Power sources", statement: "Sun provides heat for evaporation; gravity pulls water down" },
        ],
        workedExample: {
          problem: "You see clouds forming on a humid day. Which stage of the water cycle is this?",
          solution: "Condensation — water vapour is cooling and turning into droplets that form clouds.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u3l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stage of the water cycle turns liquid water into water vapour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Condensation" },
              { id: "b", text: "Precipitation" },
              { id: "c", text: "Evaporation" },
              { id: "d", text: "Collection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaporation", statement: "Heat turns liquid water into water vapour — evaporation." },
            ],
            steps: [
              { reasoning: "Evaporation is liquid → gas.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Evaporation",
            commonErrors: ["Choosing 'condensation' — that is gas → liquid, the opposite."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do clouds form high in the sky?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Condensation", statement: "Water vapour rises, cools at high altitude, and condenses into droplets — clouds." },
            ],
            steps: [
              { reasoning: "Warm air carries water vapour up; it cools at height.", marks: 1, markCode: "M" },
              { reasoning: "Cooling vapour condenses into tiny droplets — that is a cloud.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vapour rises and cools at high altitude, condensing into droplets that form clouds.",
            commonErrors: ["Saying clouds are 'smoke' — they are tiny water droplets."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A puddle disappears on a sunny day. Where does the water go? Explain using the water cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaporation", statement: "Sun's heat evaporates puddle water into vapour that joins the cycle." },
            ],
            steps: [
              { reasoning: "The Sun heats the puddle water.", marks: 1, markCode: "M" },
              { reasoning: "Water evaporates into water vapour and rises.", marks: 1, markCode: "M" },
              { reasoning: "It will later condense into clouds and return as rain — the water cycle continues.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water evaporates into vapour, rises, condenses into clouds and returns as precipitation.",
            commonErrors: ["Saying the water 'soaked into the ground' only — evaporation is the main reason on a sunny day."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "The water cycle has four main stages.",
          parts: [
            { label: "a", prompt: "Name the stage when water vapour rises from the sea.", marks: 1 },
            { label: "b", prompt: "Name the stage when clouds form.", marks: 1 },
            { label: "c", prompt: "Name the stage when rain falls.", marks: 1 },
            { label: "d", prompt: "Name the stage when water collects in rivers and oceans.", marks: 1 },
            { label: "e", prompt: "Explain what powers the water cycle.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water cycle", statement: "Evaporation → condensation → precipitation → collection, powered by the Sun." },
            ],
            steps: [
              { part: "a", reasoning: "Evaporation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Condensation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Precipitation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Collection.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The Sun's heat powers evaporation.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Gravity pulls water back down to Earth.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Together they keep the cycle moving continuously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) evaporation (b) condensation (c) precipitation (d) collection (e) Sun+gravity",
            commonErrors: ["In (b), saying 'evaporation' — clouds form by condensation."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stage turns liquid water into water vapour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Condensation" },
              { id: "b", text: "Precipitation" },
              { id: "c", text: "Evaporation" },
              { id: "d", text: "Collection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaporation", statement: "Evaporation turns liquid water into water vapour." },
            ],
            steps: [
              { reasoning: "Evaporation is liquid to gas.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Evaporation",
            commonErrors: ["Choosing condensation — that is gas to liquid."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many main stages are in the water cycle: evaporation, condensation, precipitation and collection?",
          response: {
            type: "numeric",
            parts: [{ label: "Stages", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water cycle", statement: "The water cycle has four stages." },
            ],
            steps: [
              { reasoning: "Evaporation, condensation, precipitation and collection are the stages.", marks: 1, markCode: "M" },
              { reasoning: "There are four stages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only three by forgetting collection."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why clouds form high in the sky.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Condensation", statement: "Water vapour rises, cools and condenses into droplets that form clouds." },
            ],
            steps: [
              { reasoning: "Warm air carries water vapour upward.", marks: 1, markCode: "M" },
              { reasoning: "At high altitude the vapour cools and condenses into tiny droplets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vapour rises, cools and condenses into droplets that form clouds.",
            commonErrors: ["Saying clouds are smoke — they are tiny water droplets."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is precipitation in the water cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water vapour rising" },
              { id: "b", text: "Water falling from clouds as rain, snow or hail" },
              { id: "c", text: "Water collecting in oceans" },
              { id: "d", text: "Clouds forming" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Precipitation", statement: "Precipitation is water falling from clouds as rain, snow or hail." },
            ],
            steps: [
              { reasoning: "Precipitation is water falling from clouds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Water falling from clouds as rain, snow or hail",
            commonErrors: ["Choosing evaporation — that is water rising as vapour."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many things power the water cycle: the Sun's heat and gravity pulling water down?",
          response: {
            type: "numeric",
            parts: [{ label: "Drivers", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Water cycle drivers", statement: "The Sun's heat causes evaporation and gravity pulls water back down." },
            ],
            steps: [
              { reasoning: "The Sun's heat and gravity are the two drivers.", marks: 1, markCode: "M" },
              { reasoning: "Heat powers evaporation; gravity powers falling and collection.", marks: 1, markCode: "M" },
              { reasoning: "There are two drivers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting wind as a driver — the main powers are Sun and gravity."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many forms of precipitation are named: rain, snow, hail and sleet?",
          response: {
            type: "numeric",
            parts: [{ label: "Precipitation forms", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Precipitation", statement: "Precipitation can be rain, snow, hail or sleet." },
            ],
            steps: [
              { reasoning: "Rain, snow, hail and sleet are precipitation forms.", marks: 1, markCode: "M" },
              { reasoning: "There are four forms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only rain — snow, hail and sleet are also precipitation."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A puddle disappears on a sunny day. Trace its water through the water cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Water cycle journey", statement: "Puddle water evaporates, condenses into clouds and returns as precipitation." },
            ],
            steps: [
              { reasoning: "The Sun heats the puddle and water evaporates into vapour.", marks: 1, markCode: "M" },
              { reasoning: "Vapour rises, cools and condenses into clouds.", marks: 1, markCode: "M" },
              { reasoning: "Clouds release precipitation that collects and starts the cycle again.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaporation → condensation → precipitation → collection, repeating.",
            commonErrors: ["Saying the water is gone forever — it joins the water cycle."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which stage is when water gathers in oceans, lakes and rivers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporation" },
              { id: "b", text: "Condensation" },
              { id: "c", text: "Precipitation" },
              { id: "d", text: "Collection" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collection", statement: "Collection is when water gathers in bodies of water." },
            ],
            steps: [
              { reasoning: "Collection stores water for the cycle to continue.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Collection",
            commonErrors: ["Choosing precipitation — that is water falling, not gathering."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If the water cycle has 4 stages and a class models 2 cycles, how many evaporation stages are shown?",
          response: {
            type: "numeric",
            parts: [{ label: "Evaporation stages", answer: 2, tolerance: 0, unit: "stages" }],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cycle repetition", statement: "Each water cycle includes one evaporation stage." },
            ],
            steps: [
              { reasoning: "One evaporation stage occurs per cycle.", marks: 1, markCode: "M" },
              { reasoning: "Two cycles need two evaporation stages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 stages",
            commonErrors: ["Multiplying by four stages — only one stage per cycle is evaporation."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which statement correctly describes clouds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clouds are smoke from factories" },
              { id: "b", text: "Clouds are tiny water droplets formed by condensation" },
              { id: "c", text: "Clouds are solid ice only" },
              { id: "d", text: "Clouds are made of sand" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clouds", statement: "Clouds are tiny water droplets or ice crystals formed by condensation." },
            ],
            steps: [
              { reasoning: "Clouds form when water vapour condenses.", marks: 1, markCode: "M" },
              { reasoning: "They are not smoke, sand or only ice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Clouds are tiny water droplets formed by condensation",
            commonErrors: ["Choosing smoke — clouds are water droplets."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many water-cycle stages are described: vapour rises, droplets form clouds, water falls and water collects?",
          response: {
            type: "numeric",
            parts: [{ label: "Stages", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water cycle stages", statement: "The descriptions match evaporation, condensation, precipitation and collection." },
            ],
            steps: [
              { reasoning: "Vapour rising, droplets forming, water falling and water collecting are described.", marks: 1, markCode: "M" },
              { reasoning: "They match the four water-cycle stages.", marks: 1, markCode: "M" },
              { reasoning: "There are four stages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only three by merging condensation and precipitation."],
          },
        },
        {
          id: "pypsc-q-u3l1c2-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does the water cycle keep going without a beginning or end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Collected water evaporates again to restart the cycle" },
              { id: "b", text: "Rain stops forever" },
              { id: "c", text: "The Sun turns off" },
              { id: "d", text: "Gravity disappears" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Continuous cycle", statement: "Collected water evaporates again, so the cycle repeats." },
            ],
            steps: [
              { reasoning: "Evaporation returns water to the air after collection.", marks: 1, markCode: "M" },
              { reasoning: "This makes the cycle continuous.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Collected water evaporates again to restart the cycle",
            commonErrors: ["Saying rain stops — the cycle repeats continuously."],
          },
        },
      ],
    },
  ],
};
