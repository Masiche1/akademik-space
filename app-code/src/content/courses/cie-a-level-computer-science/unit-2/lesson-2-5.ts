import type { Lesson } from "../../../types.ts";

export const lesson135: Lesson = {
  id: "ciealc-u2-lesson-2-5",
  code: "2-5",
  title: "Automatic Systems and Embedded Computing",
  goal: "I CAN describe embedded systems and automatic control systems.",
  standards: [
    "Cambridge A Level Computer Science 9618: automatic systems",
    "9618: embedded",
  ],

  vocabulary: [
    {
      term: "Embedded system",
      definition: "Computer built into a device for specific function.",
    },
    { term: "Sensor", definition: "Device detecting physical properties." },
    { term: "Actuator", definition: "Device performing physical action." },
    {
      term: "Feedback",
      definition: "Output returned as input to adjust behaviour.",
    },
    {
      term: "Closed-loop",
      definition: "System using feedback to self-correct.",
    },
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
          {
            name: "Embedded",
            statement: "computer in device for specific function",
          },
          { name: "Closed-loop", statement: "feedback self-corrects" },
          { name: "Open-loop", statement: "no feedback check" },
        ],
        workedExample: {
          problem: "Describe how a smart thermostat works.",
          solution:
            "Temperature sensor detects → processor compares to setpoint → heater/cooler activates → sensor monitors → adjusts until target reached. Closed-loop feedback.",
        },
      },
      questions: [
        {
          id: "ciealc-u2-au-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an embedded system?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A network protocol",
              },
              {
                id: "b",
                text: "A type of software",
              },
              {
                id: "c",
                text: "A programming language",
              },
              {
                id: "d",
                text: "Computer built into a device for specific function",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Embedded system",
                statement: "Device-specific computer.",
              },
            ],
            steps: [
              {
                reasoning: "Embedded = computer inside device.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Device-specific computer",
          },
        },
        {
          id: "ciealc-u2-au-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is feedback in a control system?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feedback",
                statement: "Output→input loop.",
              },
            ],
            steps: [
              {
                reasoning: "Feedback = output returned as input.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enables self-correction.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Output fed back as input",
          },
        },
        {
          id: "ciealc-u2-au-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare open-loop and closed-loop control. Give an example of each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Control types",
                statement: "Feedback vs no feedback.",
              },
            ],
            steps: [
              {
                reasoning: "Open=no feedback; closed=feedback corrects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. open=timer irrigation; closed=thermostat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Closed-loop more accurate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Open vs closed loop + examples",
          },
        },
        {
          id: "ciealc-u2-au-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define embedded system, sensor, actuator, feedback, closed-loop, open-loop. (b) Give 3 examples of embedded systems. (c) Describe the control cycle. (d) What is a thermostat's feedback loop? (e) Why is closed-loop more accurate? (f) What is open-loop? (g) Name sensors/actuators in a smart sprinkler. (h) Design an automatic system for school lighting.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Automatic systems",
                statement: "Embedded, feedback, control.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Three valid embedded examples.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Sense→process→act→feedback.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Senses temp → adjusts heating.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Feedback corrects errors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) No feedback check.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Valid sensor/actuator list.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid lighting system design.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Embedded and automatic systems.",
          },
        },
        {
          id: "ciealc-u2-au-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of an embedded system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A personal laptop running a game" },
              { id: "b", text: "A general-purpose tablet" },
              { id: "c", text: "Car engine management system" },
              { id: "d", text: "A cloud storage server" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Embedded system",
                statement: "Computer dedicated to a specific device function.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Engine management is a dedicated computer inside the car; laptops and servers are general-purpose.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Car engine management system",
          },
        },
        {
          id: "ciealc-u2-au-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A thermostat is set to 22°C and the temperature sensor currently reads 18°C. By how many degrees Celsius must the temperature rise to reach the setpoint? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Setpoint error",
                statement: "Error = setpoint − measured value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "22 − 18 = 4°C.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4°C",
          },
        },
        {
          id: "ciealc-u2-au-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What feature defines a closed-loop control system?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It uses feedback to monitor and correct the output",
              },
              { id: "b", text: "It cannot be automated" },
              { id: "c", text: "It runs for a fixed time then stops" },
              { id: "d", text: "It has no sensors" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Closed-loop control",
                statement: "Feedback enables self-correction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Closed-loop systems feed the output back to the input to maintain the target.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Feedback self-correction",
          },
        },
        {
          id: "ciealc-u2-au-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A heater raises the temperature by 0.5°C per minute. Starting at 19°C with a target of 22°C, how many minutes are needed to reach the target? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Heating rate",
                statement: "Time = temperature difference ÷ rate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "(22 − 19) ÷ 0.5 = 6 minutes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "6 minutes",
          },
        },
        {
          id: "ciealc-u2-au-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the sensor–processor–actuator chain used in an automatic control system.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Control chain",
                statement: "Sensor detects, processor decides, actuator acts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sensor detects a physical value and sends it to the processor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The processor compares it with the target and signals the actuator to act.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Sensor → processor → actuator",
          },
        },
        {
          id: "ciealc-u2-au-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of an open-loop control system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An automatic door with a motion sensor" },
              {
                id: "b",
                text: "A thermostat that adjusts heating continuously",
              },
              {
                id: "c",
                text: "A sprinkler timer that waters for a fixed period",
              },
              { id: "d", text: "Cruise control in a car" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Open-loop control",
                statement: "No feedback check of the result.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The timer runs for a set time regardless of soil moisture; the others use feedback.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Sprinkler timer",
          },
        },
        {
          id: "ciealc-u2-au-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A car's cruise control is set to 60 km/h and the speed sensor reads 55 km/h. What is the error the system must correct? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Control error",
                statement: "Error = target − measured.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "60 − 55 = 5 km/h.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5 km/h",
          },
        },
        {
          id: "ciealc-u2-au-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why feedback in a closed-loop system improves accuracy.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feedback advantage",
                statement: "Output is continuously compared to the target.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sensor continuously measures the actual output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Any difference from the target triggers a correction, keeping the output accurate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Continuous correction toward the target",
          },
        },
        {
          id: "ciealc-u2-au-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is an actuator?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A temperature sensor" },
              { id: "b", text: "A keyboard" },
              { id: "c", text: "A monitor" },
              {
                id: "d",
                text: "A water valve controlled by a microcontroller",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Actuator",
                statement: "Device that performs a physical action.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The valve physically acts on the system; sensors only detect.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Water valve",
          },
        },
        {
          id: "ciealc-u2-au-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an automatic control system, how many stages are there in the sensor–processor–actuator chain? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Control chain",
                statement: "Sensor, processor and actuator stages.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sensor → processor → actuator = 3 stages.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciealc-u2-au-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A greenhouse must maintain a stable temperature. Compare an open-loop and a closed-loop control approach and justify which is more suitable.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Open vs closed loop",
                statement: "Closed loop corrects using feedback.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An open-loop system would run heaters/vents on a fixed timer regardless of actual temperature.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A closed-loop system uses temperature sensors to continuously adjust heating and ventilation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Closed loop is more suitable because external conditions vary and feedback maintains the target.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Closed-loop preferred for stable greenhouse temperature",
          },
        },
        {
          id: "ciealc-u2-au-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A smart thermostat measures room temperature and switches the heater on or off to hold a set temperature. Which type of control system does it use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No control system" },
              { id: "b", text: "Manual control only" },
              { id: "c", text: "Open-loop" },
              { id: "d", text: "Closed-loop" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Closed-loop",
                statement: "Sensor feedback corrects output.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The thermostat continuously senses temperature and corrects it — feedback control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Closed-loop",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u2-au-notes",
      title: "Embedded systems — notes",
      summary:
        "Embedded=computer in device; control cycle=sense→process→act; closed-loop=self-corrects.",
      sections: [
        {
          heading: "Key idea",
          body: "Embedded systems are everywhere — efficient but task-specific.",
        },
        {
          heading: "Feedback",
          body: "Closed-loop=accurate; open-loop=simple but uncorrected.",
        },
      ],
    },
  ],
};
