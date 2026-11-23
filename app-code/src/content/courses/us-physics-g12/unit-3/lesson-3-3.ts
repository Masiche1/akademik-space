import type { Lesson } from "../../../types.ts";

export const lesson133: Lesson = {
  id: "phys12-u3-lesson-3-3",
  code: "3-3",
  title: "Waves and Sound",
  goal: "I CAN describe wave properties, apply the wave equation, analyze sound phenomena, and explain the Doppler effect.",
  standards: ["HS-PS4-1", "HS-PS4-2"],
  vocabulary: [
    { term: "Wave", definition: "A disturbance that transfers energy without transferring matter." },
    { term: "Wavelength", definition: "Distance between consecutive crests (or troughs): $\\lambda$." },
    { term: "Frequency", definition: "Number of waves per second (Hz); $f = 1/T$." },
    { term: "Wave speed", definition: "$v = f\\lambda$ for all waves." },
    { term: "Amplitude", definition: "Maximum displacement from equilibrium." },
    { term: "Doppler effect", definition: "Frequency shift when source or observer moves relative to medium." },
    { term: "Decibel", definition: "Logarithmic unit for sound intensity level: $\\beta = 10\\log_{10}(I/I_0)$." },
  ],
  concepts: [
    {
      id: "phys12-u3-wave-basics",
      title: "Wave properties",
      skill: "Apply the wave equation and describe wave behavior including reflection, refraction and interference.",
      lesson: {
        sections: [
          {
            heading: "Wave equation",
            body: `All waves obey:

$$v = f\\lambda$$

where $v$ is wave speed, $f$ is frequency, $\\lambda$ is wavelength. For sound in air, $v \\approx 343$ m/s (at 20°C). For light in vacuum, $v = 3.00 \\times 10^8$ m/s.`,
          },
          {
            heading: "Wave behaviors",
            body: `- **Reflection**: wave bounces off a boundary (echo)
- **Refraction**: wave changes speed and direction entering a new medium
- **Diffraction**: wave spreads around obstacles and through gaps
- **Interference**: waves superpose — constructive (in phase) or destructive (out of phase)`,
          },
          {
            heading: "Sound waves",
            body: "Sound is a longitudinal pressure wave in a medium. Humans hear 20 Hz to 20,000 Hz. Ultrasound (>20 kHz) is used in medical imaging; infrasound (<20 Hz) is produced by earthquakes and whales.",
          },
        ],
        keyFormulas: [
          { name: "Wave equation", statement: "$v = f\\lambda$" },
          { name: "Sound speed", statement: "$v \\approx 343$ m/s in air at 20°C" },
          { name: "Decibel", statement: "$\\beta = 10\\log_{10}(I/I_0)$, $I_0 = 10^{-12}$ W/m²" },
        ],
        workedExample: {
          problem: "A sound wave has frequency 440 Hz and speed 343 m/s. What is its wavelength?",
          solution: "$\\lambda = v/f = 343/440 = 0.78$ m.",
        },
      },
      questions: [
        {
          id: "phys12-u3-wave-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the relationship between wave speed, frequency and wavelength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$v = f + \\lambda$" },
              { id: "b", text: "$v = f\\lambda$" },
              { id: "c", text: "$v = f/\\lambda$" },
              { id: "d", text: "$v = \\lambda/f$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$." }],
            steps: [{ reasoning: "The wave equation is $v = f\\lambda$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $v = f\\lambda$",
            commonErrors: ["Using wrong formula."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u3-wave-basics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A wave has frequency 250 Hz and wavelength 1.4 m. Calculate its speed.",
          response: { type: "numeric", parts: [{ label: "v", answer: 350, unit: "m/s" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$" }],
            steps: [
              { reasoning: "$v = f\\lambda = 250 \\times 1.4 = 350$ m/s.", working: "v=250*1.4=350", marks: 2, markCode: "M" },
              { reasoning: "v = 350 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "350 m/s",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u3-wave-basics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sound wave travels 170 m in 0.50 s. What is its frequency if the wavelength is 0.68 m?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave speed", statement: "$v = d/t$" },
              { kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$" },
            ],
            steps: [
              { reasoning: "Wave speed: $v = 170/0.50 = 340$ m/s.", working: "v=170/0.50=340", marks: 1, markCode: "M" },
              { reasoning: "Frequency: $f = v/\\lambda = 340/0.68 = 500$ Hz.", working: "f=340/0.68=500", marks: 2, markCode: "M" },
              { reasoning: "f = 500 Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500 Hz",
            commonErrors: ["Using wavelength as speed.", "Confusing f and λ."],
            examinerNote: "M1 speed, M2 frequency, A1 answer.",
          },
        },
        {
          id: "phys12-u3-wave-basics-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two speakers emit sound waves that interfere. At a point, the path difference is 0.85 m. Sound speed is 340 m/s.",
          parts: [
            { label: "a", prompt: "If the waves have frequency 400 Hz, calculate the wavelength.", marks: 2 },
            { label: "b", prompt: "Calculate the phase difference between the waves at that point.", marks: 3 },
            { label: "c", prompt: "Determine whether the interference is constructive or destructive.", marks: 3 },
            { label: "d", prompt: "Explain what would happen if the path difference were 1.275 m instead.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$\\lambda = v/f$" },
              { kind: "principle", name: "Interference", statement: "Constructive: path diff = nλ; destructive: path diff = (n+½)λ" },
            ],
            steps: [
              { reasoning: "$\\lambda = v/f = 340/400 = 0.85$ m.", working: "lambda=340/400=0.85", marks: 2, markCode: "M", part: "a" },
              { reasoning: "Path difference = 0.85 m = exactly 1 wavelength.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Phase difference = $2\\pi \\times (0.85/0.85) = 2\\pi$ rad = one full cycle.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Waves are in phase (differ by whole number of wavelengths).", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Path difference = nλ (n=1), so interference is constructive.", marks: 2, markCode: "R", part: "c" },
              { reasoning: "Constructive interference: maximum amplitude.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "1.275 m = 1.5λ (since λ=0.85, 1.5×0.85=1.275).", marks: 1, markCode: "M", part: "d" },
              { reasoning: "Path difference = (n+½)λ → destructive interference; waves cancel.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 0.85 m (b) 2π rad (in phase) (c) constructive (d) destructive (1.5λ path difference).",
            commonErrors: ["Confusing path difference with phase difference.", "Thinking all interference is constructive."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u3-sound",
      title: "Sound and the Doppler effect",
      skill: "Apply decibel scale, Doppler effect, and sound phenomena to real situations.",
      lesson: {
        sections: [
          {
            heading: "Sound intensity and decibels",
            body: `Sound intensity $I$ is power per unit area (W/m²). The **decibel scale** is logarithmic:

$$\\beta = 10\\log_{10}\\left(\\frac{I}{I_0}\\right)$$

where $I_0 = 10^{-12}$ W/m² (threshold of hearing). Normal conversation ≈ 60 dB; jet engine ≈ 120-140 dB.`,
          },
          {
            heading: "Doppler effect",
            body: `When a source moves toward an observer, waves compress → higher frequency (higher pitch). Moving away → stretched → lower frequency.

For source moving toward stationary observer: $f' = f \\times v/(v - v_s)$ where $v_s$ is source speed.

Classic example: ambulance siren sounds higher as it approaches, lower as it recedes.`,
          },
          {
            heading: "Echoes and sonar",
            body: "Sound reflects off surfaces to produce echoes. **Sonar** uses ultrasonic pulses to measure distance: $d = vt/2$ where t is round-trip time. Dolphins and bats use echolocation.",
          },
        ],
        keyFormulas: [
          { name: "Decibel", statement: "$\\beta = 10\\log_{10}(I/I_0)$" },
          { name: "Doppler (source)", statement: "$f' = f \\times v/(v - v_s)$ approaching" },
          { name: "Echo distance", statement: "$d = vt/2$" },
        ],
        workedExample: {
          problem: "An ambulance moving at 30 m/s sounds its siren at 800 Hz. What frequency does a stationary observer hear as it approaches? ($v_{sound} = 343$ m/s)",
          solution: "$f' = 800 \\times 343/(343 - 30) = 800 \\times 343/313 = 800 \\times 1.096 = 877$ Hz.",
        },
      },
      questions: [
        {
          id: "phys12-u3-sound-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the threshold of hearing intensity $I_0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10^{-12}$ W/m²" },
              { id: "b", text: "$10^{-6}$ W/m²" },
              { id: "c", text: "1 W/m²" },
              { id: "d", text: "$10^{12}$ W/m²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Decibel", statement: "$I_0 = 10^{-12}$ W/m² is threshold of hearing." }],
            steps: [{ reasoning: "The reference intensity for decibel scale is $10^{-12}$ W/m².", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $10^{-12}$ W/m²",
            commonErrors: ["Confusing intensity with pressure."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys12-u3-sound-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sound has intensity $10^{-8}$ W/m². Calculate its decibel level.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Decibel", statement: "$\\beta = 10\\log_{10}(I/I_0)$" }],
            steps: [
              { reasoning: "$\\beta = 10\\log_{10}(10^{-8}/10^{-12}) = 10\\log_{10}(10^4) = 10 \\times 4 = 40$ dB.", working: "beta=10*log(1e-8/1e-12)=40", marks: 2, markCode: "M" },
              { reasoning: "Sound level = 40 dB.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 dB",
            commonErrors: ["Using wrong I₀.", "Forgetting the factor of 10."],
            examinerNote: "M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u3-sound-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A train whistle at 500 Hz approaches a stationary observer at 25 m/s. Sound speed is 340 m/s. What frequency does the observer hear?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Doppler", statement: "$f' = f \\times v/(v - v_s)$ for approaching source." }],
            steps: [
              { reasoning: "$f' = 500 \\times 340/(340 - 25) = 500 \\times 340/315 = 500 \\times 1.079 = 540$ Hz.", working: "f'=500*340/315=540", marks: 2, markCode: "M" },
              { reasoning: "Observed frequency ≈ 540 Hz — higher pitch.", marks: 1, markCode: "A" },
              { reasoning: "Frequency increases because source moving toward observer compresses wavefronts.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "540 Hz",
            commonErrors: ["Using wrong Doppler formula.", "Forgetting source moves toward observer means higher f."],
            examinerNote: "M2 calculation, A1 answer, R1 explanation.",
          },
        },
        {
          id: "phys12-u3-sound-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A submarine uses sonar to detect an object. The sonar pulse travels at 1500 m/s in seawater.",
          parts: [
            { label: "a", prompt: "If the echo returns after 0.80 s, calculate the distance to the object.", marks: 2 },
            { label: "b", prompt: "The submarine moves toward the object at 20 m/s. Does the echo frequency increase or decrease? Explain.", marks: 3 },
            { label: "c", prompt: "Calculate the Doppler-shifted frequency if the sonar frequency is 10 kHz and the object is stationary.", marks: 3 },
            { label: "d", prompt: "Explain why sonar uses ultrasound rather than audible sound.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Echo distance", statement: "$d = vt/2$" },
              { kind: "formula", name: "Doppler", statement: "Moving source → frequency shift" },
            ],
            steps: [
              { reasoning: "$d = vt/2 = 1500 \\times 0.80/2 = 600$ m.", working: "d=1500*0.80/2=600", marks: 2, markCode: "M", part: "a" },
              { reasoning: "Echo frequency increases — both source and observer (submarine) moving toward the reflecting object compress the returning waves.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Double Doppler shift occurs: once when pulse emitted, again when echo returns.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Frequency increases (higher pitch echo).", marks: 1, markCode: "A", part: "b" },
              { reasoning: "For moving source toward stationary observer: $f' = f \\times v/(v - v_s) = 10,000 \\times 1500/(1500 - 20) = 10,000 \\times 1500/1480 = 10,135$ Hz.", working: "f'=10000*1500/1480=10135", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Answer: ≈ 10,135 Hz or 10.14 kHz.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Ultrasound (>20 kHz) has shorter wavelength → better resolution and less interference from ambient noise; it doesn't disturb marine life as much.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Higher frequency gives finer detail in imaging.", marks: 1, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) 600 m (b) frequency increases (c) 10.14 kHz (d) better resolution, less noise.",
            commonErrors: ["Forgetting factor of 2 in echo distance.", "Thinking frequency decreases when approaching."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
  ],
};
