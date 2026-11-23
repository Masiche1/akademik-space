import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "s8-u5-lesson-5-1",
  code: "5-1",
  title: "Speed, Velocity and Acceleration",
  goal: "I CAN calculate speed and velocity, describe acceleration, and distinguish between distance and displacement.",
  standards: [
    "MS-PS2-1",
    "MS-PS2-2",
    "SEP: Developing and Using Models",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Speed",
      definition: "The rate of distance traveled: distance divided by time.",
    },
    {
      term: "Velocity",
      definition: "Speed with direction; displacement divided by time.",
    },
    { term: "Acceleration", definition: "The rate of change of velocity." },
    { term: "Distance", definition: "Total path traveled; scalar quantity." },
    {
      term: "Displacement",
      definition: "Change in position from start to end; vector quantity.",
    },
    {
      term: "Scalar",
      definition: "Quantity with magnitude only (no direction).",
    },
    { term: "Vector", definition: "Quantity with magnitude and direction." },
  ],
  concepts: [
    {
      id: "s8-u5-speed-velocity",
      title: "Speed and velocity",
      skill:
        "Calculate speed and velocity and distinguish between distance and displacement.",
      lesson: {
        sections: [
          {
            heading: "Speed vs velocity",
            body: "- **Speed** = distance ÷ time. It's a scalar (no direction).\n- **Velocity** = displacement ÷ time. It's a vector (has direction).\n\nSpeed tells how fast; velocity tells how fast and in which direction. Average velocity includes direction changes; instantaneous velocity is at a moment.",
          },
          {
            heading: "Distance vs displacement",
            body: "- **Distance**: total path length traveled (scalar).\n- **Displacement**: straight-line change in position from start to finish (vector).\n\nExample: walking around a block — distance = 400 m; displacement = 0 m (back to start).",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$v = \\frac{d}{t}$ — distance ÷ time." },
          {
            name: "Velocity",
            statement:
              "$\\vec{v} = \\frac{\\Delta x}{t}$ — displacement ÷ time.",
          },
          {
            name: "Distance vs displacement",
            statement: "Distance = path length; displacement = net change.",
          },
        ],
        workedExample: {
          problem: "A car travels 150 km in 2 hours. Calculate its speed.",
          solution: "$v = \\frac{150}{2} = 75$ km/h.",
        },
      },
      questions: [
        {
          id: "s8-u5-speed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distance × time" },
              { id: "b", text: "Distance ÷ time" },
              { id: "c", text: "Time ÷ distance" },
              { id: "d", text: "Distance + time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Speed",
                statement: "$v = \\frac{d}{t}$",
              },
            ],
            steps: [
              {
                reasoning: "Speed = distance ÷ time.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Distance ÷ time.",
            commonErrors: ["Choosing (a): that's not speed."],
          },
        },
        {
          id: "s8-u5-speed-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A runner completes a 400 m lap in 50 seconds. Calculate their speed.",
          response: {
            type: "numeric",
            parts: [{ label: "Speed", answer: 8, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Speed",
                statement: "$v = \\frac{d}{t}$",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\frac{400}{50}$.",
                working: "8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 8 m/s.",
                working: "8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8 m/s",
            commonErrors: ["Using wrong units or dividing incorrectly."],
          },
        },
        {
          id: "s8-u5-speed-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A person walks 3 km east, then 4 km north. Calculate distance and displacement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Distance vs displacement",
                statement: "Distance = path; displacement = net change.",
              },
            ],
            steps: [
              {
                reasoning: "Distance = 3 + 4 = 7 km (total path).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Displacement = $\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ km.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Direction: northeast (angle $\\tan^{-1}(4/3) \\approx 53°$ north of east).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Distance = 7 km; displacement = 5 km northeast.",
            commonErrors: ["Confusing distance and displacement."],
          },
        },
        {
          id: "s8-u5-speed-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cyclist rides 20 km in 1 hour, then 10 km in 0.5 hours.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the speed for each leg.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the average speed for the whole trip.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "If the cyclist returns the same route at 30 km/h, how long does it take?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Speed",
                statement: "$v = \\frac{d}{t}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Leg 1: $20/1 = 20$ km/h; Leg 2: $10/0.5 = 20$ km/h.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Total distance = 30 km; total time = 1.5 h; average speed = $30/1.5 = 20$ km/h.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Return distance = 30 km; time = $30/30 = 1$ hour.",
                marks: 3,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 20, 20 km/h (b) 20 km/h (c) 1 hour.",
            commonErrors: [
              "Averaging speeds instead of total distance/total time.",
            ],
          },
        },
      ],
    },
    {
      id: "s8-u5-acceleration",
      title: "Acceleration and Motion Graphs",
      skill:
        "Calculate acceleration and interpret distance-time and velocity-time graphs.",
      lesson: {
        sections: [
          {
            heading: "Acceleration",
            body: "**Acceleration** is the rate of change of velocity: $a = \\frac{\\Delta v}{\\Delta t}$. Units: m/s².\n\n- Positive acceleration: speeding up or changing direction.\n- Negative acceleration (deceleration): slowing down.\n- Zero acceleration: constant velocity.",
          },
          {
            heading: "Motion graphs",
            body: "- **Distance-time graph**: slope = speed. Steeper = faster; horizontal = stationary.\n- **Velocity-time graph**: slope = acceleration; area under curve = displacement.\n\nThese graphs let you analyze motion without equations.",
          },
        ],
        keyFormulas: [
          {
            name: "Acceleration",
            statement:
              "$a = \\frac{\\Delta v}{\\Delta t}$ — change in velocity ÷ time.",
          },
          { name: "Distance-time graph", statement: "Slope = speed." },
          {
            name: "Velocity-time graph",
            statement: "Slope = acceleration; area = displacement.",
          },
        ],
        workedExample: {
          problem:
            "A car accelerates from 10 m/s to 30 m/s in 5 seconds. Find acceleration.",
          solution: "$a = \\frac{30 - 10}{5} = \\frac{20}{5} = 4$ m/s².",
        },
      },
      questions: [
        {
          id: "s8-u5-accel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for acceleration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Velocity × time" },
              { id: "b", text: "Change in velocity ÷ time" },
              { id: "c", text: "Distance ÷ time" },
              { id: "d", text: "Velocity ÷ distance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Acceleration",
                statement: "$a = \\frac{\\Delta v}{\\Delta t}$",
              },
            ],
            steps: [
              {
                reasoning: "Acceleration = change in velocity ÷ time.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Change in velocity ÷ time.",
            commonErrors: ["Choosing (c): that's speed."],
          },
        },
        {
          id: "s8-u5-accel-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car goes from rest to 20 m/s in 4 seconds. Calculate acceleration.",
          response: {
            type: "numeric",
            parts: [{ label: "Acceleration", answer: 5, unit: "m/s²" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Acceleration",
                statement: "$a = \\frac{\\Delta v}{\\Delta t}$",
              },
            ],
            steps: [
              {
                reasoning: "$a = \\frac{20 - 0}{4}$.",
                working: "5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 5 m/s².",
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5 m/s²",
            commonErrors: ["Forgetting initial velocity is 0."],
          },
        },
        {
          id: "s8-u5-accel-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Interpret a distance-time graph: the line is horizontal for 3 seconds, then slopes upward.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Distance-time graph",
                statement: "Slope = speed; horizontal = stationary.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Horizontal line = speed 0 (object stationary) for 3 seconds.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Upward slope = constant positive speed after the stop.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Steeper slope = faster speed; shallower = slower.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "The object stopped, then moved at constant speed.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Stationary for 3 s, then constant speed.",
            commonErrors: ["Reading the graph backwards."],
          },
        },
        {
          id: "s8-u5-accel-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A velocity-time graph shows: velocity increases from 0 to 10 m/s over 2 s, stays constant for 3 s, then decreases to 0 over 2 s.",
          parts: [
            {
              label: "a",
              prompt: "What is the acceleration in each phase?",
              marks: 3,
            },
            { label: "b", prompt: "What is the total displacement?", marks: 3 },
            { label: "c", prompt: "Describe the motion in words.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Velocity-time graph",
                statement: "Slope = acceleration; area = displacement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Phase 1: $a = 10/2 = 5$ m/s²; Phase 2: $a = 0$; Phase 3: $a = -10/2 = -5$ m/s².",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Area: triangle 1 ($\\frac{1}{2} \\times 2 \\times 10 = 10$) + rectangle ($3 \\times 10 = 30$) + triangle 2 ($\\frac{1}{2} \\times 2 \\times 10 = 10$) = 50 m.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Accelerates for 2 s, constant speed for 3 s, decelerates for 2 s.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) 5, 0, -5 m/s² (b) 50 m (c) Accelerate → constant → decelerate.",
            commonErrors: ["Not calculating area correctly."],
          },
        },
      ],
    },
    {
      id: "s8-u5-newton-laws",
      title: "Newton's Laws of Motion",
      skill: "Apply Newton's three laws to explain motion and forces.",
      lesson: {
        sections: [
          {
            heading: "Newton's first law",
            body: "**Law of inertia**: An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a net force.\n\nInertia depends on mass — more massive objects resist changes in motion more.",
          },
          {
            heading: "Newton's second and third laws",
            body: "- **Second law**: $F = ma$ — force equals mass times acceleration. More force or less mass = more acceleration.\n- **Third law**: For every action, there is an equal and opposite reaction. Forces come in pairs acting on different objects.",
          },
        ],
        keyFormulas: [
          {
            name: "First law",
            statement: "Object stays in its state unless net force acts.",
          },
          { name: "Second law", statement: "$F = ma$" },
          {
            name: "Third law",
            statement: "Every action has equal and opposite reaction.",
          },
        ],
        workedExample: {
          problem: "A 10 kg box is pushed with 50 N. What is its acceleration?",
          solution: "$a = \\frac{F}{m} = \\frac{50}{10} = 5$ m/s².",
        },
      },
      questions: [
        {
          id: "s8-u5-newton-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which law states F = ma?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First law" },
              { id: "b", text: "Second law" },
              { id: "c", text: "Third law" },
              { id: "d", text: "Law of gravity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Newton's second law",
                statement: "$F = ma$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Newton's second law relates force, mass and acceleration.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Second law.",
            commonErrors: ["Confusing laws."],
          },
        },
        {
          id: "s8-u5-newton-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain Newton's first law using a seatbelt example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Inertia",
                statement: "Objects resist changes in motion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When a car stops suddenly, passengers continue moving forward (inertia).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The seatbelt provides a force to stop the passenger with the car.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Without the seatbelt, the passenger hits the dashboard.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Inertia keeps passengers moving; seatbelt provides stopping force.",
            commonErrors: [
              "Saying passengers are thrown forward; they continue moving.",
            ],
          },
        },
        {
          id: "s8-u5-newton-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rocket launches into space. Explain using Newton's third law.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Newton's third law",
                statement: "Every action has equal and opposite reaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rocket engines push exhaust gases downward (action).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Exhaust gases push rocket upward (reaction).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The forces are equal and opposite but act on different objects.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This is why rockets work in space — no air needed.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Exhaust pushed down → rocket pushed up (equal and opposite).",
            commonErrors: ["Saying rocket pushes against air."],
          },
        },
        {
          id: "s8-u5-newton-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 5 kg object is pushed with 20 N on a frictionless surface.",
          parts: [
            { label: "a", prompt: "Calculate its acceleration.", marks: 2 },
            {
              label: "b",
              prompt: "What force is needed to accelerate it at 10 m/s²?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If a 10 kg object is pushed with the same 20 N, what's its acceleration?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain the relationship between mass and acceleration.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Newton's second law",
                statement: "$F = ma$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$a = F/m = 20/5 = 4$ m/s².",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$F = ma = 5 \\times 10 = 50$ N.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$a = 20/10 = 2$ m/s².",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "For same force, more mass = less acceleration (inverse relationship).",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 4 m/s² (b) 50 N (c) 2 m/s² (d) More mass = less acceleration.",
            commonErrors: ["Miscalculating F = ma."],
          },
        },
      ],
    },
    {
      id: "s8-u5-friction-gravity",
      title: "Friction and Gravity",
      skill: "Explain friction, its effects, and how gravity acts on objects.",
      lesson: {
        sections: [
          {
            heading: "Friction",
            body: "**Friction** is a force that opposes motion between surfaces in contact.\n\n- **Static friction**: prevents motion from starting.\n- **Kinetic friction**: opposes motion once started.\n- Friction depends on surface roughness and normal force.\n\nFriction can be useful (walking, brakes) or wasteful (engine wear, heat).",
          },
          {
            heading: "Gravity",
            body: "**Gravity** is the force of attraction between masses. Earth's gravity pulls objects toward its center with acceleration $g \\approx 9.8$ m/s².\n\n- Gravity affects weight but not mass.\n- Gravity decreases with distance but never reaches zero.\n- Gravity holds planets in orbit and objects on Earth's surface.",
          },
        ],
        keyFormulas: [
          {
            name: "Friction",
            statement:
              "Opposes motion between surfaces; depends on roughness and normal force.",
          },
          {
            name: "Gravity",
            statement:
              "Force of attraction between masses; $g \\approx 9.8$ m/s² on Earth.",
          },
          {
            name: "Weight vs mass",
            statement: "Weight = mass × gravity; mass is constant.",
          },
        ],
        workedExample: {
          problem: "Why do objects fall at the same rate regardless of mass?",
          solution:
            "Gravity accelerates all objects equally ($g = 9.8$ m/s²); mass cancels out in $a = F/m = mg/m = g$.",
        },
      },
      questions: [
        {
          id: "s8-u5-friction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does friction do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Causes motion" },
              { id: "b", text: "Opposes motion between surfaces" },
              { id: "c", text: "Creates gravity" },
              { id: "d", text: "Eliminates forces" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Friction",
                statement: "Opposes motion between surfaces.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Friction opposes relative motion between surfaces in contact.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Opposes motion between surfaces.",
            commonErrors: ["Saying friction causes motion."],
          },
        },
        {
          id: "s8-u5-friction-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a book slides off a tilted table.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Friction and slope",
                statement:
                  "Steeper slope = less friction needed to overcome gravity component.",
              },
            ],
            steps: [
              {
                reasoning: "Gravity pulls the book down the slope.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Friction opposes this motion.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "As the table tilts more, the gravity component along the surface increases until it exceeds friction.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Gravity component exceeds friction as slope increases → book slides.",
            commonErrors: ["Saying friction increases with slope."],
          },
        },
        {
          id: "s8-u5-friction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why astronauts are weightless in space but still have mass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Weight vs mass",
                statement: "Weight = mass × gravity; mass is constant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mass is the amount of matter — constant everywhere.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Weight is the force of gravity on that mass.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "In space, gravity is much weaker, so weight approaches zero.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Astronauts are 'weightless' but still have mass and inertia.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Mass constant; weight = mass × gravity → near zero in space.",
            commonErrors: ["Saying mass becomes zero in space."],
          },
        },
        {
          id: "s8-u5-friction-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 10 kg box is pushed with 100 N on a surface with 30 N friction.",
          parts: [
            { label: "a", prompt: "What is the net force?", marks: 2 },
            { label: "b", prompt: "What is the acceleration?", marks: 2 },
            {
              label: "c",
              prompt:
                "If friction is reduced to 10 N, what's the new acceleration?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why is friction both useful and wasteful?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net force",
                statement: "$F_{net} = F_{applied} - F_{friction}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$F_{net} = 100 - 30 = 70$ N.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$a = 70/10 = 7$ m/s².",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$F_{net} = 100 - 10 = 90$ N; $a = 90/10 = 9$ m/s².",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Useful: walking, braking. Wasteful: heat, wear on machinery.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 70 N (b) 7 m/s² (c) 9 m/s² (d) Useful for grip/braking, wasteful as heat/wear.",
            commonErrors: ["Ignoring friction in net force."],
          },
        },
      ],
    },
  ],
};
