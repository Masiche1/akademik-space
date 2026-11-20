import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "olict-u3-lesson-3-3",
  code: "3-3",
  title: "Network Protocols",
  goal: "I CAN explain protocols and describe TCP/IP, HTTP and common protocols.",
  standards: ["7014 4.3"],
  vocabulary: [
    { term: "Protocol", definition: "Set of rules governing how devices communicate." },
    { term: "TCP/IP", definition: "Suite of protocols underlying the internet — transmission and addressing." },
    { term: "IP address", definition: "Unique numerical address identifying a device on a network." },
    { term: "HTTP/HTTPS", definition: "Protocol for transferring web pages; HTTPS adds encryption." },
    { term: "FTP", definition: "File Transfer Protocol — moving files between computers." },
    { term: "Packet", definition: "Small chunk of data sent across a network." },
    { term: "Packet switching", definition: "Data split into packets routed independently and reassembled." },
  ],
  concepts: [
    {
      id: "olict-u3-protocols",
      title: "Protocols and TCP/IP",
      skill: "Explain protocols, IP addresses and packet switching.",
      lesson: {
        sections: [
          { heading: "What is a protocol", body: "Rules both devices follow for communication — like a language. Without agreed protocols, computers couldn't understand each other." },
          { heading: "TCP/IP", body: "The internet's core protocol suite:\n- **IP**: addresses devices (e.g. 192.168.1.1).\n- **TCP**: breaks data into packets, ensures they arrive correctly and in order.\n- **Packet switching**: packets take different routes and reassemble at destination." },
          { heading: "IP addresses", body: "Every device needs a unique IP address — like a phone number. **IPv4** = 32-bit (running out); **IPv6** = 128-bit (vast supply). Private addresses (192.168.x.x) used inside LANs." },
        ],
        keyFormulas: [
          { name: "TCP/IP", statement: "IP addresses + TCP reliable delivery" },
        ],
        workedExample: {
          problem: "Why does sending a file over the internet use packet switching?",
          solution: "Data splits into packets taking different routes — if one path fails, others still arrive; efficient use of network capacity.",
        },
      },
      questions: [
        {
          id: "olict-u3-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A protocol is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A set of rules for communication" }, { id: "b", text: "A type of cable" }, { id: "c", text: "A computer brand" }, { id: "d", text: "A storage device" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Protocol", statement: "Communication rules." }], steps: [{ reasoning: "Protocol = rules.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Communication rules" },
        },
        {
          id: "olict-u3-pr-q2", difficulty: "core", totalMarks: 2,
          stem: "What does an IP address do?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "IP address", statement: "Unique device identifier." }], steps: [
            { reasoning: "Uniquely identifies a device on a network.", marks: 1, markCode: "M" },
            { reasoning: "Like a phone number for data.", marks: 1, markCode: "A" },
          ], finalAnswer: "Uniquely identifies a device on a network so data reaches the right place." },
        },
        {
          id: "olict-u3-pr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how packet switching works.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Packet switching", statement: "Split, route, reassemble." }], steps: [
            { reasoning: "Data split into packets.", marks: 1, markCode: "M" },
            { reasoning: "Packets take different routes.", marks: 1, markCode: "M" },
            { reasoning: "Reassembled at destination.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Data splits into packets routed independently, then reassembled at the destination." },
        },
        {
          id: "olict-u3-pr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Protocols review.",
          parts: [
            { label: "a", prompt: "Define protocol.", marks: 2 },
            { label: "b", prompt: "What does IP stand for in TCP/IP?", marks: 1 },
            { label: "c", prompt: "What does TCP do?", marks: 2 },
            { label: "d", prompt: "Explain packet switching in two sentences.", marks: 2 },
            { label: "e", prompt: "Why is IPv6 needed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Protocols", statement: "Rules, TCP/IP, packets, IPv6." },
          ], steps: [
            { part: "a", reasoning: "Rules for communication.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Internet Protocol.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Breaks data into packets.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Ensures correct ordered delivery.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Split data into packets.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Route independently, reassemble.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "IPv4 addresses running out.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "IPv6 has vastly more addresses.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) comms rules (b) Internet Protocol (c) packets+order (d) split/route/reassemble (e) IPv4 exhausted" },
        },
      ],
    },
    {
      id: "olict-u3-webprotos",
      title: "Web protocols",
      skill: "Describe HTTP, HTTPS, FTP and email protocols.",
      lesson: {
        sections: [
          { heading: "HTTP/HTTPS", body: "- **HTTP**: transfers web pages between server and browser.\n- **HTTPS**: HTTP + encryption (TLS) — secure version for logins, payments. The 'S' = secure." },
          { heading: "FTP", body: "**File Transfer Protocol**: uploads/downloads files between computers — used for website maintenance and file sharing." },
          { heading: "Email protocols", body: "- **SMTP**: sends email.\n- **POP3/IMAP**: retrieves email (IMAP keeps copies on server for multi-device access)." },
        ],
        keyFormulas: [
          { name: "HTTPS", statement: "HTTP + encryption for security" },
        ],
        workedExample: {
          problem: "Why should online banking use HTTPS not HTTP?",
          solution: "HTTPS encrypts data — passwords and account details can't be read by eavesdroppers.",
        },
      },
      questions: [
        {
          id: "olict-u3-wp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "HTTPS differs from HTTP because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Encrypts the data" }, { id: "b", text: "Is faster" }, { id: "c", text: "Uses no protocol" }, { id: "d", text: "Only works offline" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "HTTPS", statement: "Encrypted HTTP." }], steps: [{ reasoning: "HTTPS = encryption.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Encrypts data" },
        },
        {
          id: "olict-u3-wp-q2", difficulty: "core", totalMarks: 2,
          stem: "What is FTP used for?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "FTP", statement: "File transfer." }], steps: [
            { reasoning: "Transfers files between computers.", marks: 1, markCode: "M" },
            { reasoning: "E.g. uploading website files.", marks: 1, markCode: "A" },
          ], finalAnswer: "File Transfer Protocol — uploads/downloads files between computers." },
        },
        {
          id: "olict-u3-wp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why HTTPS is essential for online shopping.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "HTTPS", statement: "Protects sensitive data." }], steps: [
            { reasoning: "Encrypts card details/passwords.", marks: 1, markCode: "M" },
            { reasoning: "Prevents eavesdropping/theft.", marks: 1, markCode: "M" },
            { reasoning: "Builds customer trust.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "HTTPS encrypts payment details and passwords, preventing interception during transactions." },
        },
        {
          id: "olict-u3-wp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Web protocols review.",
          parts: [
            { label: "a", prompt: "What does HTTP do?", marks: 2 },
            { label: "b", prompt: "What does the 'S' in HTTPS mean?", marks: 1 },
            { label: "c", prompt: "What is FTP?", marks: 2 },
            { label: "d", prompt: "Which protocol sends email?", marks: 1 },
            { label: "e", prompt: "Why is encryption important for logins?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Web protocols", statement: "HTTP, HTTPS, FTP, email." },
          ], steps: [
            { part: "a", reasoning: "Transfers web pages.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Secure/encrypted.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "File transfer protocol.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "SMTP.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Protects passwords from interception.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Prevents identity theft.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) web pages (b) secure (c) file transfer (d) SMTP (e) protects credentials" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u3-3-3-notes", title: "Protocols — notes", summary: "TCP/IP, IP addresses, packet switching and web protocols.",
      sections: [
        { heading: "TCP/IP", body: "IP addresses identify devices; TCP splits data into packets for reliable delivery." },
        { heading: "Web", body: "HTTP transfers pages; HTTPS encrypts; FTP transfers files; SMTP sends email." },
      ] },
  ],
};
