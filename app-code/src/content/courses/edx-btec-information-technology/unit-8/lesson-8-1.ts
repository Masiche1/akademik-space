import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "edxbtecit-u8-lesson-8-1",
  code: "8-1",
  title: "Network Types, Components and Topologies",
  goal: "I CAN describe network types, hardware components and physical/logical topologies and explain addressing basics.",
  standards: ["Pearson BTEC Level 3 National Information Technology — Specialist unit: Computer Networks and Data Communication", "Network types, components, topologies and addressing"],
  
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
      id: "edxbtecit-u8-l1-nettypes",
      title: "Network types, components and topologies",
      skill: "Identify network types by scale, name key hardware components and compare network topologies.",
      lesson: {
        sections: [
          {
            heading: "Network types by scale",
            body: "**LAN** covers a small area (office, home, school) — high bandwidth, single organisation. **MAN** covers a city or large campus. **WAN** spans countries — the internet is the largest WAN, built from interconnected networks. **PAN** covers a person (Bluetooth devices). **CAN** covers a vehicle (CAN bus).\n\nNetworks connect devices in **client-server** (central server manages resources) or **peer-to-peer** (devices share resources directly) architectures.",
          },
          {
            heading: "Hardware components",
            body: "**NIC** connects each device to the network medium. **Switch** forwards frames to the correct device on a LAN using MAC addresses. **Router** connects different networks and routes packets using IP addresses. **Access point** provides wireless connectivity. **Modem** converts signals for transmission over ISP lines. **Server** stores shared resources; **client** devices request them.\n\nTransmission media: **twisted pair** (cheap Ethernet), **coaxial**, **fibre optic** (fastest, immune to interference), **wireless** (radio/microwave/satellite).",
          },
          {
            heading: "Topologies",
            body: "**Bus**: all devices share one cable — cheap but a break stops everything. **Star**: all devices connect to a central switch/hub — most common; one failure affects only that device. **Ring**: devices connected in a loop — data travels around. **Mesh**: every device connects to every other — most resilient, most expensive. **Hybrid** combines topologies.\n\nTopology describes the physical layout; the **logical** topology describes how data actually flows.",
          },
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
      },
      questions: [
        {
          id: "edxbtecit-u8-l1-nettypes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which network type covers a single building such as an office?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "WAN"
                    },
                    {
                              "id": "b",
                              "text": "LAN"
                    },
                    {
                              "id": "c",
                              "text": "PAN"
                    },
                    {
                              "id": "d",
                              "text": "MAN"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "LAN",
                              "statement": "Local Area Network — small geographic area such as one building."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "LAN covers one building/site.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** LAN"
},
        },
        {
          id: "edxbtecit-u8-l1-nettypes-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the function of a router on a network.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Router",
                              "statement": "Forwards packets between different networks using IP addresses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Forwards packets between networks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Uses IP addresses to route.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Routes packets between networks using IP addresses"
},
        },
        {
          id: "edxbtecit-u8-l1-nettypes-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why star topology is the most common choice for modern LANs.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Star topology",
                              "statement": "Central device connects all nodes; easy management and fault isolation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Central switch/hub simplifies cabling and management.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A cable/device failure affects only that device, not the whole network.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Easy to add or remove devices.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Central hub: easy management, fault isolation, easy expansion",
          "commonErrors": [
                    "Claiming a single failure takes down the whole network — that is bus topology."
          ]
},
        },
        {
          id: "edxbtecit-u8-l1-nettypes-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare client-server and peer-to-peer network architectures, giving an example use of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Client-server vs P2P",
                              "statement": "Centralised resources vs distributed sharing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Client-server: dedicated server manages resources and security.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Client-server: easier central backup, control and scalability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "P2P: each device acts as both client and server.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "P2P: cheaper, no dedicated server, but harder to manage/secure.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Examples: school network (client-server); file sharing at home (P2P).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Client-server = centralised control; P2P = distributed, cheaper, less controlled"
},
        },
        {
          id: "edxbtecit-u8-l1-nettypes-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name three types of network classified by geographic scale, smallest to largest.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the difference between a switch and a router.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Identify the best transmission medium for a 10 km link between two buildings and justify it.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Network design choices",
                              "statement": "Match scale, devices and media to the requirement."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Any three ordered correctly, e.g. PAN/LAN/MAN/WAN.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All three in correct size order.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Switch forwards frames on one LAN using MAC; router forwards packets between networks using IP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both roles correctly distinguished.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Fibre optic — high bandwidth, long distance, immune to interference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Justification linked to the scenario.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "PAN/LAN/MAN/WAN; switch=LAN/MAC, router=inter-network/IP; fibre for 10 km"
},
        },
        {
          id: "edxbtecit-u8-l1-nettypes-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define LAN, WAN and topology. (b) Name three topologies and describe each. (c) State the function of a NIC, switch and router. (d) Explain the difference between physical and logical topology. (e) Give one advantage and one disadvantage of mesh topology.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define LAN, WAN and topology.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Name and describe three topologies.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State NIC, switch and router functions.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Physical vs logical topology.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "One advantage and one disadvantage of mesh.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Network fundamentals",
                              "statement": "Types, topologies, components, addressing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "LAN = small area; WAN = large area of linked networks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Topology = layout of devices and connections.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All three definitions accurate.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bus: shared cable; star: central device; ring: loop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each topology described accurately.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "All three correct.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "NIC connects device; switch forwards on LAN (MAC); router forwards between networks (IP).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "All three functions correct.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Physical = cabling layout; logical = data flow.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Advantage: resilient/redundant paths; disadvantage: expensive/complex.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Network types, topologies, components and physical/logical distinction."
},
        },
      ],
    },
    {
      id: "edxbtecit-u8-l1-addressing",
      title: "Network addressing and transmission",
      skill: "Explain IP and MAC addressing, subnet basics and bandwidth, latency and data transfer calculations.",
      lesson: {
        sections: [
          {
            heading: "IP addressing",
            body: "An **IPv4** address has 4 octets (e.g. 192.168.1.5), each 0-255. **Public** addresses are routable on the internet; **private** ranges (10.x.x.x, 172.16-31.x.x, 192.168.x.x) are used inside LANs. **DHCP** assigns addresses automatically. **Subnet mask** (e.g. /24 or 255.255.255.0) splits an address into network and host parts; usable hosts per subnet ≈ 2^(host bits) − 2 (network and broadcast addresses reserved).\n\n**MAC address** is a 48-bit hardware address burned into the NIC, used for delivery on the local network. **IPv6** provides vastly more addresses using 128-bit hexadecimal notation.",
          },
          {
            heading: "Bandwidth, latency and throughput",
            body: "**Bandwidth** = maximum data capacity of a link, measured in bits per second (Mbps/Gbps). **Latency** = delay for a packet to travel (ping time). **Throughput** = actual data transferred per second, usually below bandwidth.\n\n**File transfer time** = file size in bits ÷ bandwidth. E.g. 800 MB = 6,400 Mbit over 100 Mbps takes about 64 seconds. Wired fibre gives high bandwidth and low latency; wireless adds interference and contention.",
          },
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
      },
      questions: [
        {
          id: "edxbtecit-u8-l1-addressing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which address is in a private IPv4 range?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8.8.8.8"
                    },
                    {
                              "id": "b",
                              "text": "192.168.1.10"
                    },
                    {
                              "id": "c",
                              "text": "203.0.113.5"
                    },
                    {
                              "id": "d",
                              "text": "172.32.0.1"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Private ranges",
                              "statement": "10.x.x.x, 172.16-31.x.x, 192.168.x.x are private."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "192.168.x.x is a private range.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** 192.168.1.10",
          "commonErrors": [
                    "172.32.x.x is public — only 172.16-31.x.x is private."
          ]
},
        },
        {
          id: "edxbtecit-u8-l1-addressing-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between an IP address and a MAC address?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IP vs MAC",
                              "statement": "Logical network-layer vs physical link-layer address."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IP address = logical, identifies device on a network/internetwork.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "MAC address = physical hardware address used on the local network.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "IP = logical network address; MAC = physical hardware address"
},
        },
        {
          id: "edxbtecit-u8-l1-addressing-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the role of a subnet mask and what /24 means.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subnet mask",
                              "statement": "Splits an IP address into network and host parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subnet mask identifies the network portion of an address.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "/24 = 24 network bits, leaving 8 host bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives 2^8 − 2 = 254 usable hosts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Mask splits network/host parts; /24 → 254 usable hosts"
},
        },
        {
          id: "edxbtecit-u8-l1-addressing-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A 600 MB file is transferred over a 50 Mbps link. Calculate the minimum transfer time in seconds, showing your working.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "transfer time",
                              "answer": 96,
                              "unit": "s"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Transfer time",
                              "statement": "time = size in bits ÷ bandwidth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Convert 600 MB to Mbit: 600 × 8 = 4,800 Mbit.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "time = 4,800 ÷ 50 = 96 s.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer in seconds with units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "96 s",
          "commonErrors": [
                    "Forgetting ×8 to convert bytes to bits.",
                    "Mixing MB with Mbit."
          ]
},
        },
        {
          id: "edxbtecit-u8-l1-addressing-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State what DHCP does.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Distinguish bandwidth, latency and throughput.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why throughput is usually less than bandwidth.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Transmission terms",
                              "statement": "Capacity vs delay vs achieved rate."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "DHCP automatically assigns IP configuration to devices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bandwidth = max capacity of the link.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Latency = delay for packets to travel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Throughput = actual achieved data rate.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Overheads, contention, errors and protocol inefficiency reduce achieved rate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Linked to real network conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "DHCP auto-assigns IP; bandwidth=capacity, latency=delay, throughput=achieved rate"
},
        },
        {
          id: "edxbtecit-u8-l1-addressing-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Explain the difference between public and private IP addresses. (b) What does a /24 subnet mask provide? (c) State the function of DHCP. (d) Define bandwidth, latency and throughput. (e) Calculate the transfer time for a 200 MB file over a 25 Mbps link. (f) Why is IPv6 needed?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Public vs private IP addresses.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "What a /24 mask provides.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Function of DHCP.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Define bandwidth, latency, throughput.",
                    "marks": 3
          },
          {
                    "label": "e",
                    "prompt": "Transfer time calculation.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Why IPv6 is needed.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Addressing and transmission",
                              "statement": "Addressing schemes and performance metrics."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Public = routable on the internet; private = internal LAN ranges behind NAT.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both types distinguished correctly.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "24 network bits → 254 usable host addresses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Automatically assigns IP configuration to devices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Bandwidth = capacity; latency = delay; throughput = achieved rate.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "All three terms accurately defined.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "200 × 8 = 1,600 Mbit; 1,600 ÷ 25 = 64 s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Correct answer with working.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "IPv4 address exhaustion — IPv6 gives vastly more addresses.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Addressing and transmission fundamentals; 64 s transfer time."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u8-n101-notes",
      title: "Networks 8-1 — notes",
      summary: "LAN/WAN scale, star topology dominance, switch vs router roles, IP vs MAC, and bandwidth calculations.",
      sections: [
        { heading: "Key idea", body: "Match network scale, hardware and topology to the requirement." },
        { heading: "Formulas", body: "Usable hosts = 2^(host bits) − 2; transfer time = size in bits ÷ bandwidth." },
        { heading: "Remember", body: "Switch works on MAC within a LAN; router works on IP between networks." },
      ],
    },
  ],
};
