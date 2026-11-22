import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "eph10-u1-lesson-1-1",
  code: "1-1",
  title: "Describing Motion",
  goal: "I CAN calculate speed, velocity and acceleration, and use distance-time and velocity-time graphs to describe and analyse motion.",
  standards: ["4PH1 1.1", "4PH1 1.2", "4PH1 1.3", "4PH1 1.5", "4PH1 1.6", "4PH1 1.7"],
  vocabulary: [
    { term: "Scalar", definition: "A quantity with magnitude (size) only, such as distance, speed, mass or time." },
    { term: "Vector", definition: "A quantity with both magnitude and direction, such as displacement, velocity, acceleration and force." },
    { term: "Speed", definition: "The distance travelled per unit time. It is a scalar, measured in $\\text{m/s}$." },
    { term: "Velocity", definition: "The speed in a stated direction, or the rate of change of displacement. It is a vector." },
    { term: "Acceleration", definition: "The rate of change of velocity: the change in velocity divided by the time taken. Measured in $\\text{m/s}^2$." },
    { term: "Gradient", definition: "The steepness of a graph line, found as change in $y$ divided by change in $x$." },
  ],
  concepts: [
    {
      id: "eph10-u1-speed-velocity-acceleration",
      title: "Speed, velocity and acceleration",
      skill: "Distinguish scalars from vectors and calculate speed, average speed and acceleration.",
      lesson: {
        sections: [
          {
            heading: "Scalars and vectors",
            body: "A **scalar** has size only; a **vector** has size and direction.\n\n- Scalars: distance, speed, mass, time, energy.\n- Vectors: displacement, velocity, acceleration, force, momentum.\n\n**Speed** is how fast something moves; **velocity** is speed in a given direction. A car going round a bend at a steady $20\\text{ m/s}$ has constant speed but changing velocity, because its direction changes.",
          },
          {
            heading: "Speed and acceleration",
            body: "$$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$$\n\nFor a journey with several stages, **average speed** is the **total** distance divided by the **total** time. Never average the speeds of the stages.\n\n**Acceleration** is the rate of change of velocity:\n\n$$a = \\frac{v - u}{t}$$\n\nwhere $u$ is the initial velocity, $v$ the final velocity and $t$ the time. A negative result means the object is slowing down (deceleration).",
          },
          {
            heading: "Uniform acceleration",
            body: "For constant acceleration in a straight line:\n\n$$v^2 = u^2 + 2as$$\n\nwhere $s$ is the distance moved. Use it when the time is not given. For an object braking to rest, $v = 0$ and $a$ is negative.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$, units $\\text{m/s}$" },
          { name: "Acceleration", statement: "$a = \\frac{v - u}{t}$, units $\\text{m/s}^2$" },
          { name: "Uniform acceleration", statement: "$v^2 = u^2 + 2as$" },
        ],
        workedExample: {
          problem: "A cyclist speeds up from $2\\text{ m/s}$ to $8\\text{ m/s}$ in $3\\text{ s}$. Calculate her acceleration.",
          solution: "$a = \\frac{v - u}{t} = \\frac{8 - 2}{3} = \\frac{6}{3} = 2\\text{ m/s}^2$.",
        },
      },
      questions: [
        {
          id: "eph10-u1-speed-velocity-acceleration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these quantities is a vector?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time" },
              { id: "b", text: "Speed" },
              { id: "c", text: "Distance" },
              { id: "d", text: "Velocity" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vector", statement: "A vector has both magnitude and direction; velocity is speed in a stated direction." },
            ],
            steps: [
              { reasoning: "Speed, distance and time have size only, so they are scalars. Velocity has a direction as well as a size.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Velocity",
            commonErrors: ["Choosing speed because it sounds like velocity; speed has no direction."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph10-u1-speed-velocity-acceleration-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car accelerates uniformly from $8\\text{ m/s}$ to $20\\text{ m/s}$ in $6\\text{ s}$. Calculate its acceleration.",
          response: {
            type: "numeric",
            parts: [{ label: "Acceleration", answer: 2, unit: "m/s²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Acceleration", statement: "$a = \\frac{v - u}{t}$" },
            ],
            steps: [
              { reasoning: "Substitute the change in velocity and the time.", working: "a = \\frac{20 - 8}{6}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "a = \\frac{12}{6} = 2\\text{ m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\text{ m/s}^2$",
            commonErrors: ["Dividing the final velocity by the time ($20 \\div 6$).", "Forgetting to subtract the initial velocity."],
            examinerNote: "A1 cao 2 with the correct unit. Allow 'm/s/s'.",
          },
        },
        {
          id: "eph10-u1-speed-velocity-acceleration-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A runner runs $400\\text{ m}$ in $50\\text{ s}$. She then walks $200\\text{ m}$ at a steady speed of $2\\text{ m/s}$. Calculate her average speed for the whole journey.",
          response: {
            type: "numeric",
            parts: [{ label: "Average speed", answer: 4, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average speed", statement: "$\\text{average speed} = \\frac{\\text{total distance}}{\\text{total time}}$" },
            ],
            steps: [
              { reasoning: "Find the time spent walking from $t = \\frac{s}{v}$.", working: "t = \\frac{200}{2} = 100\\text{ s}", marks: 1, markCode: "M" },
              { reasoning: "Use the total distance and total time.", working: "\\frac{400 + 200}{50 + 100} = \\frac{600}{150}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "4\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\text{ m/s}$",
            commonErrors: ["Averaging the two speeds, $(8 + 2) \\div 2 = 5\\text{ m/s}$; this ignores that she spends longer walking.", "Using only the running time or distance."],
            examinerNote: "A1 cao 4. Allow ecf for a wrong walking time.",
          },
        },
        {
          id: "eph10-u1-speed-velocity-acceleration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A car travelling at $30\\text{ m/s}$ in a straight line brakes with a constant deceleration and stops in $5.0\\text{ s}$.",
          parts: [
            { label: "a", prompt: "State the difference between speed and velocity.", marks: 2 },
            { label: "b", prompt: "Calculate the magnitude of the car's acceleration.", marks: 2 },
            { label: "c", prompt: "Use the equation $v^2 = u^2 + 2as$ to calculate the distance the car travels while braking.", marks: 3 },
            { label: "d", prompt: "A second car goes round a roundabout at a constant speed of $8\\text{ m/s}$. Explain why its velocity is changing.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scalar and vector", statement: "Speed is a scalar (size only); velocity is a vector (size and direction)." },
              { kind: "formula", name: "Acceleration", statement: "$a = \\frac{v - u}{t}$" },
              { kind: "formula", name: "Uniform acceleration", statement: "$v^2 = u^2 + 2as$" },
            ],
            steps: [
              { part: "a", reasoning: "Speed is a scalar: it has size only.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Velocity is a vector: it has size and a stated direction.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute $u = 30$, $v = 0$ and $t = 5.0$.", working: "a = \\frac{0 - 30}{5.0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The negative sign shows deceleration, so the magnitude is 6.", working: "a = -6.0\\text{ m/s}^2,\\ \\text{magnitude } 6.0\\text{ m/s}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Choose the equation that links velocities, acceleration and distance.", working: "v^2 = u^2 + 2as", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute $v = 0$, $u = 30$ and $a = -6$.", working: "0 = 30^2 + 2 \\times (-6) \\times s \\Rightarrow 12s = 900", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $s$.", working: "s = 75\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Its direction of travel is continually changing.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Velocity includes direction, so velocity changes (the car accelerates) even though the speed is constant.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) speed is a scalar, velocity a vector with direction (b) $6.0\\text{ m/s}^2$ (c) $75\\text{ m}$ (d) direction changes, so velocity changes",
            commonErrors: ["Giving the acceleration as $+6$ and then using it with the wrong sign in (c).", "Saying that constant speed means constant velocity."],
            examinerNote: "In (b) allow -6 or 6 (deceleration). Allow ecf in (c) from a wrong answer to (b). Check: average speed $15\\text{ m/s} \\times 5\\text{ s} = 75\\text{ m}$.",
          },
        },
      ],
    },
    {
      id: "eph10-u1-motion-graphs",
      title: "Distance-time and velocity-time graphs",
      skill: "Interpret gradients and areas of motion graphs to find speed, acceleration and distance.",
      lesson: {
        sections: [
          {
            heading: "Distance-time graphs",
            body: "On a distance-time graph:\n\n- a **horizontal** line means the object is **stationary**\n- a **straight sloping** line means **constant speed**\n- a **curve getting steeper** means **accelerating**\n- the **gradient** is the **speed**: $\\frac{\\text{change in distance}}{\\text{change in time}}$.\n\nA distance-time graph never slopes downwards, because distance travelled cannot decrease.",
          },
          {
            heading: "Velocity-time graphs",
            body: "On a velocity-time graph:\n\n- a **horizontal** line means **constant velocity** (zero acceleration)\n- a **straight sloping** line means **constant acceleration**; downward slope means deceleration\n- the **gradient** is the **acceleration**\n- the **area under the graph** is the **distance travelled**.\n\nFor non-rectangular shapes, split the area into triangles ($\\frac{1}{2} \\times \\text{base} \\times \\text{height}$) and rectangles.",
          },
          {
            heading: "Taking readings from graphs",
            body: "Always use a large triangle to find a gradient and include units: $\\text{m} \\div \\text{s} = \\text{m/s}$ for distance-time, $\\text{m/s} \\div \\text{s} = \\text{m/s}^2$ for velocity-time. Check the axis scales before reading values.",
          },
        ],
        keyFormulas: [
          { name: "Distance-time gradient", statement: "$\\text{speed} = \\frac{\\text{change in distance}}{\\text{change in time}}$" },
          { name: "Velocity-time gradient", statement: "$\\text{acceleration} = \\frac{\\text{change in velocity}}{\\text{change in time}}$" },
          { name: "Area under velocity-time graph", statement: "$\\text{distance travelled} = \\text{area under the graph}$" },
        ],
        workedExample: {
          problem: "A car's velocity rises uniformly from $0$ to $10\\text{ m/s}$ in $5\\text{ s}$. Find the distance travelled in this time.",
          solution: "The area under the graph is a triangle: $\\frac{1}{2} \\times 5 \\times 10 = 25\\text{ m}$.",
        },
      },
      questions: [
        {
          id: "eph10-u1-motion-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the gradient of a distance-time graph represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acceleration" },
              { id: "b", text: "Time taken" },
              { id: "c", text: "Speed" },
              { id: "d", text: "Distance travelled" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gradient of distance-time graph", statement: "Gradient $= \\frac{\\text{change in distance}}{\\text{change in time}} = \\text{speed}$." },
            ],
            steps: [
              { reasoning: "Distance divided by time is speed. Acceleration is the gradient of a velocity-time graph.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Speed",
            commonErrors: ["Choosing acceleration, which is the gradient of a velocity-time graph."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph10-u1-motion-graphs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A velocity-time graph for a car shows a straight line rising from $0$ to $12\\text{ m/s}$ in the first $4\\text{ s}$, then a horizontal line at $12\\text{ m/s}$ for a further $6\\text{ s}$. Calculate the total distance travelled in the $10\\text{ s}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Total distance", answer: 96, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Area under a velocity-time graph", statement: "The area under a velocity-time graph is the distance travelled." },
            ],
            steps: [
              { reasoning: "The first section is a triangle.", working: "\\tfrac{1}{2} \\times 4 \\times 12 = 24\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "The second section is a rectangle.", working: "12 \\times 6 = 72\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Add the two areas.", working: "24 + 72 = 96\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$96\\text{ m}$",
            commonErrors: ["Using $4 \\times 12$ for the first section and forgetting the factor $\\frac{1}{2}$ (giving $120\\text{ m}$).", "Using the gradient instead of the area."],
            examinerNote: "A1 cao 96. Allow the whole shape as a trapezium: $\\frac{1}{2}(6 + 10) \\times 12 = 96$.",
          },
        },
        {
          id: "eph10-u1-motion-graphs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The distance-time graph for a cyclist has three sections. From $0$ to $10\\text{ s}$ it is a straight line from $0$ to $60\\text{ m}$. From $10\\text{ s}$ to $30\\text{ s}$ it is horizontal at $60\\text{ m}$. From $30\\text{ s}$ to $40\\text{ s}$ it is a straight line rising from $60\\text{ m}$ to $120\\text{ m}$. Calculate (i) the cyclist's speed in the first section and (ii) the average speed for the whole $40\\text{ s}$ journey.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) Speed in first section", answer: 6, unit: "m/s" },
              { label: "(ii) Average speed for whole journey", answer: 3, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed from gradient", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$ = gradient of the distance-time graph." },
              { kind: "formula", name: "Average speed", statement: "$\\frac{\\text{total distance}}{\\text{total time}}$" },
            ],
            steps: [
              { reasoning: "Gradient of the first section.", working: "\\frac{60}{10}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "6\\text{ m/s}", marks: 1, markCode: "A" },
              { reasoning: "Total distance is $120\\text{ m}$ (read from the graph) divided by the full time.", working: "\\frac{120}{40}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "3\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $6\\text{ m/s}$ (ii) $3\\text{ m/s}$",
            commonErrors: ["Using $60 \\div 40 = 1.5\\text{ m/s}$ by reading only the first distance.", "Including the stationary section in (i) or averaging the section speeds (6, 0 and 6) to get 4."],
            examinerNote: "Allow ecf in (ii) from an incorrect total distance.",
          },
        },
        {
          id: "eph10-u1-motion-graphs-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A tram starts from rest and accelerates uniformly to $10\\text{ m/s}$ in $20\\text{ s}$. It then travels at a constant $10\\text{ m/s}$ for $60\\text{ s}$ before decelerating uniformly to rest in $20\\text{ s}$. Its motion is shown on a velocity-time graph.",
          parts: [
            { label: "a", prompt: "Calculate the acceleration during the first $20\\text{ s}$.", marks: 2 },
            { label: "b", prompt: "Describe the motion of the tram between $20\\text{ s}$ and $80\\text{ s}$.", marks: 1 },
            { label: "c", prompt: "Calculate the total distance travelled by the tram.", marks: 3 },
            { label: "d", prompt: "Calculate the average speed for the whole journey.", marks: 2 },
            { label: "e", prompt: "Describe how a student could find the average speed of a trolley rolling down a ramp.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Acceleration", statement: "$a = \\frac{\\text{change in velocity}}{\\text{time}}$ = gradient of a velocity-time graph." },
              { kind: "principle", name: "Area under graph", statement: "Distance travelled = area under the velocity-time graph." },
              { kind: "formula", name: "Average speed", statement: "$\\frac{\\text{total distance}}{\\text{total time}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Divide the change in velocity by the time.", working: "a = \\frac{10 - 0}{20}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the unit.", working: "0.5\\text{ m/s}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A horizontal line: constant velocity of $10\\text{ m/s}$ (zero acceleration).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The distance is the area under the graph, so split it into two triangles and a rectangle.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Calculate each area.", working: "\\tfrac{1}{2} \\times 20 \\times 10 = 100,\\quad 10 \\times 60 = 600,\\quad \\tfrac{1}{2} \\times 20 \\times 10 = 100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add the areas.", working: "100 + 600 + 100 = 800\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Total time is $20 + 60 + 20 = 100\\text{ s}$.", working: "\\frac{800}{100}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with the unit.", working: "8\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Measure the distance travelled with a metre rule and the time with a stopwatch (or light gates).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Repeat and take a mean of the times, then use speed = distance $\\div$ time.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $0.5\\text{ m/s}^2$ (b) constant velocity of $10\\text{ m/s}$ (c) $800\\text{ m}$ (d) $8\\text{ m/s}$ (e) distance with a rule, time with a stopwatch, repeat and use speed = distance / time",
            commonErrors: ["Using the maximum speed $10\\text{ m/s}$ as the average speed.", "Saying the tram is stationary in the flat section of a velocity-time graph."],
            examinerNote: "In (c) allow the trapezium method: $\\frac{1}{2}(100 + 60) \\times 10 = 800$. Allow ecf in (d) from (c).",
          },
        },
      ],
    },
  ],
};
