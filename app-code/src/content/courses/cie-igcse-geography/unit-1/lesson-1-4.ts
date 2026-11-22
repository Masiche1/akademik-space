import type { Lesson } from "../../../types.ts";

export const lesson304: Lesson = {
  id: "cieigeo-u1-lesson-1-4",
  code: "1-4",
  title: "Natural Hazards: Earthquakes and Volcanoes",
  goal: "I CAN explain tectonic plate movement and assess earthquake/volcano impacts.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 1: natural hazards"],

  vocabulary: [
    {
      term: "Tectonic plate",
      definition: "Large slab of Earth's lithosphere.",
    },
    { term: "Plate boundary", definition: "Edge where plates meet." },
    {
      term: "Earthquake",
      definition: "Sudden release of energy in Earth's crust.",
    },
    {
      term: "Volcano",
      definition: "Opening in Earth's crust allowing magma escape.",
    },
    {
      term: "Epicentre",
      definition: "Point on surface directly above earthquake focus.",
    },
    {
      term: "Richter scale",
      definition: "Scale measuring earthquake magnitude.",
    },
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
          {
            name: "Destructive",
            statement: "plates collide — quakes/volcanoes",
          },
          { name: "Conservative", statement: "plates slide — quakes" },
        ],
        workedExample: {
          problem: "Why do earthquakes occur at destructive plate boundaries?",
          solution:
            "Plates collide — friction builds until sudden release of energy causes seismic waves.",
        },
      },
      questions: [
        {
          id: "cieigeo-u1-nh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a tectonic plate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Large slab of Earth's lithosphere",
              },
              {
                id: "b",
                text: "A weather system",
              },
              {
                id: "c",
                text: "A type of rock",
              },
              {
                id: "d",
                text: "An ocean current",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tectonic plate",
                statement: "Earth's crust slab.",
              },
            ],
            steps: [
              {
                reasoning: "Plate = large lithosphere slab.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Earth's crust slab",
          },
        },
        {
          id: "cieigeo-u1-nh-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an earthquake?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earthquake",
                statement: "Sudden energy release.",
              },
            ],
            steps: [
              {
                reasoning: "Sudden release of energy in Earth's crust.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Causes seismic waves.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Sudden energy release",
          },
        },
        {
          id: "cieigeo-u1-nh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the three types of plate boundary?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Plate boundaries",
                statement: "Constructive/destructive/conservative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Constructive (apart), destructive (collide), conservative (slide).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three correctly identified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hazards associated with each.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Constructive, destructive, conservative",
          },
        },
        {
          id: "cieigeo-u1-nh-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define tectonic plate, plate boundary, earthquake, volcano, epicentre, Richter scale. (b) What is a tectonic plate? (c) What is an earthquake? (d) What is a volcano? (e) What are the three plate boundary types? (f) What hazards occur at constructive boundaries? (g) What hazards occur at destructive boundaries? (h) Evaluate how countries can reduce earthquake impacts.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Natural hazards",
                statement: "Plates, impacts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Earth's crust slab.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Sudden energy release.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Crust opening for magma.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Constructive, destructive, conservative.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Volcanoes, new land.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Earthquakes, volcanoes, tsunamis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid impact reduction strategies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tectonic hazards and impacts.",
          },
        },
        {
          id: "cieigeo-u1-nh-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of plate boundary creates new crust as plates move apart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constructive" },
              { id: "b", text: "Destructive" },
              { id: "c", text: "Subduction" },
              { id: "d", text: "Conservative" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Constructive boundary",
                statement: "Plates move apart — new crust forms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Constructive boundaries are where plates move apart and new crust forms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Constructive",
          },
        },
        {
          id: "cieigeo-u1-nh-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The point on the Earth's surface directly above the earthquake focus is called the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Seismic gap" },
              { id: "b", text: "Fault line" },
              { id: "c", text: "Epicentre" },
              { id: "d", text: "Hypocentre" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Epicentre",
                statement: "Surface point above the focus.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The epicentre lies on the surface directly above the focus.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Epicentre",
          },
        },
        {
          id: "cieigeo-u1-nh-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On the Richter scale each whole-number increase in magnitude releases roughly 31.6 times more energy. If a magnitude 5 earthquake releases 1 unit of energy, (a) about how much energy does a magnitude 6 earthquake release? (b) about how much does a magnitude 7 earthquake release?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 31.6, tolerance: 0.5 },
              { label: "b", answer: 1000, tolerance: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Richter scale",
                statement: "Each +1 magnitude ≈ 31.6x energy.",
              },
            ],
            steps: [
              {
                reasoning: "(a) One step up multiplies energy by about 31.6.",
                working: "1 \\times 31.6 = 31.6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Two steps up multiplies by 31.6 squared ≈ 1000.",
                working: "31.6^2 \\approx 1000",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) ≈31.6 units (b) ≈1000 units",
          },
        },
        {
          id: "cieigeo-u1-nh-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two impacts of a volcanic eruption on the surrounding area.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Volcanic impacts",
                statement: "Ash, lava, pyroclastic flows and lahars.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two valid impacts, e.g. ash fall burying crops, lava flows destroying property.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second distinct impact, e.g. pyroclastic flows or lahars.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. ash fall and lava flows",
          },
        },
        {
          id: "cieigeo-u1-nh-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A lahar is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of earthquake wave" },
              {
                id: "b",
                text: "A fast-moving mixture of mud, debris and water flowing down a volcano",
              },
              { id: "c", text: "A volcanic gas cloud" },
              { id: "d", text: "A slow-moving glacier" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lahar",
                statement: "Volcanic mudflow.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A lahar is a fast flow of volcanic mud and debris, often triggered by rain or melting ice.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Volcanic mudflow",
          },
        },
        {
          id: "cieigeo-u1-nh-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Volcanic ash covers an area of 500 km² to a depth of 2 cm. (a) Calculate the volume of ash in km³. (b) Convert that depth to millimetres.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "km³" },
              { label: "b", answer: 20, unit: "mm" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume and unit conversion",
                statement: "Volume = area x depth; 1 cm = 10 mm.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Depth = 0.02 km; volume = 500 x 0.02.",
                working: "500 \\times 0.02 = 10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 2 cm = 20 mm.",
                working: "2 \\times 10 = 20",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 10 km³ (b) 20 mm",
          },
        },
        {
          id: "cieigeo-u1-nh-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the impacts of a similar-magnitude earthquake can differ greatly between countries.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hazard impacts",
                statement: "Impacts depend on vulnerability and preparedness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wealthier countries have better building standards and infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Preparedness: early warning systems, drills and emergency services reduce casualties.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poorer countries may lack resources for prediction, response and rebuilding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Impacts vary with development and preparedness",
          },
        },
        {
          id: "cieigeo-u1-nh-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a secondary hazard caused by an earthquake?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Epicentre location" },
              { id: "b", text: "Plate movement" },
              { id: "c", text: "Tsunami" },
              { id: "d", text: "Focus depth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary hazards",
                statement: "Effects following the main hazard.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Submarine earthquakes can trigger tsunamis, a secondary hazard.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Tsunami",
          },
        },
        {
          id: "cieigeo-u1-nh-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A tsunami wave travels at 800 km per hour towards a coast 4000 km away. (a) How long does it take to reach the coast? (b) If the wave period is 15 seconds, how many waves arrive per minute?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5, unit: "hours" },
              { label: "b", answer: 4, unit: "waves/minute" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Speed and frequency",
                statement: "Time = distance ÷ speed; frequency = 60 ÷ period.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Time = 4000 ÷ 800.",
                working: "4000 / 800 = 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Waves per minute = 60 ÷ 15.",
                working: "60 / 15 = 4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 5 hours (b) 4 waves per minute",
          },
        },
        {
          id: "cieigeo-u1-nh-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate strategies that countries can use to reduce the impacts of volcanic eruptions.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hazard management",
                statement:
                  "Prediction, planning and protection reduce impacts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Monitoring and prediction allow early warnings and evacuation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Land-use planning keeps settlements away from high-risk zones.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Building design and protective structures reduce damage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Costs are high and prediction is not always accurate — a balanced judgement is needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Prediction, planning and engineering reduce volcanic impacts",
          },
        },
        {
          id: "cieigeo-u1-nh-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Conservative plate boundaries are most commonly associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ocean trenches" },
              { id: "b", text: "Volcanoes and new crust" },
              { id: "c", text: "Mountain building only" },
              { id: "d", text: "Shallow-focus earthquakes and no volcanoes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservative boundaries",
                statement: "Plates slide past each other.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sliding plates cause earthquakes but not the magma rise that forms volcanoes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Shallow-focus earthquakes, no volcanoes",
          },
        },
        {
          id: "cieigeo-u1-nh-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define tectonic plate, plate boundary, earthquake, volcano, epicentre, Richter scale. (b) Name the three plate boundary types and the motion at each. (c) Which hazards occur at destructive boundaries? (d) Which hazards occur at constructive boundaries? (e) Explain how an earthquake causes damage. (f) What is a tsunami and how is it triggered? (g) Describe two ways of predicting volcanic eruptions. (h) Evaluate how well-prepared your own country is for natural hazards.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Natural hazards",
                statement: "Plates, hazards, prediction and management.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Constructive (apart), destructive (collide), conservative (slide).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Earthquakes, volcanoes, tsunamis, landslides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Volcanoes and creation of new land.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Seismic waves shake buildings; secondary effects such as fire and landslides add damage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Large sea wave triggered by submarine earthquakes or volcanic eruptions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Monitoring gas emissions, ground deformation and seismic activity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid evaluation of preparedness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tectonic plates, hazards and their management.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u1-nh-notes",
      title: "Natural hazards — notes",
      summary:
        "Plates move → boundaries create hazards. Constructive=volcanoes; destructive=quakes/volcanoes; conservative=quakes.",
      sections: [
        {
          heading: "Key idea",
          body: "Plate movement drives most geological hazards.",
        },
        {
          heading: "Impacts",
          body: "Severity depends on magnitude, preparedness, development level.",
        },
      ],
    },
  ],
};
