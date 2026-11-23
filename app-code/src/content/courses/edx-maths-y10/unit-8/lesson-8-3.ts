import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "edm10-u8-lesson-8-3",
  code: "8-3",
  title: "Distance-Time, Speed-Time and Conversion Graphs",
  goal: "I CAN interpret distance-time and speed-time graphs, and draw and use straight-line conversion graphs.",
  standards: ["4MA1 3.3", "4MA1 1.7"],
  
  vocabulary: [
    { term: "Distance-time graph", definition: "A graph of distance from a starting point against time; the gradient gives speed." },
    { term: "Speed-time graph", definition: "A graph of speed against time; the gradient gives acceleration and the area gives distance." },
    { term: "Average speed", definition: "Total distance travelled divided by total time taken." },
    { term: "Conversion graph", definition: "A straight-line graph used to convert between two units or currencies." },
    { term: "Scale", definition: "The correspondence between values on the two axes of a conversion graph." },
    { term: "Stationary", definition: "Not moving; shown by a horizontal section on a distance-time graph." },
  ],
  concepts: [
    {
      id: "edm10-u8-dt-st-graphs",
      title: "Distance-time and speed-time graphs",
      skill: "Interpret journeys from distance-time and speed-time graphs and calculate speeds, accelerations and distances.",
      lesson: {
        sections: [
          {
            heading: "Distance-time graphs",
            body: "Distance is plotted on the vertical axis and time on the horizontal axis. The gradient of each section gives the speed: $\\text{speed}=\\frac{\\text{distance}}{\\text{time}}$. A horizontal section means the object is stationary. A downward sloping section means it is returning towards the start. Average speed for the whole journey is total distance travelled divided by total time.",
          },
          {
            heading: "Speed-time graphs",
            body: "Speed is on the vertical axis and time on the horizontal axis. The gradient gives acceleration (or deceleration if negative). The area under the graph gives the distance travelled: for a trapezium or triangle, use $\\frac{1}{2}(\\text{sum of parallel sides})\\times\\text{height}$ or split into rectangles and triangles.",
          },
          {
            heading: "Describing a journey",
            body: "Read the graph section by section: initial speed, any stationary periods, changes of direction or speed, and the final position. Always link numbers back to the context.",
          },
        ],
        keyFormulas: [
          { name: "Speed from distance-time", statement: "$\\text{speed}=\\frac{\\Delta\\text{distance}}{\\Delta\\text{time}}$ (the gradient)" },
          { name: "Average speed", statement: "$\\frac{\\text{total distance}}{\\text{total time}}$" },
          { name: "Acceleration", statement: "gradient of a speed-time graph" },
          { name: "Distance from speed-time", statement: "area under the graph" },
        ],
        workedExample: {
          problem: "A car's distance-time graph goes through $(0,0)$, $(2,120)$, $(3,120)$ and $(5,0)$, with time in hours and distance in km. Find the speed on each section and the average speed.",
          solution: "Speeds: $\\frac{120}{2}=60$ km/h, then stationary, then $\\frac{120}{2}=60$ km/h back. Total distance $=240$ km in 5 h, so average speed $=\\frac{240}{5}=48$ km/h.",
        },
      },
      questions: [
        {
          id: "edm10-u8-dtst-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "On a distance-time graph, the gradient of a section represents...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the speed"
                    },
                    {
                              "id": "b",
                              "text": "the acceleration"
                    },
                    {
                              "id": "c",
                              "text": "the distance travelled"
                    },
                    {
                              "id": "d",
                              "text": "the time taken"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Speed",
                              "statement": "$\\text{speed}=\\frac{\\text{distance}}{\\text{time}}$, the gradient of a distance-time graph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gradient = rise/run = distance/time = speed.",
                              "working": "\\text{gradient}\\Rightarrow\\text{speed}",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** The speed",
          "commonErrors": [
                    "Confusing distance-time graphs with speed-time graphs."
          ]
},
        },
        {
          id: "edm10-u8-dtst-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "A straight-line section of a distance-time graph passes through $(0, 0)$ and $(4, 80)$, with distance in km and time in hours. Find the speed.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "speed (km/h)",
                              "answer": 20
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Speed",
                              "statement": "$\\text{speed}=\\frac{\\Delta d}{\\Delta t}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use the gradient.",
                              "working": "\\frac{80-0}{4-0}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate with units.",
                              "working": "20\\text{ km/h}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$20$ km/h",
          "commonErrors": [
                    "Inverting to $\\frac{4}{80}$."
          ]
},
        },
        {
          id: "edm10-u8-dtst-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "A car travels 90 km in 1.5 hours.",
          parts: [
          {
                    "label": "a",
                    "prompt": "On a speed-time graph, what does a horizontal section represent?",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "What does the area under a speed-time graph represent?",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Calculate the car's average speed.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Speed-time graph",
                              "statement": "Horizontal section = constant speed; area = distance."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Constant speed.",
                              "working": "\\text{constant speed}",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Distance travelled.",
                              "working": "\\text{distance}",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "$\\frac{90}{1.5}=60$.",
                              "working": "60\\text{ km/h}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) constant speed (b) distance travelled (c) $60$ km/h",
          "commonErrors": [
                    "Answering (b) with 'speed' or 'time'."
          ]
},
        },
        {
          id: "edm10-u8-dtst-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "A hiker's distance-time graph passes through $(0,0)$, $(1,30)$, $(2,30)$ and $(4,10)$, where distance is in km from the start and time is in hours.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the hiker's speed during the first hour.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Describe what happens between 1 and 2 hours.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Find the hiker's speed between 2 and 4 hours, stating the direction.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Calculate the total distance travelled.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Speed",
                              "statement": "Speed is the gradient of each section of a distance-time graph."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\frac{30-0}{1-0}=30$ km/h.",
                              "working": "30\\text{ km/h}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Distance unchanged at 30 km.",
                              "working": "\\text{stationary}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Distance falls from 30 to 10 in 2 h: $\\frac{20}{2}=10$ km/h towards the start.",
                              "working": "10\\text{ km/h back}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Outbound 30 km plus return 20 km.",
                              "working": "30+20",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Total distance travelled.",
                              "working": "50\\text{ km}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $30$ km/h (b) stationary for 1 hour (c) $10$ km/h towards the start (d) $50$ km",
          "commonErrors": [
                    "In (d) giving 20 km (the final distance from start) instead of total distance travelled."
          ]
},
        },
        {
          id: "edm10-u8-dtst-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "A car's speed-time graph passes through $(0,0)$, $(10,20)$, $(30,20)$ and $(40,0)$, with time in seconds and speed in m/s.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the acceleration during the first 10 seconds.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the distance travelled between 10 and 30 seconds.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the distance travelled during the last 10 seconds.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Acceleration",
                              "statement": "Gradient of speed-time graph $=\\frac{\\Delta v}{\\Delta t}$."
                    },
                    {
                              "kind": "formula",
                              "name": "Distance from speed-time",
                              "statement": "Area under the graph; for constant acceleration use average speed $\\times$ time."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Speed rises 0 to 20 m/s in 10 s.",
                              "working": "\\frac{20-0}{10-0}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Evaluate.",
                              "working": "2\\text{ m/s}^2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Constant speed 20 m/s for 20 s: area = $20\\times20$.",
                              "working": "20\\times20",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Distance.",
                              "working": "400\\text{ m}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Speed falls 20 to 0, average speed 10 m/s for 10 s.",
                              "working": "\\frac{20+0}{2}\\times10",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Distance.",
                              "working": "100\\text{ m}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $2$ m/s$^2$ (b) $400$ m (c) $100$ m",
          "commonErrors": [
                    "In (c) using 20 m/s instead of the average 10 m/s for the deceleration section."
          ]
},
        },
        {
          id: "edm10-u8-dtst-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A delivery van leaves a depot at 9:00 am. Its distance from the depot (in km) is recorded at 30-minute intervals: 9:00 → 0 km, 9:30 → 24 km, 10:00 → 24 km, 10:30 → 0 km (it returns to the depot).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the van's speed on the journey out.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe what the van does between 9:30 and 10:00.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Find the van's speed on the return journey.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Calculate the total distance travelled by the van.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Calculate the average speed for the whole journey.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Calculate the average speed while the van is moving.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Speed",
                              "statement": "$\\text{speed}=\\frac{\\text{distance}}{\\text{time}}$ for each section."
                    },
                    {
                              "kind": "formula",
                              "name": "Average speed",
                              "statement": "$\\frac{\\text{total distance}}{\\text{total time}}$; while moving, divide by moving time only."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "24 km in 0.5 h: $\\frac{24}{0.5}$.",
                              "working": "48\\text{ km/h}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the speed.",
                              "working": "48\\text{ km/h}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Distance stays at 24 km for 30 minutes.",
                              "working": "\\text{stationary }30\\text{ min}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Returns 24 km in 0.5 h.",
                              "working": "\\frac{24}{0.5}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the speed.",
                              "working": "48\\text{ km/h}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "$24+24=48$ km.",
                              "working": "48\\text{ km}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Total time 1.5 h: $\\frac{48}{1.5}$.",
                              "working": "32\\text{ km/h}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "State the average.",
                              "working": "32\\text{ km/h}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Moving time is 1 h: $\\frac{48}{1}=48$ km/h.",
                              "working": "48\\text{ km/h}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $48$ km/h (b) stationary for 30 minutes (c) $48$ km/h (d) $48$ km (e) $32$ km/h (f) $48$ km/h",
          "commonErrors": [
                    "In (e) dividing by moving time (1 h) instead of total time (1.5 h)."
          ]
},
        },
      ],
    },
    {
      id: "edm10-u8-conversion",
      title: "Conversion graphs",
      skill: "Draw and use straight-line conversion graphs for units and currencies.",
      lesson: {
        sections: [
          {
            heading: "Reading a conversion graph",
            body: "A conversion graph has one quantity on each axis, e.g. pounds on the $x$-axis and euros on the $y$-axis. Because the relationship is linear, the graph is a straight line. To convert, find the value on one axis and read across to the other axis.",
          },
          {
            heading: "Finding the scale",
            body: "Two known corresponding values fix the line. For example if £10 buys €12 and £20 buys €24, the line passes through $(10,12)$ and $(20,24)$; the gradient gives the conversion rate $\\frac{12}{10}=1.2$ euros per pound.",
          },
          {
            heading: "Using the graph",
            body: "For conversions in either direction, read off the graph or use the rate algebraically: multiply by the gradient to go one way, divide to go the other. For temperature, $^{\\circ}\\text{F}=1.8\\times^{\\circ}\\text{C}+32$.",
          },
        ],
        keyFormulas: [
          { name: "Conversion rate", statement: "$\\text{gradient}=\\frac{\\text{new units}}{\\text{old units}}$" },
          { name: "Forward conversion", statement: "multiply by the rate" },
          { name: "Reverse conversion", statement: "divide by the rate" },
          { name: "Temperature", statement: "$^{\\circ}\\text{F}=1.8\\,^{\\circ}\\text{C}+32$" },
        ],
        workedExample: {
          problem: "A conversion graph converts pounds to euros. It passes through $(0,0)$ and $(£50, €60)$. Convert £80 to euros and €150 to pounds.",
          solution: "Rate $=\\frac{60}{50}=1.2$ euros per pound. £80 $\\to 80\\times1.2=€96$. €150 $\\to \\frac{150}{1.2}=£125$.",
        },
      },
      questions: [
        {
          id: "edm10-u8-conv-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "A conversion graph between two units is usually drawn as...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a straight line"
                    },
                    {
                              "id": "b",
                              "text": "a curve"
                    },
                    {
                              "id": "c",
                              "text": "a series of bars"
                    },
                    {
                              "id": "d",
                              "text": "a scatter of points"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Conversion graph",
                              "statement": "The relationship between two units is linear, so the graph is a straight line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Linear relationship gives a straight-line graph.",
                              "working": "\\text{straight line}",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** A straight line",
          "commonErrors": [
                    "Thinking conversion graphs are curved like $y=\\frac{1}{x}$."
          ]
},
        },
        {
          id: "edm10-u8-conv-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "The exchange rate is €1.25 per £1. Convert £80 into euros.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "euros",
                              "answer": 100
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Conversion",
                              "statement": "Multiply pounds by the euro rate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Set up the multiplication.",
                              "working": "80\\times1.25",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "100",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$€100$",
          "commonErrors": [
                    "Dividing by 1.25 instead of multiplying."
          ]
},
        },
        {
          id: "edm10-u8-conv-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "A temperature conversion graph relates Celsius ($x$) to Fahrenheit ($y$), passing through $(0,32)$ and $(100,212)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Convert $20^{\\circ}$C to Fahrenheit.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Convert $50^{\\circ}$F to Celsius.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Temperature conversion",
                              "statement": "$^{\\circ}\\text{F}=1.8\\,^{\\circ}\\text{C}+32$; the graph confirms gradient $\\frac{212-32}{100}=1.8$ and intercept 32."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$1.8\\times20+32=36+32=68$.",
                              "working": "68^{\\circ}\\text{F}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Rearrange: $^{\\circ}\\text{C}=\\frac{^{\\circ}\\text{F}-32}{1.8}$.",
                              "working": "\\frac{50-32}{1.8}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evaluate.",
                              "working": "10^{\\circ}\\text{C}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $68^{\\circ}$F (b) $10^{\\circ}$C",
          "commonErrors": [
                    "In (b) forgetting to subtract 32 before dividing."
          ]
},
        },
        {
          id: "edm10-u8-conv-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "A conversion graph converts mass in kilograms ($x$) to pounds ($y$). It passes through $(0,0)$ and $(10,22)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the conversion rate in pounds per kilogram.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Convert 5 kg to pounds.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Convert 33 lb to kilograms.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State what the gradient of the graph represents.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Conversion rate",
                              "statement": "Rate $=\\frac{22}{10}=2.2$ lb per kg."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\frac{22}{10}=2.2$.",
                              "working": "2.2\\text{ lb/kg}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$5\\times2.2=11$.",
                              "working": "11\\text{ lb}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Divide by the rate: $\\frac{33}{2.2}$.",
                              "working": "\\frac{33}{2.2}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluate.",
                              "working": "15\\text{ kg}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Pounds per kilogram (the conversion factor).",
                              "working": "\\text{lb per kg}",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $2.2$ lb/kg (b) $11$ lb (c) $15$ kg (d) pounds per kilogram",
          "commonErrors": [
                    "In (c) multiplying by 2.2 instead of dividing."
          ]
},
        },
        {
          id: "edm10-u8-conv-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "A conversion graph for temperature passes through $(-40,-40)$, $(0,32)$ and $(40,104)$, with Celsius on the $x$-axis and Fahrenheit on the $y$-axis.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Convert $25^{\\circ}$C to Fahrenheit.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Convert $50^{\\circ}$F to Celsius.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Verify that $-40^{\\circ}$C and $-40^{\\circ}$F are the same temperature.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Convert $-10^{\\circ}$C to Fahrenheit.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Temperature conversion",
                              "statement": "$^{\\circ}\\text{F}=1.8\\,^{\\circ}\\text{C}+32$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$1.8\\times25+32=45+32=77$.",
                              "working": "77^{\\circ}\\text{F}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$^{\\circ}\\text{C}=\\frac{50-32}{1.8}=\\frac{18}{1.8}$.",
                              "working": "\\frac{18}{1.8}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evaluate.",
                              "working": "10^{\\circ}\\text{C}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "The point $(-40,-40)$ lies on the line, so both readings are equal.",
                              "working": "(-40,-40)\\text{ on graph}",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "$1.8\\times(-10)+32=-18+32$.",
                              "working": "-18+32",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Evaluate.",
                              "working": "14^{\\circ}\\text{F}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $77^{\\circ}$F (b) $10^{\\circ}$C (c) verified by the point $(-40,-40)$ (d) $14^{\\circ}$F",
          "commonErrors": [
                    "In (d) computing $-18-32=-50$ instead of $-18+32=14$."
          ]
},
        },
        {
          id: "edm10-u8-conv-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A straight-line conversion graph converts pounds sterling to US dollars. It passes through $(0,0)$ and $(£100, \\$130)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Convert £250 into dollars.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Convert \\$520 into pounds.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "A purchase costs \\$585 including a \\$65 fee. Find the cost in pounds excluding the fee.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Express the exchange rate as a ratio of pounds to dollars in simplest form.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "State the gradient of the conversion graph and explain what it represents.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Conversion rate",
                              "statement": "Rate $=\\frac{130}{100}=1.3$ dollars per pound; reverse by dividing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Multiply by 1.3: $250\\times1.3$.",
                              "working": "\\$325",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the amount.",
                              "working": "\\$325",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Divide by 1.3: $\\frac{520}{1.3}$.",
                              "working": "\\frac{520}{1.3}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evaluate.",
                              "working": "£400",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Remove the fee: $585-65=520$.",
                              "working": "\\$520",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Convert: $\\frac{520}{1.3}=£400$.",
                              "working": "£400",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "$£100:$130=10:13$.",
                              "working": "10:13",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Gradient $=\\frac{130}{100}=1.3$.",
                              "working": "1.3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "It is the number of dollars per pound.",
                              "working": "\\$\\text{ per }£1",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) \\$325 (b) £400 (c) £400 (d) \\$10:13 (e) gradient 1.3 = dollars per pound",
          "commonErrors": [
                    "In (c) converting the full $585 instead of removing the fee first."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u8-realgraphs-notes",
      title: "Real-life graphs — notes",
      summary: "Distance-time gradient gives speed; speed-time gradient gives acceleration and area gives distance; conversion graphs convert between units.",
      sections: [
        { heading: "Key idea", body: "Distance-time: gradient = speed, horizontal = stationary. Speed-time: gradient = acceleration, area = distance." },
        { heading: "Averages", body: "Average speed = total distance ÷ total time (including stationary time). While moving = total distance ÷ moving time." },
        { heading: "Conversion graphs", body: "Straight line through the origin region; gradient = new units per old unit; divide to reverse." },
      ],
    },
  ],
};
