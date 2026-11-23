import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edxpg-u1-lesson-1-2",
  code: "1-2",
  title: "Fieldwork and Map Skills",
  goal: "I CAN carry out simple fieldwork and use maps to record findings.",
  standards: ["Y3-Y5 Geography", "Fieldwork"],
  vocabulary: [
    {
      term: "Fieldwork",
      definition:
        "Going outside to observe and collect information about a place.",
    },
    {
      term: "Observation",
      definition: "Noticing and recording what you see, hear and do.",
    },
    {
      term: "Survey",
      definition: "Collecting information from people, e.g. asking questions.",
    },
    {
      term: "Symbol",
      definition: "A mark on a map that stands for something real.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u1-fieldwork",
      title: "Fieldwork",
      skill: "Plan and carry out simple fieldwork.",
      lesson: {
        sections: [
          {
            heading: "What is fieldwork?",
            body: "Fieldwork means going to a place to find out about it directly — walking around your school grounds, the local park or your street. You observe what is there, count things, take measurements, and ask people questions. Fieldwork gives real, first-hand information that books cannot.",
          },
          {
            heading: "Planning fieldwork",
            body: "Good fieldwork starts with a question: 'How many trees are in the playground?' or 'Where do people cross the road?' Then decide how to find out — count, measure, observe, or survey. Take a map to record where you find things. Afterwards, write up what you found.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Plan fieldwork to find the busiest area of your school playground.",
          solution:
            "Question: where do children play most? Method: observe at break times, mark areas on a map.",
        },
      },
      questions: [
        {
          id: "edxpg-u1-fw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is fieldwork?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing about a place from a book" },
              { id: "b", text: "Going outside to observe a place" },
              { id: "c", text: "Drawing maps at home" },
              { id: "d", text: "Watching TV about places" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fieldwork",
                statement: "Going outside to collect information.",
              },
            ],
            steps: [
              {
                reasoning: "Fieldwork = going out to observe.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Going outside",
            commonErrors: ["Thinking fieldwork is desk work."],
          },
        },
        {
          id: "edxpg-u1-fw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a good first step in fieldwork?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start collecting data immediately" },
              { id: "b", text: "Decide what question you want to answer" },
              { id: "c", text: "Write the report" },
              { id: "d", text: "Go home" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fieldwork planning",
                statement: "Start with a question.",
              },
            ],
            steps: [{ reasoning: "Question first.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Decide the question",
            commonErrors: ["Collecting data without a purpose."],
          },
        },
        {
          id: "edxpg-u1-fw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways you could collect information during fieldwork in a park.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Data collection",
                statement: "Observe, count, measure, survey.",
              },
            ],
            steps: [
              {
                reasoning: "Counting method, e.g. count trees or birds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Observation or survey method, e.g. note where people sit or ask questions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Records on a map or in a table.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. count trees; observe where people sit",
            commonErrors: ["Methods not suited to fieldwork."],
          },
        },
        {
          id: "edxpg-u1-fw-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why fieldwork is better than just reading about a place in a book.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fieldwork value",
                statement: "First-hand data is more accurate and engaging.",
              },
            ],
            steps: [
              {
                reasoning:
                  "You see the place yourself — real, current information.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "You can collect your own data — questions books cannot answer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It is more interesting and memorable.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Real data + own questions + engaging",
            commonErrors: ["No real advantages given."],
          },
        },
      ],
    },
    {
      id: "edxpg-u1-mapwork",
      title: "Using Maps for Fieldwork",
      skill: "Draw and use simple maps to record findings.",
      lesson: {
        sections: [
          {
            heading: "Mapping your area",
            body: "A fieldwork map shows the area you studied with symbols for what you found. Draw the boundary of the area, add a compass showing north, and mark features you observed — trees as circles, paths as lines, buildings as rectangles. Use a key to explain your symbols.",
          },
          {
            heading: "Recording data on maps",
            body: "You can add data to maps in different ways: numbers for counts (5 trees), colours for categories (green for grass, blue for water), or symbols for specific things (a star for the busiest spot). The map becomes a visual record of your fieldwork findings.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How would you show 3 trees and 1 pond on a fieldwork map?",
          solution: "3 tree symbols + 1 blue pond symbol, with a key.",
        },
      },
      questions: [
        {
          id: "edxpg-u1-mw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a fieldwork map include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only a title" },
              { id: "b", text: "Area, compass and symbols with a key" },
              { id: "c", text: "A photo of the area" },
              { id: "d", text: "A list of names" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fieldwork map",
                statement: "Needs area, orientation, symbols, key.",
              },
            ],
            steps: [
              {
                reasoning: "Map needs compass + symbols + key.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Compass + symbols + key",
            commonErrors: ["Incomplete map elements."],
          },
        },
        {
          id: "edxpg-u1-mw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why do you need a compass on a fieldwork map?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To show which way is north" },
              { id: "b", text: "To measure distance" },
              { id: "c", text: "To show colours" },
              { id: "d", text: "To write names" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compass on maps",
                statement: "Shows orientation — which way is north.",
              },
            ],
            steps: [
              { reasoning: "Compass shows north.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(a)** Shows north",
            commonErrors: ["Confusing compass with scale."],
          },
        },
        {
          id: "edxpg-u1-mw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how you would record the locations of 5 different bird species in a park on a map.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Recording on maps",
                statement: "Use symbols and labels.",
              },
            ],
            steps: [
              {
                reasoning: "Different symbol or colour for each species.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mark location where each was seen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add a key explaining symbols.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Different symbols + locations + key",
            commonErrors: ["No way to distinguish species."],
          },
        },
        {
          id: "edxpg-u1-mw-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your fieldwork map shows the playground is busiest near the climbing frame. Explain how this information could be useful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Using fieldwork data",
                statement: "Data informs decisions.",
              },
            ],
            steps: [
              {
                reasoning: "Shows where children prefer to play.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Could improve playground design — more equipment there.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Or safety — supervise that area more.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Design improvements + supervision",
            commonErrors: ["Data collected but not used."],
          },
        },
      ],
    },
    {
      id: "edxpg-u1-ordnance",
      title: "Ordnance Survey Maps",
      skill: "Understand different types of maps used in the UK.",
      lesson: {
        sections: [
          {
            heading: "Types of maps",
            body: "Different maps show different things. Ordnance Survey (OS) maps are detailed maps of the UK used by walkers and planners — they show contours (height), footpaths, buildings and land use at large scales. Street maps show roads and buildings for navigation. Thematic maps show one topic — weather, population, land use.",
          },
          {
            heading: "Map scales",
            body: "Map scale tells you how much the map has been shrunk. A 1:25,000 map means 1 cm on the map = 25,000 cm (250 m) in real life. Larger scale maps (1:1,000) show more detail of smaller areas; smaller scale maps (1:50,000) show bigger areas with less detail. Choose the right scale for your purpose.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What does 1:50,000 scale mean?",
          solution: "1 cm on map = 50,000 cm (500 m) in real life.",
        },
      },
      questions: [
        {
          id: "edxpg-u1-os-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are Ordnance Survey maps?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maps of other planets" },
              { id: "b", text: "Detailed maps of the UK" },
              { id: "c", text: "World maps" },
              { id: "d", text: "Treasure maps" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ordnance Survey",
                statement: "Detailed UK maps.",
              },
            ],
            steps: [{ reasoning: "OS = UK maps.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** UK maps",
            commonErrors: ["Thinking OS maps are world maps."],
          },
        },
        {
          id: "edxpg-u1-os-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a larger scale map show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More detail of a smaller area" },
              { id: "b", text: "Less detail of a bigger area" },
              { id: "c", text: "The whole world" },
              { id: "d", text: "Nothing different" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Map scale",
                statement: "Larger scale = more detail, smaller area.",
              },
            ],
            steps: [
              { reasoning: "Large scale = detail.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(a)** More detail, smaller area",
            commonErrors: ["Reversing scale meaning."],
          },
        },
        {
          id: "edxpg-u1-os-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two types of thematic maps and what each shows.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thematic maps",
                statement: "Show one topic across an area.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Example 1, e.g. weather map shows temperatures/rain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example 2, e.g. population or land use map.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both correctly described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. weather + population maps",
            commonErrors: ["Not thematic maps."],
          },
        },
        {
          id: "edxpg-u1-os-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You are planning a walk across countryside. Which map scale would you choose and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Choosing map scale",
                statement: "Match scale to purpose.",
              },
            ],
            steps: [
              {
                reasoning: "Chooses appropriate scale, e.g. 1:25,000 OS map.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows footpaths and contours — needed for walking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explains why — detailed enough for navigation but covers enough area.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "1:25,000 — detail + coverage for walking",
            commonErrors: ["Wrong scale for purpose."],
          },
        },
      ],
    },
  ],
};
