module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson61",
    lesson: {
      id: "ciecs-u2-lesson-2-1", code: "2-1",
      title: "Hardware: CPU, Memory and Storage",
      goal: "I CAN describe computer components and their roles in processing and storage.",
      standards: ["Cambridge IGCSE Computer Science 0478: hardware", "0478 section 3: hardware"],
      vocabulary: [
        { term: "CPU", definition: "Central processing unit — executes instructions." },
        { term: "Clock speed", definition: "CPU cycles per second measured in GHz." },
        { term: "RAM", definition: "Random access memory — temporary working memory." },
        { term: "Storage", definition: "Permanent memory — HDD, SSD, optical." },
        { term: "Cache", definition: "Small fast memory inside CPU for frequently used data." },
        { term: "Bottleneck", definition: "Slowest component limiting overall performance." },
      ],
      concept: {
        id: "ciecs-u2-s1-hw", title: "Hardware components",
        skill: "Describe CPU, memory and storage roles at IGCSE level.",
        sections: [
          { heading: "Processing and memory", body: "CPU executes instructions at clock speed (GHz). Cache stores frequently accessed data for speed. RAM holds active programs — volatile (lost on power off). More RAM = more programs can run simultaneously." },
          { heading: "Storage and bottlenecks", body: "Storage (HDD/SSD) keeps files permanently. SSDs faster than HDDs (no moving parts). Performance limited by bottleneck — fast CPU + little RAM still lags with many apps." },
        ],
        keyFormulas: [
          { name: "CPU", statement: "executes instructions; GHz=speed" },
          { name: "RAM", statement: "temporary active memory" },
          { name: "Storage", statement: "permanent file storage" },
        ],
        workedExample: {
          problem: "Why does adding RAM help a computer that freezes with many apps?",
          solution: "More apps need more active memory. With little RAM, system swaps to slow storage → lag. More RAM = more apps run smoothly.",
        },
        questions: [
          {
            id: "ciecs-u2-hw-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the CPU's main function?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Execute instructions" }, { id: "b", text: "Store files permanently" }, { id: "c", text: "Display images" }, { id: "d", text: "Connect networks" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "CPU", statement: "Instruction executor." }],
              steps: [{ reasoning: "CPU processes program instructions.", marks: 1, markCode: "M" }],
              finalAnswer: "Executes instructions",
            },
          },
          {
            id: "ciecs-u2-hw-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between RAM and storage?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "RAM vs storage", statement: "Temp vs permanent." }],
              steps: [
                { reasoning: "RAM = temporary active memory.", marks: 1, markCode: "M" },
                { reasoning: "Storage = permanent file storage.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Temporary vs permanent",
            },
          },
          {
            id: "ciecs-u2-hw-q3", difficulty: "core", totalMarks: 3,
            stem: "Why is clock speed not the only factor in computer performance?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Performance factors", statement: "Multiple components matter." }],
              steps: [
                { reasoning: "RAM, storage, GPU also affect speed.", marks: 1, markCode: "M" },
                { reasoning: "Bottleneck limits regardless of CPU speed.", marks: 1, markCode: "M" },
                { reasoning: "Workload determines which matters most.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Other components and workload matter",
            },
          },
          {
            id: "ciecs-u2-hw-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define CPU, clock speed, RAM, storage, cache, bottleneck. (b) What is GHz? (c) Why is RAM volatile? (d) What is cache for? (e) Why SSD faster than HDD? (f) What limits performance most? (g) Diagnose: video editing is slow — likely causes? (h) Design specs for a gaming computer.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Hardware", statement: "Components and performance." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) CPU cycles per second.", marks: 1, markCode: "M" },
                { reasoning: "(c) Needs power; loses data on shutdown.", marks: 1, markCode: "M" },
                { reasoning: "(d) Fast access to frequent data.", marks: 1, markCode: "M" },
                { reasoning: "(e) No moving parts; faster access.", marks: 1, markCode: "M" },
                { reasoning: "(f) Slowest component (bottleneck).", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid bottleneck diagnosis.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid gaming specs.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Hardware components and performance analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u2-hw-notes", title: "Hardware — notes",
      summary: "CPU=brain, RAM=temp memory, storage=files, cache=fast access. Bottleneck=slowest part.",
      sections: [
        { heading: "Key idea", body: "Performance = weakest component, not strongest." },
        { heading: "RAM vs storage", body: "RAM is fast but temporary; storage is permanent but slower." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson62",
    lesson: {
      id: "ciecs-u2-lesson-2-2", code: "2-2",
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
      concept: {
        id: "ciecs-u2-s2-io", title: "Input/output devices",
        skill: "Classify and describe I/O devices at IGCSE level.",
        sections: [
          { heading: "Input and output", body: "Input devices send data to computer: keyboard, mouse, scanner, microphone, sensors. Output devices receive data: monitor, printer, speakers, actuators. Some are both (touchscreen)." },
          { heading: "Sensors and actuators", body: "Sensors detect physical world — temperature, light, motion. Actuators act on it — motors, buzzers, lights. Together they connect computers to the physical world (embedded systems, robotics)." },
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
        questions: [
          {
            id: "ciecs-u2-io-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an input device?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Sends data to the computer" }, { id: "b", text: "Receives data from computer" }, { id: "c", text: "Stores files" }, { id: "d", text: "A network cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Input device", statement: "Data to computer." }],
              steps: [{ reasoning: "Input sends data INTO computer.", marks: 1, markCode: "M" }],
              finalAnswer: "Sends data to computer",
            },
          },
          {
            id: "ciecs-u2-io-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Give two examples of input and two of output devices.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "I/O devices", statement: "Examples." }],
              steps: [
                { reasoning: "Input: keyboard/mouse/scanner/mic.", marks: 1, markCode: "M" },
                { reasoning: "Output: monitor/printer/speakers.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Input+output examples",
            },
          },
          {
            id: "ciecs-u2-io-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between a sensor and an actuator? Give an example of each in a smart home.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Sensor vs actuator", statement: "Detect vs act." }],
              steps: [
                { reasoning: "Sensor detects (temp, motion); actuator acts (motor, buzzer).", marks: 1, markCode: "M" },
                { reasoning: "e.g. motion sensor triggers light.", marks: 1, markCode: "M" },
                { reasoning: "Both examples given.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Sensor=detect, actuator=act",
            },
          },
          {
            id: "ciecs-u2-io-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define input device, output device, peripheral, sensor, actuator, interface. (b) Classify: scanner, speakers, webcam, motor, touchscreen. (c) Why is a touchscreen both input and output? (d) What is an interface? (e) Give 3 examples of sensors in a car. (f) Give 3 examples of actuators in a car. (g) How do sensors/actuators enable robotics? (h) Design an automatic plant watering system listing sensors and actuators.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "I/O devices", statement: "Classification, sensors, actuators." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Correct classifications.", marks: 1, markCode: "M" },
                { reasoning: "(c) Displays output + accepts touch input.", marks: 1, markCode: "M" },
                { reasoning: "(d) Connection point for communication.", marks: 1, markCode: "M" },
                { reasoning: "(e) Three valid car sensors.", marks: 1, markCode: "M" },
                { reasoning: "(f) Three valid car actuators.", marks: 1, markCode: "M" },
                { reasoning: "(g) Sensors detect → computer decides → actuators act.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid watering system design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "I/O devices, sensors and actuators.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u2-io-notes", title: "I/O devices — notes",
      summary: "Input=sends data, output=receives. Sensors detect physical world; actuators act on it.",
      sections: [
        { heading: "Key idea", body: "Sensors+actuators connect computers to the physical world." },
        { heading: "Embedded", body: "Most devices (cars, phones, appliances) have hidden computers." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson63",
    lesson: {
      id: "ciecs-u2-lesson-2-3", code: "2-3",
      title: "Software: Operating Systems and Utilities",
      goal: "I CAN describe operating systems, utility software and their functions.",
      standards: ["Cambridge IGCSE Computer Science 0478: software", "0478 section 4: software"],
      vocabulary: [
        { term: "Operating system", definition: "Software managing hardware and running programs." },
        { term: "Utility software", definition: "Tools helping maintain/manage the system." },
        { term: "Driver", definition: "Software letting OS communicate with hardware." },
        { term: "File management", definition: "Organising, storing and retrieving files." },
        { term: "Memory management", definition: "Allocating RAM to programs." },
        { term: "User interface", definition: "How users interact with the computer." },
      ],
      concept: {
        id: "ciecs-u2-s3-sw", title: "Operating systems and utilities",
        skill: "Describe OS functions and utility software at IGCSE level.",
        sections: [
          { heading: "Operating system roles", body: "OS manages hardware resources, runs programs, handles file storage, provides user interface (GUI/CLI). Examples: Windows, macOS, Linux, Android, iOS. Drivers let OS talk to specific hardware." },
          { heading: "Utility software", body: "Utilities maintain the system: antivirus (protect), backup (copy data), defragmentation (organise disk), compression tools, disk cleanup, system updates." },
        ],
        keyFormulas: [
          { name: "OS", statement: "manages hardware + runs programs" },
          { name: "Driver", statement: "OS↔hardware translator" },
          { name: "Utility", statement: "maintenance tools" },
        ],
        workedExample: {
          problem: "What happens when you double-click a file? Trace the OS's role.",
          solution: "OS reads file association → launches correct app → allocates memory → app displays file.",
        },
        questions: [
          {
            id: "ciecs-u2-sw-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an operating system?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Software managing hardware and running programs" }, { id: "b", text: "A type of hardware" }, { id: "c", text: "A network cable" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Operating system", statement: "System manager." }],
              steps: [{ reasoning: "OS manages resources and runs programs.", marks: 1, markCode: "M" }],
              finalAnswer: "System management software",
            },
          },
          {
            id: "ciecs-u2-sw-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name three functions of an operating system.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "OS functions", statement: "Resource management." }],
              steps: [
                { reasoning: "e.g. file management, memory allocation, user interface.", marks: 1, markCode: "M" },
                { reasoning: "Three valid functions.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. files/memory/UI",
            },
          },
          {
            id: "ciecs-u2-sw-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a driver and why is it needed? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Driver", statement: "OS-hardware translator." }],
              steps: [
                { reasoning: "Driver lets OS communicate with specific hardware.", marks: 1, markCode: "M" },
                { reasoning: "e.g. printer driver lets OS send print jobs.", marks: 1, markCode: "M" },
                { reasoning: "Without it, hardware won't work properly.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "OS↔hardware translator",
            },
          },
          {
            id: "ciecs-u2-sw-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define operating system, utility software, driver, file management, memory management, user interface. (b) Name 3 OS functions. (c) What is a GUI vs CLI? (d) Give 3 examples of utility software. (e) Why update drivers? (f) What does antivirus software do? (g) What is defragmentation? (h) Design an OS feature wishlist for students.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Software", statement: "OS, utilities, drivers." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Three valid OS functions.", marks: 1, markCode: "M" },
                { reasoning: "(c) GUI=visual; CLI=text commands.", marks: 1, markCode: "M" },
                { reasoning: "(d) Three valid utilities.", marks: 1, markCode: "M" },
                { reasoning: "(e) Fix bugs, add features, security.", marks: 1, markCode: "M" },
                { reasoning: "(f) Detects/removes malware.", marks: 1, markCode: "M" },
                { reasoning: "(g) Organises disk data for faster access.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid OS feature wishlist.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Operating systems and utility software.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u2-sw-notes", title: "Software — notes",
      summary: "OS manages hardware+programs; drivers translate for hardware; utilities maintain the system.",
      sections: [
        { heading: "Key idea", body: "OS is the bridge between users, programs and hardware." },
        { heading: "Utilities", body: "Antivirus, backup, cleanup — keep the system healthy." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson64",
    lesson: {
      id: "ciecs-u2-lesson-2-4", code: "2-4",
      title: "Automatic Systems and Control",
      goal: "I CAN describe how sensors, processors and actuators create automatic systems.",
      standards: ["Cambridge IGCSE Computer Science 0478: automatic systems", "0478 section 6: automatic systems"],
      vocabulary: [
        { term: "Automatic system", definition: "System that operates without human intervention." },
        { term: "Sensor", definition: "Device detecting physical properties." },
        { term: "Processor", definition: "Computes response based on sensor input." },
        { term: "Actuator", definition: "Device performing physical action." },
        { term: "Feedback", definition: "Output returned as input to adjust behaviour." },
        { term: "Closed-loop", definition: "System using feedback to self-correct." },
      ],
      concept: {
        id: "ciecs-u2-s4-auto", title: "Automatic systems",
        skill: "Describe sensor-processor-actuator systems at IGCSE level.",
        sections: [
          { heading: "The control cycle", body: "Automatic systems: sensor detects → processor decides → actuator acts. Example: thermostat senses temperature → processor compares to setpoint → heater turns on/off. Feedback loops continuously adjust." },
          { heading: "Feedback and open/closed loop", body: "Closed-loop uses feedback to self-correct (thermostat). Open-loop doesn't check result (timer-based irrigation). Closed-loop is more accurate but more complex." },
        ],
        keyFormulas: [
          { name: "Control cycle", statement: "sense→process→act→feedback" },
          { name: "Closed-loop", statement: "feedback self-corrects" },
          { name: "Open-loop", statement: "no feedback check" },
        ],
        workedExample: {
          problem: "Describe how an automatic car park barrier works.",
          solution: "Sensor detects car → processor checks ticket/payment → actuator lifts barrier → sensor detects car passed → barrier lowers.",
        },
        questions: [
          {
            id: "ciecs-u2-au-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What are the three main components of an automatic system?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Sensor, processor, actuator" }, { id: "b", text: "Input, output, storage" }, { id: "c", text: "Hardware, software, data" }, { id: "d", text: "CPU, RAM, disk" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Automatic system", statement: "Sense-process-act." }],
              steps: [{ reasoning: "The control cycle components.", marks: 1, markCode: "M" }],
              finalAnswer: "Sensor, processor, actuator",
            },
          },
          {
            id: "ciecs-u2-au-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is feedback in a control system?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Feedback", statement: "Output→input loop." }],
              steps: [
                { reasoning: "Feedback = output returned as input.", marks: 1, markCode: "M" },
                { reasoning: "Enables self-correction.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Output fed back as input",
            },
          },
          {
            id: "ciecs-u2-au-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare open-loop and closed-loop control. Give an example of each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Control types", statement: "Feedback vs no feedback." }],
              steps: [
                { reasoning: "Open=no feedback; closed=feedback corrects.", marks: 1, markCode: "M" },
                { reasoning: "e.g. open=timer irrigation; closed=thermostat.", marks: 1, markCode: "M" },
                { reasoning: "Closed-loop more accurate.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Open vs closed loop + examples",
            },
          },
          {
            id: "ciecs-u2-au-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define automatic system, sensor, processor, actuator, feedback, closed-loop. (b) Describe the control cycle. (c) Give 3 examples of automatic systems. (d) What is a thermostat's feedback loop? (e) Why is closed-loop more accurate? (f) What is open-loop? (g) Name sensors/actuators in a smart sprinkler. (h) Design an automatic system for school lighting.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Automatic systems", statement: "Sense-process-act, feedback." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Sense→process→act→feedback.", marks: 1, markCode: "M" },
                { reasoning: "(c) Three valid examples.", marks: 1, markCode: "M" },
                { reasoning: "(d) Senses temp → adjusts heating.", marks: 1, markCode: "M" },
                { reasoning: "(e) Feedback corrects errors.", marks: 1, markCode: "M" },
                { reasoning: "(f) No feedback check.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid sensor/actuator list.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid lighting system design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Automatic systems and feedback control.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u2-au-notes", title: "Automatic systems — notes",
      summary: "Sensor→processor→actuator cycle; closed-loop uses feedback to self-correct.",
      sections: [
        { heading: "Key idea", body: "Automatic systems sense, decide and act without humans." },
        { heading: "Feedback", body: "Closed-loop = more accurate but more complex." },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson65",
    lesson: {
      id: "ciecs-u2-lesson-2-5", code: "2-5",
      title: "The Internet and Its Uses",
      goal: "I CAN describe internet applications including e-commerce, cloud computing and social media.",
      standards: ["Cambridge IGCSE Computer Science 0478: the internet and its uses", "0478 section 5: internet uses"],
      vocabulary: [
        { term: "E-commerce", definition: "Buying/selling goods online." },
        { term: "Cloud computing", definition: "Storing/processing data on remote servers." },
        { term: "Social media", definition: "Platforms for sharing content and connecting." },
        { term: "IPTV", definition: "Television delivered over internet protocol." },
        { term: "VoIP", definition: "Voice calls over internet." },
        { term: "IoT", definition: "Internet of Things — connected smart devices." },
      ],
      concept: {
        id: "ciecs-u2-s5-inet", title: "Internet applications",
        skill: "Describe internet services and their implications at IGCSE level.",
        sections: [
          { heading: "Internet applications", body: "E-commerce (online shopping, banking), cloud computing (remote storage/processing), social media (sharing/connecting), IPTV (streaming TV), VoIP (internet calls), IoT (connected devices)." },
          { heading: "Implications", body: "Benefits: convenience, access, communication. Concerns: privacy, security, digital divide, misinformation, dependency on connectivity." },
        ],
        keyFormulas: [
          { name: "E-commerce", statement: "online buying/selling" },
          { name: "Cloud", statement: "remote storage/processing" },
          { name: "IoT", statement: "connected smart devices" },
        ],
        workedExample: {
          problem: "Compare cloud storage vs local storage for a school.",
          solution: "Cloud: accessible anywhere, automatic backup, but needs internet + privacy concerns. Local: private, fast, but limited capacity + no remote access.",
        },
        questions: [
          {
            id: "ciecs-u2-iu-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is e-commerce?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Buying/selling goods online" }, { id: "b", text: "A type of computer" }, { id: "c", text: "A network cable" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "E-commerce", statement: "Online trade." }],
              steps: [{ reasoning: "E-commerce = internet-based buying/selling.", marks: 1, markCode: "M" }],
              finalAnswer: "Online buying/selling",
            },
          },
          {
            id: "ciecs-u2-iu-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is cloud computing? Give one benefit and one concern.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Cloud computing", statement: "Remote storage/processing." }],
              steps: [
                { reasoning: "Data stored/processed on remote servers.", marks: 1, markCode: "M" },
                { reasoning: "Benefit: accessibility; concern: privacy/security.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Remote servers; access vs privacy",
            },
          },
          {
            id: "ciecs-u2-iu-q3", difficulty: "core", totalMarks: 3,
            stem: "Name three internet applications and describe one benefit and one risk of each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Internet uses", statement: "Applications + implications." }],
              steps: [
                { reasoning: "e.g. social media: connects people but privacy risks.", marks: 1, markCode: "M" },
                { reasoning: "e.g. cloud: accessible but security concerns.", marks: 1, markCode: "M" },
                { reasoning: "e.g. e-commerce: convenient but fraud risk.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Three applications with implications",
            },
          },
          {
            id: "ciecs-u2-iu-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define e-commerce, cloud computing, social media, IPTV, VoIP, IoT. (b) What is the digital divide? (c) What is IPTV vs traditional TV? (d) What is VoIP? (e) What is the Internet of Things? (f) Give 3 benefits of internet use. (g) Give 3 risks of internet use. (h) Should schools provide laptops or rely on students' own devices? Evaluate.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Internet uses", statement: "Applications and implications." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Gap between those with/without access.", marks: 1, markCode: "M" },
                { reasoning: "(c) Internet-delivered vs broadcast TV.", marks: 1, markCode: "M" },
                { reasoning: "(d) Voice calls over internet.", marks: 1, markCode: "M" },
                { reasoning: "(e) Connected smart devices.", marks: 1, markCode: "M" },
                { reasoning: "(f) Three valid benefits.", marks: 1, markCode: "M" },
                { reasoning: "(g) Three valid risks.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Internet applications and societal implications.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u2-iu-notes", title: "Internet uses — notes",
      summary: "E-commerce, cloud, social media, IPTV, VoIP, IoT — each with benefits and risks.",
      sections: [
        { heading: "Key idea", body: "Internet transforms communication, commerce and access to information." },
        { heading: "Implications", body: "Weigh convenience against privacy, security and equity." },
      ],
    },
  },
];
