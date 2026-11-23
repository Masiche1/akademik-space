import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ess9-u7-lesson-7-2",
  code: "7-2",
  title: "Climate Change Evidence and Causes",
  goal: "I CAN describe evidence for climate change and its causes.",
  standards: [
    "HS-ESS2-4",
    "HS-ESS2-5",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Climate change",
      definition: "Long-term changes in climate patterns.",
    },
    {
      term: "Greenhouse gases",
      definition: "Gases that trap heat: CO₂, CH₄, N₂O.",
    },
    {
      term: "Global warming",
      definition: "Increase in Earth's average temperature.",
    },
    {
      term: "Fossil fuels",
      definition: "Coal, oil, gas — carbon-based energy.",
    },
    { term: "Carbon footprint", definition: "Total greenhouse gas emissions." },
    {
      term: "Proxy data",
      definition: "Indirect evidence: ice cores, tree rings.",
    },
    { term: "Radiative forcing", definition: "Change in energy balance." },
  ],
  concepts: [
    {
      id: "ess9-u7-evidence",
      title: "Evidence for climate change",
      skill: "Identify and explain evidence for climate change.",
      lesson: {
        sections: [
          {
            heading: "Evidence",
            body: "- **Temperature records**: global average rising ~1.1°C since 1900.\n- **Ice cores**: CO₂ levels higher than any time in 800,000 years.\n- **Sea level rise**: ~20 cm since 1900.\n- **Glacier retreat**: glaciers shrinking worldwide.\n- **Extreme weather**: more frequent/intense events.",
          },
          {
            heading: "Causes",
            body: "Human activities increase greenhouse gases:\n- **Fossil fuel burning**: releases CO₂.\n- **Deforestation**: reduces CO₂ absorption.\n- **Agriculture**: methane from livestock.\n- **Industry**: various emissions.",
          },
        ],
        keyFormulas: [
          { name: "Temperature", statement: "Rising ~1.1°C" },
          { name: "CO₂", statement: "Highest in 800k years" },
          { name: "Causes", statement: "Fossil fuels, deforestation" },
        ],
        workedExample: {
          problem: "What's the main cause of climate change?",
          solution: "Human activities releasing greenhouse gases.",
        },
      },
      questions: [
        {
          id: "ess9-u7-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main cause of climate change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solar activity" },
              { id: "b", text: "Human greenhouse gas emissions" },
              { id: "c", text: "Volcanoes" },
              { id: "d", text: "Natural cycles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Climate change",
                statement: "Human-caused.",
              },
            ],
            steps: [
              {
                reasoning: "Human emissions = main cause.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Human greenhouse gas emissions",
            commonErrors: ["Solar activity."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u7-evidence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of evidence for climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Evidence",
                statement: "Multiple lines.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Temperature records, ice cores, sea level, glaciers.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Temperature, ice cores, sea level, glaciers.",
            commonErrors: ["One evidence."],
            examinerNote: "A1 for two types.",
          },
        },
        {
          id: "ess9-u7-evidence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do ice cores provide evidence for climate change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ice cores",
                statement: "Atmospheric records.",
              },
            ],
            steps: [
              {
                reasoning: "Ice cores trap ancient air bubbles.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Show CO₂ levels over 800,000 years.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Current CO₂ higher than any time in record.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: atmospheric archive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ice cores trap air → show CO₂ history.",
            commonErrors: ["Direct measurement."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u7-evidence-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "List human activities causing climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Causes",
                statement: "Multiple activities.",
              },
            ],
            steps: [
              {
                reasoning: "Fossil fuel burning → CO₂.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Deforestation → less CO₂ absorption.",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "Agriculture → methane.", marks: 2, markCode: "B" },
              {
                reasoning: "Industry → various emissions.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Fossil fuels, deforestation, agriculture, industry.",
            commonErrors: ["Natural causes."],
            examinerNote: "B2 for each activity.",
          },
        },
      ],
    },
    {
      id: "ess9-u7-greenhouse",
      title: "Greenhouse gases and radiative forcing",
      skill: "Describe greenhouse gases and their warming effects.",
      lesson: {
        sections: [
          {
            heading: "Greenhouse gases",
            body: "- **CO₂**: fossil fuels, respiration, deforestation.\n- **CH₄**: livestock, rice, landfills.\n- **N₂O**: fertilizers, industrial.\n- **Water vapor**: feedback, not direct cause.",
          },
          {
            heading: "Radiative forcing",
            body: "Measure of energy imbalance.\nPositive forcing = warming; negative = cooling.\nHuman activities → positive forcing → warming.",
          },
        ],
        keyFormulas: [
          { name: "CO₂", statement: "Fossil fuels, deforestation" },
          { name: "CH₄", statement: "Livestock, landfills" },
          { name: "N₂O", statement: "Fertilizers" },
        ],
        workedExample: {
          problem: "Which greenhouse gas comes from livestock?",
          solution: "Methane (CH₄).",
        },
      },
      questions: [
        {
          id: "ess9-u7-ghg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which greenhouse gas comes from livestock?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO₂" },
              { id: "b", text: "CH₄" },
              { id: "c", text: "N₂O" },
              { id: "d", text: "O₃" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "CH₄", statement: "Livestock source." },
            ],
            steps: [
              { reasoning: "Livestock → methane.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** CH₄",
            commonErrors: ["CO₂."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u7-ghg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is radiative forcing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Radiative forcing",
                statement: "Energy imbalance measure.",
              },
            ],
            steps: [
              {
                reasoning: "Radiative forcing = change in energy balance.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Change in energy balance.",
            commonErrors: ["Temperature."],
            examinerNote: "A1 for definition.",
          },
        },
        {
          id: "ess9-u7-ghg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is methane a concern despite being less abundant than CO₂?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "CH₄",
                statement: "High warming potential.",
              },
            ],
            steps: [
              {
                reasoning: "CH₄ much more potent than CO₂.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "~25x more warming over 100 years.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Shorter atmospheric lifetime.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: high potency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Methane ~25x more potent than CO₂.",
            commonErrors: ["Less potent."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u7-ghg-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "List major greenhouse gases and their sources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Gases",
                statement: "Multiple sources.",
              },
            ],
            steps: [
              {
                reasoning: "CO₂: fossil fuels, deforestation.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "CH₄: livestock, landfills.",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "N₂O: fertilizers.", marks: 2, markCode: "B" },
              { reasoning: "Water vapor: feedback.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "CO₂, CH₄, N₂O, water vapor + sources.",
            commonErrors: ["One gas."],
            examinerNote: "B2 for each gas+source.",
          },
        },
      ],
    },
    {
      id: "ess9-u7-models",
      title: "Climate models and projections",
      skill: "Describe how climate models work and project future change.",
      lesson: {
        sections: [
          {
            heading: "Climate models",
            body: "Computer simulations of climate system.\n- Input: atmospheric, ocean, land data.\n- Physics: equations for heat, moisture, circulation.\n- Output: temperature, precipitation projections.",
          },
          {
            heading: "Projections",
            body: "Models project: 1.5-4°C warming by 2100 depending on emissions.\n- Low emissions: ~1.5-2°C.\n- High emissions: ~3-4°C.",
          },
        ],
        keyFormulas: [
          { name: "Models", statement: "Computer simulations" },
          { name: "Projections", statement: "1.5-4°C by 2100" },
          { name: "Scenarios", statement: "Low vs high emissions" },
        ],
        workedExample: {
          problem: "What do climate models predict?",
          solution: "1.5-4°C warming by 2100 depending on emissions.",
        },
      },
      questions: [
        {
          id: "ess9-u7-models-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are climate models?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physical models" },
              { id: "b", text: "Computer simulations" },
              { id: "c", text: "Weather forecasts" },
              { id: "d", text: "Historical data" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Models",
                statement: "Computer simulations.",
              },
            ],
            steps: [
              {
                reasoning: "Climate models = computer simulations.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Computer simulations",
            commonErrors: ["Physical models."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u7-models-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What warming is projected by 2100?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Projections",
                statement: "1.5-4°C range.",
              },
            ],
            steps: [
              {
                reasoning: "1.5-4°C depending on emissions.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "1.5-4°C by 2100.",
            commonErrors: ["Exact number."],
            examinerNote: "A1 for range.",
          },
        },
        {
          id: "ess9-u7-models-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do climate models work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Models",
                statement: "Simulations with physics.",
              },
            ],
            steps: [
              {
                reasoning: "Input data: atmosphere, ocean, land.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Physics equations for heat/moisture.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Output: temperature/precipitation projections.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: computer simulation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Computer simulation with physics equations.",
            commonErrors: ["Guessing."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u7-models-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare low vs high emission scenarios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Scenarios",
                statement: "Different outcomes.",
              },
            ],
            steps: [
              {
                reasoning: "Low emissions: ~1.5-2°C warming.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "High emissions: ~3-4°C warming.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Lower emissions → less severe impacts.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: emissions determine outcome.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Low: 1.5-2°C; high: 3-4°C.",
            commonErrors: ["Same outcome."],
            examinerNote: "B2 for each scenario + A1.",
          },
        },
      ],
    },
  ],
};
