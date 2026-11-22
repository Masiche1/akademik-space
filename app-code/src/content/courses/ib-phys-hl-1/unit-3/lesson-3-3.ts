import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "physhl-u3-lesson-3-3",
  code: "3-3",
  title: "The Doppler Effect and Wave Energy",
  goal: "I CAN apply the Doppler effect equations for moving sources and observers, explain redshift and blueshift, and calculate wave intensity and energy.",
  standards: ["Paper 1", "Paper 2", "AHL C1"],
  vocabulary: [
    {
      term: "Doppler effect",
      definition:
        "The change in observed frequency/wavelength of a wave when the source or observer moves relative to the medium.",
    },
    {
      term: "Blueshift",
      definition:
        "Increase in observed frequency (decrease in wavelength) when source and observer approach each other.",
    },
    {
      term: "Redshift",
      definition:
        "Decrease in observed frequency (increase in wavelength) when source and observer recede from each other.",
    },
    {
      term: "Mach number",
      definition:
        "The ratio of source speed to wave speed: $M = v_s/v$; $M > 1$ is supersonic.",
    },
    {
      term: "Shock wave",
      definition:
        "A cone-shaped pressure wave formed when a source moves faster than the wave speed ($M > 1$).",
    },
    {
      term: "Wave intensity",
      definition:
        "Power per unit area: $I = P/A$; for a point source $I \\propto 1/r^2$ (inverse square law).",
    },
  ],
  concepts: [
    {
      id: "physhl-u3-doppler",
      title: "The Doppler effect",
      skill:
        "Apply Doppler equations for moving sources and observers, distinguish blueshift and redshift, and explain shock waves and sonic booms.",
      lesson: {
        sections: [
          {
            heading: "Moving source",
            body: "When a source moves towards a stationary observer, the observed frequency increases (blueshift): $f' = \\frac{f v}{v - v_s}$ where $v$ is wave speed and $v_s$ is source speed (towards observer). When moving away: $f' = \\frac{fv}{v + v_s}$ (redshift). The wavelength compresses ahead of the source and stretches behind it.",
          },
          {
            heading: "Moving observer",
            body: "When the observer moves towards a stationary source, they encounter wavefronts more frequently: $f' = f\\left(1 + \\frac{v_o}{v}\\right)$ for observer moving towards source. Moving away: $f' = f\\left(1 - \\frac{v_o}{v}\\right)$. For light (no medium), the relativistic Doppler formula applies, but classical approximation works for $v << c$.",
          },
          {
            heading: "Supersonic motion and shock waves",
            body: "When $v_s > v$ (Mach number $M = v_s/v > 1$), the source outruns its own waves — wavefronts pile up into a **shock wave** (Mach cone). The angle is $\\sin\\theta = v/v_s = 1/M$. The sonic boom is the shock wave reaching an observer — a sudden pressure change, not a continuous sound.",
          },
        ],
        keyFormulas: [
          {
            name: "Moving source",
            statement: "$f' = \\frac{fv}{v \\mp v_s}$ (− towards, + away)",
          },
          {
            name: "Moving observer",
            statement: "$f' = f\\left(1 \\pm \\frac{v_o}{v}\\right)$",
          },
          {
            name: "Mach number",
            statement: "$M = v_s/v$; shock cone $\\sin\\theta = 1/M$",
          },
        ],
        workedExample: {
          problem:
            "An ambulance siren at 800 Hz approaches a stationary observer at 30 m/s (speed of sound = 340 m/s). Find the observed frequency.",
          solution:
            "Approaching: $f' = \\frac{fv}{v - v_s} = \\frac{800 \\times 340}{340 - 30} = \\frac{272000}{310} = 877$ Hz.",
        },
      },
      questions: [
        {
          id: "physhl-u3-dop-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When a source moves towards a stationary observer, the observed frequency:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays the same" },
              { id: "b", text: "Increases (blueshift)" },
              { id: "c", text: "Decreases (redshift)" },
              { id: "d", text: "Becomes zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doppler effect",
                statement: "Approaching source → higher frequency (blueshift).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Approaching source compresses wavelength → higher observed frequency.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Increases — blueshift",
            commonErrors: [
              "Reversing — approaching gives blueshift (higher f), receding gives redshift.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A car horn emits 500 Hz. The car moves away from a stationary observer at 25 m/s (speed of sound = 340 m/s). Calculate the observed frequency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moving source",
                statement: "$f' = \\frac{fv}{v + v_s}$ for receding source.",
              },
            ],
            steps: [
              {
                reasoning: "Receding: use $v + v_s$ in denominator.",
                working:
                  "f' = \\frac{500 \\times 340}{340 + 25} = \\frac{170000}{365}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f' = 466$ Hz.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Frequency decreased — redshift as expected for receding source.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$f' = 466$ Hz",
            commonErrors: [
              "Using minus sign for receding — receding uses $v + v_s$.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An aircraft flies at Mach 1.5 (speed of sound = 340 m/s). (a) Calculate its speed. (b) Explain what a sonic boom is and when it is heard.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shock wave",
                statement:
                  "Mach > 1 → source outruns waves → shock cone → sonic boom.",
              },
            ],
            steps: [
              {
                reasoning: "(a) $v_s = 1.5 \\times 340 = 510$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Sonic boom = shock wave — cone of compressed air from supersonic flight.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Heard when the Mach cone passes the observer — sudden pressure change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Not a continuous sound — a single pressure pulse.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 510 m/s. (b) Shock wave cone; heard when cone passes observer.",
            commonErrors: [
              "Thinking sonic boom is 'engine noise' — it's the shock wave pressure front.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A police car with siren at 700 Hz approaches a stationary observer, then passes and moves away.",
          parts: [
            {
              label: "a",
              prompt:
                "The car approaches at 30 m/s. Calculate the observed frequency (v = 340 m/s).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "After passing, the car recedes at 30 m/s. Calculate the observed frequency.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the observer hears a sudden drop in pitch as the car passes.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Astronomers observe a distant galaxy's spectral lines shifted to longer wavelengths. What does this tell us?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doppler shift",
                statement:
                  "Approaching → blueshift (higher f); receding → redshift (lower f); redshift of galaxies → expansion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$f' = \\frac{700 \\times 340}{340 - 30} = \\frac{238000}{310} = 768$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$f' = 768$ Hz (blueshift).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$f' = \\frac{700 \\times 340}{340 + 30} = \\frac{238000}{370} = 643$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$f' = 643$ Hz (redshift).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "As car passes, $v_s$ changes sign → frequency jumps from blueshifted to redshifted.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Sudden pitch drop — classic Doppler effect.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Redshift → galaxy receding → evidence for expanding universe.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Greater redshift = faster recession = greater distance (Hubble's law).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 768 Hz. (b) 643 Hz. (c) Frequency jumps from blue to red. (d) Galaxy receding — universe expanding.",
            commonErrors: [
              "Not realising the frequency changes discontinuously as source passes observer.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A stationary observer hears a higher frequency from a source when the source:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is stationary" },
              { id: "b", text: "Emits a longer wavelength" },
              { id: "c", text: "Moves towards the observer" },
              { id: "d", text: "Moves away from the observer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doppler effect",
                statement:
                  "Approaching source → wavefronts compressed → higher observed frequency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Approaching source emits wavefronts from a shorter distance each period.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Moves towards the observer",
            commonErrors: ["Reversing the Doppler shift direction."],
          },
        },
        {
          id: "physhl-u3-dop-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A source emitting 440 Hz recedes from a stationary observer at 20 m/s (speed of sound = 340 m/s). Calculate the observed frequency.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Observed frequency",
                answer: 416,
                unit: "Hz",
                tolerance: 1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moving source",
                statement: "$f' = fv/(v + v_s)$ for receding source",
              },
            ],
            steps: [
              {
                reasoning:
                  "$f' = 440 \\times 340/(340 + 20) = 149600/360 = 415.6$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f' = 416$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f' = 416$ Hz",
            commonErrors: [
              "Using $v - v_s$ for a receding source — that would give a higher frequency.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A stationary source emits 500 Hz. An observer moves towards it at 30 m/s, then later moves away from it at 30 m/s (speed of sound = 340 m/s). (a) Calculate the observed frequency while approaching. (b) Calculate the observed frequency while receding.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 544, unit: "Hz", tolerance: 1 },
              { label: "b", answer: 456, unit: "Hz", tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moving observer",
                statement: "$f' = f(1 \\pm v_o/v)$",
              },
            ],
            steps: [
              {
                reasoning: "Approaching: $f' = 500(1 + 30/340) = 544$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f' = 544$ Hz.", marks: 1, markCode: "A" },
              {
                reasoning: "Receding: $f' = 500(1 - 30/340) = 456$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f' = 456$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 544 Hz. (b) 456 Hz.",
            commonErrors: [
              "Using the moving-source formula for a moving observer.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A source of frequency 600 Hz moves away from a stationary observer at 30 m/s (speed of sound = 340 m/s). Calculate the observed wavelength.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Observed wavelength",
                answer: 0.617,
                unit: "m",
                tolerance: 0.005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moving source",
                statement:
                  "Receding source stretches wavelength: $\\lambda' = (v + v_s)/f$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\lambda' = (v + v_s)/f = (340 + 30)/600 = 370/600 = 0.617$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\lambda' = 0.617$ m.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Wavelength increased (redshift) as expected for a receding source.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$\\lambda' = 0.617$ m",
            commonErrors: [
              "Forgetting wavelength stretches when the source recedes.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A sound source moving faster than the speed of sound produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only a slightly higher pitch" },
              { id: "b", text: "No waves ahead of it" },
              { id: "c", text: "A lower amplitude everywhere" },
              { id: "d", text: "A shock wave (sonic boom)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shock wave",
                statement:
                  "$v_s > v$ (Mach > 1) → wavefronts pile into a cone → sonic boom.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Supersonic source outruns its wavefronts, forming a Mach cone.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** A shock wave",
            commonErrors: [
              "Thinking it is just a large Doppler shift — a shock wave forms.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The Mach cone half-angle $\\theta$ satisfies $\\sin\\theta = 1/M$. (a) Calculate $\\theta$ for Mach 2.0. (b) Calculate $\\theta$ for Mach 1.5.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, unit: "°" },
              { label: "b", answer: 41.8, unit: "°", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mach cone",
                statement: "$\\sin\\theta = v/v_s = 1/M$",
              },
            ],
            steps: [
              {
                reasoning: "M = 2.0: $\\sin\\theta = 0.5$ → $\\theta = 30°$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\theta = 30°$.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "M = 1.5: $\\sin\\theta = 0.667$ → $\\theta = 41.8°$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\theta = 41.8°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30°. (b) 41.8°.",
            commonErrors: [
              "Using $\\theta = \\arcsin(M)$ instead of $\\arcsin(1/M)$.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Redshift of a star's spectral lines indicates that the star is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very hot" },
              { id: "b", text: "Stationary" },
              { id: "c", text: "Approaching us" },
              { id: "d", text: "Receding from us" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doppler effect",
                statement:
                  "Receding source → wavelength increases → spectral lines shift to red.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Redshift = decrease in frequency / increase in wavelength = recession.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Receding",
            commonErrors: ["Confusing redshift with blueshift."],
          },
        },
        {
          id: "physhl-u3-dop-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain what is meant by blueshift and redshift, and describe how astronomers use them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doppler effect",
                statement:
                  "Approaching → blueshift (higher f); receding → redshift (lower f).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Blueshift: observed frequency higher than emitted — source approaching.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Redshift: observed frequency lower — source receding; wavelength stretched.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Measured via shifted spectral lines of known elements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Galaxies show redshift → universe expanding (Hubble's law).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Blueshift = approach, redshift = recession; used to measure stellar/galactic motion and cosmic expansion.",
            commonErrors: [
              "Describing shifts without linking to relative motion.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A train whistle emits 800 Hz. The train approaches a stationary observer at 40 m/s, then passes and recedes at 40 m/s (speed of sound = 340 m/s). (a) Calculate the observed frequency while approaching. (b) Calculate the observed frequency while receding.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 907, unit: "Hz", tolerance: 1 },
              { label: "b", answer: 716, unit: "Hz", tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moving source",
                statement: "$f' = fv/(v \\mp v_s)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Approaching: $f' = 800 \\times 340/(340 - 40) = 272000/300 = 907$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f' = 907$ Hz.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Receding: $f' = 800 \\times 340/(340 + 40) = 272000/380 = 716$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f' = 716$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 907 Hz. (b) 716 Hz.",
            commonErrors: [
              "Swapping the sign of $v_s$ for approaching vs receding.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Describe how the pitch heard by a stationary observer changes as an ambulance with a sounding siren approaches, passes, and moves away. Explain the sudden drop in pitch as it passes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doppler effect",
                statement:
                  "Blueshift while approaching, redshift while receding; sign of $v_s$ flips at closest approach.",
              },
            ],
            steps: [
              {
                reasoning:
                  "While approaching, observed frequency is higher than emitted — blueshift, higher pitch.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "As it passes, $v_s$ changes sign → frequency jumps from blueshifted to redshifted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After passing, frequency is lower — redshift, lower pitch.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The drop is sudden because the relative velocity component along the line of sight changes discontinuously.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pitch is perceived frequency — it follows the Doppler-shifted frequency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Pitch rises (blueshift), drops suddenly at closest approach, then falls below original (redshift).",
            commonErrors: [
              "Describing a gradual slide — the transition is abrupt at closest approach.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "When a sound source moves at exactly the speed of sound (Mach 1):",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound stops being emitted" },
              { id: "b", text: "No Doppler shift occurs" },
              {
                id: "c",
                text: "Wavefronts pile up ahead of it, forming a shock wave",
              },
              { id: "d", text: "The observed frequency doubles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shock wave",
                statement:
                  "At $M = 1$ wavefronts cannot outrun the source and accumulate into a shock front.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At Mach 1 the source keeps pace with its wavefronts — they pile up into a shock wave.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Shock wave forms",
            commonErrors: [
              "Thinking Doppler shift vanishes — it becomes extreme as $v_s \\to v$.",
            ],
          },
        },
        {
          id: "physhl-u3-dop-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A car sounding its horn at 500 Hz approaches a stationary observer at 30 m/s. The speed of sound is 340 m/s.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the observed frequency while the car approaches.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "After passing, the car recedes at 30 m/s. Calculate the new observed frequency.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If the observer walks towards the approaching car at 2 m/s, calculate the new observed frequency.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "State the assumptions made in these calculations.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Doppler effect",
                statement:
                  "$f' = fv/(v - v_s)$; moving observer $f' = f(1 + v_o/v)$; combined $f' = f(v + v_o)/(v - v_s)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$f' = 500 \\times 340/(340 - 30) = 170000/310 = 548$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$f' = 548$ Hz.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$f' = 500 \\times 340/(340 + 30) = 170000/370 = 459$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$f' = 459$ Hz.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$f' = 500 \\times (340 + 2)/(340 - 30) = 500 \\times 342/310 = 552$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$f' = 552$ Hz.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Assumes still air (no wind), speeds $\\ll$ speed of sound, motion along line joining source and observer.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Classical (non-relativistic) Doppler formula is valid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 548 Hz. (b) 459 Hz. (c) 552 Hz. (d) Still air, non-relativistic, collinear motion.",
            commonErrors: [
              "Adding $v_o$ incorrectly — observer moving towards source adds to numerator.",
            ],
          },
        },
      ],
    },
    {
      id: "physhl-u3-wave-energy",
      title: "Wave energy and intensity",
      skill:
        "Calculate wave intensity using the inverse square law, relate intensity to amplitude, and determine energy carried by waves.",
      lesson: {
        sections: [
          {
            heading: "Intensity",
            body: "**Intensity** $I$ is power per unit area: $I = \\frac{P}{A}$ measured in W m$^{-2}$. For a point source radiating uniformly in 3D, intensity follows the **inverse square law**: $I \\propto \\frac{1}{r^2}$ — doubling distance quarters the intensity. This is because the same power spreads over a sphere of area $4\\pi r^2$.",
          },
          {
            heading: "Intensity and amplitude",
            body: "Wave intensity is proportional to the square of the amplitude: $I \\propto A^2$. This is because wave energy depends on $A^2$ (both kinetic and potential energy terms). Doubling amplitude → 4× intensity. For sound, this means louder sounds have much higher intensity.",
          },
          {
            heading: "Decibels",
            body: "Sound intensity is often measured in decibels: $\\beta = 10\\log_{10}(I/I_0)$ where $I_0 = 10^{-12}$ W m$^{-2}$ is the threshold of hearing. Each 10 dB increase = 10× intensity. Normal conversation ~60 dB, threshold of pain ~120 dB.",
          },
        ],
        keyFormulas: [
          { name: "Intensity", statement: "$I = P/A$ — W m$^{-2}$" },
          {
            name: "Inverse square",
            statement: "$I \\propto 1/r^2$ for point source",
          },
          { name: "Intensity-amplitude", statement: "$I \\propto A^2$" },
          {
            name: "Decibels",
            statement: "$\\beta = 10\\log_{10}(I/I_0)$, $I_0 = 10^{-12}$ W/m²",
          },
        ],
        workedExample: {
          problem:
            "A speaker emits 1.0 W uniformly. Calculate the intensity at 2.0 m.",
          solution:
            "Sphere area $= 4\\pi r^2 = 4\\pi \\times 4 = 50.3$ m². $I = P/A = 1.0/50.3 = 0.020$ W/m².",
        },
      },
      questions: [
        {
          id: "physhl-u3-we-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Intensity is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force per unit area" },
              { id: "b", text: "Energy per unit volume" },
              { id: "c", text: "Wavelength per unit time" },
              { id: "d", text: "Power per unit area" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intensity",
                statement: "$I = P/A$ — power per unit area.",
              },
            ],
            steps: [
              {
                reasoning: "Intensity = power spread over area.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Power per unit area",
            commonErrors: [
              "Confusing intensity with energy density — intensity is power/area.",
            ],
          },
        },
        {
          id: "physhl-u3-we-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A point source radiates uniformly. If the distance is doubled, the intensity becomes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The same" },
              { id: "b", text: "One half" },
              { id: "c", text: "Double" },
              { id: "d", text: "One quarter" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inverse square",
                statement:
                  "$I \\propto 1/r^2$ — doubling r → quarter intensity.",
              },
            ],
            steps: [
              {
                reasoning: "Power spreads over sphere area $\\propto r^2$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Doubling r → 4× area → 1/4 intensity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** One quarter",
            commonErrors: [
              "Thinking intensity halves — it quarters (inverse square).",
            ],
          },
        },
        {
          id: "physhl-u3-we-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A wave has amplitude A and intensity I. If the amplitude is tripled, calculate the new intensity in terms of I.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intensity-amplitude",
                statement: "$I \\propto A^2$",
              },
            ],
            steps: [
              {
                reasoning: "Intensities: $I_1/I_2 = A_1^2/A_2^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "New amplitude = $3A$ → new intensity $= (3A)^2/A^2 \\times I = 9I$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Intensity increases 9-fold.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Small amplitude changes → large intensity changes ($A^2$).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$I_{new} = 9I$",
            commonErrors: [
              "Saying 3× — intensity depends on amplitude SQUARED.",
            ],
          },
        },
        {
          id: "physhl-u3-we-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A loudspeaker emits sound uniformly in all directions. At 1.0 m the intensity is $2.0 \\times 10^{-2}$ W/m².",
          parts: [
            {
              label: "a",
              prompt: "Calculate the power output of the speaker.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the intensity at 5.0 m.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the decibel level at 1.0 m ($I_0 = 10^{-12}$ W/m²).",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If the amplitude is doubled, what happens to the intensity and decibel level?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inverse square + decibels",
                statement: "$I = P/4\\pi r^2$; $\\beta = 10\\log(I/I_0)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$P = I \\times 4\\pi r^2 = 0.020 \\times 4\\pi \\times 1 = 0.251$ W.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$P = 0.25$ W.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$I = 0.020/25 = 8.0 \\times 10^{-4}$ W/m² (inverse square: $(1/5)^2$).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$I = 8.0\\times10^{-4}$ W/m².",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$\\beta = 10\\log(0.020/10^{-12}) = 10\\log(2\\times10^{10}) = 103$ dB.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\beta = 103$ dB.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Intensity $\\propto A^2$ → doubling A → 4× intensity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\Delta\\beta = 10\\log 4 = 6$ dB increase.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 0.25 W. (b) 8.0×10⁻⁴ W/m². (c) 103 dB. (d) 4× intensity, +6 dB.",
            commonErrors: ["Forgetting inverse square uses $r^2$ not $r$."],
          },
        },
        {
          id: "physhl-u3-we-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The intensity of a wave is proportional to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The square of its amplitude" },
              { id: "b", text: "Its frequency only" },
              { id: "c", text: "Its wavelength" },
              { id: "d", text: "Its amplitude" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intensity-amplitude",
                statement:
                  "$I \\propto A^2$ because wave energy depends on $A^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both kinetic and potential energy terms in a wave scale as $A^2$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Amplitude squared",
            commonErrors: [
              "Thinking intensity is proportional to amplitude — it is $A^2$.",
            ],
          },
        },
        {
          id: "physhl-u3-we-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "At a distance of 2.0 m from a point source the intensity is $4.0 \\times 10^{-3}$ W/m². Calculate the intensity at 8.0 m.",
          response: {
            type: "numeric",
            parts: [{ label: "Intensity", answer: 2.5e-4, unit: "W/m²" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inverse square",
                statement: "$I \\propto 1/r^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Distance ×4 → intensity $\\times (1/4)^2 = 1/16$: $I = 4.0\\times10^{-3}/16 = 2.5\\times10^{-4}$ W/m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$I = 2.5\\times10^{-4}$ W/m².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$I = 2.5 \\times 10^{-4}$ W/m²",
            commonErrors: [
              "Dividing by 4 instead of 16 — intensity falls with $r^2$.",
            ],
          },
        },
        {
          id: "physhl-u3-we-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A loudspeaker radiates 2.0 W uniformly in all directions. (a) Calculate the intensity at 4.0 m. (b) Calculate the intensity at 8.0 m.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.01, unit: "W/m²", tolerance: 0.001 },
              { label: "b", answer: 0.0025, unit: "W/m²", tolerance: 0.0005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Point source",
                statement: "$I = P/(4\\pi r^2)$",
              },
            ],
            steps: [
              {
                reasoning: "(a) $I = 2.0/(4\\pi \\times 16) = 0.010$ W/m².",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$I = 0.010$ W/m².", marks: 1, markCode: "A" },
              {
                reasoning:
                  "(b) $I = 2.0/(4\\pi \\times 64) = 2.5\\times10^{-3}$ W/m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$I = 2.5\\times10^{-3}$ W/m².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 0.010 W/m². (b) 2.5×10⁻³ W/m².",
            commonErrors: [
              "Using $I = P/r^2$ without the $4\\pi$ factor for a sphere.",
            ],
          },
        },
        {
          id: "physhl-u3-we-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A sound wave has intensity $8.0 \\times 10^{-3}$ W/m² when its amplitude is $A$. (a) By what factor does the intensity change if the amplitude is halved? (b) Calculate the new intensity.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.25 },
              { label: "b", answer: 0.002, unit: "W/m²" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intensity-amplitude",
                statement: "$I \\propto A^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Halving amplitude: $I_{new}/I = (A/2)^2/A^2 = 1/4 = 0.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$I_{new} = 8.0\\times10^{-3}/4 = 2.0\\times10^{-3}$ W/m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Factor 0.25; new intensity $2.0\\times10^{-3}$ W/m².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 0.25 (one quarter). (b) $2.0\\times10^{-3}$ W/m².",
            commonErrors: [
              "Halving the intensity — it quarters because of $A^2$.",
            ],
          },
        },
        {
          id: "physhl-u3-we-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Increasing the intensity of a sound by a factor of 10 raises its decibel level by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 dB" },
              { id: "b", text: "6 dB" },
              { id: "c", text: "20 dB" },
              { id: "d", text: "10 dB" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Decibels",
                statement:
                  "$\\beta = 10\\log_{10}(I/I_0)$ — factor 10 in $I$ gives +10 dB.",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta\\beta = 10\\log(10) = 10$ dB.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** 10 dB",
            commonErrors: ["Doubling the dB — the scale is logarithmic."],
          },
        },
        {
          id: "physhl-u3-we-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The threshold of hearing is $I_0 = 10^{-12}$ W/m². Calculate the decibel level of (a) $I = 10^{-6}$ W/m² and (b) $I = 10^{-4}$ W/m².",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60, unit: "dB" },
              { label: "b", answer: 80, unit: "dB" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Decibels",
                statement: "$\\beta = 10\\log_{10}(I/I_0)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) $\\beta = 10\\log(10^{-6}/10^{-12}) = 10\\log(10^6) = 60$ dB.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "60 dB.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "(b) $\\beta = 10\\log(10^{-4}/10^{-12}) = 10\\log(10^8) = 80$ dB.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "80 dB.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 60 dB. (b) 80 dB.",
            commonErrors: ["Forgetting to divide by $I_0$ inside the log."],
          },
        },
        {
          id: "physhl-u3-we-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a point source radiating uniformly in 3D, the intensity at distance $r$ is proportional to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$r^2$" },
              { id: "b", text: "A constant value" },
              { id: "c", text: "$1/r^2$" },
              { id: "d", text: "$1/r$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inverse square",
                statement:
                  "Power spreads over sphere area $4\\pi r^2$ → $I \\propto 1/r^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Area of sphere grows as $r^2$, diluting the same power.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $1/r^2$",
            commonErrors: ["Using $1/r$ — applies to 2D spreading, not 3D."],
          },
        },
        {
          id: "physhl-u3-we-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the difference between wave intensity and wave amplitude, and why intensity depends on the square of amplitude.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intensity-amplitude",
                statement:
                  "$I \\propto A^2$ — wave energy is proportional to $A^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intensity is power per unit area ($I = P/A$); amplitude is maximum displacement from equilibrium.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Wave energy depends on $A^2$ — both kinetic and potential energy terms scale as $A^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Doubling amplitude therefore quadruples intensity.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "This is why small amplitude changes produce large loudness changes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$I = P/A$; $I \\propto A^2$ because wave energy $\\propto A^2$.",
            commonErrors: [
              "Confusing amplitude (displacement) with intensity (power/area).",
            ],
          },
        },
        {
          id: "physhl-u3-we-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A loudspeaker emits 5.0 W uniformly in all directions. (a) Calculate the intensity at 10 m. (b) Calculate the intensity at 20 m.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.004, unit: "W/m²", tolerance: 0.0005 },
              { label: "b", answer: 0.001, unit: "W/m²", tolerance: 0.0002 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Point source",
                statement: "$I = P/(4\\pi r^2)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) $I = 5.0/(4\\pi \\times 100) = 3.98\\times10^{-3} \\approx 4.0\\times10^{-3}$ W/m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$I = 4.0\\times10^{-3}$ W/m².",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(b) Doubling distance → intensity /4: $I = 1.0\\times10^{-3}$ W/m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$I = 1.0\\times10^{-3}$ W/m².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $4.0\\times10^{-3}$ W/m². (b) $1.0\\times10^{-3}$ W/m².",
            commonErrors: [
              "Halving intensity at double distance — it quarters.",
            ],
          },
        },
        {
          id: "physhl-u3-we-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Sound A has an intensity 100 times that of sound B. Sound B has a decibel level of 40 dB.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Decibels",
                statement: "$\\beta = 10\\log_{10}(I/I_0)$",
              },
            ],
            steps: [
              {
                reasoning: "(a) $\\Delta\\beta = 10\\log(100) = 20$ dB.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Difference is 20 dB.", marks: 1, markCode: "A" },
              {
                reasoning: "(b) $\\beta_A = 40 + 20 = 60$ dB.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\beta_A = 60$ dB.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "(c) Since $I \\propto A^2$, amplitude ratio is $\\sqrt{100} = 10$ — amplitude only 10× larger.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) 20 dB. (b) 60 dB. (c) Amplitude ratio 10:1.",
            commonErrors: [
              "Quoting 100 dB difference — decibels are logarithmic.",
            ],
          },
        },
        {
          id: "physhl-u3-we-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Doubling the distance from a point source of sound causes the intensity to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Double" },
              { id: "b", text: "Become one half" },
              { id: "c", text: "Stay the same" },
              { id: "d", text: "Become one quarter" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inverse square",
                statement: "$I \\propto 1/r^2$ — doubling $r$ → $I/4$.",
              },
            ],
            steps: [
              {
                reasoning: "$(2r)^2 = 4r^2$ → intensity divided by 4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** One quarter",
            commonErrors: ["Thinking intensity halves linearly with distance."],
          },
        },
        {
          id: "physhl-u3-we-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A loudspeaker emits 0.50 W uniformly in all directions. The threshold of hearing is $I_0 = 10^{-12}$ W/m².",
          parts: [
            {
              label: "a",
              prompt: "Calculate the intensity at 2.0 m.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the decibel level at 2.0 m.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If the power output is quadrupled, state the effect on intensity and decibel level at the same distance.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain, using energy conservation, why intensity falls as $1/r^2$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Point source",
                statement: "$I = P/(4\\pi r^2)$; $\\beta = 10\\log(I/I_0)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$I = 0.50/(4\\pi \\times 4) = 9.95\\times10^{-3} \\approx 0.010$ W/m².",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I = 0.010$ W/m².",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$\\beta = 10\\log(0.010/10^{-12}) = 10\\log(10^{10}) = 100$ dB.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\beta = 100$ dB.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Intensities: quadrupling $P$ quadruples $I$; $\\Delta\\beta = 10\\log 4 = 6$ dB increase.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$I \\times 4$ and $+6$ dB.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Same total power spreads over sphere surface area $4\\pi r^2$ which grows as $r^2$.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Hence $I = P/A \\propto 1/r^2$ by conservation of energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 0.010 W/m². (b) 100 dB. (c) 4× intensity, +6 dB. (d) Power spread over $4\\pi r^2$.",
            commonErrors: [
              "Thinking power is lost — it is conserved, just spread over larger area.",
            ],
          },
        },
      ],
    },
  ],
};
