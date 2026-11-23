import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edxpg-u1-lesson-1-3",
  code: "1-3",
  title: "Maps and the Wider World",
  goal: "I CAN use different types of world maps and understand hemispheres.",
  standards: ["Y4-Y6 Geography", "World maps"],
  vocabulary: [
    {
      term: "World map",
      definition: "A map showing the whole Earth or large parts of it.",
    },
    {
      term: "Globe",
      definition: "A spherical model of the Earth — the most accurate map.",
    },
    {
      term: "Hemisphere",
      definition: "Half of the Earth — Northern, Southern, Eastern or Western.",
    },
    {
      term: "Equator",
      definition:
        "An imaginary line around the middle of the Earth, dividing north and south.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u1-worldmaps",
      title: "World Maps and Globes",
      skill: "Understand world maps, globes and their limitations.",
      lesson: {
        sections: [
          {
            heading: "Globes vs flat maps",
            body: "A globe is a sphere showing the Earth accurately — but you cannot carry one around easily. Flat world maps are convenient but distort shapes — Greenland looks huge on many maps but is actually smaller than Africa. Mercator projection (common in classrooms) makes countries near the poles look bigger than they are.",
          },
          {
            heading: "Reading world maps",
            body: "World maps show continents, oceans, countries and major cities. They use different projections — each shows some things well and distorts others. The equator runs across the middle; the prime meridian (0° longitude) runs through Greenwich, London. Together they divide the world into four hemispheres.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does Greenland look bigger than Africa on some maps?",
          solution:
            "Map projection distortion — Mercator makes polar regions look larger.",
        },
      },
      questions: [
        {
          id: "edxpg-u1-wm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a globe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A flat map of the world" },
              { id: "b", text: "A spherical model of the Earth" },
              { id: "c", text: "A type of compass" },
              { id: "d", text: "A satellite" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globe",
                statement: "Spherical model of Earth.",
              },
            ],
            steps: [{ reasoning: "Globe = sphere.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Spherical model",
            commonErrors: ["Confusing globe with flat map."],
          },
        },
        {
          id: "edxpg-u1-wm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why do flat world maps distort countries near the poles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are drawn incorrectly on purpose" },
              { id: "b", text: "Flattening a sphere stretches polar regions" },
              { id: "c", text: "Polar countries are actually bigger" },
              { id: "d", text: "Maps are always wrong" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Map projection",
                statement: "Flattening a sphere distorts shapes and sizes.",
              },
            ],
            steps: [
              {
                reasoning: "Flattening stretches poles.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Flattening stretches",
            commonErrors: ["Thinking maps are randomly wrong."],
          },
        },
        {
          id: "edxpg-u1-wm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the equator and what does it divide?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equator",
                statement: "Divides Earth into northern and southern halves.",
              },
            ],
            steps: [
              {
                reasoning: "Equator is imaginary line around middle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divides northern and southern hemispheres.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Also roughly divides climate zones — tropics vs temperate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Line around middle, divides N/S hemispheres",
            commonErrors: ["Wrong description."],
          },
        },
        {
          id: "edxpg-u1-wm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a globe is more accurate than a flat map, and why we still use flat maps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Globe vs map",
                statement: "Globe accurate but flat maps convenient.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Globe is a sphere — same shape as Earth, no distortion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Flat maps must stretch/distort to fit sphere on paper.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Flat maps are portable, printable, easy to use — that's why we use them.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Globe accurate; flat maps convenient",
            commonErrors: ["One-sided answer."],
          },
        },
      ],
    },
    {
      id: "edxpg-u1-hemispheres",
      title: "Hemispheres and Continents",
      skill: "Identify hemispheres and major continents.",
      lesson: {
        sections: [
          {
            heading: "Four hemispheres",
            body: "The equator divides Earth into Northern and Southern hemispheres. The prime meridian (0° longitude through Greenwich) divides Eastern and Western hemispheres. Most of the UK is in the Northern and Eastern hemispheres. Australia is mostly Southern hemisphere.",
          },
          {
            heading: "Seven continents",
            body: "Earth has seven continents: Asia (largest), Africa, North America, South America, Antarctica, Europe and Australia/Oceania. Asia and Africa are sometimes called the 'Old World'; the Americas the 'New World'. Continents are separated by oceans — the Pacific, Atlantic, Indian, Arctic and Southern oceans.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which hemisphere is Australia mostly in?",
          solution: "Southern hemisphere (and Eastern).",
        },
      },
      questions: [
        {
          id: "edxpg-u1-hemi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many continents are there?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "6" },
              { id: "c", text: "7" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Continents",
                statement: "Seven continents.",
              },
            ],
            steps: [{ reasoning: "7 continents.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 7",
            commonErrors: ["Wrong count."],
          },
        },
        {
          id: "edxpg-u1-hemi-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the largest continent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Africa" },
              { id: "b", text: "Asia" },
              { id: "c", text: "Europe" },
              { id: "d", text: "Australia" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Continents",
                statement: "Asia is largest.",
              },
            ],
            steps: [{ reasoning: "Asia = largest.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Asia",
            commonErrors: ["Choosing Africa."],
          },
        },
        {
          id: "edxpg-u1-hemi-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the four hemispheres and what divides them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hemispheres",
                statement: "Equator + prime meridian divide Earth.",
              },
            ],
            steps: [
              {
                reasoning: "Northern/Southern divided by equator.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Eastern/Western divided by prime meridian.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All four named correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "N/S by equator; E/W by prime meridian",
            commonErrors: ["Wrong dividing lines."],
          },
        },
        {
          id: "edxpg-u1-hemi-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Name all seven continents and the ocean that separates Europe from North America.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Continents and oceans",
                statement: "7 continents, 5 oceans.",
              },
            ],
            steps: [
              {
                reasoning: "All seven continents named.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Atlantic Ocean correctly identified.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Asia, Africa, N/S America, Antarctica, Europe, Australia; Atlantic",
            commonErrors: ["Missing continents or wrong ocean."],
          },
        },
      ],
    },
    {
      id: "edxpg-u1-gridref",
      title: "Grid References",
      skill: "Use four-figure grid references on maps.",
      lesson: {
        sections: [
          {
            heading: "What are grid lines?",
            body: "Ordnance Survey maps have a grid — lines running north-south (eastings) and east-west (northings) that form squares. Each grid square has a unique reference. Grid references let you pinpoint any location precisely.",
          },
          {
            heading: "Four-figure grid references",
            body: "A four-figure grid reference gives the square containing a place. Find the eastings number first (along the bottom), then the northings (up the side). For example, grid reference 1234 means go to 12 along the bottom and 34 up the side — the place is in that square. Always read eastings first, then northings — 'along the corridor, up the stairs'.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Find grid reference for a point: eastings 34, northings 21.",
          solution: "3421 — eastings first, then northings.",
        },
      },
      questions: [
        {
          id: "edxpg-u1-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a four-figure grid reference, which do you read first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Northings" },
              { id: "b", text: "Eastings" },
              { id: "c", text: "Alphabetical order" },
              { id: "d", text: "Whichever is bigger" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Grid references",
                statement: "Eastings first, then northings.",
              },
            ],
            steps: [{ reasoning: "Eastings first.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Eastings",
            commonErrors: ["Reversing order."],
          },
        },
        {
          id: "edxpg-u1-gr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does grid reference 4523 tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Go to 45 up and 23 across" },
              {
                id: "b",
                text: "The place is in the square at eastings 45, northings 23",
              },
              { id: "c", text: "The map scale" },
              { id: "d", text: "The height" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Grid reference meaning",
                statement: "Identifies the grid square.",
              },
            ],
            steps: [
              {
                reasoning: "45 eastings, 23 northings.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Square at 45E, 23N",
            commonErrors: ["Wrong interpretation."],
          },
        },
        {
          id: "edxpg-u1-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A place is at eastings 67 and northings 34. Write its four-figure grid reference.",
          response: {
            type: "numeric",
            parts: [{ label: "Grid reference", answer: 6734, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing grid references",
                statement: "Eastings then northings.",
              },
            ],
            steps: [
              { reasoning: "Eastings 67 first.", marks: 1, markCode: "M" },
              {
                reasoning: "Northings 34 second — combined 6734.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "6734",
            commonErrors: ["Reversed — 3467."],
          },
        },
        {
          id: "edxpg-u1-gr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are grid references useful on Ordnance Survey maps? Give two uses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grid reference uses",
                statement: "Precise location finding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pinpoints exact location — everyone finds same place.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Used by walkers, emergency services, planners.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Works with six-figure references for even more precision.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Precise location + emergency/planning uses",
            commonErrors: ["Vague uses."],
          },
        },
      ],
    },
    {
      id: "edxpg-u1-summary",
      title: "Maps Summary",
      skill: "Summarise map skills learned.",
      lesson: {
        sections: [
          {
            heading: "Key skills",
            body: "Maps show places from above with symbols explained by a key. Compass directions (N, E, S, W) help navigate. Your local area has human and physical features. Fieldwork collects real data; maps record findings. World maps show continents and hemispheres; grid references pinpoint locations.",
          },
          {
            heading: "Map types",
            body: "Local maps show streets and buildings. Ordnance Survey maps are detailed UK maps. Thematic maps show one topic. World maps and globes show the whole Earth — globes are accurate, flat maps convenient but distorted.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Summarise map reading in three steps.",
          solution:
            "1. Find compass/north. 2. Read the key. 3. Use symbols and grid to locate places.",
        },
      },
      questions: [
        {
          id: "edxpg-u1-sum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a map's compass show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distance" },
              { id: "b", text: "Directions" },
              { id: "c", text: "Height" },
              { id: "d", text: "Population" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compass",
                statement: "Shows directions.",
              },
            ],
            steps: [
              { reasoning: "Compass = directions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Directions",
            commonErrors: ["Confusing with scale."],
          },
        },
        {
          id: "edxpg-u1-sum-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the four main compass directions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compass directions",
                statement: "N, E, S, W.",
              },
            ],
            steps: [
              { reasoning: "North and South.", marks: 1, markCode: "B" },
              { reasoning: "East and West.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "North, East, South, West",
            commonErrors: ["Missing directions."],
          },
        },
        {
          id: "edxpg-u1-sum-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a human and physical feature, with one example each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feature types",
                statement: "Human = made; physical = natural.",
              },
            ],
            steps: [
              {
                reasoning: "Human feature defined — made by people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example, e.g. school or road.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Physical feature + example, e.g. river.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Human=made (school); physical=natural (river)",
            commonErrors: ["Wrong classification."],
          },
        },
        {
          id: "edxpg-u1-sum-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a simple fieldwork investigation of your school grounds using a map.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fieldwork plan",
                statement: "Question → method → map recording.",
              },
            ],
            steps: [
              {
                reasoning: "Clear question, e.g. where do children play most?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Method — observe/count at different times.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Map recording — mark findings with symbols + key.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Question + method + mapped results",
            commonErrors: ["No clear plan."],
          },
        },
      ],
    },
  ],
};
