import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edxpg-u2-lesson-2-3",
  code: "2-3",
  title: "People and Communities in the UK",
  goal: "I CAN describe how people live and work in different UK communities.",
  standards: ["Y5-Y6 Geography", "Communities"],
  vocabulary: [
    {
      term: "Community",
      definition:
        "A group of people living in the same area or sharing interests.",
    },
    { term: "Urban", definition: "Relating to towns and cities." },
    { term: "Rural", definition: "Relating to the countryside." },
    {
      term: "Population density",
      definition: "How many people live in a given area — crowded or sparse.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u2-urban",
      title: "Urban and Rural Life",
      skill: "Compare urban and rural communities.",
      lesson: {
        sections: [
          {
            heading: "Urban areas",
            body: "Urban areas are towns and cities — London, Manchester, Birmingham. They are densely populated, have tall buildings, many shops, offices, schools and hospitals, good public transport, and busy streets. Jobs are varied — finance, retail, services. Land is expensive; space is limited. Noise and pollution are higher.",
          },
          {
            heading: "Rural areas",
            body: "Rural areas are the countryside — villages and farmland. They are sparsely populated, have open spaces, farms, fields, woods, and quieter life. Jobs often relate to agriculture, tourism or local services. Public transport is limited; people rely on cars. Housing is often cheaper but services may be far away.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name two differences between urban and rural areas.",
          solution:
            "Urban: dense, tall buildings, busy; Rural: sparse, open space, quiet.",
        },
      },
      questions: [
        {
          id: "edxpg-u2-urban-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an urban area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The countryside" },
              { id: "b", text: "Towns and cities" },
              { id: "c", text: "Farms" },
              { id: "d", text: "Forests" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Urban",
                statement: "Towns and cities.",
              },
            ],
            steps: [{ reasoning: "Urban = cities.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Towns and cities",
            commonErrors: ["Confusing with rural."],
          },
        },
        {
          id: "edxpg-u2-urban-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a feature of rural areas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tall buildings" },
              { id: "b", text: "Open fields and farms" },
              { id: "c", text: "Busy traffic" },
              { id: "d", text: "Many offices" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rural features",
                statement: "Open space, farms, quiet.",
              },
            ],
            steps: [
              {
                reasoning: "Fields and farms = rural.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Fields and farms",
            commonErrors: ["Urban features."],
          },
        },
        {
          id: "edxpg-u2-urban-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages and two disadvantages of living in a city.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urban life",
                statement: "Pros and cons of city living.",
              },
            ],
            steps: [
              {
                reasoning: "Advantage 1 — jobs, services, transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Advantage 2 — culture, entertainment, people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Disadvantages — cost, noise, pollution, crowds.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Jobs+services vs cost+noise",
            commonErrors: ["Only advantages or only disadvantages."],
          },
        },
        {
          id: "edxpg-u2-urban-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are some parts of the UK more densely populated than others? Use the southeast as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Population distribution",
                statement: "Jobs, services and history attract people.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Southeast has most jobs — finance, services, London.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Better transport links — rail, roads, airports.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Historical growth — London expanded over centuries.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Jobs + transport + history",
            commonErrors: ["No real reasons."],
          },
        },
      ],
    },
    {
      id: "edxpg-u2-services",
      title: "Services and Amenities",
      skill: "Describe services that communities provide.",
      lesson: {
        sections: [
          {
            heading: "Essential services",
            body: "Communities need services: schools for education, hospitals/GPs for health, shops for food and goods, post offices for mail, banks for money, libraries for books and internet, parks for recreation, and public transport to get around. Rural areas may have fewer services — a village might have a shop and school but no hospital.",
          },
          {
            heading: "Access to services",
            body: "Access means how easily people can reach services. Urban areas have services close together; rural areas may require long journeys. This affects quality of life — a family in a remote village may travel 30 minutes to a hospital while a city family walks 10 minutes. Good planning tries to give everyone fair access to services.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name three services a community needs.",
          solution: "School, hospital, shops.",
        },
      },
      questions: [
        {
          id: "edxpg-u2-svc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'amenity'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of building material" },
              { id: "b", text: "A useful local service or facility" },
              { id: "c", text: "A type of weather" },
              { id: "d", text: "A sport" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amenity",
                statement: "Useful local service.",
              },
            ],
            steps: [
              { reasoning: "Amenity = service.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Local service",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edxpg-u2-svc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an essential service?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cinema" },
              { id: "b", text: "School" },
              { id: "c", text: "Theme park" },
              { id: "d", text: "Museum" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essential services",
                statement: "Education, health, food are essential.",
              },
            ],
            steps: [
              { reasoning: "School = essential.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** School",
            commonErrors: ["Leisure not essential."],
          },
        },
        {
          id: "edxpg-u2-svc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three services a community needs and explain why each matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Community services",
                statement: "Essential for daily life.",
              },
            ],
            steps: [
              {
                reasoning: "Service 1 with reason, e.g. school — education.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Service 2 with reason, e.g. hospital — health.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Service 3 with reason, e.g. shops — food/goods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. school+hospital+shops with reasons",
            commonErrors: ["Services without reasons."],
          },
        },
        {
          id: "edxpg-u2-svc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare access to services in a city and a remote village. What problems might the village face?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Service access",
                statement: "Distance affects quality of life.",
              },
            ],
            steps: [
              {
                reasoning: "City — services close, easy to reach.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Village — services far, need transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Problems — elderly/poor can't travel; services may close; isolation.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "City easy vs village far + problems",
            commonErrors: ["No comparison or problems."],
          },
        },
      ],
    },
    {
      id: "edxpg-u2-changes",
      title: "How Communities Change",
      skill: "Explain how and why communities change over time.",
      lesson: {
        sections: [
          {
            heading: "Types of change",
            body: "Communities change in many ways: population growth (more houses needed), new industries (factories opening or closing), regeneration (improving old areas), migration (people moving in or out), and new transport (roads, railways). Change can be planned (council builds new estate) or organic (shops appear where people need them).",
          },
          {
            heading: "Causes and effects",
            body: "Change happens for reasons: more people need homes, businesses need workers, old buildings need replacing. Effects can be positive (new jobs, better facilities) or negative (lost green space, higher prices, displacement of communities). Good planning tries to balance benefits and drawbacks.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Give one cause and one effect of community change.",
          solution: "Cause: population growth; Effect: need for more housing.",
        },
      },
      questions: [
        {
          id: "edxpg-u2-chg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'regeneration'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Destroying old buildings" },
              { id: "b", text: "Improving an area" },
              { id: "c", text: "Moving to a new town" },
              { id: "d", text: "Building from scratch" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Regeneration",
                statement: "Improving an area.",
              },
            ],
            steps: [{ reasoning: "Regen = improve.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Improving",
            commonErrors: ["Confusing with demolition."],
          },
        },
        {
          id: "edxpg-u2-chg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which causes community change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The weather" },
              { id: "b", text: "Population growth" },
              { id: "c", text: "The moon" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Community change",
                statement: "People-driven changes.",
              },
            ],
            steps: [
              { reasoning: "Population = cause.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Population growth",
            commonErrors: ["Natural causes only."],
          },
        },
        {
          id: "edxpg-u2-chg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one positive and one negative effect of building new housing in a rural area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change effects",
                statement: "Benefits and drawbacks.",
              },
            ],
            steps: [
              {
                reasoning: "Positive — more homes for families, local jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Negative — loss of green space, more traffic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both correctly identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Homes+jobs vs green space+traffic",
            commonErrors: ["Only one side."],
          },
        },
        {
          id: "edxpg-u2-chg-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your town centre has many empty shops. Explain possible causes and what could be done.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decline and renewal",
                statement: "Causes + solutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Causes — online shopping, out-of-town centres, economic decline.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Solutions — regenerate, attract new businesses, improve transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balanced view — change is complex.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Causes + regeneration solutions",
            commonErrors: ["No causes or solutions."],
          },
        },
      ],
    },
  ],
};
