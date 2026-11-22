import type { Lesson } from "../../../types.ts";

export const lesson302: Lesson = {
  id: "cieigeo-u1-lesson-1-2",
  code: "1-2",
  title: "Weather and Climate",
  goal: "I CAN distinguish weather from climate and describe atmospheric circulation.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 1: weather and climate"],

  vocabulary: [
    {
      term: "Weather",
      definition: "Atmospheric conditions at a specific time/place.",
    },
    {
      term: "Climate",
      definition: "Average weather conditions over long period.",
    },
    {
      term: "Atmospheric circulation",
      definition: "Global air movement patterns.",
    },
    {
      term: "Jet stream",
      definition: "Fast-moving air currents in upper atmosphere.",
    },
    { term: "Monsoon", definition: "Seasonal wind reversal bringing rain." },
    {
      term: "El Niño",
      definition: "Periodic warming of Pacific Ocean affecting global weather.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u1-s2-clim",
      title: "Weather and climate",
      skill: "Understand weather systems and climate patterns.",
      lesson: {
        sections: [
          {
            heading: "Weather vs climate",
            body: "Weather: daily conditions (temperature, precipitation, wind). Climate: long-term averages (30+ years). Weather is what you experience; climate is what you expect.",
          },
          {
            heading: "Atmospheric circulation",
            body: "Global air movement: Hadley cells (equator), Ferrel cells (mid-latitudes), Polar cells. Creates trade winds, westerlies, polar easterlies. Jet streams affect weather systems.",
          },
          {
            heading: "Climate influences",
            body: "Latitude (solar energy), altitude, distance from sea, ocean currents, prevailing winds.",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "daily conditions" },
          { name: "Climate", statement: "long-term averages" },
          { name: "Circulation", statement: "Hadley/Ferrel/Polar cells" },
        ],
        workedExample: {
          problem: "Why is it warmer at equator than poles?",
          solution:
            "Sun's rays hit equator more directly — more concentrated solar energy. Less atmospheric absorption.",
        },
      },
      questions: [
        {
          id: "cieigeo-u1-wc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between weather and climate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Weather=daily conditions; climate=long-term averages",
              },
              {
                id: "b",
                text: "Weather is long-term",
              },
              {
                id: "c",
                text: "Climate is daily",
              },
              {
                id: "d",
                text: "They're the same",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Weather vs climate",
                statement: "Daily vs average.",
              },
            ],
            steps: [
              {
                reasoning: "Weather=daily; climate=long-term average.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Daily vs long-term",
          },
        },
        {
          id: "cieigeo-u1-wc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What drives global atmospheric circulation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circulation",
                statement: "Global air movement.",
              },
            ],
            steps: [
              {
                reasoning: "Uneven solar heating creates pressure differences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Air moves from high to low pressure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Uneven solar heating",
          },
        },
        {
          id: "cieigeo-u1-wc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What factors influence climate?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Climate factors",
                statement: "Influences on climate.",
              },
            ],
            steps: [
              {
                reasoning: "Latitude, altitude, distance from sea.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ocean currents, prevailing winds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All major factors identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Latitude, altitude, proximity to sea",
          },
        },
        {
          id: "cieigeo-u1-wc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define weather, climate, atmospheric circulation, jet stream, monsoon, El Niño. (b) What is weather? (c) What is climate? (d) What drives atmospheric circulation? (e) What factors influence climate? (f) What is the jet stream? (g) What is El Niño? (h) Explain why coastal areas have milder climates than inland.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Weather/climate",
                statement: "Systems, factors.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Daily conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Long-term averages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Uneven solar heating.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Latitude, altitude, distance from sea.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Fast upper-atmosphere winds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Pacific warming affecting weather.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Sea moderates temperature.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Weather and climate systems.",
          },
        },
        {
          id: "cieigeo-u1-wc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which atmospheric circulation cell lies nearest the equator?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hadley cell" },
              { id: "b", text: "Jet stream" },
              { id: "c", text: "Ferrel cell" },
              { id: "d", text: "Polar cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hadley cell",
                statement: "Tropical circulation cell.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Hadley cell is the tropical cell nearest the equator.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Hadley cell",
          },
        },
        {
          id: "cieigeo-u1-wc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which direction do the trade winds blow in each hemisphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Away from the equator" },
              { id: "b", text: "Towards the equator" },
              { id: "c", text: "East to west only" },
              { id: "d", text: "North to south only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade winds",
                statement: "Winds blowing towards the equator.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Trade winds blow from the subtropics towards the equator.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Towards the equator",
          },
        },
        {
          id: "cieigeo-u1-wc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Temperature decreases by about $6.5^\\circ$C for every 1000 m of altitude gain. Sea-level temperature is $25^\\circ$C. Calculate the temperature at 2000 m altitude.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12, unit: "°C" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Lapse rate",
                statement: "Temperature falls about $6.5^\\circ$C per 1000 m.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Temperature falls 2 x 6.5 = 13°C below the sea-level value.",
                working: "25 - (2 \\times 6.5) = 12",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$12^\\circ$C",
          },
        },
        {
          id: "cieigeo-u1-wc-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two reasons why coastal areas usually have milder climates than inland areas at the same latitude.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Maritime influence",
                statement: "The sea moderates temperatures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sea heats up and cools down more slowly than land, so coastal temperatures vary less.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Onshore winds carry moisture and moderate air temperatures, giving smaller daily and seasonal ranges.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Maritime moderation of temperature",
          },
        },
        {
          id: "cieigeo-u1-wc-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "El Niño events are mainly caused by which change in the Pacific Ocean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cooling of the entire Indian Ocean" },
              {
                id: "b",
                text: "Unusual warming of the eastern tropical Pacific",
              },
              { id: "c", text: "Falling sea level worldwide" },
              { id: "d", text: "Stronger polar ice sheets" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "El Niño",
                statement:
                  "Periodic warming of the Pacific affecting global weather.",
              },
            ],
            steps: [
              {
                reasoning:
                  "El Niño is an unusual warming of the eastern tropical Pacific Ocean.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Warming of the eastern tropical Pacific",
          },
        },
        {
          id: "cieigeo-u1-wc-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Mean temperature falls by about $0.6^\\circ$C for each degree of latitude away from the equator. The equatorial temperature is $28^\\circ$C. (a) Find the mean temperature at 40°N. (b) Find the mean temperature at 60°N.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4, unit: "°C" },
              { label: "b", answer: -8, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Latitudinal temperature gradient",
                statement:
                  "Temperature falls $0.6^\\circ$C per degree of latitude.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Drop = 40 x 0.6 = 24°C.",
                working: "28 - (40 \\times 0.6) = 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Drop = 60 x 0.6 = 36°C.",
                working: "28 - (60 \\times 0.6) = -8",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $4^\\circ$C (b) $-8^\\circ$C",
          },
        },
        {
          id: "cieigeo-u1-wc-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the monsoon affects agriculture in South Asia.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monsoon",
                statement: "Seasonal wind reversal bringing rain.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Seasonal reversal of winds brings heavy rain in summer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Farmers time planting to coincide with the rainy season.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Failure or late arrival of monsoon rain can cause drought and crop failure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Monsoon rain supports cropping; failure causes drought",
          },
        },
        {
          id: "cieigeo-u1-wc-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement best describes the westerlies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are caused by jet streams" },
              { id: "b", text: "They occur only over oceans" },
              { id: "c", text: "They blow towards the equator" },
              { id: "d", text: "They blow from west to east in mid-latitudes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Westerlies",
                statement: "Mid-latitude winds blowing west to east.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Westerlies blow from west to east in the mid-latitudes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "West to east in mid-latitudes",
          },
        },
        {
          id: "cieigeo-u1-wc-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A weather station records five daily temperatures: 18, 22, 15, 25 and 20 °C. (a) Calculate the mean temperature. (b) Calculate the range.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "°C" },
              { label: "b", answer: 10, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean and range",
                statement: "Mean = sum ÷ count; range = max − min.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Sum = 100 over 5 values.",
                working: "(18 + 22 + 15 + 25 + 20) / 5 = 20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Highest 25 minus lowest 15.",
                working: "25 - 15 = 10",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $20^\\circ$C (b) $10^\\circ$C",
          },
        },
        {
          id: "cieigeo-u1-wc-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss two possible effects of climate change on agriculture in different parts of the world.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate change",
                statement: "Changing climate patterns affect food production.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rising temperatures and changed rainfall patterns can reduce crop yields in some regions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More frequent extreme weather (droughts, floods) damages harvests.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Some regions may benefit from longer growing seasons or new viable crops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall food security becomes more uncertain for many countries.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Climate change threatens food production with regional variation",
          },
        },
        {
          id: "cieigeo-u1-wc-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The jet stream is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surface winds near the equator" },
              { id: "b", text: "A type of monsoon" },
              {
                id: "c",
                text: "Fast-moving air currents in the upper atmosphere",
              },
              { id: "d", text: "Warm ocean currents" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Jet stream",
                statement: "Fast-moving air currents in the upper atmosphere.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The jet stream consists of fast upper-atmosphere air currents.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Fast upper-atmosphere air currents",
          },
        },
        {
          id: "cieigeo-u1-wc-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Hadley cell, trade winds, westerlies, monsoon, El Niño, La Niña. (b) What are pressure belts? (c) Why are deserts found near 30° latitude? (d) What is the jet stream and where is it found? (e) Explain how Hadley cells create trade winds. (f) What is La Niña? (g) How does the monsoon affect South Asian agriculture? (h) Evaluate how climate change may alter global weather patterns.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Atmospheric circulation",
                statement: "Cells, winds, pressure belts, climate phenomena.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Pressure belts are zones of high and low pressure around the globe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Air descends at about 30°, warming and drying, creating deserts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Fast upper-atmosphere winds affecting weather systems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Rising air at the equator creates low pressure; surface air flows towards it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) La Niña is the cool phase, with colder eastern Pacific waters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Monsoon rain supports cropping; failure causes drought.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid evaluation of changing weather patterns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Atmospheric circulation and global climate systems.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u1-wc-notes",
      title: "Weather/climate — notes",
      summary:
        "Weather=daily, climate=long-term. Circulation driven by solar heating. Latitude, altitude, sea proximity affect climate.",
      sections: [
        {
          heading: "Key idea",
          body: "Climate = weather averaged over 30+ years.",
        },
        {
          heading: "Factors",
          body: "Latitude, altitude, distance from sea, ocean currents, winds.",
        },
      ],
    },
  ],
};
