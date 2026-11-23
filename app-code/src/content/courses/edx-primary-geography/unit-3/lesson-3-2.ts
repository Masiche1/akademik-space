import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edxpg-u3-lesson-3-2",
  code: "3-2",
  title: "Weather and Climate",
  goal: "I CAN distinguish weather from climate and describe global climate zones.",
  standards: ["Y4-Y6 Geography", "Weather and climate"],
  vocabulary: [
    {
      term: "Weather",
      definition:
        "The conditions in the atmosphere at a particular place and time.",
    },
    {
      term: "Climate",
      definition: "The average weather conditions in a place over many years.",
    },
    {
      term: "Precipitation",
      definition: "Water falling from the sky — rain, snow, sleet, hail.",
    },
    {
      term: "Climate zone",
      definition:
        "A region with similar climate patterns, e.g. tropical, temperate, polar.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u3-weather",
      title: "Weather vs Climate",
      skill: "Distinguish weather from climate and describe weather elements.",
      lesson: {
        sections: [
          {
            heading: "Weather",
            body: "Weather is what is happening in the atmosphere right now or today — sunny, rainy, windy, cold. It changes hour by hour and day to day. Weather elements: temperature, precipitation (rain/snow), wind speed and direction, cloud cover, humidity, air pressure. Weather forecasts predict these for the next few days.",
          },
          {
            heading: "Climate",
            body: "Climate is the average weather over 30+ years — 'the UK has a mild, wet climate' or 'the Sahara is hot and dry'. Climate tells you what to expect in a place generally. Weather is what you get today; climate is what you expect over years. A cold day in the UK is weather; the UK being cold in winter is climate.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is 'it is raining in London today' weather or climate?",
          solution: "Weather — today's conditions.",
        },
      },
      questions: [
        {
          id: "edxpg-u3-wc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is weather?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Average conditions over years" },
              { id: "b", text: "Conditions at a particular time and place" },
              { id: "c", text: "A type of storm" },
              { id: "d", text: "The seasons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Weather",
                statement: "Conditions at a time/place.",
              },
            ],
            steps: [{ reasoning: "Weather = now.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** At a time/place",
            commonErrors: ["Confusing with climate."],
          },
        },
        {
          id: "edxpg-u3-wc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is climate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is sunny today" },
              { id: "b", text: "The Sahara is hot and dry" },
              { id: "c", text: "It is windy this afternoon" },
              { id: "d", text: "Rain tonight" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate",
                statement: "Average over many years.",
              },
            ],
            steps: [
              {
                reasoning: "Sahara climate = long-term.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Sahara hot/dry",
            commonErrors: ["Daily weather confused."],
          },
        },
        {
          id: "edxpg-u3-wc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three weather elements you might measure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weather elements",
                statement: "Temperature, precipitation, wind.",
              },
            ],
            steps: [
              { reasoning: "Temperature.", marks: 1, markCode: "M" },
              {
                reasoning: "Precipitation (rain/snow).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wind speed/direction or cloud cover.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. temperature, rain, wind",
            commonErrors: ["Not weather elements."],
          },
        },
        {
          id: "edxpg-u3-wc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'the UK has a wet climate' is true even though it does not rain every day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate vs weather",
                statement: "Climate is average over years.",
              },
            ],
            steps: [
              {
                reasoning: "Climate = average over 30+ years.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "UK averages high rainfall — many rainy days over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Individual dry days don't change the long-term pattern.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Average over years = wet even with dry days",
            commonErrors: ["Confusing single days with climate."],
          },
        },
      ],
    },
    {
      id: "edxpg-u3-zones",
      title: "Global Climate Zones",
      skill: "Describe the main climate zones of the world.",
      lesson: {
        sections: [
          {
            heading: "Tropical",
            body: "Near the equator (0-23° latitude). Hot all year — average 25-30°C. Heavy rainfall in wet season. Examples: Amazon rainforest (Brazil), Congo (Africa), Indonesia. Equatorial climate — little seasonal change.",
          },
          {
            heading: "Temperate and polar",
            body: "Temperate zones (23-66° latitude) have four seasons — UK, Europe, USA, China. Summers warm, winters cool, moderate rainfall. Polar zones (66-90°) are cold all year — Antarctica, Arctic. Tundra has very short summers; ice caps are frozen year-round. Desert zones (like Sahara) are hot and dry — found at 15-30° latitude in both hemispheres.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which climate zone is the UK in?",
          solution: "Temperate — has four seasons.",
        },
      },
      questions: [
        {
          id: "edxpg-u3-zone-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which climate zone is near the equator?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polar" },
              { id: "b", text: "Tropical" },
              { id: "c", text: "Desert" },
              { id: "d", text: "Temperate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate zones",
                statement: "Tropical near equator.",
              },
            ],
            steps: [
              { reasoning: "Tropical = equator.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Tropical",
            commonErrors: ["Wrong zone."],
          },
        },
        {
          id: "edxpg-u3-zone-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which climate zone has four seasons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tropical" },
              { id: "b", text: "Temperate" },
              { id: "c", text: "Polar" },
              { id: "d", text: "All zones" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate zones",
                statement: "Temperate = four seasons.",
              },
            ],
            steps: [
              { reasoning: "Temperate = seasons.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Temperate",
            commonErrors: ["Wrong zone."],
          },
        },
        {
          id: "edxpg-u3-zone-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the tropical climate zone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tropical climate",
                statement: "Hot, wet, near equator.",
              },
            ],
            steps: [
              {
                reasoning: "Location — near equator.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Temperature — hot all year.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rainfall — high, wet season.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hot+wet+equatorial",
            commonErrors: ["Wrong description."],
          },
        },
        {
          id: "edxpg-u3-zone-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do polar regions have cold climates while tropical regions are hot?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Latitude and temperature",
                statement: "Sunlight angle determines heat.",
              },
            ],
            steps: [
              {
                reasoning: "Equator — direct sunlight, concentrated heat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Poles — slanted sunlight, spread over large area.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result — tropics hot, poles cold.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Direct vs slanted sunlight",
            commonErrors: ["No scientific reason."],
          },
        },
      ],
    },
    {
      id: "edxpg-u3-extreme",
      title: "Extreme Weather",
      skill: "Describe extreme weather events and their causes.",
      lesson: {
        sections: [
          {
            heading: "Types of extreme weather",
            body: "Hurricanes/cyclones: massive storms over warm oceans — wind speeds over 119 km/h, heavy rain, storm surge. Tornadoes: rotating columns of air touching ground — most common in USA 'Tornado Alley'. Floods: when rivers overflow or heavy rain overwhelms drainage. Droughts: prolonged lack of rainfall — causes crop failure, famine. Heatwaves: extended periods of extreme heat — dangerous for health.",
          },
          {
            heading: "Causes and effects",
            body: "Extreme weather is caused by atmospheric conditions: warm ocean water fuels hurricanes; temperature differences create storms; blocked weather patterns cause droughts or floods. Climate change is making extreme weather more frequent and intense — hotter heatwaves, stronger hurricanes, heavier rainfall. Effects include damage to property, loss of life, displacement of people, and economic losses.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name two types of extreme weather and one cause.",
          solution: "Hurricane — warm ocean water; Flood — heavy rain.",
        },
      },
      questions: [
        {
          id: "edxpg-u3-ext-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a hurricane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of earthquake" },
              { id: "b", text: "A massive tropical storm" },
              { id: "c", text: "A type of drought" },
              { id: "d", text: "A snowstorm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hurricane",
                statement: "Massive tropical storm.",
              },
            ],
            steps: [
              {
                reasoning: "Hurricane = tropical storm.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Tropical storm",
            commonErrors: ["Confusing with other events."],
          },
        },
        {
          id: "edxpg-u3-ext-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What causes floods?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too much sun" },
              { id: "b", text: "Heavy rain or river overflow" },
              { id: "c", text: "Strong winds" },
              { id: "d", text: "Earthquakes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Floods", statement: "Excess water." },
            ],
            steps: [
              { reasoning: "Rain/overflow = floods.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Heavy rain",
            commonErrors: ["Wrong cause."],
          },
        },
        {
          id: "edxpg-u3-ext-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two causes and two effects of extreme weather.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Extreme weather",
                statement: "Causes + impacts.",
              },
            ],
            steps: [
              {
                reasoning: "Cause 1 — e.g. warm ocean water for hurricanes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cause 2 — e.g. temperature differences for storms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Effects — damage, loss of life, displacement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Causes + damage/loss/displacement",
            commonErrors: ["Only causes or only effects."],
          },
        },
        {
          id: "edxpg-u3-ext-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how climate change affects extreme weather events.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate change",
                statement: "More frequent, intense extremes.",
              },
            ],
            steps: [
              {
                reasoning: "Warmer oceans — stronger hurricanes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More heat — hotter heatwaves, more droughts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Warmer air holds more moisture — heavier rainfall/floods.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Stronger+hotter+more rain",
            commonErrors: ["No climate link."],
          },
        },
      ],
    },
  ],
};
