import type { Lesson } from "../../../types.ts";

export const lesson511: Lesson = {
  id: "ciealgeo-u1-lesson-1-1",
  code: "1-1",
  title: "Plate Tectonics and Earthquakes",
  goal: "I CAN explain plate boundaries and earthquake hazards/management.",
  standards: ["Cambridge A Level Geography 9696", "Paper 1: physical"],
  
  vocabulary: [
    { term: "Plate tectonics", definition: "Theory of Earth's moving lithospheric plates." },
    { term: "Convergent boundary", definition: "Plates moving towards each other." },
    { term: "Divergent boundary", definition: "Plates moving apart." },
    { term: "Transform boundary", definition: "Plates sliding past each other." },
    { term: "Focus", definition: "Point underground where earthquake originates." },
    { term: "Epicentre", definition: "Point on surface directly above focus." },
  ],
  concepts: [
    {
      id: "ciealgeo-u1-s1-tect",
      title: "Plate tectonics",
      skill: "Analyse tectonic hazards.",
      lesson: {
        sections: [
          {
            heading: "Plate boundaries",
            body: "Convergent: subduction → trenches, volcanoes, earthquakes. Divergent: mid-ocean ridges, rift valleys. Transform: strike-slip faults, shallow earthquakes.",
          },
          {
            heading: "Earthquakes",
            body: "Focus depth affects intensity. Richter/Moment magnitude scales. Tsunamis from underwater quakes. Buildings collapse, fires, landslides, liquefaction.",
          },
          {
            heading: "Management",
            body: "Prediction difficult. Preparedness: building codes, early warning, evacuation. Japan/Turkey examples show effectiveness.",
          },
        ],
        keyFormulas: [
          { name: "Convergent", statement: "plates collide" },
          { name: "Divergent", statement: "plates separate" },
          { name: "Transform", statement: "plates slide" },
        ],
        workedExample: {
          problem: "Why are earthquakes more destructive in some areas than others?",
          solution: "Population density, building quality, preparedness, wealth for response, secondary hazards (tsunami, landslide).",
        },
      },
      questions: [
        {
          id: "ciealgeo-u1-tect-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a convergent boundary?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Plates moving towards each other"
                    },
                    {
                              "id": "b",
                              "text": "Plates moving apart"
                    },
                    {
                              "id": "c",
                              "text": "Plates sliding past"
                    },
                    {
                              "id": "d",
                              "text": "Plates stationary"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Convergent",
                              "statement": "Plates collide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Convergent = plates move towards.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Plates collide"
},
        },
        {
          id: "ciealgeo-u1-tect-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between focus and epicentre?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Focus vs epicentre",
                              "statement": "Location."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Focus: underground origin point.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Epicentre: surface point above focus.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Underground vs surface"
},
        },
        {
          id: "ciealgeo-u1-tect-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are earthquakes more destructive in some areas?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Hazard impact",
                              "statement": "Vulnerability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Population density + building quality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Wealth for preparedness/response.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Secondary hazards (tsunami, landslide).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vulnerability factors"
},
        },
        {
          id: "ciealgeo-u1-tect-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define plate tectonics, convergent, divergent, transform, focus, epicentre. (b) What is convergent boundary? (c) What is divergent? (d) What is transform? (e) What is focus vs epicentre? (f) What causes earthquakes? (g) What are earthquake hazards? (h) Evaluate effectiveness of earthquake management strategies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tectonics",
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
                              "reasoning": "(b) Plates collide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Plates separate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Plates slide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Underground vs surface.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Plate movement, subduction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Collapse, fire, tsunami, landslide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Building codes, early warning effective.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Plate tectonics and earthquakes."
},
        },
        {
          id: "ciealgeo-u1-tect-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which plate boundary is most associated with subduction zones and deep-focus earthquakes?",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "Convergent" },
            { "id": "b", "text": "Divergent" },
            { "id": "c", "text": "Transform" },
            { "id": "d", "text": "Passive margin" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
            { "kind": "definition", "name": "Convergent boundary", "statement": "Plates collide; subduction occurs." }
          ],
          "steps": [
            { "reasoning": "Subduction and deep-focus earthquakes occur at convergent boundaries.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "**(a)** Convergent"
},
        },
        {
          id: "ciealgeo-u1-tect-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shallow-focus earthquake directly beneath a densely populated city is likely to cause:",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "Less surface shaking than a deep-focus event" },
            { "id": "b", "text": "More intense surface shaking and building damage" },
            { "id": "c", "text": "No secondary hazards" },
            { "id": "d", "text": "Only crop damage" }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
            { "kind": "principle", "name": "Focus depth", "statement": "Shallow focus = stronger surface shaking." }
          ],
          "steps": [
            { "reasoning": "Energy released closer to the surface produces more intense shaking.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "**(b)** More intense surface shaking and building damage"
},
        },
        {
          id: "ciealgeo-u1-tect-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which earthquake management strategy is most effective BEFORE an earthquake strikes?",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "Early warning issued after shaking begins" },
            { "id": "b", "text": "Building codes, preparedness drills and evacuation plans" },
            { "id": "c", "text": "Post-disaster international aid" },
            { "id": "d", "text": "Insurance payouts to victims" }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
            { "kind": "skill", "name": "Hazard management", "statement": "Preparedness reduces impact." }
          ],
          "steps": [
            { "reasoning": "Preparedness measures act before the event; the others respond after.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "**(b)** Building codes, preparedness drills and evacuation plans"
},
        },
        {
          id: "ciealgeo-u1-tect-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An earthquake epicentre is 400 km from a city. On a map drawn at 1:5,000,000, what is the map distance between them?",
          response: {
          "type": "numeric",
          "parts": [
            { "label": "a", "answer": 8, "unit": "cm" }
          ]
},
          markscheme: {
          "principles": [
            { "kind": "skill", "name": "Map scale", "statement": "Map distance = ground distance / scale denominator." }
          ],
          "steps": [
            { "part": "a", "reasoning": "400 km = 40,000,000 cm; 40,000,000 / 5,000,000 = 8 cm.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "a) 8 cm"
},
        },
        {
          id: "ciealgeo-u1-tect-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A coastal town has a population of 200,000. Its population grows by 5% in one year, and 60% of residents live within the tsunami evacuation zone. (a) What is the population after one year? (b) How many people live in the evacuation zone?",
          response: {
          "type": "numeric",
          "parts": [
            { "label": "a", "answer": 210000 },
            { "label": "b", "answer": 126000 }
          ]
},
          markscheme: {
          "principles": [
            { "kind": "skill", "name": "Population change", "statement": "Apply percentage growth then a proportion." }
          ],
          "steps": [
            { "part": "a", "reasoning": "200,000 x 1.05 = 210,000.", "marks": 1, "markCode": "M" },
            { "part": "b", "reasoning": "210,000 x 0.60 = 126,000.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "a) 210000; b) 126000"
},
        },
        {
          id: "ciealgeo-u1-tect-q10",
          difficulty: "core",
          totalMarks: 2,
          stem": "",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [],
          "steps": [],
          "finalAnswer": ""
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u1-tect-notes",
      title: "Tectonics — notes",
      summary: "Convergent/divergent/transform boundaries. Focus=underground, epicentre=surface.",
      sections: [
        { heading: "Key idea", body: "Plate boundaries determine hazard types and distribution." },
        { heading: "Management", body: "Building codes, early warning, preparedness reduce impact." },
      ],
    },
  ],
};
