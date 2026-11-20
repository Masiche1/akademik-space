import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cipup-u3-lesson-3-1",
  code: "3-1",
  title: "Mechanics: motion, forces and energy",
  goal: "I CAN solve problems in kinematics, dynamics, momentum and energy.",
  standards: ["Cambridge Pre-U Physics 9792", "Paper 1: Mechanics"],
  vocabulary: [
    {
      term: "Displacement",
      definition: "Distance in a specific direction — vector.",
    },
    {
      term: "Velocity",
      definition: "Rate of change of displacement — vector.",
    },
    {
      term: "Acceleration",
      definition: "Rate of change of velocity.",
    },
    {
      term: "Force",
      definition: "Push or pull — measured in newtons.",
    },
    {
      term: "Weight",
      definition: "Force of gravity on mass — W = mg.",
    },
    {
      term: "Momentum",
      definition: "Mass × velocity — p = mv.",
    },
    {
      term: "Impulse",
      definition: "Force × time = change in momentum.",
    },
    {
      term: "Kinetic energy",
      definition: "Energy of motion — ½mv².",
    },
    {
      term: "Potential energy",
      definition: "Stored energy — mgh.",
    },
    {
      term: "Work done",
      definition: "Force × distance — W = Fs.",
    },
    {
      term: "Power",
      definition: "Rate of doing work — P = W/t.",
    },
    {
      term: "Density",
      definition: "Mass per unit volume — ρ = m/V.",
    },
  ],
  concepts: [
    {
      id: "cipup-u3-kinematics",
      title: "Kinematics",
      skill:
        "Use SUVAT equations to solve motion problems with constant acceleration.",
      lesson: {
        sections: [
          {
            heading: "Describing motion",
            body: "**Displacement** (s): distance in direction — vector. **Velocity** (v): displacement/time — vector, m/s. **Acceleration** (a): Δv/Δt — vector, m/s². **Speed**: scalar magnitude of velocity. **Graphs**: s-t slope = v; v-t slope = a; v-t area = s.",
          },
          {
            heading: "SUVAT equations",
            body: "For constant acceleration: v = u + at; s = ut + ½at²; v² = u² + 2as; s = ½(u+v)t. **u** = initial velocity, **v** = final, **a** = acceleration, **s** = displacement, **t** = time. Choose the equation with the variables you know.",
          },
          {
            heading: "Free fall",
            body: "Objects in free fall accelerate at g ≈ 9.81 m/s² downward, ignoring air resistance. **Vertical motion**: use SUVAT with a = g. **Horizontal motion**: a = 0 — constant velocity.",
          },
        ],
        keyFormulas: [
          {
            name: "Velocity",
            statement: "v = Δs/Δt",
          },
          {
            name: "Acceleration",
            statement: "a = Δv/Δt",
          },
          {
            name: "v² = u² + 2as",
            statement: "No time needed",
          },
          {
            name: "s = ut + ½at²",
            statement: "Displacement with time",
          },
        ],
        workedExample: {
          problem:
            "Car accelerates from 10 m/s to 30 m/s in 4 s. Find acceleration and displacement.",
          solution: "a = (30-10)/4 = 5 m/s². s = ½(10+30)(4) = 80 m.",
        },
      },
      questions: [
        {
          id: "cipup-u3-kin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Velocity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rate of change of displacement" },
              { id: "b", text: "Rate of change of speed" },
              { id: "c", text: "Total distance" },
              { id: "d", text: "Time only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Velocity",
                statement: "Δdisplacement/Δt.",
              },
            ],
            steps: [{ reasoning: "v = Δs/Δt.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Δdisplacement/Δt.",
          },
        },
        {
          id: "cipup-u3-kin-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Acceleration is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rate of change of velocity" },
              { id: "b", text: "Rate of change of distance" },
              { id: "c", text: "Speed" },
              { id: "d", text: "Force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Acceleration", statement: "Δv/Δt." },
            ],
            steps: [{ reasoning: "a = Δv/Δt.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Δv/Δt.",
          },
        },
        {
          id: "cipup-u3-kin-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Displacement is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distance in a specific direction — vector" },
              { id: "b", text: "Total distance — scalar" },
              { id: "c", text: "Speed" },
              { id: "d", text: "Acceleration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Displacement",
                statement: "Vector distance.",
              },
            ],
            steps: [
              { reasoning: "Displacement = vector.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Vector distance.",
          },
        },
        {
          id: "cipup-u3-kin-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "SUVAT equation v = u + at relates:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Final velocity, initial velocity, acceleration, time",
              },
              { id: "b", text: "Only velocity" },
              { id: "c", text: "Only displacement" },
              { id: "d", text: "Force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "SUVAT", statement: "v = u + at." },
            ],
            steps: [{ reasoning: "v = u + at.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) v, u, a, t.",
          },
        },
        {
          id: "cipup-u3-kin-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "SUVAT equations apply when acceleration is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constant" },
              { id: "b", text: "Increasing" },
              { id: "c", text: "Decreasing" },
              { id: "d", text: "Zero only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SUVAT condition",
                statement: "Constant acceleration.",
              },
            ],
            steps: [
              { reasoning: "SUVAT needs constant a.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Constant.",
          },
        },
        {
          id: "cipup-u3-kin-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Acceleration due to gravity g ≈:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9.81 m/s²" },
              { id: "b", text: "3.7 m/s²" },
              { id: "c", text: "1.6 m/s²" },
              { id: "d", text: "10 m/s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "g", statement: "9.81 m/s²." },
            ],
            steps: [{ reasoning: "g = 9.81 m/s².", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 9.81 m/s².",
          },
        },
        {
          id: "cipup-u3-kin-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a velocity-time graph, the area under the curve gives:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Displacement" },
              { id: "b", text: "Acceleration" },
              { id: "c", text: "Force" },
              { id: "d", text: "Energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "v-t graph",
                statement: "Area = displacement.",
              },
            ],
            steps: [{ reasoning: "v-t area = s.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Displacement.",
          },
        },
        {
          id: "cipup-u3-kin-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a displacement-time graph, the gradient gives:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Velocity" },
              { id: "b", text: "Acceleration" },
              { id: "c", text: "Force" },
              { id: "d", text: "Energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "s-t graph",
                statement: "Gradient = velocity.",
              },
            ],
            steps: [
              { reasoning: "s-t gradient = v.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Velocity.",
          },
        },
        {
          id: "cipup-u3-kin-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a velocity-time graph, the gradient gives:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acceleration" },
              { id: "b", text: "Velocity" },
              { id: "c", text: "Force" },
              { id: "d", text: "Energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "v-t gradient",
                statement: "Gradient = acceleration.",
              },
            ],
            steps: [
              { reasoning: "v-t gradient = a.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Acceleration.",
          },
        },
        {
          id: "cipup-u3-kin-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In free fall, vertical acceleration is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "g downward" },
              { id: "b", text: "g upward" },
              { id: "c", text: "Zero" },
              { id: "d", text: "Variable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free fall",
                statement: "a = g down.",
              },
            ],
            steps: [
              { reasoning: "Free fall = g down.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) g downward.",
          },
        },
        {
          id: "cipup-u3-kin-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Speed is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Scalar magnitude of velocity" },
              { id: "b", text: "Vector" },
              { id: "c", text: "Always positive vector" },
              { id: "d", text: "Acceleration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Speed", statement: "Scalar |v|." },
            ],
            steps: [
              { reasoning: "Speed = |v| scalar.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Scalar magnitude.",
          },
        },
        {
          id: "cipup-u3-kin-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "SUVAT: s = ut + ½at² — which variable is missing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "v (final velocity)" },
              { id: "b", text: "u" },
              { id: "c", text: "a" },
              { id: "d", text: "t" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SUVAT variables",
                statement: "s=ut+½at² has u,a,t,s.",
              },
            ],
            steps: [{ reasoning: "v missing.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) v.",
          },
        },
        {
          id: "cipup-u3-kin-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "An object thrown vertically up decelerates because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity acts downward opposing motion" },
              { id: "b", text: "Air resistance only" },
              { id: "c", text: "No force" },
              { id: "d", text: "It speeds up" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vertical throw",
                statement: "g opposes upward motion.",
              },
            ],
            steps: [
              { reasoning: "g opposes up motion.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Gravity opposes.",
          },
        },
        {
          id: "cipup-u3-kin-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "At the top of vertical throw, velocity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero (instantaneously)" },
              { id: "b", text: "Maximum" },
              { id: "c", text: "Initial value" },
              { id: "d", text: "Negative" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Top of throw",
                statement: "v = 0 momentarily.",
              },
            ],
            steps: [{ reasoning: "Top: v = 0.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Zero.",
          },
        },
        {
          id: "cipup-u3-kin-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Average velocity =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total displacement ÷ total time" },
              { id: "b", text: "Total distance ÷ time" },
              { id: "c", text: "Maximum velocity" },
              { id: "d", text: "Final velocity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Average velocity",
                statement: "Δs/Δt.",
              },
            ],
            steps: [{ reasoning: "v_avg = Δs/Δt.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Δs/Δt.",
          },
        },
        {
          id: "cipup-u3-kin-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Instantaneous velocity is velocity at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A specific instant" },
              { id: "b", text: "Average over trip" },
              { id: "c", text: "Start only" },
              { id: "d", text: "End only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Instantaneous velocity",
                statement: "At a point.",
              },
            ],
            steps: [
              {
                reasoning: "Instantaneous = at a point.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Specific instant.",
          },
        },
        {
          id: "cipup-u3-kin-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "A body with constant velocity has acceleration:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "g" },
              { id: "c", text: "Increasing" },
              { id: "d", text: "Negative" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Constant velocity",
                statement: "a = 0.",
              },
            ],
            steps: [
              { reasoning: "Constant v → a = 0.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Zero.",
          },
        },
        {
          id: "cipup-u3-kin-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "v² = u² + 2as is useful when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time is not given" },
              { id: "b", text: "Only time given" },
              { id: "c", text: "Never useful" },
              { id: "d", text: "Only for force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "v²=u²+2as",
                statement: "No t needed.",
              },
            ],
            steps: [{ reasoning: "No time needed.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) When t not given.",
          },
        },
        {
          id: "cipup-u3-kin-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Projectile motion combines:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Constant horizontal velocity + vertical acceleration",
              },
              { id: "b", text: "Acceleration in both directions" },
              { id: "c", text: "No motion" },
              { id: "d", text: "Circular motion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Projectile",
                statement: "Horizontal const + vertical accel.",
              },
            ],
            steps: [
              { reasoning: "Projectile = 2D motion.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Horizontal const + vertical accel.",
          },
        },
        {
          id: "cipup-u3-kin-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between speed and velocity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Speed vs velocity",
                statement: "Scalar vs vector.",
              },
            ],
            steps: [
              {
                reasoning: "Speed: scalar — magnitude only.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Velocity: vector — magnitude + direction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Speed = scalar; velocity = vector.",
          },
        },
        {
          id: "cipup-u3-kin-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the three SUVAT equations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SUVAT",
                statement: "Three equations.",
              },
            ],
            steps: [
              {
                reasoning: "v = u + at; v² = u² + 2as; s = ½(u+v)t.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Also s = ut + ½at².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "v=u+at; v²=u²+2as; s=ut+½at².",
          },
        },
        {
          id: "cipup-u3-kin-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a projectile follows a parabolic path.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Projectile path",
                statement: "Uniform horizontal + accelerated vertical.",
              },
            ],
            steps: [
              {
                reasoning: "Horizontal: constant velocity — uniform.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vertical: constant acceleration g — parabolic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combination gives parabola.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Uniform + accelerated → parabola.",
          },
        },
        {
          id: "cipup-u3-kin-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball is thrown up at 20 m/s. Find max height and time to return (g=10).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Free fall", statement: "SUVAT with g." },
            ],
            steps: [
              {
                reasoning: "At top: v=0. v²=u²+2as → 0=400+2(-10)s → s=20m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Time up: v=u+at → 0=20-10t → t=2s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total time = 4s (up + down).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Max height 20m, total time 4s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20m height, 4s total.",
          },
        },
        {
          id: "cipup-u3-kin-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Negative acceleration means velocity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decreasing in positive direction" },
              { id: "b", text: "Increasing" },
              { id: "c", text: "Zero" },
              { id: "d", text: "Always down" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative acceleration",
                statement: "Slowing positive motion.",
              },
            ],
            steps: [
              {
                reasoning: "Negative a = deceleration.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Decreasing.",
          },
        },
        {
          id: "cipup-u3-kin-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is uniform acceleration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Uniform acceleration",
                statement: "Constant a.",
              },
            ],
            steps: [
              {
                reasoning: "Acceleration constant over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Velocity changes by equal amounts each second.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Constant acceleration.",
          },
        },
        {
          id: "cipup-u3-kin-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between distance and displacement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distance vs displacement",
                statement: "Scalar vs vector path.",
              },
            ],
            steps: [
              {
                reasoning: "Distance: total path length — scalar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Displacement: straight-line change — vector.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Distance ≥ displacement always.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Distance = path; displacement = straight line.",
          },
        },
        {
          id: "cipup-u3-kin-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Units of acceleration are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "m/s²" },
              { id: "b", text: "m/s" },
              { id: "c", text: "m" },
              { id: "d", text: "s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Acceleration units",
                statement: "m/s².",
              },
            ],
            steps: [{ reasoning: "a in m/s².", marks: 1, markCode: "M" }],
            finalAnswer: "(a) m/s².",
          },
        },
        {
          id: "cipup-u3-kin-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the significance of the gradient of a velocity-time graph?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "v-t gradient",
                statement: "Gradient = acceleration.",
              },
            ],
            steps: [
              {
                reasoning: "Gradient = Δv/Δt = acceleration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Positive gradient = speeding up; negative = slowing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gradient = acceleration.",
          },
        },
        {
          id: "cipup-u3-kin-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A car accelerates from rest at 2 m/s² for 10 s. Find final velocity and distance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "SUVAT", statement: "Apply equations." },
            ],
            steps: [
              {
                reasoning: "v = u + at = 0 + 2(10) = 20 m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "s = ut + ½at² = 0 + ½(2)(100) = 100 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternatively s = ½(u+v)t = ½(0+20)(10) = 100 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "v = 20 m/s, s = 100 m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20 m/s, 100 m.",
          },
        },
        {
          id: "cipup-u3-kin-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do we use vectors for velocity but scalars for speed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vector vs scalar",
                statement: "Direction matters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Velocity needs direction — two velocities can differ only by direction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Speed is magnitude only — no direction needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Velocity needs direction; speed doesn't.",
          },
        },
      ],
    correctChoiceId: "a",
    },
    {
      id: "cipup-u3-dynamics",
      title: "Dynamics: forces and Newton's laws",
      skill:
        "Apply Newton's laws, resolve forces, and solve equilibrium problems.",
      lesson: {
        sections: [
          {
            heading: "Newton's laws",
            body: "**1st**: object stays at rest or uniform motion unless acted on by force. **2nd**: F = ma — net force = mass × acceleration. **3rd**: every action has equal opposite reaction. **Weight**: W = mg. **Friction**: opposes motion.",
          },
          {
            heading: "Resolving forces",
            body: "**Components**: Fx = F cos θ, Fy = F sin θ. **Equilibrium**: ΣFx = 0, ΣFy = 0. **Normal force**: perpendicular to surface. **Tension**: in ropes/strings. **Friction**: μN — coefficient × normal force.",
          },
          {
            heading: "Connected objects",
            body: "For objects connected by strings: same acceleration. Apply F = ma to each, solve simultaneously. **Inclined plane**: resolve weight into parallel (mg sin θ) and perpendicular (mg cos θ) components.",
          },
        ],
        keyFormulas: [
          {
            name: "Newton's 2nd",
            statement: "F = ma",
          },
          {
            name: "Weight",
            statement: "W = mg",
          },
          {
            name: "Force components",
            statement: "Fx = Fcosθ, Fy = Fsinθ",
          },
          {
            name: "Friction",
            statement: "F = μN",
          },
        ],
        workedExample: {
          problem:
            "10 kg box on horizontal surface, μ=0.3. Find friction force.",
          solution: "N = mg = 98.1 N. F = μN = 0.3 × 98.1 = 29.4 N.",
        },
      },
      questions: [
        {
          id: "cipup-u3-dyn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton's first law states:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Object stays at rest/uniform motion unless force acts",
              },
              { id: "b", text: "F = ma" },
              { id: "c", text: "Action-reaction" },
              { id: "d", text: "No law" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "1st law", statement: "Inertia." },
            ],
            steps: [{ reasoning: "1st = inertia.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Inertia.",
          },
        },
        {
          id: "cipup-u3-dyn-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton's second law is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F = ma" },
              { id: "b", text: "F = mv" },
              { id: "c", text: "F = mg" },
              { id: "d", text: "F = m/v" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "2nd law", statement: "F = ma." },
            ],
            steps: [{ reasoning: "2nd = F=ma.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) F = ma.",
          },
        },
        {
          id: "cipup-u3-dyn-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton's third law states:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every action has equal opposite reaction" },
              { id: "b", text: "F = ma" },
              { id: "c", text: "Inertia" },
              { id: "d", text: "No law" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "3rd law",
                statement: "Action-reaction.",
              },
            ],
            steps: [
              { reasoning: "3rd = action-reaction.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Action-reaction.",
          },
        },
        {
          id: "cipup-u3-dyn-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Weight is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "W = mg" },
              { id: "b", text: "W = ma" },
              { id: "c", text: "W = mv" },
              { id: "d", text: "W = m/g" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Weight", statement: "W = mg." },
            ],
            steps: [{ reasoning: "W = mg.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) W = mg.",
          },
        },
        {
          id: "cipup-u3-dyn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Friction acts:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opposite to motion" },
              { id: "b", text: "In direction of motion" },
              { id: "c", text: "Perpendicular" },
              { id: "d", text: "No direction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Friction",
                statement: "Opposes motion.",
              },
            ],
            steps: [
              { reasoning: "Friction = opposite.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Opposite to motion.",
          },
        },
        {
          id: "cipup-u3-dyn-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Normal force acts:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perpendicular to surface" },
              { id: "b", text: "Parallel to surface" },
              { id: "c", text: "Downward" },
              { id: "d", text: "Upward only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal force",
                statement: "Perpendicular.",
              },
            ],
            steps: [
              { reasoning: "N = perpendicular.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Perpendicular.",
          },
        },
        {
          id: "cipup-u3-dyn-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Tension acts:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Along a rope/string" },
              { id: "b", text: "Perpendicular" },
              { id: "c", text: "Downward" },
              { id: "d", text: "No direction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tension", statement: "Along rope." },
            ],
            steps: [
              { reasoning: "Tension = along rope.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Along rope.",
          },
        },
        {
          id: "cipup-u3-dyn-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Friction force =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "μN (coefficient × normal force)" },
              { id: "b", text: "mg" },
              { id: "c", text: "ma" },
              { id: "d", text: "mv" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Friction", statement: "F = μN." },
            ],
            steps: [{ reasoning: "F = μN.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) μN.",
          },
        },
        {
          id: "cipup-u3-dyn-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In equilibrium, net force is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "Maximum" },
              { id: "c", text: "Variable" },
              { id: "d", text: "Negative" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equilibrium", statement: "ΣF = 0." },
            ],
            steps: [
              { reasoning: "Equilibrium = ΣF=0.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Zero.",
          },
        },
        {
          id: "cipup-u3-dyn-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Force is measured in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newtons (N)" },
              { id: "b", text: "Joules" },
              { id: "c", text: "Watts" },
              { id: "d", text: "Pascals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Force units", statement: "N." },
            ],
            steps: [{ reasoning: "F in N.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Newsons.",
          },
        },
        {
          id: "cipup-u3-dyn-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Horizontal component of force F at angle θ:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F cos θ" },
              { id: "b", text: "F sin θ" },
              { id: "c", text: "F tan θ" },
              { id: "d", text: "F/θ" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Force component",
                statement: "Fx = Fcosθ.",
              },
            ],
            steps: [{ reasoning: "Fx = Fcosθ.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Fcosθ.",
          },
        },
        {
          id: "cipup-u3-dyn-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Vertical component of force F at angle θ:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F sin θ" },
              { id: "b", text: "F cos θ" },
              { id: "c", text: "F tan θ" },
              { id: "d", text: "F/θ" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Force component",
                statement: "Fy = Fsinθ.",
              },
            ],
            steps: [{ reasoning: "Fy = Fsinθ.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Fsinθ.",
          },
        },
        {
          id: "cipup-u3-dyn-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "On an incline, weight component parallel to slope is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mg sin θ" },
              { id: "b", text: "mg cos θ" },
              { id: "c", text: "mg tan θ" },
              { id: "d", text: "mg" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Incline",
                statement: "Parallel = mgsinθ.",
              },
            ],
            steps: [
              { reasoning: "Parallel = mgsinθ.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) mgsinθ.",
          },
        },
        {
          id: "cipup-u3-dyn-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "On an incline, weight component perpendicular to slope is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mg cos θ" },
              { id: "b", text: "mg sin θ" },
              { id: "c", text: "mg tan θ" },
              { id: "d", text: "mg" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Incline",
                statement: "Perpendicular = mgcosθ.",
              },
            ],
            steps: [{ reasoning: "Perp = mgcosθ.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) mgcosθ.",
          },
        },
        {
          id: "cipup-u3-dyn-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Net force on object accelerating at 2 m/s², mass 5 kg:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 N" },
              { id: "b", text: "2.5 N" },
              { id: "c", text: "7 N" },
              { id: "d", text: "0.4 N" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "F=ma", statement: "F = 5×2 = 10 N." },
            ],
            steps: [{ reasoning: "F = ma = 10 N.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 10 N.",
          },
        },
        {
          id: "cipup-u3-dyn-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Action-reaction pair forces act on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different objects" },
              { id: "b", text: "Same object" },
              { id: "c", text: "No objects" },
              { id: "d", text: "One object only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "3rd law",
                statement: "Different objects.",
              },
            ],
            steps: [
              {
                reasoning: "Action-reaction on different objects.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Different objects.",
          },
        },
        {
          id: "cipup-u3-dyn-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Weight of 2 kg mass (g=9.81):",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "19.62 N" },
              { id: "b", text: "9.81 N" },
              { id: "c", text: "2 N" },
              { id: "d", text: "4.9 N" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "W=mg",
                statement: "W = 2×9.81 = 19.62 N.",
              },
            ],
            steps: [{ reasoning: "W = 19.62 N.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 19.62 N.",
          },
        },
        {
          id: "cipup-u3-dyn-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Static friction:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acts on stationary object to prevent motion" },
              { id: "b", text: "Acts on moving object" },
              { id: "c", text: "Always zero" },
              { id: "d", text: "Acts upward" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Static friction",
                statement: "Prevents motion.",
              },
            ],
            steps: [
              {
                reasoning: "Static = prevents motion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Prevents motion.",
          },
        },
        {
          id: "cipup-u3-dyn-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Kinetic friction acts when object is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moving" },
              { id: "b", text: "Stationary" },
              { id: "c", text: "At rest" },
              { id: "d", text: "Floating" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kinetic friction",
                statement: "Moving object.",
              },
            ],
            steps: [
              { reasoning: "Kinetic = moving.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Moving.",
          },
        },
        {
          id: "cipup-u3-dyn-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between mass and weight.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mass vs weight",
                statement: "Amount vs force.",
              },
            ],
            steps: [
              {
                reasoning: "Mass: amount of matter — kg — constant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weight: force of gravity — N — varies with g.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mass = matter; weight = gravity force.",
          },
        },
        {
          id: "cipup-u3-dyn-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State Newton's three laws.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Newton's laws",
                statement: "Three laws.",
              },
            ],
            steps: [
              {
                reasoning: "1st: inertia; 2nd: F=ma; 3rd: action-reaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correctly stated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Inertia, F=ma, action-reaction.",
          },
        },
        {
          id: "cipup-u3-dyn-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why friction is a contact force.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Friction",
                statement: "Surface interaction.",
              },
            ],
            steps: [
              {
                reasoning: "Friction arises from surface irregularities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Requires physical contact between surfaces.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Opposes relative motion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Surface contact → friction.",
          },
        },
        {
          id: "cipup-u3-dyn-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 5 kg block on 30° incline. Find force needed to prevent sliding (μ=0.2, g=9.81).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Incline equilibrium",
                statement: "Resolve forces.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Parallel component = mg sin30 = 5×9.81×0.5 = 24.5 N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Normal = mg cos30 = 5×9.81×0.866 = 42.5 N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Friction = μN = 0.2×42.5 = 8.5 N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Force needed = 24.5 - 8.5 = 16 N up slope.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16 N up slope.",
          },
        },
        {
          id: "cipup-u3-dyn-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Resultant force is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vector sum of all forces" },
              { id: "b", text: "Largest force" },
              { id: "c", text: "Smallest force" },
              { id: "d", text: "No force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resultant",
                statement: "Vector sum.",
              },
            ],
            steps: [
              { reasoning: "Resultant = vector sum.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Vector sum.",
          },
        },
        {
          id: "cipup-u3-dyn-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the condition for equilibrium?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equilibrium", statement: "ΣF = 0." },
            ],
            steps: [
              {
                reasoning: "Net force = zero in all directions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Object at rest or uniform motion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "ΣF = 0 — no acceleration.",
          },
        },
        {
          id: "cipup-u3-dyn-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a person doesn't accelerate downward despite gravity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ground reaction",
                statement: "Normal force balances weight.",
              },
            ],
            steps: [
              {
                reasoning: "Weight pulls down — normal force pushes up.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Forces equal → net force zero → no acceleration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equilibrium — Newton's 1st law.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Normal force = weight → equilibrium.",
          },
        },
        {
          id: "cipup-u3-dyn-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton's second law applies to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Net force" },
              { id: "b", text: "Single force" },
              { id: "c", text: "Weight only" },
              { id: "d", text: "No force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "F=ma", statement: "Net force." },
            ],
            steps: [{ reasoning: "F = net force.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Net force.",
          },
        },
        {
          id: "cipup-u3-dyn-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a free-body diagram?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free-body diagram",
                statement: "All forces shown.",
              },
            ],
            steps: [
              {
                reasoning: "Diagram showing all forces on object.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Arrows from point, labelled with magnitudes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "All forces shown as arrows.",
          },
        },
        {
          id: "cipup-u3-dyn-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two masses 3 kg and 5 kg connected by string on smooth table, pulled by 20 N on 5 kg. Find acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Connected objects",
                statement: "Total mass accelerates.",
              },
            ],
            steps: [
              {
                reasoning: "Total mass = 3 + 5 = 8 kg.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "F = ma → 20 = 8a → a = 2.5 m/s².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both accelerate at 2.5 m/s² (connected).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tension = 3×2.5 = 7.5 N.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a = 2.5 m/s², T = 7.5 N.",
          },
        },
        {
          id: "cipup-u3-dyn-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does friction decrease on icy surfaces?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Friction and surfaces",
                statement: "Smoother = less friction.",
              },
            ],
            steps: [
              {
                reasoning: "Ice is smoother — fewer surface irregularities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lower coefficient of friction μ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Smoother → lower μ → less friction.",
          },
        },
      ],
    correctChoiceId: "a",
    },
    {
      id: "cipup-u3-momentum",
      title: "Momentum and impulse",
      skill: "Apply conservation of momentum and impulse-momentum theorem.",
      lesson: {
        sections: [
          {
            heading: "Momentum",
            body: "**Momentum**: p = mv — vector, kg m/s. **Impulse**: J = Ft = Δp — force × time = change in momentum. **Conservation**: total momentum before = after (no external force). **Collisions**: elastic (KE conserved), inelastic (KE lost).",
          },
          {
            heading: "Conservation problems",
            body: "For collision: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂. **Explosions**: total momentum zero before → after. **Recoil**: gun/bullet — momentum equal opposite. **Newton's cradle**: demonstrates conservation.",
          },
          {
            heading: "Impulse applications",
            body: "**Airbags**: increase time → decrease force. **Crumple zones**: same principle. **Catching ball**: move hands back → increase time → reduce force. **J = Δp**: change in momentum = impulse.",
          },
        ],
        keyFormulas: [
          {
            name: "Momentum",
            statement: "p = mv",
          },
          {
            name: "Impulse",
            statement: "J = Ft = Δp",
          },
          {
            name: "Conservation",
            statement: "p_total before = p_total after",
          },
          {
            name: "Collision",
            statement: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
          },
        ],
        workedExample: {
          problem:
            "2 kg at 3 m/s hits 1 kg at rest, they stick. Find final velocity.",
          solution: "p_before = 2×3 = 6. Total mass = 3 kg. v = 6/3 = 2 m/s.",
        },
      },
      questions: [
        {
          id: "cipup-u3-mom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Momentum is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass × velocity" },
              { id: "b", text: "Force × time" },
              { id: "c", text: "Mass × acceleration" },
              { id: "d", text: "Velocity only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Momentum", statement: "p = mv." },
            ],
            steps: [{ reasoning: "p = mv.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) mv.",
          },
        },
        {
          id: "cipup-u3-mom-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Impulse is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force × time" },
              { id: "b", text: "Mass × velocity" },
              { id: "c", text: "Energy" },
              { id: "d", text: "Power" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Impulse", statement: "J = Ft." },
            ],
            steps: [{ reasoning: "J = Ft.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Ft.",
          },
        },
        {
          id: "cipup-u3-mom-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Impulse equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Change in momentum" },
              { id: "b", text: "Total momentum" },
              { id: "c", text: "Kinetic energy" },
              { id: "d", text: "Force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Impulse-momentum",
                statement: "J = Δp.",
              },
            ],
            steps: [{ reasoning: "J = Δp.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Δp.",
          },
        },
        {
          id: "cipup-u3-mom-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Momentum is conserved when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No external force acts" },
              { id: "b", text: "External force acts" },
              { id: "c", text: "Always" },
              { id: "d", text: "Never" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation",
                statement: "No external force.",
              },
            ],
            steps: [
              {
                reasoning: "Conserved = no external F.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) No external force.",
          },
        },
        {
          id: "cipup-u3-mom-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An elastic collision conserves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Momentum and kinetic energy" },
              { id: "b", text: "Momentum only" },
              { id: "c", text: "Energy only" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Elastic collision",
                statement: "p + KE conserved.",
              },
            ],
            steps: [
              { reasoning: "Elastic = p + KE.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) p + KE.",
          },
        },
        {
          id: "cipup-u3-mom-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An inelastic collision conserves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Momentum only — KE lost" },
              { id: "b", text: "Momentum and KE" },
              { id: "c", text: "KE only" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inelastic collision",
                statement: "p conserved, KE lost.",
              },
            ],
            steps: [
              { reasoning: "Inelastic = p only.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Momentum only.",
          },
        },
        {
          id: "cipup-u3-mom-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Units of momentum are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "kg m/s" },
              { id: "b", text: "N" },
              { id: "c", text: "J" },
              { id: "d", text: "W" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Momentum units",
                statement: "kg m/s.",
              },
            ],
            steps: [{ reasoning: "p in kg m/s.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) kg m/s.",
          },
        },
        {
          id: "cipup-u3-mom-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Units of impulse are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "N s" },
              { id: "b", text: "kg m/s" },
              { id: "c", text: "J" },
              { id: "d", text: "W" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Impulse units",
                statement: "N s = kg m/s.",
              },
            ],
            steps: [{ reasoning: "J in N s.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) N s.",
          },
        },
        {
          id: "cipup-u3-mom-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Airbags reduce injury by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing impact time → decreasing force" },
              { id: "b", text: "Decreasing time" },
              { id: "c", text: "Increasing force" },
              { id: "d", text: "No effect" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Airbag", statement: "Δt↑ → F↓." },
            ],
            steps: [
              { reasoning: "Airbag = longer time.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Increase time → decrease force.",
          },
        },
        {
          id: "cipup-u3-mom-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Momentum of 2 kg at 5 m/s:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 kg m/s" },
              { id: "b", text: "7 kg m/s" },
              { id: "c", text: "2.5 kg m/s" },
              { id: "d", text: "0.4 kg m/s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "p=mv", statement: "p = 2×5 = 10." },
            ],
            steps: [{ reasoning: "p = 10 kg m/s.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 10 kg m/s.",
          },
        },
        {
          id: "cipup-u3-mom-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a collision, total momentum before equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total momentum after" },
              { id: "b", text: "Total energy" },
              { id: "c", text: "Force" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation",
                statement: "p_before = p_after.",
              },
            ],
            steps: [{ reasoning: "p conserved.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) After.",
          },
        },
        {
          id: "cipup-u3-mom-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A perfectly inelastic collision is one where objects:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stick together after collision" },
              { id: "b", text: "Bounce apart" },
              { id: "c", text: "Pass through" },
              { id: "d", text: "No collision" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perfectly inelastic",
                statement: "Stick together.",
              },
            ],
            steps: [
              {
                reasoning: "Perfectly inelastic = stick.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Stick together.",
          },
        },
        {
          id: "cipup-u3-mom-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Recoil of a gun is explained by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conservation of momentum" },
              { id: "b", text: "Energy conservation" },
              { id: "c", text: "Friction" },
              { id: "d", text: "Gravity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recoil",
                statement: "Momentum conservation.",
              },
            ],
            steps: [
              { reasoning: "Recoil = momentum.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Momentum conservation.",
          },
        },
        {
          id: "cipup-u3-mom-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "For an explosion, total momentum before is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero (at rest)" },
              { id: "b", text: "Maximum" },
              { id: "c", text: "Variable" },
              { id: "d", text: "Negative" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Explosion",
                statement: "p_before = 0.",
              },
            ],
            steps: [
              {
                reasoning: "Explosion at rest → p=0.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Zero.",
          },
        },
        {
          id: "cipup-u3-mom-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Newton's cradle demonstrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conservation of momentum and energy" },
              { id: "b", text: "Friction" },
              { id: "c", text: "Gravity only" },
              { id: "d", text: "No physics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Newton's cradle",
                statement: "p + KE conservation.",
              },
            ],
            steps: [
              { reasoning: "Cradle = conservation.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Conservation.",
          },
        },
        {
          id: "cipup-u3-mom-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Impulse is also equal to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Change in momentum" },
              { id: "b", text: "Total momentum" },
              { id: "c", text: "Force" },
              { id: "d", text: "Energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Impulse", statement: "J = Δp." },
            ],
            steps: [{ reasoning: "J = Δp.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Δp.",
          },
        },
        {
          id: "cipup-u3-mom-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Catching a ball with hands moving back:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduces force by increasing time" },
              { id: "b", text: "Increases force" },
              { id: "c", text: "No effect" },
              { id: "d", text: "Breaks ball" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catching ball",
                statement: "Δt↑ → F↓.",
              },
            ],
            steps: [
              {
                reasoning: "Moving back = longer Δt.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Reduces force.",
          },
        },
        {
          id: "cipup-u3-mom-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 0.5 kg ball at 4 m/s has momentum:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 kg m/s" },
              { id: "b", text: "8 kg m/s" },
              { id: "c", text: "0.125 kg m/s" },
              { id: "d", text: "4.5 kg m/s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "p=mv", statement: "p = 0.5×4 = 2." },
            ],
            steps: [{ reasoning: "p = 2 kg m/s.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 2 kg m/s.",
          },
        },
        {
          id: "cipup-u3-mom-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Momentum is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vector quantity" },
              { id: "b", text: "Scalar" },
              { id: "c", text: "No quantity" },
              { id: "d", text: "Negative only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Momentum", statement: "Vector." },
            ],
            steps: [{ reasoning: "p = vector.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Vector.",
          },
        },
        {
          id: "cipup-u3-mom-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between momentum and impulse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Momentum vs impulse",
                statement: "State vs change.",
              },
            ],
            steps: [
              {
                reasoning: "Momentum: p = mv — current state.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Impulse: J = Ft = Δp — change in momentum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Momentum = state; impulse = change.",
          },
        },
        {
          id: "cipup-u3-mom-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the law of conservation of momentum.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation",
                statement: "p_total constant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total momentum before = total after (no external force).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vector sum conserved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "p_total before = p_total after.",
          },
        },
        {
          id: "cipup-u3-mom-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why momentum is conserved in collisions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Momentum conservation",
                statement: "Newton's 3rd law.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Forces between colliding objects are equal and opposite.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Act for same time → equal opposite impulses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total momentum change = zero → conserved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Equal opposite forces → conserved.",
          },
        },
        {
          id: "cipup-u3-mom-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "2 kg at 3 m/s collides with stationary 1 kg, they stick. Find final velocity and KE lost.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inelastic collision",
                statement: "Momentum conserved, KE lost.",
              },
            ],
            steps: [
              {
                reasoning: "p_before = 2×3 = 6 kg m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total mass = 3 kg → v = 6/3 = 2 m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "KE_before = ½(2)(9) = 9 J; KE_after = ½(3)(4) = 6 J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "KE lost = 3 J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "v = 2 m/s, KE lost = 3 J.",
          },
        },
        {
          id: "cipup-u3-mom-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rifle recoils because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bullet momentum = rifle momentum (opposite)" },
              { id: "b", text: "Gravity" },
              { id: "c", text: "Friction" },
              { id: "d", text: "No reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recoil",
                statement: "Equal opposite momentum.",
              },
            ],
            steps: [
              {
                reasoning: "Recoil = momentum conservation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Equal opposite momentum.",
          },
        },
        {
          id: "cipup-u3-mom-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the impulse-momentum theorem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Impulse-momentum",
                statement: "J = Δp.",
              },
            ],
            steps: [
              {
                reasoning: "Impulse = force × time = change in momentum.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ft = mv - mu.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ft = Δp = mv - mu.",
          },
        },
        {
          id: "cipup-u3-mom-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why crumple zones in cars improve safety.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Crumple zones",
                statement: "Increase Δt → decrease F.",
              },
            ],
            steps: [
              {
                reasoning: "Crumple zone increases collision time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Same momentum change (Δp) but longer time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "F = Δp/Δt → smaller force → less injury.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Longer time → smaller force.",
          },
        },
        {
          id: "cipup-u3-mom-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If two objects have same momentum, they have same:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass × velocity product" },
              { id: "b", text: "Mass" },
              { id: "c", text: "Velocity" },
              { id: "d", text: "Energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Momentum", statement: "p = mv." },
            ],
            steps: [
              { reasoning: "Same p = same mv.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) mv product.",
          },
        },
        {
          id: "cipup-u3-mom-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens to momentum when two objects collide elastically?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Elastic collision",
                statement: "p + KE conserved.",
              },
            ],
            steps: [
              {
                reasoning: "Total momentum conserved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total kinetic energy also conserved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "p + KE conserved.",
          },
        },
        {
          id: "cipup-u3-mom-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 0.1 kg bullet at 400 m/s hits 2 kg block at rest. Bullet embeds. Find block velocity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ballistic pendulum",
                statement: "Momentum conservation.",
              },
            ],
            steps: [
              {
                reasoning: "p_before = 0.1×400 = 40 kg m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total mass = 0.1 + 2 = 2.1 kg.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "v = 40/2.1 = 19.05 m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Block + bullet move at ~19 m/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈19 m/s.",
          },
        },
        {
          id: "cipup-u3-mom-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is momentum a vector?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Momentum vector",
                statement: "Has direction.",
              },
            ],
            steps: [
              {
                reasoning: "p = mv — velocity is vector → momentum vector.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Direction matters in collisions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Velocity is vector → momentum vector.",
          },
        },
      ],
    correctChoiceId: "a",
    },
    {
      id: "cipup-u3-energy",
      title: "Work, energy and power",
      skill:
        "Apply conservation of energy, work-energy theorem, and power calculations.",
      lesson: {
        sections: [
          {
            heading: "Work and energy",
            body: "**Work**: W = Fs cos θ — force × displacement × cos(angle). **Kinetic energy**: KE = ½mv². **Gravitational PE**: PE = mgh. **Elastic PE**: ½kx². **Work-energy theorem**: W = ΔKE.",
          },
          {
            heading: "Conservation of energy",
            body: "**Total energy conserved**: KE + PE = constant (no friction). **With friction**: energy → heat/sound. **Energy transformations**: PE → KE (falling), KE → PE (rising), chemical → electrical (battery).",
          },
          {
            heading: "Power",
            body: "**Power**: P = W/t = Fv — rate of doing work. **Units**: watt (W) = J/s. **Efficiency**: useful output/total input × 100%. **Energy cannot be created or destroyed** — only transformed.",
          },
        ],
        keyFormulas: [
          {
            name: "Work",
            statement: "W = Fs cos θ",
          },
          {
            name: "Kinetic energy",
            statement: "KE = ½mv²",
          },
          {
            name: "Potential energy",
            statement: "PE = mgh",
          },
          {
            name: "Power",
            statement: "P = W/t = Fv",
          },
        ],
        workedExample: {
          problem: "5 kg mass falls 10 m. Find KE at bottom (g=9.81).",
          solution:
            "PE = mgh = 5×9.81×10 = 490.5 J. KE at bottom = 490.5 J (no friction). v = √(2gh) = 14 m/s.",
        },
      },
      questions: [
        {
          id: "cipup-u3-wq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work done is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force × displacement" },
              { id: "b", text: "Force × time" },
              { id: "c", text: "Mass × velocity" },
              { id: "d", text: "Energy only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Work", statement: "W = Fs cos θ." },
            ],
            steps: [{ reasoning: "W = Fs.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) F × displacement.",
          },
        },
        {
          id: "cipup-u3-wq-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Kinetic energy is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "½mv²" },
              { id: "b", text: "mv" },
              { id: "c", text: "mgh" },
              { id: "d", text: "Fv" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "KE", statement: "½mv²." },
            ],
            steps: [{ reasoning: "KE = ½mv².", marks: 1, markCode: "M" }],
            finalAnswer: "(a) ½mv².",
          },
        },
        {
          id: "cipup-u3-wq-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gravitational PE is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mgh" },
              { id: "b", text: "½mv²" },
              { id: "c", text: "Fv" },
              { id: "d", text: "mg" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "PE", statement: "mgh." }],
            steps: [{ reasoning: "PE = mgh.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) mgh.",
          },
        },
        {
          id: "cipup-u3-wq-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Power is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rate of doing work — W/t" },
              { id: "b", text: "Total work" },
              { id: "c", text: "Energy" },
              { id: "d", text: "Force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Power", statement: "P = W/t." },
            ],
            steps: [{ reasoning: "P = W/t.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) W/t.",
          },
        },
        {
          id: "cipup-u3-wq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Units of energy are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Joules (J)" },
              { id: "b", text: "Newtons" },
              { id: "c", text: "Watts" },
              { id: "d", text: "Pascals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy units", statement: "J." },
            ],
            steps: [{ reasoning: "E in J.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Joules.",
          },
        },
        {
          id: "cipup-u3-wq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Units of power are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Watts (W)" },
              { id: "b", text: "Joules" },
              { id: "c", text: "Newtons" },
              { id: "d", text: "Pascals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Power units", statement: "W." },
            ],
            steps: [{ reasoning: "P in W.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Watts.",
          },
        },
        {
          id: "cipup-u3-wq-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "1 watt equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 joule per second" },
              { id: "b", text: "1 joule" },
              { id: "c", text: "1 newton" },
              { id: "d", text: "1 pascal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Watt", statement: "J/s." },
            ],
            steps: [{ reasoning: "1 W = 1 J/s.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1 J/s.",
          },
        },
        {
          id: "cipup-u3-wq-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work done = force × displacement ×:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cos θ" },
              { id: "b", text: "sin θ" },
              { id: "c", text: "tan θ" },
              { id: "d", text: "No angle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Work", statement: "W = Fs cos θ." },
            ],
            steps: [{ reasoning: "W = Fs cos θ.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) cos θ.",
          },
        },
        {
          id: "cipup-u3-wq-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When force and displacement are perpendicular, work done is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "Maximum" },
              { id: "c", text: "Negative" },
              { id: "d", text: "Variable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perpendicular work",
                statement: "W = 0.",
              },
            ],
            steps: [
              { reasoning: "θ=90° → cos=0 → W=0.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Zero.",
          },
        },
        {
          id: "cipup-u3-wq-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy cannot be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Created or destroyed" },
              { id: "b", text: "Transformed" },
              { id: "c", text: "Stored" },
              { id: "d", text: "Transferred" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy conservation",
                statement: "No creation/destruction.",
              },
            ],
            steps: [
              { reasoning: "Energy conserved.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Created/destroyed.",
          },
        },
        {
          id: "cipup-u3-wq-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "KE of 2 kg at 3 m/s:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9 J" },
              { id: "b", text: "18 J" },
              { id: "c", text: "6 J" },
              { id: "d", text: "12 J" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "KE", statement: "KE = ½(2)(9) = 9 J." },
            ],
            steps: [{ reasoning: "KE = 9 J.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 9 J.",
          },
        },
        {
          id: "cipup-u3-wq-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "PE of 1 kg at height 5 m (g=9.81):",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "49.05 J" },
              { id: "b", text: "9.81 J" },
              { id: "c", text: "5 J" },
              { id: "d", text: "98.1 J" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "PE",
                statement: "PE = 1×9.81×5 = 49.05 J.",
              },
            ],
            steps: [{ reasoning: "PE = 49.05 J.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 49.05 J.",
          },
        },
        {
          id: "cipup-u3-wq-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work done by 10 N force over 5 m in direction of force:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50 J" },
              { id: "b", text: "15 J" },
              { id: "c", text: "2 J" },
              { id: "d", text: "500 J" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Work", statement: "W = 10×5 = 50 J." },
            ],
            steps: [{ reasoning: "W = 50 J.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 50 J.",
          },
        },
        {
          id: "cipup-u3-wq-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Power of 100 J done in 5 s:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20 W" },
              { id: "b", text: "500 W" },
              { id: "c", text: "95 W" },
              { id: "d", text: "0.05 W" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Power", statement: "P = 100/5 = 20 W." },
            ],
            steps: [{ reasoning: "P = 20 W.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 20 W.",
          },
        },
        {
          id: "cipup-u3-wq-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Elastic potential energy is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "½kx²" },
              { id: "b", text: "kx" },
              { id: "c", text: "½mv²" },
              { id: "d", text: "mgh" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Elastic PE", statement: "½kx²." },
            ],
            steps: [
              { reasoning: "Elastic PE = ½kx².", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) ½kx².",
          },
        },
        {
          id: "cipup-u3-wq-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work-energy theorem states:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "W = ΔKE" },
              { id: "b", text: "W = KE" },
              { id: "c", text: "W = PE" },
              { id: "d", text: "W = Fv" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Work-energy", statement: "W = ΔKE." },
            ],
            steps: [{ reasoning: "W = ΔKE.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) W = ΔKE.",
          },
        },
        {
          id: "cipup-u3-wq-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Efficiency is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(useful output/total input) × 100%" },
              { id: "b", text: "total input/output" },
              { id: "c", text: "output only" },
              { id: "d", text: "input only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Efficiency",
                statement: "Output/input × 100%.",
              },
            ],
            steps: [
              { reasoning: "Eff = output/input.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Output/input × 100%.",
          },
        },
        {
          id: "cipup-u3-wq-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "When object falls, PE converts to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kinetic energy" },
              { id: "b", text: "Heat only" },
              { id: "c", text: "Sound" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transformation",
                statement: "PE → KE.",
              },
            ],
            steps: [{ reasoning: "Fall = PE → KE.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) KE.",
          },
        },
        {
          id: "cipup-u3-wq-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "With friction, energy is transformed to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat and sound" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "More KE" },
              { id: "d", text: "PE" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Friction energy",
                statement: "→ heat/sound.",
              },
            ],
            steps: [
              { reasoning: "Friction = heat/sound.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Heat and sound.",
          },
        },
        {
          id: "cipup-u3-wq-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between work and power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Work vs power",
                statement: "Amount vs rate.",
              },
            ],
            steps: [
              {
                reasoning: "Work: energy transferred — J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Power: rate of work — W = J/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Work = amount; power = rate.",
          },
        },
        {
          id: "cipup-u3-wq-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the principle of conservation of energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy conservation",
                statement: "Total energy constant.",
              },
            ],
            steps: [
              {
                reasoning: "Energy cannot be created or destroyed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only transformed from one form to another.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Total energy constant — only transformed.",
          },
        },
        {
          id: "cipup-u3-wq-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a falling object speeds up using energy concepts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Falling energy",
                statement: "PE → KE.",
              },
            ],
            steps: [
              {
                reasoning: "PE decreases as height decreases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "KE increases as velocity increases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Energy conserved — PE loss = KE gain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "PE → KE → speeds up.",
          },
        },
        {
          id: "cipup-u3-wq-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 2 kg mass is lifted 5 m. Find work done and power if lifted in 10 s (g=9.81).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Work and power",
                statement: "W = mgh, P = W/t.",
              },
            ],
            steps: [
              {
                reasoning: "W = mgh = 2×9.81×5 = 98.1 J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P = W/t = 98.1/10 = 9.81 W.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Force needed = mg = 19.62 N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "W = 98.1 J, P = 9.81 W.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "98.1 J, 9.81 W.",
          },
        },
        {
          id: "cipup-u3-wq-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "P = Fv means power equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force × velocity" },
              { id: "b", text: "Force × time" },
              { id: "c", text: "Mass × velocity" },
              { id: "d", text: "Energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Power", statement: "P = Fv." },
            ],
            steps: [{ reasoning: "P = Fv.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Fv.",
          },
        },
        {
          id: "cipup-u3-wq-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a joule?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Joule",
                statement: "Unit of energy/work.",
              },
            ],
            steps: [
              {
                reasoning: "1 J = 1 N × 1 m = work done by 1 N over 1 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Also = 1 W × 1 s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1 N·m = 1 J.",
          },
        },
        {
          id: "cipup-u3-wq-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why efficiency is always less than 100%.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency < 100%",
                statement: "Energy losses.",
              },
            ],
            steps: [
              {
                reasoning: "Some energy lost as heat/sound/friction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Not all input energy converted to useful output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Energy still conserved — just transformed to waste.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Losses → efficiency < 100%.",
          },
        },
        {
          id: "cipup-u3-wq-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A stretched spring stores:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elastic potential energy" },
              { id: "b", text: "Kinetic energy" },
              { id: "c", text: "No energy" },
              { id: "d", text: "Heat" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spring energy",
                statement: "Elastic PE.",
              },
            ],
            steps: [
              { reasoning: "Spring = elastic PE.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Elastic PE.",
          },
        },
        {
          id: "cipup-u3-wq-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between energy and power?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy vs power",
                statement: "Amount vs rate.",
              },
            ],
            steps: [
              {
                reasoning: "Energy: total amount — J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Power: rate of energy transfer — W.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Energy = amount; power = rate.",
          },
        },
        {
          id: "cipup-u3-wq-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rollercoaster car at top of hill has PE = 5000 J. At bottom, KE = 4500 J. Where did 500 J go?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Energy losses",
                statement: "Friction/air resistance.",
              },
            ],
            steps: [
              {
                reasoning: "PE decreased by 5000 J (height → KE).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "KE only 4500 J — 500 J missing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lost to friction, air resistance, sound.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Energy conserved — transformed to heat/sound.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "500 J → friction/heat.",
          },
        },
        {
          id: "cipup-u3-wq-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does a heavier object fall faster than a lighter one (ignoring air resistance)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free fall",
                statement: "Same acceleration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Actually both fall at same rate — g is independent of mass.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "F = mg and a = F/m = g — mass cancels.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Same g — mass cancels.",
          },
        },
      ],
    correctChoiceId: "a",
    },
    {
      id: "cipup-u3-circular",
      title: "Circular motion and gravitation",
      skill: "Apply circular motion equations and Newton's law of gravitation.",
      lesson: {
        sections: [
          {
            heading: "Circular motion",
            body: "**Angular velocity**: ω = 2πf = v/r. **Centripetal acceleration**: a = v²/r = ω²r — toward centre. **Centripetal force**: F = mv²/r — required to keep circular motion. **Period**: T = 2πr/v.",
          },
          {
            heading: "Gravitation",
            body: "**Newton's law**: F = Gm₁m₂/r² — inverse square law. **G** = 6.67×10⁻¹¹ N m²/kg². **Weight**: W = GMm/r². **Orbital motion**: gravity provides centripetal force. **Escape velocity**: v = √(2GM/r).",
          },
          {
            heading: "Applications",
            body: "**Satellites**: orbit due to gravity. **Geostationary**: period = 24h — stays over same point. **Weightlessness**: apparent weight zero in free fall. **Tides**: gravitational differences.",
          },
        ],
        keyFormulas: [
          {
            name: "Centripetal force",
            statement: "F = mv²/r",
          },
          {
            name: "Angular velocity",
            statement: "ω = v/r",
          },
          {
            name: "Gravitation",
            statement: "F = GMm/r²",
          },
          {
            name: "Escape velocity",
            statement: "v = √(2GM/r)",
          },
        ],
        workedExample: {
          problem:
            "Car turns radius 50 m at 20 m/s. Find centripetal acceleration.",
          solution: "a = v²/r = 400/50 = 8 m/s².",
        },
      },
      questions: [
        {
          id: "cipup-u3-circ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Centripetal acceleration is directed:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Toward centre" },
              { id: "b", text: "Away from centre" },
              { id: "c", text: "Tangentially" },
              { id: "d", text: "No direction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Centripetal",
                statement: "Toward centre.",
              },
            ],
            steps: [
              { reasoning: "Centripetal = centre.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Toward centre.",
          },
        },
        {
          id: "cipup-u3-circ-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Centripetal acceleration =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "v²/r" },
              { id: "b", text: "v/r" },
              { id: "c", text: "mv²/r" },
              { id: "d", text: "mr²/v" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Centripetal accel",
                statement: "a = v²/r.",
              },
            ],
            steps: [{ reasoning: "a = v²/r.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) v²/r.",
          },
        },
        {
          id: "cipup-u3-circ-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Centripetal force =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mv²/r" },
              { id: "b", text: "v²/r" },
              { id: "c", text: "mg" },
              { id: "d", text: "mv" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Centripetal force",
                statement: "F = mv²/r.",
              },
            ],
            steps: [{ reasoning: "F = mv²/r.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) mv²/r.",
          },
        },
        {
          id: "cipup-u3-circ-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton's law of gravitation:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F = GMm/r²" },
              { id: "b", text: "F = Gm/r" },
              { id: "c", text: "F = GM/r²" },
              { id: "d", text: "F = mg" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gravitation",
                statement: "F = GMm/r².",
              },
            ],
            steps: [{ reasoning: "F = GMm/r².", marks: 1, markCode: "M" }],
            finalAnswer: "(a) GMm/r².",
          },
        },
        {
          id: "cipup-u3-circ-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gravitational constant G =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6.67 × 10⁻¹¹ N m²/kg²" },
              { id: "b", text: "9.81" },
              { id: "c", text: "3 × 10⁸" },
              { id: "d", text: "1.6 × 10⁻¹⁹" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "G", statement: "6.67×10⁻¹¹." },
            ],
            steps: [{ reasoning: "G = 6.67×10⁻¹¹.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 6.67×10⁻¹¹.",
          },
        },
        {
          id: "cipup-u3-circ-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Centripetal force is provided by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Real forces (tension, friction, gravity)" },
              { id: "b", text: "Fictitious force" },
              { id: "c", text: "No force" },
              { id: "d", text: "Centrifugal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Centripetal source",
                statement: "Real forces.",
              },
            ],
            steps: [
              { reasoning: "Real forces provide it.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Real forces.",
          },
        },
        {
          id: "cipup-u3-circ-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Angular velocity ω =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "v/r" },
              { id: "b", text: "v²/r" },
              { id: "c", text: "2πf" },
              { id: "d", text: "Both a and c" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angular velocity",
                statement: "ω = v/r = 2πf.",
              },
            ],
            steps: [{ reasoning: "ω = v/r = 2πf.", marks: 1, markCode: "M" }],
            finalAnswer: "(d) Both.",
          },
        },
        {
          id: "cipup-u3-circ-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Period of circular motion T =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2πr/v" },
              { id: "b", text: "v/r" },
              { id: "c", text: "v²/r" },
              { id: "d", text: "mv²/r" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Period", statement: "T = 2πr/v." },
            ],
            steps: [{ reasoning: "T = 2πr/v.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 2πr/v.",
          },
        },
        {
          id: "cipup-u3-circ-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Escape velocity is minimum speed to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Escape gravitational pull" },
              { id: "b", text: "Orbit" },
              { id: "c", text: "Stay on surface" },
              { id: "d", text: "Fall" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Escape velocity",
                statement: "Escape gravity.",
              },
            ],
            steps: [
              { reasoning: "Escape = leave gravity.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Escape gravity.",
          },
        },
        {
          id: "cipup-u3-circ-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A geostationary satellite has period:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24 hours" },
              { id: "b", text: "1 hour" },
              { id: "c", text: "1 year" },
              { id: "d", text: "Variable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Geostationary",
                statement: "24h period.",
              },
            ],
            steps: [{ reasoning: "Geo = 24h.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 24 hours.",
          },
        },
        {
          id: "cipup-u3-circ-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Centripetal acceleration of 2 kg at 4 m/s, r=2 m:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8 m/s²" },
              { id: "b", text: "4 m/s²" },
              { id: "c", text: "2 m/s²" },
              { id: "d", text: "16 m/s²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Centripetal accel",
                statement: "a = v²/r = 16/2 = 8.",
              },
            ],
            steps: [{ reasoning: "a = 8 m/s².", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 8 m/s².",
          },
        },
        {
          id: "cipup-u3-circ-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Centripetal force needed for 3 kg at 5 m/s, r=5 m:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15 N" },
              { id: "b", text: "3 N" },
              { id: "c", text: "25 N" },
              { id: "d", text: "75 N" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Centripetal force",
                statement: "F = mv²/r = 3×25/5 = 15.",
              },
            ],
            steps: [{ reasoning: "F = 15 N.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 15 N.",
          },
        },
        {
          id: "cipup-u3-circ-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Weight on Earth vs Moon:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Less on Moon (lower g)" },
              { id: "b", text: "Same" },
              { id: "c", text: "More on Moon" },
              { id: "d", text: "Zero" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weight varies",
                statement: "g varies.",
              },
            ],
            steps: [
              { reasoning: "Moon g < Earth g.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Less on Moon.",
          },
        },
        {
          id: "cipup-u3-circ-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Gravitational force is inversely proportional to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "r² (square of distance)" },
              { id: "b", text: "r" },
              { id: "c", text: "m" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inverse square",
                statement: "F ∝ 1/r².",
              },
            ],
            steps: [{ reasoning: "F ∝ 1/r².", marks: 1, markCode: "M" }],
            finalAnswer: "(a) r².",
          },
        },
        {
          id: "cipup-u3-circ-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "If distance doubles, gravitational force becomes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/4 (quarter)" },
              { id: "b", text: "1/2" },
              { id: "c", text: "Same" },
              { id: "d", text: "Double" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inverse square",
                statement: "2² = 4 → 1/4.",
              },
            ],
            steps: [{ reasoning: "F → F/4.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1/4.",
          },
        },
        {
          id: "cipup-u3-circ-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Orbital velocity of satellite depends on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radius of orbit and central mass" },
              { id: "b", text: "Satellite mass" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Only speed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Orbital velocity",
                statement: "Depends on r and M.",
              },
            ],
            steps: [
              { reasoning: "v_orb depends on r, M.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) r and M.",
          },
        },
        {
          id: "cipup-u3-circ-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Centrifugal force is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fictitious force in rotating frame" },
              { id: "b", text: "Real force" },
              { id: "c", text: "Gravity" },
              { id: "d", text: "No force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Centrifugal",
                statement: "Fictitious.",
              },
            ],
            steps: [
              {
                reasoning: "Centrifugal = fictitious.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Fictitious.",
          },
        },
        {
          id: "cipup-u3-circ-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "In circular motion, speed is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constant (if uniform)" },
              { id: "b", text: "Increasing" },
              { id: "c", text: "Decreasing" },
              { id: "d", text: "Zero" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circular speed",
                statement: "Constant in uniform.",
              },
            ],
            steps: [
              {
                reasoning: "Uniform circular = const speed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Constant.",
          },
        },
        {
          id: "cipup-u3-circ-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Weightlessness in orbit occurs because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Object and spacecraft in free fall" },
              { id: "b", text: "No gravity" },
              { id: "c", text: "Zero mass" },
              { id: "d", text: "No air" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weightlessness",
                statement: "Free fall.",
              },
            ],
            steps: [
              { reasoning: "Weightless = free fall.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Free fall.",
          },
        },
        {
          id: "cipup-u3-circ-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between centripetal and centrifugal force.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Centripetal vs centrifugal",
                statement: "Real vs fictitious.",
              },
            ],
            steps: [
              {
                reasoning: "Centripetal: real force toward centre.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Centrifugal: fictitious force away — rotating frame.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Centripetal = real; centrifugal = fictitious.",
          },
        },
        {
          id: "cipup-u3-circ-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State Newton's law of universal gravitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gravitation",
                statement: "F = GMm/r².",
              },
            ],
            steps: [
              {
                reasoning: "Every mass attracts every other with F = GMm/r².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inverse square law — doubles distance → quarter force.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "F = GMm/r² — inverse square.",
          },
        },
        {
          id: "cipup-u3-circ-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why satellites orbit Earth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Orbital motion",
                statement: "Gravity = centripetal.",
              },
            ],
            steps: [
              {
                reasoning: "Gravity pulls satellite toward Earth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Forward velocity keeps it moving sideways.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gravity provides centripetal force for orbit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gravity = centripetal force → orbit.",
          },
        },
        {
          id: "cipup-u3-circ-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate centripetal force for 1000 kg car turning radius 100 m at 20 m/s.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Centripetal force",
                statement: "F = mv²/r.",
              },
            ],
            steps: [
              {
                reasoning: "F = mv²/r.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "v² = 400 m²/s².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "F = 1000×400/100 = 4000 N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "F = 4000 N (4 kN).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4000 N.",
          },
        },
        {
          id: "cipup-u3-circ-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tidal forces are caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravitational differences" },
              { id: "b", text: "Wind" },
              { id: "c", text: "Earth rotation only" },
              { id: "d", text: "No force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tides",
                statement: "Gravitational differences.",
              },
            ],
            steps: [
              {
                reasoning: "Tides = gravity differences.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Gravitational differences.",
          },
        },
        {
          id: "cipup-u3-circ-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a geostationary orbit?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Geostationary",
                statement: "24h period over equator.",
              },
            ],
            steps: [
              {
                reasoning: "Satellite period = Earth's rotation period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Appears stationary over same point on equator.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24h orbit over equator — appears fixed.",
          },
        },
        {
          id: "cipup-u3-circ-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why objects appear weightless in orbit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weightlessness",
                statement: "Free fall.",
              },
            ],
            steps: [
              {
                reasoning: "Spacecraft and objects fall together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No normal force — no apparent weight.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gravity still acts — provides centripetal force.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Free fall → no normal force → weightless.",
          },
        },
        {
          id: "cipup-u3-circ-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Units of angular velocity are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "rad/s" },
              { id: "b", text: "m/s" },
              { id: "c", text: "m/s²" },
              { id: "d", text: "Hz" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Angular velocity units",
                statement: "rad/s.",
              },
            ],
            steps: [{ reasoning: "ω in rad/s.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) rad/s.",
          },
        },
        {
          id: "cipup-u3-circ-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the relationship between centripetal force and gravity for orbiting satellite?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Orbit",
                statement: "Gravity provides centripetal.",
              },
            ],
            steps: [
              {
                reasoning: "Gravity acts as centripetal force.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "GMm/r² = mv²/r → orbital velocity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gravity = centripetal force.",
          },
        },
        {
          id: "cipup-u3-circ-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate escape velocity from Earth (M=6×10²⁴ kg, R=6.4×10⁶ m, G=6.67×10⁻¹¹).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Escape velocity",
                statement: "v = √(2GM/R).",
              },
            ],
            steps: [
              {
                reasoning: "v² = 2GM/R.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "2GM = 2×6.67×10⁻¹¹×6×10²⁴ = 8×10¹⁴.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "v² = 8×10¹⁴/6.4×10⁶ = 1.25×10⁸.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "v = √(1.25×10⁸) ≈ 11.2 km/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈11.2 km/s.",
          },
        },
        {
          id: "cipup-u3-circ-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does a satellite need forward velocity to orbit?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Orbital velocity",
                statement: "Tangential motion.",
              },
            ],
            steps: [
              {
                reasoning: "Gravity pulls inward — velocity keeps it sideways.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Without forward velocity, falls straight down.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Velocity + gravity → orbit.",
          },
        },
      ],
    correctChoiceId: "a",
    },
  ],
};
