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
            { id: "a", text: "distance × time" }, { id: "b", text: "distance ÷ time" }, { id: "c", text: "time ÷ distance" }, { id: "d", text: "mass ÷ volume" },
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
