import type { Lesson } from "../../../types.ts";

export const lessonp53: Lesson = {
  id: "olphys-u5-lesson-5-3",
  code: "5-3",
  title: "The Human Eye",
  goal: "I CAN describe eye structure, image formation and vision defects.",
  standards: ["5054 5.3"],
  vocabulary: [
    { term: "Cornea", definition: "Transparent front — first refraction." },
    { term: "Iris", definition: "Coloured ring controlling pupil size." },
    { term: "Pupil", definition: "Hole letting light into eye — adjusts size." },
    { term: "Lens", definition: "Changes shape to focus (accommodation)." },
    { term: "Retina", definition: "Light-sensitive layer at back." },
    { term: "Optic nerve", definition: "Carries signals to brain." },
    { term: "Fovea", definition: "Central retina — sharpest vision." },
    { term: "Accommodation", definition: "Lens shape change for near/far focus." },
  ],
  concepts: [
    {
      id: "olphys-u5-eye-structure",
      title: "Eye structure and function",
      skill: "Describe eye parts and image formation.",
      lesson: {
        sections: [
          {
            heading: "Eye parts",
            body: "Light path: cornea → pupil → lens → retina → optic nerve → brain.\n\n- Cornea: fixed refraction\n- Iris/pupil: controls light amount\n- Lens: variable focus (accommodation)\n- Retina: rods/cones detect light\n- Optic nerve: to brain",
          },
          {
            heading: "Accommodation",
            body: "Ciliary muscles change lens shape: near → thicker (more converging); far → thinner.\n\nPupil also adjusts: bright → small; dim → large.",
          },
          {
            heading: "Image formation",
            body: "Real, inverted, diminished image on retina. Brain processes and interprets as upright — we 'see' correctly despite inversion.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does image on retina appear upside down?",
          solution: "Lens forms real inverted image on retina; brain processes it as upright.",
        },
      },
      questions: [
        {
          id: "olphys-u5-eye-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What controls the amount of light entering the eye?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lens" }, { id: "b", text: "Iris/pupil" }, { id: "c", text: "Cornea" }, { id: "d", text: "Retina" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pupil", statement: "Controls light entry." }],
            steps: [{ reasoning: "Recall.", working: "\\text{iris/pupil}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Iris/pupil",
            commonErrors: ["Confusing with lens (focus)."],
          },
        },
        {
          id: "olphys-u5-eye-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What type of image forms on the retina?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Retina", statement: "Real, inverted, diminished." }],
            steps: [
              { reasoning: "Real inverted diminished.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A real, inverted, diminished image.",
            commonErrors: ["Saying virtual/upright."],
          },
        },
        {
          id: "olphys-u5-eye-structure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain accommodation — how does the eye focus on near vs far objects?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Accommodation", statement: "Ciliary muscles change lens shape." }],
            steps: [
              { reasoning: "Ciliary muscles contract/relax.", marks: 1, markCode: "M" },
              { reasoning: "Near: lens thicker.", marks: 1, markCode: "M" },
              { reasoning: "Far: lens thinner.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ciliary muscles change lens shape: contract for near (thicker, more converging), relax for far (thinner).",
            commonErrors: ["Reversed near/far lens states."],
          },
        },
        {
          id: "olphys-u5-eye-structure-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe eye structure and image formation.",
          parts: [
            { label: "a", prompt: "Trace light path through eye.", marks: 3 },
            { label: "b", prompt: "Explain accommodation.", marks: 3 },
            { label: "c", prompt: "Describe image on retina.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Eye", statement: "Cornea→pupil→lens→retina; accommodation; real image." }],
            steps: [
              { part: "a", reasoning: "Cornea first refraction.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Pupil controls light.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lens focuses to retina.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ciliary muscles.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lens shape changes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Near/far difference.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Real inverted diminished.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "On retina.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Brain interprets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cornea→pupil→lens→retina (b) ciliary muscles/lens shape (c) real inverted on retina",
            commonErrors: ["In (c) saying upright image."],
          },
        },
      ],
    },
    {
      id: "olphys-u5-vision-defects",
      title: "Vision defects and correction",
      skill: "Describe long/short sightedness and lens correction.",
      lesson: {
        sections: [
          {
            heading: "Short sightedness (myopia)",
            body: "Eye too long or lens too powerful — image forms **before retina**.\n\nSees near clearly, distant blurred.\n\n**Correction**: concave (diverging) lens spreads rays.",
          },
          {
            heading: "Long sightedness (hypermetropia)",
            body: "Eye too short or lens too weak — image would form **behind retina**.\n\nSees distant clearly, near blurred.\n\n**Correction**: convex (converging) lens focuses earlier.",
          },
          {
            heading: "Presbyopia",
            body: "Ageing — lens loses flexibility, can't accommodate for near. Reading glasses (convex) correct it.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A person can't see distant objects clearly. What defect and correction?",
          solution: "Short sightedness — image before retina. Corrected with concave lens.",
        },
      },
      questions: [
        {
          id: "olphys-u5-vision-defects-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does image form in short sightedness?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Behind retina" }, { id: "b", text: "Before retina" }, { id: "c", text: "On retina" }, { id: "d", text: "In lens" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Myopia", statement: "Image before retina." }],
            steps: [{ reasoning: "Recall.", working: "\\text{before retina}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Before retina",
            commonErrors: ["Confusing with long sight."],
          },
        },
        {
          id: "olphys-u5-vision-defects-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which lens corrects short sightedness?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Correction", statement: "Concave for myopia." }],
            steps: [
              { reasoning: "Concave lens.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A concave (diverging) lens.",
            commonErrors: ["Using convex — that's for long sight."],
          },
        },
        {
          id: "olphys-u5-vision-defects-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a concave lens corrects short sightedness.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Correction", statement: "Concave diverges rays before eye." }],
            steps: [
              { reasoning: "Concave spreads rays.", marks: 1, markCode: "M" },
              { reasoning: "Image moves back to retina.", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
              { reasoning: "Clear distant vision.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The concave lens diverges light rays before they enter the eye, reducing convergence so the image forms on the retina instead of before it.",
            commonErrors: ["Not explaining mechanism."],
          },
        },
        {
          id: "olphys-u5-vision-defects-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare short and long sightedness.",
          parts: [
            { label: "a", prompt: "Image position for each.", marks: 3 },
            { label: "b", prompt: "What each person sees clearly.", marks: 3 },
            { label: "c", prompt: "Lens correction for each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Vision", statement: "Myopia: before retina+concave; hyperopia: behind+convex." }],
            steps: [
              { part: "a", reasoning: "Short: before retina.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Long: behind retina.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Short: near clear.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Long: far clear.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Short: concave.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Long: convex.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) before vs behind (b) near vs far clear (c) concave vs convex",
            commonErrors: ["Swapping corrections."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u5-eye-notes",
      title: "The human eye and vision defects — revision notes",
      summary: "Eye structure, accommodation, myopia/hyperopia correction.",
      sections: [
        {
          heading: "Key facts",
          body: "Light: cornea→pupil→lens→retina. Accommodation: ciliary muscles. Image: real inverted. Myopia=before retina+concave. Hyperopia=behind+convex.",
        },
        {
          heading: "Exam technique",
          body: "- Iris controls light, lens controls focus.\n- Concave diverges (myopia); convex converges (hyperopia).\n- Image always inverted on retina.",
        },
      ],
    },
  ],
};
