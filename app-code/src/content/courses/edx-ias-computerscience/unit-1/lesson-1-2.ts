import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "eiascs-u1-lesson-1-2",
  code: "1-2",
  title: "Input, Output and Storage Devices",
  goal: "I CAN describe input, output and storage devices and their uses.",
  standards: ["Edexcel IAS Computer Science 9CP01 Unit 1 — Computer Systems"],
  vocabulary: [
    {
      term: "Input device",
      definition: "Sends data to computer — keyboard, mouse, scanner.",
    },
    {
      term: "Output device",
      definition: "Receives data from computer — monitor, printer.",
    },
    {
      term: "Peripheral",
      definition: "External device connected to computer.",
    },
    {
      term: "HDD",
      definition: "Hard disk drive — magnetic storage, high capacity.",
    },
    { term: "SSD", definition: "Solid state drive — flash storage, fast." },
    {
      term: "Optical storage",
      definition: "CD/DVD/Blu-ray — laser read/write.",
    },
  ],
  concepts: [
    {
      id: "eiascs-u1-devices",
      title: "Input and Output Devices",
      skill: "Identify input/output devices and their uses.",
      lesson: {
        sections: [
          {
            heading: "Input devices",
            body: "**Keyboard/mouse**: text, commands. **Scanner**: documents → digital. **Microphone**: audio input. **Camera/webcam**: images/video. **Barcode reader**: product codes. **Sensor**: environmental data — temperature, motion.\n\n**Choosing input**: depends on data type — text (keyboard), image (scanner), sound (mic), physical (sensor).",
          },
          {
            heading: "Output devices",
            body: "**Monitor**: visual display — LCD/LED. **Printer**: paper output — inkjet/laser. **Speakers/headphones**: audio output. **Projector**: large visual display. **Plotter**: large-format drawings.\n\n**Choosing output**: depends on need — display (monitor), paper (printer), sound (speakers), large format (projector).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Device converts paper document to digital image. Type?",
          solution: "Scanner — input device.",
        },
      },
      questions: [
        {
          id: "eiascs-u1-io-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an input device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Monitor" },
              { id: "b", text: "Sends data to computer" },
              { id: "c", text: "Printer" },
              { id: "d", text: "Speakers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Input device",
                statement: "Sends data.",
              },
            ],
            steps: [
              {
                reasoning: "Input = sends to computer.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Sends data",
            commonErrors: ["Output confused."],
          },
        },
        {
          id: "eiascs-u1-io-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two input and two output devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IO devices",
                statement: "Input + output.",
              },
            ],
            steps: [
              {
                reasoning: "Input: keyboard, mouse, scanner, microphone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Output: monitor, printer, speakers.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Correctly classified.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Input: keyboard/scanner; output: monitor/printer.",
            commonErrors: ["Wrong classification.", "Only one type."],
          },
        },
        {
          id: "eiascs-u1-io-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why sensors are important input devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sensors",
                statement: "Real-world data.",
              },
            ],
            steps: [
              {
                reasoning: "Convert physical phenomena to digital data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Enable automation — temperature control, security.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "IoT — connect physical world to computers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Real-time monitoring — immediate response.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Physical→digital, enables automation.",
            commonErrors: ["Not important.", "No function."],
          },
        },
        {
          id: "eiascs-u1-io-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a system for a library to digitise books.",
          parts: [
            { label: "a", prompt: "Identify needed devices.", marks: 4 },
            { label: "b", prompt: "Explain data flow.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System design",
                statement: "Devices + flow.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Scanner — books → digital images.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Storage — HDD/SSD for digital files.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Books scanned → OCR converts to text → stored.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Users access via computers/network.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) scanner+storage (b) scan→OCR→store",
            commonErrors: ["Wrong devices.", "No flow."],
          },
        },
      ],
    },
    {
      id: "eiascs-u1-storage",
      title: "Storage Technologies",
      skill: "Compare storage technologies and their applications.",
      lesson: {
        sections: [
          {
            heading: "Storage types",
            body: "**HDD**: magnetic platters, read/write heads — high capacity, cheap, slow, fragile. **SSD**: flash memory chips — fast, durable, expensive per GB. **Optical**: CD/DVD/Blu-ray — laser read, portable, slow, being phased out. **Cloud**: remote servers — accessible anywhere, subscription, needs internet.\n\n**Tape**: sequential access — archival, very high capacity, slow retrieval.",
          },
          {
            heading: "Choosing storage",
            body: "**Speed**: SSD > HDD > optical > tape. **Capacity**: HDD > SSD > optical > tape (per device). **Cost**: HDD cheapest per GB; SSD expensive; cloud subscription. **Durability**: SSD most durable; HDD fragile; optical scratchable.\n\n**Use cases**: SSD for OS/apps; HDD for bulk storage; cloud for backup/sharing; optical for distribution.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Need fast boot times for laptop. Storage type?",
          solution: "SSD.",
        },
      },
      questions: [
        {
          id: "eiascs-u1-stor-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which storage is fastest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "HDD" },
              { id: "b", text: "SSD" },
              { id: "c", text: "Optical" },
              { id: "d", text: "Tape" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Storage speed",
                statement: "SSD fastest.",
              },
            ],
            steps: [
              {
                reasoning: "SSD fastest among listed.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** SSD",
            commonErrors: ["HDD confused."],
          },
        },
        {
          id: "eiascs-u1-stor-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between HDD and SSD.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "HDD vs SSD",
                statement: "Mechanical vs flash.",
              },
            ],
            steps: [
              {
                reasoning: "HDD: mechanical, magnetic, slower, cheaper.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "SSD: flash, no moving parts, faster, expensive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "SSD more durable — shock resistant.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "HDD=cheap/slow, SSD=fast/expensive.",
            commonErrors: ["Same.", "Only one difference."],
          },
        },
        {
          id: "eiascs-u1-stor-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain cloud storage advantages and disadvantages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cloud storage",
                statement: "Remote access + risks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advantages: accessible anywhere, automatic backup, scalable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advantages: no hardware maintenance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantages: needs internet, subscription cost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantages: security/privacy concerns.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Access+backup vs internet+privacy.",
            commonErrors: ["Only advantages.", "Only disadvantages."],
          },
        },
        {
          id: "eiascs-u1-stor-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company needs to store 100TB of data for 10 years.",
          parts: [
            { label: "a", prompt: "Suggest storage solution.", marks: 4 },
            { label: "b", prompt: "Justify choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Storage selection",
                statement: "Cost + capacity + longevity.",
              },
            ],
            steps: [
              {
                reasoning: "(a) HDD array — high capacity, cheap per TB.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Backup to tape/cloud — redundancy.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Cost-effective — HDD cheapest per TB.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Long-term — HDD suitable for archival.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) HDD+tape (b) cost+capacity",
            commonErrors: ["SSD only.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiascs-u1-networks",
      title: "Networks and Connectivity",
      skill: "Explain networks, network types and connectivity.",
      lesson: {
        sections: [
          {
            heading: "Network types",
            body: "**LAN**: local area — small area (office, home). **WAN**: wide area — large area (country, global). **PAN**: personal area — devices around person (Bluetooth). **MAN**: metropolitan — city-sized.\n\n**Topology**: physical layout — star, bus, ring, mesh. **Star**: central switch/hub — most common, easy to manage. **Mesh**: every device connected — resilient but complex.",
          },
          {
            heading: "Network hardware",
            body: "**NIC**: network interface card — connects device. **Switch**: connects devices in LAN — forwards data. **Router**: connects networks — directs traffic (LAN to internet). **Modem**: converts signals — digital ↔ analog. **Access point**: wireless connection.\n\n**Internet**: global network of networks — uses TCP/IP protocols.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Network covering entire city. Type?",
          solution: "MAN.",
        },
      },
      questions: [
        {
          id: "eiascs-u1-net-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a LAN?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Global network" },
              { id: "b", text: "Local area network — small area" },
              { id: "c", text: "Personal network" },
              { id: "d", text: "Metropolitan network" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "LAN", statement: "Local area." },
            ],
            steps: [
              { reasoning: "LAN = local area.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Local area",
            commonErrors: ["WAN confused."],
          },
        },
        {
          id: "eiascs-u1-net-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two network devices and functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Network devices",
                statement: "Switch, router, modem.",
              },
            ],
            steps: [
              {
                reasoning: "Switch — connects devices in LAN.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Router — connects networks, directs traffic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Modem — converts digital/analog signals.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Switch, router, modem.",
            commonErrors: ["Only one.", "Wrong device."],
          },
        },
        {
          id: "eiascs-u1-net-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain difference between switch and router.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Switch vs router",
                statement: "LAN vs networks.",
              },
            ],
            steps: [
              {
                reasoning: "Switch: connects devices within same LAN.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Router: connects different networks (LAN to internet).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Switch forwards data locally; router directs traffic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Both needed — switch for internal, router for external.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Switch=LAN, router=between networks.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiascs-u1-net-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Home network with 5 devices needs internet access.",
          parts: [
            { label: "a", prompt: "Suggest network setup.", marks: 4 },
            { label: "b", prompt: "Explain data flow.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Home network",
                statement: "Devices + connectivity.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Router with WiFi — connects all devices.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Switch if wired — additional devices.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Devices → router → modem → ISP → internet.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Router assigns IP addresses — local network.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) router+switch (b) devices→router→internet",
            commonErrors: ["No router.", "No flow."],
          },
        },
      ],
    },
  ],
};
