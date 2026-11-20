import type { Lesson } from "../../../types.ts";

export const lesson305: Lesson = {
  id: "cieigeo-u1-lesson-1-5",
  code: "1-5",
  title: "Coasts and Glaciation",
  goal: "I CAN describe coastal processes and glacial landforms.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 1: coastal/glacial"],
  
  vocabulary: [
    { term: "Coastal erosion", definition: "Wearing away of coastline." },
    { term: "Longshore drift", definition: "Movement of sediment along coast." },
    { term: "Beach", definition: "Deposited sediment at shoreline." },
    { term: "Cliff", definition: "Steep coastal slope." },
    { term: "Glacier", definition: "Large mass of moving ice." },
    { term: "Moraine", definition: "Glacial deposit of rock debris." },
  ],
  concepts: [
    {
      id: "cieigeo-u1-s5-coast",
      title: "Coasts and glaciation",
      skill: "Understand coastal and glacial processes.",
      lesson: {
        sections: [
          {
            heading: "Coastal processes",
            body: "Erosion: hydraulic action, abrasion, attrition, corrosion. Transportation: longshore drift. Deposition: beaches, spits, bars. Landforms: cliffs, wave-cut platforms, headlands, bays.",
          },
          {
            heading: "Glaciation",
            body: "Glaciers erode (abrasion, plucking) and deposit (moraines, till). Landforms: U-shaped valleys, cirques, arêtes, hanging valleys, drumlins, eskers.",
          },
        ],
        keyFormulas: [
          { name: "Erosion", statement: "hydraulic, abrasion, attrition, corrosion" },
          { name: "Longshore drift", statement: "sediment along coast" },
          { name: "Glacial landforms", statement: "U-valleys, cirques, moraines" },
        ],
        workedExample: {
          problem: "How does longshore drift create a spit?",
          solution: "Waves approach at angle, sediment moves along coast. When coastline changes direction, sediment deposits forming a spit.",
        },
      },
      questions: [
        {
          id: "cieigeo-u1-cg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is longshore drift?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Movement of sediment along coast"
                    },
                    {
                              "id": "b",
                              "text": "A type of wave"
                    },
                    {
                              "id": "c",
                              "text": "A landform"
                    },
                    {
                              "id": "d",
                              "text": "A weather system"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Longshore drift",
                              "statement": "Coastal sediment movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sediment moves along coast by waves.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Coastal sediment movement"
},
        },
        {
          id: "cieigeo-u1-cg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a glacier?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Glacier",
                              "statement": "Moving ice mass."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Large mass of moving ice.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Erodes and deposits material.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Moving ice mass"
},
        },
        {
          id: "cieigeo-u1-cg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are coastal erosion processes?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Coastal erosion",
                              "statement": "Erosion types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hydraulic action, abrasion, attrition, corrosion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All four correctly identified.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each process explained.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Hydraulic, abrasion, attrition, corrosion"
},
        },
        {
          id: "cieigeo-u1-cg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define coastal erosion, longshore drift, beach, cliff, glacier, moraine. (b) What is longshore drift? (c) What is a glacier? (d) What are coastal erosion processes? (e) What landforms does glaciation create? (f) What is a spit? (g) What is a U-shaped valley? (h) Explain how coasts and glaciers shape landscapes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Coasts/glaciation",
                              "statement": "Processes, landforms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Sediment movement along coast.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Moving ice mass.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Four erosion processes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) U-valleys, cirques, moraines, drumlins.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Deposited sediment extending into sea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Glacially eroded valley.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid landscape explanation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Coastal and glacial processes."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u1-cg-notes",
      title: "Coasts/glaciation — notes",
      summary: "Coasts: erosion→transport→deposition. Glaciers: erosion→deposition. Landforms reflect processes.",
      sections: [
        { heading: "Key idea", body: "Both coasts and glaciers shape landscapes through erosion and deposition." },
        { heading: "Landforms", body: "Coastal: cliffs, beaches, spits. Glacial: U-valleys, cirques, moraines." },
      ],
    },
  ],
};
