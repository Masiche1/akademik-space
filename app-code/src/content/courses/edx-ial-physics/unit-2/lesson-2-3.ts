import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edialphys-u2-lesson-2-3",
  code: "2-3",
  title: "Geometric Optics",
  goal: "I CAN describe reflection, refraction at surfaces and image formation by lenses and mirrors.",
  standards: ["P2 Waves and optics", "Geometric optics"],
  vocabulary: [
    { term: "Focal length (f)", definition: "Distance from lens/mirror to focal point." },
    { term: "Principal axis", definition: "Line through optical centre of lens or centre of curvature of mirror." },
    { term: "Real / virtual image", definition: "Light actually converges / appears to diverge." },
    { term: "Magnification (m)", definition: "Image height/object height = image distance/object distance." },
  ],
  concepts: [
    {
      id: "edialphys-u2-lenses",
      title: "Lenses and image formation",
      skill: "Apply the thin lens equation and describe image types for converging/diverging lenses.",
      lesson: {
        sections: [
          {
            heading: "Converging (convex) lens",
            body: "Parallel rays converge at focal point F on far side. Object beyond 2F → real, inverted, diminished image between F and 2F. Object between F and 2F → real, inverted, magnified beyond 2F. Object inside F → virtual, upright, magnified on same side (magnifying glass).",
          },
          {
            heading: "Diverging (concave) lens",
            body: "Parallel rays diverge as if from focal point on near side. Always forms virtual, upright, diminished image regardless of object position.",
          },
          {
            heading: "Thin lens equation",
            body: "1/f = 1/u + 1/v (real-is-positive convention: u negative for object left of lens in some conventions; use consistent signs). Magnification m = v/u = hᵢ/hₒ. Power P = 1/f (dioptres).",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "1/f = 1/u + 1/v" },
          { name: "Key formula", statement: "m = v/u" },
          { name: "Key formula", statement: "P = 1/f" },
        ],
        workedExample: {
          problem: "A converging lens f = 10 cm, object at u = 30 cm. Find image position.",
          solution: "1/v = 1/f − 1/u = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 → v = 15 cm (real image, beyond F).",
        },
      },
      questions: [
        {
          id: "edialphys-lens-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A converging lens always produces which image for a distant object?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Virtual, inverted" },
              { id: "b", text: "Real, upright" },
              { id: "c", text: "Real, inverted" },
              { id: "d", text: "Virtual, upright" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Converging lens", statement: "Distant object → real inverted image." }],
            steps: [{ reasoning: "Rays converge at focal plane.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Real, inverted",
          },
        },
        {
          id: "edialphys-lens-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An object is placed inside the focal length of a converging lens. Describe the image.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Lens", statement: "u < f → virtual magnified image." }],
            steps: [
              { reasoning: "Image is virtual.", marks: 1, markCode: "M" },
              { reasoning: "Upright and magnified.", marks: 1, markCode: "M" },
              { reasoning: "On same side as object (magnifying glass).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Virtual, upright, magnified (same side)",
            commonErrors: ["Saying real image."],
          },
        },
        {
          id: "edialphys-lens-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate the image distance for f = 15 cm, u = 45 cm.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 22.5, tolerance: 0.1, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "method", name: "Thin lens", statement: "1/f = 1/u + 1/v." }],
            steps: [
              { reasoning: "1/v = 1/15 − 1/45 = 3/45 − 1/45 = 2/45.", marks: 1, markCode: "M" },
              { reasoning: "v = 45/2 = 22.5 cm.", marks: 1, markCode: "M" },
              { reasoning: "Real image beyond F.", marks: 1, markCode: "A" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "22.5 cm",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "edialphys-lens-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe image formation by a converging lens for different object positions.",
          parts: [
            { label: "a", prompt: "Object beyond 2F.", marks: 3 },
            { label: "b", prompt: "Object between F and 2F.", marks: 3 },
            { label: "c", prompt: "Object inside F.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Lens images", statement: "Position determines image type." }],
            steps: [
              { part: "a", reasoning: "Real, inverted, diminished image between F and 2F.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Use two principal rays (parallel→F, through centre→straight).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Example: camera.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Real, inverted, magnified image beyond 2F.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rays converge after lens.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example: projector.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Virtual, upright, magnified image same side as object.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rays diverge after lens; extensions meet.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cannot be projected on screen.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Example: magnifying glass.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "u>2F: small real; F<u<2F: large real; u<f: virtual magnified",
            commonErrors: ["Saying all converging lens images are real."],
          },
        },
      ],
    },
    {
      id: "edialphys-u2-mirrors",
      title: "Mirrors and reflection",
      skill: "Describe image formation by plane, concave and convex mirrors.",
      lesson: {
        sections: [
          {
            heading: "Plane mirror",
            body: "Image: virtual, upright, same size, same distance behind mirror as object in front. Lateral inversion only. Used for full-length mirrors, periscopes.",
          },
          {
            heading: "Concave (converging) mirror",
            body: "Curved inward. Parallel rays reflect through focal point. Object beyond C → real inverted diminished between F and C. Object between F and C → real inverted magnified beyond C. Object inside F → virtual upright magnified (shaving mirror).",
          },
          {
            heading: "Convex (diverging) mirror",
            body: "Curved outward. Parallel rays diverge as if from focal point behind. Always virtual, upright, diminished — wide field of view. Used for car wing mirrors, security.",
          },
        ],
        keyFormulas: [
          { name: "Mirror equation", statement: "1/f = 1/u + 1/v" },
          { name: "Key formula", statement: "m = −v/u" },
        ],
        workedExample: {
          problem: "Why do convex mirrors show a wider field of view?",
          solution: "Diverging rays make objects appear smaller and farther → more of the scene fits in the reflected image.",
        },
      },
      questions: [
        {
          id: "edialphys-mirror-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A plane mirror produces an image that is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Real, inverted" },
              { id: "b", text: "Real, upright" },
              { id: "c", text: "Virtual, upright, same size" },
              { id: "d", text: "Virtual, inverted" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Plane mirror", statement: "Virtual upright same size." }],
            steps: [{ reasoning: "Image behind mirror, same distance.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Virtual, upright, same size",
          },
        },
        {
          id: "edialphys-mirror-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the image formed by a convex mirror.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Convex mirror", statement: "Always virtual, upright, diminished." }],
            steps: [
              { reasoning: "Image is virtual (behind mirror).", marks: 1, markCode: "M" },
              { reasoning: "Upright and diminished.", marks: 1, markCode: "M" },
              { reasoning: "Wide field of view — car wing mirrors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Virtual, upright, diminished; wide view",
            commonErrors: ["Saying convex mirrors give magnified images."],
          },
        },
        {
          id: "edialphys-mirror-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a concave mirror is used in a shaving mirror.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Concave mirror", statement: "u < f → virtual magnified upright." }],
            steps: [
              { reasoning: "Face placed inside focal length (u < f).", marks: 1, markCode: "M" },
              { reasoning: "Image formed behind mirror: virtual, upright, magnified.", marks: 1, markCode: "M" },
              { reasoning: "Larger image makes shaving easier.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "u<f → virtual magnified upright image",
            commonErrors: ["Saying image is real."],
          },
        },
        {
          id: "edialphys-mirror-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare concave and convex mirrors.",
          parts: [
            { label: "a", prompt: "Shape and effect on parallel rays.", marks: 3 },
            { label: "b", prompt: "Image properties.", marks: 4 },
            { label: "c", prompt: "Two uses of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Concave vs convex", statement: "Converging vs diverging." }],
            steps: [
              { part: "a", reasoning: "Concave: curves inward; converges parallel rays to real focus.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Convex: curves outward; diverges rays from virtual focus.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Different curvature direction.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Concave: can produce real (inverted) or virtual (upright) images depending on u.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convex: always virtual, upright, diminished.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Concave used for magnification/telescopes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convex gives wide field of view.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Concave: shaving mirror, telescope primary, headlights.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convex: car wing mirror, security mirror, traffic mirror.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Concave: converging, variable image; convex: diverging, always small upright",
            commonErrors: ["Reversing uses."],
          },
        },
      ],
    },
  ],
};
