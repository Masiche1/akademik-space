import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "olict-u3-lesson-3-1",
  code: "3-1",
  title: "What is a Network?",
  goal: "I CAN define networks and distinguish LAN, WAN and the internet.",
  standards: ["7014 4.1"],
  vocabulary: [
    { term: "Network", definition: "Two or more computers connected to share data and resources." },
    { term: "LAN", definition: "Local Area Network — small area like a building or school." },
    { term: "WAN", definition: "Wide Area Network — large area, often across countries." },
    { term: "MAN", definition: "Metropolitan Area Network — city-sized network." },
    { term: "Internet", definition: "Global network of networks connecting millions of computers." },
    { term: "Server", definition: "Computer providing services/data to other computers (clients)." },
    { term: "Client", definition: "Computer requesting services from a server." },
  ],
  concepts: [
    {
      id: "olict-u3-whatnet",
      title: "Network types",
      skill: "Define networks and distinguish LAN, WAN and the internet.",
      lesson: {
        sections: [
          { heading: "What a network does", body: "Connects computers to share data, files, printers and internet access. Saves money (one printer for all), enables communication, centralises data." },
          { heading: "LAN", body: "**Local Area Network**: covers a small area — a classroom, office, school. Fast, privately owned, e.g. school computer lab." },
          { heading: "WAN", body: "**Wide Area Network**: covers large distances — cities, countries. Uses telephone lines, satellites or fibre. The internet is the largest WAN." },
          { heading: "Client-server", body: "In a network, a **server** provides services (files, printing, internet); **clients** request them. Peer-to-peer networks let computers share directly without a server." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A bank has branches in 20 cities sharing account data. What network type?",
          solution: "WAN — large geographical area, likely using leased lines or VPN over the internet.",
        },
      },
      questions: [
        {
          id: "olict-u3-wn-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A LAN covers…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A small local area" }, { id: "b", text: "A whole country" }, { id: "c", text: "The whole world" }, { id: "d", text: "Only one computer" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "LAN", statement: "Local area." }], steps: [{ reasoning: "LAN = local.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Small local area" },
        },
        {
          id: "olict-u3-wn-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish a LAN from a WAN.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "LAN vs WAN", statement: "Small vs large area." }], steps: [
            { reasoning: "LAN: small area, fast.", marks: 1, markCode: "M" },
            { reasoning: "WAN: large area, uses telecom links.", marks: 1, markCode: "A" },
          ], finalAnswer: "LAN = small local area; WAN = large geographical area across cities/countries." },
        },
        {
          id: "olict-u3-wn-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two advantages of connecting computers in a network.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Network benefits", statement: "Sharing + communication." }], steps: [
            { reasoning: "Share resources (files, printers).", marks: 1, markCode: "M" },
            { reasoning: "Share internet connection.", marks: 1, markCode: "M" },
            { reasoning: "Centralised data management.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Share files/printers/internet and centralise data — cheaper and easier management." },
        },
        {
          id: "olict-u3-wn-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Networks review.",
          parts: [
            { label: "a", prompt: "Define network.", marks: 2 },
            { label: "b", prompt: "Distinguish LAN and WAN.", marks: 2 },
            { label: "c", prompt: "Define server and client.", marks: 2 },
            { label: "d", prompt: "Why is the internet called a 'network of networks'?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Networks", statement: "Types and client-server." },
          ], steps: [
            { part: "a", reasoning: "Connected computers sharing resources.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "LAN: local; WAN: wide.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Server: provides; client: requests.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct definitions.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "It connects many smaller networks.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "LANs/WANs linked globally.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) connected computers (b) local vs wide (c) provides vs requests (d) links many networks" },
        },
      ],
    },
    {
      id: "olict-u3-uses",
      title: "Uses of networks",
      skill: "Describe practical uses of networks in organisations.",
      lesson: {
        sections: [
          { heading: "Sharing resources", body: "One printer serves all computers; shared file servers hold documents centrally; single internet connection for everyone." },
          { heading: "Communication", body: "Email, messaging, video calls between staff; video conferencing for meetings; shared calendars." },
          { heading: "Centralised management", body: "Administrators install software and updates once for all machines; backups stored centrally; access controlled by permissions." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a school network save money?",
          solution: "One printer/internet connection shared by all computers; central file storage reduces duplication; single admin manages all machines.",
        },
      },
      questions: [
        {
          id: "olict-u3-un-q1", difficulty: "foundation", totalMarks: 1,
          stem: "On a network, a shared printer means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All computers can print through it" }, { id: "b", text: "Only one computer can print" }, { id: "c", text: "Printing is free" }, { id: "d", text: "No paper needed" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Resource sharing", statement: "Shared devices." }], steps: [{ reasoning: "All can use it.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** All can print" },
        },
        {
          id: "olict-u3-un-q2", difficulty: "core", totalMarks: 2,
          stem: "Give two communication uses of a network.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Network comms", statement: "Email, calls, conferencing." }], steps: [
            { reasoning: "Email/messaging.", marks: 1, markCode: "M" },
            { reasoning: "Video calls/conferencing.", marks: 1, markCode: "A" },
          ], finalAnswer: "Email/messaging and video conferencing/calls." },
        },
        {
          id: "olict-u3-un-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a school network improves security compared to standalone computers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Network security", statement: "Centralised control." }], steps: [
            { reasoning: "Centralised backups prevent data loss.", marks: 1, markCode: "M" },
            { reasoning: "Permissions control file access.", marks: 1, markCode: "M" },
            { reasoning: "Updates/antivirus installed centrally.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Centralised backups, access permissions and uniform security updates." },
        },
        {
          id: "olict-u3-un-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Network uses review.",
          parts: [
            { label: "a", prompt: "Give two shared resources on a network.", marks: 2 },
            { label: "b", prompt: "Give two communication uses.", marks: 2 },
            { label: "c", prompt: "Why share one internet connection?", marks: 2 },
            { label: "d", prompt: "Explain one management benefit of a network.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Network uses", statement: "Sharing, communication, management." },
          ], steps: [
            { part: "a", reasoning: "Printer/files.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Internet/scanner.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Email.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Video calls.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Cheaper than separate connections.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Central management.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Updates installed once.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Centralised backups/control.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear benefit.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) printer+files (b) email+calls (c) cost+control (d) central updates" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u3-3-1-notes", title: "Networks — notes", summary: "Network types, client-server model and network benefits.",
      sections: [
        { heading: "Types", body: "LAN = local; WAN = wide; internet = global network of networks. Server provides, client requests." },
        { heading: "Uses", body: "Share files/printers/internet; communicate via email/calls; centralised management." },
      ] },
  ],
};
