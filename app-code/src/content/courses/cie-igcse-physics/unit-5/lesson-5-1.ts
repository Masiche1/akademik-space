import type { Lesson } from "../../../types.ts";

export const lessonp51: Lesson = {
  id: "ciep-u5-lesson-5-1",
  code: "5-1",
  title: "Light: Reflection and Refraction",
  goal: "I CAN explain reflection, refraction, lenses and mirrors using ray diagrams.",
  standards: ["0655 5.1", "0655 5.2"],
  vocabulary: [
    { term: "Reflection", definition: "Light bouncing off a surface; i = r." },
    { term: "Refraction", definition: "Bending of light entering different medium (speed change)." },
    { term: "Refractive index", definition: "n = sin i / sin r; speed of light in medium." },
    { term: "Critical angle", definition: "Angle beyond which light totally internally reflects." },
    { term: "Total internal reflection", definition: "All light reflected when i > critical angle." },
    { term: "Convex lens", definition: "Converging lens — thicker in middle." },
    { term: "Concave lens", definition: "Diverging lens — thinner in middle." },
    { term: "Focal length", definition: "Distance from lens/mirror to focal point." },
  ],
  concepts: [
    {
      id: "ciep-u5-reflection-refraction",
      title: "Reflection and refraction of light",
      skill: "Apply laws of reflection and refraction, explain total internal reflection.",
      lesson: {
        sections: [
          {
            heading: "Reflection",
            body: "Law of reflection: **angle of incidence = angle of reflection** (from normal). Plane mirror: virtual, upright, same size image.",
          },
          {
            heading: "Refraction",
            body: "Light slows in denser medium → bends toward normal entering, away leaving. **Snell's law**: sin i / sin r = n (refractive index). n = c/v.",
          },
          {
            heading: "Total internal reflection",
            body: "When light goes dense→less dense and i > critical angle → all reflected, none refracted. Critical angle: sin c = 1/n. Uses: optical fibres, diamonds, periscopes.",
          },
        ],
        keyFormulas: [
          { name: "Snell's law", statement: "$\\dfrac{\\sin i}{\\sin r} = n$" },
          { name: "Critical angle", statement: "$\\sin c = \\dfrac{1}{n}$" },
        ],
        workedExample: {
          problem: "Light enters glass (n=1.5) at 30°. Find refracted angle if sin r = sin 30/1.5.",
          solution: "sin r = 0.5/1.5 = 0.333 → r ≈ 19.5° — bends toward normal.",
        },
      },
      questions: [
        {
          id: "ciep-u5-reflection-refraction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the law of reflection?",
          response: { type: "mcq", choices: [
            { id: "a", text: "i = r" }, { id: "b", text: "i > r" }, { id: "c", text: "i < r" }, { id: "d", text: "i + r = 90°" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Reflection", statement: "i = r." }],
            steps: [{ reasoning: "Recall.", working: "i = r", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** i = r",
            commonErrors: ["Angles measured from surface."],
          },
        },
        {
          id: "ciep-u5-reflection-refraction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State what happens to light entering a denser medium.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Refraction", statement: "Slows down, bends toward normal." }],
            steps: [
              { reasoning: "Speed decreases.", marks: 1, markCode: "M" },
              { reasoning: "Bends toward normal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light slows down and bends toward the normal.",
            commonErrors: ["Bends away — that's exiting to less dense."],
          },
        },
        {
          id: "ciep-u5-reflection-refraction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain total internal reflection and give one use.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "TIR", statement: "Dense→less dense, i>critical → all reflected." }],
            steps: [
              { reasoning: "Conditions: dense to less dense.", marks: 1, markCode: "M" },
              { reasoning: "i > critical angle.", marks: 1, markCode: "M" },
              { reasoning: "All light reflected.", marks: 1, markCode: "M" },
              { reasoning: "Use: optical fibres/diamonds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "When light travels from denser to less dense medium at angle > critical angle, all light reflects internally — used in optical fibres and diamonds.",
            commonErrors: ["Not specifying direction of travel."],
          },
        },
        {
          id: "ciep-u5-reflection-refraction-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain refraction using the particle/wave model of light.",
          parts: [
            { label: "a", prompt: "State what happens to light speed in denser medium.", marks: 2 },
            { label: "b", prompt: "Explain why light bends toward normal entering glass.", marks: 4 },
            { label: "c", prompt: "State what happens when light exits glass.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Refraction", statement: "Speed change → bend; toward normal entering, away exiting." }],
            steps: [
              { part: "a", reasoning: "Slows in denser medium.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "One side of wavefront slows first.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Wavefront turns → bends.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Toward normal entering.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Speeds up exiting.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Bends away from normal.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) slows (b) wavefront turns toward normal (c) speeds up, away from normal",
            commonErrors: ["In (b) saying 'light attracts to glass' — it's wavefront bending."],
          },
        },
      ],
    },
    {
      id: "ciep-u5-lenses",
      title: "Lenses and image formation",
      skill: "Describe image formation by convex and concave lenses.",
      lesson: {
        sections: [
          {
            heading: "Convex (converging) lens",
            body: "Object beyond F → real, inverted image (smaller if far, larger if near).\nObject at F → no image (rays parallel).\nObject inside F → virtual, upright, magnified image (magnifying glass).",
          },
          {
            heading: "Concave (diverging) lens",
            body: "Always forms **virtual, upright, diminished** image regardless of object position.",
          },
          {
            heading: "Ray rules",
            body: "1. Ray parallel to axis → through far focal point (convex) / appears from near F (concave).\n2. Ray through optical centre → straight through.\n3. Ray through near F → emerges parallel (convex).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What type of image does a convex lens form when object is inside focal length?",
          solution: "Virtual, upright, magnified — used in magnifying glasses.",
        },
      },
      questions: [
        {
          id: "ciep-u5-lenses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of lens is a magnifying glass?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Concave" }, { id: "b", text: "Convex" }, { id: "c", text: "Plane" }, { id: "d", text: "Prism" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Magnifying glass", statement: "Convex lens, object inside F." }],
            steps: [{ reasoning: "Recall.", working: "\\text{convex}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Convex",
            commonErrors: ["Concave always diminishes."],
          },
        },
        {
          id: "ciep-u5-lenses-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the image formed by a concave lens.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Concave lens", statement: "Virtual, upright, diminished." }],
            steps: [
              { reasoning: "Type.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Virtual, upright and diminished image.",
            commonErrors: ["Saying real/inverted — concave always virtual."],
          },
        },
        {
          id: "ciep-u5-lenses-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a convex lens can produce both real and virtual images.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Convex lens", statement: "Real when rays converge; virtual when diverge." }],
            steps: [
              { reasoning: "Object beyond F → rays converge → real.", marks: 1, markCode: "M" },
              { reasoning: "Object inside F → rays diverge → virtual.", marks: 1, markCode: "M" },
              { reasoning: "Depends on object distance.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "When object is beyond focal point, refracted rays converge forming real image; when inside F, rays diverge appearing to come from virtual image.",
            commonErrors: ["Not linking to object position."],
          },
        },
        {
          id: "ciep-u5-lenses-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe image formation by a convex lens for an object beyond 2F.",
          parts: [
            { label: "a", prompt: "State the image properties.", marks: 3 },
            { label: "b", prompt: "Describe the ray diagram.", marks: 3 },
            { label: "c", prompt: "Explain a practical use.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Convex lens", statement: "Beyond 2F → real, inverted, diminished." }],
            steps: [
              { part: "a", reasoning: "Real.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Inverted.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Diminished.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ray parallel → through far F.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ray through centre → straight.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rays cross at image point.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Camera/eye focusing.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Real image on sensor/retina.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) real,inverted,diminished (b) 2 rays cross (c) camera/eye",
            commonErrors: ["In (a) saying magnified — beyond 2F is diminished."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u5-light-notes",
      title: "Light — revision notes",
      summary: "i=r, Snell's law, TIR, convex/concave lens images.",
      sections: [
        {
          heading: "Key facts",
          body: "Reflection: i=r. Refraction: sin i/sin r = n; slows in denser → toward normal. TIR: dense→less dense, i>critical. Convex: real if beyond F, virtual if inside. Concave: always virtual/upright/diminished.",
        },
        {
          heading: "Exam technique",
          body: "- Convex inside F = magnifying glass (virtual).\n- Concave always virtual — never real.",
        },
      ],
    },
  ],
};
