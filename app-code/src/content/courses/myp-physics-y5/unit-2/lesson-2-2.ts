import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypp5-u2-lesson-2-2",
  code: "2-2",
  title: "Wave Phenomena and the Doppler Effect",
  goal: "I CAN explain reflection, refraction, diffraction and interference of waves, and apply the Doppler effect to moving sources.",
  standards: [
    "Key concept: Waves",
    "MYP Sciences: Waves",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Reflection", definition: "Waves bouncing back from a boundary; angle of incidence equals angle of reflection." },
    { term: "Refraction", definition: "Change in wave direction and speed when entering a different medium; frequency stays constant." },
    { term: "Diffraction", definition: "Spreading of waves when passing through a gap or around an obstacle; greatest when gap ≈ wavelength." },
    { term: "Interference", definition: "Superposition of waves producing regions of reinforcement (constructive) and cancellation (destructive)." },
    { term: "Constructive interference", definition: "Crest meets crest (or trough meets trough): waves reinforce, amplitude increases." },
    { term: "Doppler effect", definition: "Change in observed frequency when source and observer move relative to each other; approaching → higher pitch, receding → lower." },
  ],
  concepts: [
    {
      id: "mypp5-u2-wave",
      title: "Reflection, refraction, diffraction and interference",
      skill: "Explain the four wave phenomena and predict their effects using wave properties.",
      lesson: {
        sections: [
          {
            heading: "Reflection and refraction",
            body: "Reflection follows the law: angle of incidence = angle of reflection, with the normal. Refraction bends waves towards the normal entering a slower medium (lower speed) and away when speeding up — seen when light enters water. Frequency never changes across a boundary; speed and wavelength do.",
          },
          {
            heading: "Diffraction",
            body: "Waves spread out most when passing through gaps comparable to their wavelength. Radio waves (long λ) diffract around buildings easily; visible light barely diffracts. Sound diffracts enough to be heard around corners.",
          },
          {
            heading: "Interference",
            body: "When coherent waves overlap, **constructive interference** doubles amplitude where crest meets crest; **destructive interference** cancels where crest meets trough. This produces interference patterns (young's double slit) and explains noise-cancelling headphones and thin-film colours.",
          },
        ],
        keyFormulas: [
          { name: "Wave speed", statement: "$v = f\\lambda$ m/s" },
          { name: "Reflection", statement: "$\\theta_i = \\theta_r$" },
          { name: "Diffraction", statement: "Maximum when gap $\\approx \\lambda$" },
        ],
        workedExample: {
          problem: "Light of wavelength 600 nm passes through a 600 nm gap. What phenomenon is maximised?",
          solution: "Diffraction is greatest when gap width equals the wavelength.",
        },
      },
      questions: [
        {
          id: "mypp5-u2-wave-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a wave refracts into a slower medium, what happens to its wavelength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It increases" },
              { id: "b", text: "It decreases" },
              { id: "c", text: "It doubles" },
              { id: "d", text: "It stays the same" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "f constant; v decreases → λ decreases." }],
            steps: [
              { reasoning: "Frequency unchanged, speed lower → wavelength smaller.", working: "\\lambda\\downarrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** decreases",
            commonErrors: ["Thinking frequency changes at boundaries."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp5-u2-wave-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A water wave has frequency 2 Hz and speed 0.5 m/s. What is its wavelength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4 m" },
              { id: "b", text: "2 m" },
              { id: "c", text: "1 m" },
              { id: "d", text: "0.25 m" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "v = fλ", statement: "$\\lambda = v/f = 0.5/2$" }],
            steps: [
              { reasoning: "Wavelength = speed ÷ frequency.", working: "\\frac{0.5}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.25\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.25 m",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-wave-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two loudspeakers emit identical sound waves. A listener walking along a line finds positions where the sound is very loud and positions where it is nearly silent. Which phenomenon explains this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diffraction" },
              { id: "b", text: "Interference" },
              { id: "c", text: "Reflection" },
              { id: "d", text: "Refraction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Interference", statement: "Constructive interference → loud; destructive → quiet." }],
            steps: [
              { reasoning: "Alternating loud/quiet regions indicate wave superposition.", working: "\\text{superposition}", marks: 1, markCode: "M" },
              { reasoning: "Constructive/destructive interference from two coherent sources.", working: "\\text{interference}", marks: 1, markCode: "M" },
              { reasoning: "Match choice.", working: "\\text{(c)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(c) interference",
            commonErrors: ["Confusing with diffraction spreading."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-wave-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Students investigate diffraction using microwaves of wavelength 3 cm passing through gaps of different widths in a metal sheet.",
          parts: [
            { label: "a", prompt: "Predict which gap width will produce the widest diffraction pattern and explain why.", marks: 2 },
            { label: "b", prompt: "Describe how you would measure the width of the diffraction pattern fairly.", marks: 2 },
            { label: "c", prompt: "Explain why visible light shows much less diffraction than microwaves through the same gap.", marks: 2 },
            { label: "d", prompt: "Give one real-world application that relies on diffraction and explain the benefit.", marks: 1 },
            { label: "e", prompt: "State one limitation of the microwave diffraction model and how it could be improved.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffraction", statement: "Maximum spreading when gap width $\\approx \\lambda$." },
              { kind: "formula", name: "v = fλ", statement: "Visible light has much smaller $\\lambda$ than microwaves." },
            ],
            steps: [
              { part: "a", reasoning: "Gap $\\approx 3$ cm gives widest pattern; comparable gap–wavelength ratio maximises spreading.", working: "\\text{gap}\\approx\\lambda", marks: 2, markCode: "B" },
              { part: "b", reasoning: "Scan detector on arc at fixed distance, record signal vs angle, repeat for each gap, average; controlled = frequency, distance.", working: "\\text{measure pattern}", marks: 2, markCode: "B" },
              { part: "c", reasoning: "Visible $\\lambda \\sim 10^{-7}$ m $\\ll$ gap $\\sim 10^{-2}$ m → negligible diffraction; microwaves $\\lambda \\sim 10^{-2}$ m comparable to gap.", working: "\\lambda_{light}\\ll\\text{gap}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Radio waves around buildings / X-ray crystallography; long $\\lambda$ diffracts around obstacles → coverage.", working: "\\text{radio coverage}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Metal sheet edges and screen size limit pattern; use larger screen / multiple gap widths / digital analysis.", working: "\\text{limitation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) gap ≈ 3 cm widest (b) scan detector, controlled f (c) light λ ≪ gap (d) radio around buildings (e) screen size",
            commonErrors: ["Thinking bigger gap always gives more diffraction; forgetting λ scales with frequency."],
            examinerNote: "B2 each for (a),(b); A2 for (c); A1 for (d); B1 for (e).",
          },
        },
        {
          id: "mypp5-u2-wave-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the law of reflection state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wavelength is unchanged on reflection" },
              { id: "b", text: "The wave speed doubles on reflection" },
              { id: "c", text: "Angle of incidence equals angle of refraction" },
              { id: "d", text: "Angle of incidence equals angle of reflection, measured from the normal" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Reflection", statement: "$\\theta_i = \\theta_r$ measured from the normal." }],
            steps: [
              { reasoning: "Angles measured from the normal are equal.", working: "\\theta_i=\\theta_r", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\theta_i = \\theta_r$ from normal",
            commonErrors: ["Measuring angles from the surface instead of the normal."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp5-u2-wave-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A wave has frequency 2 Hz and wavelength 1.5 m. Calculate its speed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "m/s" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave speed", statement: "$v = f\\lambda = 2 \\times 1.5$" }],
            steps: [
              { reasoning: "$v = 3$ m/s.", working: "2\\times1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 m/s",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "A1 for 3.",
          },
        },
        {
          id: "mypp5-u2-wave-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Light travelling in air enters glass (a slower medium). What happens to the light ray?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It bends away from the normal" },
              { id: "b", text: "It speeds up" },
              { id: "c", text: "It is not bent" },
              { id: "d", text: "It bends towards the normal" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Refraction", statement: "Slower medium → ray bends towards normal; frequency unchanged." }],
            steps: [
              { reasoning: "Entering slower medium (glass), speed decreases → bend towards normal.", working: "v\\downarrow \\Rightarrow \\text{towards normal}", marks: 1, markCode: "M" },
              { reasoning: "Answer (b).", working: "(b)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** towards the normal",
            commonErrors: ["Bending away — that happens entering a faster medium."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-wave-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Light of wavelength 600 nm travels in vacuum at $3 \\times 10^8$ m/s. Calculate its frequency.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5e14, tolerance: 1e12, unit: "Hz" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave relation", statement: "$f = c/\\lambda = 3\\times10^8/6\\times10^{-7}$" }],
            steps: [
              { reasoning: "$f = \\frac{3 \\times 10^8}{600 \\times 10^{-9}}$.", working: "\\frac{3\\times10^8}{6\\times10^{-7}}", marks: 1, markCode: "M" },
              { reasoning: "$f = 5 \\times 10^{14}$ Hz.", working: "5\\times10^{14}\\ \\text{Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5 \\times 10^{14}$ Hz",
            commonErrors: ["Nanometre conversion error: 600 nm = $6 \\times 10^{-7}$ m."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-wave-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Through which gap will a wave diffract the most?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gap much larger than the wavelength" },
              { id: "b", text: "No gap" },
              { id: "c", text: "Gap equal to the wavelength" },
              { id: "d", text: "Gap much smaller than the wavelength" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Diffraction", statement: "Maximum spreading when gap width $\\approx$ wavelength." }],
            steps: [
              { reasoning: "Diffraction greatest when gap $\\approx \\lambda$.", working: "gap \\approx \\lambda", marks: 1, markCode: "M" },
              { reasoning: "Much larger gap → little spreading; much smaller → wave mostly reflected/blocked.", working: "\\text{gap}=\\lambda", marks: 1, markCode: "M" },
              { reasoning: "Answer (b).", working: "(b)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** gap equal to wavelength",
            commonErrors: ["Thinking smaller gap always gives more diffraction."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-wave-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A wave travels at $2 \\times 10^8$ m/s with frequency $5 \\times 10^{14}$ Hz. Calculate its wavelength.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4e-7, tolerance: 1e-9, unit: "m" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave relation", statement: "$\\lambda = v/f$" }],
            steps: [
              { reasoning: "$\\lambda = \\frac{2 \\times 10^8}{5 \\times 10^{14}}$.", working: "\\frac{2\\times10^8}{5\\times10^{14}}", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 4 \\times 10^{-7}$ m = 400 nm.", working: "4\\times10^{-7}\\ \\text{m}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "400\\ \\text{nm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4 \\times 10^{-7}$ m (400 nm)",
            commonErrors: ["Exponent arithmetic errors with powers of ten."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-wave-q11",
          difficulty: "foundation",
          totalMarks: 6,
          stem: "Waves can be reflected, refracted, diffracted and can interfere.",
          parts: [
            { label: "a", prompt: "State the law of reflection.", marks: 1 },
            { label: "b", prompt: "Define refraction.", marks: 1 },
            { label: "c", prompt: "Define diffraction.", marks: 1 },
            { label: "d", prompt: "Define interference.", marks: 1 },
            { label: "e", prompt: "State which wave property stays the same when a wave crosses a boundary between media.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Reflection", statement: "$\\theta_i = \\theta_r$ from normal." },
              { kind: "principle", name: "Boundary", statement: "Frequency unchanged; speed and wavelength change." },
            ],
            steps: [
              { part: "a", reasoning: "Angle of incidence equals angle of reflection, measured from the normal.", working: "\\theta_i=\\theta_r", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Change in direction of a wave as it passes into a different medium.", working: "\\text{bending at boundary}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Spreading of waves as they pass through a gap or around an obstacle.", working: "\\text{spreading}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Superposition of waves producing regions of reinforcement and cancellation.", working: "\\text{superposition}", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Frequency stays constant; speed and wavelength change to keep $v = f\\lambda$.", working: "f \\text{ const}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "State both: frequency unchanged, speed/wavelength change.", working: "v,\\lambda \\text{ change}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) θi = θr (b) bending at boundary (c) spreading (d) superposition (e) frequency constant",
            commonErrors: ["Saying wavelength stays constant — it changes with speed."],
            examinerNote: "B1 each for (a)-(d); M1 A1 for (e).",
          },
        },
        {
          id: "mypp5-u2-wave-q12",
          difficulty: "core",
          totalMarks: 7,
          stem: "A student investigates diffraction of microwaves (wavelength about 12 cm) using a metal sheet with adjustable gaps.",
          parts: [
            { label: "a", prompt: "State the independent, dependent and two controlled variables.", marks: 2 },
            { label: "b", prompt: "Predict the result when the gap width equals the wavelength.", marks: 1 },
            { label: "c", prompt: "Explain why microwaves diffract noticeably around buildings but visible light does not.", marks: 2 },
            { label: "d", prompt: "The student uses sound of wavelength 0.5 m instead. Predict whether it diffracts more or less through the same gaps, and justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffraction", statement: "Maximum when gap $\\approx \\lambda$; longer wavelengths diffract more." },
            ],
            steps: [
              { part: "a", reasoning: "Independent = gap width; dependent = amount of spreading; controlled = wavelength/frequency, source power, distance, gap shape.", working: "gap \\rightarrow \\text{diffraction}", marks: 2, markCode: "B" },
              { part: "b", reasoning: "Diffraction is maximum when gap $\\approx$ wavelength.", working: "\\text{max diffraction}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Microwave λ (~cm) is comparable to building gaps/corners; visible light λ (~$10^{-7}$ m) is far smaller than any everyday gap → negligible diffraction.", working: "\\lambda_{mw} \\gg \\lambda_{light}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Sound λ = 0.5 m is larger than microwave λ = 0.12 m, so relative to fixed gaps it diffracts more (spreads further).", working: "\\lambda_{sound}>\\lambda_{mw}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) gap→spreading, control λ/power (b) max diffraction (c) λ comparable to gaps (d) sound diffracts more",
            commonErrors: ["Thinking diffraction depends only on wave type, not λ vs gap size."],
            examinerNote: "B2 for (a); B1 for (b); A2 for (c); A2 for (d).",
          },
        },
        {
          id: "mypp5-u2-wave-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a wave passes from air into water, which property remains unchanged?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed" },
              { id: "b", text: "Wavelength" },
              { id: "c", text: "Direction" },
              { id: "d", text: "Frequency" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Boundary", statement: "Frequency is set by the source and unchanged across the boundary." }],
            steps: [
              { reasoning: "$v = f\\lambda$: f constant → v and λ change together.", working: "f \\text{ const}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Frequency",
            commonErrors: ["Thinking wavelength stays the same in the new medium."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp5-u2-wave-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two coherent waves meet. Where a crest meets a trough, what is observed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflection" },
              { id: "b", text: "Destructive interference — cancellation" },
              { id: "c", text: "Constructive interference — larger amplitude" },
              { id: "d", text: "Diffraction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Interference", statement: "Crest + trough → destructive interference (cancellation)." }],
            steps: [
              { reasoning: "Out-of-phase waves cancel at that point.", working: "crest+trough=0", marks: 1, markCode: "M" },
              { reasoning: "Answer (b).", working: "(b)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** destructive interference",
            commonErrors: ["Reversing constructive and destructive definitions."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-wave-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Light of wavelength 500 nm passes through a single slit of width 0.5 mm and produces a diffraction pattern on a screen.",
          parts: [
            { label: "a", prompt: "State the relationship between gap width and wavelength for maximum diffraction.", marks: 1 },
            { label: "b", prompt: "Calculate the ratio of gap width to wavelength.", marks: 1 },
            { label: "c", prompt: "Predict whether the central maximum will be wide or narrow, and justify.", marks: 1 },
            { label: "d", prompt: "Explain what happens to the diffraction pattern if the slit is made wider.", marks: 2 },
            { label: "e", prompt: "Describe an experiment to measure the wavelength of microwaves using diffraction through a variable gap, identifying variables.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffraction", statement: "Max when gap $\\approx \\lambda$; narrower gap → wider pattern." },
            ],
            steps: [
              { part: "a", reasoning: "Maximum diffraction occurs when gap width is comparable to the wavelength ($\\approx \\lambda$).", working: "gap \\approx \\lambda", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$0.5\\text{ mm} = 5 \\times 10^{-4}$ m; $\\lambda = 500\\text{ nm} = 5 \\times 10^{-7}$ m; ratio $= 1000$.", working: "\\frac{5\\times10^{-4}}{5\\times10^{-7}}=1000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Gap is 1000× wavelength → very little diffraction; central maximum narrow/sharp.", working: "\\text{narrow}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Wider slit → less spreading; pattern narrows toward geometric shadow; eventually behaves like straight-line propagation.", working: "wider gap \\Rightarrow less diffraction", marks: 2, markCode: "A" },
              { part: "e", reasoning: "Independent = gap width; dependent = angular spread/first minimum position; controlled = microwave frequency, detector position, gap shape. Measure angles of minima.", working: "\\text{fair test}", marks: 3, markCode: "B" },
            ],
            finalAnswer: "(a) gap ≈ λ (b) 1000 (c) narrow (d) wider gap → less spreading (e) vary gap, measure minima angles",
            commonErrors: ["Using nm and mm inconsistently in the ratio."],
            examinerNote: "B1 for (a); M1 A1 for (b); A1 for (c); A2 for (d); B3 for (e).",
          },
        },
        {
          id: "mypp5-u2-wave-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sound wave has speed 340 m/s in air.",
          parts: [
            { label: "a", prompt: "Calculate the wavelength of a 170 Hz note.", marks: 1 },
            { label: "b", prompt: "Calculate the wavelength of an 850 Hz note.", marks: 1 },
            { label: "c", prompt: "Light of wavelength 500 nm travels at $2 \\times 10^8$ m/s in a medium. Calculate its frequency.", marks: 1 },
            { label: "d", prompt: "Calculate the speed of a wave with frequency $10^{15}$ Hz and wavelength 300 nm.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "m" },
              { label: "b", answer: 0.4, unit: "m" },
              { label: "c", answer: 4e14, tolerance: 1e12, unit: "Hz" },
              { label: "d", answer: 3e8, tolerance: 1e6, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave relation", statement: "$v = f\\lambda$" },
            ],
            steps: [
              { part: "a", reasoning: "$\\lambda = 340/170 = 2$ m.", working: "\\frac{340}{170}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\lambda = 340/850 = 0.4$ m.", working: "\\frac{340}{850}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$f = \\frac{2 \\times 10^8}{500 \\times 10^{-9}} = 4 \\times 10^{14}$ Hz.", working: "4\\times10^{14}\\ \\text{Hz}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$v = 10^{15} \\times 300 \\times 10^{-9} = 3 \\times 10^8$ m/s.", working: "3\\times10^8\\ \\text{m/s}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 2 m (b) 0.4 m (c) $4\\times10^{14}$ Hz (d) $3\\times10^8$ m/s",
            commonErrors: ["nm to m conversion errors; dividing when multiplying is needed."],
            examinerNote: "A1 for (a),(b); M1 A1 for (c),(d).",
          },
        },
      ],
    },
    {
      id: "mypp5-u2-dopp",
      title: "The Doppler effect",
      skill: "Explain and apply the Doppler effect for moving sources and observers.",
      lesson: {
        sections: [
          {
            heading: "Moving sources",
            body: "When a source moves towards an observer, wavefronts bunch up ahead → shorter wavelength, higher observed frequency (higher pitch). Receding → stretched wavelength, lower frequency. This applies to sound and light.",
          },
          {
            heading: "Moving observers",
            body: "A moving observer encounters wavefronts more (or less) often, also shifting observed frequency. For sound both source and observer motion matter; for light only relative motion matters (relativistic Doppler for high speeds).",
          },
          {
            heading: "Applications",
            body: "Doppler radar measures vehicle speed and weather (rain speed → storm rotation). Medical ultrasound uses Doppler to measure blood flow. Astronomers measure stellar motion: redshift = receding galaxy, blueshift = approaching.",
          },
        ],
        keyFormulas: [
          { name: "Approaching", statement: "$f' > f$ — higher pitch" },
          { name: "Receding", statement: "$f' < f$ — lower pitch" },
          { name: "Redshift", statement: "Receding galaxies → light shifted to red" },
        ],
        workedExample: {
          problem: "An ambulance siren approaches then passes you. Describe what you hear.",
          solution: "Pitch rises as it approaches (higher frequency), then drops as it recedes (lower frequency).",
        },
      },
      questions: [
        {
          id: "mypp5-u2-dopp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An ambulance with its siren on drives past you. What happens to the pitch you hear as it approaches and then recedes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pitch rises then falls" },
              { id: "b", text: "Pitch stays constant" },
              { id: "c", text: "Pitch falls then rises" },
              { id: "d", text: "Pitch doubles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Doppler", statement: "Approach → higher f; recede → lower f." }],
            steps: [
              { reasoning: "Frequency shifts up then down as source passes.", working: "f\\uparrow\\text{ then }f\\downarrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** rises then falls",
            commonErrors: ["Thinking pitch changes only while passing."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp5-u2-dopp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A galaxy is observed to have its spectral lines shifted towards longer wavelengths (redshift). What does this indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The galaxy is moving away from us" },
              { id: "b", text: "The galaxy is getting hotter" },
              { id: "c", text: "The galaxy is stationary" },
              { id: "d", text: "The galaxy is approaching us" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Redshift", statement: "Receding source → longer observed wavelength." }],
            steps: [
              { reasoning: "Longer wavelength = lower frequency = recession.", working: "\\lambda\\uparrow \\Rightarrow v_{away}", marks: 1, markCode: "M" },
              { reasoning: "State conclusion.", working: "\\text{receding}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(b) moving away",
            commonErrors: ["Reversing blueshift/redshift."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-dopp-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Police radar emits 10 GHz microwaves. A car moving towards the radar reflects the waves. Compared with the emitted frequency, the reflected frequency is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "higher" },
              { id: "b", text: "lower" },
              { id: "c", text: "unchanged" },
              { id: "d", text: "zero" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Doppler radar", statement: "Approaching reflector shifts frequency up." }],
            steps: [
              { reasoning: "Car acts as moving observer then moving source; both shifts raise frequency.", working: "f' > f", marks: 1, markCode: "M" },
              { reasoning: "Reflected wave has higher frequency.", working: "\\text{higher}", marks: 1, markCode: "M" },
              { reasoning: "Match choice.", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(b) higher",
            commonErrors: ["Applying only one Doppler shift or reversing direction."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-dopp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student uses a buzzer on a model car to investigate the Doppler effect. The buzzer emits 440 Hz.",
          parts: [
            { label: "a", prompt: "State what happens to the observed frequency as the car approaches the student.", marks: 1 },
            { label: "b", prompt: "Explain this using wavefront spacing.", marks: 2 },
            { label: "c", prompt: "Identify the independent, dependent and controlled variables in this investigation.", marks: 2 },
            { label: "d", prompt: "Describe how a Doppler ultrasound scanner uses this effect to measure blood flow speed.", marks: 2 },
            { label: "e", prompt: "Evaluate the usefulness of Doppler shift measurements in astronomy.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Doppler", statement: "Approach compresses wavefronts → higher f; recession stretches → lower f." },
              { kind: "principle", name: "Applications", statement: "Ultrasound and astronomy measure relative motion via frequency shift." },
            ],
            steps: [
              { part: "a", reasoning: "Observed frequency increases above 440 Hz.", working: "f'>440", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Car moves into its own wavefronts → shorter wavelength ahead → more wavefronts per second → higher pitch.", working: "\\lambda\\downarrow, f\\uparrow", marks: 2, markCode: "B" },
              { part: "c", reasoning: "Independent = car speed/direction; dependent = observed frequency; controlled = buzzer frequency, distance, medium (air), observer position.", working: "\\text{variables}", marks: 2, markCode: "B" },
              { part: "d", reasoning: "Ultrasound reflects off moving blood cells; frequency shift of echo gives speed via Doppler equation.", working: "\\text{echo shift}", marks: 2, markCode: "A" },
              { part: "e", reasoning: "Measures galaxy speeds and expansion; limited by needing identifiable spectral lines and resolution.", working: "\\text{redshift measures } v", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) f increases (b) wavefronts bunch up (c) speed→frequency (d) echo shift from blood cells (e) measures recession speed",
            commonErrors: ["Confusing source motion with observer motion; forgetting wavelength vs frequency relationship."],
            examinerNote: "A1 for (a); B2 for (b); B2 for (c); A2 for (d); A1 for (e).",
          },
        },
        {
          id: "mypp5-u2-dopp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An ambulance siren approaches you and then moves away. What happens to the pitch you hear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stays constant" },
              { id: "b", text: "It doubles" },
              { id: "c", text: "It rises as it approaches and falls as it recedes" },
              { id: "d", text: "It falls then rises" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Doppler effect", statement: "Approaching source → higher observed frequency; receding → lower." }],
            steps: [
              { reasoning: "Wavefronts bunch up ahead (higher f) and stretch behind (lower f).", working: "f'\\uparrow \\text{ then } \\downarrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** rises then falls",
            commonErrors: ["Thinking pitch stays constant — only the emitted frequency is constant."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp5-u2-dopp-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A siren emits 440 Hz. A stationary observer stands in still air (sound speed 340 m/s) while the siren moves towards them at 20 m/s. Using $f' = f \\times \\frac{v}{v - v_s}$, calculate the observed frequency.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 467, tolerance: 2, unit: "Hz" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Doppler (moving source)", statement: "$f' = f \\times \\frac{v}{v - v_s}$ for approaching source." }],
            steps: [
              { reasoning: "$f' = 440 \\times \\frac{340}{340 - 20} = 440 \\times \\frac{340}{320}$.", working: "440\\times\\frac{340}{320}", marks: 1, markCode: "M" },
              { reasoning: "$f' \\approx 467$ Hz.", working: "467\\ \\text{Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "467 Hz",
            commonErrors: ["Adding source speed to denominator instead of subtracting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-dopp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Astronomers observe that light from distant galaxies is shifted towards the red end of the spectrum. What does this indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The galaxies are moving away from us (receding)" },
              { id: "b", text: "The galaxies are approaching us" },
              { id: "c", text: "The light is being absorbed" },
              { id: "d", text: "The galaxies are stationary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Redshift", statement: "Receding source → wavelength stretched → redshift." }],
            steps: [
              { reasoning: "Lower observed frequency/longer wavelength → light shifts to red.", working: "\\lambda\\uparrow \\Rightarrow \\text{red}", marks: 1, markCode: "M" },
              { reasoning: "Receding galaxies produce redshift.", working: "\\text{receding}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** receding",
            commonErrors: ["Confusing redshift with blueshift direction."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-dopp-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A source emitting 400 Hz moves away from a stationary observer at 30 m/s in air (sound speed 340 m/s). Using $f' = f \\times \\frac{v}{v + v_s}$, calculate the observed frequency.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 366, tolerance: 2, unit: "Hz" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Doppler (receding)", statement: "$f' = f \\times \\frac{v}{v + v_s}$" }],
            steps: [
              { reasoning: "$f' = 400 \\times \\frac{340}{340 + 30} = 400 \\times \\frac{340}{370}$.", working: "400\\times\\frac{340}{370}", marks: 1, markCode: "M" },
              { reasoning: "$f' \\approx 367$ Hz (accept 366–368).", working: "366.7\\ \\text{Hz}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx 367\\ \\text{Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "367 Hz",
            commonErrors: ["Using minus sign for receding source."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-dopp-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For sound waves, how does the Doppler shift differ when the observer moves versus when the source moves?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is no difference" },
              { id: "b", text: "The formulas differ because the medium (air) is stationary; for light only relative motion matters" },
              { id: "c", text: "Moving observers cannot detect a shift" },
              { id: "d", text: "Both cases give exactly the same frequency shift formula" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Doppler", statement: "Sound: source and observer motion have different formulas since air is the medium; light: only relative velocity matters." }],
            steps: [
              { reasoning: "For sound, the stationary air medium makes source vs observer motion distinguishable.", working: "\\text{air is medium}", marks: 1, markCode: "M" },
              { reasoning: "For EM waves, only relative motion produces the shift.", working: "\\text{relative motion}", marks: 1, markCode: "M" },
              { reasoning: "Answer (c).", working: "(c)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** medium makes them differ for sound",
            commonErrors: ["Assuming identical formulas for sound source vs observer motion."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-dopp-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An observer moves towards a stationary 500 Hz source at 10 m/s through still air (sound speed 340 m/s). Using $f' = f \\times \\frac{v + v_o}{v}$, calculate the observed frequency.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 515, tolerance: 1, unit: "Hz" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Doppler (moving observer)", statement: "$f' = f \\times \\frac{v + v_o}{v}$ approaching." }],
            steps: [
              { reasoning: "$f' = 500 \\times \\frac{340 + 10}{340} = 500 \\times \\frac{350}{340}$.", working: "500\\times\\frac{350}{340}", marks: 1, markCode: "M" },
              { reasoning: "$f' \\approx 514.7$ Hz.", working: "514.7\\ \\text{Hz}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "515\\ \\text{Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "515 Hz",
            commonErrors: ["Using source-motion formula for observer motion."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-dopp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does an approaching sound source produce a higher pitch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wavefronts bunch up in front of the moving source, shortening wavelength and raising observed frequency" },
              { id: "b", text: "The amplitude increases" },
              { id: "c", text: "The source emits a higher frequency" },
              { id: "d", text: "The sound travels faster towards you" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Wavefront bunching", statement: "Moving source compresses wavefronts ahead → shorter λ → higher f." }],
            steps: [
              { reasoning: "Bunched wavefronts arrive more frequently.", working: "\\lambda\\downarrow \\Rightarrow f\\uparrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** wavefronts bunch up",
            commonErrors: ["Thinking the emitted frequency itself changes."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp5-u2-dopp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 440 Hz tuning fork is heard by an observer moving towards it at 20 m/s in still air (sound speed 340 m/s). Using $f' = f(v+v_o)/v$, calculate the observed frequency.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 466, tolerance: 1, unit: "Hz" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Doppler", statement: "$f' = f \\times \\frac{v+v_o}{v}$" }],
            steps: [
              { reasoning: "$f' = 440 \\times \\frac{360}{340} \\approx 466$ Hz.", working: "440\\times\\frac{360}{340}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "466 Hz",
            commonErrors: ["Sign error — observer approaching adds to numerator."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-dopp-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a practical application of the Doppler effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storing data" },
              { id: "b", text: "Generating electricity" },
              { id: "c", text: "Measuring blood flow with ultrasound" },
              { id: "d", text: "Magnifying images" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Applications", statement: "Doppler ultrasound, radar speed guns, weather radar, astronomical redshift." }],
            steps: [
              { reasoning: "Frequency shift of echo from moving blood cells gives flow speed.", working: "\\text{ultrasound}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** ultrasound blood-flow measurement",
            commonErrors: ["Not recognising Doppler in medical imaging."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp5-u2-dopp-q14",
          difficulty: "core",
          totalMarks: 7,
          stem: "A police radar gun emits microwaves at a known frequency and detects the frequency of the reflected wave from a moving car.",
          parts: [
            { label: "a", prompt: "Explain why the reflected frequency differs from the emitted frequency.", marks: 2 },
            { label: "b", prompt: "State what happens to the frequency shift as the car's speed increases.", marks: 1 },
            { label: "c", prompt: "Describe the independent, dependent and controlled variables in a school investigation of the Doppler effect using a moving sound source.", marks: 2 },
            { label: "d", prompt: "Explain how astronomers use redshift to measure how fast a galaxy is moving away.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Doppler", statement: "Moving reflector/source shifts frequency; shift ∝ speed." },
              { kind: "context", name: "Redshift", statement: "Larger redshift → faster recession." },
            ],
            steps: [
              { part: "a", reasoning: "The moving car acts as a moving reflector; wavefronts are compressed ahead of it, so the echo returns at higher frequency.", working: "f_{echo}>f_{emit}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The car 'sees' a shifted frequency and re-emits it, doubling the effect.", working: "\\text{double shift}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Frequency shift increases with car speed.", working: "\\Delta f \\propto v", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Independent = source speed/direction; dependent = observed frequency; controlled = emitted frequency, distance, medium, observer position.", working: "\\text{variables}", marks: 2, markCode: "B" },
              { part: "d", reasoning: "Measure spectral lines and compare with laboratory wavelengths; larger shift = faster recession (Hubble's law).", working: "\\Delta\\lambda \\propto v", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) moving reflector shifts echo (b) shift ∝ speed (c) speed→frequency (d) redshift ∝ recession speed",
            commonErrors: ["Thinking radar measures speed directly — it measures frequency shift."],
            examinerNote: "M1 A1 for (a); B1 for (b); B2 for (c); A2 for (d).",
          },
        },
        {
          id: "mypp5-u2-dopp-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Light from a star shows a blueshift. What does this tell astronomers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The star is stationary" },
              { id: "b", text: "The star is moving away from us" },
              { id: "c", text: "The star is moving towards us" },
              { id: "d", text: "The star is very hot" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Blueshift", statement: "Approaching source → wavelength shortened → blueshift." }],
            steps: [
              { reasoning: "Blueshift = shorter wavelength = approaching.", working: "\\lambda\\downarrow \\Rightarrow \\text{blue}", marks: 1, markCode: "M" },
              { reasoning: "Answer (b).", working: "(b)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** moving towards us",
            commonErrors: ["Confusing blueshift with redshift."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-dopp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An ambulance siren emits 600 Hz. The speed of sound is 340 m/s and the ambulance moves at 30 m/s relative to a stationary observer.",
          parts: [
            { label: "a", prompt: "Calculate the observed frequency as the ambulance approaches.", marks: 1 },
            { label: "b", prompt: "Calculate the observed frequency as it recedes.", marks: 1 },
            { label: "c", prompt: "Calculate the wavelength of the sound in front of the moving ambulance.", marks: 1 },
            { label: "d", prompt: "Calculate the wavelength of the sound behind the ambulance.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 658, tolerance: 2, unit: "Hz" },
              { label: "b", answer: 551, tolerance: 2, unit: "Hz" },
              { label: "c", answer: 0.517, tolerance: 0.002, unit: "m" },
              { label: "d", answer: 0.617, tolerance: 0.002, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Doppler", statement: "$f' = f\\frac{v}{v \\mp v_s}$; $\\lambda' = \\frac{v \\mp v_s}{f}$" },
            ],
            steps: [
              { part: "a", reasoning: "$f' = 600 \\times \\frac{340}{340-30} = \\frac{600 \\times 340}{310} \\approx 658$ Hz.", working: "658\\ \\text{Hz}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$f' = 600 \\times \\frac{340}{340+30} = \\frac{600 \\times 340}{370} \\approx 551$ Hz.", working: "551\\ \\text{Hz}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\lambda_{front} = \\frac{340-30}{600} = \\frac{310}{600} \\approx 0.517$ m.", working: "0.517\\ \\text{m}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$\\lambda_{back} = \\frac{340+30}{600} = \\frac{370}{600} \\approx 0.617$ m.", working: "0.617\\ \\text{m}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 658 Hz (b) 551 Hz (c) 0.517 m (d) 0.617 m",
            commonErrors: ["Swapping front/back wavelength signs; forgetting speed is relative to medium."],
            examinerNote: "M1 A1 for each part.",
          },
        },
      ],
    },
  ],
};
