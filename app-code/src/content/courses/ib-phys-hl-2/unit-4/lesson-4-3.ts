import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "physhl-u4-lesson-4-3",
  code: "4-3",
  title: "Magnetic Forces on Moving Charges",
  goal: "I CAN apply $F = qvB\\sin\\theta$ to calculate forces on moving charges, derive the circular motion radius $r = mv/qB$, and explain applications in mass spectrometers and particle accelerators.",
  standards: ["Paper 1", "Paper 2", "AHL D3"],
  vocabulary: [
    {
      term: "Magnetic force on charge",
      definition:
        "Force on a moving charged particle in a magnetic field: $F = qvB\\sin\\theta$ where $\\theta$ is angle between velocity and field.",
    },
    {
      term: "Fleming's left-hand rule",
      definition:
        "Rule for direction of force on positive charge/current: First finger = Field, seCond finger = Current, thuMb = Motion (force).",
    },
    {
      term: "Circular motion in B field",
      definition:
        "When $v \\perp B$, magnetic force provides centripetal force → particle moves in circle of radius $r = mv/qB$.",
    },
    {
      term: "Cyclotron frequency",
      definition:
        "The frequency of circular motion in a magnetic field: $f = qB/2\\pi m$ — independent of speed.",
    },
    {
      term: "Mass spectrometer",
      definition:
        "Device using magnetic field to separate ions by mass-to-charge ratio $m/q$.",
    },
    {
      term: "Helical path",
      definition:
        "Path of charged particle when velocity has component parallel to B — combines circular and linear motion.",
    },
  ],
  concepts: [
    {
      id: "physhl-u4-charge-force",
      title: "Force on a moving charge",
      skill:
        "Apply $F = qvB\\sin\\theta$, determine force direction, and derive the circular path radius for perpendicular motion.",
      lesson: {
        sections: [
          {
            heading: "The magnetic force",
            body: "A charged particle moving through a magnetic field experiences force $F = qvB\\sin\\theta$ where $\\theta$ is the angle between velocity $v$ and field $B$. The force is always perpendicular to both $v$ and $B$. It does NO work — it changes the direction of motion but not the speed (kinetic energy stays constant).",
          },
          {
            heading: "Direction: Fleming's left-hand rule",
            body: "For a positive charge (or conventional current): point First finger in Field direction, seCond finger in Current/velocity direction, thuMb gives force direction. For negative charges (electrons), the direction is REVERSED. When $v \\parallel B$ ($\\theta = 0$), force = 0 — particle moves straight through.",
          },
          {
            heading: "Circular motion",
            body: "When $v \\perp B$ ($\\theta = 90°$), the magnetic force is always perpendicular to velocity — exactly like a centripetal force. The particle moves in a circle: $qvB = \\frac{mv^2}{r}$ → $r = \\frac{mv}{qB}$. Radius depends on mass, speed, charge and field — NOT on the direction of motion. Period $T = 2\\pi m/qB$ (independent of speed!).",
          },
        ],
        keyFormulas: [
          { name: "Magnetic force", statement: "$F = qvB\\sin\\theta$" },
          {
            name: "Circular radius",
            statement: "$r = \\frac{mv}{qB}$ when $v \\perp B$",
          },
          {
            name: "Period",
            statement: "$T = \\frac{2\\pi m}{qB}$ — independent of speed",
          },
        ],
        workedExample: {
          problem:
            "A proton ($q = 1.6\\times10^{-19}$ C, $m = 1.67\\times10^{-27}$ kg) moves at $10^6$ m/s perpendicular to a 0.50 T field. Find force and radius.",
          solution:
            "$F = qvB = 1.6\\times10^{-19} \\times 10^6 \\times 0.50 = 8.0\\times10^{-14}$ N. $r = mv/qB = 1.67\\times10^{-27} \\times 10^6/(1.6\\times10^{-19} \\times 0.50) = 0.021$ m.",
        },
      },
      questions: [
        {
          id: "physhl-u4-cf-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The magnetic force on a moving charge is zero when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Velocity is parallel to the field" },
              { id: "b", text: "The field is strong" },
              { id: "c", text: "Velocity is perpendicular to the field" },
              { id: "d", text: "The charge is positive" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnetic force",
                statement:
                  "$F = qvB\\sin\\theta$ — zero when $\\theta = 0°$ (parallel).",
              },
            ],
            steps: [
              {
                reasoning: "$\\sin 0° = 0$ → force = 0 when $v \\parallel B$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $v \\parallel B$",
            commonErrors: [
              "Choosing perpendicular — that's when force is MAXIMUM.",
            ],
          },
        },
        {
          id: "physhl-u4-cf-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why the magnetic force on a moving charge does no work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Magnetic force",
                statement:
                  "Force always perpendicular to velocity → no component along motion → no work done.",
              },
            ],
            steps: [
              {
                reasoning: "Force is perpendicular to velocity at all times.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Work = force × distance in direction of force; no displacement along force.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Kinetic energy unchanged — only direction changes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Force perpendicular to motion → no work → speed constant.",
            commonErrors: [
              "Saying 'it accelerates the particle' — it only changes direction.",
            ],
          },
        },
        {
          id: "physhl-u4-cf-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An electron moves at $5.0\\times10^6$ m/s perpendicular to a 0.20 T magnetic field. Calculate the radius of its path ($m = 9.11\\times10^{-31}$ kg, $q = 1.6\\times10^{-19}$ C).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circular radius",
                statement: "$r = mv/qB$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$r = 9.11\\times10^{-31} \\times 5.0\\times10^6/(1.6\\times10^{-19} \\times 0.20)$.",
                working: "r = 4.56\\times10^{-24}/3.2\\times10^{-20}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$r = 1.42\\times10^{-4}$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$r = 0.14$ mm.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Very small radius — electrons curve tightly in magnetic fields.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$r = 1.4 \\times 10^{-4}$ m",
            commonErrors: ["Using proton mass — electron is ~1836× lighter."],
          },
        },
        {
          id: "physhl-u4-cf-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A mass spectrometer accelerates ions to a known speed then passes them through a magnetic field.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain how the magnetic field separates ions of different masses.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Derive $r = mv/qB$ from the force balance.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Two ions have the same speed and charge but masses 20 and 22. Calculate the ratio of their radii.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mass spectrometry",
                statement:
                  "Same q, v, B → r ∝ m → heavier ions have larger radius.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Ions with different m have different r = mv/qB.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning:
                  "Larger mass → larger radius → hits detector at different position.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Position of impact identifies mass → isotope separation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Magnetic force = centripetal: $qvB = mv^2/r$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Rearrange: $r = mv/qB$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$r_{22}/r_{20} = m_{22}/m_{20} = 22/20 = 1.1$ (same v, q, B).",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Ratio = 1.1.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Heavier ion (22) has 10% larger radius.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) r ∝ m → separation. (b) r=mv/qB. (c) Ratio 1.1.",
            commonErrors: [
              "Thinking same speed = same radius — radius depends on mass too.",
            ],
          },
        },
        {
          id: "physhl-u4-cf-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The magnetic force on a moving charge is greatest when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Velocity is perpendicular to the field" },
              { id: "b", text: "Velocity is at 45° to the field" },
              { id: "c", text: "The charge is negative" },
              { id: "d", text: "Velocity is parallel to the field" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnetic force",
                statement:
                  "$F = qvB\\sin\\theta$ — maximum when $\\sin\\theta = 1$ ($\\theta = 90°$).",
              },
            ],
            steps: [
              {
                reasoning: "$\\sin 90° = 1$ gives maximum force.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $v \\perp B$",
            commonErrors: ["Choosing parallel — that gives zero force."],
          },
        },
        {
          id: "physhl-u4-cf-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "As a charged particle moves in a uniform magnetic field (perpendicular to its velocity), its kinetic energy:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Remains constant because the force does no work",
              },
              { id: "b", text: "Oscillates between two values" },
              { id: "c", text: "Decreases to zero" },
              { id: "d", text: "Increases steadily" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Magnetic force",
                statement:
                  "Force is always perpendicular to velocity → no work done → speed constant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Perpendicular force changes direction only; $W = Fs\\cos 90° = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Kinetic energy constant",
            commonErrors: [
              "Thinking the particle speeds up — only direction changes.",
            ],
          },
        },
        {
          id: "physhl-u4-cf-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Compared with a positive charge moving in a magnetic field, an electron moving with the same velocity experiences a force in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The opposite direction" },
              { id: "b", text: "The same direction" },
              { id: "c", text: "No force at all" },
              { id: "d", text: "A direction rotated by 90°" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fleming's rule",
                statement:
                  "Negative charges experience force opposite to the Fleming left-hand rule prediction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Force $\\propto q$ — reversing sign of $q$ reverses force direction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Opposite direction",
            commonErrors: ["Forgetting electron charge is negative."],
          },
        },
        {
          id: "physhl-u4-cf-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The radius of the circular path of a charged particle moving perpendicular to a uniform magnetic field depends on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed only" },
              { id: "b", text: "Field strength only" },
              { id: "c", text: "The direction of motion" },
              { id: "d", text: "Mass, speed, charge and field strength" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circular radius",
                statement: "$r = mv/qB$ — depends on $m$, $v$, $q$, $B$.",
              },
            ],
            steps: [
              {
                reasoning: "$r = mv/qB$ contains all four quantities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $m$, $v$, $q$ and $B$",
            commonErrors: [
              "Thinking radius is fixed by field alone — speed and mass matter.",
            ],
          },
        },
        {
          id: "physhl-u4-cf-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The period of revolution of a charged particle in a uniform magnetic field:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is independent of the particle's speed" },
              { id: "b", text: "Increases with speed" },
              { id: "c", text: "Depends on the radius of the path" },
              { id: "d", text: "Decreases with mass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Period",
                statement: "$T = 2\\pi m/qB$ — no dependence on $v$ or $r$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Faster particles travel larger circles in the same time → same period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Independent of speed",
            commonErrors: [
              "Assuming faster = shorter period — radius grows proportionally.",
            ],
          },
        },
        {
          id: "physhl-u4-cf-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A proton ($q = 1.6\\times10^{-19}$ C) moves at $2.0\\times10^6$ m/s perpendicular to a 0.30 T field. Calculate the magnetic force on it.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 9.6e-14, unit: "N", tolerance: 0.5e-14 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnetic force",
                statement: "$F = qvB\\sin 90° = qvB$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$F = 1.6\\times10^{-19} \\times 2.0\\times10^6 \\times 0.30 = 9.6\\times10^{-14}$ N.",
                working:
                  "F = 1.6\\times10^{-19} \\times 2.0\\times10^6 \\times 0.30 = 9.6\\times10^{-14} \\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$F = 9.6\\times10^{-14}$ N.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$F = 9.6 \\times 10^{-14}$ N",
            commonErrors: [
              "Using degrees instead of checking $\\sin 90° = 1$.",
            ],
          },
        },
        {
          id: "physhl-u4-cf-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An electron ($m = 9.11\\times10^{-31}$ kg, $q = 1.6\\times10^{-19}$ C) moves at $3.0\\times10^6$ m/s perpendicular to a 0.20 T field. Calculate the radius of its path.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8.5e-5, unit: "m", tolerance: 0.5e-5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circular radius",
                statement: "$r = mv/qB$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$r = mv/qB = 9.11\\times10^{-31} \\times 3.0\\times10^6/(1.6\\times10^{-19} \\times 0.20)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$r = 8.5\\times10^{-5}$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$r = 0.085$ mm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r = 8.5 \\times 10^{-5}$ m",
            commonErrors: ["Using proton mass instead of electron mass."],
          },
        },
        {
          id: "physhl-u4-cf-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A proton ($q = 1.6\\times10^{-19}$ C, $m = 1.67\\times10^{-27}$ kg) moves at $1.0\\times10^6$ m/s perpendicular to a 0.50 T magnetic field.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the magnetic force on the proton.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the radius of its circular path.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnetic force + radius",
                statement: "$F = qvB$; $r = mv/qB$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$F = qvB = 1.6\\times10^{-19} \\times 1.0\\times10^6 \\times 0.50 = 8.0\\times10^{-14}$ N.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$F = 8.0\\times10^{-14}$ N.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$r = 1.67\\times10^{-27} \\times 1.0\\times10^6/(1.6\\times10^{-19} \\times 0.50) = 0.021$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$r = 0.021$ m (2.1 cm).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 8.0e-14 N. (b) 0.021 m",
            commonErrors: [
              "Forgetting $\\sin 90°$ — velocity is perpendicular so force is $qvB$.",
            ],
          },
        },
        {
          id: "physhl-u4-cf-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A proton ($q = 1.6\\times10^{-19}$ C, $m = 1.67\\times10^{-27}$ kg) moves in a circle in a 0.40 T magnetic field.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the period of its motion.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "State whether the period would change if the proton's speed doubled.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Period",
                statement: "$T = 2\\pi m/qB$ — independent of speed.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$T = 2\\pi \\times 1.67\\times10^{-27}/(1.6\\times10^{-19} \\times 0.40)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$T = 1.64\\times10^{-7}$ s.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$T \\approx 1.6 \\times 10^{-7}$ s.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "No — $T$ does not depend on speed (radius grows instead).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 1.6e-7 s. (b) No change",
            commonErrors: [
              "Thinking faster speed means shorter period — the orbit radius increases proportionally.",
            ],
          },
        },
        {
          id: "physhl-u4-cf-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A charge of $2.0\\times10^{-19}$ C moves at $3.0\\times10^5$ m/s at 30° to a 0.50 T magnetic field. Calculate the magnetic force.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.5e-14, unit: "N", tolerance: 0.2e-14 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnetic force",
                statement: "$F = qvB\\sin\\theta$; $\\sin 30° = 0.5$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$F = 2.0\\times10^{-19} \\times 3.0\\times10^5 \\times 0.50 \\times \\sin 30°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$F = 3.0\\times10^{-14} \\times 0.5 = 1.5\\times10^{-14}$ N — recompute: $qvB = 2.0\\times10^{-19} \\times 3.0\\times10^5 \\times 0.50 = 3.0\\times10^{-14}$ N; times $\\sin 30° = 0.5$ gives $1.5\\times10^{-14}$ N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$F = 1.5\\times10^{-14}$ N.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$F = 1.5 \\times 10^{-14}$ N",
            commonErrors: [
              "Ignoring the angle — must multiply by $\\sin\\theta$.",
            ],
          },
        },
        {
          id: "physhl-u4-cf-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why a charged particle moving perpendicular to a uniform magnetic field follows a circular path at constant speed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circular motion",
                statement:
                  "$qvB$ provides centripetal force $mv^2/r$; force perpendicular to velocity does no work.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With $v \\perp B$, force $F = qvB$ is always perpendicular to velocity.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "A force always perpendicular to motion acts as a centripetal force → circular path.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Since no work is done, speed and kinetic energy remain constant.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Perpendicular magnetic force supplies centripetal force for circular motion; no work done so speed is constant.",
            commonErrors: [
              "Claiming the particle slows down — magnetic force cannot change kinetic energy.",
            ],
          },
        },
        {
          id: "physhl-u4-cf-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "In a mass spectrometer, ions of charge $+e$ are accelerated to speed $v$ and enter a uniform magnetic field $B$ perpendicular to their velocity.",
          parts: [
            {
              label: "a",
              prompt: "Derive the expression for the radius of the ion's path.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how ions of different masses are separated by the instrument.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "An ion of mass 40 u and an ion of mass 44 u have the same charge and speed. Calculate the ratio of their radii.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mass spectrometer",
                statement:
                  "$qvB = mv^2/r$ → $r = mv/qB$; at fixed $q$, $v$, $B$, $r \\propto m$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Magnetic force provides centripetal force: $qvB = mv^2/r$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Rearranging gives $r = mv/qB$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Radius proportional to mass-to-charge ratio.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Different masses → different radii $r = mv/qB$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Ions follow arcs of different radius and strike the detector at different positions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Detector position identifies $m/q$ → isotope separation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$r_{44}/r_{40} = m_{44}/m_{40} = 44/40$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Ratio $= 1.1$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Heavier ion has 10% larger radius.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) r = mv/qB. (b) r ∝ m → different impact positions. (c) 1.1",
            commonErrors: [
              "Thinking equal speed means equal radius — radius also depends on mass.",
            ],
          },
        },
      ],
    },
    {
      id: "physhl-u4-current-force",
      title: "Force on current-carrying conductors",
      skill:
        "Apply $F = BIl\\sin\\theta$ to calculate forces on wires, explain motor operation, and describe parallel current interactions.",
      lesson: {
        sections: [
          {
            heading: "Force on a wire",
            body: "A current-carrying conductor in a magnetic field experiences force $F = BIl\\sin\\theta$ where $I$ is current, $l$ is length in field, and $\\theta$ is angle between wire and field. This is the same physics as the force on moving charges — current is moving charge. Direction by Fleming's left-hand rule.",
          },
          {
            heading: "Electric motors",
            body: "An electric motor uses this force to produce rotation. A coil carrying current in a magnetic field experiences torque. A **split-ring commutator** reverses current direction every half-turn so the coil keeps rotating the same way. The motor converts electrical energy to mechanical work.",
          },
          {
            heading: "Parallel currents",
            body: "Two parallel current-carrying wires attract if currents flow in the SAME direction, repel if OPPOSITE. This is because each wire's magnetic field exerts force on the other's moving charges. This principle is used in the definition of the ampere (historically) and in electromagnetic balances.",
          },
        ],
        keyFormulas: [
          { name: "Force on conductor", statement: "$F = BIl\\sin\\theta$" },
          {
            name: "Motor principle",
            statement: "Current in B field → force → torque → rotation.",
          },
          {
            name: "Parallel currents",
            statement: "Same direction → attract; opposite → repel.",
          },
        ],
        workedExample: {
          problem:
            "A wire of length 0.50 m carrying 2.0 A is placed perpendicular to a 0.30 T field. Calculate the force.",
          solution: "$F = BIl = 0.30 \\times 2.0 \\times 0.50 = 0.30$ N.",
        },
      },
      questions: [
        {
          id: "physhl-u4-cw-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The force on a current-carrying wire in a magnetic field is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$F = BIl^2$" },
              { id: "b", text: "$F = IV$" },
              { id: "c", text: "$F = BIl\\sin\\theta$" },
              { id: "d", text: "$F = qvB$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Force on conductor",
                statement: "$F = BIl\\sin\\theta$",
              },
            ],
            steps: [
              {
                reasoning: "Force on wire = B × current × length × sin(angle).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $F = BIl\\sin\\theta$",
            commonErrors: [
              "Confusing with single charge force — wire has many charges.",
            ],
          },
        },
        {
          id: "physhl-u4-cw-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how a split-ring commutator allows a DC motor to rotate continuously.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DC motor",
                statement:
                  "Commutator reverses current every half-turn → torque always same direction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Coil in B field experiences force → torque → rotation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After half-turn, current would reverse torque — commutator reverses current.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Torque stays same direction → continuous rotation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Commutator reverses current each half-turn → continuous same-direction torque.",
            commonErrors: [
              "Saying 'motor stops after half turn' — commutator prevents this.",
            ],
          },
        },
        {
          id: "physhl-u4-cw-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two parallel wires carry currents of 3.0 A and 5.0 A in the SAME direction, separated by 0.10 m. Calculate the force per unit length between them ($\\mu_0 = 4\\pi \\times 10^{-7}$ T m/A).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Force between wires",
                statement: "$F/L = \\mu_0 I_1 I_2 / (2\\pi d)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply formula: $F/L = (4\\pi\\times10^{-7} \\times 3.0 \\times 5.0)/(2\\pi \\times 0.10)$.",
                working: "F/L = (4\\pi\\times10^{-7} \\times 15)/(0.2\\pi)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Simplify: $F/L = (4 \\times 15 \\times 10^{-7})/(2 \\times 0.10) = 3.0\\times10^{-5}$ N/m.",
                working: "F/L = 3.0\\times10^{-5} \\text{ N/m}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Force is attractive (same direction currents).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "$F/L = 3.0 \\times 10^{-5}$ N/m attractive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$F/L = 3.0 \\times 10^{-5}$ N/m (attractive)",
            commonErrors: [
              "Forgetting $2\\pi$ in denominator — check formula carefully.",
            ],
          },
        },
        {
          id: "physhl-u4-cw-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A rectangular coil of 50 turns, dimensions 0.10 m × 0.20 m, carries 0.50 A in a 0.40 T field.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the maximum torque when the coil is parallel to the field.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the torque when the coil is at 30° to the field.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why torque is maximum when coil is parallel to field.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coil torque",
                statement:
                  "$\\tau = BIA\\sin\\theta$ where $\\theta$ is angle between field and coil normal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Area $A = 0.10 \\times 0.20 = 0.020$ m²; $\\tau_{max} = BIAN = 0.40 \\times 0.50 \\times 0.020 \\times 50 = 0.20$ N m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\tau_{max} = 0.20$ N m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Includes N turns.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "$\\tau = 0.20 \\times \\sin 30° = 0.20 \\times 0.5 = 0.10$ N m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\tau = 0.10$ N m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Half of maximum.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "When parallel to field, forces on opposite sides are maximum and opposite → maximum torque.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "$\\sin 90° = 1$ → maximum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 0.20 N m. (b) 0.10 N m. (c) Maximum when sinθ=1 (parallel).",
            commonErrors: ["Forgetting number of turns N in torque formula."],
          },
        },
        {
          id: "physhl-u4-cw-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The force on a current-carrying wire in a magnetic field is maximum when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The wire has no length in the field" },
              { id: "b", text: "The current is zero" },
              { id: "c", text: "The wire is perpendicular to the field" },
              { id: "d", text: "The wire is parallel to the field" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Force on conductor",
                statement:
                  "$F = BIl\\sin\\theta$ — maximum when $\\theta = 90°$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sin 90° = 1$ gives maximum force.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Wire perpendicular to field",
            commonErrors: ["Choosing parallel — that gives zero force."],
          },
        },
        {
          id: "physhl-u4-cw-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Two long parallel wires carry currents in the SAME direction. The wires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rotate to become perpendicular" },
              { id: "b", text: "Repel each other" },
              { id: "c", text: "Attract each other" },
              { id: "d", text: "Experience no force" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parallel currents",
                statement:
                  "Same-direction currents attract; opposite-direction repel.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each wire's field acts on the other's current; same direction → attraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Attract",
            commonErrors: ["Reversing the rule — opposite currents repel."],
          },
        },
        {
          id: "physhl-u4-cw-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A current-carrying wire experiences zero magnetic force when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The wire is parallel to the magnetic field" },
              { id: "b", text: "The wire is perpendicular to the field" },
              { id: "c", text: "The field is uniform" },
              { id: "d", text: "The current is very large" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Force on conductor",
                statement:
                  "$F = BIl\\sin\\theta$ — zero when $\\theta = 0°$ (parallel).",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sin 0° = 0$ → no force when wire is parallel to field.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Wire parallel to field",
            commonErrors: [
              "Thinking uniform field gives no force — orientation matters.",
            ],
          },
        },
        {
          id: "physhl-u4-cw-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Fleming's left-hand rule is used to find:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The direction of induced EMF" },
              {
                id: "b",
                text: "The direction of the force on a current-carrying conductor",
              },
              { id: "c", text: "The magnitude of the magnetic field" },
              { id: "d", text: "The direction of electron flow in a wire" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fleming's left-hand rule",
                statement:
                  "First finger = Field, seCond finger = Current, thuMb = force (motion) direction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Left-hand rule gives force direction on currents/positive charges.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Force direction",
            commonErrors: [
              "Confusing with right-hand rule — left hand is for force/motion.",
            ],
          },
        },
        {
          id: "physhl-u4-cw-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The split-ring commutator in a DC motor:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Converts AC to DC in the supply" },
              { id: "b", text: "Reduces eddy current losses" },
              { id: "c", text: "Increases the supply voltage" },
              {
                id: "d",
                text: "Reverses the current direction every half-turn",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DC motor",
                statement:
                  "Commutator reverses coil current each half-turn so torque stays in one direction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reversing current each half-turn keeps the torque direction constant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Reverses current every half-turn",
            commonErrors: [
              "Thinking commutator changes voltage — it switches coil connections.",
            ],
          },
        },
        {
          id: "physhl-u4-cw-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A wire of length 0.30 m carries 2.5 A perpendicular to a 0.40 T field. Calculate the force on it.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.3, unit: "N", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Force on conductor",
                statement: "$F = BIl\\sin 90° = BIl$.",
              },
            ],
            steps: [
              {
                reasoning: "$F = 0.40 \\times 2.5 \\times 0.30 = 0.30$ N.",
                working: "F = 0.40 \\times 2.5 \\times 0.30 = 0.30 \\text{ N}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$F = 0.30$ N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F = 0.30$ N",
            commonErrors: [
              "Multiplying by length twice — formula uses $l$ once.",
            ],
          },
        },
        {
          id: "physhl-u4-cw-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Two long parallel wires 0.050 m apart carry currents of 2.0 A and 4.0 A in the SAME direction. Calculate the force per unit length between them.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.2e-5, unit: "N/m", tolerance: 0.2e-5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Force between wires",
                statement: "$F/L = \\mu_0 I_1 I_2/(2\\pi d)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$F/L = (4\\pi\\times10^{-7} \\times 2.0 \\times 4.0)/(2\\pi \\times 0.050)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$F/L = (4 \\times 8 \\times 10^{-7})/(0.10) = 3.2\\times10^{-5}$ N/m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$F/L = 3.2\\times10^{-5}$ N/m (attractive).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$F/L = 3.2 \\times 10^{-5}$ N/m attractive",
            commonErrors: ["Dropping the $2\\pi$ or $\\mu_0$ factor."],
          },
        },
        {
          id: "physhl-u4-cw-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A rectangular coil of 100 turns and area 0.020 m² carries 0.80 A in a 0.50 T field.",
          parts: [
            { label: "a", prompt: "Calculate the maximum torque.", marks: 2 },
            {
              label: "b",
              prompt:
                "Calculate the torque when the coil is at 30° to the field.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Coil torque",
                statement:
                  "$\\tau = BIAN\\sin\\theta$ — max at $\\theta = 90°$ (coil parallel to field).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\tau_{max} = 0.50 \\times 0.80 \\times 0.020 \\times 100 = 0.80$ N m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\tau_{max} = 0.80$ N m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\tau = 0.80 \\times \\sin 30° = 0.40$ N m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\tau = 0.40$ N m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 0.80 N m. (b) 0.40 N m",
            commonErrors: ["Forgetting the number of turns N in the torque."],
          },
        },
        {
          id: "physhl-u4-cw-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A straight wire of length 0.20 m carries a current of 1.5 A.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the force on it when placed perpendicular to a 0.60 T field.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the force when the wire is at 60° to the field.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Force on conductor",
                statement: "$F = BIl\\sin\\theta$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$F = 0.60 \\times 1.5 \\times 0.20 \\times \\sin 90° = 0.18$ N.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$F = 0.18$ N.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$F = 0.18 \\times \\sin 60° = 0.18 \\times 0.866 = 0.156$ N.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$F = 0.16$ N.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 0.18 N. (b) 0.16 N",
            commonErrors: ["Using $\\sin 60° \\approx 0.5$ — it is 0.866."],
          },
        },
        {
          id: "physhl-u4-cw-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Two long parallel wires 0.10 m apart carry currents of 3.0 A and 6.0 A in OPPOSITE directions. Calculate the force per unit length between them.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.6e-5, unit: "N/m", tolerance: 0.2e-5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Force between wires",
                statement:
                  "$F/L = \\mu_0 I_1 I_2/(2\\pi d) = 2\\times10^{-7} I_1I_2/d$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$F/L = 2\\times10^{-7} \\times 3.0 \\times 6.0/0.10 = 3.6\\times10^{-5}$ N/m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Opposite currents → force is repulsive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$F/L = 3.6\\times10^{-5}$ N/m (repulsive).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$F/L = 3.6 \\times 10^{-5}$ N/m repulsive",
            commonErrors: ["Saying attractive — opposite currents repel."],
          },
        },
        {
          id: "physhl-u4-cw-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how a simple DC electric motor produces continuous rotation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DC motor",
                statement:
                  "Current-carrying coil in B field → force/torque; commutator keeps torque direction constant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Current in the coil experiences force $F = BIl$ in the magnetic field.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Opposite sides of the coil feel opposite forces → torque about the axle.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "After half a turn the torque would reverse — the split-ring commutator reverses the current.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Current reversal keeps torque in the same direction → continuous rotation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electrical energy is converted to mechanical work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Coil in field → torque; commutator reverses current each half-turn → continuous rotation.",
            commonErrors: [
              "Forgetting the commutator — without it the motor oscillates.",
            ],
          },
        },
        {
          id: "physhl-u4-cw-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "A rectangular coil of 80 turns, 0.15 m × 0.25 m, carries 0.60 A in a uniform 0.30 T field.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the area of the coil and the maximum torque.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Calculate the torque when the plane of the coil is at 45° to the field.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the torque is zero when the coil plane is perpendicular to the field.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Coil torque",
                statement:
                  "$\\tau = BIAN\\sin\\theta$; $\\theta$ measured between field and coil normal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$A = 0.15 \\times 0.25 = 0.0375$ m².",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$\\tau_{max} = BIAN = 0.30 \\times 0.60 \\times 0.0375 \\times 80$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\tau_{max} = 0.54$ N m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both area and maximum torque stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$\\tau = 0.54 \\times \\sin 45° = 0.54 \\times 0.707 = 0.38$ N m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\tau = 0.38$ N m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "When the plane is perpendicular to B, the forces on the two sides are equal and opposite along the same line — no turning effect.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Equivalently $\\sin\\theta = \\sin 0° = 0$ → $\\tau = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Zero torque at this orientation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) A = 0.0375 m², τmax = 0.54 N m. (b) 0.38 N m. (c) Forces collinear → no torque.",
            commonErrors: [
              "Confusing coil plane vs coil normal angle — θ in τ = BIAN sinθ uses the normal.",
            ],
          },
        },
      ],
    },
  ],
};
