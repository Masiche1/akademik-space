import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "phys11-u7-lesson-7-1",
  code: "7-1",
  title: "Newton's First and Second Laws Deep Dive",
  goal: "I CAN apply Newton's first and second laws to solve multi-force problems.",
  standards: [
    "HS-PS2-1",
    "HS-PS2-2",
    "SEP: Developing and Using Models",
    "SEP: Using Mathematics and Computational Thinking",
  ],
  vocabulary: [
    { term: "Inertia", definition: "Resistance to change in motion." },
    { term: "Net force", definition: "Vector sum of all forces." },
    {
      term: "Free-body diagram",
      definition: "Diagram of all forces on an object.",
    },
    { term: "Normal force", definition: "Force perpendicular to surface." },
    { term: "Applied force", definition: "External force on object." },
    { term: "Weight", definition: "Gravitational force: mg." },
    { term: "Equilibrium", definition: "Net force = 0, no acceleration." },
  ],
  concepts: [
    {
      id: "phys11-u7-newton1",
      title: "Newton's first law (inertia)",
      skill: "Apply inertia to explain motion and rest.",
      lesson: {
        sections: [
          {
            heading: "Newton's first law",
            body: "An object at rest stays at rest; an object in motion stays in motion at constant velocity unless acted upon by a net external force.\n\n**Inertia**: resistance to change in motion — depends on mass.",
          },
          {
            heading: "Examples",
            body: "- Passenger lurches forward when car brakes (body wants to continue).\n- Tablecloth pulled quickly — dishes stay due to inertia.\n- Seatbelt needed because body continues forward in crash.",
          },
        ],
        keyFormulas: [
          { name: "Inertia", statement: "Resistance to change in motion" },
          { name: "Mass", statement: "Measure of inertia" },
        ],
        workedExample: {
          problem:
            "Why does a passenger lurch forward when a car brakes suddenly?",
          solution:
            "Body wants to continue at original velocity (inertia); seatbelt provides force to slow it with car.",
        },
      },
      questions: [
        {
          id: "phys11-u7-newton1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is inertia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force of gravity" },
              { id: "b", text: "Resistance to change in motion" },
              { id: "c", text: "Speed of object" },
              { id: "d", text: "Friction force" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inertia",
                statement: "Resistance to change in motion.",
              },
            ],
            steps: [
              {
                reasoning: "Inertia = resistance to change.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Resistance to change in motion",
            commonErrors: ["Force of gravity."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u7-newton1-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does Newton's first law state?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Newton's 1st",
                statement:
                  "Object stays at rest or constant velocity unless net force.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rest → stays at rest; motion → stays at constant velocity.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Requires net external force to change.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "This is inertia.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Object maintains state unless net force acts.",
            commonErrors: ["Forgetting constant velocity."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u7-newton1-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do you feel pushed back when a car accelerates forward?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Inertia",
                statement: "Body wants to stay at rest.",
              },
            ],
            steps: [
              {
                reasoning: "Car accelerates forward; seat pushes you forward.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Your body wants to stay at rest (inertia).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Seat exerts force; you feel pushed back relative to car.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: inertia — body resists acceleration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Body's inertia resists forward acceleration.",
            commonErrors: ["Not explaining inertia."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u7-newton1-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyze situations: book on table, passenger in braking car, ball on string.",
          parts: [
            {
              label: "a",
              prompt: "Book on table — why doesn't it move?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Passenger lurches forward — why?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Ball on string — why does it move in circle?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Newton's 1st",
                statement: "Net force needed for acceleration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weight down balanced by normal force up; no net force → stays at rest.",
                marks: 3,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Body continues at original velocity (inertia); seatbelt provides force.",
                marks: 3,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "String tension provides centripetal force; direction changes → acceleration.",
                marks: 3,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Without tension, ball would move straight.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) balanced forces (b) inertia (c) centripetal force.",
            commonErrors: ["Not identifying forces."],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u7-newton2",
      title: "Newton's second law deep dive",
      skill: "Apply F=ma to solve multi-force problems.",
      lesson: {
        sections: [
          {
            heading: "Newton's second law",
            body: "$$\\vec{F}_{net} = m\\vec{a}$$\n\nNet force = mass × acceleration. Vector equation — direction matters.",
          },
          {
            heading: "Solving multi-force problems",
            body: "1. Draw free-body diagram.\n2. Resolve forces into components.\n3. Apply $F_{net} = ma$ in each direction.\n4. Solve for unknowns.",
          },
        ],
        keyFormulas: [
          { name: "Newton's 2nd", statement: "$\\vec{F}_{net} = m\\vec{a}$" },
          { name: "Components", statement: "$F_x = ma_x$; $F_y = ma_y$" },
        ],
        workedExample: {
          problem: "10 kg box pulled with 50 N at 30° above horizontal. a?",
          solution: "$F_x = 50\\cos30° = 43.3$ N; $a = 43.3/10 = 4.33$ m/s².",
        },
      },
      questions: [
        {
          id: "phys11-u7-newton2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Newton's second law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F = ma" },
              { id: "b", text: "F = mv" },
              { id: "c", text: "F = m/a" },
              { id: "d", text: "F = a/m" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Newton's 2nd",
                statement: "$F_{net} = ma$.",
              },
            ],
            steps: [{ reasoning: "F = ma.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** F = ma",
            commonErrors: ["Wrong formula."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u7-newton2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "5 kg object accelerates at 3 m/s². Net force?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "F = ma", statement: "F = 5×3" },
            ],
            steps: [
              { reasoning: "$F = 5 \\times 3$.", marks: 1, markCode: "M" },
              { reasoning: "= 15 N.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 N.",
            commonErrors: ["Wrong calculation."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u7-newton2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two forces on object: 30 N right, 10 N left. Mass 4 kg. Acceleration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Net force",
                statement: "F_net = 30−10 = 20 N.",
              },
            ],
            steps: [
              {
                reasoning: "$F_{net} = 30 - 10 = 20$ N right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$a = 20/4 = 5$ m/s² right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Direction matters — right.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: 5 m/s² right.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 m/s² right.",
            commonErrors: ["Adding instead of subtracting."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "phys11-u7-newton2-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Box 20 kg on horizontal surface. Applied force 100 N at 30° above horizontal. Friction 20 N.",
          parts: [
            {
              label: "a",
              prompt: "Horizontal component of applied force?",
              marks: 2,
            },
            { label: "b", prompt: "Net horizontal force?", marks: 2 },
            { label: "c", prompt: "Acceleration?", marks: 3 },
            { label: "d", prompt: "Vertical forces?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Multi-force",
                statement: "Resolve into components.",
              },
            ],
            steps: [
              {
                reasoning: "$F_x = 100\\cos30° = 86.6$ N.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$F_{net} = 86.6 - 20 = 66.6$ N.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$a = 66.6/20 = 3.33$ m/s².",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 3.33 m/s².",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Vertical: N + F_y = mg; N = 20(9.8) − 100sin30° = 196−50 = 146 N.",
                marks: 3,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) 86.6N (b) 66.6N (c) 3.33 m/s² (d) N=146N.",
            commonErrors: ["Forgetting vertical component."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u7-systems",
      title: "Systems of forces and free-body diagrams",
      skill:
        "Construct and analyze free-body diagrams for multi-object systems.",
      lesson: {
        sections: [
          {
            heading: "Free-body diagrams",
            body: "Draw box for object; arrows for each force from center.\n- Weight: down (mg).\n- Normal: perpendicular to surface.\n- Friction: along surface opposing motion.\n- Applied: in direction of push/pull.",
          },
          {
            heading: "Connected objects",
            body: "For objects connected by strings: same acceleration, tension internal.\n- Analyze system as whole for external forces.\n- Analyze individually for internal forces.",
          },
        ],
        keyFormulas: [
          { name: "FBD", statement: "All forces on one object" },
          { name: "System", statement: "All objects together" },
          {
            name: "Tension",
            statement: "Internal force between connected objects",
          },
        ],
        workedExample: {
          problem:
            "Two blocks connected by string, 10 kg total, pulled with 50 N. Acceleration?",
          solution: "Treat as system: a = 50/10 = 5 m/s².",
        },
      },
      questions: [
        {
          id: "phys11-u7-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a free-body diagram?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diagram of object only" },
              { id: "b", text: "Diagram of all forces on object" },
              { id: "c", text: "Graph of motion" },
              { id: "d", text: "Picture of forces" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FBD",
                statement: "All forces on one object.",
              },
            ],
            steps: [
              {
                reasoning: "FBD shows all forces acting on object.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Diagram of all forces on object",
            commonErrors: ["Object only."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u7-systems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Book on table: weight 50 N down, normal 50 N up. Net force?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Equilibrium",
                statement: "Net force = 0.",
              },
            ],
            steps: [
              {
                reasoning: "Forces: 50 N down, 50 N up.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$F_{net} = 50 - 50 = 0$ N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 0 N (equilibrium).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0 N.",
            commonErrors: ["Not subtracting."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u7-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two blocks: 3 kg and 7 kg connected by string, pulled with 50 N. Acceleration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "System",
                statement: "Treat as one object: total mass 10 kg.",
              },
            ],
            steps: [
              {
                reasoning: "Total mass = 3 + 7 = 10 kg.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$a = 50/10 = 5$ m/s².", marks: 1, markCode: "M" },
              {
                reasoning: "Both blocks accelerate together.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: 5 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 m/s².",
            commonErrors: ["Wrong total mass."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "phys11-u7-systems-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Block 5 kg on frictionless surface, pulled by 40 N. Another 3 kg block hangs over pulley connected by string.",
          parts: [
            { label: "a", prompt: "Draw FBD for 5 kg block?", marks: 3 },
            { label: "b", prompt: "Draw FBD for 3 kg block?", marks: 3 },
            { label: "c", prompt: "System acceleration?", marks: 2 },
            { label: "d", prompt: "Tension in string?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Connected systems",
                statement: "Same acceleration, tension internal.",
              },
            ],
            steps: [
              {
                reasoning: "5kg: tension right, weight down, normal up.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "3kg: tension up, weight down (29.4 N).",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$a = (3 \\times 9.8)/(5+3) = 29.4/8 = 3.675$ m/s².",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "T = m·a = 5 × 3.675 = 18.4 N (or 29.4 − 3×3.675 = 18.4 N).",
                marks: 2,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) T,N,mg (b) T,mg (c) 3.675 m/s² (d) 18.4 N.",
            commonErrors: ["Different accelerations."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u7-applications",
      title: "Newton's laws applications",
      skill: "Apply Newton's laws to real-world situations.",
      lesson: {
        sections: [
          {
            heading: "Everyday applications",
            body: "- **Elevator**: apparent weight changes with acceleration.\n- **Friction**: enables walking, driving, stopping.\n- **Tension**: in ropes, cables, strings.\n- **Normal force**: perpendicular to surfaces.",
          },
          {
            heading: "Apparent weight",
            body: "Elevator accelerating up: N = m(g+a) → heavier.\nElevator accelerating down: N = m(g−a) → lighter.\nFree fall: N = 0 → weightlessness.",
          },
        ],
        keyFormulas: [
          { name: "Apparent weight", statement: "$N = m(g \\pm a)$" },
          { name: "Elevator up", statement: "N = m(g+a)" },
          { name: "Elevator down", statement: "N = m(g−a)" },
        ],
        workedExample: {
          problem:
            "60 kg person in elevator accelerating up at 2 m/s². Scale reading?",
          solution:
            "$N = 60(9.8+2) = 60 \\times 11.8 = 708$ N (feels heavier).",
        },
      },
      questions: [
        {
          id: "phys11-u7-apps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do you feel heavier in an elevator accelerating upward?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass increased" },
              { id: "b", text: "Normal force increased" },
              { id: "c", text: "Gravity increased" },
              { id: "d", text: "Friction increased" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Apparent weight",
                statement: "N = m(g+a) > mg.",
              },
            ],
            steps: [
              {
                reasoning: "Accelerating up → normal force > weight → heavier.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Normal force increased",
            commonErrors: ["Mass increased."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u7-apps-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What happens to apparent weight in free fall?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Free fall",
                statement: "N = 0 → weightlessness.",
              },
            ],
            steps: [
              {
                reasoning: "Free fall: a = g downward.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "$N = m(g - g) = 0$.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: weightless (N=0).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Weightless — N = 0.",
            commonErrors: ["Still have weight."],
            examinerNote: "R1, M1, A1.",
          },
        },
        {
          id: "phys11-u7-apps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do astronauts feel weightless on space station orbiting Earth?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Orbital motion",
                statement: "Station and astronauts in free fall.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Station in orbit: gravity provides centripetal force.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Everything falls toward Earth at same rate.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "No normal force → weightless sensation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: free fall around Earth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Free fall — no normal force.",
            commonErrors: ["No gravity."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u7-apps-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Elevator: 80 kg person, elevator accelerates up at 1.5 m/s², then down at 2 m/s², then constant velocity.",
          parts: [
            { label: "a", prompt: "Scale reading accelerating up?", marks: 3 },
            {
              label: "b",
              prompt: "Scale reading accelerating down?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Scale reading constant velocity?",
              marks: 2,
            },
            { label: "d", prompt: "Explain weightlessness?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Apparent weight",
                statement: "$N = m(g \\pm a)$",
              },
            ],
            steps: [
              {
                reasoning: "$N = 80(9.8+1.5) = 80 \\times 11.3 = 904$ N.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 904 N (heavier).",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$N = 80(9.8-2) = 80 \\times 7.8 = 624$ N.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 624 N (lighter).",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$N = 80 \\times 9.8 = 784$ N (normal weight).",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Weightless when N=0 (free fall).",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer: "(a) 904N (b) 624N (c) 784N (d) free fall.",
            commonErrors: ["Wrong sign for acceleration."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u7-friction",
      title: "Friction and everyday forces",
      skill: "Analyze friction and its role in motion.",
      lesson: {
        sections: [
          {
            heading: "Friction",
            body: "- **Static friction**: prevents motion, up to maximum.\n- **Kinetic friction**: opposes sliding motion.\n- $f = \\mu N$ where μ = coefficient of friction.",
          },
          {
            heading: "Friction applications",
            body: "- Walking: friction pushes foot forward.\n- Driving: friction between tires and road.\n- Braking: friction converts kinetic energy to heat.\n- Without friction: can't walk, drive, or stop.",
          },
        ],
        keyFormulas: [
          { name: "Friction", statement: "$f = \\mu N$" },
          { name: "Static", statement: "Up to $\\mu_s N$" },
          { name: "Kinetic", statement: "$\\mu_k N$" },
        ],
        workedExample: {
          problem: "10 kg box, μ=0.3, N=98 N. Friction force?",
          solution: "$f = 0.3 \\times 98 = 29.4$ N.",
        },
      },
      questions: [
        {
          id: "phys11-u7-friction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does friction do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Creates motion" },
              { id: "b", text: "Opposes motion" },
              { id: "c", text: "Increases speed" },
              { id: "d", text: "Only acts on liquids" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Friction",
                statement: "Opposes relative motion.",
              },
            ],
            steps: [
              {
                reasoning: "Friction opposes motion between surfaces.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Opposes motion",
            commonErrors: ["Creates motion."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u7-friction-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What's the difference between static and kinetic friction?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Friction types",
                statement: "Static > kinetic; static prevents motion.",
              },
            ],
            steps: [
              {
                reasoning: "Static: prevents motion, up to max.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Kinetic: opposes sliding once moving.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Static coefficient usually > kinetic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Static prevents motion; kinetic opposes sliding.",
            commonErrors: ["Same thing."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u7-friction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it harder to start moving an object than to keep it moving?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Static friction",
                statement: "Static > kinetic friction.",
              },
            ],
            steps: [
              {
                reasoning: "Starting requires overcoming static friction.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Static friction coefficient > kinetic.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Once moving, only kinetic friction resists.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: static friction > kinetic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Static friction is greater than kinetic.",
            commonErrors: ["Not comparing coefficients."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u7-friction-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Box 15 kg on surface, μ_k = 0.4, pushed with 100 N horizontally.",
          parts: [
            { label: "a", prompt: "Normal force?", marks: 2 },
            { label: "b", prompt: "Kinetic friction?", marks: 3 },
            { label: "c", prompt: "Net force?", marks: 2 },
            { label: "d", prompt: "Acceleration?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Friction",
                statement: "$f = \\mu N$; $F_{net} = ma$.",
              },
            ],
            steps: [
              {
                reasoning: "$N = mg = 15 \\times 9.8 = 147$ N.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$f = 0.4 \\times 147 = 58.8$ N.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 58.8 N.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$F_{net} = 100 - 58.8 = 41.2$ N.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$a = 41.2/15 = 2.75$ m/s².",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 2.75 m/s².",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 147N (b) 58.8N (c) 41.2N (d) 2.75 m/s².",
            commonErrors: ["Wrong friction direction."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
