import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edialphys-u2-lesson-2-2",
  code: "2-2",
  title: "Interference and Superposition",
  goal: "I CAN explain superposition, interference patterns and standing waves.",
  standards: ["P2 Waves and optics", "Interference"],
  vocabulary: [
    { term: "Superposition", definition: "When two waves meet, displacements add." },
    { term: "Constructive / destructive interference", definition: "Waves in phase reinforce / out of phase cancel." },
    { term: "Coherence", definition: "Constant phase relationship between waves — needed for stable interference." },
    { term: "Standing wave", definition: "Wave pattern with fixed nodes and antinodes; formed by superposition of identical waves." },
  ],
  concepts: [
    {
      id: "edialphys-u2-interference",
      title: "Interference and diffraction patterns",
      skill: "Explain interference conditions and interpret Young's double-slit pattern.",
      lesson: {
        sections: [
          {
            heading: "Interference conditions",
            body: "Constructive: path difference = nλ (n=0,1,2…) → bright fringes. Destructive: path difference = (n+½)λ → dark fringes. Requires coherent sources (constant phase difference) — achieved by splitting one wavefront (double slit, thin film).",
          },
          {
            heading: "Double-slit experiment",
            body: "Two slits act as coherent sources. Fringe spacing y = λD/d where D = slit-to-screen distance, d = slit separation. Wider spacing for larger λ or smaller d. Demonstrates wave nature of light.",
          },
          {
            heading: "Single-slit diffraction",
            body: "Single slit diffracts light into central maximum + minima. Central maximum width ∝ λ/a where a = slit width. Narrower slit → wider pattern. Explains why radio diffracts around buildings.",
          },
        ],
        keyFormulas: [
          { name: "Constructive", statement: "Δ = nλ" },
          { name: "Destructive", statement: "Δ = (n+½)λ" },
          { name: "Key formula", statement: "y = λD/d" },
        ],
        workedExample: {
          problem: "In a double-slit experiment D = 1 m, d = 0.5 mm, λ = 600 nm. Find fringe spacing.",
          solution: "y = λD/d = (600×10⁻⁹ × 1)/(0.5×10⁻³) = 1.2×10⁻³ m = 1.2 mm.",
        },
      },
      questions: [
        {
          id: "edialphys-interf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For constructive interference, path difference must be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "λ/2" },
              { id: "b", text: "(n+½)λ" },
              { id: "c", text: "nλ" },
              { id: "d", text: "Zero only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Interference", statement: "Constructive: nλ; destructive: (n+½)λ." }],
            steps: [{ reasoning: "Direct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** nλ",
          },
        },
        {
          id: "edialphys-interf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is needed for stable interference fringes?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Coherence", statement: "Constant phase relationship required." }],
            steps: [
              { reasoning: "Sources must be coherent — constant phase difference.", marks: 1, markCode: "M" },
              { reasoning: "Same frequency and wavelength.", marks: 1, markCode: "A" },
              { reasoning: "Achieved by splitting one wavefront (double slit/thin film).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Coherent sources (same f, constant phase diff)",
            commonErrors: ["Two independent light bulbs won't work."],
          },
        },
        {
          id: "edialphys-interf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why fringe spacing in double-slit experiment increases with wavelength.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Fringe spacing", statement: "y = λD/d." }],
            steps: [
              { reasoning: "y = λD/d — spacing directly proportional to λ.", marks: 1, markCode: "M" },
              { reasoning: "Longer λ → larger path differences → fringes further apart.", marks: 1, markCode: "M" },
              { reasoning: "Red light (long λ) gives wider fringes than blue.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "y ∝ λ",
            commonErrors: ["Saying d changes."],
          },
        },
        {
          id: "edialphys-interf-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the double-slit experiment and explain what it demonstrates.",
          parts: [
            { label: "a", prompt: "Apparatus and setup.", marks: 3 },
            { label: "b", prompt: "Observed pattern.", marks: 3 },
            { label: "c", prompt: "What it proves about light.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Double slit", statement: "Coherent sources → interference." }],
            steps: [
              { part: "a", reasoning: "Monochromatic light → single slit → double slit → screen.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Single slit ensures coherence.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Screen far enough for fringes to separate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Alternating bright/dark fringes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Central maximum brightest and widest.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Spacing uniform (approximately).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Proves light is a wave (interference requires wave superposition).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Particles cannot produce interference.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Supports Huygens wave model.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclusion.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Bright/dark fringes → wave nature of light",
            commonErrors: ["Saying it proves particle nature."],
          },
        },
      ],
    },
    {
      id: "edialphys-u2-standing",
      title: "Standing waves",
      skill: "Describe standing waves, nodes/antinodes and harmonics on strings and in pipes.",
      lesson: {
        sections: [
          {
            heading: "Formation",
            body: "Two identical waves travelling in opposite directions superpose. Nodes: points of zero amplitude (destructive). Antinodes: maximum amplitude (constructive). Wave appears stationary.",
          },
          {
            heading: "Strings",
            body: "Fixed ends → nodes at ends. Fundamental (1st harmonic): λ/2 = L. 2nd harmonic: λ = L. nth: nλ/2 = L. f = nv/2L. Higher harmonics are integer multiples of fundamental.",
          },
          {
            heading: "Pipes",
            body: "Open pipe: antinodes at both ends; fundamental λ/2 = L. Closed pipe: node at closed end, antinode at open; fundamental λ/4 = L → only odd harmonics. Explains musical instruments.",
          },
        ],
        keyFormulas: [
          { name: "String", statement: "f = nv/2L" },
          { name: "Closed pipe", statement: "f = nv/4L (odd n)" },
        ],
        workedExample: {
          problem: "A 0.5 m string has fundamental frequency 200 Hz. Find wave speed.",
          solution: "f = v/2L → v = 2Lf = 2×0.5×200 = 200 m/s.",
        },
      },
      questions: [
        {
          id: "edialphys-sw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A node in a standing wave is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero amplitude" },
              { id: "b", text: "Maximum amplitude" },
              { id: "c", text: "Maximum frequency" },
              { id: "d", text: "Travelling wave" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Node", statement: "Zero amplitude point." }],
            steps: [{ reasoning: "Node = destructive superposition.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Zero amplitude",
          },
        },
        {
          id: "edialphys-sw-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A string of length 1 m vibrates at fundamental frequency 100 Hz. Find the speed of waves on the string.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 200, tolerance: 1, unit: "m/s" }] },
          markscheme: {
            principles: [{ kind: "method", name: "Standing wave", statement: "f₁ = v/2L." }],
            steps: [
              { reasoning: "v = 2Lf₁ = 2×1×100.", marks: 1, markCode: "M" },
              { reasoning: "= 200 m/s.", marks: 1, markCode: "M" },
              { reasoning: "Answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 m/s",
            commonErrors: ["Using L not 2L."],
          },
        },
        {
          id: "edialphys-sw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a closed pipe only supports odd harmonics.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Closed pipe", statement: "Node at closed end, antinode at open." }],
            steps: [
              { reasoning: "Closed end must be a node (air can't move).", marks: 1, markCode: "M" },
              { reasoning: "Open end must be antinode.", marks: 1, markCode: "M" },
              { reasoning: "Only wavelengths λ/4, 3λ/4, 5λ/4… fit → odd harmonics only.", marks: 1, markCode: "A" },
              { reasoning: "Even harmonics would require wrong boundary conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Boundary conditions → only odd harmonics",
            commonErrors: ["Saying closed pipe has no even harmonics by choice."],
          },
        },
        {
          id: "edialphys-sw-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the formation of standing waves and compare strings and pipes.",
          parts: [
            { label: "a", prompt: "How standing waves form.", marks: 3 },
            { label: "b", prompt: "Nodes and antinodes.", marks: 3 },
            { label: "c", prompt: "Compare string and open pipe.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Standing waves", statement: "Superposition of counter-propagating waves." }],
            steps: [
              { part: "a", reasoning: "Two identical waves travel in opposite directions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Superposition creates fixed pattern of nodes/antinodes.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Wave doesn't appear to travel.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Nodes: zero amplitude (destructive).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Antinodes: maximum amplitude (constructive).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Separation = λ/2.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both support harmonics; fundamental λ/2 = L.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "String: fixed ends = nodes; pipe open: antinodes at ends.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Similar harmonic series for open pipe and string.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Counter-waves superpose → nodes/antinodes",
            commonErrors: ["Saying energy doesn't flow — it does but net zero."],
          },
        },
      ],
    },
  ],
};
