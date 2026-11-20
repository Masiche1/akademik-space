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
              { id: "a", text: "Minerals whose profits fund armed conflict" },
              { id: "b", text: "Rare minerals in museums" },
              { id: "c", text: "Minerals used in weapons only" },
              { id: "d", text: "Synthetic minerals" },
            ],
            correctChoiceId: "a",
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
