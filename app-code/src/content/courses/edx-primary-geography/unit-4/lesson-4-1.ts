import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edxpg-u4-lesson-4-1",
  code: "4-1",
  title: "Reading Maps",
  goal: "I CAN read maps and use symbols, keys and compass directions.",
  standards: ["Y3-Y5 Geography", "Map skills"],
  vocabulary: [
    {
      term: "Map key",
      definition: "A list explaining the symbols used on a map.",
    },
    {
      term: "Compass rose",
      definition: "A symbol showing directions on a map.",
    },
    {
      term: "Scale",
      definition:
        "Shows the relationship between map distance and real distance.",
    },
    {
      term: "Symbol",
      definition: "A picture on a map representing something real.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u4-key",
      title: "Map Keys and Symbols",
      skill: "Use a map key to interpret symbols.",
      lesson: {
        sections: [
          {
            heading: "What is on a map?",
            body: "A map is a drawing of a place from above. Maps show features using symbols — a blue line might be a river, a red cross a hospital, a tree symbol a park. The map key (legend) explains what each symbol means. Always check the key first so you know what you're looking at.",
          },
          {
            heading: "Common symbols",
            body: "Common map symbols: blue lines/waves = water (rivers, lakes, seas); green areas = parks/woods; black lines = roads; dashed lines = footpaths; buildings shown as rectangles; schools and hospitals have special symbols. Ordnance Survey (OS) maps are the UK's standard detailed maps.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A map shows a blue wavy line. What is it?",
          solution: "A river or stream — blue usually means water.",
        },
      },
      questions: [
        {
          id: "edxpg-u4-key-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a map key?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of map" },
              { id: "b", text: "A list explaining map symbols" },
              { id: "c", text: "The map title" },
              { id: "d", text: "A compass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Map key",
                statement: "Explains symbols.",
              },
            ],
            steps: [
              { reasoning: "Key = symbol list.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Symbol list",
            commonErrors: ["Confusing with compass."],
          },
        },
        {
          id: "edxpg-u4-key-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What colour usually represents water on maps?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Red" },
              { id: "b", text: "Blue" },
              { id: "c", text: "Green" },
              { id: "d", text: "Brown" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Map colours",
                statement: "Blue = water.",
              },
            ],
            steps: [{ reasoning: "Blue = water.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Blue",
            commonErrors: ["Wrong colour."],
          },
        },
        {
          id: "edxpg-u4-key-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why you should always check the map key before reading a map.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Map reading",
                statement: "Symbols vary between maps.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Symbols can mean different things on different maps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The key tells you exactly what each symbol means.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Checking avoids mistakes in interpreting the map.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Symbols vary; key is essential",
            commonErrors: ["No reason given."],
          },
        },
        {
          id: "edxpg-u4-key-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design three map symbols for: a school, a hospital, a playground. Explain your choices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Map symbols",
                statement: "Clear, recognisable symbols.",
              },
            ],
            steps: [
              {
                reasoning: "Three distinct symbols described.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each symbol relates to the place.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Choices explained clearly.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "3 symbols + reasons",
            commonErrors: ["Symbols not explained."],
          },
        },
      ],
    },
    {
      id: "edxpg-u4-directions",
      title: "Directions and Compass",
      skill: "Use a compass and describe directions on maps.",
      lesson: {
        sections: [
          {
            heading: "Cardinal directions",
            body: "The four main directions are North, South, East and West (N, S, E, W). A compass rose on a map shows these directions. North is always at the top of most maps. East is to the right, West to the left, South at the bottom. Intermediate directions include Northeast, Southeast, Southwest, Northwest.",
          },
          {
            heading: "Using a compass",
            body: "A compass has a needle that always points to magnetic north. Hold it flat, turn until the needle lines up with 'N' on the dial — the direction the arrow points is north. You can then work out all other directions. Maps usually have 'N' at the top, meaning north is up — but maps can be rotated.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "If a map has N at the top, which direction is at the bottom?",
          solution: "South.",
        },
      },
      questions: [
        {
          id: "edxpg-u4-dir-q1",
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
                kind: "convention",
                name: "Map orientation",
                statement: "North at top.",
              },
            ],
            steps: [{ reasoning: "North = top.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** North",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "edxpg-u4-dir-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a compass needle always point to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "South" },
              { id: "b", text: "Magnetic north" },
              { id: "c", text: "East" },
              { id: "d", text: "The sun" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compass",
                statement: "Needle points north.",
              },
            ],
            steps: [{ reasoning: "Needle = north.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Magnetic north",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "edxpg-u4-dir-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Your school is north of the park. The park is east of the library. Describe the position of the library relative to the school.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Relative direction",
                statement: "Combine directions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Park is south of school (since school is north of park).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Library is west of park.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Library is southwest of school.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Southwest",
            commonErrors: ["Wrong combination."],
          },
        },
        {
          id: "edxpg-u4-dir-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a compass is more reliable than using landmarks to find north.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Navigation",
                statement: "Compass works anywhere.",
              },
            ],
            steps: [
              {
                reasoning: "Compass always points to magnetic north.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Landmarks can be misleading or absent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Compass works in forests, at night, in unfamiliar places.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Compass always works; landmarks unreliable",
            commonErrors: ["No real comparison."],
          },
        },
      ],
    },
    {
      id: "edxpg-u4-scale",
      title: "Map Scale",
      skill: "Use map scale to estimate real distances.",
      lesson: {
        sections: [
          {
            heading: "What is scale?",
            body: "Scale shows how map distances relate to real distances. If a map has a scale of 1:50,000, then 1 cm on the map = 50,000 cm (500 m or 0.5 km) in real life. Large-scale maps show small areas in detail (e.g., a town map); small-scale maps show large areas (e.g., a world map).",
          },
          {
            heading: "Using scale",
            body: "To measure real distance: measure the distance on the map in cm, then multiply by the scale's second number and convert. E.g., 4 cm on a 1:50,000 map = 4 × 50,000 cm = 200,000 cm = 2 km. Grid references use numbers and letters on maps to locate places precisely.",
          },
        ],
        keyFormulas: [
          { name: "Scale", statement: "Map distance × scale = real distance" },
        ],
        workedExample: {
          problem:
            "On a 1:25,000 map, two points are 6 cm apart. What is the real distance?",
          solution: "6 × 25,000 cm = 150,000 cm = 1.5 km.",
        },
      },
      questions: [
        {
          id: "edxpg-u4-scale-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a map scale of 1:50,000 mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 cm = 50,000 km" },
              { id: "b", text: "1 cm = 50,000 cm (500 m)" },
              { id: "c", text: "The map is 50,000 times bigger" },
              { id: "d", text: "There are 50,000 symbols" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scale",
                statement: "Ratio of map to real distance.",
              },
            ],
            steps: [{ reasoning: "1cm = 500m.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 1cm=500m",
            commonErrors: ["Unit confusion."],
          },
        },
        {
          id: "edxpg-u4-scale-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which map has the larger scale: 1:10,000 or 1:100,000?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1:100,000" },
              { id: "b", text: "1:10,000" },
              { id: "c", text: "They are the same" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Map scale",
                statement: "Smaller denominator = larger scale.",
              },
            ],
            steps: [
              { reasoning: "1:10,000 = larger.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** 1:10,000",
            commonErrors: ["Reversed understanding."],
          },
        },
        {
          id: "edxpg-u4-scale-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "On a 1:25,000 map, two towns are 8 cm apart. What is the real distance in km?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Scale calculation",
                statement: "Multiply by scale, convert units.",
              },
            ],
            steps: [
              {
                reasoning: "8 × 25,000 = 200,000 cm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to metres: 200,000 cm = 2,000 m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Convert to km: 2 km.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 km",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edxpg-u4-scale-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a large-scale map is better for planning a walk than a small-scale map.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Map choice",
                statement: "Detail vs coverage.",
              },
            ],
            steps: [
              {
                reasoning: "Large scale shows small area in detail.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shows footpaths, streams, buildings — needed for walking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Small scale shows big area but less detail — not useful for walking.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Large scale = more detail for walking",
            commonErrors: ["Confused scale direction."],
          },
        },
      ],
    },
  ],
};
