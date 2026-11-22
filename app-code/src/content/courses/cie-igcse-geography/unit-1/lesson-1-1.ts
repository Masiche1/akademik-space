import type { Lesson } from "../../../types.ts";

export const lesson301: Lesson = {
  id: "cieigeo-u1-lesson-1-1",
  code: "1-1",
  title: "Freshwater Systems and Drainage Basins",
  goal: "I CAN describe the water cycle, drainage basins and river processes.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 1: physical geography"],

  vocabulary: [
    {
      term: "Water cycle",
      definition:
        "Continuous movement of water between atmosphere, land, oceans.",
    },
    {
      term: "Drainage basin",
      definition: "Area drained by a river and its tributaries.",
    },
    { term: "Watershed", definition: "Boundary separating drainage basins." },
    { term: "Tributary", definition: "Smaller river joining a main river." },
    { term: "Erosion", definition: "Wearing away of land surface." },
    { term: "Deposition", definition: "Dropping of sediment by water." },
  ],
  concepts: [
    {
      id: "cieigeo-u1-s1-water",
      title: "Freshwater systems",
      skill: "Understand water cycle and drainage basins.",
      lesson: {
        sections: [
          {
            heading: "Water cycle",
            body: "Evaporation→condensation→precipitation→collection. Oceans evaporate; water falls as rain/snow; flows back to oceans via rivers. Energy from sun drives cycle.",
          },
          {
            heading: "Drainage basin",
            body: "Area drained by river system. Processes: erosion (upper course), transportation (middle), deposition (lower course). Landforms: V-shaped valleys, meanders, oxbow lakes, deltas, floodplains.",
          },
        ],
        keyFormulas: [
          {
            name: "Water cycle",
            statement: "evaporation→condensation→precipitation",
          },
          { name: "Drainage basin", statement: "river system area" },
        ],
        workedExample: {
          problem:
            "Why does a river erode more in upper course and deposit in lower course?",
          solution:
            "Upper: steep gradient, fast flow, high energy → erosion. Lower: gentle gradient, slow flow, low energy → deposition.",
        },
      },
      questions: [
        {
          id: "cieigeo-u1-wt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the water cycle?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Continuous movement of water between atmosphere, land, oceans",
              },
              {
                id: "b",
                text: "A landform",
              },
              {
                id: "c",
                text: "A weather pattern",
              },
              {
                id: "d",
                text: "A type of river",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Water cycle",
                statement: "Water movement.",
              },
            ],
            steps: [
              {
                reasoning: "Water cycle = continuous water movement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Water movement cycle",
          },
        },
        {
          id: "cieigeo-u1-wt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a drainage basin?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Drainage basin",
                statement: "River system area.",
              },
            ],
            steps: [
              {
                reasoning: "Area drained by river and tributaries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bounded by watershed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "River system area",
          },
        },
        {
          id: "cieigeo-u1-wt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What processes occur in the upper, middle and lower course of a river?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "River processes",
                statement: "Erosion/transport/deposition.",
              },
            ],
            steps: [
              {
                reasoning: "Upper: erosion, V-shaped valley.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Middle: transportation, meanders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lower: deposition, floodplains/deltas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Erosion→transport→deposition",
          },
        },
        {
          id: "cieigeo-u1-wt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define water cycle, drainage basin, watershed, tributary, erosion, deposition. (b) What is the water cycle? (c) What is a drainage basin? (d) What is a watershed? (e) What processes occur in upper course? (f) What processes occur in lower course? (g) Name 3 river landforms. (h) Draw a cross-section of a river showing erosion and deposition.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Freshwater",
                statement: "Water cycle, rivers.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Continuous water movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) River system area.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Basin boundary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Erosion, V-shaped valley.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Deposition, floodplains/deltas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Three valid landforms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid cross-section.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Freshwater systems and rivers.",
          },
        },
        {
          id: "cieigeo-u1-wt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process dominates the lower course of a river?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vertical erosion of the bed" },
              { id: "b", text: "Solution of valley sides" },
              { id: "c", text: "Deposition of fine sediment" },
              { id: "d", text: "Freeze-thaw weathering" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lower course",
                statement:
                  "Gentle gradient, slow flow, low energy → deposition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low energy in the lower course means sediment is deposited.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Deposition",
          },
        },
        {
          id: "cieigeo-u1-wt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a watershed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mouth of a river" },
              { id: "b", text: "The boundary separating drainage basins" },
              { id: "c", text: "The highest point of a drainage basin" },
              { id: "d", text: "A type of tributary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Watershed",
                statement: "Boundary between drainage basins.",
              },
            ],
            steps: [
              {
                reasoning: "Watershed = line dividing one basin from another.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Boundary separating drainage basins",
          },
        },
        {
          id: "cieigeo-u1-wt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does an oxbow lake form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The neck of a meander is cut off by erosion" },
              { id: "b", text: "Sediment is deposited at the river mouth" },
              { id: "c", text: "A landslide blocks the river" },
              { id: "d", text: "A glacier melts on the valley floor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Oxbow lake",
                statement: "Cut-off meander loop.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Meander migration narrows the neck until the river cuts through, abandoning the loop.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Meander neck cut off by erosion",
          },
        },
        {
          id: "cieigeo-u1-wt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which landform is most likely to form where a large river meets the sea?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Waterfall" },
              { id: "b", text: "Gorge" },
              { id: "c", text: "Delta" },
              { id: "d", text: "V-shaped valley" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "River landforms",
                statement: "Landforms by course.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deltas form at river mouths where deposition occurs in standing water.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Delta",
          },
        },
        {
          id: "cieigeo-u1-wt-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A river channel is 20 m wide and 3 m deep. The water flows at 1.5 m/s. Calculate (a) the cross-sectional area and (b) the discharge.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Cross-sectional area (m²)",
                answer: 60,
                unit: "m^2",
              },
              { label: "(b) Discharge (m³/s)", answer: 90, unit: "m^3/s" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Discharge",
                statement: "Q = width × depth × velocity.",
              },
            ],
            steps: [
              { reasoning: "Area = 20 × 3 = 60 m².", marks: 1, markCode: "M" },
              {
                reasoning: "Discharge = 60 × 1.5 = 90 m³/s.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Area = 60 m²; discharge = 90 m³/s",
          },
        },
        {
          id: "cieigeo-u1-wt-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country has a population of 2 400 000 and an area of 48 000 km². Its birth rate is 22 per 1000 and death rate is 9 per 1000. Calculate (a) population density and (b) natural increase per 1000.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Population density (per km²)",
                answer: 50,
                unit: "per km^2",
              },
              {
                label: "(b) Natural increase (per 1000)",
                answer: 13,
                unit: "per 1000",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Density and natural increase",
                statement:
                  "Density = pop ÷ area; NI = birth rate − death rate.",
              },
            ],
            steps: [
              {
                reasoning: "Density = 2 400 000 ÷ 48 000 = 50 per km².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Natural increase = 22 − 9 = 13 per 1000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Density = 50 per km²; natural increase = 13 per 1000",
          },
        },
        {
          id: "cieigeo-u1-wt-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A river drops 240 m over a distance of 12 km. Calculate (a) the gradient in m/km and (b) the height lost over the first 5 km.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Gradient (m/km)", answer: 20, unit: "m/km" },
              {
                label: "(b) Height lost over 5 km (m)",
                answer: 100,
                unit: "m",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Gradient",
                statement: "Gradient = height loss ÷ distance.",
              },
            ],
            steps: [
              {
                reasoning: "Gradient = 240 ÷ 12 = 20 m/km.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Height lost = 20 × 5 = 100 m.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Gradient = 20 m/km; 100 m lost over 5 km",
          },
        },
        {
          id: "cieigeo-u1-wt-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three processes by which a river transports sediment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transportation",
                statement: "How rivers move sediment.",
              },
            ],
            steps: [
              {
                reasoning: "Traction — large particles rolled along the bed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Suspension — fine particles carried within the flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Saltation — small particles bounced along the bed (solution also acceptable).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Traction, suspension, saltation",
          },
        },
        {
          id: "cieigeo-u1-wt-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A V-shaped valley is most characteristic of which part of a river's course?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Middle course" },
              { id: "b", text: "Lower course" },
              { id: "c", text: "Upper course" },
              { id: "d", text: "River mouth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Valley formation",
                statement: "Vertical erosion → V-shaped valleys.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Steep gradient and vertical erosion in the upper course produce V-shaped valleys.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Upper course",
          },
        },
        {
          id: "cieigeo-u1-wt-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What provides the energy that drives the water cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Moon's gravity" },
              { id: "b", text: "Earth's magnetic field" },
              { id: "c", text: "Tectonic movement" },
              { id: "d", text: "Solar energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Water cycle energy",
                statement: "Sun drives evaporation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solar energy powers evaporation and the whole cycle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Solar energy",
          },
        },
        {
          id: "cieigeo-u1-wt-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A river transports an average of 4 tonnes of sediment per day. Calculate (a) the mass transported in one week and (b) the mass transported in one year (365 days).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Mass per week (tonnes)",
                answer: 28,
                unit: "tonnes",
              },
              {
                label: "(b) Mass per year (tonnes)",
                answer: 1460,
                unit: "tonnes",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sediment load",
                statement: "Daily load × time period.",
              },
            ],
            steps: [
              {
                reasoning: "Per week = 4 × 7 = 28 tonnes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Per year = 4 × 365 = 1460 tonnes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "28 tonnes per week; 1460 tonnes per year",
          },
        },
        {
          id: "cieigeo-u1-wt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how three human activities can affect the water cycle or drainage basin of a river.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Human impact",
                statement: "Activity → mechanism → effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deforestation reduces evapotranspiration → less atmospheric moisture → reduced rainfall.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dams store water and trap sediment → reduced discharge and deposition downstream.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Urbanisation increases impermeable surfaces → faster runoff, higher flood risk, less infiltration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "All three explained with mechanism, not just named.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deforestation, dams and urbanisation each alter water flows and storage",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u1-wt-notes",
      title: "Freshwater — notes",
      summary:
        "Water cycle=evaporation→condensation→precipitation. Rivers erode upper, deposit lower course.",
      sections: [
        {
          heading: "Key idea",
          body: "River processes change from erosion (upper) to deposition (lower) course.",
        },
        {
          heading: "Landforms",
          body: "V-shaped valleys, meanders, oxbow lakes, floodplains, deltas.",
        },
      ],
    },
  ],
};
