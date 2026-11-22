import type { Lesson } from "../../../types.ts";

export const lesson17: Lesson = {
  id: "cips-u1-lesson-1-7",
  code: "1-7",
  title: "Stage 1 — Sorting Materials and Weather",
  goal: "I CAN sort objects by material and describe the weather.",
  standards: ["Cambridge Primary Science 0097 Stage 1: materials and Earth",
  "Cambridge Primary Science 0097 framework substrands: 1Cm, 1TWSc, 1Cp, 1ESp"],
  stage: 1,
  vocabulary: [
    { term: "Material", definition: "What something is made of: wood, plastic, metal, glass, cloth." },
    { term: "Sort", definition: "Group objects that share a property." },
    { term: "Weather", definition: "What the sky is like: sunny, rainy, cloudy, windy." },
    { term: "Season", definition: "Part of the year: spring, summer, autumn, winter." },
    { term: "Natural", definition: "Made by nature, not people — wood, stone, water." },
  ],
  concepts: [
    {
      id: "cips-u1-s7-materials-weather",
      title: "Sorting materials and describing weather",
      skill: "Group objects by material and describe weather/season at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Materials",
            body: "Everything is made of a material. You can sort objects by what they're made of: things made of wood (chair, pencil), plastic (bottle, toy), metal (coin, fork), glass (window), or cloth (shirt). Some materials are natural (wood, stone, wool); others are made by people (plastic, metal).",
          },
          {
            heading: "Weather and seasons",
            body: "Weather describes the sky now: sunny, cloudy, rainy, windy, snowy. Seasons are the four parts of the year — spring (flowers grow), summer (hot, long days), autumn (leaves fall), winter (cold, short days). Weather changes day to day; seasons change slowly through the year.",
          },
        ],
        keyFormulas: [
          { name: "Materials", statement: "wood, plastic, metal, glass, cloth — natural or man-made" },
          { name: "Seasons", statement: "spring, summer, autumn, winter" },
        ],
        workedExample: {
          problem: "Sort these: wooden spoon, plastic cup, metal fork, glass jar.",
          solution: "Wood: spoon; plastic: cup; metal: fork; glass: jar.",
        },
      },
      questions: [
        {
          id: "cips-u1-mw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a window mainly made of?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Glass" },
            { id: "b", text: "Paper" },
            { id: "c", text: "Cloth" },
            { id: "d", text: "Wood" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Material", statement: "What an object is made of." }],
            steps: [{ reasoning: "Windows are made of glass.", marks: 1, markCode: "A" }],
            finalAnswer: "Glass",
          },
        },
        {
          id: "cips-u1-mw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the four seasons.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Seasons", statement: "Spring, summer, autumn, winter." }],
            steps: [
              { reasoning: "Any three correct seasons.", marks: 1, markCode: "M" },
              { reasoning: "All four named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Spring, summer, autumn, winter",
          },
        },
        {
          id: "cips-u1-mw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Is a wooden chair natural or man-made? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Natural vs man-made", statement: "Wood comes from trees = natural." }],
            steps: [
              { reasoning: "Wood comes from trees, which grow naturally.", marks: 1, markCode: "M" },
              { reasoning: "The material is natural (though shaped by people).", marks: 1, markCode: "M" },
              { reasoning: "Answer: natural.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Natural — wood comes from trees",
          },
        },
        {
          id: "cips-u1-mw-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the weather on a day that is sunny in the morning but rainy in the afternoon.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Weather", statement: "Describes current sky conditions." }],
            steps: [
              { reasoning: "Morning: sunny/clear.", marks: 1, markCode: "M" },
              { reasoning: "Afternoon: rainy/cloudy.", marks: 1, markCode: "M" },
              { reasoning: "Notes weather changed during the day.", marks: 1, markCode: "M" },
              { reasoning: "Coherent description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Sunny in the morning, then clouds came and it rained in the afternoon.'",
          },
        },
        {
          id: "cips-u1-mw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What material is a spoon mainly made of?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Paper" },
            { id: "b", text: "Glass" },
            { id: "c", text: "Cloth" },
            { id: "d", text: "Metal" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Material", statement: "What an object is made of." }],
            steps: [{ reasoning: "Spoons are usually made of metal.", marks: 1, markCode: "A" }],
            finalAnswer: "Metal",
          },
        },
        {
          id: "cips-u1-mw-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which season has long, hot days?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Summer" },
            { id: "b", text: "Winter" },
            { id: "c", text: "Spring" },
            { id: "d", text: "Autumn" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Seasons", statement: "Summer is hot with long days." }],
            steps: [{ reasoning: "Summer has hot, long days.", marks: 1, markCode: "A" }],
            finalAnswer: "Summer",
          },
        },
        {
          id: "cips-u1-mw-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many seasons are there in a year?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "seasons" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Seasons", statement: "Four parts of the year." }],
            steps: [{ reasoning: "There are 4 seasons.", marks: 1, markCode: "M" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u1-mw-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You sort 8 objects: 3 are made of wood, 2 of plastic, 2 of metal and 1 of glass. How many objects are made of man-made materials (plastic, metal, glass)?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "objects" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Sorting materials", statement: "Count man-made materials." }],
            steps: [
              { reasoning: "$2 + 2 + 1 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "5 objects are man-made materials.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cips-u1-mw-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a NATURAL material?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Glass" },
            { id: "b", text: "Plastic" },
            { id: "c", text: "Wood" },
            { id: "d", text: "Metal" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Natural", statement: "Made by nature — wood, stone, wool." }],
            steps: [{ reasoning: "Wood is natural; plastic, metal, glass are man-made.", marks: 1, markCode: "A" }],
            finalAnswer: "Wood",
          },
        },
        {
          id: "cips-u1-mw-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two weather types you might see in a day.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Weather", statement: "Sunny, cloudy, rainy, windy, snowy." }],
            steps: [
              { reasoning: "First weather type (e.g. sunny).", marks: 1, markCode: "M" },
              { reasoning: "Second weather type (e.g. rainy).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. sunny and rainy",
          },
        },
        {
          id: "cips-u1-mw-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between weather and seasons.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Weather vs seasons", statement: "Weather = now; seasons = parts of year." }],
            steps: [
              { reasoning: "Weather describes the sky right now — sunny, rainy etc.", marks: 1, markCode: "M" },
              { reasoning: "Seasons are the four parts of the year.", marks: 1, markCode: "M" },
              { reasoning: "Weather changes daily; seasons change slowly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weather=now and changes daily; seasons=year parts, change slowly",
          },
        },
        {
          id: "cips-u1-mw-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which object is made of CLOTH?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A coin" },
            { id: "b", text: "A shirt" },
            { id: "c", text: "A window" },
            { id: "d", text: "A jar" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Material", statement: "Shirts are made of cloth." }],
            steps: [{ reasoning: "A shirt is made of cloth.", marks: 1, markCode: "A" }],
            finalAnswer: "A shirt",
          },
        },
        {
          id: "cips-u1-mw-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In one week there are 3 sunny days, 2 rainy days and 2 cloudy days. How many days had bad (rainy or cloudy) weather?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "days" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Weather", statement: "Add rainy + cloudy days." }],
            steps: [
              { reasoning: "$2 + 2 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "4 days had bad weather.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u1-mw-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student sorts a wooden spoon and a wooden ruler into different groups because one is used for eating and one for drawing. Is this sorting by material? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sorting", statement: "Sort by material means grouping by what it's made of." }],
            steps: [
              { reasoning: "Both are made of wood — same material.", marks: 1, markCode: "M" },
              { reasoning: "The student sorted by use/purpose, not by material.", marks: 1, markCode: "M" },
              { reasoning: "They should be in the same material group.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — both are wood; sorting should be by material",
          },
        },
        {
          id: "cips-u1-mw-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which season do leaves fall from trees?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Autumn" },
            { id: "b", text: "Spring" },
            { id: "c", text: "Summer" },
            { id: "d", text: "Winter only" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Seasons", statement: "Leaves fall in autumn." }],
            steps: [{ reasoning: "Leaves fall in autumn.", marks: 1, markCode: "A" }],
            finalAnswer: "Autumn",
          },
        },
        {
          id: "cips-u1-mw-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) What is a material? Give five examples. (b) Sort these into natural and man-made: wooden chair, plastic bottle, wool scarf, metal fork, glass jar, stone wall. (c) Name the four seasons. (d) What is weather? Give three examples. (e) How does weather differ from seasons? (f) Describe a windy day. (g) What happens to weather during a day? (h) Why is sorting by material useful?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Materials and weather", statement: "Integrated Stage 1 answer." }],
            steps: [
              { reasoning: "(a) What something is made of; e.g. wood, plastic, metal, glass, cloth.", marks: 1, markCode: "M" },
              { reasoning: "(b) Natural: wooden chair, wool scarf, stone wall; man-made: plastic bottle, metal fork, glass jar.", marks: 1, markCode: "M" },
              { reasoning: "(c) Spring, summer, autumn, winter.", marks: 1, markCode: "M" },
              { reasoning: "(d) What the sky is like now; sunny, rainy, windy etc.", marks: 1, markCode: "M" },
              { reasoning: "(e) Weather = now, changes daily; seasons = parts of year, change slowly.", marks: 1, markCode: "M" },
              { reasoning: "(f) e.g. 'The wind blew strongly and trees swayed.'", marks: 1, markCode: "M" },
              { reasoning: "(g) Weather can change during a day.", marks: 1, markCode: "M" },
              { reasoning: "(h) Groups objects by what they're made of — helps organise and choose materials.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Material def, natural/man-made sort, seasons, weather def, weather vs seasons, windy day, daily change, sorting use.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-mw-notes",
      title: "Materials and weather — revision notes",
      summary: "Sort by material (wood/plastic/metal/glass/cloth); weather vs seasons.",
      sections: [
        { heading: "Materials", body: "Group objects by what they're made of; natural vs man-made." },
        { heading: "Weather", body: "Weather = now (sunny/rainy); seasons = parts of year." },
      ],
    },
  ],
};
