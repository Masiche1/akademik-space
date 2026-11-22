import type { Lesson } from "../../../types.ts";

export const lesson513: Lesson = {
  id: "ciealgeo-u1-lesson-1-3",
  code: "1-3",
  title: "Weather and Climate Systems",
  goal: "I CAN explain global atmospheric circulation, pressure systems and climate zones.",
  standards: ["Cambridge A Level Geography 9696", "Paper 1: physical"],

  vocabulary: [
    {
      term: "Hadley cell",
      definition: "Tropical atmospheric circulation cell.",
    },
    { term: "Ferrel cell", definition: "Mid-latitude circulation cell." },
    { term: "Polar cell", definition: "High-latitude circulation cell." },
    {
      term: "Intertropical Convergence Zone (ITCZ)",
      definition: "Low-pressure belt near equator.",
    },
    {
      term: "Jet stream",
      definition: "Fast-moving air current in upper atmosphere.",
    },
    {
      term: "El Niño",
      definition: "Pacific warming event affecting global climate.",
    },
  ],
  concepts: [
    {
      id: "ciealgeo-u1-s3-weather",
      title: "Weather and climate",
      skill: "Analyse atmospheric systems.",
      lesson: {
        sections: [
          {
            heading: "Global circulation",
            body: "Hadley (0-30°), Ferrel (30-60°), Polar (60-90°). ITCZ: rising air, low pressure, heavy rain near equator. Descending air at 30° → deserts.",
          },
          {
            heading: "Pressure systems",
            body: "Low pressure: rising air, clouds, rain. High pressure: descending air, clear, dry. Jet streams steer weather systems.",
          },
          {
            heading: "Climate zones",
            body: "Tropical: hot, wet/dry seasons. Temperate: distinct seasons. Polar: cold, low precipitation. Monsoon, Mediterranean, continental climates.",
          },
        ],
        keyFormulas: [
          { name: "Hadley", statement: "0-30°" },
          { name: "ITCZ", statement: "equatorial low pressure" },
          { name: "Jet stream", statement: "upper air current" },
        ],
        workedExample: {
          problem: "Why are deserts found at 30° latitude?",
          solution:
            "Hadley cell descending air at 30° → high pressure, dry conditions → deserts (Sahara, Arabian).",
        },
      },
      questions: [
        {
          id: "ciealgeo-u1-wx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the ITCZ?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A climate type",
              },
              {
                id: "b",
                text: "A jet stream",
              },
              {
                id: "c",
                text: "Low-pressure belt near equator",
              },
              {
                id: "d",
                text: "High-pressure zone",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ITCZ",
                statement: "Equatorial low pressure.",
              },
            ],
            steps: [
              {
                reasoning: "ITCZ = equatorial convergence zone.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Equatorial low pressure",
          },
        },
        {
          id: "ciealgeo-u1-wx-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What causes deserts at 30° latitude?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Climate zones",
                statement: "Desert formation.",
              },
            ],
            steps: [
              {
                reasoning: "Hadley cell descending air.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "High pressure, dry conditions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Descending air deserts",
          },
        },
        {
          id: "ciealgeo-u1-wx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the three global circulation cells?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circulation cells",
                statement: "Hadley, Ferrel, Polar.",
              },
            ],
            steps: [
              {
                reasoning: "Hadley (0-30°), Ferrel (30-60°), Polar (60-90°).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different temperature/pressure patterns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Determine global climate zones.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Three circulation cells",
          },
        },
        {
          id: "ciealgeo-u1-wx-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Hadley cell, Ferrel cell, Polar cell, ITCZ, jet stream, El Niño. (b) What is ITCZ? (c) What causes deserts? (d) What are circulation cells? (e) What is jet stream? (f) What is El Niño? (g) What are climate zones? (h) Evaluate impact of climate change on weather systems.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Weather/climate",
                statement: "Systems, impacts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Equatorial low pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Descending air at 30°.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Hadley, Ferrel, Polar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Upper air current.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Pacific warming event.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Tropical, temperate, polar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Extreme weather, shifting patterns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Weather and climate systems.",
          },
        },
        {
          id: "ciealgeo-u1-wx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Ferrel cell is mainly found between which latitudes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "60° and 90°" },
              { id: "b", text: "0° and 30°" },
              { id: "c", text: "30° and 60°" },
              { id: "d", text: "Only at the poles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ferrel cell", statement: "Mid-latitude circulation between 30° and 60°." },
            ],
            steps: [{ reasoning: "Ferrel cell occupies the mid-latitudes.", marks: 1, markCode: "M" }],
            finalAnswer: "30°–60°",
          },
        },
        {
          id: "ciealgeo-u1-wx-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The Hadley cell extends from the equator to 30° latitude, while the polar cell extends from 60° to 90°. (a) What is the latitude range of the Hadley cell in degrees? (b) What is the latitude range of the polar cell in degrees?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, unit: "degrees" },
              { label: "b", answer: 30, unit: "degrees" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Latitude range", statement: "Subtract lower latitude from upper latitude." },
            ],
            steps: [
              { part: "a", reasoning: "30 - 0 = 30 degrees.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "90 - 60 = 30 degrees.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 30 degrees; b) 30 degrees",
          },
        },
        {
          id: "ciealgeo-u1-wx-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "An El Niño event is associated mainly with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fixed high-pressure belt at 60°" },
              { id: "b", text: "A collapse of all jet streams" },
              { id: "c", text: "Unusual warming of the eastern Pacific Ocean" },
              { id: "d", text: "Permanent cooling of the Arctic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "El Niño", statement: "Pacific warming event affecting global climate." },
            ],
            steps: [{ reasoning: "El Niño involves warming of Pacific waters and altered atmospheric circulation.", marks: 1, markCode: "M" }],
            finalAnswer: "Pacific warming",
          },
        },
        {
          id: "ciealgeo-u1-wx-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the ITCZ shifts north and south of the equator during the year.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "ITCZ migration", statement: "The convergence zone follows the seasonal movement of maximum heating." },
            ],
            steps: [
              { reasoning: "Solar heating is greatest where the Sun is overhead.", marks: 1, markCode: "M" },
              { reasoning: "The ITCZ migrates toward the warmer hemisphere.", marks: 1, markCode: "M" },
              { reasoning: "This creates wet and dry seasons in monsoon and tropical climates.", marks: 1, markCode: "A" },
              { reasoning: "The shift is strongest over continents where heating contrasts are large.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The ITCZ follows seasonal solar heating, producing shifting rainfall belts.",
            commonErrors: ["Treating the ITCZ as fixed at the equator."],
          },
        },
        {
          id: "ciealgeo-u1-wx-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Descending air within a high-pressure system usually produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Continuous heavy rain" },
              { id: "b", text: "Clear skies and dry conditions" },
              { id: "c", text: "Rapid cloud formation everywhere" },
              { id: "d", text: "A strong onshore monsoon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pressure systems", statement: "Descending air warms, suppresses cloud and causes dry weather." },
            ],
            steps: [{ reasoning: "Descending air inhibits convection and cloud growth.", marks: 1, markCode: "M" }],
            finalAnswer: "Clear skies and dry conditions",
          },
        },
        {
          id: "ciealgeo-u1-wx-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tropical station records 1200 mm rainfall in the wet season and 80 mm in the dry season. (a) What is the difference between the two totals? (b) How many times greater is the wet-season total than the dry-season total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1120, unit: "mm" },
              { label: "b", answer: 15, unit: "times" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rainfall comparison", statement: "Subtract totals and divide wet by dry." },
            ],
            steps: [
              { part: "a", reasoning: "1200 - 80 = 1120 mm.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "1200 / 80 = 15 times.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 1120 mm; b) 15 times",
            commonErrors: ["Dividing dry by wet instead of wet by dry."],
          },
        },
        {
          id: "ciealgeo-u1-wx-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Contrast the weather typically associated with low- and high-pressure systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Pressure systems", statement: "Low pressure rises and clouds; high pressure descends and clears." },
            ],
            steps: [
              { reasoning: "Low pressure: rising air, condensation, cloud and rain.", marks: 1, markCode: "M" },
              { reasoning: "High pressure: descending air, warming, clear skies.", marks: 1, markCode: "M" },
              { reasoning: "Wind direction and frontal weather modify these general patterns.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Low pressure brings cloud and rain; high pressure brings clear, dry weather.",
            commonErrors: ["Reversing the two systems."],
          },
        },
        {
          id: "ciealgeo-u1-wx-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which climate zone is normally characterised by low temperatures and low precipitation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equatorial monsoon" },
              { id: "b", text: "Polar" },
              { id: "c", text: "Tropical rainforest" },
              { id: "d", text: "Mediterranean" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polar climate", statement: "Cold conditions with limited moisture." },
            ],
            steps: [{ reasoning: "Polar regions have low temperatures and low precipitation.", marks: 1, markCode: "M" }],
            finalAnswer: "Polar",
          },
        },
        {
          id: "ciealgeo-u1-wx-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The ITCZ migrates approximately 6° of latitude. Using 111 km per degree, calculate the distance of migration in kilometres.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 666, unit: "km" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Distance calculation", statement: "Distance = latitude change x km per degree." },
            ],
            steps: [
              { part: "a", reasoning: "6 x 111 = 666 km.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "666 km",
            commonErrors: ["Using 100 km per degree without the supplied conversion."],
          },
        },
        {
          id: "ciealgeo-u1-wx-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the statement that jet streams have little effect on day-to-day weather.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Jet streams", statement: "Upper-level winds steer pressure systems and frontal zones." },
            ],
            steps: [
              { reasoning: "Jet streams steer depressions and anticyclones eastwards.", marks: 1, markCode: "M" },
              { reasoning: "Their position influences where fronts and rainfall occur.", marks: 1, markCode: "M" },
              { reasoning: "They do not create weather alone; surface conditions also matter.", marks: 1, markCode: "A" },
              { reasoning: "The statement is therefore too dismissive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Jet streams significantly steer weather systems, so the statement is largely incorrect.",
            commonErrors: ["Claiming jet streams directly cause rainfall."],
          },
        },
        {
          id: "ciealgeo-u1-wx-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A monsoon climate is most likely to have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No seasonal temperature change" },
              { id: "b", text: "Permanent polar darkness" },
              { id: "c", text: "Identical rainfall every month" },
              { id: "d", text: "A pronounced wet and dry season" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Monsoon climate", statement: "Seasonal reversal of winds produces wet and dry seasons." },
            ],
            steps: [{ reasoning: "Monsoon climates are marked by seasonal rainfall contrast.", marks: 1, markCode: "M" }],
            finalAnswer: "Pronounced wet and dry seasons",
          },
        },
        {
          id: "ciealgeo-u1-wx-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how descending air at about 30° latitude helps to create desert conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subtropical highs", statement: "Hadley-cell descent creates high pressure and dry air." },
            ],
            steps: [
              { reasoning: "Air rises near the equator and descends around 30°.", marks: 1, markCode: "M" },
              { reasoning: "Descending air warms and suppresses cloud formation.", marks: 1, markCode: "M" },
              { reasoning: "Persistent high pressure and low moisture produce arid conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Descending subtropical air creates dry, high-pressure desert belts.",
            commonErrors: ["Attributing deserts only to low rainfall without explaining the mechanism."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u1-wx-notes",
      title: "Weather/climate — notes",
      summary:
        "Hadley/Ferrel/Polar cells. ITCZ equatorial low pressure. Jet streams steer weather.",
      sections: [
        {
          heading: "Key idea",
          body: "Global circulation determines climate zones and weather patterns.",
        },
        {
          heading: "Climate change",
          body: "Shifting patterns, extreme weather, sea level rise.",
        },
      ],
    },
  ],
};
