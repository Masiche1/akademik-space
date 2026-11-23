import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "phys11-u9-lesson-9-3",
  code: "9-3",
  title: "Wave Problems and Applications",
  goal: "I CAN solve complex wave problems and analyze wave phenomena in real situations.",
  standards: [
    "HS-PS4-1",
    "HS-PS4-2",
    "HS-PS4-3",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    { term: "Wave speed", definition: "v = fλ." },
    { term: "Standing wave", definition: "Wave pattern that doesn't move." },
    { term: "Resonance", definition: "Large amplitude at natural frequency." },
    {
      term: "Beat frequency",
      definition: "Difference between two close frequencies.",
    },
    {
      term: "Polarization",
      definition: "Restriction of wave vibration direction.",
    },
    {
      term: "Coherent sources",
      definition: "Sources with constant phase relationship.",
    },
  ],
  concepts: [
    {
      id: "phys11-u9-standing",
      title: "Standing waves and resonance",
      skill: "Analyze standing waves and resonance phenomena.",
      lesson: {
        sections: [
          {
            heading: "Standing waves",
            body: "Formed by two waves traveling opposite directions.\n- **Nodes**: points of no displacement.\n- **Antinodes**: points of maximum displacement.\n- Harmonics: fundamental, 2nd, 3rd, etc.",
          },
          {
            heading: "Resonance",
            body: "When driving frequency matches natural frequency → large amplitude.\n- Examples: singing glasses, bridges, Tacoma Narrows.",
          },
        ],
        keyFormulas: [
          { name: "Standing wave", statement: "Nodes + antinodes" },
          { name: "Resonance", statement: "f_drive = f_natural" },
          { name: "Harmonics", statement: "f_n = nf_1" },
        ],
        workedExample: {
          problem:
            "String 1 m long, fundamental wavelength 2 m. Second harmonic wavelength?",
          solution: "λ₂ = 1 m (half of fundamental).",
        },
      },
      questions: [
        {
          id: "phys11-u9-standing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's a standing wave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wave that travels" },
              { id: "b", text: "Wave pattern that doesn't move" },
              { id: "c", text: "Wave with high amplitude" },
              { id: "d", text: "Wave with low frequency" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standing wave",
                statement: "Pattern doesn't move.",
              },
            ],
            steps: [
              {
                reasoning: "Standing wave = stationary pattern.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Wave pattern that doesn't move",
            commonErrors: ["Traveling wave."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u9-standing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What's resonance? Give example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resonance",
                statement: "Maximum amplitude at natural frequency.",
              },
            ],
            steps: [
              {
                reasoning: "Driving frequency = natural frequency.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Large amplitude response.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Example: singing glass shatters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Maximum amplitude at natural frequency.",
            commonErrors: ["Any frequency."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u9-standing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did Tacoma Narrows Bridge collapse?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Resonance",
                statement: "Wind frequency matched bridge's natural frequency.",
              },
            ],
            steps: [
              {
                reasoning: "Wind created periodic force.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Frequency matched natural frequency.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Resonance → large amplitude → collapse.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: resonance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Resonance — wind matched natural frequency.",
            commonErrors: ["Strong wind only."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u9-standing-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Guitar string: fundamental 200 Hz, length 0.65 m.",
          parts: [
            { label: "a", prompt: "Fundamental wavelength?", marks: 2 },
            { label: "b", prompt: "Wave speed?", marks: 3 },
            { label: "c", prompt: "Second harmonic frequency?", marks: 2 },
            { label: "d", prompt: "Third harmonic frequency?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standing waves",
                statement: "$f_n = nv/(2L)$; $\\lambda_1 = 2L$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\lambda_1 = 2 \\times 0.65 = 1.3$ m.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$v = f\\lambda = 200 \\times 1.3 = 260$ m/s.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 260 m/s.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$f_2 = 2 \\times 200 = 400$ Hz.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$f_3 = 3 \\times 200 = 600$ Hz.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 600 Hz.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 1.3m (b) 260m/s (c) 400Hz (d) 600Hz.",
            commonErrors: ["Wrong harmonic formula."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u9-beats",
      title: "Beats and wave superposition",
      skill: "Analyze beat phenomena and wave superposition.",
      lesson: {
        sections: [
          {
            heading: "Beats",
            body: "When two waves with close frequencies interfere: periodic loudness variations.\n\nBeat frequency = |f₁ − f₂|.",
          },
          {
            heading: "Superposition",
            body: "When waves meet: displacements add.\n- Constructive: amplitudes add.\n- Destructive: cancel.",
          },
        ],
        keyFormulas: [
          { name: "Beat frequency", statement: "$f_{beat} = |f_1 - f_2|$" },
          { name: "Superposition", statement: "Displacements add" },
          { name: "Tuning", statement: "Beats used to tune instruments" },
        ],
        workedExample: {
          problem: "Two tuning forks: 440 Hz and 442 Hz. Beat frequency?",
          solution: "$f_{beat} = 442 - 440 = 2$ Hz.",
        },
      },
      questions: [
        {
          id: "phys11-u9-beats-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are beats?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two waves cancel" },
              { id: "b", text: "Periodic loudness from close frequencies" },
              { id: "c", text: "Wave reflection" },
              { id: "d", text: "Wave diffraction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Beats",
                statement: "Loudness variations from close frequencies.",
              },
            ],
            steps: [
              {
                reasoning: "Beats = periodic amplitude variation.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Periodic loudness from close frequencies",
            commonErrors: ["Wave reflection."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u9-beats-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two waves: 500 Hz and 503 Hz. Beat frequency?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Beat frequency",
                statement: "$f_{beat} = |f_1 - f_2|$",
              },
            ],
            steps: [
              {
                reasoning: "$f_{beat} = |500 - 503|$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "= 3 Hz.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3 Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 Hz.",
            commonErrors: ["Wrong formula."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u9-beats-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How are beats used to tune instruments?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Tuning",
                statement: "Beats → adjust frequency until zero.",
              },
            ],
            steps: [
              {
                reasoning: "Play instrument + tuning fork.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Hear beats → frequency difference.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Adjust until beats disappear → frequencies match.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: beats indicate detuning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Beats → adjust until zero → tuned.",
            commonErrors: ["Not explaining mechanism."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u9-beats-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two waves: f₁ = 440 Hz, f₂ = 444 Hz, amplitude 1 cm each.",
          parts: [
            { label: "a", prompt: "Beat frequency?", marks: 2 },
            { label: "b", prompt: "Maximum amplitude?", marks: 2 },
            { label: "c", prompt: "Minimum amplitude?", marks: 2 },
            { label: "d", prompt: "How many beats per second?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Beats",
                statement:
                  "$f_{beat} = |f_1 - f_2|$; max amplitude = sum; min = difference.",
              },
            ],
            steps: [
              {
                reasoning: "$f_{beat} = |440 - 444| = 4$ Hz.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Max = 1 + 1 = 2 cm (constructive).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Min = 1 - 1 = 0 cm (destructive).",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "4 beats per second.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 4 beats/s.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 4Hz (b) 2cm (c) 0cm (d) 4 beats/s.",
            commonErrors: ["Wrong beat frequency."],
            examinerNote: "2+2+2+4 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u9-polarization",
      title: "Polarization and wave properties",
      skill: "Analyze polarization and advanced wave properties.",
      lesson: {
        sections: [
          {
            heading: "Polarization",
            body: "Restriction of wave vibration to one plane.\n- Only transverse waves can be polarized.\n- Longitudinal waves cannot.",
          },
          {
            heading: "Applications",
            body: "- **Sunglasses**: reduce glare.\n- **LCD screens**: polarized light.\n- **3D movies**: polarized lenses.",
          },
        ],
        keyFormulas: [
          { name: "Polarization", statement: "One vibration plane" },
          { name: "Transverse only", statement: "Longitudinal can't polarize" },
          { name: "Applications", statement: "Glare reduction, 3D" },
        ],
        workedExample: {
          problem: "Can sound waves be polarized?",
          solution: "No — longitudinal waves can't be polarized.",
        },
      },
      questions: [
        {
          id: "phys11-u9-pol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is polarization?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wave speed change" },
              { id: "b", text: "Restriction to one vibration plane" },
              { id: "c", text: "Wave reflection" },
              { id: "d", text: "Wave interference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polarization",
                statement: "One vibration plane.",
              },
            ],
            steps: [
              {
                reasoning: "Polarization = one plane vibration.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** One vibration plane",
            commonErrors: ["Wave speed."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u9-pol-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Can longitudinal waves be polarized? Why or why not?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Polarization",
                statement: "Only transverse waves can polarize.",
              },
            ],
            steps: [
              {
                reasoning: "Polarization restricts vibration plane.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Longitudinal: vibration parallel to propagation (no plane).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: No — can't restrict plane.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "No — longitudinal waves can't polarize.",
            commonErrors: ["Yes."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u9-pol-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do polarized sunglasses reduce glare?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Polarization",
                statement: "Blocks horizontally polarized light.",
              },
            ],
            steps: [
              {
                reasoning: "Glare is horizontally polarized light.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Sunglasses have vertical polarizing filter.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Blocks horizontal component → reduces glare.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: blocks glare polarization.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Blocks horizontally polarized glare.",
            commonErrors: ["Reduces all light."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u9-pol-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Light wave polarized vertically passes through polarizer at 45°.",
          parts: [
            {
              label: "a",
              prompt: "What fraction of intensity transmitted?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "If another polarizer at 90°, what happens?",
              marks: 3,
            },
            { label: "c", prompt: "Why can't sound be polarized?", marks: 2 },
            { label: "d", prompt: "Application of polarization?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Polarization",
                statement: "Malus's law; transverse only.",
              },
            ],
            steps: [
              {
                reasoning: "$I = I_0\\cos^2(45°) = I_0 \\times 0.5 = 50\\%$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              { reasoning: "Answer: 50%.", marks: 1, markCode: "A", part: "a" },
              {
                reasoning: "Crossed polarizers → 0 (no transmission).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 0 (blocked).",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Sound longitudinal → no vibration plane.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Application: sunglasses, 3D movies.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 50% (b) 0% (c) longitudinal (d) sunglasses/3D.",
            commonErrors: ["Wrong Malus formula."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u9-capstone",
      title: "Wave phenomena capstone",
      skill: "Integrate all wave concepts in complex problems.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive wave analysis",
            body: "1. Identify wave type and properties.\n2. Apply wave equation.\n3. Consider phenomena (interference, diffraction, Doppler).\n4. Analyze applications.",
          },
          {
            heading: "Real-world integration",
            body: "- Communication systems.\n- Medical imaging.\n- Navigation.\n- Entertainment (music, movies).",
          },
        ],
        keyFormulas: [
          { name: "Integration", statement: "Multiple wave concepts" },
          { name: "Applications", statement: "Technology + nature" },
        ],
        workedExample: {
          problem:
            "Design communication system: choose wave type, frequency, account for interference.",
          solution: "Radio for range; microwave for data; fiber for speed.",
        },
      },
      questions: [
        {
          id: "phys11-u9-cap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the most important wave property for communication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amplitude" },
              { id: "b", text: "Frequency" },
              { id: "c", text: "Speed" },
              { id: "d", text: "Wavelength" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Communication",
                statement: "Frequency carries information.",
              },
            ],
            steps: [
              {
                reasoning: "Frequency modulates information.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Frequency",
            commonErrors: ["Amplitude."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u9-cap-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is fiber optic faster than copper wire?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Fiber vs copper",
                statement: "Light faster than electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Light speed > electron drift speed.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Less signal loss in fiber.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: faster + less loss.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Light faster; less signal loss.",
            commonErrors: ["Same speed."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u9-cap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does Doppler radar work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Doppler radar",
                statement: "Frequency shift → speed.",
              },
            ],
            steps: [
              {
                reasoning: "Emit microwave toward target.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Reflected wave frequency shifted.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Measure shift → calculate speed.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: Doppler effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Frequency shift → speed calculation.",
            commonErrors: ["Time delay only."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u9-cap-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design problem: need to transmit data 100 km. Compare radio, microwave, fiber.",
          parts: [
            { label: "a", prompt: "Best option? Why?", marks: 3 },
            { label: "b", prompt: "Frequency needed?", marks: 2 },
            { label: "c", prompt: "Advantages?", marks: 3 },
            { label: "d", prompt: "Limitations?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Communication design",
                statement: "Trade-offs: speed, range, cost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fiber best for speed; microwave for wireless; radio for coverage.",
                marks: 3,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Fiber: THz; microwave: GHz; radio: MHz.",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Fiber: high speed, low loss; microwave: wireless, moderate speed; radio: wide coverage.",
                marks: 3,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Fiber: installation; microwave: line-of-sight; radio: interference.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) fiber/microwave/radio (b) THz/GHz/MHz (c) speed/wireless/coverage (d) install/LOS/interference.",
            commonErrors: ["One-size-fits-all."],
            examinerNote: "3+2+3+2 = 10.",
          },
        },
      ],
    },
  ],
};
