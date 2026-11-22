import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "oleg-u4-lesson-4-2",
  code: "4-2",
  title: "Resource Provision",
  goal: "I CAN describe how countries manage water, energy and mineral resources.",
  standards: ["2217: Resource provision"],
  vocabulary: [
    {
      term: "Renewable resource",
      definition: "Resource replaced naturally (solar, wind, water).",
    },
    {
      term: "Non-renewable resource",
      definition: "Resource that runs out (fossil fuels, minerals).",
    },
    {
      term: "Sustainable development",
      definition: "Meeting present needs without harming future generations.",
    },
    {
      term: "Water scarcity",
      definition: "Insufficient freshwater for needs.",
    },
    { term: "Aquifer", definition: "Underground layer storing groundwater." },
    {
      term: "Energy mix",
      definition: "Combination of energy sources used by a country.",
    },
  ],
  concepts: [
    {
      id: "oleg-u4-water-energy",
      title: "Water and energy resources",
      skill: "Describe water and energy resource management.",
      lesson: {
        sections: [
          {
            heading: "Water resources",
            body: "Freshwater from rivers, lakes, groundwater (aquifers). Water scarcity in dry regions and where demand exceeds supply. Management: reservoirs, dams, desalination, water conservation, transboundary agreements. Overuse depletes aquifers (e.g. North China Plain).",
          },
          {
            heading: "Energy resources",
            body: "Fossil fuels (coal, oil, gas) — non-renewable, polluting. Nuclear — low carbon but waste risks. Renewables: hydroelectric, solar, wind, geothermal, biomass — sustainable but intermittent/location-dependent. Countries shift mix toward renewables.",
          },
          {
            heading: "Management strategies",
            body: "Sustainable development balances use and conservation. OPEC controls oil supply/prices. International agreements manage shared resources (rivers, oceans). Energy security drives national policies.",
          },
        ],
        keyFormulas: [
          {
            name: "Resources",
            statement:
              "Water: scarcity+dams+conservation; Energy: fossil→renewables shift.",
          },
        ],
        workedExample: {
          problem: "Why is water scarcity increasing?",
          solution:
            "Population growth, climate change reducing rainfall, pollution, and overuse of aquifers.",
        },
      },
      questions: [
        {
          id: "oleg-u4-we-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a renewable energy source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coal" },
              { id: "b", text: "Natural gas" },
              { id: "c", text: "Oil" },
              { id: "d", text: "Solar" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Renewable",
                statement: "Replaced naturally.",
              },
            ],
            steps: [
              { reasoning: "Solar = renewable.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Solar",
            commonErrors: ["Choosing fossil fuel."],
          },
        },
        {
          id: "oleg-u4-we-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an aquifer and why does it matter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aquifer",
                statement: "Underground water store.",
              },
            ],
            steps: [
              { reasoning: "Stores groundwater.", marks: 1, markCode: "AO1" },
              { reasoning: "Overuse depletes it.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Underground water store — over-pumping depletes it, causing scarcity.",
            commonErrors: ["Saying it's a lake."],
          },
        },
        {
          id: "oleg-u4-we-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare fossil fuels and renewable energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy comparison",
                statement: "Polluting/non-renewable vs clean/renewable.",
              },
            ],
            steps: [
              {
                reasoning: "Fossil: non-renewable, polluting.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Renewable: sustainable, intermittent.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Trade-offs clear.", marks: 1, markCode: "AO2" },
              { reasoning: "Balanced.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Fossil fuels pollute and run out; renewables are clean but intermittent.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "oleg-u4-we-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Water and energy.",
          parts: [
            { label: "a", prompt: "Water scarcity causes?", marks: 3 },
            { label: "b", prompt: "Water management?", marks: 2 },
            { label: "c", prompt: "Fossil vs renewable?", marks: 2 },
            { label: "d", prompt: "Energy mix trend?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resources",
                statement: "Scarcity+management+energy+trend.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any three causes.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "b",
                reasoning: "Dams/desalination/conservation.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Example.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Polluting vs clean.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Finite vs renewable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Shift to renewables.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Reason: climate.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) scarcity (b) management (c) energy (d) trend",
          },
        },
        {
          id: "oleg-u4-we-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a renewable energy source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wind" },
              { id: "b", text: "Natural gas" },
              { id: "c", text: "Crude oil" },
              { id: "d", text: "Coal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Renewable energy",
                statement: "Replaced naturally.",
              },
            ],
            steps: [
              { reasoning: "Wind = renewable.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Wind",
            commonErrors: ["Choosing a fossil fuel."],
          },
        },
        {
          id: "oleg-u4-we-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two methods used to manage water scarcity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water management",
                statement: "Dams, desalination, conservation.",
              },
            ],
            steps: [
              {
                reasoning: "Any two methods.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Correct examples.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Building reservoirs/dams, desalination, water conservation, transboundary agreements.",
            commonErrors: ["Only one method."],
          },
        },
        {
          id: "oleg-u4-we-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is desalination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Measuring rainfall with a gauge" },
              { id: "b", text: "Draining lakes to create farmland" },
              { id: "c", text: "Converting seawater into freshwater" },
              { id: "d", text: "Removing salt from roads in winter" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Desalination",
                statement: "Removing salt from seawater.",
              },
            ],
            steps: [
              {
                reasoning: "Desalination = seawater to freshwater.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Converting seawater into freshwater",
            commonErrors: ["Thinking it removes river silt."],
          },
        },
        {
          id: "oleg-u4-we-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why overuse of aquifers is a problem, using the North China Plain as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aquifer depletion",
                statement: "Over-pumping exceeds recharge.",
              },
            ],
            steps: [
              {
                reasoning: "Pumping exceeds natural recharge.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Water table falls permanently.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "North China Plain example.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Scarcity result explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Excess pumping depletes groundwater faster than it is replaced, causing long-term scarcity.",
            commonErrors: ["No example given."],
          },
        },
        {
          id: "oleg-u4-we-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between renewable and non-renewable resources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Renewable vs non-renewable",
                statement: "Replaced naturally vs finite.",
              },
            ],
            steps: [
              {
                reasoning: "Renewable replaced naturally.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Non-renewable will run out.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Renewables are replaced naturally; non-renewables are finite and will run out.",
            commonErrors: ["Swapping definitions."],
          },
        },
        {
          id: "oleg-u4-we-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a non-renewable resource?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydroelectricity" },
              { id: "b", text: "Natural gas" },
              { id: "c", text: "Solar power" },
              { id: "d", text: "Wind energy" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-renewable",
                statement: "Fossil fuels run out.",
              },
            ],
            steps: [
              { reasoning: "Gas = non-renewable.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Natural gas",
            commonErrors: ["Choosing a renewable."],
          },
        },
        {
          id: "oleg-u4-we-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two advantages and two disadvantages of nuclear energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nuclear energy",
                statement: "Low carbon but waste/accident risks.",
              },
            ],
            steps: [
              {
                reasoning: "Advantages: low carbon, reliable.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Advantages explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantages: waste, accidents.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Disadvantages explained.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Low-carbon and reliable, but produces hazardous waste and risks accidents.",
            commonErrors: ["Only one side covered."],
          },
        },
        {
          id: "oleg-u4-we-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are many countries shifting their energy mix towards renewable sources?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transition",
                statement: "Climate targets, pollution, finite fuels.",
              },
            ],
            steps: [
              {
                reasoning: "Reduce carbon emissions/climate change.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fossil fuels are finite and polluting.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Technology making renewables cheaper.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "To cut emissions, reduce pollution and dependence on finite fossil fuels.",
            commonErrors: ["No reason linked to change."],
          },
        },
        {
          id: "oleg-u4-we-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "OPEC mainly controls which aspect of the oil industry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oil tanker routes" },
              { id: "b", text: "Research into electric cars" },
              { id: "c", text: "Safety rules for oil rigs" },
              { id: "d", text: "Supply and prices of oil" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OPEC",
                statement: "Controls oil supply and prices.",
              },
            ],
            steps: [
              { reasoning: "OPEC manages supply.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Supply and prices of oil",
            commonErrors: ["Thinking OPEC owns all oil."],
          },
        },
        {
          id: "oleg-u4-we-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of hydropower as an energy source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hydropower evaluation",
                statement: "Clean/renewable but location-dependent, displaces people.",
              },
            ],
            steps: [
              {
                reasoning: "Advantage: renewable, low emissions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Advantage: reliable once built.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Disadvantage: needs suitable sites, floods land.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Clean and renewable but only viable at suitable sites and dams displace communities.",
            commonErrors: ["No disadvantages."],
          },
        },
        {
          id: "oleg-u4-we-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Energy security refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using only solar power" },
              { id: "b", text: "Reducing all energy use to zero" },
              { id: "c", text: "Keeping all energy plants secret" },
              { id: "d", text: "Reliable access to sufficient energy supplies" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Energy security",
                statement: "Reliable energy supply.",
              },
            ],
            steps: [
              {
                reasoning: "Security = reliable supply.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Reliable access to sufficient energy supplies",
            commonErrors: ["Confusing with energy efficiency."],
          },
        },
        {
          id: "oleg-u4-we-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Water and energy resources.",
          parts: [
            { label: "a", prompt: "Two causes of water scarcity?", marks: 2 },
            { label: "b", prompt: "Two ways to manage water scarcity?", marks: 2 },
            { label: "c", prompt: "Distinguish fossil fuels and renewables.", marks: 2 },
            { label: "d", prompt: "Evaluate nuclear energy.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resources",
                statement: "Scarcity+management+energy+nuclear.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any two causes.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "b",
                reasoning: "Any two methods.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Polluting/finite vs clean/renewable.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Advantages: low carbon, reliable.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Disadvantages: waste, accidents.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) scarcity causes (b) management (c) energy comparison (d) nuclear",
          },
        },
      ],
    },
    {
      id: "oleg-u4-minerals",
      title: "Mineral Resources and Sustainability",
      skill:
        "Describe mineral resource distribution, extraction and sustainability issues.",
      lesson: {
        sections: [
          {
            heading: "Mineral distribution",
            body: "Minerals unevenly distributed — often in politically unstable or poor regions (conflict minerals: coltan, diamonds). Strategic minerals (rare earths) concentrated in few countries (China dominates). Location drives trade and conflict.",
          },
          {
            heading: "Extraction impacts",
            body: "Mining causes deforestation, water pollution, habitat destruction. Oil extraction: spills, emissions. Processing minerals energy-intensive. Waste disposal problems (tailings).",
          },
          {
            heading: "Sustainability",
            body: "Non-renewable minerals will run out — recycling, substitutes, efficiency reduce demand. 'Conflict minerals' funding wars — certification schemes (Kimberley Process). Circular economy keeps materials in use.",
          },
        ],
        keyFormulas: [
          {
            name: "Minerals",
            statement:
              "Uneven distribution; extraction impacts; recycling/substitutes for sustainability.",
          },
        ],
        workedExample: {
          problem: "Why are conflict minerals a problem?",
          solution:
            "Mining profits fund armed groups and wars; certification schemes try to ensure ethical sourcing.",
        },
      },
      questions: [
        {
          id: "oleg-u4-mr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are 'conflict minerals'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rare minerals in museums" },
              { id: "b", text: "Minerals used in weapons only" },
              { id: "c", text: "Synthetic minerals" },
              { id: "d", text: "Minerals whose profits fund armed conflict" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conflict minerals",
                statement: "Profits fund conflict.",
              },
            ],
            steps: [
              {
                reasoning: "Conflict minerals = fund wars.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Minerals whose profits fund armed conflict",
            commonErrors: ["Literal interpretation."],
          },
        },
        {
          id: "oleg-u4-mr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two environmental impacts of mineral extraction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mining impacts",
                statement: "Pollution, habitat loss, waste.",
              },
            ],
            steps: [
              { reasoning: "Any two impacts.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Water/air pollution, deforestation, habitat destruction, waste tailings.",
            commonErrors: ["Only one impact."],
          },
        },
        {
          id: "oleg-u4-mr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How can mineral resource use become more sustainable?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mineral sustainability",
                statement: "Recycle, substitute, efficiency.",
              },
            ],
            steps: [
              { reasoning: "Recycling.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Substitutes/efficiency.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Certification/ethics.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Recycle, find substitutes, improve efficiency, certify ethical sourcing.",
            commonErrors: ["Vague answers."],
          },
        },
        {
          id: "oleg-u4-mr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Mineral resources.",
          parts: [
            { label: "a", prompt: "Mineral distribution?", marks: 2 },
            { label: "b", prompt: "Conflict minerals?", marks: 2 },
            { label: "c", prompt: "Extraction impacts?", marks: 3 },
            { label: "d", prompt: "Sustainability strategies?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Minerals",
                statement: "Distribution+conflict+impacts+sustainability.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Uneven distribution.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Strategic minerals concentrated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Fund armed groups.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Certification response.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any three impacts.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Recycling/substitutes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Efficiency/certification.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) distribution (b) conflict (c) impacts (d) sustainability",
          },
        },
        {
          id: "oleg-u4-mr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Strategic minerals such as rare earth elements are mainly concentrated in which country?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Australia" },
              { id: "b", text: "Brazil" },
              { id: "c", text: "China" },
              { id: "d", text: "Egypt" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mineral distribution",
                statement: "Rare earths concentrated in few countries.",
              },
            ],
            steps: [
              { reasoning: "China dominates rare earths.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** China",
            commonErrors: ["Guessing without knowledge."],
          },
        },
        {
          id: "oleg-u4-mr-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two everyday products that contain minerals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mineral uses",
                statement: "Metals and minerals in products.",
              },
            ],
            steps: [
              { reasoning: "Any two products.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct examples.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Any two: cars, phones, aluminium cans, computers, jewellery.",
            commonErrors: ["Naming raw ores only."],
          },
        },
        {
          id: "oleg-u4-mr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main aim of the Kimberley Process?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To increase diamond prices worldwide" },
              { id: "b", text: "To stop the trade in conflict diamonds" },
              { id: "c", text: "To certify gold only" },
              { id: "d", text: "To ban all diamond mining" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kimberley Process",
                statement: "Certification for ethical diamond trade.",
              },
            ],
            steps: [
              {
                reasoning: "Kimberley = conflict diamonds.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** To stop the trade in conflict diamonds",
            commonErrors: ["Thinking it bans all mining."],
          },
        },
        {
          id: "oleg-u4-mr-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how mineral extraction can cause water pollution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mining pollution",
                statement: "Chemicals and waste enter water supplies.",
              },
            ],
            steps: [
              {
                reasoning: "Processing uses toxic chemicals.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Waste leaks into rivers/aquifers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Polluted water harms people/ecosystems.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Toxic chemicals and mining waste leak into rivers and groundwater, contaminating water supplies.",
            commonErrors: ["Only naming 'pollution' without mechanism."],
          },
        },
        {
          id: "oleg-u4-mr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by a 'circular economy' in relation to minerals?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circular economy",
                statement: "Materials kept in use via reuse/recycling.",
              },
            ],
            steps: [
              {
                reasoning: "Reuse/recycle instead of discard.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reduces need for new mining.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Keeping materials in use through reuse and recycling, reducing demand for newly mined minerals.",
            commonErrors: ["Thinking it means buying less."],
          },
        },
        {
          id: "oleg-u4-mr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mineral resources are called 'non-renewable' because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are always synthetic" },
              { id: "b", text: "They are only found in cold countries" },
              { id: "c", text: "They cannot be traded internationally" },
              { id: "d", text: "They take millions of years to form and will run out" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-renewable minerals",
                statement: "Formed over geological time, finite supply.",
              },
            ],
            steps: [
              {
                reasoning: "Finite supply = non-renewable.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** They take millions of years to form and will run out",
            commonErrors: ["Thinking all minerals are renewable."],
          },
        },
        {
          id: "oleg-u4-mr-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the uneven distribution of strategic minerals creates geopolitical issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strategic minerals",
                statement: "Concentration creates dependence and competition.",
              },
            ],
            steps: [
              {
                reasoning: "Few countries control supply.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Importers become dependent.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Competition/tension over resources.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Concentration gives some countries control over supply, creating dependence and competition between nations.",
            commonErrors: ["No mention of dependence."],
          },
        },
        {
          id: "oleg-u4-mr-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways that recycling reduces the demand for newly mined minerals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recycling",
                statement: "Reused materials replace mined ore.",
              },
            ],
            steps: [
              {
                reasoning: "Scrap metal reused in industry.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Less ore needs extracting.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Extends mineral reserves.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Recycled metals substitute for mined ore, reducing extraction and extending reserves.",
            commonErrors: ["Vague answer without mechanism."],
          },
        },
        {
          id: "oleg-u4-mr-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In mining, 'tailings' are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of mineral deposit" },
              { id: "b", text: "Tools used to drill for minerals" },
              { id: "c", text: "Waste rock left after minerals are extracted" },
              { id: "d", text: "The richest ore found in a mine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tailings",
                statement: "Mining waste material.",
              },
            ],
            steps: [
              { reasoning: "Tailings = waste rock.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Waste rock left after minerals are extracted",
            commonErrors: ["Confusing with ore."],
          },
        },
        {
          id: "oleg-u4-mr-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate certification schemes such as the Kimberley Process for mineral sourcing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Certification schemes",
                statement: "Promote ethical sourcing but hard to enforce.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: promotes ethical sourcing.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Benefit: reduces conflict mineral trade.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Limitation: difficult to verify/enforce.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "They raise awareness and reduce unethical trade but are difficult to enforce fully.",
            commonErrors: ["One-sided evaluation."],
          },
        },
        {
          id: "oleg-u4-mr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a social impact of large-scale mining on local communities?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Improved air quality" },
              { id: "b", text: "Reduced road traffic" },
              { id: "c", text: "Displacement of people from their homes" },
              { id: "d", text: "Guaranteed higher incomes for all residents" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mining social impacts",
                statement: "Displacement and disruption.",
              },
            ],
            steps: [
              {
                reasoning: "Displacement = social impact.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Displacement of people from their homes",
            commonErrors: ["Choosing an environmental answer."],
          },
        },
        {
          id: "oleg-u4-mr-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Mineral resources.",
          parts: [
            { label: "a", prompt: "Describe the global distribution of minerals.", marks: 2 },
            { label: "b", prompt: "Two environmental impacts of extraction?", marks: 2 },
            { label: "c", prompt: "Explain 'conflict minerals'.", marks: 2 },
            { label: "d", prompt: "Evaluate sustainability strategies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Minerals",
                statement: "Distribution+impacts+conflict+sustainability.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Uneven distribution.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Example/concentration noted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Any two impacts.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Profits fund armed groups.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Strategies: recycle, substitute, certify.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Effectiveness assessed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Judgement given.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) distribution (b) impacts (c) conflict minerals (d) sustainability",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u4-4-2-notes",
      title: "Resource provision — notes",
      summary:
        "Water, energy, minerals: distribution, management, sustainability.",
      sections: [
        {
          heading: "Water/energy",
          body: "Scarcity causes; dams/desalination; fossil→renewable shift; energy mix changing.",
        },
        {
          heading: "Minerals",
          body: "Uneven distribution; conflict minerals; extraction impacts; recycling/substitutes for sustainability.",
        },
      ],
    },
  ],
};
