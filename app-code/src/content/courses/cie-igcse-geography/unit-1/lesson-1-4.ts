import type { Lesson } from "../../../types.ts";

export const lesson304: Lesson = {
  id: "cieigeo-u1-lesson-1-4",
  code: "1-4",
  title: "Natural Hazards: Earthquakes and Volcanoes",
  goal: "I CAN explain tectonic plate movement and assess earthquake/volcano impacts.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 1: natural hazards"],
  
  vocabulary: [
    { term: "Tectonic plate", definition: "Large slab of Earth's lithosphere." },
    { term: "Plate boundary", definition: "Edge where plates meet." },
    { term: "Earthquake", definition: "Sudden release of energy in Earth's crust." },
    { term: "Volcano", definition: "Opening in Earth's crust allowing magma escape." },
    { term: "Epicentre", definition: "Point on surface directly above earthquake focus." },
    { term: "Richter scale", definition: "Scale measuring earthquake magnitude." },
  ],
  concepts: [
    {
      id: "cieigeo-u1-s4-haz",
      title: "Natural hazards",
      skill: "Understand tectonic hazards and impacts.",
      lesson: {
        sections: [
          {
            heading: "Plate tectonics",
            body: "Earth's crust divided into plates. Boundaries: constructive (plates move apart — volcanoes), destructive (plates collide — earthquakes/volcanoes), conservative (plates slide — earthquakes).",
          },
          {
            heading: "Impacts",
            body: "Earthquakes: building collapse, fires, tsunamis, landslides. Volcanoes: ash fall, lava flows, pyroclastic flows, lahars. Impacts vary by magnitude, preparedness, development level.",
          },
        ],
        keyFormulas: [
          { name: "Constructive", statement: "plates apart — volcanoes" },
          { name: "Destructive", statement: "plates collide — quakes/volcanoes" },
          { name: "Conservative", statement: "plates slide — quakes" },
        ],
        workedExample: {
          problem: "Why do earthquakes occur at destructive plate boundaries?",
          solution: "Plates collide — friction builds until sudden release of energy causes seismic waves.",
        },
      },
      questions: [
        {
          id: "cieigeo-u1-nh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a tectonic plate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Large slab of Earth's lithosphere"
                    },
                    {
                              "id": "b",
                              "text": "A type of rock"
                    },
                    {
                              "id": "c",
                              "text": "A weather system"
                    },
                    {
                              "id": "d",
                              "text": "An ocean current"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tectonic plate",
                              "statement": "Earth's crust slab."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plate = large lithosphere slab.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Earth's crust slab"
},
        },
        {
          id: "cieigeo-u1-nh-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an earthquake?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Earthquake",
                              "statement": "Sudden energy release."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sudden release of energy in Earth's crust.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Causes seismic waves.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sudden energy release"
},
        },
        {
          id: "cieigeo-u1-nh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the three types of plate boundary?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plate boundaries",
                              "statement": "Constructive/destructive/conservative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constructive (apart), destructive (collide), conservative (slide).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All three correctly identified.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hazards associated with each.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Constructive, destructive, conservative"
},
        },
        {
          id: "cieigeo-u1-nh-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define tectonic plate, plate boundary, earthquake, volcano, epicentre, Richter scale. (b) What is a tectonic plate? (c) What is an earthquake? (d) What is a volcano? (e) What are the three plate boundary types? (f) What hazards occur at constructive boundaries? (g) What hazards occur at destructive boundaries? (h) Evaluate how countries can reduce earthquake impacts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Natural hazards",
                              "statement": "Plates, impacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Earth's crust slab.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Sudden energy release.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Crust opening for magma.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Constructive, destructive, conservative.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Volcanoes, new land.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Earthquakes, volcanoes, tsunamis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid impact reduction strategies.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Tectonic hazards and impacts."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u1-nh-notes",
      title: "Natural hazards — notes",
      summary: "Plates move → boundaries create hazards. Constructive=volcanoes; destructive=quakes/volcanoes; conservative=quakes.",
      sections: [
        { heading: "Key idea", body: "Plate movement drives most geological hazards." },
        { heading: "Impacts", body: "Severity depends on magnitude, preparedness, development level." },
      ],
    },
  ],
};
