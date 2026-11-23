import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "edxbteceng-u6-lesson-6-2",
  code: "6-2",
  title: "Semiconductors, Sensors and Signal Conditioning",
  goal: "I CAN explain how diodes and transistors control current, design simple LED and transistor circuits, and describe how sensors convert physical quantities to electrical signals.",
  standards: ["Pearson BTEC L3 National Engineering — Electronic and control principles", "Semiconductors, sensors and signal conditioning"],
  
  vocabulary: [
    { term: "Diode", definition: "A semiconductor that allows current to flow in one direction only." },
    { term: "LED", definition: "Light-emitting diode — emits light when forward biased." },
    { term: "Transistor", definition: "A semiconductor device that uses a small base current to control a larger collector current, acting as a switch or amplifier." },
    { term: "Sensor", definition: "A device that detects a physical quantity (light, temperature, pressure) and converts it to an electrical signal." },
    { term: "Potential divider", definition: "A circuit of two resistors that produces a voltage proportional to the ratio of resistances." },
    { term: "ADC", definition: "Analogue-to-digital converter — converts a continuous voltage into a binary number." },
    { term: "LDR", definition: "Light-dependent resistor — resistance falls as light intensity rises." },
  ],
  concepts: [
    {
      id: "edxbteceng-u6-2-semiconductors",
      title: "Diodes, transistors and LEDs",
      skill: "Calculate series resistors for LEDs and transistor base circuits, and explain the switching action of diodes and transistors.",
      lesson: {
        sections: [
          {
            heading: "Diodes and LEDs",
            body: "A **diode** conducts current in one direction only (forward bias); in reverse it blocks it — this makes it ideal for rectifiers converting AC to DC. An **LED** is a diode that emits light; it has a forward voltage drop (≈ 2 V for red, ≈ 3 V for blue/white) and must always have a **series resistor** to limit current.\n\nFor an LED on a supply $V_S$ with forward voltage $V_F$ and desired current $I$: $R = (V_S - V_F)/I$.",
          },
          {
            heading: "Transistors as switches",
            body: "A **bipolar transistor** (BJT) has three terminals — base, collector, emitter. A small base current controls a much larger collector current. Used as a **switch**: a tiny input signal (e.g. from a sensor through a microcontroller) drives the transistor fully on or off, switching a bigger load like a motor or relay.\n\nThe base needs a resistor $R_B = (V_{in} - V_{BE})/I_B$ to set the base current, where $V_{BE} \\approx 0.7\\ \\text{V}$. In saturation the transistor is fully on (collector-emitter ≈ 0 V); in cutoff fully off.",
          },
        ],
        keyFormulas: [
          { name: "LED resistor", statement: "$R = (V_S - V_F)/I$" },
          { name: "Transistor base resistor", statement: "$R_B = (V_{in} - V_{BE})/I_B$, $V_{BE} \\approx 0.7$ V" },
          { name: "Diode", statement: "conducts forward only; $V_F \\approx 0.7$ V (Si), LED $\\approx 2$ V" },
        ],
        workedExample: {
          problem: "An LED with forward voltage 2 V and required current 20 mA is powered from 5 V. Calculate the series resistor.",
          solution: "$R = (V_S - V_F)/I = (5 - 2)/0.020 = 3/0.020 = 150\\ \\Omega$.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u6-2-semiconductors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an LED need in series to prevent it burning out?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A current-limiting resistor"
                    },
                    {
                              "id": "b",
                              "text": "A capacitor"
                    },
                    {
                              "id": "c",
                              "text": "An inductor"
                    },
                    {
                              "id": "d",
                              "text": "A second LED"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "LED protection",
                              "statement": "LEDs need a series resistor to limit current."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Without a resistor the LED draws too much current and is destroyed; a series resistor limits it.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) current-limiting resistor"
},
        },
        {
          id: "edxbteceng-u6-2-semiconductors-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An LED with forward voltage 2 V needs 20 mA and is connected to a 5 V supply. Calculate the series resistor value in ohms.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "resistance",
                              "answer": 150,
                              "unit": "Ω"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "LED resistor",
                              "statement": "$R = (V_S - V_F)/I$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$R = (5 - 2)/0.020 = 3/0.020$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$R = 150\\ \\Omega$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$150\\ \\Omega$"
},
        },
        {
          id: "edxbteceng-u6-2-semiconductors-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a diode's forward and reverse bias, and state what a rectifier does with this property.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Diode action",
                              "statement": "Conducts in forward bias, blocks in reverse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Forward bias: anode more positive than cathode → current flows (with ~0.7 V drop for Si).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Reverse bias: cathode more positive → almost no current flows.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A rectifier uses this one-way action to convert AC to pulsating DC.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Forward = conducts, reverse = blocks; rectifier turns AC into DC."
},
        },
        {
          id: "edxbteceng-u6-2-semiconductors-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A transistor switch controls a 12 V, 100 mA relay. The base is driven from 5 V through a resistor. $V_{BE} = 0.7$ V and the required base current is 0.5 mA.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the base resistor value.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the transistor is described as a switch.",
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
                              "name": "Base resistor",
                              "statement": "$R_B = (V_{in} - V_{BE})/I_B$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$R_B = (5 - 0.7)/0.0005 = 4.3/0.0005$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$= 8600\\ \\Omega$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "A small base current fully turns the transistor on or off.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "It controls the larger collector current to the relay — on/off like a switch.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $8600\\ \\Omega$ (b) small base signal switches larger load current"
},
        },
        {
          id: "edxbteceng-u6-2-semiconductors-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two LEDs are connected in series across a 9 V supply. Each LED has forward voltage 2 V and forward current 20 mA.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the total forward voltage drop across both LEDs.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the series resistor needed.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain what happens if the resistor is omitted.",
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
                              "name": "LED resistor",
                              "statement": "$R = (V_S - V_F)/I$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Total $V_F = 2 \\times 2 = 4\\ \\text{V}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$R = (9 - 4)/0.020 = 5/0.020$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$= 250\\ \\Omega$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Without the resistor current is uncontrolled and too high.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "The LEDs overheat and burn out.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 4 V (b) $250\\ \\Omega$ (c) LEDs burn out from excess current"
},
        },
        {
          id: "edxbteceng-u6-2-semiconductors-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A microcontroller pin (5 V, max 20 mA) must switch a 12 V, 2 A motor using a transistor.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the motor cannot be connected directly to the microcontroller pin.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the role of the transistor in this circuit.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State why a flyback diode is connected across the motor.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State two reasons a relay might be used instead of a transistor for some loads.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "State the approximate base-emitter voltage of a silicon transistor.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Transistor switching",
                              "statement": "Small base current controls larger collector current."
                    },
                    {
                              "kind": "principle",
                              "name": "Back EMF",
                              "statement": "Inductive loads produce voltage spikes when switched off."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The motor draws 2 A — far above the pin's 20 mA limit.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "a",
                              "reasoning": "The pin would be damaged; also the motor needs 12 V not 5 V.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "The transistor uses the small pin current to switch the larger motor current.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "It isolates the delicate logic circuit from the high-power load.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "When the motor is switched off its inductance produces a high-voltage spike.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "The flyback diode gives this spike a safe path, protecting the transistor.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Any two of: electrical isolation, switching AC loads, higher current capacity, protecting the control circuit.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "e",
                              "reasoning": "≈ 0.7 V.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) current/voltage exceed pin rating (b) transistor switches load (c) flyback diode absorbs spike (d) isolation/AC/high current (e) 0.7 V"
},
        },
      ],
    },
    {
      id: "edxbteceng-u6-2-sensors",
      title: "Sensors, transducers and signal conditioning",
      skill: "Describe how common sensors convert physical quantities to electrical signals, apply the potential divider, and explain ADC conversion and signal conditioning.",
      lesson: {
        sections: [
          {
            heading: "Common sensors",
            body: "Sensors (transducers) convert a physical quantity into an electrical signal:\n\n- **LDR** (light-dependent resistor): resistance falls as light rises — used in light sensors and automatic lights.\n- **Thermistor**: resistance changes with temperature — NTC type falls as temperature rises; used in thermostats.\n- **Potentiometer**: variable resistor giving a voltage proportional to position — used for angle/speed sensing.\n- **Strain gauge**: resistance changes with deformation — used in load cells and pressure sensors.\n- **Pressure sensor / encoder**: pressure transducers and rotary encoders give position and motion data.",
          },
          {
            heading: "Signal conditioning and ADC",
            body: "Sensor outputs are usually analogue and small, so they are **conditioned** before use: amplified, filtered (to remove noise), and converted to digital by an **ADC** (analogue-to-digital converter). An n-bit ADC divides the input range into $2^n$ levels; a 10-bit ADC on a 5 V range has resolution $5/1024 \\approx 4.9\\ \\text{mV}$.\n\nA **potential divider** converts a varying resistance into a varying voltage: $V_{out} = V_{in} \\times R_2/(R_1 + R_2)$, where $R_2$ is the sensor. This voltage is then amplified and digitised.",
          },
        ],
        keyFormulas: [
          { name: "Potential divider", statement: "$V_{out} = V_{in} \\times \\dfrac{R_2}{R_1 + R_2}$" },
          { name: "ADC resolution", statement: "$\\text{resolution} = V_{range}/2^n$" },
          { name: "Thermistor (NTC)", statement: "resistance falls as temperature rises" },
          { name: "LDR", statement: "resistance falls as light intensity rises" },
        ],
        workedExample: {
          problem: "A potential divider has Vin = 9 V, R1 = 1 kΩ fixed and a thermistor R2 whose resistance is 2 kΩ. Find Vout across the thermistor.",
          solution: "$V_{out} = 9 \\times 2000/(1000 + 2000) = 9 \\times 2000/3000 = 6\\ \\text{V}$.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u6-2-sensors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does the resistance of an LDR change as light intensity increases?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It decreases"
                    },
                    {
                              "id": "b",
                              "text": "It increases"
                    },
                    {
                              "id": "c",
                              "text": "It stays constant"
                    },
                    {
                              "id": "d",
                              "text": "It becomes zero"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "LDR",
                              "statement": "Resistance falls as light intensity rises."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "LDR = light-dependent resistor; more light → lower resistance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) decreases"
},
        },
        {
          id: "edxbteceng-u6-2-sensors-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A potential divider has Vin = 9 V, R1 = 1000 Ω and R2 = 2000 Ω. Calculate Vout across R2.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "voltage",
                              "answer": 6,
                              "unit": "V"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Potential divider",
                              "statement": "$V_{out} = V_{in} \\times R_2/(R_1+R_2)$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$V_{out} = 9 \\times 2000/(1000+2000) = 9 \\times 2000/3000$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$V_{out} = 6\\ \\text{V}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$6\\ \\text{V}$"
},
        },
        {
          id: "edxbteceng-u6-2-sensors-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a thermistor can be used to control a heater, including the role of the potential divider and what happens as temperature rises (NTC thermistor).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "NTC thermistor",
                              "statement": "Resistance falls as temperature rises."
                    },
                    {
                              "kind": "formula",
                              "name": "Potential divider",
                              "statement": "$V_{out} = V_{in} R_2/(R_1+R_2)$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The thermistor's resistance changes with temperature; in a potential divider this changes Vout.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "For an NTC thermistor, as temperature rises resistance falls, so its share of voltage falls → Vout drops.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "When Vout falls below a set threshold the control circuit switches the heater off (feedback).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Thermistor resistance falls with temperature → divider voltage drops → heater switches off at setpoint."
},
        },
        {
          id: "edxbteceng-u6-2-sensors-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A 10-bit ADC converts an analogue voltage in the range 0–5 V to digital.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the number of digital levels available.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the resolution (smallest detectable voltage change).",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State one reason for using a higher-resolution ADC.",
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
                              "name": "ADC resolution",
                              "statement": "$V_{range}/2^n$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$2^{10} = 1024$ levels.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Resolution $= 5/1024$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\approx 0.00488\\ \\text{V} = 4.88\\ \\text{mV}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Finer measurement of small voltage changes / less quantisation error.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 1024 (b) $\\approx 4.88$ mV (c) better precision"
},
        },
        {
          id: "edxbteceng-u6-2-sensors-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A light sensor uses an LDR in a potential divider with Vin = 5 V. In bright light the LDR resistance is 500 Ω; in darkness it is 10 kΩ. R1 = 4.7 kΩ is fixed.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the circuit arrangement (which resistor is the sensor).",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate Vout in bright light (assume LDR is R2).",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate Vout in darkness.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State what this voltage change could be used for.",
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
                              "name": "Potential divider",
                              "statement": "$V_{out} = V_{in} R_2/(R_1+R_2)$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The LDR is the variable resistor R2; R1 is fixed — Vout varies with light.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bright: $V_{out} = 5 \\times 500/(4700+500) = 5 \\times 500/5200$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\approx 0.48\\ \\text{V}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Dark: $V_{out} = 5 \\times 10000/(4700+10000) = 5 \\times 10000/14700$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "$\\approx 3.40\\ \\text{V}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "To switch a light on when dark — Vout crosses a threshold, triggering the control circuit.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) LDR=R2 (b) ~0.48 V bright (c) ~3.40 V dark (d) automatic light control"
},
        },
        {
          id: "edxbteceng-u6-2-sensors-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "An engineer is designing a temperature monitoring system for a server room.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name two suitable sensors for measuring temperature.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain how a thermistor converts temperature into an electrical signal.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the role of the potential divider in reading the thermistor.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why the analogue voltage must be converted by an ADC before a microcontroller uses it.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "State one advantage of a digital sensor output over analogue.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "State one disadvantage of using a thermistor for precision measurement.",
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
                              "name": "Sensor",
                              "statement": "Converts a physical quantity to an electrical signal."
                    },
                    {
                              "kind": "principle",
                              "name": "Signal conditioning",
                              "statement": "Amplify, filter and digitise sensor signals."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Thermistor, thermocouple, RTD, semiconductor temperature sensor.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Its resistance changes with temperature.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "In a circuit this resistance change produces a voltage/current change.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "The divider converts the varying resistance into a varying voltage $V_{out} = V_{in}R_2/(R_1+R_2)$.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "This voltage can be measured/amplified and compared to a setpoint.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Microcontrollers process binary digits, not continuous voltages.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "The ADC samples the voltage and outputs a binary number proportional to it.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Digital is noise-resistant and easy to store/process.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "f",
                              "reasoning": "Non-linear resistance-temperature relationship needs calibration/linearisation.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) thermistor/thermocouple (b) resistance→voltage (c) divider reads it (d) MCU needs binary (e) noise immunity (f) non-linear"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u6-sensors-notes",
      title: "Semiconductors and sensors — notes",
      summary: "LEDs need series resistors; transistors switch loads; sensors convert physical→electrical; ADC digitises analogue signals.",
      sections: [
        { heading: "Key formulas", body: "$R_{LED} = (V_S - V_F)/I$; $R_B = (V_{in}-V_{BE})/I_B$; $V_{out} = V_{in}R_2/(R_1+R_2)$; ADC res $= V_{range}/2^n$." },
        { heading: "Sensor direction", body: "LDR & NTC thermistor: resistance FALLS as stimulus rises. Strain gauge: resistance rises with strain." },
        { heading: "Signal chain", body: "Sensor → potential divider/amplifier → ADC → microcontroller → control output." },
      ],
    },
  ],
};
