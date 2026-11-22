import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ediasphys-u1-lesson-1-1",
  code: "1-1",
  title: "Measurements and Uncertainties",
  goal: "I CAN use SI units, convert units and estimate uncertainties in measurements.",
  standards: ["P1 Measurements and their errors", "SI units"],
  vocabulary: [
    { term: "SI base units", definition: "Metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd)." },
    { term: "Uncertainty", definition: "Estimated range of doubt in a measurement; half the range of repeats." },
    { term: "Absolute / percentage uncertainty", definition: "± value / (± value / measured value × 100%)." },
    { term: "Resolution", definition: "Smallest division readable on an instrument." },
  ],
  concepts: [
    {
      id: "ediasphys-u1-si",
      title: "SI units and prefixes",
      skill: "Use SI units and convert between prefixes for physics quantities.",
      lesson: {
        sections: [
          {
            heading: "SI units",
            body: "Base: m, kg, s, A, K, mol, cd. Derived: newton (kg m s⁻²), joule (kg m² s⁻²), watt (J/s), pascal (N/m²), volt (J/C), coulomb (A s), ohm (V/A), hertz (s⁻¹), farad (C/V). Use correct units — 1 km/h is not an SI unit.",
          },
          {
            heading: "Prefixes",
            body: "pico 10⁻¹², nano 10⁻⁹, micro 10⁻⁶, milli 10⁻³, centi 10⁻², deci 10⁻¹, kilo 10³, mega 10⁶, giga 10⁹. Convert by multiplying powers of 10. E.g. 5 cm = 0.05 m; 2.5 GHz = 2.5×10⁹ Hz.",
          },
          {
            heading: "Estimating quantities",
            body: "Order-of-magnitude estimates for everyday quantities (mass of a person ~70 kg, speed of sound ~330 m/s). Used for sanity-checking calculations.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "1 N = 1 kg m s⁻²" },
          { name: "Key formula", statement: "1 J = 1 N m = 1 kg m² s⁻²" },
        ],
        workedExample: {
          problem: "Convert 0.025 km to metres.",
          solution: "0.025 km × 1000 = 25 m.",
        },
      },
      questions: [
        {
          id: "ediasphys-si-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Watt" },
              { id: "b", text: "Pascal" },
              { id: "c", text: "Newton" },
              { id: "d", text: "Joule" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Newton", statement: "kg m s⁻²." }],
            steps: [{ reasoning: "Force = mass × acceleration.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Newton",
          },
        },
        {
          id: "ediasphys-si-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert 2500 mm to metres.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 2.5, tolerance: 0.01, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Prefix", statement: "milli = 10⁻³." }],
            steps: [
              { reasoning: "1 mm = 0.001 m.", marks: 1, markCode: "M" },
              { reasoning: "2500 × 0.001 = 2.5 m.", marks: 1, markCode: "M" },
              { reasoning: "Correct conversion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.5 m",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "ediasphys-si-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student measures a length as 4.56 ± 0.02 cm. Calculate the percentage uncertainty.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.44, tolerance: 0.01, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Percentage uncertainty", statement: "(±/value)×100%." }],
            steps: [
              { reasoning: "%unc = (0.02/4.56)×100.", marks: 1, markCode: "M" },
              { reasoning: "= 0.4386…%.", marks: 1, markCode: "M" },
              { reasoning: "≈ 0.44%.", marks: 1, markCode: "A" },
              { reasoning: "State method.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.44%",
            commonErrors: ["Using absolute not relative uncertainty."],
          },
        },
        {
          id: "ediasphys-si-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Explain the SI system and why standard units are important in physics.",
          parts: [
            { label: "a", prompt: "Name the seven SI base units.", marks: 4 },
            { label: "b", prompt: "Give two derived units and their definitions.", marks: 3 },
            { label: "c", prompt: "Explain the advantage of a standard system.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "SI", statement: "Universal measurement standard." }],
            steps: [
              { part: "a", reasoning: "m, kg, s, A, K, mol, cd (all seven).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct list.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Include kelvin and candela.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Complete answer.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Newton = kg m s⁻².", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Joule = kg m² s⁻².", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Or watt, pascal, volt etc.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Standard units allow comparison and communication worldwide.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Avoids confusion from local units (feet, pounds).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Essential for scientific collaboration and equations.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "m,kg,s,A,K,mol,cd; derived units from these",
            commonErrors: ["Missing base units."],
          },
        },
      ],
    },
    {
      id: "ediasphys-u1-errors",
      title: "Uncertainties and errors",
      skill: "Distinguish random/systematic errors and combine uncertainties.",
      lesson: {
        sections: [
          {
            heading: "Types of error",
            body: "Random errors: scatter due to unpredictable factors — reduced by repeats, show as scatter on graph. Systematic errors: consistent offset — e.g. zero error, wrong calibration, parallax; cannot be reduced by repeats. Accuracy = closeness to true value; precision = closeness of repeats to each other.",
          },
          {
            heading: "Uncertainty estimation",
            body: "For repeats: uncertainty = half the range (max−min)/2. For single measurement: ± half the smallest division. Percentage uncertainty = (absolute uncertainty/value)×100%. Rule: result's uncertainty ≈ sum of % uncertainties of inputs.",
          },
          {
            heading: "Reducing errors",
            body: "Zero error: subtract correction. Calibration: use standard masses. Parallax: line up pointers/eye directly. Repeats: average and use uncertainty range.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "Uncertainty = (max − min)/2" },
          { name: "Key formula", statement: "%unc = (Δx/x)×100%" },
        ],
        workedExample: {
          problem: "Three readings of length: 12.4, 12.5, 12.3 cm. Find uncertainty and mean.",
          solution: "Mean = 12.4 cm. Range = 12.5−12.3 = 0.2 → uncertainty = ±0.1 cm.",
        },
      },
      questions: [
        {
          id: "ediasphys-err-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between accuracy and precision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither matters" },
              { id: "b", text: "They mean the same" },
              { id: "c", text: "Accuracy = repeatability; precision = true value" },
              { id: "d", text: "Accuracy = close to true value; precision = repeatability" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Accuracy/precision", statement: "True value vs consistency." }],
            steps: [{ reasoning: "Accuracy: closeness to true; precision: closeness of repeats.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Accuracy=true, precision=repeatability",
          },
        },
        {
          id: "ediasphys-err-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Readings: 5.21, 5.19, 5.20 cm. Find mean and uncertainty.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Uncertainty", statement: "Half range." }],
            steps: [
              { reasoning: "Mean = (5.21+5.19+5.20)/3 = 5.20 cm.", marks: 1, markCode: "M" },
              { reasoning: "Range = 5.21−5.19 = 0.02 → uncertainty = ±0.01 cm.", marks: 1, markCode: "M" },
              { reasoning: "Result: 5.20 ± 0.01 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5.20 ± 0.01 cm",
            commonErrors: ["Using full range not half."],
          },
        },
        {
          id: "ediasphys-err-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish random and systematic errors with one example each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Error types", statement: "Random: unpredictable; systematic: consistent." }],
            steps: [
              { reasoning: "Random: scatter around mean, e.g. reaction time, air currents.", marks: 1, markCode: "A" },
              { reasoning: "Reduced by repeats/averaging.", marks: 1, markCode: "M" },
              { reasoning: "Systematic: consistent offset, e.g. zero error on balance, parallax.", marks: 1, markCode: "A" },
              { reasoning: "Cannot be reduced by repeats; must correct/calibrate.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Random=scatter (reduce by repeats); systematic=offset (correct it)",
            commonErrors: ["Saying repeats fix systematic errors."],
          },
        },
        {
          id: "ediasphys-err-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student measures the density of a metal block. Explain sources of uncertainty and how to minimise them.",
          parts: [
            { label: "a", prompt: "Identify uncertainties in measuring mass, length, width, height.", marks: 4 },
            { label: "b", prompt: "Explain parallax error and how to avoid it.", marks: 3 },
            { label: "c", prompt: "Explain why density calculation has larger % uncertainty than mass alone.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Uncertainty", statement: "Each measurement contributes % uncertainty." }],
            steps: [
              { part: "a", reasoning: "Mass: balance resolution/zero error.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dimensions: ruler resolution ±0.5 mm or vernier.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Random: reading inconsistencies.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Systematic: zero error, instrument calibration.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Parallax: eye not perpendicular to scale → wrong reading.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Avoid: line up pointers, view scale at eye level.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use vernier calipers for precision.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Density = m/(l×w×h) — %unc adds for volume (3 dimensions).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Volume uncertainty accumulates → larger than mass alone.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: density less precise.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Resolution + parallax + random; density less precise",
            commonErrors: ["Ignoring zero errors."],
          },
        },
      ],
    },
  ],
};
