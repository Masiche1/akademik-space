import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "physhl-u3-lesson-3-2",
  code: "3-2",
  title: "Diffraction and Interference",
  goal: "I CAN apply the single-slit diffraction condition $\\theta = \\lambda/a$, analyse double-slit interference patterns, and use the diffraction grating equation $d\\sin\\theta = n\\lambda$.",
  standards: ["Paper 1", "Paper 2", "AHL C1"],
  vocabulary: [
    {
      term: "Single-slit diffraction",
      definition:
        "The spreading of light through a narrow slit, producing a central maximum and weaker side maxima; first minimum at $\\theta = \\lambda/a$.",
    },
    {
      term: "Diffraction grating",
      definition:
        "A surface with many equally spaced slits; produces sharp principal maxima at $d\\sin\\theta = n\\lambda$.",
    },
    {
      term: "Grating spacing ($d$)",
      definition:
        "The distance between adjacent slits: $d = 1/N$ where $N$ is lines per unit length.",
    },
    {
      term: "Resolving power",
      definition:
        "The ability to distinguish two close wavelengths; increases with number of slits and diffraction order.",
    },
    {
      term: "Path difference",
      definition:
        "The difference in distance travelled by waves from two sources to a point; determines interference.",
    },
    {
      term: "Central maximum",
      definition:
        "The brightest, widest part of a diffraction pattern centred on the incident direction.",
    },
  ],
  concepts: [
    {
      id: "physhl-u3-single-slit",
      title: "Single-slit diffraction",
      skill:
        "Apply $\\theta = \\lambda/a$ for the first minimum, describe the diffraction pattern, and explain why narrower slits give wider patterns.",
      lesson: {
        sections: [
          {
            heading: "The pattern",
            body: "Light passing through a single narrow slit diffracts and forms a pattern on a screen: a wide, intense **central maximum** flanked by weaker secondary maxima separated by minima. The first minimum occurs at angle $\\theta$ where $a\\sin\\theta = \\lambda$ (for small angles $\\theta \\approx \\lambda/a$), where $a$ is the slit width and $\\lambda$ the wavelength.",
          },
          {
            heading: "Dependence on slit width",
            body: "Narrower slit → wider diffraction pattern (smaller $a$ → larger $\\theta$). Wider slit → narrower pattern. This is why light diffracts significantly through narrow gaps but not through wide openings. The central maximum width is twice the angle to the first minimum: $2\\theta$.",
          },
          {
            heading: "Why it happens",
            body: "Each point across the slit acts as a source (Huygens' principle). At the first minimum, wavelets from the top and bottom halves of the slit arrive exactly out of phase — destructive interference everywhere. The pattern results from the superposition of all wavelets across the slit aperture.",
          },
        ],
        keyFormulas: [
          {
            name: "First minimum",
            statement:
              "$a\\sin\\theta = \\lambda$ → $\\theta \\approx \\lambda/a$",
          },
          {
            name: "Central maximum width",
            statement: "$2\\theta$ (twice the first-minimum angle)",
          },
          {
            name: "Inverse relationship",
            statement: "Narrower slit → wider pattern.",
          },
        ],
        workedExample: {
          problem:
            "Light of wavelength 500 nm passes through a slit of width 0.10 mm. Find the angle to the first minimum.",
          solution:
            "$\\sin\\theta = \\lambda/a = 500\\times10^{-9}/0.10\\times10^{-3} = 5.0\\times10^{-3}$ → $\\theta = 0.29°$.",
        },
      },
      questions: [
        {
          id: "physhl-u3-ss-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The first minimum of a single-slit diffraction pattern occurs at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$d\\sin\\theta = n\\lambda$" },
              { id: "b", text: "$a\\sin\\theta = \\lambda$" },
              { id: "c", text: "$a\\sin\\theta = n\\lambda$" },
              { id: "d", text: "$\\lambda = a\\theta$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Single-slit first min",
                statement: "$a\\sin\\theta = \\lambda$ for first minimum.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Single-slit first minimum: $a\\sin\\theta = \\lambda$ where $a$ is slit width.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $a\\sin\\theta = \\lambda$",
            commonErrors: [
              "Using grating equation — that's for multiple slits, not single slit.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why narrowing a slit makes the diffraction pattern wider.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Single-slit",
                statement:
                  "$\\theta \\approx \\lambda/a$ — smaller $a$ gives larger angle.",
              },
            ],
            steps: [
              {
                reasoning: "First minimum at $\\theta \\approx \\lambda/a$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Smaller $a$ → larger $\\theta$ → minima further apart → wider pattern.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Inverse relationship: slit width and pattern width are inversely proportional.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\theta \\propto 1/a$ — narrower slit → wider pattern.",
            commonErrors: [
              "Thinking narrower slit = less diffraction — actually MORE diffraction.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Red light (650 nm) and blue light (450 nm) pass through the same slit of width 0.20 mm. Calculate the angle to the first minimum for each and explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Single-slit",
                statement: "$\\theta = \\lambda/a$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Red: $\\theta = 650\\times10^{-9}/0.20\\times10^{-3} = 3.25\\times10^{-3}$ rad = 0.186°.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Blue: $\\theta = 450\\times10^{-9}/0.20\\times10^{-3} = 2.25\\times10^{-3}$ rad = 0.129°.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Red has larger angle — longer wavelength diffracts more.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Pattern width proportional to wavelength.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Red: 0.186°, Blue: 0.129° — red diffracts more.",
            commonErrors: [
              "Thinking shorter wavelength diffracts more — it's the opposite.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Monochromatic light passes through a single slit and forms a diffraction pattern on a screen 2.0 m away.",
          parts: [
            {
              label: "a",
              prompt:
                "The first minimum is at 3.0 mm from the centre. Calculate the slit width if $\\lambda = 600$ nm.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate the width of the central maximum.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe how the pattern changes if the slit is made narrower.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Single-slit geometry",
                statement:
                  "$\\theta = y/L$ for small angles; $a\\sin\\theta = \\lambda$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\tan\\theta \\approx \\theta = y/L = 3.0\\times10^{-3}/2.0 = 1.5\\times10^{-3}$ rad.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$a = \\lambda/\\theta = 600\\times10^{-9}/1.5\\times10^{-3} = 4.0\\times10^{-4}$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$a = 0.40$ mm.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Central maximum width = $2 \\times 3.0 = 6.0$ mm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Width = 6.0 mm.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Narrower slit → larger $\\theta$ → wider central maximum.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Intensity decreases (same light spread over wider area).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\theta \\propto 1/a$ — inverse relationship.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 0.40 mm. (b) 6.0 mm. (c) Wider pattern, lower intensity.",
            commonErrors: [
              "Forgetting factor of 2 for central maximum width — it's twice the first-minimum position.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "If the width of a single slit is increased, the diffraction pattern on a distant screen becomes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Invisible" },
              { id: "b", text: "Narrower" },
              { id: "c", text: "Unchanged" },
              { id: "d", text: "Wider" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Single-slit",
                statement:
                  "$\\theta \\approx \\lambda/a$ — wider slit gives smaller angle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Angle to first minimum is inversely proportional to slit width.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Narrower",
            commonErrors: [
              "Reversing the inverse relationship — narrower slits diffract MORE.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Light of wavelength 500 nm passes through a slit of width 0.25 mm. Calculate the angle to the first minimum in radians.",
          response: {
            type: "numeric",
            parts: [
              { label: "Angle to first minimum", answer: 0.002, unit: "rad" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Single-slit",
                statement: "$\\theta \\approx \\lambda/a$ for small angles",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\theta = \\lambda/a = 500\\times10^{-9}/0.25\\times10^{-3} = 2.0\\times10^{-3}$ rad.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\theta = 0.002$ rad.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = 0.002$ rad",
            commonErrors: ["Forgetting to convert nm and mm to metres."],
          },
        },
        {
          id: "physhl-u3-ss-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Monochromatic light of wavelength 600 nm passes through a single slit. The first minimum falls at $y = 2.0$ mm on a screen 2.0 m away. (a) Calculate the slit width. (b) Calculate the width of the central maximum.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.6, unit: "mm" },
              { label: "b", answer: 4.0, unit: "mm" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Single-slit geometry",
                statement:
                  "$\\theta \\approx y/L$ for small angles; $a\\sin\\theta = \\lambda$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\theta \\approx y/L = 2.0\\times10^{-3}/2.0 = 1.0\\times10^{-3}$ rad.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$a = \\lambda/\\theta = 600\\times10^{-9}/1.0\\times10^{-3} = 6.0\\times10^{-4}$ m $= 0.60$ mm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$a = 0.60$ mm.", marks: 1, markCode: "A" },
              {
                reasoning: "Central maximum width $= 2y = 4.0$ mm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 0.60 mm. (b) 4.0 mm.",
            commonErrors: [
              "Forgetting the factor of 2 — the central maximum spans both sides of the centre.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Light passes through a slit of width 0.20 mm onto a screen 1.5 m away. (a) Calculate the position of the first minimum for $\\lambda = 600$ nm. (b) Calculate the position of the first minimum for $\\lambda = 450$ nm.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4.5, unit: "mm" },
              { label: "b", answer: 3.375, unit: "mm", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Single-slit geometry",
                statement: "$y = \\lambda L/a$ for the first minimum",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) $y = \\lambda L/a = 600\\times10^{-9} \\times 1.5/0.20\\times10^{-3} = 4.5\\times10^{-3}$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$y = 4.5$ mm.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "(b) $y = 450\\times10^{-9} \\times 1.5/0.20\\times10^{-3} = 3.375\\times10^{-3}$ m $= 3.4$ mm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$y = 3.4$ mm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4.5 mm. (b) 3.4 mm.",
            commonErrors: ["Not converting slit width from mm to m."],
          },
        },
        {
          id: "physhl-u3-ss-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The central maximum of a single-slit diffraction pattern is wider and brighter than the secondary maxima mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The minima are absent on either side" },
              { id: "b", text: "The slit is physically wider at its centre" },
              {
                id: "c",
                text: "All wavelets across the slit interfere constructively on the central axis",
              },
              { id: "d", text: "The wavelength is longer at the centre" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Superposition",
                statement:
                  "On the central axis every point of the slit contributes in phase → maximum constructive interference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At $\\theta = 0$ all wavelets arrive in phase — full constructive interference.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Full constructive interference on the central axis",
            commonErrors: [
              "Thinking the slit has varying width — it is uniform.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A student investigates single-slit diffraction with a laser, measuring the width of the central maximum for two different slit widths.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Single-slit",
                statement:
                  "$\\theta \\approx \\lambda/a$; first minimum when wavelets from top and bottom halves cancel.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Pattern width is inversely proportional to slit width — narrower slit gives wider pattern.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "(b) Each point of the slit acts as a source (Huygens); at the first minimum contributions from the two halves arrive out of phase.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Smaller $a$ → larger $\\theta$ for $a\\sin\\theta = \\lambda$ → wider central maximum.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Improvement: measure the distance between BOTH first minima to get full width, or repeat and average.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Another valid improvement: use a longer screen distance or measure several orders.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Inverse relationship; wavelets from slit halves cancel at first minimum; measure full width / repeat trials.",
            commonErrors: [
              "Claiming narrower slits give narrower patterns — the relationship is inverse.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When the wavelength of light passing through a single slit is increased, the angle to the first minimum:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays the same" },
              { id: "b", text: "Decreases" },
              { id: "c", text: "Becomes zero" },
              { id: "d", text: "Increases" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Single-slit",
                statement:
                  "$\\theta \\approx \\lambda/a$ — angle proportional to wavelength.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Larger $\\lambda$ → larger $\\theta$ → more spreading.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Increases",
            commonErrors: [
              "Thinking shorter wavelengths diffract more — longer wavelengths spread further.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The first minimum of a single-slit pattern is at $y = 3.0$ mm with slit width $a$. If the slit width is doubled, (a) calculate the new position of the first minimum; (b) calculate the new width of the central maximum.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.5, unit: "mm" },
              { label: "b", answer: 3.0, unit: "mm" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Single-slit",
                statement:
                  "$y \\propto 1/a$ — doubling $a$ halves the position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Doubling slit width halves the diffraction angle: new $y = 3.0/2 = 1.5$ mm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$y = 1.5$ mm.", marks: 1, markCode: "A" },
              {
                reasoning: "Central maximum width $= 2y = 3.0$ mm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Width $= 3.0$ mm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1.5 mm. (b) 3.0 mm.",
            commonErrors: ["Doubling the position instead of halving it."],
          },
        },
        {
          id: "physhl-u3-ss-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which combination produces the WIDEST central maximum in a single-slit pattern?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long wavelength through a narrow slit" },
              { id: "b", text: "Long wavelength through a wide slit" },
              { id: "c", text: "Short wavelength through a wide slit" },
              { id: "d", text: "Short wavelength through a narrow slit" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Single-slit",
                statement:
                  "$\\theta \\approx \\lambda/a$ — maximise $\\lambda$, minimise $a$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Angle is proportional to $\\lambda$ and inversely proportional to $a$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Long wavelength, narrow slit",
            commonErrors: [
              "Choosing short wavelength — short $\\lambda$ gives narrow diffraction.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Light of wavelength 550 nm passes through a slit of width 0.25 mm. A screen is placed 2.0 m away.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Single-slit geometry",
                statement: "$\\theta \\approx \\lambda/a$; $y = \\theta L$",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) $\\theta = \\lambda/a = 550\\times10^{-9}/0.25\\times10^{-3} = 2.2\\times10^{-3}$ rad.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) $y = \\theta L = 2.2\\times10^{-3} \\times 2.0 = 4.4\\times10^{-3}$ m $= 4.4$ mm on each side.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pattern is symmetric — first minima at $\\pm 4.4$ mm from centre.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Central maximum width $= 8.8$ mm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $2.2\\times10^{-3}$ rad. (b) $\\pm 4.4$ mm; central width 8.8 mm.",
            commonErrors: [
              "Quoting only one side — minima occur symmetrically on both sides.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A laser of wavelength 650 nm shines through a slit onto a screen 3.0 m away. The first minimum is measured at 9.75 mm from the centre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Single-slit geometry",
                statement: "$a = \\lambda L/y$; central maximum width $= 2y$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) $a = \\lambda L/y = 650\\times10^{-9} \\times 3.0/9.75\\times10^{-3} = 2.0\\times10^{-4}$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$a = 0.20$ mm.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "(b) Central maximum width $= 2 \\times 9.75 = 19.5$ mm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Width $= 19.5$ mm.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "(c) The central maximum is brightest because all wavelets across the slit interfere constructively on axis.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 0.20 mm. (b) 19.5 mm. (c) Full constructive interference at centre.",
            commonErrors: [
              "Using $y$ instead of $2y$ for the central maximum width.",
            ],
          },
        },
        {
          id: "physhl-u3-ss-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Monochromatic light of unknown wavelength passes through a single slit of width 0.30 mm. On a screen 2.5 m away the first minimum is at 5.0 mm from the centre.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the wavelength of the light.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the width of the central maximum.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The slit is replaced by one twice as wide. Predict and explain the change in the pattern.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "State one way to reduce the uncertainty in the measurement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Single-slit geometry",
                statement:
                  "$\\lambda = ay/L$; central width $= 2y$; $y \\propto 1/a$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\lambda = ay/L = 0.30\\times10^{-3} \\times 5.0\\times10^{-3}/2.5 = 6.0\\times10^{-7}$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\lambda = 600$ nm.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Central maximum width $= 2y = 10.0$ mm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Width $= 10.0$ mm.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Doubling slit width halves $\\theta$, so the pattern becomes half as wide.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Inverse relationship $\\theta \\propto 1/a$ explains the narrowing.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Measure the distance between BOTH first minima and divide by 2, or repeat and average.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Any valid precision improvement (e.g. larger screen distance, parallax avoidance).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 600 nm. (b) 10.0 mm. (c) Pattern halves in width. (d) Measure both minima / repeat.",
            commonErrors: [
              "Forgetting $\\lambda$ requires consistent units — convert mm to m.",
            ],
          },
        },
      ],
    },
    {
      id: "physhl-u3-grating",
      title: "Diffraction gratings and interference",
      skill:
        "Apply the grating equation $d\\sin\\theta = n\\lambda$, determine grating spacing, and explain how multiple slits produce sharp maxima and high resolving power.",
      lesson: {
        sections: [
          {
            heading: "The grating equation",
            body: "A diffraction grating has many equally spaced slits separated by distance $d$. Constructive interference (principal maxima) occurs when $d\\sin\\theta = n\\lambda$ where $n = 0, 1, 2, ...$ is the order. The $n=0$ maximum is always at $\\theta = 0$ (undeviated). Higher orders appear at larger angles.",
          },
          {
            heading: "Grating spacing",
            body: "If a grating has $N$ lines per unit length, the spacing is $d = 1/N$. For example, 500 lines/mm → $d = 1/500\\text{ mm} = 2.0\\times10^{-3}$ mm $= 2.0\\times10^{-6}$ m. Smaller $d$ (more lines) → larger angles between orders → better separation of wavelengths.",
          },
          {
            heading: "Resolving power",
            body: "More slits → sharper maxima → better ability to distinguish close wavelengths (higher resolving power). The resolving power is $R = \\lambda/\\Delta\\lambda = nN$ where $n$ is order and $N$ is total number of slits. This is why gratings are used in spectrometers instead of prisms.",
          },
        ],
        keyFormulas: [
          {
            name: "Grating equation",
            statement: "$d\\sin\\theta = n\\lambda$, $n = 0, 1, 2, ...$",
          },
          {
            name: "Grating spacing",
            statement: "$d = 1/N$ where $N$ = lines per unit length",
          },
          {
            name: "Resolving power",
            statement: "$R = nN$ — increases with order and slit count",
          },
        ],
        workedExample: {
          problem:
            "A grating with 600 lines/mm is illuminated with 589 nm light. Find the angle for the first order maximum.",
          solution:
            "$d = 1/600\\text{ mm} = 1.67\\times10^{-6}$ m. $\\sin\\theta = n\\lambda/d = 589\\times10^{-9}/1.67\\times10^{-6} = 0.353$ → $\\theta = 20.7°$.",
        },
      },
      questions: [
        {
          id: "physhl-u3-gr-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The condition for a principal maximum in a diffraction grating is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n\\lambda = d\\theta$" },
              { id: "b", text: "$d\\sin\\theta = n\\lambda$" },
              { id: "c", text: "$d\\sin\\theta = \\lambda$" },
              { id: "d", text: "$a\\sin\\theta = \\lambda$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Grating equation",
                statement: "$d\\sin\\theta = n\\lambda$ for principal maxima.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Grating maxima: path difference between slits = integer wavelengths.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $d\\sin\\theta = n\\lambda$",
            commonErrors: [
              "Confusing with single-slit — grating has $n$ orders, single slit doesn't.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A grating has 500 lines per mm. Calculate the spacing between adjacent slits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Grating spacing",
                statement: "$d = 1/N$",
              },
            ],
            steps: [
              {
                reasoning: "$N = 500$ lines/mm $= 5.0 \\times 10^5$ lines/m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$d = 1/N = 1/(5.0 \\times 10^5) = 2.0 \\times 10^{-6}$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$d = 2.0$ $\\mu$m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$d = 2.0 \\times 10^{-6}$ m",
            commonErrors: [
              "Using 500 directly — must convert lines/mm to lines/m.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Light of wavelength 550 nm is incident on a grating with spacing $2.0 \\times 10^{-6}$ m. Calculate the angles for the first three orders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Grating equation",
                statement: "$\\sin\\theta = n\\lambda/d$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sin\\theta = n \\times 550\\times10^{-9}/2.0\\times10^{-6} = 0.275n$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "n=1: $\\theta = \\arcsin(0.275) = 16.0°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "n=2: $\\theta = \\arcsin(0.550) = 33.4°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "n=3: $\\theta = \\arcsin(0.825) = 55.6°$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16.0°, 33.4°, 55.6°",
            commonErrors: [
              "Forgetting $\\arcsin$ — $\\sin\\theta$ gives ratio, not angle.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "White light passes through a diffraction grating. The first-order spectrum is observed at 20° from the central maximum.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the grating spacing if the light is 500 nm.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the angle for second-order 500 nm light.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the grating produces a spectrum while a single slit produces a continuous pattern.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain how increasing the number of slits affects the pattern.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grating vs single slit",
                statement:
                  "Grating: discrete orders at specific angles; more slits → sharper maxima.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$d = \\lambda/\\sin\\theta = 500\\times10^{-9}/\\sin 20° = 1.46\\times10^{-6}$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$d = 1.46$ $\\mu$m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$\\sin\\theta = 2 \\times 500\\times10^{-9}/1.46\\times10^{-6} = 0.685$ → $\\theta = 43.2°$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\theta = 43°$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Grating: constructive interference at discrete angles → separate orders per wavelength.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Single slit: continuous diffraction envelope — no wavelength separation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "More slits → sharper, more intense maxima (better resolving power).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$R = nN$ — resolving power proportional to slit count.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 1.46 μm. (b) 43°. (c) Discrete orders vs continuous envelope. (d) Sharper, higher resolution.",
            commonErrors: [
              "Thinking grating and single slit give same pattern — grating gives discrete orders.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The zeroth-order maximum in a diffraction grating pattern is always at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first order position" },
              { id: "b", text: "$\\theta = 90°$" },
              { id: "c", text: "The opposite side of the grating" },
              { id: "d", text: "$\\theta = 0$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grating equation",
                statement:
                  "$n = 0$ gives $\\sin\\theta = 0$ → undeviated central maximum.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For $n=0$, $d\\sin\\theta = 0$ so $\\theta = 0$ — light continues straight through.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $\\theta = 0$",
            commonErrors: [
              "Thinking zeroth order is absent — it is always present at the centre.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A diffraction grating has 1200 lines per mm. Calculate the spacing between adjacent slits.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Grating spacing",
                answer: 8.33e-7,
                unit: "m",
                tolerance: 1e-8,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Grating spacing",
                statement: "$d = 1/N$ with $N$ in lines per metre",
              },
            ],
            steps: [
              {
                reasoning:
                  "$N = 1200$ lines/mm $= 1.2 \\times 10^6$ lines/m; $d = 1/N = 8.33\\times10^{-7}$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$d = 8.3 \\times 10^{-7}$ m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$d = 8.3 \\times 10^{-7}$ m",
            commonErrors: [
              "Forgetting to convert lines/mm to lines/m before inverting.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A grating has 400 lines per mm and is illuminated with light of wavelength 500 nm. (a) Calculate the angle of the first-order maximum. (b) Calculate the angle of the second-order maximum.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 11.5, unit: "°", tolerance: 0.1 },
              { label: "b", answer: 23.6, unit: "°", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Grating equation",
                statement: "$\\sin\\theta = n\\lambda/d$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$d = 1/(4.0\\times10^5) = 2.5\\times10^{-6}$ m; $\\sin\\theta_1 = 500\\times10^{-9}/2.5\\times10^{-6} = 0.20$ → $\\theta_1 = 11.5°$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\theta_1 = 11.5°$.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "$\\sin\\theta_2 = 2 \\times 0.20 = 0.40$ → $\\theta_2 = 23.6°$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\theta_2 = 23.6°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 11.5°. (b) 23.6°.",
            commonErrors: [
              "Reporting $\\sin\\theta$ instead of taking $\\arcsin$.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In first order, light of wavelength 600 nm is diffracted at 30° by a diffraction grating. Calculate the grating spacing.",
          response: {
            type: "numeric",
            parts: [{ label: "Grating spacing", answer: 1.2e-6, unit: "m" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Grating equation",
                statement: "$d = n\\lambda/\\sin\\theta$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$d = \\lambda/\\sin\\theta = 600\\times10^{-9}/\\sin 30° = 600\\times10^{-9}/0.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$d = 1.2\\times10^{-6}$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$d = 1.2$ $\\mu$m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$d = 1.2 \\times 10^{-6}$ m",
            commonErrors: [
              "Using degrees directly in $\\sin$ without ensuring calculator is in degree mode.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A grating has spacing $2.0 \\times 10^{-6}$ m and is used with light of wavelength 500 nm. The highest order that can be observed is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "5" },
              { id: "c", text: "4" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grating equation",
                statement:
                  "Need $\\sin\\theta \\leq 1$ → $n_{max} = \\lfloor d/\\lambda \\rfloor$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$d/\\lambda = 2.0\\times10^{-6}/500\\times10^{-9} = 4$ → orders $n = 0, 1, 2, 3, 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 4",
            commonErrors: [
              "Forgetting $n=0$ counts, or allowing $\\sin\\theta > 1$.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A grating of spacing $2.0 \\times 10^{-6}$ m is illuminated with light containing wavelengths 500 nm and 600 nm. (a) Calculate the first-order angle for the 500 nm light. (b) Calculate the first-order angle for the 600 nm light. (c) Calculate the angular separation between them.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 14.5, unit: "°", tolerance: 0.1 },
              { label: "b", answer: 17.5, unit: "°", tolerance: 0.1 },
              { label: "c", answer: 3.0, unit: "°", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Grating equation",
                statement: "$\\sin\\theta = n\\lambda/d$",
              },
            ],
            steps: [
              {
                reasoning:
                  "500 nm: $\\sin\\theta = 0.25$ → $\\theta = 14.5°$; 600 nm: $\\sin\\theta = 0.30$ → $\\theta = 17.5°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\theta_{500} = 14.5°$ and $\\theta_{600} = 17.5°$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Angular separation $\\Delta\\theta = 17.5° - 14.5° = 3.0°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta\\theta = 3.0°$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 14.5° and 17.5°. (b) 3.0°.",
            commonErrors: ["Subtracting wavelengths instead of angles."],
          },
        },
        {
          id: "physhl-u3-gr-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Increasing the number of lines per mm on a diffraction grating:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increases the slit spacing $d$" },
              { id: "b", text: "Removes all higher orders" },
              { id: "c", text: "Has no effect on the pattern" },
              {
                id: "d",
                text: "Decreases $d$ and increases the angular spread of orders",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Grating spacing",
                statement: "$d = 1/N$ — more lines per mm means smaller $d$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Smaller $d$ → larger $\\sin\\theta$ for given order → wider angular separation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Smaller $d$, wider spread",
            commonErrors: [
              "Thinking more lines = larger spacing — it is the inverse.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a diffraction grating is preferred over a prism for analysing the emission spectrum of a gas discharge lamp.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grating vs prism",
                statement:
                  "Grating gives discrete, sharp maxima per wavelength; many slits give high resolving power $R = nN$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The grating equation $d\\sin\\theta = n\\lambda$ gives a specific angle for each wavelength in each order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Many slits produce very sharp maxima → closely spaced wavelengths can be distinguished.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Resolving power $R = nN$ is large for gratings — better spectral resolution than a prism.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "A prism refracts all wavelengths continuously with less separation at short wavelengths.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Grating gives sharp discrete orders and high resolving power $R = nN$.",
            commonErrors: [
              "Claiming prisms give better resolution — gratings are superior for spectra.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The second-order maximum of light of wavelength 550 nm from a diffraction grating appears at 30°. (a) Calculate the grating spacing. (b) Calculate the number of lines per mm.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.2e-6, unit: "m" },
              { label: "b", answer: 455, unit: "lines/mm", tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Grating equation",
                statement:
                  "$d = n\\lambda/\\sin\\theta$; lines per mm $= 10^{-3}/d$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$d = n\\lambda/\\sin\\theta = 2 \\times 550\\times10^{-9}/\\sin 30° = 2.2\\times10^{-6}$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$d = 2.2$ $\\mu$m.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Lines per m $= 1/d = 4.55\\times10^5$; per mm $= 455$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "455 lines/mm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2.2\\times10^{-6}$ m. (b) 455 lines/mm.",
            commonErrors: ["Using $n=1$ — this is the SECOND order so $n=2$."],
          },
        },
        {
          id: "physhl-u3-gr-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A diffraction grating is used in a spectrometer to resolve two closely spaced spectral lines of similar wavelength $\\lambda$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Resolving power",
                statement: "$R = \\lambda/\\Delta\\lambda = nN$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Resolving power $R = \\lambda/\\Delta\\lambda$ measures the minimum wavelength difference that can be distinguished.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$R = nN$ where $n$ is the order and $N$ the total number of slits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Increasing the number of slits $N$ increases $R$ → smaller $\\Delta\\lambda$ resolvable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Using a higher order $n$ also increases $R$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "More slits also make maxima sharper and more intense.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$R = nN$ — increase slit count or diffraction order to resolve closer wavelengths.",
            commonErrors: [
              "Thinking resolution depends only on slit spacing $d$ — it depends on total slits $N$.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Compared with a prism, a diffraction grating:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only works for sound waves" },
              { id: "b", text: "Produces no spectrum at all" },
              { id: "c", text: "Cannot separate different colours" },
              {
                id: "d",
                text: "Separates wavelengths more precisely, especially at high orders",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resolving power",
                statement:
                  "Gratings give high resolving power $R = nN$; maxima sharpen with order and slit count.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each order spreads wavelengths further apart and maxima are sharper.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Better wavelength separation",
            commonErrors: [
              "Underestimating grating resolution — it exceeds prism dispersion.",
            ],
          },
        },
        {
          id: "physhl-u3-gr-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Monochromatic light of unknown wavelength is incident normally on a grating with 600 lines per mm. The second-order maximum appears at 30°.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the wavelength of the light.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the angle of the first-order maximum.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the angle of the third-order maximum.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain whether a fourth-order maximum can be observed.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Grating equation",
                statement: "$d\\sin\\theta = n\\lambda$; $d = 1/N$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$d = 1/(6.0\\times10^5) = 1.67\\times10^{-6}$ m; $\\lambda = d\\sin\\theta/n = 1.67\\times10^{-6} \\times 0.5/2 = 4.17\\times10^{-7}$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\lambda = 417$ nm.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$\\sin\\theta = \\lambda/d = 0.25$ → $\\theta = 14.5°$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\theta = 14.5°$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$\\sin\\theta = 3 \\times 0.25 = 0.75$ → $\\theta = 48.6°$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\theta = 48.6°$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "For $n = 4$: $\\sin\\theta = 4 \\times 0.25 = 1.0$ → $\\theta = 90°$, grazing emergence — no observable fourth order.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\sin\\theta$ cannot exceed 1, so order 4 cannot be seen.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 417 nm. (b) 14.5°. (c) 48.6°. (d) No — $\\sin\\theta = 1$ at best.",
            commonErrors: [
              "Forgetting to convert 600 lines/mm to lines/m when finding $d$.",
            ],
          },
        },
      ],
    },
  ],
};
