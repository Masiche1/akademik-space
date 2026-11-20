import type { Lesson } from "../../../types.ts";

export const lessonp73: Lesson = {
  id: "olphys-u7-lesson-7-3",
  code: "7-3",
  title: "Radiation Safety and Applications",
  goal: "I CAN describe radiation protection and medical/industrial applications.",
  standards: ["5054 7.3"],
  vocabulary: [
    { term: "Ionising radiation", definition: "Radiation energetic enough to remove electrons." },
    { term: "Background radiation", definition: "Natural radiation always present (~2-3 mSv/year)." },
    { term: "Dose equivalent", definition: "Measure of biological damage (sievert)." },
    { term: "Tracer", definition: "Radioactive isotope used to track processes." },
    { term: "Radiotherapy", definition: "Using radiation to treat cancer." },
    { term: "Half-life application", definition: "Choosing isotope based on decay rate." },
    { term: "Geiger counter", definition: "Detector measuring radiation intensity." },
    { term: "Shielding", definition: "Material absorbing radiation (lead, concrete)." },
  ],
  concepts: [
    {
      id: "olphys-u7-radiation-safety",
      title: "Radiation protection",
      skill: "Describe protection methods and background radiation.",
      lesson: {
        sections: [
          {
            heading: "Three protection rules",
            body: "1. **Time**: less exposure time = less dose\n2. **Distance**: further from source = less intensity (inverse square)\n3. **Shielding**: lead/concrete absorbs radiation",
          },
          {
            heading: "Background radiation",
            body: "Sources: rocks (radon), cosmic rays, food, medical procedures.\n\nNatural ~2-3 mSv/year — small compared to harmful doses.",
          },
          {
            heading: "Biological effects",
            body: "Ionising radiation damages DNA → mutations, cancer.\n\nHigh dose: immediate effects (burns, death). Low dose over time: increased cancer risk.",
          },
        ],
        keyFormulas: [
          { name: "Inverse square", statement: "$I \\propto \\dfrac{1}{d^2}$" },
        ],
        workedExample: {
          problem: "Doubling distance from source — effect on intensity?",
          solution: "Intensity drops to 1/4 (inverse square law).",
        },
      },
      questions: [
        {
          id: "olphys-u7-radiation-safety-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Name the three principles of radiation protection.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Time, distance, shielding" }, { id: "b", text: "Time, speed, heat" }, { id: "c", text: "Distance, mass, charge" }, { id: "d", text: "Shielding, colour, size" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Protection", statement: "Time/distance/shielding." }],
            steps: [{ reasoning: "Recall.", working: "\\text{TDS}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Time, distance, shielding",
            commonErrors: ["Missing one principle."],
          },
        },
        {
          id: "olphys-u7-radiation-safety-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is background radiation?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Background", statement: "Natural ambient radiation." }],
            steps: [
              { reasoning: "Natural radiation present.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Radiation from natural sources (rocks, cosmic rays, food) always present in environment.",
            commonErrors: ["Saying 'man-made only'."],
          },
        },
        {
          id: "olphys-u7-radiation-safety-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why distance reduces radiation dose.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Inverse square", statement: "I ∝ 1/d²." }],
            steps: [
              { reasoning: "Radiation spreads out.", marks: 1, markCode: "M" },
              { reasoning: "Intensity decreases with d².", marks: 1, markCode: "M" },
              { reasoning: "Less dose received.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Radiation intensity decreases with the square of distance (inverse square law) — doubling distance reduces intensity to one quarter.",
            commonErrors: ["Linear not squared relationship."],
          },
        },
        {
          id: "olphys-u7-radiation-safety-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe radiation protection and effects.",
          parts: [
            { label: "a", prompt: "Three protection methods.", marks: 3 },
            { label: "b", prompt: "Background radiation sources.", marks: 3 },
            { label: "c", prompt: "Biological effects.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Safety", statement: "TDS; background sources; DNA damage." }],
            steps: [
              { part: "a", reasoning: "Time/distance/shielding.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explain each.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rocks/cosmic/food.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Medical adds.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "DNA damage.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cancer risk.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) TDS (b) natural sources (c) DNA damage→cancer",
            commonErrors: ["In (b) omitting natural sources."],
          },
        },
      ],
    },
    {
      id: "olphys-u7-applications",
      title: "Medical and industrial uses",
      skill: "Describe radioisotope applications in medicine and industry.",
      lesson: {
        sections: [
          {
            heading: "Medical uses",
            body: "- **Diagnosis**: tracers (I-131 thyroid, Tc-99m organs)\n- **Treatment**: radiotherapy (gamma kills cancer cells)\n- **Sterilisation**: gamma kills bacteria on equipment",
          },
          {
            heading: "Industrial uses",
            body: "- **Thickness gauging**: beta attenuation\n- **Leak detection**: tracer gases\n- **Smoke detectors**: alpha ionises air\n- **Dating**: C-14 (archaeology), U-series (geology)",
          },
          {
            heading: "Choosing isotopes",
            body: "Half-life must suit application: medical tracers need short half-life (decay before harm); dating needs known long half-life.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is I-131 used for thyroid scans?",
          solution: "Thyroid concentrates iodine — tracer accumulates there for imaging; short half-life limits dose.",
        },
      },
      questions: [
        {
          id: "olphys-u7-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a radioactive tracer used for?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Killing cells" }, { id: "b", text: "Tracking body processes" }, { id: "c", text: "Dating rocks" }, { id: "d", text: "Detecting smoke" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Tracer", statement: "Tracks processes." }],
            steps: [{ reasoning: "Recall.", working: "\\text{tracking}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Tracking body processes",
            commonErrors: ["Confusing with therapy."],
          },
        },
        {
          id: "olphys-u7-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name one medical use of radioisotopes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Medical", statement: "Diagnosis/treatment." }],
            steps: [
              { reasoning: "Any valid use.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Medical imaging/diagnosis (tracers), radiotherapy for cancer, or sterilisation of equipment.",
            commonErrors: ["Only industrial uses."],
          },
        },
        {
          id: "olphys-u7-applications-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how gamma radiation is used in cancer treatment.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Radiotherapy", statement: "Gamma kills cancer cells." }],
            steps: [
              { reasoning: "Gamma highly penetrating.", marks: 1, markCode: "M" },
              { reasoning: "Damages cancer cell DNA.", marks: 1, markCode: "M" },
              { reasoning: "Healthy cells spared by targeting.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gamma rays penetrate to tumour and damage cancer cell DNA, preventing division — targeted to minimise damage to healthy tissue.",
            commonErrors: ["Saying 'kills all cells equally'."],
          },
        },
        {
          id: "olphys-u7-applications-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe applications of radioisotopes.",
          parts: [
            { label: "a", prompt: "Medical uses.", marks: 3 },
            { label: "b", prompt: "Industrial uses.", marks: 3 },
            { label: "c", prompt: "Why half-life matters.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Applications", statement: "Medical/industrial; half-life selection." }],
            steps: [
              { part: "a", reasoning: "Tracers/radiotherapy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sterilisation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gauging/dating.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Leak detection.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Match half-life to use.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Short for medicine.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Long for dating.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) diagnosis/treatment (b) gauging/dating (c) half-life selection",
            commonErrors: ["In (c) not linking to application."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u7-applications-notes",
      title: "Radiation safety and applications — revision notes",
      summary: "Protection TDS, background, medical/industrial uses.",
      sections: [
        {
          heading: "Key facts",
          body: "Protection: time/distance/shielding. Background: natural ~2-3mSv/yr. Uses: tracers, radiotherapy, gauging, dating.",
        },
        {
          heading: "Exam technique",
          body: "- Distance: inverse square law.\n- Medical tracers: short half-life.\n- Dating: known long half-life.",
        },
      ],
    },
  ],
};
