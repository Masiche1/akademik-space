import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "s7-u3-lesson-3-2",
  code: "3-2",
  title: "Water and Weather",
  goal: "I CAN explain how the Sun and gravity drive the water cycle, and how the motion and interaction of air masses and fronts lead to weather that can be predicted.",
  standards: ["MS-ESS2-4", "MS-ESS2-5", "SEP: Developing and Using Models", "SEP: Analyzing and Interpreting Data"],
  vocabulary: [
    { term: "Water cycle", definition: "The continuous movement of water among the ocean, atmosphere, land and living things." },
    { term: "Evaporation", definition: "The change of liquid water into water vapor, driven by energy from the Sun." },
    { term: "Condensation", definition: "The change of water vapor into liquid droplets as air cools." },
    { term: "Air mass", definition: "A very large body of air with similar temperature and moisture throughout." },
    { term: "Front", definition: "The boundary where two different air masses meet." },
    { term: "Air pressure", definition: "The force that the weight of air exerts on a surface; low pressure often brings clouds and rain." },
    { term: "Runoff", definition: "Water that flows over land surfaces into streams, lakes and oceans." },
  ],
  concepts: [
    {
      id: "s7-u3-water-cycle",
      title: "The water cycle",
      skill: "Explain how energy from the Sun and gravity move water through Earth's systems, and calculate parts of a water budget.",
      lesson: {
        sections: [
          {
            heading: "Energy from the Sun",
            body: "The Sun's energy warms the surface of oceans, lakes and soil. Warm liquid water **evaporates** into water vapor. Plants also release water vapor from their leaves, called **transpiration**. The warm, moist air rises and cools. The vapor then **condenses** into tiny droplets that form clouds.",
          },
          {
            heading: "The role of gravity",
            body: "When cloud droplets grow heavy enough, gravity pulls them down as **precipitation**: rain, snow, sleet or hail. Gravity also moves water downhill as **runoff** over land and as **groundwater** through soil and rock. Rivers carry the water back to the ocean, and the cycle continues.\n\nThe total amount of water on Earth stays almost the same. Water only changes its location and state.",
          },
        ],
        keyFormulas: [
          { name: "Sun's energy drives", statement: "Evaporation, transpiration and the rising of warm air" },
          { name: "Gravity drives", statement: "Precipitation, runoff and groundwater flow" },
          { name: "Percent of precipitation", statement: "$\\text{percent}=\\dfrac{\\text{part}}{\\text{whole}}\\times100$" },
        ],
        workedExample: {
          problem: "A region receives 80 cm of precipitation in a year. Of this, 60 cm returns to the air by evaporation and transpiration. Find the runoff and groundwater total, and the percent that returns to the air.",
          solution: "The remainder is $80-60=20\\text{ cm}$. Percent returned to the air: $\\dfrac{60}{80}\\times100=75\\%$.",
        },
      },
      questions: [
        {
          id: "s7-u3-water-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which energy source drives evaporation in the water cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity" },
              { id: "b", text: "The Moon's pull" },
              { id: "c", text: "Wind" },
              { id: "d", text: "Energy from the Sun" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solar energy and evaporation", statement: "Energy from the Sun warms liquid water so that it evaporates." },
            ],
            steps: [
              { reasoning: "Evaporation needs thermal energy, which comes from the Sun.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Energy from the Sun",
            commonErrors: ["Choosing gravity, which pulls precipitation and runoff downward but does not evaporate water."],
            examinerNote: "B1 for the Sun.",
          },
        },
        {
          id: "s7-u3-water-cycle-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A watershed receives 120 cm of precipitation in a year. Evaporation and transpiration return 78 cm of water to the air.\n\nCalculate the percent of the precipitation that returns to the air.",
          response: { type: "numeric", parts: [{ label: "Percent", answer: 65, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent", statement: "$\\text{percent}=\\dfrac{\\text{part}}{\\text{whole}}\\times100$" },
            ],
            steps: [
              { reasoning: "The part is 78 cm and the whole is 120 cm.", working: "\\frac{78}{120}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 100.", working: "\\frac{78}{120}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=65\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65\\%$",
            commonErrors: ["Dividing 120 by 78.", "Subtracting to get 42 cm and giving that as the percent."],
            examinerNote: "M1 for 78 / 120. M1 for x 100. A1 for 65 or 65%. Allow 0.65 for M1 A0 if no percent is shown.",
          },
        },
        {
          id: "s7-u3-water-cycle-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how both energy from the Sun and gravity are needed for a water molecule to travel from the ocean to a mountain stream and back to the ocean.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solar energy and evaporation", statement: "The Sun's energy evaporates water and lifts it into the atmosphere." },
              { kind: "principle", name: "Gravity and precipitation", statement: "Gravity pulls precipitation to the ground and moves runoff downhill." },
            ],
            steps: [
              { reasoning: "Energy from the Sun makes ocean water evaporate into water vapor.", marks: 1, markCode: "B" },
              { reasoning: "Winds carry the moist air over land, where it rises up the mountain, cools and condenses into clouds.", marks: 1, markCode: "B" },
              { reasoning: "Gravity pulls the water down as precipitation, which collects in the stream.", marks: 1, markCode: "B" },
              { reasoning: "Gravity makes the stream flow downhill as runoff, returning the water to the ocean.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The Sun evaporates ocean water; the vapor rises, cools and condenses into clouds; gravity pulls precipitation down and makes runoff flow back to the ocean.",
            commonErrors: ["Saying that gravity makes water evaporate.", "Saying that the Sun makes rain fall."],
            examinerNote: "B1 for each marking point. Both energy sources must be named correctly to reach full marks. Allow wind or air movement for the second mark.",
          },
        },
        {
          id: "s7-u3-water-cycle-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student sets up a model of the water cycle. A tray of warm water sits under a lamp. A clear lid sits above the tray, with ice cubes resting on the top of the lid. After 20 minutes, drops form on the underside of the lid and fall back into the tray.",
          parts: [
            { label: "a", prompt: "Identify the part of the real water cycle that the lamp represents.", marks: 1 },
            { label: "b", prompt: "Explain why droplets form on the underside of the lid.", marks: 2 },
            { label: "c", prompt: "The student measures 150 mL of water in the tray at the start. After the investigation, 18 mL of water is on the lid and 12 mL is in the air as vapor and on the sides. Calculate the volume of water left in the tray.", marks: 2 },
            { label: "d", prompt: "Evaluate how well the model represents the water cycle. Describe one way the model is accurate and one limitation.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Condensation", statement: "Water vapor cools and condenses into liquid droplets." },
              { kind: "law", name: "Conservation of matter", statement: "The total amount of water stays the same; it only changes location and state." },
              { kind: "principle", name: "Models", statement: "A model shows how a system works but leaves out some real features." },
            ],
            steps: [
              { part: "a", reasoning: "The lamp represents energy from the Sun.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Warm water evaporates, and the vapor rises to the cool lid.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The lid is cooled by the ice, so the vapor cools and condenses into liquid droplets.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Subtract the water that left the tray from the starting volume.", working: "150-18-12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with unit.", working: "=120\\text{ mL}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Accurate: evaporation, condensation and precipitation occur in the same order as in the water cycle.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Limitation: the model has no land, plants (transpiration), runoff or groundwater, or the scale is very small.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Evidence: droplets returning to the tray show that water is recycled rather than lost.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Judgment: the model is useful for the basic processes but is incomplete for the whole Earth system.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) The Sun (b) Warm water evaporates; vapor meets the cold lid, cools and condenses (c) $120\\text{ mL}$ (d) Accurate for evaporation, condensation and precipitation; limited because it lacks land, plants, runoff and groundwater.",
            commonErrors: ["In (b) saying the water 'leaks' through the lid.", "In (c) adding 18 and 12 to 150 instead of subtracting."],
            examinerNote: "(c) A1 for 120 mL; allow ecf only if subtraction is shown. (d) Allow any valid accuracy and any valid limitation.",
          },
        },
      ],
    },
    {
      id: "s7-u3-air-masses-fronts",
      title: "Air masses, fronts and weather prediction",
      skill: "Explain how the interaction of air masses causes weather changes, and use data to predict weather.",
      lesson: {
        sections: [
          {
            heading: "Air masses and pressure",
            body: "An **air mass** is a huge body of air with fairly uniform temperature and moisture. It takes on the features of the region where it forms. A **maritime** air mass forms over the ocean and is moist. A **continental** air mass forms over land and is dry. A **polar** air mass is cold and a **tropical** air mass is warm.\n\nSinking air makes **high pressure**, which brings clear, calm weather. Rising air makes **low pressure**, which brings clouds and precipitation.",
          },
          {
            heading: "Fronts",
            body: "A **front** forms where two air masses meet. The masses do not mix easily because they differ in density.\n\n- **Cold front:** cold, dense air pushes under warm air and forces it up quickly. This brings heavy rain or thunderstorms, then cooler, clearer weather.\n- **Warm front:** warm air slides gradually over cold air. This brings light, steady rain over a longer time, then warmer weather.\n- **Stationary front:** two masses meet and neither moves much, so cloudy, wet weather can last for days.",
          },
          {
            heading: "Predicting weather",
            body: "Meteorologists combine data from satellites, radar, weather stations and balloons into computer models. Predictions are **probabilities** rather than certainties, because the atmosphere is complex and small errors in data grow over time. Forecasts for the next 1 to 3 days are more reliable than forecasts for 10 days. Travel time of a front can be estimated: $\\text{time}=\\dfrac{\\text{distance}}{\\text{speed}}$.",
          },
        ],
        keyFormulas: [
          { name: "Cold front", statement: "Cold air undercuts warm air: storms, then cooler weather" },
          { name: "Warm front", statement: "Warm air rises over cold air: steady rain, then warmer weather" },
          { name: "Travel time", statement: "$\\text{time}=\\dfrac{\\text{distance}}{\\text{speed}}$" },
        ],
        workedExample: {
          problem: "A cold front is 360 km west of a town and moves east at 30 km/h. Predict when it will arrive and describe the weather change.",
          solution: "Time $=\\dfrac{360}{30}=12\\text{ hours}$. When the front passes, the warm air is pushed upward by dense cold air, so expect heavy rain or thunderstorms, followed by cooler, clearer weather.",
        },
      },
      questions: [
        {
          id: "s7-u3-air-masses-fronts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What weather is most often associated with an area of low air pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clouds and precipitation" },
              { id: "b", text: "Extreme cold with no clouds" },
              { id: "c", text: "No change in weather" },
              { id: "d", text: "Clear skies and calm weather" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Air pressure and weather", statement: "Rising air at low pressure cools and condenses, forming clouds and precipitation." },
            ],
            steps: [
              { reasoning: "Low pressure means air is rising, which cools and forms clouds and precipitation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Clouds and precipitation",
            commonErrors: ["Choosing (a), which describes high pressure with sinking air."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u3-air-masses-fronts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cold front is 450 km from a city and is moving toward the city at 30 km/h.\n\nCalculate how many hours it will take the front to reach the city.",
          response: { type: "numeric", parts: [{ label: "Time", answer: 15, unit: "hours" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time", statement: "$\\text{time}=\\dfrac{\\text{distance}}{\\text{speed}}$" },
            ],
            steps: [
              { reasoning: "Divide the distance by the speed.", working: "\\text{time}=\\frac{450}{30}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "=15\\text{ hours}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15\\text{ hours}$",
            commonErrors: ["Multiplying 450 by 30.", "Dividing 30 by 450."],
            examinerNote: "M1 for 450 / 30. A1 for 15 hours.",
          },
        },
        {
          id: "s7-u3-air-masses-fronts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use evidence to explain why a cold front usually brings short, heavy storms, while a warm front usually brings longer, lighter rain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cold front", statement: "Dense cold air pushes under warm air and forces it up steeply." },
              { kind: "principle", name: "Warm front", statement: "Warm air rises gradually over a wedge of cold air." },
            ],
            steps: [
              { reasoning: "At a cold front, dense cold air wedges under the warm air and forces it to rise quickly.", marks: 1, markCode: "B" },
              { reasoning: "The fast rising warm air cools and condenses rapidly, forming tall storm clouds and heavy rain over a short time as the narrow front passes.", marks: 1, markCode: "B" },
              { reasoning: "At a warm front, warm air slides slowly and gradually up over the cold air.", marks: 1, markCode: "B" },
              { reasoning: "Gradual rising produces widespread layered clouds and light rain that lasts longer.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "A cold front lifts warm air quickly and steeply, giving heavy short storms; a warm front lifts warm air slowly over a large area, giving light, longer rain.",
            commonErrors: ["Saying that warm air is denser than cold air.", "Describing the weather without explaining the lifting."],
            examinerNote: "Allow 'steep' or 'fast' for the cold front lift and 'gentle' or 'slow' for the warm front lift. Reject any statement that warm air pushes under cold air.",
          },
        },
        {
          id: "s7-u3-air-masses-fronts-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A weather station records the following data over 24 hours. At 6 a.m. the temperature is 24 degrees Celsius, air pressure is falling and the sky is cloudy. At 12 p.m. a heavy thunderstorm occurs. At 6 p.m. the temperature has dropped to 14 degrees Celsius, the sky is clear and the air pressure is rising.",
          parts: [
            { label: "a", prompt: "Calculate the change in temperature between 6 a.m. and 6 p.m.", marks: 1 },
            { label: "b", prompt: "Identify the type of front that most likely passed the station, and use evidence from the data to support your answer.", marks: 3 },
            { label: "c", prompt: "Describe the type of air mass that arrived after the front passed, in terms of temperature.", marks: 1 },
            { label: "d", prompt: "A forecaster predicts the front will reach a second town 240 km east at 40 km/h. Calculate the time, and explain why the forecast for 10 days away is less reliable than the forecast for the next day.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cold front", statement: "A cold front brings storms followed by falling temperature and clearing skies." },
              { kind: "formula", name: "Time", statement: "$\\text{time}=\\dfrac{\\text{distance}}{\\text{speed}}$" },
              { kind: "principle", name: "Forecasting", statement: "Forecasts are probabilities; small errors in data grow over time." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract: 24 - 14 = 10, so the temperature fell by 10 degrees Celsius.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Claim: a cold front.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Evidence: a heavy thunderstorm, then a sharp temperature drop of 10 degrees Celsius.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Reasoning: the clear sky and rising pressure afterward show that cold, dense air replaced the warm air.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "A cold air mass (cooler than the air before).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Divide distance by speed.", working: "\\text{time}=\\frac{240}{40}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "=6\\text{ hours}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The atmosphere is a complex system with many interacting variables.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Small errors or gaps in the starting data grow larger over time.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So a forecast for 10 days away is a lower probability than for the next day.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $10$ degrees Celsius drop (b) Cold front: storm, then a large temperature drop with clear sky and rising pressure (c) Cold (d) $6\\text{ hours}$; small errors in data grow, so long-range forecasts are less reliable.",
            commonErrors: ["In (b) choosing a warm front because of the cloud.", "In (a) giving -10 without saying the temperature fell, or 38."],
            examinerNote: "(a) Allow -10 degrees Celsius or a drop of 10. (b) Reasoning must link to the data. (c) Allow 'polar' or 'cooler'. (d) Allow 'less data' or 'atmosphere is chaotic' for the explanation.",
          },
        },
      ],
    },
  ],
};
