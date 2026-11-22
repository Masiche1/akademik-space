import type { Lesson } from "../../../types.ts";

export const lesson302: Lesson = {
  id: "ecs11-u4-lesson-4-2",
  code: "4-2",
  title: "Input and Output Devices",
  goal: "I CAN categorise input/output devices and explain their functions.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Hardware"],
  vocabulary: [
    { term: "Input device", definition: "Sends data to computer." },
    { term: "Output device", definition: "Receives data from computer." },
    {
      term: "Biometric device",
      definition: "Identifies via physical characteristics.",
    },
    {
      term: "Actuator",
      definition: "Output device that causes physical action.",
    },
    { term: "Haptic feedback", definition: "Touch/vibration response." },
  ],
  concepts: [
    {
      id: "ecs11-u4-io",
      title: "Input and Output Devices",
      skill: "Categorise devices and understand their roles.",
      lesson: {
        sections: [
          {
            heading: "Input devices",
            body: "**Keyboard/mouse**: manual input. **Scanner**: digitises documents/images. **Microphone**: audio input. **Webcam**: video input. **Barcode reader**: product codes. **Biometric**: fingerprint, iris, face — identification. **Sensor**: temperature, motion, light — real-world data.\n\n**Output devices**: monitor, printer, speakers, projector. **Actuators**: motors, lights, robots — cause physical action. **Haptic**: vibration feedback.",
          },
          {
            heading: "Specialised devices",
            body: "**3D printer**: input model → output physical object. **Plotter**: precise drawings/vectors. **VR headset**: input head/hand tracking + output visuals/audio/haptics. **Smart sensors**: IoT devices collecting environmental data.\n\n**Some devices both**: touchscreen, interactive whiteboard.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Fingerprint scanner — input or output?",
          solution: "Input — sends biometric data to computer.",
        },
      },
      questions: [
        {
          id: "ecs11-u4-io-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an input device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Displays output" },
              { id: "b", text: "Stores data" },
              { id: "c", text: "Connects networks" },
              { id: "d", text: "Sends data to computer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Input device",
                statement: "Sends data to computer.",
              },
            ],
            steps: [
              { reasoning: "Input = to computer.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Sends data",
            commonErrors: ["Output confused."],
          },
        },
        {
          id: "ecs11-u4-io-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of biometric input devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biometric devices",
                statement: "Physical identification.",
              },
            ],
            steps: [
              { reasoning: "Fingerprint scanner.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Iris/retina scanner or facial recognition.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Voice recognition.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Fingerprint, iris, face, voice.",
            commonErrors: ["Keyboard.", "Only one."],
          },
        },
        {
          id: "ecs11-u4-io-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what an actuator is and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Actuator",
                statement: "Output causing physical action.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Output device that converts signal to physical action.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Examples: motor, solenoid, relay.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Used in robots, doors, valves, appliances.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Distinguish from passive output like screen.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Physical-action output — motors, solenoids.",
            commonErrors: ["Monitor.", "No example."],
          },
        },
        {
          id: "ecs11-u4-io-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a smart greenhouse system.",
          parts: [
            { label: "a", prompt: "Identify needed input devices.", marks: 4 },
            {
              label: "b",
              prompt: "Identify needed output devices/actuators.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "System design",
                statement: "Sensors in, actuators out.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Temperature, humidity, light sensors.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Soil moisture sensor.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Water pump/motor (irrigation actuator).",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Fan/heater control, display for monitoring.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) sensors (b) pumps/fans/actuators",
            commonErrors: ["Only inputs.", "No actuators."],
          },
        },
      ],
    },
    {
      id: "ecs11-u4-software2",
      title: "Utility Software and Drivers",
      skill: "Explain utilities, drivers and their roles.",
      lesson: {
        sections: [
          {
            heading: "Utilities",
            body: "**Antivirus**: detects/removes malware. **Firewall**: filters network traffic. **Backup**: copies data for recovery. **Compression**: reduces file sizes. **Disk defragmentation**: reorganises HDD data for speed. **System update**: patches security/performance.\n\n**Disk cleanup**: removes temporary files. **Task manager**: monitors processes/resources.",
          },
          {
            heading: "Drivers",
            body: "**Driver**: software translating OS commands to device-specific instructions. Each hardware device needs driver — printer, graphics card, keyboard. **Plug and play**: OS auto-installs common drivers.\n\n**Without driver**: device won't work properly or at all. Drivers update for compatibility and new features.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "New printer doesn't work. Likely cause?",
          solution: "Missing/outdated driver.",
        },
      },
      questions: [
        {
          id: "ecs11-u4-software2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a driver?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Network cable" },
              { id: "b", text: "Hardware device" },
              { id: "c", text: "Software translating OS to device commands" },
              { id: "d", text: "Operating system" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Driver",
                statement: "OS-device translator.",
              },
            ],
            steps: [
              {
                reasoning: "Driver = translation software.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Translation software",
            commonErrors: ["Hardware confused."],
          },
        },
        {
          id: "ecs11-u4-software2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of utility software.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Utilities",
                statement: "System maintenance tools.",
              },
            ],
            steps: [
              { reasoning: "Antivirus software.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Backup software or disk cleanup.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Compression or defragmentation tool.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Antivirus, backup, cleanup, compression.",
            commonErrors: ["Application.", "Only one."],
          },
        },
        {
          id: "ecs11-u4-software2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why drivers need updating.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Driver updates",
                statement: "Compatibility + fixes.",
              },
            ],
            steps: [
              {
                reasoning: "Fix bugs and compatibility issues.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Improve performance and add features.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Security patches.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Match new OS versions.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Bug fixes, performance, security, compatibility.",
            commonErrors: ["Never update.", "No reasons."],
          },
        },
        {
          id: "ecs11-u4-software2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain the fetch-decode-execute cycle in detail.",
          parts: [
            { label: "a", prompt: "Describe each stage.", marks: 4 },
            {
              label: "b",
              prompt: "Explain the role of the program counter.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FDE cycle",
                statement: "Fetch→decode→execute.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Fetch: instruction retrieved from memory.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Decode: CU interprets instruction.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Execute: ALU/CU performs operation.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Store result, repeat cycle.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Program counter holds address of next instruction.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Incremented each cycle; jumps for branches.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 3 stages+repeat (b) PC tracks next instruction",
            commonErrors: ["Wrong stages.", "No PC role."],
          },
        },
      ],
    },
  ],
};
