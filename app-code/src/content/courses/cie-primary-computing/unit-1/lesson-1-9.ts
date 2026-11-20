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
                              "text": "Connected devices that share data"
                    },
                    {
                              "id": "b",
                              "text": "A type of virus"
                    },
                    {
                              "id": "c",
                              "text": "A computer brand"
                    },
                    {
                              "id": "d",
                              "text": "A storage folder"
                    }
          ],
          "correctChoiceId": "a"
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
