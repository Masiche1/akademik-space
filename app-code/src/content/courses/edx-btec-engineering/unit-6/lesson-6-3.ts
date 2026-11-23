import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "edxbteceng-u6-lesson-6-3",
  code: "6-3",
  title: "Control Systems and Automation",
  goal: "I CAN distinguish open-loop and closed-loop control, explain feedback and PID action, and describe how PLCs execute ladder-logic programs.",
  standards: ["Pearson BTEC L3 National Engineering — Electronic and control principles", "Control systems: feedback, PLCs, automation"],
  
  vocabulary: [
    { term: "Open-loop control", definition: "Control without feedback — the output is not measured or corrected." },
    { term: "Closed-loop control", definition: "Control using feedback — the output is measured and compared with the setpoint to correct errors." },
    { term: "Setpoint", definition: "The desired value of the controlled variable." },
    { term: "Error signal", definition: "The difference between setpoint and measured value." },
    { term: "PID controller", definition: "A controller combining Proportional, Integral and Derivative terms to minimise error." },
    { term: "PLC", definition: "Programmable logic controller — an industrial computer running ladder-logic programs to control machines." },
    { term: "Ladder logic", definition: "A graphical programming language resembling electrical relay circuits, using contacts and coils." },
  ],
  concepts: [
    {
      id: "edxbteceng-u6-3-feedback",
      title: "Open-loop, closed-loop and PID control",
      skill: "Distinguish open- and closed-loop systems, identify components of a feedback loop, and explain proportional, integral and derivative action.",
      lesson: {
        sections: [
          {
            heading: "Open vs closed loop",
            body: "An **open-loop** system has no feedback — it runs on a fixed program regardless of result. A toaster or microwave timer is open-loop: it heats for a set time whether or not the bread burns.\n\nA **closed-loop** (feedback) system measures the output and compares it with a **setpoint**. The **error signal** = setpoint − measured value drives the controller to correct the output. Examples: room thermostat, cruise control, robot arm position, chemical process temperature.\n\nA basic loop: sensor → controller → actuator → process → sensor (feedback).",
          },
          {
            heading: "PID control",
            body: "A **PID** controller combines three terms to minimise error:\n\n- **Proportional (P)**: output proportional to current error — fast response but may leave steady-state error or oscillate.\n- **Integral (I)**: accumulates past error to eliminate steady-state offset — can cause overshoot.\n- **Derivative (D)**: reacts to the rate of change of error — damps oscillation and improves stability.\n\nReal controllers tune P, I, D gains for the process. Many industrial loops are actually PI controllers.",
          },
        ],
        keyFormulas: [
          { name: "Error", statement: "$e = \\text{setpoint} - \\text{measured}$" },
          { name: "Proportional", statement: "$P = K_p \\cdot e$" },
          { name: "Closed loop", statement: "output → sensor → compare to setpoint → controller → actuator" },
        ],
        workedExample: {
          problem: "A room thermostat setpoint is 21 °C. The measured temperature is 19 °C and the controller output is proportional with Kp = 10%/°C. What is the controller output?",
          solution: "Error e = 21 − 19 = 2 °C. Output = Kp × e = 10% × 2 = 20% (e.g. heater at 20% power).",
        },
      },
      questions: [
        {
          id: "edxbteceng-u6-3-feedback-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of an open-loop control system?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A microwave oven timer"
                    },
                    {
                              "id": "b",
                              "text": "A room thermostat"
                    },
                    {
                              "id": "c",
                              "text": "Cruise control"
                    },
                    {
                              "id": "d",
                              "text": "A robot arm position controller"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Open-loop control",
                              "statement": "No feedback; output not measured."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Microwave timer heats for a fixed time without checking temperature — open-loop.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) microwave timer",
          "commonErrors": [
                    "Confusing open-loop with closed-loop — open-loop has no sensor feedback."
          ]
},
        },
        {
          id: "edxbteceng-u6-3-feedback-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define closed-loop control and name its essential components.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Closed-loop control",
                              "statement": "Output measured and compared with setpoint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Closed-loop uses feedback: output is measured and corrected.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Components: sensor, controller, actuator, process — in a feedback loop.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Feedback control with sensor, controller, actuator, process."
},
        },
        {
          id: "edxbteceng-u6-3-feedback-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A thermostat setpoint is 22 °C and the room measures 20 °C. Explain how the feedback loop corrects this, naming the error signal.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Error",
                              "statement": "$e = $ setpoint − measured"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Error e = 22 − 20 = 2 °C — the room is too cold.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The controller sees positive error and commands the heater on (via actuator).",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "As temperature rises, error shrinks and the controller reduces output — feedback stabilises at setpoint.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "e = 2 °C → heater turns on → temperature rises → error → 0."
},
        },
        {
          id: "edxbteceng-u6-3-feedback-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A proportional controller has gain Kp = 5 %/°C controlling an oven with setpoint 180 °C.",
          parts: [
          {
                    "label": "a",
                    "prompt": "The oven measures 170 °C. Calculate the controller output.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State one limitation of using only a proportional controller.",
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
                              "name": "Proportional",
                              "statement": "$output = K_p \\times e$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "e = 180 − 170 = 10 °C.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Output = 5 × 10 = 50%.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "P-only control may leave a steady-state error (offset) — it may stabilise below setpoint.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Or may oscillate if gain too high.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 50% (b) steady-state error / possible oscillation"
},
        },
        {
          id: "edxbteceng-u6-3-feedback-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A PID controller controls the speed of a conveyor belt.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what the P, I and D terms stand for.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect of the integral term on steady-state error.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the effect of the derivative term on oscillation.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State one real-world application of closed-loop control in engineering.",
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
                              "name": "PID",
                              "statement": "Proportional + Integral + Derivative control."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Proportional, Integral, Derivative.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "I accumulates past error over time.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "This eliminates steady-state offset (brings output exactly to setpoint).",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "D reacts to the rate of change of error.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "It dampens oscillations and improves stability by opposing rapid changes.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Any valid: robot arm, CNC machine, chemical plant, HVAC, vehicle cruise control.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) P/I/D (b) I removes steady-state error (c) D damps oscillation (d) e.g. robot arm"
},
        },
        {
          id: "edxbteceng-u6-3-feedback-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A chemical reactor must hold temperature at 85 °C. A sensor measures temperature, a controller compares it with the setpoint, and a valve controls steam input.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Draw/describe the feedback loop for this system (identify each element).",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "The measured temperature is 82 °C. Calculate the error signal.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain what the controller does with this error.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why this is closed-loop rather than open-loop.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "State two disturbances that could push the temperature away from setpoint.",
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
                              "name": "Feedback loop",
                              "statement": "Sensor → controller → actuator → process → back to sensor."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sensor = temperature sensor; controller = compares to setpoint & computes output; actuator = steam valve; process = reactor.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "e = 85 − 82 = 3 °C.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Positive error → controller increases valve opening to add more steam/heat.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "As temperature rises toward setpoint, error shrinks and output reduces — self-correcting.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "The output (temperature) is measured and fed back for correction.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Open-loop would just set a fixed valve position with no measurement.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Any two of: ambient temperature change, raw material temperature, reaction exotherm, steam pressure fluctuation, valve wear.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) sensor→controller→valve→reactor loop (b) 3 °C (c) opens valve more (d) measured feedback (e) e.g. ambient change"
},
        },
      ],
    },
    {
      id: "edxbteceng-u6-3-plc",
      title: "PLCs and ladder logic",
      skill: "Describe the PLC scan cycle, interpret simple ladder-logic programs using contacts and coils, and explain interlocks and safety in automation.",
      lesson: {
        sections: [
          {
            heading: "What a PLC does",
            body: "A **PLC** (programmable logic controller) is an industrial computer that reads inputs (sensors, switches), runs a stored program, and drives outputs (motors, valves, relays). It is rugged, deterministic and easy to reprogram — the standard controller for factory automation.\n\nThe **scan cycle** repeats continuously: (1) read all inputs, (2) execute the program logic, (3) update all outputs, (4) repeat. Scan time is typically milliseconds.",
          },
          {
            heading: "Ladder logic",
            body: "Ladder logic is drawn like an electrical circuit: **contacts** (inputs — normally open NO or normally closed NC) in series/parallel feed **coils** (outputs). Power flows left to right like rungs of a ladder.\n\n- Contacts in **series** = AND logic\n- Contacts in **parallel** = OR logic\n\nExample: Motor runs if (Start pressed AND NOT Stop pressed) OR (overload NOT tripped). **Interlocks** prevent unsafe states — e.g. a guard door must be closed before a press can cycle.",
          },
        ],
        keyFormulas: [
          { name: "Scan cycle", statement: "read inputs → execute program → update outputs → repeat" },
          { name: "Series contacts", statement: "AND logic" },
          { name: "Parallel contacts", statement: "OR logic" },
          { name: "Interlock", statement: "condition that must be true for safe operation" },
        ],
        workedExample: {
          problem: "A conveyor motor coil is energised when contact I0 (start button, NO) AND NOT contact I1 (stop button, NC) are true. Describe when the motor runs.",
          solution: "Motor runs only when start is pressed (I0 closed) AND stop is not pressed (I1 open). Series contacts = AND; the NC stop contact inverts.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u6-3-plc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does PLC stand for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Programmable logic controller"
                    },
                    {
                              "id": "b",
                              "text": "Personal laptop computer"
                    },
                    {
                              "id": "c",
                              "text": "Process logic circuit"
                    },
                    {
                              "id": "d",
                              "text": "Programmable light controller"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PLC",
                              "statement": "Programmable logic controller — industrial computer for machine control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PLC = programmable logic controller.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) programmable logic controller"
},
        },
        {
          id: "edxbteceng-u6-3-plc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "List the three main stages of the PLC scan cycle in order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Scan cycle",
                              "statement": "Read inputs → execute program → update outputs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Read all inputs from sensors/switches.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Execute the ladder-logic program using those inputs.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Read inputs → run program → update outputs (repeat)."
},
        },
        {
          id: "edxbteceng-u6-3-plc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "In ladder logic, two contacts are drawn in series feeding a motor coil. Explain what logic this represents and when the motor energises.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Ladder logic",
                              "statement": "Series contacts = AND; parallel = OR."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Series contacts implement AND logic — both must be closed.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The coil energises only when both input conditions are true simultaneously.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "If either contact opens, the circuit is broken and the coil de-energises.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "AND logic — motor runs only when both contacts are closed."
},
        },
        {
          id: "edxbteceng-u6-3-plc-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A conveyor has inputs: I0 = start button (NO), I1 = stop button (NC), I2 = guard door closed (NO). The motor coil O0 should run only when start is pressed AND stop is not pressed AND guard is closed.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how to wire the ladder rung for O0.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the stop button uses a NC contact.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Ladder logic",
                              "statement": "Series = AND; NO/NC contacts."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Place I0 (NO), I1 (NC), I2 (NO) in series feeding O0 coil — all must allow current.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "O0 energises only when start pressed AND stop not pressed AND door closed.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "NC contact is closed when stop is NOT pressed — fails safe.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "If the stop button or its wiring fails open, the NC contact opens and stops the machine — safer.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) series I0-I1-I2 → O0 (b) NC fails safe on stop"
},
        },
        {
          id: "edxbteceng-u6-3-plc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A packaging machine uses a PLC. Inputs: photoelectric sensor detects a box, start button, emergency stop. Output: conveyor motor.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what an interlock is in this context.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give one example interlock for this machine.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why the emergency stop should be hard-wired rather than only in software.",
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
                              "name": "Interlock",
                              "statement": "A condition that must be satisfied for safe operation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "An interlock is a safety condition preventing operation unless requirements are met.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "E.g. machine cannot run with guard open or lid removed.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Valid example: conveyor only runs if guard door closed AND no jam detected AND emergency stop not pressed.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Hard-wiring removes dependence on software/PLC — works even if PLC crashes or program has a fault.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Safety must be independent and fail-safe; software-only e-stop could fail silently.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) safety condition (b) guard/lid/jam interlock (c) independent of software, fail-safe"
},
        },
        {
          id: "edxbteceng-u6-3-plc-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A bottling plant PLC controls a filler. Inputs: bottle-present sensor (I0), cap-present sensor (I1), start (I2), stop (I3 NC). Output: fill valve (O0) and reject gate (O1).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the scan cycle of this PLC.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Design a ladder rung so the fill valve opens only when a bottle is present AND start is pressed AND stop is not pressed.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Design logic so the reject gate opens when the cap sensor shows no cap.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain one advantage of using a PLC rather than a fixed relay circuit for this plant.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "State one safety feature that should be included.",
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
                              "name": "Scan cycle",
                              "statement": "Read inputs → execute → update outputs."
                    },
                    {
                              "kind": "convention",
                              "name": "Ladder logic",
                              "statement": "Series=AND, parallel=OR, NO/NC contacts."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Repeatedly: read all inputs (I0–I3), execute ladder program, update outputs (O0, O1).",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Series contacts I0 (NO), I2 (NO), I3 (NC) in series feeding O0 coil.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "O0 energises only when all three conditions hold.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "When no cap is present the sensor input I1 is 0.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Using I1 as a NC (normally closed) contact feeding O1 makes O1 energise when the cap is absent, rejecting the bottle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Easier to modify/reprogram, more complex logic, diagnostics, less wiring.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "e",
                              "reasoning": "Any valid: hard-wired e-stop, guard interlock, jam detection, two-hand control.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) scan cycle (b) series I0-I2-I3(NC)→O0 (c) I1 NC→O1 (d) reprogrammable (e) e-stop/interlock"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u6-control-notes",
      title: "Control systems and PLCs — notes",
      summary: "Open-loop = no feedback; closed-loop = sensor→controller→actuator. PID = P+I+D. PLC scan: read→execute→update. Ladder: series=AND, parallel=OR.",
      sections: [
        { heading: "Loop types", body: "Open-loop: fixed program (toaster). Closed-loop: feedback corrects error (thermostat, robot)." },
        { heading: "PID", body: "P=fast response, I=remove offset, D=dampen oscillation." },
        { heading: "PLC", body: "Scan cycle reads inputs, runs ladder logic, updates outputs. Series=AND, parallel=OR. Interlocks for safety." },
      ],
    },
  ],
};
