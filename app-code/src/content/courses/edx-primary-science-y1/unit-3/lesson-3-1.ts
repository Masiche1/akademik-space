import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "edps1-u3-lesson-3-1",
  code: "3-1",
  title: "Seasons",
  goal: "I CAN describe the four seasons and what changes.",
  standards: ["Year 1 Science: Seasons"],
  vocabulary: [
    {
      term: "Season",
      definition:
        "One of four parts of the year: spring, summer, autumn, winter.",
    },
    { term: "Temperature", definition: "How hot or cold something is." },
    { term: "Daylight", definition: "The number of hours of daylight." },
    {
      term: "Weather",
      definition: "What the sky is like: sunny, rainy, windy, cloudy.",
    },
  ],
  concepts: [
    {
      id: "edps1-u3-seasons",
      title: "The four seasons",
      skill: "Describe characteristics of each season.",
      lesson: {
        sections: [
          {
            heading: "Season characteristics",
            body: "**Spring**: warm, flowers bloom, birds return. **Summer**: hot, long days, holidays. **Autumn**: cooler, leaves change colour and fall. **Winter**: cold, short days, snow (in some places).",
          },
          {
            heading: "What changes",
            body: "Temperature changes (hot/cold), daylight changes (long/short days), plants change (grow/dormant), animals adapt (migrate, hibernate, grow thicker fur).",
          },
        ],
        keyFormulas: [
          { name: "Spring", statement: "Flowers, warm, birds return" },
          { name: "Summer", statement: "Hot, long days" },
          { name: "Autumn/Winter", statement: "Leaves fall / cold, snow" },
        ],
        workedExample: {
          problem: "What happens to leaves in autumn?",
          solution:
            "They change colour (red, orange, yellow) and fall off trees.",
        },
      },
      questions: [
        {
          id: "edps1-u3-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many seasons are there?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two" },
              { id: "b", text: "Three" },
              { id: "c", text: "Five" },
              { id: "d", text: "Four" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Seasons", statement: "Four." },
            ],
            steps: [{ reasoning: "Four seasons.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Four",
            commonErrors: ["Wrong number."],
          },
        },
        {
          id: "edps1-u3-se-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which season is usually hottest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spring" },
              { id: "b", text: "Summer" },
              { id: "c", text: "Autumn" },
              { id: "d", text: "Winter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Seasons",
                statement: "Summer is hottest.",
              },
            ],
            steps: [
              { reasoning: "Identify hottest.", marks: 1, markCode: "M" },
              { reasoning: "Answer: summer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Summer",
            commonErrors: ["Wrong season."],
          },
        },
        {
          id: "edps1-u3-se-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two things that happen in spring.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spring",
                statement: "Flowers bloom, birds return, warmer.",
              },
            ],
            steps: [
              { reasoning: "Event 1.", marks: 1, markCode: "A" },
              { reasoning: "Event 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Flowers bloom; birds return'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps1-u3-se-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Order the seasons and describe one change for each.",
          parts: [
            { label: "a", prompt: "Correct order", marks: 1 },
            { label: "b", prompt: "Spring change", marks: 1 },
            { label: "c", prompt: "Summer change", marks: 1 },
            { label: "d", prompt: "Autumn/winter change", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Seasons",
                statement: "spring→summer→autumn→winter; changes described.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Order correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Spring described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Summer described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Autumn/winter described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "spring(flowers)→summer(hot)→autumn(leaves fall)→winter(cold/snow)",
            commonErrors: ["Wrong order or missing changes."],
          },
        },
      ],
    },
    {
      id: "edps1-u3-weather",
      title: "Weather",
      skill: "Describe and compare different types of weather.",
      lesson: {
        sections: [
          {
            heading: "Types of weather",
            body: "**Sunny**: clear sky, bright. **Cloudy**: grey sky, covered. **Rainy**: water falls from clouds. **Windy**: air moves fast. **Snowy**: ice crystals fall (cold places). **Stormy**: thunder, lightning, heavy rain.",
          },
          {
            heading: "Weather changes",
            body: "Weather changes daily and seasonally. We use weather to plan: umbrellas for rain, sunscreen for sun, coats for cold. Weather symbols on maps help forecast.",
          },
        ],
        keyFormulas: [
          { name: "Sunny", statement: "Clear, bright" },
          { name: "Rainy", statement: "Water falls" },
          { name: "Stormy", statement: "Thunder, lightning, heavy rain" },
        ],
        workedExample: {
          problem: "What should you wear on a rainy day?",
          solution: "Coat and wellies — to stay dry.",
        },
      },
      questions: [
        {
          id: "edps1-u3-we-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is weather?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The date" },
              { id: "b", text: "The season" },
              { id: "c", text: "What the sky/air is like" },
              { id: "d", text: "The temperature only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Weather",
                statement: "Sky/air conditions.",
              },
            ],
            steps: [
              { reasoning: "Weather = conditions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** What the sky/air is like",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps1-u3-we-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which weather involves thunder and lightning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stormy" },
              { id: "b", text: "Breezy" },
              { id: "c", text: "Sunny" },
              { id: "d", text: "Cloudy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weather types",
                statement: "Stormy = thunder/lightning.",
              },
            ],
            steps: [
              { reasoning: "Identify storm.", marks: 1, markCode: "M" },
              { reasoning: "Answer: stormy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Stormy",
            commonErrors: ["Wrong weather."],
          },
        },
        {
          id: "edps1-u3-we-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two types of weather and what you might wear for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weather clothing",
                statement: "e.g. sunny=sunscreen; rainy=coat/wellies.",
              },
            ],
            steps: [
              { reasoning: "Weather 1 + clothing.", marks: 1, markCode: "A" },
              { reasoning: "Weather 2 + clothing.", marks: 1, markCode: "A" },
              { reasoning: "Both appropriate.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Sunny: sunscreen and hat; rainy: coat and wellies'",
            commonErrors: ["Wrong clothing or weather."],
          },
        },
        {
          id: "edps1-u3-we-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare sunny and rainy weather: appearance, temperature, activities.",
          parts: [
            { label: "a", prompt: "Appearance", marks: 1 },
            { label: "b", prompt: "Temperature", marks: 1 },
            { label: "c", prompt: "Activities", marks: 1 },
            { label: "d", prompt: "Summary", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weather comparison",
                statement: "Sunny=clear/hot/outside; rainy=grey/cool/indoor.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Appearance compared.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Temperature compared.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Activities compared.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Summary given.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Sunny=clear sky, hot, outdoor activities; rainy=grey sky, cool, indoor activities",
            commonErrors: ["Incomplete comparison."],
          },
        },
      ],
    },
    {
      id: "edps1-u3-earth",
      title: "Earth and Space",
      skill: "Describe the Earth, Sun, Moon and stars.",
      lesson: {
        sections: [
          {
            heading: "Earth, Sun, Moon",
            body: "**Earth**: our planet — we live here, has land, water, air. **Sun**: a star that gives us light and heat — it's very hot and far away. **Moon**: orbits Earth — reflects sunlight, has phases (full, half, new).",
          },
          {
            heading: "Day and night",
            body: "Day happens when our part of Earth faces the Sun. Night happens when it's turned away. The Moon orbits Earth; Earth orbits the Sun. Stars are far away suns.",
          },
        ],
        keyFormulas: [
          { name: "Earth", statement: "Our planet" },
          { name: "Sun", statement: "Star giving light/heat" },
          { name: "Moon", statement: "Orbits Earth, reflects light" },
        ],
        workedExample: {
          problem: "Why do we have day and night?",
          solution:
            "Earth rotates (spins) — when we face the Sun it's day, when away it's night.",
        },
      },
      questions: [
        {
          id: "edps1-u3-ea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A planet" },
              { id: "b", text: "A comet" },
              { id: "c", text: "A star" },
              { id: "d", text: "A moon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sun", statement: "A star." },
            ],
            steps: [{ reasoning: "Sun = star.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** A star",
            commonErrors: ["Wrong classification."],
          },
        },
        {
          id: "edps1-u3-ea-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does the Moon appear to change shape?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's magic" },
              { id: "b", text: "We see different lit parts as it orbits" },
              { id: "c", text: "It grows and shrinks" },
              { id: "d", text: "Clouds cover it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moon phases",
                statement: "Different lit portions visible.",
              },
            ],
            steps: [
              {
                reasoning: "Orbit + light identified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: different lit parts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** We see different lit parts as it orbits",
            commonErrors: ["Wrong explanation."],
          },
        },
        {
          id: "edps1-u3-ea-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two things the Sun provides for Earth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sun's role",
                statement: "Light and heat.",
              },
            ],
            steps: [
              { reasoning: "Thing 1.", marks: 1, markCode: "A" },
              { reasoning: "Thing 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Light; heat'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps1-u3-ea-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Order these from smallest to largest: Moon, Earth, Sun, star.",
          parts: [
            { label: "a", prompt: "Smallest", marks: 1 },
            { label: "b", prompt: "Next", marks: 1 },
            { label: "c", prompt: "Next", marks: 1 },
            { label: "d", prompt: "Largest", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Size order",
                statement: "Moon < Earth < Sun < most stars.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Moon smallest.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Earth next.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sun next.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Star largest.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Moon → Earth → Sun → star",
            commonErrors: ["Wrong order."],
          },
        },
      ],
    },
  ],
};
