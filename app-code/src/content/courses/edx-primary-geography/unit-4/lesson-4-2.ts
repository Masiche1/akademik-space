import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edxpg-u4-lesson-4-2",
  code: "4-2",
  title: "Fieldwork and Observation",
  goal: "I CAN conduct simple fieldwork and record observations.",
  standards: ["Y3-Y5 Geography", "Fieldwork"],
  vocabulary: [
    {
      term: "Fieldwork",
      definition: "Going outside to study geography directly.",
    },
    { term: "Observation", definition: "Noticing and recording what you see." },
    { term: "Tally chart", definition: "A chart for counting things quickly." },
    {
      term: "Survey",
      definition: "Collecting information about people or places.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u4-fieldwork",
      title: "What is Fieldwork?",
      skill: "Understand fieldwork and plan simple investigations.",
      lesson: {
        sections: [
          {
            heading: "Fieldwork",
            body: "Fieldwork means going outside the classroom to study geography directly — visiting places, measuring, observing, asking questions. Fieldwork helps you see geography for real, not just on a map. Examples: studying a local river, counting traffic, surveying what shops people use, observing weather.",
          },
          {
            heading: "Planning fieldwork",
            body: "Good fieldwork needs a plan: a question to answer (e.g., 'Which is busier — the high street or the shopping centre?'), a method (count people, measure something, survey), equipment (clipboard, pencil, tally chart), and safety (adult supervision, stay together). After collecting data, you analyse it and draw conclusions.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Plan a fieldwork question about your local area.",
          solution:
            "Question: 'Which is more popular — the park or the playground?' Method: count users at different times.",
        },
      },
      questions: [
        {
          id: "edxpg-u4-fw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is fieldwork?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Work in a field" },
              { id: "b", text: "Going outside to study geography" },
              { id: "c", text: "A type of homework" },
              { id: "d", text: "A map exercise" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fieldwork",
                statement: "Outdoor geography study.",
              },
            ],
            steps: [
              {
                reasoning: "Fieldwork = outdoor study.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Outdoor study",
            commonErrors: ["Literal 'field' interpretation."],
          },
        },
        {
          id: "edxpg-u4-fw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a good fieldwork question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What is geography?" },
              { id: "b", text: "Which road has more traffic?" },
              { id: "c", text: "What is a map?" },
              { id: "d", text: "Who invented maps?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fieldwork questions",
                statement: "Observable, measurable questions.",
              },
            ],
            steps: [
              { reasoning: "Traffic = observable.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Traffic question",
            commonErrors: ["Non-observable questions."],
          },
        },
        {
          id: "edxpg-u4-fw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three things you need to plan before doing fieldwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fieldwork planning",
                statement: "Question, method, equipment, safety.",
              },
            ],
            steps: [
              {
                reasoning: "A clear question to answer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A method for collecting data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equipment and safety considerations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Question+method+equipment+safety",
            commonErrors: ["Missing key elements."],
          },
        },
        {
          id: "edxpg-u4-fw-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your class wants to find out which local shop is most popular. Plan the fieldwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fieldwork planning",
                statement: "Structured investigation.",
              },
            ],
            steps: [
              {
                reasoning: "Question — which shop has most customers?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Method — count customers at different times/days.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equipment/safety — tally chart, adult supervision.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Question+method+equipment",
            commonErrors: ["No method or safety."],
          },
        },
      ],
    },
    {
      id: "edxpg-u4-data",
      title: "Recording and Analysing Data",
      skill: "Record observations using tally charts and simple graphs.",
      lesson: {
        sections: [
          {
            heading: "Recording data",
            body: "When doing fieldwork, you need to record what you observe. A tally chart is a quick way to count — make a mark (|) for each observation, and every fifth mark crosses the four (). This makes counting many items easy. After recording, you can total the tallies to see the results.",
          },
          {
            heading: "Analysing and presenting",
            body: "Once you have data, you analyse it — look for patterns, compare totals, find the most/least. Present results using bar charts (good for comparing categories) or pictograms (pictures for counts). A bar chart has bars of different heights showing the data. Always label axes and title the chart.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "In a tally chart, you have  | | | for 'cars'. What is the total?",
          solution: "8 cars (5 + 3).",
        },
      },
      questions: [
        {
          id: "edxpg-u4-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a tally chart used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drawing maps" },
              { id: "b", text: "Counting things quickly" },
              { id: "c", text: "Measuring distance" },
              { id: "d", text: "Finding directions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tally chart",
                statement: "Quick counting.",
              },
            ],
            steps: [
              { reasoning: "Tally = counting.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Counting",
            commonErrors: ["Wrong purpose."],
          },
        },
        {
          id: "edxpg-u4-data-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does  represent in a tally chart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "5" },
              { id: "c", text: "4" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tally marks", statement: " = 5." },
            ],
            steps: [{ reasoning: " = 5.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 5",
            commonErrors: ["Wrong count."],
          },
        },
        {
          id: "edxpg-u4-data-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You counted vehicles: cars | | |, buses | |, bikes | | | |. Which is most common?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data analysis",
                statement: "Compare totals.",
              },
            ],
            steps: [
              { reasoning: "Cars = 10+3 = 13.", marks: 1, markCode: "M" },
              {
                reasoning: "Buses = 5+2 = 7; bikes = 4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Cars are most common.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cars (13)",
            commonErrors: ["Wrong totals."],
          },
        },
        {
          id: "edxpg-u4-data-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a bar chart is a good way to present your fieldwork results.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data presentation",
                statement: "Visual comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Bars show totals clearly at a glance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Easy to compare categories.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Labels make it understandable to others.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Clear comparison + easy to read",
            commonErrors: ["No visual benefit."],
          },
        },
      ],
    },
    {
      id: "edxpg-u4-local",
      title: "Your Local Area",
      skill: "Apply map and fieldwork skills to study your own neighbourhood.",
      lesson: {
        sections: [
          {
            heading: "Studying your area",
            body: "Your local area is the place where you live — your street, neighbourhood, town or village. Studying it involves: mapping your route to school, identifying local features (shops, parks, rivers), observing land use (houses, shops, farms), and understanding how the area has changed over time.",
          },
          {
            heading: "Land use",
            body: "Land use describes what land is used for: residential (houses), commercial (shops/offices), industrial (factories), agricultural (farms), recreational (parks/playgrounds), and transport (roads). Different areas have different mixes — city centres are mostly commercial, suburbs residential, countryside agricultural.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name three types of land use in your area.",
          solution:
            "e.g. residential houses, shops (commercial), park (recreation).",
        },
      },
      questions: [
        {
          id: "edxpg-u4-local-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'land use'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using land for farming only" },
              { id: "b", text: "What land is used for" },
              { id: "c", text: "The price of land" },
              { id: "d", text: "A type of map" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Land use",
                statement: "Purpose of land.",
              },
            ],
            steps: [
              { reasoning: "Land use = purpose.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Purpose of land",
            commonErrors: ["Narrow interpretation."],
          },
        },
        {
          id: "edxpg-u4-local-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is commercial land use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Houses" },
              { id: "b", text: "Shops" },
              { id: "c", text: "Farms" },
              { id: "d", text: "Parks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Commercial",
                statement: "Business use.",
              },
            ],
            steps: [
              { reasoning: "Shops = commercial.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Shops",
            commonErrors: ["Wrong type."],
          },
        },
        {
          id: "edxpg-u4-local-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three different land uses you can see in your local area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Local observation",
                statement: "Identify land uses.",
              },
            ],
            steps: [
              {
                reasoning: "Land use 1, e.g. houses = residential.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Land use 2, e.g. shops = commercial.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Land use 3, e.g. park = recreational.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. residential+commercial+recreation",
            commonErrors: ["No real examples."],
          },
        },
        {
          id: "edxpg-u4-local-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How has your local area changed over the past 20 years? Suggest how you could find out.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Historical geography",
                statement: "Use old maps/photos.",
              },
            ],
            steps: [
              {
                reasoning: "Method — compare old and new maps/photos.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ask older family/community members.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example changes — new shops, housing estates, closed businesses.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Maps+photos+testimony+examples",
            commonErrors: ["No method."],
          },
        },
      ],
    },
  ],
};
