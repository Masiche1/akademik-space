import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypp4-u2-lesson-2-3",
  code: "2-3",
  title: "Waves, Sound and Light",
  goal: "I CAN describe wave properties, compare sound and light, and explain the electromagnetic spectrum.",
  standards: [
    "Key concept: Change",
    "MYP Sciences: Energy",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Wave", definition: "A disturbance that transfers energy without transferring matter." },
    { term: "Amplitude", definition: "Maximum displacement from equilibrium; determines loudness/brightness." },
    { term: "Wavelength", definition: "Distance between consecutive crests; $\\lambda$ in metres." },
    { term: "Frequency", definition: "Number of oscillations per second; $f$ in hertz (Hz)." },
    { term: "Wave speed", definition: "$v = f\\lambda$; all EM waves travel at $3 \\times 10^8$ m/s in vacuum." },
    { term: "Electromagnetic spectrum", definition: "Radio → microwave → infrared → visible → UV → X-ray → gamma, increasing frequency." },
  ],
  concepts: [
    {
      id: "mypp4-u2-waves",
      title: "Wave properties",
      skill: "Describe amplitude, wavelength, frequency and speed; use $v = f\\lambda$.",
      lesson: {
        sections: [
          {
            heading: "Wave anatomy",
            body: "Waves transfer energy via oscillations. **Amplitude** = height of crest; **wavelength** $\\lambda$ = crest-to-crest distance; **frequency** $f$ = oscillations per second (Hz); **period** $T = 1/f$.",
          },
          {
            heading: "Wave equation",
            body: "$v = f\\lambda$. Sound in air travels ≈ 330 m/s; light ≈ $3 \\times 10^8$ m/s. Doubling frequency at same speed halves wavelength.",
          },
          {
            heading: "Transverse vs longitudinal",
            body: "Transverse waves (light, EM, waves on strings) oscillate perpendicular to travel; longitudinal waves (sound) oscillate parallel — compressions and rarefactions.",
          },
        ],
        keyFormulas: [
          { name: "Wave speed", statement: "$v = f\\lambda$ m/s" },
          { name: "Period", statement: "$T = 1/f$ s" },
          { name: "Sound speed", statement: "$\\approx 330\\ \\text{m/s in air}$" },
        ],
        workedExample: {
          problem: "A wave has frequency 500 Hz and wavelength 0.6 m. Find its speed.",
          solution: "$v = 500 \\times 0.6 = 300$ m/s.",
        },
      },
      questions: [
        {
          id: "mypp4-u2-wave-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit of frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "metres" },
              { id: "b", text: "hertz" },
              { id: "c", text: "joules" },
              { id: "d", text: "seconds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Frequency", statement: "Oscillations per second; unit Hz." }],
            steps: [
              { reasoning: "Frequency is measured in hertz (Hz).", working: "\\text{Hz}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** hertz",
            commonErrors: ["Confusing with wavelength unit (m)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u2-wave-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sound wave has frequency 440 Hz and speed 330 m/s. Calculate its wavelength.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.75 m" },
              { id: "b", text: "1.33 m" },
              { id: "c", text: "0.0013 m" },
              { id: "d", text: "145 200 m" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "$\\lambda = v/f = 330/440$" }],
            steps: [
              { reasoning: "Rearrange $v = f\\lambda$ to $\\lambda = v/f$.", working: "\\lambda=\\frac{v}{f}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\frac{330}{440}=0.75\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.75 m",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-wave-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which statement about sound and light is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound is longitudinal, light is transverse; only sound needs a medium" },
              { id: "b", text: "Both need a medium to travel" },
              { id: "c", text: "Both travel at the same speed in air" },
              { id: "d", text: "Light is longitudinal, sound is transverse" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Wave types", statement: "Sound = longitudinal mechanical; light = transverse EM." }],
            steps: [
              { reasoning: "Sound needs air/medium and is longitudinal.", working: "\\text{sound:longitudinal}", marks: 1, markCode: "M" },
              { reasoning: "Light is EM, transverse, travels in vacuum.", working: "\\text{light:transverse}", marks: 1, markCode: "M" },
              { reasoning: "Match choice.", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(b)",
            commonErrors: ["Thinking light needs a medium."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-wave-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An ultrasound scanner emits sound at 2 MHz. Speed of sound in tissue ≈ 1500 m/s. The echo returns after 0.0002 s.",
          parts: [
            { label: "a", prompt: "Calculate the wavelength of the ultrasound.", marks: 2 },
            { label: "b", prompt: "Calculate the distance to the reflecting surface.", marks: 3 },
            { label: "c", prompt: "Explain why ultrasound (not light) is used for body scanning.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "v = fλ", statement: "$\\lambda = 1500/(2 \\times 10^6)$" },
              { kind: "formula", name: "Echo", statement: "Distance = speed × time ÷ 2." },
            ],
            steps: [
              { part: "a", reasoning: "$\\lambda = 1500/(2 \\times 10^6) = 7.5 \\times 10^{-4}$ m.", working: "\\frac{1500}{2\\times10^6}=7.5\\times10^{-4}\\ \\text{m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct value.", working: "0.75\\ \\text{mm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Distance travelled = $1500 \\times 0.0002 = 0.3$ m (there and back).", working: "1500\\times0.0002=0.3\\ \\text{m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 2 for one-way distance.", working: "\\frac{0.3}{2}=0.15\\ \\text{m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Distance = 15 cm.", working: "15\\ \\text{cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ultrasound reflects off tissue boundaries; safe (non-ionising); gives real-time images.", working: "\\text{safe,real-time}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Light doesn't penetrate tissue well; X-rays ionising.", working: "\\text{X-rays ionising}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ultrasound is safe and effective.", working: "\\text{safe}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.75 mm (b) 15 cm (c) safe non-ionising, reflects at tissue boundaries",
            commonErrors: ["Forgetting to halve the echo distance in (b)."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypp4-u2-wave-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of wavelength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "metres" },
              { id: "b", text: "seconds" },
              { id: "c", text: "m/s" },
              { id: "d", text: "hertz" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Wavelength", statement: "$\\lambda$ is a distance → metres." }],
            steps: [
              { reasoning: "Wavelength is measured in metres.", working: "\\text{m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** metres",
            commonErrors: ["Confusing with frequency unit (Hz)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u2-wave-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A wave has frequency 250 Hz and travels at 340 m/s. Calculate its wavelength.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 1.36, unit: "m" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "$\\lambda = v/f = 340/250$" }],
            steps: [
              { reasoning: "Rearrange $v = f\\lambda$ to $\\lambda = v/f$.", working: "\\lambda=\\frac{v}{f}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1.36\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.36 m",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-wave-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A wave has frequency 200 Hz. Calculate its period.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 0.005, unit: "s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "T = 1/f", statement: "Period = reciprocal of frequency." }],
            steps: [
              { reasoning: "Apply $T = 1/f$.", working: "\\frac{1}{200}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.005\\ \\text{s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.005 s (5 ms)",
            commonErrors: ["Inverting the relationship."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-wave-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sound travelling through air is which type of wave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stationary" },
              { id: "b", text: "Transverse" },
              { id: "c", text: "Longitudinal" },
              { id: "d", text: "Electromagnetic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Wave types", statement: "Sound = longitudinal mechanical wave (compressions/rarefactions)." }],
            steps: [
              { reasoning: "Sound oscillates parallel to travel direction.", working: "\\text{longitudinal}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Longitudinal",
            commonErrors: ["Thinking all waves are transverse."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-wave-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A light wave has wavelength $5 \\times 10^{-7}$ m. Given the speed of light is $3 \\times 10^8$ m/s, calculate its frequency.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 6e14, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "$f = v/\\lambda = 3 \\times 10^8 / 5 \\times 10^{-7}$" }],
            steps: [
              { reasoning: "Rearrange: $f = v/\\lambda$.", working: "f=\\frac{v}{\\lambda}", marks: 1, markCode: "M" },
              { reasoning: "Divide powers of ten carefully.", working: "\\frac{3\\times10^8}{5\\times10^{-7}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $6 \\times 10^{14}$ Hz.", working: "6\\times10^{14}\\ \\text{Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6 \\times 10^{14}$ Hz",
            commonErrors: ["Power-of-ten errors in the division."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-wave-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A wave travels at constant speed. If its frequency is doubled, what happens to its wavelength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It doubles" },
              { id: "b", text: "It quadruples" },
              { id: "c", text: "It halves" },
              { id: "d", text: "It stays the same" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "Constant $v$: $f$ and $\\lambda$ are inversely proportional." }],
            steps: [
              { reasoning: "$v$ fixed → $f\\lambda$ constant.", working: "f\\lambda=v", marks: 1, markCode: "M" },
              { reasoning: "Double $f$ → half $\\lambda$.", working: "\\lambda\\to\\frac{\\lambda}{2}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** it halves",
            commonErrors: ["Thinking wavelength doubles with frequency."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-wave-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the amplitude and frequency of a sound wave affect what a listener hears.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Amplitude", statement: "Maximum displacement — determines loudness." },
              { kind: "definition", name: "Frequency", statement: "Oscillations per second — determines pitch." },
            ],
            steps: [
              { reasoning: "Amplitude is the maximum displacement of the wave.", working: "\\text{amplitude}", marks: 1, markCode: "M" },
              { reasoning: "Greater amplitude → louder sound (more energy transferred).", working: "\\text{louder}", marks: 1, markCode: "A" },
              { reasoning: "Frequency is oscillations per second (Hz).", working: "f\\ \\text{Hz}", marks: 1, markCode: "M" },
              { reasoning: "Higher frequency → higher pitch.", working: "\\text{higher pitch}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amplitude → loudness; frequency → pitch",
            commonErrors: ["Swapping the effects of amplitude and frequency."],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-wave-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a wave transfer as it travels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "Both matter and energy" },
              { id: "c", text: "Matter" },
              { id: "d", text: "Energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Wave", statement: "A wave transfers energy without transferring matter." }],
            steps: [
              { reasoning: "Particles oscillate but don't travel with the wave.", working: "\\text{energy only}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Energy",
            commonErrors: ["Thinking waves carry matter along."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u2-wave-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sound wave travels at 340 m/s with wavelength 0.68 m. Calculate its frequency.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 500, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "$f = v/\\lambda = 340/0.68$" }],
            steps: [
              { reasoning: "Rearrange: $f = v/\\lambda$.", working: "f=\\frac{v}{\\lambda}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "500\\ \\text{Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500 Hz",
            commonErrors: ["Multiplying v × λ."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-wave-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "A wave on a string travels at 12 m/s. Its wavelength is 0.4 m.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the wave.", marks: 2 },
            { label: "b", prompt: "State the period of the wave.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "v = fλ", statement: "$f = v/\\lambda$" },
              { kind: "formula", name: "T = 1/f", statement: "Period is reciprocal of frequency." },
            ],
            steps: [
              { part: "a", reasoning: "$f = 12/0.4 = 30$ Hz.", working: "\\frac{12}{0.4}=30\\ \\text{Hz}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State answer.", working: "30\\ \\text{Hz}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$T = 1/30 = 0.033$ s.", working: "\\frac{1}{30}=0.033\\ \\text{s}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State answer.", working: "0.033\\ \\text{s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30 Hz (b) 0.033 s",
            commonErrors: ["Forgetting T = 1/f in part (b)."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypp4-u2-wave-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A wave on a string has speed 12 m/s and frequency 3 Hz. What is its wavelength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9 m" },
              { id: "b", text: "36 m" },
              { id: "c", text: "0.25 m" },
              { id: "d", text: "4 m" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "$\\lambda = v/f = 12/3$" }],
            steps: [
              { reasoning: "Rearrange: $\\lambda = v/f$.", working: "\\lambda=\\frac{v}{f}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $12/3 = 4$ m.", working: "4\\ \\text{m}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 4 m",
            commonErrors: ["Multiplying 12 × 3."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-wave-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Sound cannot travel through the vacuum of space. What is the best explanation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound is a mechanical wave needing a medium of particles to vibrate" },
              { id: "b", text: "Space is too cold for sound" },
              { id: "c", text: "Sound waves are too slow in vacuum" },
              { id: "d", text: "Gravity blocks sound waves" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Mechanical wave", statement: "Sound needs particles to compress and rarefy — vacuum has none." }],
            steps: [
              { reasoning: "Sound is longitudinal and mechanical — needs a medium.", working: "\\text{mechanical}", marks: 1, markCode: "M" },
              { reasoning: "Vacuum has no particles → no compressions possible.", working: "\\text{no medium}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** needs a medium",
            commonErrors: ["Thinking sound is blocked by cold or gravity."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypp4-u2-em",
      title: "The electromagnetic spectrum",
      skill: "Order the EM spectrum and describe uses and hazards of each region.",
      lesson: {
        sections: [
          {
            heading: "Spectrum order",
            body: "From low to high frequency: **radio → microwave → infrared → visible → ultraviolet → X-ray → gamma**. All travel at $3 \\times 10^8$ m/s in vacuum; frequency and wavelength are inversely related ($v = f\\lambda$).",
          },
          {
            heading: "Uses",
            body: "Radio: broadcasting. Microwave: cooking, satellite links. Infrared: remote controls, thermal imaging. Visible: sight. UV: sterilisation, sunburn. X-ray: medical imaging. Gamma: cancer radiotherapy, sterilising equipment.",
          },
          {
            heading: "Hazards",
            body: "High-frequency radiation carries more energy per photon: UV causes sunburn/skin cancer; X-rays and gamma ionise cells — useful in medicine but dangerous in excess. Ozone layer absorbs most UV.",
          },
        ],
        keyFormulas: [
          { name: "Spectrum", statement: "Radio, microwave, IR, visible, UV, X-ray, gamma" },
          { name: "Constant speed", statement: "$v = 3 \\times 10^8$ m/s in vacuum" },
          { name: "Energy", statement: "Higher frequency → higher energy photons" },
        ],
        workedExample: {
          problem: "Which has longer wavelength: radio waves or gamma rays?",
          solution: "Radio waves — lower frequency means longer wavelength at same speed.",
        },
      },
      questions: [
        {
          id: "mypp4-u2-em-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which region of the EM spectrum has the highest frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio waves" },
              { id: "b", text: "Visible light" },
              { id: "c", text: "Gamma rays" },
              { id: "d", text: "X-rays" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "EM spectrum", statement: "Gamma rays have highest frequency." }],
            steps: [
              { reasoning: "Gamma is at the high-frequency end.", working: "\\text{gamma}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Gamma rays",
            commonErrors: ["Thinking radio = highest."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "mypp4-u2-em-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the speed of all electromagnetic waves in a vacuum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Depends on frequency" },
              { id: "b", text: "330 m/s" },
              { id: "c", text: "$3 \\times 10^8$ m/s" },
              { id: "d", text: "Speed of sound" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "EM speed", statement: "All EM waves travel at $3 \\times 10^8$ m/s in vacuum." }],
            steps: [
              { reasoning: "Speed of light = speed of all EM waves in vacuum.", working: "3\\times10^8\\ \\text{m/s}", marks: 1, markCode: "M" },
              { reasoning: "State value.", working: "\\text{constant}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3 \\times 10^8$ m/s",
            commonErrors: ["Thinking speed varies with frequency."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-em-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does excessive exposure to ultraviolet radiation harm skin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UV only affects eyes" },
              { id: "b", text: "UV is too slow to be absorbed" },
              { id: "c", text: "UV converts to sound" },
              { id: "d", text: "UV is ionising and damages cells" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "UV hazard", statement: "UV has enough energy to damage DNA/cells." }],
            steps: [
              { reasoning: "UV photons carry enough energy to break chemical bonds.", working: "\\text{high energy}", marks: 1, markCode: "M" },
              { reasoning: "Can cause sunburn and skin cancer.", working: "\\text{skin damage}", marks: 1, markCode: "M" },
              { reasoning: "Match choice.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a)",
            commonErrors: ["Thinking UV is harmless like visible light."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-em-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A radio station broadcasts at 100 MHz. $v = f\\lambda$ with $v = 3 \\times 10^8$ m/s.",
          parts: [
            { label: "a", prompt: "Calculate the wavelength of the broadcast.", marks: 2 },
            { label: "b", prompt: "State whether this wavelength is longer or shorter than visible light (~500 nm).", marks: 1 },
            { label: "c", prompt: "Explain why radio waves are used for long-distance communication rather than X-rays.", marks: 2 },
            { label: "d", prompt: "Suggest one use for each of: infrared, UV and gamma rays.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "v = fλ", statement: "$\\lambda = 3 \\times 10^8 / 10^8$" },
              { kind: "principle", name: "EM uses", statement: "Different regions have different applications." },
            ],
            steps: [
              { part: "a", reasoning: "$\\lambda = 3 \\times 10^8 / 10^8 = 3$ m.", working: "\\frac{3\\times10^8}{10^8}=3\\ \\text{m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct value.", working: "3\\ \\text{m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Much longer than 500 nm (visible).", working: "\\text{longer}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Radio waves are less energetic, travel far, don't ionise.", working: "\\text{non-ionising}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "X-rays are absorbed/blocked by atmosphere and harmful.", working: "\\text{X-rays absorbed}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "IR: remote controls/thermal imaging.", working: "\\text{IR:remote}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "UV: sterilisation; gamma: radiotherapy.", working: "\\text{UV:sterilise;gamma:therapy}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "One correct use each.", working: "\\text{uses}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 m (b) much longer (c) radio non-ionising, travels far; X-rays harmful/absorbed (d) IR: remote; UV: sterilise; gamma: radiotherapy",
            commonErrors: ["Using Hz incorrectly in (a)."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u2-em-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which region of the electromagnetic spectrum has the lowest frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gamma rays" },
              { id: "b", text: "Visible light" },
              { id: "c", text: "Radio waves" },
              { id: "d", text: "X-rays" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "EM spectrum", statement: "Radio waves are at the low-frequency end." }],
            steps: [
              { reasoning: "Spectrum order: radio → microwave → IR → visible → UV → X-ray → gamma.", working: "\\text{radio first}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Radio waves",
            commonErrors: ["Reversing the spectrum order."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u2-em-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An electromagnetic wave has frequency $1.5 \\times 10^9$ Hz. Calculate its wavelength in vacuum ($v = 3 \\times 10^8$ m/s).",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 0.2, unit: "m" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "$\\lambda = 3 \\times 10^8 / 1.5 \\times 10^9$" }],
            steps: [
              { reasoning: "Rearrange: $\\lambda = v/f$.", working: "\\lambda=\\frac{v}{f}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.2\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.2 m",
            commonErrors: ["Power-of-ten errors."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-em-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the wavelength of an EM wave with frequency $6 \\times 10^{14}$ Hz ($v = 3 \\times 10^8$ m/s).",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 5e-7, unit: "m" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "$\\lambda = v/f$" }],
            steps: [
              { reasoning: "Rearrange: $\\lambda = v/f$.", working: "\\lambda=\\frac{v}{f}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $5 \\times 10^{-7}$ m (visible range).", working: "5\\times10^{-7}\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5 \\times 10^{-7}$ m",
            commonErrors: ["Power-of-ten errors with negative exponents."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-em-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a common use of microwave radiation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cooking food and satellite communications" },
              { id: "b", text: "Cancer radiotherapy" },
              { id: "c", text: "Medical X-ray imaging" },
              { id: "d", text: "Sunburn" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "EM uses", statement: "Microwaves: cooking, satellite links, mobile phones." }],
            steps: [
              { reasoning: "Microwaves heat food and carry satellite signals.", working: "\\text{cooking/links}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** cooking and satellite communications",
            commonErrors: ["Confusing microwaves with radio or gamma."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-em-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "An EM wave has wavelength 0.5 m. Calculate its frequency ($v = 3 \\times 10^8$ m/s).",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 600000000, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "$f = v/\\lambda = 3 \\times 10^8 / 0.5$" }],
            steps: [
              { reasoning: "Rearrange: $f = v/\\lambda$.", working: "f=\\frac{v}{\\lambda}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $6 \\times 10^8$ Hz.", working: "6\\times10^8\\ \\text{Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6 \\times 10^8$ Hz",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-em-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why are gamma rays used in cancer radiotherapy rather than visible light?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gamma rays are easier to produce" },
              { id: "b", text: "Visible light cannot penetrate skin" },
              { id: "c", text: "Gamma rays are ionising and can destroy cancer cells when targeted precisely" },
              { id: "d", text: "Gamma rays are less energetic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Ionising radiation", statement: "High-frequency EM radiation ionises cells — kills cancer cells but also damages healthy tissue." }],
            steps: [
              { reasoning: "Gamma photons carry enough energy to ionise/damage cells.", working: "\\text{ionising}", marks: 1, markCode: "M" },
              { reasoning: "Can be targeted at tumours to destroy cancer cells.", working: "\\text{targeted}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** ionising, can destroy cancer cells",
            commonErrors: ["Thinking gamma is safe like visible light."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-em-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A communications satellite transmits at a frequency of 12 GHz. Calculate the wavelength of its signal ($v = 3 \\times 10^8$ m/s).",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 0.025, unit: "m" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "$\\lambda = 3 \\times 10^8 / 1.2 \\times 10^{10}$" }],
            steps: [
              { reasoning: "Convert 12 GHz to $1.2 \\times 10^{10}$ Hz; rearrange $\\lambda = v/f$.", working: "\\frac{3\\times10^8}{1.2\\times10^{10}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: 0.025 m.", working: "0.025\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.025 m",
            commonErrors: ["Forgetting to convert GHz to Hz."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-em-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the EM spectrum, which region lies between infrared and ultraviolet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Microwaves" },
              { id: "b", text: "Visible light" },
              { id: "c", text: "X-rays" },
              { id: "d", text: "Radio waves" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "EM spectrum", statement: "Order: IR → visible → UV." }],
            steps: [
              { reasoning: "Visible light sits between IR and UV.", working: "\\text{visible}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Visible light",
            commonErrors: ["Mis-ordering the spectrum."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp4-u2-em-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the ozone layer in Earth's atmosphere is important for living things.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "UV hazard", statement: "UV radiation can damage skin cells and DNA." },
              { kind: "principle", name: "Ozone", statement: "Ozone absorbs most harmful UV before it reaches the surface." },
            ],
            steps: [
              { reasoning: "UV radiation has enough energy to damage living cells.", working: "\\text{UV harmful}", marks: 1, markCode: "M" },
              { reasoning: "Excess UV causes sunburn and increases skin cancer risk.", working: "\\text{sunburn/cancer}", marks: 1, markCode: "A" },
              { reasoning: "The ozone layer absorbs most UV radiation.", working: "\\text{ozone absorbs}", marks: 1, markCode: "M" },
              { reasoning: "Without it, harmful UV levels would reach Earth's surface.", working: "\\text{protection}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ozone absorbs harmful UV, protecting living things",
            commonErrors: ["Thinking ozone blocks all sunlight or produces oxygen."],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-em-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A radio wave has wavelength 3 m. Calculate its frequency in hertz ($v = 3 \\times 10^8$ m/s).",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 100000000, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "$f = 3 \\times 10^8 / 3$" }],
            steps: [
              { reasoning: "Rearrange: $f = v/\\lambda$.", working: "f=\\frac{v}{\\lambda}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $10^8$ Hz = 100 MHz.", working: "1\\times10^8\\ \\text{Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1 \\times 10^8$ Hz (100 MHz)",
            commonErrors: ["Power-of-ten errors."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-em-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A hospital uses X-rays for imaging bones and gamma rays for cancer treatment.",
          parts: [
            { label: "a", prompt: "Explain why X-rays are preferred over gamma rays for routine imaging.", marks: 2 },
            { label: "b", prompt: "State the hazard common to both X-rays and gamma rays.", marks: 1 },
            { label: "c", prompt: "Suggest a safer imaging technique that uses sound waves instead.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionising radiation", statement: "X-rays and gamma both ionise — harmful in excess." },
              { kind: "principle", name: "Penetration", statement: "Gamma penetrates deeper → more damaging for routine scans." },
              { kind: "principle", name: "Ultrasound", statement: "Sound waves are non-ionising — safe for imaging soft tissue." },
            ],
            steps: [
              { part: "a", reasoning: "X-rays are less penetrating and less energetic than gamma — lower dose for imaging.", working: "\\text{lower dose}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sufficient to image bones without excessive tissue damage.", working: "\\text{bones visible}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Both are ionising — can damage cells/DNA.", working: "\\text{ionising}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ultrasound (used for pregnancy scans).", working: "\\text{ultrasound}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) X-rays less penetrating, lower dose, image bones (b) ionising — cell damage (c) ultrasound",
            commonErrors: ["Thinking X-rays and gamma are equally dangerous at same dose."],
            examinerNote: "M1 A1 for (a), M1 for (b), A1 for (c).",
          },
        },
        {
          id: "mypp4-u2-em-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which type of electromagnetic wave has the longest wavelength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio waves" },
              { id: "b", text: "X-rays" },
              { id: "c", text: "Visible light" },
              { id: "d", text: "Ultraviolet" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "v = fλ", statement: "Same speed in vacuum: lowest frequency → longest wavelength." }],
            steps: [
              { reasoning: "Radio waves have the lowest frequency in the spectrum.", working: "\\text{lowest }f", marks: 1, markCode: "M" },
              { reasoning: "Low frequency → long wavelength.", working: "\\lambda\\ \\text{long}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (c).", working: "\\text{(c)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Radio waves",
            commonErrors: ["Confusing frequency and wavelength ordering."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
