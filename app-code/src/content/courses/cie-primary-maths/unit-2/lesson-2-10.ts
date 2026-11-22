import type { Lesson } from "../../../types.ts";

export const lesson210: Lesson = {
  id: "cipm-u2-lesson-2-10",
  code: "2-10",
  title: "Stage 6 — Speed, Density and Capacity",
  goal: "I CAN calculate speed, density and solve capacity problems.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 6: measures",
  "Cambridge Primary Mathematics 0096 framework substrands: 6Gg, 6Ni"],
  stage: 6,
  vocabulary: [
    { term: "Speed", definition: "How fast something moves: distance ÷ time." },
    { term: "Density", definition: "How heavy something is for its size: mass ÷ volume." },
    { term: "Capacity", definition: "How much a container holds." },
    { term: "Rate", definition: "Speed of filling or emptying per unit time." },
    { term: "Unit rate", definition: "Amount per one unit — e.g. km per hour." },
  ],
  concepts: [
    {
      id: "cipm-u2-s10-speed-density",
      title: "Speed, density and rates",
      skill: "Apply speed = distance/time and density = mass/volume at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Speed",
            body: "Speed = distance ÷ time, usually in km/h or m/s. To find distance, multiply speed by time; to find time, divide distance by speed. Average speed uses total distance over total time.",
          },
          {
            heading: "Density and rates",
            body: "Density = mass ÷ volume — it tells whether an object will float (less dense than water = 1 g/cm³ floats). Rates measure change per unit time: a tap filling 2 litres per minute fills 10 litres in 5 minutes. Unit rates make comparisons easy — price per kg, km per litre.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "speed = distance ÷ time" },
          { name: "Density", statement: "density = mass ÷ volume" },
          { name: "Rate", statement: "amount ÷ time" },
        ],
        workedExample: {
          problem: "A car travels 150 km in 2 hours. What is its average speed?",
          solution: "150 ÷ 2 = 75 km/h.",
        },
      },
      questions: [
        {
          id: "cipm-u2-sd2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Speed is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "time ÷ distance" },
            { id: "b", text: "distance ÷ time" },
            { id: "c", text: "mass ÷ volume" },
            { id: "d", text: "distance × time" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Speed", statement: "distance ÷ time." }],
            steps: [{ reasoning: "Speed = distance ÷ time.", marks: 1, markCode: "A" }],
            finalAnswer: "distance ÷ time",
          },
        },
        {
          id: "cipm-u2-sd2-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A block has mass 60 g and volume 30 cm³. Find its density.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Density", statement: "mass ÷ volume." }],
            steps: [
              { reasoning: "60 ÷ 30 = 2.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2 g/cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 g/cm³",
          },
        },
        {
          id: "cipm-u2-sd2-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cyclist travels 45 km in 3 hours. Find the average speed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Average speed", statement: "total distance ÷ total time." }],
            steps: [
              { reasoning: "45 ÷ 3.", marks: 1, markCode: "M" },
              { reasoning: "= 15.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15 km/h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 km/h",
          },
        },
        {
          id: "cipm-u2-sd2-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A tap fills a tank at 4 litres per minute. How long to fill a 60-litre tank?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rate problems", statement: "time = amount ÷ rate." }],
            steps: [
              { reasoning: "Rate = 4 litres/min.", marks: 1, markCode: "M" },
              { reasoning: "Time = 60 ÷ 4 = 15.", marks: 1, markCode: "M" },
              { reasoning: "Units: minutes.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15 minutes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 minutes",
          },
        },
        {
          id: "cipm-u2-sd2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car travels 100 km in 2 hours. What is its average speed?",
          response: { type: "mcq", choices: [
            { id: "a", text: "200 km/h" },
            { id: "b", text: "50 km/h" },
            { id: "c", text: "102 km/h" },
            { id: "d", text: "98 km/h" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed", statement: "distance ÷ time." }],
            steps: [{ reasoning: "$100 \\div 2 = 50$ km/h.", marks: 1, markCode: "A" }],
            finalAnswer: "50 km/h",
          },
        },
        {
          id: "cipm-u2-sd2-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A block has mass 80 g and volume 40 cm³. Find its density.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "g/cm³" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Density", statement: "mass ÷ volume." }],
            steps: [
              { reasoning: "$80 \\div 40 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2 g/cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 g/cm³",
          },
        },
        {
          id: "cipm-u2-sd2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An object with density less than 1 g/cm³ will…",
          response: { type: "mcq", choices: [
            { id: "a", text: "melt" },
            { id: "b", text: "float in water" },
            { id: "c", text: "explode" },
            { id: "d", text: "sink in water" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Density and floating", statement: "Less dense than water (1 g/cm³) floats." }],
            steps: [{ reasoning: "Objects less dense than water float.", marks: 1, markCode: "A" }],
            finalAnswer: "float in water",
          },
        },
        {
          id: "cipm-u2-sd2-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A walker covers 15 km in 3 hours. Find the average speed.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "km/h" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Average speed", statement: "total distance ÷ total time." }],
            steps: [
              { reasoning: "$15 \\div 3 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5 km/h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 km/h",
          },
        },
        {
          id: "cipm-u2-sd2-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pipe fills a tank at 6 litres per minute. How much water flows in 5 minutes?",
          response: { type: "mcq", choices: [
            { id: "a", text: "30 litres" },
            { id: "b", text: "1 litre" },
            { id: "c", text: "11 litres" },
            { id: "d", text: "60 litres" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rate", statement: "rate × time = amount." }],
            steps: [{ reasoning: "$6 \\times 5 = 30$ litres.", marks: 1, markCode: "A" }],
            finalAnswer: "30 litres",
          },
        },
        {
          id: "cipm-u2-sd2-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cyclist travels 30 km in 2 hours. (a) Find the average speed. (b) How far would the cyclist travel in 5 hours at the same speed? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed", statement: "speed = d/t; distance = speed × time." }],
            steps: [
              { reasoning: "(a) $30 \\div 2 = 15$ km/h.", marks: 1, markCode: "M" },
              { reasoning: "(b) $15 \\times 5 = 75$ km.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 15 km/h (b) 75 km",
          },
        },
        {
          id: "cipm-u2-sd2-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A block has density 3 g/cm³. Will it float or sink in water?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Both" },
            { id: "b", text: "Cannot tell" },
            { id: "c", text: "Float" },
            { id: "d", text: "Sink" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Density and floating", statement: "Denser than water sinks." }],
            steps: [{ reasoning: "$3 > 1$, so it is denser than water and sinks.", marks: 1, markCode: "A" }],
            finalAnswer: "Sink",
          },
        },
        {
          id: "cipm-u2-sd2-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car travels 180 km in 3 hours. Find the average speed.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60, unit: "km/h" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Average speed", statement: "distance ÷ time." }],
            steps: [
              { reasoning: "$180 \\div 3 = 60$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60 km/h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 km/h",
          },
        },
        {
          id: "cipm-u2-sd2-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A tap fills a bath at 8 litres per minute. (a) How much water flows in 6 minutes? (b) How long to fill a 96-litre bath? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rates", statement: "amount = rate × time; time = amount ÷ rate." }],
            steps: [
              { reasoning: "(a) $8 \\times 6 = 48$ litres.", marks: 1, markCode: "M" },
              { reasoning: "(b) $96 \\div 8 = 12$ minutes.", marks: 1, markCode: "M" },
              { reasoning: "Check: $8 \\times 12 = 96$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answers correct with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 48 litres (b) 12 minutes",
          },
        },
        {
          id: "cipm-u2-sd2-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Density is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "mass + volume" },
            { id: "b", text: "mass × volume" },
            { id: "c", text: "mass ÷ volume" },
            { id: "d", text: "volume ÷ mass" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Density", statement: "mass ÷ volume." }],
            steps: [{ reasoning: "Density = mass ÷ volume.", marks: 1, markCode: "A" }],
            finalAnswer: "mass ÷ volume",
          },
        },
        {
          id: "cipm-u2-sd2-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A runner travels 200 m in 40 seconds. Find the speed in m/s.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "m/s" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed", statement: "distance ÷ time." }],
            steps: [
              { reasoning: "$200 \\div 40 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 m/s",
          },
        },
        {
          id: "cipm-u2-sd2-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) A train travels 300 km in 4 hours — find average speed. (b) A block has mass 120 g and volume 60 cm³ — find density. (c) Would the block float? (d) How long at 60 km/h to travel 240 km? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed, density and rates", statement: "speed = d/t; density = m/v; time = d/speed." }],
            steps: [
              { reasoning: "(a) $300 \\div 4 = 75$ km/h.", marks: 1, markCode: "M" },
              { reasoning: "(b) $120 \\div 60 = 2$ g/cm³.", marks: 1, markCode: "M" },
              { reasoning: "(c) 2 > 1 → denser than water → sinks.", marks: 1, markCode: "M" },
              { reasoning: "(d) $240 \\div 60 = 4$ hours.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 75 km/h (b) 2 g/cm³ (c) sinks (d) 4 hours",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-sd2-notes",
      title: "Speed, density, rates — revision notes",
      summary: "speed=d/t; density=m/v; rate=amount/time; density<1 floats.",
      sections: [
        { heading: "Speed", body: "distance = speed × time; time = distance ÷ speed." },
        { heading: "Density/rates", body: "density = mass ÷ volume; rate problems rearrange the same way." },
      ],
    },
  ],
};
