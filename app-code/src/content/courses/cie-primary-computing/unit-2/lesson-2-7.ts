import type { Lesson } from "../../../types.ts";

export const lesson27: Lesson = {
  id: "cipc-u2-lesson-2-7",
  code: "2-7",
  title: "Stage 5 — Networks: Internet, Protocols and Addresses",
  goal: "I CAN explain how data travels across networks and describe IP addresses and protocols.",
  standards: ["Cambridge Primary Computing 0059 Stage 5: networks", "Cambridge Primary Computing 0059 framework strands: Networks and digital communication"],
  stage: 5,
  vocabulary: [
    { term: "IP address", definition: "A unique number identifying a device on a network." },
    { term: "Protocol", definition: "Rules that devices follow to communicate." },
    { term: "Packet", definition: "A small chunk of data sent across a network." },
    { term: "Router", definition: "Device directing packets between networks." },
    { term: "DNS", definition: "System translating web addresses into IP addresses." },
    { term: "Bandwidth", definition: "How much data a connection can carry at once." },
  ],
  concepts: [
    {
      id: "cipc-u2-s5-net",
      title: "How the internet works",
      skill: "Explain packets, IP addresses, protocols and DNS at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Sending data",
            body: "When you open a webpage, data travels as packets — small chunks labelled with addresses. Routers direct packets hop-by-hop to the destination, like a postal system. Packets are reassembled at the end.",
          },
          {
            heading: "Addresses and protocols",
            body: "Every device has an IP address (e.g. 192.168.1.1) — its network identity. DNS translates 'google.com' into an IP address. Protocols like HTTP/HTTPS are the rules for sending web data; HTTPS adds encryption for security.",
          },
        ],
        keyFormulas: [
          { name: "Packets", statement: "data split into chunks, routed, reassembled" },
          { name: "IP/DNS", statement: "IP=address; DNS=name→IP lookup" },
        ],
        workedExample: {
          problem: "You type 'shop.com' — what happens before the page loads?",
          solution: "Browser asks DNS for shop.com's IP → gets address → sends packet requests → server replies with packets → page assembles and displays.",
        },
      },
      questions: [
        {
          id: "cipc-u2-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an IP address?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A unique number identifying a device on a network"
                    },
                    {
                              "id": "b",
                              "text": "A type of cable"
                    },
                    {
                              "id": "c",
                              "text": "A web browser"
                    },
                    {
                              "id": "d",
                              "text": "A password"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IP address",
                              "statement": "Device's network ID."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IP address uniquely identifies a device.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Unique device identifier"
},
        },
        {
          id: "cipc-u2-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a packet and what does DNS do?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Packets and DNS",
                              "statement": "Data chunks + name lookup."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Packet = small chunk of network data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "DNS translates domain names to IP addresses.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Data chunk; name→IP lookup"
},
        },
        {
          id: "cipc-u2-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why data is sent as packets rather than one big file. What role do routers play?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Networking",
                              "statement": "Packets and routing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Packets share bandwidth fairly; lost packets can be resent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different routes possible → reliability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Routers direct packets between networks toward destination.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Efficiency/reliability; routers guide packets"
},
        },
        {
          id: "cipc-u2-in-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define packet, IP address, protocol, DNS, router. (b) How does typing a web address lead to a page? (c) What is bandwidth? (d) Why is HTTPS safer than HTTP? (e) What happens if a packet is lost? (f) Draw/describe packet journey from your device to a server. (g) What does a MAC address differ from IP? (h) Why are protocols needed for communication?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Networks",
                              "statement": "Packets, IP, DNS, protocols."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) DNS lookup → IP → packets → reassemble page.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Data capacity per time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) HTTPS encrypts data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Receiver detects missing packet; resent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Device→router→ISP→server→back.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) MAC=physical device ID; IP=network address.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Common rules so devices understand each other.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Networking concepts: packets, IP, DNS, protocols, HTTPS."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-in-notes",
      title: "Internet — notes",
      summary: "Data travels as packets via routers. IP addresses identify devices; DNS resolves names; HTTPS encrypts.",
      sections: [
        { heading: "Key idea", body: "Internet = packets + addresses + protocols working together." },
        { heading: "Security", body: "HTTPS encrypts traffic — look for the padlock." },
      ],
    },
  ],
};
