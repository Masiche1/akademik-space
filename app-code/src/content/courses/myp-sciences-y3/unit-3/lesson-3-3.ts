import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "myps3-u3-lesson-3-3",
  code: "3-3",
  title: "Earth and Space",
  goal: "I CAN describe the structure of the Earth, explain plate tectonics and its effects, describe the water cycle, weather systems and climate change impacts.",
  standards: [
    "Key concept: Systems",
    "MYP Sciences: Earth and space",
    "Criterion A: Knowing and understanding",
    "Criterion D: Reflecting on the impacts of science",
  ],
  vocabulary: [
    { term: "Crust", definition: "The thin, solid outer layer of the Earth." },
    { term: "Mantle", definition: "The thick layer of hot, semi-solid rock between the crust and the core." },
    { term: "Tectonic plate", definition: "A large slab of the Earth's lithosphere that moves slowly over the mantle." },
    { term: "Plate boundary", definition: "The edge where two tectonic plates meet; types include constructive, destructive and conservative." },
    { term: "Water cycle", definition: "The continuous movement of water between the atmosphere, land and oceans through evaporation, condensation and precipitation." },
    { term: "Weather", definition: "The short-term state of the atmosphere at a particular place and time." },
    { term: "Climate", definition: "The long-term average weather pattern of a region." },
    { term: "Greenhouse effect", definition: "The trapping of heat in the atmosphere by greenhouse gases, which warms the Earth's surface." },
  ],
  concepts: [
    {
      id: "myps3-u3-earth",
      title: "Earth's structure and plate tectonics",
      skill: "Describe the layers of the Earth and explain plate tectonics and its geological effects.",
      lesson: {
        sections: [
          {
            heading: "Structure of the Earth",
            body: "The Earth has three main layers: the **crust** (thin, solid, ~5–70 km thick), the **mantle** (thick, hot, semi-solid rock), and the **core** (outer core is liquid metal; inner core is solid). Heat from the core drives slow movement in the mantle, which moves the tectonic plates above.",
          },
          {
            heading: "Plate boundaries",
            body: "There are three main types of plate boundary:\n\n- **Constructive/divergent**: plates move apart; magma rises to form new crust (e.g. mid-ocean ridges, rift valleys).\n- **Destructive/convergent**: plates collide; one may be forced down (subduction), forming mountains, volcanoes and trenches.\n- **Conservative/transform**: plates slide past each other, causing earthquakes (e.g. San Andreas Fault).",
          },
          {
            heading: "Effects of plate movement",
            body: "Plate tectonics explains earthquakes, volcanoes, mountain building and the distribution of fossils and resources. Earthquakes occur when stress builds up at plate boundaries and is suddenly released. Volcanoes occur where magma reaches the surface.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "The Himalayas are still growing taller. Which type of plate boundary explains this?",
          solution: "The Indian plate is colliding with the Eurasian plate — a destructive (convergent) boundary where neither plate subducts easily, so the crust is pushed upwards, forming mountains.",
        },
      },
      questions: [
        {
          id: "myps3-u3-earth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which layer of the Earth is the thickest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crust" },
              { id: "b", text: "Mantle" },
              { id: "c", text: "Inner core" },
              { id: "d", text: "Outer core" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Earth's layers", statement: "Crust is thin; mantle is thickest; core is below." },
            ],
            steps: [
              { reasoning: "The mantle is the thickest layer (~2900 km).", working: "\\text{mantle}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Mantle",
            commonErrors: ["Choosing the core — it's smaller than the mantle."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-earth-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the type of plate boundary at the San Andreas Fault and describe what happens there.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conservative boundary", statement: "Plates slide past each other horizontally." },
            ],
            steps: [
              { reasoning: "Conservative (transform) boundary.", working: "\\text{conservative}", marks: 1, markCode: "M" },
              { reasoning: "Plates slide past each other, causing earthquakes.", working: "\\text{slide past, earthquakes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conservative boundary — plates slide past each other, causing earthquakes",
            commonErrors: ["Saying plates collide — that's destructive."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-earth-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the Himalayas formed and why they are still growing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Destructive boundary", statement: "Colliding plates push crust upwards when neither subducts." },
            ],
            steps: [
              { reasoning: "Indian and Eurasian plates are colliding.", working: "\\text{plates colliding}", marks: 1, markCode: "M" },
              { reasoning: "Neither plate subducts easily (both continental), so crust is forced up.", working: "\\text{crust pushed up}", marks: 1, markCode: "M" },
              { reasoning: "Plates are still moving, so mountains continue to grow.", working: "\\text{still growing}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Colliding continental plates push the crust upwards; continued plate movement means the mountains are still growing",
            commonErrors: ["Saying one plate subducted — that's oceanic."],
            examinerNote: "M1 M1 R1.",
          },
        },
        {
          id: "myps3-u3-earth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The water cycle describes the continuous movement of water through different reservoirs.",
          parts: [
            { label: "a", prompt: "Name the four main stages of the water cycle.", marks: 2 },
            { label: "b", prompt: "Explain what happens during condensation.", marks: 2 },
            { label: "c", prompt: "Describe how human activities can affect the water cycle.", marks: 2 },
            { label: "d", prompt: "Explain why climate change can disrupt the water cycle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water cycle", statement: "Evaporation → condensation → precipitation → collection/runoff." },
            ],
            steps: [
              { part: "a", reasoning: "Evaporation, condensation, precipitation, collection (or runoff/infiltration).", working: "\\text{evaporation, condensation, precipitation, collection}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Name all four stages.", working: "\\text{all four stages}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Water vapour cools and forms clouds (liquid droplets or ice crystals).", working: "\\text{vapour cools, forms clouds}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clouds eventually produce precipitation.", working: "\\text{precipitation follows}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Deforestation reduces evaporation; dams change runoff; urbanisation increases runoff.", working: "\\text{human activities alter stages}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Give specific examples.", working: "\\text{examples: deforestation, dams, urbanisation}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Warmer air holds more moisture; changes precipitation patterns.", working: "\\text{warmer air, more moisture}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Leads to more extreme weather and drought/flood patterns.", working: "\\text{extreme weather, drought/flood}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) evaporation, condensation, precipitation, collection (b) vapour cools to form clouds (c) deforestation, dams, urbanisation alter the cycle (d) warmer air holds more moisture, changing precipitation patterns",
            commonErrors: ["Confusing weather with climate in (d)."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), R1 A1 for (c), R1 A1 for (d).",
          },
        },
        {
          id: "myps3-u3-earth-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which layer of the Earth is the thinnest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Outer core" },
              { id: "b", text: "Mantle" },
              { id: "c", text: "Crust" },
              { id: "d", text: "Inner core" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Earth's layers", statement: "The crust is the thin solid outer layer (~5–70 km)." },
            ],
            steps: [
              { reasoning: "The crust is only a few kilometres to tens of kilometres thick.", working: "\\text{crust thin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Crust",
            commonErrors: ["Choosing the inner core — it is small but not the thinnest layer."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u3-earth-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At a constructive (divergent) plate boundary, the plates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slide past each other" },
              { id: "b", text: "Stay still" },
              { id: "c", text: "Move apart" },
              { id: "d", text: "Collide" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Constructive boundary", statement: "Plates move apart; magma rises to form new crust." },
            ],
            steps: [
              { reasoning: "Divergent means moving apart.", working: "\\text{move apart}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Move apart",
            commonErrors: ["Choosing collide — that is destructive."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u3-earth-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which type of plate boundary causes subduction (one plate forced down into the mantle)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conservative" },
              { id: "b", text: "Transform" },
              { id: "c", text: "Destructive" },
              { id: "d", text: "Constructive" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Destructive boundary", statement: "Colliding plates; one may be forced down by subduction." },
            ],
            steps: [
              { reasoning: "Subduction happens where plates collide — destructive boundaries.", working: "\\text{subduction}\\to\\text{destructive}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Destructive",
            commonErrors: ["Choosing conservative — plates there slide past, not collide."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-earth-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Tectonic plates move at about 4 cm per year. How far do they move in 50 years? Give your answer in metres.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 2, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$d=v\\times t$" },
            ],
            steps: [
              { reasoning: "Distance = $4\\times50=200$ cm.", working: "4\\times50=200\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Convert to metres: $200\\text{ cm}=2\\text{ m}$.", working: "200\\text{ cm}=2\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ m",
            commonErrors: ["Forgetting to convert cm to metres."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-earth-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Tectonic plates move at about 5 cm per year. How far does a plate move in 20 years? Give your answer in metres.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 1, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed × time", statement: "Distance = speed × time" },
            ],
            steps: [
              { reasoning: "Distance = 5 cm × 20 = 100 cm.", working: "5\\times20=100\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Convert to metres: 100 cm = 1 m — plates move slowly but over millions of years cover huge distances.", working: "100\\text{ cm}=1\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$ m",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-earth-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main driving force that moves the tectonic plates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earthquakes" },
              { id: "b", text: "Ocean tides" },
              { id: "c", text: "The Moon's gravity" },
              { id: "d", text: "Convection currents in the mantle" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plate movement", statement: "Heat from the core drives convection currents in the mantle, moving the plates." },
            ],
            steps: [
              { reasoning: "Mantle convection currents drag the plates above.", working: "\\text{convection currents}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Convection currents in the mantle",
            commonErrors: ["Choosing earthquakes — those are a result of plate movement, not the cause."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-earth-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Ocean trenches such as the Mariana Trench are formed at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conservative boundaries" },
              { id: "b", text: "Mid-ocean ridges" },
              { id: "c", text: "Constructive boundaries" },
              { id: "d", text: "Destructive boundaries" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Destructive boundary", statement: "Subduction of one plate creates deep ocean trenches." },
            ],
            steps: [
              { reasoning: "Trenches form where an oceanic plate is subducted.", working: "\\text{subduction}\\to\\text{trench}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Destructive boundaries",
            commonErrors: ["Choosing constructive — that creates ridges, not trenches."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u3-earth-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The oceanic crust is about 7 km thick. Express this thickness in metres.",
          response: { type: "numeric", parts: [{ label: "Thickness", answer: 7000, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Unit conversion", statement: "1 km = 1000 m" },
            ],
            steps: [
              { reasoning: "Multiply kilometres by 1000.", working: "7\\times1000=7000", marks: 1, markCode: "M" },
              { reasoning: "The oceanic crust is 7000 m thick — much thinner than the continental crust.", working: "7000\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7000$ m",
            commonErrors: ["Multiplying by 100 instead of 1000."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-earth-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many main types of plate boundary are recognised (constructive, destructive and conservative)?",
          response: { type: "numeric", parts: [{ label: "Types", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plate boundaries", statement: "Constructive (apart), destructive (collide) and conservative (slide past)." },
            ],
            steps: [
              { reasoning: "List the types: constructive, destructive, conservative.", working: "\\text{constructive, destructive, conservative}", marks: 1, markCode: "M" },
              { reasoning: "Count them: 3 main types.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-earth-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "The mantle is approximately 2900 km thick. Express this thickness in metres.",
          response: { type: "numeric", parts: [{ label: "Thickness", answer: 2900000, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Unit conversion", statement: "1 km = 1000 m" },
            ],
            steps: [
              { reasoning: "Multiply kilometres by 1000.", working: "2900\\times1000=2900000", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "2{,}900{,}000\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2{,}900{,}000$ m",
            commonErrors: ["Multiplying by 100 instead of 1000."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-earth-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The outer core of the Earth is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ice" },
              { id: "b", text: "Liquid metal" },
              { id: "c", text: "A gas" },
              { id: "d", text: "Solid rock" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Outer core", statement: "The outer core is liquid metal (mostly iron and nickel)." },
            ],
            steps: [
              { reasoning: "The outer core is molten metal; the inner core is solid.", working: "\\text{liquid metal}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Liquid metal",
            commonErrors: ["Confusing outer core (liquid) with inner core (solid)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-earth-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Earthquakes are difficult to predict mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are caused by weather" },
              { id: "b", text: "Seismometers cannot detect them" },
              { id: "c", text: "Stress builds slowly and unpredictably underground, then is released suddenly" },
              { id: "d", text: "They only happen on land" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Earthquakes", statement: "Stress builds at plate boundaries and is released suddenly and unpredictably." },
            ],
            steps: [
              { reasoning: "Stress accumulation cannot be measured precisely and release is sudden — no reliable forecast exists.", working: "\\text{sudden unpredictable release}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Stress builds slowly and unpredictably underground, then is released suddenly",
            examinerNote: "B1 for (a).",
          },
        },
      ],
    },
    {
      id: "myps3-u3-climate",
      title: "Weather, climate and climate change",
      skill: "Distinguish weather from climate, describe weather systems and explain the causes and impacts of climate change.",
      lesson: {
        sections: [
          {
            heading: "Weather vs climate",
            body: "**Weather** is the short-term state of the atmosphere (temperature, precipitation, wind) at a place and time — it changes daily. **Climate** is the long-term average weather pattern of a region over ~30 years. A hot day does not disprove climate change; climate is about long-term trends.",
          },
          {
            heading: "Weather systems",
            body: "Weather is driven by the uneven heating of the Earth's surface. Warm air rises, cool air sinks, creating wind. Low-pressure systems bring cloudy, wet weather; high-pressure systems bring clear, dry weather. Fronts are boundaries between air masses of different temperatures.",
          },
          {
            heading: "Climate change",
            body: "Human activities — burning fossil fuels, deforestation, agriculture — release greenhouse gases (CO₂, methane) that trap heat in the atmosphere, enhancing the natural **greenhouse effect**. Impacts include rising temperatures, sea-level rise, more extreme weather, and changes to ecosystems and agriculture.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is a single cold winter day not evidence against climate change?",
          solution: "Climate is the long-term average over ~30 years. One cold day is weather, not climate. Climate change refers to long-term trends in average temperatures and patterns, not individual weather events.",
        },
      },
      questions: [
        {
          id: "myps3-u3-climate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best describes climate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single storm event" },
              { id: "b", text: "The temperature right now" },
              { id: "c", text: "The long-term average weather of a region" },
              { id: "d", text: "The weather today" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climate", statement: "Long-term average weather pattern over ~30 years." },
            ],
            steps: [
              { reasoning: "Climate is long-term average, not day-to-day weather.", working: "\\text{long-term average}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Long-term average weather of a region",
            commonErrors: ["Confusing weather with climate."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-climate-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two greenhouse gases and describe the natural greenhouse effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Greenhouse effect", statement: "Greenhouse gases trap heat in the atmosphere." },
            ],
            steps: [
              { reasoning: "CO₂ and methane (or water vapour).", working: "\\text{CO}_2\\text{ and methane}", marks: 1, markCode: "M" },
              { reasoning: "They trap heat, keeping Earth warm enough for life.", working: "\\text{trap heat, keep Earth warm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CO₂ and methane trap heat in the atmosphere, keeping the Earth warm",
            commonErrors: ["Saying greenhouse effect is always bad — it's natural and necessary."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-climate-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why burning fossil fuels contributes to climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Greenhouse effect", statement: "Greenhouse gases trap heat; more gases = more warming." },
            ],
            steps: [
              { reasoning: "Fossil fuels release CO₂ when burned.", working: "\\text{releases CO}_2", marks: 1, markCode: "M" },
              { reasoning: "CO₂ is a greenhouse gas that traps heat.", working: "\\text{traps heat}", marks: 1, markCode: "M" },
              { reasoning: "Increased concentration enhances the greenhouse effect, warming the planet.", working: "\\text{enhanced warming}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Burning fossil fuels releases CO₂, which traps more heat and enhances the greenhouse effect",
            commonErrors: ["Saying CO₂ directly heats the air."],
            examinerNote: "M1 M1 R1.",
          },
        },
        {
          id: "myps3-u3-climate-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A class investigates how different surfaces affect temperature.",
          parts: [
            { label: "a", prompt: "Identify the independent, dependent and control variables.", marks: 3 },
            { label: "b", prompt: "Describe how the student would measure temperature fairly.", marks: 2 },
            { label: "c", prompt: "Predict which surface (grass, asphalt, water) will get hottest and why.", marks: 2 },
            { label: "d", prompt: "Explain how this relates to urban heat islands.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heat absorption", statement: "Different surfaces absorb and reflect heat differently." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: surface type. Dependent: temperature.", working: "\\text{independent: surface; dependent: temperature}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Controls: time of day, location, measurement method.", working: "\\text{controls: time, location, method}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three.", working: "\\text{independent, dependent, controls}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use same thermometer, same height above surface, same time.", working: "\\text{same thermometer, height, time}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take multiple readings and average.", working: "\\text{repeat and average}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Asphalt — dark surfaces absorb more heat.", working: "\\text{asphalt, dark absorbs more}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Grass reflects more and water absorbs but distributes heat.", working: "\\text{grass reflects, water distributes}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Urban areas have more dark surfaces (roads, buildings) that absorb heat.", working: "\\text{urban surfaces absorb heat}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) independent: surface; dependent: temperature; controls: time, location, method (b) same thermometer, height, time; repeat and average (c) asphalt — dark surfaces absorb more heat (d) urban areas have more heat-absorbing surfaces",
            commonErrors: ["Not controlling for time of day."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 R1 for (c), R1 for (d).",
          },
        },
        {
          id: "myps3-u3-climate-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best describes climate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The temperature right now" },
              { id: "b", text: "The weather on a particular day" },
              { id: "c", text: "A single storm event" },
              { id: "d", text: "The long-term average weather pattern of a region" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climate", statement: "Long-term average weather pattern of a region over ~30 years." },
            ],
            steps: [
              { reasoning: "Climate is about long-term averages, not daily weather.", working: "\\text{long-term average}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The long-term average weather pattern of a region",
            commonErrors: ["Confusing climate with weather."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-climate-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Low-pressure weather systems typically bring:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No change in weather" },
              { id: "b", text: "Strong winds only" },
              { id: "c", text: "Clear, dry weather" },
              { id: "d", text: "Cloudy, wet weather" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pressure systems", statement: "Low pressure brings cloudy, wet weather; high pressure brings clear, dry weather." },
            ],
            steps: [
              { reasoning: "Rising air at low pressure cools and forms clouds and rain.", working: "\\text{low}\\to\\text{wet}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Cloudy, wet weather",
            commonErrors: ["Reversing low and high pressure effects."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-climate-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these describes weather rather than climate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heavy rain fell yesterday" },
              { id: "b", text: "Average rainfall is 800 mm per year" },
              { id: "c", text: "The region has hot, dry summers on average" },
              { id: "d", text: "Winters are usually mild over decades" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weather vs climate", statement: "Weather is short-term; climate is long-term average." },
            ],
            steps: [
              { reasoning: "'Yesterday' is a single short-term event — weather.", working: "\\text{short-term event}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Heavy rain fell yesterday",
            commonErrors: ["Choosing an average or long-term statement."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-climate-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The average summer temperatures over 5 years were 22, 24, 23, 25 and 24 °C. Calculate the mean temperature.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 23.6, unit: "°C", tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Mean = sum of values ÷ number of values" },
            ],
            steps: [
              { reasoning: "Sum = $22+24+23+25+24=118$.", working: "22+24+23+25+24=118", marks: 1, markCode: "M" },
              { reasoning: "Mean = $\\frac{118}{5}=23.6$ °C.", working: "118\\div5=23.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$23.6$ °C",
            commonErrors: ["Dividing by 4 instead of 5."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-climate-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Wind is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Moon's gravity pulling on the atmosphere" },
              { id: "b", text: "Uneven heating of the surface creating pressure differences that move air" },
              { id: "c", text: "Ocean waves" },
              { id: "d", text: "Clouds pushing the air" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Wind", statement: "Warm air rises and cool air sinks; air moves from high to low pressure." },
            ],
            steps: [
              { reasoning: "Uneven heating makes warm air rise (low pressure); cooler air flows in — that moving air is wind.", working: "\\text{pressure difference}\\Rightarrow\\text{wind}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Uneven heating of the surface creating pressure differences that move air",
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u3-climate-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair of gases are greenhouse gases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen and helium" },
              { id: "b", text: "Argon and neon" },
              { id: "c", text: "Carbon dioxide and methane" },
              { id: "d", text: "Oxygen and nitrogen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Greenhouse gases", statement: "Gases that trap heat in the atmosphere, e.g. CO₂, methane, water vapour." },
            ],
            steps: [
              { reasoning: "CO₂ and methane are the main greenhouse gases from human activity.", working: "CO_2+CH_4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Carbon dioxide and methane",
            commonErrors: ["Choosing oxygen or nitrogen — they are not greenhouse gases."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-climate-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How does the enhanced greenhouse effect differ from the natural greenhouse effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is caused by human activities adding extra greenhouse gases" },
              { id: "b", text: "It cools the planet" },
              { id: "c", text: "It removes all greenhouse gases" },
              { id: "d", text: "It only happens at night" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Enhanced greenhouse effect", statement: "Extra greenhouse gases from human activity cause additional warming beyond the natural effect." },
            ],
            steps: [
              { reasoning: "Human emissions increase greenhouse gas concentrations, enhancing warming.", working: "\\text{extra gases}\\Rightarrow\\text{extra warming}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It is caused by human activities adding extra greenhouse gases",
            commonErrors: ["Saying the natural greenhouse effect is harmful — it is necessary for life."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u3-climate-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Atmospheric carbon dioxide concentration rose from 280 ppm to 420 ppm. Calculate the percentage increase.",
          response: { type: "numeric", parts: [{ label: "Increase", answer: 50, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage increase = (new − old) ÷ old × 100" },
            ],
            steps: [
              { reasoning: "Increase = $420-280=140$ ppm.", working: "420-280=140", marks: 1, markCode: "M" },
              { reasoning: "Percentage increase = $\\frac{140}{280}\\times100=50\\%$.", working: "\\frac{140}{280}\\times100=50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50\\%$",
            commonErrors: ["Dividing by the new value (420) instead of the original (280)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-climate-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Global sea level has risen by about 15 cm since 1900. Express this rise in millimetres.",
          response: { type: "numeric", parts: [{ label: "Rise", answer: 150, unit: "mm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Unit conversion", statement: "1 cm = 10 mm" },
            ],
            steps: [
              { reasoning: "Convert centimetres to millimetres.", working: "15\\times10", marks: 1, markCode: "M" },
              { reasoning: "Sea level has risen 150 mm — a small average rise that affects coastlines worldwide.", working: "15\\times10=150\\text{ mm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150$ mm",
            commonErrors: ["Multiplying by 100 instead of 10."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-climate-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "At a weather front where warm air meets cold air:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The air masses mix without any weather" },
              { id: "b", text: "The cold air rises over the warm air" },
              { id: "c", text: "The warm air rises over the cold air and forms clouds and precipitation" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weather front", statement: "A boundary between air masses of different temperatures." },
            ],
            steps: [
              { reasoning: "Warm air is forced up over denser cold air; rising air cools, condenses and produces clouds/precipitation.", working: "\\text{warm rises}\\to\\text{clouds}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The warm air rises over the cold air and forms clouds and precipitation",
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u3-climate-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which human activity releases the most carbon dioxide into the atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recycling paper" },
              { id: "b", text: "Planting trees" },
              { id: "c", text: "Burning fossil fuels" },
              { id: "d", text: "Walking to school" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Greenhouse gases", statement: "Burning fossil fuels releases large amounts of CO₂." },
            ],
            steps: [
              { reasoning: "Fossil fuel combustion is the main source of CO₂ emissions.", working: "\\text{fossil fuels}\\to CO_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Burning fossil fuels",
            commonErrors: ["Choosing planting trees — that absorbs CO₂."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-climate-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A region's average annual rainfall decreased from 900 mm to 720 mm. Calculate the percentage decrease.",
          response: { type: "numeric", parts: [{ label: "Decrease", answer: 20, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage decrease = (initial − final) ÷ initial × 100" },
            ],
            steps: [
              { reasoning: "Decrease = 900 − 720 = 180 mm; percentage = $\\frac{180}{900}\\times100$.", working: "\\frac{900-720}{900}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Rainfall decreased by 20% — a long-term trend, unlike single weather events.", working: "\\frac{180}{900}\\times100=20\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20\\%$",
            commonErrors: ["Dividing by the final value instead of the original 900 mm."],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
  ],
};
