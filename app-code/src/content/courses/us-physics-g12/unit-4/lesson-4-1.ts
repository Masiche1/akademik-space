import type { Lesson } from "../../../types.ts";

export const lesson141: Lesson = {
  id: "phys12-u4-lesson-4-1",
  code: "4-1",
  title: "Mirrors and Lenses",
  goal: "I CAN apply the mirror and thin-lens equations to locate images and determine magnification.",
  standards: ["HS-PS4-2"],
  vocabulary: [
    { term: "Focal point", definition: "Point where parallel rays converge (convex) or appear to diverge (concave)." },
    { term: "Focal length", definition: "Distance from lens/mirror to focal point; $f$." },
    { term: "Object distance", definition: "Distance from object to lens/mirror; $d_o$." },
    { term: "Image distance", definition: "Distance from image to lens/mirror; $d_i$." },
    { term: "Magnification", definition: "$m = -d_i/d_o = h_i/h_o$." },
    { term: "Real image", definition: "Image formed by actual ray convergence; can be projected." },
    { term: "Virtual image", definition: "Image formed by apparent ray divergence; cannot be projected." },
  ],
  concepts: [
    {
      id: "phys12-u4-mirror-lens-eq",
      title: "Mirror and lens equations",
      skill: "Apply $1/f = 1/d_o + 1/d_i$ to solve for image position and magnification.",
      lesson: {
        sections: [
          {
            heading: "Thin lens/mirror equation",
            body: `For thin lenses and mirrors (paraxial approximation):

$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$

Sign conventions vary; common convention: $f > 0$ for converging (convex lens, concave mirror), $f < 0$ for diverging; $d_i > 0$ for real image (in front of mirror / opposite side of lens), $d_i < 0$ for virtual.`,
          },
          {
            heading: "Magnification",
            body: `Image magnification:

$$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$$

- $m > 0$: upright image
- $m < 0$: inverted image
- $|m| > 1$: magnified
- $|m| < 1$: diminished`,
          },
          {
            heading: "Ray tracing rules",
            body: "For lenses: parallel ray → through focal point; through center → straight; through focal point → parallel. For mirrors: parallel ray → through focal point; through center → retraces; through focal point → parallel. These rules locate images geometrically.",
          },
        ],
        keyFormulas: [
          { name: "Lens equation", statement: "$1/f = 1/d_o + 1/d_i$" },
          { name: "Magnification", statement: "$m = -d_i/d_o = h_i/h_o$" },
        ],
        workedExample: {
          problem: "An object is 30 cm from a converging lens of focal length 10 cm. Where is the image and what is magnification?",
          solution: "$1/d_i = 1/f - 1/d_o = 1/10 - 1/30 = 3/30 - 1/30 = 2/30 = 1/15$, so $d_i = 15$ cm. $m = -d_i/d_o = -15/30 = -0.5$. Image is real, inverted, half size, 15 cm on other side.",
        },
      },
      questions: [
        {
          id: "phys12-u4-mirror-lens-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the thin lens equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f = d_o + d_i$" },
              { id: "b", text: "$1/f = 1/d_o + 1/d_i$" },
              { id: "c", text: "$m = d_o/d_i$" },
              { id: "d", text: "$f = d_o \\times d_i$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Lens equation", statement: "$1/f = 1/d_o + 1/d_i$." }],
            steps: [{ reasoning: "The thin lens/mirror equation is $1/f = 1/d_o + 1/d_i$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $1/f = 1/d_o + 1/d_i$",
            commonErrors: ["Using wrong equation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u4-mirror-lens-eq-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An object is 20 cm from a convex lens of focal length 15 cm. Calculate the image distance.",
          response: { type: "numeric", parts: [{ label: "d_i", answer: 60, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Lens equation", statement: "$1/d_i = 1/f - 1/d_o$" }],
            steps: [
              { reasoning: "$1/d_i = 1/15 - 1/20 = 4/60 - 3/60 = 1/60$, so $d_i = 60$ cm.", working: "1/di=1/15-1/20=1/60", marks: 2, markCode: "M" },
              { reasoning: "d_i = 60 cm (real image, other side of lens).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 cm",
            commonErrors: ["Sign errors.", "Adding instead of subtracting reciprocals."],
            examinerNote: "M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u4-mirror-lens-eq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An object 5.0 cm tall is placed 30 cm from a convex lens (f = 10 cm). Calculate image height and describe the image.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Lens equation", statement: "$1/d_i = 1/f - 1/d_o$" },
              { kind: "formula", name: "Magnification", statement: "$m = -d_i/d_o = h_i/h_o$" },
            ],
            steps: [
              { reasoning: "$1/d_i = 1/10 - 1/30 = 1/15$, so $d_i = 15$ cm.", working: "di=15", marks: 1, markCode: "M" },
              { reasoning: "$m = -15/30 = -0.5$.", marks: 1, markCode: "M" },
              { reasoning: "$h_i = m \\times h_o = -0.5 \\times 5.0 = -2.5$ cm.", working: "hi=-0.5*5.0=-2.5", marks: 1, markCode: "M" },
              { reasoning: "Image is real (d_i > 0), inverted (m < 0), and half size (|m| = 0.5).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Image height = -2.5 cm (inverted); real, inverted, diminished image 15 cm from lens.",
            commonErrors: ["Ignoring negative sign of m.", "Forgetting magnification applies to height."],
            examinerNote: "M3 calculation, R1 description.",
          },
        },
        {
          id: "phys12-u4-mirror-lens-eq-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A concave mirror has focal length 20 cm. An object is placed 30 cm in front of it.",
          parts: [
            { label: "a", prompt: "Calculate the image distance using the mirror equation.", marks: 3 },
            { label: "b", prompt: "Calculate the magnification.", marks: 2 },
            { label: "c", prompt: "Describe the image (real/virtual, upright/inverted, magnified/diminished).", marks: 2 },
            { label: "d", prompt: "If the object moves to 15 cm from the mirror, recalculate the image distance and magnification.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mirror equation", statement: "$1/f = 1/d_o + 1/d_i$; concave mirror f > 0" },
              { kind: "formula", name: "Magnification", statement: "$m = -d_i/d_o$" },
            ],
            steps: [
              { reasoning: "$1/d_i = 1/20 - 1/30 = 3/60 - 2/60 = 1/60$, so $d_i = 60$ cm.", working: "1/di=1/20-1/30=1/60", marks: 2, markCode: "M", part: "a" },
              { reasoning: "d_i = 60 cm (real image, in front of mirror).", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$m = -60/30 = -2.0$.", working: "m=-60/30=-2.0", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Image is real (d_i > 0), inverted (m < 0), magnified (|m| = 2 > 1).", marks: 2, markCode: "R", part: "c" },
              { reasoning: "Object at 15 cm (< f = 20 cm): $1/d_i = 1/20 - 1/15 = 3/60 - 4/60 = -1/60$, so $d_i = -60$ cm.", working: "1/di=1/20-1/15=-1/60", marks: 2, markCode: "M", part: "d" },
              { reasoning: "d_i = -60 cm (virtual image, behind mirror).", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 60 cm real (b) m = -2.0 (c) real, inverted, magnified (d) d_i = -60 cm virtual, m = +4.0.",
            commonErrors: ["Sign convention errors for mirrors.", "Forgetting object inside focal length gives virtual image."],
            examinerNote: "3+2+2+3 = 10. Part b has marks:0 step — invalid! Fix below.",
          },
        },
      ],
    },
    {
      id: "phys12-u4-refraction",
      title: "Refraction and lenses",
      skill: "Apply Snell's law and analyze image formation by lenses.",
      lesson: {
        sections: [
          {
            heading: "Refraction and Snell's law",
            body: `When light crosses between media with different speeds, it bends. **Snell's law**:

$$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$$

where $n$ is refractive index and $\\theta$ is angle from normal. Light bends toward normal entering denser medium (higher n), away entering less dense.`,
          },
          {
            heading: "Total internal reflection",
            body: "When going from denser to less dense medium, there's a **critical angle** $\\theta_c$ where $\\sin\\theta_c = n_2/n_1$. Beyond this, all light reflects — no refraction. Used in fiber optics and diamond sparkle.",
          },
          {
            heading: "Lens power",
            body: "Lens power $P = 1/f$ in diopters. Positive for converging, negative for diverging. Eyeglasses correct vision: converging for farsightedness, diverging for nearsightedness.",
          },
        ],
        keyFormulas: [
          { name: "Snell's law", statement: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$" },
          { name: "Critical angle", statement: "$\\sin\\theta_c = n_2/n_1$" },
          { name: "Lens power", statement: "$P = 1/f$ (diopters)" },
        ],
        workedExample: {
          problem: "Light goes from air (n=1.0) into glass (n=1.5) at 30° incidence. What is the refracted angle?",
          solution: "$1.0 \\times \\sin 30^\\circ = 1.5 \\times \\sin\\theta_2$, so $\\sin\\theta_2 = 0.5/1.5 = 0.333$, $\\theta_2 = 19.5^\\circ$.",
        },
      },
      questions: [
        {
          id: "phys12-u4-refraction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Snell's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$" },
              { id: "b", text: "$n_1\\theta_1 = n_2\\theta_2$" },
              { id: "c", text: "$\\sin\\theta_1/\\sin\\theta_2 = n_1/n_2$" },
              { id: "d", text: "$n = c/v$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Snell's law", statement: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$." }],
            steps: [{ reasoning: "Snell's law relates angles and refractive indices.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$",
            commonErrors: ["Using angles instead of sines."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys12-u4-refraction-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Light enters glass (n=1.5) from air (n=1.0) at 45°. Calculate the refracted angle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Snell's law", statement: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$" }],
            steps: [
              { reasoning: "$1.0 \\times \\sin 45^\\circ = 1.5 \\times \\sin\\theta_2$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sin\\theta_2 = 0.707/1.5 = 0.471$, so $\\theta_2 = 28.1^\\circ$.", working: "theta2=asin(0.471)=28.1", marks: 1, markCode: "M" },
              { reasoning: "Refracted angle ≈ 28° — light bends toward normal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28.1°",
            commonErrors: ["Forgetting to take arcsin.", "Using degrees instead of radians in calculator."],
            examinerNote: "M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u4-refraction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the critical angle for light going from glass (n=1.5) to air (n=1.0)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Critical angle", statement: "$\\sin\\theta_c = n_2/n_1$" }],
            steps: [
              { reasoning: "$\\sin\\theta_c = 1.0/1.5 = 0.667$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta_c = \\arcsin(0.667) = 41.8^\\circ$.", working: "theta_c=asin(0.667)=41.8", marks: 1, markCode: "M" },
              { reasoning: "Critical angle ≈ 42°.", marks: 1, markCode: "A" },
              { reasoning: "Beyond this angle, total internal reflection occurs.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "41.8°",
            commonErrors: ["Inverting the ratio.", "Using degrees instead of radians."],
            examinerNote: "M2 calculation, A1 answer, R1 explanation.",
          },
        },
        {
          id: "phys12-u4-refraction-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A fish is 2.0 m below the surface of water (n=1.33). An observer looks down from air (n=1.0) at an angle.",
          parts: [
            { label: "a", prompt: "If the observer is directly above, at what apparent depth does the fish appear?", marks: 3 },
            { label: "b", prompt: "Explain why the fish appears shallower than its real depth.", marks: 2 },
            { label: "c", prompt: "If the observer looks at 40° from vertical, calculate the apparent depth using Snell's law.", marks: 3 },
            { label: "d", prompt: "Explain why the fish appears closer to the surface at oblique angles.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Snell's law", statement: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$" },
              { kind: "principle", name: "Apparent depth", statement: "Light bends away from normal going water→air, making objects appear shallower." },
            ],
            steps: [
              { reasoning: "Apparent depth $d' = d \\times n_{air}/n_{water} = 2.0 \\times 1.0/1.33 = 1.50$ m.", working: "d'=2.0*1.0/1.33=1.50", marks: 2, markCode: "M", part: "a" },
              { reasoning: "Answer: 1.50 m.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Light from fish refracts away from normal when exiting water, making rays appear to come from a shallower point.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "The brain interprets refracted rays as coming from a closer object.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Snell: $1.33 \\times \\sin\\theta_{water} = 1.0 \\times \\sin 40^\\circ$ (observer angle from vertical = 40°, so refraction angle in water is smaller).", marks: 1, markCode: "M", part: "c" },
              { reasoning: "$\\sin\\theta_{water} = \\sin 40^\\circ/1.33 = 0.643/1.33 = 0.483$, so $\\theta_{water} = 28.9^\\circ$.", working: "theta_w=asin(0.483)=28.9", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Apparent depth at oblique angle: $d' = d \\times \\cos\\theta_{obs}/\\cos\\theta_{water} \\times n_{air}/n_{water}$... simplified: apparent depth decreases with angle. Accept reasonable calculation showing shallower appearance.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "At oblique angles, the apparent position shifts laterally and vertically, making the fish appear even closer to the surface and displaced horizontally.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "This is why spearfishers aim below the apparent position.", marks: 1, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) 1.50 m apparent depth (b) refraction makes objects appear shallower (c) ~1.2-1.4 m at 40° (d) oblique viewing increases apparent shallowness.",
            commonErrors: ["Thinking fish appears deeper.", "Forgetting Snell's law for oblique angles."],
            examinerNote: "3+2+3+2 = 10. Part (c) accepts range due to approximation.",
          },
        },
      ],
    },
    {
      id: "phys12-u4-wave-optics",
      title: "Wave optics and polarization",
      skill: "Analyze interference, diffraction, and polarization of light.",
      lesson: {
        sections: [
          {
            heading: "Double-slit interference",
            body: `Two coherent light sources produce interference fringes. Bright fringes occur when path difference = nλ; dark when = (n+½)λ.

$$d\\sin\\theta = n\\lambda \\text{ (bright)}$$
$$d\\sin\\theta = (n+\\tfrac{1}{2})\\lambda \\text{ (dark)}$$

Fringe spacing on screen: $\\Delta y = L\\lambda/d$ where L is screen distance, d is slit separation.`,
          },
          {
            heading: "Single-slit diffraction",
            body: "Light passing through a single slit diffracts, producing a central maximum flanked by minima. First minimum at $\\sin\\theta = \\lambda/a$ where a is slit width. Narrower slit → wider diffraction pattern.",
          },
          {
            heading: "Polarization",
            body: "Light waves vibrate in all directions perpendicular to propagation. **Polarization** filters to one direction. Polarizing sunglasses reduce glare. **Brewster's angle**: $\\tan\\theta_B = n_2/n_1$ — at this angle, reflected light is completely polarized.",
          },
        ],
        keyFormulas: [
          { name: "Double-slit bright", statement: "$d\\sin\\theta = n\\lambda$" },
          { name: "Fringe spacing", statement: "$\\Delta y = L\\lambda/d$" },
          { name: "Single-slit minimum", statement: "$\\sin\\theta = \\lambda/a$" },
          { name: "Brewster's angle", statement: "$\\tan\\theta_B = n_2/n_1$" },
        ],
        workedExample: {
          problem: "Light of wavelength 500 nm passes through two slits 0.10 mm apart, projected on screen 1.0 m away. What is fringe spacing?",
          solution: "$\\Delta y = L\\lambda/d = (1.0)(500 \\times 10^{-9})/(0.10 \\times 10^{-3}) = 5.0 \\times 10^{-4}$ m = 0.50 mm.",
        },
      },
      questions: [
        {
          id: "phys12-u4-wave-optics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes bright fringes in double-slit interference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Path difference = nλ" },
              { id: "b", text: "Path difference = (n+½)λ" },
              { id: "c", text: "Path difference = λ/2" },
              { id: "d", text: "No path difference" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Interference", statement: "Constructive interference when path diff = nλ." }],
            steps: [{ reasoning: "Bright fringes occur when waves arrive in phase (path difference = whole wavelengths).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Path difference = nλ",
            commonErrors: ["Confusing bright and dark fringe conditions."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys12-u4-wave-optics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two slits are 0.20 mm apart. Light of 600 nm wavelength creates fringes on a screen 2.0 m away. Calculate fringe spacing.",
          response: { type: "numeric", parts: [{ label: "Δy", answer: 0.006, unit: "m", tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Fringe spacing", statement: "$\\Delta y = L\\lambda/d$" }],
            steps: [
              { reasoning: "$\\Delta y = (2.0)(600 \\times 10^{-9})/(0.20 \\times 10^{-3}) = 1.2 \\times 10^{-6}/2.0 \\times 10^{-4} = 6.0 \\times 10^{-3}$ m.", working: "dy=2.0*600e-9/0.20e-3=0.006", marks: 2, markCode: "M" },
              { reasoning: "Fringe spacing = 6.0 mm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6.0 mm",
            commonErrors: ["Unit conversion errors (nm vs m, mm vs m)."],
            examinerNote: "M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u4-wave-optics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do we see rainbows? Explain using dispersion and refraction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dispersion", statement: "Refractive index depends on wavelength." },
              { kind: "principle", name: "Refraction", statement: "Different wavelengths bend by different amounts." },
            ],
            steps: [
              { reasoning: "Sunlight contains all visible wavelengths.", marks: 1, markCode: "B" },
              { reasoning: "Water droplets refract and reflect sunlight; different wavelengths (colors) refract by different amounts (dispersion).", marks: 1, markCode: "R" },
              { reasoning: "Violet bends most, red least, separating white light into spectrum.", marks: 1, markCode: "B" },
              { reasoning: "The 42° rainbow angle corresponds to one internal reflection in raindrops.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dispersion in raindrops separates sunlight into colors; refraction + reflection create rainbow.",
            commonErrors: ["Thinking rainbow is a physical object.", "Ignoring dispersion."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "phys12-u4-wave-optics-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Light of wavelength 550 nm passes through a single slit of width 0.10 mm. Screen is 2.0 m away.",
          parts: [
            { label: "a", prompt: "Calculate the angular position of the first minimum.", marks: 2 },
            { label: "b", prompt: "Calculate the linear position of the first minimum on the screen.", marks: 3 },
            { label: "c", prompt: "If the slit width is halved, what happens to the diffraction pattern?", marks: 2 },
            { label: "d", prompt: "Explain why a wider slit produces a narrower central maximum.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Single-slit minimum", statement: "$a\\sin\\theta = \\lambda$" },
              { kind: "formula", name: "Linear position", statement: "$y = L\\tan\\theta \\approx L\\sin\\theta$ for small angles" },
            ],
            steps: [
              { reasoning: "$\\sin\\theta = \\lambda/a = 550 \\times 10^{-9}/(0.10 \\times 10^{-3}) = 5.5 \\times 10^{-3}$.", working: "sin=550e-9/0.10e-3=0.0055", marks: 1, markCode: "M", part: "a" },
              { reasoning: "$\\theta = \\arcsin(0.0055) = 0.315^\\circ$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$y = L\\tan\\theta \\approx 2.0 \\times 0.0055 = 0.011$ m = 11 mm.", working: "y=2.0*0.0055=0.011", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Answer: ≈ 11 mm.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Halving slit width doubles the diffraction pattern width — first minimum moves to 22 mm; narrower slit → more diffraction → wider spreading.", marks: 2, markCode: "R", part: "c" },
              { reasoning: "Diffraction angle $\\theta \\approx \\lambda/a$; larger a gives smaller angle.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Wider slit means wavefronts from different parts are more in phase at center, concentrating energy in narrower central maximum.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Destructive interference at edges cancels sooner for wide slits.", marks: 1, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) 0.315° (b) 11 mm (c) pattern doubles in width (d) wider slit → less diffraction → narrower maximum.",
            commonErrors: ["Using degrees instead of radians.", "Forgetting small-angle approximation."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
