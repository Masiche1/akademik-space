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
              {
                id: "a",
                text: "Weather=day-to-day; climate=long-term average",
              },
              { id: "b", text: "Weather=long-term; climate=day-to-day" },
              { id: "c", text: "They are the same" },
              { id: "d", text: "Weather=temperature only" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Tropical" },
              { id: "b", text: "Polar" },
              { id: "c", text: "Temperate" },
              { id: "d", text: "Continental" },
            ],
            correctChoiceId: "a",
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
