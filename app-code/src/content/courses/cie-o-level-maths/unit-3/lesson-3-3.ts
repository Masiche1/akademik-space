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
            { id: "a", text: "Stationary" },
            { id: "b", text: "Negative speed" },
            { id: "c", text: "Accelerating" },
            { id: "d", text: "Maximum speed" },
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
        {
          id: "olm-u3-s3-di-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A straight line sloping upwards on a distance-time graph represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Slowing down" },
            { id: "b", text: "A stop" },
            { id: "c", text: "Constant speed" },
            { id: "d", text: "Speeding up" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "DT graph", statement: "Straight line = constant speed." }], steps: [{ reasoning: "Constant gradient → constant speed.", marks: 1, markCode: "A" }], finalAnswer: "Constant speed" },
        },
        {
          id: "olm-u3-s3-di-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A walker covers 4.5 km in 1.5 hours. Find the average speed.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "formula", name: "Average speed", statement: "d/t." }], steps: [
            { reasoning: "$s=\\frac{4.5}{1.5}=3$ km/h.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3 km/h.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 km/h" },
        },
        {
          id: "olm-u3-s3-di-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A cyclist rides 20 km in 40 minutes. Find the speed in km/h.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: { principles: [{ kind: "formula", name: "Speed", statement: "Convert minutes to hours." }], steps: [
            { reasoning: "$40\\text{ min}=\\frac{2}{3}$ h; $s=\\frac{20}{2/3}=30$ km/h.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 30 km/h.", marks: 1, markCode: "A" },
          ], finalAnswer: "30 km/h" },
        },
        {
          id: "olm-u3-s3-di-q8", difficulty: "core", totalMarks: 1,
          stem: "On a distance-time graph, which gradient gives the greatest speed?",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "5" },
            { id: "c", text: "0" },
            { id: "d", text: "1" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Gradient = speed", statement: "Larger gradient → faster." }], steps: [{ reasoning: "Greatest gradient is 5.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "olm-u3-s3-di-q9", difficulty: "core", totalMarks: 3,
          stem: "Explain what a curved (non-straight) section of a distance-time graph indicates about the traveller's speed.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Curved section", statement: "Changing gradient." }], steps: [
            { reasoning: "A curve means the speed is changing — not constant.", marks: 1, markCode: "M" },
            { reasoning: "Where the curve steepens the traveller is speeding up; where it flattens they are slowing down.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Speed is changing" },
        },
        {
          id: "olm-u3-s3-di-q10", difficulty: "core", totalMarks: 3,
          stem: "A train journey has three parts: 120 km at 60 km/h, a 30-minute stop, then 90 km at 45 km/h. Find the total journey time in hours.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4.5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Time", statement: "d/s plus stop time." }], steps: [
            { reasoning: "$t_1=\\frac{120}{60}=2$ h; $t_2=\\frac{90}{45}=2$ h; stop $=0.5$ h.", marks: 1, markCode: "M" },
            { reasoning: "Total $=2+0.5+2=4.5$ h.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.5 h.", marks: 1, markCode: "A" },
          ], finalAnswer: "4.5 h" },
        },
        {
          id: "olm-u3-s3-di-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A distance-time graph never goes below the time axis because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speed is always positive" },
            { id: "b", text: "Distance travelled cannot be negative" },
            { id: "c", text: "Time cannot be negative" },
            { id: "d", text: "The graph must start at the origin" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "DT graph", statement: "Distance is a magnitude." }], steps: [{ reasoning: "Distance travelled is never negative.", marks: 1, markCode: "A" }], finalAnswer: "Distance cannot be negative" },
        },
        {
          id: "olm-u3-s3-di-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A hiker walks 8 km in 2 hours, rests for 1 hour, then walks 6 km in 1.5 hours. Find the total distance, the total time and the average speed for the whole journey.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Journey analysis", statement: "Total distance over total time." }], steps: [
            { reasoning: "Total distance $=8+6=14$ km.", marks: 1, markCode: "M" },
            { reasoning: "Total time $=2+1+1.5=4.5$ h.", marks: 1, markCode: "M" },
            { reasoning: "Average speed $=\\frac{14}{4.5}\\approx3.11$ km/h.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 14 km, 4.5 h, ≈3.11 km/h.", marks: 1, markCode: "A" },
          ], finalAnswer: "14 km, 4.5 h, ≈3.11 km/h" },
        },
        {
          id: "olm-u3-s3-di-q13", difficulty: "foundation", totalMarks: 2,
          stem: "A bus travels 45 km in 1.5 hours and then 15 km in 0.5 hours. Find its average speed for the whole journey.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: { principles: [{ kind: "formula", name: "Average speed", statement: "Total d ÷ total t." }], steps: [
            { reasoning: "Total distance $=60$ km; total time $=2$ h; $s=\\frac{60}{2}=30$ km/h.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 30 km/h.", marks: 1, markCode: "A" },
          ], finalAnswer: "30 km/h" },
        },
        {
          id: "olm-u3-s3-di-q14", difficulty: "core", totalMarks: 1,
          stem: "A horizontal section lasting 20 minutes on a distance-time graph indicates that the traveller…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Travelled at constant speed for 20 minutes" },
            { id: "b", text: "Was stationary for 20 minutes" },
            { id: "c", text: "Was accelerating for 20 minutes" },
            { id: "d", text: "Was reversing direction" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "DT graph", statement: "Zero gradient = rest." }], steps: [{ reasoning: "No change in distance → stationary.", marks: 1, markCode: "A" }], finalAnswer: "Stationary for 20 minutes" },
        },
        {
          id: "olm-u3-s3-di-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Cyclist P covers 36 km in 1.5 hours and cyclist Q covers 40 km in 2 hours. Find each cyclist's average speed and state which cyclist is faster.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Compare speeds", statement: "Compute each average then compare." }], steps: [
            { reasoning: "P: $s=\\frac{36}{1.5}=24$ km/h.", marks: 1, markCode: "M" },
            { reasoning: "Q: $s=\\frac{40}{2}=20$ km/h.", marks: 1, markCode: "M" },
            { reasoning: "$24>20$, so P is faster.", marks: 1, markCode: "M" },
            { reasoning: "Answer: P 24 km/h, Q 20 km/h; P faster.", marks: 1, markCode: "A" },
          ], finalAnswer: "P: 24 km/h, Q: 20 km/h; P faster" },
        },
        {
          id: "olm-u3-s3-di-q16", difficulty: "core", totalMarks: 3,
          stem: "A car travels 150 km. The first 100 km at an average speed of 50 km/h and the remaining 50 km at 25 km/h. Find the total time for the journey in hours.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "formula", name: "Time", statement: "t = d/s for each part." }], steps: [
            { reasoning: "$t_1=\\frac{100}{50}=2$ h.", marks: 1, markCode: "M" },
            { reasoning: "$t_2=\\frac{50}{25}=2$ h.", marks: 1, markCode: "M" },
            { reasoning: "Total $=4$ h.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 h" },
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
            { id: "a", text: "Distance travelled" },
            { id: "b", text: "Time" },
            { id: "c", text: "Speed" },
            { id: "d", text: "Acceleration" },
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
        {
          id: "olm-u3-s3-sp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "On a speed-time graph, a horizontal line represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Constant speed" },
            { id: "b", text: "Distance travelled" },
            { id: "c", text: "Acceleration" },
            { id: "d", text: "Deceleration" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "ST graph", statement: "Horizontal = constant speed." }], steps: [{ reasoning: "No change in speed.", marks: 1, markCode: "A" }], finalAnswer: "Constant speed" },
        },
        {
          id: "olm-u3-s3-sp-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A car travels at a constant 20 m/s for 6 seconds. Find the distance travelled.",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "Area of rectangle." }], steps: [
            { reasoning: "$d=20\\times6=120$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 120 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "120 m" },
        },
        {
          id: "olm-u3-s3-sp-q7", difficulty: "foundation", totalMarks: 2,
          stem: "An object moves at a constant 15 m/s. How long does it take to travel 225 m?",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: { principles: [{ kind: "formula", name: "Time", statement: "t = d/s." }], steps: [
            { reasoning: "$t=\\frac{225}{15}=15$ s.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 15 s.", marks: 1, markCode: "A" },
          ], finalAnswer: "15 s" },
        },
        {
          id: "olm-u3-s3-sp-q8", difficulty: "core", totalMarks: 1,
          stem: "The gradient of a speed-time graph gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Acceleration" },
            { id: "b", text: "Time" },
            { id: "c", text: "Distance" },
            { id: "d", text: "Speed" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "ST graph", statement: "Gradient = acceleration." }], steps: [{ reasoning: "Standard result.", marks: 1, markCode: "A" }], finalAnswer: "Acceleration" },
        },
        {
          id: "olm-u3-s3-sp-q9", difficulty: "core", totalMarks: 3,
          stem: "Explain how the total distance travelled is found from a speed-time graph consisting of a triangle followed by a rectangle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area under ST graph", statement: "Sum of areas." }], steps: [
            { reasoning: "The area under a speed-time graph gives the distance travelled.", marks: 1, markCode: "M" },
            { reasoning: "Triangle area $=\\frac12\\times\\text{base}\\times\\text{height}$; rectangle area $=\\text{length}\\times\\text{width}$; add them.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sum of triangle and rectangle areas" },
        },
        {
          id: "olm-u3-s3-sp-q10", difficulty: "core", totalMarks: 3,
          stem: "A car accelerates uniformly from rest to 15 m/s in 3 s, then travels at 15 m/s for 5 s. Find the total distance travelled.",
          response: { type: "numeric", parts: [{ label: "a", answer: 97.5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Area under ST graph", statement: "Triangle + rectangle." }], steps: [
            { reasoning: "Acceleration phase: $\\frac12\\times3\\times15=22.5$ m; cruising: $15\\times5=75$ m.", marks: 1, markCode: "M" },
            { reasoning: "Total $=22.5+75=97.5$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 97.5 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "97.5 m" },
        },
        {
          id: "olm-u3-s3-sp-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A speed-time graph touches the time axis. This shows that the object…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Accelerates maximally" },
            { id: "b", text: "Reverses direction" },
            { id: "c", text: "Momentarily stops (speed = 0)" },
            { id: "d", text: "Returns to its start" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "ST graph", statement: "Axis = zero speed." }], steps: [{ reasoning: "Speed zero at that instant.", marks: 1, markCode: "A" }], finalAnswer: "Speed = 0" },
        },
        {
          id: "olm-u3-s3-sp-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A train accelerates uniformly from rest to 20 m/s in 10 s, maintains 20 m/s for 30 s, then decelerates uniformly to rest in 10 s. Find the total distance travelled.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area under ST graph", statement: "Two triangles + rectangle." }], steps: [
            { reasoning: "Acceleration: $\\frac12\\times10\\times20=100$ m.", marks: 1, markCode: "M" },
            { reasoning: "Cruising: $20\\times30=600$ m.", marks: 1, markCode: "M" },
            { reasoning: "Deceleration: $\\frac12\\times10\\times20=100$ m.", marks: 1, markCode: "M" },
            { reasoning: "Total $=100+600+100=800$ m.", marks: 1, markCode: "A" },
          ], finalAnswer: "800 m" },
        },
        {
          id: "olm-u3-s3-sp-q13", difficulty: "foundation", totalMarks: 2,
          stem: "A runner maintains a speed of 8 m/s for 12 s. Find the distance covered.",
          response: { type: "numeric", parts: [{ label: "a", answer: 96 }] },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "speed × time." }], steps: [
            { reasoning: "$d=8\\times12=96$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 96 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "96 m" },
        },
        {
          id: "olm-u3-s3-sp-q14", difficulty: "core", totalMarks: 1,
          stem: "Two speed-time graphs have identical shapes, but one is twice as tall as the other. The taller graph represents a journey with…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Twice the time" },
            { id: "b", text: "The same distance" },
            { id: "c", text: "Twice the distance" },
            { id: "d", text: "Half the distance" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "ST graph", statement: "Area = distance." }], steps: [{ reasoning: "Double height → double area → double distance.", marks: 1, markCode: "A" }], finalAnswer: "Twice the distance" },
        },
        {
          id: "olm-u3-s3-sp-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A car travels at 25 m/s for 20 s and then brakes uniformly to a stop in 10 s. Find the total distance travelled and the deceleration.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area + gradient", statement: "Distance from areas; decel from gradient." }], steps: [
            { reasoning: "Cruising distance $=25\\times20=500$ m; braking distance $=\\frac12\\times10\\times25=125$ m.", marks: 1, markCode: "M" },
            { reasoning: "Total distance $=500+125=625$ m.", marks: 1, markCode: "M" },
            { reasoning: "Deceleration $=\\frac{25}{10}=2.5$ m/s².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 625 m and 2.5 m/s².", marks: 1, markCode: "A" },
          ], finalAnswer: "625 m, 2.5 m/s²" },
        },
        {
          id: "olm-u3-s3-sp-q16", difficulty: "core", totalMarks: 3,
          stem: "A cyclist accelerates uniformly from rest to 12 m/s in 4 s and then travels at a constant 12 m/s for 20 s. Find the total distance.",
          response: { type: "numeric", parts: [{ label: "a", answer: 264 }] },
          markscheme: { principles: [{ kind: "technique", name: "Area under ST graph", statement: "Triangle + rectangle." }], steps: [
            { reasoning: "Acceleration: $\\frac12\\times4\\times12=24$ m; cruising: $12\\times20=240$ m.", marks: 1, markCode: "M" },
            { reasoning: "Total $=24+240=264$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 264 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "264 m" },
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
