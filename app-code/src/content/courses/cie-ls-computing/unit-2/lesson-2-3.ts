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
                              "text": "A small chunk of data sent across a network"
                    },
                    {
                              "id": "b",
                              "text": "A type of router"
                    },
                    {
                              "id": "c",
                              "text": "A web browser"
                    },
                    {
                              "id": "d",
                              "text": "A cable"
                    }
          ],
          "correctChoiceId": "a"
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
