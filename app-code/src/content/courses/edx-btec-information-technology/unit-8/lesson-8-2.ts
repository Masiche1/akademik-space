import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "edxbtecit-u8-lesson-8-2",
  code: "8-2",
  title: "Network Protocols and Services",
  goal: "I CAN describe the protocols and services that enable network communication, including the internet and cloud computing.",
  standards: ["Pearson BTEC Level 3 National Information Technology — Specialist unit: Computer Networks and Data Communication", "Protocols, internet services and cloud computing"],
  
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
      id: "edxbtecit-u8-l2-protocols",
      title: "Network protocols and internet services",
      skill: "Describe core protocols (TCP/IP, HTTP, FTP, email) and how they enable internet services.",
      lesson: {
        sections: [
          {
            heading: "The TCP/IP suite",
            body: "**IP** handles addressing and routing of packets between networks. **TCP** provides reliable, ordered delivery — it segments data, numbers segments, retransmits lost ones and reassembles in order. **UDP** is faster but unreliable — used for streaming and VoIP where speed beats perfect delivery.\n\n**Packet switching** splits messages into packets routed independently; different packets may take different paths and be reassembled at the destination.",
          },
          {
            heading: "Application-layer protocols",
            body: "**HTTP/HTTPS** fetches web pages (HTTPS adds TLS encryption). **FTP** transfers files. **SMTP** sends email; **POP3** and **IMAP** retrieve it (IMAP keeps server copies). **DNS** resolves names to IPs. **DHCP** assigns addresses. **SSH** gives secure remote access.\n\n**WWW** = web pages linked by hyperlinks over HTTP(S). Browsers render HTML; URLs identify resources.",
          },
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
      },
      questions: [
        {
          id: "edxbtecit-u8-l2-protocols-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which protocol guarantees reliable, ordered delivery of data?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "UDP"
                    },
                    {
                              "id": "b",
                              "text": "TCP"
                    },
                    {
                              "id": "c",
                              "text": "ICMP"
                    },
                    {
                              "id": "d",
                              "text": "ARP"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "TCP",
                              "statement": "Reliable, ordered, connection-oriented delivery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "TCP guarantees delivery and order.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** TCP"
},
        },
        {
          id: "edxbtecit-u8-l2-protocols-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does DNS do?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DNS",
                              "statement": "Translates domain names to IP addresses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resolves domain names.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "To their IP addresses.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Translates domain names to IP addresses"
},
        },
        {
          id: "edxbtecit-u8-l2-protocols-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why UDP is preferred over TCP for live video streaming.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "UDP for real-time",
                              "statement": "Speed and low latency beat guaranteed delivery for live media."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "UDP has no retransmission — avoids stalls.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lower latency suits real-time playback.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Occasional lost packets are less noticeable than buffering.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "UDP = faster, lower latency; lost packets acceptable for live video",
          "commonErrors": [
                    "Saying UDP is more reliable than TCP."
          ]
},
        },
        {
          id: "edxbtecit-u8-l2-protocols-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A company emails a 20 MB attachment. Explain the protocols involved from sender to recipient inbox.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Email protocol chain",
                              "statement": "SMTP sends; DNS resolves; TCP delivers reliably."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Client sends message via SMTP to the mail server.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "DNS resolves the recipient domain to a mail server IP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "SMTP transfers the message between servers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "TCP provides reliable ordered delivery underneath.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Recipient retrieves via POP3 or IMAP.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "SMTP send → DNS → SMTP server-to-server → POP3/IMAP retrieval"
},
        },
        {
          id: "edxbtecit-u8-l2-protocols-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State the difference between HTTP and HTTPS.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name two email protocols and state their roles.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain packet switching.",
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
                              "name": "Internet protocols",
                              "statement": "HTTP(S), SMTP/POP3/IMAP, packet switching."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "HTTP = plain web protocol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "HTTPS adds TLS encryption for security.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "SMTP sends email.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "POP3/IMAP retrieve email.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Data split into packets routed independently.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Packets may take different paths and reassemble at destination.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "HTTPS = encrypted HTTP; SMTP sends, POP3/IMAP receive; packets routed independently"
},
        },
        {
          id: "edxbtecit-u8-l2-protocols-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define protocol and packet switching. (b) Contrast TCP and UDP. (c) State the role of DNS. (d) Name the protocols used to send and retrieve email. (e) Explain what HTTPS adds to HTTP. (f) Give two benefits of packet switching.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define protocol and packet switching.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Contrast TCP and UDP.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Role of DNS.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Email send and retrieve protocols.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "What HTTPS adds.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Two benefits of packet switching.",
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
                              "name": "Protocols and services",
                              "statement": "TCP/IP, DNS, email, web protocols."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Protocol = agreed communication rules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Packet switching = data split into independently routed packets.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "TCP reliable/ordered vs UDP fast/unreliable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both contrasted correctly.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Resolves domain names to IP addresses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "SMTP sends; POP3 or IMAP retrieves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Adds TLS encryption and authentication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Both encryption and authentication mentioned.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Efficient use of links; fault tolerance via alternative routes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Second benefit stated.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Protocol suite, DNS, email and packet-switching fundamentals."
},
        },
      ],
    },
    {
      id: "edxbtecit-u8-l2-cloud",
      title: "Client-server model, internet and cloud computing",
      skill: "Explain client-server communication, internet services and the three cloud service models.",
      lesson: {
        sections: [
          {
            heading: "Client-server and the internet",
            body: "In the **client-server** model a client device requests a service (web page, file, email) from a server. Servers can be **dedicated** (only serve the network) or **non-dedicated**. The **internet** is a worldwide WAN of interconnected networks using TCP/IP; ISPs provide access.\n\nServices: web hosting, email, file storage, VoIP, streaming, e-commerce. **ISP** = Internet Service Provider connecting users to the internet.",
          },
          {
            heading: "Cloud computing",
            body: "Cloud = on-demand computing services over the internet. **IaaS** (Infrastructure as a Service): rent servers, storage, networking — e.g. virtual machines. **PaaS** (Platform as a Service): rent a platform to develop/run apps — e.g. app hosting with databases. **SaaS** (Software as a Service): use ready-made software over the web — e.g. office suites, email.\n\nAdvantages: lower upfront cost, scalability, remote access, automatic updates. Disadvantages: dependence on provider, security/privacy risks, needs internet connectivity.",
          },
        ],
        keyFormulas: [
          { name: "Cloud models", statement: "IaaS = infrastructure; PaaS = platform; SaaS = software" },
          { name: "Client-server", statement: "Client requests → server responds" },
        ],
        workedExample: {
          problem: "Classify each as IaaS, PaaS or SaaS: (a) renting virtual servers, (b) using Gmail, (c) deploying a web app on a managed platform.",
          solution: "(a) IaaS — infrastructure rented. (b) SaaS — ready software used online. (c) PaaS — platform for developing/running apps.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u8-l2-cloud-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cloud model delivers ready-made software over the internet, such as Gmail?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "IaaS"
                    },
                    {
                              "id": "b",
                              "text": "PaaS"
                    },
                    {
                              "id": "c",
                              "text": "SaaS"
                    },
                    {
                              "id": "d",
                              "text": "On-premises"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SaaS",
                              "statement": "Software as a Service — ready-made software over the web."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gmail = ready software online = SaaS.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** SaaS"
},
        },
        {
          id: "edxbtecit-u8-l2-cloud-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define the client-server model.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Client-server",
                              "statement": "Clients request services from a central server."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clients request services.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A server provides them.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Clients request services; servers provide them"
},
        },
        {
          id: "edxbtecit-u8-l2-cloud-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between IaaS and PaaS with examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "IaaS vs PaaS",
                              "statement": "Raw infrastructure vs development platform."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IaaS rents infrastructure: servers, storage, networking.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "PaaS rents a platform to build/run applications.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples: virtual machines (IaaS); app hosting with databases (PaaS).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "IaaS = infrastructure rental; PaaS = platform for apps"
},
        },
        {
          id: "edxbtecit-u8-l2-cloud-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A startup wants to build and host a new web application without buying servers. Evaluate cloud computing for them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cloud trade-offs",
                              "statement": "Lower cost/scalability vs dependence and security risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "No upfront hardware cost — pay per use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Scales up/down with demand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Accessible anywhere with internet.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Risks: provider dependence, security/privacy, connectivity needed.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Balanced judgement for the startup scenario.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cloud suits startups: low cost, scalable, accessible — but adds dependence and security considerations"
},
        },
        {
          id: "edxbtecit-u8-l2-cloud-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the three cloud service models.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give one example of each model.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State one disadvantage of cloud computing.",
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
                              "name": "Cloud models",
                              "statement": "IaaS, PaaS, SaaS."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "IaaS, PaaS, SaaS all named.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All three spelled/named correctly.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Example for each: IaaS virtual servers; PaaS app platform; SaaS web software.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Examples correctly matched to models.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any valid disadvantage: dependence, security, connectivity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "IaaS/PaaS/SaaS with examples; e.g. provider dependence"
},
        },
        {
          id: "edxbtecit-u8-l2-cloud-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define cloud computing. (b) Name and describe the three service models. (c) Give two advantages and two disadvantages of cloud computing. (d) State what an ISP does. (e) Explain how a web page request travels from client to server.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define cloud computing.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Three service models.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Two advantages and two disadvantages.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Function of an ISP.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Web page request path.",
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
                              "name": "Cloud and internet services",
                              "statement": "Cloud models, ISP, client-server flow."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "On-demand computing services delivered over the internet.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "IaaS = infrastructure rental.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "PaaS = platform for apps; SaaS = ready software.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "All three correctly described.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Advantages: lower cost, scalability, access anywhere.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Disadvantages: provider dependence, security/privacy, connectivity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Two of each stated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Provides internet access/connectivity to customers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Client sends HTTP(S) request → routed via internet → server responds with page data.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Cloud computing, IaaS/PaaS/SaaS, ISP role and client-server flow."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u8-n102-notes",
      title: "Networks 8-2 — notes",
      summary: "TCP reliable vs UDP fast; DNS resolves names; SMTP sends, POP3/IMAP receive; IaaS/PaaS/SaaS cloud models.",
      sections: [
        { heading: "Key idea", body: "Protocols are layered rules; the right protocol depends on reliability vs speed needs." },
        { heading: "Cloud", body: "IaaS = rent infrastructure, PaaS = rent platform, SaaS = use software." },
        { heading: "Remember", body: "HTTPS adds TLS encryption to HTTP." },
      ],
    },
  ],
};
