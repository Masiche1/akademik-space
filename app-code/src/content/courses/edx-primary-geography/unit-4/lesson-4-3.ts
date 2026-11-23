import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edxpg-u4-lesson-4-3",
  code: "4-3",
  title: "Geographical Skills Summary",
  goal: "I CAN combine map, fieldwork and observation skills.",
  standards: ["Y5-Y6 Geography", "Skills synthesis"],
  vocabulary: [
    {
      term: "Ordnance Survey",
      definition: "The UK's official mapping organisation.",
    },
    {
      term: "Grid reference",
      definition: "Numbers that locate a point precisely on a map.",
    },
    {
      term: "Aerial view",
      definition: "Looking at an area from above, like a map.",
    },
    {
      term: "Physical geography",
      definition: "The natural features — rivers, mountains, weather.",
    },
    {
      term: "Human geography",
      definition: "The human features — towns, industries, populations.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u4-physical-human",
      title: "Physical and Human Geography",
      skill: "Distinguish physical and human features on a map.",
      lesson: {
        sections: [
          {
            heading: "Physical geography",
            body: "Physical geography studies natural features: rivers, mountains, coasts, weather, climate, vegetation, landforms. On a map these appear as blue lines (water), contour lines (height), green shading (woodland), and symbols for features. Physical geography asks: 'What is the natural environment like?'",
          },
          {
            heading: "Human geography",
            body: "Human geography studies human features: towns, cities, roads, farms, industries, populations, cultures. On a map these appear as building symbols, road networks, field boundaries, and settlement names. Human geography asks: 'How do people use and change the land?' Both are connected — people adapt to physical geography, and modify it.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is a river physical or human geography? A shopping centre?",
          solution: "River = physical; shopping centre = human.",
        },
      },
      questions: [
        {
          id: "edxpg-u4-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does physical geography study?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Towns and cities" },
              { id: "b", text: "Natural features like rivers and mountains" },
              { id: "c", text: "Populations" },
              { id: "d", text: "Industries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical geography",
                statement: "Natural features.",
              },
            ],
            steps: [
              { reasoning: "Physical = natural.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Natural features",
            commonErrors: ["Confusing with human."],
          },
        },
        {
          id: "edxpg-u4-ph-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a human geography feature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A mountain" },
              { id: "b", text: "A factory" },
              { id: "c", text: "A river" },
              { id: "d", text: "A forest" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human geography",
                statement: "Human-made features.",
              },
            ],
            steps: [{ reasoning: "Factory = human.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Factory",
            commonErrors: ["Natural feature chosen."],
          },
        },
        {
          id: "edxpg-u4-ph-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of physical and two examples of human features on a map.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Map features",
                statement: "Natural vs human-made.",
              },
            ],
            steps: [
              {
                reasoning: "Physical — e.g. river, wood.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Human — e.g. road, building.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both types correctly identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. river+wood vs road+building",
            commonErrors: ["Wrong categories."],
          },
        },
        {
          id: "edxpg-u4-ph-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how human geography is influenced by physical geography, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Physical-human link",
                statement: "People adapt to nature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "People settle where water and flat land are available.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example — rivers attract settlements for water and transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mountains limit settlement; valleys encourage it.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Settlement follows physical features",
            commonErrors: ["No example."],
          },
        },
      ],
    },
    {
      id: "edxpg-u4-osmaps",
      title: "Ordnance Survey Maps",
      skill: "Describe OS maps and their features.",
      lesson: {
        sections: [
          {
            heading: "What are OS maps?",
            body: "Ordnance Survey (OS) produces the official maps of Great Britain. They are detailed and accurate — showing buildings, roads, footpaths, fields, contours (height lines), water, and grid references. OS maps come in different scales — Explorer maps (1:25,000) for countryside, Landranger (1:50,000) for larger areas.",
          },
          {
            heading: "Map features",
            body: "OS maps have: a grid of blue lines with numbers/letters for grid references; contour lines showing height (closer lines = steeper); colours — green for woodlands, blue for water, brown for contour lines, black for buildings/roads. Symbols show specific features like pubs, churches, car parks. Every OS map has a legend/key.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What do contour lines on an OS map show?",
          solution:
            "Height above sea level — closer lines mean steeper slopes.",
        },
      },
      questions: [
        {
          id: "edxpg-u4-os-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does OS stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Overseas Survey" },
              { id: "b", text: "Ordnance Survey" },
              { id: "c", text: "Official Standards" },
              { id: "d", text: "Open Spaces" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "OS maps",
                statement: "Ordnance Survey.",
              },
            ],
            steps: [
              { reasoning: "OS = Ordnance Survey.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Ordnance Survey",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edxpg-u4-os-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What do contour lines show on a map?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature" },
              { id: "b", text: "Height above sea level" },
              { id: "c", text: "Population" },
              { id: "d", text: "Rainfall" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contour lines",
                statement: "Show height.",
              },
            ],
            steps: [
              { reasoning: "Contours = height.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Height",
            commonErrors: ["Wrong feature."],
          },
        },
        {
          id: "edxpg-u4-os-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three features you would find on an Ordnance Survey map.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "OS map features",
                statement: "Buildings, roads, contours, grid.",
              },
            ],
            steps: [
              {
                reasoning: "Feature 1, e.g. buildings/houses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Feature 2, e.g. roads/footpaths.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Feature 3, e.g. contour lines/grid references.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. buildings+roads+contours",
            commonErrors: ["Not OS features."],
          },
        },
        {
          id: "edxpg-u4-os-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why contour lines that are close together indicate a steep slope.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contours",
                statement: "Spacing shows steepness.",
              },
            ],
            steps: [
              {
                reasoning: "Each contour line = a fixed height interval.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Close lines = height changes quickly over short distance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Far apart = gentle slope.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Close lines = fast height change = steep",
            commonErrors: ["No spacing link."],
          },
        },
      ],
    },
    {
      id: "edxpg-u4-synthesis",
      title: "Geography Skills Synthesis",
      skill: "Combine all geography skills in an enquiry.",
      lesson: {
        sections: [
          {
            heading: "Geographical enquiry",
            body: "Geographical enquiry is asking questions about places and finding answers: 'Why is this area like this?' 'How has it changed?' 'What might happen next?' It combines map skills, fieldwork, observation and thinking. Steps: question → collect data → analyse → conclude → evaluate.",
          },
          {
            heading: "Putting it together",
            body: "Good geography uses everything: read maps to locate features, do fieldwork to observe, record data with tally charts, analyse results, and draw conclusions about physical and human geography. The best geographers ask good questions and use evidence to answer them.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What are the stages of geographical enquiry?",
          solution: "Question, collect, analyse, conclude, evaluate.",
        },
      },
      questions: [
        {
          id: "edxpg-u4-syn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is geographical enquiry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drawing maps" },
              {
                id: "b",
                text: "Asking questions about places and finding answers",
              },
              { id: "c", text: "A type of fieldwork" },
              { id: "d", text: "Memorising facts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Geographical enquiry",
                statement: "Question + investigate.",
              },
            ],
            steps: [
              { reasoning: "Enquiry = ask+answer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Ask+answer",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edxpg-u4-syn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the first step in geographical enquiry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Draw a conclusion" },
              { id: "b", text: "Ask a question" },
              { id: "c", text: "Collect data" },
              { id: "d", text: "Present results" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Enquiry steps",
                statement: "Question first.",
              },
            ],
            steps: [{ reasoning: "Question first.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Ask a question",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edxpg-u4-syn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the stages of geographical enquiry in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Enquiry stages",
                statement: "Question→collect→analyse→conclude→evaluate.",
              },
            ],
            steps: [
              { reasoning: "Question.", marks: 1, markCode: "M" },
              { reasoning: "Collect data / analyse.", marks: 1, markCode: "M" },
              { reasoning: "Conclude / evaluate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Question→collect→analyse→conclude→evaluate",
            commonErrors: ["Wrong order or missing stages."],
          },
        },
        {
          id: "edxpg-u4-syn-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a geographical enquiry about your school or neighbourhood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Enquiry design",
                statement: "Full investigation plan.",
              },
            ],
            steps: [
              { reasoning: "Clear question.", marks: 1, markCode: "M" },
              {
                reasoning: "Method for collecting data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "How results will be analysed and presented.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Question+method+analysis",
            commonErrors: ["Incomplete plan."],
          },
        },
      ],
    },
  ],
};
