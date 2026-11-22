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
            { id: "a", text: "045°" },
            { id: "b", text: "270°" },
            { id: "c", text: "180°" },
            { id: "d", text: "090°" },
          ], correctChoiceId: "d" },
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
        {
          id: "cimg-u6-s2-be-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the bearing of south?",
          response: { type: "mcq", choices: [
            { id: "a", text: "000°" },
            { id: "b", text: "180°" },
            { id: "c", text: "090°" },
            { id: "d", text: "270°" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Bearings", statement: "Clockwise from north." }],
            steps: [{ reasoning: "South is half way round: 180° = 180°.", marks: 1, markCode: "A" }],
            finalAnswer: "180°",
          },
        },
        {
          id: "cimg-u6-s2-be-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the three-figure bearing of northwest?",
          response: { type: "numeric", parts: [{ label: "a", answer: 315 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Bearings", statement: "Compass points at 45° intervals." }],
            steps: [
              { reasoning: "Northwest is $270° + 45° = 315°$ clockwise from north.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 315° (written 315°).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "315°",
          },
        },
        {
          id: "cimg-u6-s2-be-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the back bearing of 300°?",
          response: { type: "mcq", choices: [
            { id: "a", text: "300°" },
            { id: "b", text: "120°" },
            { id: "c", text: "60°" },
            { id: "d", text: "240°" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Back bearing", statement: "±180°." }],
            steps: [{ reasoning: "$300 - 180 = 120°$.", marks: 1, markCode: "A" }],
            finalAnswer: "120°",
          },
        },
        {
          id: "cimg-u6-s2-be-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ship sails on a bearing of 045°. Relative to north, it is travelling…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Southwest" },
            { id: "b", text: "Northeast" },
            { id: "c", text: "Northwest" },
            { id: "d", text: "Southeast" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Bearings", statement: "045° is between N and E." }],
            steps: [{ reasoning: "045° lies between north (000°) and east (090°): northeast.", marks: 1, markCode: "A" }],
            finalAnswer: "Northeast",
          },
        },
        {
          id: "cimg-u6-s2-be-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A plane flies on bearing 080° for part of its journey and later on bearing 020°. What is the angle between the two flight paths?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Bearing difference", statement: "Subtract bearings." }],
            steps: [
              { reasoning: "$80 - 20 = 60°$.", marks: 1, markCode: "M" },
              { reasoning: "Both bearings are in the same half, so subtract directly.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60°",
          },
        },
        {
          id: "cimg-u6-s2-be-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Town B is 10 km from town A on a bearing of 120°. On what bearing is town A from town B?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Back bearing", statement: "±180°." }],
            steps: [
              { reasoning: "Back bearing $= 120 + 180$.", marks: 1, markCode: "M" },
              { reasoning: "$= 300°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 300°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300°",
          },
        },
        {
          id: "cimg-u6-s2-be-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two ships leave the same port. Ship P sails on bearing 030° and ship Q sails on bearing 110°. Find the angle between their two paths.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Bearing difference", statement: "Subtract bearings." }],
            steps: [
              { reasoning: "Angle between paths $= 110 - 30$.", marks: 1, markCode: "M" },
              { reasoning: "$= 80°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 80°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80°",
          },
        },
        {
          id: "cimg-u6-s2-be-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A hiker walks 8 km on a bearing of 060°, then turns and walks 6 km on a bearing of 150°. Describe the bearings on which the hiker must walk to return directly to the start.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Return bearing", statement: "Back bearing of each leg, in reverse order." }],
            steps: [
              { reasoning: "The hiker must retrace both legs in reverse order.", marks: 1, markCode: "M" },
              { reasoning: "Leg 2 reverse bearing: $150 + 180 = 330°$ for the 6 km back to the waypoint.", marks: 1, markCode: "M" },
              { reasoning: "Then leg 1 reverse bearing: $60 + 180 = 240°$ for the 8 km home.", marks: 1, markCode: "M" },
              { reasoning: "Answer: first on bearing 330°, then on bearing 240°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "330° then 240°",
          },
        },
        {
          id: "cimg-u6-s2-be-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how to find the angle between two bearings, and use your method to find the angle between bearings 050° and 140°.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Bearing difference", statement: "Subtract the bearings." }],
            steps: [
              { reasoning: "Both bearings are measured clockwise from north, so subtract the smaller from the larger.", marks: 1, markCode: "M" },
              { reasoning: "$140 - 50 = 90°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90°",
          },
        },
        {
          id: "cimg-u6-s2-be-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The three-figure bearing of northeast is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "090°" },
            { id: "b", text: "045°" },
            { id: "c", text: "135°" },
            { id: "d", text: "225°" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Bearings", statement: "NE is halfway N–E." }],
            steps: [{ reasoning: "Northeast $= \\frac{090°}{2} = 045°$.", marks: 1, markCode: "A" }],
            finalAnswer: "045°",
          },
        },
        {
          id: "cimg-u6-s2-be-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ship sails from port on a bearing of 140° for 12 km to an island. On what bearing must it sail to return directly to port?",
          response: { type: "numeric", parts: [{ label: "a", answer: 320 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Back bearing", statement: "±180°." }],
            steps: [
              { reasoning: "Return bearing $= 140 + 180$.", marks: 1, markCode: "M" },
              { reasoning: "$= 320°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 320° (the distance does not matter).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "320°",
          },
        },
        {
          id: "cimg-u6-s2-be-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a three-figure bearing is, and state the bearing of northwest.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Three-figure bearing", statement: "Clockwise from north, three digits." }],
            steps: [
              { reasoning: "A bearing is measured clockwise from north and always written with three digits, e.g. 045°.", marks: 1, markCode: "M" },
              { reasoning: "Northwest is 45° west of north: $360° - 45° = 315°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 315°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "315°",
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
            { id: "a", text: "Above the horizontal" },
            { id: "b", text: "Below the horizontal" },
            { id: "c", text: "From north" },
            { id: "d", text: "From vertical" },
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
        {
          id: "cimg-u6-s2-el-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The angle of depression is measured…",
          response: { type: "mcq", choices: [
            { id: "a", text: "From north" },
            { id: "b", text: "Above the horizontal" },
            { id: "c", text: "From the vertical" },
            { id: "d", text: "Below the horizontal" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Depression", statement: "Down from horizontal." }],
            steps: [{ reasoning: "Depression = below horizontal.", marks: 1, markCode: "A" }],
            finalAnswer: "Below the horizontal",
          },
        },
        {
          id: "cimg-u6-s2-el-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "From the top of a 30 m cliff, the angle of depression to a boat is 40°. What is the angle of elevation from the boat to the top of the cliff?",
          response: { type: "mcq", choices: [
            { id: "a", text: "40°" },
            { id: "b", text: "140°" },
            { id: "c", text: "30°" },
            { id: "d", text: "50°" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Alternate angles", statement: "Depression = elevation." }],
            steps: [{ reasoning: "Alternate angles are equal: 40°.", marks: 1, markCode: "A" }],
            finalAnswer: "40°",
          },
        },
        {
          id: "cimg-u6-s2-el-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "From a point 25 m from the base of a building, the angle of elevation to the top is 35°. Find the height of the building. ($\\tan 35° \\approx 0.700$)",
          response: { type: "mcq", choices: [
            { id: "a", text: "35.7 m" },
            { id: "b", text: "25 m" },
            { id: "c", text: "12.3 m" },
            { id: "d", text: "17.5 m" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation", statement: "$h = d \\tan \\theta$." }],
            steps: [
              { reasoning: "$h = 25 \\times 0.700 = 17.5$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 17.5 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17.5 m",
          },
        },
        {
          id: "cimg-u6-s2-el-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A kite string is 80 m long and makes an angle of 40° with the horizontal. How far is the kite horizontally from the person holding the string? ($\\cos 40° \\approx 0.766$)",
          response: { type: "mcq", choices: [
            { id: "a", text: "51.4 m" },
            { id: "b", text: "61.3 m" },
            { id: "c", text: "80 m" },
            { id: "d", text: "34.6 m" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation trig", statement: "adj = hyp × cos." }],
            steps: [
              { reasoning: "$d = 80 \\times 0.766 = 61.3$ m.", marks: 1, markCode: "M" },
              { reasoning: "Horizontal distance is the adjacent side.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "61.3 m",
          },
        },
        {
          id: "cimg-u6-s2-el-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "From 12 m away, the angle of elevation to the top of a vertical post is 35°. Find the height of the post. ($\\tan 35° \\approx 0.700$)",
          response: { type: "numeric", parts: [{ label: "a", answer: 8.4, tolerance: 0.1, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation", statement: "$h = d \\tan \\theta$." }],
            steps: [
              { reasoning: "$h = 12 \\times 0.700 = 8.4$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 8.4 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8.4 m",
          },
        },
        {
          id: "cimg-u6-s2-el-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A kite string is 40 m long and makes an angle of 30° with the horizontal. How high is the kite? ($\\sin 30° = 0.5$)",
          response: { type: "numeric", parts: [{ label: "a", answer: 20, tolerance: 0.1, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation trig", statement: "opp = hyp × sin." }],
            steps: [
              { reasoning: "$h = 40 \\times 0.5 = 20$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20 m.", marks: 1, markCode: "M" },
              { reasoning: "Height is the opposite side to the angle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 m",
          },
        },
        {
          id: "cimg-u6-s2-el-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "From the top of a 25 m cliff, the angle of depression to a boat is 60°. How far is the boat from the base of the cliff? ($\\tan 60° \\approx 1.732$)",
          response: { type: "mcq", choices: [
            { id: "a", text: "7.2 m" },
            { id: "b", text: "25 m" },
            { id: "c", text: "43.3 m" },
            { id: "d", text: "14.4 m" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Depression = elevation", statement: "Alternate angles equal." }],
            steps: [{ reasoning: "$d = 25 \\div 1.732 = 14.4$ m.", marks: 1, markCode: "A" }],
            finalAnswer: "14.4 m",
          },
        },
        {
          id: "cimg-u6-s2-el-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A person who is 1.7 m tall stands 20 m from the base of a vertical flagpole. The angle of elevation from the person's eyes to the top of the pole is 50°. Calculate the height of the pole. ($\\tan 50° \\approx 1.19$)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation", statement: "$h = d \\tan \\theta$ above eye level." }],
            steps: [
              { reasoning: "Height above eyes $= 20 \\times 1.19 = 23.8$ m.", marks: 1, markCode: "M" },
              { reasoning: "Add the person's height: $23.8 + 1.7 = 25.5$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 25.5 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25.5 m",
            commonErrors: ["Forgetting to add the person's height of 1.7 m.", "Using sin or cos instead of tan."],
          },
        },
        {
          id: "cimg-u6-s2-el-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A man who is 1.8 m tall stands 40 m from a tall building. The angle of elevation from his eyes to the top of the building is 55° and to a window on the building is 35°. Calculate the height of the building and the height of the window above the ground. ($\\tan 55° \\approx 1.428$, $\\tan 35° \\approx 0.700$)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation", statement: "$h = d \\tan \\theta$ above eye level." }],
            steps: [
              { reasoning: "Top of building above eyes $= 40 \\times 1.428 = 57.1$ m, so height $= 57.1 + 1.8 = 58.9$ m.", marks: 2, markCode: "M" },
              { reasoning: "Window above eyes $= 40 \\times 0.700 = 28.0$ m, so height $= 28.0 + 1.8 = 29.8$ m.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "Building 58.9 m; window 29.8 m",
          },
        },
        {
          id: "cimg-u6-s2-el-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain why the angle of depression from the top of a cliff equals the angle of elevation from a boat to the top of the cliff.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Alternate angles", statement: "Equal between parallel lines." }],
            steps: [
              { reasoning: "The horizontal line from the cliff top is parallel to the sea surface (horizontal at the boat).", marks: 1, markCode: "M" },
              { reasoning: "The line of sight is a transversal, so the angles are alternate angles and therefore equal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alternate angles between parallel horizontals are equal.",
          },
        },
        {
          id: "cimg-u6-s2-el-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A vertical post is 15 m tall. From the end of its shadow, the angle of elevation to the top of the post is 55°. Calculate the length of the shadow. ($\\tan 55° \\approx 1.428$)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation", statement: "$d = h \\div \\tan \\theta$." }],
            steps: [
              { reasoning: "Set up the right triangle: opposite = 15 m, angle = 55°, adjacent = shadow length.", marks: 1, markCode: "M" },
              { reasoning: "$\\text{shadow} = 15 \\div 1.428 = 10.5$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.5 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10.5 m",
            examinerNote: "Accept 10.4-10.6 m depending on rounding of tan 55°.",
          },
        },
        {
          id: "cimg-u6-s2-el-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A support cable is 30 m long and makes an angle of 55° with the ground. How high up the pole does the cable reach? ($\\sin 55° \\approx 0.819$)",
          response: { type: "mcq", choices: [
            { id: "a", text: "21.1 m" },
            { id: "b", text: "30 m" },
            { id: "c", text: "17.2 m" },
            { id: "d", text: "24.6 m" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation trig", statement: "opp = hyp × sin." }],
            steps: [
              { reasoning: "$h = 30 \\times 0.819 = 24.6$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 24.6 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24.6 m",
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
