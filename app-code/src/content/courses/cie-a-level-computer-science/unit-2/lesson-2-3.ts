import type { Lesson } from "../../../types.ts";

export const lesson133: Lesson = {
  id: "ciealc-u2-lesson-2-3",
  code: "2-3",
  title: "Input/Output Devices and Interfaces",
  goal: "I CAN classify I/O devices and describe interface types and their characteristics.",
  standards: ["Cambridge A Level Computer Science 9618: hardware", "9618: I/O devices"],
  
  vocabulary: [
    { term: "Input device", definition: "Sends data to computer." },
    { term: "Output device", definition: "Receives data from computer." },
    { term: "Interface", definition: "Point where devices connect." },
    { term: "Serial", definition: "Data sent one bit at a time." },
    { term: "Parallel", definition: "Data sent multiple bits simultaneously." },
    { term: "Wireless", definition: "Data sent via radio waves/Bluetooth/Wi-Fi." },
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
          problem: "Compare USB (serial) vs old parallel port for printer connection.",
          solution: "USB: serial, one bit at a time, simpler, longer cable, ubiquitous. Parallel: multiple bits, faster theoretically but shorter range, obsolete.",
        },
      },
      questions: [
        {
          id: "ciealc-u2-io-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an input device?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sends data to computer"
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
          id: "ciealc-u2-io-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between serial and parallel interfaces?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Serial vs parallel",
                              "statement": "One bit vs multiple."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Serial=one bit at a time; parallel=multiple bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Serial simpler/longer; parallel faster/shorter.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "One bit vs multiple bits"
},
        },
        {
          id: "ciealc-u2-io-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify: keyboard, monitor, temperature sensor, motor, microphone, printer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Device classification",
                              "statement": "Input/output/sensor/actuator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Input: keyboard, mic, temp sensor.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Output: monitor, printer; actuator: motor.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All six classified.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Input/output/sensor/actuator"
},
        },
        {
          id: "ciealc-u2-io-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define input device, output device, interface, serial, parallel, wireless. (b) Classify: scanner, speakers, webcam, motor, touchscreen. (c) Why is touchscreen both input and output? (d) What is an interface? (e) Give 3 wireless technologies. (f) Compare serial vs parallel. (g) How do sensors/actuators enable robotics? (h) Design an automatic plant watering system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "I/O devices",
                              "statement": "Classification, interfaces."
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
                              "reasoning": "(c) Displays output + accepts touch.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Connection point for communication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Bluetooth, Wi-Fi, NFC.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) One bit vs multiple bits.",
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
          "finalAnswer": "I/O devices and interfaces."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u2-io-notes",
      title: "I/O devices — notes",
      summary: "Input=sends, output=receives. Serial=one bit, parallel=multiple bits. Sensors/actuators connect to physical world.",
      sections: [
        { heading: "Key idea", body: "Interfaces determine how devices connect — serial/parallel/wireless." },
        { heading: "Embedded", body: "Sensors+actuators enable automation and robotics." },
      ],
    },
  ],
};
