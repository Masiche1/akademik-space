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
            { id: "a", text: "A storage device" },
            { id: "b", text: "A type of cable" },
            { id: "c", text: "A computer brand" },
            { id: "d", text: "A set of rules for communication" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Protocol", statement: "Communication rules." }], steps: [{ reasoning: "Protocol = rules.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Communication rules" },
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
        {
          id: "olict-u3-pr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In TCP/IP, the role of TCP is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Assign IP addresses" },
            { id: "b", text: "Encrypt web pages" },
            { id: "c", text: "Break data into packets and ensure correct delivery" },
            { id: "d", text: "Store files" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "TCP", statement: "Reliable packet delivery." }], steps: [{ reasoning: "TCP handles packets and ordering.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Break data into packets and ensure correct delivery" },
        },
        {
          id: "olict-u3-pr-q6", difficulty: "core", totalMarks: 1,
          stem: "An IP address is best compared to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A software licence" },
            { id: "b", text: "A type of cable" },
            { id: "c", text: "A phone number for a device" },
            { id: "d", text: "A computer's colour" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "IP address", statement: "Unique device identifier." }], steps: [{ reasoning: "IP address identifies devices like a phone number.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** A phone number for a device" },
        },
        {
          id: "olict-u3-pr-q7", difficulty: "foundation", totalMarks: 2,
          stem: "IPv4 addresses are 32 bits long. How many bytes is that?",
          response: { type: "numeric", parts: [{ label: "bytes", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Address size", statement: "8 bits per byte." }], steps: [
            { reasoning: "$32 \\div 8 = 4$ bytes.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 bytes" },
        },
        {
          id: "olict-u3-pr-q8", difficulty: "core", totalMarks: 1,
          stem: "A packet is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An email attachment" },
            { id: "b", text: "A type of router" },
            { id: "c", text: "A small chunk of data sent across a network" },
            { id: "d", text: "A cable connector" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Packet", statement: "Data chunk." }], steps: [{ reasoning: "Packets are small data chunks.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** A small chunk of data sent across a network" },
        },
        {
          id: "olict-u3-pr-q9", difficulty: "core", totalMarks: 2,
          stem: "A file of 3000 KB is split into packets of 500 KB each. How many packets are needed?",
          response: { type: "numeric", parts: [{ label: "packets", answer: 6 }] },
          markscheme: { principles: [{ kind: "principle", name: "Packet splitting", statement: "Total ÷ packet size." }], steps: [
            { reasoning: "$3000 \\div 500 = 6$ packets.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "6 packets" },
        },
        {
          id: "olict-u3-pr-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one advantage of packet switching over sending data as one continuous stream.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Packet switching", statement: "Flexible routing." }], steps: [
            { reasoning: "Packets take different routes.", marks: 1, markCode: "M" },
            { reasoning: "If one route fails others still arrive.", marks: 1, markCode: "M" },
            { reasoning: "Efficient use of network capacity.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Packets can reroute around failures and share network capacity efficiently." },
        },
        {
          id: "olict-u3-pr-q11", difficulty: "foundation", totalMarks: 1,
          stem: "IPv6 is needed mainly because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "IPv4 is too fast" },
            { id: "b", text: "IPv6 uses less power" },
            { id: "c", text: "IPv4 cannot route packets" },
            { id: "d", text: "IPv4 addresses are running out" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "IPv6", statement: "More addresses." }], steps: [{ reasoning: "IPv4's 32-bit space is nearly exhausted.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** IPv4 addresses are running out" },
        },
        {
          id: "olict-u3-pr-q12", difficulty: "core", totalMarks: 2,
          stem: "Distinguish the roles of IP and TCP in the TCP/IP suite.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "IP vs TCP", statement: "Addressing vs delivery." }], steps: [
            { reasoning: "IP addresses and routes packets.", marks: 1, markCode: "M" },
            { reasoning: "TCP ensures packets arrive correctly and in order.", marks: 1, markCode: "A" },
          ], finalAnswer: "IP handles addressing/routing; TCP handles reliable, ordered delivery." },
        },
        {
          id: "olict-u3-pr-q13", difficulty: "challenge", totalMarks: 3,
          stem: "An IPv6 address is 128 bits long and an IPv4 address is 32 bits long. How many bits longer is an IPv6 address?",
          response: { type: "numeric", parts: [{ label: "bits", answer: 96 }] },
          markscheme: { principles: [{ kind: "principle", name: "Address size", statement: "Compare bit lengths." }], steps: [
            { reasoning: "$128 - 32 = 96$ bits.", marks: 1, markCode: "M" },
            { reasoning: "Correct calculation.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "96 bits" },
        },
        {
          id: "olict-u3-pr-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Private IP addresses such as 192.168.1.1 are used…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Inside local networks" },
            { id: "b", text: "Only on the internet backbone" },
            { id: "c", text: "For email only" },
            { id: "d", text: "As passwords" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Private IP", statement: "LAN addressing." }], steps: [{ reasoning: "Private ranges are for LANs.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Inside local networks" },
        },
        {
          id: "olict-u3-pr-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why two devices on the same network must not share the same IP address.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "IP uniqueness", statement: "Unique identification." }], steps: [
            { reasoning: "IP address identifies the destination.", marks: 1, markCode: "M" },
            { reasoning: "Duplicate addresses cause confusion.", marks: 1, markCode: "M" },
            { reasoning: "Data may reach the wrong device or fail.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Each device needs a unique address or data cannot be routed to the correct destination." },
        },
        {
          id: "olict-u3-pr-q16", difficulty: "challenge", totalMarks: 9,
          stem: "TCP/IP — extended review.",
          parts: [
            { label: "a", prompt: "Define the term 'protocol'.", marks: 1 },
            { label: "b", prompt: "Explain how packet switching works.", marks: 2 },
            { label: "c", prompt: "What does TCP do?", marks: 2 },
            { label: "d", prompt: "What is the purpose of an IP address?", marks: 2 },
            { label: "e", prompt: "Give one reason IPv6 is needed over IPv4.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Protocols", statement: "Rules, TCP/IP, packets, IPv6." },
          ], steps: [
            { part: "a", reasoning: "Rules for communication.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Split data into packets.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Route independently, reassemble.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Breaks data into packets.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Ensures correct ordered delivery.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Uniquely identifies a device.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "So data reaches the right place.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "IPv4 addresses running out.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "IPv6 has far more addresses.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) comms rules (b) split/route/reassemble (c) packets+order (d) unique ID (e) IPv4 exhausted" },
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
            { id: "a", text: "Encrypts the data" },
            { id: "b", text: "Only works offline" },
            { id: "c", text: "Uses no protocol" },
            { id: "d", text: "Is faster" },
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
        {
          id: "olict-u3-wp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which protocol is used to send email?",
          response: { type: "mcq", choices: [
            { id: "a", text: "SMTP" },
            { id: "b", text: "IMAP" },
            { id: "c", text: "HTTP" },
            { id: "d", text: "FTP" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "SMTP", statement: "Sends email." }], steps: [{ reasoning: "SMTP sends email.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** SMTP" },
        },
        {
          id: "olict-u3-wp-q6", difficulty: "core", totalMarks: 2,
          stem: "A web page is 240 KB. How many KB is the total size of 5 identical pages?",
          response: { type: "numeric", parts: [{ label: "KB", answer: 1200, unit: "KB" }] },
          markscheme: { principles: [{ kind: "principle", name: "Page size", statement: "Size × count." }], steps: [
            { reasoning: "240 KB × 5 pages.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 1200 KB.", marks: 1, markCode: "A" },
          ], finalAnswer: "1200 KB" },
        },
        {
          id: "olict-u3-wp-q7", difficulty: "core", totalMarks: 1,
          stem: "Which email protocol keeps messages on the server so they can be read on multiple devices?",
          response: { type: "mcq", choices: [
            { id: "a", text: "SMTP" },
            { id: "b", text: "IMAP" },
            { id: "c", text: "HTTP" },
            { id: "d", text: "FTP" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "IMAP", statement: "Server-side mail." }], steps: [{ reasoning: "IMAP keeps mail on server.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** IMAP" },
        },
        {
          id: "olict-u3-wp-q8", difficulty: "foundation", totalMarks: 1,
          stem: "FTP is mainly used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Transfer files between computers" },
            { id: "b", text: "Send email" },
            { id: "c", text: "Encrypt passwords" },
            { id: "d", text: "Display web pages" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "FTP", statement: "File transfer." }], steps: [{ reasoning: "FTP transfers files.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Transfer files" },
        },
        {
          id: "olict-u3-wp-q9", difficulty: "foundation", totalMarks: 2,
          stem: "How many email protocols are named in the lesson: SMTP, POP3, IMAP?",
          response: { type: "numeric", parts: [{ label: "protocols", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Email protocols", statement: "Count valid protocols." }], steps: [
            { reasoning: "SMTP, POP3 and IMAP are all email protocols.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 protocols" },
        },
        {
          id: "olict-u3-wp-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a bank's website must use HTTPS rather than HTTP.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "HTTPS security", statement: "Encryption protects data." }], steps: [
            { reasoning: "HTTPS encrypts data sent between browser and server.", marks: 1, markCode: "M" },
            { reasoning: "Passwords and account details cannot be read by eavesdroppers.", marks: 1, markCode: "M" },
            { reasoning: "HTTP would send sensitive data unprotected.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation of the security need.", marks: 1, markCode: "A" },
          ], finalAnswer: "HTTPS encrypts login and payment data so it cannot be intercepted; HTTP leaves it exposed." },
        },
        {
          id: "olict-u3-wp-q11", difficulty: "core", totalMarks: 1,
          stem: "Which protocol transfers web pages between a server and a browser?",
          response: { type: "mcq", choices: [
            { id: "a", text: "IMAP" },
            { id: "b", text: "FTP" },
            { id: "c", text: "SMTP" },
            { id: "d", text: "HTTP" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "HTTP", statement: "Transfers web pages." }], steps: [{ reasoning: "HTTP transfers pages.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** HTTP" },
        },
        {
          id: "olict-u3-wp-q12", difficulty: "core", totalMarks: 2,
          stem: "A mail server sends 8 emails per minute for 30 minutes. How many emails does it send in total?",
          response: { type: "numeric", parts: [{ label: "emails", answer: 240 }] },
          markscheme: { principles: [{ kind: "principle", name: "Email volume", statement: "Rate × time." }], steps: [
            { reasoning: "8 emails/min × 30 minutes = 240.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 240 emails.", marks: 1, markCode: "A" },
          ], finalAnswer: "240 emails" },
        },
        {
          id: "olict-u3-wp-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A company uses FTP to update its website files and HTTPS for its online shop. Explain the role of each protocol.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Protocol roles", statement: "FTP vs HTTPS." }], steps: [
            { reasoning: "FTP transfers files between computers.", marks: 1, markCode: "M" },
            { reasoning: "Used here to upload website files to the server.", marks: 1, markCode: "M" },
            { reasoning: "HTTPS transfers web pages with encryption.", marks: 1, markCode: "M" },
            { reasoning: "Secure for customer logins and payments.", marks: 1, markCode: "A" },
          ], finalAnswer: "FTP uploads files to the server; HTTPS securely serves shop pages to customers." },
        },
        {
          id: "olict-u3-wp-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Which protocol provides secure (encrypted) web browsing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "POP3" },
            { id: "b", text: "SMTP" },
            { id: "c", text: "HTTPS" },
            { id: "d", text: "FTP" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "HTTPS", statement: "Encrypted web." }], steps: [{ reasoning: "HTTPS is encrypted HTTP.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** HTTPS" },
        },
        {
          id: "olict-u3-wp-q15", difficulty: "foundation", totalMarks: 2,
          stem: "A mail server receives 4 batches of 75 emails each. How many emails does it receive?",
          response: { type: "numeric", parts: [{ label: "emails", answer: 300 }] },
          markscheme: { principles: [{ kind: "principle", name: "Email volume", statement: "Batches × size." }], steps: [
            { reasoning: "4 × 75 = 300.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 300 emails.", marks: 1, markCode: "A" },
          ], finalAnswer: "300 emails" },
        },
        {
          id: "olict-u3-wp-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Describe how a user sends an email and then reads it on their phone, naming the protocols involved.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Email flow", statement: "SMTP + retrieval." }], steps: [
            { reasoning: "SMTP sends the email to the mail server.", marks: 1, markCode: "M" },
            { reasoning: "The message is stored until retrieved.", marks: 1, markCode: "M" },
            { reasoning: "POP3 or IMAP retrieves the email to the phone.", marks: 1, markCode: "M" },
            { reasoning: "IMAP keeps a server copy for other devices.", marks: 1, markCode: "A" },
          ], finalAnswer: "SMTP sends; POP3/IMAP retrieves to the device, with IMAP keeping server copies." },
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
