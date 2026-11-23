import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edxpc-u3-lesson-3-3",
  code: "3-3",
  title: "Data in the Real World",
  goal: "I CAN recognise how data is used in everyday technology.",
  standards: ["Y5-Y6 Data and information", "Applications"],
  vocabulary: [
    {
      term: "Sensor",
      definition:
        "A device that collects data from the world, like a light or temperature sensor.",
    },
    {
      term: "Database",
      definition: "An organised collection of data that can be searched.",
    },
    {
      term: "GPS",
      definition: "Technology that uses satellites to find your location.",
    },
    {
      term: "Algorithm in data",
      definition: "Rules a computer follows to sort or analyse data.",
    },
  ],
  concepts: [
    {
      id: "edxpc-u3-sensors",
      title: "Sensors and Data Collection",
      skill: "Identify sensors and how they collect data.",
      lesson: {
        sections: [
          {
            heading: "What are sensors?",
            body: "Sensors are devices that collect data from the real world. A light sensor detects brightness, a temperature sensor measures heat, a motion sensor detects movement. Phones have sensors for light, sound, movement and location. Weather stations use sensors to measure temperature, rainfall and wind.",
          },
          {
            heading: "Sensors in action",
            body: "A traffic light uses sensors to detect cars waiting. A smart thermostat uses a temperature sensor to decide when to turn the heating on. A fitness watch uses sensors to count steps and measure heart rate. The sensor collects data; the device processes it and responds.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name a sensor and what data it collects.",
          solution: "Temperature sensor — collects how hot or cold it is.",
        },
      },
      questions: [
        {
          id: "edxpc-u3-sensor-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a sensor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of screen" },
              { id: "b", text: "A device that collects data" },
              { id: "c", text: "A program" },
              { id: "d", text: "A battery" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sensor",
                statement: "A device that collects data from the world.",
              },
            ],
            steps: [
              { reasoning: "Sensor = collects data.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Collects data",
            commonErrors: ["Thinking sensors are screens or speakers."],
          },
        },
        {
          id: "edxpc-u3-sensor-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sensor would a weather station use to measure rainfall?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light sensor" },
              { id: "b", text: "Rain gauge (collects water)" },
              { id: "c", text: "Speaker" },
              { id: "d", text: "Keyboard" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sensor jobs",
                statement: "Each sensor collects a specific type of data.",
              },
            ],
            steps: [
              {
                reasoning: "Rain gauge collects rainfall data.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Rain gauge",
            commonErrors: ["Choosing unrelated devices."],
          },
        },
        {
          id: "edxpc-u3-sensor-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of sensors in everyday devices and what data each collects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sensor examples",
                statement: "Devices use sensors to gather real-world data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First example with correct data, e.g. phone light sensor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second example with correct data, e.g. fitness watch motion sensor.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correctly matched.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. light sensor→brightness; motion sensor→movement",
            commonErrors: ["Sensor without matching data type."],
          },
        },
        {
          id: "edxpc-u3-sensor-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the chain from sensor to action using a smart thermostat as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sensor-to-action chain",
                statement:
                  "Sensor collects → device processes → action happens.",
              },
            ],
            steps: [
              {
                reasoning: "Sensor collects temperature data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Device processes data against the set temperature.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Action: heating turns on/off accordingly.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Temp sensor → compare → heating on/off",
            commonErrors: ["Skipping the processing step."],
          },
        },
      ],
    },
    {
      id: "edxpc-u3-realworld",
      title: "Data in Everyday Technology",
      skill: "Recognise how data powers common technologies.",
      lesson: {
        sections: [
          {
            heading: "Maps and GPS",
            body: "Satellite navigation uses GPS data — your position from satellites — combined with map data. The device processes both and shows your route. Traffic apps add live data about road conditions to suggest faster routes.",
          },
          {
            heading: "Recommendation systems",
            body: "Streaming services and shops collect data about what you watch or buy, then use algorithms to recommend similar things. 'Because you watched this, you might like...' is data being used to make predictions. This is why ads seem to know what you like — they learn from your data.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does a map app know where you are?",
          solution: "GPS satellites send location data to your device.",
        },
      },
      questions: [
        {
          id: "edxpc-u3-real-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does GPS use to find your location?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your phone's camera" },
              { id: "b", text: "Satellites" },
              { id: "c", text: "Your Wi-Fi password" },
              { id: "d", text: "The weather" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GPS",
                statement: "Uses satellites to find location.",
              },
            ],
            steps: [
              { reasoning: "GPS = satellites.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Satellites",
            commonErrors: ["Thinking GPS uses the camera."],
          },
        },
        {
          id: "edxpc-u3-real-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How do streaming services recommend videos?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They guess randomly" },
              { id: "b", text: "They use data about what you watch" },
              { id: "c", text: "They ask your parents" },
              { id: "d", text: "They use the same list for everyone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recommendations",
                statement: "Algorithms use your data to suggest content.",
              },
            ],
            steps: [
              {
                reasoning: "Recommendations come from your viewing data.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Data about what you watch",
            commonErrors: ["Thinking recommendations are random."],
          },
        },
        {
          id: "edxpc-u3-real-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of data being collected by technology you use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data collection",
                statement: "Many devices collect data about use.",
              },
            ],
            steps: [
              {
                reasoning: "First example, e.g. search history or location.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second example, e.g. fitness steps or watch time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both are realistic data types.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. location data, search history, step count",
            commonErrors: ["Not real data types."],
          },
        },
        {
          id: "edxpc-u3-real-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why companies collect data about users and what they might use it for.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Why collect data",
                statement:
                  "Data helps companies personalise and improve services.",
              },
            ],
            steps: [
              {
                reasoning: "Personalisation — recommendations, targeted ads.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Improvement — see what works, fix problems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Also raises privacy concerns — data can be misused.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Personalise + improve + privacy concerns",
            commonErrors: ["Only positives or only negatives."],
          },
        },
      ],
    },
    {
      id: "edxpc-u3-summary",
      title: "Data and Information Summary",
      skill: "Summarise key ideas about data and information.",
      lesson: {
        sections: [
          {
            heading: "Key ideas",
            body: "Data = raw facts; information = processed, useful data. Input goes into computers; output comes out. Data can be presented as lists, tables, charts or pictograms. Sorted data is easier to search; queries find specific records. Sensors collect real-world data for devices to use.",
          },
          {
            heading: "Why it matters",
            body: "Almost everything digital uses data — weather forecasts, satnav, recommendations, games. Understanding data helps you use technology better and think about how your own data is used online.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Summarise the input-process-output cycle in one sentence.",
          solution:
            "Data goes in, the computer processes it, and a result comes out.",
        },
      },
      questions: [
        {
          id: "edxpc-u3-sum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Data becomes useful when it is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "deleted" },
              { id: "b", text: "processed into information" },
              { id: "c", text: "printed" },
              { id: "d", text: "hidden" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data to information",
                statement: "Processing makes data useful.",
              },
            ],
            steps: [
              {
                reasoning: "Processing turns data into information.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Processed into information",
            commonErrors: ["Thinking raw data is already useful."],
          },
        },
        {
          id: "edxpc-u3-sum-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one input device and one output device.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "I/O devices",
                statement: "Input sends data in; output gives results.",
              },
            ],
            steps: [
              {
                reasoning: "Correct input device, e.g. keyboard.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Correct output device, e.g. screen.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "e.g. keyboard (in), screen (out)",
            commonErrors: ["Same device for both."],
          },
        },
        {
          id: "edxpc-u3-sum-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why sort data before searching it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sort then search",
                statement: "Sorted data enables faster search methods.",
              },
            ],
            steps: [
              {
                reasoning: "Sorted data has known order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Allows binary search — halving each time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Much faster for large datasets.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Known order → faster search",
            commonErrors: ["No real reason."],
          },
        },
        {
          id: "edxpc-u3-sum-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A fitness watch collects your step data. Describe the full journey of that data from sensor to screen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data journey",
                statement: "Sensor → process → display.",
              },
            ],
            steps: [
              {
                reasoning: "Sensor collects movement/step data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Device processes and counts steps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Output: step count shown on watch/phone screen.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Sensor → count steps → show on screen",
            commonErrors: ["Missing processing or output."],
          },
        },
      ],
    },
  ],
};
