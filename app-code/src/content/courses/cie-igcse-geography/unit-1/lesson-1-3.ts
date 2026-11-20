import type { Lesson } from "../../../types.ts";

export const lesson303: Lesson = {
  id: "cieigeo-u1-lesson-1-3",
  code: "1-3",
  title: "Rocks and Weathering",
  goal: "I CAN describe rock types, weathering processes and landform formation.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 1: rocks and weathering"],
  
  vocabulary: [
    { term: "Weathering", definition: "Breakdown of rocks in situ." },
    { term: "Erosion", definition: "Removal of weathered material." },
    { term: "Igneous rock", definition: "Rock formed from cooled magma/lava." },
    { term: "Sedimentary rock", definition: "Rock formed from deposited sediments." },
    { term: "Metamorphic rock", definition: "Rock changed by heat/pressure." },
    { term: "Physical weathering", definition: "Breakdown without chemical change." },
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
          solution: "Chemical weathering — rainwater contains carbonic acid which dissolves calcium carbonate.",
        },
      },
      questions: [
        {
          id: "cieigeo-u1-rk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is weathering?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Breakdown of rocks in situ"
                    },
                    {
                              "id": "b",
                              "text": "Removal of material"
                    },
                    {
                              "id": "c",
                              "text": "Rock formation"
                    },
                    {
                              "id": "d",
                              "text": "A type of erosion"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Weathering",
                              "statement": "In-situ breakdown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weathering = rock breakdown in place.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "In-situ rock breakdown"
},
        },
        {
          id: "cieigeo-u1-rk-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three rock types.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rock types",
                              "statement": "Igneous, sedimentary, metamorphic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Igneous, sedimentary, metamorphic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All three correctly named.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Igneous, sedimentary, metamorphic"
},
        },
        {
          id: "cieigeo-u1-rk-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is freeze-thaw weathering?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Freeze-thaw",
                              "statement": "Physical weathering."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water enters cracks, freezes, expands.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Repeated cycles break rock apart.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Common in cold climates.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Ice expansion breaks rocks"
},
        },
        {
          id: "cieigeo-u1-rk-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define weathering, erosion, igneous rock, sedimentary rock, metamorphic rock, physical weathering, chemical weathering. (b) What is weathering? (c) What are the three rock types? (d) Give an example of each rock type. (e) What is freeze-thaw weathering? (f) What is chemical weathering? Give an example. (g) What is the rock cycle? (h) Explain how weathering leads to erosion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rocks",
                              "statement": "Types, weathering, cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All seven definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) In-situ rock breakdown.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Igneous, sedimentary, metamorphic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Valid examples for each.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Ice expansion breaks rocks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Chemical breakdown; e.g. limestone dissolution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Igneous→sedimentary→metamorphic→igneous.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Weathering weakens → erosion removes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Rocks and weathering."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u1-rk-notes",
      title: "Rocks — notes",
      summary: "Three rock types: igneous/sedimentary/metamorphic. Weathering=breakdown; physical vs chemical.",
      sections: [
        { heading: "Key idea", body: "Rock cycle shows how rocks transform over geological time." },
        { heading: "Weathering", body: "Physical (freeze-thaw) vs chemical (dissolution, oxidation)." },
      ],
    },
  ],
};
