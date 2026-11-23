import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "phys11-u1-lesson-1-1",
  code: "1-1",
  title: "Kinematics",
  goal: "I CAN describe motion using displacement, velocity and acceleration, interpret motion graphs, and solve constant-acceleration problems including free fall and horizontal projectiles.",
  standards: [
    "HS-PS2-1",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Analyzing and Interpreting Data",
    "CCC: Patterns",
  ],
  vocabulary: [
    {
      term: "Displacement",
      definition:
        "A vector giving the change in position of an object: its straight-line distance and direction from the start to the end.",
    },
    {
      term: "Velocity",
      definition:
        "A vector equal to displacement divided by the time taken; its sign gives direction in one dimension.",
    },
    {
      term: "Acceleration",
      definition:
        "The rate of change of velocity, $a = \\frac{\\Delta v}{\\Delta t}$, measured in $\\text{m/s}^2$.",
    },
    {
      term: "Free fall",
      definition:
        "Motion under the influence of gravity alone, with a downward acceleration of $g = 9.8\\ \\text{m/s}^2$ near Earth's surface.",
    },
    {
      term: "Projectile",
      definition:
        "An object moving through the air under gravity alone; its horizontal and vertical motions are independent.",
    },
    {
      term: "Slope of a graph",
      definition:
        "The rise divided by the run; on a position-time graph it is velocity and on a velocity-time graph it is acceleration.",
    },
  ],
  concepts: [
    {
      id: "phys11-u1-motion-graphs",
      title: "Displacement, velocity, acceleration and motion graphs",
      skill:
        "Distinguish distance from displacement and speed from velocity, calculate average velocity and acceleration, and read slope and area on motion graphs.",
      lesson: {
        sections: [
          {
            heading: "Scalars and vectors of motion",
            body: "**Distance** and **speed** are scalars: they have size only. **Displacement** and **velocity** are vectors: they have size and direction. In one dimension, direction is shown by a sign (for example, right is $+$ and left is $-$).\n\nAverage velocity is $v = \\frac{\\Delta x}{\\Delta t}$, where $\\Delta x = x_f - x_i$. Average speed is total distance divided by total time. If an object returns to its start, its displacement and average velocity are zero even though it traveled a long way.\n\nAcceleration is $a = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_i}{\\Delta t}$. A negative acceleration means the acceleration points in the negative direction; the object speeds up or slows down depending on the sign of its velocity.",
          },
          {
            heading: "Reading graphs",
            body: "On a **position-time graph**, the slope is velocity. A straight sloped line means constant velocity, a horizontal line means at rest, and a negative slope means moving in the negative direction.\n\nOn a **velocity-time graph**, the slope is acceleration and the **area between the line and the time axis** is displacement. Area above the axis counts as positive displacement and area below counts as negative. Split complicated shapes into rectangles and triangles.",
          },
        ],
        keyFormulas: [
          {
            name: "Average velocity",
            statement: "$v = \\frac{\\Delta x}{\\Delta t}$",
          },
          {
            name: "Acceleration",
            statement: "$a = \\frac{v_f - v_i}{\\Delta t}$",
          },
          {
            name: "Graph meanings",
            statement:
              "slope of $x$-$t$ = velocity; slope of $v$-$t$ = acceleration; area under $v$-$t$ = displacement",
          },
        ],
        workedExample: {
          problem:
            "A cart moves along a track. Its velocity increases uniformly from $0$ to $6.0\\ \\text{m/s}$ in $3.0\\ \\text{s}$. Find its acceleration and its displacement in this time.",
          solution:
            "Acceleration: $a = \\frac{6.0 - 0}{3.0} = 2.0\\ \\text{m/s}^2$. The velocity-time graph is a straight line from the origin, so the area is a triangle: $\\Delta x = \\frac{1}{2}(3.0)(6.0) = 9.0\\ \\text{m}$.",
        },
      },
      questions: [
        {
          id: "phys11-u1-motion-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A runner completes exactly one lap of a $400\\ \\text{m}$ track, finishing at the starting line. What is the runner's displacement for the lap?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0\\ \\text{m}$" },
              { id: "b", text: "$400\\ \\text{m}$" },
              { id: "c", text: "$200\\ \\text{m}$" },
              { id: "d", text: "$800\\ \\text{m}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Displacement",
                statement:
                  "Displacement is the change in position, $\\Delta x = x_f - x_i$, a vector.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The runner ends where she started, so the final and initial positions are equal and the change in position is zero.",
                working: "\\Delta x = x_f - x_i = 0",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $0\\ \\text{m}$",
            commonErrors: [
              "Confusing displacement with distance traveled, which is $400\\ \\text{m}$.",
              "Choosing $200\\ \\text{m}$ by using the diameter or half the lap.",
            ],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "phys11-u1-motion-graphs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car traveling in a straight line speeds up from $8.0\\ \\text{m/s}$ to $20.0\\ \\text{m/s}$ in $6.0\\ \\text{s}$. Calculate the car's average acceleration.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Acceleration",
                answer: 2.0,
                unit: "m/s²",
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Acceleration",
                statement: "$a = \\frac{v_f - v_i}{\\Delta t}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitute the change in velocity and the time interval.",
                working:
                  "a = \\frac{v_f - v_i}{\\Delta t} = \\frac{20.0 - 8.0}{6.0}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate with units.",
                working: "a = 2.0\\text{ m/s}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.0\\ \\text{m/s}^2$",
            commonErrors: [
              "Dividing the final velocity by the time: $20.0 \\div 6.0$.",
              "Forgetting to subtract the initial velocity.",
            ],
            examinerNote:
              "M1 for correct substitution. A1 for $2.0\\ \\text{m/s}^2$ with units.",
          },
        },
        {
          id: "phys11-u1-motion-graphs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A train moves along a straight track. Its velocity-time graph has three sections:\n\n- From $t = 0$ to $4.0\\ \\text{s}$, the velocity rises uniformly from $0$ to $12\\ \\text{m/s}$.\n- From $t = 4.0\\ \\text{s}$ to $10.0\\ \\text{s}$, the velocity is constant at $12\\ \\text{m/s}$.\n- From $t = 10.0\\ \\text{s}$ to $12.0\\ \\text{s}$, the velocity falls uniformly from $12\\ \\text{m/s}$ to $0$.\n\nCalculate the total displacement of the train.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Total displacement",
                answer: 108,
                unit: "m",
                tolerance: 0.5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Area under a velocity-time graph",
                statement:
                  "The area between the graph and the time axis equals the displacement.",
              },
              {
                kind: "formula",
                name: "Areas",
                statement: "Triangle $= \\frac{1}{2}bh$; rectangle $= bh$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Displacement is the area under the graph, so split it into two triangles and a rectangle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The speeding-up triangle has base $4.0\\ \\text{s}$ and height $12\\ \\text{m/s}$.",
                working: "\\tfrac{1}{2}(4.0)(12) = 24\\text{ m}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The constant-velocity rectangle lasts $10.0 - 4.0 = 6.0\\ \\text{s}$.",
                working: "(6.0)(12) = 72\\text{ m}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The slowing triangle lasts $2.0\\ \\text{s}$; add all three areas.",
                working:
                  "\\tfrac{1}{2}(2.0)(12) = 12\\text{ m};\\quad 24 + 72 + 12 = 108\\text{ m}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$108\\ \\text{m}$",
            commonErrors: [
              "Using the rectangle width as $10\\ \\text{s}$ instead of $6.0\\ \\text{s}$.",
              "Using $\\frac{1}{2}at^2$ for the whole motion even though acceleration changes.",
            ],
            examinerNote:
              "M1 for using area. A1 each for the three correct areas (allow the last A1 for the correct sum). Allow ecf.",
          },
        },
        {
          id: "phys11-u1-motion-graphs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cyclist rides along a straight road. Her position-time graph has three straight sections: from $t = 0$ to $10\\ \\text{s}$ the position rises from $0$ to $+30\\ \\text{m}$; from $10\\ \\text{s}$ to $20\\ \\text{s}$ the position stays at $+30\\ \\text{m}$; from $20\\ \\text{s}$ to $30\\ \\text{s}$ the position falls back to $0$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate her velocity from $t = 0$ to $10\\ \\text{s}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "State her velocity from $t = 10\\ \\text{s}$ to $20\\ \\text{s}$.",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "Calculate her velocity from $t = 20\\ \\text{s}$ to $30\\ \\text{s}$, including its sign.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate her average speed and her average velocity for the whole $30\\ \\text{s}$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) velocity, 0 to 10 s",
                answer: 3.0,
                unit: "m/s",
                tolerance: 0.01,
              },
              {
                label: "(b) velocity, 10 to 20 s",
                answer: 0,
                unit: "m/s",
                tolerance: 0.01,
              },
              {
                label: "(c) velocity, 20 to 30 s",
                answer: -3.0,
                unit: "m/s",
                tolerance: 0.01,
              },
              {
                label: "(d) average speed",
                answer: 2.0,
                unit: "m/s",
                tolerance: 0.01,
              },
              {
                label: "(d) average velocity",
                answer: 0,
                unit: "m/s",
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Slope of a position-time graph",
                statement:
                  "The slope of a position-time graph is the velocity.",
              },
              {
                kind: "definition",
                name: "Speed and velocity",
                statement:
                  "Average speed $=$ total distance $\\div$ time; average velocity $=$ displacement $\\div$ time.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Velocity is the slope of the graph.",
                working:
                  "v = \\frac{\\Delta x}{\\Delta t} = \\frac{30 - 0}{10 - 0}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "v = +3.0\\text{ m/s}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The graph is horizontal, so the position does not change: she is at rest.",
                working: "v = 0\\text{ m/s}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "The position decreases by $30\\ \\text{m}$ in $10\\ \\text{s}$.",
                working: "v = \\frac{0 - 30}{30 - 20}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The negative sign shows she travels back toward the start.",
                working: "v = -3.0\\text{ m/s}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The total distance is $30\\ \\text{m}$ out plus $30\\ \\text{m}$ back, so the average speed is distance over time.",
                working: "\\text{speed} = \\frac{60}{30} = 2.0\\text{ m/s}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "State the average speed value (accuracy mark for the correct distance and result).",
                working: "2.0\\text{ m/s}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "She ends where she started, so the displacement is zero and so is the average velocity.",
                working: "v_{\\text{avg}} = \\frac{0}{30} = 0\\text{ m/s}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $+3.0\\ \\text{m/s}$ (b) $0\\ \\text{m/s}$ (c) $-3.0\\ \\text{m/s}$ (d) average speed $2.0\\ \\text{m/s}$; average velocity $0\\ \\text{m/s}$",
            commonErrors: [
              "Giving $+3.0\\ \\text{m/s}$ in (c) and ignoring direction.",
              "In (d), using displacement $30\\ \\text{m}$ or dividing $30\\ \\text{m}$ by $30\\ \\text{s}$ to get $1.0\\ \\text{m/s}$ for speed.",
            ],
            examinerNote:
              "(c) Reject $3.0\\ \\text{m/s}$ without a negative sign or a direction statement. (d) Allow the first mark for $60\\ \\text{m}$ seen. Allow ecf.",
          },
        },
      ],
    },
    {
      id: "phys11-u1-kinematic-equations",
      title: "Constant acceleration, free fall and horizontal projectiles",
      skill:
        "Choose and apply the constant-acceleration equations, including free fall and projectiles launched horizontally.",
      lesson: {
        sections: [
          {
            heading: "The three equations",
            body: "When acceleration is constant along a line, three equations link the quantities $v_i$, $v_f$, $a$, $\\Delta x$ and $t$:\n\n- $v_f = v_i + at$ (no $\\Delta x$)\n- $\\Delta x = v_i t + \\frac{1}{2}at^2$ (no $v_f$)\n- $v_f^2 = v_i^2 + 2a\\Delta x$ (no $t$)\n\nList the known values, identify the unknown, and choose the equation that has no unnecessary unknown. Choose a positive direction first and keep signs consistent.",
          },
          {
            heading: "Free fall and projectiles",
            body: "In free fall, ignoring air resistance, $a = g = 9.8\\ \\text{m/s}^2$ downward. Taking down as positive for a falling object keeps the numbers positive.\n\nA projectile launched **horizontally** has two independent motions. Horizontally, $a_x = 0$, so $\\Delta x = v_x t$ with constant $v_x$. Vertically, it starts with $v_{iy} = 0$ and accelerates at $g$, so $\\Delta y = \\frac{1}{2}gt^2$ and $v_{y} = gt$. Time is the link: it is the same for both motions. The final speed is found by combining the components, $v = \\sqrt{v_x^2 + v_y^2}$.",
          },
        ],
        keyFormulas: [
          { name: "Velocity-time", statement: "$v_f = v_i + at$" },
          {
            name: "Displacement-time",
            statement: "$\\Delta x = v_i t + \\frac{1}{2}at^2$",
          },
          {
            name: "Velocity-displacement",
            statement: "$v_f^2 = v_i^2 + 2a\\Delta x$",
          },
          {
            name: "Horizontal projectile",
            statement:
              "$\\Delta x = v_x t$ and $\\Delta y = \\frac{1}{2}gt^2$, $g = 9.8\\ \\text{m/s}^2$",
          },
        ],
        workedExample: {
          problem:
            "A ball is dropped from rest from a height of $45\\ \\text{m}$. How long does it take to reach the ground? Use $g = 9.8\\ \\text{m/s}^2$ and give your answer to 2 significant figures.",
          solution:
            "Take down as positive: $v_i = 0$, $a = 9.8\\ \\text{m/s}^2$, $\\Delta y = 45\\ \\text{m}$. Use $\\Delta y = \\frac{1}{2}gt^2$, so $t = \\sqrt{\\frac{2\\Delta y}{g}} = \\sqrt{\\frac{90}{9.8}} = \\sqrt{9.18} = 3.0\\ \\text{s}$.",
        },
      },
      questions: [
        {
          id: "phys11-u1-kinematic-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car skids to a stop. You know its initial velocity, its constant acceleration and the distance it skids, but not the time. Which equation lets you find the final velocity directly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$v_f^2 = v_i^2 + 2a\\Delta x$" },
              { id: "b", text: "$v = \\frac{\\Delta x}{\\Delta t}$" },
              { id: "c", text: "$v_f = v_i + at$" },
              { id: "d", text: "$\\Delta x = v_i t + \\frac{1}{2}at^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Velocity-displacement equation",
                statement:
                  "$v_f^2 = v_i^2 + 2a\\Delta x$ contains no time term.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only $v_f^2 = v_i^2 + 2a\\Delta x$ links the known $v_i$, $a$ and $\\Delta x$ to $v_f$ without needing $t$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $v_f^2 = v_i^2 + 2a\\Delta x$",
            commonErrors: [
              "Choosing an equation that needs the unknown time.",
              "Using $v = \\frac{\\Delta x}{\\Delta t}$, which only gives an average velocity and needs $\\Delta t$.",
            ],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "phys11-u1-kinematic-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car starts from rest and accelerates uniformly at $3.0\\ \\text{m/s}^2$ for $5.0\\ \\text{s}$. Calculate the distance it travels in this time.",
          response: {
            type: "numeric",
            parts: [
              { label: "Distance", answer: 37.5, unit: "m", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Displacement-time equation",
                statement: "$\\Delta x = v_i t + \\frac{1}{2}at^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The car starts from rest, so $v_i = 0$ and the first term vanishes.",
                working: "\\Delta x = 0 + \\tfrac{1}{2}(3.0)(5.0)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\Delta x = 37.5\\text{ m}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$37.5\\ \\text{m}$",
            commonErrors: [
              "Forgetting to square the time: $\\frac{1}{2}(3.0)(5.0) = 7.5\\ \\text{m}$.",
              "Omitting the factor $\\frac{1}{2}$ and getting $75\\ \\text{m}$.",
            ],
            examinerNote:
              "M1 for correct substitution. A1 for $37.5\\ \\text{m}$ (allow $38\\ \\text{m}$).",
          },
        },
        {
          id: "phys11-u1-kinematic-equations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pebble is dropped from rest from a cliff and hits the water after $2.5\\ \\text{s}$. Ignore air resistance and use $g = 9.8\\ \\text{m/s}^2$.\n\nCalculate (i) the height of the cliff, to 3 significant figures, and (ii) the speed of the pebble as it hits the water.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) height", answer: 30.6, unit: "m", tolerance: 0.1 },
              {
                label: "(ii) impact speed",
                answer: 24.5,
                unit: "m/s",
                tolerance: 0.1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Free fall",
                statement:
                  "Near Earth's surface an object in free fall accelerates downward at $g = 9.8\\ \\text{m/s}^2$.",
              },
              {
                kind: "formula",
                name: "Constant-acceleration equations",
                statement:
                  "$\\Delta y = v_i t + \\frac{1}{2}gt^2$ and $v_f = v_i + gt$",
              },
            ],
            steps: [
              {
                reasoning:
                  "With $v_i = 0$ and down positive, use $\\Delta y = \\frac{1}{2}gt^2$.",
                working: "\\Delta y = \\tfrac{1}{2}(9.8)(2.5)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate to 3 significant figures.",
                working: "\\Delta y = 30.625 \\approx 30.6\\text{ m}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Use $v_f = v_i + gt$ with $v_i = 0$.",
                working: "v_f = (9.8)(2.5)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "v_f = 24.5\\text{ m/s}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(i) $30.6\\ \\text{m}$ (ii) $24.5\\ \\text{m/s}$",
            commonErrors: [
              "Using $\\Delta y = gt^2$ (omitting $\\frac{1}{2}$), giving $61.3\\ \\text{m}$.",
              "Using $v = \\Delta y / t$, which gives only the average speed of $12.25\\ \\text{m/s}$.",
            ],
            examinerNote:
              "Allow $31\\ \\text{m}$ with working seen for (i). Allow ecf for (ii) using a wrong height only if the equation $v_f^2 = 2g\\Delta y$ is used correctly.",
          },
        },
        {
          id: "phys11-u1-kinematic-equations-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A stone is thrown horizontally at $15\\ \\text{m/s}$ from a bridge $20\\ \\text{m}$ above a river. Ignore air resistance and use $g = 9.8\\ \\text{m/s}^2$. Take down as positive for vertical motion.",
          parts: [
            {
              label: "a",
              prompt: "State the stone's initial vertical velocity.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Calculate the time for the stone to reach the river, to 3 significant figures.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Calculate how far from the base of the bridge, horizontally, the stone lands.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the speed of the stone just before it hits the water.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) initial vertical velocity",
                answer: 0,
                unit: "m/s",
                tolerance: 0.01,
              },
              {
                label: "(b) time of flight",
                answer: 2.02,
                unit: "s",
                tolerance: 0.01,
              },
              {
                label: "(c) horizontal distance",
                answer: 30.3,
                unit: "m",
                tolerance: 0.2,
              },
              {
                label: "(d) impact speed",
                answer: 24.8,
                unit: "m/s",
                tolerance: 0.2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Independence of components",
                statement:
                  "Horizontal and vertical motions of a projectile are independent and linked only by time.",
              },
              {
                kind: "formula",
                name: "Projectile equations",
                statement:
                  "$\\Delta y = \\frac{1}{2}gt^2$ (vertical, $v_{iy} = 0$), $\\Delta x = v_x t$ (horizontal), $v = \\sqrt{v_x^2 + v_y^2}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The stone is thrown horizontally, so it has no initial downward velocity.",
                working: "v_{iy} = 0\\text{ m/s}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Use the vertical displacement equation with $v_{iy} = 0$.",
                working: "\\Delta y = \\tfrac{1}{2}gt^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Substitute and rearrange for $t$.",
                working: "20 = 4.9\\,t^2 \\;\\Rightarrow\\; t^2 = 4.082",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Take the square root.",
                working: "t = 2.02\\text{ s}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Horizontal velocity is constant, so distance is velocity times time.",
                working: "\\Delta x = v_x t = (15)(2.02)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "\\Delta x \\approx 30.3\\text{ m}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Find the vertical velocity at impact.",
                working: "v_y = gt = (9.8)(2.02) = 19.8\\text{ m/s}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Combine the perpendicular components with the Pythagorean theorem.",
                working: "v = \\sqrt{15^2 + 19.8^2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "v \\approx 24.8\\text{ m/s}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0\\ \\text{m/s}$ (b) $2.02\\ \\text{s}$ (c) $30.3\\ \\text{m}$ (d) $24.8\\ \\text{m/s}$",
            commonErrors: [
              "Using $15\\ \\text{m/s}$ as the initial vertical velocity.",
              "In (d), giving only the vertical component $19.8\\ \\text{m/s}$ or adding $15 + 19.8$.",
              "Using the horizontal speed in the vertical equation for time.",
            ],
            examinerNote:
              "(b) Allow $2.0\\ \\text{s}$ with correct working. (c) and (d) allow ecf from (b).",
          },
        },
      ],
    },
  ],
};
