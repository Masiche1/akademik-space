import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "cieids-u3-lesson-3-5",
  code: "3-5",
  title: "Urbanisation, environment and sustainability",
  goal: "I CAN explain urbanisation problems and evaluate sustainable development approaches.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 5: Urbanisation and sustainability",
  ],
  vocabulary: [
    {
      term: "Urbanisation",
      definition: "Increasing proportion of population living in cities.",
    },
    {
      term: "Urban sprawl",
      definition:
        "Uncontrolled expansion of urban areas into surrounding land.",
    },
    {
      term: "Slum",
      definition: "Informal settlement with poor housing, no services.",
    },
    {
      term: "Sustainable development",
      definition:
        "Meeting present needs without compromising future generations' ability to meet theirs.",
    },
    {
      term: "Environmental degradation",
      definition:
        "Damage to natural environment — pollution, deforestation, etc.",
    },
    {
      term: "Climate change",
      definition: "Long-term changes in global climate — often human-caused.",
    },
    {
      term: "Renewable energy",
      definition:
        "Energy from natural sources that replenish — solar, wind, hydro.",
    },
    {
      term: "Carbon footprint",
      definition: "Amount of greenhouse gases produced by activity.",
    },
    {
      term: "Waste management",
      definition: "Collecting, treating and disposing of waste.",
    },
    {
      term: "Deforestation",
      definition: "Clearing forests — reduces biodiversity, increases CO2.",
    },
    {
      term: "Green belt",
      definition: "Area of open land around cities preventing sprawl.",
    },
    {
      term: "Sustainable city",
      definition: "City designed for environmental and social sustainability.",
    },
  ],
  concepts: [
    {
      id: "cieids-u3-urban",
      title: "Urbanisation and its problems",
      skill:
        "Explain urbanisation causes and problems in developing countries.",
      lesson: {
        sections: [
          {
            heading: "Causes of urbanisation",
            body: "**Rural-urban migration**: people move to cities for jobs and better services. **Natural increase**: urban birth rates may be higher. **Push factors**: rural poverty, lack of services, landlessness. **Pull factors**: urban jobs, education, healthcare, entertainment. Developing countries urbanise rapidly — often before industrialisation provides enough jobs.",
          },
          {
            heading: "Urban problems",
            body: "**Housing**: slums and informal settlements — overcrowded, no services. **Unemployment**: more workers than jobs. **Services**: inadequate water, sanitation, healthcare, education. **Transport**: congestion, pollution. **Environment**: air/water pollution, waste. **Social**: crime, inequality, informal economy.",
          },
          {
            heading: "Managing urbanisation",
            body: "Strategies: **planned cities** (design with services), **green belts** (limit sprawl), **slum upgrading** (improve existing settlements), **decentralisation** (develop rural areas to reduce migration), **sustainable cities** (environmentally friendly design). Success requires planning, investment and governance.",
          },
        ],
        keyFormulas: [
          {
            name: "Urbanisation causes",
            statement: "Rural-urban migration · push/pull factors",
          },
          {
            name: "Urban problems",
            statement: "Housing · unemployment · services · environment",
          },
          {
            name: "Management",
            statement:
              "Planning · green belts · slum upgrading · sustainable cities",
          },
        ],
        workedExample: {
          problem: "Why do slums form in cities?",
          solution:
            "Rapid urbanisation outpaces housing provision — migrants can't afford formal housing, build informal settlements without services.",
        },
      },
      questions: [
        {
          id: "cieids-u3-u-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Urbanisation refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Increasing proportion of population in cities",
              },
              { id: "b", text: "More rural areas" },
              { id: "c", text: "Population decline" },
              { id: "d", text: "Migration abroad" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Urbanisation",
                statement: "Increasing urban population proportion.",
              },
            ],
            steps: [
              {
                reasoning: "Urbanisation = more urban population.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Increasing urban population.",
          },
        },
        {
          id: "cieids-u3-u-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pull factor for urbanisation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Urban jobs" },
              { id: "b", text: "Rural poverty" },
              { id: "c", text: "Lack of services" },
              { id: "d", text: "Landlessness" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pull factors",
                statement: "Jobs, services, entertainment.",
              },
            ],
            steps: [
              {
                reasoning: "Pull = attracts to cities.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Urban jobs.",
          },
        },
        {
          id: "cieids-u3-u-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A push factor for urbanisation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rural poverty" },
              { id: "b", text: "Urban jobs" },
              { id: "c", text: "Good services" },
              { id: "d", text: "Entertainment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Push factors",
                statement: "Poverty, lack of services, landlessness.",
              },
            ],
            steps: [
              {
                reasoning: "Push = drives from rural.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Rural poverty.",
          },
        },
        {
          id: "cieids-u3-u-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A slum is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Informal settlement with poor housing and no services",
              },
              { id: "b", text: "Luxury housing" },
              { id: "c", text: "Government housing" },
              { id: "d", text: "Rural area" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slum",
                statement: "Informal settlement, no services.",
              },
            ],
            steps: [
              {
                reasoning: "Slum = informal settlement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Informal settlement.",
          },
        },
        {
          id: "cieids-u3-u-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Urban sprawl refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Uncontrolled expansion into surrounding land" },
              { id: "b", text: "City shrinking" },
              { id: "c", text: "Rural growth" },
              { id: "d", text: "Planned development" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Urban sprawl",
                statement: "Uncontrolled urban expansion.",
              },
            ],
            steps: [
              {
                reasoning: "Sprawl = uncontrolled expansion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Uncontrolled expansion.",
          },
        },
        {
          id: "cieids-u3-u-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sustainable development means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Meeting present needs without compromising future generations",
              },
              { id: "b", text: "Fast growth" },
              { id: "c", text: "No growth" },
              { id: "d", text: "Only economic growth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainable development",
                statement: "Present needs without harming future.",
              },
            ],
            steps: [
              {
                reasoning: "Sustainable = present + future.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Present needs without harming future.",
          },
        },
        {
          id: "cieids-u3-u-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A green belt is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Area of open land preventing urban sprawl" },
              { id: "b", text: "A park" },
              { id: "c", text: "A road" },
              { id: "d", text: "A building" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Green belt",
                statement: "Open land preventing sprawl.",
              },
            ],
            steps: [
              {
                reasoning: "Green belt = limits sprawl.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Open land preventing sprawl.",
          },
        },
        {
          id: "cieids-u3-u-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Environmental degradation includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pollution, deforestation, soil erosion" },
              { id: "b", text: "Economic growth" },
              { id: "c", text: "Population growth" },
              { id: "d", text: "Urbanisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Environmental degradation",
                statement: "Pollution, deforestation, soil erosion.",
              },
            ],
            steps: [
              {
                reasoning: "Degradation = environmental damage.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Pollution, deforestation, soil erosion.",
          },
        },
        {
          id: "cieids-u3-u-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Renewable energy comes from:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Natural sources that replenish — solar, wind, hydro",
              },
              { id: "b", text: "Coal" },
              { id: "c", text: "Oil" },
              { id: "d", text: "Gas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Renewable energy",
                statement: "Solar, wind, hydro — replenish.",
              },
            ],
            steps: [
              {
                reasoning: "Renewable = replenishing sources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Solar, wind, hydro.",
          },
        },
        {
          id: "cieids-u3-u-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between push and pull factors of urbanisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Push vs pull",
                statement: "Rural problems vs urban attractions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Push: rural poverty, lack of services, landlessness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pull: urban jobs, services, entertainment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Push = rural problems; pull = urban attractions.",
          },
        },
        {
          id: "cieids-u3-u-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two problems of rapid urbanisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urbanisation problems",
                statement: "Housing, unemployment, services, pollution.",
              },
            ],
            steps: [
              {
                reasoning: "Slums/housing shortage and unemployment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inadequate services and pollution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Housing, unemployment, services, pollution.",
          },
        },
        {
          id: "cieids-u3-u-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why slums form in rapidly urbanising cities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Slum formation",
                statement: "Housing can't keep pace with migration.",
              },
            ],
            steps: [
              {
                reasoning: "Rapid migration outpaces housing provision.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Migrants can't afford formal housing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Build informal settlements without services.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Housing can't keep pace; migrants build informal settlements.",
          },
        },
        {
          id: "cieids-u3-u-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a strategy to manage rapid urbanisation in a developing country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Urban strategy",
                statement: "Planning + services + rural development.",
              },
            ],
            steps: [
              {
                reasoning: "Plan cities — zoning, services, infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Slum upgrading — improve existing settlements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Develop rural areas — reduce migration pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Green belts and sustainable design.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Planning + slum upgrading + rural development + sustainability.",
          },
        },
        {
          id: "cieids-u3-u-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Urban sprawl is prevented by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Green belts" },
              { id: "b", text: "More housing" },
              { id: "c", text: "More roads" },
              { id: "d", text: "More industry" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Green belt function",
                statement: "Prevents urban sprawl.",
              },
            ],
            steps: [
              {
                reasoning: "Green belts limit sprawl.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Green belts.",
          },
        },
        {
          id: "cieids-u3-u-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'sustainable city'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainable city",
                statement: "Environmentally and socially sustainable.",
              },
            ],
            steps: [
              {
                reasoning: "City designed for environmental sustainability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Also considers social equity and services.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Environmentally and socially sustainable city.",
          },
        },
        {
          id: "cieids-u3-u-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deforestation contributes to climate change by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reducing trees that absorb CO2" },
              { id: "b", text: "Increasing CO2 absorption" },
              { id: "c", text: "Reducing pollution" },
              { id: "d", text: "Improving air quality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deforestation effect",
                statement: "Reduces CO2 absorption.",
              },
            ],
            steps: [
              {
                reasoning: "Deforestation reduces CO2 absorption.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Reducing CO2 absorption.",
          },
        },
        {
          id: "cieids-u3-u-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'carbon footprint'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carbon footprint",
                statement: "Greenhouse gases produced by activity.",
              },
            ],
            steps: [
              {
                reasoning: "Amount of greenhouse gases from activity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Higher footprint = more climate impact.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Greenhouse gases produced by activity.",
          },
        },
        {
          id: "cieids-u3-u-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how urbanisation contributes to environmental degradation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urbanisation environment",
                statement: "Pollution, waste, resource use.",
              },
            ],
            steps: [
              {
                reasoning: "Increased pollution — air, water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More waste — disposal problems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Higher resource consumption — energy, water.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Pollution, waste, resource consumption.",
          },
        },
        {
          id: "cieids-u3-u-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate green belts as an urban planning tool.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Green belt evaluation",
                statement: "Limits sprawl but may push development elsewhere.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: prevents uncontrolled urban sprawl.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: preserves green space and environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: may push development to other areas.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: can increase housing costs inside belt.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Prevents sprawl but may push development elsewhere.",
          },
        },
        {
          id: "cieids-u3-u-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Climate change is primarily caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Greenhouse gas emissions" },
              { id: "b", text: "Solar activity" },
              { id: "c", text: "Volcanoes" },
              { id: "d", text: "Natural cycles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate change cause",
                statement: "Greenhouse gas emissions.",
              },
            ],
            steps: [
              {
                reasoning: "Climate change = greenhouse gases.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Greenhouse gas emissions.",
          },
        },
        {
          id: "cieids-u3-u-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'waste management'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Waste management",
                statement: "Collecting, treating, disposing of waste.",
              },
            ],
            steps: [
              {
                reasoning: "Collecting, treating and disposing of waste.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Important for health and environment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Collecting, treating, disposing of waste.",
          },
        },
        {
          id: "cieids-u3-u-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how renewable energy helps sustainability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Renewable energy",
                statement: "Replenishing sources reduce emissions.",
              },
            ],
            steps: [
              {
                reasoning: "Solar/wind/hydro replenish naturally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduce greenhouse gas emissions vs fossil fuels.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sustainable long-term energy source.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Replenishing sources, reduce emissions, sustainable.",
          },
        },
        {
          id: "cieids-u3-u-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate sustainable development as a concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainable development evaluation",
                statement: "Ideal but hard to implement.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: balances present needs with future.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: addresses environment + development together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: vague — hard to measure or implement.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: may conflict with immediate development needs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ideal concept but vague and hard to implement.",
          },
        },
        {
          id: "cieids-u3-u-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a renewable energy source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solar" },
              { id: "b", text: "Coal" },
              { id: "c", text: "Oil" },
              { id: "d", text: "Natural gas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Renewable sources",
                statement: "Solar, wind, hydro.",
              },
            ],
            steps: [
              {
                reasoning: "Solar = renewable.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Solar.",
          },
        },
        {
          id: "cieids-u3-u-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'slum upgrading'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slum upgrading",
                statement: "Improving existing informal settlements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Improving existing informal settlements with services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Better than demolishing — preserves community.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Improving informal settlements with services.",
          },
        },
        {
          id: "cieids-u3-u-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how decentralisation can reduce urbanisation pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decentralisation",
                statement: "Develop rural areas to reduce migration.",
              },
            ],
            steps: [
              {
                reasoning: "Develop rural areas — jobs, services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces push factors driving migration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More balanced regional development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rural development reduces migration pressure.",
          },
        },
        {
          id: "cieids-u3-u-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT an urban problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Abundant jobs" },
              { id: "b", text: "Slums" },
              { id: "c", text: "Pollution" },
              { id: "d", text: "Congestion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urban problems",
                statement: "Slums, pollution, congestion — not jobs.",
              },
            ],
            steps: [
              {
                reasoning: "Abundant jobs not a problem.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Abundant jobs.",
          },
        },
        {
          id: "cieids-u3-u-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does pollution affect urban residents?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pollution effects",
                statement: "Health problems, reduced quality of life.",
              },
            ],
            steps: [
              {
                reasoning: "Air/water pollution causes health problems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces quality of life in cities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Health problems, reduced quality of life.",
          },
        },
        {
          id: "cieids-u3-u-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate sustainable cities as a solution to urbanisation problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainable cities evaluation",
                statement: "Ideal but expensive to implement.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: environmentally friendly design.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: better quality of life for residents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: expensive to build/maintain.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: hard to retrofit existing cities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Better environment but expensive and hard to implement.",
          },
        },
        {
          id: "cieids-u3-u-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is waste management important in cities?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Waste management importance",
                statement: "Health and environment.",
              },
            ],
            steps: [
              {
                reasoning: "Prevents disease spread from waste.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Protects environment from pollution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Prevents disease, protects environment.",
          },
        },
      ],
    },
    {
      id: "cieids-u3-sustain",
      title: "Sustainability and environmental management",
      skill:
        "Evaluate sustainable development approaches and environmental management.",
      lesson: {
        sections: [
          {
            heading: "Sustainable development goals",
            body: "SDG 13 (Climate Action), SDG 7 (Affordable Clean Energy), SDG 12 (Responsible Consumption), SDG 15 (Life on Land), SDG 14 (Life Below Water). Sustainable development balances economic growth with environmental protection and social equity — the three pillars: **economic**, **social**, **environmental**.",
          },
          {
            heading: "Environmental management",
            body: "**Pollution control**: regulations on emissions, waste treatment. **Conservation**: protected areas, sustainable resource use. **Renewable energy**: solar, wind, hydro reduce fossil fuel dependence. **Recycling**: reduces waste and resource use. **Sustainable agriculture**: methods protecting soil and water. **Climate adaptation**: preparing for climate change impacts.",
          },
          {
            heading: "Challenges",
            body: "Developing countries face tension between development needs and environmental protection — they may need to exploit resources to grow. **Common pool resources** (fisheries, forests) risk overexploitation — 'tragedy of the commons'. Solutions: international agreements (Paris Agreement), carbon trading, debt-for-nature swaps, community management.",
          },
        ],
        keyFormulas: [
          {
            name: "Sustainability pillars",
            statement: "Economic · social · environmental",
          },
          {
            name: "Environmental strategies",
            statement:
              "Pollution control · conservation · renewable energy · recycling",
          },
          {
            name: "Tragedy of commons",
            statement: "Shared resources overexploited without management",
          },
        ],
        workedExample: {
          problem:
            "Why might developing countries struggle with sustainability?",
          solution:
            "Need economic growth but face pressure to exploit resources — tension between immediate development and long-term sustainability.",
        },
      },
      questions: [
        {
          id: "cieids-u3-sus-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sustainable development has three pillars:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economic, social and environmental" },
              { id: "b", text: "Economic only" },
              { id: "c", text: "Social only" },
              { id: "d", text: "Environmental only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainability pillars",
                statement: "Economic, social, environmental.",
              },
            ],
            steps: [
              {
                reasoning: "Three pillars.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Economic, social, environmental.",
          },
        },
        {
          id: "cieids-u3-sus-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "SDG 13 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Climate Action" },
              { id: "b", text: "Poverty" },
              { id: "c", text: "Education" },
              { id: "d", text: "Health" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SDG 13",
                statement: "Climate Action.",
              },
            ],
            steps: [
              {
                reasoning: "SDG 13 = climate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Climate Action.",
          },
        },
        {
          id: "cieids-u3-sus-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'tragedy of the commons' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shared resources being overexploited" },
              { id: "b", text: "Private property" },
              { id: "c", text: "Government regulation" },
              { id: "d", text: "Conservation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragedy of commons",
                statement: "Shared resources overexploited.",
              },
            ],
            steps: [
              {
                reasoning: "Commons = overexploited.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Shared resources overexploited.",
          },
        },
        {
          id: "cieids-u3-sus-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pollution control involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Regulations on emissions and waste treatment" },
              { id: "b", text: "More pollution" },
              { id: "c", text: "No regulations" },
              { id: "d", text: "Ignoring pollution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pollution control",
                statement: "Regulations on emissions/waste.",
              },
            ],
            steps: [
              {
                reasoning: "Pollution control = regulations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Regulations on emissions/waste.",
          },
        },
        {
          id: "cieids-u3-sus-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Conservation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protecting natural resources and areas" },
              { id: "b", text: "Using all resources" },
              { id: "c", text: "Polluting" },
              { id: "d", text: "Exploiting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conservation",
                statement: "Protecting natural resources.",
              },
            ],
            steps: [
              {
                reasoning: "Conservation = protection.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Protecting natural resources.",
          },
        },
        {
          id: "cieids-u3-sus-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Carbon trading allows countries to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Buy/sell emissions permits" },
              { id: "b", text: "Ignore emissions" },
              { id: "c", text: "Increase emissions" },
              { id: "d", text: "Stop all emissions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carbon trading",
                statement: "Buy/sell emissions permits.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon trading = emissions market.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Buy/sell emissions permits.",
          },
        },
        {
          id: "cieids-u3-sus-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Paris Agreement aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Limit global warming to below 2°C" },
              { id: "b", text: "Increase emissions" },
              { id: "c", text: "Stop all energy" },
              { id: "d", text: "Ignore climate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paris Agreement",
                statement: "Limit warming below 2°C.",
              },
            ],
            steps: [
              {
                reasoning: "Paris = limit warming.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Limit warming below 2°C.",
          },
        },
        {
          id: "cieids-u3-sus-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Common pool resources include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fisheries and forests" },
              { id: "b", text: "Private land" },
              { id: "c", text: "Buildings" },
              { id: "d", text: "Money" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Common pool resources",
                statement: "Fisheries, forests — shared resources.",
              },
            ],
            steps: [
              {
                reasoning: "Commons = fisheries/forests.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Fisheries and forests.",
          },
        },
        {
          id: "cieids-u3-sus-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do developing countries face sustainability challenges?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Tension between development needs and environmental protection",
              },
              { id: "b", text: "No resources" },
              { id: "c", text: "Too much regulation" },
              { id: "d", text: "Already sustainable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability challenge",
                statement: "Development vs environment tension.",
              },
            ],
            steps: [
              {
                reasoning: "Development vs environment tension.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Development vs environment tension.",
          },
        },
        {
          id: "cieids-u3-sus-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between the three pillars of sustainable development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability pillars",
                statement: "Economic, social, environmental.",
              },
            ],
            steps: [
              {
                reasoning: "Economic: growth, jobs, income.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Social: equity, health, education; Environmental: protection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Economic (growth), social (equity), environmental (protection).",
          },
        },
        {
          id: "cieids-u3-sus-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two environmental management strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Environmental strategies",
                statement: "Pollution control, conservation, renewable energy.",
              },
            ],
            steps: [
              {
                reasoning: "Pollution control and conservation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Renewable energy and recycling.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Pollution control, conservation, renewable energy, recycling.",
          },
        },
        {
          id: "cieids-u3-sus-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the tragedy of the commons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tragedy of commons",
                statement: "Shared resources overexploited.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shared resources (fisheries, forests) benefit all users.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each user exploits for own gain — no incentive to conserve.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Resource depleted for everyone — tragedy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shared resources overexploited — no individual incentive to conserve.",
          },
        },
        {
          id: "cieids-u3-sus-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A country wants to develop sustainably. Design a strategy addressing all three pillars.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sustainability strategy",
                statement: "Balance three pillars.",
              },
            ],
            steps: [
              {
                reasoning: "Economic: develop industries, create jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Social: ensure equity, health, education.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Environmental: renewable energy, conservation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Integration: policies addressing all three together.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Economic growth + social equity + environmental protection integrated.",
          },
        },
        {
          id: "cieids-u3-sus-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Paris Agreement is about:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Climate change" },
              { id: "b", text: "Trade" },
              { id: "c", text: "Aid" },
              { id: "d", text: "Population" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paris Agreement",
                statement: "Climate change agreement.",
              },
            ],
            steps: [
              {
                reasoning: "Paris = climate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Climate change.",
          },
        },
        {
          id: "cieids-u3-sus-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does recycling contribute to sustainability?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recycling benefits",
                statement: "Reduces waste and resource use.",
              },
            ],
            steps: [
              {
                reasoning: "Reduces waste sent to landfill.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces need for new raw materials.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reduces waste and resource use.",
          },
        },
        {
          id: "cieids-u3-sus-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "SDG 12 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Responsible Consumption and Production" },
              { id: "b", text: "Poverty" },
              { id: "c", text: "Education" },
              { id: "d", text: "Health" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SDG 12",
                statement: "Responsible Consumption and Production.",
              },
            ],
            steps: [
              {
                reasoning: "SDG 12 = consumption/production.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Responsible Consumption and Production.",
          },
        },
        {
          id: "cieids-u3-sus-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'climate adaptation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate adaptation",
                statement: "Preparing for climate change impacts.",
              },
            ],
            steps: [
              {
                reasoning: "Preparing for climate change impacts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different from mitigation (reducing emissions).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Preparing for climate change impacts.",
          },
        },
        {
          id: "cieids-u3-sus-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why common pool resources are difficult to manage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Commons management",
                statement: "No individual incentive to conserve.",
              },
            ],
            steps: [
              {
                reasoning: "Everyone benefits from use — no one owns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each user exploits for own gain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Resource depleted — tragedy of commons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "No ownership → no incentive to conserve → overexploitation.",
          },
        },
        {
          id: "cieids-u3-sus-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate carbon trading as a climate solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Carbon trading evaluation",
                statement: "Market-based but may not reduce emissions enough.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: market incentive to reduce emissions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: allows efficient allocation of reduction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: permits may be too cheap — insufficient incentive.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: doesn't guarantee absolute emission reductions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Market incentive but may not reduce emissions enough.",
          },
        },
        {
          id: "cieids-u3-sus-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "SDG 15 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Life on Land" },
              { id: "b", text: "Poverty" },
              { id: "c", text: "Education" },
              { id: "d", text: "Health" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SDG 15",
                statement: "Life on Land.",
              },
            ],
            steps: [
              {
                reasoning: "SDG 15 = land.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Life on Land.",
          },
        },
        {
          id: "cieids-u3-sus-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'mitigation' in climate change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitigation",
                statement: "Reducing greenhouse gas emissions.",
              },
            ],
            steps: [
              {
                reasoning: "Reducing greenhouse gas emissions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different from adaptation (preparing for impacts).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reducing greenhouse gas emissions.",
          },
        },
        {
          id: "cieids-u3-sus-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why sustainable agriculture is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainable agriculture",
                statement: "Protects soil/water for future.",
              },
            ],
            steps: [
              {
                reasoning: "Protects soil and water resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Avoids pollution and soil depletion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ensures food production for future generations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Protects resources for future food production.",
          },
        },
        {
          id: "cieids-u3-sus-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a community-based solution to manage a common pool resource (e.g. fishery).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Commons management",
                statement: "Community rules + enforcement.",
              },
            ],
            steps: [
              {
                reasoning: "Establish community rules — catch limits, seasons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Community monitoring and enforcement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sustainable practices — quotas, protected areas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shared benefits — income from sustainable fishing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Community rules + monitoring + sustainable practices + shared benefits.",
          },
        },
        {
          id: "cieids-u3-sus-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a sustainability pillar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Political" },
              { id: "b", text: "Economic" },
              { id: "c", text: "Social" },
              { id: "d", text: "Environmental" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability pillars",
                statement: "Economic, social, environmental.",
              },
            ],
            steps: [
              {
                reasoning: "Political not a pillar.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Political.",
          },
        },
        {
          id: "cieids-u3-sus-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'debt-for-nature swap'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debt-for-nature swap",
                statement: "Debt relief in exchange for conservation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Debt relief in exchange for conservation commitments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Helps both debt and environment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Debt relief for conservation commitments.",
          },
        },
        {
          id: "cieids-u3-sus-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how developing countries can balance development and sustainability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development-sustainability balance",
                statement: "Green growth, appropriate technology.",
              },
            ],
            steps: [
              {
                reasoning: "Use renewable energy and clean technologies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sustainable agriculture and resource management.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "International support — climate finance, technology transfer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Clean tech + sustainable agriculture + international support.",
          },
        },
        {
          id: "cieids-u3-sus-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "SDG 14 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Life Below Water" },
              { id: "b", text: "Poverty" },
              { id: "c", text: "Education" },
              { id: "d", text: "Health" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SDG 14",
                statement: "Life Below Water.",
              },
            ],
            steps: [
              {
                reasoning: "SDG 14 = oceans.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Life Below Water.",
          },
        },
        {
          id: "cieids-u3-sus-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'green growth'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Green growth",
                statement: "Economic growth with environmental sustainability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Economic growth that is environmentally sustainable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Balances development with environmental protection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Growth with environmental sustainability.",
          },
        },
        {
          id: "cieids-u3-sus-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the SDGs as a framework for sustainable development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SDG evaluation",
                statement: "Comprehensive but ambitious/hard to achieve.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: comprehensive — covers all development areas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: integrates environment + development + equity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: very ambitious — hard to achieve by 2030.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: depends on political will and funding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Comprehensive but ambitious — depends on political will/funding.",
          },
        },
        {
          id: "cieids-u3-sus-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is international cooperation needed for sustainability?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "International cooperation",
                statement: "Environment/climate are global issues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Environment/climate are global — need collective action.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Individual countries can't solve alone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Global issues need collective action.",
          },
        },
      ],
    },
  ],
};
