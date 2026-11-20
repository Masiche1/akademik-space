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
                              "text": "Sends data to the computer"
                    },
                    {
                              "id": "b",
                              "text": "Receives data from computer"
                    },
                    {
                              "id": "c",
                              "text": "Stores files"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "a"
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
