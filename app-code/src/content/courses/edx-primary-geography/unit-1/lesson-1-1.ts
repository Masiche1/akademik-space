import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edxpg-u1-lesson-1-1",
  code: "1-1",
  title: "Maps and Compass Directions",
  goal: "I CAN use a map and compass directions to find places.",
  standards: ["Y1-Y3 Geography", "Maps and direction"],
  vocabulary: [
    {
      term: "Map",
      definition: "A drawing that shows places and features from above.",
    },
    {
      term: "Compass",
      definition:
        "A tool showing the four main directions: north, south, east, west.",
    },
    {
      term: "North",
      definition:
        "The direction towards the North Pole — usually shown at the top of a map.",
    },
    {
      term: "Scale",
      definition: "Shows how distances on a map relate to real distances.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u1-maps",
      title: "Reading Maps",
      skill: "Understand what a map shows and how to read it.",
      lesson: {
        sections: [
          {
            heading: "What is a map?",
            body: "A map is a picture of a place seen from above, like looking down from a bird or helicopter. Maps show things like roads, buildings, rivers, parks and fields. Maps are smaller than the real place, so they use symbols — a blue line might be a river, a black line a road, a green area a park.",
          },
          {
            heading: "Reading a map",
            body: "Maps usually have a title telling you what they show, a key (or legend) explaining the symbols, and a compass showing which way is north. Find the compass first — it tells you which way is up. Then use the key to understand what each symbol means. The scale tells you how far apart things really are.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "On a map, a blue wavy line runs through a green area. What might it be?",
          solution:
            "A river through a park or field — check the key to be sure.",
        },
      },
      questions: [
        {
          id: "edxpg-u1-map-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a map?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A photograph from the ground" },
              { id: "b", text: "A drawing of a place from above" },
              { id: "c", text: "A type of book" },
              { id: "d", text: "A building" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Map",
                statement: "Drawing of a place from above.",
              },
            ],
            steps: [
              { reasoning: "Map = bird's-eye view.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** From above",
            commonErrors: ["Thinking map is a photo or book."],
          },
        },
        {
          id: "edxpg-u1-map-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a map's 'key' or 'legend' do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shows which way is north" },
              { id: "b", text: "Explains what the symbols mean" },
              { id: "c", text: "Shows the scale" },
              { id: "d", text: "Gives the map's name" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Map key",
                statement: "Explains symbols.",
              },
            ],
            steps: [
              { reasoning: "Key explains symbols.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Explains symbols",
            commonErrors: ["Confusing key with compass."],
          },
        },
        {
          id: "edxpg-u1-map-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three things you might find on a map of your local area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Map features",
                statement: "Maps show human and physical features.",
              },
            ],
            steps: [
              { reasoning: "Roads or paths.", marks: 1, markCode: "M" },
              {
                reasoning: "Buildings like houses, school, shops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Natural features like rivers, parks, fields.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. roads, buildings, rivers",
            commonErrors: ["Features not found on maps."],
          },
        },
        {
          id: "edxpg-u1-map-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why maps are useful and give two examples of when you might use one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Map uses",
                statement: "Maps help us navigate and understand places.",
              },
            ],
            steps: [
              {
                reasoning: "Maps show where things are — helps us find places.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example 1, e.g. finding the way to school or the shops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example 2, e.g. planning a journey or understanding a new area.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Navigate + plan journeys + understand places",
            commonErrors: ["No real examples."],
          },
        },
      ],
    },
    {
      id: "edxpg-u1-directions",
      title: "Compass Directions",
      skill: "Use the four main compass directions.",
      lesson: {
        sections: [
          {
            heading: "The four directions",
            body: "North, south, east and west are the four main compass directions. North is usually at the top of a map. East is to the right, south is at the bottom, and west is to the left. You can remember them with the phrase 'Never Eat Soggy Waffles' — N, E, S, W in clockwise order.",
          },
          {
            heading: "Using directions",
            body: "To describe where something is, use a direction and a landmark: 'The park is north of the school.' 'The shops are east of the library.' Maps have a compass rose — an arrow showing north — so you can work out all four directions from it. North-east, south-west etc. are called intercardinal directions.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "On a map, the library is at the bottom and the school at the top. Which direction is the school from the library?",
          solution: "North — top of map is north.",
        },
      },
      questions: [
        {
          id: "edxpg-u1-dir-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which direction is usually at the top of a map?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "South" },
              { id: "b", text: "North" },
              { id: "c", text: "East" },
              { id: "d", text: "West" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Map orientation",
                statement: "North is at the top of maps.",
              },
            ],
            steps: [{ reasoning: "North = top.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** North",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "edxpg-u1-dir-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If east is to the right on a map, what is to the left?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "North" },
              { id: "b", text: "South" },
              { id: "c", text: "West" },
              { id: "d", text: "East" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compass",
                statement: "West is left when east is right.",
              },
            ],
            steps: [{ reasoning: "West = left.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** West",
            commonErrors: ["Reversing east and west."],
          },
        },
        {
          id: "edxpg-u1-dir-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the four main compass directions in clockwise order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Compass order",
                statement: "N → E → S → W clockwise.",
              },
            ],
            steps: [
              { reasoning: "North first.", marks: 1, markCode: "M" },
              {
                reasoning: "Correct clockwise sequence.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "All four named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "North, East, South, West",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edxpg-u1-dir-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The school is north of the park. Describe where the park is in relation to the school.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relative position",
                statement: "If A is north of B, B is south of A.",
              },
            ],
            steps: [
              {
                reasoning: "Understands opposite directions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Park is south of school.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Explains why — opposite of north is south.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Park is south of the school",
            commonErrors: ["Repeating 'north' instead of reversing."],
          },
        },
      ],
    },
    {
      id: "edxpg-u1-local",
      title: "Your Local Area",
      skill: "Describe features of your local area.",
      lesson: {
        sections: [
          {
            heading: "What is your local area?",
            body: "Your local area is the place around where you live — your street, neighbourhood, village or town. It has human features (things people made: houses, roads, shops, schools) and physical features (natural things: rivers, hills, trees, fields).",
          },
          {
            heading: "Describing your area",
            body: "To describe your local area, think about: Where is it? (near a city, countryside, coast?) What is it like? (busy or quiet, flat or hilly?) What is there? (shops, parks, schools, factories?) How has it changed? (new buildings, changed roads?) Fieldwork — visiting and observing your area — helps you answer these questions.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Name one human and one physical feature of your local area.",
          solution: "Human: the school. Physical: the river/park/trees.",
        },
      },
      questions: [
        {
          id: "edxpg-u1-local-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a human feature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A river" },
              { id: "b", text: "A building made by people" },
              { id: "c", text: "A mountain" },
              { id: "d", text: "A tree" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human feature",
                statement: "Made by people.",
              },
            ],
            steps: [
              { reasoning: "Human = made by people.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Building",
            commonErrors: ["Choosing natural features."],
          },
        },
        {
          id: "edxpg-u1-local-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a physical feature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A school" },
              { id: "b", text: "A road" },
              { id: "c", text: "A river" },
              { id: "d", text: "A shop" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Physical feature",
                statement: "Natural, not made by people.",
              },
            ],
            steps: [
              { reasoning: "River is natural.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(c)** A river",
            commonErrors: ["Choosing human-made features."],
          },
        },
        {
          id: "edxpg-u1-local-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe your local area in three sentences: where it is, what it is like, and what is there.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Describing an area",
                statement: "Location + character + features.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Where it is — e.g. near a city or in the countryside.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "What it is like — e.g. quiet, busy, flat or hilly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "What is there — e.g. shops, park, school.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Location + character + features",
            commonErrors: ["Only one aspect covered."],
          },
        },
        {
          id: "edxpg-u1-local-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How has your local area changed over time? Give two examples and explain what caused the change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Local change",
                statement: "Areas change due to people and needs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Example 1 of change, e.g. new houses or shops built.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cause — more people need homes/shopping.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example 2 + cause, e.g. road changed for traffic.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. new houses (more people) + road change (traffic)",
            commonErrors: ["No real examples or causes."],
          },
        },
      ],
    },
  ],
};
