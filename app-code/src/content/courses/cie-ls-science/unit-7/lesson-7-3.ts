import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "cils-u7-lesson-7-3",
  code: "7-3",
  title: "Sound and light",
  goal: "I CAN describe sound and light waves, their properties and applications.",
  standards: ["0893 Physics: waves"],
  vocabulary: [
    { term: "Wave", definition: "Disturbance transferring energy without transferring matter." },
    { term: "Frequency", definition: "Number of waves per second — measured in Hz." },
    { term: "Amplitude", definition: "Maximum displacement from equilibrium — loudness/brightness." },
    { term: "Wavelength", definition: "Distance between two consecutive crests/troughs." },
    { term: "Reflection", definition: "Wave bouncing off surface — echo." },
    { term: "Refraction", definition: "Wave bending when entering different medium." },
  ],
  concepts: [
    {
      id: "cils-u7-sound",
      title: "Sound waves",
      skill: "Describe sound production, properties and applications.",
      lesson: {
        sections: [
          {
            heading: "How sound is produced",
            body: "Vibrations create sound waves — longitudinal waves (compressions/rarefactions) that need a medium (air, water, solid).",
          },
          {
            heading: "Sound properties",
            body: "- **Pitch**: frequency — high = high pitch\n- **Loudness**: amplitude — large = loud\n- **Speed**: ~330 m/s in air, faster in solids/liquids",
          },
          {
            heading: "Sound applications",
            body: "Ultrasound: medical imaging, cleaning, sonar. Echoes: bats, dolphins, sonar systems.",
          },
        ],
        keyFormulas: [
          { name: "Sound", statement: "Longitudinal wave; pitch=frequency; loudness=amplitude; needs medium." },
        ],
        workedExample: {
          problem: "Why can't sound travel through vacuum?",
          solution: "Sound needs particles to vibrate — vacuum has no particles, so no medium for transmission.",
        },
      },
      questions: [
        {
          id: "cils-u7-sound-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What produces sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light" },
              { id: "b", text: "Vibrations" },
              { id: "c", text: "Magnetism" },
              { id: "d", text: "Electricity only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sound", statement: "Produced by vibrations." },
            ],
            steps: [
              { reasoning: "Vibrations create sound waves.", working: "vibrations", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Vibrations",
            commonErrors: ["Choosing (d) — electricity can produce sound but vibrations are the cause."],
          },
        },
        {
          id: "cils-u7-sound-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What determines the pitch of a sound?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pitch", statement: "Frequency — higher frequency = higher pitch." },
            ],
            steps: [
              { reasoning: "Pitch = frequency.", working: "frequency", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Frequency — higher frequency = higher pitch.",
            commonErrors: ["Saying amplitude — that's loudness."],
          },
        },
        {
          id: "cils-u7-sound-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why sound travels faster in water than air.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sound speed", statement: "Particles closer together in water/solids → faster transmission." },
            ],
            steps: [
              { reasoning: "Sound = particle vibrations passing energy.", working: "vibration", marks: 1, markCode: "M" },
              { reasoning: "Water particles closer together than air — faster energy transfer.", working: "closer", marks: 1, markCode: "M" },
              { reasoning: "Solids fastest — particles tightly packed.", working: "solids", marks: 1, markCode: "M" },
              { reasoning: "Explanation clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water particles closer than air — sound transmits faster through denser media.",
            commonErrors: ["Saying 'water conducts better' — it's about particle spacing."],
          },
        },
        {
          id: "cils-u7-sound-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate sound waves.",
          parts: [
            { label: "a", prompt: "How is sound produced?", marks: 1 },
            { label: "b", prompt: "What medium does sound need?", marks: 1 },
            { label: "c", prompt: "Describe pitch and loudness.", marks: 3 },
            { label: "d", prompt: "Give two ultrasound applications.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sound", statement: "Vibrations; needs medium; pitch=frequency, loudness=amplitude; ultrasound applications." },
            ],
            steps: [
              { part: "a", reasoning: "Vibrations of objects.", working: "vibrations", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solid, liquid or gas — not vacuum.", working: "medium", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Pitch=frequency (high/low); loudness=amplitude (quiet/loud).", working: "pitch+loudness", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct distinction.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Medical imaging (scans), cleaning, sonar, physiotherapy.", working: "applications", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two+ valid.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct explanation.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) vibrations (b) needs medium (c) pitch=frequency, loudness=amplitude (d) imaging/sonar/cleaning",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Clear distinction.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "3-4", descriptor: "Two+ applications.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Pitch vs loudness confusion — frequency vs amplitude."],
          },
        },
        {
          id: "cils-u7-sound-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound waves are which type of wave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stationary" },
              { id: "b", text: "Electromagnetic" },
              { id: "c", text: "Transverse" },
              { id: "d", text: "Longitudinal" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sound wave", statement: "Longitudinal — compressions and rarefactions along direction of travel." },
            ],
            steps: [
              { reasoning: "Sound = longitudinal wave.", working: "longitudinal", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Longitudinal",
            commonErrors: ["Choosing (b) — transverse describes light, not sound."],
          },
        },
        {
          id: "cils-u7-sound-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound cannot travel through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A vacuum" },
              { id: "b", text: "A metal rod" },
              { id: "c", text: "Water" },
              { id: "d", text: "Air" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sound medium", statement: "Sound needs particles to vibrate — vacuum has none." },
            ],
            steps: [
              { reasoning: "No particles in vacuum → no sound transmission.", working: "vacuum", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A vacuum",
            commonErrors: ["Choosing (d) — sound travels well through solids."],
          },
        },
        {
          id: "cils-u7-sound-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The loudness of a sound depends on its:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed" },
              { id: "b", text: "Amplitude" },
              { id: "c", text: "Frequency" },
              { id: "d", text: "Wavelength" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Loudness", statement: "Larger amplitude = louder sound." },
            ],
            steps: [
              { reasoning: "Amplitude controls loudness; frequency controls pitch.", working: "amplitude", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Amplitude",
            commonErrors: ["Choosing (b) — frequency is pitch."],
          },
        },
        {
          id: "cils-u7-sound-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sound travels fastest in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solids" },
              { id: "b", text: "Vacuum" },
              { id: "c", text: "Gases" },
              { id: "d", text: "All media equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sound speed", statement: "Solids > liquids > gases — particles closer together transmit faster." },
            ],
            steps: [
              { reasoning: "Solid particles tightly packed → fastest sound.", working: "solids", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Solids",
            commonErrors: ["Choosing (b) — gases are slowest (air ~330 m/s)."],
          },
        },
        {
          id: "cils-u7-sound-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Ultrasound is sound with a frequency:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Below the range of human hearing" },
              { id: "b", text: "Above the range of human hearing" },
              { id: "c", text: "With zero amplitude" },
              { id: "d", text: "Exactly 100 Hz" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ultrasound", statement: "Frequency above ~20 kHz — inaudible to humans." },
            ],
            steps: [
              { reasoning: "Ultrasound = too high frequency to hear.", working: ">20 kHz", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Above human hearing",
            commonErrors: ["Choosing (b) — that's infrasound."],
          },
        },
        {
          id: "cils-u7-sound-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An echo is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound absorbed by walls" },
              { id: "b", text: "A louder sound" },
              { id: "c", text: "Sound travelling through vacuum" },
              { id: "d", text: "Sound reflected back from a surface" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Echo", statement: "Reflected sound returning to the listener." },
            ],
            steps: [
              { reasoning: "Echo = reflected sound wave.", working: "reflection", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Reflected sound",
            commonErrors: ["Choosing (b) — absorption is different from reflection."],
          },
        },
        {
          id: "cils-u7-sound-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "To make a sound higher in pitch, you should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make it louder" },
              { id: "b", text: "Change the medium" },
              { id: "c", text: "Increase the amplitude" },
              { id: "d", text: "Increase the frequency of vibration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pitch", statement: "Higher frequency → higher pitch." },
            ],
            steps: [
              { reasoning: "Pitch = frequency; increase frequency for higher pitch.", working: "frequency", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Increase frequency",
            commonErrors: ["Choosing (b) — amplitude changes loudness, not pitch."],
          },
        },
        {
          id: "cils-u7-sound-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sound travels at about $330\\ \\text{m/s}$ in air. How far does it travel in $2\\ \\text{s}$? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 660, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "distance = speed × time" },
            ],
            steps: [
              { reasoning: "$d = 330 \\times 2$.", working: "330 × 2", marks: 1, markCode: "M" },
              { reasoning: "$660\\ \\text{m}$.", working: "660", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$660\\ \\text{m}$",
          },
        },
        {
          id: "cils-u7-sound-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tuning fork has a frequency of $500\\ \\text{Hz}$. How many vibrations does it make per second? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Vibrations", answer: 500, unit: "/s" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Frequency", statement: "Hz = vibrations per second." },
            ],
            steps: [
              { reasoning: "$500\\ \\text{Hz} = 500$ per second.", working: "500", marks: 1, markCode: "M" },
              { reasoning: "500 vibrations per second.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$500$",
          },
        },
        {
          id: "cils-u7-sound-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Ultrasound travels at $1500\\ \\text{m/s}$ in body tissue. A scan takes $0.1\\ \\text{s}$ for sound to go to the baby and back. How far is the baby from the probe (one way)? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 75, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "Total distance = speed × time; one-way = half total." },
            ],
            steps: [
              { reasoning: "Total = $1500 \\times 0.1 = 150\\ \\text{m}$; one-way = $150 \\div 2$.", working: "150 ÷ 2", marks: 1, markCode: "M" },
              { reasoning: "$75\\ \\text{m}$.", working: "75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75\\ \\text{m}$",
          },
        },
        {
          id: "cils-u7-sound-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In $0.5\\ \\text{s}$, sound travelling at $340\\ \\text{m/s}$ covers what distance? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 170, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "distance = speed × time" },
            ],
            steps: [
              { reasoning: "$d = 340 \\times 0.5$.", working: "340 × 0.5", marks: 1, markCode: "M" },
              { reasoning: "$170\\ \\text{m}$.", working: "170", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$170\\ \\text{m}$",
          },
        },
        {
          id: "cils-u7-sound-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how bats use ultrasound to navigate in the dark, including how they produce and detect the echoes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Echolocation", statement: "Bats emit ultrasound, detect echoes to locate objects." },
            ],
            steps: [
              { reasoning: "Bat emits high-frequency ultrasound calls.", working: "emit", marks: 1, markCode: "M" },
              { reasoning: "Sound reflects off objects — returns as echo.", working: "echo", marks: 1, markCode: "M" },
              { reasoning: "Bat detects echo timing/intensity → builds picture of surroundings.", working: "detect", marks: 1, markCode: "M" },
              { reasoning: "Mechanism complete and accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Emit ultrasound → echo returns → interpret timing/intensity → navigate.",
            commonErrors: ["Saying bats 'see' with sound — they interpret echoes, not see."],
          },
        },
      ],
    },
    {
      id: "cils-u7-light",
      title: "Light waves and the electromagnetic spectrum",
      skill: "Describe light properties, spectrum and light interactions.",
      lesson: {
        sections: [
          {
            heading: "Light as waves",
            body: "Light = electromagnetic wave — transverse (crests/troughs), doesn't need medium, travels at ~300,000 km/s in vacuum.",
          },
          {
            heading: "Electromagnetic spectrum",
            body: "Radio → microwaves → infrared → visible → ultraviolet → X-rays → gamma. All same type, different wavelengths/frequencies.",
          },
          {
            heading: "Light interactions",
            body: "- **Reflection**: bouncing off mirror\n- **Refraction**: bending through different medium\n- **Absorption**: energy taken in (black objects heat up)",
          },
        ],
        keyFormulas: [
          { name: "Light", statement: "EM wave, transverse, ~3×10⁸ m/s; spectrum: radio→gamma by wavelength." },
        ],
        workedExample: {
          problem: "Why does a straw look bent in water?",
          solution: "Light refracts when passing from water to air — changes speed/direction.",
        },
      },
      questions: [
        {
          id: "cils-u7-light-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Does light need a medium to travel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only solids" },
              { id: "b", text: "Only water" },
              { id: "c", text: "No — travels through vacuum" },
              { id: "d", text: "Yes — needs air" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Light", statement: "EM wave — travels through vacuum." },
            ],
            steps: [
              { reasoning: "Light travels through space — no medium needed.", working: "vacuum", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** No — travels through vacuum",
            commonErrors: ["Choosing (b) — that's sound, not light."],
          },
        },
        {
          id: "cils-u7-light-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of electromagnetic waves besides visible light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "EM spectrum", statement: "Radio, microwaves, infrared, UV, X-rays, gamma." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Radio, microwaves, infrared, ultraviolet, X-rays, gamma (any two).",
            commonErrors: ["Saying 'sound waves' — not EM."],
          },
        },
        {
          id: "cils-u7-light-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain reflection and refraction of light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Light interactions", statement: "Reflection=bounces off; refraction=bends through different medium." },
            ],
            steps: [
              { reasoning: "Reflection: light bounces off surface — angle in = angle out.", working: "reflection", marks: 1, markCode: "M" },
              { reasoning: "Refraction: light changes speed entering different medium → bends.", working: "refraction", marks: 1, markCode: "M" },
              { reasoning: "Examples: mirror reflection; straw appears bent in water.", working: "examples", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection=bounce off; refraction=bend through medium — different mechanisms.",
            commonErrors: ["Confusing them — reflection stays in same medium, refraction crosses boundary."],
          },
        },
        {
          id: "cils-u7-light-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate the electromagnetic spectrum.",
          parts: [
            { label: "a", prompt: "List spectrum in order.", marks: 3 },
            { label: "b", prompt: "What do all EM waves have in common?", marks: 2 },
            { label: "c", prompt: "Give two uses of non-visible EM waves.", marks: 2 },
            { label: "d", prompt: "Why is UV dangerous?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "EM spectrum", statement: "Radio→microwave→IR→visible→UV→X-ray→gamma; all EM waves, different wavelengths." },
            ],
            steps: [
              { part: "a", reasoning: "Radio, microwaves, infrared, visible, UV, X-rays, gamma — correct order.", working: "order", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mostly correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All seven in order.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All electromagnetic waves — transverse, travel at light speed in vacuum.", working: "common", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Radio: communications; microwave: cooking; IR: remote controls; X-ray: imaging.", working: "uses", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two+ valid.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "High energy damages cells/DNA — causes sunburn, skin cancer.", working: "UV danger", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) radio→gamma (b) all EM waves same speed (c) radio/microwave/X-ray uses (d) damages cells/DNA",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Order correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Mostly.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Two+ uses.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Thinking different speeds — all EM waves same speed in vacuum."],
          },
        },
        {
          id: "cils-u7-light-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light waves are which type of wave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound" },
              { id: "b", text: "Mechanical" },
              { id: "c", text: "Transverse" },
              { id: "d", text: "Longitudinal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Light wave", statement: "Transverse — crests and troughs perpendicular to travel." },
            ],
            steps: [
              { reasoning: "Light = transverse electromagnetic wave.", working: "transverse", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Transverse",
            commonErrors: ["Choosing (b) — longitudinal is sound."],
          },
        },
        {
          id: "cils-u7-light-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The speed of light in a vacuum is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$340\\ \\text{m/s}$" },
              { id: "b", text: "$300\\,000\\ \\text{km/s}$" },
              { id: "c", text: "$330\\ \\text{m/s}$" },
              { id: "d", text: "$1500\\ \\text{m/s}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed of light", statement: "$c \\approx 3 \\times 10^8\\ \\text{m/s} = 300\\,000\\ \\text{km/s}$" },
            ],
            steps: [
              { reasoning: "Light speed ≈ 300,000 km/s in vacuum.", working: "3×10⁸ m/s", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $300\\,000\\ \\text{km/s}$",
            commonErrors: ["Choosing (b) — that's sound in air."],
          },
        },
        {
          id: "cils-u7-light-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which EM wave has the LONGEST wavelength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "X-rays" },
              { id: "b", text: "Gamma rays" },
              { id: "c", text: "Radio waves" },
              { id: "d", text: "Visible light" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "EM spectrum", statement: "Radio = longest wavelength; gamma = shortest." },
            ],
            steps: [
              { reasoning: "Radio waves have longest wavelengths.", working: "radio", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Radio waves",
            commonErrors: ["Choosing (c) — gamma has shortest wavelength, highest energy."],
          },
        },
        {
          id: "cils-u7-light-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which EM wave has the HIGHEST frequency and energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Microwaves" },
              { id: "b", text: "Gamma rays" },
              { id: "c", text: "Infrared" },
              { id: "d", text: "Radio waves" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "EM spectrum", statement: "Gamma = highest frequency/energy; radio = lowest." },
            ],
            steps: [
              { reasoning: "Gamma rays have highest frequency and energy.", working: "gamma", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Gamma rays",
            commonErrors: ["Choosing (b) — radio is lowest frequency."],
          },
        },
        {
          id: "cils-u7-light-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When white light passes through a prism, it separates into colours because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The prism creates new colours" },
              { id: "b", text: "Different colours refract by different amounts" },
              { id: "c", text: "The prism reflects all light" },
              { id: "d", text: "Light is absorbed completely" },
            ],
            correctChoiceId: "b",
            },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dispersion", statement: "Refraction differs per wavelength → spectrum (dispersion)." },
            ],
            steps: [
              { reasoning: "Each colour bends differently → spectrum.", working: "dispersion", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Different refraction per colour",
            commonErrors: ["Choosing (b) — colours were already in white light."],
          },
        },
        {
          id: "cils-u7-light-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A black object in sunlight feels hotter than a white object because black surfaces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absorb more light (and heat) than they reflect" },
              { id: "b", text: "Produce their own heat" },
              { id: "c", text: "Are always heavier" },
              { id: "d", text: "Reflect all light" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absorption", statement: "Dark/black surfaces absorb most radiation → heat up." },
            ],
            steps: [
              { reasoning: "Black absorbs light energy → converts to heat.", working: "absorb", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Absorbs more light/heat",
            commonErrors: ["Choosing (b) — white reflects; black absorbs."],
          },
        },
        {
          id: "cils-u7-light-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "According to the law of reflection, the angle of incidence equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "90 degrees always" },
              { id: "b", text: "The angle of reflection" },
              { id: "c", text: "The angle of incidence × 2" },
              { id: "d", text: "The angle of refraction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of reflection", statement: "Angle of incidence = angle of reflection (measured from normal)." },
            ],
            steps: [
              { reasoning: "Reflection law: i = r.", working: "i = r", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Angle of reflection",
            commonErrors: ["Choosing (c) — angles measured from normal, not surface."],
          },
        },
        {
          id: "cils-u7-light-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many main types of electromagnetic wave are in the spectrum: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Types", answer: 7 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "EM spectrum", statement: "Seven regions from radio to gamma." },
            ],
            steps: [
              { reasoning: "Count the listed regions.", working: "7", marks: 1, markCode: "M" },
              { reasoning: "Seven types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
          },
        },
        {
          id: "cils-u7-light-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Light travels at $3 \\times 10^8\\ \\text{m/s}$. How many metres does it travel in $1\\ \\text{s}$? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 300000000, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed of light", statement: "$c = 3 \\times 10^8\\ \\text{m/s}$ — per second." },
            ],
            steps: [
              { reasoning: "Distance = $3 \\times 10^8 \\times 1$.", working: "3×10⁸", marks: 1, markCode: "M" },
              { reasoning: "$300000000\\ \\text{m}$.", working: "3×10⁸", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3 \\times 10^8\\ \\text{m}$",
          },
        },
        {
          id: "cils-u7-light-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A wave has a frequency of $5\\ \\text{Hz}$. How many complete oscillations occur in $20\\ \\text{s}$? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Oscillations", answer: 100 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Frequency", statement: "Number of oscillations per second — total = f × t." },
            ],
            steps: [
              { reasoning: "$5 \\times 20 = 100$ oscillations.", working: "5 × 20", marks: 1, markCode: "M" },
              { reasoning: "100 oscillations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$",
          },
        },
        {
          id: "cils-u7-light-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Visible light occupies roughly which positions in the EM spectrum (1 = lowest frequency end, 7 = highest)? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Position", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "EM spectrum order", statement: "Radio(1), microwave(2), IR(3), visible(4), UV(5), X-ray(6), gamma(7)." },
            ],
            steps: [
              { reasoning: "Visible is 4th of 7 regions.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Position = 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cils-u7-light-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the three main ways light interacts with matter — reflection, refraction and absorption — giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Light interactions", statement: "Reflection (bounce), refraction (bend), absorption (energy taken in)." },
            ],
            steps: [
              { reasoning: "Reflection: bounces off surface, e.g. mirror — angle in = angle out.", working: "reflection", marks: 1, markCode: "M" },
              { reasoning: "Refraction: bends entering different medium, e.g. straw looks bent in water.", working: "refraction", marks: 1, markCode: "M" },
              { reasoning: "Absorption: energy taken in, e.g. black object heats up in sun.", working: "absorption", marks: 1, markCode: "M" },
              { reasoning: "All three with examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection (mirror), refraction (straw in water), absorption (black surface heats).",
            commonErrors: ["Missing absorption — it's a key interaction."],
          },
        },
      ],
    },
    {
      id: "cils-u7-summary",
      title: "Electricity, magnetism and waves summary",
      skill: "Combine physics concepts in problem-solving.",
      lesson: {
        sections: [
          {
            heading: "Key equations",
            body: "V=IR; P=VI; E=Pt; F=ma; W=mg; p=F/A; M=Fd; speed=d/t; ρ=m/V",
          },
          {
            heading: "Wave properties",
            body: "Sound: longitudinal, needs medium. Light: transverse, EM spectrum. Frequency=pitch; amplitude=loudness/brightness.",
          },
          {
            heading: "Magnetism",
            body: "Like poles repel, opposite attract. Electromagnet: current+coil+iron core. Motor: current in field → rotation.",
          },
        ],
        keyFormulas: [
          { name: "Summary", statement: "Electricity: V=IR, P=VI. Magnetism: poles, electromagnets. Waves: sound/light properties." },
        ],
        workedExample: {
          problem: "A 12 V battery, 4 Ω resistor, 1 hour. Power and energy?",
          solution: "I = V ÷ R = 12 ÷ 4 = 3 A. P = VI = 12 × 3 = 36 W. E = Pt = 36 × 3600 = 129,600 J.",
        },
      },
      questions: [
        {
          id: "cils-u7-sum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an ammeter measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Voltage" },
              { id: "b", text: "Resistance" },
              { id: "c", text: "Power" },
              { id: "d", text: "Current" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ammeter", statement: "Measures current in amps." },
            ],
            steps: [
              { reasoning: "Ammeter = current.", working: "current", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Current",
            commonErrors: ["Choosing (b) — voltmeter measures voltage."],
          },
        },
        {
          id: "cils-u7-sum-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 9 V battery, 3 Ω resistor. What current flows?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ohm's law", statement: "I = V ÷ R = 9 ÷ 3 = 3 A" },
            ],
            steps: [
              { reasoning: "I = V ÷ R.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "= 3 A.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 A",
            commonErrors: ["Using V×R — rearrange correctly."],
          },
        },
        {
          id: "cils-u7-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare sound and light waves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Wave comparison", statement: "Sound: longitudinal, needs medium. Light: transverse, EM, vacuum OK." },
            ],
            steps: [
              { reasoning: "Sound: longitudinal, needs medium, slower.", working: "sound", marks: 1, markCode: "M" },
              { reasoning: "Light: transverse, EM spectrum, travels vacuum.", working: "light", marks: 1, markCode: "M" },
              { reasoning: "Both transfer energy without matter.", working: "common", marks: 1, markCode: "M" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sound: longitudinal, needs medium; light: transverse, EM, vacuum OK.",
            commonErrors: ["Saying both need medium — light doesn't."],
          },
        },
        {
          id: "cils-u7-sum-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Solve an integrated physics problem.",
          parts: [
            { label: "a", prompt: "A 12 V battery powers a 4 Ω resistor. Calculate current.", marks: 2 },
            { label: "b", prompt: "Calculate power.", marks: 1 },
            { label: "c", prompt: "Calculate energy for 2 hours.", marks: 2 },
            { label: "d", prompt: "Explain safety features for this circuit.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integration", statement: "V=IR; P=VI; E=Pt; safety: fuse/earth wire." },
            ],
            steps: [
              { part: "a", reasoning: "I = V ÷ R = 12 ÷ 4 = 3 A.", working: "3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "P = VI = 12 × 3 = 36 W.", working: "36", marks: 1, markCode: "M" },
              { part: "c", reasoning: "E = Pt = 36 × 2 = 72 Wh = 0.072 kWh (or 259,200 J).", working: "energy", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Fuse/breaker prevents overload; earth wire safety; insulated wires.", working: "safety", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two+ features.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct explanation.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 A (b) 36 W (c) 0.072 kWh (d) fuse/earth/insulation",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "3-4", descriptor: "Multiple features.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Forgetting ×time in energy calculation."],
          },
        },
        {
          id: "cils-u7-sum-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a voltmeter measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Current" },
              { id: "b", text: "Power" },
              { id: "c", text: "Voltage (potential difference)" },
              { id: "d", text: "Resistance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Voltmeter", statement: "Measures voltage in volts — connected in parallel." },
            ],
            steps: [
              { reasoning: "Voltmeter = voltage.", working: "voltage", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Voltage",
            commonErrors: ["Choosing (b) — ammeter measures current."],
          },
        },
        {
          id: "cils-u7-sum-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The unit of power is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Joule (J)" },
              { id: "b", text: "Watt (W)" },
              { id: "c", text: "Volt (V)" },
              { id: "d", text: "Ampere (A)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Power unit", statement: "Power measured in watts = joules per second." },
            ],
            steps: [
              { reasoning: "W = watt = power.", working: "W", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Watt (W)",
            commonErrors: ["Choosing (b) — J is energy, not power."],
          },
        },
        {
          id: "cils-u7-sum-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the formula $E = Pt$, energy is measured in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Joules" },
              { id: "b", text: "Watts" },
              { id: "c", text: "Amps" },
              { id: "d", text: "Volts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Energy", statement: "E = Pt → joules (W × s = J)." },
            ],
            steps: [
              { reasoning: "Energy in joules.", working: "J", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Joules",
            commonErrors: ["Choosing (b) — W is power."],
          },
        },
        {
          id: "cils-u7-sum-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A resistor in a circuit:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opposes the flow of current" },
              { id: "b", text: "Stores charge" },
              { id: "c", text: "Creates magnetism" },
              { id: "d", text: "Increases voltage" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resistor", statement: "Component that opposes current — measured in ohms." },
            ],
            steps: [
              { reasoning: "Resistor opposes current flow.", working: "oppose", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Opposes current",
            commonErrors: ["Choosing (b) — resistor drops voltage, doesn't create it."],
          },
        },
        {
          id: "cils-u7-sum-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a parallel circuit, the voltage across each component is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "The same as the supply voltage" },
              { id: "c", text: "Divided between components" },
              { id: "d", text: "Increasing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Parallel circuit", statement: "Voltage same across all branches in parallel." },
            ],
            steps: [
              { reasoning: "Parallel = same voltage each branch.", working: "same V", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Same as supply",
            commonErrors: ["Choosing (b) — that's series circuits."],
          },
        },
        {
          id: "cils-u7-sum-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A fuse protects a circuit by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storing extra charge" },
              { id: "b", text: "Melting and breaking the circuit when current is too high" },
              { id: "c", text: "Reducing resistance permanently" },
              { id: "d", text: "Increasing the voltage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Fuse", statement: "Thin wire melts on overload → circuit breaks → prevents fire." },
            ],
            steps: [
              { reasoning: "Fuse melts on excessive current.", working: "melt", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Melts and breaks circuit",
            commonErrors: ["Choosing (d) — fuse doesn't reduce resistance."],
          },
        },
        {
          id: "cils-u7-sum-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is BOTH an electromagnetic wave AND visible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound" },
              { id: "b", text: "Ultrasound" },
              { id: "c", text: "Water waves" },
              { id: "d", text: "Visible light" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "EM spectrum", statement: "Visible light is the only EM wave humans see; sound is mechanical." },
            ],
            steps: [
              { reasoning: "Only visible light is EM and visible.", working: "visible", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Visible light",
            commonErrors: ["Choosing (b) — sound is mechanical, not EM."],
          },
        },
        {
          id: "cils-u7-sum-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A $24\\ \\text{V}$ battery is connected to a $6\\ \\Omega$ resistor. What current flows? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Current", answer: 4, unit: "A" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "$I = V \\div R$" },
            ],
            steps: [
              { reasoning: "$I = 24 \\div 6$.", working: "24 ÷ 6", marks: 1, markCode: "M" },
              { reasoning: "$4\\ \\text{A}$.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\ \\text{A}$",
          },
        },
        {
          id: "cils-u7-sum-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A device uses $12\\ \\text{V}$ and $2\\ \\text{A}$. What is its power? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Power", answer: 24, unit: "W" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$P = V \\times I$" },
            ],
            steps: [
              { reasoning: "$P = 12 \\times 2$.", working: "12 × 2", marks: 1, markCode: "M" },
              { reasoning: "$24\\ \\text{W}$.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24\\ \\text{W}$",
          },
        },
        {
          id: "cils-u7-sum-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $100\\ \\text{W}$ heater runs for $3600\\ \\text{s}$. How much energy does it use? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 360000, unit: "J" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy", statement: "$E = P \\times t$" },
            ],
            steps: [
              { reasoning: "$E = 100 \\times 3600$.", working: "100 × 3600", marks: 1, markCode: "M" },
              { reasoning: "$360000\\ \\text{J}$.", working: "360000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$360000\\ \\text{J}$",
          },
        },
        {
          id: "cils-u7-sum-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A current of $3\\ \\text{A}$ flows through a $4\\ \\Omega$ resistor. What is the voltage across it? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Voltage", answer: 12, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "$V = I \\times R$" },
            ],
            steps: [
              { reasoning: "$V = 3 \\times 4$.", working: "3 × 4", marks: 1, markCode: "M" },
              { reasoning: "$12\\ \\text{V}$.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12\\ \\text{V}$",
          },
        },
        {
          id: "cils-u7-sum-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A $6\\ \\text{V}$ battery is connected to a $2\\ \\Omega$ resistor for $1$ hour. Calculate (a) the current, (b) the power, and (c) the energy used in joules.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Electricity", statement: "$I = V/R$; $P = VI$; $E = Pt$ — chain the calculations." },
            ],
            steps: [
              { reasoning: "Current: $I = 6 \\div 2 = 3\\ \\text{A}$.", working: "I = 3 A", marks: 1, markCode: "M" },
              { reasoning: "Current correct.", marks: 1, markCode: "A" },
              { reasoning: "Power: $P = 6 \\times 3 = 18\\ \\text{W}$.", working: "P = 18 W", marks: 1, markCode: "M" },
              { reasoning: "Power correct.", marks: 1, markCode: "A" },
              { reasoning: "Energy: $E = 18 \\times 3600 = 64800\\ \\text{J}$.", working: "E = 64800 J", marks: 1, markCode: "M" },
              { reasoning: "Energy correct (time in seconds).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3\\ \\text{A}$ (b) $18\\ \\text{W}$ (c) $64800\\ \\text{J}$",
            commonErrors: ["Using hours instead of seconds in E = Pt."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u7-summary-notes",
      title: "Physics summary — revision notes",
      summary: "Electricity, magnetism, waves, key equations.",
      sections: [
        {
          heading: "Physics recap",
          body: "V=IR, P=VI, E=Pt. F=ma, W=mg. Sound=longitudinal needs medium; light=transverse EM. Magnets: like repel, electromagnets temporary.",
        },
      ],
    },
  ],
};
