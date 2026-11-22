import type { Lesson } from "../../../types.ts";

export const lesson202: Lesson = {
  id: "ecs10-u1-lesson-1-2",
  code: "1-2",
  title: "Networks and Connectivity",
  goal: "I CAN explain networks, topologies and connection types.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Networks"],
  vocabulary: [
    { term: "Network", definition: "Connected computers sharing resources." },
    { term: "LAN", definition: "Local Area Network — small area." },
    { term: "WAN", definition: "Wide Area Network — large area." },
    { term: "Topology", definition: "Physical layout of network." },
    { term: "Protocol", definition: "Rules for data communication." },
  ],
  concepts: [
    {
      id: "ecs10-u1-networktypes",
      title: "Network Types and Topologies",
      skill: "Distinguish LAN/WAN and describe topologies.",
      lesson: {
        sections: [
          {
            heading: "LAN and WAN",
            body: "**LAN**: local area — school, office, home. Fast, owned by one organisation. **WAN**: wide area — spans cities/countries — internet is largest WAN. **PAN**: personal — phone, smartwatch. **MAN**: metropolitan.\n\n**Client-server**: dedicated server provides services to clients. **Peer-to-peer**: devices share directly, no central server.",
          },
          {
            heading: "Topologies",
            body: "**Bus**: single cable — cheap, if cable breaks all fails. **Star**: central switch/hub — easy to add, if hub fails all fail. **Ring**: devices in circle — data travels around. **Mesh**: every device connected to every other — most reliable, most expensive.\n\n**Hybrid**: combination of topologies.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "School network covering one building — LAN or WAN?",
          solution: "LAN — small geographic area.",
        },
      },
      questions: [
        {
          id: "ecs10-u1-networktypes-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does LAN stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long Area Network" },
              { id: "b", text: "Local Area Network" },
              { id: "c", text: "Large Area Network" },
              { id: "d", text: "Link Area Network" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "LAN",
                statement: "Local Area Network.",
              },
            ],
            steps: [
              { reasoning: "LAN = local area.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Local Area Network",
            commonErrors: ["WAN confused."],
          },
        },
        {
          id: "ecs10-u1-networktypes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of a star topology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Star topology",
                statement: "Central hub, easy management.",
              },
            ],
            steps: [
              {
                reasoning: "Easy to add/remove devices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Fault isolation — one cable break affects only one device.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Central management via hub/switch.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Easy to expand, fault isolation.",
            commonErrors: ["Mesh confused.", "Only one."],
          },
        },
        {
          id: "ecs10-u1-networktypes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare client-server and peer-to-peer networks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Client-server vs P2P",
                statement: "Central vs distributed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Client-server: dedicated server, centralised control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Client-server: better security, easier backups.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "P2P: no dedicated server, each device shares.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "P2P: cheaper, but harder to manage/secure.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Server = control/security; P2P = cheap/simpler.",
            commonErrors: ["Same thing.", "No comparison."],
          },
        },
        {
          id: "ecs10-u1-networktypes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A small business wants to connect 10 computers.",
          parts: [
            {
              label: "a",
              prompt: "Recommend a topology with justification.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain client-server vs P2P for this business.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Network design",
                statement: "Match topology to needs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Star topology — easy management, fault isolation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Central switch reasonable cost for 10 devices.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Client-server if shared files/printers needed — centralised.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) P2P simpler but less secure/manageable.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) star (b) client-server for control",
            commonErrors: ["Mesh (expensive).", "No justification."],
          },
        },
      ],
    },
    {
      id: "ecs10-u1-protocols",
      title: "Network Hardware and Protocols",
      skill: "Identify network devices and explain protocols.",
      lesson: {
        sections: [
          {
            heading: "Network devices",
            body: "**Switch**: connects devices within LAN — sends data only to intended device. **Router**: connects networks — forwards packets between LAN/WAN/internet. **Modem**: converts digital↔analogue for internet. **NIC**: network interface card — connects device to network. **Firewall**: filters traffic for security.\n\n**Access point**: wireless connection point. **Server**: provides services.",
          },
          {
            heading: "Protocols",
            body: "**TCP/IP**: core internet protocol — TCP ensures reliable delivery, IP routes packets. **HTTP/HTTPS**: web pages (HTTPS encrypted). **FTP**: file transfer. **SMTP/POP3**: email. **DNS**: translates domain names to IP addresses.\n\n**Packet switching**: data split into packets, routed independently, reassembled.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Device forwards data between home network and internet. What is it?",
          solution: "Router.",
        },
      },
      questions: [
        {
          id: "ecs10-u1-protocols-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a router do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Connects devices within one network" },
              { id: "b", text: "Connects different networks" },
              { id: "c", text: "Prints documents" },
              { id: "d", text: "Stores files" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Router",
                statement: "Connects networks.",
              },
            ],
            steps: [
              {
                reasoning: "Router = between networks.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Connects networks",
            commonErrors: ["Switch confused."],
          },
        },
        {
          id: "ecs10-u1-protocols-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the role of DNS?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNS",
                statement: "Domain names → IP addresses.",
              },
            ],
            steps: [
              {
                reasoning: "Translates human-readable names to IPs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "e.g., google.com → 142.250.x.x.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Without DNS, users must memorise IPs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Domain name → IP address translation.",
            commonErrors: ["Wrong function.", "No example."],
          },
        },
        {
          id: "ecs10-u1-protocols-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what TCP/IP does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TCP/IP",
                statement: "Transmission + routing.",
              },
            ],
            steps: [
              {
                reasoning: "IP: routes packets to correct destination.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "TCP: ensures reliable, ordered delivery.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Packets reassembled in correct order.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Foundation of internet communication.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "IP routes; TCP ensures reliable delivery.",
            commonErrors: ["One protocol only.", "No mechanism."],
          },
        },
        {
          id: "ecs10-u1-protocols-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how a web page loads using network devices and protocols.",
          parts: [
            {
              label: "a",
              prompt: "Describe the role of DNS and router.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Describe the role of HTTP/HTTPS.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Web loading",
                statement: "DNS→IP, HTTP fetches.",
              },
            ],
            steps: [
              {
                reasoning: "(a) DNS converts domain to IP address.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Router directs packets between networks.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) HTTP/HTTPS requests page from server.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) HTTPS adds encryption for security.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) DNS+router route packets (b) HTTP(S) fetches page",
            commonErrors: ["Vague.", "No protocol names."],
          },
        },
      ],
    },
  ],
};
