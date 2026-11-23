module.exports = [
  {
    file: "lesson-8-1.ts", exportName: "lesson81",
    lesson: {
      id: "edxbteceng-u8-lesson-8-1", code: "8-1",
      title: "Precision Measurement Instruments",
      goal: "I CAN select and use precision measuring instruments and interpret readings correctly.",
      standards: [
        "Pearson BTEC Level 3 National Engineering — engineering practice and quality",
        "Engineering metrology: linear measurement, accuracy and uncertainty",
      ],
      vocabulary: [
        { term: "Least count", definition: "The smallest measurement that an instrument scale can directly indicate." },
        { term: "Vernier scale", definition: "A secondary sliding scale that subdivides the main scale for finer readings." },
        { term: "Micrometer", definition: "A precision instrument using a screw thread to measure small lengths to 0.01 mm." },
        { term: "Dial indicator", definition: "An instrument that converts small linear movements into amplified pointer movement." },
        { term: "Zero error", definition: "A systematic offset present when an instrument reads when it should read zero." },
        { term: "Resolution", definition: "The smallest change in a measured quantity that the instrument can detect." },
      ],
      concepts: [
        {
          id: "edxbteceng-u8-8-1-lin", title: "Linear measurement instruments",
          skill: "Select and read vernier calipers, micrometers and dial indicators.",
          sections: [
            { heading: "Choosing the right instrument", body: "A steel rule is quick for rough dimensions, but engineering tolerances often need instruments with smaller least counts. A vernier caliper typically resolves 0.02 mm or 0.05 mm; a micrometer resolves 0.01 mm; a dial indicator resolves about 0.01 mm and is better for checking flatness, run-out and small displacements than for measuring a large diameter directly." },
            { heading: "Reading the instruments", body: "For a micrometer, read the sleeve in millimetres, add half-millimetre marks if visible, then add thimble divisions times the least count. For a dial indicator, always check the zero before use and subtract zero error from the reading. Clean the anvils and faces, apply steady pressure and avoid measuring at a burr or high spot unless that is the intended feature." },
          ],
          keyFormulas: [
            { name: "Micrometer reading", statement: "reading = sleeve mm + visible half mm + thimble divisions x least count" },
            { name: "Vernier alignment", statement: "reading = main scale mm + aligned vernier line x least count" },
            { name: "Dial correction", statement: "actual size = indicated reading - zero error" },
          ],
          workedExample: {
            problem: "A micrometer has sleeve reading 12.5 mm and thimble reading 37 divisions at 0.01 mm least count. Find the measured diameter.",
            solution: "Each thimble division is 0.01 mm, so the thimble contributes 37 x 0.01 = 0.37 mm. Add the sleeve: 12.5 + 0.37 = 12.87 mm. The measured diameter is 12.87 mm.",
          },
          questions: [
            {
              id: "edxbteceng-u8-lin-q1", difficulty: "foundation", totalMarks: 1,
              stem: "A vernier caliper has 10 divisions covering 9 mm of the main scale. What is its least count?",
              response: { type: "mcq", choices: [
                { id: "a", text: "0.01 mm" }, { id: "b", text: "0.1 mm" }, { id: "c", text: "0.02 mm" }, { id: "d", text: "1 mm" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Vernier least count", statement: "Least count = main-scale division / number of vernier divisions." }],
                steps: [{ reasoning: "1 mm divided by 10 divisions gives 0.1 mm.", marks: 1, markCode: "M" }],
                finalAnswer: "0.1 mm",
              },
            },
            {
              id: "edxbteceng-u8-lin-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A micrometer reads 8.5 mm on the sleeve and 26 on the thimble. The least count is 0.01 mm. Calculate the measured length in millimetres.",
              response: { type: "numeric", parts: [{ label: "length", answer: 8.76, unit: "mm" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Micrometer reading", statement: "Add sleeve reading and thimble contribution." }],
                steps: [
                  { reasoning: "Thimble contribution = 26 x 0.01 = 0.26 mm.", marks: 1, markCode: "M" },
                  { reasoning: "Reading = 8.5 + 0.26 = 8.76 mm.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "8.76 mm",
              },
            },
            {
              id: "edxbteceng-u8-lin-q3", difficulty: "core", totalMarks: 3,
              stem: "A dial indicator has a zero error of +0.04 mm. It reads 0.21 mm when used to check a surface. Calculate the corrected measurement and explain why the zero check matters.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Zero correction", statement: "Corrected value = indicated value - zero error." }],
                steps: [
                  { reasoning: "Zero error is +0.04 mm, so subtract it from the indication.", marks: 1, markCode: "M" },
                  { reasoning: "Corrected reading = 0.21 - 0.04 = 0.17 mm.", marks: 1, markCode: "A" },
                  { reasoning: "Without zeroing, every measurement inherits the same systematic offset.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "0.17 mm",
              },
            },
            {
              id: "edxbteceng-u8-lin-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Three measurements are made on machined features.",
              parts: [
                { label: "a", prompt: "A vernier reads 24 mm on the main scale and line 7 aligns on a 0.02 mm vernier. State the reading.", marks: 2 },
                { label: "b", prompt: "A micrometer has 6.0 mm on the sleeve and 18 thimble divisions at 0.01 mm. State the reading.", marks: 2 },
                { label: "c", prompt: "A dial indicator reads 0.46 mm with a zero error of -0.03 mm. State the corrected reading.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Instrument reading", statement: "Apply the instrument-specific reading rule and correct zero error." }],
                steps: [
                  { part: "a", reasoning: "Vernier contribution = 7 x 0.02 = 0.14 mm.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Reading = 24 + 0.14 = 24.14 mm.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Thimble contribution = 18 x 0.01 = 0.18 mm.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Reading = 6.0 + 0.18 = 6.18 mm.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Corrected = 0.46 - (-0.03) = 0.49 mm.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) 24.14 mm (b) 6.18 mm (c) 0.49 mm",
              },
            },
            {
              id: "edxbteceng-u8-lin-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A workshop must choose an instrument for a shaft diameter specified as 25.000 +/- 0.010 mm.",
              parts: [
                { label: "a", prompt: "State the minimum resolution needed for reliable inspection.", marks: 2 },
                { label: "b", prompt: "Compare a vernier caliper and a micrometer for this task.", marks: 2 },
                { label: "c", prompt: "Give one reason a dial indicator may still be useful after machining.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Resolution and tolerance", statement: "Instrument resolution should be at least as fine as the tolerance being checked." }],
                steps: [
                  { part: "a", reasoning: "Tolerance is 0.010 mm, so resolution should be 0.01 mm or finer.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "A micrometer resolves 0.01 mm and is suitable; many verniers only resolve 0.02 mm or 0.05 mm.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "A dial indicator is useful for checking run-out, flatness or repeatability at a reference face.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Use at least 0.01 mm resolution; micrometer preferred for diameter, dial indicator for geometric checks.",
              },
            },
            {
              id: "edxbteceng-u8-lin-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A shaft is measured at three positions: 25.01 mm, 25.05 mm and 24.99 mm.",
              parts: [
                { label: "a", prompt: "State why three positions are measured rather than one.", marks: 2 },
                { label: "b", prompt: "Calculate the mean diameter.", marks: 2 },
                { label: "c", prompt: "Calculate the range of the readings.", marks: 1 },
                { label: "d", prompt: "Report the result to a sensible number of decimal places.", marks: 2 },
                { label: "e", prompt: "Explain one limitation of using only a vernier caliper for this task.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Repeated measurement", statement: "Repeat measurements reduce random effects; report mean and spread." }],
                steps: [
                  { part: "a", reasoning: "Multiple positions detect taper, ovality and local high or low spots.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "Mean = (25.01 + 25.05 + 24.99) / 3.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Mean = 25.0167 mm, about 25.02 mm.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Range = 25.05 - 24.99 = 0.06 mm.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Report to two decimal places because readings were to 0.01 mm and spread is small.", marks: 2, markCode: "R" },
                  { part: "e", reasoning: "A caliper may not resolve 0.01 mm reliably and contact pressure can vary.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Mean about 25.02 mm; range 0.06 mm.",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u8-8-1-acc", title: "Accuracy, precision and uncertainty",
          skill: "Distinguish accuracy, precision and uncertainty in engineering measurements.",
          sections: [
            { heading: "Accuracy versus precision", body: "Accuracy describes how close the average result is to the true value. Precision describes how closely repeated results agree with each other. A instrument can be precise but inaccurate if it has a systematic error, or accurate on average but imprecise if random effects are large. Calibration against a traceable standard corrects systematic error; repeated readings and controlled technique reduce random error." },
            { heading: "Uncertainty and reporting", body: "Measurement uncertainty expresses doubt about a result. For simple school-level work, uncertainty may be half the smallest scale division, plus effects such as temperature or alignment. A result should be reported with its uncertainty, for example 12.34 +/- 0.05 mm, not as an over-precise single number. Significant figures must match the measurement quality." },
          ],
          keyFormulas: [
            { name: "Mean", statement: "mean = sum of readings / number of readings" },
            { name: "Range", statement: "range = maximum reading - minimum reading" },
            { name: "Reporting", statement: "value +/- uncertainty" },
          ],
          workedExample: {
            problem: "Five readings are 10.02, 10.04, 9.98, 10.01 and 10.05 mm. Find the mean and range.",
            solution: "Sum = 50.10 mm, so mean = 50.10 / 5 = 10.02 mm. Range = 10.05 - 9.98 = 0.07 mm. The readings cluster near 10.02 mm with a spread of 0.07 mm.",
          },
          questions: [
            {
              id: "edxbteceng-u8-acc-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which statement best describes precision?",
              response: { type: "mcq", choices: [
                { id: "a", text: "How close the average result is to the true value" },
                { id: "b", text: "How closely repeated readings agree with each other" },
                { id: "c", text: "The smallest scale division" },
                { id: "d", text: "The cost of the instrument" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Precision", statement: "Precision is the closeness of agreement between repeated measurements." }],
                steps: [{ reasoning: "Precision concerns repeatability, not closeness to the true value.", marks: 1, markCode: "M" }],
                finalAnswer: "Repeated readings agree closely",
              },
            },
            {
              id: "edxbteceng-u8-acc-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A thermometer has uncertainty +/- 0.5 degrees C and reads 21.4 degrees C. State the lower and upper bounds of the possible true temperature.",
              response: { type: "numeric", parts: [
                { label: "lower", answer: 20.9, unit: "degrees C" },
                { label: "upper", answer: 21.9, unit: "degrees C" },
              ] },
              markscheme: {
                principles: [{ kind: "principle", name: "Uncertainty interval", statement: "True value lies between reading minus uncertainty and reading plus uncertainty." }],
                steps: [
                  { reasoning: "Lower bound = 21.4 - 0.5 = 20.9 degrees C.", marks: 1, markCode: "M" },
                  { reasoning: "Upper bound = 21.4 + 0.5 = 21.9 degrees C.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "20.9 to 21.9 degrees C",
              },
            },
            {
              id: "edxbteceng-u8-acc-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the difference between repeatability and resolution, using a measuring instrument as an example.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Repeatability and resolution", statement: "Repeatability is consistency under unchanged conditions; resolution is the smallest detectable change." }],
                steps: [
                  { reasoning: "Resolution is a property of the scale or sensor, such as 0.01 mm on a micrometer.", marks: 1, markCode: "M" },
                  { reasoning: "Repeatability is observed by repeating the measurement and checking agreement.", marks: 1, markCode: "M" },
                  { reasoning: "Good repeatability requires controlled technique, not just a fine scale.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Resolution = smallest detectable change; repeatability = consistency of repeated readings.",
              },
            },
            {
              id: "edxbteceng-u8-acc-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Five micrometer readings for a pin are 10.02, 10.04, 9.98, 10.01 and 10.05 mm.",
              parts: [
                { label: "a", prompt: "Calculate the mean reading.", marks: 2 },
                { label: "b", prompt: "Calculate the range.", marks: 1 },
                { label: "c", prompt: "Comment on the precision of the readings.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Mean and range", statement: "Mean = total / count; range = max - min." }],
                steps: [
                  { part: "a", reasoning: "Sum = 50.10 mm.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Mean = 50.10 / 5 = 10.02 mm.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Range = 10.05 - 9.98 = 0.07 mm.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "The spread is 0.07 mm, so the readings are reasonably precise for a micrometer.", marks: 1, markCode: "R" },
                  { part: "c", reasoning: "Precision alone does not prove accuracy against a standard.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Mean 10.02 mm; range 0.07 mm; reasonably precise.",
              },
            },
            {
              id: "edxbteceng-u8-acc-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A vernier caliper consistently reads 0.05 mm high on a calibration standard.",
              parts: [
                { label: "a", prompt: "State whether this is systematic or random error.", marks: 2 },
                { label: "b", prompt: "Describe how the error should be corrected.", marks: 2 },
                { label: "c", prompt: "Explain why repeating readings alone will not remove this error.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Systematic error", statement: "A constant offset affects every reading in the same direction." }],
                steps: [
                  { part: "a", reasoning: "It is systematic because the error is consistent and directional.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "Subtract 0.05 mm from each reading or adjust/calibrate the instrument.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Repeating only reduces random scatter; the constant offset remains.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Systematic error; correct by subtracting 0.05 mm or recalibrating.",
              },
            },
            {
              id: "edxbteceng-u8-acc-q6", difficulty: "challenge", totalMarks: 10,
              stem: "An engineer measures a bore as 20.06 mm. The instrument uncertainty is +/- 0.04 mm and the specification is 20.00 +/- 0.10 mm.",
              parts: [
                { label: "a", prompt: "State the acceptable specification limits.", marks: 2 },
                { label: "b", prompt: "State the interval containing the true bore size.", marks: 2 },
                { label: "c", prompt: "Decide whether the part definitely conforms, definitely fails, or is uncertain.", marks: 2 },
                { label: "d", prompt: "Suggest one action to reduce uncertainty.", marks: 2 },
                { label: "e", prompt: "Explain why reporting only 20.06 mm can be misleading.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Conformance with uncertainty", statement: "Conformance is uncertain when the measurement interval overlaps the specification limits." }],
                steps: [
                  { part: "a", reasoning: "Limits = 20.00 - 0.10 = 19.90 mm and 20.00 + 0.10 = 20.10 mm.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "True size lies between 20.02 mm and 20.10 mm.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "It is uncertain because the upper end reaches the specification limit.", marks: 2, markCode: "R" },
                  { part: "d", reasoning: "Use a more accurate instrument, calibrate it, control temperature or repeat measurements.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "A single value hides uncertainty and may imply false confidence.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Limits 19.90-20.10 mm; measured interval 20.02-20.10 mm; conformity uncertain.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u8-lin-notes", title: "Precision measurement — notes",
      summary: "Choose instruments by least count, read them carefully, correct zero error and report uncertainty.",
      sections: [
        { heading: "Instrument choice", body: "Use the finest practical instrument that matches the tolerance; micrometers resolve 0.01 mm and dial indicators reveal small displacements." },
        { heading: "Reading rules", body: "Sleeve plus thimble for micrometers; main scale plus vernier line for calipers; subtract zero error for dial indicators." },
        { heading: "Quality of data", body: "Accuracy is closeness to truth, precision is repeatability, and uncertainty defines the interval that may contain the true value." },
      ],
    },
  },
  {
    file: "lesson-8-2.ts", exportName: "lesson82",
    lesson: {
      id: "edxbteceng-u8-lesson-8-2", code: "8-2",
      title: "Geometric Dimensioning and Tolerancing",
      goal: "I CAN interpret GD&T feature control frames and estimate tolerance stack-up.",
      standards: [
        "Pearson BTEC Level 3 National Engineering — engineering design and quality",
        "ASME Y14.5-style GD&T principles applied to engineering drawings",
      ],
      vocabulary: [
        { term: "GD&T", definition: "A system of symbols that defines the geometric tolerance of features on a drawing." },
        { term: "Datum", definition: "A theoretically exact reference plane, axis or point from which dimensions are measured." },
        { term: "Feature control frame", definition: "A boxed callout containing the geometric characteristic symbol, tolerance and datum references." },
        { term: "MMC", definition: "Maximum material condition: the size at which a feature contains the most material." },
        { term: "Tolerance zone", definition: "The region within which the surface or axis of a feature must lie." },
        { term: "Bonus tolerance", definition: "Additional geometric tolerance gained as a feature departs from MMC." },
      ],
      concepts: [
        {
          id: "edxbteceng-u8-8-2-gdt", title: "GD&T symbols and datums",
          skill: "Interpret common GD&T controls and datum reference frames.",
          sections: [
            { heading: "Reading a feature control frame", body: "The first compartment holds the geometric characteristic symbol, such as position, flatness or perpendicularity. The second gives the tolerance value, often preceded by a diameter symbol for cylindrical zones. Later compartments name datums in order of precedence. For example, a position callout on a hole tells the inspector how far the hole axis may depart from true position relative to selected datum features." },
            { heading: "Datums and modifiers", body: "Datums establish a coordinate reference frame. Primary datums control the most degrees of freedom, secondary datums control rotation and remaining translation, and tertiary datums complete the frame. MMC or LMC modifiers in the datum or tolerance compartments can add bonus tolerance as size departs from the stated condition. A profile control describes the boundary of the whole surface, while form controls such as flatness or circularity do not need datums." },
          ],
          keyFormulas: [
            { name: "Position frame", statement: "symbol | tolerance | datum1 | datum2 | datum3" },
            { name: "MMC bonus", statement: "bonus = actual mating envelope size - MMC size for an external feature" },
            { name: "Datum precedence", statement: "primary removes translation/tilt, secondary controls rotation, tertiary completes location" },
          ],
          workedExample: {
            problem: "A hole is specified at 10.0 +/- 0.1 mm with a position tolerance of diameter 0.2 mm at MMC to datums A and B. Explain what the position symbol controls.",
            solution: "The position symbol controls the location of the hole axis within a cylindrical zone of diameter 0.2 mm at MMC. Datums A and B establish the reference frame. If the actual hole departs from MMC, bonus position tolerance may be available.",
          },
          questions: [
            {
              id: "edxbteceng-u8-gdt-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What is the primary purpose of a datum in GD&T?",
              response: { type: "mcq", choices: [
                { id: "a", text: "To provide a theoretically exact reference for measurement" },
                { id: "b", text: "To make the part heavier" },
                { id: "c", text: "To replace all dimensional tolerances" },
                { id: "d", text: "To specify surface finish" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Datum", statement: "A datum is a theoretically exact reference feature." }],
                steps: [{ reasoning: "Datums provide the reference frame for geometric controls.", marks: 1, markCode: "M" }],
                finalAnswer: "A reference for measurement",
              },
            },
            {
              id: "edxbteceng-u8-gdt-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A hole has MMC diameter 20.0 mm and LMC diameter 20.2 mm. A position tolerance of 0.4 mm applies at MMC. Calculate the maximum position tolerance at LMC if bonus tolerance applies.",
              response: { type: "numeric", parts: [{ label: "tolerance", answer: 0.6, unit: "mm" }] },
              markscheme: {
                principles: [{ kind: "principle", name: "MMC bonus", statement: "Bonus tolerance equals the departure from MMC." }],
                steps: [
                  { reasoning: "Departure from MMC = 20.2 - 20.0 = 0.2 mm.", marks: 1, markCode: "M" },
                  { reasoning: "Maximum tolerance = 0.4 + 0.2 = 0.6 mm.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "0.6 mm",
              },
            },
            {
              id: "edxbteceng-u8-gdt-q3", difficulty: "core", totalMarks: 3,
              stem: "Compare flatness and perpendicularity, stating whether each requires a datum.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Form versus orientation", statement: "Form controls shape without a datum; orientation controls relate a feature to a datum." }],
                steps: [
                  { reasoning: "Flatness controls the surface form relative to itself and needs no datum.", marks: 1, markCode: "M" },
                  { reasoning: "Perpendicularity controls the angle of a feature to a datum feature.", marks: 1, markCode: "M" },
                  { reasoning: "Perpendicularity requires a datum reference in the feature control frame.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Flatness = form, no datum; perpendicularity = orientation, needs datum.",
              },
            },
            {
              id: "edxbteceng-u8-gdt-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A drawing shows GD&T callouts for a machined plate.",
              parts: [
                { label: "a", prompt: "State what circularity controls.", marks: 1 },
                { label: "b", prompt: "State what cylindricity controls.", marks: 1 },
                { label: "c", prompt: "State what profile of a surface controls.", marks: 1 },
                { label: "d", prompt: "Give one difference between a form control and an orientation control.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "GD&T characteristics", statement: "Form controls shape; orientation and location relate features to datums." }],
                steps: [
                  { part: "a", reasoning: "Circularity controls roundness of a circular cross-section.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Cylindricity controls the combined form of a cylinder.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Profile controls the boundary of the entire surface.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Form controls need no datum, whereas orientation/location controls require datum references.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Circularity=roundness; cylindricity=cylinder form; profile=surface boundary; form controls need no datum.",
              },
            },
            {
              id: "edxbteceng-u8-gdt-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A datum reference frame lists A, B and C on a feature control frame.",
              parts: [
                { label: "a", prompt: "Explain why datum A is normally the primary datum.", marks: 2 },
                { label: "b", prompt: "State what datum B typically controls.", marks: 2 },
                { label: "c", prompt: "Explain the role of datum C.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Datum precedence", statement: "Primary, secondary and tertiary datums progressively constrain degrees of freedom." }],
                steps: [
                  { part: "a", reasoning: "Primary datum constrains the most important translation and tilt of the part.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "Secondary datum controls rotation about the primary reference.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Tertiary datum completes the coordinate frame and removes remaining translation.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "A primary=main reference; B secondary=rotation; C tertiary=remaining location.",
              },
            },
            {
              id: "edxbteceng-u8-gdt-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A hole callout shows position diameter 0.10 mm at MMC to datums A and B. The hole size is 12.0 +/- 0.1 mm.",
              parts: [
                { label: "a", prompt: "State what the position symbol controls.", marks: 2 },
                { label: "b", prompt: "Explain the meaning of MMC in the position callout.", marks: 2 },
                { label: "c", prompt: "Calculate the position tolerance at LMC for the hole.", marks: 2 },
                { label: "d", prompt: "Explain why datums A and B are needed.", marks: 2 },
                { label: "e", prompt: "State one inspection method suitable for checking position.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Position inspection", statement: "Position is checked relative to datums using layout, CMM or functional gauge." }],
                steps: [
                  { part: "a", reasoning: "It controls the hole axis within a cylindrical tolerance zone relative to the datums.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "MMC sets the stated tolerance at maximum material condition and allows bonus as size departs.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Hole MMC = smallest hole = 11.9 mm; LMC = 12.1 mm; bonus = 0.2 mm; total = 0.30 mm.", marks: 2, markCode: "A" },
                  { part: "d", reasoning: "Datums define the true position reference frame for the hole.", marks: 2, markCode: "R" },
                  { part: "e", reasoning: "A CMM, optical comparator or functional gauge can verify position.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Position zone diameter 0.10 mm at MMC; maximum 0.30 mm at LMC; use CMM or functional gauge.",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u8-8-2-stack", title: "Tolerance stack-up and inspection planning",
          skill: "Calculate worst-case and statistical tolerance stack-ups.",
          sections: [
            { heading: "Tolerance chains", body: "A tolerance stack-up adds the effects of several dimensions in a chain. In a worst-case analysis, all tolerances are added arithmetically, giving the largest possible variation. In a statistical analysis, independent random variations are combined using the root-sum-square method, which gives a smaller and more realistic estimate when many parts are produced." },
            { heading: "Inspection planning", body: "Inspection should target the dimensions that control function. Key characteristics may need 100% inspection, while stable dimensions may be sampled. When a stack-up shows possible interference, the engineer can tighten tolerances, change the design, add adjustment, or change the assembly sequence. GD&T position tolerances can reduce stack-up compared with chains of ± dimensions because they control location directly." },
          ],
          keyFormulas: [
            { name: "Worst-case stack-up", statement: "total tolerance = sum of absolute tolerances" },
            { name: "RSS stack-up", statement: "total tolerance = square root of the sum of squares of tolerances" },
            { name: "Clearance", statement: "minimum clearance = minimum hole size - maximum shaft size" },
          ],
          workedExample: {
            problem: "Three plates have thickness tolerances +/- 0.10, +/- 0.20 and +/- 0.30 mm. Find the worst-case and RSS total tolerance bands.",
            solution: "Worst-case total = 0.10 + 0.20 + 0.30 = 0.60 mm. RSS = sqrt(0.10^2 + 0.20^2 + 0.30^2) = sqrt(0.14) = 0.37 mm. The statistical estimate is smaller because independent errors rarely all align at their limits.",
          },
          questions: [
            {
              id: "edxbteceng-u8-stack-q1", difficulty: "foundation", totalMarks: 1,
              stem: "In a worst-case tolerance stack-up, tolerances are combined by:",
              response: { type: "mcq", choices: [
                { id: "a", text: "Adding all tolerances arithmetically" },
                { id: "b", text: "Averaging the tolerances" },
                { id: "c", text: "Ignoring the smallest tolerance" },
                { id: "d", text: "Multiplying the tolerances" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "method", name: "Worst-case stack-up", statement: "Add absolute tolerances for the maximum possible variation." }],
                steps: [{ reasoning: "Worst-case assumes every tolerance can occur at its limit.", marks: 1, markCode: "M" }],
                finalAnswer: "Arithmetic addition",
              },
            },
            {
              id: "edxbteceng-u8-stack-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A stack contains dimensions with tolerance bands 0.40 mm, 0.15 mm and 0.10 mm. Calculate the worst-case total tolerance band.",
              response: { type: "numeric", parts: [{ label: "tolerance", answer: 0.65, unit: "mm" }] },
              markscheme: {
                principles: [{ kind: "method", name: "Worst-case stack-up", statement: "Add the full tolerance bands of all dimensions." }],
                steps: [
                  { reasoning: "Worst-case adds every tolerance band.", marks: 1, markCode: "M" },
                  { reasoning: "Total = 0.40 + 0.15 + 0.10 = 0.65 mm.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "0.65 mm",
                commonErrors: ["Mixing one-sided and symmetric tolerances."],
              },
            },
            {
              id: "edxbteceng-u8-stack-q3", difficulty: "core", totalMarks: 3,
              stem: "Two independent tolerances are +/- 0.10 mm and +/- 0.20 mm. Calculate the RSS combined tolerance to 2 decimal places.",
              response: { type: "numeric", parts: [{ label: "tolerance", answer: 0.22, unit: "mm" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "RSS stack-up", statement: "RSS = sqrt(t1^2 + t2^2 + ...)." }],
                steps: [
                  { reasoning: "Squares: 0.10^2 = 0.01 and 0.20^2 = 0.04.", marks: 1, markCode: "M" },
                  { reasoning: "Sum = 0.05; sqrt(0.05) = 0.2236 mm.", marks: 1, markCode: "M" },
                  { reasoning: "To 2 d.p. the RSS tolerance is 0.22 mm.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "0.22 mm",
              },
            },
            {
              id: "edxbteceng-u8-stack-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A shaft-and-hole assembly has three toleranced features with half-tolerance values 0.10 mm, 0.20 mm and 0.30 mm.",
              parts: [
                { label: "a", prompt: "Calculate the worst-case total variation.", marks: 2 },
                { label: "b", prompt: "Calculate the RSS total variation to 2 decimal places.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Stack-up methods", statement: "Worst-case adds tolerances; RSS combines independent random tolerances." }],
                steps: [
                  { part: "a", reasoning: "Worst-case = 0.10 + 0.20 + 0.30 = 0.60 mm.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Squares sum = 0.01 + 0.04 + 0.09 = 0.14.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "RSS = sqrt(0.14) = 0.3742 mm.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "To 2 d.p. = 0.37 mm.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Worst-case 0.60 mm; RSS 0.37 mm",
              },
            },
            {
              id: "edxbteceng-u8-stack-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A housing has a bore specified as 30.00 +/- 0.05 mm and a shaft specified as 29.90 +/- 0.05 mm.",
              parts: [
                { label: "a", prompt: "Calculate the minimum clearance.", marks: 2 },
                { label: "b", prompt: "Calculate the maximum clearance.", marks: 2 },
                { label: "c", prompt: "State whether interference is possible.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Clearance limits", statement: "Minimum clearance = smallest hole - largest shaft; maximum = largest hole - smallest shaft." }],
                steps: [
                  { part: "a", reasoning: "Smallest hole = 29.95 mm; largest shaft = 29.95 mm; minimum clearance = 0.00 mm.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Largest hole = 30.05 mm; smallest shaft = 29.85 mm; maximum clearance = 0.20 mm.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "Interference is not possible because minimum clearance is zero, though contact is possible.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Clearance 0.00 to 0.20 mm; no interference.",
              },
            },
            {
              id: "edxbteceng-u8-stack-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A three-part stack must keep total variation below 0.50 mm. The current half-tolerances are 0.15 mm, 0.15 mm and 0.20 mm.",
              parts: [
                { label: "a", prompt: "Calculate the current worst-case variation.", marks: 2 },
                { label: "b", prompt: "Calculate the current RSS variation to 2 decimal places.", marks: 3 },
                { label: "c", prompt: "State whether the design meets the limit by worst-case analysis.", marks: 1 },
                { label: "d", prompt: "Suggest two design or tolerance changes that would improve the stack.", marks: 2 },
                { label: "e", prompt: "Explain when RSS may be used instead of worst-case.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Tolerance design", statement: "Compare worst-case and RSS outcomes against the functional limit." }],
                steps: [
                  { part: "a", reasoning: "Worst-case = 0.15 + 0.15 + 0.20 = 0.50 mm.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Squares = 0.0225 + 0.0225 + 0.04 = 0.085.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "RSS = sqrt(0.085) = 0.2915 mm.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "To 2 d.p. = 0.29 mm.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "It exactly meets the 0.50 mm worst-case limit but leaves no margin.", marks: 1, markCode: "R" },
                  { part: "d", reasoning: "Reduce tolerances, use GD&T position control, add an adjustment feature or change the design to remove one dimension.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "RSS is suitable for many independent random variations in production; worst-case is safer for critical or few-part assemblies.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Worst-case 0.50 mm; RSS 0.29 mm; meets limit exactly by worst-case.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u8-gdt-notes", title: "GD&T and tolerance stack-up — notes",
      summary: "GD&T controls form and location relative to datums; stack-ups add or combine tolerances depending on risk.",
      sections: [
        { heading: "Feature control frames", body: "Read the characteristic symbol, tolerance, modifiers and datum references in order. MMC can add bonus tolerance as a feature departs from maximum material condition." },
        { heading: "Datums", body: "Primary, secondary and tertiary datums progressively constrain translation, rotation and remaining location." },
        { heading: "Stack-up choice", body: "Use worst-case for guaranteed assembly limits; use RSS when independent random variations make the statistical estimate appropriate." },
      ],
    },
  },
  {
    file: "lesson-8-3.ts", exportName: "lesson83",
    lesson: {
      id: "edxbteceng-u8-lesson-8-3", code: "8-3",
      title: "Inspection Methods and Statistical Quality Control",
      goal: "I CAN plan inspection methods and interpret statistical process control data.",
      standards: [
        "Pearson BTEC Level 3 National Engineering — quality and inspection",
        "Statistical process control principles for engineering manufacture",
      ],
      vocabulary: [
        { term: "Inspection", definition: "The process of checking a product or process against specified requirements." },
        { term: "Attribute inspection", definition: "Inspection that classifies items as pass or fail without measuring a continuous value." },
        { term: "Variable inspection", definition: "Inspection that measures a continuous characteristic such as length or diameter." },
        { term: "Control chart", definition: "A graph of process data with control limits used to detect assignable causes." },
        { term: "Process capability", definition: "The ability of a stable process to produce within specification limits." },
        { term: "Assignable cause", definition: "A specific, identifiable source of variation such as tool wear or operator change." },
      ],
      concepts: [
        {
          id: "edxbteceng-u8-8-3-insp", title: "Inspection methods and sampling",
          skill: "Choose inspection methods, gauges and sampling plans for manufactured parts.",
          sections: [
            { heading: "Attribute versus variable inspection", body: "Attribute inspection answers pass/fail questions: does the part fit the gauge, is the surface acceptable, is the colour correct. It is fast and needs less operator skill but gives less information. Variable inspection records a measured value, such as 25.03 mm, and supports statistical analysis. Use variable inspection for critical dimensions and attribute inspection for rapid sorting or functional checks." },
            { heading: "Gauges, comparators and CMM", body: "Go/no-go gauges quickly check whether a feature is within limits. Comparators such as dial indicators and optical comparators magnify small deviations. A coordinate measuring machine (CMM) uses a precision probe to measure many points and can verify complex geometry, but it is slower and requires a controlled environment. Sampling plans balance inspection cost against risk; critical features may need 100% inspection, while stable processes can use AQL sampling." },
          ],
          keyFormulas: [
            { name: "Go/no-go", statement: "Pass if the feature enters the go gauge and does not enter the no-go gauge" },
            { name: "AQL sampling", statement: "Acceptable quality level defines the maximum tolerable defect rate in a lot" },
            { name: "Inspection coverage", statement: "critical features -> higher inspection frequency" },
          ],
          workedExample: {
            problem: "A production batch of 500 washers needs thread inspection. Should the inspector use go/no-go thread gauges or measure every thread with a micrometer?",
            solution: "Use go/no-go thread gauges for rapid functional checking unless the specification requires a measured thread value. If capability data show risk, increase sampling or inspect 100% during process changes.",
          },
          questions: [
            {
              id: "edxbteceng-u8-insp-q1", difficulty: "foundation", totalMarks: 1,
              stem: "A go/no-go plug gauge is an example of which inspection type?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Variable inspection" }, { id: "b", text: "Attribute inspection" }, { id: "c", text: "Destructive testing" }, { id: "d", text: "Statistical sampling" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Attribute inspection", statement: "Classifies items as pass or fail without measuring a continuous value." }],
                steps: [{ reasoning: "A go/no-go gauge gives a pass/fail result only.", marks: 1, markCode: "M" }],
                finalAnswer: "Attribute inspection",
              },
            },
            {
              id: "edxbteceng-u8-insp-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Give one advantage and one disadvantage of attribute inspection compared with variable inspection.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Attribute versus variable", statement: "Attribute is fast but less informative; variable measures continuous values." }],
                steps: [
                  { reasoning: "Advantage: fast, simple and suitable for high-volume sorting.", marks: 1, markCode: "M" },
                  { reasoning: "Disadvantage: no measured value, so less useful for process trending.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Fast and simple but less informative.",
              },
            },
            {
              id: "edxbteceng-u8-insp-q3", difficulty: "core", totalMarks: 3,
              stem: "Describe the steps an inspector should follow when checking a batch of machined holes with a CMM.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "CMM inspection", statement: "Prepare part, establish datums, probe points, analyse and report." }],
                steps: [
                  { reasoning: "Clean and mount the part, align it to the drawing datums.", marks: 1, markCode: "M" },
                  { reasoning: "Probe sufficient points to define the feature and verify position or size.", marks: 1, markCode: "M" },
                  { reasoning: "Compare results with specification and report deviations.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Mount, align, probe, analyse and report.",
              },
            },
            {
              id: "edxbteceng-u8-insp-q4", difficulty: "challenge", totalMarks: 5,
              stem: "An inspector must verify a 25 mm bore with tolerance +/- 0.05 mm.",
              parts: [
                { label: "a", prompt: "State the specification limits.", marks: 1 },
                { label: "b", prompt: "Explain why a bore gauge may be preferable to an outside micrometer.", marks: 2 },
                { label: "c", prompt: "Give one reason a CMM might be used instead of hand tools.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Bore inspection", statement: "Use tools that match the feature geometry and required data." }],
                steps: [
                  { part: "a", reasoning: "Limits = 24.95 mm and 25.05 mm.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "A bore gauge contacts the internal surface directly and measures the hole size more reliably.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "A CMM can measure position, form and multiple features automatically with recorded data.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "24.95-25.05 mm; bore gauge for size, CMM for geometry and data.",
              },
            },
            {
              id: "edxbteceng-u8-insp-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A batch of 1000 brackets is inspected using an AQL sampling plan.",
              parts: [
                { label: "a", prompt: "State what AQL means.", marks: 2 },
                { label: "b", prompt: "Explain why sampling is used instead of inspecting every part.", marks: 2 },
                { label: "c", prompt: "State two risks of sampling inspection.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "AQL", statement: "Acceptable quality level is the maximum tolerable defect rate for acceptance." }],
                steps: [
                  { part: "a", reasoning: "AQL defines the worst acceptable quality level in a lot.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "Sampling reduces inspection time and cost while still detecting systematic problems.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Defective parts may escape, and small lots may not represent the process.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "AQL = acceptable defect limit; sampling saves time but may miss defects.",
              },
            },
            {
              id: "edxbteceng-u8-insp-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A workshop inspects 20 brackets per hour from a CNC cell and records pass/fail results.",
              parts: [
                { label: "a", prompt: "State one advantage of recording pass/fail data.", marks: 1 },
                { label: "b", prompt: "Explain why a variable measurement may be needed for a critical bore.", marks: 2 },
                { label: "c", prompt: "Describe how the inspection plan should change after a tool change.", marks: 2 },
                { label: "d", prompt: "State two pieces of information that should appear on an inspection report.", marks: 2 },
                { label: "e", prompt: "Explain why inspection alone does not guarantee quality.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Inspection as feedback", statement: "Inspection detects problems; process control prevents them." }],
                steps: [
                  { part: "a", reasoning: "Pass/fail data quickly shows defect rate and lot acceptance.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "A measured bore supports capability analysis and trend detection.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Increase inspection frequency or inspect 100% until the process is stable again.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Part number/batch, specification, measured results, inspector and date/calibration status.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Inspection finds defects after they occur; prevention requires process control and capable design.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Record batch/spec/results; increase checks after tool change; inspection detects but does not prevent defects.",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u8-8-3-spc", title: "Statistical process control and capability",
          skill: "Interpret control charts and calculate process capability indices.",
          sections: [
            { heading: "Control charts", body: "Control charts plot process statistics over time with a centre line and upper and lower control limits. Points outside limits or non-random patterns indicate an assignable cause such as tool wear, material change or operator difference. Common charts include X-bar and range charts for variable data and p or c charts for attribute data. The aim is not zero variation but stable, predictable variation within specification." },
            { heading: "Process capability", body: "Process capability compares the natural spread of a stable process with the specification width. Cp = (USL - LSL) / (6 sigma) ignores centring; Cpk also considers how close the mean is to each limit. A capable process usually has Cpk at least 1.33 for critical features, meaning the specification limits are about four standard deviations from the mean. Capability must be calculated only when the process is stable." },
          ],
          keyFormulas: [
            { name: "Cp", statement: "Cp = (USL - LSL) / (6 sigma)" },
            { name: "Cpk", statement: "Cpk = min((USL - mean)/(3 sigma), (mean - LSL)/(3 sigma))" },
            { name: "Control limits", statement: "centre line +/- control-limit constant x standard deviation or subgroup range" },
          ],
          workedExample: {
            problem: "A stable process has mean 10.0 mm, sigma 0.4 mm, USL 11.0 mm and LSL 9.0 mm. Find Cp and Cpk.",
            solution: "Cp = (11 - 9) / (6 x 0.4) = 2 / 2.4 = 0.833. Distance to each limit = 1.0 mm, so Cpk = 1.0 / (3 x 0.4) = 0.833. The process is not capable because Cpk is below 1.33.",
          },
          questions: [
            {
              id: "edxbteceng-u8-spc-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What does a point outside the control limits on a control chart usually indicate?",
              response: { type: "mcq", choices: [
                { id: "a", text: "An assignable cause of variation" },
                { id: "b", text: "Normal random variation" },
                { id: "c", text: "The specification is too wide" },
                { id: "d", text: "The chart should be ignored" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Control limits", statement: "Out-of-control signals indicate special or assignable causes." }],
                steps: [{ reasoning: "Control limits separate common-cause variation from special causes.", marks: 1, markCode: "M" }],
                finalAnswer: "Assignable cause",
              },
            },
            {
              id: "edxbteceng-u8-spc-q2", difficulty: "foundation", totalMarks: 3,
              stem: "A process has USL 12 mm, LSL 8 mm and sigma 0.5 mm. Calculate Cp.",
              response: { type: "numeric", parts: [{ label: "Cp", answer: 1.333, tolerance: 0.001 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Cp", statement: "Cp = (USL - LSL)/(6 sigma)." }],
                steps: [
                  { reasoning: "Specification width = 12 - 8 = 4 mm.", marks: 1, markCode: "M" },
                  { reasoning: "6 sigma = 6 x 0.5 = 3 mm.", marks: 1, markCode: "M" },
                  { reasoning: "Cp = 4 / 3 = 1.333.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "1.333",
              },
            },
            {
              id: "edxbteceng-u8-spc-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why capability indices should only be calculated when a process is stable.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Stability before capability", statement: "Capability assumes the process distribution is stable and predictable." }],
                steps: [
                  { reasoning: "An unstable process has assignable causes that change its mean or spread.", marks: 1, markCode: "M" },
                  { reasoning: "Cp and Cpk depend on a representative sigma and mean.", marks: 1, markCode: "M" },
                  { reasoning: "Calculate capability only after the control chart shows statistical control.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Capability requires a stable process distribution.",
              },
            },
            {
              id: "edxbteceng-u8-spc-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A stable process has mean 10.0 mm and sigma 0.4 mm. Specification limits are USL 11.0 mm and LSL 9.0 mm.",
              parts: [
                { label: "a", prompt: "Calculate Cp.", marks: 2 },
                { label: "b", prompt: "Calculate Cpk.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Cp and Cpk", statement: "Cp measures spread; Cpk also measures centring." }],
                steps: [
                  { part: "a", reasoning: "Cp = (11 - 9)/(6 x 0.4) = 2/2.4 = 0.833.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Distance to each limit = 1.0 mm.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Cpk = 1.0/(3 x 0.4) = 0.833.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "The process is not capable because Cpk is below 1.33.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Cp = 0.833; Cpk = 0.833; not capable.",
              },
            },
            {
              id: "edxbteceng-u8-spc-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A control chart for a turning operation shows seven consecutive points above the centre line but still inside the control limits.",
              parts: [
                { label: "a", prompt: "State whether this pattern is acceptable.", marks: 1 },
                { label: "b", prompt: "Explain what the pattern suggests.", marks: 2 },
                { label: "c", prompt: "Suggest two possible causes.", marks: 2 },
                { label: "d", prompt: "State the correct action.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Non-random patterns", statement: "Runs or trends indicate process change even if limits are not exceeded." }],
                steps: [
                  { part: "a", reasoning: "It is not acceptable because the run is non-random.", marks: 1, markCode: "R" },
                  { part: "b", reasoning: "A sustained shift suggests the process mean has changed.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Tool wear, material batch change, temperature drift or operator change.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Investigate and correct the assignable cause before continuing production.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Non-random run; investigate cause and correct process.",
              },
            },
            {
              id: "edxbteceng-u8-spc-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A CNC cell produces brackets with a critical bore. The team wants a simple SPC plan.",
              parts: [
                { label: "a", prompt: "State the characteristic that should be measured.", marks: 1 },
                { label: "b", prompt: "Explain why subgroup means and ranges are used for variable data.", marks: 2 },
                { label: "c", prompt: "Describe how control limits are set.", marks: 2 },
                { label: "d", prompt: "Explain the difference between control limits and specification limits.", marks: 2 },
                { label: "e", prompt: "State the action when a point exceeds a control limit.", marks: 1 },
                { label: "f", prompt: "Explain why capability is checked after stability.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "SPC implementation", statement: "Measure key variables, plot subgroup statistics, react to signals, then assess capability." }],
                steps: [
                  { part: "a", reasoning: "Measure the bore diameter because it is the critical functional dimension.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Subgroup means track centring; ranges track within-subgroup spread.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Control limits are set from process data using constants times subgroup range or standard deviation.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Control limits describe process behaviour; specification limits define acceptable product.", marks: 2, markCode: "R" },
                  { part: "e", reasoning: "Stop or adjust the process and investigate the assignable cause.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Capability assumes a stable distribution, so unstable data gives misleading indices.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Measure bore; use X-bar/R chart; set limits from process data; distinguish control from spec limits; act on signals before capability.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u8-spc-notes", title: "Inspection and SPC — notes",
      summary: "Use the right inspection method, sample intelligently, control the process statistically and calculate capability only when stable.",
      sections: [
        { heading: "Inspection choice", body: "Attribute inspection gives pass/fail speed; variable inspection gives measured values for analysis. Gauges and CMMs suit different features." },
        { heading: "Control charts", body: "Control limits detect special causes; specification limits define product acceptability. Non-random patterns matter even inside limits." },
        { heading: "Capability", body: "Cp measures spread potential; Cpk includes centring. Aim for Cpk at least 1.33 on critical features when stable." },
      ],
    },
  },
];
