import type { Lesson } from "../../../types.ts";

export const lesson512: Lesson = {
  id: "ciealgeo-u1-lesson-1-2",
  code: "1-2",
  title: "Volcanoes and Volcanic Hazards",
  goal: "I CAN explain volcano types, eruption styles and hazard management.",
  standards: ["Cambridge A Level Geography 9696", "Paper 1: physical"],
  
  vocabulary: [
    { term: "Magma", definition: "Molten rock underground." },
    { term: "Lava", definition: "Molten rock on surface." },
    { term: "Composite volcano", definition: "Steep, explosive, layered." },
    { term: "Shield volcano", definition: "Gentle, effusive, basaltic." },
    { term: "Pyroclastic flow", definition: "Fast-moving hot gas/ash cloud." },
    { term: "Lahar", definition: "Volcanic mudflow." },
  ],
  concepts: [
    {
      id: "ciealgeo-u1-s2-volc",
      title: "Volcanoes",
      skill: "Analyse volcanic hazards.",
      lesson: {
        sections: [
          {
            heading: "Volcano types",
            body: "Composite: steep, explosive, viscous magma — dangerous. Shield: gentle, effusive, fluid basalt — less dangerous but vast. Calderas: collapsed craters — supervolcanoes rare but catastrophic.",
          },
          {
            heading: "Hazards",
            body: "Lava flows, pyroclastic flows, lahars, ash fall, toxic gases. Secondary: tsunamis, landslides, crop failure, climate change.",
          },
          {
            heading: "Management",
            body: "Monitoring: seismic, gas, ground deformation. Evacuation, exclusion zones. Iceland/Philippines examples.",
          },
        ],
        keyFormulas: [
          { name: "Composite", statement: "explosive" },
          { name: "Shield", statement: "effusive" },
          { name: "Pyroclastic", statement: "hot gas cloud" },
        ],
        workedExample: {
          problem: "Why are composite volcanoes more dangerous than shield volcanoes?",
          solution: "Viscous magma → explosive eruptions → pyroclastic flows, ash, lahars. Steep slopes → landslides. Shield volcanoes produce fluid lava flows — slower, less explosive.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u1-vol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between magma and lava?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Magma underground, lava on surface"
                    },
                    {
                              "id": "b",
                              "text": "Same thing"
                    },
                    {
                              "id": "c",
                              "text": "Magma is cooler"
                    },
                    {
                              "id": "d",
                              "text": "Lava is underground"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Magma vs lava",
                              "statement": "Location."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Magma underground, lava on surface.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Underground vs surface"
},
        },
        {
          id: "ciealgeo-u1-vol-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a pyroclastic flow?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pyroclastic",
                              "statement": "Hot gas cloud."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fast-moving hot gas/ash cloud.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Extremely dangerous — kills by heat/asphyxiation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Hot gas cloud"
},
        },
        {
          id: "ciealgeo-u1-vol-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are composite volcanoes more dangerous than shield volcanoes?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Volcano types",
                              "statement": "Hazard comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Viscous magma → explosive eruptions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pyroclastic flows, ash, lahars.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Steep slopes → landslides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Explosive vs effusive"
},
        },
        {
          id: "ciealgeo-u1-vol-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define magma, lava, composite, shield, pyroclastic flow, lahar. (b) What is magma vs lava? (c) What is composite volcano? (d) What is shield? (e) What is pyroclastic flow? (f) What are volcanic hazards? (g) Why are composite more dangerous? (h) Evaluate effectiveness of volcanic hazard management.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Volcanoes",
                              "statement": "Hazards, management."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Underground vs surface.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Explosive, steep.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Effusive, gentle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Hot gas cloud.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Lava, pyroclastic, lahar, ash.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Viscous magma explosive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Monitoring, evacuation effective but costly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Volcanic hazards analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u1-vol-notes",
      title: "Volcanoes — notes",
      summary: "Composite=explosive dangerous; shield=effusive less dangerous. Pyroclastic flows deadly.",
      sections: [
        { heading: "Key idea", body: "Volcano type determines eruption style and hazard severity." },
        { heading: "Management", body: "Monitoring seismic/gas/deformation enables prediction and evacuation." },
      ],
    },
  ],
};
