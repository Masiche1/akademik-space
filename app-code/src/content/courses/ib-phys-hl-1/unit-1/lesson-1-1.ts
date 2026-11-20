import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "physhl-u1-lesson-1-1",
  code: "1-1",
  title: "Galilean and Special Relativity",
  goal: "I CAN describe frames of reference and Galilean transformations, state the postulates of special relativity, and apply time dilation and length contraction to solve problems.",
  standards: ["Paper 1", "Paper 2", "AHL A1"],
  vocabulary: [
    {
      term: "Frame of reference",
      definition:
        "A coordinate system (with clocks) used to measure position and time; an inertial frame moves at constant velocity.",
    },
    {
      term: "Galilean relativity",
      definition:
        "The principle that the laws of physics are the same in all inertial frames; velocities add by simple subtraction ($v' = v - V$).",
    },
    {
      term: "Postulate 1 (relativity principle)",
      definition:
        "The laws of physics are identical in all inertial frames of reference.",
    },
    {
      term: "Postulate 2 (constancy of c)",
      definition:
        "The speed of light in a vacuum is the same ($c = 3.00 \\times 10^8$ m/s) in all inertial frames, regardless of the motion of the source.",
    },
    {
      term: "Time dilation",
      definition:
        "A moving clock runs slow as measured by a stationary observer: $\\Delta t = \\gamma \\Delta t_0$ where $\\Delta t_0$ is the proper time.",
    },
    {
      term: "Length contraction",
      definition:
        "A moving object is shortened in its direction of motion as measured by a stationary observer: $L = \\frac{L_0}{\\gamma}$ where $L_0$ is the proper length.",
    },
  ],
  concepts: [
    {
      id: "physhl-u1-galilean-sr",
      title: "Frames of reference and the postulates of special relativity",
      skill:
        "Distinguish inertial and non-inertial frames, apply Galilean velocity transformations, and state the two postulates of special relativity.",
      lesson: {
        sections: [
          {
            heading: "Frames of reference",
            body: "A **frame of reference** is a coordinate system with synchronised clocks. An **inertial frame** moves at constant velocity (no acceleration) — Newton's first law holds in every inertial frame. A non-inertial frame accelerates, so fictitious forces appear. Classical (Galilean) relativity says the laws of physics are the same in all inertial frames, and velocities transform simply: if frame $S'$ moves at velocity $V$ relative to $S$, then $v' = v - V$.",
          },
          {
            heading: "The two postulates",
            body: "Einstein's special relativity rests on two postulates:\n\n1. **The relativity principle** — the laws of physics are identical in all inertial frames.\n2. **The constancy of the speed of light** — light travels at $c = 3.00 \\times 10^8$ m/s in a vacuum in ALL inertial frames, no matter how fast the source or observer moves.\n\nPostulate 2 contradicts Galilean velocity addition — if you move towards a light beam at $0.5c$, classical physics predicts you measure $1.5c$, but experiment (and Maxwell's equations) demands you still measure exactly $c$. Resolving this contradiction forces time and space themselves to change.",
          },
          {
            heading: "Consequences",
            body: "Because $c$ is invariant, different inertial observers disagree about **simultaneity** (events simultaneous in one frame need not be in another), **time intervals** (moving clocks run slow — time dilation) and **lengths** (moving objects contract — length contraction). These effects are negligible at everyday speeds but become large as $v$ approaches $c$.",
          },
        ],
        keyFormulas: [
          {
            name: "Galilean transformation",
            statement: "$v' = v - V$ — velocities add/subtract classically.",
          },
          {
            name: "Postulate 2",
            statement: "Speed of light is $c$ in all inertial frames.",
          },
          {
            name: "Lorentz factor",
            statement: "$\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}} \\geq 1$",
          },
        ],
        workedExample: {
          problem:
            "A train moves at 30 m/s. A passenger walks at 1.5 m/s towards the front of the train. What is the passenger's velocity relative to the ground (Galilean)?",
          solution:
            "Frame $S$ = ground, $S'$ = train moving at $V = 30$ m/s. Passenger velocity in train frame $v' = 1.5$ m/s. Ground velocity $v = v' + V = 1.5 + 30 = 31.5$ m/s.",
        },
      },
      questions: [
        {
          id: "physhl-u1-gsr-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to Galilean relativity, if a frame $S'$ moves at velocity $V$ relative to frame $S$, the velocity of an object in frame $S$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$v = v' + V$" },
              { id: "b", text: "$v = v' - V$" },
              { id: "c", text: "$v = v' \\times V$" },
              { id: "d", text: "$v = \\frac{v'}{V}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Galilean transformation",
                statement:
                  "Velocities add/subtract: $v = v' + V$ (with consistent sign convention).",
              },
            ],
            steps: [
              {
                reasoning: "Galilean relativity adds velocities linearly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $v = v' + V$",
            commonErrors: [
              "Subtracting instead of adding — check the sign convention.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State the two postulates of special relativity and explain why the second contradicts Galilean velocity addition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Postulates of SR",
                statement:
                  "(1) Laws of physics identical in all inertial frames; (2) c is the same in all inertial frames.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Postulate 1: laws of physics identical in all inertial frames.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Postulate 2: speed of light is c in vacuum in all inertial frames.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Galilean addition would give 1.5c for light observed from a moving frame — contradicting postulate 2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(1) Same laws in all inertial frames; (2) c invariant — contradicts v+V addition.",
            commonErrors: [
              "Saying 'nothing can exceed c' as a postulate — that is a consequence, not a postulate.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An observer on a platform sees a train travelling at 25 m/s. A passenger on the train throws a ball forwards at 10 m/s relative to the train. (a) Find the ball's velocity relative to the platform (Galilean). (b) Explain why this simple addition fails for light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Galilean vs relativistic",
                statement:
                  "Galilean works for v << c; fails for light because c is invariant.",
              },
            ],
            steps: [
              {
                reasoning: "(a) $v = v' + V = 10 + 25 = 35$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) For light, adding source velocity would give > c, violating postulate 2.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The Lorentz transformation replaces Galilean addition so that c stays invariant.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "At everyday speeds (v << c) Galilean is an excellent approximation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 35 m/s. (b) c is invariant — Lorentz transformation required.",
            commonErrors: [
              "Applying Galilean addition to light — gives impossible > c result.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Two spaceships, each travelling at 0.6c in opposite directions, pass each other.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the Lorentz factor $\\gamma$ for each ship ($v = 0.6c$).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Use Galilean addition to find the relative speed of one ship as measured by the other — and explain why this is wrong.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "State the correct relativistic result for the relative speed.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lorentz factor",
                statement:
                  "$\\gamma = 1/\\sqrt{1-v^2/c^2}$; relativistic velocity addition needed.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\gamma = 1/\\sqrt{1 - 0.36} = 1/\\sqrt{0.64} = 1/0.8 = 1.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both ships have $\\gamma = 1.25$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Galilean: $v = 0.6c + 0.6c = 1.2c$ — exceeds c, impossible.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "This violates postulate 2 — no material object can exceed c in any inertial frame.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Galilean addition only valid for v << c.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Relativistic addition: $u = \\frac{0.6c + 0.6c}{1 + 0.36} = \\frac{1.2c}{1.36} = 0.882c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Result is < c — consistent with special relativity.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Velocity addition formula ensures c is never exceeded.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\gamma = 1.25$. (b) Galilean gives 1.2c — impossible. (c) Relativistic: 0.882c.",
            commonErrors: [
              "Using Galilean addition at relativistic speeds — always use the relativistic formula.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following describes an inertial frame of reference?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A car accelerating away from a set of traffic lights",
              },
              { id: "b", text: "A lift in free fall" },
              {
                id: "c",
                text: "A spacecraft travelling at constant velocity far from any massive object",
              },
              { id: "d", text: "A satellite moving in a circular orbit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inertial frame",
                statement:
                  "A frame moving at constant velocity — no acceleration — in which Newton's first law holds.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An inertial frame has constant velocity (zero acceleration); fictitious forces appear only in accelerating frames.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only the spacecraft has constant velocity — the car accelerates, the lift is in free fall, and the satellite accelerates centripetally.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** constant velocity — no acceleration",
            commonErrors: [
              "Forgetting that circular orbits involve centripetal acceleration, so satellites are non-inertial.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is NOT a postulate of Einstein's special relativity?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The laws of physics are identical in all inertial frames",
              },
              {
                id: "b",
                text: "The speed of light in a vacuum is the same in all inertial frames",
              },
              { id: "c", text: "Nothing can travel faster than light" },
              {
                id: "d",
                text: "Light travels at $3.00 \\times 10^8$ m/s in a vacuum in all inertial frames",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Postulates of SR",
                statement:
                  "(1) Same laws in all inertial frames; (2) c is invariant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The two postulates are the relativity principle and the constancy of c.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'Nothing can exceed c' is a consequence of the postulates, not a postulate itself.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** — a consequence, not a postulate",
            commonErrors: [
              "Quoting consequences ('nothing exceeds c') as postulates.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q7",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Two events are simultaneous in inertial frame $S$. In another inertial frame $S'$ moving relative to $S$, the events:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "are also simultaneous" },
              { id: "b", text: "may not be simultaneous" },
              { id: "c", text: "must occur at the same place" },
              { id: "d", text: "cannot be observed at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relativity of simultaneity",
                statement:
                  "Events simultaneous in one inertial frame need not be simultaneous in another.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Because c is invariant, different inertial observers disagree about simultaneity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore the events may not be simultaneous in $S'$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** may not be simultaneous",
            commonErrors: [
              "Assuming simultaneity is absolute — it is frame-dependent in special relativity.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A torch on a train moving at $0.9c$ shines light forwards. An observer on the ground measures the speed of that light as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.9c$" },
              { id: "b", text: "$0.9c$" },
              { id: "c", text: "$c$" },
              { id: "d", text: "$0.1c$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Constancy of c",
                statement:
                  "Light speed is $c$ in all inertial frames regardless of source motion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Postulate 2: the speed of light in a vacuum is $c$ in every inertial frame.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The ground observer still measures exactly $c$, not $1.9c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $c$",
            commonErrors: [
              "Adding the train's speed classically — gives an impossible $1.9c$.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In Galilean (classical) relativity, which quantity is the same in all inertial frames?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "time intervals" },
              { id: "b", text: "lengths" },
              { id: "c", text: "the laws of physics" },
              { id: "d", text: "the velocities of objects" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Galilean relativity",
                statement:
                  "The laws of physics are identical in all inertial frames; positions and times are absolute.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Galilean relativity postulates that the laws of physics are the same in every inertial frame.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Time, length and velocity are frame-dependent in Galilean physics too — only the laws are invariant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** the laws of physics",
            commonErrors: [
              "Thinking Galilean physics makes velocities absolute — velocities add by $v = v' + V$.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A car travels at $20$ m/s along a straight road. A passenger walks at $2.0$ m/s towards the rear of the car. Using Galilean velocity addition, determine the passenger's velocity relative to the ground.",
          parts: [
            {
              label: "a",
              prompt: "Velocity of the passenger relative to the ground.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 18, unit: "m/s", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Galilean transformation",
                statement: "$v = v' + V$ with consistent sign convention.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Take the car's direction as positive; walking towards the rear means $v' = -2.0$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Apply $v = v' + V = -2.0 + 20$.",
                working: "v = -2.0 + 20 = 18 m/s",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The passenger moves forwards at 18 m/s relative to the ground.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "18 m/s in the direction of the car's motion",
            commonErrors: [
              "Dropping the negative sign — walking towards the rear reduces the ground speed.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Two spaceships travel in the same direction. Ship A moves at $0.8c$ and ship B at $0.5c$ relative to Earth. Calculate the speed of A as measured by an observer on B.",
          parts: [
            { label: "a", prompt: "Speed of A relative to B.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.5, unit: "c", tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relativistic velocity addition",
                statement:
                  "$u = \\frac{v - V}{1 - vV/c^2}$ for motion in the same direction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Use the relativistic velocity subtraction formula, not Galilean subtraction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$u = \\frac{0.8 - 0.5}{1 - 0.8 \\times 0.5} = \\frac{0.3}{0.6}$.",
                working: "u = 0.3/0.6 = 0.5c",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$u = 0.50c$ — less than the Galilean $0.3c$? No: Galilean gives $0.3c$ here, but the relativistic result is $0.50c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.50c",
            commonErrors: [
              "Using Galilean subtraction $0.8c - 0.5c = 0.3c$ — wrong at relativistic speeds.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A particle has Lorentz factor $\\gamma = 2.0$. Determine its speed as a fraction of $c$.",
          parts: [
            { label: "a", prompt: "Speed as a fraction of $c$.", marks: 4 },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.866, unit: "c", tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Lorentz factor",
                statement:
                  "$\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$ rearranged to $v = c\\sqrt{1 - 1/\\gamma^2}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Rearrange the Lorentz factor to make $v$ the subject.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$v/c = \\sqrt{1 - 1/\\gamma^2} = \\sqrt{1 - 1/4} = \\sqrt{3/4}$.",
                working: "v/c = \\sqrt{0.75}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\sqrt{3}/2 = 0.866$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$v = 0.866c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$v = 0.866c$",
            commonErrors: [
              "Taking $1/\\gamma$ instead of $\\sqrt{1 - 1/\\gamma^2}$ — forgetting the square root.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate the Lorentz factor for an object moving at $0.6c$.",
          parts: [{ label: "a", prompt: "Value of $\\gamma$.", marks: 2 }],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.25, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Lorentz factor",
                statement: "$\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Substitute $v = 0.6c$ into the Lorentz factor formula.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$\\gamma = \\frac{1}{\\sqrt{1 - 0.36}} = \\frac{1}{\\sqrt{0.64}} = \\frac{1}{0.8} = 1.25$.",
                working: "\\gamma = 1/\\sqrt{0.64} = 1.25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\gamma = 1.25$",
            commonErrors: [
              "Using $v = 0.6$ without the $c$ — the ratio $v/c$ is what matters.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two probes travel towards each other head-on, each at $0.6c$ relative to Earth. Use the relativistic velocity addition formula to find the speed of one probe as measured by the other.",
          parts: [
            { label: "a", prompt: "Relative speed of the probes.", marks: 4 },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.882, unit: "c", tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relativistic velocity addition",
                statement:
                  "For opposite directions the speeds add in the numerator: $u = \\frac{v + V}{1 + vV/c^2}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "For head-on motion, numerator adds the speeds and denominator uses $1 + vV/c^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$u = \\frac{0.6c + 0.6c}{1 + 0.6 \\times 0.6} = \\frac{1.2c}{1.36}$.",
                working: "u = 1.2c/1.36",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Divide numerator by denominator.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$u = 0.882c$ — below $c$, consistent with postulate 2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$u = 0.882c$",
            commonErrors: [
              "Galilean addition giving $1.2c$ — exceeds the speed of light.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Light is emitted from the midpoint of a long carriage on a train moving at relativistic speed. An observer on the train sees the light reach both ends of the carriage simultaneously. Explain why an observer on the ground may not agree that the two arrivals are simultaneous.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relativity of simultaneity",
                statement:
                  "Simultaneity is frame-dependent because c is the same in all inertial frames.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Postulate 2 requires that light travels at $c$ in every inertial frame, including the ground frame.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In the ground frame the carriage is moving, so the distances from the emission point to the two ends differ at the instant of emission.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Since light covers different distances at the same speed $c$, the arrival times differ.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Therefore the two arrivals are not simultaneous for the ground observer.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Simultaneity is relative: 'at the same time' depends on the observer's inertial frame.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This follows directly from the invariance of c — it is a genuine prediction of special relativity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Moving carriage → unequal light paths in ground frame → arrivals not simultaneous.",
            commonErrors: [
              "Claiming light speeds up or slows down to compensate — c is invariant.",
            ],
          },
        },
        {
          id: "physhl-u1-gsr-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "Two probes approach each other head-on, each moving at $0.8c$ relative to Earth.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the speed of one probe as measured by the other.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate the Lorentz factor for each probe.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the Galilean prediction would be physically impossible, and state what the relativistic result shows about $c$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relativistic velocity addition",
                statement:
                  "$u = \\frac{v + V}{1 + vV/c^2}$ keeps relative speeds below $c$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$u = \\frac{0.8c + 0.8c}{1 + 0.8 \\times 0.8} = \\frac{1.6c}{1.64}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Divide to obtain the relative speed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$u = 0.976c$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$\\gamma = \\frac{1}{\\sqrt{1 - 0.64}} = \\frac{1}{0.6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\gamma = 1.67$ for each probe.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Galilean addition gives $0.8c + 0.8c = 1.6c$, which exceeds $c$.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "No material object or signal can exceed $c$ in any inertial frame — postulate 2 and causality forbid it.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "The relativistic formula always yields $u < c$, approaching $c$ only as both speeds approach $c$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "This demonstrates that $c$ acts as an invariant speed limit built into the structure of spacetime.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 0.976c. (b) $\\gamma = 1.67$. (c) Galilean gives 1.6c — impossible; relativistic addition preserves $u < c$.",
            commonErrors: [
              "Adding velocities classically at relativistic speeds.",
            ],
          },
        },
      ],
    },
    {
      id: "physhl-u1-time-length",
      title: "Time dilation and length contraction",
      skill:
        "Apply time dilation and length contraction formulas, identify proper time and proper length, and solve problems involving moving clocks and rods.",
      lesson: {
        sections: [
          {
            heading: "Time dilation",
            body: "A clock moving at velocity $v$ relative to an observer ticks SLOWER than a clock at rest in the observer's frame. The relationship is $\\Delta t = \\gamma \\Delta t_0$, where $\\Delta t_0$ is the **proper time** — the time interval measured in the frame where the two events occur at the same place — and $\\Delta t$ is the dilated time measured by the moving observer. $\\gamma = \\frac{1}{\\sqrt{1-v^2/c^2}} \\geq 1$, so $\\Delta t \\geq \\Delta t_0$: moving clocks always run slow.",
          },
          {
            heading: "Length contraction",
            body: "An object moving at velocity $v$ is SHORTER in its direction of motion as measured by a stationary observer: $L = \\frac{L_0}{\\gamma}$, where $L_0$ is the **proper length** — measured in the frame where the object is at rest. Only lengths parallel to the motion contract; perpendicular dimensions are unchanged. As $v \\to c$, $\\gamma \\to \\infty$ and $L \\to 0$.",
          },
          {
            heading: "Identifying proper quantities",
            body: "The key skill is identifying which measurement is 'proper': **proper time** is measured in the frame where the events happen at the same location (e.g. the astronaut's own clock); **proper length** is measured in the frame where the object is at rest (e.g. the rod's own length). The moving observer always measures dilated time and contracted length.",
          },
        ],
        keyFormulas: [
          {
            name: "Time dilation",
            statement:
              "$\\Delta t = \\gamma \\Delta t_0$ — moving clock runs slow.",
          },
          {
            name: "Length contraction",
            statement:
              "$L = L_0 / \\gamma$ — moving object contracts along motion.",
          },
          {
            name: "Lorentz factor",
            statement: "$\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$",
          },
        ],
        workedExample: {
          problem:
            "A spaceship travels at 0.8c. Its crew measures a trip taking 5.0 years. How long does the trip take as measured from Earth?",
          solution:
            "$\\gamma = 1/\\sqrt{1-0.64} = 1/0.6 = 1.67$. Earth time $\\Delta t = \\gamma \\Delta t_0 = 1.67 \\times 5.0 = 8.3$ years. The crew's clock shows proper time (events at same place for them).",
        },
      },
      questions: [
        {
          id: "physhl-u1-tl-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A clock moving at relativistic speed relative to an observer appears to run:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slow (time dilation)" },
              { id: "b", text: "Fast" },
              { id: "c", text: "At the same rate" },
              { id: "d", text: "Stop completely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time dilation",
                statement:
                  "Moving clocks run slow: $\\Delta t = \\gamma \\Delta t_0$, $\\gamma > 1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\gamma \\geq 1$ so dilated time $\\Delta t \\geq$ proper time $\\Delta t_0$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Slow — time dilation",
            commonErrors: [
              "Thinking moving clocks run fast — they always run slow.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A rod of proper length 10 m moves at 0.6c relative to an observer. Calculate its length as measured by the observer ($\\gamma = 1.25$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Length contraction",
                statement: "$L = L_0/\\gamma$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply length contraction with $L_0 = 10$ m, $\\gamma = 1.25$.",
                working: "L = 10 / 1.25",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$L = 8.0$ m.", marks: 1, markCode: "A" },
              {
                reasoning: "Only the dimension parallel to motion contracts.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$L = 8.0$ m",
            commonErrors: [
              "Multiplying by $\\gamma$ instead of dividing — contraction means shorter.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A muon created in the upper atmosphere travels at 0.995c. In its own rest frame its lifetime is 2.2 $\\mu$s. (a) Calculate $\\gamma$. (b) Calculate its lifetime as measured from Earth. (c) Explain how this allows muons to reach the ground.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Muon decay",
                statement:
                  "Time dilation extends muon lifetime in Earth frame → reaches ground.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) $\\gamma = 1/\\sqrt{1-0.99} = 1/\\sqrt{0.0099} \\approx 10.0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Earth-frame lifetime $= \\gamma \\times 2.2 = 10 \\times 2.2 = 22$ $\\mu$s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Without dilation, muons would decay after ~660 m; with 22 $\\mu$s lifetime they travel ~6.6 km.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Time dilation explains observed muon flux at sea level.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\gamma \\approx 10$. (b) 22 $\\mu$s. (c) Dilated lifetime lets them reach ground.",
            commonErrors: [
              "Forgetting that the muon's proper lifetime is the short one (2.2 $\\mu$s in its rest frame).",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The twin paradox: Twin A stays on Earth while twin B travels at 0.8c to a star 4 light-years away and returns.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the Lorentz factor for the journey ($v = 0.8c$).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the time for the round trip as measured by twin A (Earth frame).",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the time experienced by twin B.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why this is NOT a paradox — which twin actually ages less and why?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Twin paradox",
                statement:
                  "Travelling twin ages less — asymmetry from acceleration breaks the symmetry.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\gamma = 1/\\sqrt{1-0.64} = 1/0.6 = 1.67$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\gamma = 1.67$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Distance each way = 4 ly; speed 0.8c → one-way = 5 yr; round trip = 10 yr.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Twin A measures 10 years.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Twin B experiences proper time: $10/1.67 = 6.0$ years.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Twin B ages less (6 yr vs 10 yr).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "B accelerates (turns around) → non-inertial frame → not symmetric with A.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Only inertial frames are equivalent; B's acceleration resolves the 'paradox'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\gamma=1.67$. (b) A: 10 yr. (c) B: 6 yr. (d) B accelerates → asymmetric → B ages less.",
            commonErrors: [
              "Thinking both twins see the other age less — acceleration breaks the symmetry.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The proper time $\\Delta t_0$ between two events is the time interval measured:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "in the frame where the two events occur at the same place",
              },
              {
                id: "b",
                text: "by the observer moving fastest relative to the events",
              },
              { id: "c", text: "identically in every inertial frame" },
              {
                id: "d",
                text: "between events that occur at different locations",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proper time",
                statement:
                  "$\\Delta t_0$ is measured in the frame where the events happen at the same place.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Proper time is the shortest measured interval — the clock's own rest-frame time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** events at the same place",
            commonErrors: [
              "Thinking proper time is the longest measured time — it is actually the shortest.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A spaceship flies past Earth at $0.9c$ carrying a rod oriented PERPENDICULAR to its direction of motion. The rod's perpendicular length as measured from Earth is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "contracted by the Lorentz factor" },
              { id: "b", text: "unchanged" },
              { id: "c", text: "dilated by the Lorentz factor" },
              { id: "d", text: "zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Length contraction",
                statement:
                  "$L = L_0/\\gamma$ applies only along the direction of motion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Length contraction affects only dimensions parallel to the velocity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Perpendicular dimensions are unchanged — choice (b).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** unchanged",
            commonErrors: [
              "Assuming the whole object contracts in all directions — only the parallel dimension does.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q7",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "In the twin paradox, which twin returns to Earth having aged LESS?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the twin who stayed on Earth" },
              { id: "b", text: "both twins age the same amount" },
              { id: "c", text: "the twin who travelled at relativistic speed" },
              { id: "d", text: "neither — time stops for both" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Twin paradox",
                statement:
                  "The travelling twin's clock shows proper time; acceleration breaks the symmetry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The travelling twin measures proper time $\\Delta t_0 = \\Delta t/\\gamma < \\Delta t$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore the travelling twin ages less — choice (c).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** the travelling twin",
            commonErrors: [
              "Claiming symmetry means both age equally — the traveller accelerates, breaking the symmetry.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A clock ticks once per second in its own rest frame. It moves at $0.8c$ relative to a stationary observer ($\\gamma = 1.67$). Calculate the period of the clock as measured by the stationary observer.",
          parts: [
            {
              label: "a",
              prompt: "Observed period of the moving clock.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.67, unit: "s", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Time dilation",
                statement: "$\\Delta t = \\gamma \\Delta t_0$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The rest-frame period $\\Delta t_0 = 1.0$ s is the proper time.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Apply $\\Delta t = \\gamma \\Delta t_0 = 1.67 \\times 1.0$.",
                working: "\\Delta t = 1.67 \\times 1.0 = 1.67 s",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The moving clock appears to tick once every 1.67 s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1.67 s",
            commonErrors: [
              "Dividing by $\\gamma$ — time dilation makes the period LONGER, not shorter.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Observers on Earth measure a spaceship's journey to take 15 years. The ship travels at a speed giving $\\gamma = 1.25$. Calculate the journey time measured by the crew on the ship.",
          parts: [
            {
              label: "a",
              prompt: "Journey time in the ship's frame.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12, unit: "yr", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Time dilation",
                statement:
                  "$\\Delta t = \\gamma \\Delta t_0 \\Rightarrow \\Delta t_0 = \\Delta t/\\gamma$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The crew's clock measures proper time $\\Delta t_0$; Earth measures dilated time $\\Delta t = 15$ yr.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Rearrange: $\\Delta t_0 = \\Delta t/\\gamma = 15/1.25$.",
                working: "\\Delta t_0 = 15/1.25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\Delta t_0 = 12$ yr.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12 yr",
            commonErrors: [
              "Multiplying by $\\gamma$ instead of dividing — the moving clock shows LESS time.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A spaceship travels at $0.6c$ ($\\gamma = 1.25$). Earth observers measure the journey to take 20 years.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the journey time measured by the crew.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A rod of proper length 100 m is carried on the ship. Calculate its length as measured from Earth.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 16, unit: "yr", tolerance: 0.01 },
              { label: "b", answer: 80, unit: "m", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Time dilation & length contraction",
                statement:
                  "$\\Delta t = \\gamma\\Delta t_0$; $L = L_0/\\gamma$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Crew time is proper time: $\\Delta t_0 = \\Delta t/\\gamma = 20/1.25 = 16$ yr.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Crew measures 16 years.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Apply contraction: $L = L_0/\\gamma = 100/1.25$.",
                working: "L = 100/1.25 = 80 m",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "$L = 80$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 16 yr. (b) 80 m.",
            commonErrors: [
              "Using $\\gamma$ in the wrong direction for either quantity.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A muon has a proper lifetime of $2.2\\ \\mu$s and travels at $0.995c$, for which $\\gamma \\approx 10$. Calculate its lifetime as measured in the laboratory frame.",
          parts: [
            { label: "a", prompt: "Lifetime in the lab frame.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 22, unit: "\\mu s", tolerance: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Muon decay",
                statement:
                  "Time dilation extends the muon lifetime in the Earth frame.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The muon's rest-frame lifetime is proper time: $\\Delta t = \\gamma\\Delta t_0 = 10 \\times 2.2$.",
                working: "\\Delta t = 10 \\times 2.2 = 22 \\mu s",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Lab-frame lifetime is 22 $\\mu$s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "22 $\\mu$s",
            commonErrors: [
              "Treating 2.2 $\\mu$s as the lab lifetime — it is the proper (rest-frame) lifetime.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about length contraction is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Every dimension of a moving object contracts equally",
              },
              {
                id: "b",
                text: "A moving object appears longer along its direction of motion",
              },
              {
                id: "c",
                text: "Only the dimension parallel to the motion contracts",
              },
              {
                id: "d",
                text: "Length contraction applies to objects at rest",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Length contraction",
                statement:
                  "$L = L_0/\\gamma$ along the direction of motion only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Contraction occurs only parallel to the velocity; perpendicular dimensions are unchanged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** only the parallel dimension contracts",
            commonErrors: [
              "Thinking objects contract in all directions — only the parallel dimension does.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A rod of proper length 20 m is carried on a spaceship moving at $0.8c$ ($\\gamma = 1.67$).",
          parts: [
            {
              label: "a",
              prompt: "Calculate the rod's length as measured from Earth.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "A clock on the ship shows 4.0 s has elapsed. Calculate the corresponding time measured from Earth.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12, unit: "m", tolerance: 0.1 },
              { label: "b", answer: 6.68, unit: "s", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Length contraction & time dilation",
                statement:
                  "$L = L_0/\\gamma$; $\\Delta t = \\gamma\\Delta t_0$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply $L = L_0/\\gamma = 20/1.67$.",
                working: "L = 20/1.67 = 11.98 \\approx 12.0 m",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$L = 12.0$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Only the length parallel to motion contracts.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Ship clock shows proper time: $\\Delta t = \\gamma\\Delta t_0 = 1.67 \\times 4.0$.",
                working: "\\Delta t = 1.67 \\times 4.0 = 6.68 s",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Earth measures 6.68 s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 12.0 m. (b) 6.68 s.",
            commonErrors: [
              "Multiplying the rod length by $\\gamma$ — contraction means division.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An astronaut's clock records a journey of 8.0 years, while clocks on Earth record 12.0 years for the same journey. Calculate the Lorentz factor $\\gamma$ for the journey.",
          parts: [{ label: "a", prompt: "Value of $\\gamma$.", marks: 3 }],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.5, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Time dilation",
                statement: "$\\gamma = \\Delta t/\\Delta t_0$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Earth time is dilated; astronaut time is proper: $\\gamma = \\Delta t/\\Delta t_0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\gamma = 12.0/8.0$.",
                working: "\\gamma = 12/8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\gamma = 1.5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\gamma = 1.5$",
            commonErrors: [
              "Inverting the ratio — $\\gamma \\geq 1$ always, so dilated time must be the larger.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why time dilation and length contraction are not independent effects but two consequences of the same underlying principle. In your answer, refer to the invariance of the speed of light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lorentz transformations",
                statement:
                  "Both effects follow from requiring c to be the same in all inertial frames.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Postulate 2 demands that light travels at $c$ in every inertial frame.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For this to hold, different inertial observers must disagree about time intervals and lengths.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Time dilation ($\\Delta t = \\gamma\\Delta t_0$) and length contraction ($L = L_0/\\gamma$) both contain the same factor $\\gamma$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They are reciprocal: each observer sees the other's clocks slow and lengths contracted.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Together they ensure that measurements of c agree in all frames — e.g. light crossing a contracted rod takes a dilated time.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "They are two facets of the Lorentz transformation of spacetime, not separate phenomena.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both stem from c being invariant; same $\\gamma$ factor links them.",
            commonErrors: [
              "Treating them as unrelated rules rather than consequences of one postulate.",
            ],
          },
        },
        {
          id: "physhl-u1-tl-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A spaceship travels to a star 8.0 light-years away at $0.8c$ relative to Earth ($\\gamma = 1.67$).",
          parts: [
            {
              label: "a",
              prompt: "Calculate the Lorentz factor for $v = 0.8c$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the journey time as measured by the crew on the ship.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain how the crew can obtain the same journey time using length contraction instead of time dilation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Lorentz factor & time dilation",
                statement:
                  "$\\gamma = 1/\\sqrt{1-v^2/c^2}$; $\\Delta t_0 = \\Delta t/\\gamma$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\gamma = 1/\\sqrt{1 - 0.64} = 1/0.6$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\gamma = 1.67$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Earth-frame one-way time $= 8.0/0.8 = 10$ yr.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Crew time is proper time: $\\Delta t_0 = 10/1.67 = 6.0$ yr.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Crew measures 6.0 years.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "In the ship frame the star is not 8 ly away — it is length-contracted.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$L = L_0/\\gamma = 8.0/1.67 = 4.8$ ly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Time $= L/v = 4.8/0.8 = 6.0$ yr — the same answer, showing the two effects are consistent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\gamma = 1.67$. (b) 6.0 yr. (c) Contracted distance 4.8 ly / 0.8c = 6.0 yr.",
            commonErrors: [
              "Using the Earth-frame distance in the ship frame — distances contract too.",
            ],
          },
        },
      ],
    },
  ],
};
