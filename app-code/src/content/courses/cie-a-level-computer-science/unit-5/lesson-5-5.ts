import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "ciealc-u5-lesson-5-5",
  code: "5-5",
  title: "Networking in Depth: Protocols, Layers and Security",
  goal: "I CAN describe the OSI/TCP-IP models, common protocols and network security measures.",
  standards: ["Cambridge A Level Computer Science 9618", "Paper 1: networking"],
  vocabulary: [
    {
      term: "OSI model",
      definition: "Seven-layer model for network communication.",
    },
    {
      term: "TCP/IP",
      definition: "Four-layer protocol suite used on the internet.",
    },
    { term: "Packet", definition: "Data unit sent over networks." },
    {
      term: "IP address",
      definition: "Unique identifier for a device on a network.",
    },
    {
      term: "DNS",
      definition:
        "Domain Name System — translates domain names to IP addresses.",
    },
    {
      term: "Firewall",
      definition: "Security system controlling network traffic.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u5-s5-net",
      title: "Network layers and protocols",
      skill: "Describe layered models and network security.",
      lesson: {
        sections: [
          {
            heading: "Layered models",
            body: "OSI has 7 layers: physical, data link, network, transport, session, presentation, application. TCP/IP has 4: network interface, internet, transport, application. Each layer has specific protocols — physical (cables, signals), data link (MAC, Ethernet), network (IP, routing), transport (TCP, UDP), application (HTTP, FTP, SMTP).",
          },
          {
            heading: "Key protocols",
            body: "TCP provides reliable, ordered delivery — handshake, acknowledgements, retransmission. UDP is fast but unreliable — used for streaming, DNS queries. IP routes packets between networks. DNS translates domain names to IP addresses. HTTP/HTTPS transfer web data; FTP transfers files; SMTP sends email.",
          },
          {
            heading: "Security",
            body: "Firewalls filter traffic by rules — block/allow ports and IPs. Encryption (HTTPS, TLS) scrambles data in transit. Authentication verifies identity — passwords, biometrics, 2FA. VPNs create encrypted tunnels. Intrusion detection monitors for attacks. Physical security protects hardware.",
          },
        ],
      },
      questions: [
    {
      id: "ciealc-u5-nt-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "How many layers does the OSI model have?",
      response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
      markscheme: {
        principles: [
          { kind: "definition", name: "OSI model", statement: "Seven layers." },
        ],
        steps: [
          {
            reasoning: "The OSI model has seven layers.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "7",
      },
    },
    {
      id: "ciealc-u5-nt-q2",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What does DNS stand for?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Domain Name System" },
          { id: "b", text: "Digital Network System" },
          { id: "c", text: "Data Network Service" },
          { id: "d", text: "Direct Network Switch" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "DNS", statement: "Domain Name System." },
        ],
        steps: [
          {
            reasoning:
              "DNS is the Domain Name System — it translates domain names to IP addresses.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Domain Name System",
      },
    },
    {
      id: "ciealc-u5-nt-q3",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the main difference between TCP and UDP?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "TCP doesn't use packets" },
          { id: "b", text: "TCP is faster" },
          {
            id: "c",
            text: "TCP is reliable and ordered; UDP is fast but unreliable",
          },
          { id: "d", text: "UDP is encrypted" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "TCP vs UDP",
            statement: "Reliable vs fast.",
          },
        ],
        steps: [
          {
            reasoning:
              "TCP provides reliable, ordered delivery with acknowledgements; UDP is faster but unreliable — packets may be lost or arrive out of order.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(b)** TCP is reliable and ordered; UDP is fast but unreliable",
      },
    },
    {
      id: "ciealc-u5-nt-q4",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "What is an IP address and what does it do?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "IP address",
            statement: "Device identifier.",
          },
        ],
        steps: [
          {
            reasoning:
              "An IP address is a unique identifier assigned to each device on a network.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It enables routing — packets are sent to the correct destination IP address.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "Unique device identifier enabling routing.",
      },
    },
    {
      id: "ciealc-u5-nt-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What does a firewall do?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Encrypts all data" },
          { id: "b", text: "Speeds up the network" },
          { id: "c", text: "Assigns IP addresses" },
          { id: "d", text: "Filters network traffic based on security rules" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Firewall",
            statement: "Traffic filter.",
          },
        ],
        steps: [
          {
            reasoning:
              "A firewall filters network traffic based on rules — blocking or allowing packets by port, IP or protocol.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Filters network traffic based on security rules",
      },
    },
    {
      id: "ciealc-u5-nt-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why TCP is called 'connection-oriented'.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "TCP handshake",
            statement: "Establishes connection first.",
          },
        ],
        steps: [
          {
            reasoning:
              "TCP establishes a connection before sending data — the three-way handshake (SYN, SYN-ACK, ACK).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It tracks sequence numbers to ensure ordered delivery and retransmits lost packets.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "This reliability makes TCP suitable for web pages, email, file transfers — data must arrive complete and in order.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "TCP establishes a connection first, ensuring reliable ordered delivery.",
      },
    },
    {
      id: "ciealc-u5-nt-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why UDP is preferred for live streaming and online gaming.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "UDP advantage",
            statement: "Speed over reliability.",
          },
        ],
        steps: [
          {
            reasoning:
              "UDP has no handshake, no acknowledgements, no retransmission — lower overhead and latency.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "For streaming/gaming, a slightly delayed or lost frame is better than waiting for retransmission.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Real-time applications prioritise timeliness over perfect delivery — UDP suits this.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "UDP's low latency suits real-time applications.",
      },
    },
    {
      id: "ciealc-u5-nt-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the role of each OSI layer group (lower, middle, upper).",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "OSI layers",
            statement: "Physical to application.",
          },
        ],
        steps: [
          {
            reasoning:
              "Lower layers (1-3): physical, data link, network — handle physical transmission and routing.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Middle layer (4): transport — ensures reliable delivery (TCP) or fast delivery (UDP).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Upper layers (5-7): session, presentation, application — manage connections, data format and user interfaces.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Lower = transmission/routing; middle = transport; upper = session/presentation/application.",
      },
    },
    {
      id: "ciealc-u5-nt-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how HTTPS differs from HTTP.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "HTTPS",
            statement: "HTTP + encryption.",
          },
        ],
        steps: [
          {
            reasoning:
              "HTTPS is HTTP with TLS/SSL encryption — data is encrypted in transit.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It prevents eavesdropping and tampering — sensitive data (passwords, payments) is protected.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "HTTPS also authenticates the server — browsers verify the certificate to prevent phishing.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "HTTPS adds encryption and authentication to HTTP.",
      },
    },
    {
      id: "ciealc-u5-nt-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which protocol is used for sending email?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "SMTP" },
          { id: "b", text: "FTP" },
          { id: "c", text: "HTTP" },
          { id: "d", text: "DNS" },
        ],
        aorrectChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "SMTP", statement: "Email protocol." },
        ],
        steps: [
          {
            reasoning:
              "SMTP (Simple Mail Transfer Protocol) is used for sending email.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(c)** SMTP",
      },
    },
    {
      id: "ciealc-u5-nt-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "(a) What is a packet? (b) What does it contain?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Packet",
            statement: "Data unit with header.",
          },
        ],
        steps: [
          {
            reasoning: "A packet is a unit of data sent over a network.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It contains a header (source, destination, sequence number) and the payload (actual data).",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "Data unit with header (routing info) and payload.",
      },
    },
    {
      id: "ciealc-u5-nt-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain two benefits of a layered network model.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Layered model benefits",
            statement: "Modularity, interoperability.",
          },
        ],
        steps: [
          {
            reasoning:
              "Modularity: each layer has a defined function — changes in one layer don't affect others.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Interoperability: different vendors can implement layers independently as long as they follow standards.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Troubleshooting: problems can be isolated to a specific layer, simplifying diagnosis.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Modularity, interoperability and easier troubleshooting.",
      },
    },
    {
      id: "ciealc-u5-nt-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether TCP or UDP is better for a file download application.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Protocol choice.",
          },
        ],
        steps: [
          {
            reasoning: "Thesis: TCP is clearly better for file downloads.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "File downloads require complete, accurate data — TCP's reliability, ordering and retransmission ensure the file arrives intact.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "UDP could lose packets without retransmission — corrupting the file; ordering matters for reassembly.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: TCP is essential for file transfers; UDP is unsuitable.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "TCP — reliability and ordering are essential for files.",
      },
    },
    {
      id: "ciealc-u5-nt-q14",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate the effectiveness of firewalls as a security measure.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Firewall limitations.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: firewalls are essential but not sufficient for security.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Benefits: block unauthorised access, filter malicious traffic, enforce security policies at network boundary.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Limitations: can't stop insider threats, malware that passes through allowed ports, social engineering; requires correct configuration.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: firewalls are necessary but must be combined with other measures — encryption, authentication, updates, user education.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Essential but insufficient alone — needs layered security.",
      },
    },
    {
      id: "ciealc-u5-nt-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether encryption alone is sufficient to secure network communication.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Encryption limitations.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: encryption protects data in transit but doesn't address all threats.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Benefits: prevents eavesdropping, ensures confidentiality and integrity of transmitted data.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Limitations: doesn't authenticate users, doesn't prevent endpoint attacks, doesn't stop malware at either end, key management is complex.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: encryption is necessary but must be combined with authentication, access control and endpoint security.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Encryption is necessary but not sufficient alone.",
      },
    },
    {
      id: "ciealc-u5-nt-q16",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how a VPN enhances network security.",
      response: { type: "open" },
      markscheme: {
        principles: [
          { kind: "definition", name: "VPN", statement: "Encrypted tunnel." },
        ],
        steps: [
          {
            reasoning:
              "A VPN creates an encrypted tunnel between the user's device and the VPN server.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "All traffic through the tunnel is encrypted — protecting data from interception on public networks.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It also masks the user's IP address and can bypass geographic restrictions.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "VPNs are essential for secure remote access to corporate networks.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Encrypted tunnel protects traffic and masks identity.",
      },
    },
    {
      id: "ciealc-u5-nt-q17",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which protocol transfers files between computers?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "FTP" },
          { id: "b", text: "HTTP" },
          { id: "c", text: "SMTP" },
          { id: "d", text: "DNS" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "FTP",
            statement: "File transfer protocol.",
          },
        ],
        steps: [
          {
            reasoning:
              "FTP (File Transfer Protocol) is used for transferring files between computers.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** FTP",
      },
    },
    {
      id: "ciealc-u5-nt-q18",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the role of a router in a network.",
      response: { type: "open" },
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
            reasoning:
              "A router connects different networks — local network to internet, or between subnets.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It uses routing tables and IP addresses to determine the best path for packets.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Routers also perform NAT (network address translation) — allowing multiple devices to share one public IP.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Connects networks, routes packets, performs NAT.",
      },
    },
      ],
    },
  ],
};
