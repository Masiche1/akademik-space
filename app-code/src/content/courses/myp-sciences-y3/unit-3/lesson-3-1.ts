import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "myps3-u3-lesson-3-1",
  code: "3-1",
  title: "Motion and Forces",
  goal: "I CAN interpret distance-time and velocity-time graphs, describe resultant forces, and investigate turning effects of forces.",
  standards: [
    "Key concept: Change",
    "MYP Sciences: Forces",
    "Criterion A: Knowing and understanding",
    "Criterion B: Inquiring and designing",
  ],
  vocabulary: [
    { term: "Speed", definition: "Distance travelled per unit time, measured in m/s or km/h." },
    { term: "Velocity", definition: "Speed in a given direction; a vector quantity." },
    { term: "Acceleration", definition: "The rate of change of velocity, measured in m/s²." },
    { term: "Resultant force", definition: "The single force that has the same effect as all forces acting together." },
    { term: "Moment", definition: "The turning effect of a force, calculated as force × perpendicular distance from the pivot." },
    { term: "Pivot", definition: "The fixed point about which an object rotates." },
  ],
  concepts: [
    {
      id: "myps3-u3-motion",
      title: "Motion: speed, velocity and acceleration",
      skill: "Interpret distance-time and velocity-time graphs and describe speed, velocity and acceleration.",
      lesson: {
        sections: [
          {
            heading: "Speed, velocity and acceleration",
            body: "**Speed** = distance ÷ time. **Velocity** = speed in a direction (a vector). **Acceleration** = change in velocity ÷ time. Units: m/s for speed/velocity, m/s² for acceleration.",
          },
          {
            heading: "Distance-time graphs",
            body: "On a distance-time graph:\n\n- **Gradient** = speed\n- **Horizontal line** = stationary\n- **Steeper gradient** = faster\n- **Curved line** = changing speed",
          },
          {
            heading: "Velocity-time graphs",
            body: "On a velocity-time graph:\n\n- **Gradient** = acceleration\n- **Area under the line** = distance travelled\n- **Horizontal line** = constant velocity\n- **Line sloping down to zero** = deceleration to rest",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$v=\\frac{d}{t}$" },
          { name: "Acceleration", statement: "$a=\\frac{\\Delta v}{\\Delta t}$" },
          { name: "Distance-time gradient", statement: "Gradient = speed" },
          { name: "Velocity-time gradient", statement: "Gradient = acceleration; area = distance" },
        ],
        workedExample: {
          problem: "A car travels 150 km in 2 hours, then 100 km in 1 hour. What is its average speed for the whole journey?",
          solution: "Total distance = 250 km, total time = 3 hours. Average speed = $\\frac{250}{3}\\approx83.3$ km/h.",
        },
      },
      questions: [
        {
          id: "myps3-u3-motion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a distance-time graph, what does the gradient represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acceleration" },
              { id: "b", text: "Speed" },
              { id: "c", text: "Distance" },
              { id: "d", text: "Time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Distance-time graph", statement: "Gradient = speed." },
            ],
            steps: [
              { reasoning: "Gradient of distance-time graph is speed.", working: "\\text{speed}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Speed",
            commonErrors: ["Choosing acceleration — that's velocity-time."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-motion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cyclist travels 30 km in 1.5 hours. Calculate her average speed in km/h.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 20, unit: "km/h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$v=\\frac{d}{t}$" },
            ],
            steps: [
              { reasoning: "Apply speed formula.", working: "v=\\frac{30}{1.5}=20", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "20\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ km/h",
            commonErrors: ["Dividing time by distance."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-motion-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A velocity-time graph shows a car accelerating from 0 to 20 m/s in 5 seconds, then travelling at constant velocity for 10 seconds. Calculate the total distance travelled.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 300, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Velocity-time graph", statement: "Area under the line = distance travelled." },
            ],
            steps: [
              { reasoning: "Acceleration phase: area of triangle = $\\frac{1}{2}\\times5\\times20=50$ m.", working: "A_1=\\frac{1}{2}(5)(20)=50", marks: 1, markCode: "M" },
              { reasoning: "Constant velocity phase: area of rectangle = $10\\times20=200$ m.", working: "A_2=10\\times20=200", marks: 1, markCode: "M" },
              { reasoning: "Total distance = sum of areas.", working: "50+200=300\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300$ m",
            commonErrors: ["Using only one phase."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "myps3-u3-motion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A train journey is described by a distance-time graph: it travels 40 km in the first hour, stops for 20 minutes, then travels 30 km in the next 40 minutes.",
          parts: [
            { label: "a", prompt: "Calculate the average speed for the first hour.", marks: 2 },
            { label: "b", prompt: "Describe what the graph looks like during the 20-minute stop.", marks: 1 },
            { label: "c", prompt: "Calculate the average speed for the last 40 minutes.", marks: 2 },
            { label: "d", prompt: "Calculate the average speed for the entire journey.", marks: 3 },
          ],
          response: { type: "numeric", parts: [{ label: "(a) First hour speed", answer: 40, unit: "km/h" }, { label: "(c) Last 40 min speed", answer: 45, unit: "km/h" }, { label: "(d) Overall average", answer: 35, unit: "km/h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$v=\\frac{d}{t}$" },
              { kind: "principle", name: "Average speed", statement: "Total distance ÷ total time." },
            ],
            steps: [
              { part: "a", reasoning: "Speed = distance ÷ time.", working: "v=\\frac{40}{1}=40", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the speed.", working: "40\\text{ km/h}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Horizontal line — distance stays constant.", working: "\\text{horizontal line}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Time = 40 minutes = $\\frac{40}{60}=\\frac{2}{3}$ hour.", working: "t=\\frac{2}{3}\\text{ h}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Speed = $\\frac{30}{2/3}=45$ km/h.", working: "v=45\\text{ km/h}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Total distance = 70 km; total time = $1+\\frac{20}{60}+\\frac{40}{60}=1+\\frac{1}{3}+\\frac{2}{3}=2$ hours.", working: "d=70\\text{ km},\\ t=2\\text{ h}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Average speed = total distance ÷ total time.", working: "v=\\frac{70}{2}=35", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State the answer with units.", working: "35\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40 km/h (b) horizontal line (c) 45 km/h (d) 35 km/h",
            commonErrors: ["In (d), forgetting to include the stop time."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 A1 A1 for (d).",
          },
        },
        {
          id: "myps3-u3-motion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Velocity is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed without any direction" },
              { id: "b", text: "Speed in a given direction" },
              { id: "c", text: "Distance travelled per unit time" },
              { id: "d", text: "Rate of change of distance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Velocity", statement: "Speed in a given direction; a vector quantity." },
            ],
            steps: [
              { reasoning: "Velocity includes direction; speed does not.", working: "v=\\text{speed}+\\text{direction}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Speed in a given direction",
            commonErrors: ["Confusing velocity with speed — only velocity has direction."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-motion-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On a distance-time graph, a horizontal line shows an object that is stationary. What is its speed?",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 0, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Distance-time graph", statement: "Horizontal line = distance not changing = stationary." },
            ],
            steps: [
              { reasoning: "Distance stays constant, so the gradient of the graph is zero.", working: "\\text{gradient}=0", marks: 1, markCode: "M" },
              { reasoning: "Zero speed = $0$ m/s.", working: "0\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0$ m/s",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-motion-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A car travels 100 m in 20 s. Calculate its speed.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 5, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$v=\\frac{d}{t}$" },
            ],
            steps: [
              { reasoning: "Apply the speed formula.", working: "v=\\frac{100}{20}=5", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "5\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ m/s",
            commonErrors: ["Dividing time by distance."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-motion-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A train travels 60 km in 1.5 hours. Calculate its average speed.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 40, unit: "km/h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$v=\\frac{d}{t}$" },
            ],
            steps: [
              { reasoning: "Apply the speed formula.", working: "v=\\frac{60}{1.5}=40", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "40\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$ km/h",
            commonErrors: ["Multiplying distance by time instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-motion-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car accelerates from rest to 10 m/s in 5 seconds. Calculate its acceleration.",
          response: { type: "numeric", parts: [{ label: "Acceleration", answer: 2, unit: "m/s²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Acceleration", statement: "$a=\\frac{\\Delta v}{\\Delta t}$" },
            ],
            steps: [
              { reasoning: "Change in velocity = 10 − 0 = 10 m/s; divide by time.", working: "a=\\frac{10-0}{5}=2", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "2\\text{ m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ m/s²",
            commonErrors: ["Using distance instead of change in velocity."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-motion-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a velocity-time graph, the gradient represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed" },
              { id: "b", text: "Acceleration" },
              { id: "c", text: "Distance" },
              { id: "d", text: "Time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Velocity-time graph", statement: "Gradient = acceleration; area = distance." },
            ],
            steps: [
              { reasoning: "The gradient of a velocity-time graph is the rate of change of velocity — acceleration.", working: "\\text{gradient}=a", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Acceleration",
            commonErrors: ["Choosing speed — that is the gradient of a distance-time graph."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-motion-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A car travels at a constant velocity of 15 m/s for 8 seconds. Calculate the distance travelled.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 120, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$v=\\frac{d}{t}\\Rightarrow d=vt$" },
            ],
            steps: [
              { reasoning: "Rearrange to distance = velocity × time.", working: "d=15\\times8=120", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "120\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120$ m",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-motion-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A velocity-time graph shows a car accelerating uniformly from 0 to 20 m/s in 4 seconds, then travelling at a constant 20 m/s for 6 seconds. Calculate the total distance travelled.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 160, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Velocity-time graph", statement: "Area under the line = distance travelled." },
            ],
            steps: [
              { reasoning: "Acceleration phase: triangle area = $\\frac{1}{2}\\times4\\times20=40$ m.", working: "A_1=\\frac{1}{2}(4)(20)=40", marks: 1, markCode: "M" },
              { reasoning: "Constant phase: rectangle area = $6\\times20=120$ m.", working: "A_2=6\\times20=120", marks: 1, markCode: "M" },
              { reasoning: "Total = $40+120=160$ m.", working: "160\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$160$ m",
            commonErrors: ["Ignoring one of the two phases."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "myps3-u3-motion-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about velocity is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is speed in a given direction" },
              { id: "b", text: "It is distance per unit time with no direction" },
              { id: "c", text: "It is always positive" },
              { id: "d", text: "It is the same as acceleration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Speed vs velocity", statement: "Speed is distance per unit time; velocity is speed in a given direction." },
            ],
            steps: [
              { reasoning: "Velocity includes direction, so it can be negative; it is a vector.", working: "v=\\text{speed}+\\text{direction}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It is speed in a given direction",
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u3-motion-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe what a curved line on a distance-time graph indicates about an object's motion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Distance-time graph", statement: "Gradient = speed; a curve means changing speed." },
            ],
            steps: [
              { reasoning: "A curve means the gradient (and therefore the speed) is changing.", working: "\\text{curve}=\\text{changing speed}", marks: 1, markCode: "R" },
              { reasoning: "A curve getting steeper means the object is speeding up.", working: "\\text{steeper}=\\text{faster}", marks: 1, markCode: "M" },
              { reasoning: "A curve getting shallower means the object is slowing down.", working: "\\text{shallower}=\\text{slower}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A curved line shows changing speed — steeper means speeding up, shallower means slowing down",
            commonErrors: ["Saying the object is stationary on a curve."],
            examinerNote: "R1 M1 A1.",
          },
        },
        {
          id: "myps3-u3-motion-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert a speed of 20 m/s into km/h.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 72, unit: "km/h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Unit conversion", statement: "1 m/s = 3.6 km/h" },
            ],
            steps: [
              { reasoning: "Multiply by 3.6 to convert m/s to km/h.", working: "20\\times3.6=72", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "72\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$72$ km/h",
            commonErrors: ["Dividing by 3.6 instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-motion-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A cyclist travels 240 m in 40 s at a steady speed. Calculate the cyclist's speed.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 6, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$v=\\frac{d}{t}$" },
            ],
            steps: [
              { reasoning: "Apply the speed formula.", working: "v=\\frac{240}{40}", marks: 1, markCode: "M" },
              { reasoning: "Speed = 6 m/s.", working: "240\\div40=6\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ m/s",
            commonErrors: ["Dividing time by distance."],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
    {
      id: "myps3-u3-forces",
      title: "Resultant forces and moments",
      skill: "Describe resultant forces, balanced and unbalanced forces, and investigate turning effects of forces.",
      lesson: {
        sections: [
          {
            heading: "Resultant force",
            body: "The **resultant force** is the single force equivalent to all forces acting on an object. If forces are balanced, the resultant is zero and the object stays at rest or moves at constant velocity. If unbalanced, the object accelerates.",
          },
          {
            heading: "Forces in one dimension",
            body: "Forces in the same direction add; forces in opposite directions subtract. A 10 N force right and 4 N force left give a resultant of 6 N to the right.",
          },
          {
            heading: "Moments and turning effects",
            body: "A **moment** is the turning effect of a force: $\\text{moment}=\\text{force}\\times\\text{perpendicular distance from pivot}$. For an object to be balanced, the sum of clockwise moments must equal the sum of anticlockwise moments. This is the **principle of moments**.",
          },
        ],
        keyFormulas: [
          { name: "Resultant force", statement: "Sum of forces in one direction minus sum in the opposite direction" },
          { name: "Moment", statement: "$M=F\\times d$ where $d$ is perpendicular distance from pivot" },
          { name: "Balance condition", statement: "Sum of clockwise moments = sum of anticlockwise moments" },
        ],
        workedExample: {
          problem: "A see-saw has a 30 N child sitting 2 m from the pivot. Where should a 40 N child sit to balance it?",
          solution: "For balance: $30\\times2=40\\times d$, so $d=\\frac{60}{40}=1.5$ m from the pivot on the other side.",
        },
      },
      questions: [
        {
          id: "myps3-u3-forces-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A box is pushed with 8 N to the right and 3 N to the left. What is the resultant force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 N left" },
              { id: "b", text: "5 N right" },
              { id: "c", text: "11 N right" },
              { id: "d", text: "0 N" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant force", statement: "Opposite forces subtract." },
            ],
            steps: [
              { reasoning: "$8-3=5$ N to the right.", working: "8-3=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 5 N right",
            commonErrors: ["Adding instead of subtracting."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-forces-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the moment of a 25 N force applied 0.4 m from a pivot.",
          response: { type: "numeric", parts: [{ label: "Moment", answer: 10, unit: "N m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$M=F\\times d$" },
            ],
            steps: [
              { reasoning: "Multiply force by distance.", working: "M=25\\times0.4=10", marks: 1, markCode: "M" },
              { reasoning: "State the moment.", working: "10\\text{ N m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ N m",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-forces-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A see-saw is balanced with a 40 N child sitting 1.5 m from the pivot on one side. A 30 N child sits on the other side. How far from the pivot should the 30 N child sit?",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 2, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance condition", statement: "Clockwise moments = anticlockwise moments." },
            ],
            steps: [
              { reasoning: "Set moments equal: $40\\times1.5=30\\times d$.", working: "60=30d", marks: 1, markCode: "M" },
              { reasoning: "Solve for $d$.", working: "d=2\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "State the distance.", working: "2\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ m",
            commonErrors: ["Using force instead of moment."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "myps3-u3-forces-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates how the position of a weight affects the force needed to lift it using a lever.",
          parts: [
            { label: "a", prompt: "Identify the independent, dependent and control variables.", marks: 3 },
            { label: "b", prompt: "Describe how to measure the force needed.", marks: 2 },
            { label: "c", prompt: "Predict the relationship between distance from pivot and force needed.", marks: 2 },
            { label: "d", prompt: "Explain why a longer handle makes lifting easier.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moment", statement: "$M=F\\times d$; for balance, moments must be equal." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: distance from pivot. Dependent: force needed.", working: "\\text{independent: distance; dependent: force}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Controls: weight, lever length, pivot position.", working: "\\text{controls: weight, length, pivot}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three.", working: "\\text{independent, dependent, controls}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use a force meter/spring balance at the end of the lever.", working: "\\text{force meter}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Record force for each distance.", working: "\\text{record readings}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Greater distance → less force needed (inverse relationship).", working: "\\text{inverse relationship}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain using moments: $F\\times d=$ constant.", working: "Fd=\\text{constant}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Longer handle increases $d$, so smaller $F$ needed for same moment.", working: "\\text{larger }d\\Rightarrow\\text{smaller }F", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) independent: distance; dependent: force; controls: weight, length, pivot (b) force meter (c) inverse relationship (d) larger distance reduces force needed",
            commonErrors: ["Expecting direct relationship."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 R1 for (c), R1 for (d).",
          },
        },
        {
          id: "myps3-u3-forces-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If the resultant force on an object is zero, the object will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always accelerate" },
              { id: "b", text: "Stay at rest or move at constant velocity" },
              { id: "c", text: "Stop immediately" },
              { id: "d", text: "Change direction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balanced forces", statement: "Zero resultant force → no acceleration." },
            ],
            steps: [
              { reasoning: "Balanced forces mean no change in velocity.", working: "F_{net}=0\\Rightarrow a=0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Stay at rest or move at constant velocity",
            commonErrors: ["Saying the object must stop — it could already be moving steadily."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-forces-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The moment of a force is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force divided by distance" },
              { id: "b", text: "Force times perpendicular distance from the pivot" },
              { id: "c", text: "Distance times time" },
              { id: "d", text: "Force times time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$M=F\\times d$ where $d$ is perpendicular distance from the pivot." },
            ],
            steps: [
              { reasoning: "Moment = force × perpendicular distance.", working: "M=Fd", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Force times perpendicular distance from the pivot",
            commonErrors: ["Using the distance along the object rather than perpendicular distance."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-forces-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A box is pushed with 12 N to the right and 5 N to the left. Calculate the resultant force and its direction.",
          response: { type: "numeric", parts: [{ label: "Resultant force", answer: 7, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant force", statement: "Opposite forces subtract." },
            ],
            steps: [
              { reasoning: "Forces in opposite directions subtract: 12 − 5.", working: "12-5=7", marks: 1, markCode: "M" },
              { reasoning: "The larger force is to the right, so resultant is 7 N right.", working: "7\\text{ N right}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$ N to the right",
            commonErrors: ["Adding the forces to get 17 N."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-forces-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the moment of a 30 N force applied 0.5 m from a pivot.",
          response: { type: "numeric", parts: [{ label: "Moment", answer: 15, unit: "N m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$M=F\\times d$" },
            ],
            steps: [
              { reasoning: "Multiply force by perpendicular distance.", working: "M=30\\times0.5=15", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "15\\text{ N m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ N m",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-forces-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A see-saw is balanced. A 20 N child sits 3 m from the pivot on one side. What force must be applied 2 m from the pivot on the other side to keep it balanced?",
          response: { type: "numeric", parts: [{ label: "Force", answer: 30, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance condition", statement: "Clockwise moments = anticlockwise moments." },
            ],
            steps: [
              { reasoning: "Set moments equal: $20\\times3=F\\times2$.", working: "60=2F", marks: 1, markCode: "M" },
              { reasoning: "Solve: $F=\\frac{60}{2}=30$ N.", working: "F=30\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$ N",
            commonErrors: ["Using the child's weight directly instead of equating moments."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-forces-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Unbalanced forces acting on an object cause it to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Remain stationary" },
              { id: "b", text: "Accelerate" },
              { id: "c", text: "Lose mass" },
              { id: "d", text: "Stop instantly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unbalanced forces", statement: "A non-zero resultant force produces acceleration." },
            ],
            steps: [
              { reasoning: "A resultant force changes velocity — the object accelerates.", working: "F_{net}\\neq0\\Rightarrow a\\neq0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Accelerate",
            commonErrors: ["Saying it moves at constant speed — that requires balanced forces."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-forces-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "On one side of a pivot, a 10 N force acts at 4 m and a 20 N force acts at 1 m (both producing clockwise moments). On the other side, a single 15 N force acts. How far from the pivot must it act to balance the moments?",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 4, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance condition", statement: "Sum of clockwise moments = sum of anticlockwise moments." },
            ],
            steps: [
              { reasoning: "Clockwise moment = $(10\\times4)+(20\\times1)=40+20=60$ N m.", working: "40+20=60", marks: 1, markCode: "M" },
              { reasoning: "Set equal: $15\\times d=60$.", working: "15d=60", marks: 1, markCode: "M" },
              { reasoning: "Solve: $d=4$ m.", working: "d=4\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ m",
            commonErrors: ["Adding the two forces first (30 N) then using a single moment."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "myps3-u3-forces-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which change would increase the moment of a force about a pivot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decrease the force" },
              { id: "b", text: "Move the force closer to the pivot" },
              { id: "c", text: "Increase the perpendicular distance from the pivot" },
              { id: "d", text: "Apply the force at an angle parallel to the object" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$M=F\\times d$; increasing $d$ or $F$ increases the moment." },
            ],
            steps: [
              { reasoning: "Moment increases with force and with perpendicular distance from the pivot.", working: "M=Fd", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Increase the perpendicular distance from the pivot",
            commonErrors: ["Choosing to move closer — that decreases the moment."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u3-forces-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A door is easier to open when you push near the handle rather than near the hinges because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The handle is further from the pivot, giving a larger moment for the same force" },
              { id: "b", text: "The door is lighter near the handle" },
              { id: "c", text: "The hinges are magnetised" },
              { id: "d", text: "The handle is smoother" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$M=F\\times d$; larger distance gives a larger turning effect." },
            ],
            steps: [
              { reasoning: "The handle is further from the pivot, so the same force produces a larger moment.", working: "d\\uparrow\\Rightarrow M\\uparrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The handle is further from the pivot, giving a larger moment for the same force",
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u3-forces-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the principle of moments and how it is used to balance a see-saw.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Principle of moments", statement: "For balance, clockwise moments equal anticlockwise moments." },
            ],
            steps: [
              { reasoning: "Each force creates a moment equal to force × distance from the pivot.", working: "M=Fd", marks: 1, markCode: "M" },
              { reasoning: "The see-saw balances when the sum of clockwise moments equals the sum of anticlockwise moments.", working: "\\sum M_{cw}=\\sum M_{acw}", marks: 1, markCode: "R" },
              { reasoning: "Example: a heavy child close to the pivot can balance a lighter child further away.", working: "\\text{heavy near, light far}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The see-saw balances when clockwise moments equal anticlockwise moments: $\\sum Fd_{cw}=\\sum Fd_{acw}$",
            commonErrors: ["Balancing forces instead of moments."],
            examinerNote: "M1 R1 A1.",
          },
        },
        {
          id: "myps3-u3-forces-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A force produces a moment of 24 N m. If the force applied is 8 N, calculate the perpendicular distance from the pivot.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 3, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$M=F\\times d\\Rightarrow d=\\frac{M}{F}$" },
            ],
            steps: [
              { reasoning: "Rearrange the moment formula.", working: "d=\\frac{24}{8}=3", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "3\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ m",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-forces-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A nut requires a moment of 36 N m to loosen. A spanner applies a force of 9 N perpendicular to the nut. How far from the nut is the force applied?",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 4, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$M=F\\times d\\Rightarrow d=\\frac{M}{F}$" },
            ],
            steps: [
              { reasoning: "Rearrange the moment formula.", working: "d=\\frac{36}{9}", marks: 1, markCode: "M" },
              { reasoning: "Distance = 4 m — a longer handle means less force is needed.", working: "36\\div9=4\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ m",
            commonErrors: ["Multiplying force by moment instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
  ],
};
