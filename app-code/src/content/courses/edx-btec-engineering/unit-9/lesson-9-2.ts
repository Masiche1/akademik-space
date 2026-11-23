import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "edxbteceng-u9-lesson-9-2",
  code: "9-2",
  title: "Gears and Power Transmission",
  goal: "I CAN calculate gear ratios and select suitable power-transmission drives.",
  standards: ["Pearson BTEC Level 3 National Engineering — mechanics and machine elements", "Gear drives, belt drives, chain drives and shaft power transmission"],
  
  vocabulary: [
    { term: "Gear ratio", definition: "Ratio of driven speed to driver speed, equal to driver teeth divided by driven teeth." },
    { term: "Spur gear", definition: "Gear with straight teeth parallel to the shaft axis." },
    { term: "Module", definition: "Gear size measure = pitch diameter divided by number of teeth." },
    { term: "Belt drive", definition: "Power transmission using friction between belts and pulleys." },
    { term: "Chain drive", definition: "Positive-drive system using sprockets and roller chain." },
    { term: "Torque", definition: "Turning moment = force x perpendicular distance from axis." },
  ],
  concepts: [
    {
      id: "edxbteceng-u9-9-2-gear",
      title: "Gear ratios and torque",
      skill: "Calculate gear ratios, speeds and torque changes.",
      lesson: {
        sections: [
          {
            heading: "Gear ratio and speed",
            body: "For meshing gears, the gear ratio equals the number of teeth on the driver divided by the number on the driven gear. A small driver driving a large driven gear reduces speed and increases torque. The opposite arrangement increases speed and reduces torque. For a simple pair, output speed = input speed x driver teeth / driven teeth. Multiple gear trains multiply individual ratios.",
          },
          {
            heading: "Module and gear size",
            body: "Module m = pitch diameter / number of teeth. Gears that mesh must have the same module and pressure angle. Pitch diameter is the diameter at which gears effectively mesh. Larger module means larger, stronger teeth; smaller module gives compact gears but lower load capacity. Backlash is the small clearance between teeth that allows rotation without jamming; too little backlash causes binding, too much causes noise and positioning error.",
          },
        ],
        keyFormulas: [
          { name: "Gear ratio", statement: "GR = driver teeth / driven teeth" },
          { name: "Output speed", statement: "n_out = n_in x driver teeth / driven teeth" },
          { name: "Module", statement: "m = pitch diameter / teeth" },
        ],
        workedExample: {
          problem: "A 20-tooth driver at 1200 rpm drives a 60-tooth gear. Find the output speed and ideal torque ratio.",
          solution: "GR = 20 / 60 = 1/3. Output speed = 1200 x 1/3 = 400 rpm. Ideal torque is multiplied by 3, ignoring losses.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u9-gear-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Using GR = driver teeth / driven teeth, what is the gear ratio for a 15-tooth driver and 45-tooth driven gear?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "0.333"
                    },
                    {
                              "id": "c",
                              "text": "30"
                    },
                    {
                              "id": "d",
                              "text": "1"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Gear ratio",
                              "statement": "GR = driver teeth / driven teeth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GR = 15 / 45 = 0.333.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "0.333"
},
        },
        {
          id: "edxbteceng-u9-gear-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 20-tooth driver at 1800 rpm drives a 60-tooth gear. Calculate the output speed.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "speed",
                              "answer": 600,
                              "unit": "rpm"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Gear ratio",
                              "statement": "n_out = n_in x driver teeth / driven teeth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "n_out = 1800 x 20 / 60.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "n_out = 600 rpm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "600 rpm"
},
        },
        {
          id: "edxbteceng-u9-gear-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the speed-torque trade-off in a gear reduction.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Power conservation",
                              "statement": "Reducing speed increases torque for similar power."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A small driver driving a large gear reduces speed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lower speed allows higher torque for approximately constant power.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Losses mean output torque is less than ideal.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Gear reduction trades speed for torque."
},
        },
        {
          id: "edxbteceng-u9-gear-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A gear has pitch diameter 120 mm and 40 teeth.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the module.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State why gears that mesh must have the same module.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the effect of too little backlash.",
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
                              "name": "Module",
                              "statement": "m = pitch diameter / teeth."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "m = 120 / 40 = 3 mm.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Same module gives matching tooth size and pitch for smooth meshing.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Too little backlash can cause binding and tooth damage.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Module 3 mm; matching module needed for correct meshing."
},
        },
        {
          id: "edxbteceng-u9-gear-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A compound gear train has a 20-tooth driver, a 40-tooth driven gear on the same shaft as a 15-tooth driver, and a final 30-tooth driven gear.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the overall speed ratio.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "If input speed is 900 rpm, find output speed.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Compound gear train",
                              "statement": "Overall ratio is product of stage ratios."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Stage 1 ratio = 20/40 = 0.5; stage 2 ratio = 15/30 = 0.5; overall speed ratio = 0.25.",
                              "marks": 3,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Output speed = 900 x 0.25 = 225 rpm.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Overall speed ratio 0.25; output 225 rpm."
},
        },
        {
          id: "edxbteceng-u9-gear-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A conveyor drive needs 300 rpm output from a 1500 rpm motor and must transmit about 2 kW.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the required speed reduction ratio.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Choose a suitable tooth pair for the first stage.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the ideal output torque if input torque is 13 N m.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "State one reason actual torque will be lower.",
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
                              "name": "Gear drive design",
                              "statement": "Speed reduction increases torque by approximately the ratio."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Reduction = 1500 / 300 = 5.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "A 20-tooth driver with a 100-tooth driven gear gives speed ratio 0.2, a reduction factor of 5.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Ideal output torque = 13 x 5 = 65 N m.",
                              "marks": 3,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Friction, bearing losses and tooth losses reduce output torque.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Ratio 5; output torque ideal 65 N m; losses reduce actual torque."
},
        },
      ],
    },
    {
      id: "edxbteceng-u9-9-2-belt",
      title: "Belts, chains and drive selection",
      skill: "Compare belt and chain drives and calculate speed ratios.",
      lesson: {
        sections: [
          {
            heading: "Belt drives",
            body: "Belt drives transmit power by friction between belts and pulleys. They are quiet, inexpensive and tolerant of slight misalignment, but can slip under overload. The speed ratio is set by pulley diameters: larger driver to smaller driven increases output speed. Open belts are common for parallel shafts; crossed belts reverse direction. Timing belts have teeth and do not slip, making them suitable for synchronous motion.",
          },
          {
            heading: "Chain drives",
            body: "Chain drives use sprockets and roller chain to transmit power positively without slip. They are efficient and suitable for longer centres and higher loads than flat belts, but they are noisier and need lubrication. Selection depends on centre distance, speed, load, environment and whether positive timing is required. Shafts must be aligned, supported by bearings and sized to resist bending and torsion.",
          },
        ],
        keyFormulas: [
          { name: "Belt speed ratio", statement: "n_driven / n_driver = D_driver / D_driven" },
          { name: "Torque and power", statement: "P = T x omega" },
          { name: "Centre distance", statement: "chain/belt span depends on pulley sizes and shaft spacing" },
        ],
        workedExample: {
          problem: "A 200 mm driver pulley at 900 rpm drives a 50 mm pulley. Find the driven speed.",
          solution: "Speed ratio = 200 / 50 = 4. Driven speed = 900 x 4 = 3600 rpm.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u9-belt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main disadvantage of a flat belt drive compared with a chain drive?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It can slip under load"
                    },
                    {
                              "id": "b",
                              "text": "It cannot transmit power"
                    },
                    {
                              "id": "c",
                              "text": "It requires no maintenance"
                    },
                    {
                              "id": "d",
                              "text": "It is always noisy"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Belt friction",
                              "statement": "Flat belts rely on friction and can slip."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slip limits load capacity and exact speed ratio.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Can slip under load"
},
        },
        {
          id: "edxbteceng-u9-belt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 200 mm driver pulley at 900 rpm drives a 50 mm pulley. Calculate the driven speed.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "speed",
                              "answer": 3600,
                              "unit": "rpm"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Belt ratio",
                              "statement": "n_driven = n_driver x D_driver / D_driven."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ratio = 200 / 50 = 4.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "n_driven = 900 x 4 = 3600 rpm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3600 rpm"
},
        },
        {
          id: "edxbteceng-u9-belt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare belt and chain drives for a conveyor.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Drive selection",
                              "statement": "Choose drive by load, distance, environment and timing needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Belts are quiet and cheap but can slip; chains are positive and handle higher loads.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Chains need lubrication and are noisier; belts tolerate misalignment better.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Choose chain for high load/long span, belt for smooth quiet drive.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Belt = quiet/cheap but slips; chain = positive/high load but noisy."
},
        },
        {
          id: "edxbteceng-u9-belt-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two shafts are 600 mm apart. A machine needs positive timing and moderate power.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest a suitable drive.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State two advantages for this application.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two disadvantages or maintenance needs.",
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
                              "name": "Drive selection",
                              "statement": "Positive timing and load capacity favour chain."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Roller chain drive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Positive drive without slip and good load capacity over distance.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Noise, lubrication and wear require maintenance.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Chain drive for positive timing; needs lubrication and is noisier."
},
        },
        {
          id: "edxbteceng-u9-belt-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A motor delivers 1.5 kW at 1500 rpm through a belt drive.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the motor torque in N m.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how torque changes if the driven pulley is smaller.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State why power is approximately conserved.",
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
                              "name": "Power and torque",
                              "statement": "P = T x omega; omega = 2 pi n / 60."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "omega = 2 pi x 1500 / 60 = 157.1 rad/s; T = 1500 / 157.1 = 9.55 N m.",
                              "marks": 3,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Smaller driven pulley increases output speed and reduces torque for similar power.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Power is conserved apart from frictional losses.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Torque about 9.55 N m; smaller driven pulley raises speed and lowers torque."
},
        },
        {
          id: "edxbteceng-u9-belt-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A packaging line needs to drive a conveyor from a motor 800 mm away.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List three factors to consider when choosing the drive.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why shaft alignment matters.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two maintenance checks for a belt drive.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State two maintenance checks for a chain drive.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain why the drive should be guarded.",
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
                              "name": "Drive maintenance",
                              "statement": "Alignment, tension and lubrication determine drive life."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Load, speed, centre distance, environment and need for positive timing.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Misalignment causes uneven wear, vibration and premature failure.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Check belt tension and wear; inspect for glazing or cracking.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Check lubrication, sprocket wear and chain stretch.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Guards prevent contact with moving belts, chains and pulleys.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Choose by load/distance/timing; align shafts; maintain tension/lubrication; guard moving parts."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u9-gear-notes",
      title: "Gears and drives — notes",
      summary: "Gear ratios trade speed for torque; belts and chains transmit power with different load and maintenance needs.",
      sections: [
        { heading: "Gears", body: "GR = driver teeth / driven teeth for speed ratio; smaller driver to larger driven reduces speed and increases torque." },
        { heading: "Module", body: "Module = pitch diameter / teeth; mating gears need the same module and pressure angle." },
        { heading: "Drives", body: "Belts are quiet but can slip; chains are positive and stronger but need lubrication." },
      ],
    },
  ],
};
