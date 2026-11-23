import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ess9-u7-lesson-7-1",
  code: "7-1",
  title: "Climate Systems and Patterns",
  goal: "I CAN describe global climate patterns and the factors that control them.",
  standards: [
    "HS-ESS2-4",
    "HS-ESS2-5",
    "SEP: Developing and Using Models",
    "CCC: Systems and System Models",
  ],
  vocabulary: [
    { term: "Climate", definition: "Long-term average weather patterns." },
    {
      term: "Latitude",
      definition: "Distance from equator; controls temperature.",
    },
    {
      term: "Altitude",
      definition: "Elevation; affects temperature and precipitation.",
    },
    {
      term: "Continentality",
      definition: "Distance from ocean; affects temperature range.",
    },
    {
      term: "Ocean currents",
      definition: "Moving water that transports heat.",
    },
    {
      term: "Wind patterns",
      definition: "Global air circulation (Hadley, Ferrel, polar cells).",
    },
    {
      term: "Precipitation",
      definition: "Rain, snow, hail — moisture from atmosphere.",
    },
  ],
  concepts: [
    {
      id: "ess9-u7-climate",
      title: "Climate controls",
      skill: "Identify factors controlling global climate patterns.",
      lesson: {
        sections: [
          {
            heading: "Climate controls",
            body: "- **Latitude**: equator hot, poles cold (solar angle).\n- **Altitude**: higher = colder (lapse rate ~6.5°C/km).\n- **Continentality**: inland = extreme temps; coastal = moderated.\n- **Ocean currents**: warm currents warm coasts; cold currents cool.",
          },
          {
            heading: "Global patterns",
            body: "- **Tropical**: hot, wet (equatorial).\n- **Temperate**: moderate, seasonal.\n- **Polar**: cold, dry.",
          },
        ],
        keyFormulas: [
          { name: "Latitude", statement: "Controls temperature" },
          { name: "Altitude", statement: "Higher = colder" },
          { name: "Continentality", statement: "Inland = extreme" },
        ],
        workedExample: {
          problem: "Why is it colder at higher elevations?",
          solution: "Air pressure decreases → temperature drops (~6.5°C/km).",
        },
      },
      questions: [
        {
          id: "ess9-u7-climate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main factor controlling global temperature patterns?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Altitude" },
              { id: "b", text: "Latitude" },
              { id: "c", text: "Ocean currents" },
              { id: "d", text: "Wind" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Latitude",
                statement: "Controls temperature.",
              },
            ],
            steps: [
              {
                reasoning: "Latitude = main control.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Latitude",
            commonErrors: ["Altitude."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u7-climate-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it colder at higher elevations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Altitude",
                statement: "Temperature decreases with height.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Air pressure decreases → temperature drops ~6.5°C/km.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Lower pressure → colder.",
            commonErrors: ["Same temp."],
            examinerNote: "A1 for mechanism.",
          },
        },
        {
          id: "ess9-u7-climate-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do ocean currents affect climate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Currents",
                statement: "Transport heat.",
              },
            ],
            steps: [
              {
                reasoning: "Warm currents warm coastal areas.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Cold currents cool coastal areas.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Example: Gulf Stream warms Europe.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: heat transport.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Currents transport heat → affect coastal climate.",
            commonErrors: ["No effect."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u7-climate-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "List factors controlling climate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Controls",
                statement: "Multiple factors.",
              },
            ],
            steps: [
              { reasoning: "Latitude: solar angle.", marks: 2, markCode: "B" },
              { reasoning: "Altitude: elevation.", marks: 2, markCode: "B" },
              {
                reasoning: "Continentality: distance from ocean.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Ocean currents: heat transport.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Latitude, altitude, continentality, currents.",
            commonErrors: ["One factor."],
            examinerNote: "B2 for each factor.",
          },
        },
      ],
    },
    {
      id: "ess9-u7-atmospheric",
      title: "Atmospheric circulation",
      skill: "Describe global atmospheric circulation patterns.",
      lesson: {
        sections: [
          {
            heading: "Global circulation",
            body: "Three circulation cells per hemisphere:\n- **Hadley cell**: equator to ~30° (trade winds).\n- **Ferrel cell**: ~30° to ~60° (westerlies).\n- **Polar cell**: ~60° to pole (polar easterlies).",
          },
          {
            heading: "Effects",
            body: "- Trade winds: moist, converging → tropical rain.\n- Westerlies: mid-latitude storms.\n- Jet streams: high-altitude fast winds.",
          },
        ],
        keyFormulas: [
          { name: "Hadley", statement: "Equator to 30°" },
          { name: "Ferrel", statement: "30° to 60°" },
          { name: "Polar", statement: "60° to pole" },
        ],
        workedExample: {
          problem: "Where do trade winds blow?",
          solution: "Equator to ~30° latitude.",
        },
      },
      questions: [
        {
          id: "ess9-u7-circulation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three global circulation cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "North, south, equator" },
              { id: "b", text: "Hadley, Ferrel, polar" },
              { id: "c", text: "Warm, cold, mixed" },
              { id: "d", text: "East, west, north" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cells",
                statement: "Hadley, Ferrel, polar.",
              },
            ],
            steps: [
              {
                reasoning: "Three cells: Hadley, Ferrel, polar.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Hadley, Ferrel, polar",
            commonErrors: ["North/south."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u7-circulation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are trade winds?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Trade winds",
                statement: "Equator to 30°, moist.",
              },
            ],
            steps: [
              {
                reasoning: "Trade winds: equator to ~30°, moist, converging.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Equator to 30°, moist, converging.",
            commonErrors: ["Dry."],
            examinerNote: "A1 for description.",
          },
        },
        {
          id: "ess9-u7-circulation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does atmospheric circulation affect precipitation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Circulation",
                statement: "Convergence → rain.",
              },
            ],
            steps: [
              {
                reasoning: "Converging air rises → condensation → rain.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Diverging air sinks → dry conditions.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "ITCZ: equatorial convergence → heavy rain.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: convergence → precipitation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Converging air → rising → rain.",
            commonErrors: ["No effect."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u7-circulation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe global atmospheric circulation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Circulation",
                statement: "Three cells per hemisphere.",
              },
            ],
            steps: [
              {
                reasoning: "Hadley cell: equator to 30°.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Ferrel cell: 30° to 60°.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Polar cell: 60° to pole.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: three-cell circulation.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Hadley → Ferrel → polar cells.",
            commonErrors: ["One cell."],
            examinerNote: "B2 for each cell.",
          },
        },
      ],
    },
    {
      id: "ess9-u7-ocean",
      title: "Ocean currents and climate",
      skill: "Describe ocean currents and their climate effects.",
      lesson: {
        sections: [
          {
            heading: "Ocean currents",
            body: "- **Surface currents**: wind-driven, warm/cold.\n- **Deep currents**: density-driven (temperature/salinity).\n- **Gyres**: circular current systems.",
          },
          {
            heading: "Climate effects",
            body: "- Gulf Stream: warms Europe.\n- Humboldt: cools western South America.\n- El Niño: Pacific warming → global weather changes.",
          },
        ],
        keyFormulas: [
          { name: "Surface", statement: "Wind-driven" },
          { name: "Deep", statement: "Density-driven" },
          { name: "Gyres", statement: "Circular systems" },
        ],
        workedExample: {
          problem: "How does Gulf Stream affect Europe?",
          solution: "Warms western Europe → milder climate.",
        },
      },
      questions: [
        {
          id: "ess9-u7-ocean-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What drives surface ocean currents?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity" },
              { id: "b", text: "Wind" },
              { id: "c", text: "Tides" },
              { id: "d", text: "Earthquake" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Currents", statement: "Wind-driven." },
            ],
            steps: [
              {
                reasoning: "Wind drives surface currents.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Wind",
            commonErrors: ["Gravity."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u7-ocean-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is El Niño?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "El Niño",
                statement: "Pacific warming event.",
              },
            ],
            steps: [
              {
                reasoning:
                  "El Niño: Pacific Ocean warming → global weather changes.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Pacific warming event.",
            commonErrors: ["Cold current."],
            examinerNote: "A1 for description.",
          },
        },
        {
          id: "ess9-u7-ocean-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do ocean currents affect climate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Currents",
                statement: "Heat transport.",
              },
            ],
            steps: [
              {
                reasoning: "Warm currents warm coasts.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Cold currents cool coasts.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Gulf Stream warms Europe.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: heat transport.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Currents transport heat → affect coastal climate.",
            commonErrors: ["No effect."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u7-ocean-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe ocean current types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Currents",
                statement: "Surface and deep.",
              },
            ],
            steps: [
              {
                reasoning: "Surface currents: wind-driven.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Deep currents: density-driven.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Gyres: circular systems.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: surface + deep + gyres.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Surface (wind), deep (density), gyres (circular).",
            commonErrors: ["One type."],
            examinerNote: "B2 for each type.",
          },
        },
      ],
    },
  ],
};
