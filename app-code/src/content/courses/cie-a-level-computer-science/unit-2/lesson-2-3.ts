import type { Lesson } from "../../../types.ts";

export const lesson133: Lesson = {
  id: "ciealc-u2-lesson-2-3",
  code: "2-3",
  title: "Input/Output Devices and Interfaces",
  goal: "I CAN classify I/O devices and describe interface types and their characteristics.",
  standards: [
    "Cambridge A Level Computer Science 9618: hardware",
    "9618: I/O devices",
  ],

  vocabulary: [
    { term: "Input device", definition: "Sends data to computer." },
    { term: "Output device", definition: "Receives data from computer." },
    { term: "Interface", definition: "Point where devices connect." },
    { term: "Serial", definition: "Data sent one bit at a time." },
    { term: "Parallel", definition: "Data sent multiple bits simultaneously." },
    {
      term: "Wireless",
      definition: "Data sent via radio waves/Bluetooth/Wi-Fi.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u2-s3-io",
      title: "I/O devices and interfaces",
      skill: "Classify devices and interfaces at A Level.",
      lesson: {
        sections: [
          {
            heading: "I/O devices",
            body: "Input: keyboard, mouse, scanner, microphone, sensors, camera. Output: monitor, printer, speakers, actuators. Some devices are both (touchscreen). Sensors detect physical world; actuators act on it.",
          },
          {
            heading: "Interfaces",
            body: "Serial: one bit at a time (USB, RS-232) — simpler, longer cables. Parallel: multiple bits simultaneously — faster but shorter cables. Wireless: Bluetooth (short range), Wi-Fi (network), NFC (touch).",
          },
        ],
        keyFormulas: [
          { name: "Input", statement: "sends data to computer" },
          { name: "Output", statement: "receives data from computer" },
          { name: "Serial/parallel", statement: "one bit vs multiple bits" },
        ],
        workedExample: {
          problem:
            "Compare USB (serial) vs old parallel port for printer connection.",
          solution:
            "USB: serial, one bit at a time, simpler, longer cable, ubiquitous. Parallel: multiple bits, faster theoretically but shorter range, obsolete.",
        },
      },
      questions: [
        {
          id: "ciealc-u2-io-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an input device?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Sends data to computer",
              },
              {
                id: "b",
                text: "Receives data from computer",
              },
              {
                id: "c",
                text: "A network cable",
              },
              {
                id: "d",
                text: "Stores files",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Input device",
                statement: "Data to computer.",
              },
            ],
            steps: [
              {
                reasoning: "Input sends data INTO computer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Sends data to computer",
          },
        },
        {
          id: "ciealc-u2-io-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between serial and parallel interfaces?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Serial vs parallel",
                statement: "One bit vs multiple.",
              },
            ],
            steps: [
              {
                reasoning: "Serial=one bit at a time; parallel=multiple bits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Serial simpler/longer; parallel faster/shorter.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "One bit vs multiple bits",
          },
        },
        {
          id: "ciealc-u2-io-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify: keyboard, monitor, temperature sensor, motor, microphone, printer.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Device classification",
                statement: "Input/output/sensor/actuator.",
              },
            ],
            steps: [
              {
                reasoning: "Input: keyboard, mic, temp sensor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Output: monitor, printer; actuator: motor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All six classified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Input/output/sensor/actuator",
          },
        },
        {
          id: "ciealc-u2-io-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define input device, output device, interface, serial, parallel, wireless. (b) Classify: scanner, speakers, webcam, motor, touchscreen. (c) Why is touchscreen both input and output? (d) What is an interface? (e) Give 3 wireless technologies. (f) Compare serial vs parallel. (g) How do sensors/actuators enable robotics? (h) Design an automatic plant watering system.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "I/O devices",
                statement: "Classification, interfaces.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Correct classifications.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Displays output + accepts touch.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Connection point for communication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Bluetooth, Wi-Fi, NFC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) One bit vs multiple bits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Sensors detect → computer decides → actuators act.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid watering system design.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "I/O devices and interfaces.",
          },
        },
        {
          id: "ciealc-u2-io-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an input device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Printer" },
              { id: "b", text: "Speakers" },
              { id: "c", text: "Monitor" },
              { id: "d", text: "Scanner" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Input device",
                statement: "Sends data to the computer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A scanner sends image data into the computer; the others are output devices.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Scanner",
          },
        },
        {
          id: "ciealc-u2-io-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A serial interface transmits 1 bit per cycle and a parallel interface transmits 8 bits per cycle. How many more bits per cycle does the parallel interface transmit? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Serial vs parallel",
                statement: "Parallel sends multiple bits simultaneously.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "8 − 1 = 7 more bits per cycle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "ciealc-u2-io-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which wireless interface is typically used for short-range communication between devices such as a phone and headphones?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethernet cable" },
              { id: "b", text: "Bluetooth" },
              { id: "c", text: "RS-232 serial cable" },
              { id: "d", text: "Parallel port" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bluetooth",
                statement: "Short-range wireless interface.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bluetooth provides short-range wireless connectivity between nearby devices.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Bluetooth",
          },
        },
        {
          id: "ciealc-u2-io-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A temperature sensor records a reading every 500 milliseconds. How many readings does it record in one second? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sampling rate",
                statement: "Samples per second = 1000 ÷ interval in ms.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "1000 ÷ 500 = 2 readings per second.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciealc-u2-io-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between a sensor and an actuator, giving one example of each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sensor vs actuator",
                statement: "Sensors detect; actuators act.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A sensor detects a physical property and sends data to the computer (e.g. temperature sensor).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "An actuator performs a physical action based on computer output (e.g. motor or valve).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Sensor detects input; actuator produces physical output",
          },
        },
        {
          id: "ciealc-u2-io-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is a touchscreen described as both an input and an output device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It connects two computers together" },
              { id: "b", text: "It only sends data to the computer" },
              {
                id: "c",
                text: "It displays output visually and detects touch as input",
              },
              { id: "d", text: "It only receives data from the computer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Touchscreen",
                statement: "Combined input and output device.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The screen shows output and the touch layer sends input.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** Displays output and detects touch input",
          },
        },
        {
          id: "ciealc-u2-io-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A serial device transmits at 9600 bits per second. How many bytes does it transmit per second? (1 byte = 8 bits). Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1200 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bit rate to byte rate",
                statement: "Bytes per second = bits per second ÷ 8.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "9600 ÷ 8 = 1200 bytes per second.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1200",
          },
        },
        {
          id: "ciealc-u2-io-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the USB serial interface replaced the older parallel port for connecting printers.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "USB advantages",
                statement:
                  "Serial is simpler, allows longer cables and supports more devices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "USB uses serial transmission, which is simpler and supports much longer cables than parallel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "USB also supports daisy-chaining/hubs and is far more widely adopted.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Simpler, longer cables, wider support",
          },
        },
        {
          id: "ciealc-u2-io-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a wireless interface?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "VGA cable" },
              { id: "b", text: "Wi-Fi" },
              { id: "c", text: "Centronics parallel" },
              { id: "d", text: "RS-232" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wireless interface",
                statement: "Transmits data without cables.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wi-Fi transmits data wirelessly; the others are wired interfaces.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Wi-Fi",
          },
        },
        {
          id: "ciealc-u2-io-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bits are there in one byte? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Byte",
                statement: "A group of 8 bits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "1 byte = 8 bits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "ciealc-u2-io-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Design an automatic garden watering system. Identify the sensors, actuators and interfaces you would use, and explain how the system decides when to water.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Embedded system design",
                statement: "Sensors detect, processor decides, actuators act.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sensors such as a soil moisture sensor and temperature sensor provide input.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A microcontroller compares readings against thresholds to decide when watering is needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "An actuator such as a water valve or pump carries out the watering action.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Moisture sensor → controller → water valve",
          },
        },
        {
          id: "ciealc-u2-io-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is NFC typically used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long-distance satellite communication" },
              { id: "b", text: "Storing files permanently" },
              { id: "c", text: "Wired connection to a network" },
              {
                id: "d",
                text: "Contactless payments and short-range data transfer",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NFC",
                statement: "Very short-range wireless data transfer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NFC enables tap-to-pay and close-proximity data exchange.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(d)** Contactless payments and short-range transfer",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u2-io-notes",
      title: "I/O devices — notes",
      summary:
        "Input=sends, output=receives. Serial=one bit, parallel=multiple bits. Sensors/actuators connect to physical world.",
      sections: [
        {
          heading: "Key idea",
          body: "Interfaces determine how devices connect — serial/parallel/wireless.",
        },
        {
          heading: "Embedded",
          body: "Sensors+actuators enable automation and robotics.",
        },
      ],
    },
  ],
};
