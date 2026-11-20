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
                              "text": "LAN=small area, WAN=large area"
                    },
                    {
                              "id": "b",
                              "text": "LAN=fast, WAN=slow"
                    },
                    {
                              "id": "c",
                              "text": "LAN=wireless, WAN=wired"
                    },
                    {
                              "id": "d",
                              "text": "No difference"
                    }
          ],
          "correctChoiceId": "a"
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
