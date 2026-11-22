import type { Lesson } from "../../../types.ts";

export const lesson303: Lesson = {
  id: "cieigeo-u1-lesson-1-3",
  code: "1-3",
  title: "Rocks and Weathering",
  goal: "I CAN describe rock types, weathering processes and landform formation.",
  standards: [
    "Cambridge IGCSE Geography 0460",
    "Paper 1: rocks and weathering",
  ],

  vocabulary: [
    { term: "Weathering", definition: "Breakdown of rocks in situ." },
    { term: "Erosion", definition: "Removal of weathered material." },
    { term: "Igneous rock", definition: "Rock formed from cooled magma/lava." },
    {
      term: "Sedimentary rock",
      definition: "Rock formed from deposited sediments.",
    },
    { term: "Metamorphic rock", definition: "Rock changed by heat/pressure." },
    {
      term: "Physical weathering",
      definition: "Breakdown without chemical change.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u1-s3-rock",
      title: "Rocks and weathering",
      skill: "Understand rock cycle and weathering.",
      lesson: {
        sections: [
          {
            heading: "Rock types",
            body: "Igneous: granite, basalt — from magma. Sedimentary: limestone, sandstone — from sediments. Metamorphic: marble, slate — from heat/pressure. Rock cycle: igneous→sedimentary→metamorphic→igneous.",
          },
          {
            heading: "Weathering",
            body: "Physical: freeze-thaw, exfoliation, pressure release. Chemical: dissolution, oxidation, hydrolysis. Biological: root action, burrowing. Weathering prepares material for erosion.",
          },
        ],
        keyFormulas: [
          { name: "Igneous", statement: "magma/lava" },
          { name: "Sedimentary", statement: "deposited sediments" },
          { name: "Metamorphic", statement: "heat/pressure" },
        ],
        workedExample: {
          problem: "Why does limestone dissolve in rainwater?",
          solution:
            "Chemical weathering — rainwater contains carbonic acid which dissolves calcium carbonate.",
        },
      },
      questions: [
        {
          id: "cieigeo-u1-rk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is weathering?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of erosion",
              },
              {
                id: "b",
                text: "Removal of material",
              },
              {
                id: "c",
                text: "Rock formation",
              },
              {
                id: "d",
                text: "Breakdown of rocks in situ",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Weathering",
                statement: "In-situ breakdown.",
              },
            ],
            steps: [
              {
                reasoning: "Weathering = rock breakdown in place.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "In-situ rock breakdown",
          },
        },
        {
          id: "cieigeo-u1-rk-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three rock types.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rock types",
                statement: "Igneous, sedimentary, metamorphic.",
              },
            ],
            steps: [
              {
                reasoning: "Igneous, sedimentary, metamorphic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three correctly named.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Igneous, sedimentary, metamorphic",
          },
        },
        {
          id: "cieigeo-u1-rk-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is freeze-thaw weathering?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Freeze-thaw",
                statement: "Physical weathering.",
              },
            ],
            steps: [
              {
                reasoning: "Water enters cracks, freezes, expands.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Repeated cycles break rock apart.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Common in cold climates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ice expansion breaks rocks",
          },
        },
        {
          id: "cieigeo-u1-rk-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define weathering, erosion, igneous rock, sedimentary rock, metamorphic rock, physical weathering, chemical weathering. (b) What is weathering? (c) What are the three rock types? (d) Give an example of each rock type. (e) What is freeze-thaw weathering? (f) What is chemical weathering? Give an example. (g) What is the rock cycle? (h) Explain how weathering leads to erosion.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rocks",
                statement: "Types, weathering, cycle.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All seven definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) In-situ rock breakdown.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Igneous, sedimentary, metamorphic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Valid examples for each.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Ice expansion breaks rocks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Chemical breakdown; e.g. limestone dissolution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Igneous→sedimentary→metamorphic→igneous.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Weathering weakens → erosion removes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rocks and weathering.",
          },
        },
        {
          id: "cieigeo-u1-rk-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rock type forms when magma or lava cools and solidifies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organic" },
              { id: "b", text: "Sedimentary" },
              { id: "c", text: "Metamorphic" },
              { id: "d", text: "Igneous" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Igneous rock",
                statement: "Formed from cooled magma or lava.",
              },
            ],
            steps: [
              {
                reasoning: "Igneous rocks form from cooled magma or lava.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Igneous",
          },
        },
        {
          id: "cieigeo-u1-rk-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Freeze-thaw weathering is an example of which type of weathering?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biological weathering only" },
              { id: "b", text: "Chemical weathering" },
              { id: "c", text: "Physical weathering" },
              { id: "d", text: "Erosion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical weathering",
                statement: "Breakdown without chemical change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Freeze-thaw breaks rock mechanically without changing its chemistry.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Physical weathering",
          },
        },
        {
          id: "cieigeo-u1-rk-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rock surface weathers at a rate of 2 mm per year. How much rock is lost after 50 years?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "mm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weathering rate",
                statement: "Loss = rate x time.",
              },
            ],
            steps: [
              {
                reasoning: "Total loss = 2 x 50.",
                working: "2 \\times 50 = 100",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "100 mm",
          },
        },
        {
          id: "cieigeo-u1-rk-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two chemical weathering processes.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chemical weathering",
                statement: "Breakdown involving chemical change.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of: dissolution, oxidation, hydrolysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both processes correctly named.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. dissolution and oxidation",
          },
        },
        {
          id: "cieigeo-u1-rk-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Karst landscapes, with features such as caves and sinkholes, develop mainly in which rock type?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sandstone" },
              { id: "b", text: "Limestone" },
              { id: "c", text: "Basalt" },
              { id: "d", text: "Granite" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Karst",
                statement: "Limestone dissolved by acidic water.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acidic rainwater dissolves limestone, creating karst features.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Limestone",
          },
        },
        {
          id: "cieigeo-u1-rk-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cliff retreats by coastal erosion at 2 m per year. (a) How far will it retreat in 15 years? (b) How many years will it take to retreat 60 m at the same rate?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, unit: "m" },
              { label: "b", answer: 30, unit: "years" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate calculation",
                statement: "Distance = rate x time.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Distance = 2 x 15.",
                working: "2 \\times 15 = 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Time = distance ÷ rate = 60 ÷ 2.",
                working: "60 / 2 = 30",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 30 m (b) 30 years",
          },
        },
        {
          id: "cieigeo-u1-rk-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how freeze-thaw and biological weathering contribute to soil formation.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Soil formation",
                statement: "Weathered rock fragments mix with organic matter.",
              },
            ],
            steps: [
              {
                reasoning: "Freeze-thaw breaks rock into smaller fragments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Roots and burrowing animals break rock further and add organic matter.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Over time fragments and humus combine to form soil.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Weathering breaks rock down for soil formation",
          },
        },
        {
          id: "cieigeo-u1-rk-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a metamorphic rock?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sandstone" },
              { id: "b", text: "Chalk" },
              { id: "c", text: "Marble" },
              { id: "d", text: "Granite" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metamorphic rock",
                statement: "Rock changed by heat and pressure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marble forms when limestone is changed by heat and pressure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Marble",
          },
        },
        {
          id: "cieigeo-u1-rk-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "At a site, chemical weathering removes limestone at 0.2 mm per year and physical weathering removes rock at 0.8 mm per year. (a) What is the total weathering rate per year? (b) How much rock is removed in 25 years?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1, unit: "mm/year" },
              { label: "b", answer: 25, unit: "mm" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combined rate",
                statement: "Total rate = sum of processes.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 0.2 + 0.8.",
                working: "0.2 + 0.8 = 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 1 mm per year over 25 years.",
                working: "1 \\times 25 = 25",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 1 mm/year (b) 25 mm",
          },
        },
        {
          id: "cieigeo-u1-rk-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss the factors that affect the rate at which rocks weather.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weathering rate",
                statement: "Climate, rock type and relief affect weathering.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Climate: warm, wet conditions speed up chemical weathering.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Freeze-thaw is effective where temperatures alternate around 0°C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rock type: softer rocks such as limestone weather faster than granite.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Steep slopes shed weathered material, slowing in-situ weathering.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Climate, rock type and relief control weathering rates",
          },
        },
        {
          id: "cieigeo-u1-rk-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Exfoliation (onion-skin weathering) is mainly caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tree roots forcing rocks apart" },
              {
                id: "b",
                text: "Pressure release as overlying rock is removed",
              },
              { id: "c", text: "Acid rain dissolving the rock" },
              { id: "d", text: "Erosion by rivers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exfoliation",
                statement: "Physical weathering by pressure release.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When overlying rock is removed, pressure release causes outer layers to peel off.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Pressure release",
          },
        },
        {
          id: "cieigeo-u1-rk-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define weathering, erosion, igneous rock, sedimentary rock, metamorphic rock, physical weathering, chemical weathering. (b) Give one example of each rock type. (c) Explain freeze-thaw weathering. (d) Explain one chemical weathering process. (e) Describe the rock cycle. (f) Name two landforms created by chemical weathering. (g) Explain how weathering prepares material for erosion. (h) Evaluate the relative importance of physical and chemical weathering in different climates.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rocks and weathering",
                statement: "Rock types, weathering processes and landforms.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All seven definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Valid examples: granite/basalt, limestone/sandstone, marble/slate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Water freezes in cracks, expands, and breaks rock over repeated cycles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) e.g. dissolution of limestone by acidic rainwater.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Igneous to sedimentary to metamorphic and back via melting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) e.g. caves, sinkholes, limestone pavements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Weathering weakens and loosens material so erosion can remove it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid evaluation comparing climates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rock types, weathering processes and the rock cycle.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u1-rk-notes",
      title: "Rocks — notes",
      summary:
        "Three rock types: igneous/sedimentary/metamorphic. Weathering=breakdown; physical vs chemical.",
      sections: [
        {
          heading: "Key idea",
          body: "Rock cycle shows how rocks transform over geological time.",
        },
        {
          heading: "Weathering",
          body: "Physical (freeze-thaw) vs chemical (dissolution, oxidation).",
        },
      ],
    },
  ],
};
