import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "phys11-u9-lesson-9-2",
  code: "9-2",
  title: "Electromagnetic Spectrum and Wave Applications",
  goal: "I CAN describe the electromagnetic spectrum and apply wave concepts to real situations.",
  standards: [
    "HS-PS4-3",
    "HS-PS4-4",
    "SEP: Developing and Using Models",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Electromagnetic spectrum",
      definition: "Range of all EM waves by frequency/wavelength.",
    },
    {
      term: "Radio waves",
      definition: "Longest wavelength, lowest frequency EM waves.",
    },
    { term: "Microwaves", definition: "Used in cooking, communication." },
    { term: "Infrared", definition: "Heat radiation, remote controls." },
    { term: "Visible light", definition: "400-700 nm, colors red to violet." },
    { term: "Ultraviolet", definition: "Higher energy, causes sunburn." },
    { term: "X-rays", definition: "High energy, medical imaging." },
    { term: "Gamma rays", definition: "Highest energy, nuclear decay." },
  ],
  concepts: [
    {
      id: "phys11-u9-em-spectrum",
      title: "Electromagnetic spectrum",
      skill: "Describe EM spectrum regions and their properties.",
      lesson: {
        sections: [
          {
            heading: "EM spectrum order",
            body: "Radio → Microwaves → Infrared → Visible → Ultraviolet → X-rays → Gamma rays\n\nFrequency increases → wavelength decreases → energy increases.",
          },
          {
            heading: "Applications",
            body: "- **Radio**: communication, broadcasting.\n- **Microwaves**: cooking, satellite.\n- **Infrared**: heat sensors, remote controls.\n- **Visible**: vision, photography.\n- **UV**: sterilization, vitamin D.\n- **X-rays**: medical imaging.\n- **Gamma**: cancer treatment, sterilization.",
          },
        ],
        keyFormulas: [
          { name: "Spectrum order", statement: "Radio → Gamma" },
          { name: "Frequency", statement: "Increases left to right" },
          { name: "Energy", statement: "Increases left to right" },
        ],
        workedExample: {
          problem: "Which has higher energy: UV or infrared?",
          solution: "UV — higher frequency → higher energy.",
        },
      },
      questions: [
        {
          id: "phys11-u9-em-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What order is the EM spectrum from low to high frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gamma → Radio" },
              { id: "b", text: "Radio → Gamma" },
              { id: "c", text: "Visible → Radio" },
              { id: "d", text: "X-ray → UV" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "EM spectrum",
                statement: "Radio lowest → Gamma highest.",
              },
            ],
            steps: [
              {
                reasoning: "Radio → Gamma (low to high frequency).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Radio → Gamma",
            commonErrors: ["Gamma → Radio."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u9-em-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What determines energy of EM wave?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "EM energy",
                statement: "E = hf — frequency determines energy.",
              },
            ],
            steps: [
              { reasoning: "$E = hf$.", marks: 1, markCode: "M" },
              {
                reasoning: "Higher frequency → higher energy.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: frequency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Frequency determines energy.",
            commonErrors: ["Amplitude."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "phys11-u9-em-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are X-rays dangerous but radio waves safe?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "EM energy",
                statement:
                  "X-rays high energy → ionizing; radio low → non-ionizing.",
              },
            ],
            steps: [
              {
                reasoning: "X-rays high frequency → high energy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Can ionize atoms → damage cells.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Radio low energy → can't ionize.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: energy difference.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "X-rays ionizing; radio non-ionizing.",
            commonErrors: ["Same danger."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u9-em-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare: radio wave (1 MHz), visible light (5×10¹⁴ Hz), gamma ray (10²⁰ Hz).",
          parts: [
            { label: "a", prompt: "Frequency order?", marks: 2 },
            { label: "b", prompt: "Wavelength order?", marks: 2 },
            { label: "c", prompt: "Energy order?", marks: 2 },
            { label: "d", prompt: "Applications of each?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "EM spectrum",
                statement: "f ↑ → λ ↓ → E ↑.",
              },
            ],
            steps: [
              {
                reasoning: "Radio < visible < gamma (frequency).",
                marks: 2,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Radio λ longest; gamma shortest.",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Gamma highest energy; radio lowest.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Radio: communication; visible: vision; gamma: cancer treatment.",
                marks: 4,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) radio<visible<gamma (b) radio>visible>gamma (c) gamma>visible>radio (d) comm/vision/treatment.",
            commonErrors: ["Wrong order."],
            examinerNote: "2+2+2+4 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u9-applications",
      title: "Wave applications",
      skill: "Apply wave concepts to technology and everyday situations.",
      lesson: {
        sections: [
          {
            heading: "Wave technology",
            body: "- **Communication**: radio, microwave, fiber optic.\n- **Medical**: X-ray, ultrasound, MRI.\n- **Navigation**: radar, sonar.\n- **Imaging**: cameras, telescopes, microscopes.",
          },
          {
            heading: "Wave phenomena in nature",
            body: "- **Seismic waves**: earthquake detection.\n- **Ocean waves**: energy transfer.\n- **Sound**: hearing, ultrasound.\n- **Light**: vision, photosynthesis.",
          },
        ],
        keyFormulas: [
          { name: "Communication", statement: "EM waves carry information" },
          { name: "Medical", statement: "X-ray/ultrasound imaging" },
          { name: "Navigation", statement: "Radar/sonar" },
        ],
        workedExample: {
          problem: "How does radar work?",
          solution: "Radio waves bounce off objects → measure time → distance.",
        },
      },
      questions: [
        {
          id: "phys11-u9-apps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does ultrasound work?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio waves" },
              { id: "b", text: "High-frequency sound" },
              { id: "c", text: "Light" },
              { id: "d", text: "X-rays" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ultrasound",
                statement: "High-frequency sound (>20 kHz).",
              },
            ],
            steps: [
              {
                reasoning: "Ultrasound = high-frequency sound.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** High-frequency sound",
            commonErrors: ["Radio waves."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u9-apps-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does fiber optic communication work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Fiber optics",
                statement: "Light signals through glass fibers.",
              },
            ],
            steps: [
              {
                reasoning: "Light pulses carry data.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Total internal reflection keeps light in fiber.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: light signals through fiber.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Light signals through fiber via total internal reflection.",
            commonErrors: ["Radio waves."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u9-apps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is ultrasound used for fetal imaging instead of X-rays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ultrasound",
                statement: "Safe for fetus; X-rays ionizing.",
              },
            ],
            steps: [
              {
                reasoning: "X-rays ionizing → harmful to fetus.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Ultrasound non-ionizing → safe.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Sound waves reflect off tissue boundaries.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: safety + effectiveness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ultrasound safe; X-rays ionizing.",
            commonErrors: ["X-rays better."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u9-apps-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare wave technologies: radio broadcast, fiber optic internet, ultrasound imaging, radar.",
          parts: [
            { label: "a", prompt: "Wave type for each?", marks: 3 },
            { label: "b", prompt: "Frequency range?", marks: 2 },
            { label: "c", prompt: "Advantages?", marks: 3 },
            { label: "d", prompt: "Limitations?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Wave applications",
                statement: "Different waves for different purposes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Radio: EM radio; fiber: visible light; ultrasound: sound; radar: radio/microwave.",
                marks: 3,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Radio: kHz-MHz; fiber: ~10¹⁴ Hz; ultrasound: >20 kHz; radar: GHz.",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Radio: wide coverage; fiber: high speed; ultrasound: safe imaging; radar: detection.",
                marks: 3,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Radio: interference; fiber: installation; ultrasound: limited depth; radar: weather affected.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) EM/light/sound/EM (b) kHz-THz (c) coverage/speed/safety/detection (d) interference/installation/depth/weather.",
            commonErrors: ["Wrong wave types."],
            examinerNote: "3+2+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u9-integration",
      title: "Wave phenomena integration",
      skill: "Solve problems combining wave properties and phenomena.",
      lesson: {
        sections: [
          {
            heading: "Integration strategy",
            body: "1. Identify wave type and properties.\n2. Apply v = fλ.\n3. Consider phenomena (reflection, refraction, interference).\n4. Verify reasonableness.",
          },
          {
            heading: "Common combinations",
            body: "- Doppler + wave speed.\n- Interference + path difference.\n- Refraction + wavelength change.\n- Diffraction + obstacle size.",
          },
        ],
        keyFormulas: [
          { name: "Integration", statement: "Multiple wave concepts" },
          { name: "Verification", statement: "Check wave relationships" },
        ],
        workedExample: {
          problem:
            "Sound from moving source: Doppler + wave speed + frequency.",
          solution: "Apply Doppler shift → calculate new frequency → v = fλ.",
        },
      },
      questions: [
        {
          id: "phys11-u9-integ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the first step in wave problems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate immediately" },
              { id: "b", text: "Identify wave type" },
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
                statement: "Identify wave type first.",
              },
            ],
            steps: [
              {
                reasoning: "Identify wave type before calculating.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Identify wave type",
            commonErrors: ["Jumping to calculation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u9-integ-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sound source 440 Hz moves toward stationary observer at 20 m/s. Observed frequency? (v_sound=340)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Doppler",
                statement: "$f' = f \\times v/(v-v_s)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$f' = 440 \\times 340/(340-20) = 440 \\times 340/320$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "= 440 × 1.0625 = 467.5 Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: ~468 Hz (higher).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "~468 Hz.",
            commonErrors: ["Wrong Doppler formula."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u9-integ-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Light enters water (v=2.25×10⁸ m/s) from air. What happens to wavelength?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Refraction",
                statement: "v decreases → λ decreases.",
              },
            ],
            steps: [
              { reasoning: "f stays constant.", marks: 1, markCode: "R" },
              {
                reasoning: "v decreases → λ = v/f decreases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "λ_water = λ_air × (2.25/3) = 0.75 λ_air.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: wavelength decreases by 25%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Wavelength decreases to 75%.",
            commonErrors: ["Frequency changes."],
            examinerNote: "R1, M2, A1.",
          },
        },
        {
          id: "phys11-u9-integ-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Comprehensive wave problem: sound 500 Hz, source moving at 30 m/s toward observer, v_sound=340 m/s.",
          parts: [
            { label: "a", prompt: "Observed frequency (Doppler)?", marks: 3 },
            { label: "b", prompt: "Wavelength at observer?", marks: 3 },
            { label: "c", prompt: "Period?", marks: 2 },
            { label: "d", prompt: "If source stops, what changes?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Doppler + wave",
                statement: "$f' = f v/(v-v_s)$; $\\lambda = v/f'$; $T = 1/f'$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$f' = 500 \\times 340/(340-30) = 500 \\times 340/310 = 548$ Hz.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: ~548 Hz.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$\\lambda = 340/548 = 0.62$ m.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 0.62 m.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$T = 1/548 = 0.00182$ s.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Frequency drops to 500 Hz; wavelength increases.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 548Hz (b) 0.62m (c) 0.00182s (d) f drops to 500Hz.",
            commonErrors: ["Wrong Doppler formula."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
