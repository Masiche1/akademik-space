import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cieigeo-u6-lesson-6-3",
  code: "6-3",
  title: "Urbanisation, Megacities and Urban Challenges",
  goal: "I CAN analyse urban growth patterns, problems and management strategies.",
  standards: [
    "Cambridge IGCSE Geography 0460",
    "Unit 6: human geography depth",
  ],
  vocabulary: [
    {
      term: "Urbanisation",
      definition: "Increasing proportion living in urban areas.",
    },
    { term: "Megacity", definition: "City with 10+ million people." },
    { term: "Slum", definition: "Informal settlement with poor conditions." },
    {
      term: "Counter-urbanisation",
      definition: "Movement from cities to countryside.",
    },
    { term: "Urban sprawl", definition: "Unplanned city expansion." },
    { term: "Green belt", definition: "Protected land around cities." },
  ],
  concepts: [
    {
      id: "cieigeo-u6l3-c1-growth",
      title: "Urban growth patterns and causes",
      skill: "Explain urbanisation trends and their causes.",
      lesson: {
        sections: [
          {
            heading: "Urbanisation trends",
            body: "Majority of world now urban (>55%) — fastest growth in LICs (Africa, Asia). **Causes**: rural-urban migration (better jobs/services), natural increase (higher birth rates in cities), industrialisation (factories attract workers). Megacities growing fastest — Tokyo, Delhi, Lagos, Dhaka. Some HICs show counter-urbanisation (people moving to suburbs/countryside).",
          },
          {
            heading: "Urban problems",
            body: "**LIC megacities**: slums/shantytowns (60%+ in some), inadequate housing, water/sanitation shortages, traffic congestion, pollution, unemployment. **HIC cities**: suburban sprawl, traffic, housing affordability, inner-city deprivation. Rapid growth outpaces infrastructure — planning can't keep up.",
          },
        ],
        keyFormulas: [
          { name: "Megacity", statement: "10m+ people" },
          { name: "Urbanisation", statement: "Rural→urban shift" },
          { name: "Slum", statement: "Informal housing" },
        ],
        workedExample: {
          problem: "Why are most megacities now in LICs?",
          solution:
            "Rapid urbanisation from rural-urban migration + high birth rates — cities grow faster than infrastructure; Dhaka, Lagos, Kinshasa growing fastest; HIC urbanisation happened earlier with more resources.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u6l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'megacity' has population of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 million or more" },
              { id: "b", text: "1 million" },
              { id: "c", text: "500,000" },
              { id: "d", text: "100 million" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "Megacity", statement: "10m+" }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 10m+",
            commonErrors: ["Wrong threshold."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'counter-urbanisation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counter-urb",
                statement: "Reverse migration.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Movement of people from urban areas to countryside/suburbs — seen in some HICs (better transport, telecommuting, cheaper housing); reverses urbanisation trend.",
            commonErrors: ["Urbanisation."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two causes of rapid urbanisation in LICs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Urbanisation causes",
                statement: "Push+pull.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. rural-urban migration (people leave countryside for jobs/services) and high birth rates in cities (natural increase) — cities grow faster than infrastructure can cope.",
            commonErrors: ["No causes."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why slums develop in LIC megacities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Slums",
                statement: "Informal housing.",
              },
            ],
            steps: [
              { reasoning: "Cause.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rapid urbanisation + inadequate affordable housing → people build informal settlements on marginal land; no planning permission, poor materials; lack water/sanitation, overcrowding, disease risk.",
            commonErrors: ["Planned housing."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether urbanisation is generally positive or negative for development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urbanisation eval",
                statement: "Mixed.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cities concentrate jobs, services, innovation — economies of scale; but if unmanaged: slums, pollution, inequality; urbanisation itself neutral — outcomes depend on planning, investment, governance.",
            commonErrors: ["Always good/bad."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'slum'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Slum", statement: "Informal." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Informal settlement with poor living conditions — overcrowded, inadequate housing, limited water/sanitation, insecure tenure; often on marginal land (slopes, floodplains, waste tips).",
            commonErrors: ["Formal housing."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Most megacities are now found in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Australia" },
              { id: "b", text: "Only USA" },
              { id: "c", text: "LICs (Africa, Asia)" },
              { id: "d", text: "Only Europe" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Megacity location", statement: "LICs." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** LICs",
            commonErrors: ["HICs."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two urban problems in HIC cities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "HIC urban problems",
                statement: "Different.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. suburban sprawl (unplanned expansion, car dependency) and housing affordability crisis (prices outpacing wages) — also traffic congestion, inner-city deprivation.",
            commonErrors: ["Same as LICs."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'urban sprawl' and its problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sprawl",
                statement: "Unplanned growth.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Problems.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Unplanned low-density expansion into countryside — consumes farmland/green space, increases car dependency/traffic, infrastructure costs rise; seen in US suburbs, some European cities.",
            commonErrors: ["Planned growth."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why some HICs experience counter-urbanisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counter-urb",
                statement: "Reverse flow.",
              },
            ],
            steps: [
              { reasoning: "Causes.", marks: 1, markCode: "M" },
              { reasoning: "Factors.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Better transport/telecommuting enables remote work; cheaper rural housing; desire for space/nature; urban costs (housing, crime) push people out — seen in UK, France, US; doesn't mean rural revival, just slower urban growth.",
            commonErrors: ["Random movement."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Urbanisation' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decline of rural populations only" },
              { id: "b", text: "Urban planning policy" },
              {
                id: "c",
                text: "Increasing proportion of people living in urban areas",
              },
              { id: "d", text: "Construction of new cities" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Urbanisation",
                statement: "Rural-to-urban shift.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Increasing urban share",
            commonErrors: ["Building cities."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two consequences of urban growth outpacing infrastructure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Growth vs infrastructure",
                statement: "Service gaps.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. overcrowded informal housing/slums and shortages of water, sanitation and electricity — also traffic congestion, pollution, unemployment as services can't keep pace with population growth.",
            commonErrors: ["No consequences."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain push and pull factors in rural-urban migration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Push-pull migration",
                statement: "Rural push, urban pull.",
              },
            ],
            steps: [
              { reasoning: "Push factors.", marks: 1, markCode: "M" },
              { reasoning: "Pull factors.", marks: 1, markCode: "M" },
              { reasoning: "Interaction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Push: land pressure, drought, few rural jobs/services drive people out. Pull: urban jobs, better wages, education and healthcare attract migrants — combination drives rapid urbanisation in LICs.",
            commonErrors: ["Only one direction."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether rapid urban growth in LICs can be managed sustainably.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Managing growth",
                statement: "Capacity vs pace.",
              },
            ],
            steps: [
              { reasoning: "Challenges.", marks: 1, markCode: "M" },
              { reasoning: "Strategies.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth far outpaces planning capacity, funding and governance — informal settlements bypass regulation. Possible via decentralisation, slum upgrading, transport investment and community participation, but requires political will and resources most LIC cities lack.",
            commonErrors: ["Easy to manage."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A typical feature of a slum is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Poor access to clean water and sanitation",
              },
              { id: "b", text: "Planned roads and services" },
              { id: "c", text: "Modern permanent housing" },
              { id: "d", text: "Secure legal land titles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Slum conditions",
                statement: "Inadequate services.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Poor water/sanitation",
            commonErrors: ["Planned services."],
          },
        },
        {
          id: "cieigeo-q-u6l3c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the contrast between urban problems in LICs and HICs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "LIC vs HIC cities",
                statement: "Different problem sets.",
              },
            ],
            steps: [
              { reasoning: "LIC problems.", marks: 1, markCode: "M" },
              { reasoning: "HIC problems.", marks: 1, markCode: "M" },
              { reasoning: "Reasons for difference.", marks: 1, markCode: "A" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "LICs: slums, water/sanitation shortages, unemployment — growth outpaces resources. HICs: suburban sprawl, housing affordability, inner-city deprivation, congestion — wealth but inequality and car dependency. Difference reflects stage of urbanisation and resource levels.",
            commonErrors: ["Same problems."],
          },
        },
      ],
    },
    {
      id: "cieigeo-u6l3-c2-management",
      title: "Urban management strategies",
      skill: "Evaluate strategies for managing urban growth.",
      lesson: {
        sections: [
          {
            heading: "Planning and infrastructure",
            body: "**Master plans**: zoning, transport, services — prevents chaos but rigid. **Public transport**: reduces congestion/emissions (BRT, metro). **Affordable housing**: prevents slum growth. **Green belts**: protect countryside around cities — but can inflate housing costs. **Smart cities**: technology for efficiency — but excludes poor without digital access.",
          },
          {
            heading: "Slum upgrading and sustainability",
            body: "**Slum upgrading**: improve existing settlements (water, sanitation, tenure) rather than demolish — cheaper, preserves communities. **Sustainable cities**: green spaces, renewable energy, waste management, walkability — reduce environmental impact. **Community participation**: residents involved in planning — better outcomes but slower. Challenges: funding, corruption, rapid growth outpacing plans.",
          },
        ],
        keyFormulas: [
          { name: "Slum upgrading", statement: "Improve not demolish" },
          { name: "Green belt", statement: "Protected land" },
          { name: "Sustainable city", statement: "Low impact" },
        ],
        workedExample: {
          problem: "Why is slum upgrading often better than demolition?",
          solution:
            "Cheaper (improve existing vs rebuild), preserves community networks, less displacement; demolition often just moves problem elsewhere — upgrading addresses root causes gradually.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u6l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Slum upgrading' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evicting residents" },
              { id: "b", text: "Demolishing slums" },
              { id: "c", text: "Building new cities" },
              { id: "d", text: "Improving existing informal settlements" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Upgrading", statement: "Improve." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Improve",
            commonErrors: ["Demolition."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'green belt'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Green belt",
                statement: "Protected land.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Protected land around urban areas preventing sprawl — preserves countryside, forces development inward; but can inflate housing costs within belt.",
            commonErrors: ["Forest only."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of public transport in cities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Public transport",
                statement: "Benefits.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. reduces traffic congestion and air pollution (fewer cars) — also cheaper for users, more space-efficient than cars, can reduce social inequality (access for poor).",
            commonErrors: ["More cars."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate slum upgrading versus demolition as urban strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Upgrade vs demolish",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              { reasoning: "Upgrading.", marks: 1, markCode: "M" },
              { reasoning: "Demolition.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Upgrading: cheaper, preserves community, less displacement — but doesn't solve root causes (poverty, planning). Demolition: clears land but expensive, displaces residents, problem often relocates — upgrading generally more humane and effective.",
            commonErrors: ["Demolition better."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the challenges of planning for rapidly growing cities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Planning challenges",
                statement: "Pace vs capacity.",
              },
            ],
            steps: [
              { reasoning: "Challenge 1.", marks: 1, markCode: "M" },
              { reasoning: "Challenge 2.", marks: 1, markCode: "M" },
              { reasoning: "Challenge 3.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth outpaces planning capacity — informal settlements bypass regulations; funding gaps; political will lacking; corruption; planning needs to be flexible/adaptive, community-participatory, realistic about growth rates.",
            commonErrors: ["Easy to plan."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'smart city'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Smart city", statement: "Tech." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "City using technology/IoT for efficiency — smart traffic lights, sensors, data-driven services; improves efficiency but risks digital exclusion of poor residents without access.",
            commonErrors: ["Just new buildings."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which strategy improves existing slums rather than demolishing them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gentrification" },
              { id: "b", text: "Slum upgrading" },
              { id: "c", text: "Green belt" },
              { id: "d", text: "Eviction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Upgrading", statement: "Improve." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Slum upgrading",
            commonErrors: ["Demolition."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two challenges of 'smart cities'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Smart city issues",
                statement: "Exclusion.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. digital divide (poor without smartphones/internet excluded from services) and privacy concerns (mass surveillance via sensors) — technology benefits may bypass most vulnerable.",
            commonErrors: ["No issues."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'community participation' improves urban planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Participation",
                statement: "Local knowledge.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Residents know local problems/needs better than planners — participation produces more appropriate, accepted solutions; e.g. community-designed housing, local knowledge in slum upgrading; slower but better outcomes.",
            commonErrors: ["Top-down only."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the sustainability of high-density versus low-density urban development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Density", statement: "Trade-offs." },
            ],
            steps: [
              { reasoning: "High density.", marks: 1, markCode: "M" },
              { reasoning: "Low density.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "High density: efficient land use, public transport viable, lower infrastructure costs — but congestion, less green space. Low density: space, privacy — but car dependency, sprawl, higher costs; compact cities generally more sustainable if well-planned.",
            commonErrors: ["One better."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'master plan' for a city typically includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only building height limits" },
              {
                id: "b",
                text: "Zoning, transport routes and service provision",
              },
              { id: "c", text: "No land-use rules" },
              { id: "d", text: "Military defence strategy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Master plan",
                statement: "Comprehensive land-use framework.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Zoning+transport+services",
            commonErrors: ["Only heights."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two features of a sustainable city.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Sustainable city",
                statement: "Low environmental impact.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. green spaces and renewable energy reduce emissions, and efficient public transport/walkability cut car dependency — also waste recycling, water conservation, compact development.",
            commonErrors: ["No features."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how green belts can increase housing costs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Green belt trade-off",
                statement: "Supply restriction.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Green belts restrict land supply around a city — demand concentrates inside the belt → house prices rise → affordability crisis; unintended consequence where conservation policy worsens housing inequality (e.g. London).",
            commonErrors: ["No effect on prices."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether 'smart city' technology reduces urban inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Smart cities & inequality",
                statement: "Access divides.",
              },
            ],
            steps: [
              { reasoning: "Potential benefits.", marks: 1, markCode: "M" },
              { reasoning: "Risks.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Can improve services efficiently (traffic, waste, safety) benefiting all — but the digital divide means poor residents without smartphones/data are excluded from app-based services; surveillance may target marginalised groups; reduces inequality only if paired with digital inclusion.",
            commonErrors: ["Automatically equalising."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a goal of sustainable urban development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expanding into protected green belts" },
              {
                id: "b",
                text: "Reducing environmental impact through green design",
              },
              { id: "c", text: "Maximising car use" },
              { id: "d", text: "Ignoring waste management" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sustainable urban dev",
                statement: "Low impact design.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Green design",
            commonErrors: ["Car dependency."],
          },
        },
        {
          id: "cieigeo-q-u6l3c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why funding and corruption hinder urban management in LICs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Governance barriers",
                statement: "Money + integrity.",
              },
            ],
            steps: [
              { reasoning: "Funding gap.", marks: 1, markCode: "M" },
              { reasoning: "Corruption mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rapid growth creates huge infrastructure demand but municipal budgets are tiny — services underfunded. Corruption diverts budgets (bribes for contracts, land grabs) → substandard infrastructure; weak accountability → planning captured by elites; needs transparent finance, community oversight, donor support.",
            commonErrors: ["Planning alone suffices."],
          },
        },
      ],
    },
  ],
};
