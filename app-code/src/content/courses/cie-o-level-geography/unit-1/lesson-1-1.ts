import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "oleg-u1-lesson-1-1",
  code: "1-1",
  title: "River Landscapes and Processes",
  goal: "I CAN describe river processes and landforms in the upper, middle and lower course.",
  standards: ["2217: Physical geography — rivers"],
  vocabulary: [
    {
      term: "Erosion",
      definition: "Wearing away of land by water, wind or ice.",
    },
    {
      term: "Transportation",
      definition: "Movement of eroded material downstream.",
    },
    {
      term: "Deposition",
      definition: "Dropping of sediment when energy decreases.",
    },
    {
      term: "V-shaped valley",
      definition: "Narrow valley with steep sides in upper course.",
    },
    { term: "Meander", definition: "Sinuous bend in a river's course." },
    {
      term: "Floodplain",
      definition: "Flat land either side of a river built by deposition.",
    },
  ],
  concepts: [
    {
      id: "oleg-u1-river-processes",
      title: "River processes",
      skill: "Explain erosion, transportation and deposition in rivers.",
      lesson: {
        sections: [
          {
            heading: "River energy",
            body: "Rivers erode when energy is high (steep gradient, fast flow) and deposit when energy is low (gentle gradient, slow flow). The balance between erosion and deposition changes along the river's course.",
          },
          {
            heading: "Erosion types",
            body: "Hydraulic action: water force dislodges material. Abrasion: sediment grinds bed/ banks. Attrition: rocks collide and break into smaller pieces. Solution: minerals dissolve in water.",
          },
          {
            heading: "Transportation and deposition",
            body: "Transportation: dissolved load (invisible), suspended load (fine particles), bed load (large rocks bouncing). Deposition: when velocity drops — inside bends, at mouth, floodplains.",
          },
        ],
        keyFormulas: [
          {
            name: "River processes",
            statement: "Erosion=wear away; Transport=move; Deposition=drop.",
          },
        ],
        workedExample: {
          problem: "Why does a river erode more in its upper course?",
          solution:
            "Steep gradient → fast flow → high energy → erosion dominates over deposition.",
        },
      },
      questions: [
        {
          id: "oleg-u1-rp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which river process wears away the bed and banks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weathering" },
              { id: "b", text: "Erosion" },
              { id: "c", text: "Deposition" },
              { id: "d", text: "Transportation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Erosion",
                statement: "Wearing away of land.",
              },
            ],
            steps: [
              { reasoning: "Erosion = wear away.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Erosion",
            commonErrors: ["Confusing with weathering."],
          },
        },
        {
          id: "oleg-u1-rp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Erosion types",
                statement: "Hydraulic action, abrasion, attrition, solution.",
              },
            ],
            steps: [
              { reasoning: "Any two types.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Hydraulic action, abrasion, attrition, solution.",
            commonErrors: ["Saying 'weathering'."],
          },
        },
        {
          id: "oleg-u1-rp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why rivers deposit sediment in their lower course.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deposition",
                statement: "Low energy → drops sediment.",
              },
            ],
            steps: [
              {
                reasoning: "Gentle gradient → slow flow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Low energy → can't carry load.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sediment drops → deposition.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Low energy → can't carry → deposition.",
            commonErrors: ["Saying energy is high."],
          },
        },
        {
          id: "oleg-u1-rp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "River processes.",
          parts: [
            { label: "a", prompt: "Define erosion.", marks: 1 },
            { label: "b", prompt: "Name two erosion types.", marks: 1 },
            { label: "c", prompt: "Three types of load?", marks: 2 },
            { label: "d", prompt: "Why does lower course deposit?", marks: 2 },
            { label: "e", prompt: "Why does upper course erode?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "River processes",
                statement: "Definitions+types+explanations.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Wear away.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Any two.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Dissolved/suspended/bed.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "All three.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Low energy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Drops sediment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Steep gradient.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Fast flow/high energy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Erosion dominates.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) erosion (b) types (c) loads (d) low energy (e) high energy",
          },
        },
        {
          id: "oleg-u1-rp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of load is carried invisibly dissolved in the water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dissolved load" },
              { id: "b", text: "Bed load" },
              { id: "c", text: "Traction load" },
              { id: "d", text: "Suspended load" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dissolved load",
                statement: "Invisible load carried in solution.",
              },
            ],
            steps: [
              {
                reasoning: "Dissolved load = invisible.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Dissolved load",
            commonErrors: ["Confusing with suspended load."],
          },
        },
        {
          id: "oleg-u1-rp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which part of a river's course is deposition greatest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the source" },
              { id: "b", text: "Lower course" },
              { id: "c", text: "Middle course" },
              { id: "d", text: "Upper course" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deposition",
                statement: "Greatest where energy is lowest.",
              },
            ],
            steps: [
              {
                reasoning: "Lower course = gentle = low energy.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Lower course",
            commonErrors: ["Confusing with upper course erosion."],
          },
        },
        {
          id: "oleg-u1-rp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which erosion process involves minerals dissolving in river water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attrition" },
              { id: "b", text: "Abrasion" },
              { id: "c", text: "Hydraulic action" },
              { id: "d", text: "Solution" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solution",
                statement: "Minerals dissolve in water.",
              },
            ],
            steps: [
              {
                reasoning: "Solution = dissolving.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Solution",
            commonErrors: ["Confusing with abrasion."],
          },
        },
        {
          id: "oleg-u1-rp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How is bed load mainly moved along a river bed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bouncing and rolling (traction)" },
              { id: "b", text: "Suspended high in the water column" },
              { id: "c", text: "Carried by wind" },
              { id: "d", text: "Completely dissolved in the water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bed load",
                statement: "Large material bounced/rolled along bed.",
              },
            ],
            steps: [
              {
                reasoning: "Bed load = traction/bouncing.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Bouncing and rolling",
            commonErrors: ["Confusing with suspended load."],
          },
        },
        {
          id: "oleg-u1-rp-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deposition in a river occurs mainly when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Velocity and energy decrease" },
              { id: "b", text: "Discharge doubles" },
              { id: "c", text: "Velocity increases" },
              { id: "d", text: "Gradient becomes steeper" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deposition",
                statement: "Low energy → sediment drops.",
              },
            ],
            steps: [
              {
                reasoning: "Low energy = deposition.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Velocity and energy decrease",
            commonErrors: ["Reversing the cause."],
          },
        },
        {
          id: "oleg-u1-rp-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best describes attrition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water force dislodges material" },
              { id: "b", text: "Sediment grinds the bed and banks" },
              { id: "c", text: "Minerals dissolve in water" },
              { id: "d", text: "Rocks collide and break into smaller pieces" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Attrition",
                statement: "Rock fragments collide and break up.",
              },
            ],
            steps: [
              {
                reasoning: "Attrition = collisions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Rocks collide and break",
            commonErrors: ["Confusing with abrasion."],
          },
        },
        {
          id: "oleg-u1-rp-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the three types of load a river transports.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Load types",
                statement: "Dissolved, suspended, bed.",
              },
            ],
            steps: [
              { reasoning: "Dissolved load.", marks: 1, markCode: "AO1" },
              { reasoning: "Suspended load.", marks: 1, markCode: "AO1" },
              { reasoning: "Bed load.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Dissolved, suspended and bed load.",
            commonErrors: ["Missing one type."],
          },
        },
        {
          id: "oleg-u1-rp-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a river's energy and dominant process change from its upper to lower course.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy gradient",
                statement: "High energy upper → low energy lower.",
              },
            ],
            steps: [
              {
                reasoning: "Upper course: steep gradient, fast flow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "High energy → erosion dominates.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Lower course: gentle gradient, slow flow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Low energy → deposition dominates.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Energy falls downstream: erosion → deposition.",
            commonErrors: ["Saying energy increases downstream."],
          },
        },
        {
          id: "oleg-u1-rp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define transportation in a river.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transportation",
                statement: "Movement of eroded material downstream.",
              },
            ],
            steps: [
              {
                reasoning: "Movement of load downstream.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Includes dissolved/suspended/bed load.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Moving eroded material downstream.",
            commonErrors: ["Confusing with erosion."],
          },
        },
        {
          id: "oleg-u1-rp-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a river deposits sediment when it enters a lake or the sea.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mouth deposition",
                statement: "Energy lost at mouth → deposition.",
              },
            ],
            steps: [
              {
                reasoning: "Gradient flattens at mouth.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Flow spreads out → velocity drops.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Energy too low to carry load.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sediment is dropped → delta forms.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Velocity drops at mouth → deposition → delta.",
            commonErrors: ["Ignoring the drop in velocity."],
          },
        },
        {
          id: "oleg-u1-rp-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two situations in which a river's velocity decreases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Velocity decrease",
                statement: "Lower gradient, bends, floodplain, mouth.",
              },
            ],
            steps: [
              { reasoning: "Any two valid situations.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly explained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "E.g. gentler gradient, inside bends, mouth.",
            commonErrors: ["Repeating the same situation."],
          },
        },
        {
          id: "oleg-u1-rp-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "River processes.",
          parts: [
            { label: "a", prompt: "Define deposition.", marks: 1 },
            { label: "b", prompt: "Name two erosion types.", marks: 1 },
            { label: "c", prompt: "Three types of load?", marks: 2 },
            { label: "d", prompt: "Why does deposition occur at a river mouth?", marks: 2 },
            { label: "e", prompt: "How does energy change along a river?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "River processes",
                statement: "Definitions+types+energy changes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Dropping of sediment.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Any two types.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Dissolved/suspended/bed.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "All three.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Velocity drops.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Energy too low → deposits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "High in upper course.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Decreases downstream.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Erosion→deposition shift.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) deposition (b) erosion types (c) loads (d) low energy (e) energy falls",
          },
        },
      ],
    },
    {
      id: "oleg-u1-landforms",
      title: "River landforms",
      skill: "Describe landforms in upper, middle and lower river courses.",
      lesson: {
        sections: [
          {
            heading: "Upper course landforms",
            body: "V-shaped valleys: steep sides from vertical erosion. Waterfalls: resistant rock over softer rock — undercutting creates plunge pool. Gorges: steep-sided valleys from rapid downcutting.",
          },
          {
            heading: "Middle course landforms",
            body: "Interlocking spurs: ridges projecting into valley. Meanders: lateral erosion creates sinuous bends — erosion on outside, deposition on inside. Oxbow lakes: meander neck cut off.",
          },
          {
            heading: "Lower course landforms",
            body: "Floodplains: wide flat land from deposition. Levees: raised banks from repeated flooding. Deltas: triangular deposits at river mouth — arcuate (Nile), cuspate (Tiber), bird's foot (Mississippi).",
          },
        ],
        keyFormulas: [
          {
            name: "Landforms",
            statement:
              "Upper=V-valley+waterfall; Middle=meander+oxbow; Lower=floodplain+delta.",
          },
        ],
        workedExample: {
          problem: "How is an oxbow lake formed?",
          solution:
            "Meander neck erodes through → river takes shortcut → old meander cut off → oxbow lake remains.",
        },
      },
      questions: [
        {
          id: "oleg-u1-rl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which landform is found in the upper course?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delta" },
              { id: "b", text: "Floodplain" },
              { id: "c", text: "V-shaped valley" },
              { id: "d", text: "Meander" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "V-shaped valley",
                statement: "Upper course landform.",
              },
            ],
            steps: [
              {
                reasoning: "V-valley = upper course.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** V-shaped valley",
            commonErrors: ["Confusing with lower course."],
          },
        },
        {
          id: "oleg-u1-rl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How is a waterfall formed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Waterfall",
                statement: "Resistant rock over softer rock → undercutting.",
              },
            ],
            steps: [
              {
                reasoning: "Resistant over softer rock.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Undercutting → collapse → retreat.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Resistant rock over softer → undercutting → retreat.",
            commonErrors: ["Saying it's from deposition."],
          },
        },
        {
          id: "oleg-u1-rl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a meander develops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meander",
                statement: "Lateral erosion outside, deposition inside.",
              },
            ],
            steps: [
              {
                reasoning: "Water swings → faster outside bend.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Erosion outside, deposition inside.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Amplifies → meander grows.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Outside erosion + inside deposition → meander grows.",
            commonErrors: ["Reversing erosion/deposition."],
          },
        },
        {
          id: "oleg-u1-rl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "River landforms.",
          parts: [
            { label: "a", prompt: "Upper course landform?", marks: 1 },
            { label: "b", prompt: "Middle course landform?", marks: 1 },
            { label: "c", prompt: "Lower course landform?", marks: 1 },
            { label: "d", prompt: "How is waterfall formed?", marks: 3 },
            { label: "e", prompt: "How is delta formed?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Landforms",
                statement: "Courses+formation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "V-valley/waterfall.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Meander/oxbow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Floodplain/delta.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Resistant over softer.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Undercutting.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Retreat.", marks: 1, markCode: "AO2" },
              {
                part: "e",
                reasoning: "River reaches sea.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Energy drops → deposition.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Triangular deposit.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) upper (b) middle (c) lower (d) waterfall (e) delta",
          },
        },
        {
          id: "oleg-u1-rl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which landform is found in the lower course of a river?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delta" },
              { id: "b", text: "Waterfall" },
              { id: "c", text: "V-shaped valley" },
              { id: "d", text: "Interlocking spurs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Delta",
                statement: "Depositional landform at river mouth.",
              },
            ],
            steps: [
              { reasoning: "Delta = lower course.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Delta",
            commonErrors: ["Confusing with upper course."],
          },
        },
        {
          id: "oleg-u1-rl-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which process mainly forms a floodplain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attrition" },
              { id: "b", text: "Transportation only" },
              { id: "c", text: "Erosion" },
              { id: "d", text: "Deposition" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Floodplain",
                statement: "Built by deposition on either side of river.",
              },
            ],
            steps: [
              {
                reasoning: "Floodplain = deposition.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Deposition",
            commonErrors: ["Saying erosion."],
          },
        },
        {
          id: "oleg-u1-rl-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An oxbow lake is formed when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A waterfall collapses" },
              { id: "b", text: "A V-shaped valley widens" },
              { id: "c", text: "A delta spreads into the sea" },
              { id: "d", text: "A meander neck is cut off" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oxbow lake",
                statement: "Cut-off meander in middle course.",
              },
            ],
            steps: [
              {
                reasoning: "Oxbow = cut-off meander.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Meander neck cut off",
            commonErrors: ["Confusing with delta."],
          },
        },
        {
          id: "oleg-u1-rl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Levees are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raised banks built by repeated flooding" },
              { id: "b", text: "Steep-sided valleys" },
              { id: "c", text: "Triangular deposits at the mouth" },
              { id: "d", text: "Isolated rock pillars" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Levee",
                statement: "Raised natural banks from flooding.",
              },
            ],
            steps: [
              {
                reasoning: "Levee = raised bank.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Raised banks from flooding",
            commonErrors: ["Confusing with delta."],
          },
        },
        {
          id: "oleg-u1-rl-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which landform sequence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Arch → cave → stack → stump" },
              { id: "b", text: "Cave → stack → arch → stump" },
              { id: "c", text: "Cave → arch → stack → stump" },
              { id: "d", text: "Stack → cave → arch → stump" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Erosion sequence",
                statement: "Cave→arch→stack→stump.",
              },
            ],
            steps: [
              {
                reasoning: "Correct sequence.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Cave→arch→stack→stump",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "oleg-u1-rl-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A bird's foot delta (e.g. Mississippi) is classified as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Arcuate" },
              { id: "b", text: "Estuarine" },
              { id: "c", text: "Bird's foot" },
              { id: "d", text: "Cuspate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Delta types",
                statement: "Arcuate=Nile, cuspate=Tiber, bird's foot=Mississippi.",
              },
            ],
            steps: [
              {
                reasoning: "Mississippi = bird's foot.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Bird's foot",
            commonErrors: ["Confusing delta types."],
          },
        },
        {
          id: "oleg-u1-rl-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two depositional river landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depositional landforms",
                statement: "Floodplain, levee, delta.",
              },
            ],
            steps: [
              { reasoning: "Any two depositional.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Floodplain, levee, delta.",
            commonErrors: ["Naming erosional landforms."],
          },
        },
        {
          id: "oleg-u1-rl-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a waterfall retreats upstream.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Waterfall retreat",
                statement: "Undercutting softer rock → collapse → retreat.",
              },
            ],
            steps: [
              {
                reasoning: "Water undercuts softer rock below resistant cap.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Softer rock erodes faster → overhang.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cap rock collapses → plunge pool deepens.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Process repeats → waterfall moves upstream.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Undercutting → collapse → retreat upstream.",
            commonErrors: ["Ignoring undercutting."],
          },
        },
        {
          id: "oleg-u1-rl-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a gorge and where is it found?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gorge",
                statement: "Steep-sided valley from rapid downcutting.",
              },
            ],
            steps: [
              {
                reasoning: "Steep-sided valley, upper course.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Formed by rapid vertical erosion.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Steep valley from rapid downcutting (upper course).",
            commonErrors: ["Confusing with V-shaped valley."],
          },
        },
        {
          id: "oleg-u1-rl-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a delta forms at a river mouth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Delta",
                statement: "Low energy at mouth → deposition.",
              },
            ],
            steps: [
              {
                reasoning: "River reaches sea/lake → energy drops.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Velocity falls → can't carry load.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sediment deposited at mouth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Builds triangular landform (delta).",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Energy lost at mouth → deposition → delta.",
            commonErrors: ["Saying it's erosional."],
          },
        },
        {
          id: "oleg-u1-rl-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two landforms found in the middle course of a river.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Middle course",
                statement: "Meanders, oxbow lakes, interlocking spurs.",
              },
            ],
            steps: [
              { reasoning: "Any two valid landforms.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly identified.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "E.g. meander, oxbow lake, interlocking spurs.",
            commonErrors: ["Naming upper/lower course landforms."],
          },
        },
        {
          id: "oleg-u1-rl-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "River landforms.",
          parts: [
            { label: "a", prompt: "Upper course landform?", marks: 1 },
            { label: "b", prompt: "Middle course landform?", marks: 1 },
            { label: "c", prompt: "Lower course landform?", marks: 1 },
            { label: "d", prompt: "How is an oxbow lake formed?", marks: 3 },
            { label: "e", prompt: "How is a floodplain formed?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Landforms",
                statement: "Courses+formation processes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "V-valley/waterfall/gorge.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Meander/oxbow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Floodplain/delta/levee.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Meander neck erodes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "River takes shortcut.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Old meander cut off → lake.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "River floods flat land.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Deposition either side.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Wide flat land built up.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) upper (b) middle (c) lower (d) oxbow (e) floodplain",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u1-1-1-notes",
      title: "Rivers — notes",
      summary: "Erosion/transport/deposition; landforms by course.",
      sections: [
        {
          heading: "Processes",
          body: "Erosion (hydraulic, abrasion, attrition, solution); transport (dissolved, suspended, bed); deposition at low energy.",
        },
        {
          heading: "Landforms",
          body: "Upper: V-valley, waterfall. Middle: meander, oxbow. Lower: floodplain, delta.",
        },
      ],
    },
  ],
};
