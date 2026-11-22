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
              { id: "a", text: "$w = \\frac{\\lambda d}{D}$" },
              { id: "b", text: "$w = \\frac{\\lambda D}{d}$" },
              { id: "c", text: "$w = \\lambda d D$" },
              { id: "d", text: "$w = \\frac{dD}{\\lambda}$" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-p-u4-in-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Constructive interference between two coherent waves occurs when their path difference is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero for all orders" },
              { id: "b", text: "$(n + \\tfrac{1}{2})\\lambda$" },
              { id: "c", text: "$n\\lambda$" },
              { id: "d", text: "$\\lambda/4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Interference", statement: "Constructive when path diff = nλ." }],
            steps: [{ reasoning: "Path difference of whole wavelengths means waves arrive in phase.", marks: 1, markCode: "A" }],
            finalAnswer: "$n\\lambda$",
          },
        },
        {
          id: "cial-p-u4-in-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Coherent sources are sources that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Have a constant phase relationship" },
              { id: "b", text: "Are always in antiphase" },
              { id: "c", text: "Emit light of different wavelengths" },
              { id: "d", text: "Have different frequencies" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Coherent", statement: "Constant phase difference and same frequency." }],
            steps: [{ reasoning: "Coherence means a fixed phase relationship between the sources.", marks: 1, markCode: "A" }],
            finalAnswer: "Constant phase relationship",
          },
        },
        {
          id: "cial-p-u4-in-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a double-slit experiment, $\\lambda = 600\\ nm$, $D = 1.5\\ m$ and $d = 0.30\\ mm$. Calculate the fringe spacing $w$.",
          response: { type: "numeric", parts: [{ label: "fringe spacing", answer: 0.003, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Fringe spacing", statement: "$w = \\lambda D/d$." }],
            steps: [
              { reasoning: "$w = \\frac{600\\times10^{-9} \\times 1.5}{0.30\\times10^{-3}}$.", marks: 1, markCode: "M" },
              { reasoning: "$w = 3.0\\times10^{-3}\\ m = 3.0\\ mm$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$w = 3.0\\ mm$",
          },
        },
        {
          id: "cial-p-u4-in-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two coherent sources are separated by $d = 0.50\\ mm$. At a point on the screen the angle from the centre is such that $\\sin\\theta = 0.20$. Calculate the path difference at that point.",
          response: { type: "numeric", parts: [{ label: "path difference", answer: 1e-4, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Path difference", statement: "Path diff $= d\\sin\\theta$ for distant screen." }],
            steps: [
              { reasoning: "Path diff $= 0.50\\times10^{-3} \\times 0.20$.", marks: 1, markCode: "M" },
              { reasoning: "Path diff $= 1.0\\times10^{-4}\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.0\\times10^{-4}\\ m$",
          },
        },
        {
          id: "cial-p-u4-in-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Light of wavelength $550\\ nm$ passes through double slits separated by $0.50\\ mm$ with the screen $2.0\\ m$ away. Calculate the fringe spacing.",
          response: { type: "numeric", parts: [{ label: "fringe spacing", answer: 0.0022, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Fringe spacing", statement: "$w = \\lambda D/d$." }],
            steps: [
              { reasoning: "$w = \\frac{550\\times10^{-9} \\times 2.0}{0.50\\times10^{-3}}$.", marks: 1, markCode: "M" },
              { reasoning: "$w = 2.2\\times10^{-3}\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$w = 2.2\\ mm$",
          },
        },
        {
          id: "cial-p-u4-in-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a double-slit experiment the fringe spacing is $2.0\\ mm$ and the screen is $1.0\\ m$ wide. Estimate the number of bright fringes visible across the screen.",
          response: { type: "numeric", parts: [{ label: "number of fringes", answer: 500, unit: "fringes" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fringe count", statement: "Number of fringes $\\approx$ screen width / fringe spacing." }],
            steps: [
              { reasoning: "Convert screen width: $1.0\\ m = 1000\\ mm$.", marks: 1, markCode: "M" },
              { reasoning: "$N = 1000/2.0$.", marks: 1, markCode: "M" },
              { reasoning: "$N = 500$ fringes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$N \\approx 500$",
          },
        },
        {
          id: "cial-p-u4-in-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "If the wavelength of light used in a double-slit experiment is increased (all other quantities unchanged), the fringe spacing:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays the same" },
              { id: "b", text: "Decreases" },
              { id: "c", text: "Increases" },
              { id: "d", text: "Becomes zero" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Fringe spacing", statement: "$w = \\lambda D/d$ so $w \\propto \\lambda$." }],
            steps: [{ reasoning: "Larger $\\lambda$ gives proportionally larger fringe spacing.", marks: 1, markCode: "A" }],
            finalAnswer: "Increases",
          },
        },
        {
          id: "cial-p-u4-in-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A thin oil film on water appears coloured in white light because of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total internal reflection" },
              { id: "b", text: "Dispersion only" },
              { id: "c", text: "Diffraction at the edges only" },
              { id: "d", text: "Interference between reflections from the top and bottom surfaces" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Thin films", statement: "Reflections from two surfaces interfere; colours depend on thickness and wavelength." }],
            steps: [{ reasoning: "Different wavelengths interfere constructively at different thicknesses → colours.", marks: 1, markCode: "A" }],
            finalAnswer: "Thin-film interference",
          },
        },
        {
          id: "cial-p-u4-in-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A dark fringe in a double-slit pattern occurs when the path difference is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n\\lambda$" },
              { id: "b", text: "Always zero" },
              { id: "c", text: "$(n + \\tfrac{1}{2})\\lambda$" },
              { id: "d", text: "$\\lambda$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Interference", statement: "Destructive when path diff = (n+½)λ." }],
            steps: [{ reasoning: "Half-integer wavelengths → antiphase arrival → cancellation.", marks: 1, markCode: "A" }],
            finalAnswer: "$(n + \\tfrac{1}{2})\\lambda$",
          },
        },
        {
          id: "cial-p-u4-in-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A Michelson interferometer is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Measure small length changes or wavelengths using interference fringes" },
              { id: "b", text: "Separate colours of light" },
              { id: "c", text: "Produce standing waves" },
              { id: "d", text: "Measure the speed of light directly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Michelson interferometer", statement: "Measures length/wavelength via fringe shifts from path difference." }],
            steps: [{ reasoning: "Interference fringes shift as one mirror moves, giving precise length measurements.", marks: 1, markCode: "A" }],
            finalAnswer: "Measures lengths/wavelengths",
          },
        },
        {
          id: "cial-p-u4-in-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the central maximum in a double-slit interference pattern is the brightest and why the fringes fade away from the centre.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Interference", statement: "At centre path diff = 0 → perfectly constructive." }],
            steps: [
              { reasoning: "At the centre both waves travel equal distances → path difference zero.", marks: 1, markCode: "M" },
              { reasoning: "Waves arrive in phase everywhere along the centre → maximum amplitude.", marks: 1, markCode: "M" },
              { reasoning: "Away from centre path difference grows; imperfect phase alignment reduces amplitude.", marks: 1, markCode: "M" },
              { reasoning: "At large angles the single-slit diffraction envelope also reduces intensity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Centre = max constructive; fringes fade with angle",
          },
        },
        {
          id: "cial-p-u4-in-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how the fringe spacing in Young's double-slit experiment changes when each of $\\lambda$, $D$ and $d$ is varied, and justify each answer using $w = \\lambda D/d$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Fringe spacing", statement: "$w = \\lambda D/d$: $w \\propto \\lambda$, $w \\propto D$, $w \\propto 1/d$." }],
            steps: [
              { reasoning: "$w$ increases with $\\lambda$ (e.g. red light → wider fringes).", marks: 1, markCode: "M" },
              { reasoning: "$w$ increases with $D$ — screen further away gives more spread.", marks: 1, markCode: "M" },
              { reasoning: "$w$ decreases as $d$ increases — closer slits give wider fringes.", marks: 1, markCode: "M" },
              { reasoning: "All follow directly from $w = \\lambda D/d$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "w↑ with λ and D; w↓ as d↑",
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
              { id: "a", text: "$d\\cos\\theta = n\\lambda$" },
              { id: "b", text: "$d\\sin\\theta = n\\lambda$" },
              { id: "c", text: "$\\sin\\theta = nd/\\lambda$" },
              { id: "d", text: "$d = n\\lambda\\sin\\theta$" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-p-u4-dg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the grating equation $d\\sin\\theta = n\\lambda$, the quantity $d$ represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The width of each slit" },
              { id: "b", text: "The distance to the screen" },
              { id: "c", text: "The distance between adjacent slits (grating spacing)" },
              { id: "d", text: "The wavelength of light" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Grating spacing", statement: "$d$ is the distance between adjacent slits." }],
            steps: [{ reasoning: "$d$ is the grating spacing, not the slit width.", marks: 1, markCode: "A" }],
            finalAnswer: "Grating spacing",
          },
        },
        {
          id: "cial-p-u4-dg-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a single slit, the first minimum in the diffraction pattern occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\theta = 90°$" },
              { id: "b", text: "$\\sin\\theta = \\lambda/a$" },
              { id: "c", text: "$\\sin\\theta = 2\\lambda/a$" },
              { id: "d", text: "$\\sin\\theta = a/\\lambda$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Single slit", statement: "First minima at $\\sin\\theta = \\pm\\lambda/a$." }],
            steps: [{ reasoning: "First minimum when path difference across slit = one wavelength.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sin\\theta = \\lambda/a$",
          },
        },
        {
          id: "cial-p-u4-dg-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A diffraction grating has $500$ lines per mm. Light of wavelength $500\\ nm$ is incident normally. Calculate the angle of the first-order maximum.",
          response: { type: "numeric", parts: [{ label: "angle", answer: 14.5, unit: "°" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Grating", statement: "$d\\sin\\theta = n\\lambda$ with $d = 1/(500\\ mm^{-1})$." }],
            steps: [
              { reasoning: "$d = 2.0\\times10^{-6}\\ m$; $\\sin\\theta = 500\\times10^{-9}/2.0\\times10^{-6} = 0.25$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = 14.5°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = 14.5°$",
          },
        },
        {
          id: "cial-p-u4-dg-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A grating has $250$ lines per mm and is illuminated with light of wavelength $600\\ nm$. Calculate the angle of the second-order maximum.",
          response: { type: "numeric", parts: [{ label: "angle", answer: 17.5, unit: "°" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Grating", statement: "$d\\sin\\theta = n\\lambda$; $d = 4.0\\times10^{-6}\\ m$." }],
            steps: [
              { reasoning: "$\\sin\\theta = 2 \\times 600\\times10^{-9}/4.0\\times10^{-6} = 0.30$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = 17.5°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = 17.5°$",
          },
        },
        {
          id: "cial-p-u4-dg-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Monochromatic light of wavelength $500\\ nm$ passes through a single slit of width $0.10\\ mm$ onto a screen $2.0\\ m$ away. Calculate the distance from the centre to the first minimum.",
          response: { type: "numeric", parts: [{ label: "distance", answer: 0.01, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Single slit", statement: "First minimum at $y = \\lambda D/a$." }],
            steps: [
              { reasoning: "$y = \\frac{500\\times10^{-9} \\times 2.0}{0.10\\times10^{-3}}$.", marks: 1, markCode: "M" },
              { reasoning: "$y = 1.0\\times10^{-2}\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 1.0\\ cm$",
          },
        },
        {
          id: "cial-p-u4-dg-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A diffraction grating has spacing $d = 2.0\\times10^{-6}\\ m$ and is illuminated with light of wavelength $500\\ nm$. Calculate the highest order of maximum that can be observed.",
          response: { type: "numeric", parts: [{ label: "highest order", answer: 4, unit: "order" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Grating", statement: "$\\sin\\theta = n\\lambda/d$ requires $\\sin\\theta \\leq 1$." }],
            steps: [
              { reasoning: "Maximum $n$ when $\\sin\\theta = 1$: $n_{max} = d/\\lambda$.", marks: 1, markCode: "M" },
              { reasoning: "$n_{max} = 2.0\\times10^{-6}/500\\times10^{-9} = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$n = 4$ is the highest whole order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n_{max} = 4$",
          },
        },
        {
          id: "cial-p-u4-dg-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Higher-order maxima in a diffraction grating are less intense than lower orders mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The slits absorb more light at high orders" },
              { id: "b", text: "The same energy is spread over more orders" },
              { id: "c", text: "They occur at smaller angles" },
              { id: "d", text: "The wavelength increases with order" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Grating intensity", statement: "Energy is distributed among orders; higher orders receive less." }],
            steps: [{ reasoning: "Fixed incident energy is shared between all orders → higher orders dimmer.", marks: 1, markCode: "A" }],
            finalAnswer: "Energy spread over more orders",
          },
        },
        {
          id: "cial-p-u4-dg-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The resolving power of a diffraction grating increases when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The light intensity is increased" },
              { id: "b", text: "The screen is moved closer" },
              { id: "c", text: "The grating spacing $d$ is increased" },
              { id: "d", text: "The number of slits is increased" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Resolving power", statement: "More slits → narrower maxima → better resolution of close wavelengths." }],
            steps: [{ reasoning: "Resolving power is proportional to the total number of slits.", marks: 1, markCode: "A" }],
            finalAnswer: "More slits → higher resolving power",
          },
        },
        {
          id: "cial-p-u4-dg-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Diffraction effects are most significant when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The aperture is much larger than the wavelength" },
              { id: "b", text: "The aperture is comparable to the wavelength" },
              { id: "c", text: "The aperture is much smaller than the wavelength" },
              { id: "d", text: "The wavelength is zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Diffraction", statement: "Significant when aperture size $\\approx$ wavelength." }],
            steps: [{ reasoning: "Diffraction is greatest when $a \\approx \\lambda$.", marks: 1, markCode: "A" }],
            finalAnswer: "Aperture $\\approx$ wavelength",
          },
        },
        {
          id: "cial-p-u4-dg-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A diffraction grating is used in a spectrometer to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Focus light onto a screen" },
              { id: "b", text: "Measure temperature" },
              { id: "c", text: "Produce interference fringes" },
              { id: "d", text: "Separate light into its component wavelengths" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "application", name: "Spectrometer", statement: "Gratings disperse wavelengths to different angles." }],
            steps: [{ reasoning: "Different $\\lambda$ give different $\\theta$ via $d\\sin\\theta = n\\lambda$.", marks: 1, markCode: "A" }],
            finalAnswer: "Separates wavelengths",
          },
        },
        {
          id: "cial-p-u4-dg-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the intensity pattern produced by a single slit, explaining the position and relative brightness of the central and secondary maxima.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Single slit", statement: "Central maximum width $2\\lambda D/a$; minima at $\\pm\\lambda D/a$." }],
            steps: [
              { reasoning: "Central maximum is twice as wide as each secondary maximum.", marks: 1, markCode: "M" },
              { reasoning: "Central maximum is the brightest because all parts of the slit contribute in phase.", marks: 1, markCode: "M" },
              { reasoning: "Secondary maxima are symmetric and decrease in intensity away from centre.", marks: 1, markCode: "M" },
              { reasoning: "Complete darkness (minima) occurs where destructive interference cancels the slit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Bright wide centre; dimmer symmetric side lobes",
          },
        },
        {
          id: "cial-p-u4-dg-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the patterns produced by double slits (interference) and a single slit (diffraction), stating one key similarity and two key differences.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Superposition", statement: "Both arise from superposition of waves from different parts of the aperture." }],
            steps: [
              { reasoning: "Similarity: both involve superposition producing alternating bright and dark regions.", marks: 1, markCode: "M" },
              { reasoning: "Difference: double slits give many equally spaced bright fringes; single slit gives one wide central maximum.", marks: 1, markCode: "M" },
              { reasoning: "Difference: double-slit fringes are equally bright (ideally); single-slit secondary maxima fade.", marks: 1, markCode: "M" },
              { reasoning: "Double-slit spacing depends on slit separation $d$; single-slit width on aperture $a$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Both superposition; fringes vs single-slit envelope",
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
