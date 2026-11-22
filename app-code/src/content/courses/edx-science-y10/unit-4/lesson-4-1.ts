import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "esc10-u4-lesson-4-1",
  code: "4-1",
  title: "Planning Scientific Investigations",
  goal: "I CAN plan investigations with variables, hypotheses and safe methods.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Investigative Skills"],
  vocabulary: [
    { term: "Independent variable", definition: "What you deliberately change." },
    { term: "Dependent variable", definition: "What you measure — responds to the change." },
    { term: "Control variable", definition: "Kept constant so only the independent variable affects results." },
    { term: "Hypothesis", definition: "Testable prediction — 'if X increases, Y will...'" },
  ],
  concepts: [
    {
      id: "esc10-u4-variables",
      title: "Variables and Hypotheses",
      skill: "Identify variables and write testable hypotheses for investigations.",
      lesson: {
        sections: [
          { heading: "Types of variables", body: "**Independent**: deliberately changed (temperature, concentration). **Dependent**: measured outcome (rate, pH, mass). **Control**: kept constant (volume, surface area, same equipment).\n\n**Categoric vs continuous**: categories (metal type, blood group) vs measurable range (temperature, time). **Hypothesis**: specific, testable prediction — not 'it will work' but 'increasing temperature will increase rate because particles collide more often'." },
          { heading: "Fair testing", body: "Only change ONE variable at a time. Repeat measurements for reliability. Use suitable ranges — enough points to see a pattern but practical (5+ readings).\n\n**Risk assessment**: identify hazards (heat, chemicals, sharp objects, electricity) → assess risk → control measures (goggles, gloves, fume hood, low voltages). Ethics: consent for human participants, welfare of animals.\n\n**Apparatus choice**: accuracy matters — measuring cylinder vs beaker, thermometer vs probe, digital vs analogue. Choose resolution appropriate to expected values." },
        ],
        keyFormulas: [
          { name: "Variables", statement: "Change one independent; measure dependent; control the rest." },
          { name: "Hypothesis", statement: "Testable prediction linking variables with reasoning." },
        ],
        workedExample: { problem: "Investigating enzyme rate vs temperature. Identify variables.", solution: "Independent: temperature. Dependent: rate (e.g., time for colour change). Controls: enzyme concentration, substrate volume, pH." },
      },
      questions: [
        {
          id: "esc10-u4-variables-q1", difficulty: "foundation", totalMarks: 2,
          stem: "In an investigation of temperature vs reaction rate, what is the dependent variable?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rate" },
            { id: "b", text: "Concentration" },
            { id: "c", text: "Volume" },
            { id: "d", text: "Temperature" }
], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Dependent variable", statement: "Measured outcome that responds to changes." }],
            steps: [{ reasoning: "Rate is measured — dependent.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(a)** Rate", commonErrors: ["Independent confused."] },
        },
        {
          id: "esc10-u4-variables-q2", difficulty: "core", totalMarks: 3,
          stem: "Write a testable hypothesis for investigating how light intensity affects photosynthesis rate.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Hypothesis", statement: "Specific prediction with variables and reasoning." }],
            steps: [
              { reasoning: "Links light intensity to rate.", marks: 1, markCode: "AO2" },
              { reasoning: "Direction predicted (increase/decrease).", marks: 1, markCode: "AO2" },
              { reasoning: "Reason given (more light → more energy).", marks: 1, markCode: "AO3" }],
            finalAnswer: "e.g., 'As light intensity increases, photosynthesis rate will increase because more light energy is available for the reaction.'", commonErrors: ["Vague prediction.", "No reasoning."] },
        },
        {
          id: "esc10-u4-variables-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A student investigates metal reactivity by timing acid reactions. Identify two control variables and explain why.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Control variables", statement: "Uncontrolled variables invalidate comparisons." }],
            steps: [
              { reasoning: "Two valid controls: acid concentration, metal mass, temperature.", marks: 2, markCode: "AO3" },
              { reasoning: "Explanation: must stay constant for fair test.", marks: 1, markCode: "AO2" },
              { reasoning: "If varied → can't attribute result to metal alone.", marks: 1, markCode: "AO3" }],
            finalAnswer: "e.g., acid concentration + metal mass — kept constant so only metal type affects rate.", commonErrors: ["Variables listed without why.", "Dependent listed as control."] },
        },
        {
          id: "esc10-u4-variables-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Plan an investigation: effect of concentration on rate of reaction between marble chips and hydrochloric acid.",
          parts: [
            { label: "a", prompt: "State independent, dependent and two control variables.", marks: 3 },
            { label: "b", prompt: "Describe the method in four steps.", marks: 3 },
            { label: "c", prompt: "Identify one hazard and its control.", marks: 2 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Investigation plan", statement: "Variables + method + safety = valid investigation." }],
            steps: [
              { reasoning: "(a) Independent: acid concentration; dependent: rate (gas volume/time).", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) Controls: marble mass, acid volume, temperature.", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(b) Method: measure acid, add chips, time gas or collect CO₂.", marks: 3, markCode: "AO3", part: "b" },
              { reasoning: "(c) Hazard: acid corrosive → goggles/gloves; CO₂ → ventilation.", marks: 2, markCode: "AO4", part: "c" }],
            finalAnswer: "(a) conc./rate/mass+volume (b) measure→react→time→record (c) acid → PPE", commonErrors: ["No controls.", "Method too vague."] },
        },
      ],
    },
    {
      id: "esc10-u4-methods",
      title: "Practical Methods Across Sciences",
      skill: "Select appropriate apparatus and methods for biological, chemical and physical investigations.",
      lesson: {
        sections: [
          { heading: "Biology practicals", body: "**Microscopy**: prepare slide (stain, coverslip, avoid bubbles), focus low→high power, measure with eyepiece graticule, calculate magnification = image ÷ actual.\n\n**Enzyme experiments**: vary temperature/pH/substrate, measure rate (disappearance of cross, colour change, gas). **Photosynthesis**: pondweed + sodium hydrogencarbonate, count bubbles/light intensity. **Food tests**: iodine (starch→blue-black), Benedict's (reducing sugar→brick red on heating), Biuret (protein→purple), ethanol emulsion (lipid→milky)." },
          { heading: "Chemistry and physics practicals", body: "**Titrations**: burette + pipette + indicator; rinse apparatus, read meniscus at eye level, concordant titres (±0.1 cm³). **Gas collection**: syringe/upward delivery for denser gases. **Electrolysis/calorimetry**: measure temp change, insulate.\n\n**Physics**: circuits (ammeter series, voltmeter parallel), measuring instruments (ruler, micrometer, vernier calipers — read to precision), vector experiments, moments. **Data loggers**: temperature/pressure/light sensors for continuous recording." },
        ],
        keyFormulas: [
          { name: "Magnification", statement: "Magnification = image size ÷ actual size." },
          { name: "Titration", statement: "Concordant titres within 0.1 cm³ — average them." },
        ],
        workedExample: { problem: "Cell image 40 mm, actual 0.04 mm. Magnification?", solution: "40 ÷ 0.04 = ×1000." },
      },
      questions: [
        {
          id: "esc10-u4-methods-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Which food test detects reducing sugars?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Benedict's" },
            { id: "b", text: "Ethanol emulsion" },
            { id: "c", text: "Biuret" },
            { id: "d", text: "Iodine" }
], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Food tests", statement: "Benedict's = reducing sugar; Biuret = protein." }],
            steps: [{ reasoning: "Benedict's tests reducing sugar.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(a)** Benedict's", commonErrors: ["Iodine = starch."] },
        },
        {
          id: "esc10-u4-methods-q2", difficulty: "core", totalMarks: 3,
          stem: "Why must an ammeter be connected in series?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Ammeter", statement: "Series = same current flows through it." }],
            steps: [
              { reasoning: "Series circuit = one path.", marks: 1, markCode: "AO2" },
              { reasoning: "Same current through ammeter and circuit.", marks: 1, markCode: "AO2" },
              { reasoning: "Parallel would split current — wrong reading.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Series ensures same current flows through ammeter — parallel would measure only branch current.", commonErrors: ["Either way assumed.", "No current-flow reasoning."] },
        },
        {
          id: "esc10-u4-methods-q3", difficulty: "challenge", totalMarks: 4,
          stem: "In a titration, titres are 24.8, 25.0, 25.2 cm³. How should you process them?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Titration concordance", statement: "Concordant titres within 0.1 cm³ — average them." }],
            steps: [
              { reasoning: "Check concordance: range 0.4 — borderline.", marks: 1, markCode: "AO2" },
              { reasoning: "Average all three = 25.0 cm³.", marks: 1, markCode: "M" },
              { reasoning: "Or discard outlier and average concordant pair.", marks: 1, markCode: "AO3" },
              { reasoning: "Use average in calculation.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Average = 25.0 cm³ — check concordance, discard outliers if needed.", commonErrors: ["Pick one titre.", "No concordance check."] },
        },
        {
          id: "esc10-u4-methods-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Testing a leaf for starch after destarching.",
          parts: [
            { label: "a", prompt: "Describe the procedure in order.", marks: 4 },
            { label: "b", prompt: "Explain the purpose of destarching.", marks: 2 },
            { label: "c", prompt: "State the expected result if photosynthesis occurred.", marks: 2 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Starch test", statement: "Boil in ethanol → water bath → iodine: blue-black = starch." }],
            steps: [
              { reasoning: "(a) Boil leaf in ethanol (removes chlorophyll).", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(a) Rinse in warm water, add iodine.", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(a) Blue-black = positive.", marks: 1, markCode: "AO1", part: "a" },
              { reasoning: "(a) Procedure ordered correctly.", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(b) Removes pre-existing starch — only new starch detected.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(c) Blue-black where light hit leaf.", marks: 2, markCode: "AO1", part: "c" }],
            finalAnswer: "(a) boil ethanol→rinse→iodine (b) removes existing starch (c) blue-black = starch present", commonErrors: ["Wrong order.", "No destarching purpose."] },
        },
      ],
    },
  ],
};
