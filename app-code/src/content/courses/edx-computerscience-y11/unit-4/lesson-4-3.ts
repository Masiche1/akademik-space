import type { Lesson } from "../../../types.ts";

export const lesson303: Lesson = {
  id: "ecs11-u4-lesson-4-3",
  code: "4-3",
  title: "Embedded Systems and IoT",
  goal: "I CAN explain embedded systems and IoT applications.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Systems"],
  vocabulary: [
    {
      term: "Embedded system",
      definition: "Computer built into a device for specific task.",
    },
    { term: "IoT", definition: "Internet of Things — connected devices." },
    {
      term: "Microcontroller",
      definition: "Small computer on single chip for embedded use.",
    },
    { term: "Firmware", definition: "Software permanently stored in device." },
    { term: "Sensor", definition: "Device detecting physical properties." },
  ],
  concepts: [
    {
      id: "ecs11-u4-embedded",
      title: "Embedded Systems",
      skill: "Identify embedded systems and their characteristics.",
      lesson: {
        sections: [
          {
            heading: "What is embedded?",
            body: "**Embedded system**: dedicated computer inside a device — microwave, car ECU, washing machine, smartwatch. **Characteristics**: single purpose, real-time response, limited resources, often microcontroller-based.\n\n**Microcontroller**: CPU+memory+I/O on one chip — cheap, low power, for control tasks.",
          },
          {
            heading: "Examples",
            body: "**Car**: engine control, ABS, airbags. **Medical**: pacemakers, insulin pumps, scanners. **Consumer**: TVs, cameras, appliances. **Industrial**: robots, PLCs, traffic lights.\n\n**Firmware**: software stored in ROM/flash — updates occasionally, controls device functions.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is a smartphone an embedded system?",
          solution:
            "Partially — has embedded components but is general-purpose.",
        },
      },
      questions: [
        {
          id: "ecs11-u4-embedded-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an embedded system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Computer built into device for specific task" },
              { id: "b", text: "General-purpose computer" },
              { id: "c", text: "Network server" },
              { id: "d", text: "Programming language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Embedded system",
                statement: "Dedicated device computer.",
              },
            ],
            steps: [
              {
                reasoning: "Embedded = specific purpose.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Dedicated device computer",
            commonErrors: ["PC confused."],
          },
        },
        {
          id: "ecs11-u4-embedded-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two characteristics of embedded systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Embedded characteristics",
                statement: "Dedicated, real-time, limited.",
              },
            ],
            steps: [
              {
                reasoning: "Single dedicated purpose — one task.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Real-time response — must react quickly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Limited resources — low power, small memory.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Dedicated purpose, real-time, limited resources.",
            commonErrors: ["General PC.", "Only one."],
          },
        },
        {
          id: "ecs11-u4-embedded-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of sensors in embedded systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sensors",
                statement: "Physical → digital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sensors detect physical properties — temp, light, motion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Convert to electrical signals for processing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Allow system to respond to real world.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: thermostat sensor triggers heating.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Detect physical world → trigger responses.",
            commonErrors: ["No mechanism.", "No example."],
          },
        },
        {
          id: "ecs11-u4-embedded-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how a pacemaker works as an embedded system.",
          parts: [
            {
              label: "a",
              prompt: "Describe its inputs and processing.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Describe its outputs and safety needs.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pacemaker",
                statement: "Life-critical embedded system.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Sensors detect heart rhythm.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Microcontroller analyses and decides.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Electrical pulses stimulate heartbeat.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Must be ultra-reliable — life depends on it.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) sense+analyse (b) stimulate+reliability",
            commonErrors: ["No inputs.", "No safety."],
          },
        },
      ],
    },
    {
      id: "ecs11-u4-iot",
      title: "Internet of Things",
      skill: "Explain IoT, its benefits and concerns.",
      lesson: {
        sections: [
          {
            heading: "What is IoT?",
            body: "**IoT**: network of physical objects with sensors, software, connectivity — smart homes, wearables, industrial sensors, smart cities. **Components**: device + sensor + connectivity + data processing.\n\n**Examples**: smart thermostat, fitness tracker, smart fridge, traffic sensors, agricultural monitors.",
          },
          {
            heading: "Benefits and concerns",
            body: "**Benefits**: automation, efficiency, data collection, remote monitoring, energy savings. **Concerns**: security vulnerabilities, privacy (data collection), reliability, interoperability, e-waste.\n\n**Security**: many devices have weak security — botnets (Mirai attack). **Privacy**: devices constantly collect data — who owns it?",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Smart thermostat learns your schedule. Privacy concern?",
          solution: "Collects behavioural data — who can access it?",
        },
      },
      questions: [
        {
          id: "ecs11-u4-iot-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does IoT stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Input of Technology" },
              { id: "b", text: "Internet of Text" },
              { id: "c", text: "Internal Operating Tool" },
              { id: "d", text: "Internet of Things" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IoT",
                statement: "Internet of Things.",
              },
            ],
            steps: [
              {
                reasoning: "IoT = Internet of Things.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Internet of Things",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "ecs11-u4-iot-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of IoT.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IoT benefits",
                statement: "Automation, efficiency.",
              },
            ],
            steps: [
              {
                reasoning: "Automation — devices act without human input.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Efficiency — optimise resource use (energy, water).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Remote monitoring — control from anywhere.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Automation, efficiency, remote monitoring.",
            commonErrors: ["Only concerns.", "Only one."],
          },
        },
        {
          id: "ecs11-u4-iot-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two security concerns with IoT devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IoT security",
                statement: "Weak devices = attack targets.",
              },
            ],
            steps: [
              {
                reasoning: "Weak security — default passwords, no updates.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Botnets — compromised devices attack others (Mirai).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Privacy — constant data collection.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Physical safety — hacked devices cause harm.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Weak security, botnets, privacy, safety.",
            commonErrors: ["No concerns.", "Only one."],
          },
        },
        {
          id: "ecs11-u4-iot-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A city wants to implement smart traffic lights using IoT.",
          parts: [
            { label: "a", prompt: "Describe the system components.", marks: 4 },
            {
              label: "b",
              prompt: "Identify two benefits and two risks.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Smart city IoT",
                statement: "Sensors+connectivity+control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Sensors detect traffic flow; controllers adjust lights.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Connectivity sends data to central system.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Benefits: reduced congestion, adaptive timing.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Risks: hacking causing chaos, privacy tracking.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) sensors+connectivity (b) efficiency vs security",
            commonErrors: ["No components.", "No risks."],
          },
        },
      ],
    },
  ],
};
