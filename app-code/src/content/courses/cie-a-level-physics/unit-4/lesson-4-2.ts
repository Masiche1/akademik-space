import type { Lesson } from "../../../types.ts";

export const lesson412: Lesson = {
  id: "cial-p-u4-lesson-4-2",
  code: "4-2",
  title: "Superposition and interference",
  goal: "I CAN apply superposition principle, interference and diffraction patterns.",
  standards: ["9702 9: superposition"],
  vocabulary: [
    { term: "Superposition", definition: "When waves meet, displacements add." },
    { term: "Interference", definition: "Superposition of coherent waves — constructive/destructive." },
    { term: "Coherent", definition: "Constant phase relationship — same frequency, fixed phase difference." },
    { term: "Path difference", definition: "Difference in distance travelled by two waves." },
    { term: "Young's slits", definition: "Double-slit experiment producing interference fringes." },
    { term: "Diffraction grating", definition: "Many slits producing sharp maxima at $d\\sin\\theta = n\\lambda$." },
  ],
  concepts: [
    {
      id: "cial-p-u4-interference",
      title: "Interference",
      skill: "Calculate fringe spacing and explain interference conditions.",
      lesson: {
        sections: [
          {
            heading: "Superposition principle",
            body: "When two waves meet, resultant displacement = sum of individual displacements. Constructive: in phase (path diff = nλ) → amplitude doubles. Destructive: antiphase (path diff = (n+½)λ) → cancel.",
          },
          {
            heading: "Young's double-slit",
            body: "Fringe spacing: $w = \\frac{\\lambda D}{d}$ where $D$ = slit-to-screen distance, $d$ = slit separation. Bright fringes: path diff = nλ; dark: (n+½)λ. Central maximum brightest/widest.",
          },
          {
            heading: "Thin-film and other interference",
            body: "Thin films: reflection from front/back surfaces interfere — soap bubbles, oil slicks. Conditions depend on phase change on reflection. Michelson interferometer measures wavelength/length.",
          },
        ],
        keyFormulas: [
          { name: "Fringe spacing", statement: "$w = \\frac{\\lambda D}{d}$" },
          { name: "Constructive", statement: "Path diff = nλ" },
          { name: "Destructive", statement: "Path diff = (n+½)λ" },
        ],
        workedExample: {
          problem: "Double slits 0.5 mm apart, screen 2 m away, λ = 500 nm. Find fringe spacing.",
          solution: "$w = \\frac{500\\times10^{-9} \\times 2}{0.5\\times10^{-3}} = \\frac{10^{-6}}{5\\times10^{-4}} = 2\\times10^{-3}\\ m = 2\\ mm$.",
        },
      },
      questions: [
        {
          id: "cial-p-u4-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the fringe spacing formula for Young's slits?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$w = \\frac{\\lambda D}{d}$" },
              { id: "b", text: "$w = \\frac{dD}{\\lambda}$" },
              { id: "c", text: "$w = \\frac{\\lambda d}{D}$" },
              { id: "d", text: "$w = \\lambda d D$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Fringe spacing", statement: "$w = \\lambda D/d$." }],
            steps: [{ reasoning: "w = λD/d.", marks: 1, markCode: "A" }],
            finalAnswer: "$w = \\frac{\\lambda D}{d}$",
          },
        },
        {
          id: "cial-p-u4-in-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two coherent sources produce path difference of λ/2. What type of interference occurs?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Interference", statement: "Destructive when path diff = (n+½)λ." }],
            steps: [
              { reasoning: "λ/2 = (n+½)λ with n=0.", marks: 1, markCode: "M" },
              { reasoning: "Waves arrive in antiphase.", marks: 1, markCode: "M" },
              { reasoning: "Destructive interference — minimum amplitude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Destructive interference",
          },
        },
        {
          id: "cial-p-u4-in-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why must sources be coherent for stable interference fringes?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Coherence", statement: "Constant phase relationship needed for stable pattern." }],
            steps: [
              { reasoning: "Incoherent sources have random phase differences.", marks: 1, markCode: "M" },
              { reasoning: "Phase relationship changes rapidly → pattern blurs.", marks: 1, markCode: "M" },
              { reasoning: "Coherent sources maintain fixed phase difference.", marks: 1, markCode: "M" },
              { reasoning: "Stable constructive/destructive positions → clear fringes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Fixed phase → stable fringes",
          },
        },
        {
          id: "cial-p-u4-in-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Interference.",
          parts: [
            { label: "a", prompt: "State superposition principle.", marks: 1 },
            { label: "b", prompt: "What are coherent sources?", marks: 2 },
            { label: "c", prompt: "Give fringe spacing formula and define variables.", marks: 3 },
            { label: "d", prompt: "For path diff = λ, what interference occurs?", marks: 1 },
            { label: "e", prompt: "What happens to fringe spacing if slit separation increases?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Interference", statement: "Superposition; w=λD/d." }],
            steps: [
              { part: "a", reasoning: "Displacements add when waves meet.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Constant phase relationship.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Same frequency required.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$w = \\lambda D/d$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\lambda$ = wavelength, $D$ = slit-screen distance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$d$ = slit separation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Constructive — in phase.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$w \\propto 1/d$ — decreases.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Fringes closer together.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) add displacements (b) fixed phase (c) w=λD/d (d) constructive (e) w↓",
          },
        },
      ],
    },
    {
      id: "cial-p-u4-diffraction",
      title: "Diffraction and gratings",
      skill: "Apply single-slit and grating equations.",
      lesson: {
        sections: [
          {
            heading: "Single-slit diffraction",
            body: "Central maximum width: $2\\lambda D/a$ where $a$ = slit width. First minima at $\\pm\\lambda D/a$. Pattern: bright centre, decreasing side maxima. Narrower slit → wider pattern.",
          },
          {
            heading: "Diffraction grating",
            body: "$d\\sin\\theta = n\\lambda$ for maxima ($n$ = order, $d$ = grating spacing). Higher orders at larger angles. Resolving power increases with number of slits. Used to measure wavelengths/spectra.",
          },
          {
            heading: "Applications",
            body: "Gratings: spectrometers, CD/DVD, holograms. Single-slit: demonstrates wave nature. X-ray diffraction: crystal structure (Bragg's law). Electron diffraction: confirms de Broglie.",
          },
        ],
        keyFormulas: [
          { name: "Single slit", statement: "First minima at $\\pm\\lambda D/a$" },
          { name: "Grating", statement: "$d\\sin\\theta = n\\lambda$" },
        ],
        workedExample: {
          problem: "A grating has 500 lines/mm. Find angle for first-order maximum at λ = 600 nm.",
          solution: "$d = 1/500\\ mm = 2\\times10^{-6}\\ m$. $\\sin\\theta = \\lambda/d = 600\\times10^{-9}/2\\times10^{-6} = 0.3$ → $\\theta = 17.5°$.",
        },
      },
      questions: [
        {
          id: "cial-p-u4-dg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the grating equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$d\\sin\\theta = n\\lambda$" },
              { id: "b", text: "$d\\cos\\theta = n\\lambda$" },
              { id: "c", text: "$\\sin\\theta = nd/\\lambda$" },
              { id: "d", text: "$d = n\\lambda\\sin\\theta$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Grating", statement: "$d\\sin\\theta = n\\lambda$." }],
            steps: [{ reasoning: "Grating maxima at d sin θ = nλ.", marks: 1, markCode: "A" }],
            finalAnswer: "$d\\sin\\theta = n\\lambda$",
          },
        },
        {
          id: "cial-p-u4-dg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A grating has 600 lines/mm. Find angle for second-order maximum at λ = 500 nm.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Grating", statement: "$d\\sin\\theta = n\\lambda$." }],
            steps: [
              { reasoning: "$d = 1/600\\ mm = 1.67\\times10^{-6}\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sin\\theta = 2 \\times 500\\times10^{-9}/1.67\\times10^{-6} = 0.6$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = 36.9°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = 36.9°$",
          },
        },
        {
          id: "cial-p-u4-dg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does a narrower slit produce a wider diffraction pattern?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Diffraction", statement: "Pattern width ∝ λ/a — inverse with slit width." }],
            steps: [
              { reasoning: "Diffraction significant when aperture ≈ wavelength.", marks: 1, markCode: "M" },
              { reasoning: "Narrower slit → relatively larger λ/a ratio.", marks: 1, markCode: "M" },
              { reasoning: "More spreading → wider central maximum.", marks: 1, markCode: "M" },
              { reasoning: "Width ∝ 1/a — inverse relationship.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Width ∝ 1/slit width",
          },
        },
        {
          id: "cial-p-u4-dg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Diffraction.",
          parts: [
            { label: "a", prompt: "State grating equation.", marks: 2 },
            { label: "b", prompt: "What is d in the grating equation?", marks: 1 },
            { label: "c", prompt: "Describe single-slit diffraction pattern.", marks: 2 },
            { label: "d", prompt: "A grating has 1000 lines/mm. Find d.", marks: 2 },
            { label: "e", prompt: "Why are higher-order maxima dimmer?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Diffraction", statement: "$d\\sin\\theta=n\\lambda$; single-slit pattern." }],
            steps: [
              { part: "a", reasoning: "$d\\sin\\theta = n\\lambda$.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Grating spacing (distance between slits).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Central bright maximum widest.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Symmetric side maxima decreasing intensity.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$d = 1/1000\\ mm = 1\\times10^{-6}\\ m$.", marks: 2, markCode: "M" },
              { part: "e", reasoning: "Energy spread over more orders.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Higher orders at larger angles — less intense.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) d sinθ=nλ (b) spacing (c) central max (d) 10⁻⁶ m (e) energy spread",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u4-superposition-notes",
      title: "Superposition and diffraction — revision notes",
      summary: "Interference, Young's slits, diffraction gratings.",
      sections: [
        {
          heading: "Interference",
          body: "Superposition: displacements add. Constructive: path diff = nλ; destructive: (n+½)λ. Young's slits: $w = \\lambda D/d$. Coherent sources needed for stable fringes.",
        },
        {
          heading: "Diffraction",
          body: "Single slit: central max width $2\\lambda D/a$. Grating: $d\\sin\\theta = n\\lambda$. Narrower slit → wider pattern. Higher orders dimmer.",
        },
        {
          heading: "Exam checklist",
          body: "For fringe spacing identify λ, D, d correctly. For gratings check order n and units (lines/mm → spacing).",
        },
      ],
    },
  ],
};
