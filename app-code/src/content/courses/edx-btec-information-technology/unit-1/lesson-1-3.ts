import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edxbtecit-u1-lesson-1-3",
  code: "1-3",
  title: "Networks and System Performance",
  goal: "I CAN describe computer networks and factors affecting IT system performance.",
  standards: [
    "BTEC L3 National Information Technology — Unit 1: Information Technology Systems",
  ],
  vocabulary: [
    {
      term: "Network",
      definition:
        "A collection of connected devices sharing resources and data.",
    },
    {
      term: "LAN",
      definition:
        "Local Area Network — covers a small area like a building or campus.",
    },
    {
      term: "WAN",
      definition:
        "Wide Area Network — spans large distances, e.g. the internet.",
    },
    {
      term: "Bandwidth",
      definition:
        "The maximum data transfer rate of a network connection, measured in bits per second.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u1-l3-networks",
      title: "Types of Networks",
      skill: "Describe LANs, WANs and the components that connect networks.",
      lesson: {
        sections: [
          {
            heading: "Network types",
            body: "**LAN** (Local Area Network): connects devices within a building/campus — offices, schools. High bandwidth, low latency, typically wired (Ethernet) or Wi-Fi. **WAN** (Wide Area Network): connects across large distances — the internet is the largest WAN.\n\n**PAN** (Personal Area Network): devices around one person — Bluetooth, phone tethering. **MAN** (Metropolitan Area Network): city-scale. **Intranet**: private network within an organisation; **Extranet**: extends intranet to trusted partners; **Internet**: global public network.",
          },
          {
            heading: "Network components",
            body: "**Router**: connects networks, directs traffic between LAN and internet. **Switch**: connects devices within a LAN, forwards data to the right device. **Access point**: provides Wi-Fi. **Modem**: converts signals for transmission (cable/fibre). **Server**: provides services (files, email, web).\n\n**Topology** describes physical layout: star (most common — all devices connect to a central switch), bus, ring, mesh. Wired Ethernet offers reliability; Wi-Fi offers mobility.",
          },
        ],
        keyFormulas: [
          {
            name: "Network types",
            statement: "PAN → LAN → MAN → WAN by scale.",
          },
          {
            name: "Key devices",
            statement:
              "Router (between networks), switch (within LAN), access point (Wi-Fi).",
          },
        ],
        workedExample: {
          problem: "Why does a home network need both a router and a switch?",
          solution:
            "The router connects the home LAN to the internet; the switch connects multiple devices within the LAN efficiently.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u1-l3-networks-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which device connects a local network to the internet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Access point" },
              { id: "b", text: "Switch" },
              { id: "c", text: "Router" },
              { id: "d", text: "Modem alone" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Router",
                statement: "Connects different networks, directs traffic.",
              },
            ],
            steps: [
              {
                reasoning: "Router connects LAN to WAN/internet.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Router",
            commonErrors: ["Confusing router with switch."],
          },
        },
        {
          id: "edxbtecit-u1-l3-networks-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between a LAN and a WAN.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "LAN vs WAN",
                statement:
                  "LAN = small area, high speed; WAN = large area, lower speed.",
              },
            ],
            steps: [
              {
                reasoning: "LAN defined with example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "WAN defined with example.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "LAN: building/campus, fast, owned. WAN: large distances, internet, slower links.",
            commonErrors: ["No scale distinction.", "Conflated."],
          },
        },
        {
          id: "edxbtecit-u1-l3-networks-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate wired Ethernet vs Wi-Fi for an office network.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wired vs wireless",
                statement:
                  "Ethernet: reliable, fast, secure. Wi-Fi: flexible, susceptible to interference.",
              },
            ],
            steps: [
              {
                reasoning: "Ethernet advantages: speed, reliability, security.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wi-Fi advantages: mobility, easy deployment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wi-Fi limitations: interference, security.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Balanced recommendation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ethernet for fixed workstations (reliable/fast); Wi-Fi for mobile devices — hybrid approach best.",
            commonErrors: ["One-sided.", "No context."],
          },
        },
        {
          id: "edxbtecit-u1-l3-networks-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school's network has become slow during peak times.",
          parts: [
            { label: "a", prompt: "Identify three possible causes.", marks: 3 },
            { label: "b", prompt: "Suggest two diagnostic steps.", marks: 3 },
            {
              label: "c",
              prompt: "Recommend one structural improvement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Network performance",
                statement:
                  "Slow networks result from congestion, bandwidth limits, hardware faults or security issues.",
              },
            ],
            steps: [
              {
                reasoning: "Cause 1 e.g. bandwidth saturation.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Cause 2 e.g. faulty hardware.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Cause 3 e.g. malware/congestion.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Diagnostic 1 e.g. monitor bandwidth usage.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Diagnostic 2 e.g. check devices for faults.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Diagnostics link to causes.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Improvement e.g. upgrade bandwidth/switch.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Improvement justified by diagnosis.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) congestion/hardware/malware (b) monitor usage + check devices (c) bandwidth upgrade",
            commonErrors: ["No diagnosis.", "Generic fixes."],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u1-l3-performance",
      title: "System Performance and Bottlenecks",
      skill:
        "Identify factors affecting IT system performance and how to optimise them.",
      lesson: {
        sections: [
          {
            heading: "Performance factors",
            body: "System performance depends on: **CPU speed/cores** (processing power), **RAM** (working memory — insufficient RAM forces slow disk swapping), **storage speed** (SSD vs HDD dramatically affects load times), and **GPU** (graphics-intensive tasks).\n\n**Software factors**: number of running programs, startup items, background processes, malware, outdated drivers. **System configuration**: power settings, virtual memory allocation, cache settings affect performance.",
          },
          {
            heading: "Measuring and optimising",
            body: "**Benchmarking** measures performance against standards. **Task Manager/Activity Monitor** shows real-time resource usage identifying bottlenecks. **Profiling** tools analyse where software spends time.\n\nOptimisation techniques: upgrade RAM/SSD, close unnecessary programs, disable startup items, update drivers/OS, remove malware, defragment HDDs (not SSDs), adjust power settings for performance. For servers: load balancing distributes work across machines.",
          },
        ],
        keyFormulas: [
          {
            name: "Bottleneck",
            statement: "The slowest component limits overall performance.",
          },
          {
            name: "SSD vs HDD",
            statement: "SSD: no moving parts, faster access times.",
          },
        ],
        workedExample: {
          problem: "A computer takes 5 minutes to boot. What's likely wrong?",
          solution:
            "Check startup programs, HDD health, RAM usage, malware — likely HDD or too many startup items.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u1-l3-performance-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which upgrade most improves system responsiveness?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SSD replacing HDD" },
              { id: "b", text: "Larger HDD" },
              { id: "c", text: "More USB ports" },
              { id: "d", text: "Bigger case" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Storage speed",
                statement:
                  "SSD dramatically faster than HDD for boot/load times.",
              },
            ],
            steps: [
              {
                reasoning: "SSD speeds up boot and app loading.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** SSD",
            commonErrors: ["Thinking capacity = speed."],
          },
        },
        {
          id: "edxbtecit-u1-l3-performance-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a 'bottleneck' is in system performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bottleneck",
                statement:
                  "The slowest component limiting overall system performance.",
              },
            ],
            steps: [
              {
                reasoning: "Defined: slowest link limits chain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: fast CPU + slow HDD still slow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Identification via monitoring.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Bottleneck = the slowest component limiting overall speed — upgrading it gives biggest gains.",
            commonErrors: ["Vague definition.", "No example."],
          },
        },
        {
          id: "edxbtecit-u1-l3-performance-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate upgrading RAM vs CPU for a slow computer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Upgrade priorities",
                statement:
                  "Depends on bottleneck — check usage before upgrading.",
              },
            ],
            steps: [
              {
                reasoning: "RAM helps if memory usage near 100%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CPU helps if processor at 100%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Must diagnose bottleneck first.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Balanced recommendation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Upgrade depends on bottleneck — check resource usage; RAM cheaper, CPU more expensive.",
            commonErrors: ["Assuming CPU always better.", "No diagnosis."],
          },
        },
        {
          id: "edxbtecit-u1-l3-performance-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A web server slows down during peak traffic hours.",
          parts: [
            { label: "a", prompt: "Identify three possible causes.", marks: 3 },
            {
              label: "b",
              prompt: "Suggest two diagnostic approaches.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Recommend one solution and justify it.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Server performance",
                statement:
                  "Peak load exposes capacity limits — CPU, memory, bandwidth or software inefficiency.",
              },
            ],
            steps: [
              {
                reasoning: "Cause 1 e.g. insufficient CPU/RAM.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Cause 2 e.g. database bottleneck.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Cause 3 e.g. bandwidth saturation.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Diagnostic 1 e.g. monitor resource usage.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Diagnostic 2 e.g. profile application/database.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Diagnostics identify bottleneck.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Solution e.g. load balancing/upgrade.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Justified by identified bottleneck.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) CPU/RAM/db/bandwidth (b) monitor + profile (c) load balance or upgrade",
            commonErrors: ["Guessing fixes.", "No diagnosis."],
          },
        },
      ],
    },
  ],
};
