import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "olm-u3-lesson-3-3",
  code: "3-3",
  title: "Real-Life Graphs",
  goal: "I CAN interpret graphs of real-world situations.",
  standards: ["4024: graphs"],
  vocabulary: [
    { term: "Distance-time graph", definition: "Graph of distance vs time; gradient = speed." },
    { term: "Speed-time graph", definition: "Graph of speed vs time; area = distance." },
    { term: "Gradient", definition: "Rate of change — slope of graph." },
    { term: "Horizontal line", definition: "Constant value — zero rate of change." },
  ],
  concepts: [
    {
      id: "olm-u3-s3-distance",
      title: "Distance-time graphs",
      skill: "Interpret distance-time graphs at O Level.",
      lesson: {
        sections: [
          { heading: "Reading the graph", body: "On a distance-time graph, the gradient gives speed: steeper = faster, horizontal = stationary, curve = changing speed. A straight line means constant speed; a curve means acceleration or deceleration. The graph never goes below the time axis since distance can't be negative (unlike displacement, which can)." },
          { heading: "Journey analysis", body: "For a journey graph: flat sections are stops, steep sections are fast travel, gentle slopes are slow. Total distance is the final value on the y-axis. Average speed = total distance ÷ total time. To find when the traveller was stationary, look for horizontal sections; to find maximum speed, find the steepest gradient." },
        ],
        keyFormulas: [
          { name: "Speed", statement: "Gradient of distance-time graph" },
          { name: "Average speed", statement: "$\\frac{\\text{total distance}}{\\text{total time}}$" },
        ],
        workedExample: { problem: "A distance-time graph shows a car travelling 100 km in 2 hours, stopping for 30 min, then 50 km in 1 hour. Find average speed for the whole journey.", solution: "Total distance $=150$ km; total time $=2+0.5+1=3.5$ h. Average speed $=\\frac{150}{3.5}\\approx42.9$ km/h." },
      },
      questions: [
        {
          id: "olm-u3-s3-di-q1", difficulty: "foundation", totalMarks: 1,
          stem: "On a distance-time graph, a horizontal line means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stationary" }, { id: "b", text: "Maximum speed" }, { id: "c", text: "Accelerating" }, { id: "d", text: "Negative speed" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "DT graph", statement: "Zero gradient = rest." }], steps: [{ reasoning: "No change in distance → stationary.", marks: 1, markCode: "A" }], finalAnswer: "Stationary" },
        },
        {
          id: "olm-u3-s3-di-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A cyclist covers 30 km in 1.5 hours. Find the average speed.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: { principles: [{ kind: "formula", name: "Average speed", statement: "d/t." }], steps: [
            { reasoning: "$s=\\frac{30}{1.5}=20$ km/h.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 20 km/h.", marks: 1, markCode: "A" },
          ], finalAnswer: "20 km/h" },
        },
        {
          id: "olm-u3-s3-di-q3", difficulty: "core", totalMarks: 3,
          stem: "On a distance-time graph, the steeper the line, the…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Gradient = speed", statement: "Steeper = faster." }], steps: [
            { reasoning: "Greater speed.", marks: 1, markCode: "M" },
            { reasoning: "Explanation: gradient is rate of change of distance = speed.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Greater speed" },
        },
        {
          id: "olm-u3-s3-di-q4", difficulty: "core", totalMarks: 4,
          stem: "A train journey: 80 km in 1 hour, 20 min stop, 60 km in 45 min. Find total journey time and average speed.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Journey analysis", statement: "Total distance/time." }], steps: [
            { reasoning: "Total distance $=140$ km; total time $=1+\\frac{20}{60}+\\frac{45}{60}=1+0.333+0.75=2.083$ h ($\\approx2$ h 5 min).", marks: 1, markCode: "M" },
            { reasoning: "Average speed $=\\frac{140}{2.083}\\approx67.2$ km/h.", marks: 1, markCode: "M" },
            { reasoning: "Or $\\frac{140}{\\frac{25}{12}}=140\\times\\frac{12}{25}=67.2$ km/h.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ~67.2 km/h.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈67 km/h" },
        },
      ],
    },
    {
      id: "olm-u3-s3-speed",
      title: "Speed-time graphs",
      skill: "Interpret speed-time graphs at O Level.",
      lesson: {
        sections: [
          { heading: "Area = distance", body: "On a speed-time graph, the area under the curve gives distance travelled. For constant speed it's a rectangle ($\\text{speed}\\times\\text{time}$); for changing speed you count squares or split into triangles and rectangles. The gradient of a speed-time graph gives acceleration — steep upward slope means speeding up, downward means slowing down, horizontal means constant speed." },
          { heading: "Deceleration", body: "When the graph slopes downward, the object is decelerating — the gradient is negative acceleration. The object stops when speed reaches zero (graph touches the time axis). After stopping it may stay stopped (graph on axis) or move in reverse (graph below axis on displacement-time, but speed-time graphs show speed as magnitude so usually stay above axis)." },
        ],
        keyFormulas: [
          { name: "Distance", statement: "Area under speed-time graph" },
          { name: "Acceleration", statement: "Gradient of speed-time graph" },
        ],
        workedExample: { problem: "A car accelerates uniformly from 0 to 20 m/s in 4 s, then travels at 20 m/s for 6 s. Find total distance.", solution: "Area 1 (triangle): $\\frac12\\times4\\times20=40$ m. Area 2 (rectangle): $20\\times6=120$ m. Total: 160 m." },
      },
      questions: [
        {
          id: "olm-u3-s3-sp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "On a speed-time graph, the area under the curve represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Distance travelled" }, { id: "b", text: "Acceleration" }, { id: "c", text: "Speed" }, { id: "d", text: "Time" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "ST graph", statement: "Area = distance." }], steps: [{ reasoning: "Standard result.", marks: 1, markCode: "A" }], finalAnswer: "Distance travelled" },
        },
        {
          id: "olm-u3-s3-sp-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A car travels at constant 15 m/s for 8 s. Find the distance.",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "speed × time." }], steps: [
            { reasoning: "$d=15\\times8=120$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 120 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "120 m" },
        },
        {
          id: "olm-u3-s3-sp-q3", difficulty: "core", totalMarks: 3,
          stem: "On a speed-time graph, a downward-sloping line means the object is…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Deceleration", statement: "Negative gradient." }], steps: [
            { reasoning: "Decelerating (slowing down).", marks: 1, markCode: "M" },
            { reasoning: "Speed decreasing → gradient negative → acceleration negative.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Decelerating" },
        },
        {
          id: "olm-u3-s3-sp-q4", difficulty: "core", totalMarks: 4,
          stem: "A cyclist accelerates from rest to 10 m/s in 5 s, cruises at 10 m/s for 10 s, then decelerates to 0 in 4 s. Find total distance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area under ST graph", statement: "Triangle + rectangle + triangle." }], steps: [
            { reasoning: "Accel: $\\frac12\\times5\\times10=25$ m; cruise: $10\\times10=100$ m; decel: $\\frac12\\times4\\times10=20$ m.", marks: 1, markCode: "M" },
            { reasoning: "Total: $25+100+20=145$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Total time $=19$ s; average speed $=\\frac{145}{19}\\approx7.6$ m/s.", marks: 1, markCode: "A" },
          ], finalAnswer: "145 m" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u3-s3-real-notes", title: "Real-life graphs — notes", summary: "Distance-time and speed-time interpretation.",
      sections: [
        { heading: "DT graph", body: "Gradient = speed; horizontal = rest; curve = changing speed; never below axis." },
        { heading: "ST graph", body: "Area = distance; gradient = acceleration; downward slope = deceleration." },
      ] },
  ],
};
