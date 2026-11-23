import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ediasbio-u9-lesson-9-3",
  code: "9-3",
  title: "Exercise, Oxygen Debt and Recovery",
  goal: "I CAN explain oxygen debt, recovery after exercise, and the cardiorespiratory adaptations to training.",
  standards: ["WBI15 Respiration, Muscles and the Internal Environment", "Exercise physiology"],
  
  vocabulary: [
    { term: "Oxygen debt", definition: "Extra oxygen consumed after exercise to oxidise and remove accumulated lactate." },
    { term: "EPOC", definition: "Excess post-exercise oxygen consumption — elevated oxygen uptake during recovery." },
    { term: "Cardiac output", definition: "Volume of blood pumped by the heart per minute = heart rate × stroke volume." },
    { term: "Stroke volume", definition: "Volume of blood pumped by one ventricle per beat." },
    { term: "Anaerobic threshold", definition: "Exercise intensity at which anaerobic respiration begins to contribute significantly to ATP supply." },
    { term: "Capillarisation", definition: "Increase in capillary density around muscle fibres improving oxygen delivery." },
  ],
  concepts: [
    {
      id: "ediasbio-u9-oxygendebt",
      title: "Oxygen debt and recovery",
      skill: "Explain oxygen debt, lactate removal and the recovery period after exercise.",
      lesson: {
        sections: [
          {
            heading: "Oxygen debt",
            body: "During intense exercise, oxygen demand exceeds supply and anaerobic respiration dominates, producing lactate faster than it can be removed. After exercise, extra oxygen — the oxygen debt or EPOC — is needed to oxidise lactate to CO2 and water (or convert it back to glucose in the liver).",
          },
          {
            heading: "Recovery curve",
            body: "Oxygen consumption stays above resting levels during recovery. A fast component restores oxygen stores in blood, muscle and myoglobin; a slower component oxidises accumulated lactate. Ventilation and heart rate remain elevated until the debt is repaid.",
          },
          {
            heading: "Effects of lactate",
            body: "Lactate lowers muscle pH, inhibiting enzymes and causing fatigue and the burning sensation. Trained athletes clear lactate faster, have a higher anaerobic threshold, and can sustain higher intensities aerobically.",
          },
        ],
        keyFormulas: [
          { name: "Oxygen debt", statement: "Extra O2 after exercise ≈ O2 needed to oxidise accumulated lactate" },
          { name: "EPOC", statement: "Excess post-exercise oxygen consumption during recovery" },
          { name: "Anaerobic threshold", statement: "Intensity where anaerobic respiration becomes significant" },
        ],
        workedExample: {
          problem: "Why do sprinters breathe heavily for several minutes after a 400 m race?",
          solution: "The sprint relied on anaerobic respiration, building up lactate. The oxygen debt must be repaid: extra oxygen oxidises the lactate, so ventilation and heart rate remain elevated during recovery.",
        },
      },
      questions: [
        {
          id: "ediasbio-u9-oxy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance accumulates in muscles during anaerobic exercise and contributes to fatigue?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Glucose"
                    },
                    {
                              "id": "b",
                              "text": "Lactic acid"
                    },
                    {
                              "id": "c",
                              "text": "Glycogen"
                    },
                    {
                              "id": "d",
                              "text": "Carbon dioxide"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lactate accumulation",
                              "statement": "Anaerobic respiration produces lactate causing fatigue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lactic acid accumulates during anaerobic exercise.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Lactic acid"
},
        },
        {
          id: "ediasbio-u9-oxy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define oxygen debt.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Oxygen debt",
                              "statement": "Extra O2 needed after exercise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oxygen debt is the extra oxygen consumed after exercise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It is needed to oxidise/remove lactate accumulated during anaerobic respiration.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Extra O2 to oxidise/remove accumulated lactate"
},
        },
        {
          id: "ediasbio-u9-oxy-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why heart rate and breathing rate increase after vigorous exercise.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Recovery response",
                              "statement": "Elevated HR and ventilation repay oxygen debt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An oxygen debt has been incurred during anaerobic exercise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Extra oxygen is needed to oxidise/remove the accumulated lactate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Heart rate rises to increase cardiac output and deliver more oxygen to muscles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ventilation increases to speed up gas exchange in the lungs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Repay oxygen debt → more O2 delivery and gas exchange"
},
        },
        {
          id: "ediasbio-u9-oxy-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the recovery period after vigorous exercise.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Recovery (EPOC)",
                              "statement": "Oxygen consumption stays elevated until debt repaid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oxygen consumption remains above the resting level (EPOC).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A fast component restores oxygen stores in blood, muscle and myoglobin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A slower component oxidises lactate to CO2 and water; some is converted back to glucose in the liver.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Breathing and heart rate stay elevated to supply the extra oxygen.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Rates return to resting values once the oxygen debt is fully repaid.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "EPOC: O2 stores restored then lactate oxidised until debt repaid"
},
        },
        {
          id: "ediasbio-u9-oxy-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the molecule whose build-up causes the burning sensation in muscles during intense exercise.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State two effects of lactic acid on muscle performance.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Define the anaerobic threshold.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State one way lactate is removed after exercise.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lactate and anaerobic threshold",
                              "statement": "Lactate causes fatigue; threshold marks anaerobic onset."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Lactic acid (lactate).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lowers muscle pH, inhibiting enzymes → fatigue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Causes muscle burning/cramps and reduces contraction force.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Anaerobic threshold is the exercise intensity at which anaerobic respiration begins to make a significant contribution to ATP supply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Beyond it, lactate accumulates faster than it is removed.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Oxidised to CO2 and water (or converted back to glucose in the liver).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lactate; fatigue/low pH; threshold = anaerobic onset; oxidised/converted"
},
        },
        {
          id: "ediasbio-u9-oxy-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Explain the physiological events during and after a 400 m sprint.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the type of respiration used during the sprint.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe what happens to lactate during the sprint.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe the immediate recovery phase.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Describe the longer-term recovery phase.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Exercise and recovery",
                              "statement": "Anaerobic sprint → lactate → oxygen debt repayment."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sprint relies mainly on anaerobic respiration because oxygen demand exceeds supply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Only 2 ATP per glucose, but produced rapidly.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pyruvate is reduced to lactate, which accumulates in muscles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lactate lowers pH causing fatigue; NAD+ is regenerated so glycolysis continues.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Heart rate and ventilation rise sharply to increase oxygen delivery and gas exchange.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Oxygen stores in blood, muscle and myoglobin are restored first (fast component of EPOC).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Lactate begins to be oxidised/removed using the extra oxygen.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Lactate is oxidised to CO2 and water or converted back to glucose in the liver.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Oxygen consumption stays elevated until the full oxygen debt is repaid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Eventually breathing and heart rate return to resting levels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Anaerobic sprint → lactate build-up → EPOC repays oxygen debt"
},
        },
      ],
    },
    {
      id: "ediasbio-u9-cardio",
      title: "Cardiorespiratory adaptations to exercise",
      skill: "Calculate cardiac output and describe adaptations of heart, lungs and muscles to training.",
      lesson: {
        sections: [
          {
            heading: "Cardiac adaptations",
            body: "Regular training enlarges (hypertrophies) the heart muscle, increasing stroke volume. Cardiac output = heart rate × stroke volume rises during exercise because both increase. Trained hearts have lower resting heart rates because each beat pumps more blood.",
          },
          {
            heading: "Respiratory adaptations",
            body: "Ventilation rate and depth increase to meet oxygen demand. Training increases capillarisation around muscle fibres (more blood vessels), haemoglobin concentration and oxygen-carrying capacity, and myoglobin stores in muscle.",
          },
          {
            heading: "Muscular adaptations",
            body: "Muscles develop more mitochondria, raising aerobic capacity and the anaerobic threshold. Slow-twitch fibres increase for endurance; lactic acid clearance improves, so less lactate accumulates at a given intensity.",
          },
        ],
        keyFormulas: [
          { name: "Cardiac output", statement: "CO = heart rate × stroke volume" },
          { name: "Units", statement: "cm³/min or dm³/min (1 dm³ = 1000 cm³)" },
        ],
        workedExample: {
          problem: "At rest, heart rate = 70 beats/min and stroke volume = 70 cm³. During exercise, heart rate = 180 and stroke volume = 120 cm³. Calculate cardiac output in each case.",
          solution: "Rest: 70 × 70 = 4900 cm³/min ≈ 4.9 dm³/min. Exercise: 180 × 120 = 21 600 cm³/min = 21.6 dm³/min — about 4.4 times higher.",
        },
      },
      questions: [
        {
          id: "ediasbio-u9-car-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation gives cardiac output?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Heart rate × stroke volume"
                    },
                    {
                              "id": "b",
                              "text": "Heart rate + stroke volume"
                    },
                    {
                              "id": "c",
                              "text": "Stroke volume ÷ heart rate"
                    },
                    {
                              "id": "d",
                              "text": "Heart rate − stroke volume"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cardiac output",
                              "statement": "CO = HR × SV."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cardiac output equals heart rate times stroke volume.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** HR × SV"
},
        },
        {
          id: "ediasbio-u9-car-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A person has a resting heart rate of 60 beats/min and a stroke volume of 80 cm³. Calculate the cardiac output in dm³/min.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 4.8,
                              "unit": "dm³/min"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cardiac output",
                              "statement": "CO = HR × SV."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CO = 60 × 80 = 4800 cm³/min.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Convert to dm³: 4800 cm³ = 4.8 dm³/min.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4.8 dm³/min"
},
        },
        {
          id: "ediasbio-u9-car-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how cardiac output increases during exercise.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cardiac output during exercise",
                              "statement": "Both HR and SV rise → CO increases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heart rate increases (sympathetic stimulation/adrenaline).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Stroke volume increases because the ventricles contract more strongly and fill more.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Since CO = HR × SV, the product rises substantially.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More blood is delivered per minute, supplying O2 and glucose to working muscles.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "HR and SV both rise → cardiac output increases"
},
        },
        {
          id: "ediasbio-u9-car-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe three adaptations of the cardiorespiratory system to regular exercise training.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Training adaptations",
                              "statement": "Heart, vessels and muscles adapt to raise aerobic capacity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heart muscle hypertrophy increases stroke volume and lowers resting heart rate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Capillarisation increases around muscle fibres, improving oxygen delivery.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More mitochondria in muscles raises aerobic capacity and the anaerobic threshold.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increased haemoglobin/myoglobin improves oxygen carriage and storage.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Lactate clearance improves, so less fatigue at a given intensity.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Bigger heart SV, more capillaries, more mitochondria, better O2 carriage"
},
        },
        {
          id: "ediasbio-u9-car-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define stroke volume.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate cardiac output when heart rate is 150 beats/min and stroke volume is 100 cm³. Give your answer in dm³/min.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Name two factors that can increase stroke volume.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State the usual units of cardiac output.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cardiac output",
                              "statement": "CO = HR × SV; units cm³/min or dm³/min."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Stroke volume is the volume of blood pumped by one ventricle per beat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "CO = 150 × 100 = 15 000 cm³/min.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "= 15 dm³/min.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Stronger ventricular contraction (more forceful ejection).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Greater end-diastolic volume (more blood filling the ventricle).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "cm³/min or dm³/min.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "SV per beat; 15 dm³/min; stronger contraction/greater filling; cm³ or dm³ per min"
},
        },
        {
          id: "ediasbio-u9-car-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A trained athlete has a resting heart rate of 50 beats/min and stroke volume of 90 cm³. During a race, heart rate rises to 190 beats/min and stroke volume to 130 cm³.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the resting cardiac output in dm³/min.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the cardiac output during the race in dm³/min.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the percentage increase in cardiac output.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why a trained athlete can have a lower resting heart rate than an untrained person.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cardiac output",
                              "statement": "CO = HR × SV; compare rest vs exercise."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Resting CO = 50 × 90 = 4500 cm³/min = 4.5 dm³/min.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Correct conversion to dm³/min.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Exercise CO = 190 × 130 = 24 700 cm³/min.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "= 24.7 dm³/min.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Increase = 24.7 − 4.5 = 20.2 dm³/min.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Percentage increase = (20.2 / 4.5) × 100 ≈ 449%.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Training enlarges the heart so stroke volume is larger at rest.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "A lower heart rate can therefore maintain the same resting cardiac output.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Increased parasympathetic (vagal) tone slows the resting heart.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "This leaves a greater heart-rate reserve for exercise.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Rest 4.5, exercise 24.7 dm³/min; ≈449% increase; larger SV → lower resting HR",
          "commonErrors": [
                    "Using cm³/min without converting to dm³/min.",
                    "Calculating percentage of exercise CO instead of increase."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u9-ex-notes",
      title: "Exercise, oxygen debt and recovery — notes",
      summary: "Intense exercise → lactate + oxygen debt; recovery (EPOC) restores O2 stores then oxidises lactate. CO = HR × SV.",
      sections: [
        { heading: "Key idea", body: "Oxygen debt = extra oxygen needed after exercise, mainly to oxidise accumulated lactate." },
        { heading: "Calculation", body: "Cardiac output = heart rate × stroke volume; convert cm³ to dm³ (÷1000) for dm³/min." },
      ],
    },
  ],
};
