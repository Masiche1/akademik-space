import type { Lesson } from "../../../types.ts";

export const lessonp41: Lesson = {
  id: "olphys-u4-lesson-4-1",
  code: "4-1",
  title: "Waves: Properties and Behaviour",
  goal: "I CAN describe wave properties, reflection, refraction and diffraction.",
  standards: ["5054 4.1", "5054 4.2", "5054 4.3"],
  vocabulary: [
    { term: "Wave", definition: "Disturbance transferring energy without transferring matter." },
    { term: "Amplitude", definition: "Maximum displacement from equilibrium (m)." },
    { term: "Wavelength", definition: "Distance between adjacent crests/troughs (m)." },
    { term: "Frequency", definition: "Number of waves per second (Hz)." },
    { term: "Period", definition: "Time for one complete wave (s)." },
    { term: "Wave speed", definition: "v = fλ." },
    { term: "Transverse wave", definition: "Vibrations perpendicular to direction (light, water)." },
    { term: "Longitudinal wave", definition: "Vibrations parallel to direction (sound, seismic P)." },
  ],
  concepts: [
    {
      id: "olphys-u4-wave-properties",
      title: "Wave properties",
      skill: "Calculate wave speed and describe transverse and longitudinal waves.",
      lesson: {
        sections: [
          {
            heading: "Wave equation",
            body: "**v = fλ** (speed = frequency × wavelength).\n- f in Hz, λ in m, v in m/s.\n- Period T = 1/f.",
          },
          {
            heading: "Transverse vs longitudinal",
            body: "| | Transverse | Longitudinal |\n|---|---|---|\n| Vibration | ⊥ to travel | ∥ to travel |\n| Examples | light, water, EM | sound, seismic P |\n| Features | crests/troughs | compressions/rarefactions |",
          },
          {
            heading: "Sound",
            body: "Longitudinal pressure wave needing medium. Speed depends on medium density/elasticity — fastest in solids, slowest in gases.",
          },
        ],
        keyFormulas: [
          { name: "Wave speed", statement: "$v = f\\lambda$" },
          { name: "Period", statement: "$T = \\dfrac{1}{f}$" },
        ],
        workedExample: {
          problem: "A wave has frequency 5 Hz and wavelength 2 m. Calculate speed.",
          solution: "v = fλ = 5 × 2 = 10 m/s.",
        },
      },
      questions: [
        {
          id: "olphys-u4-wave-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the relationship between wave speed, frequency and wavelength?",
          response: { type: "mcq", choices: [
            { id: "a", text: "v = f/λ" }, { id: "b", text: "v = fλ" }, { id: "c", text: "v = f + λ" }, { id: "d", text: "v = λ/f" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave equation", statement: "v = fλ." }],
            steps: [{ reasoning: "Recall.", working: "v = f\\lambda", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** v = fλ",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "olphys-u4-wave-properties-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A wave has speed 340 m/s and frequency 170 Hz. Calculate wavelength.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "λ = v/f", statement: "λ = 340/170 = 2 m." }],
            steps: [
              { reasoning: "Rearrange v=fλ.", working: "\\lambda = \\frac{v}{f}", marks: 1, markCode: "M" },
              { reasoning: "Calculate.", working: "\\lambda = \\frac{340}{170} = 2 \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 m",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "olphys-u4-wave-properties-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between transverse and longitudinal waves with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Wave types", statement: "Transverse: ⊥ vibration; longitudinal: ∥ vibration." }],
            steps: [
              { reasoning: "Transverse definition + example.", marks: 1, markCode: "M" },
              { reasoning: "Light/water waves.", marks: 1, markCode: "M" },
              { reasoning: "Longitudinal definition + example.", marks: 1, markCode: "M" },
              { reasoning: "Sound/seismic P waves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transverse: vibrations perpendicular (light, water); longitudinal: parallel (sound, seismic P).",
            commonErrors: ["Only one type described."],
          },
        },
        {
          id: "olphys-u4-wave-properties-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A wave has period 0.02 s. Calculate frequency, and if wavelength is 5 m, calculate speed.",
          parts: [
            { label: "a", prompt: "Calculate frequency from period.", marks: 3 },
            { label: "b", prompt: "Calculate wave speed.", marks: 3 },
            { label: "c", prompt: "State the wave equation used.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave eq", statement: "f=1/T; v=fλ." }],
            steps: [
              { part: "a", reasoning: "f = 1/T.", working: "f = \\frac{1}{0.02}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "= 50 Hz.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "v = fλ = 50×5.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "= 250 m/s.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "v = fλ.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State equation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 50 Hz (b) 250 m/s (c) v=fλ",
            commonErrors: ["In (a) using T=f instead of f=1/T."],
          },
        },
      ],
    },
    {
      id: "olphys-u4-wave-behaviour",
      title: "Reflection, refraction and diffraction",
      skill: "Describe and explain wave reflection, refraction and diffraction.",
      lesson: {
        sections: [
          {
            heading: "Reflection",
            body: "Angle of incidence = angle of reflection (measured from normal). Applies to light and sound.",
          },
          {
            heading: "Refraction",
            body: "Wave changes speed entering different medium → bends (changes direction). Light slows in denser medium → bends toward normal entering glass/water.",
          },
          {
            heading: "Diffraction",
            body: "Waves spread out when passing through gap or around obstacle — more when gap ≈ wavelength. Explains why we hear around corners but can't see around them.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does light bend when entering glass?",
          solution: "Light slows in glass → refraction bends it toward the normal.",
        },
      },
      questions: [
        {
          id: "olphys-u4-wave-behaviour-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the law of reflection?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Angle of incidence = angle of reflection" }, { id: "b", text: "Angle of incidence > reflection" }, { id: "c", text: "All waves reflect equally" }, { id: "d", text: "Reflection depends on colour" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Reflection", statement: "i = r (from normal)." }],
            steps: [{ reasoning: "Recall.", working: "i = r", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Angle of incidence = angle of reflection",
            commonErrors: ["Measured from surface not normal."],
          },
        },
        {
          id: "olphys-u4-wave-behaviour-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define diffraction.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Diffraction", statement: "Waves spread out through gaps/around obstacles." }],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The spreading out of waves when they pass through a gap or around an obstacle.",
            commonErrors: ["Confusing with refraction."],
          },
        },
        {
          id: "olphys-u4-wave-behaviour-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why sound is heard around corners but light is not.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Diffraction", statement: "More diffraction when λ ≈ gap size." }],
            steps: [
              { reasoning: "Sound wavelength ~1m comparable to doorways.", marks: 1, markCode: "M" },
              { reasoning: "Light wavelength tiny vs gaps.", marks: 1, markCode: "M" },
              { reasoning: "Sound diffracts significantly, light doesn't.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sound wavelengths (~1 m) are similar to doorway sizes so they diffract significantly around corners; light wavelengths are microscopic so they barely diffract — can't see around corners.",
            commonErrors: ["Saying 'sound travels through walls' — it's diffraction."],
          },
        },
        {
          id: "olphys-u4-wave-behaviour-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the three wave behaviours: reflection, refraction and diffraction.",
          parts: [
            { label: "a", prompt: "Define reflection and state the law.", marks: 3 },
            { label: "b", prompt: "Define refraction and explain the cause.", marks: 3 },
            { label: "c", prompt: "Define diffraction and give a factor affecting it.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Wave behaviours", statement: "Reflection i=r; refraction speed change; diffraction gap spreading." }],
            steps: [
              { part: "a", reasoning: "Bouncing back.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "i = r from normal.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bending at boundary.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Due to speed change.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Spreading through gap.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More when λ≈gap.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) bounce back, i=r (b) bend, speed change (c) spread, λ≈gap",
            commonErrors: ["In (b) saying 'reflection causes refraction' — different phenomena."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u4-waves-notes",
      title: "Waves — revision notes",
      summary: "v=fλ, transverse/longitudinal, reflection i=r, refraction, diffraction.",
      sections: [
        {
          heading: "Key facts",
          body: "v=fλ, T=1/f. Transverse ⊥ (light), longitudinal ∥ (sound). Reflection: i=r. Refraction: speed change → bend. Diffraction: gap spreading, more when λ≈gap.",
        },
        {
          heading: "Exam technique",
          body: "- Sound diffracts (λ~m), light doesn't (λ~nm).\n- Always measure angles from normal.",
        },
      ],
    },
  ],
};
