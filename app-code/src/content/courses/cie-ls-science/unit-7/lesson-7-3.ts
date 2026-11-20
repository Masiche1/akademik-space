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
              { id: "a", text: "Vibrations" },
              { id: "b", text: "Light" },
              { id: "c", text: "Magnetism" },
              { id: "d", text: "Electricity only" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "No — travels through vacuum" },
              { id: "b", text: "Yes — needs air" },
              { id: "c", text: "Only water" },
              { id: "d", text: "Only solids" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Current" },
              { id: "b", text: "Voltage" },
              { id: "c", text: "Resistance" },
              { id: "d", text: "Power" },
            ],
            correctChoiceId: "a",
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
