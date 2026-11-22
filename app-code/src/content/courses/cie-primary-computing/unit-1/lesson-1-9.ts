import type { Lesson } from "../../../types.ts";

export const lesson19: Lesson = {
  id: "cipc-u1-lesson-1-9",
  code: "1-9",
  title: "Stage 3 — Networks: How Devices Connect",
  goal: "I CAN explain how computers connect to share data and describe wired and wireless networks.",
  standards: ["Cambridge Primary Computing 0059 Stage 3: networks", "Cambridge Primary Computing 0059 framework strands: Networks and digital communication"],
  stage: 3,
  vocabulary: [
    { term: "Network", definition: "Two or more devices connected to share data." },
    { term: "Internet", definition: "A huge worldwide network of networks." },
    { term: "Wi-Fi", definition: "Wireless connection using radio waves." },
    { term: "Cable", definition: "A wire that connects devices, e.g. Ethernet." },
    { term: "Router", definition: "A device that directs data between networks." },
    { term: "Share", definition: "To let other devices access your data." },
  ],
  concepts: [
    {
      id: "cipc-u1-s3-net",
      title: "Networks and connections",
      skill: "Describe wired/wireless networks and data sharing at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "What is a network?",
            body: "A network connects devices so they can share data — like phones in a family sharing photos. The internet is the biggest network: millions of devices worldwide connected together.",
          },
          {
            heading: "Wired vs wireless",
            body: "Devices connect by cable (Ethernet wire) or wirelessly (Wi-Fi radio waves). A router links your home devices to each other and to the internet. Sharing lets you send photos, play games together or print from another device.",
          },
        ],
        keyFormulas: [
          { name: "Network", statement: "connected devices that share data" },
          { name: "Wi-Fi vs cable", statement: "wireless radio vs physical wire" },
          { name: "Router", statement: "directs data between networks" },
        ],
        workedExample: {
          problem: "Your tablet shows a photo stored on your laptop. What must be true?",
          solution: "Both devices must be on the same network (e.g. home Wi-Fi) and sharing must be enabled.",
        },
      },
      questions: [
        {
          id: "cipc-u1-nt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a network?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of virus"
                    },
                    {
                              "id": "b",
                              "text": "A storage folder"
                    },
                    {
                              "id": "c",
                              "text": "A computer brand"
                    },
                    {
                              "id": "d",
                              "text": "Connected devices that share data"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Network",
                              "statement": "Connected devices sharing data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Network = devices connected to share data.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Connected devices sharing data"
},
        },
        {
          id: "cipc-u1-nt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways devices can connect to a network and one device that links networks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Connections",
                              "statement": "Wired, wireless, router."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wi-Fi (wireless) and Ethernet cable (wired).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Router links networks.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Wi-Fi/cable; router"
},
        },
        {
          id: "cipc-u1-nt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between the internet and a home network. Why is the internet called 'a network of networks'?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Networks",
                              "statement": "Scale and connection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Home network = few devices in one place.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Internet = billions of devices worldwide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Networks connect to other networks → network of networks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Home=small; internet=worldwide linked networks"
},
        },
        {
          id: "cipc-u1-nt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define network. (b) What is the internet? (c) Compare Wi-Fi and cable connections. (d) What does a router do? (e) Give two reasons to connect devices in a network. (f) What does 'sharing' mean on a network? (g) Is a standalone calculator on a network? Explain. (h) Draw/describe how your home connects to the internet.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Networks",
                              "statement": "Definition, internet, connections, sharing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Connected devices sharing data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Worldwide network of networks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Wi-Fi=wireless radio; cable=physical wire.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Directs data between networks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Two reasons: share files, play together/print.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Letting other devices access your data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) No — not connected; network requires connection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Devices → router → internet service provider → internet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Networks, internet, Wi-Fi/cable, router, sharing, home setup."
},
        },
        {
          id: "cipc-u1-nt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a network?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A single computer by itself" },
            { id: "b", text: "Devices connected together so they can share data" },
            { id: "c", text: "A type of keyboard" },
            { id: "d", text: "A folder of files" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Network", statement: "Connected devices sharing data." }],
            steps: [
              { reasoning: "A network links devices so they can communicate and share.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Devices connected together so they can share data",
          },
        },
        {
          id: "cipc-u1-nt-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two devices that can connect to a network.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Network devices", statement: "Anything that can send/receive data." }],
            steps: [
              { reasoning: "First valid device: computer, tablet, phone, printer, games console.", marks: 1, markCode: "M" },
              { reasoning: "Second valid device.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "e.g. computer and tablet.",
          },
        },
        {
          id: "cipc-u1-nt-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A home network has 4 devices connected: a laptop, a tablet, a phone and a printer. How many devices are on the network?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Counting devices", statement: "Count connected devices." }],
            steps: [
              { reasoning: "Laptop + tablet + phone + printer = 4 devices.", marks: 1, markCode: "M" },
              { reasoning: "4 devices are connected to the network.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipc-u1-nt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a router do on a home network?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Connects the home network to the internet and directs data between devices" },
            { id: "b", text: "Charges devices" },
            { id: "c", text: "Stores all your photos" },
            { id: "d", text: "Prints documents" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Router", statement: "Links network to internet, directs data." }],
            steps: [
              { reasoning: "The router connects devices to each other and to the internet.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Connects the network to the internet and directs data",
          },
        },
        {
          id: "cipc-u1-nt-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare Wi-Fi and a cable connection in one sentence each. Which is usually more reliable and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Wi-Fi vs cable", statement: "Wireless vs wired connections." }],
            steps: [
              { reasoning: "Wi-Fi = wireless connection using radio signals.", marks: 1, markCode: "M" },
              { reasoning: "Cable = wired connection through a physical cable.", marks: 1, markCode: "M" },
              { reasoning: "Cable is usually more reliable — no signal interruptions or walls blocking it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wi-Fi wireless, cable wired; cable usually more reliable.",
          },
        },
        {
          id: "cipc-u1-nt-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is the internet called 'a network of networks'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It links millions of smaller networks (home, school, company) together" },
            { id: "b", text: "It stores every file in one place" },
            { id: "c", text: "It is only one big computer" },
            { id: "d", text: "It works without any networks" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Internet", statement: "Global network of networks." }],
            steps: [
              { reasoning: "The internet connects countless smaller networks worldwide.", marks: 1, markCode: "M" },
              { reasoning: "Hence 'a network of networks'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It links millions of smaller networks together",
          },
        },
        {
          id: "cipc-u1-nt-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give two reasons why people connect devices in a network, and one thing that can go wrong on a network.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Network benefits/risks", statement: "Sharing and communication vs problems." }],
            steps: [
              { reasoning: "Two reasons: share files/printer, communicate, access internet together.", marks: 1, markCode: "M" },
              { reasoning: "One problem: slower speeds when many devices use it, or security risks.", marks: 1, markCode: "M" },
              { reasoning: "Both benefits and a valid drawback given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. share files and internet; problem: slower speeds/security.",
          },
        },
        {
          id: "cipc-u1-nt-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'sharing' mean on a network? Give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sharing", statement: "Letting other devices use your resources." }],
            steps: [
              { reasoning: "Sharing = allowing other devices on the network to use your files or devices.", marks: 1, markCode: "M" },
              { reasoning: "Example: printing from a tablet via a shared printer, or sharing a folder.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Letting others use your files/devices; e.g. shared printer.",
          },
        },
        {
          id: "cipc-u1-nt-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A standalone calculator (not connected to anything) — is it on a network? Explain.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only if it has a screen" },
            { id: "b", text: "No — it is not connected to any other device" },
            { id: "c", text: "Yes — all computers are on networks" },
            { id: "d", text: "Only at school" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Network membership", statement: "Must be connected to others." }],
            steps: [
              { reasoning: "A device is on a network only when connected to others.", marks: 1, markCode: "M" },
              { reasoning: "A standalone calculator connects to nothing, so it is not on a network.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** No — it is not connected to any other device",
          },
        },
        {
          id: "cipc-u1-nt-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Your tablet cannot reach the internet but your laptop can. Both are in the same room. Suggest two things to check.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Network troubleshooting", statement: "Check connection settings." }],
            steps: [
              { reasoning: "Check the tablet's Wi-Fi is switched on and connected to the right network.", marks: 1, markCode: "M" },
              { reasoning: "Check for a password prompt or 'no internet' message; restart Wi-Fi if needed.", marks: 1, markCode: "M" },
              { reasoning: "Two sensible checks given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check Wi-Fi is on/connected; check password or restart connection.",
          },
        },
        {
          id: "cipc-u1-nt-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A class has 3 computers and 1 printer on a network. Each computer can print to the shared printer. How many devices benefit from the printer being shared, and why is sharing better than buying 4 printers?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Shared resources", statement: "One device serves many." }],
            steps: [
              { reasoning: "4 devices use the printer: 3 computers + it serves them all (or 3 users benefit).", marks: 1, markCode: "M" },
              { reasoning: "Sharing saves money and space — one printer instead of four.", marks: 1, markCode: "M" },
              { reasoning: "All computers can access it without extra hardware.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 computers share 1 printer; saves money/space.",
          },
        },
        {
          id: "cipc-u1-nt-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define network. (b) What is the internet? (c) Compare Wi-Fi and cable connections. (d) What does a router do? (e) Give two reasons to connect devices in a network. (f) What does 'sharing' mean on a network? (g) Is a standalone calculator on a network? Explain. (h) Draw/describe how your home connects to the internet.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Networks", statement: "Definitions, connections, router, sharing, internet." }],
            steps: [
              { reasoning: "(a) Devices connected to share data.", marks: 1, markCode: "M" },
              { reasoning: "(b) Global network linking networks worldwide.", marks: 1, markCode: "M" },
              { reasoning: "(c) Wi-Fi wireless; cable wired and usually more reliable.", marks: 1, markCode: "M" },
              { reasoning: "(d) Links home network to internet; directs data.", marks: 1, markCode: "M" },
              { reasoning: "(e) Two reasons: share files/printer, get internet on many devices.", marks: 1, markCode: "M" },
              { reasoning: "(f) Letting other devices use your files or devices.", marks: 1, markCode: "M" },
              { reasoning: "(g) No — it is not connected to anything.", marks: 1, markCode: "M" },
              { reasoning: "(h) Devices → router → cable/fibre → internet provider.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Network, internet, Wi-Fi vs cable, router, reasons, sharing, standalone device, home connection.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-nt-notes",
      title: "Networks — notes",
      summary: "Network = connected devices sharing data. Wi-Fi wireless, cable wired, router directs traffic. Internet = network of networks.",
      sections: [
        { heading: "Key idea", body: "Networks let devices share files, games and printers." },
        { heading: "Internet", body: "Millions of networks joined together worldwide." },
      ],
    },
  ],
};
