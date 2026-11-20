import type { Lesson } from "../../../types.ts";

export const lessonp52: Lesson = {
  id: "olphys-u5-lesson-5-2",
  code: "5-2",
  title: "Reflection and Refraction",
  goal: "I CAN apply laws of reflection and refraction including Snell's law calculations.",
  standards: ["5054 5.2"],
  vocabulary: [
    { term: "Law of reflection", definition: "Angle of incidence = angle of reflection." },
    { term: "Normal", definition: "Line perpendicular to surface at point of incidence." },
    { term: "Refraction", definition: "Bending of light entering different medium." },
    { term: "Refractive index", definition: "n = sin i / sin r — measures bending." },
    { term: "Critical angle", definition: "Angle of incidence where refraction becomes 90°." },
    { term: "Total internal reflection", definition: "All light reflected when i > critical angle." },
    { term: "Optical fibre", definition: "Glass fibre using TIR to transmit light." },
    { term: "Snell's law", definition: "n₁ sin i = n₂ sin r." },
  ],
  concepts: [
    {
      id: "olphys-u5-optics-laws",
      title: "Reflection and refraction laws",
      skill: "Apply laws of reflection and refraction with Snell's law.",
      lesson: {
        sections: [
          {
            heading: "Reflection",
            body: "**Angle of incidence = angle of reflection** (measured from normal).\n\n- Incident ray, reflected ray, normal all in same plane\n- Flat mirror: image same size, upright, virtual",
          },
          {
            heading: "Refraction",
            body: "Light bends when entering different medium (speed changes).\n\n- Toward normal entering denser medium (slower)\n- Away from normal entering less dense (faster)\n- **Snell's law**: n₁ sin i = n₂ sin r\n- Refractive index n = c/v",
          },
          {
            heading: "Critical angle and TIR",
            body: "When light goes dense→less dense, angle increases. At critical angle r=90°.\n\nBeyond critical angle: **total internal reflection** — all light reflected.\n\nUses: optical fibres, diamonds, endoscopes.",
          },
        ],
        keyFormulas: [
          { name: "Snell's law", statement: "$n_1 \\sin i = n_2 \\sin r$" },
          { name: "Critical angle", statement: "$\\sin c = \\dfrac{1}{n}$" },
        ],
        workedExample: {
          problem: "Light enters glass (n=1.5) at 30°. Find refracted angle (air n=1).",
          solution: "1×sin30 = 1.5×sin r → sin r = 0.5/1.5 = 0.333 → r ≈ 19.5°.",
        },
      },
      questions: [
        {
          id: "olphys-u5-optics-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State the law of reflection.",
          response: { type: "mcq", choices: [
            { id: "a", text: "i = r" }, { id: "b", text: "i = 2r" }, { id: "c", text: "i + r = 90°" }, { id: "d", text: "i = r/2" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Reflection", statement: "i = r from normal." }],
            steps: [{ reasoning: "Recall.", working: "i = r", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** i = r",
            commonErrors: ["Measuring from surface not normal."],
          },
        },
        {
          id: "olphys-u5-optics-laws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Light enters glass at 40° and refracts at 25°. Is glass denser or less dense than air?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Refraction", statement: "Bends toward normal = denser." }],
            steps: [
              { reasoning: "r < i means toward normal.", marks: 1, markCode: "M" },
              { reasoning: "Denser medium.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glass is denser — light bends toward the normal when entering a denser medium.",
            commonErrors: ["Wrong direction interpretation."],
          },
        },
        {
          id: "olphys-u5-optics-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Light in air (n=1) enters water (n=1.33) at 50°. Calculate sin r using n₁sin i = n₂sin r.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Snell", statement: "n₁sin i = n₂sin r." }],
            steps: [
              { reasoning: "1×sin50 = 1.33×sin r.", marks: 1, markCode: "M" },
              { reasoning: "sin r = 0.766/1.33 = 0.576.", marks: 1, markCode: "M" },
              { reasoning: "r = sin⁻¹(0.576) ≈ 35.2°.", marks: 1, markCode: "A" },
              { reasoning: "Unit degrees.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "r ≈ 35°",
            commonErrors: ["Forgetting to use degrees for sin⁻¹."],
          },
        },
        {
          id: "olphys-u5-optics-laws-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain reflection, refraction and total internal reflection.",
          parts: [
            { label: "a", prompt: "State law of reflection.", marks: 2 },
            { label: "b", prompt: "Explain refraction direction.", marks: 3 },
            { label: "c", prompt: "Explain TIR and its use.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Optics", statement: "i=r; refraction toward normal dense; TIR>critical." }],
            steps: [
              { part: "a", reasoning: "i = r from normal.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bends entering different medium.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Toward normal if denser.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "i > critical angle.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "All light reflected.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Optical fibres.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) i=r (b) toward normal dense (c) TIR>critical, fibres",
            commonErrors: ["In (c) saying 'partial reflection'."],
          },
        },
      ],
    },
    {
      id: "olphys-u5-lens-images",
      title: "Lenses and image formation",
      skill: "Describe convex/concave lenses and image properties.",
      lesson: {
        sections: [
          {
            heading: "Lens types",
            body: "- **Convex (converging)**: thicker middle — converges rays, magnifies\n- **Concave (diverging)**: thinner middle — diverges rays, always virtual upright smaller image",
          },
          {
            heading: "Image formation",
            body: "Use ray diagram:\n1. Ray parallel to axis → through focal point (convex)\n2. Ray through centre → straight\n3. Image where rays cross (real) or appear to (virtual)",
          },
          {
            heading: "Magnification",
            body: "**m = image height / object height = image distance / object distance**\n\n- Real image: inverted, can be projected\n- Virtual image: upright, cannot project",
          },
        ],
        keyFormulas: [
          { name: "Magnification", statement: "$m = \\dfrac{h_i}{h_o} = \\dfrac{d_i}{d_o}$" },
        ],
        workedExample: {
          problem: "Object 2 cm tall, 10 cm from lens. Image 5 cm tall. Find magnification.",
          solution: "m = 5/2 = 2.5× magnification.",
        },
      },
      questions: [
        {
          id: "olphys-u5-lens-images-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which lens converges light rays?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Concave" }, { id: "b", text: "Convex" }, { id: "c", text: "Plano" }, { id: "d", text: "None" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Lens", statement: "Convex converges." }],
            steps: [{ reasoning: "Recall.", working: "\\text{convex converges}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Convex",
            commonErrors: ["Reversed lens types."],
          },
        },
        {
          id: "olphys-u5-lens-images-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What type of image does a concave lens always produce?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Concave", statement: "Virtual, upright, smaller." }],
            steps: [
              { reasoning: "Virtual upright smaller.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A virtual, upright, diminished (smaller) image.",
            commonErrors: ["Saying real/inverted."],
          },
        },
        {
          id: "olphys-u5-lens-images-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An object 3 cm tall produces image 9 cm tall. Calculate magnification.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnification", statement: "m = hi/ho." }],
            steps: [
              { reasoning: "m = 9/3.", marks: 1, markCode: "M" },
              { reasoning: "= 3.", marks: 1, markCode: "A" },
              { reasoning: "Magnified 3×.", marks: 1, markCode: "A" },
              { reasoning: "Correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "m = 3 (3× magnification)",
            commonErrors: ["Inverting ratio."],
          },
        },
        {
          id: "olphys-u5-lens-images-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare convex and concave lenses.",
          parts: [
            { label: "a", prompt: "Shape and effect on rays.", marks: 3 },
            { label: "b", prompt: "Image types produced.", marks: 3 },
            { label: "c", prompt: "Applications.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Lenses", statement: "Convex converges, concave diverges; different images." }],
            steps: [
              { part: "a", reasoning: "Convex thicker middle.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Concave thinner middle.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Converge/diverge.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convex: real/virtual.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Concave: virtual only.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convex: magnifying glass.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Concave: glasses for shortsighted.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) convex converges/concave diverges (b) convex real+virtual, concave virtual (c) applications",
            commonErrors: ["In (b) saying concave makes real image."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u5-reflection-notes",
      title: "Reflection, refraction and lenses — revision notes",
      summary: "i=r, Snell's law, TIR, convex/concave lenses.",
      sections: [
        {
          heading: "Key facts",
          body: "i=r reflection. Snell: n₁sin i=n₂sin r. TIR when i>critical. Convex converges; concave diverges.",
        },
        {
          heading: "Exam technique",
          body: "- Angles from NORMAL not surface.\n- Light bends toward normal entering denser.\n- Concave always virtual upright.",
        },
      ],
    },
  ],
};
