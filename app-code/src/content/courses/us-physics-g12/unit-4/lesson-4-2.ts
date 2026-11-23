import type { Lesson } from "../../../types.ts";

export const lesson142: Lesson = {
  id: "phys12-u4-lesson-4-2",
  code: "4-2",
  title: "Optical Instruments and Applications",
  goal: "I CAN explain how lenses and mirrors are used in cameras, telescopes, microscopes, and the human eye.",
  standards: ["HS-PS4-2", "HS-PS4-3"],
  vocabulary: [
    { term: "Camera", definition: "Device using a converging lens to form a real, inverted image on a sensor." },
    { term: "Telescope", definition: "Instrument using lenses/mirrors to gather light from distant objects; magnifies angular size." },
    { term: "Microscope", definition: "Instrument using two lenses to produce a large magnified virtual image." },
    { term: "Refracting telescope", definition: "Telescope using lenses (objective + eyepiece)." },
    { term: "Reflecting telescope", definition: "Telescope using mirrors (avoids chromatic aberration)." },
    { term: "Chromatic aberration", definition: "Color fringing from dispersion in lenses." },
    { term: "Accommodation", definition: "Eye's ability to change lens shape to focus on near/far objects." },
  ],
  concepts: [
    {
      id: "phys12-u4-optical-instruments",
      title: "Cameras, telescopes and microscopes",
      skill: "Explain image formation in optical instruments and compare their designs.",
      lesson: {
        sections: [
          {
            heading: "Camera",
            body: "A camera uses a converging lens to form a **real, inverted, diminished** image on the sensor/film. The lens focuses light from the scene; the shutter controls exposure time; the aperture controls light amount (f-number = focal length/aperture diameter).",
          },
          {
            heading: "Telescopes",
            body: "Telescopes gather light from distant objects. **Refracting** telescopes use lenses (objective + eyepiece) but suffer chromatic aberration. **Reflecting** telescopes use mirrors — larger apertures possible, no chromatic aberration. Magnification = focal length ratio.",
          },
          {
            heading: "Microscopes",
            body: "A compound microscope uses two lenses: objective forms a real, magnified image; eyepiece magnifies that image into a large virtual image for the eye. Total magnification = objective magnification × eyepiece magnification.",
          },
        ],
        keyFormulas: [
          { name: "Telescope magnification", statement: "$M = f_o/f_e$" },
          { name: "Microscope magnification", statement: "$M = M_{obj} \\times M_{eye}$" },
          { name: "f-number", statement: "$N = f/D$" },
        ],
        workedExample: {
          problem: "A telescope has objective focal length 1000 mm and eyepiece 10 mm. What is magnification?",
          solution: "$M = f_o/f_e = 1000/10 = 100\\times$.",
        },
      },
      questions: [
        {
          id: "phys12-u4-optical-instruments-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of image does a camera lens form on the sensor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Real, upright" },
              { id: "b", text: "Real, inverted" },
              { id: "c", text: "Virtual, upright" },
              { id: "d", text: "Virtual, inverted" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Camera optics", statement: "Camera forms real, inverted image on sensor." }],
            steps: [{ reasoning: "Converging lens forms real, inverted image when object is beyond focal length.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Real, inverted",
            commonErrors: ["Thinking camera image is upright."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u4-optical-instruments-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A telescope has objective focal length 2000 mm and eyepiece 20 mm. What is the magnification?",
          response: { type: "numeric", parts: [{ label: "M", answer: 100, unit: "×" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Telescope magnification", statement: "$M = f_o/f_e$" }],
            steps: [
              { reasoning: "$M = 2000/20 = 100\\times$.", working: "M=2000/20=100", marks: 2, markCode: "M" },
              { reasoning: "Magnification = 100×.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100×",
            commonErrors: ["Inverting the ratio."],
            examinerNote: "M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u4-optical-instruments-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do modern large telescopes use mirrors instead of lenses?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflecting telescope", statement: "Mirrors avoid chromatic aberration and can be larger." },
              { kind: "principle", name: "Chromatic aberration", statement: "Lenses disperse light into colors." },
            ],
            steps: [
              { reasoning: "Lenses suffer chromatic aberration — different wavelengths focus at different points, blurring images.", marks: 1, markCode: "R" },
              { reasoning: "Mirrors reflect all wavelengths equally, eliminating chromatic aberration.", marks: 1, markCode: "B" },
              { reasoning: "Large lenses sag under their own weight and are hard to support; mirrors can be made thinner and supported from behind.", marks: 1, markCode: "B" },
              { reasoning: "Mirrors can be made much larger than practical lenses (e.g., 10 m+ mirrors exist).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No chromatic aberration + larger apertures possible with mirrors.",
            commonErrors: ["Only mentioning size, not aberration."],
            examinerNote: "R1, B2, A1.",
          },
        },
        {
          id: "phys12-u4-optical-instruments-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The human eye has a lens with adjustable focal length. The retina is 2.0 cm behind the lens.",
          parts: [
            { label: "a", prompt: "When viewing a distant object (effectively at infinity), what is the focal length?", marks: 2 },
            { label: "b", prompt: "When viewing an object 25 cm away, calculate the required focal length.", marks: 3 },
            { label: "c", prompt: "Explain how the eye changes focal length (accommodation).", marks: 2 },
            { label: "d", prompt: "What happens to the image on the retina when looking at near vs far objects?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Lens equation", statement: "$1/f = 1/d_o + 1/d_i$" },
              { kind: "principle", name: "Accommodation", statement: "Ciliary muscles change lens shape." },
            ],
            steps: [
              { reasoning: "For distant object, $d_o \\to \\infty$, so $1/d_o \\to 0$, giving $f = d_i = 2.0$ cm.", working: "f=2.0cm", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$1/f = 1/25 + 1/2.0 = 0.04 + 0.50 = 0.54$ cm⁻¹, so $f = 1/0.54 = 1.85$ cm.", working: "1/f=0.54, f=1.85", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Answer: f ≈ 1.85 cm.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Ciliary muscles contract/relax to change lens shape, altering focal length.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Contracting muscles make lens more curved (shorter f) for near vision; relaxing flattens for distance.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Image always forms on retina (real, inverted) but size changes: near objects produce larger images.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Brain interprets inverted image as upright; size constancy corrects perceived size.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Accommodation keeps image focused on retina regardless of distance.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) f = 2.0 cm (b) f ≈ 1.85 cm (c) ciliary muscles change lens curvature (d) image stays on retina, size varies.",
            commonErrors: ["Thinking focal length is fixed.", "Forgetting image is inverted on retina."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u4-vision",
      title: "Vision and color",
      skill: "Explain how the eye detects light, color vision, and common vision defects.",
      lesson: {
        sections: [
          {
            heading: "How we see",
            body: "Light enters the eye through the cornea and pupil, is focused by the lens onto the **retina**. The retina contains **rods** (low light, no color) and **cones** (bright light, color). Signals go to the brain via the optic nerve.",
          },
          {
            heading: "Color vision",
            body: "Three types of cones respond to short (blue), medium (green), and long (red) wavelengths. Combined signals produce all colors. Missing or defective cones cause color blindness — most commonly red-green deficiency.",
          },
          {
            heading: "Vision defects",
            body: `- **Myopia** (nearsightedness): image forms before retina; corrected with diverging lens
- **Hyperopia** (farsightedness): image forms behind retina; corrected with converging lens
- **Astigmatism**: cornea/lens not perfectly spherical; corrected with cylindrical lenses
- **Presbyopia**: age-related loss of accommodation; reading glasses`,
          },
        ],
        keyFormulas: [
          { name: "Myopia", statement: "Image before retina; diverging lens" },
          { name: "Hyperopia", statement: "Image behind retina; converging lens" },
        ],
        workedExample: {
          problem: "A nearsighted person has far point at 50 cm. What focal length lens corrects this?",
          solution: "Need virtual image at far point: $1/f = 1/d_o + 1/d_i$. For distant object $d_o \\to \\infty$, $d_i = -50$ cm (virtual, same side). $1/f = 0 + 1/(-50) = -1/50$, so $f = -50$ cm = -0.50 m = -2.0 diopters.",
        },
      },
      questions: [
        {
          id: "phys12-u4-vision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cells in the retina are responsible for color vision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rods" },
              { id: "b", text: "Cones" },
              { id: "c", text: "Both equally" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Retina", statement: "Cones detect color; rods detect low light." }],
            steps: [{ reasoning: "Cones are responsible for color vision in bright light.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Cones",
            commonErrors: ["Confusing rods and cones."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u4-vision-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What type of lens corrects nearsightedness (myopia)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Myopia correction", statement: "Diverging (concave) lens moves image back to retina." }],
            steps: [
              { reasoning: "Myopia: image forms before retina because eye is too powerful or eyeball too long.", marks: 1, markCode: "R" },
              { reasoning: "Diverging (concave) lens spreads rays, pushing image back to retina.", marks: 1, markCode: "B" },
              { reasoning: "Lens has negative focal length (negative diopters).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diverging (concave) lens with negative power.",
            commonErrors: ["Thinking converging lens corrects myopia."],
            examinerNote: "R1, B1, A1.",
          },
        },
        {
          id: "phys12-u4-vision-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A farsighted person has near point at 50 cm instead of 25 cm. What is the minimum power of reading glasses needed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Lens power", statement: "$P = 1/f$ in diopters" },
              { kind: "formula", name: "Lens equation", statement: "$1/f = 1/d_o + 1/d_i$" },
            ],
            steps: [
              { reasoning: "Need image at near point: object at 25 cm, image at 50 cm (virtual, same side): $1/f = 1/25 + 1/(-50) = 0.04 - 0.02 = 0.02$ cm⁻¹.", marks: 1, markCode: "M" },
              { reasoning: "$f = 1/0.02 = 50$ cm = 0.50 m.", marks: 1, markCode: "M" },
              { reasoning: "$P = 1/f = 1/0.50 = +2.0$ diopters.", working: "P=1/0.50=2.0", marks: 1, markCode: "M" },
              { reasoning: "Converging lens with power +2.0 D.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "+2.0 diopters (converging lens)",
            commonErrors: ["Using wrong sign for image distance.", "Forgetting to convert cm to m."],
            examinerNote: "M3 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u4-vision-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You are designing reading glasses for a presbyopic patient whose near point has receded to 40 cm.",
          parts: [
            { label: "a", prompt: "What lens power is needed to read at 25 cm?", marks: 4 },
            { label: "b", prompt: "If the patient wants to read at 30 cm instead, how does the required power change?", marks: 3 },
            { label: "c", prompt: "Explain why bifocal glasses have two different powers.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Lens power", statement: "$P = 1/f$" },
              { kind: "formula", name: "Lens equation", statement: "$1/f = 1/d_o + 1/d_i$" },
            ],
            steps: [
              { reasoning: "Object at 25 cm, image at 40 cm (virtual): $1/f = 1/25 - 1/40 = 0.04 - 0.025 = 0.015$ cm⁻¹.", working: "1/f=0.015", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$f = 1/0.015 = 66.7$ cm = 0.667 m.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "$P = 1/0.667 = +1.5$ diopters.", working: "P=1/0.667=1.5", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Object at 30 cm, image at 40 cm: $1/f = 1/30 - 1/40 = 0.0333 - 0.025 = 0.00833$ cm⁻¹.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "$f = 1/0.00833 = 120$ cm = 1.2 m.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "$P = 1/1.2 = +0.83$ diopters — less power needed for longer reading distance.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Bifocals have upper portion for distance (low/no power) and lower for reading (higher power) because presbyopia affects near vision more than distance.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Different focal lengths needed for different object distances.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Single lens cannot focus both near and far simultaneously without accommodation.", marks: 1, markCode: "R", part: "c" },
            ],
            finalAnswer: "(a) +1.5 D (b) +0.83 D (c) bifocals correct both distance and near vision.",
            commonErrors: ["Using wrong sign for virtual image.", "Forgetting unit conversion."],
            examinerNote: "4+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
