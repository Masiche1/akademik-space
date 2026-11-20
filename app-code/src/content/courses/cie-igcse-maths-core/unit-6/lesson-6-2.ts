import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cimg-u6-lesson-6-2",
  code: "6-2",
  title: "Trigonometry Applications",
  goal: "I CAN solve bearing and angle of elevation problems.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: trigonometry"],
  vocabulary: [
    { term: "Bearing", definition: "Direction measured clockwise from north, in degrees." },
    { term: "Angle of elevation", definition: "Angle above the horizontal." },
    { term: "Angle of depression", definition: "Angle below the horizontal." },
    { term: "Compass direction", definition: "N, NE, E, SE, S, SW, W, NW." },
    { term: "Three-figure bearing", definition: "Bearing written as three digits, e.g. 045°." },
  ],
  concepts: [
    {
      id: "cimg-u6-s2-bearings",
      title: "Bearings",
      skill: "Solve bearing problems at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Bearings",
            body: "Measured clockwise from north: N = 000°, E = 090°, S = 180°, W = 270°. Always three figures. Back bearings differ by 180°.",
          },
          {
            heading: "Finding angles",
            body: "The angle between two bearings = difference. E.g. bearing 060° and 120°: angle between = 60°.",
          },
        ],
        keyFormulas: [
          { name: "Back bearing", statement: "Bearing ± 180°" },
        ],
        workedExample: {
          problem: "A ship sails on bearing 045° for 10 km, then 135° for 10 km. What angle does it turn?",
          solution: "$135 - 45 = 90°$ turn.",
        },
      },
      questions: [
        {
          id: "cimg-u6-s2-be-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the bearing of east?",
          response: { type: "mcq", choices: [
            { id: "a", text: "090°" }, { id: "b", text: "180°" }, { id: "c", text: "270°" }, { id: "d", text: "045°" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Bearings", statement: "Clockwise from north." }],
            steps: [{ reasoning: "East = 90° = 090°.", marks: 1, markCode: "A" }],
            finalAnswer: "090°",
          },
        },
        {
          id: "cimg-u6-s2-be-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the back bearing of 060°?",
          response: { type: "numeric", parts: [{ label: "a", answer: 240 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Back bearing", statement: "±180°." }],
            steps: [
              { reasoning: "$060 + 180 = 240°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 240°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "240°",
          },
        },
        {
          id: "cimg-u6-s2-be-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A plane flies on bearing 100° then changes to 200°. What is the angle of turn?",
          response: { type: "numeric", parts: [{ label: "a", answer: 100 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Bearing difference", statement: "Subtract bearings." }],
            steps: [
              { reasoning: "$200 - 100 = 100°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 100° turn.", marks: 1, markCode: "M" },
              { reasoning: "Direction: clockwise (right turn).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100°",
          },
        },
        {
          id: "cimg-u6-s2-be-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: ". Find the bearing of A from B.",
          response: { type: "numeric", parts: [{ label: "a", answer: 230 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Back bearing", statement: "Add 180°." }],
            steps: [
              { reasoning: "Back bearing $= 050 + 180 = 230°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 230°.", marks: 1, markCode: "M" },
              { reasoning: "Distance doesn't affect bearing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "230°",
          },
        },
      ],
    },
    {
      id: "cimg-u6-s2-elevation",
      title: "Angles of elevation and depression",
      skill: "Solve elevation/depression problems at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Angles of elevation",
            body: "Measured upward from horizontal. If you look up at a building, the angle of elevation tells you how steeply it rises.",
          },
          {
            heading: "Solving",
            body: "Draw a right triangle: horizontal distance, vertical height, angle of elevation. Use SOH CAH TOA.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "From 20 m away, the angle of elevation to a tree top is 40°. Find the tree height ($\\tan 40° \\approx 0.839$).",
          solution: "$h = 20 \\times 0.839 = 16.78$ m.",
        },
      },
      questions: [
        {
          id: "cimg-u6-s2-el-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The angle of elevation is measured…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Above the horizontal" }, { id: "b", text: "Below the horizontal" }, { id: "c", text: "From vertical" }, { id: "d", text: "From north" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Elevation", statement: "Up from horizontal." }],
            steps: [{ reasoning: "Elevation = above horizontal.", marks: 1, markCode: "A" }],
            finalAnswer: "Above horizontal",
          },
        },
        {
          id: "cimg-u6-s2-el-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "From 10 m away, angle of elevation to top of pole is 30°. Height? ($\\tan 30° \\approx 0.577$)",
          response: { type: "numeric", parts: [{ label: "a", answer: 5.77, tolerance: 0.01, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation", statement: "$h = d \\tan \\theta$." }],
            steps: [
              { reasoning: "$h = 10 \\times 0.577 = 5.77$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.77 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5.77 m",
          },
        },
        {
          id: "cimg-u6-s2-el-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A kite string is 50 m long at 60° to horizontal. How high is the kite? ($\\sin 60° \\approx 0.866$)",
          response: { type: "numeric", parts: [{ label: "a", answer: 43.3, tolerance: 0.1, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation trig", statement: "opp = hyp × sin." }],
            steps: [
              { reasoning: "$h = 50 \\times 0.866 = 43.3$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 43.3 m.", marks: 1, markCode: "M" },
              { reasoning: "Height is opposite side.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "43.3 m",
          },
        },
        {
          id: "cimg-u6-s2-el-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: ", the angle of depression to a boat is 30°. How far is the boat from the cliff base? ($\\tan 30° \\approx 0.577$)",
          response: { type: "numeric", parts: [{ label: "a", answer: 34.6, tolerance: 0.1, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Depression = elevation", statement: "Alternate angles equal." }],
            steps: [
              { reasoning: "Angle of depression 30° → angle at boat is also 30° (alternate angles).", marks: 1, markCode: "M" },
              { reasoning: "$d = 20 \\div 0.577 = 34.6$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 34.6 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "34.6 m",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u6-s2-app-notes",
      title: "Trig applications — revision notes",
      summary: "Bearings, angles of elevation and depression.",
      sections: [
        { heading: "Bearings", body: "Clockwise from north, three figures. Back bearing = ±180°. Difference gives angle between." },
        { heading: "Elevation/depression", body: "Draw right triangle. Elevation = up from horizontal; depression = down. Solve with SOH CAH TOA." },
      ],
    },
  ],
};
