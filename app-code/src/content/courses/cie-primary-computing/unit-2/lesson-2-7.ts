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
                              "text": "A web browser"
                    },
                    {
                              "id": "c",
                              "text": "A type of cable"
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
        {
          id: "cipc-u2-in-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an IP address?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of cable" },
            { id: "b", text: "A password" },
            { id: "c", text: "A unique number that identifies a device on a network" },
            { id: "d", text: "A web browser" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "IP address", statement: "Unique device identifier." }],
            steps: [
              { reasoning: "An IP address uniquely identifies a device on a network.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Unique number identifying a device",
          },
        },
        {
          id: "cipc-u2-in-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a packet? What does a router do?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Packet and router", statement: "Data chunk vs traffic director." }],
            steps: [
              { reasoning: "Packet = a small chunk of data sent across a network.", marks: 1, markCode: "M" },
              { reasoning: "Router = device that directs packets between networks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Packet = data chunk; router = directs packets.",
          },
        },
        {
          id: "cipc-u2-in-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A file is split into 8 packets. 2 packets are lost. How many packets arrive at the destination?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Packet loss", statement: "8 - 2." }],
            steps: [
              { reasoning: "8 - 2 = 6 packets arrive.", marks: 1, markCode: "M" },
              { reasoning: "6 packets reach the destination.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipc-u2-in-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does DNS do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speeds up the CPU" },
            { id: "b", text: "Stores your passwords" },
            { id: "c", text: "Prints web pages" },
            { id: "d", text: "Translates web addresses (names) into IP addresses" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "DNS", statement: "Name → IP translation." }],
            steps: [
              { reasoning: "DNS converts human-readable domain names into IP addresses.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Translates names into IP addresses",
          },
        },
        {
          id: "cipc-u2-in-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what happens when you type a web address and press Enter, in three steps.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Web request journey", statement: "Address → DNS → server → page." }],
            steps: [
              { reasoning: "Browser asks DNS for the IP address of the domain.", marks: 1, markCode: "M" },
              { reasoning: "Browser sends a request (in packets) to that server.", marks: 1, markCode: "M" },
              { reasoning: "Server responds with the page data; browser displays it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "DNS lookup → request → page displayed.",
          },
        },
        {
          id: "cipc-u2-in-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is data sent as packets rather than one continuous stream?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Computers cannot send big files" },
            { id: "b", text: "Packets are cheaper" },
            { id: "c", text: "Packets can take different routes and be reassembled; failures affect only some" },
            { id: "d", text: "It makes files smaller" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Packet switching", statement: "Resilience and efficiency." }],
            steps: [
              { reasoning: "Packets can travel different routes and are reassembled at the destination.", marks: 1, markCode: "M" },
              { reasoning: "If one packet is lost, only it needs resending — the rest still arrive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Flexibility and resilience",
          },
        },
        {
          id: "cipc-u2-in-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is bandwidth, and why does a higher bandwidth usually mean faster downloads?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Bandwidth", statement: "Amount of data per second." }],
            steps: [
              { reasoning: "Bandwidth = how much data can be transferred per second.", marks: 1, markCode: "M" },
              { reasoning: "Higher bandwidth lets more packets arrive per second.", marks: 1, markCode: "M" },
              { reasoning: "So files/pages download faster.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Data per second; more per second = faster.",
          },
        },
        {
          id: "cipc-u2-in-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a protocol? Give one example used on the internet.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Protocol", statement: "Rules for communication." }],
            steps: [
              { reasoning: "Protocol = agreed set of rules for how devices communicate.", marks: 1, markCode: "M" },
              { reasoning: "Example: HTTP/HTTPS for web pages, or TCP/IP for internet traffic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Communication rules; e.g. HTTP, TCP/IP.",
          },
        },
        {
          id: "cipc-u2-in-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between a MAC address and an IP address?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "MAC vs IP", statement: "Hardware ID vs network ID." }],
            steps: [
              { reasoning: "MAC address = permanent hardware ID of the network card.", marks: 1, markCode: "M" },
              { reasoning: "IP address = logical address that can change and identifies the device on a network.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MAC = hardware ID; IP = network address.",
          },
        },
        {
          id: "cipc-u2-in-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is HTTPS safer than HTTP? What does the padlock icon show?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "HTTPS", statement: "Encrypted secure connection." }],
            steps: [
              { reasoning: "HTTPS encrypts the data sent between browser and server.", marks: 1, markCode: "M" },
              { reasoning: "Encryption stops others reading/intercepting the data.", marks: 1, markCode: "M" },
              { reasoning: "The padlock shows the connection is secure/HTTPS.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HTTPS encrypts data; padlock = secure connection.",
          },
        },
        {
          id: "cipc-u2-in-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A packet is lost on its way to a server. What happens next? Does the whole file fail?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Packet loss handling", statement: "Resend only missing packets." }],
            steps: [
              { reasoning: "The receiver notices a missing packet (gap in sequence).", marks: 1, markCode: "M" },
              { reasoning: "It asks the sender to resend just that packet.", marks: 1, markCode: "M" },
              { reasoning: "The file does NOT fail — packets are reassembled once all arrive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Resend the lost packet; file still completes.",
          },
        },
        {
          id: "cipc-u2-in-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define packet, IP address, protocol, DNS, router. (b) How does typing a web address lead to a page? (c) What is bandwidth? (d) Why is HTTPS safer than HTTP? (e) What happens if a packet is lost? (f) Draw/describe packet journey from your device to a server. (g) What does a MAC address differ from IP? (h) Why are protocols needed for communication?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Internet", statement: "Definitions, request journey, bandwidth, security." }],
            steps: [
              { reasoning: "(a) Packet=data chunk; IP=device ID; protocol=rules; DNS=name→IP; router=directs packets.", marks: 1, markCode: "M" },
              { reasoning: "(b) DNS → IP → request packets → server → page data back.", marks: 1, markCode: "M" },
              { reasoning: "(c) Data transferred per second.", marks: 1, markCode: "M" },
              { reasoning: "(d) HTTPS encrypts the connection.", marks: 1, markCode: "M" },
              { reasoning: "(e) Resent; file reassembles when all arrive.", marks: 1, markCode: "M" },
              { reasoning: "(f) Device → router → ISP → server → back.", marks: 1, markCode: "M" },
              { reasoning: "(g) MAC=hardware ID; IP=logical network address.", marks: 1, markCode: "M" },
              { reasoning: "(h) Rules ensure devices understand each other's data format.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Packets, IP, protocols, DNS, router, journey, bandwidth, HTTPS, packet loss, MAC vs IP, protocols.",
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
