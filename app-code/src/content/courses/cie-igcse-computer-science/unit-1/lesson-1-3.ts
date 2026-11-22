import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ciecs-u1-lesson-1-3",
  code: "1-3",
  title: "Network Types and Protocols",
  goal: "I CAN describe network types, components and the protocols enabling communication.",
  standards: ["Cambridge IGCSE Computer Science 0478: communication and internet technologies", "0478 section 2: networks"],
  
  vocabulary: [
    { term: "LAN", definition: "Local Area Network — small geographic area." },
    { term: "WAN", definition: "Wide Area Network — large geographic area." },
    { term: "Packet", definition: "Small chunk of data sent across a network." },
    { term: "Protocol", definition: "Rules devices follow to communicate." },
    { term: "IP address", definition: "Unique identifier for a device on a network." },
    { term: "Router", definition: "Device forwarding packets between networks." },
  ],
  concepts: [
    {
      id: "ciecs-u1-s3-net",
      title: "Network types and protocols",
      skill: "Describe network architectures and protocols at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Network types",
            body: "LAN covers small areas (school, office) — fast, private. WAN covers large areas (internet, national networks). Topologies: bus, star, ring, mesh — star is most common. Wired (Ethernet) vs wireless (Wi-Fi).",
          },
          {
            heading: "Protocols and packet switching",
            body: "Protocols are rules: TCP ensures reliable delivery, IP handles addressing/routing, HTTP fetches web pages. Data split into packets routed independently — efficient and fault-tolerant.",
          },
        ],
        keyFormulas: [
          { name: "LAN/WAN", statement: "small vs large area" },
          { name: "TCP/IP", statement: "reliable delivery + addressing" },
          { name: "Packet", statement: "data chunk with address labels" },
        ],
        workedExample: {
          problem: "Trace sending an email from your computer to a friend.",
          solution: "Email → SMTP protocol → packets → routers → recipient's mail server → SMTP → friend's inbox.",
        },
      },
      questions: [
        {
          id: "ciecs-u1-nt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between LAN and WAN?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "LAN=fast, WAN=slow"
                    },
                    {
                              "id": "b",
                              "text": "LAN=wireless, WAN=wired"
                    },
                    {
                              "id": "c",
                              "text": "LAN=small area, WAN=large area"
                    },
                    {
                              "id": "d",
                              "text": "No difference"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "LAN vs WAN",
                              "statement": "Geographic scope."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "LAN=local, WAN=wide area.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Small vs large area"
},
        },
        {
          id: "ciecs-u1-nt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a packet and why are they used?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Packet switching",
                              "statement": "Data chunks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Packet = data chunk with addresses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Efficient routing, fault tolerance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Data chunks for efficient routing"
},
        },
        {
          id: "ciecs-u1-nt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three network protocols and what each does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Protocols",
                              "statement": "Communication rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "TCP=reliable delivery; IP=addressing; HTTP=web pages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each correctly described.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Three protocols named.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "TCP, IP, HTTP described"
},
        },
        {
          id: "ciecs-u1-nt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define LAN, WAN, packet, protocol, IP address, router. (b) Compare LAN vs WAN. (c) What is a network topology? (d) Name 3 topologies. (e) Why is star topology common? (f) What does TCP guarantee? (g) What does IP do? (h) Explain packet switching benefits.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Networking",
                              "statement": "Types, topologies, protocols."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Size/speed/privacy differences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Physical/logical layout.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Bus, star, ring, mesh.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Central hub; easy to manage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Reliable ordered delivery.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Addressing and routing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Efficiency + fault tolerance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Network types, topologies, protocols."
},
        },
        {
          id: "ciecs-u1-nt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a star topology, what connects all the devices?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A direct link between every pair" },
              { id: "b", text: "A closed ring of cables" },
              { id: "c", text: "One long shared cable" },
              { id: "d", text: "A central switch or hub" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Star topology", statement: "All devices connect to a central point." },
            ],
            steps: [
              { reasoning: "A central hub or switch connects each device in a star topology.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** A central switch or hub",
          },
        },
        {
          id: "ciecs-u1-nt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which protocol is mainly responsible for reliable, ordered delivery of data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "TCP" },
              { id: "b", text: "FTP" },
              { id: "c", text: "HTTP" },
              { id: "d", text: "DNS" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "TCP", statement: "Reliable ordered delivery." },
            ],
            steps: [
              { reasoning: "TCP manages reliable delivery and ordering of packets.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** TCP",
          },
        },
        {
          id: "ciecs-u1-nt-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is data divided into packets for transmission?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make every packet encrypted" },
              { id: "b", text: "To prevent all network errors" },
              { id: "c", text: "To allow independent routing and retransmission of lost parts" },
              { id: "d", text: "To remove the need for addresses" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Packet switching", statement: "Packets route independently and can be resent." },
            ],
            steps: [
              { reasoning: "Packets can take different routes and only failed parts need resending.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Independent routing and retransmission",
          },
        },
        {
          id: "ciecs-u1-nt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main role of a router on a network?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It forwards packets between networks" },
              { id: "b", text: "It stores files permanently" },
              { id: "c", text: "It executes application programs" },
              { id: "d", text: "It displays output on a monitor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Router", statement: "Forwards packets between networks." },
            ],
            steps: [
              { reasoning: "Routers choose paths and forward packets between networks.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Forwards packets between networks",
          },
        },
        {
          id: "ciecs-u1-nt-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A school LAN uses both wired Ethernet and Wi-Fi. Which statement best compares them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethernet is generally more stable, while Wi-Fi offers flexible wireless access" },
              { id: "b", text: "Wi-Fi is always a WAN rather than part of a LAN" },
              { id: "c", text: "Wi-Fi cannot use TCP/IP protocols" },
              { id: "d", text: "They use completely different addressing systems" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Wired vs wireless", statement: "Both can carry IP packets; wired is often more stable." },
            ],
            steps: [
              { reasoning: "Ethernet and Wi-Fi can both support LAN traffic, but wired links are usually more stable.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Ethernet is generally more stable; Wi-Fi is flexible",
          },
        },
        {
          id: "ciecs-u1-nt-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If the best route for a packet fails, what can packet switching allow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The whole message must be sent again from the start" },
              { id: "b", text: "The receiving device automatically repairs the data" },
              { id: "c", text: "The sender must use a different protocol" },
              { id: "d", text: "Routers can choose an alternative path for later packets" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fault tolerance", statement: "Alternative routes improve reliability." },
            ],
            steps: [
              { reasoning: "Routers can reroute packets when a path fails, improving fault tolerance.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Routers can choose an alternative path",
          },
        },
        {
          id: "ciecs-u1-nt-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A file of $4,000$ bytes is split into packets carrying $500$ bytes of data each. How many packets are needed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Packet count", statement: "Packets = data size divided by payload per packet." },
            ],
            steps: [
              { reasoning: "4000 / 500 = 8 packets.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "ciecs-u1-nt-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Each packet has a $40$-byte header and $480$ bytes of payload. What is the total size of one packet in bytes?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 520 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Packet size", statement: "Total packet size = header + payload." },
            ],
            steps: [
              { reasoning: "40 + 480 = 520 bytes.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "520",
          },
        },
        {
          id: "ciecs-u1-nt-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) A $9,000$-byte message is split into $1,500$-byte packets. How many packets are needed? (b) If each packet also has a $40$-byte header, what is the total header overhead in bytes?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 240 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Packet overhead", statement: "Count packets first, then multiply by header size." },
            ],
            steps: [
              { reasoning: "9000 / 1500 = 6 packets.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "6 * 40 = 240 bytes of header overhead.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 6; (b) 240",
          },
        },
        {
          id: "ciecs-u1-nt-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) A $100$ Mbps link sends a $25$ MB file. Treating $1$ MB as $8$ megabits, how many seconds does the transfer take? (b) At $50$ Mbps, how many seconds would it take?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transmission time", statement: "Time = file megabits divided by link speed." },
            ],
            steps: [
              { reasoning: "25 MB = 200 megabits; 200 / 100 = 2 seconds.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "200 / 50 = 4 seconds.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 2; (b) 4",
          },
        },
        {
          id: "ciecs-u1-nt-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "(a) $10$ megabits are sent at $2$ Mbps. How many seconds does this take? (b) How long at $5$ Mbps? (c) How many seconds are saved by using the faster link?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transmission time", statement: "Time = data size divided by bandwidth." },
            ],
            steps: [
              { reasoning: "10 / 2 = 5 seconds.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "10 / 5 = 2 seconds.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "5 - 2 = 3 seconds saved.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 5; (b) 2; (c) 3",
          },
        },
        {
          id: "ciecs-u1-nt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how packet switching and protocols allow a message to travel reliably across different networks. Include the roles of IP addresses, routers and TCP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Packet switching", statement: "Messages are split, addressed, routed and reassembled reliably." },
            ],
            steps: [
              { reasoning: "The message is divided into packets that can travel independently.", marks: 1, markCode: "M" },
              { reasoning: "IP addresses identify sender and receiver so packets can be routed.", marks: 1, markCode: "M" },
              { reasoning: "Routers forward packets between networks and can choose alternative paths.", marks: 1, markCode: "M" },
              { reasoning: "TCP checks delivery and ordering, so missing packets can be resent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Packets are addressed, routed independently and reliably delivered",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u1-nt-notes",
      title: "Networks — notes",
      summary: "LAN=local, WAN=wide. Packets route via protocols; TCP=reliable, IP=addressing, HTTP=web.",
      sections: [
        { heading: "Key idea", body: "Protocols are the rules enabling devices to communicate." },
        { heading: "Topologies", body: "Star most common — central hub connects all devices." },
      ],
    },
  ],
};
