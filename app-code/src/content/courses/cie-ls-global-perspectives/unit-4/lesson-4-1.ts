import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cielsgp-u4-lesson-4-1",
  code: "4-1",
  title: "Climate Action: Researching Environmental Global Issues",
  goal: "I CAN research climate issues, analyse causes and evaluate solutions.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129",
    "Unit 4: applied global issues",
  ],
  vocabulary: [
    {
      term: "Climate change",
      definition: "Long-term changes in global weather patterns.",
    },
    {
      term: "Carbon footprint",
      definition: "Amount of greenhouse gases produced by activity.",
    },
    {
      term: "Renewable energy",
      definition: "Energy from natural sources (solar, wind).",
    },
    {
      term: "Sustainability",
      definition: "Meeting present needs without harming future.",
    },
    { term: "Mitigation", definition: "Reducing causes of climate change." },
    {
      term: "Adaptation",
      definition: "Adjusting to cope with climate effects.",
    },
  ],
  concepts: [
    {
      id: "cielsgp-u4l1-c1-causes",
      title: "Causes and effects of climate change",
      skill: "Explain the causes and effects of climate change with evidence.",
      lesson: {
        sections: [
          {
            heading: "Causes",
            body: "**Greenhouse gases** (CO2, methane) trap heat — burning fossil fuels (coal, oil, gas) releases CO2. **Deforestation** removes trees that absorb CO2. **Agriculture** produces methane (cows) and nitrous oxide (fertilisers). Human activities are main cause since Industrial Revolution.",
          },
          {
            heading: "Effects",
            body: "**Rising temperatures**: heatwaves, melting ice, sea level rise. **Extreme weather**: stronger storms, droughts, floods. **Ecosystem damage**: species extinction, coral bleaching. **Human impacts**: food insecurity, displacement, health risks — effects hit poorest countries hardest despite lowest emissions.",
          },
        ],
        keyFormulas: [
          { name: "Greenhouse effect", statement: "Gases trap heat" },
          { name: "Carbon footprint", statement: "Emissions measure" },
          { name: "Mitigation vs adaptation", statement: "Reduce vs cope" },
        ],
        workedExample: {
          problem: "Why do poorer countries suffer more from climate change?",
          solution:
            "Less money for adaptation (sea walls, drought-resistant crops), rely on climate-sensitive agriculture, fewer resources for disaster response — despite contributing least to emissions.",
        },
      },
      questions: [
        {
          id: "cielsgp-q-u4l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The main human cause of climate change is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Burning fossil fuels" },
              { id: "b", text: "Using bicycles" },
              { id: "c", text: "Planting trees" },
              { id: "d", text: "Recycling" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Fossil fuels", statement: "CO2 source." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Fossil fuels",
            commonErrors: ["Natural causes only."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'carbon footprint'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carbon footprint",
                statement: "Emissions.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Total greenhouse gas emissions caused by a person, organisation or product — e.g. driving car, flying, eating meat; measured in CO2 equivalents.",
            commonErrors: ["Weight measure."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two effects of climate change on human communities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Human effects", statement: "Impacts." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. food insecurity (crop failures from drought) and displacement (sea level rise forcing people to move) — also health risks from heatwaves and extreme weather.",
            commonErrors: ["Only environmental."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish 'mitigation' from 'adaptation' in climate action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Mitigation vs adaptation",
                statement: "Reduce vs cope.",
              },
            ],
            steps: [
              { reasoning: "Mitigation.", marks: 1, markCode: "M" },
              { reasoning: "Adaptation.", marks: 1, markCode: "M" },
              { reasoning: "Example each.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "Mitigation: reduce causes — renewable energy, less fossil fuels, reforestation. Adaptation: cope with effects — sea walls, drought-resistant crops, early warning systems; both needed.",
            commonErrors: ["Same thing."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how deforestation contributes to climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deforestation",
                statement: "CO2 release.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Double impact.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Trees absorb CO2 — cutting them removes absorbers AND releases stored carbon when burned/decayed; double impact on greenhouse gas levels; also reduces biodiversity.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'renewable energy'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Renewable",
                statement: "Natural sources.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Energy from natural sources that replenish — solar, wind, hydro, geothermal, biomass; alternative to fossil fuels, produces little/no CO2.",
            commonErrors: ["Coal."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a renewable energy source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oil" },
              { id: "b", text: "Solar power" },
              { id: "c", text: "Coal" },
              { id: "d", text: "Natural gas" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Solar", statement: "Renewable." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Solar",
            commonErrors: ["Fossil fuel."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why climate change is a 'global' issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Global issue",
                statement: "Transboundary.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. emissions anywhere affect atmosphere everywhere (transboundary), and effects hit all countries (sea level, extreme weather) — requires international cooperation to solve.",
            commonErrors: ["Local only."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'greenhouse effect' simply.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greenhouse effect",
                statement: "Heat trapping.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Problem.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sunlight warms Earth, heat radiates back — greenhouse gases (CO2, methane) trap some heat like blanket; natural effect keeps Earth warm, but extra gases from human activity cause excessive warming.",
            commonErrors: ["Ozone hole."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate one solution to climate change (renewable energy, reforestation, or carbon capture).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Solution eval",
                statement: "Pros+cons.",
              },
            ],
            steps: [
              { reasoning: "Solution chosen.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. Renewable energy: reduces emissions, sustainable — but intermittent (weather-dependent), storage challenges, transition costs; effective but needs complementary solutions (efficiency, policy).",
            commonErrors: ["Perfect solution."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which greenhouse gas is mainly released when fossil fuels are burned?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helium" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Carbon dioxide" },
              { id: "d", text: "Nitrogen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "CO2", statement: "Main GHG." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Carbon dioxide",
            commonErrors: ["Oxygen confused with CO2."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country emits 500 tonnes of CO2 per year. Newly planted trees absorb 2 tonnes of CO2 each per year, and 200 trees are planted. What is the net CO2 added to the atmosphere per year (in tonnes)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "tonnes" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Net emissions",
                statement: "Emissions minus absorption.",
              },
            ],
            steps: [
              {
                reasoning:
                  "200 trees absorb 2 x 200 = 400 tonnes; 500 - 400 = 100 tonnes net.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "100 tonnes",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a survey of 80 households, 36 had reliable home internet. What percentage of households lacked reliable home internet?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 55, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage",
                statement: "Lacking = total minus having.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(80 - 36) / 80 x 100 = 44/80 x 100 = 55%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "55%",
            commonErrors: ["Reporting the 45% with access."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an effect of climate change on ecosystems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More reliable rainfall" },
              { id: "b", text: "Increased biodiversity" },
              { id: "c", text: "Species extinction and coral bleaching" },
              { id: "d", text: "Colder oceans" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Ecosystem effects", statement: "Damage." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Species extinction and coral bleaching",
            commonErrors: ["Benefits claimed."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Trees help reduce climate change mainly because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce methane" },
              { id: "b", text: "Create fossil fuels" },
              { id: "c", text: "Block all sunlight" },
              { id: "d", text: "Absorb CO2 as they grow" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Trees", statement: "CO2 absorbers." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Absorb CO2",
            commonErrors: ["Wrong mechanism."],
          },
        },
        {
          id: "cielsgp-q-u4l1c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why the effects of climate change hit poorer countries harder than richer countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unequal impacts",
                statement: "Capacity gap.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poorest countries contribute least to emissions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Less money for adaptation (sea walls, resilient crops).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dependence on climate-sensitive agriculture.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weaker disaster response and health systems.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Defensible conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Effects are felt most where capacity to adapt is lowest — poorest countries emit least yet suffer most (food insecurity, displacement); inequality of adaptive capacity, not just exposure, drives the unfair burden.",
            commonErrors: ["Equal impact on all."],
          },
        },
      ],
    },
    {
      id: "cielsgp-u4l1-c2-solutions",
      title: "Climate solutions and global cooperation",
      skill: "Evaluate climate solutions and international agreements.",
      lesson: {
        sections: [
          {
            heading: "Individual and community actions",
            body: "Reduce energy use (LEDs, efficient appliances), transport (public transport, cycling, electric vehicles), diet (less meat), consumption (reuse, repair). Community: tree planting, local renewable projects, advocacy. Individual actions help but insufficient alone — need systemic change.",
          },
          {
            heading: "International cooperation",
            body: "**Paris Agreement** (2015): countries commit to limit warming to well below 2°C. **Kyoto Protocol** (1997): earlier agreement, binding targets for developed countries. Challenges: developed vs developing country responsibilities ('common but differentiated'), enforcement difficult, some countries withdraw. Success requires global coordination.",
          },
        ],
        keyFormulas: [
          { name: "Paris Agreement", statement: "Below 2°C target" },
          { name: "Kyoto", statement: "1997 protocol" },
          {
            name: "Common but differentiated",
            statement: "Shared responsibility",
          },
        ],
        workedExample: {
          problem:
            "Why is international cooperation needed for climate action?",
          solution:
            "Emissions are global — one country's cuts offset by another's increases; atmosphere shared; solutions (technology, funding) require coordination; Paris Agreement shows collective commitment needed.",
        },
      },
      questions: [
        {
          id: "cielsgp-q-u4l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Paris Agreement aims to limit warming to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No target" },
              { id: "b", text: "5°C" },
              { id: "c", text: "Well below 2°C" },
              { id: "d", text: "10°C" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Paris target", statement: "Below 2°C." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Below 2°C",
            commonErrors: ["Higher target."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'common but differentiated responsibilities' mean?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CBDR",
                statement: "Shared but unequal.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Application.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "All countries share responsibility for climate action, but developed countries (historically highest emitters) have greater obligation — reflects historical contribution and capacity to act.",
            commonErrors: ["Equal responsibility."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two individual actions that reduce carbon footprint.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Individual actions",
                statement: "Reduce emissions.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. using public transport instead of driving (less fuel), and reducing meat consumption (livestock high emissions) — also energy-efficient appliances, less air travel, recycling.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate the Paris Agreement's effectiveness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paris eval",
                statement: "Progress vs limits.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "First universal agreement, global commitment, transparent reporting — but voluntary targets, some withdrawals (US), insufficient ambition; necessary framework but implementation gap remains.",
            commonErrors: ["Complete failure/success."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why climate change is difficult to solve politically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Political difficulty",
                statement: "Short vs long term.",
              },
            ],
            steps: [
              { reasoning: "Time mismatch.", marks: 1, markCode: "M" },
              { reasoning: "Cost distribution.", marks: 1, markCode: "M" },
              { reasoning: "Free rider.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Benefits long-term, costs immediate — politicians face short election cycles; costs fall on some industries/countries, benefits shared globally ('free rider' problem); needs long-term policy commitment.",
            commonErrors: ["Easy problem."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'free rider problem' in climate action?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free rider",
                statement: "Benefit without cost.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Country benefits from others' emissions cuts without reducing own — discourages action; collective action problem; international agreements struggle to enforce participation.",
            commonErrors: ["No cost sharing."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Kyoto Protocol was signed in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2020" },
              { id: "b", text: "2015" },
              { id: "c", text: "1997" },
              { id: "d", text: "2001" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Kyoto year", statement: "1997." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 1997",
            commonErrors: ["Paris year."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two barriers to adopting renewable energy in developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Renewable barriers",
                statement: "Cost + infrastructure.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. high upfront costs (poor countries can't afford solar/wind infrastructure) and lack of technical expertise/grid infrastructure — also fossil fuel subsidies, unreliable financing.",
            commonErrors: ["No barriers."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'climate justice' is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate justice",
                statement: "Fairness.",
              },
            ],
            steps: [
              { reasoning: "Inequality.", marks: 1, markCode: "M" },
              { reasoning: "Responsibility.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Poorest countries contribute least emissions but suffer most effects — unfair; those who caused problem should help those affected; solutions must consider equity, not just efficiency.",
            commonErrors: ["Equal impact."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether individual action or government policy is more effective for climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Individual vs policy",
                statement: "Both needed.",
              },
            ],
            steps: [
              { reasoning: "Individual role.", marks: 1, markCode: "M" },
              { reasoning: "Policy role.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Individuals: reduce emissions, create demand, vote — but limited scale, rebound effects. Government: carbon taxes, renewable subsidies, regulations — system-wide impact; best results combine both — policy enables individual choices.",
            commonErrors: ["One sufficient."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Kyoto Protocol (1997) committed developed countries to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Voluntary goals only" },
              { id: "b", text: "Increase emissions" },
              { id: "c", text: "Binding emissions reduction targets" },
              { id: "d", text: "No action at all" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Kyoto", statement: "Binding targets." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Binding targets",
            commonErrors: ["Voluntary like Paris."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Paris Agreement was adopted in 2015 and the Kyoto Protocol in 1997. How many years apart were they?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 18 }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Year gap", statement: "Subtract years." },
            ],
            steps: [
              { reasoning: "2015 - 1997 = 18 years.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18",
            commonErrors: ["Wrong subtraction."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country's CO2 emissions fell from 200 million tonnes to 150 million tonnes after a policy change. What was the percentage reduction?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage reduction",
                statement: "Change over original.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reduction = 50 million tonnes; 50/200 x 100 = 25%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
            commonErrors: ["Using 150 as denominator."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of climate 'adaptation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reducing car use" },
              { id: "b", text: "Planting trees to absorb CO2" },
              { id: "c", text: "Building sea walls against rising seas" },
              { id: "d", text: "Switching from coal to solar power" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Adaptation", statement: "Cope with effects." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sea walls",
            commonErrors: ["Mitigation confused."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which agreement aims to limit global warming to well below 2°C?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kyoto Protocol" },
              { id: "b", text: "World Trade Organization" },
              { id: "c", text: "Montreal Protocol" },
              { id: "d", text: "Paris Agreement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Paris Agreement",
                statement: "Below 2°C target.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Paris Agreement",
            commonErrors: ["Kyoto confused."],
          },
        },
        {
          id: "cielsgp-q-u4l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the role of developing countries in international climate agreements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Developing role",
                statement: "Equity + ambition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Developing countries now major emitters (e.g. China, India).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CBDR recognises historical responsibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Tension: growth needs vs emissions cuts, limited finance.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both sides.", marks: 1, markCode: "R" },
              {
                reasoning: "Defensible conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Developing countries contribute a growing share of emissions yet have least capacity to cut — CBDR recognises this; agreements must balance equity with ambition; their participation is essential but constrained by development needs and climate finance.",
            commonErrors: ["No role for developing countries."],
          },
        },
      ],
    },
  ],
};
