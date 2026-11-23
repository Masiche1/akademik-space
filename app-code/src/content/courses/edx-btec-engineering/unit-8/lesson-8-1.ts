import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "edxbteceng-u8-lesson-8-1",
  code: "8-1",
  title: "Precision Measurement Instruments",
  goal: "I CAN select and use precision measuring instruments and interpret readings correctly.",
  standards: ["Pearson BTEC Level 3 National Engineering — engineering practice and quality", "Engineering metrology: linear measurement, accuracy and uncertainty"],
  
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
      id: "edxbteceng-u8-8-1-lin",
      title: "Linear measurement instruments",
      skill: "Select and read vernier calipers, micrometers and dial indicators.",
      lesson: {
        sections: [
          {
            heading: "Choosing the right instrument",
            body: "A steel rule is quick for rough dimensions, but engineering tolerances often need instruments with smaller least counts. A vernier caliper typically resolves 0.02 mm or 0.05 mm; a micrometer resolves 0.01 mm; a dial indicator resolves about 0.01 mm and is better for checking flatness, run-out and small displacements than for measuring a large diameter directly.",
          },
          {
            heading: "Reading the instruments",
            body: "For a micrometer, read the sleeve in millimetres, add half-millimetre marks if visible, then add thimble divisions times the least count. For a dial indicator, always check the zero before use and subtract zero error from the reading. Clean the anvils and faces, apply steady pressure and avoid measuring at a burr or high spot unless that is the intended feature.",
          },
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
      },
      questions: [
        {
          id: "edxbteceng-u8-lin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A vernier caliper has 10 divisions covering 9 mm of the main scale. What is its least count?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.01 mm"
                    },
                    {
                              "id": "b",
                              "text": "0.1 mm"
                    },
                    {
                              "id": "c",
                              "text": "0.02 mm"
                    },
                    {
                              "id": "d",
                              "text": "1 mm"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vernier least count",
                              "statement": "Least count = main-scale division / number of vernier divisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1 mm divided by 10 divisions gives 0.1 mm.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "0.1 mm"
},
        },
        {
          id: "edxbteceng-u8-lin-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A micrometer reads 8.5 mm on the sleeve and 26 on the thimble. The least count is 0.01 mm. Calculate the measured length in millimetres.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "length",
                              "answer": 8.76,
                              "unit": "mm"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Micrometer reading",
                              "statement": "Add sleeve reading and thimble contribution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thimble contribution = 26 x 0.01 = 0.26 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reading = 8.5 + 0.26 = 8.76 mm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8.76 mm"
},
        },
        {
          id: "edxbteceng-u8-lin-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A dial indicator has a zero error of +0.04 mm. It reads 0.21 mm when used to check a surface. Calculate the corrected measurement and explain why the zero check matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Zero correction",
                              "statement": "Corrected value = indicated value - zero error."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Zero error is +0.04 mm, so subtract it from the indication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Corrected reading = 0.21 - 0.04 = 0.17 mm.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Without zeroing, every measurement inherits the same systematic offset.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "0.17 mm"
},
        },
        {
          id: "edxbteceng-u8-lin-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Three measurements are made on machined features.",
          parts: [
          {
                    "label": "a",
                    "prompt": "A vernier reads 24 mm on the main scale and line 7 aligns on a 0.02 mm vernier. State the reading.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "A micrometer has 6.0 mm on the sleeve and 18 thimble divisions at 0.01 mm. State the reading.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "A dial indicator reads 0.46 mm with a zero error of -0.03 mm. State the corrected reading.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Instrument reading",
                              "statement": "Apply the instrument-specific reading rule and correct zero error."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Vernier contribution = 7 x 0.02 = 0.14 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Reading = 24 + 0.14 = 24.14 mm.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Thimble contribution = 18 x 0.01 = 0.18 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Reading = 6.0 + 0.18 = 6.18 mm.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Corrected = 0.46 - (-0.03) = 0.49 mm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) 24.14 mm (b) 6.18 mm (c) 0.49 mm"
},
        },
        {
          id: "edxbteceng-u8-lin-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A workshop must choose an instrument for a shaft diameter specified as 25.000 +/- 0.010 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the minimum resolution needed for reliable inspection.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Compare a vernier caliper and a micrometer for this task.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one reason a dial indicator may still be useful after machining.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Resolution and tolerance",
                              "statement": "Instrument resolution should be at least as fine as the tolerance being checked."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Tolerance is 0.010 mm, so resolution should be 0.01 mm or finer.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "A micrometer resolves 0.01 mm and is suitable; many verniers only resolve 0.02 mm or 0.05 mm.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "A dial indicator is useful for checking run-out, flatness or repeatability at a reference face.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Use at least 0.01 mm resolution; micrometer preferred for diameter, dial indicator for geometric checks."
},
        },
        {
          id: "edxbteceng-u8-lin-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A shaft is measured at three positions: 25.01 mm, 25.05 mm and 24.99 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State why three positions are measured rather than one.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the mean diameter.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the range of the readings.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Report the result to a sensible number of decimal places.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain one limitation of using only a vernier caliper for this task.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Repeated measurement",
                              "statement": "Repeat measurements reduce random effects; report mean and spread."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Multiple positions detect taper, ovality and local high or low spots.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mean = (25.01 + 25.05 + 24.99) / 3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mean = 25.0167 mm, about 25.02 mm.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Range = 25.05 - 24.99 = 0.06 mm.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Report to two decimal places because readings were to 0.01 mm and spread is small.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "A caliper may not resolve 0.01 mm reliably and contact pressure can vary.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Mean about 25.02 mm; range 0.06 mm."
},
        },
      ],
    },
    {
      id: "edxbteceng-u8-8-1-acc",
      title: "Accuracy, precision and uncertainty",
      skill: "Distinguish accuracy, precision and uncertainty in engineering measurements.",
      lesson: {
        sections: [
          {
            heading: "Accuracy versus precision",
            body: "Accuracy describes how close the average result is to the true value. Precision describes how closely repeated results agree with each other. A instrument can be precise but inaccurate if it has a systematic error, or accurate on average but imprecise if random effects are large. Calibration against a traceable standard corrects systematic error; repeated readings and controlled technique reduce random error.",
          },
          {
            heading: "Uncertainty and reporting",
            body: "Measurement uncertainty expresses doubt about a result. For simple school-level work, uncertainty may be half the smallest scale division, plus effects such as temperature or alignment. A result should be reported with its uncertainty, for example 12.34 +/- 0.05 mm, not as an over-precise single number. Significant figures must match the measurement quality.",
          },
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
      },
      questions: [
        {
          id: "edxbteceng-u8-acc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best describes precision?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How close the average result is to the true value"
                    },
                    {
                              "id": "b",
                              "text": "How closely repeated readings agree with each other"
                    },
                    {
                              "id": "c",
                              "text": "The smallest scale division"
                    },
                    {
                              "id": "d",
                              "text": "The cost of the instrument"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Precision",
                              "statement": "Precision is the closeness of agreement between repeated measurements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Precision concerns repeatability, not closeness to the true value.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Repeated readings agree closely"
},
        },
        {
          id: "edxbteceng-u8-acc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A thermometer has uncertainty +/- 0.5 degrees C and reads 21.4 degrees C. State the lower and upper bounds of the possible true temperature.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "lower",
                              "answer": 20.9,
                              "unit": "degrees C"
                    },
                    {
                              "label": "upper",
                              "answer": 21.9,
                              "unit": "degrees C"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Uncertainty interval",
                              "statement": "True value lies between reading minus uncertainty and reading plus uncertainty."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lower bound = 21.4 - 0.5 = 20.9 degrees C.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Upper bound = 21.4 + 0.5 = 21.9 degrees C.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "20.9 to 21.9 degrees C"
},
        },
        {
          id: "edxbteceng-u8-acc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between repeatability and resolution, using a measuring instrument as an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Repeatability and resolution",
                              "statement": "Repeatability is consistency under unchanged conditions; resolution is the smallest detectable change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resolution is a property of the scale or sensor, such as 0.01 mm on a micrometer.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Repeatability is observed by repeating the measurement and checking agreement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Good repeatability requires controlled technique, not just a fine scale.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Resolution = smallest detectable change; repeatability = consistency of repeated readings."
},
        },
        {
          id: "edxbteceng-u8-acc-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Five micrometer readings for a pin are 10.02, 10.04, 9.98, 10.01 and 10.05 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the mean reading.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the range.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Comment on the precision of the readings.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Mean and range",
                              "statement": "Mean = total / count; range = max - min."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sum = 50.10 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Mean = 50.10 / 5 = 10.02 mm.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Range = 10.05 - 9.98 = 0.07 mm.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "The spread is 0.07 mm, so the readings are reasonably precise for a micrometer.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Precision alone does not prove accuracy against a standard.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Mean 10.02 mm; range 0.07 mm; reasonably precise."
},
        },
        {
          id: "edxbteceng-u8-acc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A vernier caliper consistently reads 0.05 mm high on a calibration standard.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State whether this is systematic or random error.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how the error should be corrected.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why repeating readings alone will not remove this error.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Systematic error",
                              "statement": "A constant offset affects every reading in the same direction."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It is systematic because the error is consistent and directional.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Subtract 0.05 mm from each reading or adjust/calibrate the instrument.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Repeating only reduces random scatter; the constant offset remains.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Systematic error; correct by subtracting 0.05 mm or recalibrating."
},
        },
        {
          id: "edxbteceng-u8-acc-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An engineer measures a bore as 20.06 mm. The instrument uncertainty is +/- 0.04 mm and the specification is 20.00 +/- 0.10 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the acceptable specification limits.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the interval containing the true bore size.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Decide whether the part definitely conforms, definitely fails, or is uncertain.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Suggest one action to reduce uncertainty.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain why reporting only 20.06 mm can be misleading.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Conformance with uncertainty",
                              "statement": "Conformance is uncertain when the measurement interval overlaps the specification limits."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Limits = 20.00 - 0.10 = 19.90 mm and 20.00 + 0.10 = 20.10 mm.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "True size lies between 20.02 mm and 20.10 mm.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "It is uncertain because the upper end reaches the specification limit.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Use a more accurate instrument, calibrate it, control temperature or repeat measurements.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "A single value hides uncertainty and may imply false confidence.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Limits 19.90-20.10 mm; measured interval 20.02-20.10 mm; conformity uncertain."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u8-lin-notes",
      title: "Precision measurement — notes",
      summary: "Choose instruments by least count, read them carefully, correct zero error and report uncertainty.",
      sections: [
        { heading: "Instrument choice", body: "Use the finest practical instrument that matches the tolerance; micrometers resolve 0.01 mm and dial indicators reveal small displacements." },
        { heading: "Reading rules", body: "Sleeve plus thimble for micrometers; main scale plus vernier line for calipers; subtract zero error for dial indicators." },
        { heading: "Quality of data", body: "Accuracy is closeness to truth, precision is repeatability, and uncertainty defines the interval that may contain the true value." },
      ],
    },
  ],
};
