import type { Lesson } from "../../../types.ts";

export const lessonp13: Lesson = {
  id: "olphys-u1-lesson-1-3",
  code: "1-3",
  title: "Motion Calculations and Graphs",
  goal: "I CAN solve motion problems using suvat equations and interpret motion graphs.",
  standards: ["5054 1.3"],
  vocabulary: [
    { term: "Suvat", definition: "Equations of motion: s, u, v, a, t." },
    { term: "Initial velocity (u)", definition: "Velocity at start." },
    { term: "Final velocity (v)", definition: "Velocity at end." },
    { term: "Acceleration (a)", definition: "Rate of change of velocity: a = (v−u)/t." },
    { term: "Distance-time graph", definition: "Gradient = speed." },
    { term: "Velocity-time graph", definition: "Gradient = acceleration; area = distance." },
    { term: "Uniform acceleration", definition: "Constant acceleration." },
    { term: "Deceleration", definition: "Negative acceleration (slowing down)." },
  ],
  concepts: [
    {
      id: "olphys-u1-suvat",
      title: "Equations of motion",
      skill: "Apply suvat equations to solve motion problems.",
      lesson: {
        sections: [
          {
            heading: "The equations",
            body: "For uniform acceleration:\n\n1. **v = u + at**\n2. **s = ut + ½at²**\n3. **v² = u² + 2as**\n4. **s = ½(u+v)t**\n\nChoose based on known/unknown variables.",
          },
          {
            heading: "Method",
            body: "1. List knowns: u, v, a, s, t\n2. Identify unknown\n3. Pick equation with those variables\n4. Substitute and solve",
          },
          {
            heading: "Free fall application",
            body: "a = g = 9.8 m/s² (or 10 for estimation). Object dropped: u=0. Thrown up: u>0, a=−9.8.",
          },
        ],
        keyFormulas: [
          { name: "v=u+at", statement: "$v = u + at$" },
          { name: "s=ut+½at²", statement: "$s = ut + \\tfrac{1}{2}at^2$" },
          { name: "v²=u²+2as", statement: "$v^2 = u^2 + 2as$" },
        ],
        workedExample: {
          problem: "A car accelerates from 10 m/s to 30 m/s in 5 s. Find acceleration.",
          solution: "a = (v−u)/t = (30−10)/5 = 4 m/s².",
        },
      },
      questions: [
        {
          id: "olphys-u1-suvat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'u' represent in suvat equations?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Final velocity" }, { id: "b", text: "Initial velocity" }, { id: "c", text: "Acceleration" }, { id: "d", text: "Time" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "u", statement: "Initial velocity." }],
            steps: [{ reasoning: "Recall.", working: "u = u_{initial}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Initial velocity",
            commonErrors: ["u vs v confusion."],
          },
        },
        {
          id: "olphys-u1-suvat-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car goes from 5 m/s to 25 m/s in 10 s. Calculate acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "a=(v−u)/t", statement: "a = (v−u)/t." }],
            steps: [
              { reasoning: "a = (25−5)/10.", marks: 1, markCode: "M" },
              { reasoning: "= 2 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 m/s²",
            commonErrors: ["Using v+u instead of v−u."],
          },
        },
        {
          id: "olphys-u1-suvat-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball is dropped from rest. How far does it fall in 2 s? (g=9.8)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "s=ut+½at²", statement: "s = ut + ½at²." }],
            steps: [
              { reasoning: "u=0, t=2, a=9.8.", marks: 1, markCode: "M" },
              { reasoning: "s = 0 + ½(9.8)(4).", marks: 1, markCode: "M" },
              { reasoning: "= 19.6 m.", marks: 1, markCode: "A" },
              { reasoning: "Unit m.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "19.6 m",
            commonErrors: ["Using a=10 without noting assumption."],
          },
        },
        {
          id: "olphys-u1-suvat-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A car accelerates uniformly from rest at 3 m/s² for 8 s. Calculate final velocity and distance.",
          parts: [
            { label: "a", prompt: "Find final velocity.", marks: 3 },
            { label: "b", prompt: "Find distance.", marks: 3 },
            { label: "c", prompt: "State which equation used.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Suvat", statement: "v=u+at; s=ut+½at²." }],
            steps: [
              { part: "a", reasoning: "v = 0 + 3×8.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "= 24 m/s.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "s = 0 + ½(3)(64).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "= 96 m.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "v=u+at for (a); s=ut+½at² for (b).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct equations.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 24 m/s (b) 96 m (c) v=u+at; s=ut+½at²",
            commonErrors: ["In (b) forgetting ½ factor."],
          },
        },
      ],
    },
    {
      id: "olphys-u1-motion-analysis",
      title: "Interpreting motion graphs",
      skill: "Read distance–time and velocity–time graphs for motion analysis.",
      lesson: {
        sections: [
          {
            heading: "Distance–time graph",
            body: "- Gradient = speed\n- Horizontal = stationary\n- Steeper = faster\n- Curve = changing speed",
          },
          {
            heading: "Velocity–time graph",
            body: "- Gradient = acceleration\n- Horizontal = constant velocity\n- Area under line = distance travelled\n- Below axis = negative velocity (backward)",
          },
          {
            heading: "Sketching",
            body: "Constant speed → straight line on both. Acceleration → curve on d-t, straight slope on v-t. Deceleration → negative gradient on v-t.",
          },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$\\text{speed} = \\dfrac{\\Delta s}{\\Delta t}$" },
          { name: "Area", statement: "$\\text{distance} = \\text{area under } v\\text{-}t$" },
        ],
        workedExample: {
          problem: "On a v-t graph, a line goes from (0,10) to (5,30). Find acceleration and distance.",
          solution: "a = (30−10)/5 = 4 m/s². Distance = area = ½(10+30)×5 = 100 m.",
        },
      },
      questions: [
        {
          id: "olphys-u1-motion-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the gradient of a distance–time graph give?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Acceleration" }, { id: "b", text: "Speed" }, { id: "c", text: "Distance" }, { id: "d", text: "Time" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "d-t graph", statement: "Gradient = speed." }],
            steps: [{ reasoning: "Recall.", working: "\\text{gradient} = \\text{speed}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Speed",
            commonErrors: ["v-t gradient is acceleration."],
          },
        },
        {
          id: "olphys-u1-motion-analysis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the area under a velocity–time graph represent?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "v-t graph", statement: "Area = distance." }],
            steps: [
              { reasoning: "Area = distance.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The area under a velocity–time graph represents the distance travelled.",
            commonErrors: ["Gradient is acceleration not distance."],
          },
        },
        {
          id: "olphys-u1-motion-analysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A v-t graph shows velocity increasing from 0 to 20 m/s over 4 s. Find acceleration and distance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "v-t graph", statement: "Gradient=a, area=s." }],
            steps: [
              { reasoning: "a = 20/4 = 5 m/s².", marks: 1, markCode: "M" },
              { reasoning: "Area = ½×4×20 = 40 m.", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
              { reasoning: "Units.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "a = 5 m/s², distance = 40 m",
            commonErrors: ["Using rectangle not triangle for area."],
          },
        },
        {
          id: "olphys-u1-motion-analysis-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how to interpret distance–time and velocity–time graphs.",
          parts: [
            { label: "a", prompt: "d-t graph features.", marks: 3 },
            { label: "b", prompt: "v-t graph features.", marks: 3 },
            { label: "c", prompt: "Compare usefulness.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Graphs", statement: "d-t: gradient=speed; v-t: gradient=a, area=s." }],
            steps: [
              { part: "a", reasoning: "Gradient=speed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Horizontal=stationary.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Steeper=faster.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gradient=acceleration.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Area=distance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Below axis=negative v.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "v-t gives more info (a and s).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "d-t simpler for speed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) gradient=speed (b) gradient=a/area=s (c) v-t more informative",
            commonErrors: ["In (c) saying d-t gives acceleration."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u1-suvat-graphs-notes",
      title: "Motion calculations and graphs — revision notes",
      summary: "Suvat equations, v-t graph gradient/area.",
      sections: [
        {
          heading: "Key facts",
          body: "v=u+at; s=ut+½at²; v²=u²+2as. d-t gradient=speed. v-t gradient=a, area=s. Free fall a=9.8.",
        },
        {
          heading: "Exam technique",
          body: "- List knowns first, pick right equation.\n- v-t area: triangle for uniform accel.\n- Watch units: m/s², m/s, m, s.",
        },
      ],
    },
  ],
};
