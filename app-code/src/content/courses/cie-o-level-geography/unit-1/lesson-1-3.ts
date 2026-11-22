import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "oleg-u1-lesson-1-3",
  code: "1-3",
  title: "Weather and Climate",
  goal: "I CAN describe weather elements, climate types and human influences.",
  standards: ["2217: Physical geography — weather and climate"],
  vocabulary: [
    { term: "Weather", definition: "Day-to-day atmospheric conditions." },
    { term: "Climate", definition: "Long-term average weather pattern." },
    {
      term: "Temperature",
      definition: "Degree of hotness/coldness — measured in °C.",
    },
    {
      term: "Precipitation",
      definition: "Water falling from atmosphere — rain, snow, hail.",
    },
    {
      term: "Air mass",
      definition: "Large body of air with uniform temperature and humidity.",
    },
    { term: "Front", definition: "Boundary between two air masses." },
  ],
  concepts: [
    {
      id: "oleg-u1-weather-elements",
      title: "Weather elements and measurement",
      skill: "Describe temperature, precipitation, wind and air pressure.",
      lesson: {
        sections: [
          {
            heading: "Temperature",
            body: "Measured with thermometer in °C. Affected by latitude (equator hot, poles cold), altitude (higher = colder), distance from sea (continental = extreme), ocean currents.",
          },
          {
            heading: "Precipitation and wind",
            body: "Precipitation: rain, snow, hail — measured in mm. Wind: moving air — measured by direction and speed (anemometer). Air pressure: weight of atmosphere — high pressure = settled, low = unsettled.",
          },
          {
            heading: "Air masses and fronts",
            body: "Air masses: polar (cold), tropical (warm), continental (dry), maritime (moist). Fronts: boundaries — cold front (steep, heavy rain) vs warm front (gentle, prolonged rain).",
          },
        ],
        keyFormulas: [
          {
            name: "Weather",
            statement: "Temp+precip+wind+pressure; Air masses→fronts→weather.",
          },
        ],
        workedExample: {
          problem: "Why is it colder at higher altitude?",
          solution:
            "Air pressure decreases with altitude → less heat retention → temperature drops ~1°C per 100m (lapse rate).",
        },
      },
      questions: [
        {
          id: "oleg-u1-we-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between weather and climate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same" },
              { id: "b", text: "Weather=long-term; climate=day-to-day" },
              {
                id: "c",
                text: "Weather=day-to-day; climate=long-term average",
              },
              { id: "d", text: "Weather=temperature only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Weather vs climate",
                statement: "Day-to-day vs long-term.",
              },
            ],
            steps: [
              {
                reasoning: "Weather=short-term, climate=long-term.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Weather=day-to-day; climate=long-term",
            commonErrors: ["Reversing definitions."],
          },
        },
        {
          id: "oleg-u1-we-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two factors affecting temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Temperature factors",
                statement: "Latitude, altitude, distance from sea, currents.",
              },
            ],
            steps: [
              { reasoning: "Any two factors.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly explained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Latitude, altitude, distance from sea, ocean currents.",
            commonErrors: ["Saying 'weather'."],
          },
        },
        {
          id: "oleg-u1-we-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how air masses and fronts create weather.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Air masses/fronts",
                statement: "Air masses collide at fronts → weather.",
              },
            ],
            steps: [
              {
                reasoning: "Air masses have different properties.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fronts = boundaries between them.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Collision → clouds/rain/wind.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Air masses collide at fronts → weather.",
            commonErrors: ["Ignoring front types."],
          },
        },
        {
          id: "oleg-u1-we-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Weather and climate.",
          parts: [
            { label: "a", prompt: "Weather vs climate?", marks: 1 },
            { label: "b", prompt: "Two temperature factors?", marks: 2 },
            { label: "c", prompt: "What is an air mass?", marks: 2 },
            { label: "d", prompt: "Cold vs warm front?", marks: 2 },
            { label: "e", prompt: "Why is altitude colder?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weather",
                statement: "Definitions+factors+mechanisms.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Day-to-day vs long-term.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two factors.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Large air body.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Uniform temp/humidity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Cold=steep/heavy; warm=gentle/prolonged.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Correct contrast.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Lower pressure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Less heat retention.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) weather/climate (b) factors (c) air mass (d) fronts (e) altitude",
          },
        },
        { id: "oleg-u1-we-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which instrument is used to measure precipitation?",
          response: { type: "mcq", choices: [ { id: "a", text: "Anemometer" }, { id: "b", text: "Barometer" }, { id: "c", text: "Rain gauge" }, { id: "d", text: "Thermometer" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Weather instruments", statement: "Rain gauge records precipitation." } ], steps: [ { reasoning: "Precipitation is measured by a rain gauge.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** Rain gauge", commonErrors: ["Choosing an instrument for another weather element."] } },
        { id: "oleg-u1-we-q6", difficulty: "foundation", totalMarks: 2,
          stem: "At sea level the temperature is 20 °C. Using a lapse rate of about 1 °C per 100 m, calculate the temperature at 500 m.",
          response: { type: "numeric", parts: [ { label: "Temperature", answer: 15, unit: "°C" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Lapse rate", statement: "Temperature falls about 1 °C per 100 m." } ], steps: [ { reasoning: "500 m = 5 x 1 °C drop; 20 - 5 = 15 °C.", marks: 2, markCode: "AO1" } ], finalAnswer: "15 °C", commonErrors: ["Adding instead of subtracting the lapse rate."] } },
        { id: "oleg-u1-we-q7", difficulty: "core", totalMarks: 1,
          stem: "High air pressure is generally associated with which type of weather?",
          response: { type: "mcq", choices: [ { id: "a", text: "Strong storm winds" }, { id: "b", text: "Settled, dry weather" }, { id: "c", text: "Rapid temperature change" }, { id: "d", text: "Heavy continuous rain" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "property", name: "Air pressure", statement: "High pressure usually brings settled conditions." } ], steps: [ { reasoning: "High pressure gives settled weather; low pressure is unsettled.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** Settled, dry weather", commonErrors: ["Reversing the meaning of high pressure."] } },
        { id: "oleg-u1-we-q8", difficulty: "core", totalMarks: 2,
          stem: "Daily rainfall totals for four days are 12 mm, 8 mm, 20 mm and 5 mm. Calculate the total precipitation.",
          response: { type: "numeric", parts: [ { label: "Total", answer: 45, unit: "mm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Precipitation total", statement: "Total precipitation is the sum of daily amounts." } ], steps: [ { reasoning: "12 + 8 + 20 + 5 = 45 mm.", marks: 2, markCode: "AO1" } ], finalAnswer: "45 mm", commonErrors: ["Averaging instead of adding."] } },
        { id: "oleg-u1-we-q9", difficulty: "core", totalMarks: 3,
          stem: "Explain two factors that affect the amount of precipitation an area receives.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Precipitation controls", statement: "Moisture supply and uplift determine rainfall." } ], steps: [ { reasoning: "Name two factors such as latitude, altitude, distance from sea, winds or air masses.", marks: 1, markCode: "AO1" }, { reasoning: "Explain how each changes moisture availability.", marks: 1, markCode: "AO2" }, { reasoning: "Link to rising air and condensation for rain.", marks: 1, markCode: "AO3" } ], finalAnswer: "Latitude/air masses control moisture while uplift and condensation produce precipitation.", commonErrors: ["Listing factors without explaining their effect."] } },
        { id: "oleg-u1-we-q10", difficulty: "core", totalMarks: 1,
          stem: "A maritime air mass is best described as...",
          response: { type: "mcq", choices: [ { id: "a", text: "always cold" }, { id: "b", text: "dry" }, { id: "c", text: "moist" }, { id: "d", text: "formed over land" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Air masses", statement: "Maritime air masses form over oceans and are moist." } ], steps: [ { reasoning: "Maritime = ocean source = moist; continental is drier.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** moist", commonErrors: ["Confusing maritime with continental."] } },
        { id: "oleg-u1-we-q11", difficulty: "core", totalMarks: 2,
          stem: "Wind speed is measured as 10 km/h. Convert this to metres per second.",
          response: { type: "numeric", parts: [ { label: "Speed", answer: 2.78, unit: "m/s", tolerance: 0.01 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Unit conversion", statement: "1 km/h = 1/3.6 m/s." } ], steps: [ { reasoning: "10 / 3.6 = 2.78 m/s.", marks: 2, markCode: "AO1" } ], finalAnswer: "2.78 m/s", commonErrors: ["Multiplying by 3.6 instead of dividing."] } },
        { id: "oleg-u1-we-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which weather change is most typical when a cold front passes?",
          response: { type: "mcq", choices: [ { id: "a", text: "Fog that lasts all day" }, { id: "b", text: "No cloud and falling pressure" }, { id: "c", text: "Prolonged gentle drizzle with warming" }, { id: "d", text: "Steep cloud, heavy rain then colder air" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "comparison", name: "Fronts", statement: "Cold fronts are steep and produce intense rain then colder air." } ], steps: [ { reasoning: "Cold fronts give steep uplift, heavy rain and colder air.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** Steep cloud, heavy rain then colder air", commonErrors: ["Confusing cold and warm front weather."] } },
        { id: "oleg-u1-we-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how air masses and fronts combine to create different types of weather.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Fronts and weather", statement: "Meeting air masses at fronts drive uplift and weather." } ], steps: [ { reasoning: "Air masses have different temperature and humidity properties.", marks: 1, markCode: "AO1" }, { reasoning: "Fronts are boundaries where unlike air masses meet.", marks: 1, markCode: "AO1" }, { reasoning: "Collision/uplift forms cloud, rain or wind.", marks: 1, markCode: "AO2" }, { reasoning: "Clear conclusion about weather change.", marks: 1, markCode: "AO3" } ], finalAnswer: "Different air masses meet at fronts; uplift forms cloud and precipitation.", commonErrors: ["Describing air masses without linking them to fronts."] } },
        { id: "oleg-u1-we-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Why do coastal areas usually have a smaller range of temperatures than inland areas at the same latitude?",
          response: { type: "mcq", choices: [ { id: "a", text: "Cloud cover is absent near coasts" }, { id: "b", text: "Coastal winds are always warm" }, { id: "c", text: "Altitude is always lower near the sea" }, { id: "d", text: "The sea heats and cools more slowly than land" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "principle", name: "Maritime influence", statement: "Water has a higher heat capacity, moderating coastal temperatures." } ], steps: [ { reasoning: "The sea stores and releases heat slowly, reducing extremes.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** The sea heats and cools more slowly than land", commonErrors: ["Ignoring the moderating effect of the sea."] } },
        { id: "oleg-u1-we-q15", difficulty: "core", totalMarks: 2,
          stem: "Air pressure at one station is 1010 hPa and at another is 995 hPa. Calculate the pressure difference.",
          response: { type: "numeric", parts: [ { label: "Difference", answer: 15, unit: "hPa" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Pressure gradient", statement: "Pressure difference = higher minus lower pressure." } ], steps: [ { reasoning: "1010 - 995 = 15 hPa.", marks: 2, markCode: "AO1" } ], finalAnswer: "15 hPa", commonErrors: ["Giving a negative answer without direction."] } },
        { id: "oleg-u1-we-q16", difficulty: "core", totalMarks: 1,
          stem: "Which pair of instruments measures air pressure and wind speed respectively?",
          response: { type: "mcq", choices: [ { id: "a", text: "Hygrometer and thermometer" }, { id: "b", text: "Thermometer and rain gauge" }, { id: "c", text: "Barometer and anemometer" }, { id: "d", text: "Wind vane and barometer" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Instrument pairs", statement: "Barometer measures pressure; anemometer measures wind speed." } ], steps: [ { reasoning: "Match each instrument to the element it measures.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** Barometer and anemometer", commonErrors: ["Mixing up instrument functions."] } },
      ],
    },
    {
      id: "oleg-u1-climate-types",
      title: "Climate types and human influence",
      skill: "Describe major climate types and human impacts on climate.",
      lesson: {
        sections: [
          {
            heading: "Climate classification",
            body: "Tropical: hot year-round, heavy rain (equatorial). Temperate: distinct seasons (UK, Mediterranean). Continental: cold winters, hot summers. Polar: cold year-round. Arid: dry (deserts).",
          },
          {
            heading: "Climate change",
            body: "Global warming: greenhouse gases (CO₂, methane) trap heat → rising temperatures → sea level rise, extreme weather, ecosystem disruption. Causes: fossil fuels, deforestation, industry.",
          },
          {
            heading: "Human influence",
            body: "Urban heat island: cities warmer than surroundings. Air pollution affects local climate. Deforestation changes rainfall patterns. Agriculture affects CO₂ levels.",
          },
        ],
        keyFormulas: [
          {
            name: "Climate",
            statement:
              "Tropical/temperate/continental/polar/arid; Change=greenhouse+human.",
          },
        ],
        workedExample: {
          problem: "Why are cities warmer than countryside?",
          solution:
            "Urban heat island: concrete/asphalt absorb heat, less vegetation, waste heat from buildings/transport.",
        },
      },
      questions: [
        {
          id: "oleg-u1-ct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which climate type has hot temperatures year-round?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polar" },
              { id: "b", text: "Tropical" },
              { id: "c", text: "Continental" },
              { id: "d", text: "Temperate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tropical",
                statement: "Hot year-round.",
              },
            ],
            steps: [
              { reasoning: "Tropical = hot.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Tropical",
            commonErrors: ["Confusing with polar."],
          },
        },
        {
          id: "oleg-u1-ct-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What causes global warming?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Global warming",
                statement: "Greenhouse gases trap heat.",
              },
            ],
            steps: [
              {
                reasoning: "Greenhouse gases (CO₂, methane).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "From fossil fuels/industry.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Greenhouse gases trap heat from human activities.",
            commonErrors: ["Saying it's natural cycles only."],
          },
        },
        {
          id: "oleg-u1-ct-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the urban heat island effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urban heat island",
                statement: "Cities warmer than surroundings.",
              },
            ],
            steps: [
              {
                reasoning: "Concrete/asphalt absorb heat.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Less vegetation to cool.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Waste heat from buildings/transport.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Cities warmer: materials+less vegetation+waste heat.",
            commonErrors: ["Ignoring human factors."],
          },
        },
        {
          id: "oleg-u1-ct-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Climate types and human influence.",
          parts: [
            { label: "a", prompt: "Tropical climate?", marks: 1 },
            { label: "b", prompt: "Global warming cause?", marks: 2 },
            { label: "c", prompt: "Urban heat island?", marks: 3 },
            { label: "d", prompt: "Two effects of climate change?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate",
                statement: "Types+causes+effects.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hot year-round.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Greenhouse gases.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Human activities.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Materials absorb heat.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Less vegetation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Waste heat.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Any two effects.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Explained.", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "(a) tropical (b) greenhouse (c) urban heat island (d) effects",
          },
        },
        { id: "oleg-u1-ct-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which climate type is characterised by very low rainfall and hot deserts?",
          response: { type: "mcq", choices: [ { id: "a", text: "Tropical rainforest" }, { id: "b", text: "Arid" }, { id: "c", text: "Polar" }, { id: "d", text: "Temperate oceanic" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Arid climate", statement: "Arid climates have very low precipitation." } ], steps: [ { reasoning: "Hot deserts are arid climates.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** Arid", commonErrors: ["Confusing arid with tropical."] } },
        { id: "oleg-u1-ct-q6", difficulty: "core", totalMarks: 2,
          stem: "The mean monthly temperatures for a place are 12 °C, 18 °C and 15 °C. Calculate the mean temperature.",
          response: { type: "numeric", parts: [ { label: "Mean", answer: 15, unit: "°C" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Mean temperature", statement: "Mean = sum of values / number of values." } ], steps: [ { reasoning: "(12 + 18 + 15) / 3 = 45 / 3 = 15 °C.", marks: 2, markCode: "AO1" } ], finalAnswer: "15 °C", commonErrors: ["Forgetting to divide by 3."] } },
        { id: "oleg-u1-ct-q7", difficulty: "core", totalMarks: 1,
          stem: "A temperate climate is best described as having...",
          response: { type: "mcq", choices: [ { id: "a", text: "permanent snow" }, { id: "b", text: "hot weather all year" }, { id: "c", text: "no rainfall" }, { id: "d", text: "distinct seasons" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Temperate climate", statement: "Temperate climates have warm summers and cool winters." } ], steps: [ { reasoning: "Distinct seasons are the key feature.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** distinct seasons", commonErrors: ["Confusing temperate with tropical."] } },
        { id: "oleg-u1-ct-q8", difficulty: "core", totalMarks: 2,
          stem: "Carbon dioxide emissions rise from 40 million tonnes to 60 million tonnes. Calculate the percentage increase.",
          response: { type: "numeric", parts: [ { label: "Increase", answer: 50, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage change", statement: "Percentage increase = (new - old)/old x 100." } ], steps: [ { reasoning: "(60 - 40) / 40 x 100 = 50%.", marks: 2, markCode: "AO1" } ], finalAnswer: "50 %", commonErrors: ["Dividing by the new value instead of the original."] } },
        { id: "oleg-u1-ct-q9", difficulty: "core", totalMarks: 3,
          stem: "Describe two human activities that can change local climate.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Human climate influence", statement: "Land use and emissions alter local climate." } ], steps: [ { reasoning: "Name two activities such as deforestation, urbanisation or industry.", marks: 1, markCode: "AO1" }, { reasoning: "Explain how each changes heat, moisture or pollution locally.", marks: 1, markCode: "AO2" }, { reasoning: "Link to urban heat island or altered rainfall.", marks: 1, markCode: "AO3" } ], finalAnswer: "Deforestation and urbanisation can change rainfall and temperature; industry adds heat and pollution.", commonErrors: ["Listing activities without mechanisms."] } },
        { id: "oleg-u1-ct-q10", difficulty: "core", totalMarks: 1,
          stem: "Which gas is produced in large quantities by burning fossil fuels and trapping heat?",
          response: { type: "mcq", choices: [ { id: "a", text: "Argon" }, { id: "b", text: "Oxygen" }, { id: "c", text: "Nitrogen" }, { id: "d", text: "Carbon dioxide" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Greenhouse gases", statement: "CO2 from fossil fuel burning is a major greenhouse gas." } ], steps: [ { reasoning: "CO2 is the main human-caused greenhouse gas.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** Carbon dioxide", commonErrors: ["Choosing abundant non-greenhouse gases."] } },
        { id: "oleg-u1-ct-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A polar climate has mean temperatures of -20 °C, -15 °C and -18 °C. Calculate the mean temperature.",
          response: { type: "numeric", parts: [ { label: "Mean", answer: -17.67, unit: "°C", tolerance: 0.01 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Mean temperature", statement: "Mean = sum / count, keeping the negative sign." } ], steps: [ { reasoning: "(-20 + -15 + -18) / 3 = -53 / 3 = -17.67 °C.", marks: 2, markCode: "AO1" } ], finalAnswer: "-17.67 °C", commonErrors: ["Losing the negative sign."] } },
        { id: "oleg-u1-ct-q12", difficulty: "challenge", totalMarks: 1,
          stem: "The urban heat island effect is mainly caused by...",
          response: { type: "mcq", choices: [ { id: "a", text: "greater wind speed only" }, { id: "b", text: "more trees in the city" }, { id: "c", text: "lower population density" }, { id: "d", text: "concrete, asphalt, waste heat and less vegetation" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "principle", name: "Urban heat island", statement: "Built surfaces absorb heat and human activity adds waste heat." } ], steps: [ { reasoning: "Materials, waste heat and reduced vegetation raise urban temperatures.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** concrete, asphalt, waste heat and less vegetation", commonErrors: ["Ignoring building materials and waste heat."] } },
        { id: "oleg-u1-ct-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Explain two consequences of global climate change for human societies.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Climate change impacts", statement: "Warming changes hazards, water and food systems." } ], steps: [ { reasoning: "Name two consequences such as sea level rise or extreme weather.", marks: 1, markCode: "AO1" }, { reasoning: "Explain how each affects people, food or water security.", marks: 1, markCode: "AO2" }, { reasoning: "Give a clear conclusion about risk.", marks: 1, markCode: "AO3" } ], finalAnswer: "Sea level rise and more extreme weather threaten coasts, agriculture and water supplies.", commonErrors: ["Listing impacts without social consequences."] } },
        { id: "oleg-u1-ct-q14", difficulty: "core", totalMarks: 1,
          stem: "Which climate type has hot temperatures and heavy rainfall year-round near the Equator?",
          response: { type: "mcq", choices: [ { id: "a", text: "Mediterranean" }, { id: "b", text: "Continental" }, { id: "c", text: "Tropical" }, { id: "d", text: "Polar" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Tropical climate", statement: "Tropical climates near the Equator are hot and wet." } ], steps: [ { reasoning: "Equatorial tropical climates are hot and wet all year.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** Tropical", commonErrors: ["Confusing tropical with arid."] } },
        { id: "oleg-u1-ct-q15", difficulty: "core", totalMarks: 2,
          stem: "A town's population is 50 000 and its area is 25 km². Calculate the population density.",
          response: { type: "numeric", parts: [ { label: "Density", answer: 2000, unit: "people/km²" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Population density", statement: "Density = people per unit area." } ], steps: [ { reasoning: "50 000 / 25 = 2000 people/km².", marks: 2, markCode: "AO1" } ], finalAnswer: "2000 people/km²", commonErrors: ["Dividing area by population."] } },
        { id: "oleg-u1-ct-q16", difficulty: "core", totalMarks: 1,
          stem: "Deforestation can affect climate mainly because it...",
          response: { type: "mcq", choices: [ { id: "a", text: "has no effect on climate" }, { id: "b", text: "increases oxygen demand only" }, { id: "c", text: "reduces carbon absorption and can alter rainfall" }, { id: "d", text: "always lowers temperatures everywhere" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "principle", name: "Deforestation", statement: "Removing trees reduces carbon sinks and can change local climate." } ], steps: [ { reasoning: "Fewer trees means less CO2 absorption and possible rainfall change.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** reduces carbon absorption and can alter rainfall", commonErrors: ["Denying the climate link."] } },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u1-1-3-notes",
      title: "Weather and climate — notes",
      summary: "Weather elements, air masses, climate types, human influence.",
      sections: [
        {
          heading: "Weather",
          body: "Temp+precip+wind+pressure. Air masses→fronts→weather. Weather=day-to-day; climate=long-term.",
        },
        {
          heading: "Climate",
          body: "Tropical/temperate/continental/polar/arid. Change=greenhouse gases+human activities.",
        },
      ],
    },
  ],
};
