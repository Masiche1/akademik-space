import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "esc10-u4-lesson-4-3",
  code: "4-3",
  title: "Investigative Skills in Practice",
  goal: "I CAN apply investigative skills to biology, chemistry and physics problems.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Investigative Skills"],
  vocabulary: [
    { term: "Fieldwork", definition: "Data collection in natural environment — quadrats, transects." },
    { term: "Sample size", definition: "Number of measurements — larger = more representative." },
    { term: "Calibration", definition: "Checking instrument accuracy against known standard." },
    { term: "Validity", definition: "Whether results actually measure the intended quantity." },
  ],
  concepts: [
    {
      id: "esc10-u4-bio-chem",
      title: "Biology and Chemistry Investigations",
      skill: "Apply investigative skills to ecological, physiological and chemical problems.",
      lesson: {
        sections: [
          { heading: "Biology investigations", body: "**Ecology**: quadrats (count species in fixed area), transects (line across habitat), Simpson's index (biodiversity), mark-release-recapture (population). Random sampling avoids bias.\n\n**Physiology**: heart rate vs exercise (measure pulse), lung capacity (spirometer), reaction time (ruler drop). Controls: same person, rest periods, standardised instructions. **Microbiology**: agar plates, serial dilution, colonies count — aseptic technique essential." },
          { heading: "Chemistry investigations", body: "**Qualitative analysis**: flame tests, precipitation reactions — systematic testing for ions. **Quantitative**: titration (most accurate volumetric method), gravimetric (weigh product), colorimetry (concentration via colour intensity).\n\n**Energy changes**: coffee-cup calorimetry (solution), bomb calorimeter (accurate). **Rates**: gas syringe, mass loss, colour change timing. **Electrolysis**: measure gas volumes, current efficiency." },
        ],
        keyFormulas: [
          { name: "Quadrat", statement: "Count species in fixed area — random placement for unbiased sampling." },
          { name: "Titration", statement: "Most accurate volumetric analysis — concordant titres." },
        ],
        workedExample: { problem: "Why is titration more accurate than 'add until colour change' rough test?", solution: "Burette reads to 0.05 cm³, concordant titres — precise volume measurement." },
      },
      questions: [
        {
          id: "esc10-u4-bio-chem-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What is a quadrat used for?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Testing pH" },
            { id: "b", text: "Measuring temperature" },
            { id: "c", text: "Weighing organisms" },
            { id: "d", text: "Counting species in an area" }
], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Quadrat", statement: "Fixed-area frame for counting species." }],
            steps: [{ reasoning: "Quadrat counts species in area.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(d)** Counting species", commonErrors: ["Temperature confused."] },
        },
        {
          id: "esc10-u4-bio-chem-q2", difficulty: "core", totalMarks: 3,
          stem: "Why is random placement of quadrats important in ecology sampling?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Random sampling", statement: "Avoids bias — represents whole habitat." }],
            steps: [
              { reasoning: "Prevents cherry-picking areas.", marks: 1, markCode: "AO2" },
              { reasoning: "Represents whole habitat fairly.", marks: 1, markCode: "AO2" },
              { reasoning: "Biased placement → unrepresentative results.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Random placement avoids bias — results represent the whole habitat, not just chosen areas.", commonErrors: ["Convenience assumed fine.", "No bias link."] },
        },
        {
          id: "esc10-u4-bio-chem-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A titration gives titres 20.1, 20.3, 20.2, 22.5 cm³. How should this be handled?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Titration anomalies", statement: "22.5 is anomalous — investigate, don't average blindly." }],
            steps: [
              { reasoning: "22.5 differs from others by >0.2 — anomaly.", marks: 1, markCode: "AO2" },
              { reasoning: "Check for error (air bubble, misread).", marks: 1, markCode: "AO3" },
              { reasoning: "Average concordant 20.1-20.3 = 20.2 cm³.", marks: 1, markCode: "M" },
              { reasoning: "Note anomaly in evaluation.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Discard/check 22.5 anomaly; average concordant titres ≈ 20.2 cm³; note in evaluation.", commonErrors: ["Average all four.", "No anomaly check."] },
        },
        {
          id: "esc10-u4-bio-chem-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Investigating how temperature affects yeast respiration rate.",
          parts: [
            { label: "a", prompt: "State the variables.", marks: 2 },
            { label: "b", prompt: "Describe the method.", marks: 3 },
            { label: "c", prompt: "Predict and explain the expected trend.", marks: 3 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Yeast respiration", statement: "CO₂ production rate vs temperature — enzyme-controlled." }],
            steps: [
              { reasoning: "(a) Independent: temperature; dependent: CO₂ rate (gas volume/time).", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(b) Yeast + sugar in flask at different temps; collect gas over water/syringe; time measurements.", marks: 3, markCode: "AO3", part: "b" },
              { reasoning: "(c) Rate increases to optimum ~35-40°C then falls (enzymes denature).", marks: 2, markCode: "AO2", part: "c" },
              { reasoning: "(c) Collision theory + enzyme denaturation explanation.", marks: 1, markCode: "AO2", part: "c" }],
            finalAnswer: "(a) temp/CO₂ rate (b) yeast+sugar, gas collection, timed readings (c) rises to optimum then denatures", commonErrors: ["No controls.", "Linear trend assumed."] },
        },
      ],
    },
    {
      id: "esc10-u4-physics",
      title: "Physics Investigations",
      skill: "Apply investigative skills to mechanics, electricity and waves.",
      lesson: {
        sections: [
          { heading: "Mechanics investigations", body: "**Moments**: metre rule pivoted, vary masses/positions — verify clockwise = anticlockwise. **Speed/acceleration**: ticker timer (dots per interval), light gates + data logger, video analysis. **Forces**: spring balance calibration, friction measurements, Hooke's law (spring extension vs load — check proportional limit).\n\n**Density**: measure mass (balance) + volume (displacement/regular shape) → ρ = m/V. **Pressure**: manometer, depth vs pressure verification. **Vectors**: force table, resolved components." },
          { heading: "Electricity and waves", body: "**Circuits**: V-I characteristics (ohmic vs non-ohmic — filament bulb curves), resistance measurements, series/parallel verification. **Power**: measure V, I, t → calculate and verify P = VI.\n\n**Waves**: ripple tank (reflection, refraction, diffraction through gaps), sound speed (echo timing, resonance tube), light (candle/shadow sizes, prism spectrum, critical angle via glass block + pins). **EM spectrum**: detector response vs frequency." },
        ],
        keyFormulas: [
          { name: "Density", statement: "ρ = m/V — measure mass and volume separately." },
          { name: "V-I graph", statement: "Straight line = ohmic; curve = non-ohmic (e.g., filament)." },
        ],
        workedExample: { problem: "How to measure speed of a trolley accurately?", solution: "Light gates at measured distance → timer records interval → v = d/t; repeat and average." },
      },
      questions: [
        {
          id: "esc10-u4-physics-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What does a straight-line V-I graph indicate?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Non-ohmic conductor" },
            { id: "b", text: "Insulator" },
            { id: "c", text: "Ohmic conductor" },
            { id: "d", text: "Semi-conductor" }
], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Ohm's law", statement: "V ∝ I for ohmic — straight line through origin." }],
            steps: [{ reasoning: "Straight V-I = constant resistance = ohmic.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(c)** Ohmic conductor", commonErrors: ["Curve assumed."] },
        },
        {
          id: "esc10-u4-physics-q2", difficulty: "core", totalMarks: 3,
          stem: "Why are light gates better than a stopwatch for measuring speed?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Light gates", statement: "Automatic timing — removes human reaction error." }],
            steps: [
              { reasoning: "Electronic timing — no reaction delay.", marks: 1, markCode: "AO2" },
              { reasoning: "Higher precision/resolution.", marks: 1, markCode: "AO2" },
              { reasoning: "Multiple gates → acceleration measurement.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Automatic electronic timing removes reaction-time error and gives higher precision; multiple gates measure acceleration.", commonErrors: ["Same accuracy assumed.", "No reaction link."] },
        },
        {
          id: "esc10-u4-physics-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A student measures density of an irregular stone. Describe the method.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Density measurement", statement: "Mass by balance; volume by water displacement." }],
            steps: [
              { reasoning: "Weigh stone on balance → mass.", marks: 1, markCode: "AO2" },
              { reasoning: "Fill measuring cylinder, note water level.", marks: 1, markCode: "AO2" },
              { reasoning: "Submerge stone, note new level → volume = difference.", marks: 1, markCode: "AO2" },
              { reasoning: "Density = mass ÷ volume.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Weigh → water displacement volume → ρ = m/V.", commonErrors: ["Volume measured directly.", "Wrong formula."] },
        },
        {
          id: "esc10-u4-physics-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Investigating how current affects power in a resistor.",
          parts: [
            { label: "a", prompt: "State variables and apparatus.", marks: 3 },
            { label: "b", prompt: "Describe the method.", marks: 3 },
            { label: "c", prompt: "Predict the relationship between I and P.", marks: 2 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Power investigation", statement: "P = VI; vary current via variable resistor." }],
            steps: [
              { reasoning: "(a) Independent: current; dependent: power; controls: voltage, resistance.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) Apparatus: circuit, variable resistor, ammeter, voltmeter.", marks: 1, markCode: "AO1", part: "a" },
              { reasoning: "(b) Vary resistor → record I and V → P = VI for each.", marks: 3, markCode: "AO3", part: "b" },
              { reasoning: "(c) P increases with I (P = I²R — non-linear).", marks: 2, markCode: "AO2", part: "c" }],
            finalAnswer: "(a) I/P/resistor+voltmeter+ammeter (b) vary I record V,I→P=VI (c) P∝I² non-linear rise", commonErrors: ["Linear assumed.", "Missing controls."] },
        },
      ],
    },
  ],
};
