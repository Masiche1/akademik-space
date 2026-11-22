import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "eiascs-u5-lesson-5-1",
  code: "5-1",
  title: "Networks and Communication",
  goal: "I CAN explain networks, protocols and communication.",
  standards: ["Edexcel IAS Computer Science 9CP01 Unit 5 — Advanced Concepts"],
  vocabulary: [
    { term: "Network", definition: "Connected computers sharing resources." },
    { term: "LAN", definition: "Local Area Network — small area." },
    { term: "WAN", definition: "Wide Area Network — large area." },
    { term: "Protocol", definition: "Rules for communication." },
    {
      term: "IP address",
      definition: "Unique identifier for device on network.",
    },
    { term: "Packet", definition: "Data unit sent over network." },
  ],
  concepts: [
    {
      id: "eiascs-u5-networks",
      title: "Network Types and Topologies",
      skill: "Describe networks, types and topologies.",
      lesson: {
        sections: [
          {
            heading: "Network types",
            body: "**LAN**: local — office, home, school — fast, private. **WAN**: wide — internet, company branches — slower, public. **MAN**: metropolitan — city area. **PAN**: personal — devices connected.\n\n**Topology**: physical layout — star (central hub), bus (single cable), ring (circle), mesh (all connected).",
          },
          {
            heading: "Network hardware",
            body: "**Router**: connects networks — internet gateway. **Switch**: connects devices within LAN. **Modem**: converts signals — digital↔analog. **Access point**: wireless connection. **NIC**: network interface card — device connection.\n\n**Benefits**: share resources, communicate, centralised management.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Network in single building. Type?",
          solution: "LAN.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-net-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a LAN?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metropolitan area" },
              { id: "b", text: "Wide area" },
              { id: "c", text: "Local area" },
              { id: "d", text: "Personal area" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "LAN", statement: "Local area." },
            ],
            steps: [{ reasoning: "LAN = local.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(c)** Local",
            commonErrors: ["WAN confused."],
          },
        },
        {
          id: "eiascs-u5-net-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two network topologies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Topologies",
                statement: "Star, bus, ring, mesh.",
              },
            ],
            steps: [
              {
                reasoning: "Star — central hub connects all.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bus — single cable connects all.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ring — circle connection.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Star, bus, ring, mesh.",
            commonErrors: ["Only one.", "Wrong topology."],
          },
        },
        {
          id: "eiascs-u5-net-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain difference between LAN and WAN.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "LAN vs WAN",
                statement: "Local vs wide.",
              },
            ],
            steps: [
              {
                reasoning: "LAN: small area — office, home; fast, private.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "WAN: large area — internet, branches; slower, public.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "LAN uses owned infrastructure; WAN uses public.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: school LAN vs internet WAN.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Local fast private vs wide slow public.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiascs-u5-net-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company has offices in 3 cities.",
          parts: [
            { label: "a", prompt: "Suggest network type.", marks: 4 },
            { label: "b", prompt: "Explain benefits.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Network selection",
                statement: "Need + geography.",
              },
            ],
            steps: [
              {
                reasoning: "(a) WAN — connects distant offices.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Each office has LAN, WAN connects them.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Share resources — files, printers, data.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Centralised management — consistent policies.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) WAN+LAN (b) share+manage",
            commonErrors: ["LAN only.", "No benefits."],
          },
        },
      ],
    },
    {
      id: "eiascs-u5-protocols",
      title: "Network Protocols and Data Transmission",
      skill: "Explain protocols and how data is transmitted.",
      lesson: {
        sections: [
          {
            heading: "Protocols",
            body: "**TCP/IP**: internet protocol suite — TCP (reliable) + IP (addressing). **HTTP/HTTPS**: web — HTTPS adds encryption. **FTP**: file transfer. **SMTP**: email. **DNS**: domain name resolution.\n\n**Protocol purpose**: standard rules — different devices can communicate.",
          },
          {
            heading: "Data transmission",
            body: "**Packet switching**: data split into packets — sent separately, reassembled. **Circuit switching**: dedicated path — phone calls. **Bandwidth**: data capacity — bits per second. **Latency**: delay — time for data to travel.\n\n**Packet vs circuit**: packets more efficient — share bandwidth; circuit guaranteed but wasteful.",
          },
        ],
        keyFormulas: [
          { name: "TCP/IP", statement: "Internet protocol suite" },
          { name: "HTTPS", statement: "Encrypted HTTP" },
        ],
        workedExample: {
          problem: "Web page loads securely. Protocol?",
          solution: "HTTPS.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-prot-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a network protocol?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rules for communication" },
              { id: "b", text: "Computer hardware" },
              { id: "c", text: "Data format" },
              { id: "d", text: "Programming language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protocol",
                statement: "Communication rules.",
              },
            ],
            steps: [
              { reasoning: "Protocol = rules.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Rules",
            commonErrors: ["Hardware confused."],
          },
        },
        {
          id: "eiascs-u5-prot-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two network protocols.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protocols",
                statement: "TCP/IP, HTTP, FTP.",
              },
            ],
            steps: [
              {
                reasoning: "TCP/IP — internet communication.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "HTTP/HTTPS — web pages.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "SMTP — email.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "TCP/IP, HTTP, FTP, SMTP, DNS.",
            commonErrors: ["Only one.", "Wrong protocol."],
          },
        },
        {
          id: "eiascs-u5-prot-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain packet switching.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Packet switching",
                statement: "Split + reassemble.",
              },
            ],
            steps: [
              {
                reasoning: "Data split into packets — small chunks.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Packets sent separately — may take different routes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reassembled at destination — order restored.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Efficient — shares bandwidth, resilient.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Split+send+reassemble.",
            commonErrors: ["Circuit confused.", "No process."],
          },
        },
        {
          id: "eiascs-u5-prot-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Video call quality poor — lag and buffering.",
          parts: [
            { label: "a", prompt: "Identify likely causes.", marks: 4 },
            { label: "b", prompt: "Suggest solutions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Network troubleshooting",
                statement: "Diagnose + fix.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Low bandwidth — insufficient capacity.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) High latency — delay in transmission.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Packet loss — data dropped.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Congestion — too many users.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Upgrade bandwidth — faster connection.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Reduce quality — lower resolution.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) bandwidth+latency+loss+congestion (b) upgrade+reduce",
            commonErrors: ["No causes.", "No solutions."],
          },
        },
      ],
    },
    {
      id: "eiascs-u5-security",
      title: "Network Security and Cybersecurity",
      skill: "Explain security threats and protection methods.",
      lesson: {
        sections: [
          {
            heading: "Threats",
            body: "**Malware**: viruses, worms, trojans — malicious software. **Phishing**: fake emails/messages — steal credentials. **Hacking**: unauthorised access. **DDoS**: overwhelm servers with traffic. **Ransomware**: encrypt files, demand payment.\n\n**Vulnerabilities**: weak passwords, unpatched software, unsecured networks.",
          },
          {
            heading: "Protection",
            body: "**Firewall**: filter traffic — block unauthorised access. **Antivirus**: detect/remove malware. **Encryption**: protect data in transit/storage. **Authentication**: verify identity — passwords, 2FA. **Updates**: patch vulnerabilities.\n\n**Best practices**: strong passwords, regular updates, backups, user education.",
          },
        ],
        keyFormulas: [
          { name: "Firewall", statement: "Traffic filter" },
          { name: "2FA", statement: "Two-factor authentication" },
        ],
        workedExample: {
          problem: "Fake email asking for password. Threat?",
          solution: "Phishing.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-sec-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is phishing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fake messages to steal info" },
              { id: "b", text: "DDoS attack" },
              { id: "c", text: "Firewall" },
              { id: "d", text: "Virus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phishing",
                statement: "Fake messages.",
              },
            ],
            steps: [
              {
                reasoning: "Phishing = fake messages.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Fake messages",
            commonErrors: ["Virus confused."],
          },
        },
        {
          id: "eiascs-u5-sec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two security threats.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Threats",
                statement: "Malware, phishing, hacking.",
              },
            ],
            steps: [
              {
                reasoning: "Malware — viruses, trojans.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Phishing — fake messages.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "DDoS — overwhelm servers.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Malware, phishing, hacking, DDoS, ransomware.",
            commonErrors: ["Only one.", "Wrong threat."],
          },
        },
        {
          id: "eiascs-u5-sec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how firewalls protect networks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Firewall",
                statement: "Traffic filter.",
              },
            ],
            steps: [
              {
                reasoning: "Monitors incoming/outgoing traffic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Blocks unauthorised access — rules based.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Allows legitimate traffic — permits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prevents attacks — malware, hackers.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Filter+block+permit+prevent.",
            commonErrors: ["No process.", "One function."],
          },
        },
        {
          id: "eiascs-u5-sec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company wants to improve cybersecurity.",
          parts: [
            { label: "a", prompt: "Identify vulnerabilities.", marks: 4 },
            { label: "b", prompt: "Suggest protections.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Security planning",
                statement: "Vulnerabilities + protections.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Weak passwords — easy to guess.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Unpatched software — known vulnerabilities.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Unsecured network — no encryption.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) No backups — data loss risk.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Strong passwords + 2FA — better auth.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Firewall + antivirus + updates — protection.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) passwords+patches+network+backups (b) 2FA+firewall+updates",
            commonErrors: ["No vulnerabilities.", "No protections."],
          },
        },
      ],
    },
    {
      id: "eiascs-u5-databases",
      title: "Databases and Data Management",
      skill: "Explain databases, tables and queries.",
      lesson: {
        sections: [
          {
            heading: "Database basics",
            body: "**Database**: organised collection of data — tables, records, fields. **Table**: rows (records) and columns (fields). **Primary key**: unique identifier for record. **Foreign key**: links tables together.\n\n**Relational database**: tables linked by keys — SQL queries.",
          },
          {
            heading: "SQL and queries",
            body: "**SELECT**: retrieve data — `SELECT name FROM students`. **WHERE**: filter — `WHERE age > 18`. **INSERT**: add records. **UPDATE**: modify. **DELETE**: remove.\n\n**Benefits**: organised, searchable, secure, consistent.",
          },
        ],
        keyFormulas: [
          { name: "Primary key", statement: "Unique record ID" },
          { name: "Foreign key", statement: "Links tables" },
        ],
        workedExample: {
          problem: "Table with student names and grades. Structure?",
          solution: "Rows=students, columns=name+grade.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-db-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a database?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organised collection of data" },
              { id: "b", text: "Computer hardware" },
              { id: "c", text: "Programming language" },
              { id: "d", text: "Single file" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Database",
                statement: "Organised data.",
              },
            ],
            steps: [
              {
                reasoning: "Database = organised data.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Organised data",
            commonErrors: ["File confused."],
          },
        },
        {
          id: "eiascs-u5-db-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two SQL commands.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SQL commands",
                statement: "SELECT, INSERT, UPDATE.",
              },
            ],
            steps: [
              {
                reasoning: "SELECT — retrieve data.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "INSERT — add records.", marks: 1, markCode: "AO2" },
              {
                reasoning: "UPDATE — modify records.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "SELECT, INSERT, UPDATE, DELETE.",
            commonErrors: ["Only one.", "Wrong command."],
          },
        },
        {
          id: "eiascs-u5-db-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain primary vs foreign key.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Primary vs foreign",
                statement: "Unique vs link.",
              },
            ],
            steps: [
              {
                reasoning: "Primary key — unique ID for record in table.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Foreign key — references primary key in another table.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Links tables — relationships.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: student_id in students and grades tables.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Unique vs link tables.",
            commonErrors: ["Same.", "No example."],
          },
        },
        {
          id: "eiascs-u5-db-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design database for school library.",
          parts: [
            { label: "a", prompt: "Identify tables.", marks: 4 },
            { label: "b", prompt: "Explain relationships.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Database design",
                statement: "Tables + relationships.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Books, Members, Loans tables.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Each has primary key + relevant fields.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Loans links Books and Members — foreign keys.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) One member can borrow many books — one-to-many.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) Books+Members+Loans (b) Loans links",
            commonErrors: ["One table.", "No relationships."],
          },
        },
      ],
    },
    {
      id: "eiascs-u5-emerging",
      title: "Emerging Technologies and Ethics",
      skill: "Discuss emerging technologies and ethical considerations.",
      lesson: {
        sections: [
          {
            heading: "Emerging tech",
            body: "**AI/ML**: machine learning, neural networks — pattern recognition. **IoT**: internet-connected devices — smart homes, wearables. **Blockchain**: distributed ledger — cryptocurrency, secure transactions. **AR/VR**: augmented/virtual reality — immersive experiences.\n\n**Impact**: automation, new jobs, privacy concerns, digital divide.",
          },
          {
            heading: "Ethics",
            body: "**Privacy**: data collection, surveillance — consent needed. **Bias**: AI can perpetuate biases — training data issues. **Accountability**: who is responsible for AI decisions? **Digital divide**: access inequality — technology gap.\n\n**Ethical design**: transparency, fairness, accountability, user control.",
          },
        ],
        keyFormulas: [
          { name: "AI/ML", statement: "Pattern recognition + learning" },
          { name: "IoT", statement: "Connected devices" },
          { name: "Blockchain", statement: "Distributed ledger" },
        ],
        workedExample: {
          problem: "Smart thermostat connected to internet. Technology?",
          solution: "IoT.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-eth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is IoT?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Internet-connected devices" },
              { id: "b", text: "Artificial intelligence" },
              { id: "c", text: "Blockchain" },
              { id: "d", text: "Virtual reality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IoT",
                statement: "Connected devices.",
              },
            ],
            steps: [
              {
                reasoning: "IoT = connected devices.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Connected devices",
            commonErrors: ["AI confused."],
          },
        },
        {
          id: "eiascs-u5-eth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ethical concerns with AI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AI ethics",
                statement: "Bias + privacy.",
              },
            ],
            steps: [
              {
                reasoning: "Bias — AI can discriminate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Privacy — data collection concerns.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accountability — who is responsible?",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Bias, privacy, accountability.",
            commonErrors: ["Only one.", "Wrong concern."],
          },
        },
        {
          id: "eiascs-u5-eth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain digital divide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digital divide",
                statement: "Access inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Not everyone has equal access to technology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gap between rich/poor, urban/rural.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Affects education, employment, opportunities.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Solution — improve access, digital literacy.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Access inequality + impact.",
            commonErrors: ["No inequality.", "No impact."],
          },
        },
        {
          id: "eiascs-u5-eth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company wants to implement AI hiring system.",
          parts: [
            { label: "a", prompt: "Identify ethical concerns.", marks: 4 },
            { label: "b", prompt: "Suggest safeguards.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AI ethics",
                statement: "Concerns + safeguards.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Bias — AI may discriminate against groups.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Privacy — candidate data collection.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Transparency — how decisions made.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Accountability — who is responsible?",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Audit AI — check for bias.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Human oversight — AI assists, humans decide.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) bias+privacy+transparency+accountability (b) audit+oversight",
            commonErrors: ["No concerns.", "No safeguards."],
          },
        },
      ],
    },
    {
      id: "eiascs-u5-summary",
      title: "Advanced Concepts Summary",
      skill: "Summarise advanced computer science concepts.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Networks**: LAN/WAN, protocols, packet switching. **Security**: threats, firewalls, encryption. **Databases**: tables, keys, SQL. **Emerging tech**: AI, IoT, blockchain, AR/VR. **Ethics**: privacy, bias, accountability, digital divide.\n\n**Key ideas**: all connected, all data, all have consequences.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: design networks, databases, security plans. **Evaluate**: technologies, ethics, trade-offs. **Analyse**: threats, vulnerabilities, impacts.\n\n**Key concepts**: TCP/IP, encryption, primary/foreign keys, SQL, machine learning, IoT.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "All devices connected to internet. Technology?",
          solution: "IoT.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-sum-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of encryption?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compress data" },
              { id: "b", text: "Speed up data" },
              { id: "c", text: "Organise data" },
              { id: "d", text: "Protect data from unauthorised access" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Encryption purpose",
                statement: "Security.",
              },
            ],
            steps: [
              {
                reasoning: "Encryption = security.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Security",
            commonErrors: ["Speed confused."],
          },
        },
        {
          id: "eiascs-u5-sum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two network protocols.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protocols",
                statement: "TCP/IP, HTTP.",
              },
            ],
            steps: [
              { reasoning: "TCP/IP — internet.", marks: 1, markCode: "AO2" },
              { reasoning: "HTTP/HTTPS — web.", marks: 1, markCode: "AO2" },
              { reasoning: "SMTP — email.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "TCP/IP, HTTP, SMTP, FTP, DNS.",
            commonErrors: ["Only one.", "Wrong protocol."],
          },
        },
        {
          id: "eiascs-u5-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why cybersecurity is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cybersecurity",
                statement: "Protect assets.",
              },
            ],
            steps: [
              {
                reasoning: "Protect data — personal, financial.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prevent attacks — malware, hacking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Maintain trust — users rely on security.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Legal requirements — data protection laws.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Protect+prevent+trust+legal.",
            commonErrors: ["Not important.", "One reason."],
          },
        },
        {
          id: "eiascs-u5-sum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate blockchain for voting system.",
          parts: [
            { label: "a", prompt: "Identify advantages.", marks: 4 },
            { label: "b", prompt: "Identify limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology evaluation",
                statement: "Advantages + limitations.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Transparency — all transactions visible.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Security — tamper-proof ledger.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Scalability — slow for large scale.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Complexity — hard to understand, implement.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) transparent+secure (b) slow+complex",
            commonErrors: ["Only advantages.", "No limitations."],
          },
        },
      ],
    },
  ],
};
