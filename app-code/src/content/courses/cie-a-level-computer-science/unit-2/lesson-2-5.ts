import type { Lesson } from "../../../types.ts";

export const lesson135: Lesson = {
  id: "ciealc-u2-lesson-2-5",
  code: "2-5",
  title: "Automatic Systems and Embedded Computing",
  goal: "I CAN describe embedded systems and automatic control systems.",
  standards: ["Cambridge A Level Computer Science 9618: automatic systems", "9618: embedded"],
  
  vocabulary: [
    { term: "Embedded system", definition: "Computer built into a device for specific function." },
    { term: "Sensor", definition: "Device detecting physical properties." },
    { term: "Actuator", definition: "Device performing physical action." },
    { term: "Feedback", definition: "Output returned as input to adjust behaviour." },
    { term: "Closed-loop", definition: "System using feedback to self-correct." },
    { term: "Open-loop", definition: "System without feedback check." },
  ],
  concepts: [
    {
      id: "ciealc-u2-s5-auto",
      title: "Automatic and embedded systems",
      skill: "Describe embedded systems and control loops at A Level.",
      lesson: {
        sections: [
          {
            heading: "Embedded systems",
            body: "Computers built into devices: car engine management, washing machines, smart thermostats, medical devices. Dedicated hardware+software for specific function — efficient but limited flexibility.",
          },
          {
            heading: "Control systems",
            body: "Automatic systems: sensor→processor→actuator. Closed-loop uses feedback to self-correct (thermostat); open-loop doesn't check result (timer irrigation). Feedback enables accuracy.",
          },
        ],
        keyFormulas: [
          { name: "Embedded", statement: "computer in device for specific function" },
          { name: "Closed-loop", statement: "feedback self-corrects" },
          { name: "Open-loop", statement: "no feedback check" },
        ],
        workedExample: {
          problem: "Describe how a smart thermostat works.",
          solution: "Temperature sensor detects → processor compares to setpoint → heater/cooler activates → sensor monitors → adjusts until target reached. Closed-loop feedback.",
        },
      },
      questions: [
        {
          id: "ciealc-u2-au-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an embedded system?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Computer built into a device for specific function"
                    },
                    {
                              "id": "b",
                              "text": "A type of software"
                    },
                    {
                              "id": "c",
                              "text": "A network protocol"
                    },
                    {
                              "id": "d",
                              "text": "A programming language"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Embedded system",
                              "statement": "Device-specific computer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Embedded = computer inside device.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Device-specific computer"
},
        },
        {
          id: "ciealc-u2-au-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is feedback in a control system?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Feedback",
                              "statement": "Output→input loop."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Feedback = output returned as input.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enables self-correction.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Output fed back as input"
},
        },
        {
          id: "ciealc-u2-au-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare open-loop and closed-loop control. Give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Control types",
                              "statement": "Feedback vs no feedback."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Open=no feedback; closed=feedback corrects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. open=timer irrigation; closed=thermostat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Closed-loop more accurate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Open vs closed loop + examples"
},
        },
        {
          id: "ciealc-u2-au-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define embedded system, sensor, actuator, feedback, closed-loop, open-loop. (b) Give 3 examples of embedded systems. (c) Describe the control cycle. (d) What is a thermostat's feedback loop? (e) Why is closed-loop more accurate? (f) What is open-loop? (g) Name sensors/actuators in a smart sprinkler. (h) Design an automatic system for school lighting.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Automatic systems",
                              "statement": "Embedded, feedback, control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three valid embedded examples.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Sense→process→act→feedback.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Senses temp → adjusts heating.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Feedback corrects errors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) No feedback check.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid sensor/actuator list.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid lighting system design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Embedded and automatic systems."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u2-au-notes",
      title: "Embedded systems — notes",
      summary: "Embedded=computer in device; control cycle=sense→process→act; closed-loop=self-corrects.",
      sections: [
        { heading: "Key idea", body: "Embedded systems are everywhere — efficient but task-specific." },
        { heading: "Feedback", body: "Closed-loop=accurate; open-loop=simple but uncorrected." },
      ],
    },
  ],
};
