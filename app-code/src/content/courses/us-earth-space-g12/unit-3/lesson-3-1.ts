import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ess12-u3-lesson-3-1",
  code: "3-1",
  title: "Minerals and Rocks",
  goal: "I CAN identify minerals and classify rocks by formation.",
  standards: ["HS-ESS2-1", "HS-ESS2-2"],
  vocabulary: [
    { term: "Mineral", definition: "Naturally occurring inorganic solid." },
    { term: "Rock", definition: "Aggregate of minerals." },
    { term: "Igneous", definition: "From cooled magma." },
    { term: "Sedimentary", definition: "From compressed sediment." },
    { term: "Metamorphic", definition: "Heat/pressure transformed." },
  ],
  concepts: [
    {
      id: "ess12-u3-minerals-rocks",
      title: "Minerals and rocks",
      skill: "Classify rocks by formation and identify minerals.",
      lesson: {
        sections: [
          {
            heading: "Minerals vs rocks",
            body: "Minerals are naturally occurring inorganic crystalline solids with defined chemical composition (quartz, feldspar, mica). Rocks are aggregates of one or more minerals (granite = quartz + feldspar + mica).",
          },
          {
            heading: "Three rock types",
            body: "Igneous forms from cooled magma/lava (granite, basalt). Sedimentary forms from compressed/deposited sediments (sandstone, limestone). Metamorphic forms when existing rock is changed by heat and pressure (marble, slate). The rock cycle transforms between types.",
          },
        ],
        keyFormulas: [
          { name: "Mineral", statement: "Crystalline solid." },
          { name: "Igneous", statement: "From magma." },
          { name: "Sedimentary", statement: "From sediment." },
          { name: "Metamorphic", statement: "Heat/pressure." },
        ],
        workedExample: {
          problem: "Marble forms when limestone is subjected to heat and pressure. What rock type is marble?",
          solution: "Metamorphic — existing sedimentary rock transformed by heat/pressure.",
        },
      },
      questions: [
        {
          id: "ess12-u3-minerals-rocks-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A mineral is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any rock"
                    },
                    {
                              "id": "b",
                              "text": "a naturally occurring crystalline solid"
                    },
                    {
                              "id": "c",
                              "text": "a mixture"
                    },
                    {
                              "id": "d",
                              "text": "a fossil"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mineral",
                              "statement": "Crystalline inorganic solid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minerals are naturally occurring inorganic crystalline solids with defined composition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** a naturally occurring crystalline solid",
          "commonErrors": [
                    "Confusing with rocks."
          ]
},
        },
        {
          id: "ess12-u3-minerals-rocks-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which rock forms from cooled lava?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sandstone"
                    },
                    {
                              "id": "b",
                              "text": "marble"
                    },
                    {
                              "id": "c",
                              "text": "basalt"
                    },
                    {
                              "id": "d",
                              "text": "limestone"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Igneous",
                              "statement": "From cooled magma/lava."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Basalt is igneous — formed from cooled lava. Sandstone/limestone are sedimentary; marble is metamorphic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** basalt",
          "commonErrors": [
                    "Choosing a sedimentary rock."
          ]
},
        },
        {
          id: "ess12-u3-minerals-rocks-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 3 main rock types. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Types",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Igneous, sedimentary, metamorphic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 rock types.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Counting minerals instead."
          ]
},
        },
        {
          id: "ess12-u3-minerals-rocks-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe the rock cycle: how does sedimentary rock become metamorphic, and how does it eventually return to sedimentary?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rock cycle",
                              "statement": "Sedimentary → metamorphic → sedimentary."
                    },
                    {
                              "kind": "technique",
                              "name": "Sequence",
                              "statement": "Heat/pressure then weathering."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sedimentary rock undergoes heat and pressure (burial) → metamorphic. If melted → magma → igneous. The igneous rock weathers and erodes → sediment → compacts → new sedimentary rock. The cycle continues.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly describes the transformation path.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sedimentary →(heat/pressure)→ metamorphic →(melt)→ igneous →(weather)→ sedimentary.**",
          "commonErrors": [
                    "Skipping the igneous step."
          ]
},
        },
      ],
    },
  ],
};
