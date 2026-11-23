module.exports = [
  {
    file: "lesson-7-1.ts",
    exportName: "lesson71",
    lesson: {
      id: "edxbteceng-u7-lesson-7-1",
      code: "7-1",
      title: "Trigonometry and Resolving Forces",
      goal: "I CAN use sine, cosine and tangent to find unknown sides and angles, and resolve a force into perpendicular components.",
      standards: ["Pearson BTEC L3 National Engineering — Engineering mathematics", "Trigonometry: sin, cos, tan and force resolution"],
      vocabulary: [
        { term: "Sine", definition: "Ratio opposite/hypotenuse in a right-angled triangle: sin θ = opp/hyp." },
        { term: "Cosine", definition: "Ratio adjacent/hypotenuse: cos θ = adj/hyp." },
        { term: "Tangent", definition: "Ratio opposite/adjacent: tan θ = opp/adj." },
        { term: "Resolving a force", definition: "Splitting a force into perpendicular horizontal and vertical components." },
        { term: "Hypotenuse", definition: "The longest side of a right-angled triangle, opposite the right angle." },
        { term: "Resultant", definition: "The single force equivalent to two or more forces combined." },
      ],
      concepts: [
        {
          id: "edxbteceng-u7-1-trig",
          title: "Trigonometric ratios and right-angled triangles",
          skill: "Use sin, cos and tan to calculate unknown sides and angles in right-angled triangles applied to engineering problems.",
          sections: [
            {
              heading: "The three ratios",
              body: "For a right-angled triangle with angle $\\theta$, opposite side $\\text{opp}$, adjacent side $\\text{adj}$ and hypotenuse $\\text{hyp}$:\n\n- $\\sin\\theta = \\text{opp}/\\text{hyp}$\n- $\\cos\\theta = \\text{adj}/\\text{hyp}$\n- $\\tan\\theta = \\text{opp}/\\text{adj}$\n\nUseful values: $\\sin 30° = 0.5$, $\\cos 30° = 0.866$, $\\tan 30° = 0.577$; $\\sin 45° = \\cos 45° = 0.707$, $\\tan 45° = 1$; $\\sin 60° = 0.866$, $\\cos 60° = 0.5$.\n\nTo find an angle use the **inverse** functions: $\\theta = \\sin^{-1}(\\text{opp}/\\text{hyp})$ etc.",
            },
            {
              heading: "Pythagoras and engineering triangles",
              body: "The hypotenuse also satisfies $a^2 + b^2 = c^2$ for legs $a$, $b$ and hypotenuse $c$. Common triples: 3-4-5, 5-12-13, 8-15-17.\n\nEngineering applications: ramps and inclines (angle from rise/run via tan), ladders against walls, forces at angles, roof trusses, road gradients. A gradient of 1:10 means rise/run = 0.1, so the angle is $\\tan^{-1}(0.1) \\approx 5.7°$.",
            },
          ],
          keyFormulas: [
            { name: "Sine", statement: "$\\sin\\theta = \\text{opp}/\\text{hyp}$" },
            { name: "Cosine", statement: "$\\cos\\theta = \\text{adj}/\\text{hyp}$" },
            { name: "Tangent", statement: "$\\tan\\theta = \\text{opp}/\\text{adj}$" },
            { name: "Pythagoras", statement: "$a^2 + b^2 = c^2$" },
          ],
          workedExample: {
            problem: "A ramp rises 1.5 m over a horizontal run of 6 m. Find the angle of the ramp to the horizontal.",
            solution: "$\\tan\\theta = \\text{rise}/\\text{run} = 1.5/6 = 0.25$\n$\\theta = \\tan^{-1}(0.25) \\approx 14.0°$.",
          },
          questions: [
            {
              id: "edxbteceng-u7-1-trig-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "In a right-angled triangle, sin θ is defined as which ratio?",
              response: { type: "mcq", choices: [
                { id: "a", text: "opposite ÷ hypotenuse" },
                { id: "b", text: "adjacent ÷ hypotenuse" },
                { id: "c", text: "opposite ÷ adjacent" },
                { id: "d", text: "hypotenuse ÷ opposite" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Sine", statement: "$\\sin\\theta = \\text{opp}/\\text{hyp}$" }],
                steps: [{ reasoning: "Sine = opposite/hypotenuse.", marks: 1, markCode: "M" }],
                finalAnswer: "(a) opposite ÷ hypotenuse",
              },
            },
            {
              id: "edxbteceng-u7-1-trig-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A right-angled triangle has opposite side 3 m and hypotenuse 5 m. Find sin θ.",
              response: { type: "numeric", parts: [{ label: "sin θ", answer: 0.6 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Sine", statement: "$\\sin\\theta = \\text{opp}/\\text{hyp}$" }],
                steps: [
                  { reasoning: "$\\sin\\theta = 3/5$.", marks: 1, markCode: "M" },
                  { reasoning: "$\\sin\\theta = 0.6$.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "0.6",
              },
            },
            {
              id: "edxbteceng-u7-1-trig-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A ladder 5 m long leans against a wall with its foot 3 m from the wall. Calculate the angle the ladder makes with the ground.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Cosine", statement: "$\\cos\\theta = \\text{adj}/\\text{hyp}$" }],
                steps: [
                  { reasoning: "Adjacent (foot distance) = 3 m, hypotenuse (ladder) = 5 m.", marks: 1, markCode: "M" },
                  { reasoning: "$\\cos\\theta = 3/5 = 0.6$.", marks: 1, markCode: "M" },
                  { reasoning: "$\\theta = \\cos^{-1}(0.6) \\approx 53.1°$.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$\\approx 53.1°$",
                commonErrors: ["Using sin instead of cos — the adjacent side is the foot distance."],
              },
            },
            {
              id: "edxbteceng-u7-1-trig-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A roof truss has a horizontal beam 4 m long and a rafter meeting it at 30°.",
              parts: [
                { label: "a", prompt: "Calculate the vertical height of the roof apex above the beam.", marks: 3 },
                { label: "b", prompt: "Calculate the length of the rafter.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Tangent", statement: "$\\tan\\theta = \\text{opp}/\\text{adj}$" },
                  { kind: "formula", name: "Cosine", statement: "$\\cos\\theta = \\text{adj}/\\text{hyp}$" },
                ],
                steps: [
                  { part: "a", reasoning: "$\\tan 30° = h/4$ → $h = 4 \\times \\tan 30°$.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "$h = 4 \\times 0.577 \\approx 2.31\\ \\text{m}$.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "$\\cos 30° = 4/L$ → $L = 4/\\cos 30°$.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "$L = 4/0.866 \\approx 4.62\\ \\text{m}$.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $\\approx 2.31$ m (b) $\\approx 4.62$ m",
              },
            },
            {
              id: "edxbteceng-u7-1-trig-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A road has a gradient of 1:12 (rise:run).",
              parts: [
                { label: "a", prompt: "Express the gradient as a decimal slope.", marks: 1 },
                { label: "b", prompt: "Calculate the angle of the road to the horizontal.", marks: 2 },
                { label: "c", prompt: "Calculate the vertical rise over a horizontal distance of 60 m.", marks: 2 },
                { label: "d", prompt: "State one engineering reason for limiting road gradients.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Gradient", statement: "rise/run as a ratio or decimal." },
                  { kind: "formula", name: "Tangent", statement: "$\\tan\\theta = \\text{rise}/\\text{run}$" },
                ],
                steps: [
                  { part: "a", reasoning: "Slope = 1/12 $\\approx 0.0833$.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "$\\tan\\theta = 1/12$ → $\\theta = \\tan^{-1}(0.0833)$.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "$\\theta \\approx 4.76°$.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Rise = 60 × (1/12) = 5 m.", marks: 2, markCode: "A" },
                  { part: "d", reasoning: "Safety — steep gradients are harder for vehicles to climb and descend safely.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) 0.0833 (b) $\\approx 4.76°$ (c) 5 m (d) vehicle safety",
              },
            },
            {
              id: "edxbteceng-u7-1-trig-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A crane jib of length 12 m is raised so it makes 40° with the horizontal. The jib pivot is 8 m above the ground.",
              parts: [
                { label: "a", prompt: "Calculate the horizontal distance from the pivot to the jib tip.", marks: 3 },
                { label: "b", prompt: "Calculate the height of the jib tip above the pivot.", marks: 3 },
                { label: "c", prompt: "Calculate the height of the jib tip above the ground.", marks: 1 },
                { label: "d", prompt: "State which trigonometric ratio you used for each part and why.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Cosine", statement: "$\\cos\\theta = \\text{adj}/\\text{hyp}$" },
                  { kind: "formula", name: "Sine", statement: "$\\sin\\theta = \\text{opp}/\\text{hyp}$" },
                ],
                steps: [
                  { part: "a", reasoning: "Horizontal = adj: $12\\cos 40° = 12 \\times 0.766$.", marks: 2, markCode: "M" },
                  { part: "a", reasoning: "$\\approx 9.19\\ \\text{m}$.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Height above pivot = opp: $12\\sin 40° = 12 \\times 0.643$.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "$\\approx 7.71\\ \\text{m}$.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "$8 + 7.71 = 15.71\\ \\text{m}$.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Cosine for horizontal (adjacent), sine for height (opposite) — correct sides relative to angle.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "(a) $\\approx 9.19$ m (b) $\\approx 7.71$ m (c) $\\approx 15.71$ m (d) cos→adj, sin→opp",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u7-1-forces",
          title: "Resolving forces into components",
          skill: "Resolve a force acting at an angle into horizontal and vertical components using trigonometry, and combine components to find resultants.",
          sections: [
            {
              heading: "Force resolution",
              body: "A force $F$ acting at angle $\\theta$ above the horizontal can be split into two perpendicular components:\n\n- Horizontal: $F_x = F\\cos\\theta$\n- Vertical: $F_y = F\\sin\\theta$\n\nThis is the reverse of finding a resultant. Engineers resolve forces on inclined planes, crane loads, bolts and linkages — e.g. a 100 N pull at 30° gives $100\\cos30° = 86.6\\ \\text{N}$ horizontally and $100\\sin30° = 50\\ \\text{N}$ vertically.\n\nIf the force acts below the horizontal or on an incline, choose axes carefully — resolve parallel and perpendicular to the surface.",
            },
            {
              heading: "Combining components",
              body: "Two perpendicular components $F_x$ and $F_y$ can be recombined into a resultant $F = \\sqrt{F_x^2 + F_y^2}$ at angle $\\theta = \\tan^{-1}(F_y/F_x)$.\n\nExample: a sledge pulled with 60 N horizontally and 80 N vertically has resultant $\\sqrt{60^2+80^2} = 100\\ \\text{N}$ (a 3-4-5 triangle scaled).\n\nFor forces at arbitrary angles, resolve each into x and y components first, sum the x-components and y-components separately, then find the resultant.",
            },
          ],
          keyFormulas: [
            { name: "Horizontal component", statement: "$F_x = F\\cos\\theta$" },
            { name: "Vertical component", statement: "$F_y = F\\sin\\theta$" },
            { name: "Resultant", statement: "$F = \\sqrt{F_x^2 + F_y^2}$" },
            { name: "Resultant angle", statement: "$\\theta = \\tan^{-1}(F_y/F_x)$" },
          ],
          workedExample: {
            problem: "A 200 N force acts at 40° above the horizontal. Find its horizontal and vertical components.",
            solution: "$F_x = 200\\cos40° = 200 \\times 0.766 = 153.2\\ \\text{N}$\n$F_y = 200\\sin40° = 200 \\times 0.643 = 128.6\\ \\text{N}$.",
          },
          questions: [
            {
              id: "edxbteceng-u7-1-forces-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "A force F acts at angle θ above the horizontal. The horizontal component is given by:",
              response: { type: "mcq", choices: [
                { id: "a", text: "$F\\cos\\theta$" },
                { id: "b", text: "$F\\sin\\theta$" },
                { id: "c", text: "$F\\tan\\theta$" },
                { id: "d", text: "$F/\\cos\\theta$" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "formula", name: "Force resolution", statement: "$F_x = F\\cos\\theta$, $F_y = F\\sin\\theta$." }],
                steps: [{ reasoning: "Horizontal is adjacent → cosine.", marks: 1, markCode: "M" }],
                finalAnswer: "(a) $F\\cos\\theta$",
              },
            },
            {
              id: "edxbteceng-u7-1-forces-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A 100 N force acts at 30° above the horizontal. Calculate the vertical component.",
              response: { type: "numeric", parts: [{ label: "vertical component", answer: 50, unit: "N" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Vertical component", statement: "$F_y = F\\sin\\theta$" }],
                steps: [
                  { reasoning: "$F_y = 100\\sin30° = 100 \\times 0.5$.", marks: 1, markCode: "M" },
                  { reasoning: "$F_y = 50\\ \\text{N}$.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$50\\ \\text{N}$",
              },
            },
            {
              id: "edxbteceng-u7-1-forces-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A crate is pulled by a rope at 40° to the horizontal with a tension of 150 N. Find the horizontal and vertical components of the pull.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Force resolution", statement: "$F_x = F\\cos\\theta$, $F_y = F\\sin\\theta$" }],
                steps: [
                  { reasoning: "$F_x = 150\\cos40° = 150 \\times 0.766 \\approx 114.9\\ \\text{N}$.", marks: 1, markCode: "M" },
                  { reasoning: "$F_y = 150\\sin40° = 150 \\times 0.643 \\approx 96.4\\ \\text{N}$.", marks: 1, markCode: "M" },
                  { reasoning: "Both components given correctly.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$F_x \\approx 114.9$ N, $F_y \\approx 96.4$ N",
              },
            },
            {
              id: "edxbteceng-u7-1-forces-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Two perpendicular forces act on a bracket: 60 N horizontally and 80 N vertically.",
              parts: [
                { label: "a", prompt: "Calculate the magnitude of the resultant force.", marks: 3 },
                { label: "b", prompt: "Calculate the angle of the resultant to the horizontal.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Resultant", statement: "$F = \\sqrt{F_x^2+F_y^2}$" },
                  { kind: "formula", name: "Resultant angle", statement: "$\\theta = \\tan^{-1}(F_y/F_x)$" },
                ],
                steps: [
                  { part: "a", reasoning: "$F = \\sqrt{60^2 + 80^2} = \\sqrt{3600+6400} = \\sqrt{10000}$.", marks: 2, markCode: "M" },
                  { part: "a", reasoning: "$F = 100\\ \\text{N}$.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "$\\theta = \\tan^{-1}(80/60) = \\tan^{-1}(1.333)$.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "$\\theta \\approx 53.1°$.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $100$ N (b) $\\approx 53.1°$",
              },
            },
            {
              id: "edxbteceng-u7-1-forces-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A trolley is pulled up a 20° incline by a rope parallel to the slope with tension 120 N.",
              parts: [
                { label: "a", prompt: "Resolve the tension into components parallel and perpendicular to the slope.", marks: 3 },
                { label: "b", prompt: "Explain why resolving parallel/perpendicular to the slope (not horizontal/vertical) is useful here.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Force resolution", statement: "Components depend on chosen axes." }],
                steps: [
                  { part: "a", reasoning: "The rope is parallel to the slope, so the tension acts entirely along the slope: parallel component = 120 N, perpendicular component = 0 N.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "Gravity also resolves along the slope, so parallel/perpendicular components match the motion/friction directions.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "This simplifies applying Newton's laws along and across the incline.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) parallel 120 N, perpendicular 0 N (b) aligns with gravity/friction components",
                commonErrors: ["Resolving relative to horizontal when the incline is the natural reference."],
              },
            },
            {
              id: "edxbteceng-u7-1-forces-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A cable supporting a lamp makes 35° with the horizontal. The lamp weighs 80 N and hangs vertically.",
              parts: [
                { label: "a", prompt: "The vertical component of cable tension must equal the weight. Write an equation for this.", marks: 2 },
                { label: "b", prompt: "Calculate the tension in the cable.", marks: 3 },
                { label: "c", prompt: "Calculate the horizontal component of the tension.", marks: 2 },
                { label: "d", prompt: "Explain why two cables at equal angles are often used instead of one.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Force resolution", statement: "$F_y = F\\sin\\theta$, $F_x = F\\cos\\theta$" }],
                steps: [
                  { part: "a", reasoning: "$T\\sin35° = 80$ (vertical component balances weight).", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "$T = 80/\\sin35° = 80/0.574$.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "$T \\approx 139.4\\ \\text{N}$.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "$T_x = T\\cos35° = 139.4 \\times 0.819$.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "$T_x \\approx 114.1\\ \\text{N}$.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Two symmetric cables cancel horizontal components.", marks: 1, markCode: "R" },
                  { part: "d", reasoning: "This avoids sideways pull on the mounting point and reduces tension per cable.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) $T\\sin35°=80$ (b) $\\approx 139.4$ N (c) $\\approx 114.1$ N (d) cancels horizontal pull",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u7-trig-notes",
      title: "Trigonometry and forces — notes",
      summary: "sin=opp/hyp, cos=adj/hyp, tan=opp/adj. Resolve F into Fcosθ (horizontal) and Fsinθ (vertical). Resultant = √(Fx²+Fy²).",
      sections: [
        { heading: "Choosing the ratio", body: "Know which sides you have: opposite+adjacent→tan; opposite+hypotenuse→sin; adjacent+hypotenuse→cos." },
        { heading: "Force resolution", body: "Fcosθ horizontal, Fsinθ vertical. Recombine with Pythagoras for resultant." },
        { heading: "Inclines", body: "Resolve parallel/perpendicular to the slope to match gravity and friction." },
      ],
    },
  },
  {
    file: "lesson-7-2.ts",
    exportName: "lesson72",
    lesson: {
      id: "edxbteceng-u7-lesson-7-2",
      code: "7-2",
      title: "Vectors and Force Equilibrium",
      goal: "I CAN represent forces as vectors, calculate vector magnitudes and components, and determine equilibrium conditions for engineering structures.",
      standards: ["Pearson BTEC L3 National Engineering — Engineering mathematics", "Vectors: components, resultant, equilibrium"],
      vocabulary: [
        { term: "Vector", definition: "A quantity with magnitude and direction (e.g. force, velocity); contrasted with scalar which has magnitude only." },
        { term: "Scalar", definition: "A quantity with magnitude only, no direction (e.g. mass, temperature, speed)." },
        { term: "Vector component", definition: "The projection of a vector onto an axis, e.g. x and y components." },
        { term: "Resultant vector", definition: "The single vector equivalent to the vector sum of several vectors." },
        { term: "Equilibrium", definition: "The state where all forces on a body balance — no net force and no net turning effect." },
        { term: "Unit vector", definition: "A vector of length 1 in a given direction." },
      ],
      concepts: [
        {
          id: "edxbteceng-u7-2-vectors",
          title: "Vector components and magnitude",
          skill: "Resolve vectors into x and y components, find vector magnitude using Pythagoras, and convert between component and magnitude-angle form.",
          sections: [
            {
              heading: "Vectors vs scalars",
              body: "A **vector** has both magnitude and direction — force, velocity, displacement. A **scalar** has magnitude only — mass, speed, distance, temperature. Speed is scalar; velocity is vector.\n\nA 2D vector can be written as components $(F_x, F_y)$ or as magnitude and angle $(F, \\theta)$. To convert: $F_x = F\\cos\\theta$, $F_y = F\\sin\\theta$. To go back: $F = \\sqrt{F_x^2+F_y^2}$, $\\theta = \\tan^{-1}(F_y/F_x)$.",
            },
            {
              heading: "Adding vectors",
              body: "Vectors add by adding corresponding components: $(a_x + b_x,\\ a_y + b_y)$. Subtract by reversing the direction of the subtracted vector.\n\nA vector's magnitude is always positive; its direction is measured from the positive x-axis, anticlockwise. Negative components indicate direction along the negative axis. This component method works for any number of forces or velocities.",
            },
          ],
          keyFormulas: [
            { name: "Magnitude", statement: "$|F| = \\sqrt{F_x^2 + F_y^2}$" },
            { name: "Components", statement: "$F_x = F\\cos\\theta$, $F_y = F\\sin\\theta$" },
            { name: "Vector sum", statement: "$(a_x+b_x,\\ a_y+b_y)$" },
          ],
          workedExample: {
            problem: "A force vector has components Fx = 30 N and Fy = 40 N. Find its magnitude and direction.",
            solution: "$|F| = \\sqrt{30^2+40^2} = \\sqrt{2500} = 50\\ \\text{N}$\n$\\theta = \\tan^{-1}(40/30) = \\tan^{-1}(1.333) \\approx 53.1°$ above horizontal.",
          },
          questions: [
            {
              id: "edxbteceng-u7-2-vectors-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which of these is a vector quantity?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Force" },
                { id: "b", text: "Mass" },
                { id: "c", text: "Temperature" },
                { id: "d", text: "Speed" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Vector", statement: "Has magnitude and direction." }],
                steps: [{ reasoning: "Force has magnitude and direction; mass, temperature and speed are scalars.", marks: 1, markCode: "M" }],
                finalAnswer: "(a) force",
              },
            },
            {
              id: "edxbteceng-u7-2-vectors-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A vector has magnitude 10 N at 60° above the horizontal. Calculate its x-component.",
              response: { type: "numeric", parts: [{ label: "x-component", answer: 5, unit: "N" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Components", statement: "$F_x = F\\cos\\theta$" }],
                steps: [
                  { reasoning: "$F_x = 10\\cos60° = 10 \\times 0.5$.", marks: 1, markCode: "M" },
                  { reasoning: "$F_x = 5\\ \\text{N}$.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$5\\ \\text{N}$",
              },
            },
            {
              id: "edxbteceng-u7-2-vectors-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A force has components Fx = 12 N and Fy = 5 N. Calculate its magnitude and direction.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Magnitude", statement: "$|F| = \\sqrt{F_x^2+F_y^2}$" },
                  { kind: "formula", name: "Direction", statement: "$\\theta = \\tan^{-1}(F_y/F_x)$" },
                ],
                steps: [
                  { reasoning: "$|F| = \\sqrt{144+25} = \\sqrt{169} = 13\\ \\text{N}$.", marks: 1, markCode: "M" },
                  { reasoning: "$\\theta = \\tan^{-1}(5/12) = \\tan^{-1}(0.4167)$.", marks: 1, markCode: "M" },
                  { reasoning: "$\\theta \\approx 22.6°$ above horizontal.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$13$ N at $\\approx 22.6°$",
              },
            },
            {
              id: "edxbteceng-u7-2-vectors-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Two forces act on a point: A = (40 N, 0°) i.e. 40 N east, and B = (0 N, 30 N) i.e. 30 N north.",
              parts: [
                { label: "a", prompt: "Write the x and y components of each force.", marks: 2 },
                { label: "b", prompt: "Find the resultant force vector (components).", marks: 2 },
                { label: "c", prompt: "Calculate the magnitude of the resultant.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Vector addition", statement: "Add components separately." }],
                steps: [
                  { part: "a", reasoning: "A = (40, 0); B = (0, 30).", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Resultant = (40+0, 0+30) = (40, 30) N.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "$|R| = \\sqrt{40^2+30^2} = \\sqrt{2500} = 50\\ \\text{N}$.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) A(40,0), B(0,30) (b) (40,30) N (c) 50 N",
              },
            },
            {
              id: "edxbteceng-u7-2-vectors-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A drone experiences three forces simultaneously: wind pushes it with 10 N east; motor thrust gives 10 N north; gravity pulls 15 N down.",
              parts: [
                { label: "a", prompt: "Assign axes (x east, y north, z up) and write each force as a vector.", marks: 2 },
                { label: "b", prompt: "Find the resultant of the horizontal (x,y) forces.", marks: 2 },
                { label: "c", prompt: "State whether the drone is in equilibrium and why.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Vector components", statement: "Resolve each force into components." }],
                steps: [
                  { part: "a", reasoning: "Wind = (10,0,0); thrust = (0,10,0); gravity = (0,0,−15).", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Horizontal resultant = (10,10) → magnitude $\\sqrt{200} \\approx 14.1\\ \\text{N}$.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "Not in equilibrium — net force exists in all three directions.", marks: 1, markCode: "R" },
                  { part: "c", reasoning: "Gravity isn't balanced (no upward 15 N force); horizontal forces don't cancel either.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) (10,0,0),(0,10,0),(0,0,−15) (b) ~14.1 N (c) not equilibrium",
              },
            },
            {
              id: "edxbteceng-u7-2-vectors-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A surveyor measures a boundary: from point P, boundary goes 30 m east to Q, then 40 m north to R.",
              parts: [
                { label: "a", prompt: "Write the displacement vectors PQ and QR.", marks: 2 },
                { label: "b", prompt: "Find the resultant displacement PR (components).", marks: 2 },
                { label: "c", prompt: "Calculate the straight-line distance PR.", marks: 2 },
                { label: "d", prompt: "Calculate the bearing of PR from P (angle clockwise from north).", marks: 2 },
                { label: "e", prompt: "State why vectors are used rather than scalars for displacement.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Vector addition", statement: "Add components separately." },
                  { kind: "formula", name: "Magnitude", statement: "$|d| = \\sqrt{x^2+y^2}$" },
                ],
                steps: [
                  { part: "a", reasoning: "PQ = (30, 0) east; QR = (0, 40) north (x east, y north).", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "PR = (30+0, 0+40) = (30, 40) m.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "$|PR| = \\sqrt{900+1600} = \\sqrt{2500} = 50\\ \\text{m}$.", marks: 2, markCode: "A" },
                  { part: "d", reasoning: "Angle from east = $\\tan^{-1}(40/30) = 53.1°$; bearing from north = $90° - 53.1° = 36.9°$.", marks: 2, markCode: "A" },
                  { part: "e", reasoning: "Displacement needs direction — 30+40=70 m scalar distance would be wrong path; vectors capture the actual route.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) (30,0),(0,40) (b) (30,40) (c) 50 m (d) 36.9° (e) direction matters",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u7-2-equilibrium",
          title: "Force equilibrium and resultants",
          skill: "Apply the conditions for equilibrium — vector sum of forces equals zero — to analyse structures and machines.",
          sections: [
            {
              heading: "Conditions for equilibrium",
              body: "A body is in **equilibrium** when it has no net force AND no net turning effect (moment). For forces in a plane, this means:\n\n- Sum of x-components = 0\n- Sum of y-components = 0\n\nThe **resultant** of all forces must be zero. If three forces act on a body in equilibrium, they must form a closed triangle — each force's components balance the others.\n\nThis is the basis of **static analysis**: trusses, bridges, cranes, shelves and building frames are designed so forces balance.",
            },
            {
              heading: "Three-force members",
              body: "A common case: a body held by two cables plus its weight. If the body is in equilibrium, the two cable tensions and the weight form a closed vector triangle.\n\nExample: a 100 N weight hangs from two symmetric cables at 30° to horizontal. Each cable tension T has vertical component $T\\sin30°$; two cables share the load: $2T\\sin30° = 100$ → $T = 100\\ \\text{N}$. The horizontal components cancel by symmetry.\n\nNon-symmetric cases need component equations: $\\sum F_x = 0$ and $\\sum F_y = 0$ solved simultaneously.",
            },
          ],
          keyFormulas: [
            { name: "Equilibrium", statement: "$\\sum F_x = 0$ and $\\sum F_y = 0$" },
            { name: "Resultant = 0", statement: "vector sum of all forces is zero" },
            { name: "Three-force rule", statement: "forces form a closed triangle" },
          ],
          workedExample: {
            problem: "A 200 N crate hangs from two vertical ropes. What tension does each rope carry?",
            solution: "Two ropes share equally: each carries 200/2 = 100 N. Sum Fy = 100 + 100 − 200 = 0 — equilibrium.",
          },
          questions: [
            {
              id: "edxbteceng-u7-2-equilibrium-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "For a body in equilibrium under coplanar forces, the vector sum of all forces must be:",
              response: { type: "mcq", choices: [
                { id: "a", text: "Zero" },
                { id: "b", text: "Equal to the weight" },
                { id: "c", text: "Maximum" },
                { id: "d", text: "Twice the weight" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "principle", name: "Equilibrium", statement: "$\\sum F = 0$ — no net force." }],
                steps: [{ reasoning: "Equilibrium requires net force = 0.", marks: 1, markCode: "M" }],
                finalAnswer: "(a) zero",
              },
            },
            {
              id: "edxbteceng-u7-2-equilibrium-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A 60 N picture hangs from two vertical wires. What is the tension in each wire?",
              response: { type: "numeric", parts: [{ label: "tension", answer: 30, unit: "N" }] },
              markscheme: {
                principles: [{ kind: "principle", name: "Equilibrium", statement: "$\\sum F_y = 0$" }],
                steps: [
                  { reasoning: "Two wires share equally: 60/2.", marks: 1, markCode: "M" },
                  { reasoning: "Tension = 30 N each.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$30$ N",
              },
            },
            {
              id: "edxbteceng-u7-2-equilibrium-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A sign of weight 50 N hangs from two cables. Cable A pulls with 40 N horizontally left and cable B provides vertical support. Explain the equilibrium condition and find the vertical component needed from cable B.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Equilibrium", statement: "$\\sum F_x = 0$, $\\sum F_y = 0$" }],
                steps: [
                  { reasoning: "For equilibrium, vertical forces must balance the 50 N weight.", marks: 1, markCode: "R" },
                  { reasoning: "Cable B's vertical component must equal 50 N upward.", marks: 1, markCode: "M" },
                  { reasoning: "Horizontal: cable A's 40 N must be balanced by another horizontal force (e.g. wall reaction).", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Cable B vertical component = 50 N; horizontal forces must also balance.",
              },
            },
            {
              id: "edxbteceng-u7-2-equilibrium-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A 100 N weight hangs from two symmetric cables each at 30° to the horizontal.",
              parts: [
                { label: "a", prompt: "Explain why the horizontal components cancel.", marks: 2 },
                { label: "b", prompt: "Calculate the tension in each cable.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Equilibrium", statement: "$\\sum F_x = 0$" },
                  { kind: "formula", name: "Vertical component", statement: "$T\\sin\\theta$" },
                ],
                steps: [
                  { part: "a", reasoning: "Equal angles and tensions → equal horizontal components in opposite directions.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "Each cable's vertical component = $T\\sin30° = 0.5T$.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Two cables: $2 \\times 0.5T = 100$ → $T = 100\\ \\text{N}$.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "(a) symmetric → horizontal cancels (b) $T = 100$ N each",
              },
            },
            {
              id: "edxbteceng-u7-2-equilibrium-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Three forces act on a bracket: 30 N east, 40 N north, and a third force R that keeps it in equilibrium.",
              parts: [
                { label: "a", prompt: "Find the vector sum of the 30 N and 40 N forces.", marks: 2 },
                { label: "b", prompt: "State the direction and magnitude of force R needed for equilibrium.", marks: 2 },
                { label: "c", prompt: "Explain how you know the bracket is in equilibrium.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Equilibrium", statement: "Resultant must be zero." }],
                steps: [
                  { part: "a", reasoning: "(30, 0) + (0, 40) = (30, 40); magnitude $\\sqrt{2500} = 50$ N.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "R = (−30, −40), magnitude 50 N, pointing southwest (opposite to resultant).", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "R cancels the resultant exactly — sum of all forces = 0.", marks: 1, markCode: "R" },
                  { part: "c", reasoning: "With zero net force the bracket has no tendency to accelerate.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) (30,40), 50 N (b) R = 50 N opposite direction (c) forces sum to zero",
              },
            },
            {
              id: "edxbteceng-u7-2-equilibrium-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A 150 N crate is suspended by two ropes. Rope A pulls at 40° above horizontal to the left; rope B pulls at 50° above horizontal to the right.",
              parts: [
                { label: "a", prompt: "Write equations for equilibrium in the x and y directions.", marks: 2 },
                { label: "b", prompt: "State the vertical equilibrium equation (sum of Fy = 0).", marks: 1 },
                { label: "c", prompt: "Explain why you cannot find both tensions from the vertical equation alone.", marks: 2 },
                { label: "d", prompt: "State what additional information would be needed to solve for both tensions.", marks: 2 },
                { label: "e", prompt: "Explain the 'three-force member' principle that simplifies such problems.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Equilibrium", statement: "$\\sum F_x = 0$, $\\sum F_y = 0$" },
                  { kind: "principle", name: "Three-force rule", statement: "Three forces in equilibrium form a closed triangle." },
                ],
                steps: [
                  { part: "a", reasoning: "$\\sum F_x$: $T_A\\cos40° = T_B\\cos50°$ (horizontal balance). $\\sum F_y$: $T_A\\sin40° + T_B\\sin50° = 150$.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "$T_A\\sin40° + T_B\\sin50° - 150 = 0$.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "One equation has two unknowns ($T_A$, $T_B$) — infinitely many solutions.", marks: 2, markCode: "R" },
                  { part: "d", reasoning: "Need the horizontal equilibrium equation too (second equation) to solve simultaneously.", marks: 2, markCode: "R" },
                  { part: "e", reasoning: "Three forces in equilibrium form a closed triangle; can be solved by sine rule without components.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "(a) $\\sum F_x=0$, $\\sum F_y=0$ (b) $T_A\\sin40°+T_B\\sin50°=150$ (c) two unknowns one equation (d) need both equations (e) closed triangle",
                commonErrors: ["Trying to solve with only the vertical equation — need both x and y equilibrium."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u7-vectors-notes",
      title: "Vectors and equilibrium — notes",
      summary: "Vector = magnitude + direction. Components Fx=Fcosθ, Fy=Fsinθ; resultant=√(Fx²+Fy²). Equilibrium: ΣFx=0, ΣFy=0.",
      sections: [
        { heading: "Component method", body: "Resolve every vector into x and y components, sum each direction, then find magnitude/direction of resultant." },
        { heading: "Equilibrium", body: "Net force must be zero — both ΣFx=0 and ΣFy=0. Symmetric setups cancel automatically." },
        { heading: "Three-force members", body: "Three forces in equilibrium form a closed triangle — solvable by sine rule." },
      ],
    },
  },
  {
    file: "lesson-7-3.ts",
    exportName: "lesson73",
    lesson: {
      id: "edxbteceng-u7-lesson-7-3",
      code: "7-3",
      title: "Engineering Statistics and Data Analysis",
      goal: "I CAN calculate measures of central tendency and spread, interpret scatter plots and correlation, and apply percentage change to engineering data.",
      standards: ["Pearson BTEC L3 National Engineering — Engineering mathematics", "Statistics: mean, median, mode, range, correlation, percentage change"],
      vocabulary: [
        { term: "Mean", definition: "The sum of all values divided by the number of values." },
        { term: "Median", definition: "The middle value when data is arranged in order." },
        { term: "Mode", definition: "The most frequently occurring value." },
        { term: "Range", definition: "The difference between the largest and smallest values." },
        { term: "Standard deviation", definition: "A measure of how spread out data values are from the mean." },
        { term: "Correlation", definition: "A relationship between two variables — positive, negative or none." },
        { term: "Percentage change", definition: "The change expressed as a percentage of the original value." },
      ],
      concepts: [
        {
          id: "edxbteceng-u7-3-stats",
          title: "Measures of central tendency and spread",
          skill: "Calculate mean, median, mode and range for engineering datasets, and interpret what each reveals about the data.",
          sections: [
            {
              heading: "Central tendency",
              body: "- **Mean** $\\bar{x} = \\frac{\\sum x}{n}$ — the average; sensitive to extreme values.\n- **Median** — middle value when sorted; robust against outliers.\n- **Mode** — most frequent value; useful for categorical data.\n\nExample: measurements 10, 11, 12, 13, 14 mm → mean = 12 mm, median = 12 mm, mode = none, range = 4 mm.",
            },
            {
              heading: "Spread and variability",
              body: "The **range** = max − min gives a quick spread measure but ignores distribution. **Standard deviation** $s$ measures average distance from the mean:\n\n$$s = \\sqrt{\\frac{\\sum (x - \\bar{x})^2}{n}}$$\n\nA small standard deviation means data clusters tightly around the mean (consistent); a large one means wide scatter (inconsistent). For quality control, engineers track both mean and spread — a process can have the right average but too much variation.",
            },
          ],
          keyFormulas: [
            { name: "Mean", statement: "$\\bar{x} = \\frac{\\sum x}{n}$" },
            { name: "Range", statement: "$\\text{range} = x_{max} - x_{min}$" },
            { name: "Standard deviation", statement: "$s = \\sqrt{\\frac{\\sum(x-\\bar{x})^2}{n}}$" },
          ],
          workedExample: {
            problem: "Five bolts have lengths 49.8, 50.1, 50.0, 49.9, 50.2 mm. Find the mean and range.",
            solution: "Mean = (49.8+50.1+50.0+49.9+50.2)/5 = 250.0/5 = 50.0 mm. Range = 50.2 − 49.8 = 0.4 mm.",
          },
          questions: [
            {
              id: "edxbteceng-u7-3-stats-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is the mean of the values 4, 6, 8, 10?",
              response: { type: "mcq", choices: [
                { id: "a", text: "7" },
                { id: "b", text: "6" },
                { id: "c", text: "8" },
                { id: "d", text: "28" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "formula", name: "Mean", statement: "$\\bar{x} = \\sum x / n$" }],
                steps: [{ reasoning: "(4+6+8+10)/4 = 28/4 = 7.", marks: 1, markCode: "M" }],
                finalAnswer: "(a) 7",
              },
            },
            {
              id: "edxbteceng-u7-3-stats-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Find the median of the data set: 3, 7, 5, 9, 4.",
              response: { type: "numeric", parts: [{ label: "median", answer: 5 }] },
              markscheme: {
                principles: [{ kind: "definition", name: "Median", statement: "Middle value when sorted." }],
                steps: [
                  { reasoning: "Sort: 3, 4, 5, 7, 9 — middle (3rd) value is 5.", marks: 1, markCode: "M" },
                  { reasoning: "Median = 5.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "5",
              },
            },
            {
              id: "edxbteceng-u7-3-stats-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A machine produces shaft diameters (mm): 25.0, 25.1, 24.9, 25.0, 25.2, 24.8. Calculate the mean and range.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Mean", statement: "$\\bar{x} = \\sum x/n$" },
                  { kind: "formula", name: "Range", statement: "$x_{max}-x_{min}$" },
                ],
                steps: [
                  { reasoning: "Sum = 25.0+25.1+24.9+25.0+25.2+24.8 = 150.0; mean = 150/6 = 25.0 mm.", marks: 1, markCode: "M" },
                  { reasoning: "Max = 25.2, min = 24.8.", marks: 1, markCode: "M" },
                  { reasoning: "Range = 0.4 mm.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Mean = 25.0 mm, range = 0.4 mm",
              },
            },
            {
              id: "edxbteceng-u7-3-stats-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Two machines produce the same mean diameter of 50.0 mm. Machine A has range 0.2 mm; Machine B has range 1.5 mm.",
              parts: [
                { label: "a", prompt: "State which machine produces more consistent parts and why.", marks: 2 },
                { label: "b", prompt: "Explain why mean alone is insufficient for quality assessment.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Variability", statement: "Smaller spread = more consistent." }],
                steps: [
                  { part: "a", reasoning: "Machine A — smaller range means parts cluster closer to the mean.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "Mean ignores spread — two datasets can share a mean but differ wildly in consistency.", marks: 1, markCode: "R" },
                  { part: "b", reasoning: "Quality needs both accuracy (mean near target) and precision (low spread).", marks: 1, markCode: "R" },
                  { part: "b", reasoning: "A process could be precise but inaccurate, or accurate but imprecise — need both measures.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) Machine A (b) mean ignores variability — need spread too",
              },
            },
            {
              id: "edxbteceng-u7-3-stats-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Test results for five samples of concrete strength (MPa): 32, 35, 28, 40, 30.",
              parts: [
                { label: "a", prompt: "Calculate the mean.", marks: 2 },
                { label: "b", prompt: "Calculate the median.", marks: 2 },
                { label: "c", prompt: "Calculate the range.", marks: 1 },
                { label: "d", prompt: "State which measure is more affected by the high value of 40 MPa.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Mean", statement: "$\\bar{x} = \\sum x/n$" },
                  { kind: "definition", name: "Median", statement: "Middle sorted value." },
                ],
                steps: [
                  { part: "a", reasoning: "Sum = 32+35+28+40+30 = 165; mean = 165/5 = 33 MPa.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Sorted: 28, 30, 32, 35, 40 — median = 32 MPa.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "Range = 40 − 28 = 12 MPa.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "The mean — it uses every value and is pulled up by the outlier.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) 33 MPa (b) 32 MPa (c) 12 MPa (d) mean",
              },
            },
            {
              id: "edxbteceng-u7-3-stats-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A quality engineer records the masses of 6 packaged products (g): 498, 502, 500, 499, 503, 498.",
              parts: [
                { label: "a", prompt: "Calculate the mean mass.", marks: 2 },
                { label: "b", prompt: "Calculate the range.", marks: 1 },
                { label: "c", prompt: "Find the median.", marks: 2 },
                { label: "d", prompt: "State whether the process appears biased high or low relative to a 500 g target.", marks: 2 },
                { label: "e", prompt: "Explain why both mean and range are reported in a quality report.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Mean", statement: "$\\bar{x} = \\sum x/n$" },
                  { kind: "formula", name: "Range", statement: "$x_{max}-x_{min}$" },
                ],
                steps: [
                  { part: "a", reasoning: "Sum = 498+502+500+499+503+498 = 3000; mean = 3000/6 = 500 g.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Range = 503 − 498 = 5 g.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Sorted: 498,498,499,500,502,503 — median = (499+500)/2 = 499.5 g.", marks: 2, markCode: "A" },
                  { part: "d", reasoning: "Mean = 500 g = target → not biased on average.", marks: 2, markCode: "R" },
                  { part: "e", reasoning: "Mean shows accuracy vs target; range shows consistency/spread.", marks: 1, markCode: "R" },
                  { part: "e", reasoning: "Both needed for complete quality picture — accurate AND precise.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) 500 g (b) 5 g (c) 499.5 g (d) unbiased (e) accuracy + precision",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u7-3-data",
          title: "Correlation, percentage change and data interpretation",
          skill: "Interpret scatter plots and correlation, calculate percentage change, and apply engineering data analysis to make decisions.",
          sections: [
            {
              heading: "Correlation and scatter",
              body: "A **scatter diagram** plots paired data to reveal relationships:\n\n- **Positive correlation**: as one variable increases, the other tends to increase (e.g. temperature vs power demand).\n- **Negative correlation**: as one increases, the other decreases (e.g. insulation thickness vs heat loss).\n- **No correlation**: no clear pattern.\n\nCorrelation does NOT prove causation — both variables may be driven by a third factor. Engineers use scatter plots to identify which parameters affect performance.",
            },
            {
              heading: "Percentage change",
              body: "Percentage change compares a new value to an original:\n\n$$\\text{percentage change} = \\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$$\n\nPositive = increase, negative = decrease. Engineering uses: material savings, efficiency gains, defect-rate reduction, cost changes.\n\nExample: a process improves from 12% defects to 8% defects — change = (8−12)/12 × 100 = −33.3% (a 33% reduction in defects).",
            },
          ],
          keyFormulas: [
            { name: "Percentage change", statement: "$\\frac{\\text{new}-\\text{original}}{\\text{original}} \\times 100\\%$" },
            { name: "Positive correlation", statement: "both variables increase together" },
            { name: "Negative correlation", statement: "one increases as the other decreases" },
          ],
          workedExample: {
            problem: "A factory reduces defects from 50 per 1000 to 30 per 1000 units. Calculate the percentage reduction.",
            solution: "Change = (30 − 50)/50 × 100 = −20/50 × 100 = −40% → a 40% reduction.",
          },
          questions: [
            {
              id: "edxbteceng-u7-3-data-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "As engine speed increases, fuel consumption also increases. What type of correlation is this?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Positive correlation" },
                { id: "b", text: "Negative correlation" },
                { id: "c", text: "No correlation" },
                { id: "d", text: "Inverse correlation" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Correlation", statement: "Both variables move in the same direction." }],
                steps: [{ reasoning: "Both increase together → positive correlation.", marks: 1, markCode: "M" }],
                finalAnswer: "(a) positive correlation",
              },
            },
            {
              id: "edxbteceng-u7-3-data-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Calculate the percentage change when a value rises from 80 to 100.",
              response: { type: "numeric", parts: [{ label: "percentage change", answer: 25, unit: "%" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Percentage change", statement: "$\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$" }],
                steps: [
                  { reasoning: "$(100-80)/80 \\times 100 = 20/80 \\times 100$.", marks: 1, markCode: "M" },
                  { reasoning: "$= 25\\%$.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$25\\%$",
              },
            },
            {
              id: "edxbteceng-u7-3-data-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A scatter plot shows a clear downward trend: as X increases, Y decreases. Describe the correlation and give a possible engineering example.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Correlation", statement: "Negative = one up, other down." }],
                steps: [
                  { reasoning: "This is negative correlation.", marks: 1, markCode: "B" },
                  { reasoning: "Valid example: insulation thickness vs heat loss; lubricant viscosity vs friction; alloying vs ductility.", marks: 1, markCode: "B" },
                  { reasoning: "The relationship suggests X affects Y, though correlation alone doesn't prove causation.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Negative correlation; e.g. insulation vs heat loss.",
              },
            },
            {
              id: "edxbteceng-u7-3-data-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A company's energy use falls from 1200 kWh/month to 900 kWh/month after installing efficient motors.",
              parts: [
                { label: "a", prompt: "Calculate the absolute saving in kWh.", marks: 1 },
                { label: "b", prompt: "Calculate the percentage reduction.", marks: 2 },
                { label: "c", prompt: "Explain whether correlation between motor efficiency and energy use could be claimed from this data alone.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Percentage change", statement: "$\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$" }],
                steps: [
                  { part: "a", reasoning: "Saving = 1200 − 900 = 300 kWh.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "$(900-1200)/1200 \\times 100 = -300/1200 \\times 100$.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "$= -25\\%$ → 25% reduction.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Before/after shows association but not proof of causation.", marks: 1, markCode: "R" },
                  { part: "c", reasoning: "Other factors (weather, production volume, tariffs) could also affect energy use.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) 300 kWh (b) 25% reduction (c) correlation ≠ causation",
              },
            },
            {
              id: "edxbteceng-u7-3-data-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A test measures tensile strength of 5 alloy samples: 410, 425, 418, 430, 422 MPa.",
              parts: [
                { label: "a", prompt: "Calculate the mean tensile strength.", marks: 2 },
                { label: "b", prompt: "Calculate the range.", marks: 1 },
                { label: "c", prompt: "Calculate the percentage by which the strongest sample exceeds the weakest.", marks: 2 },
                { label: "d", prompt: "State whether the data suggests consistent quality.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Mean", statement: "$\\bar{x}=\\sum x/n$" },
                  { kind: "formula", name: "Percentage change", statement: "$\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$" },
                ],
                steps: [
                  { part: "a", reasoning: "Sum = 410+425+418+430+422 = 2105; mean = 2105/5 = 421 MPa.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Range = 430 − 410 = 20 MPa.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "$(430-410)/410 \\times 100 = 20/410 \\times 100$.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "$\\approx 4.88\\%$.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Range is small (~5%) relative to mean → reasonably consistent.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) 421 MPa (b) 20 MPa (c) ~4.88% (d) consistent",
              },
            },
            {
              id: "edxbteceng-u7-3-data-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A maintenance engineer compares two pumps. Pump A failed after 800, 1200, 950, 1100 hours. Pump B failed after 500, 600, 550, 700 hours.",
              parts: [
                { label: "a", prompt: "Calculate the mean time to failure for each pump.", marks: 3 },
                { label: "b", prompt: "Calculate the range for each pump.", marks: 2 },
                { label: "c", prompt: "State which pump is more reliable and justify using both statistics.", marks: 2 },
                { label: "d", prompt: "State one limitation of using only 4 data points.", marks: 1 },
                { label: "e", prompt: "State one additional statistic that would improve the comparison.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Mean", statement: "$\\bar{x}=\\sum x/n$" },
                  { kind: "formula", name: "Range", statement: "$x_{max}-x_{min}$" },
                ],
                steps: [
                  { part: "a", reasoning: "Pump A: (800+1200+950+1100)/4 = 4050/4 = 1012.5 h.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Pump B: (500+600+550+700)/4 = 2350/4 = 587.5 h.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both means stated.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Pump A range = 1200−800 = 400 h; Pump B range = 700−500 = 200 h.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "Pump A more reliable — nearly double mean life.", marks: 1, markCode: "R" },
                  { part: "c", reasoning: "Though B is more consistent (smaller range), A's much higher average life dominates.", marks: 1, markCode: "R" },
                  { part: "d", reasoning: "Small sample may not represent long-term performance — outliers dominate.", marks: 1, markCode: "R" },
                  { part: "e", reasoning: "Standard deviation, median, or confidence interval / more samples.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "(a) A=1012.5h, B=587.5h (b) A=400h, B=200h (c) A (d) small sample (e) std dev/more data",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u7-stats-notes",
      title: "Engineering statistics — notes",
      summary: "Mean=Σx/n; median=middle sorted; range=max−min. Scatter shows correlation; % change=(new−old)/old×100.",
      sections: [
        { heading: "Key formulas", body: "Mean $\\bar{x}=\\sum x/n$; range $x_{max}-x_{min}$; % change $(\\text{new}-\\text{old})/\\text{old}\\times100\\%$." },
        { heading: "Accuracy vs precision", body: "Mean near target = accurate; small spread = precise. Quality needs both." },
        { heading: "Correlation caution", body: "Correlation shows association, not causation — a third factor may drive both." },
      ],
    },
  },
];
