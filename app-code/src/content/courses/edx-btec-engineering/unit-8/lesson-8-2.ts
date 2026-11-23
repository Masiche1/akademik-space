import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "edxbteceng-u8-lesson-8-2",
  code: "8-2",
  title: "Geometric Dimensioning and Tolerancing",
  goal: "I CAN interpret GD&T feature control frames and estimate tolerance stack-up.",
  standards: ["Pearson BTEC Level 3 National Engineering — engineering design and quality", "ASME Y14.5-style GD&T principles applied to engineering drawings"],
  
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
      id: "edxbteceng-u8-8-2-gdt",
      title: "GD&T symbols and datums",
      skill: "Interpret common GD&T controls and datum reference frames.",
      lesson: {
        sections: [
          {
            heading: "Reading a feature control frame",
            body: "The first compartment holds the geometric characteristic symbol, such as position, flatness or perpendicularity. The second gives the tolerance value, often preceded by a diameter symbol for cylindrical zones. Later compartments name datums in order of precedence. For example, a position callout on a hole tells the inspector how far the hole axis may depart from true position relative to selected datum features.",
          },
          {
            heading: "Datums and modifiers",
            body: "Datums establish a coordinate reference frame. Primary datums control the most degrees of freedom, secondary datums control rotation and remaining translation, and tertiary datums complete the frame. MMC or LMC modifiers in the datum or tolerance compartments can add bonus tolerance as size departs from the stated condition. A profile control describes the boundary of the whole surface, while form controls such as flatness or circularity do not need datums.",
          },
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
      },
      questions: [
        {
          id: "edxbteceng-u8-gdt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the primary purpose of a datum in GD&T?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To provide a theoretically exact reference for measurement"
                    },
                    {
                              "id": "b",
                              "text": "To make the part heavier"
                    },
                    {
                              "id": "c",
                              "text": "To replace all dimensional tolerances"
                    },
                    {
                              "id": "d",
                              "text": "To specify surface finish"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Datum",
                              "statement": "A datum is a theoretically exact reference feature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Datums provide the reference frame for geometric controls.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "A reference for measurement"
},
        },
        {
          id: "edxbteceng-u8-gdt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A hole has MMC diameter 20.0 mm and LMC diameter 20.2 mm. A position tolerance of 0.4 mm applies at MMC. Calculate the maximum position tolerance at LMC if bonus tolerance applies.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "tolerance",
                              "answer": 0.6,
                              "unit": "mm"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "MMC bonus",
                              "statement": "Bonus tolerance equals the departure from MMC."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Departure from MMC = 20.2 - 20.0 = 0.2 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Maximum tolerance = 0.4 + 0.2 = 0.6 mm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.6 mm"
},
        },
        {
          id: "edxbteceng-u8-gdt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare flatness and perpendicularity, stating whether each requires a datum.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Form versus orientation",
                              "statement": "Form controls shape without a datum; orientation controls relate a feature to a datum."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flatness controls the surface form relative to itself and needs no datum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Perpendicularity controls the angle of a feature to a datum feature.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Perpendicularity requires a datum reference in the feature control frame.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Flatness = form, no datum; perpendicularity = orientation, needs datum."
},
        },
        {
          id: "edxbteceng-u8-gdt-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A drawing shows GD&T callouts for a machined plate.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what circularity controls.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State what cylindricity controls.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "State what profile of a surface controls.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Give one difference between a form control and an orientation control.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GD&T characteristics",
                              "statement": "Form controls shape; orientation and location relate features to datums."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Circularity controls roundness of a circular cross-section.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cylindricity controls the combined form of a cylinder.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Profile controls the boundary of the entire surface.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Form controls need no datum, whereas orientation/location controls require datum references.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Circularity=roundness; cylindricity=cylinder form; profile=surface boundary; form controls need no datum."
},
        },
        {
          id: "edxbteceng-u8-gdt-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A datum reference frame lists A, B and C on a feature control frame.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why datum A is normally the primary datum.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State what datum B typically controls.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the role of datum C.",
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
                              "name": "Datum precedence",
                              "statement": "Primary, secondary and tertiary datums progressively constrain degrees of freedom."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Primary datum constrains the most important translation and tilt of the part.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Secondary datum controls rotation about the primary reference.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Tertiary datum completes the coordinate frame and removes remaining translation.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "A primary=main reference; B secondary=rotation; C tertiary=remaining location."
},
        },
        {
          id: "edxbteceng-u8-gdt-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A hole callout shows position diameter 0.10 mm at MMC to datums A and B. The hole size is 12.0 +/- 0.1 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what the position symbol controls.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the meaning of MMC in the position callout.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the position tolerance at LMC for the hole.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why datums A and B are needed.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "State one inspection method suitable for checking position.",
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
                              "name": "Position inspection",
                              "statement": "Position is checked relative to datums using layout, CMM or functional gauge."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It controls the hole axis within a cylindrical tolerance zone relative to the datums.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "MMC sets the stated tolerance at maximum material condition and allows bonus as size departs.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Hole MMC = smallest hole = 11.9 mm; LMC = 12.1 mm; bonus = 0.2 mm; total = 0.30 mm.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Datums define the true position reference frame for the hole.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "A CMM, optical comparator or functional gauge can verify position.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Position zone diameter 0.10 mm at MMC; maximum 0.30 mm at LMC; use CMM or functional gauge."
},
        },
      ],
    },
    {
      id: "edxbteceng-u8-8-2-stack",
      title: "Tolerance stack-up and inspection planning",
      skill: "Calculate worst-case and statistical tolerance stack-ups.",
      lesson: {
        sections: [
          {
            heading: "Tolerance chains",
            body: "A tolerance stack-up adds the effects of several dimensions in a chain. In a worst-case analysis, all tolerances are added arithmetically, giving the largest possible variation. In a statistical analysis, independent random variations are combined using the root-sum-square method, which gives a smaller and more realistic estimate when many parts are produced.",
          },
          {
            heading: "Inspection planning",
            body: "Inspection should target the dimensions that control function. Key characteristics may need 100% inspection, while stable dimensions may be sampled. When a stack-up shows possible interference, the engineer can tighten tolerances, change the design, add adjustment, or change the assembly sequence. GD&T position tolerances can reduce stack-up compared with chains of ± dimensions because they control location directly.",
          },
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
      },
      questions: [
        {
          id: "edxbteceng-u8-stack-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a worst-case tolerance stack-up, tolerances are combined by:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Adding all tolerances arithmetically"
                    },
                    {
                              "id": "b",
                              "text": "Averaging the tolerances"
                    },
                    {
                              "id": "c",
                              "text": "Ignoring the smallest tolerance"
                    },
                    {
                              "id": "d",
                              "text": "Multiplying the tolerances"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Worst-case stack-up",
                              "statement": "Add absolute tolerances for the maximum possible variation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Worst-case assumes every tolerance can occur at its limit.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Arithmetic addition"
},
        },
        {
          id: "edxbteceng-u8-stack-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A stack contains dimensions with tolerance bands 0.40 mm, 0.15 mm and 0.10 mm. Calculate the worst-case total tolerance band.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "tolerance",
                              "answer": 0.65,
                              "unit": "mm"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Worst-case stack-up",
                              "statement": "Add the full tolerance bands of all dimensions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Worst-case adds every tolerance band.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Total = 0.40 + 0.15 + 0.10 = 0.65 mm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.65 mm",
          "commonErrors": [
                    "Mixing one-sided and symmetric tolerances."
          ]
},
        },
        {
          id: "edxbteceng-u8-stack-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two independent tolerances are +/- 0.10 mm and +/- 0.20 mm. Calculate the RSS combined tolerance to 2 decimal places.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "tolerance",
                              "answer": 0.22,
                              "unit": "mm"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "RSS stack-up",
                              "statement": "RSS = sqrt(t1^2 + t2^2 + ...)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Squares: 0.10^2 = 0.01 and 0.20^2 = 0.04.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sum = 0.05; sqrt(0.05) = 0.2236 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "To 2 d.p. the RSS tolerance is 0.22 mm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.22 mm"
},
        },
        {
          id: "edxbteceng-u8-stack-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A shaft-and-hole assembly has three toleranced features with half-tolerance values 0.10 mm, 0.20 mm and 0.30 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the worst-case total variation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the RSS total variation to 2 decimal places.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Stack-up methods",
                              "statement": "Worst-case adds tolerances; RSS combines independent random tolerances."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Worst-case = 0.10 + 0.20 + 0.30 = 0.60 mm.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Squares sum = 0.01 + 0.04 + 0.09 = 0.14.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "RSS = sqrt(0.14) = 0.3742 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "To 2 d.p. = 0.37 mm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Worst-case 0.60 mm; RSS 0.37 mm"
},
        },
        {
          id: "edxbteceng-u8-stack-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A housing has a bore specified as 30.00 +/- 0.05 mm and a shaft specified as 29.90 +/- 0.05 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the minimum clearance.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the maximum clearance.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State whether interference is possible.",
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
                              "name": "Clearance limits",
                              "statement": "Minimum clearance = smallest hole - largest shaft; maximum = largest hole - smallest shaft."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Smallest hole = 29.95 mm; largest shaft = 29.95 mm; minimum clearance = 0.00 mm.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Largest hole = 30.05 mm; smallest shaft = 29.85 mm; maximum clearance = 0.20 mm.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Interference is not possible because minimum clearance is zero, though contact is possible.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Clearance 0.00 to 0.20 mm; no interference."
},
        },
        {
          id: "edxbteceng-u8-stack-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A three-part stack must keep total variation below 0.50 mm. The current half-tolerances are 0.15 mm, 0.15 mm and 0.20 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the current worst-case variation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the current RSS variation to 2 decimal places.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State whether the design meets the limit by worst-case analysis.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Suggest two design or tolerance changes that would improve the stack.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain when RSS may be used instead of worst-case.",
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
                              "name": "Tolerance design",
                              "statement": "Compare worst-case and RSS outcomes against the functional limit."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Worst-case = 0.15 + 0.15 + 0.20 = 0.50 mm.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Squares = 0.0225 + 0.0225 + 0.04 = 0.085.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "RSS = sqrt(0.085) = 0.2915 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "To 2 d.p. = 0.29 mm.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "It exactly meets the 0.50 mm worst-case limit but leaves no margin.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Reduce tolerances, use GD&T position control, add an adjustment feature or change the design to remove one dimension.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "RSS is suitable for many independent random variations in production; worst-case is safer for critical or few-part assemblies.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Worst-case 0.50 mm; RSS 0.29 mm; meets limit exactly by worst-case."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u8-gdt-notes",
      title: "GD&T and tolerance stack-up — notes",
      summary: "GD&T controls form and location relative to datums; stack-ups add or combine tolerances depending on risk.",
      sections: [
        { heading: "Feature control frames", body: "Read the characteristic symbol, tolerance, modifiers and datum references in order. MMC can add bonus tolerance as a feature departs from maximum material condition." },
        { heading: "Datums", body: "Primary, secondary and tertiary datums progressively constrain translation, rotation and remaining location." },
        { heading: "Stack-up choice", body: "Use worst-case for guaranteed assembly limits; use RSS when independent random variations make the statistical estimate appropriate." },
      ],
    },
  ],
};
