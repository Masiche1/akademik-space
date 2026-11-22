import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mypp4-u1-lesson-1-1",
  code: "1-1",
  title: "Speed, Velocity and Acceleration",
  goal: "I CAN calculate speed, velocity and acceleration, and interpret distance-time and velocity-time graphs.",
  standards: [
    "Key concept: Change",
    "MYP Sciences: Forces",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Speed", definition: "Rate of change of distance; scalar quantity measured in m/s." },
    { term: "Velocity", definition: "Speed in a given direction; vector quantity measured in m/s." },
    { term: "Acceleration", definition: "Rate of change of velocity; measured in m/s²; can be negative (deceleration)." },
    { term: "Distance–time graph", definition: "Graph of distance against time; gradient gives speed." },
    { term: "Velocity–time graph", definition: "Graph of velocity against time; gradient gives acceleration, area gives distance travelled." },
    { term: "Uniform acceleration", definition: "Constant acceleration, e.g. an object in free fall near Earth's surface." },
  ],
  concepts: [
    {
      id: "mypp4-u1-kinematics",
      title: "Speed, velocity and acceleration",
      skill: "Calculate speed, velocity and acceleration from quantities and graphs.",
      lesson: {
        sections: [
          {
            heading: "Speed and velocity",
            body: "**Speed** $= \\frac{\\text{distance}}{\\text{time}}$ is a scalar. **Velocity** is speed with direction (vector). Average speed uses total distance over total time; instantaneous speed is the speed at one moment.",
          },
          {
            heading: "Acceleration",
            body: "**Acceleration** $= \\frac{\\text{change in velocity}}{\\text{time}} = \\frac{v-u}{t}$, in m/s². Negative acceleration is deceleration. For uniform acceleration from rest: $v = u + at$ and $s = ut + \\frac{1}{2}at^2$.",
          },
          {
            heading: "Graph interpretation",
            body: "On a distance–time graph, the gradient is speed; a horizontal line means stationary. On a velocity–time graph, the gradient is acceleration and the **area under the line is distance travelled**. A line sloping down means slowing down.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$s = \\frac{d}{t}$ m/s" },
          { name: "Acceleration", statement: "$a = \\frac{v-u}{t}$ m/s²" },
          { name: "Area under v–t graph", statement: "Distance = area under velocity–time graph" },
        ],
        workedExample: {
          problem: "A car accelerates from 5 m/s to 20 m/s in 5 s. Find its acceleration.",
          solution: "$a = \\frac{20-5}{5} = 3\\ \\text{m/s}^2$.",
        },
      },
      questions: [
        {
          id: "mypp4-u1-kin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "m/s" },
              { id: "b", text: "m" },
              { id: "c", text: "m/s²" },
              { id: "d", text: "s/m" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Speed", statement: "Speed = distance/time, unit m/s." }],
            steps: [
              { reasoning: "Distance in metres divided by time in seconds.", working: "\\frac{m}{s}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** m/s",
            commonErrors: ["Confusing with acceleration unit m/s²."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-kin-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cyclist travels 150 m in 30 s. What is the average speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 m/s" },
              { id: "b", text: "0.2 m/s" },
              { id: "c", text: "30 m/s" },
              { id: "d", text: "180 m/s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Speed", statement: "$s = d/t = 150/30$" }],
            steps: [
              { reasoning: "Speed = distance ÷ time.", working: "\\frac{150}{30}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "5\\ \\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 m/s",
            commonErrors: ["Dividing time by distance."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-kin-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "On a velocity–time graph, a horizontal line at 12 m/s is followed by a straight line down to 0 m/s over 4 s. What does the horizontal section tell you about the object's motion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The object is accelerating at 12 m/s²" },
              { id: "b", text: "The object moves at constant velocity of 12 m/s" },
              { id: "c", text: "The object is stationary" },
              { id: "d", text: "The object moves backwards" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "v–t graph", statement: "Horizontal line = constant velocity; gradient = acceleration." }],
            steps: [
              { reasoning: "Constant velocity means zero acceleration.", working: "a=0", marks: 1, markCode: "M" },
              { reasoning: "The value 12 m/s is the velocity during that section.", working: "v=12\\ \\text{m/s}", marks: 1, markCode: "M" },
              { reasoning: "State interpretation.", working: "\\text{constant velocity}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Constant velocity of 12 m/s",
            commonErrors: ["Reading velocity as acceleration."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-kin-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A delivery van drives 4 km at 20 m/s, stops for 5 min at a depot, then drives 6 km at 30 m/s.",
          parts: [
            { label: "a", prompt: "Calculate the time for the first journey in seconds.", marks: 2 },
            { label: "b", prompt: "Calculate the time for the second journey in minutes.", marks: 2 },
            { label: "c", prompt: "Calculate the average speed for the whole journey.", marks: 3 },
            { label: "d", prompt: "A second van covers the same total distance at constant speed in half the total time. Explain what this means for its average speed.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$s = d/t$; convert km to m and minutes to seconds." },
              { kind: "principle", name: "Average speed", statement: "Total distance ÷ total time including stops." },
            ],
            steps: [
              { part: "a", reasoning: "$4000/20 = 200$ s.", working: "\\frac{4000}{20}=200\\ \\text{s}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct conversion of 4 km.", working: "4000\\ \\text{m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$6000/30 = 200$ s $= 3.33$ min.", working: "\\frac{6000}{30}=200\\ \\text{s}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to minutes.", working: "3.33\\ \\text{min}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total distance 10 km = 10 000 m; total time = 200 + 300 + 200 = 700 s.", working: "10000\\ \\text{m},\\ 700\\ \\text{s}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Include the 5-minute stop.", working: "\\text{include stop}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$10000/700 = 14.3$ m/s.", working: "14.3\\ \\text{m/s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Same distance in half the time → average speed doubles.", working: "\\text{double speed}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 200 s (b) 3.3 min (c) 14.3 m/s (d) average speed is twice",
            commonErrors: ["Excluding the stop time in (c); forgetting km→m conversion."],
            examinerNote: "M1 A1 each for (a),(b); M1 M1 A1 for (c); A1 for (d).",
          },
        },
        {
          id: "mypp4-u1-kin-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A sprinter runs 100 m in 12.5 s. Calculate her average speed.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 8, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Speed", statement: "$s = d/t$" }],
            steps: [
              { reasoning: "Average speed = total distance ÷ total time.", working: "\\frac{100}{12.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with unit.", working: "8\\ \\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 m/s",
            commonErrors: ["Dividing time by distance."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-kin-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about velocity is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Velocity and speed are identical quantities" },
              { id: "b", text: "Velocity is speed in a given direction" },
              { id: "c", text: "Velocity is speed without direction" },
              { id: "d", text: "Velocity is measured in metres" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Velocity", statement: "Velocity = speed with direction; a vector." }],
            steps: [
              { reasoning: "Velocity includes direction, unlike speed.", working: "\\text{vector}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Velocity is speed in a given direction",
            commonErrors: ["Treating velocity and speed as the same."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-kin-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car accelerates uniformly from 4 m/s to 16 m/s in 6 s. Calculate its acceleration.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 2, unit: "m/s²" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Acceleration", statement: "$a = (v-u)/t$" }],
            steps: [
              { reasoning: "Apply $a = (v-u)/t$.", working: "\\frac{16-4}{6}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with unit.", working: "2\\ \\text{m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 m/s²",
            commonErrors: ["Using $v/t$ only, forgetting initial velocity."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-kin-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cyclist rides at a steady 8 m/s for 45 s. How far does she travel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "360 m" },
              { id: "b", text: "8.45 m" },
              { id: "c", text: "53 m" },
              { id: "d", text: "40 m" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "$s = vt$ for constant speed." }],
            steps: [
              { reasoning: "Distance = speed × time.", working: "8\\times45", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "360\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "360 m",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-kin-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "An object has an acceleration of $-3$ m/s². What does this tell you about its motion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is slowing down (decelerating)" },
              { id: "b", text: "It is moving backwards" },
              { id: "c", text: "It is speeding up" },
              { id: "d", text: "It is stationary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Deceleration", statement: "Negative acceleration means velocity is decreasing." }],
            steps: [
              { reasoning: "Negative sign means velocity change opposes motion.", working: "a<0", marks: 1, markCode: "M" },
              { reasoning: "Object is slowing down.", working: "\\text{deceleration}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slowing down (decelerating)",
            commonErrors: ["Thinking negative acceleration means negative velocity."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-kin-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car starts from rest and accelerates uniformly at 2 m/s² for 10 s. Calculate its final velocity.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 20, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = u + at", statement: "Uniform acceleration equation." }],
            steps: [
              { reasoning: "Identify $u = 0$, $a = 2$, $t = 10$.", working: "u=0,a=2,t=10", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $v = u + at$.", working: "v=0+2\\times10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "20\\ \\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 m/s",
            commonErrors: ["Forgetting $u = 0$ for 'from rest'."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-kin-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A scooter travels 300 m at 6 m/s, then 200 m at 10 m/s.",
          parts: [
            { label: "a", prompt: "Calculate the time for the first part of the journey.", marks: 2 },
            { label: "b", prompt: "Calculate the time for the second part of the journey.", marks: 2 },
            { label: "c", prompt: "Calculate the average speed for the whole journey.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "t = s/v", statement: "Time = distance ÷ speed for each constant-speed leg." },
              { kind: "principle", name: "Average speed", statement: "Total distance ÷ total time." },
            ],
            steps: [
              { part: "a", reasoning: "$t = 300/6 = 50$ s.", working: "\\frac{300}{6}=50\\ \\text{s}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State time.", working: "50\\ \\text{s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$t = 200/10 = 20$ s.", working: "\\frac{200}{10}=20\\ \\text{s}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State time.", working: "20\\ \\text{s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total distance 500 m; total time 70 s.", working: "500\\ \\text{m},\\ 70\\ \\text{s}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$500/70 = 7.1$ m/s.", working: "7.1\\ \\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 50 s (b) 20 s (c) 7.1 m/s",
            commonErrors: ["Averaging the two speeds instead of total distance ÷ total time."],
            examinerNote: "M1 A1 for (a),(b); M1 A1 for (c).",
          },
        },
        {
          id: "mypp4-u1-kin-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a distance–time graph, a horizontal line means the object is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "accelerating" },
              { id: "b", text: "decelerating" },
              { id: "c", text: "stationary" },
              { id: "d", text: "moving at constant speed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "d–t graph", statement: "Horizontal line = zero gradient = zero speed." }],
            steps: [
              { reasoning: "No change in distance over time means no movement.", working: "\\text{stationary}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** stationary",
            commonErrors: ["Confusing with constant speed (sloping line)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-kin-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a velocity–time graph, an object moves at a constant 8 m/s for 5 s. What distance does it cover?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 40, unit: "m" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Area under v–t", statement: "Distance = area under velocity–time graph." }],
            steps: [
              { reasoning: "Area = velocity × time = $8 \\times 5$.", working: "8\\times5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "40\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 m",
            commonErrors: ["Reading the velocity value as the distance."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-kin-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between average speed and instantaneous speed, and describe a journey where they differ.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Average speed", statement: "Total distance ÷ total time." },
              { kind: "definition", name: "Instantaneous speed", statement: "Speed at one particular moment." },
            ],
            steps: [
              { reasoning: "Average speed uses the whole journey's total distance and time.", working: "\\text{total }d/t", marks: 1, markCode: "M" },
              { reasoning: "Instantaneous speed is the speed at a single instant, e.g. shown on a speedometer.", working: "\\text{one instant}", marks: 1, markCode: "M" },
              { reasoning: "Example: a car journey with traffic lights — instantaneous speed varies while average stays constant.", working: "\\text{traffic lights}", marks: 1, markCode: "A" },
              { reasoning: "They differ whenever speed is not constant.", working: "\\text{non-uniform}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Average = total d/total t; instantaneous = speed at one moment; differ when speed varies",
            commonErrors: ["Thinking average speed is the mean of instantaneous speeds."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u1-kin-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball is dropped from rest. Take $g = 9.8\\ \\text{m/s}^2$.",
          parts: [
            { label: "a", prompt: "Calculate its velocity after 2 s.", marks: 2 },
            { label: "b", prompt: "Calculate its velocity after 5 s.", marks: 1 },
            { label: "c", prompt: "Explain why the ball accelerates as it falls.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "v = u + at", statement: "$v = 0 + 9.8t$ for a dropped ball." },
              { kind: "principle", name: "Gravity", statement: "Weight provides a constant downward force → constant acceleration." },
            ],
            steps: [
              { part: "a", reasoning: "$v = 9.8 \\times 2 = 19.6$ m/s.", working: "9.8\\times2=19.6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State answer.", working: "19.6\\ \\text{m/s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$v = 9.8 \\times 5 = 49$ m/s.", working: "49\\ \\text{m/s}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Gravity (weight) pulls the ball downward, giving constant acceleration $g$.", working: "W=mg", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 19.6 m/s (b) 49 m/s (c) gravity provides constant downward force",
            commonErrors: ["Using $g = 10$ without being told; forgetting $u = 0$."],
            examinerNote: "M1 A1 for (a), M1 for (b), A1 for (c).",
          },
        },
        {
          id: "mypp4-u1-kin-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A distance–time graph is horizontal for the first 4 s, then curves upward with increasing gradient. Describe the motion.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Accelerating throughout" },
              { id: "b", text: "Stationary, then accelerating" },
              { id: "c", text: "Moving at constant speed, then stationary" },
              { id: "d", text: "Stationary, then moving at constant speed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "d–t graph", statement: "Gradient = speed; increasing gradient = increasing speed." }],
            steps: [
              { reasoning: "Horizontal section = zero speed (stationary).", working: "\\text{stationary}", marks: 1, markCode: "M" },
              { reasoning: "Curving upward with increasing gradient = speed increasing = acceleration.", working: "\\text{increasing gradient}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (c).", working: "\\text{(c)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stationary, then accelerating",
            commonErrors: ["Reading the curve as constant speed."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypp4-u1-motion-graphs",
      title: "Motion graphs and acceleration",
      skill: "Extract speed, acceleration and distance from motion graphs and apply SUVAT equations.",
      lesson: {
        sections: [
          {
            heading: "Distance–time graphs",
            body: "Gradient = speed. Curved (increasing gradient) = speeding up; decreasing gradient = slowing down. Steeper = faster. The total distance is read from the vertical axis.",
          },
          {
            heading: "Velocity–time graphs",
            body: "Gradient = acceleration; area = distance travelled. Triangles and rectangles give distances; a triangle above then below the axis means returning.",
          },
          {
            heading: "SUVAT equations",
            body: "For uniform acceleration: $v = u + at$, $s = \\frac{u+v}{2}t$, $s = ut + \\frac{1}{2}at^2$, $v^2 = u^2 + 2as$. Use $g = 9.8\\ \\text{N/kg}$ unless told otherwise.",
          },
        ],
        keyFormulas: [
          { name: "v–t gradient", statement: "Acceleration = change in velocity ÷ time" },
          { name: "Free fall", statement: "$v = u + gt$, $g = 9.8\\ \\text{m/s}^2$" },
          { name: "Area rule", statement: "Distance = area under v–t graph" },
        ],
        workedExample: {
          problem: "A ball is dropped from rest. Find its velocity after 3 s.",
          solution: "$v = 0 + 9.8 \\times 3 = 29.4\\ \\text{m/s}$.",
        },
      },
      questions: [
        {
          id: "mypp4-u1-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a velocity–time graph, what does the gradient represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acceleration" },
              { id: "b", text: "Speed" },
              { id: "c", text: "Distance" },
              { id: "d", text: "Force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "v–t graph", statement: "Gradient = acceleration." }],
            steps: [
              { reasoning: "Gradient of v–t = Δv/Δt = acceleration.", working: "\\frac{\\Delta v}{\\Delta t}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Acceleration",
            commonErrors: ["Confusing with distance–time gradient (speed)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-gr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An object accelerates uniformly from 0 to 10 m/s in 4 s. What distance does it cover?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "80 m" },
              { id: "b", text: "10 m" },
              { id: "c", text: "40 m" },
              { id: "d", text: "20 m" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Area under v–t", statement: "Triangle area = $\\frac{1}{2} \\times 4 \\times 10$" }],
            steps: [
              { reasoning: "Distance = area under v–t graph (triangle).", working: "\\frac{1}{2}\\times4\\times10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "20\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 m",
            commonErrors: ["Using rectangle area 4×10=40 m."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-gr-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A stone is thrown vertically upwards at 15 m/s. Ignoring air resistance, what is its velocity after 2 s? Take $g = 9.8\\ \\text{m/s}^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15 m/s upwards" },
              { id: "b", text: "0 m/s" },
              { id: "c", text: "19.6 m/s upwards" },
              { id: "d", text: "4.6 m/s downwards" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = u + at", statement: "$v = 15 - 9.8 \\times 2$" }],
            steps: [
              { reasoning: "Acceleration is downward ($-9.8$ m/s²).", working: "a=-9.8\\ \\text{m/s}^2", marks: 1, markCode: "M" },
              { reasoning: "$v = 15 - 19.6 = -4.6$ m/s; negative means downward.", working: "15-19.6=-4.6", marks: 1, markCode: "M" },
              { reasoning: "State direction.", working: "\\text{downwards}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.6 m/s downwards",
            commonErrors: ["Forgetting gravity acts downward after the throw."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-gr-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A train leaves a station and accelerates uniformly to 24 m/s in 60 s, cruises for 120 s, then decelerates uniformly to rest in 40 s.",
          parts: [
            { label: "a", prompt: "Calculate the acceleration in the first stage.", marks: 2 },
            { label: "b", prompt: "Calculate the distance covered while cruising.", marks: 1 },
            { label: "c", prompt: "Calculate the distance covered during acceleration using $s = \\frac{1}{2}(u+v)t$.", marks: 2 },
            { label: "d", prompt: "Calculate the total distance travelled by the train.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "a = Δv/Δt", statement: "Acceleration in stage 1." },
              { kind: "formula", name: "s = vt", statement: "Cruising distance at constant speed." },
            ],
            steps: [
              { part: "a", reasoning: "$a = (24-0)/60 = 0.4$ m/s².", working: "\\frac{24}{60}=0.4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct unit.", working: "\\text{m/s}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$s = 24 \\times 120 = 2880$ m.", working: "24\\times120=2880\\ \\text{m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$s = \\frac{1}{2}(0+24)\\times60 = 720$ m.", working: "\\frac{1}{2}\\times24\\times60", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "720\\ \\text{m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Deceleration distance = same triangle = 720 m (or $\\frac{1}{2}\\times40\\times24$).", working: "720\\ \\text{m}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Sum all three stages: 720 + 2880 + 720.", working: "720+2880+720", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Total = 4320 m.", working: "4320\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.4 m/s² (b) 2880 m (c) 720 m (d) 4320 m",
            commonErrors: ["Using $s=ut+\\frac{1}{2}at^2$ incorrectly; forgetting deceleration covers same distance as acceleration."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u1-gr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a velocity–time graph, what does the area under the line represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force" },
              { id: "b", text: "Acceleration" },
              { id: "c", text: "Distance travelled" },
              { id: "d", text: "Speed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "v–t graph", statement: "Area under v–t graph = distance travelled." }],
            steps: [
              { reasoning: "Area (velocity × time) gives distance.", working: "\\text{area}=d", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Distance travelled",
            commonErrors: ["Confusing with gradient (acceleration)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-gr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An object accelerates uniformly from rest to 15 m/s in 3 s. Calculate its acceleration.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 5, unit: "m/s²" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "a = Δv/Δt", statement: "$a = (15-0)/3$" }],
            steps: [
              { reasoning: "Acceleration = change in velocity ÷ time.", working: "\\frac{15}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "5\\ \\text{m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 m/s²",
            commonErrors: ["Dividing distance by time instead."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-gr-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An object decelerates uniformly from 20 m/s to 8 m/s in 4 s. Calculate its acceleration.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: -3, unit: "m/s²" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "a = Δv/Δt", statement: "$a = (8-20)/4$" }],
            steps: [
              { reasoning: "Velocity decreases, so acceleration is negative.", working: "\\frac{8-20}{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "-3\\ \\text{m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-3 m/s² (3 m/s² deceleration)",
            commonErrors: ["Forgetting the negative sign for deceleration."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-gr-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a distance–time graph, a straight line sloping gently upward means the object is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "decelerating" },
              { id: "b", text: "accelerating" },
              { id: "c", text: "stationary" },
              { id: "d", text: "moving at constant speed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "d–t graph", statement: "Straight line = constant gradient = constant speed." }],
            steps: [
              { reasoning: "Constant gradient means constant speed.", working: "\\text{constant gradient}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** moving at constant speed",
            commonErrors: ["Thinking any upward slope means acceleration."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-gr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A stone is dropped from rest. Using $v = gt$ with $g = 9.8\\ \\text{m/s}^2$, find its speed after 6 s.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 58.8, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Free fall", statement: "$v = u + gt$ with $u = 0$." }],
            steps: [
              { reasoning: "Substitute into $v = gt$.", working: "9.8\\times6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "58.8\\ \\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "58.8 m/s",
            commonErrors: ["Forgetting $u = 0$ for a dropped object."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-gr-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A velocity–time graph shows an object at rest for 2 s, then accelerating uniformly to 10 m/s in 4 s, then moving at constant velocity for 6 s. What is the acceleration in the second stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 m/s²" },
              { id: "b", text: "40 m/s²" },
              { id: "c", text: "2.5 m/s²" },
              { id: "d", text: "10 m/s²" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "a = Δv/Δt", statement: "Acceleration = gradient of v–t graph." }],
            steps: [
              { reasoning: "Velocity change = $10 - 0 = 10$ m/s over 4 s.", working: "\\Delta v=10\\ \\text{m/s}", marks: 1, markCode: "M" },
              { reasoning: "$a = 10/4 = 2.5$ m/s².", working: "\\frac{10}{4}=2.5", marks: 1, markCode: "M" },
              { reasoning: "Match choice (a).", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 2.5 m/s²",
            commonErrors: ["Using the total time including the rest stage."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-gr-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A train's velocity–time graph shows: acceleration from 0 to 20 m/s in 10 s, constant 20 m/s for 30 s, then deceleration from 20 m/s to 0 in 10 s.",
          parts: [
            { label: "a", prompt: "Calculate the acceleration during the first stage.", marks: 2 },
            { label: "b", prompt: "Calculate the distance travelled during the constant-velocity stage.", marks: 2 },
            { label: "c", prompt: "Calculate the total distance travelled by the train.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "a = Δv/Δt", statement: "Acceleration in stage 1." },
              { kind: "principle", name: "Area under v–t", statement: "Distance = area: triangle for acceleration, rectangle for cruise, triangle for deceleration." },
            ],
            steps: [
              { part: "a", reasoning: "$a = 20/10 = 2$ m/s².", working: "\\frac{20}{10}=2\\ \\text{m/s}^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State answer.", working: "2\\ \\text{m/s}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rectangle area: $20 \\times 30 = 600$ m.", working: "20\\times30=600\\ \\text{m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State answer.", working: "600\\ \\text{m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Acceleration triangle $\\frac{1}{2}\\times10\\times20=100$ m; deceleration same = 100 m; total = 100 + 600 + 100.", working: "100+600+100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Total = 800 m.", working: "800\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 m/s² (b) 600 m (c) 800 m",
            commonErrors: ["Using only the rectangle area; forgetting triangular end stages."],
            examinerNote: "M1 A1 for (a),(b); M1 A1 for (c).",
          },
        },
        {
          id: "mypp4-u1-gr-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a velocity–time graph, uniform (constant) acceleration appears as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a vertical line" },
              { id: "b", text: "a curve" },
              { id: "c", text: "a horizontal line" },
              { id: "d", text: "a straight line with constant gradient" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "v–t graph", statement: "Constant acceleration = constant gradient = straight sloping line." }],
            steps: [
              { reasoning: "Gradient = acceleration; constant gradient = straight line.", working: "\\text{constant gradient}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** a straight line with constant gradient",
            commonErrors: ["Choosing horizontal line (that is constant velocity)."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp4-u1-gr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a velocity–time graph, an object travels at 6 m/s for 8 s, then is stationary for 4 s. What is the total distance travelled?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 48, unit: "m" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Area under v–t", statement: "Only the moving stage contributes area." }],
            steps: [
              { reasoning: "Stationary stage has zero velocity → zero area. Moving area = $6 \\times 8$.", working: "6\\times8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "48\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "48 m",
            commonErrors: ["Adding the 4 s stationary time into the distance."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-gr-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how you would determine the total distance travelled from a velocity–time graph, including what to do if part of the graph lies below the time axis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Area rule", statement: "Distance = area under v–t graph." },
              { kind: "principle", name: "Negative velocity", statement: "Below axis = opposite direction; area still gives distance magnitude." },
            ],
            steps: [
              { reasoning: "Divide the graph into rectangles and triangles (or simple shapes).", working: "\\text{split into shapes}", marks: 1, markCode: "M" },
              { reasoning: "Calculate each area using $\\text{velocity} \\times \\text{time}$ or $\\frac{1}{2}\\text{base}\\times\\text{height}$.", working: "\\text{areas}", marks: 1, markCode: "M" },
              { reasoning: "Below the axis the object moves in the opposite direction; take the area magnitude for distance but note direction for displacement.", working: "\\text{opposite direction}", marks: 1, markCode: "A" },
              { reasoning: "Sum all areas to get total distance travelled.", working: "\\text{sum areas}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Split into shapes, sum areas; below-axis areas count as distance but opposite direction",
            commonErrors: ["Subtracting below-axis area instead of treating direction separately."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u1-gr-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cyclist accelerates uniformly from 2 m/s to 10 m/s in 8 s, then brakes uniformly to rest in 5 s.",
          parts: [
            { label: "a", prompt: "Calculate the acceleration during the first stage.", marks: 2 },
            { label: "b", prompt: "Calculate the acceleration during the braking stage.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "a = Δv/Δt", statement: "Apply to each stage separately." }],
            steps: [
              { part: "a", reasoning: "$a = (10-2)/8 = 1$ m/s².", working: "\\frac{10-2}{8}=1\\ \\text{m/s}^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State answer.", working: "1\\ \\text{m/s}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$a = (0-10)/5 = -2$ m/s² — a deceleration of 2 m/s².", working: "\\frac{0-10}{5}=-2\\ \\text{m/s}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State answer with sign/direction.", working: "-2\\ \\text{m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 m/s² (b) -2 m/s² (deceleration of 2 m/s²)",
            commonErrors: ["Giving braking acceleration as positive without noting deceleration."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypp4-u1-gr-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A velocity–time graph shows the velocity rising from 0 to 12 m/s over 6 s, staying at 12 m/s for 4 s, then falling to 0 over 6 s. Which description is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Uniform acceleration throughout" },
              { id: "b", text: "Decelerating, then constant, then accelerating" },
              { id: "c", text: "Accelerating, then constant velocity, then decelerating" },
              { id: "d", text: "Constant velocity throughout" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "v–t graph", statement: "Upward slope = acceleration; flat = constant velocity; downward slope = deceleration." }],
            steps: [
              { reasoning: "First stage slopes up → accelerating.", working: "\\text{up slope}", marks: 1, markCode: "M" },
              { reasoning: "Flat section → constant velocity; final downward slope → decelerating.", working: "\\text{flat then down}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** accelerating, constant velocity, then decelerating",
            commonErrors: ["Ignoring the flat section."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
