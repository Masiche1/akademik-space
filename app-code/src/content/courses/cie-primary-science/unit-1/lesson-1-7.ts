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
            { id: "a", text: "Wood" }, { id: "b", text: "Glass" }, { id: "c", text: "Cloth" }, { id: "d", text: "Paper" },
          ], correctChoiceId: "b" },
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
