import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cils-c-u2-lesson-2-3",
  code: "2-3",
  title: "Stage 8 — Networks: Internet, Packets and Protocols",
  goal: "I CAN explain how data travels across networks using packets, IP addresses and protocols.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: networks", "Cambridge Lower Secondary Computing 0860 strand: Networks and digital communication"],
  stage: 8,
  vocabulary: [
    { term: "Packet", definition: "Small chunk of data sent across a network." },
    { term: "IP address", definition: "Unique number identifying a device on a network." },
    { term: "Protocol", definition: "Rules devices follow to communicate." },
    { term: "TCP/IP", definition: "Core internet protocol suite." },
    { term: "HTTP/HTTPS", definition: "Web protocols — HTTPS adds encryption." },
    { term: "Router", definition: "Device directing packets between networks." },
  ],
  concepts: [
    {
      id: "cils-c-u2-s3-net",
      title: "Internet and protocols",
      skill: "Explain packet switching, IP addressing and protocols at Stage 8 level.",
      lesson: {
        sections: [
          {
            heading: "Packet switching",
            body: "Data is split into packets, each labelled with source/destination addresses. Routers forward packets hop-by-hop; they may take different routes and arrive out of order, then reassemble. This is packet switching — efficient and resilient.",
          },
          {
            heading: "Protocols and addressing",
            body: "Protocols are rules: TCP ensures reliable delivery, IP handles addressing, HTTP fetches web pages. IP addresses (e.g. 192.168.1.1) identify devices; DNS translates names to IPs. HTTPS encrypts for security.",
          },
        ],
        keyFormulas: [
          { name: "Packet", statement: "data chunk with addresses" },
          { name: "TCP/IP", statement: "reliable delivery + addressing" },
          { name: "DNS", statement: "name → IP lookup" },
        ],
        workedExample: {
          problem: "You load a webpage. Trace the journey from request to display.",
          solution: "Browser → DNS lookup → IP address → HTTP request packets → server → response packets → reassemble → render page.",
        },
      },
      questions: [
        {
          id: "cils-c-u2-nt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a packet?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of router"
                    },
                    {
                              "id": "b",
                              "text": "A cable"
                    },
                    {
                              "id": "c",
                              "text": "A web browser"
                    },
                    {
                              "id": "d",
                              "text": "A small chunk of data sent across a network"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Packet",
                              "statement": "Data chunk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Packets carry data with address labels.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Network data chunk"
},
        },
        {
          id: "cils-c-u2-nt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does DNS do and what is an IP address?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DNS and IP",
                              "statement": "Name lookup + device ID."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DNS translates domain names to IP addresses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "IP = unique device identifier on network.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Name→IP; device identifier"
},
        },
        {
          id: "cils-c-u2-nt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why send data as packets instead of one stream? Give two reasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Packet switching",
                              "statement": "Efficiency and resilience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shares bandwidth fairly; different routes possible.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lost packets can be resent individually.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fault tolerance — network survives breaks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Efficiency + fault tolerance"
},
        },
        {
          id: "cils-c-u2-nt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define packet, IP address, protocol, TCP/IP, HTTP/HTTPS, router, DNS. (b) Trace loading a webpage. (c) Why packets may arrive out of order? (d) What does TCP guarantee? (e) Why is HTTPS safer? (f) What is bandwidth? (g) Draw packet journey device→server→device. (h) What happens if a packet is lost?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Networking",
                              "statement": "Packets, protocols, addresses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All seven definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) DNS→IP→packets→reassemble→render.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Different routes/times.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Reliable ordered delivery.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Encryption protects data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Data capacity per time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Device→router→ISP→server→back.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Receiver detects gap; sender retransmits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Internet protocols, packets, addressing."
},
        },
        {
          id: "cils-c-u2-nt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a router do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Translates names to IPs"
                    },
                    {
                              "id": "b",
                              "text": "Displays web pages"
                    },
                    {
                              "id": "c",
                              "text": "Directs packets between networks"
                    },
                    {
                              "id": "d",
                              "text": "Stores files permanently"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Router",
                              "statement": "Directs packets between networks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Routers forward packets hop-by-hop toward their destination.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Directs packets"
},
        },
        {
          id: "cils-c-u2-nt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Each packet carries two address labels. How many addresses does each packet carry?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Packet",
                              "statement": "Source + destination addresses."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Source address and destination address = 2.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "cils-c-u2-nt-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A message is split into 10 packets and 3 are lost. How many packets must be resent?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Packet loss",
                              "statement": "Lost packets resent individually."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Only the 3 lost packets need retransmission.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "cils-c-u2-nt-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is HTTPS safer than HTTP? Give two reasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HTTPS",
                              "statement": "Encrypted web protocol."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Encrypts data in transit — eavesdroppers can't read it.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Protects passwords and personal data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Also verifies the website's identity (certificate).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Encryption protects data"
},
        },
        {
          id: "cils-c-u2-nt-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does DNS do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Translates domain names into IP addresses"
                    },
                    {
                              "id": "b",
                              "text": "Stores website files"
                    },
                    {
                              "id": "c",
                              "text": "Blocks viruses"
                    },
                    {
                              "id": "d",
                              "text": "Speeds up the internet"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DNS",
                              "statement": "Name → IP lookup."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DNS resolves names like 'example.com' to IP addresses.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Name → IP"
},
        },
        {
          id: "cils-c-u2-nt-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "20 packets are sent and 5 are lost. How many packets arrive successfully?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 15 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Packet loss",
                              "statement": "sent - lost = arrived."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "20 - 5 = 15.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "15"
},
        },
        {
          id: "cils-c-u2-nt-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might packets of one message arrive out of order?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The receiver sorts them alphabetically"
                    },
                    {
                              "id": "b",
                              "text": "Packets are always sent in reverse"
                    },
                    {
                              "id": "c",
                              "text": "They can take different routes and take different times"
                    },
                    {
                              "id": "d",
                              "text": "Routers delete half of them"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Packet switching",
                              "statement": "Independent routing causes reordering."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different paths → different arrival times → out of order.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Different routes/times"
},
        },
        {
          id: "cils-c-u2-nt-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define packet, IP address, protocol, TCP, DNS. (b) What are the two address labels on every packet? (c) Why is packet switching more resilient than a single dedicated connection? (d) What happens when a packet is lost? (e) Trace what happens when you type a web address and press enter.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Networking",
                              "statement": "Packets, protocols, DNS."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Source address and destination address.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Other routes/packets unaffected; lost packets resent individually.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Receiver detects gap; sender retransmits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) DNS lookup → IP → request packets → server → response → reassemble → render.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Packets, resilience, DNS trace."
},
        },
        {
          id: "cils-c-u2-nt-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'protocol' in networking?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A virus"
                    },
                    {
                              "id": "b",
                              "text": "A type of cable"
                    },
                    {
                              "id": "c",
                              "text": "A set of rules devices follow to communicate"
                    },
                    {
                              "id": "d",
                              "text": "A web browser"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Protocol",
                              "statement": "Communication rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protocols standardise how devices talk.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Communication rules"
},
        },
        {
          id: "cils-c-u2-nt-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The IP address 192.168.1.1 is made of how many separate numbers?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 4 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IP address",
                              "statement": "Four octets."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "192, 168, 1, 1 = 4 numbers.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "cils-c-u2-nt-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the TCP protocol guarantee?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reliable, ordered delivery of data"
                    },
                    {
                              "id": "b",
                              "text": "Free bandwidth"
                    },
                    {
                              "id": "c",
                              "text": "Faster internet speeds"
                    },
                    {
                              "id": "d",
                              "text": "Encryption of all data"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "TCP",
                              "statement": "Reliable delivery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "TCP ensures packets arrive complete and in order.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Reliable ordered delivery"
},
        },
        {
          id: "cils-c-u2-nt-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define packet switching, IP address, DNS, HTTP, bandwidth. (b) Why split data into packets rather than send one stream? (c) What role do routers play? (d) How does TCP differ from IP in its job? (e) Why do websites prefer HTTPS? (f) A video call uses many packets — what could cause it to stutter?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Networking",
                              "statement": "Packets, protocols, bandwidth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Fair bandwidth sharing, flexible routing, easy retransmission.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Forward packets between networks toward destination.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) IP addresses/routes; TCP ensures reliable ordered delivery.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Encrypts traffic — protects users.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Packet loss, low bandwidth, congestion, high latency.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Networking concepts and issues."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u2-nt-notes",
      title: "Networks — notes",
      summary: "Data=packets via routers; IP addresses identify devices; protocols are communication rules.",
      sections: [
        { heading: "Key idea", body: "Internet = packets + IP + protocols working together." },
        { heading: "HTTPS", body: "Encrypted web traffic — look for the padlock." },
      ],
    },
  ],
};
