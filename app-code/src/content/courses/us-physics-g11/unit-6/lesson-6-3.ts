import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "phys11-u6-lesson-6-3",
  code: "6-3",
  title: "Circular Motion and Kinematics Applications",
  goal: "I CAN analyze uniform circular motion and apply kinematics to real-world problems.",
  standards: [
    "HS-PS2-1",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Uniform circular motion",
      definition: "Constant speed circular motion.",
    },
    {
      term: "Centripetal acceleration",
      definition: "Acceleration toward center of circle.",
    },
    {
      term: "Centripetal force",
      definition: "Net force causing centripetal acceleration.",
    },
    { term: "Period", definition: "Time for one complete revolution." },
    { term: "Frequency", definition: "Number of revolutions per second." },
    { term: "Angular velocity", definition: "Rate of angular change (rad/s)." },
    { term: "Tangent", definition: "Direction perpendicular to radius." },
  ],
  concepts: [
    {
      id: "phys11-u6-circular",
      title: "Uniform circular motion",
      skill: "Calculate centripetal acceleration and force in circular motion.",
      lesson: {
        sections: [
          {
            heading: "Circular motion quantities",
            body: "- Speed constant but velocity changes direction → acceleration exists.\n- $a_c = \\frac{v^2}{r} = \\omega^2 r$\n- $F_c = \\frac{mv^2}{r}$\n\nDirection: always toward center.",
          },
          {
            heading: "Period and frequency",
            body: "$T = \\frac{2\\pi r}{v}$; $f = \\frac{1}{T}$; $\\omega = \\frac{2\\pi}{T}$",
          },
        ],
        keyFormulas: [
          { name: "Centripetal acceleration", statement: "$a_c = v^2/r$" },
          { name: "Centripetal force", statement: "$F_c = mv^2/r$" },
          { name: "Period", statement: "$T = 2\\pi r/v$" },
        ],
        workedExample: {
          problem: "Car turns radius 50m at 20 m/s. Centripetal acceleration?",
          solution: "$a_c = 20^2/50 = 400/50 = 8$ m/s².",
        },
      },
      questions: [
        {
          id: "phys11-u6-circular-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes centripetal acceleration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed increase" },
              { id: "b", text: "Direction change" },
              { id: "c", text: "Mass increase" },
              { id: "d", text: "Friction only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Centripetal",
                statement: "Direction change → acceleration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Velocity changes direction → acceleration toward center.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Direction change",
            commonErrors: ["Speed increase."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u6-circular-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Object in circle radius 10m at 5 m/s. Centripetal acceleration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Centripetal",
                statement: "$a_c = v^2/r$",
              },
            ],
            steps: [
              { reasoning: "$a_c = 5^2/10 = 25/10$.", marks: 1, markCode: "M" },
              { reasoning: "= 2.5 m/s².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.5 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.5 m/s².",
            commonErrors: ["Wrong formula."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u6-circular-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does a car need friction to turn?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Centripetal force",
                statement: "Friction provides centripetal force.",
              },
            ],
            steps: [
              {
                reasoning: "Turning requires net force toward center.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Friction between tires and road provides this force.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "No friction → no centripetal force → straight line.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: friction = centripetal force.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Friction provides centripetal force.",
            commonErrors: ["Not identifying force."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u6-circular-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Car mass 1000 kg turns radius 100m at 20 m/s.",
          parts: [
            { label: "a", prompt: "Centripetal acceleration?", marks: 2 },
            { label: "b", prompt: "Centripetal force?", marks: 3 },
            { label: "c", prompt: "If radius doubles, new F?", marks: 2 },
            { label: "d", prompt: "If speed doubles, new F?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circular motion",
                statement: "$F_c = mv^2/r$",
              },
            ],
            steps: [
              {
                reasoning: "$a_c = 20^2/100 = 4$ m/s².",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$F_c = 1000 \\times 4 = 4000$ N.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 4000 N.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$F \\propto 1/r$: r=200 → F = 2000 N.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$F \\propto v^2$: v=40 → F = 16000 N.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 16000 N.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 4 m/s² (b) 4000N (c) 2000N (d) 16000N.",
            commonErrors: ["Linear not quadratic for v."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u6-applications",
      title: "Kinematics applications",
      skill: "Apply kinematics to real-world scenarios.",
      lesson: {
        sections: [
          {
            heading: "Real-world applications",
            body: "- **Braking distance**: reaction time + stopping distance.\n- **Projectile motion**: sports, engineering.\n- **Circular motion**: vehicles, amusement rides.\n- **Free fall**: parachuting, safety calculations.",
          },
          {
            heading: "Problem-solving approach",
            body: "1. Identify motion type (1D, 2D, circular).\n2. Choose appropriate equations.\n3. Account for real-world factors (friction, air resistance).\n4. Verify reasonableness.",
          },
        ],
        keyFormulas: [
          {
            name: "Braking distance",
            statement: "Reaction distance + stopping distance",
          },
          { name: "Stopping distance", statement: "$d = v^2/2a$" },
          { name: "Safety", statement: "Design for worst-case scenarios" },
        ],
        workedExample: {
          problem:
            "Car at 30 m/s, reaction time 0.5s, decel 5 m/s². Total stopping distance?",
          solution: "Reaction: 15m + stopping: 90m = 105m.",
        },
      },
      questions: [
        {
          id: "phys11-u6-apps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What affects braking distance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only speed" },
              { id: "b", text: "Speed, reaction time, friction" },
              { id: "c", text: "Only car mass" },
              { id: "d", text: "Weather only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Braking distance",
                statement: "Speed + reaction + friction.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple factors affect stopping.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Speed, reaction time, friction",
            commonErrors: ["Only speed."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u6-apps-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Car at 20 m/s, decelerates at 4 m/s². Stopping distance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Stopping distance",
                statement: "$d = v^2/2a$",
              },
            ],
            steps: [
              {
                reasoning: "$d = 20^2/(2 \\times 4) = 400/8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "= 50 m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 m.",
            commonErrors: ["Wrong formula."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u6-apps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is reaction distance important in braking?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Reaction distance",
                statement: "Distance traveled before brakes applied.",
              },
            ],
            steps: [
              {
                reasoning: "Driver needs time to react to hazard.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "During reaction time, car continues at speed.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Reaction distance = speed × reaction time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adds to stopping distance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Distance traveled during reaction time.",
            commonErrors: ["Not explaining mechanism."],
            examinerNote: "R2, M1, A1.",
          },
        },
        {
          id: "phys11-u6-apps-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Safety analysis: car at 30 m/s, reaction 0.7s, decel 6 m/s², wet road (decel 3 m/s²).",
          parts: [
            { label: "a", prompt: "Dry stopping distance?", marks: 3 },
            { label: "b", prompt: "Wet stopping distance?", marks: 3 },
            { label: "c", prompt: "Difference?", marks: 2 },
            { label: "d", prompt: "Safety implication?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Stopping distance",
                statement: "Reaction + v²/2a.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reaction: 30×0.7 = 21m; stopping: 900/12 = 75m; total = 96m.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Reaction: 21m; stopping: 900/6 = 150m; total = 171m.",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Difference: 171 − 96 = 75m.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "Wet road nearly doubles stopping distance → dangerous.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer: "(a) 96m (b) 171m (c) 75m (d) wet much worse.",
            commonErrors: ["Forgetting reaction distance."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u6-integration",
      title: "Integrated kinematics problems",
      skill: "Solve multi-concept kinematics problems.",
      lesson: {
        sections: [
          {
            heading: "Integration strategy",
            body: "1. Identify all motion types (1D, 2D, circular).\n2. Break into phases.\n3. Apply appropriate equations.\n4. Verify with multiple methods.",
          },
          {
            heading: "Common combinations",
            body: "- Projectile + free fall.\n- Circular + linear motion.\n- Relative + absolute motion.\n- Graph analysis + equations.",
          },
        ],
        keyFormulas: [
          { name: "Integration", statement: "Multiple concepts per problem" },
          { name: "Verification", statement: "Check with alternative method" },
        ],
        workedExample: {
          problem:
            "Ball thrown at 30° → projectile → lands → free fall analysis.",
          solution: "Separate horizontal/vertical → solve → verify.",
        },
      },
      questions: [
        {
          id: "phys11-u6-integ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the first step in solving a complex kinematics problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate immediately" },
              { id: "b", text: "Identify motion types" },
              { id: "c", text: "Guess answer" },
              { id: "d", text: "Check units" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Problem solving",
                statement: "Identify types first.",
              },
            ],
            steps: [
              {
                reasoning: "Identify motion types before calculating.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Identify motion types",
            commonErrors: ["Jumping to calculation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u6-integ-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ball thrown at 45°, v₀=14 m/s. Time of flight? (g=10)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Projectile",
                statement: "$t = 2v_{0y}/g$",
              },
            ],
            steps: [
              {
                reasoning: "$v_{0y} = 14 \\sin45° = 9.9$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$t = 2(9.9)/10 = 1.98$ s ≈ 2s.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: ~2 s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "~2 s.",
            commonErrors: ["Using v₀ directly."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u6-integ-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Car accelerates 0→20 m/s in 5s, then brakes to 0 in 4s. Total distance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Phases",
                statement: "Two acceleration phases.",
              },
            ],
            steps: [
              {
                reasoning: "Phase1: x = ½(4)(25) = 50m (a=4 m/s²).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Phase2: x = ½(5)(16) = 40m (a=-5 m/s²).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Total = 90m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90 m.",
            commonErrors: ["Missing a phase."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "phys11-u6-integ-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Ferris wheel: radius 10m, period 20s, mass 60kg.",
          parts: [
            { label: "a", prompt: "Angular velocity?", marks: 2 },
            { label: "b", prompt: "Speed?", marks: 2 },
            { label: "c", prompt: "Centripetal acceleration?", marks: 3 },
            { label: "d", prompt: "Centripetal force?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Circular motion",
                statement:
                  "$\\omega = 2\\pi/T$; $a_c = v^2/r$; $F_c = mv^2/r$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\omega = 2\\pi/20 = 0.314$ rad/s.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$v = \\omega r = 0.314 \\times 10 = 3.14$ m/s.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$a_c = 3.14^2/10 = 0.986$ m/s² ≈ 1 m/s².",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: ~1 m/s².",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "$F_c = 60 \\times 0.986 = 59.2$ N.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: ~59 N.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 0.314 (b) 3.14 (c) ~1 (d) ~59N.",
            commonErrors: ["Wrong formula chain."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
