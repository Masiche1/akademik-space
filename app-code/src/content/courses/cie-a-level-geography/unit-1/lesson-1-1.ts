import type { Lesson } from "../../../types.ts";

export const lesson511: Lesson = {
  id: "ciealgeo-u1-lesson-1-1",
  code: "1-1",
  title: "Plate Tectonics and Earthquakes",
  goal: "I CAN explain plate boundaries and earthquake hazards/management.",
  standards: ["Cambridge A Level Geography 9696", "Paper 1: physical"],

  vocabulary: [
    {
      term: "Plate tectonics",
      definition: "Theory of Earth's moving lithospheric plates.",
    },
    {
      term: "Convergent boundary",
      definition: "Plates moving towards each other.",
    },
    { term: "Divergent boundary", definition: "Plates moving apart." },
    {
      term: "Transform boundary",
      definition: "Plates sliding past each other.",
    },
    {
      term: "Focus",
      definition: "Point underground where earthquake originates.",
    },
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
          problem:
            "Why are earthquakes more destructive in some areas than others?",
          solution:
            "Population density, building quality, preparedness, wealth for response, secondary hazards (tsunami, landslide).",
        },
      },
      questions: [
        {
          id: "ciealgeo-u1-tect-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a convergent boundary?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Plates moving towards each other",
              },
              {
                id: "b",
                text: "Plates moving apart",
              },
              {
                id: "c",
                text: "Plates stationary",
              },
              {
                id: "d",
                text: "Plates sliding past",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convergent",
                statement: "Plates collide.",
              },
            ],
            steps: [
              {
                reasoning: "Convergent = plates move towards.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Plates collide",
          },
        },
        {
          id: "ciealgeo-u1-tect-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between focus and epicentre?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Focus vs epicentre",
                statement: "Location.",
              },
            ],
            steps: [
              {
                reasoning: "Focus: underground origin point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Epicentre: surface point above focus.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Underground vs surface",
          },
        },
        {
          id: "ciealgeo-u1-tect-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are earthquakes more destructive in some areas?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Hazard impact",
                statement: "Vulnerability.",
              },
            ],
            steps: [
              {
                reasoning: "Population density + building quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wealth for preparedness/response.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Secondary hazards (tsunami, landslide).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vulnerability factors",
          },
        },
        {
          id: "ciealgeo-u1-tect-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define plate tectonics, convergent, divergent, transform, focus, epicentre. (b) What is convergent boundary? (c) What is divergent? (d) What is transform? (e) What is focus vs epicentre? (f) What causes earthquakes? (g) What are earthquake hazards? (h) Evaluate effectiveness of earthquake management strategies.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tectonics",
                statement: "Hazards, management.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Plates collide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Plates separate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Plates slide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Underground vs surface.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Plate movement, subduction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Collapse, fire, tsunami, landslide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Building codes, early warning effective.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Plate tectonics and earthquakes.",
          },
        },
        {
          id: "ciealgeo-u1-tect-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which plate boundary is most associated with subduction zones and deep-focus earthquakes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Convergent" },
              { id: "b", text: "Passive margin" },
              { id: "c", text: "Divergent" },
              { id: "d", text: "Transform" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convergent boundary",
                statement: "Plates collide; subduction occurs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subduction and deep-focus earthquakes occur at convergent boundaries.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Convergent",
          },
        },
        {
          id: "ciealgeo-u1-tect-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shallow-focus earthquake directly beneath a densely populated city is likely to cause:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "More intense surface shaking and building damage",
              },
              { id: "b", text: "No secondary hazards" },
              { id: "c", text: "Less surface shaking than a deep-focus event" },
              { id: "d", text: "Only crop damage" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Focus depth",
                statement: "Shallow focus = stronger surface shaking.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Energy released closer to the surface produces more intense shaking.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** More intense surface shaking and building damage",
          },
        },
        {
          id: "ciealgeo-u1-tect-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which earthquake management strategy is most effective BEFORE an earthquake strikes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Early warning issued after shaking begins" },
              { id: "b", text: "Post-disaster international aid" },
              {
                id: "c",
                text: "Building codes, preparedness drills and evacuation plans",
              },
              { id: "d", text: "Insurance payouts to victims" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Hazard management",
                statement: "Preparedness reduces impact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Preparedness measures act before the event; the others respond after.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Building codes, preparedness drills and evacuation plans",
          },
        },
        {
          id: "ciealgeo-u1-tect-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An earthquake epicentre is 400 km from a city. On a map drawn at 1:5,000,000, what is the map distance between them?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Map scale",
                statement:
                  "Map distance = ground distance / scale denominator.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "400 km = 40,000,000 cm; 40,000,000 / 5,000,000 = 8 cm.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a) 8 cm",
          },
        },
        {
          id: "ciealgeo-u1-tect-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A coastal town has a population of 200,000. Its population grows by 5% in one year, and 60% of residents live within the tsunami evacuation zone. (a) What is the population after one year? (b) How many people live in the evacuation zone?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 210000 },
              { label: "b", answer: 126000 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Population change",
                statement: "Apply percentage growth then a proportion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "200,000 x 1.05 = 210,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "210,000 x 0.60 = 126,000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a) 210000; b) 126000",
          },
        },
        {
          id: "ciealgeo-u1-tect-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of plate boundary is most associated with mid-ocean ridges and rift valleys?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Collision" },
              { id: "b", text: "Convergent" },
              { id: "c", text: "Transform" },
              { id: "d", text: "Divergent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Divergent boundary",
                statement: "Plates separate; ridges and rifts form.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divergent boundaries create mid-ocean ridges and rift valleys.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Divergent",
          },
        },
        {
          id: "ciealgeo-u1-tect-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Transform boundaries, such as the San Andreas Fault, are primarily associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shallow strike-slip earthquakes" },
              { id: "b", text: "Volcanic eruptions" },
              { id: "c", text: "Deep-focus earthquakes and subduction" },
              { id: "d", text: "Mountain building by folding" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transform boundary",
                statement: "Plates slide past; shallow strike-slip quakes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sliding motion produces shallow strike-slip earthquakes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Shallow strike-slip earthquakes",
          },
        },
        {
          id: "ciealgeo-u1-tect-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fault line is 250 km from a town. On a map drawn at 1:2,500,000, what is the map distance between the fault line and the town?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Map scale",
                statement:
                  "Map distance = ground distance / scale denominator.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "250 km = 25,000,000 cm; 25,000,000 / 2,500,000 = 10 cm.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a) 10 cm",
          },
        },
        {
          id: "ciealgeo-u1-tect-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A city has a population of 500,000. After an earthquake, 8% of residents leave the city. (a) How many people left? (b) What is the city's new population?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40000 },
              { label: "b", answer: 460000 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Population change",
                statement: "Apply percentage change to a base population.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "500,000 x 0.08 = 40,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "500,000 - 40,000 = 460,000 (or 500,000 x 0.92).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a) 40000; b) 460000",
          },
        },
        {
          id: "ciealgeo-u1-tect-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why earthquakes at transform boundaries tend to be shallow-focus.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transform motion",
                statement: "Horizontal sliding is confined to the upper crust.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plates slide horizontally past each other along a vertical fault plane.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The stress is released in the upper crust where rocks are brittle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shallow focus means shaking is felt strongly at the surface.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Horizontal sliding confined to upper crust",
          },
        },
        {
          id: "ciealgeo-u1-tect-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the effectiveness of earthquake early-warning systems in reducing the impacts of earthquakes.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Hazard management",
                statement:
                  "Early warning gives seconds of notice to take protective action.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Warning gives seconds to minutes to stop trains, halt surgery, shelter under cover.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Japan's system has reduced casualties and damage in several events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitations: short lead time, false alarms, cost, may create complacency.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Most effective when combined with building codes and preparedness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Effective but limited by lead time and requires integration with other measures",
          },
        },
        {
          id: "ciealgeo-u1-tect-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Liquefaction during an earthquake is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Buildings collapsing from shaking" },
              { id: "b", text: "A type of seismic wave" },
              {
                id: "c",
                text: "Saturated soil losing strength and behaving like a liquid",
              },
              { id: "d", text: "Magma reaching the surface" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Liquefaction",
                statement: "Saturated sediment loses strength under shaking.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shaking raises water pressure in saturated soil, causing it to flow.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Saturated soil losing strength and behaving like a liquid",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u1-tect-notes",
      title: "Tectonics — notes",
      summary:
        "Convergent/divergent/transform boundaries. Focus=underground, epicentre=surface.",
      sections: [
        {
          heading: "Key idea",
          body: "Plate boundaries determine hazard types and distribution.",
        },
        {
          heading: "Management",
          body: "Building codes, early warning, preparedness reduce impact.",
        },
      ],
    },
  ],
};
