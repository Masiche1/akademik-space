import type { Lesson } from "../../../types.ts";

export const lesson223: Lesson = {
  id: "ecs10-u3-lesson-3-3",
  code: "3-3",
  title: "Data Transmission",
  goal: "I CAN explain how data travels between devices.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Networks"],
  vocabulary: [
    { term: "Packet", definition: "Small chunk of data sent over network." },
    {
      term: "Packet switching",
      definition: "Data split into packets routed independently.",
    },
    { term: "IP address", definition: "Unique numerical address of a device." },
    {
      term: "MAC address",
      definition: "Physical hardware address of network device.",
    },
    {
      term: "Bandwidth",
      definition: "Amount of data that can be transmitted per second.",
    },
  ],
  concepts: [
    {
      id: "ecs10-u3-packets",
      title: "Packets and Packet Switching",
      skill: "Explain how data is broken into packets and routed.",
      lesson: {
        sections: [
          {
            heading: "Packet switching",
            body: "Data split into packets — each contains data + header (source, destination, sequence number). Packets may take different routes, reassembled at destination. **Advantages**: efficient use of network, fault-tolerant (packets reroute). **Disadvantages**: overhead, possible delays/reordering.\n\n**Analogy**: sending a book as chapters — each chapter separate envelope, recipient reassembles.",
          },
          {
            heading: "IP addresses",
            body: "**IPv4**: 32-bit address — e.g., 192.168.1.1 — ~4 billion addresses. **IPv6**: 128-bit — vastly more addresses. **Public vs private**: public unique on internet; private (192.168.x.x) internal only. **NAT**: translates private↔public.\n\n**MAC address**: hardware identifier, e.g., 00:1A:2B:3C:4D:5E — used within local network.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why packet switching over circuit switching?",
          solution: "More efficient — shares network capacity.",
        },
      },
      questions: [
        {
          id: "ecs10-u3-packets-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a packet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A network cable" },
              { id: "b", text: "A router" },
              { id: "c", text: "A file" },
              { id: "d", text: "Small chunk of data with header" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Packet",
                statement: "Data chunk + header.",
              },
            ],
            steps: [
              {
                reasoning: "Packet = data + routing info.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Data chunk + header",
            commonErrors: ["File confused."],
          },
        },
        {
          id: "ecs10-u3-packets-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of packet switching.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Packet switching",
                statement: "Efficient, fault-tolerant.",
              },
            ],
            steps: [
              {
                reasoning: "Efficient — shares network capacity among users.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Fault-tolerant — packets can reroute around failures.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No dedicated connection needed.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Efficient sharing, fault tolerance.",
            commonErrors: ["Only one.", "Circuit switching."],
          },
        },
        {
          id: "ecs10-u3-packets-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between IPv4 and IPv6.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "IPv4 vs IPv6",
                statement: "Address space.",
              },
            ],
            steps: [
              {
                reasoning: "IPv4: 32-bit — ~4 billion addresses, running out.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "IPv6: 128-bit — vastly more addresses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "IPv6 also more efficient routing, better security.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "IPv6 uses hex notation vs IPv4 decimal dots.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "IPv4 limited; IPv6 much larger address space.",
            commonErrors: ["Same thing.", "No difference."],
          },
        },
        {
          id: "ecs10-u3-packets-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe how an email travels from sender to recipient.",
          parts: [
            {
              label: "a",
              prompt: "Explain packet breakdown and routing.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain reassembly at destination.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data transmission",
                statement: "Packets → routes → reassemble.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Email split into packets with headers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Each packet routed via routers to destination.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Packets may arrive out of order.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Sequence numbers used to reassemble correctly.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) packets+headers+routing (b) reorder+reassemble",
            commonErrors: ["Direct stream.", "No packets."],
          },
        },
      ],
    },
    {
      id: "ecs10-u3-bandwidth",
      title: "Bandwidth and Latency",
      skill: "Explain factors affecting network performance.",
      lesson: {
        sections: [
          {
            heading: "Bandwidth",
            body: "**Bandwidth**: max data capacity — measured in Mbps/Gbps. Higher bandwidth = faster transfers. **Factors**: cable type (fibre > copper > Wi-Fi), network congestion, hardware quality.\n\n**Latency**: delay before data starts transferring — ping time. Lower latency = more responsive (gaming, video calls). **Jitter**: variation in latency — causes stuttering.",
          },
          {
            heading: "Improving performance",
            body: "**Fibre optic**: fastest — light through glass. **Ethernet**: wired — stable, fast. **Wi-Fi**: convenient but interference/signal issues. **Wired vs wireless**: wired more reliable; wireless more convenient.\n\n**Congestion**: too many users → slower for everyone. **QoS**: prioritise important traffic.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Video call choppy. Likely cause?",
          solution: "High latency or low bandwidth.",
        },
      },
      questions: [
        {
          id: "ecs10-u3-bandwidth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is bandwidth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "File size" },
              { id: "b", text: "Delay in data transfer" },
              { id: "c", text: "Network cable" },
              { id: "d", text: "Max data capacity per second" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bandwidth",
                statement: "Data capacity/sec.",
              },
            ],
            steps: [
              { reasoning: "Bandwidth = capacity.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Data capacity/sec",
            commonErrors: ["Latency confused."],
          },
        },
        {
          id: "ecs10-u3-bandwidth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors that reduce network performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Performance factors",
                statement: "Congestion, interference.",
              },
            ],
            steps: [
              {
                reasoning: "Network congestion — too many users.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Wireless interference — other devices/signals.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Low bandwidth or high latency.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Congestion, interference, low bandwidth.",
            commonErrors: ["Only one.", "No factors."],
          },
        },
        {
          id: "ecs10-u3-bandwidth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between bandwidth and latency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Bandwidth vs latency",
                statement: "Capacity vs delay.",
              },
            ],
            steps: [
              {
                reasoning: "Bandwidth: how much data per second — capacity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Latency: delay before transfer starts — responsiveness.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "High bandwidth + high latency = fast but delayed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Both matter: downloads need bandwidth, gaming needs latency.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Bandwidth = capacity; latency = delay.",
            commonErrors: ["Same thing.", "No distinction."],
          },
        },
        {
          id: "ecs10-u3-bandwidth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school has slow internet during peak hours.",
          parts: [
            { label: "a", prompt: "Identify two possible causes.", marks: 4 },
            { label: "b", prompt: "Suggest two solutions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Network performance",
                statement: "Diagnose then fix.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Network congestion — many students online simultaneously.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Low bandwidth — insufficient capacity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Upgrade to fibre/higher bandwidth.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) QoS prioritise academic traffic; schedule heavy use off-peak.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) congestion+bandwidth (b) upgrade+QoS",
            commonErrors: ["No causes.", "No solutions."],
          },
        },
      ],
    },
  ],
};
