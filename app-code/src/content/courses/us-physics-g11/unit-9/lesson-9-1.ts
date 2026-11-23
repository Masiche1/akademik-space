import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "phys11-u9-lesson-9-1",
  code: "9-1",
  title: "Wave Properties and Types",
  goal: "I CAN describe wave properties and distinguish between wave types.",
  standards: [
    "HS-PS4-1",
    "HS-PS4-2",
    "SEP: Developing and Using Models",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Wave",
      definition: "Disturbance that transfers energy without matter.",
    },
    { term: "Amplitude", definition: "Maximum displacement from equilibrium." },
    { term: "Wavelength", definition: "Distance between consecutive crests." },
    { term: "Frequency", definition: "Number of waves per second (Hz)." },
    { term: "Period", definition: "Time for one complete wave." },
    { term: "Wave speed", definition: "v = fλ." },
    {
      term: "Transverse wave",
      definition: "Particles move perpendicular to wave direction.",
    },
    {
      term: "Longitudinal wave",
      definition: "Particles move parallel to wave direction.",
    },
  ],
  concepts: [
    {
      id: "phys11-u9-properties",
      title: "Wave properties",
      skill: "Calculate wavelength, frequency, and wave speed.",
      lesson: {
        sections: [
          {
            heading: "Wave equation",
            body: "$$v = f\\lambda$$\n\nWave speed = frequency × wavelength.",
          },
          {
            heading: "Wave quantities",
            body: "- **Amplitude**: maximum displacement.\n- **Wavelength (λ)**: crest-to-crest distance.\n- **Frequency (f)**: waves per second.\n- **Period (T)**: time per wave = 1/f.",
          },
        ],
        keyFormulas: [
          { name: "Wave speed", statement: "$v = f\\lambda$" },
          { name: "Period", statement: "$T = 1/f$" },
          { name: "Frequency", statement: "Hz = cycles/second" },
        ],
        workedExample: {
          problem: "Wave: f = 5 Hz, λ = 2 m. Speed?",
          solution: "$v = 5 \\times 2 = 10$ m/s.",
        },
      },
      questions: [
        {
          id: "phys11-u9-prop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the wave equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "v = fλ" },
              { id: "b", text: "v = f/λ" },
              { id: "c", text: "v = f + λ" },
              { id: "d", text: "v = fλ²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave speed",
                statement: "$v = f\\lambda$.",
              },
            ],
            steps: [{ reasoning: "v = fλ.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** v = fλ",
            commonErrors: ["Wrong formula."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u9-prop-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Wave: v = 340 m/s, f = 170 Hz. Wavelength?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "λ = v/f", statement: "λ = 340/170" },
            ],
            steps: [
              {
                reasoning: "$\\lambda = v/f = 340/170$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "= 2 m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 m.",
            commonErrors: ["Wrong formula."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u9-prop-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What does amplitude affect? What does frequency affect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Wave properties",
                statement: "Amplitude → intensity; frequency → pitch/energy.",
              },
            ],
            steps: [
              {
                reasoning: "Amplitude: intensity (loudness/brightness).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Frequency: pitch (sound) / color (light).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Higher amplitude → more energy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Answer: amplitude→intensity, frequency→pitch/color.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Amplitude→intensity; frequency→pitch/color.",
            commonErrors: ["Swapping properties."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u9-prop-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Wave: f = 440 Hz, v = 340 m/s.",
          parts: [
            { label: "a", prompt: "Wavelength?", marks: 2 },
            { label: "b", prompt: "Period?", marks: 2 },
            { label: "c", prompt: "If f doubles, new λ?", marks: 3 },
            { label: "d", prompt: "If v doubles, new f?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave relationships",
                statement: "$v = f\\lambda$; $T = 1/f$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\lambda = 340/440 = 0.773$ m.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$T = 1/440 = 0.00227$ s.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "f=880 → λ = 340/880 = 0.386 m (halves).",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 0.386 m.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "v=680, f=440 → f = 680/0.773 = 880 Hz (doubles).",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 880 Hz.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 0.773m (b) 0.00227s (c) 0.386m (d) 880Hz.",
            commonErrors: ["Wrong relationships."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u9-types",
      title: "Transverse and longitudinal waves",
      skill: "Distinguish wave types and their characteristics.",
      lesson: {
        sections: [
          {
            heading: "Transverse waves",
            body: "Particles move perpendicular to wave direction.\n- Examples: light, water waves, rope waves.\n- Have crests and troughs.",
          },
          {
            heading: "Longitudinal waves",
            body: "Particles move parallel to wave direction.\n- Examples: sound, seismic P-waves.\n- Have compressions and rarefactions.",
          },
        ],
        keyFormulas: [
          { name: "Transverse", statement: "Perpendicular particle motion" },
          { name: "Longitudinal", statement: "Parallel particle motion" },
          { name: "Examples", statement: "Light/water vs sound/seismic" },
        ],
        workedExample: {
          problem: "Classify: light wave, sound wave, water wave.",
          solution:
            "Light: transverse; sound: longitudinal; water: transverse.",
        },
      },
      questions: [
        {
          id: "phys11-u9-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the difference between transverse and longitudinal waves?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same thing" },
              { id: "b", text: "Particle motion direction" },
              { id: "c", text: "Speed difference" },
              { id: "d", text: "Frequency difference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wave types",
                statement: "Particle motion direction differs.",
              },
            ],
            steps: [
              {
                reasoning: "Transverse: perpendicular; longitudinal: parallel.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Particle motion direction",
            commonErrors: ["Same thing."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u9-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify: light wave, sound wave, water wave.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Wave types",
                statement: "Light/water transverse; sound longitudinal.",
              },
            ],
            steps: [
              {
                reasoning: "Light: transverse (EM wave).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Sound: longitudinal (pressure wave).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Water: transverse (surface wave).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Light: T; sound: L; water: T.",
            commonErrors: ["Sound transverse."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u9-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why can't sound travel through vacuum?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sound",
                statement: "Longitudinal wave needs medium.",
              },
            ],
            steps: [
              {
                reasoning: "Sound is longitudinal (pressure wave).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Needs particles to compress/rarefy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Vacuum has no particles.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: no medium for sound.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sound needs medium; vacuum has none.",
            commonErrors: ["Light also can't."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u9-types-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyze waves: rope wave (transverse), sound wave (longitudinal), light wave (transverse).",
          parts: [
            { label: "a", prompt: "Particle motion for each?", marks: 3 },
            { label: "b", prompt: "Wave features for each?", marks: 3 },
            { label: "c", prompt: "Medium required?", marks: 2 },
            { label: "d", prompt: "Speed comparison?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Wave types",
                statement: "Transverse vs longitudinal characteristics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rope: perpendicular; sound: parallel; light: perpendicular.",
                marks: 3,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Rope: crests/troughs; sound: compressions/rarefactions; light: crests/troughs.",
                marks: 3,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Rope: yes (rope); sound: yes (air); light: no (vacuum OK).",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Light fastest (3×10⁸ m/s); sound ~340 m/s; rope slower.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) perp/par/perp (b) crests/compressions/crests (c) rope+sound yes, light no (d) light fastest.",
            commonErrors: ["Light needs medium."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u9-sound",
      title: "Sound waves",
      skill: "Analyze sound wave properties and behavior.",
      lesson: {
        sections: [
          {
            heading: "Sound properties",
            body: "- Longitudinal wave.\n- Speed in air ~340 m/s.\n- Speed depends on medium (faster in solids/liquids).\n- Pitch = frequency; loudness = amplitude.",
          },
          {
            heading: "Sound phenomena",
            body: "- **Reflection**: echo.\n- **Refraction**: bending through different media.\n- **Doppler effect**: frequency shift from motion.\n- **Interference**: constructive/destructive.",
          },
        ],
        keyFormulas: [
          { name: "Sound speed", statement: "~340 m/s in air" },
          { name: "Pitch", statement: "Frequency" },
          { name: "Loudness", statement: "Amplitude" },
        ],
        workedExample: {
          problem: "Why does sound travel faster in water than air?",
          solution: "Water particles closer together → faster energy transfer.",
        },
      },
      questions: [
        {
          id: "phys11-u9-sound-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines pitch of sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amplitude" },
              { id: "b", text: "Frequency" },
              { id: "c", text: "Speed" },
              { id: "d", text: "Wavelength only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Pitch",
                statement: "Frequency determines pitch.",
              },
            ],
            steps: [
              { reasoning: "Pitch = frequency.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Frequency",
            commonErrors: ["Amplitude."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u9-sound-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does sound travel faster in water than air?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sound speed",
                statement: "Denser medium → faster sound.",
              },
            ],
            steps: [
              {
                reasoning: "Water particles closer together.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Energy transfers faster between particles.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: denser medium → faster sound.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Denser medium → faster sound.",
            commonErrors: ["Slower in water."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u9-sound-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the Doppler effect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Doppler effect",
                statement: "Frequency shift from relative motion.",
              },
            ],
            steps: [
              {
                reasoning: "Source moving toward observer → higher frequency.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Source moving away → lower frequency.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Example: ambulance siren pitch change.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: frequency shift from motion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Frequency shift from relative motion.",
            commonErrors: ["Speed change."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u9-sound-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Sound wave: f = 1000 Hz, λ = 0.34 m.",
          parts: [
            { label: "a", prompt: "Speed?", marks: 2 },
            { label: "b", prompt: "Period?", marks: 2 },
            {
              label: "c",
              prompt: "If observer moves toward source, what happens?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "If source moves away, what happens?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sound",
                statement: "$v = f\\lambda$; Doppler effect.",
              },
            ],
            steps: [
              {
                reasoning: "$v = 1000 \\times 0.34 = 340$ m/s.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$T = 1/1000 = 0.001$ s.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Observer moves toward → higher frequency (blueshift).",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Answer: higher pitch.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Source moves away → lower frequency (redshift).",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Answer: lower pitch.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 340m/s (b) 0.001s (c) higher freq (d) lower freq.",
            commonErrors: ["Wrong Doppler direction."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u9-light",
      title: "Light waves and optics",
      skill: "Analyze light wave properties and optical phenomena.",
      lesson: {
        sections: [
          {
            heading: "Light properties",
            body: "- Electromagnetic wave (transverse).\n- Speed in vacuum: 3×10⁸ m/s.\n- Frequency determines color.\n- Wavelength range: visible ~400-700 nm.",
          },
          {
            heading: "Optical phenomena",
            body: "- **Reflection**: bouncing off surface.\n- **Refraction**: bending through media.\n- **Dispersion**: splitting into colors.\n- **Interference**: constructive/destructive.",
          },
        ],
        keyFormulas: [
          { name: "Light speed", statement: "$c = 3×10^8$ m/s" },
          { name: "Color", statement: "Frequency/wavelength" },
          { name: "Refraction", statement: "Bending at interface" },
        ],
        workedExample: {
          problem: "Why does light bend when entering water?",
          solution:
            "Speed changes → wavelength changes → direction changes (refraction).",
        },
      },
      questions: [
        {
          id: "phys11-u9-light-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines color of light?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amplitude" },
              { id: "b", text: "Frequency/wavelength" },
              { id: "c", text: "Speed" },
              { id: "d", text: "Intensity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Color",
                statement: "Frequency determines color.",
              },
            ],
            steps: [
              {
                reasoning: "Color = frequency/wavelength.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Frequency/wavelength",
            commonErrors: ["Amplitude."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u9-light-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does light travel faster in vacuum than in water?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Light speed",
                statement: "c = 3×10⁸ m/s in vacuum; slower in medium.",
              },
            ],
            steps: [
              {
                reasoning: "Light interacts with medium particles.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Absorption/re-emission slows it.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: medium interaction slows light.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Medium interaction slows light.",
            commonErrors: ["Same speed."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u9-light-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is refraction? Give example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Refraction",
                statement: "Bending at interface due to speed change.",
              },
            ],
            steps: [
              {
                reasoning: "Light changes speed entering new medium.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Direction changes (bends).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Example: straw appears bent in water.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: bending at interface.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Bending at interface due to speed change.",
            commonErrors: ["Reflection."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u9-light-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Light wave: λ = 500 nm, v = 3×10⁸ m/s.",
          parts: [
            { label: "a", prompt: "Frequency?", marks: 3 },
            { label: "b", prompt: "Period?", marks: 2 },
            { label: "c", prompt: "Color?", marks: 2 },
            {
              label: "d",
              prompt: "If enters glass (v=2×10⁸), what changes?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Light",
                statement: "$v = f\\lambda$; refraction.",
              },
            ],
            steps: [
              {
                reasoning: "$f = 3×10^8/(500×10^{-9}) = 6×10^{14}$ Hz.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 6×10¹⁴ Hz.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$T = 1/(6×10^{14}) = 1.67×10^{-15}$ s.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "500 nm = green light.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Speed decreases → wavelength decreases → bends (refraction).",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Answer: wavelength decreases, direction changes.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 6×10¹⁴Hz (b) 1.67×10⁻¹⁵s (c) green (d) λ decreases, bends.",
            commonErrors: ["Frequency changes."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u9-interference",
      title: "Wave interference and diffraction",
      skill: "Analyze wave interference and diffraction patterns.",
      lesson: {
        sections: [
          {
            heading: "Interference",
            body: "- **Constructive**: waves in phase → amplitude adds.\n- **Destructive**: waves out of phase → cancel.\n- **Path difference**: determines interference type.",
          },
          {
            heading: "Diffraction",
            body: "Waves bend around obstacles/apertures.\n- More diffraction when λ comparable to obstacle size.\n- Single-slit pattern: central maximum + side lobes.",
          },
        ],
        keyFormulas: [
          { name: "Constructive", statement: "Path difference = nλ" },
          { name: "Destructive", statement: "Path difference = (n+½)λ" },
          { name: "Diffraction", statement: "Bending around obstacles" },
        ],
        workedExample: {
          problem:
            "Two speakers 1 m apart, listener equidistant. Interference?",
          solution: "Path difference = 0 → constructive interference.",
        },
      },
      questions: [
        {
          id: "phys11-u9-interf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's constructive interference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Waves cancel" },
              { id: "b", text: "Waves add amplitude" },
              { id: "c", text: "Waves reflect" },
              { id: "d", text: "Waves refract" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Constructive",
                statement: "In phase → amplitude adds.",
              },
            ],
            steps: [
              {
                reasoning: "Constructive: amplitudes add.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Waves add amplitude",
            commonErrors: ["Waves cancel."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u9-interf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What's the difference between interference and diffraction?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interference vs diffraction",
                statement:
                  "Interference = superposition; diffraction = bending.",
              },
            ],
            steps: [
              {
                reasoning: "Interference: two+ waves combine.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Diffraction: single wave bends around obstacle.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Answer: interference needs multiple waves; diffraction needs one.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interference = wave combination; diffraction = bending.",
            commonErrors: ["Same thing."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u9-interf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "When does maximum diffraction occur?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Diffraction",
                statement: "Maximum when λ ≈ obstacle size.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Diffraction increases as λ approaches obstacle size.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Maximum when λ = obstacle size.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Small λ → little diffraction.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: λ comparable to obstacle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "When λ ≈ obstacle size.",
            commonErrors: ["Always maximum."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u9-interf-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two speakers emit 440 Hz in phase. Listener positions: A (equidistant), B (1m closer to one), C (2m closer).",
          parts: [
            { label: "a", prompt: "At A: interference type?", marks: 2 },
            { label: "b", prompt: "At B: path difference?", marks: 3 },
            { label: "c", prompt: "At B: interference type?", marks: 2 },
            { label: "d", prompt: "At C: interference type?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Interference",
                statement: "Path difference determines type.",
              },
            ],
            steps: [
              {
                reasoning: "A: path difference = 0 → constructive.",
                marks: 2,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "B: path difference = 1 m.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "λ = 340/440 = 0.773 m; 1/0.773 = 1.29λ → not integer → mixed.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: ~1.29λ.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "B: partial destructive (between constructive and destructive).",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "C: path difference = 2 m; 2/0.773 = 2.59λ → still not integer.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: mixed interference.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) constructive (b) ~1.29λ (c) partial destructive (d) mixed.",
            commonErrors: ["Wrong path difference."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
