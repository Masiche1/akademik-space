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
            { id: "a", text: "A whole country" },
            { id: "b", text: "A small local area" },
            { id: "c", text: "The whole world" },
            { id: "d", text: "Only one computer" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "LAN", statement: "Local area." }], steps: [{ reasoning: "LAN = local.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Small local area" },
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
        {
          id: "olict-u3-wn-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A WAN covers…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One classroom" },
            { id: "b", text: "A large geographical area" },
            { id: "c", text: "One computer" },
            { id: "d", text: "Only a server room" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "WAN", statement: "Wide area." }], steps: [{ reasoning: "WAN = wide geographical area.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** A large geographical area" },
        },
        {
          id: "olict-u3-wn-q6", difficulty: "core", totalMarks: 1,
          stem: "In a client-server network, the server…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stores no data" },
            { id: "b", text: "Requests files" },
            { id: "c", text: "Provides services to clients" },
            { id: "d", text: "Prints documents" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Server", statement: "Provides services." }], steps: [{ reasoning: "Server provides services to clients.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Provides services to clients" },
        },
        {
          id: "olict-u3-wn-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A school has 30 computers. Without a network each would need its own printer (30 printers). With a shared printer, how many printers are saved?",
          response: { type: "numeric", parts: [{ label: "printers", answer: 29 }] },
          markscheme: { principles: [{ kind: "principle", name: "Resource sharing", statement: "Shared devices reduce cost." }], steps: [
            { reasoning: "$30 - 1 = 29$ printers saved.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "29 printers" },
        },
        {
          id: "olict-u3-wn-q8", difficulty: "core", totalMarks: 2,
          stem: "Name two things computers can share on a network.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sharing", statement: "Files, printers, internet." }], steps: [
            { reasoning: "e.g. files/documents.", marks: 1, markCode: "M" },
            { reasoning: "e.g. printer or internet connection.", marks: 1, markCode: "A" },
          ], finalAnswer: "Files, printers, scanners, internet connection." },
        },
        {
          id: "olict-u3-wn-q9", difficulty: "core", totalMarks: 2,
          stem: "A network has 1 server and 24 client computers. How many devices are on the network in total?",
          response: { type: "numeric", parts: [{ label: "devices", answer: 25 }] },
          markscheme: { principles: [{ kind: "principle", name: "Network size", statement: "Server + clients." }], steps: [
            { reasoning: "$1 + 24 = 25$ devices.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "25 devices" },
        },
        {
          id: "olict-u3-wn-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the client-server model of networking.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Client-server", statement: "Server provides, client requests." }], steps: [
            { reasoning: "Server provides services/data.", marks: 1, markCode: "M" },
            { reasoning: "Clients request services.", marks: 1, markCode: "M" },
            { reasoning: "Centralised control possible.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "A server stores files/services; clients request them — centralised and controlled." },
        },
        {
          id: "olict-u3-wn-q11", difficulty: "foundation", totalMarks: 1,
          stem: "The internet is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A global network of networks" },
            { id: "b", text: "A single large computer" },
            { id: "c", text: "One school LAN" },
            { id: "d", text: "A type of printer" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Internet", statement: "Global network of networks." }], steps: [{ reasoning: "Internet connects many networks worldwide.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** A global network of networks" },
        },
        {
          id: "olict-u3-wn-q12", difficulty: "core", totalMarks: 1,
          stem: "In a peer-to-peer network, computers…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Must use a server" },
            { id: "b", text: "Only print" },
            { id: "c", text: "Cannot share files" },
            { id: "d", text: "Share resources directly without a central server" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Peer-to-peer", statement: "Direct sharing, no server." }], steps: [{ reasoning: "P2P shares directly between equals.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Share resources directly without a central server" },
        },
        {
          id: "olict-u3-wn-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A company has 8 offices. Each office has a LAN of 10 client computers connected through a WAN. How many client computers does the company have?",
          response: { type: "numeric", parts: [{ label: "computers", answer: 80 }] },
          markscheme: { principles: [{ kind: "principle", name: "Network size", statement: "Offices × clients." }], steps: [
            { reasoning: "$8 \\times 10 = 80$ clients.", marks: 1, markCode: "M" },
            { reasoning: "Correct calculation.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "80 computers" },
        },
        {
          id: "olict-u3-wn-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is NOT a type of network?",
          response: { type: "mcq", choices: [
            { id: "a", text: "WAN" },
            { id: "b", text: "LAN" },
            { id: "c", text: "USB" },
            { id: "d", text: "MAN" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Network types", statement: "LAN, WAN, MAN." }], steps: [{ reasoning: "USB is a connection type, not a network type.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** USB" },
        },
        {
          id: "olict-u3-wn-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Discuss two advantages and one disadvantage of connecting a small business's computers in a network.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Networking", statement: "Benefits and drawbacks." }], steps: [
            { reasoning: "Share files/printers/internet.", marks: 1, markCode: "M" },
            { reasoning: "Easier communication/management.", marks: 1, markCode: "M" },
            { reasoning: "Disadvantage: cost or security risk.", marks: 1, markCode: "M" },
            { reasoning: "Balanced discussion.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sharing saves money and eases management, but networks need security measures and initial setup cost." },
        },
        {
          id: "olict-u3-wn-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Network types — scenario review.",
          parts: [
            { label: "a", prompt: "Define the term 'network'.", marks: 1 },
            { label: "b", prompt: "Distinguish LAN from WAN.", marks: 2 },
            { label: "c", prompt: "Define server and client.", marks: 2 },
            { label: "d", prompt: "Why is the internet called a 'network of networks'?", marks: 2 },
            { label: "e", prompt: "Hospital branches in 15 cities share patient records. What network type and why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Networks", statement: "Types and client-server." },
          ], steps: [
            { part: "a", reasoning: "Connected computers sharing resources.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "LAN: local; WAN: wide.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Server provides; client requests.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct definitions.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "It connects many smaller networks.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Globally linked LANs/WANs.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "WAN.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Large geographical area.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) connected computers (b) local vs wide (c) provides vs requests (d) links many networks (e) WAN — wide area" },
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
            { id: "a", text: "Only one computer can print" },
            { id: "b", text: "All computers can print through it" },
            { id: "c", text: "Printing is free" },
            { id: "d", text: "No paper needed" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Resource sharing", statement: "Shared devices." }], steps: [{ reasoning: "All can use it.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** All can print" },
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
        {
          id: "olict-u3-un-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A shared file server on a network is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Run games" },
            { id: "b", text: "Print photos" },
            { id: "c", text: "Store documents centrally for all users" },
            { id: "d", text: "Connect to the internet only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Resource sharing", statement: "Central file storage." }], steps: [{ reasoning: "File server stores shared documents.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Store documents centrally for all users" },
        },
        {
          id: "olict-u3-un-q6", difficulty: "core", totalMarks: 1,
          stem: "Video conferencing on a network is mainly used for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Storing backups" },
            { id: "b", text: "Scanning documents" },
            { id: "c", text: "Printing reports" },
            { id: "d", text: "Holding meetings without travel" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Communication", statement: "Video calls for meetings." }], steps: [{ reasoning: "Video conferencing enables remote meetings.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Holding meetings without travel" },
        },
        {
          id: "olict-u3-un-q7", difficulty: "foundation", totalMarks: 2,
          stem: "40 computers share one printer on a network. Without the network each computer would need its own printer. How many printers are saved?",
          response: { type: "numeric", parts: [{ label: "printers", answer: 39 }] },
          markscheme: { principles: [{ kind: "principle", name: "Resource sharing", statement: "Shared devices reduce cost." }], steps: [
            { reasoning: "$40 - 1 = 39$ printers saved.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "39 printers" },
        },
        {
          id: "olict-u3-un-q8", difficulty: "core", totalMarks: 2,
          stem: "Give two management benefits of a school network.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Centralised management", statement: "Updates, backups, control." }], steps: [
            { reasoning: "Software updates installed once.", marks: 1, markCode: "M" },
            { reasoning: "Centralised backups and access control.", marks: 1, markCode: "A" },
          ], finalAnswer: "Updates installed once for all machines; central backups and permissions control access." },
        },
        {
          id: "olict-u3-un-q9", difficulty: "core", totalMarks: 2,
          stem: "An administrator installs an update on 1 server instead of on 60 separate PCs. How many installations are saved?",
          response: { type: "numeric", parts: [{ label: "installations", answer: 59 }] },
          markscheme: { principles: [{ kind: "principle", name: "Centralised updates", statement: "Install once vs many." }], steps: [
            { reasoning: "$60 - 1 = 59$ saved.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "59 installations" },
        },
        {
          id: "olict-u3-un-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how centralised backups on a network protect an organisation's data.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Backups", statement: "Central copies prevent loss." }], steps: [
            { reasoning: "Data copied to central server regularly.", marks: 1, markCode: "M" },
            { reasoning: "If a PC fails, data is recovered.", marks: 1, markCode: "M" },
            { reasoning: "Prevents loss from damage/theft.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Central backups mean data survives PC failure, damage or theft and can be restored quickly." },
        },
        {
          id: "olict-u3-un-q11", difficulty: "foundation", totalMarks: 1,
          stem: "Sending messages between staff computers is an example of a network's…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Storage use" },
            { id: "b", text: "Communication use" },
            { id: "c", text: "Input use" },
            { id: "d", text: "Printing use" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Network uses", statement: "Communication category." }], steps: [{ reasoning: "Messaging is communication.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Communication use" },
        },
        {
          id: "olict-u3-un-q12", difficulty: "core", totalMarks: 2,
          stem: "Give two ways a network can save a business money.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cost saving", statement: "Shared resources." }], steps: [
            { reasoning: "One printer/internet shared.", marks: 1, markCode: "M" },
            { reasoning: "Fewer duplicated files/reduced waste.", marks: 1, markCode: "A" },
          ], finalAnswer: "Shared printers and internet connections; central file storage avoids duplication." },
        },
        {
          id: "olict-u3-un-q13", difficulty: "challenge", totalMarks: 2,
          stem: "An office has 45 computers and 3 shared printers. How many computers share each printer on average?",
          response: { type: "numeric", parts: [{ label: "computers", answer: 15 }] },
          markscheme: { principles: [{ kind: "principle", name: "Sharing ratio", statement: "Computers ÷ printers." }], steps: [
            { reasoning: "$45 \\div 3 = 15$ computers per printer.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "15 computers" },
        },
        {
          id: "olict-u3-un-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is a communication use of a network?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Installing updates" },
            { id: "b", text: "Backing up files" },
            { id: "c", text: "Shared calendar for meetings" },
            { id: "d", text: "Printing documents" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Network uses", statement: "Communication category." }], steps: [{ reasoning: "Shared calendar coordinates communication.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Shared calendar for meetings" },
        },
        {
          id: "olict-u3-un-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate whether a small business should network its five computers. Give benefits and one drawback.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Networking", statement: "Benefits and drawbacks." }], steps: [
            { reasoning: "Share files, printer and internet.", marks: 1, markCode: "M" },
            { reasoning: "Easier communication between staff.", marks: 1, markCode: "M" },
            { reasoning: "Drawback: setup cost or security risk.", marks: 1, markCode: "M" },
            { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
          ], finalAnswer: "Networking saves money and eases communication, but needs setup cost and security measures." },
        },
        {
          id: "olict-u3-un-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Network uses — scenario review.",
          parts: [
            { label: "a", prompt: "Give two resources computers can share on a network.", marks: 2 },
            { label: "b", prompt: "Give two communication uses of a network.", marks: 2 },
            { label: "c", prompt: "Give one management benefit of a network.", marks: 2 },
            { label: "d", prompt: "Why share a single internet connection?", marks: 1 },
            { label: "e", prompt: "Explain one security benefit of centralised backups.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Network uses", statement: "Sharing, communication, management." },
          ], steps: [
            { part: "a", reasoning: "Printer/files.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Internet/scanner.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Email.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Video calls.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Updates installed once.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Centralised control.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Cheaper and easier to manage.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Data recovered if PC fails.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Prevents permanent data loss.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) printer+files (b) email+calls (c) central updates (d) cost+control (e) recovery after failure" },
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
