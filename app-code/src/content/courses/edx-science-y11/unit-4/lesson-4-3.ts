import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "esc11-u4-lesson-4-3",
  code: "4-3",
  title: "Practical Assessment Skills",
  goal: "I CAN demonstrate practical competence across biology, chemistry and physics.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Investigative Skills (Y11)"],
  vocabulary: [
    { term: "Practical endorsement", definition: "Assessment of practical skills — separate from written exam." },
    { term: "Technique", definition: "Skill in carrying out procedures correctly — e.g., titration, microscopy." },
    { term: "Competence", definition: "Ability to perform practicals safely and accurately." },
    { term: "Standard operating procedure", definition: "Documented method ensuring consistency." },
  ],
  concepts: [
    {
      id: "esc11-u4-bio-chem-prac",
      title: "Biology and Chemistry Practical Skills",
      skill: "Demonstrate competence in core practical techniques.",
      lesson: {
        sections: [
          { heading: "Biology practicals", body: "**Microscopy**: prepare thin sections, stain appropriately, focus with coarse then fine adjustment, measure cells using graticule. Avoid air bubbles, don't stain too long.\n\n**Food tests**: Benedict's (heat required, blue→green→yellow→brick red), Biuret (purple = protein), iodine (blue-black = starch). **Enzyme experiments**: controlled variables, timing methods. **Ecology**: quadrat placement, species identification, Simpson's index calculation.\n\n**Microbiology**: aseptic technique, serial dilution, agar preparation, incubation." },
          { heading: "Chemistry practicals", body: "**Titration**: rinse burette with solution, fill above zero, remove funnel, read meniscus at eye level, add indicator, swirl, near endpoint add dropwise, record to 0.05 cm³. Concordant titres within 0.1 cm³.\n\n**Gas collection**: correct delivery method (upward for dense gases), measure volume over time. **Crystallisation**: evaporate to saturation, cool, filter, dry. **Flame tests**: clean wire, concentrated HCl, observe colour. **Precipitation**: add reagent dropwise, observe colour/solubility." },
        ],
        keyFormulas: [
          { name: "Titration reading", statement: "Meniscus at eye level, record to 0.05 cm³." },
          { name: "Concordance", statement: "Titres within 0.1 cm³ — average them." },
        ],
        workedExample: { problem: "Why read burette at eye level?", solution: "Parallax error — reading from above/below gives different apparent volume." },
      },
      questions: [
        {
          id: "esc11-u4-bio-chem-prac-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What colour indicates a positive Benedict's test?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Blue" },
            { id: "b", text: "Brick red" },
            { id: "c", text: "Purple" },
            { id: "d", text: "Yellow" }
], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Benedict's", statement: "Reducing sugar → brick red precipitate on heating." }],
            steps: [{ reasoning: "Brick red = positive.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** Brick red", commonErrors: ["Purple = Biuret protein."] },
        },
        {
          id: "esc11-u4-bio-chem-prac-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe correct burette reading technique.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Burette technique", statement: "Eye level, record to 0.05 cm³, note initial reading." }],
            steps: [
              { reasoning: "Read meniscus at eye level (no parallax).", marks: 1, markCode: "AO2" },
              { reasoning: "Record to 0.05 cm³ precision.", marks: 1, markCode: "AO2" },
              { reasoning: "Note initial AND final readings.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Eye level, 0.05 cm³ precision, record initial and final readings.", commonErrors: ["Top-down view.", "Approximate readings."] },
        },
        {
          id: "esc11-u4-bio-chem-prac-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A titration gives titres 24.9, 25.1, 25.0, 28.3 cm³. How should results be processed?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Titration anomalies", statement: "28.3 is anomalous — investigate, exclude from average." }],
            steps: [
              { reasoning: "28.3 differs by >0.2 — anomaly.", marks: 1, markCode: "AO2" },
              { reasoning: "Check for procedural error (air bubble, overshoot).", marks: 1, markCode: "AO3" },
              { reasoning: "Average concordant 24.9-25.1 = 25.0 cm³.", marks: 1, markCode: "M" },
              { reasoning: "Note anomaly in evaluation.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Examine 28.3 anomaly; average concordant titres ≈25.0 cm³; note in evaluation.", commonErrors: ["Average all four.", "No anomaly handling."] },
        },
        {
          id: "esc11-u4-bio-chem-prac-q4", difficulty: "challenge", totalMarks: 8,
          stem: "You need to identify an unknown white powder: NaCl, Na₂CO₃, or CaCO₃.",
          parts: [
            { label: "a", prompt: "Describe a test to distinguish them.", marks: 4 },
            { label: "b", prompt: "Give expected observations for each.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Qualitative analysis", statement: "Systematic testing with specific reagents." }],
            steps: [
              { reasoning: "(a) Add dilute HCl — observe effervescence.", marks: 2, markCode: "AO3", part: "a" },
              { reasoning: "(a) If CO₂ produced → carbonate (Na₂CO₃ or CaCO₃).", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(a) No reaction → NaCl (then test with AgNO₃).", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(b) Na₂CO₃ + HCl → effervescence, dissolves.", marks: 1, markCode: "AO1", part: "b" },
              { reasoning: "(b) CaCO₃ + HCl → effervescence, residue may remain.", marks: 1, markCode: "AO1", part: "b" },
              { reasoning: "(b) NaCl no effervescence; AgNO₃ → white ppt.", marks: 2, markCode: "AO1", part: "b" }],
            finalAnswer: "(a) HCl test for carbonate, AgNO₃ for chloride (b) observations distinguish each", commonErrors: ["Single test assumed.", "Observations vague."] },
        },
      ],
    },
    {
      id: "esc11-u4-physics-prac",
      title: "Physics Practical Skills",
      skill: "Demonstrate competence in electrical, mechanics and waves practicals.",
      lesson: {
        sections: [
          { heading: "Electrical practicals", body: "**Circuit setup**: series/parallel correctly wired, ammeter in series, voltmeter in parallel, variable resistor for current control. Check polarity, secure connections.\n\n**Measurements**: read analogue meters carefully (parallax), digital to appropriate precision. **V-I characteristics**: plot graph, identify ohmic vs non-ohmic regions. **Resistance**: measure V and I at multiple points, calculate R = V/I, average. **Power**: measure V, I, time → verify P = VI." },
          { heading: "Mechanics and waves", body: "**Moments**: pivot metre rule, balance masses, measure distances from pivot — verify principle. **Speed**: ticker timer or light gates, measure distance/time, calculate average speed. **Density**: mass by balance, volume by displacement — calculate and compare to known values.\n\n**Waves**: ripple tank setup (level surface, shallow water), measure wavelength/frequency, observe reflection/refraction/diffraction. **Sound**: resonance tube, measure speed using echo or resonance. **Light**: pin optics for lens focal length, measure critical angle via glass block." },
        ],
        keyFormulas: [
          { name: "V-I graph", statement: "Ohmic = straight line; filament = curve (resistance increases)." },
          { name: "Density", statement: "ρ = m/V — measure separately, combine." },
        ],
        workedExample: { problem: "How to measure focal length of convex lens?", solution: "Shine parallel rays → converge at focal point; measure distance lens to sharp image." },
      },
      questions: [
        {
          id: "esc11-u4-physics-prac-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Where should a voltmeter be connected?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Either way" },
            { id: "b", text: "Across the battery only" },
            { id: "c", text: "In parallel" },
            { id: "d", text: "In series" }
], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "Voltmeter", statement: "Parallel — measures potential difference across component." }],
            steps: [{ reasoning: "Voltmeter in parallel.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(c)** In parallel", commonErrors: ["Series confused with ammeter."] },
        },
        {
          id: "esc11-u4-physics-prac-q2", difficulty: "core", totalMarks: 3,
          stem: "Why does a filament bulb's V-I graph curve instead of being straight?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Non-ohmic", statement: "Resistance increases with temperature — filament heats up." }],
            steps: [
              { reasoning: "Current heats filament.", marks: 1, markCode: "AO2" },
              { reasoning: "Higher temp → higher resistance.", marks: 1, markCode: "AO2" },
              { reasoning: "V = IR — increasing R means curve bends.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Filament heats → resistance increases → V-I curve bends (non-ohmic).", commonErrors: ["Broken assumed.", "No temperature link."] },
        },
        {
          id: "esc11-u4-physics-prac-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Design an experiment to verify the principle of moments using a metre rule.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Moments experiment", statement: "Balance clockwise = anticlockwise moments." }],
            steps: [
              { reasoning: "Pivot metre rule at 50 cm mark.", marks: 1, markCode: "AO3" },
              { reasoning: "Hang known masses at measured distances.", marks: 1, markCode: "AO3" },
              { reasoning: "Calculate moments (force × distance) each side.", marks: 1, markCode: "AO2" },
              { reasoning: "Verify clockwise = anticlockwise when balanced.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Pivot at centre, hang masses at distances, calculate moments, verify balance.", commonErrors: ["No pivot specified.", "Not verifying principle."] },
        },
        {
          id: "esc11-u4-physics-prac-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Measuring speed of sound using a resonance tube.",
          parts: [
            { label: "a", prompt: "Describe the apparatus and method.", marks: 4 },
            { label: "b", prompt: "Explain how resonance occurs.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Resonance tube", statement: "Closed tube, tuning fork above water — first resonance at λ/4." }],
            steps: [
              { reasoning: "(a) Tube + water reservoir + tuning fork of known frequency.", marks: 2, markCode: "AO1", part: "a" },
              { reasoning: "(a) Lower water until loud resonance heard; measure air column.", marks: 2, markCode: "AO3", part: "a" },
              { reasoning: "(b) Sound waves reflect at water surface.", marks: 1, markCode: "AO2", part: "b" },
              { reasoning: "(b) Incident + reflected waves form standing wave.", marks: 1, markCode: "AO2", part: "b" },
              { reasoning: "(b) First resonance: column = λ/4; v = fλ.", marks: 2, markCode: "AO2", part: "b" }],
            finalAnswer: "(a) tube+water+fork, find resonance, measure column (b) standing wave, λ/4, v=fλ", commonErrors: ["Wrong apparatus.", "No λ/4 link."] },
        },
      ],
    },
  ],
};
