import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ess9-u7-lesson-7-3",
  code: "7-3",
  title: "Climate Change Impacts and Mitigation",
  goal: "I CAN describe climate change impacts and evaluate mitigation strategies.",
  standards: [
    "HS-ESS3-1",
    "HS-ESS3-2",
    "SEP: Constructing Explanations",
    "SEP: Designing Solutions",
  ],
  vocabulary: [
    {
      term: "Sea level rise",
      definition:
        "Increase in ocean level from melting ice + thermal expansion.",
    },
    {
      term: "Ocean acidification",
      definition: "Decreased pH from CO₂ absorption.",
    },
    {
      term: "Extreme weather",
      definition: "More frequent/intense storms, droughts, floods.",
    },
    {
      term: "Biodiversity loss",
      definition: "Species extinction from habitat change.",
    },
    {
      term: "Mitigation",
      definition: "Actions to reduce greenhouse gas emissions.",
    },
    { term: "Adaptation", definition: "Actions to cope with climate effects." },
    { term: "Carbon neutrality", definition: "Net zero emissions." },
  ],
  concepts: [
    {
      id: "ess9-u7-impacts",
      title: "Climate change impacts",
      skill:
        "Describe physical, biological, and social impacts of climate change.",
      lesson: {
        sections: [
          {
            heading: "Physical impacts",
            body: "- **Sea level rise**: coastal flooding, erosion.\n- **Ocean acidification**: coral bleaching, shell dissolution.\n- **Extreme weather**: more intense storms, droughts.\n- **Ice melt**: sea level, freshwater supply.",
          },
          {
            heading: "Biological and social impacts",
            body: "- **Biodiversity loss**: habitat change → extinctions.\n- **Food security**: crop failures, fishery decline.\n- **Health**: heat stress, disease spread.\n- **Displacement**: climate refugees.",
          },
        ],
        keyFormulas: [
          { name: "Sea level", statement: "Rising" },
          { name: "Acidification", statement: "Coral bleaching" },
          { name: "Biodiversity", statement: "Habitat loss" },
        ],
        workedExample: {
          problem: "What is ocean acidification?",
          solution: "CO₂ absorption → decreased pH → coral/shell damage.",
        },
      },
      questions: [
        {
          id: "ess9-u7-impacts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is ocean acidification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ocean getting saltier" },
              { id: "b", text: "Decreased pH from CO₂ absorption" },
              { id: "c", text: "Ocean warming" },
              { id: "d", text: "Ocean pollution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Acidification",
                statement: "CO₂ → decreased pH.",
              },
            ],
            steps: [
              {
                reasoning: "Acidification = decreased pH.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Decreased pH from CO₂",
            commonErrors: ["Saltier."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u7-impacts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two physical impacts of climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Impacts",
                statement: "Multiple effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sea level rise, ocean acidification, extreme weather.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Sea level, acidification, extreme weather.",
            commonErrors: ["One impact."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u7-impacts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does climate change affect biodiversity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Biodiversity",
                statement: "Habitat change.",
              },
            ],
            steps: [
              {
                reasoning: "Temperature change → habitat shift.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Species can't adapt fast enough.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Extinction risk increases.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: habitat loss → extinction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Habitat change → biodiversity loss.",
            commonErrors: ["No effect."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u7-impacts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "List climate change impacts on human society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Social impacts",
                statement: "Multiple effects.",
              },
            ],
            steps: [
              {
                reasoning: "Food security: crop failures.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Health: heat stress, disease.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Displacement: climate refugees.",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "Economic: damage costs.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "Food, health, displacement, economic.",
            commonErrors: ["Physical only."],
            examinerNote: "B2 for each impact.",
          },
        },
      ],
    },
    {
      id: "ess9-u7-mitigation",
      title: "Climate change mitigation",
      skill: "Describe strategies to reduce greenhouse gas emissions.",
      lesson: {
        sections: [
          {
            heading: "Mitigation strategies",
            body: "- **Renewable energy**: solar, wind, hydro.\n- **Energy efficiency**: LED, insulation, efficient vehicles.\n- **Carbon capture**: sequestering CO₂.\n- **Reforestation**: trees absorb CO₂.\n- **Sustainable agriculture**: reduced emissions.",
          },
          {
            heading: "Policy approaches",
            body: "- **Carbon pricing**: tax or cap-and-trade.\n- **International agreements**: Paris Agreement.\n- **Technology investment**: clean energy R&D.",
          },
        ],
        keyFormulas: [
          { name: "Renewable", statement: "Solar, wind, hydro" },
          { name: "Efficiency", statement: "LED, insulation" },
          { name: "Carbon capture", statement: "CO₂ sequestration" },
        ],
        workedExample: {
          problem: "What is carbon neutrality?",
          solution: "Net zero emissions — balance emissions with removal.",
        },
      },
      questions: [
        {
          id: "ess9-u7-mitigation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is mitigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coping with effects" },
              { id: "b", text: "Reducing emissions" },
              { id: "c", text: "Predicting climate" },
              { id: "d", text: "Studying climate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitigation",
                statement: "Reduce emissions.",
              },
            ],
            steps: [
              {
                reasoning: "Mitigation = reduce emissions.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Reducing emissions",
            commonErrors: ["Coping."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u7-mitigation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two mitigation strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Strategies",
                statement: "Multiple approaches.",
              },
            ],
            steps: [
              {
                reasoning: "Renewable energy, efficiency, carbon capture.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Renewable energy, efficiency, carbon capture.",
            commonErrors: ["One strategy."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u7-mitigation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does renewable energy mitigate climate change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Renewable",
                statement: "No emissions.",
              },
            ],
            steps: [
              {
                reasoning: "Solar/wind don't emit CO₂.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Replace fossil fuels.", marks: 1, markCode: "R" },
              {
                reasoning: "Reduce greenhouse gas emissions.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: emission reduction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "No emissions → replaces fossil fuels.",
            commonErrors: ["More emissions."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u7-mitigation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe mitigation vs adaptation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Approaches",
                statement: "Different strategies.",
              },
            ],
            steps: [
              {
                reasoning: "Mitigation: reduce emissions (prevent).",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Adaptation: cope with effects (respond).",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Answer: prevention vs response.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Mitigation = prevent; adaptation = respond.",
            commonErrors: ["Same thing."],
            examinerNote: "B3 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u7-adaptation",
      title: "Climate change adaptation",
      skill: "Describe strategies to cope with climate change effects.",
      lesson: {
        sections: [
          {
            heading: "Adaptation strategies",
            body: "- **Infrastructure**: sea walls, flood barriers.\n- **Agriculture**: drought-resistant crops.\n- **Water management**: conservation, desalination.\n- **Early warning**: disaster preparedness.\n- **Migration**: planned relocation.",
          },
          {
            heading: "Limitations",
            body: "- Cost and resources.\n- Technical challenges.\n- Social/economic barriers.\n- Limits to adaptation.",
          },
        ],
        keyFormulas: [
          { name: "Infrastructure", statement: "Sea walls, barriers" },
          { name: "Agriculture", statement: "Drought-resistant crops" },
          { name: "Water", statement: "Conservation, desalination" },
        ],
        workedExample: {
          problem: "What's an example of climate adaptation?",
          solution: "Sea walls protecting coastal cities.",
        },
      },
      questions: [
        {
          id: "ess9-u7-adapt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is adaptation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reducing emissions" },
              { id: "b", text: "Coping with effects" },
              { id: "c", text: "Predicting climate" },
              { id: "d", text: "Studying climate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adaptation",
                statement: "Cope with effects.",
              },
            ],
            steps: [
              { reasoning: "Adaptation = cope.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Coping with effects",
            commonErrors: ["Reducing emissions."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u7-adapt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two adaptation strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Adaptation",
                statement: "Multiple strategies.",
              },
            ],
            steps: [
              {
                reasoning: "Infrastructure, agriculture, water management.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Infrastructure, agriculture, water management.",
            commonErrors: ["One strategy."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u7-adapt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is adaptation necessary alongside mitigation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Adaptation",
                statement: "Some change inevitable.",
              },
            ],
            steps: [
              {
                reasoning: "Some warming already locked in.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Impacts occurring now.", marks: 1, markCode: "R" },
              {
                reasoning: "Need to cope with unavoidable effects.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: inevitable change requires adaptation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Some change inevitable → adaptation needed.",
            commonErrors: ["Mitigation only."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u7-adapt-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe adaptation challenges.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Challenges",
                statement: "Multiple barriers.",
              },
            ],
            steps: [
              {
                reasoning: "Cost and resources needed.",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "Technical challenges.", marks: 2, markCode: "B" },
              {
                reasoning: "Social/economic barriers.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: multiple limitations.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Cost, technical, social, economic barriers.",
            commonErrors: ["Easy."],
            examinerNote: "B2 for each barrier.",
          },
        },
      ],
    },
    {
      id: "ess9-u7-solutions",
      title: "Climate solutions and policy",
      skill: "Evaluate climate policy approaches and solutions.",
      lesson: {
        sections: [
          {
            heading: "Policy approaches",
            body: "- **Carbon pricing**: tax emissions or cap-and-trade.\n- **International agreements**: Paris Agreement (2015).\n- **Technology investment**: clean energy R&D.\n- **Regulation**: emissions standards.",
          },
          {
            heading: "Individual and collective action",
            body: "- **Individual**: reduce footprint, conservation.\n- **Collective**: policy advocacy, community action.\n- **Technology**: innovation, efficiency.",
          },
        ],
        keyFormulas: [
          { name: "Carbon pricing", statement: "Tax or cap-trade" },
          { name: "Paris", statement: "2015 agreement" },
          { name: "Technology", statement: "Innovation" },
        ],
        workedExample: {
          problem: "What is the Paris Agreement?",
          solution: "2015 international agreement to limit warming to 1.5-2°C.",
        },
      },
      questions: [
        {
          id: "ess9-u7-policy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is carbon pricing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free emissions" },
              { id: "b", text: "Tax or cap on emissions" },
              { id: "c", text: "Subsidy for fossil fuels" },
              { id: "d", text: "No regulation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carbon pricing",
                statement: "Tax or cap.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon pricing = tax or cap.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Tax or cap on emissions",
            commonErrors: ["Free emissions."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u7-policy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the Paris Agreement?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Paris",
                statement: "2015 climate agreement.",
              },
            ],
            steps: [
              {
                reasoning: "Paris Agreement: 2015, limit warming to 1.5-2°C.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "2015 agreement to limit warming.",
            commonErrors: ["Wrong year."],
            examinerNote: "A1 for description.",
          },
        },
        {
          id: "ess9-u7-policy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does carbon pricing reduce emissions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Carbon pricing",
                statement: "Economic incentive.",
              },
            ],
            steps: [
              { reasoning: "Makes emissions costly.", marks: 1, markCode: "R" },
              {
                reasoning: "Incentivizes clean alternatives.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Market-based approach.", marks: 1, markCode: "R" },
              {
                reasoning: "Answer: economic incentive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Makes emissions costly → incentivizes clean energy.",
            commonErrors: ["No effect."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u7-policy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare individual vs collective climate action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Action",
                statement: "Different scales.",
              },
            ],
            steps: [
              {
                reasoning: "Individual: reduce footprint, conserve.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Collective: policy advocacy, community.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Answer: personal vs systemic action.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Individual = personal; collective = systemic.",
            commonErrors: ["Same."],
            examinerNote: "B3 for each + A1.",
          },
        },
      ],
    },
  ],
};
