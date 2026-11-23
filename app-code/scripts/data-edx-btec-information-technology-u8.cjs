module.exports = [
  {
    file: "lesson-8-1.ts", exportName: "lesson81",
    lesson: {
      id: "edxbtecit-u8-lesson-8-1", code: "8-1",
      title: "Network Types, Components and Topologies",
      goal: "I CAN describe network types, hardware components and physical/logical topologies and explain addressing basics.",
      standards: [
        "Pearson BTEC Level 3 National Information Technology — Specialist unit: Computer Networks and Data Communication",
        "Network types, components, topologies and addressing",
      ],
      vocabulary: [
        { term: "LAN", definition: "Local Area Network covering a small geographic area such as one building." },
        { term: "WAN", definition: "Wide Area Network spanning a large geographic area, often built from linked LANs." },
        { term: "MAN", definition: "Metropolitan Area Network covering a city or campus-sized area." },
        { term: "Topology", definition: "The physical or logical layout of devices and connections on a network." },
        { term: "NIC", definition: "Network Interface Card — hardware that connects a device to a network." },
        { term: "Switch", definition: "Device that forwards frames between devices on the same LAN using MAC addresses." },
        { term: "Router", definition: "Device that forwards packets between different networks using IP addresses." },
      ],
      concepts: [
        {
          id: "edxbtecit-u8-l1-nettypes", title: "Network types, components and topologies",
          skill: "Identify network types by scale, name key hardware components and compare network topologies.",
          sections: [
            { heading: "Network types by scale", body: "**LAN** covers a small area (office, home, school) — high bandwidth, single organisation. **MAN** covers a city or large campus. **WAN** spans countries — the internet is the largest WAN, built from interconnected networks. **PAN** covers a person (Bluetooth devices). **CAN** covers a vehicle (CAN bus).\n\nNetworks connect devices in **client-server** (central server manages resources) or **peer-to-peer** (devices share resources directly) architectures." },
            { heading: "Hardware components", body: "**NIC** connects each device to the network medium. **Switch** forwards frames to the correct device on a LAN using MAC addresses. **Router** connects different networks and routes packets using IP addresses. **Access point** provides wireless connectivity. **Modem** converts signals for transmission over ISP lines. **Server** stores shared resources; **client** devices request them.\n\nTransmission media: **twisted pair** (cheap Ethernet), **coaxial**, **fibre optic** (fastest, immune to interference), **wireless** (radio/microwave/satellite)." },
            { heading: "Topologies", body: "**Bus**: all devices share one cable — cheap but a break stops everything. **Star**: all devices connect to a central switch/hub — most common; one failure affects only that device. **Ring**: devices connected in a loop — data travels around. **Mesh**: every device connects to every other — most resilient, most expensive. **Hybrid** combines topologies.\n\nTopology describes the physical layout; the **logical** topology describes how data actually flows." },
          ],
          keyFormulas: [
            { name: "Network scale", statement: "PAN < LAN < MAN < WAN" },
            { name: "Star topology", statement: "All devices → central switch/hub" },
            { name: "Addressing roles", statement: "Switch uses MAC; router uses IP" },
          ],
          workedExample: {
            problem: "A school has 400 computers across three buildings. Suggest a suitable network type and topology, justifying your choices.",
            solution: "A LAN (single site) with a star topology per building, linked by routers to form one logical LAN. Star gives easy fault isolation and management; fibre runs between buildings for high bandwidth.",
          },
          questions: [
            {
              id: "edxbtecit-u8-l1-nettypes-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which network type covers a single building such as an office?",
              response: { type: "mcq", choices: [
                { id: "a", text: "WAN" }, { id: "b", text: "LAN" }, { id: "c", text: "PAN" }, { id: "d", text: "MAN" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "LAN", statement: "Local Area Network — small geographic area such as one building." }],
                steps: [{ reasoning: "LAN covers one building/site.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** LAN",
              },
            },
            {
              id: "edxbtecit-u8-l1-nettypes-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the function of a router on a network.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Router", statement: "Forwards packets between different networks using IP addresses." }],
                steps: [
                  { reasoning: "Forwards packets between networks.", marks: 1, markCode: "M" },
                  { reasoning: "Uses IP addresses to route.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Routes packets between networks using IP addresses",
              },
            },
            {
              id: "edxbtecit-u8-l1-nettypes-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why star topology is the most common choice for modern LANs.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Star topology", statement: "Central device connects all nodes; easy management and fault isolation." }],
                steps: [
                  { reasoning: "Central switch/hub simplifies cabling and management.", marks: 1, markCode: "M" },
                  { reasoning: "A cable/device failure affects only that device, not the whole network.", marks: 1, markCode: "M" },
                  { reasoning: "Easy to add or remove devices.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Central hub: easy management, fault isolation, easy expansion",
                commonErrors: ["Claiming a single failure takes down the whole network — that is bus topology."],
              },
            },
            {
              id: "edxbtecit-u8-l1-nettypes-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Compare client-server and peer-to-peer network architectures, giving an example use of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Client-server vs P2P", statement: "Centralised resources vs distributed sharing." }],
                steps: [
                  { reasoning: "Client-server: dedicated server manages resources and security.", marks: 1, markCode: "M" },
                  { reasoning: "Client-server: easier central backup, control and scalability.", marks: 1, markCode: "M" },
                  { reasoning: "P2P: each device acts as both client and server.", marks: 1, markCode: "M" },
                  { reasoning: "P2P: cheaper, no dedicated server, but harder to manage/secure.", marks: 1, markCode: "A" },
                  { reasoning: "Examples: school network (client-server); file sharing at home (P2P).", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Client-server = centralised control; P2P = distributed, cheaper, less controlled",
              },
            },
            {
              id: "edxbtecit-u8-l1-nettypes-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name three types of network classified by geographic scale, smallest to largest.", marks: 2 },
                { label: "b", prompt: "State the difference between a switch and a router.", marks: 2 },
                { label: "c", prompt: "Identify the best transmission medium for a 10 km link between two buildings and justify it.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Network design choices", statement: "Match scale, devices and media to the requirement." }],
                steps: [
                  { part: "a", reasoning: "Any three ordered correctly, e.g. PAN/LAN/MAN/WAN.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "All three in correct size order.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Switch forwards frames on one LAN using MAC; router forwards packets between networks using IP.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Both roles correctly distinguished.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Fibre optic — high bandwidth, long distance, immune to interference.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Justification linked to the scenario.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "PAN/LAN/MAN/WAN; switch=LAN/MAC, router=inter-network/IP; fibre for 10 km",
              },
            },
            {
              id: "edxbtecit-u8-l1-nettypes-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define LAN, WAN and topology. (b) Name three topologies and describe each. (c) State the function of a NIC, switch and router. (d) Explain the difference between physical and logical topology. (e) Give one advantage and one disadvantage of mesh topology.",
              parts: [
                { label: "a", prompt: "Define LAN, WAN and topology.", marks: 3 },
                { label: "b", prompt: "Name and describe three topologies.", marks: 3 },
                { label: "c", prompt: "State NIC, switch and router functions.", marks: 2 },
                { label: "d", prompt: "Physical vs logical topology.", marks: 1 },
                { label: "e", prompt: "One advantage and one disadvantage of mesh.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Network fundamentals", statement: "Types, topologies, components, addressing." }],
                steps: [
                  { part: "a", reasoning: "LAN = small area; WAN = large area of linked networks.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Topology = layout of devices and connections.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "All three definitions accurate.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Bus: shared cable; star: central device; ring: loop.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Each topology described accurately.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "All three correct.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "NIC connects device; switch forwards on LAN (MAC); router forwards between networks (IP).", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "All three functions correct.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Physical = cabling layout; logical = data flow.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Advantage: resilient/redundant paths; disadvantage: expensive/complex.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Network types, topologies, components and physical/logical distinction.",
              },
            },
          ],
        },
        {
          id: "edxbtecit-u8-l1-addressing", title: "Network addressing and transmission",
          skill: "Explain IP and MAC addressing, subnet basics and bandwidth, latency and data transfer calculations.",
          sections: [
            { heading: "IP addressing", body: "An **IPv4** address has 4 octets (e.g. 192.168.1.5), each 0-255. **Public** addresses are routable on the internet; **private** ranges (10.x.x.x, 172.16-31.x.x, 192.168.x.x) are used inside LANs. **DHCP** assigns addresses automatically. **Subnet mask** (e.g. /24 or 255.255.255.0) splits an address into network and host parts; usable hosts per subnet ≈ 2^(host bits) − 2 (network and broadcast addresses reserved).\n\n**MAC address** is a 48-bit hardware address burned into the NIC, used for delivery on the local network. **IPv6** provides vastly more addresses using 128-bit hexadecimal notation." },
            { heading: "Bandwidth, latency and throughput", body: "**Bandwidth** = maximum data capacity of a link, measured in bits per second (Mbps/Gbps). **Latency** = delay for a packet to travel (ping time). **Throughput** = actual data transferred per second, usually below bandwidth.\n\n**File transfer time** = file size in bits ÷ bandwidth. E.g. 800 MB = 6,400 Mbit over 100 Mbps takes about 64 seconds. Wired fibre gives high bandwidth and low latency; wireless adds interference and contention." },
          ],
          keyFormulas: [
            { name: "Usable hosts", statement: "2^(host bits) − 2 per subnet" },
            { name: "Transfer time", statement: "time = file size (bits) ÷ bandwidth" },
            { name: "File size", statement: "MB × 8 = Mbit" },
          ],
          workedExample: {
            problem: "A subnet mask of 255.255.255.0 (/24) is used. How many usable host addresses are available?",
            solution: "/24 leaves 8 host bits. Usable hosts = 2^8 − 2 = 256 − 2 = 254.",
          },
          questions: [
            {
              id: "edxbtecit-u8-l1-addressing-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which address is in a private IPv4 range?",
              response: { type: "mcq", choices: [
                { id: "a", text: "8.8.8.8" }, { id: "b", text: "192.168.1.10" }, { id: "c", text: "203.0.113.5" }, { id: "d", text: "172.32.0.1" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Private ranges", statement: "10.x.x.x, 172.16-31.x.x, 192.168.x.x are private." }],
                steps: [{ reasoning: "192.168.x.x is a private range.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** 192.168.1.10",
                commonErrors: ["172.32.x.x is public — only 172.16-31.x.x is private."],
              },
            },
            {
              id: "edxbtecit-u8-l1-addressing-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is the difference between an IP address and a MAC address?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "IP vs MAC", statement: "Logical network-layer vs physical link-layer address." }],
                steps: [
                  { reasoning: "IP address = logical, identifies device on a network/internetwork.", marks: 1, markCode: "M" },
                  { reasoning: "MAC address = physical hardware address used on the local network.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "IP = logical network address; MAC = physical hardware address",
              },
            },
            {
              id: "edxbtecit-u8-l1-addressing-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the role of a subnet mask and what /24 means.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Subnet mask", statement: "Splits an IP address into network and host parts." }],
                steps: [
                  { reasoning: "Subnet mask identifies the network portion of an address.", marks: 1, markCode: "M" },
                  { reasoning: "/24 = 24 network bits, leaving 8 host bits.", marks: 1, markCode: "M" },
                  { reasoning: "Gives 2^8 − 2 = 254 usable hosts.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Mask splits network/host parts; /24 → 254 usable hosts",
              },
            },
            {
              id: "edxbtecit-u8-l1-addressing-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A 600 MB file is transferred over a 50 Mbps link. Calculate the minimum transfer time in seconds, showing your working.",
              response: { type: "numeric", parts: [
                { label: "transfer time", answer: 96, unit: "s" },
              ]},
              markscheme: {
                principles: [{ kind: "formula", name: "Transfer time", statement: "time = size in bits ÷ bandwidth." }],
                steps: [
                  { reasoning: "Convert 600 MB to Mbit: 600 × 8 = 4,800 Mbit.", marks: 2, markCode: "M" },
                  { reasoning: "time = 4,800 ÷ 50 = 96 s.", marks: 2, markCode: "M" },
                  { reasoning: "Answer in seconds with units.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "96 s",
                commonErrors: ["Forgetting ×8 to convert bytes to bits.", "Mixing MB with Mbit."],
              },
            },
            {
              id: "edxbtecit-u8-l1-addressing-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State what DHCP does.", marks: 1 },
                { label: "b", prompt: "Distinguish bandwidth, latency and throughput.", marks: 3 },
                { label: "c", prompt: "Explain why throughput is usually less than bandwidth.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Transmission terms", statement: "Capacity vs delay vs achieved rate." }],
                steps: [
                  { part: "a", reasoning: "DHCP automatically assigns IP configuration to devices.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Bandwidth = max capacity of the link.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Latency = delay for packets to travel.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Throughput = actual achieved data rate.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Overheads, contention, errors and protocol inefficiency reduce achieved rate.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Linked to real network conditions.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "DHCP auto-assigns IP; bandwidth=capacity, latency=delay, throughput=achieved rate",
              },
            },
            {
              id: "edxbtecit-u8-l1-addressing-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Explain the difference between public and private IP addresses. (b) What does a /24 subnet mask provide? (c) State the function of DHCP. (d) Define bandwidth, latency and throughput. (e) Calculate the transfer time for a 200 MB file over a 25 Mbps link. (f) Why is IPv6 needed?",
              parts: [
                { label: "a", prompt: "Public vs private IP addresses.", marks: 2 },
                { label: "b", prompt: "What a /24 mask provides.", marks: 1 },
                { label: "c", prompt: "Function of DHCP.", marks: 1 },
                { label: "d", prompt: "Define bandwidth, latency, throughput.", marks: 3 },
                { label: "e", prompt: "Transfer time calculation.", marks: 2 },
                { label: "f", prompt: "Why IPv6 is needed.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Addressing and transmission", statement: "Addressing schemes and performance metrics." }],
                steps: [
                  { part: "a", reasoning: "Public = routable on the internet; private = internal LAN ranges behind NAT.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both types distinguished correctly.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "24 network bits → 254 usable host addresses.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Automatically assigns IP configuration to devices.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Bandwidth = capacity; latency = delay; throughput = achieved rate.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "All three terms accurately defined.", marks: 1, markCode: "A" },
                  { part: "e", reasoning: "200 × 8 = 1,600 Mbit; 1,600 ÷ 25 = 64 s.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Correct answer with working.", marks: 1, markCode: "A" },
                  { part: "f", reasoning: "IPv4 address exhaustion — IPv6 gives vastly more addresses.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Addressing and transmission fundamentals; 64 s transfer time.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtecit-u8-n101-notes", title: "Networks 8-1 — notes",
      summary: "LAN/WAN scale, star topology dominance, switch vs router roles, IP vs MAC, and bandwidth calculations.",
      sections: [
        { heading: "Key idea", body: "Match network scale, hardware and topology to the requirement." },
        { heading: "Formulas", body: "Usable hosts = 2^(host bits) − 2; transfer time = size in bits ÷ bandwidth." },
        { heading: "Remember", body: "Switch works on MAC within a LAN; router works on IP between networks." },
      ],
    },
  },
  {
    file: "lesson-8-2.ts", exportName: "lesson82",
    lesson: {
      id: "edxbtecit-u8-lesson-8-2", code: "8-2",
      title: "Network Protocols and Services",
      goal: "I CAN describe the protocols and services that enable network communication, including the internet and cloud computing.",
      standards: [
        "Pearson BTEC Level 3 National Information Technology — Specialist unit: Computer Networks and Data Communication",
        "Protocols, internet services and cloud computing",
      ],
      vocabulary: [
        { term: "Protocol", definition: "Agreed set of rules governing how devices exchange data." },
        { term: "Packet switching", definition: "Dividing data into packets routed independently across a network." },
        { term: "TCP", definition: "Transmission Control Protocol — reliable, ordered delivery." },
        { term: "UDP", definition: "User Datagram Protocol — fast, connectionless delivery without guarantees." },
        { term: "DNS", definition: "Domain Name System translating domain names to IP addresses." },
        { term: "Cloud computing", definition: "Delivery of computing services over the internet on demand." },
        { term: "Client-server", definition: "Model where clients request services from a central server." },
      ],
      concepts: [
        {
          id: "edxbtecit-u8-l2-protocols", title: "Network protocols and internet services",
          skill: "Describe core protocols (TCP/IP, HTTP, FTP, email) and how they enable internet services.",
          sections: [
            { heading: "The TCP/IP suite", body: "**IP** handles addressing and routing of packets between networks. **TCP** provides reliable, ordered delivery — it segments data, numbers segments, retransmits lost ones and reassembles in order. **UDP** is faster but unreliable — used for streaming and VoIP where speed beats perfect delivery.\n\n**Packet switching** splits messages into packets routed independently; different packets may take different paths and be reassembled at the destination." },
            { heading: "Application-layer protocols", body: "**HTTP/HTTPS** fetches web pages (HTTPS adds TLS encryption). **FTP** transfers files. **SMTP** sends email; **POP3** and **IMAP** retrieve it (IMAP keeps server copies). **DNS** resolves names to IPs. **DHCP** assigns addresses. **SSH** gives secure remote access.\n\n**WWW** = web pages linked by hyperlinks over HTTP(S). Browsers render HTML; URLs identify resources." },
          ],
          keyFormulas: [
            { name: "TCP vs UDP", statement: "TCP = reliable/ordered; UDP = fast/unreliable" },
            { name: "DNS", statement: "domain name → IP address" },
            { name: "HTTPS", statement: "HTTP over TLS encryption" },
          ],
          workedExample: {
            problem: "Trace what happens when you type https://example.com into a browser.",
            solution: "DNS resolves example.com to an IP → browser opens TCP connection → TLS handshake encrypts → HTTP GET requests the page → server returns HTML/assets → browser renders the page.",
          },
          questions: [
            {
              id: "edxbtecit-u8-l2-protocols-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which protocol guarantees reliable, ordered delivery of data?",
              response: { type: "mcq", choices: [
                { id: "a", text: "UDP" }, { id: "b", text: "TCP" }, { id: "c", text: "ICMP" }, { id: "d", text: "ARP" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "TCP", statement: "Reliable, ordered, connection-oriented delivery." }],
                steps: [{ reasoning: "TCP guarantees delivery and order.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** TCP",
              },
            },
            {
              id: "edxbtecit-u8-l2-protocols-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What does DNS do?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "DNS", statement: "Translates domain names to IP addresses." }],
                steps: [
                  { reasoning: "Resolves domain names.", marks: 1, markCode: "M" },
                  { reasoning: "To their IP addresses.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Translates domain names to IP addresses",
              },
            },
            {
              id: "edxbtecit-u8-l2-protocols-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why UDP is preferred over TCP for live video streaming.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "UDP for real-time", statement: "Speed and low latency beat guaranteed delivery for live media." }],
                steps: [
                  { reasoning: "UDP has no retransmission — avoids stalls.", marks: 1, markCode: "M" },
                  { reasoning: "Lower latency suits real-time playback.", marks: 1, markCode: "M" },
                  { reasoning: "Occasional lost packets are less noticeable than buffering.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "UDP = faster, lower latency; lost packets acceptable for live video",
                commonErrors: ["Saying UDP is more reliable than TCP."],
              },
            },
            {
              id: "edxbtecit-u8-l2-protocols-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A company emails a 20 MB attachment. Explain the protocols involved from sender to recipient inbox.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Email protocol chain", statement: "SMTP sends; DNS resolves; TCP delivers reliably." }],
                steps: [
                  { reasoning: "Client sends message via SMTP to the mail server.", marks: 1, markCode: "M" },
                  { reasoning: "DNS resolves the recipient domain to a mail server IP.", marks: 1, markCode: "M" },
                  { reasoning: "SMTP transfers the message between servers.", marks: 1, markCode: "M" },
                  { reasoning: "TCP provides reliable ordered delivery underneath.", marks: 1, markCode: "A" },
                  { reasoning: "Recipient retrieves via POP3 or IMAP.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "SMTP send → DNS → SMTP server-to-server → POP3/IMAP retrieval",
              },
            },
            {
              id: "edxbtecit-u8-l2-protocols-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State the difference between HTTP and HTTPS.", marks: 2 },
                { label: "b", prompt: "Name two email protocols and state their roles.", marks: 2 },
                { label: "c", prompt: "Explain packet switching.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Internet protocols", statement: "HTTP(S), SMTP/POP3/IMAP, packet switching." }],
                steps: [
                  { part: "a", reasoning: "HTTP = plain web protocol.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "HTTPS adds TLS encryption for security.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "SMTP sends email.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "POP3/IMAP retrieve email.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Data split into packets routed independently.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Packets may take different paths and reassemble at destination.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "HTTPS = encrypted HTTP; SMTP sends, POP3/IMAP receive; packets routed independently",
              },
            },
            {
              id: "edxbtecit-u8-l2-protocols-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define protocol and packet switching. (b) Contrast TCP and UDP. (c) State the role of DNS. (d) Name the protocols used to send and retrieve email. (e) Explain what HTTPS adds to HTTP. (f) Give two benefits of packet switching.",
              parts: [
                { label: "a", prompt: "Define protocol and packet switching.", marks: 2 },
                { label: "b", prompt: "Contrast TCP and UDP.", marks: 2 },
                { label: "c", prompt: "Role of DNS.", marks: 1 },
                { label: "d", prompt: "Email send and retrieve protocols.", marks: 1 },
                { label: "e", prompt: "What HTTPS adds.", marks: 2 },
                { label: "f", prompt: "Two benefits of packet switching.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Protocols and services", statement: "TCP/IP, DNS, email, web protocols." }],
                steps: [
                  { part: "a", reasoning: "Protocol = agreed communication rules.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Packet switching = data split into independently routed packets.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "TCP reliable/ordered vs UDP fast/unreliable.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Both contrasted correctly.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Resolves domain names to IP addresses.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "SMTP sends; POP3 or IMAP retrieves.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Adds TLS encryption and authentication.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Both encryption and authentication mentioned.", marks: 1, markCode: "A" },
                  { part: "f", reasoning: "Efficient use of links; fault tolerance via alternative routes.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Second benefit stated.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Protocol suite, DNS, email and packet-switching fundamentals.",
              },
            },
          ],
        },
        {
          id: "edxbtecit-u8-l2-cloud", title: "Client-server model, internet and cloud computing",
          skill: "Explain client-server communication, internet services and the three cloud service models.",
          sections: [
            { heading: "Client-server and the internet", body: "In the **client-server** model a client device requests a service (web page, file, email) from a server. Servers can be **dedicated** (only serve the network) or **non-dedicated**. The **internet** is a worldwide WAN of interconnected networks using TCP/IP; ISPs provide access.\n\nServices: web hosting, email, file storage, VoIP, streaming, e-commerce. **ISP** = Internet Service Provider connecting users to the internet." },
            { heading: "Cloud computing", body: "Cloud = on-demand computing services over the internet. **IaaS** (Infrastructure as a Service): rent servers, storage, networking — e.g. virtual machines. **PaaS** (Platform as a Service): rent a platform to develop/run apps — e.g. app hosting with databases. **SaaS** (Software as a Service): use ready-made software over the web — e.g. office suites, email.\n\nAdvantages: lower upfront cost, scalability, remote access, automatic updates. Disadvantages: dependence on provider, security/privacy risks, needs internet connectivity." },
          ],
          keyFormulas: [
            { name: "Cloud models", statement: "IaaS = infrastructure; PaaS = platform; SaaS = software" },
            { name: "Client-server", statement: "Client requests → server responds" },
          ],
          workedExample: {
            problem: "Classify each as IaaS, PaaS or SaaS: (a) renting virtual servers, (b) using Gmail, (c) deploying a web app on a managed platform.",
            solution: "(a) IaaS — infrastructure rented. (b) SaaS — ready software used online. (c) PaaS — platform for developing/running apps.",
          },
          questions: [
            {
              id: "edxbtecit-u8-l2-cloud-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which cloud model delivers ready-made software over the internet, such as Gmail?",
              response: { type: "mcq", choices: [
                { id: "a", text: "IaaS" }, { id: "b", text: "PaaS" }, { id: "c", text: "SaaS" }, { id: "d", text: "On-premises" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "SaaS", statement: "Software as a Service — ready-made software over the web." }],
                steps: [{ reasoning: "Gmail = ready software online = SaaS.", marks: 1, markCode: "B" }],
                finalAnswer: "**(c)** SaaS",
              },
            },
            {
              id: "edxbtecit-u8-l2-cloud-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Define the client-server model.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Client-server", statement: "Clients request services from a central server." }],
                steps: [
                  { reasoning: "Clients request services.", marks: 1, markCode: "M" },
                  { reasoning: "A server provides them.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Clients request services; servers provide them",
              },
            },
            {
              id: "edxbtecit-u8-l2-cloud-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the difference between IaaS and PaaS with examples.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "IaaS vs PaaS", statement: "Raw infrastructure vs development platform." }],
                steps: [
                  { reasoning: "IaaS rents infrastructure: servers, storage, networking.", marks: 1, markCode: "M" },
                  { reasoning: "PaaS rents a platform to build/run applications.", marks: 1, markCode: "M" },
                  { reasoning: "Examples: virtual machines (IaaS); app hosting with databases (PaaS).", marks: 1, markCode: "A" },
                ],
                finalAnswer: "IaaS = infrastructure rental; PaaS = platform for apps",
              },
            },
            {
              id: "edxbtecit-u8-l2-cloud-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A startup wants to build and host a new web application without buying servers. Evaluate cloud computing for them.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Cloud trade-offs", statement: "Lower cost/scalability vs dependence and security risk." }],
                steps: [
                  { reasoning: "No upfront hardware cost — pay per use.", marks: 1, markCode: "M" },
                  { reasoning: "Scales up/down with demand.", marks: 1, markCode: "M" },
                  { reasoning: "Accessible anywhere with internet.", marks: 1, markCode: "M" },
                  { reasoning: "Risks: provider dependence, security/privacy, connectivity needed.", marks: 1, markCode: "A" },
                  { reasoning: "Balanced judgement for the startup scenario.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Cloud suits startups: low cost, scalable, accessible — but adds dependence and security considerations",
              },
            },
            {
              id: "edxbtecit-u8-l2-cloud-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name the three cloud service models.", marks: 2 },
                { label: "b", prompt: "Give one example of each model.", marks: 3 },
                { label: "c", prompt: "State one disadvantage of cloud computing.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Cloud models", statement: "IaaS, PaaS, SaaS." }],
                steps: [
                  { part: "a", reasoning: "IaaS, PaaS, SaaS all named.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "All three spelled/named correctly.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Example for each: IaaS virtual servers; PaaS app platform; SaaS web software.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Examples correctly matched to models.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Any valid disadvantage: dependence, security, connectivity.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "IaaS/PaaS/SaaS with examples; e.g. provider dependence",
              },
            },
            {
              id: "edxbtecit-u8-l2-cloud-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define cloud computing. (b) Name and describe the three service models. (c) Give two advantages and two disadvantages of cloud computing. (d) State what an ISP does. (e) Explain how a web page request travels from client to server.",
              parts: [
                { label: "a", prompt: "Define cloud computing.", marks: 1 },
                { label: "b", prompt: "Three service models.", marks: 3 },
                { label: "c", prompt: "Two advantages and two disadvantages.", marks: 3 },
                { label: "d", prompt: "Function of an ISP.", marks: 1 },
                { label: "e", prompt: "Web page request path.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Cloud and internet services", statement: "Cloud models, ISP, client-server flow." }],
                steps: [
                  { part: "a", reasoning: "On-demand computing services delivered over the internet.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "IaaS = infrastructure rental.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "PaaS = platform for apps; SaaS = ready software.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "All three correctly described.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Advantages: lower cost, scalability, access anywhere.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Disadvantages: provider dependence, security/privacy, connectivity.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Two of each stated.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Provides internet access/connectivity to customers.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Client sends HTTP(S) request → routed via internet → server responds with page data.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Cloud computing, IaaS/PaaS/SaaS, ISP role and client-server flow.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtecit-u8-n102-notes", title: "Networks 8-2 — notes",
      summary: "TCP reliable vs UDP fast; DNS resolves names; SMTP sends, POP3/IMAP receive; IaaS/PaaS/SaaS cloud models.",
      sections: [
        { heading: "Key idea", body: "Protocols are layered rules; the right protocol depends on reliability vs speed needs." },
        { heading: "Cloud", body: "IaaS = rent infrastructure, PaaS = rent platform, SaaS = use software." },
        { heading: "Remember", body: "HTTPS adds TLS encryption to HTTP." },
      ],
    },
  },
  {
    file: "lesson-8-3.ts", exportName: "lesson83",
    lesson: {
      id: "edxbtecit-u8-lesson-8-3", code: "8-3",
      title: "Wireless Networks and Network Security",
      goal: "I CAN describe wireless networking technologies and the network-layer security measures that protect data in transit.",
      standards: [
        "Pearson BTEC Level 3 National Information Technology — Specialist unit: Computer Networks and Data Communication",
        "Wireless networking and network security",
      ],
      vocabulary: [
        { term: "Wi-Fi", definition: "Wireless LAN technology based on IEEE 802.11 standards." },
        { term: "SSID", definition: "Service Set Identifier — the broadcast name of a wireless network." },
        { term: "Access point", definition: "Device providing wireless connectivity to a wired network." },
        { term: "WPA2/WPA3", definition: "Current Wi-Fi security protocols using strong encryption." },
        { term: "Firewall", definition: "Hardware or software barrier filtering network traffic by rules." },
        { term: "Encryption", definition: "Scrambling data so only authorised parties can read it." },
        { term: "MAC filtering", definition: "Allowing only listed device MAC addresses onto a wireless network." },
      ],
      concepts: [
        {
          id: "edxbtecit-u8-l3-wireless", title: "Wireless networking",
          skill: "Describe Wi-Fi standards, frequency bands, coverage and the roles of access points and SSIDs.",
          sections: [
            { heading: "Wi-Fi standards", body: "Wi-Fi is based on IEEE 802.11. **802.11b/g** use 2.4 GHz (better range, more congestion); **802.11a/n/ac/ax** use 5 GHz (faster, shorter range, less congestion). **Wi-Fi 6 (802.11ax)** improves speed and efficiency in crowded areas.\n\nAn **access point** connects wireless devices to the wired LAN. The **SSID** is the network's broadcast name; it can be hidden. Wireless uses CSMA/CA — devices check the channel is clear before transmitting." },
            { heading: "Coverage, interference and alternatives", body: "2.4 GHz travels farther and penetrates walls better but shares only 3 non-overlapping channels. 5 GHz offers more bandwidth but weaker wall penetration. Interference from microwaves, Bluetooth and neighbouring networks degrades performance.\n\nOther wireless technologies: **Bluetooth** (PAN, ~10 m), **infrared** (line-of-sight), **microwave** and **satellite** links for WANs, **4G/5G** cellular mobile networks." },
          ],
          keyFormulas: [
            { name: "Bands", statement: "2.4 GHz = range; 5 GHz = speed" },
            { name: "802.11ax", statement: "Wi-Fi 6 — high efficiency" },
          ],
          workedExample: {
            problem: "A warehouse needs Wi-Fi across 200 m with heavy device density. Which band and standard would you recommend?",
            solution: "5 GHz with 802.11ax (Wi-Fi 6): better for dense device areas; add multiple access points for the 200 m coverage since 5 GHz range is limited.",
          },
          questions: [
            {
              id: "edxbtecit-u8-l3-wireless-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What does SSID stand for?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Secure Signal Identifier" }, { id: "b", text: "Service Set Identifier" }, { id: "c", text: "System Security ID" }, { id: "d", text: "Standard Signal ID" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "SSID", statement: "Service Set Identifier — the broadcast name of a wireless network." }],
                steps: [{ reasoning: "SSID = Service Set Identifier.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Service Set Identifier",
              },
            },
            {
              id: "edxbtecit-u8-l3-wireless-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the main advantage of 5 GHz Wi-Fi over 2.4 GHz.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "5 GHz band", statement: "Less congestion, higher speeds; weaker wall penetration." }],
                steps: [
                  { reasoning: "Less interference/congestion on 5 GHz.", marks: 1, markCode: "M" },
                  { reasoning: "Supports higher data rates.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Less congestion and higher speeds (shorter range)",
              },
            },
            {
              id: "edxbtecit-u8-l3-wireless-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why 2.4 GHz Wi-Fi often has a longer range than 5 GHz.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Frequency vs range", statement: "Lower frequency signals travel farther and penetrate obstacles better." }],
                steps: [
                  { reasoning: "Lower frequency = longer wavelength.", marks: 1, markCode: "M" },
                  { reasoning: "Longer waves travel farther and penetrate walls better.", marks: 1, markCode: "M" },
                  { reasoning: "Trade-off: 2.4 GHz is more congested.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "2.4 GHz lower frequency → longer range, better penetration, but more congestion",
              },
            },
            {
              id: "edxbtecit-u8-l3-wireless-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A café suffers slow Wi-Fi at busy times. Diagnose the likely cause and recommend two improvements.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Wireless congestion", statement: "Shared medium + interference limit throughput." }],
                steps: [
                  { reasoning: "Many devices share limited bandwidth — congestion.", marks: 1, markCode: "M" },
                  { reasoning: "2.4 GHz interference from neighbouring networks/microwaves.", marks: 1, markCode: "M" },
                  { reasoning: "Improvement: add access points / use 5 GHz band.", marks: 1, markCode: "M" },
                  { reasoning: "Improvement: upgrade to Wi-Fi 6 or manage bandwidth per user.", marks: 1, markCode: "A" },
                  { reasoning: "Diagnosis linked to scenario.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Congestion/interference; add APs, use 5 GHz or Wi-Fi 6",
              },
            },
            {
              id: "edxbtecit-u8-l3-wireless-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State the role of an access point.", marks: 1 },
                { label: "b", prompt: "Compare 2.4 GHz and 5 GHz bands.", marks: 3 },
                { label: "c", prompt: "Name two non-Wi-Fi wireless technologies and their typical uses.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Wireless networking", statement: "Bands, access points, alternatives." }],
                steps: [
                  { part: "a", reasoning: "Connects wireless devices to the wired network.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "2.4 GHz = better range/penetration, more congestion.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "5 GHz = faster, shorter range.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Both bands contrasted.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Bluetooth (PAN devices), 4G/5G (mobile data), infrared/satellite.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Uses correctly matched.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "AP bridges wireless/wired; band trade-offs; Bluetooth/cellular alternatives",
              },
            },
            {
              id: "edxbtecit-u8-l3-wireless-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define Wi-Fi and SSID. (b) Explain the role of an access point. (c) Compare the 2.4 GHz and 5 GHz bands. (d) State what IEEE 802.11ax is. (e) Name two causes of wireless interference. (f) Give one alternative wireless technology and its use.",
              parts: [
                { label: "a", prompt: "Define Wi-Fi and SSID.", marks: 2 },
                { label: "b", prompt: "Role of access point.", marks: 1 },
                { label: "c", prompt: "Compare 2.4 and 5 GHz.", marks: 2 },
                { label: "d", prompt: "What is 802.11ax.", marks: 1 },
                { label: "e", prompt: "Two interference causes.", marks: 2 },
                { label: "f", prompt: "Alternative wireless technology.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Wireless networking", statement: "Wi-Fi standards, bands, interference." }],
                steps: [
                  { part: "a", reasoning: "Wi-Fi = wireless LAN (802.11).", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "SSID = network broadcast name.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Bridges wireless devices to the wired LAN.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "2.4 GHz range/penetration vs 5 GHz speed.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Trade-off stated.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Wi-Fi 6 — high efficiency standard.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Microwaves/Bluetooth/other networks.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Second cause stated.", marks: 1, markCode: "A" },
                  { part: "f", reasoning: "Bluetooth/cellular/infrared named with use.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Use correctly matched.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Wireless networking fundamentals: bands, APs, interference, alternatives.",
              },
            },
          ],
        },
        {
          id: "edxbtecit-u8-l3-netsec", title: "Network security measures",
          skill: "Describe wireless encryption standards, firewalls, access control and other network-layer defences.",
          sections: [
            { heading: "Wireless encryption", body: "Wi-Fi security evolved: **WEP** (weak, cracked easily — avoid), **WPA** (TKIP, interim), **WPA2** (AES-CCMP — long-standing standard), **WPA3** (stronger handshake, forward secrecy, protects against offline attacks). Always use WPA2 minimum, WPA3 preferred.\n\nOther wireless defences: hide SSID, MAC filtering (weak alone), disable WPS, guest networks for visitors, strong passwords." },
            { heading: "Network-layer defences", body: "**Firewall** filters traffic by rules (block/allow ports, IPs, protocols) — hardware or software. **Encryption** (TLS/HTTPS, VPN) protects data in transit — a **VPN** creates an encrypted tunnel over untrusted networks. **Network segmentation/VLANs** isolate parts of a network to limit breach spread.\n\nAccess control: strong passwords, MFA, least-privilege accounts, regular firmware updates on routers/APs. Monitoring: logs, intrusion detection." },
          ],
          keyFormulas: [
            { name: "Wi-Fi security", statement: "WEP < WPA < WPA2 < WPA3" },
            { name: "VPN", statement: "Encrypted tunnel over public networks" },
            { name: "Firewall", statement: "Rule-based traffic filtering" },
          ],
          workedExample: {
            problem: "A small business router still uses WEP. List three security improvements in priority order.",
            solution: "1) Upgrade encryption to WPA2/WPA3 immediately. 2) Enable a strong admin password and firmware updates. 3) Add a firewall/guest network and disable WPS.",
          },
          questions: [
            {
              id: "edxbtecit-u8-l3-netsec-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which is the weakest and should never be used for Wi-Fi security?",
              response: { type: "mcq", choices: [
                { id: "a", text: "WPA3" }, { id: "b", text: "WPA2" }, { id: "c", text: "WPA" }, { id: "d", text: "WEP" },
              ], correctChoiceId: "d" },
              markscheme: {
                principles: [{ kind: "definition", name: "WEP", statement: "Wired Equivalent Privacy — outdated and insecure." }],
                steps: [{ reasoning: "WEP is the weakest Wi-Fi security protocol.", marks: 1, markCode: "B" }],
                finalAnswer: "**(d)** WEP",
                commonErrors: ["Confusing WEP with WPA2."],
              },
            },
            {
              id: "edxbtecit-u8-l3-netsec-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is the function of a firewall?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Firewall", statement: "Filters network traffic using rules." }],
                steps: [
                  { reasoning: "Inspects network traffic.", marks: 1, markCode: "M" },
                  { reasoning: "Allows or blocks it by configured rules.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Filters incoming/outgoing traffic by security rules",
              },
            },
            {
              id: "edxbtecit-u8-l3-netsec-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why WPA2 or WPA3 should be used instead of WEP or WPA.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Encryption strength", statement: "AES-based WPA2/WPA3 resist modern attacks." }],
                steps: [
                  { reasoning: "WEP uses weak RC4 and is trivially cracked.", marks: 1, markCode: "M" },
                  { reasoning: "WPA/TKIP is deprecated and weaker than AES.", marks: 1, markCode: "M" },
                  { reasoning: "WPA2/WPA3 use AES and stronger handshakes.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "WPA2/WPA3 use AES — far stronger than WEP/WPA",
              },
            },
            {
              id: "edxbtecit-u8-l3-netsec-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain how a VPN protects data sent over a public Wi-Fi network.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "VPN tunnel", statement: "Encrypts all traffic between client and VPN server." }],
                steps: [
                  { reasoning: "VPN creates an encrypted tunnel to a remote server.", marks: 1, markCode: "M" },
                  { reasoning: "All traffic is encrypted inside the tunnel — eavesdroppers see only ciphertext.", marks: 1, markCode: "M" },
                  { reasoning: "Protects against interception on untrusted public Wi-Fi.", marks: 1, markCode: "M" },
                  { reasoning: "Also masks the user's real IP address.", marks: 1, markCode: "A" },
                  { reasoning: "Clear link to the public-Wi-Fi scenario.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "VPN encrypts traffic in a tunnel, shielding it from interception",
              },
            },
            {
              id: "edxbtecit-u8-l3-netsec-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Rank WEP, WPA, WPA2, WPA3 from weakest to strongest.", marks: 2 },
                { label: "b", prompt: "State two functions of a firewall.", marks: 2 },
                { label: "c", prompt: "Explain what network segmentation does.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Network defences", statement: "Encryption, filtering, segmentation." }],
                steps: [
                  { part: "a", reasoning: "Correct order: WEP < WPA < WPA2 < WPA3.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Filters traffic by rules (ports/IPs/protocols).", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Blocks unauthorised access / logs traffic.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Divides network into isolated sections (VLANs/zones).", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Limits spread of breaches between segments.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "WEP<WPA<WPA2<WPA3; firewall filters/blocks; segmentation isolates",
              },
            },
            {
              id: "edxbtecit-u8-l3-netsec-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Rank the Wi-Fi security protocols by strength. (b) Define encryption and give one network use. (c) State the function of a firewall. (d) Explain what a VPN is. (e) Name two other wireless security measures besides encryption. (f) Explain why MAC filtering alone is weak security.",
              parts: [
                { label: "a", prompt: "Rank Wi-Fi protocols by strength.", marks: 1 },
                { label: "b", prompt: "Define encryption + one network use.", marks: 2 },
                { label: "c", prompt: "Firewall function.", marks: 1 },
                { label: "d", prompt: "What a VPN is.", marks: 2 },
                { label: "e", prompt: "Two other wireless security measures.", marks: 2 },
                { label: "f", prompt: "Why MAC filtering is weak.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Network security", statement: "Encryption, firewalls, VPNs, access control." }],
                steps: [
                  { part: "a", reasoning: "WEP < WPA < WPA2 < WPA3.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Encryption = scrambling data for authorised readers.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Use: HTTPS/TLS, VPN tunnels.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Filters traffic by security rules.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Encrypted tunnel over untrusted networks.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Protects confidentiality/integrity of traffic.", marks: 1, markCode: "A" },
                  { part: "e", reasoning: "Hidden SSID, strong password, disable WPS, guest network.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Second measure stated.", marks: 1, markCode: "A" },
                  { part: "f", reasoning: "MAC addresses can be spoofed; list is static and unencrypted.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Must be combined with encryption.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Network security: encryption hierarchy, firewalls, VPNs, access control.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtecit-u8-n103-notes", title: "Networks 8-3 — notes",
      summary: "2.4 GHz range vs 5 GHz speed; WEP→WPA3 encryption hierarchy; firewalls, VPNs and segmentation defend the network.",
      sections: [
        { heading: "Key idea", body: "Wireless trades range for speed; security layers complement each other." },
        { heading: "Encryption order", body: "Never use WEP; WPA2 minimum, WPA3 preferred." },
        { heading: "Defence in depth", body: "Encryption + firewall + segmentation + access control together." },
      ],
    },
  },
];
