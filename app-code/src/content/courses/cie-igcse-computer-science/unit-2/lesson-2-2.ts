import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ciecs-u2-lesson-2-2",
  code: "2-2",
  title: "Input/Output and Peripheral Devices",
  goal: "I CAN classify input and output devices and explain their roles.",
  standards: ["Cambridge IGCSE Computer Science 0478: hardware", "0478 section 3: I/O devices"],
  
  vocabulary: [
    { term: "Input device", definition: "Device sending data TO the computer." },
    { term: "Output device", definition: "Device receiving data FROM the computer." },
    { term: "Peripheral", definition: "External device connected to the computer." },
    { term: "Sensor", definition: "Device detecting physical properties (temperature, light)." },
    { term: "Actuator", definition: "Device performing physical action (motor, buzzer)." },
    { term: "Interface", definition: "Point where devices connect and communicate." },
  ],
  concepts: [
    {
      id: "ciecs-u2-s2-io",
      title: "Input/output devices",
      skill: "Classify and describe I/O devices at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Input and output",
            body: "Input devices send data to computer: keyboard, mouse, scanner, microphone, sensors. Output devices receive data: monitor, printer, speakers, actuators. Some are both (touchscreen).",
          },
          {
            heading: "Sensors and actuators",
            body: "Sensors detect physical world — temperature, light, motion. Actuators act on it — motors, buzzers, lights. Together they connect computers to the physical world (embedded systems, robotics).",
          },
        ],
        keyFormulas: [
          { name: "Input", statement: "sends data to computer" },
          { name: "Output", statement: "receives data from computer" },
          { name: "Sensor/actuator", statement: "detect vs act on physical world" },
        ],
        workedExample: {
          problem: "Classify: keyboard, monitor, temperature sensor, motor, microphone, printer.",
          solution: "Input: keyboard, mic, temp sensor. Output: monitor, printer. Actuator: motor.",
        },
      },
      questions: [
        {
          id: "ciecs-u2-io-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an input device?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Receives data from computer"
                    },
                    {
                              "id": "b",
                              "text": "Stores files"
                    },
                    {
                              "id": "c",
                              "text": "Sends data to the computer"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Input device",
                              "statement": "Data to computer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Input sends data INTO computer.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sends data to computer"
},
        },
        {
          id: "ciecs-u2-io-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two examples of input and two of output devices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "I/O devices",
                              "statement": "Examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Input: keyboard/mouse/scanner/mic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Output: monitor/printer/speakers.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Input+output examples"
},
        },
        {
          id: "ciecs-u2-io-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a sensor and an actuator? Give an example of each in a smart home.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sensor vs actuator",
                              "statement": "Detect vs act."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sensor detects (temp, motion); actuator acts (motor, buzzer).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. motion sensor triggers light.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both examples given.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sensor=detect, actuator=act"
},
        },
        {
          id: "ciecs-u2-io-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define input device, output device, peripheral, sensor, actuator, interface. (b) Classify: scanner, speakers, webcam, motor, touchscreen. (c) Why is a touchscreen both input and output? (d) What is an interface? (e) Give 3 examples of sensors in a car. (f) Give 3 examples of actuators in a car. (g) How do sensors/actuators enable robotics? (h) Design an automatic plant watering system listing sensors and actuators.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "I/O devices",
                              "statement": "Classification, sensors, actuators."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Correct classifications.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Displays output + accepts touch input.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Connection point for communication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Three valid car sensors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three valid car actuators.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Sensors detect → computer decides → actuators act.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid watering system design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "I/O devices, sensors and actuators."
},
        },
        {
          id: "ciecs-u2-io-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which device is an input device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Microphone" },
              { id: "b", text: "Printer" },
              { id: "c", text: "Speakers" },
              { id: "d", text: "Monitor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Input device", statement: "Sends data to the computer." },
            ],
            steps: [
              { reasoning: "A microphone captures sound and sends it to the computer as input.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Microphone",
          },
        },
        {
          id: "ciecs-u2-io-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which device is an output device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plotter" },
              { id: "b", text: "Scanner" },
              { id: "c", text: "Joystick" },
              { id: "d", text: "Keyboard" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Output device", statement: "Receives data from the computer." },
            ],
            steps: [
              { reasoning: "A plotter produces physical output from computer data.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Plotter",
          },
        },
        {
          id: "ciecs-u2-io-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which device is a sensor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Printer" },
              { id: "b", text: "Light-dependent sensor" },
              { id: "c", text: "Buzzer" },
              { id: "d", text: "Motor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sensor", statement: "Detects physical properties." },
            ],
            steps: [
              { reasoning: "A light-dependent sensor detects light levels from the environment.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Light-dependent sensor",
          },
        },
        {
          id: "ciecs-u2-io-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which device is an actuator?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stepper motor" },
              { id: "b", text: "Keyboard" },
              { id: "c", text: "Temperature sensor" },
              { id: "d", text: "Webcam" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Actuator", statement: "Performs a physical action." },
            ],
            steps: [
              { reasoning: "A motor converts computer control into physical movement.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Stepper motor",
          },
        },
        {
          id: "ciecs-u2-io-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why can a touchscreen be both an input and an output device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It connects directly to the CPU only" },
              { id: "b", text: "It is always a sensor" },
              { id: "c", text: "It only stores data" },
              { id: "d", text: "It displays output and detects touch input" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dual-role devices", statement: "Some devices both receive and send data." },
            ],
            steps: [
              { reasoning: "The screen shows output while touch sensors send input to the computer.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Displays output and detects touch input",
          },
        },
        {
          id: "ciecs-u2-io-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In an automatic greenhouse, which combination is essential?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensors to detect conditions and actuators to change them" },
              { id: "b", text: "Only storage devices" },
              { id: "c", text: "Only a keyboard" },
              { id: "d", text: "Only a monitor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Embedded systems", statement: "Sensors detect and actuators respond." },
            ],
            steps: [
              { reasoning: "Automatic control needs sensors for input and actuators for physical response.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Sensors and actuators",
          },
        },
        {
          id: "ciecs-u2-io-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A setup contains keyboard, mouse, microphone, scanner, touchscreen, monitor, printer and speakers. How many are input-only devices?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Device classification", statement: "Count devices that only send data to the computer." },
            ],
            steps: [
              { reasoning: "Keyboard, mouse, microphone and scanner are input-only: 4 devices.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "ciecs-u2-io-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A list contains barcode scanner, digital camera, joystick, projector, temperature sensor and buzzer. (a) How many are input devices? (b) How many are output devices or actuators?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Device classification", statement: "Separate input devices from output/actuator devices." },
            ],
            steps: [
              { reasoning: "Input devices are barcode scanner, digital camera, joystick and temperature sensor: 4.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Projector and buzzer provide output/action: 2 devices.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 4; (b) 2",
          },
        },
        {
          id: "ciecs-u2-io-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A control panel has touchscreen, keyboard, speaker, projector, microphone and plotter. How many are output-only devices?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Output-only devices", statement: "Touchscreen is both input and output." },
            ],
            steps: [
              { reasoning: "Speaker, projector and plotter are output-only: 3 devices.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciecs-u2-io-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A greenhouse controller has soil moisture sensor, light sensor, temperature sensor, fan motor, water pump and display screen. (a) How many sensors does it have? (b) How many actuators does it have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sensors vs actuators", statement: "Sensors detect; actuators physically act." },
            ],
            steps: [
              { reasoning: "There are 3 sensors: soil moisture, light and temperature.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "The fan motor and water pump are actuators: 2.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 3; (b) 2",
          },
        },
        {
          id: "ciecs-u2-io-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A factory system has $20$ devices: $35$% are sensors, $25$% are actuators and $40$% are displays. (a) How many sensors are there? (b) How many actuators are there? (c) How many displays are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7 },
              { label: "b", answer: 5 },
              { label: "c", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Percentage counts", statement: "Count = total devices × percentage." },
            ],
            steps: [
              { reasoning: "Sensors = 20 * 0.35 = 7.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Actuators = 20 * 0.25 = 5.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Displays = 20 * 0.40 = 8.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 7; (b) 5; (c) 8",
          },
        },
        {
          id: "ciecs-u2-io-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design an automatic smart-classroom system. List the sensors needed, explain what the processor decides, name the actuators, and describe how feedback could improve the system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Automatic classroom", statement: "Sensors detect, processor decides, actuators respond." },
            ],
            steps: [
              { reasoning: "Valid sensors such as light, temperature, motion or CO2 detectors are identified.", marks: 1, markCode: "M" },
              { reasoning: "The processor compares readings with desired conditions and decides actions.", marks: 1, markCode: "M" },
              { reasoning: "Valid actuators such as lights, blinds, fans or door locks are named.", marks: 1, markCode: "M" },
              { reasoning: "Feedback is described, e.g. sensor readings confirm whether the room reached the target.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sensor-processor-actuator classroom control",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u2-io-notes",
      title: "I/O devices — notes",
      summary: "Input=sends data, output=receives. Sensors detect physical world; actuators act on it.",
      sections: [
        { heading: "Key idea", body: "Sensors+actuators connect computers to the physical world." },
        { heading: "Embedded", body: "Most devices (cars, phones, appliances) have hidden computers." },
      ],
    },
  ],
};
