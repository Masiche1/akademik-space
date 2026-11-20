module.exports = [
  {
    file: "lesson-2-6.ts", exportName: "lesson26",
    lesson: {
      id: "cipc-u2-lesson-2-6", code: "2-6",
      title: "Stage 5 — Managing Data: Spreadsheets and Databases",
      goal: "I CAN use spreadsheets for calculations and describe how databases store and query data.",
      standards: ["Cambridge Primary Computing 0059 Stage 5: managing data", "Cambridge Primary Computing 0059 framework strands: Managing data"],
      stage: 5,
      vocabulary: [
        { term: "Spreadsheet", definition: "A grid of cells for numbers, text and formulas." },
        { term: "Cell", definition: "One box in a spreadsheet, named like B3." },
        { term: "Formula", definition: "A calculation like =A1+B1 or =SUM(A1:A10)." },
        { term: "Database", definition: "An organised collection of related data." },
        { term: "Query", definition: "A request that retrieves specific data from a database." },
        { term: "Record", definition: "One complete entry in a database." },
      ],
      concept: {
        id: "cipc-u2-s5-data", title: "Spreadsheets and databases",
        skill: "Use spreadsheet formulas and describe database queries at Stage 5 level.",
        sections: [
          { heading: "Spreadsheets", body: "Spreadsheets organise data in rows and columns. Cells can hold numbers, text or formulas. Formulas like =A1*B1 calculate automatically — change an input and all dependent results update. Useful for budgets, marks, statistics." },
          { heading: "Databases", body: "A database stores records in tables — like a digital filing cabinet. Each record has fields (name, date, score). Queries ask questions: 'show all students who scored above 80'. Databases handle huge amounts of data efficiently." },
        ],
        keyFormulas: [
          { name: "=A1+B1", statement: "cell formula calculates automatically" },
          { name: "Query", statement: "retrieves matching records from a database" },
        ],
        workedExample: {
          problem: "Cells A1=5, B1=3, C1==A1*B1. What is C1? If A1 changes to 10, what happens?",
          solution: "C1=15. When A1→10, C1 auto-updates to 30.",
        },
        questions: [
          {
            id: "cipc-u2-db-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does a spreadsheet formula starting with '=' do?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Calculates using other cells" }, { id: "b", text: "Changes text colour" }, { id: "c", text: "Deletes the cell" }, { id: "d", text: "Sorts alphabetically" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Formula", statement: "Auto-calculation." }],
              steps: [{ reasoning: "'=' marks a formula that computes from cells.", marks: 1, markCode: "M" }],
              finalAnswer: "Calculates from cells",
            },
          },
          {
            id: "cipc-u2-db-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a database record and what is a query?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Database", statement: "Records and queries." }],
              steps: [
                { reasoning: "Record = one complete entry/row.", marks: 1, markCode: "M" },
                { reasoning: "Query = request for specific data.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Entry vs data request",
            },
          },
          {
            id: "cipc-u2-db-q3", difficulty: "core", totalMarks: 3,
            stem: "A=8, B=4, C==A1+B1, D==C1*2. What are C1 and D1? If B1 changes to 10, update them.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Spreadsheet formulas", statement: "Auto-recalculation." }],
              steps: [
                { reasoning: "C1=12, D1=24.", marks: 1, markCode: "M" },
                { reasoning: "B1→10: C1=18, D1=36.", marks: 1, markCode: "M" },
                { reasoning: "Formulas auto-update.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "C=12,D=24 → then 18,36",
            },
          },
          {
            id: "cipc-u2-db-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define spreadsheet, cell, formula. (b) What is =SUM(A1:A5)? (c) Why do formulas auto-update? (d) Define database, record, field, query. (e) Give a query example for a student database. (f) When is a database better than a spreadsheet? (g) Design a spreadsheet for tracking pocket money (income, spending, balance). (h) Design a database table for library books.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Data management", statement: "Spreadsheets, databases, queries." }],
              steps: [
                { reasoning: "(a) Grid/cell/formula definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Adds A1 through A5.", marks: 1, markCode: "M" },
                { reasoning: "(c) Cells reference each other — recalcs on change.", marks: 1, markCode: "M" },
                { reasoning: "(d) Database/record/field/query definitions.", marks: 1, markCode: "M" },
                { reasoning: "(e) e.g. 'WHERE score > 80'.", marks: 1, markCode: "M" },
                { reasoning: "(f) Large structured data, multiple users, queries.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid budget spreadsheet design.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid table: title, author, borrower, due date.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Spreadsheets, formulas, databases, queries, designs.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-db-notes", title: "Spreadsheets and databases — notes",
      summary: "Formulas auto-calculate. Databases store records; queries retrieve specific data.",
      sections: [
        { heading: "Key idea", body: "Spreadsheets for calculations; databases for large structured data." },
        { heading: "Formulas", body: "'=' triggers calculation; references update automatically." },
      ],
    },
  },
  {
    file: "lesson-2-7.ts", exportName: "lesson27",
    lesson: {
      id: "cipc-u2-lesson-2-7", code: "2-7",
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
      concept: {
        id: "cipc-u2-s5-net", title: "How the internet works",
        skill: "Explain packets, IP addresses, protocols and DNS at Stage 5 level.",
        sections: [
          { heading: "Sending data", body: "When you open a webpage, data travels as packets — small chunks labelled with addresses. Routers direct packets hop-by-hop to the destination, like a postal system. Packets are reassembled at the end." },
          { heading: "Addresses and protocols", body: "Every device has an IP address (e.g. 192.168.1.1) — its network identity. DNS translates 'google.com' into an IP address. Protocols like HTTP/HTTPS are the rules for sending web data; HTTPS adds encryption for security." },
        ],
        keyFormulas: [
          { name: "Packets", statement: "data split into chunks, routed, reassembled" },
          { name: "IP/DNS", statement: "IP=address; DNS=name→IP lookup" },
        ],
        workedExample: {
          problem: "You type 'shop.com' — what happens before the page loads?",
          solution: "Browser asks DNS for shop.com's IP → gets address → sends packet requests → server replies with packets → page assembles and displays.",
        },
        questions: [
          {
            id: "cipc-u2-in-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an IP address?",
            response: { type: "mcq", choices: [
              { id: "a", text: "A unique number identifying a device on a network" }, { id: "b", text: "A type of cable" }, { id: "c", text: "A web browser" }, { id: "d", text: "A password" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "IP address", statement: "Device's network ID." }],
              steps: [{ reasoning: "IP address uniquely identifies a device.", marks: 1, markCode: "M" }],
              finalAnswer: "Unique device identifier",
            },
          },
          {
            id: "cipc-u2-in-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a packet and what does DNS do?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Packets and DNS", statement: "Data chunks + name lookup." }],
              steps: [
                { reasoning: "Packet = small chunk of network data.", marks: 1, markCode: "M" },
                { reasoning: "DNS translates domain names to IP addresses.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Data chunk; name→IP lookup",
            },
          },
          {
            id: "cipc-u2-in-q3", difficulty: "core", totalMarks: 3,
            stem: "Explain why data is sent as packets rather than one big file. What role do routers play?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Networking", statement: "Packets and routing." }],
              steps: [
                { reasoning: "Packets share bandwidth fairly; lost packets can be resent.", marks: 1, markCode: "M" },
                { reasoning: "Different routes possible → reliability.", marks: 1, markCode: "M" },
                { reasoning: "Routers direct packets between networks toward destination.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Efficiency/reliability; routers guide packets",
            },
          },
          {
            id: "cipc-u2-in-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define packet, IP address, protocol, DNS, router. (b) How does typing a web address lead to a page? (c) What is bandwidth? (d) Why is HTTPS safer than HTTP? (e) What happens if a packet is lost? (f) Draw/describe packet journey from your device to a server. (g) What does a MAC address differ from IP? (h) Why are protocols needed for communication?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Networks", statement: "Packets, IP, DNS, protocols." }],
              steps: [
                { reasoning: "(a) All five definitions correct.", marks: 1, markCode: "M" },
                { reasoning: "(b) DNS lookup → IP → packets → reassemble page.", marks: 1, markCode: "M" },
                { reasoning: "(c) Data capacity per time.", marks: 1, markCode: "M" },
                { reasoning: "(d) HTTPS encrypts data.", marks: 1, markCode: "M" },
                { reasoning: "(e) Receiver detects missing packet; resent.", marks: 1, markCode: "M" },
                { reasoning: "(f) Device→router→ISP→server→back.", marks: 1, markCode: "M" },
                { reasoning: "(g) MAC=physical device ID; IP=network address.", marks: 1, markCode: "M" },
                { reasoning: "(h) Common rules so devices understand each other.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Networking concepts: packets, IP, DNS, protocols, HTTPS.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-in-notes", title: "Internet — notes",
      summary: "Data travels as packets via routers. IP addresses identify devices; DNS resolves names; HTTPS encrypts.",
      sections: [
        { heading: "Key idea", body: "Internet = packets + addresses + protocols working together." },
        { heading: "Security", body: "HTTPS encrypts traffic — look for the padlock." },
      ],
    },
  },
  {
    file: "lesson-2-8.ts", exportName: "lesson28",
    lesson: {
      id: "cipc-u2-lesson-2-8", code: "2-8",
      title: "Stage 5 — Computer Systems: Components and Memory",
      goal: "I CAN describe computer components, storage types and how memory affects performance.",
      standards: ["Cambridge Primary Computing 0059 Stage 5: computer systems", "Cambridge Primary Computing 0059 framework strands: Computer systems"],
      stage: 5,
      vocabulary: [
        { term: "RAM", definition: "Temporary memory for running programs — cleared on shutdown." },
        { term: "Storage", definition: "Permanent memory for files — hard drive/SSD/cloud." },
        { term: "CPU", definition: "Processor executing instructions — speed measured in GHz." },
        { term: "GPU", definition: "Graphics processor for images and video." },
        { term: "Motherboard", definition: "Main circuit board connecting all components." },
        { term: "Cache", definition: "Very fast small memory near the CPU." },
      ],
      concept: {
        id: "cipc-u2-s5-sys", title: "Components and memory",
        skill: "Describe system components, RAM vs storage and performance factors at Stage 5 level.",
        sections: [
          { heading: "Components", body: "The motherboard connects everything. CPU processes instructions; GPU handles graphics. RAM is fast temporary memory holding active programs — more RAM = more apps at once. Storage (SSD/hard drive) keeps files permanently." },
          { heading: "Performance", body: "Speed depends on CPU power, RAM amount, storage speed and GPU for graphics. A fast CPU with little RAM still struggles with many apps. Cloud storage stores files online, freeing device space." },
        ],
        keyFormulas: [
          { name: "RAM vs storage", statement: "temporary running memory vs permanent files" },
          { name: "Performance", statement: "CPU + RAM + storage + GPU determine speed" },
        ],
        workedExample: {
          problem: "A laptop has a fast CPU but only 4GB RAM and freezes with many tabs open. Why?",
          solution: "RAM holds all open programs; 4GB is too small → swapping to slow storage → lag. More RAM fixes it.",
        },
        questions: [
          {
            id: "cipc-u2-sp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the difference between RAM and storage?",
            response: { type: "mcq", choices: [
              { id: "a", text: "RAM is temporary; storage is permanent" }, { id: "b", text: "RAM is bigger" }, { id: "c", text: "They are the same" }, { id: "d", text: "Storage is faster for running apps" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "RAM vs storage", statement: "Temporary vs permanent." }],
              steps: [{ reasoning: "RAM clears on shutdown; storage keeps files.", marks: 1, markCode: "M" }],
              finalAnswer: "RAM=temp; storage=permanent",
            },
          },
          {
            id: "cipc-u2-sp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two components inside a computer and their jobs.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Components", statement: "CPU, GPU, motherboard, RAM." }],
              steps: [
                { reasoning: "e.g. CPU processes; GPU graphics.", marks: 1, markCode: "M" },
                { reasoning: "e.g. motherboard connects; RAM holds active data.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. CPU + GPU or motherboard",
            },
          },
          {
            id: "cipc-u2-sp-q3", difficulty: "core", totalMarks: 3,
            stem: "Why does a computer slow down when too many apps are open? What two upgrades help most?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Performance", statement: "RAM limits and upgrades." }],
              steps: [
                { reasoning: "Each app uses RAM; full RAM → swap to slow storage.", marks: 1, markCode: "M" },
                { reasoning: "Upgrade RAM for more simultaneous apps.", marks: 1, markCode: "M" },
                { reasoning: "Faster storage (SSD) or more RAM helps.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "RAM exhausted; add RAM/SSD",
            },
          },
          {
            id: "cipc-u2-sp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define RAM, storage, CPU, GPU, motherboard. (b) Why is RAM 'temporary'? (c) What does the CPU do? (d) What makes a gaming PC different from an office PC? (e) What is cloud storage and its benefit? (f) A file disappears on shutdown — where was it? (g) Why does SSD feel faster than hard drive? (h) Design a spec for a video-editing computer.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Systems", statement: "Components, memory, performance." }],
              steps: [
                { reasoning: "(a) All five definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Holds active programs; cleared on shutdown.", marks: 1, markCode: "M" },
                { reasoning: "(c) Executes/processes instructions.", marks: 1, markCode: "M" },
                { reasoning: "(d) Stronger GPU, more RAM, faster CPU.", marks: 1, markCode: "M" },
                { reasoning: "(e) Online storage; access anywhere, frees space.", marks: 1, markCode: "M" },
                { reasoning: "(f) RAM — not saved to storage.", marks: 1, markCode: "M" },
                { reasoning: "(g) No moving parts; faster read/write.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid spec: fast CPU, 16GB+ RAM, SSD, good GPU.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Components, RAM/storage, performance factors, specs.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-sp-notes", title: "Systems — notes",
      summary: "RAM=temp running memory; storage=permanent files. CPU+GPU+RAM+storage determine performance.",
      sections: [
        { heading: "Key idea", body: "More RAM = more apps at once; SSD > hard drive for speed." },
        { heading: "Cloud", body: "Online storage frees device space and enables access anywhere." },
      ],
    },
  },
  {
    file: "lesson-2-9.ts", exportName: "lesson29",
    lesson: {
      id: "cipc-u2-lesson-2-9", code: "2-9",
      title: "Stage 5 — Digital Communication and Social Media",
      goal: "I CAN describe digital communication tools and use them responsibly.",
      standards: ["Cambridge Primary Computing 0059 Stage 5: networks and digital communication", "Cambridge Primary Computing 0059 framework strands: Networks and digital communication"],
      stage: 5,
      vocabulary: [
        { term: "Email", definition: "Electronic mail — messages sent over the internet." },
        { term: "Instant messaging", definition: "Real-time text chat between users." },
        { term: "Social media", definition: "Online platforms for sharing content and connecting." },
        { term: "Digital footprint", definition: "The trail of data you leave online." },
        { term: "Netiquette", definition: "Rules of polite behaviour online." },
        { term: "Privacy settings", definition: "Controls deciding who sees your content." },
      ],
      concept: {
        id: "cipc-u2-s5-comm", title: "Digital communication",
        skill: "Use communication tools responsibly and manage digital footprint at Stage 5 level.",
        sections: [
          { heading: "Communication tools", body: "Email for formal messages, instant messaging for quick chats, social media for sharing. Each has etiquette: clear subjects, polite language, appropriate tone. Think before posting — content can spread fast and be hard to remove." },
          { heading: "Footprint and privacy", body: "Your digital footprint is everything you've posted, liked or shared — it can affect future opportunities. Manage privacy settings, think before sharing personal info, and remember posts may be permanent even if deleted." },
        ],
        keyFormulas: [
          { name: "Footprint", statement: "everything you post/like/share online" },
          { name: "Privacy", statement: "control who sees your content" },
        ],
        workedExample: {
          problem: "Should you post a photo of your school trip with friends' faces visible? Why or why not?",
          solution: "Consider privacy — others may not want to be tagged. Check permissions, blur faces or ask first. Once posted, it's part of your digital footprint.",
        },
        questions: [
          {
            id: "cipc-u2-dc-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a digital footprint?",
            response: { type: "mcq", choices: [
              { id: "a", text: "The trail of data you leave online" }, { id: "b", text: "A type of shoe" }, { id: "c", text: "A network cable" }, { id: "d", text: "A computer virus" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Digital footprint", statement: "Online data trail." }],
              steps: [{ reasoning: "Footprint = accumulated online activity data.", marks: 1, markCode: "M" }],
              finalAnswer: "Online data trail",
            },
          },
          {
            id: "cipc-u2-dc-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two digital communication tools and one rule of netiquette.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Communication", statement: "Tools and etiquette." }],
              steps: [
                { reasoning: "Email, messaging, social media.", marks: 1, markCode: "M" },
                { reasoning: "Polite, clear, think before posting.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. email+chat; be polite/think first",
            },
          },
          {
            id: "cipc-u2-dc-q3", difficulty: "core", totalMarks: 3,
            stem: "Explain why 'delete' doesn't fully remove online content, and what privacy settings control.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Footprint", statement: "Permanence and controls." }],
              steps: [
                { reasoning: "Copies/screenshots/caches may persist.", marks: 1, markCode: "M" },
                { reasoning: "Privacy settings control who sees posts/profile.", marks: 1, markCode: "M" },
                { reasoning: "Think before posting — permanence.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Content can persist; settings control visibility",
            },
          },
          {
            id: "cipc-u2-dc-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define digital footprint and netiquette. (b) Compare email vs instant messaging. (c) What are privacy settings? (d) Why think before posting? (e) Describe a responsible social media post. (f) What is cyberbullying and how respond? (g) How does your footprint affect future opportunities? (h) Design rules for a class group chat.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Digital communication", statement: "Footprint, privacy, etiquette." }],
              steps: [
                { reasoning: "(a) Footprint=online trail; netiquette=online manners.", marks: 1, markCode: "M" },
                { reasoning: "(b) Email=formal/async; messaging=instant/informal.", marks: 1, markCode: "M" },
                { reasoning: "(c) Controls for who sees content.", marks: 1, markCode: "M" },
                { reasoning: "(d) Posts persist and spread; affect reputation.", marks: 1, markCode: "M" },
                { reasoning: "(e) Kind, appropriate, no private info.", marks: 1, markCode: "M" },
                { reasoning: "(f) Online harassment; don't respond, save evidence, tell adult.", marks: 1, markCode: "M" },
                { reasoning: "(g) Colleges/employers may check online presence.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid rules: respect, no sharing, adult supervision.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Footprint, tools, privacy, responsible posting, cyberbullying.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-dc-notes", title: "Digital communication — notes",
      summary: "Footprint = online trail. Privacy settings control visibility. Think before posting; it can persist.",
      sections: [
        { heading: "Key idea", body: "Your online activity is permanent and public — manage it carefully." },
        { heading: "Tools", body: "Email=formal; messaging=instant; social=sharing." },
      ],
    },
  },
  {
    file: "lesson-2-10.ts", exportName: "lesson210",
    lesson: {
      id: "cipc-u2-lesson-2-10", code: "2-10",
      title: "Stage 5 — Online Safety and Cyber Security",
      goal: "I CAN identify online threats and apply security practices to protect data and accounts.",
      standards: ["Cambridge Primary Computing 0059 Stage 5: digital literacy", "Cambridge Primary Computing 0059 framework strands: Networks and digital communication"],
      stage: 5,
      vocabulary: [
        { term: "Phishing", definition: "Fake messages tricking you into giving personal information." },
        { term: "Malware", definition: "Malicious software — viruses, spyware, ransomware." },
        { term: "Firewall", definition: "Security barrier blocking unauthorised access." },
        { term: "Two-factor authentication", definition: "Login needing password + second verification." },
        { term: "Encryption", definition: "Scrambling data so only authorised parties can read it." },
        { term: "Backup", definition: "A copy of data kept safe in case of loss." },
      ],
      concept: {
        id: "cipc-u2-s5-sec", title: "Online threats and security",
        skill: "Recognise phishing/malware and apply protection at Stage 5 level.",
        sections: [
          { heading: "Threats", body: "Phishing emails/messages fake being trusted sources to steal passwords. Malware harms devices — viruses corrupt files, spyware watches you, ransomware locks data for payment. Weak passwords and unsafe links are common entry points." },
          { heading: "Protection", body: "Use strong unique passwords, enable two-factor authentication, keep software updated, install antivirus/firewall, back up data regularly, never click suspicious links, verify sender addresses." },
        ],
        keyFormulas: [
          { name: "Phishing", statement: "fake message → steal info" },
          { name: "Protect", statement: "strong passwords + 2FA + updates + backups" },
        ],
        workedExample: {
          problem: "An email says 'Your account will be deleted — click here to verify'. What do you do?",
          solution: "Don't click — likely phishing. Go to the site directly via your browser, check the sender address, or contact the company. Delete/report it.",
        },
        questions: [
          {
            id: "cipc-u2-sc-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is phishing?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Fake messages tricking you into giving information" }, { id: "b", text: "A type of fish" }, { id: "c", text: "A fast connection" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Phishing", statement: "Deceptive info theft." }],
              steps: [{ reasoning: "Phishing = fake messages for credentials.", marks: 1, markCode: "M" }],
              finalAnswer: "Fake messages for info",
            },
          },
          {
            id: "cipc-u2-sc-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two ways to protect your online accounts.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Security", statement: "Passwords, 2FA, updates." }],
              steps: [
                { reasoning: "Strong unique passwords / two-factor auth.", marks: 1, markCode: "M" },
                { reasoning: "Updates/antivirus/backups.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. 2FA + strong passwords",
            },
          },
          {
            id: "cipc-u2-sc-q3", difficulty: "core", totalMarks: 3,
            stem: "What is malware and how does it differ from phishing? Give one protection for each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Threats", statement: "Malware vs phishing." }],
              steps: [
                { reasoning: "Malware = harmful software on device; phishing = trick messages.", marks: 1, markCode: "M" },
                { reasoning: "Antivirus/updates for malware.", marks: 1, markCode: "M" },
                { reasoning: "Verify senders/don't click for phishing.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Software vs deception; different defences",
            },
          },
          {
            id: "cipc-u2-sc-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define phishing, malware, encryption, 2FA, backup. (b) How does ransomware work? (c) Why update software? (d) What is a firewall? (e) Describe spotting a phishing email. (f) Why unique passwords per site? (g) What is HTTPS padlock? (h) Design a security checklist for a new account.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Cyber security", statement: "Threats, encryption, defences." }],
              steps: [
                { reasoning: "(a) All five definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Locks data, demands payment.", marks: 1, markCode: "M" },
                { reasoning: "(c) Patches security holes.", marks: 1, markCode: "M" },
                { reasoning: "(d) Blocks unauthorised access.", marks: 1, markCode: "M" },
                { reasoning: "(e) Urgency, generic greeting, suspicious links/addresses.", marks: 1, markCode: "M" },
                { reasoning: "(f) One breach doesn't expose all accounts.", marks: 1, markCode: "M" },
                { reasoning: "(g) Shows HTTPS/encrypted connection.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid checklist: password, 2FA, recovery, privacy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Threats and protections: phishing, malware, encryption, 2FA.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-sc-notes", title: "Cyber security — notes",
      summary: "Phishing=trick messages; malware=harmful software. Protect: strong passwords, 2FA, updates, backups.",
      sections: [
        { heading: "Key idea", body: "Most attacks exploit weak passwords and careless clicking." },
        { heading: "Rule", body: "Suspicious? Verify directly — don't click links in messages." },
      ],
    },
  },
  {
    file: "lesson-2-11.ts", exportName: "lesson211",
    lesson: {
      id: "cipc-u2-lesson-2-11", code: "2-11",
      title: "Stage 6 — Advanced Programming: Events, Broadcasts and Cloning",
      goal: "I CAN create interactive programs using events, broadcasts and clones.",
      standards: ["Cambridge Primary Computing 0059 Stage 6: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
      stage: 6,
      vocabulary: [
        { term: "Broadcast", definition: "A message one sprite sends to all others." },
        { term: "Clone", definition: "A copy of a sprite created during the program." },
        { term: "Event handler", definition: "Code that runs when something happens — key press, click." },
        { term: "Trigger", definition: "The event that starts a script." },
        { term: "Parallel scripts", definition: "Multiple scripts running at the same time." },
        { term: "Interaction", definition: "Program responding to user input." },
      ],
      concept: {
        id: "cipc-u2-s6-adv", title: "Events, broadcasts and clones",
        skill: "Build interactive multi-sprite programs at Stage 6 level.",
        sections: [
          { heading: "Events and broadcasts", body: "Events trigger scripts: 'when key pressed', 'when sprite clicked'. Broadcasts let sprites communicate — one sprite broadcasts 'game over' and others react. Multiple scripts run in parallel, making programs feel alive." },
          { heading: "Clones", body: "Cloning creates sprite copies during runtime — perfect for bullets, enemies, particles. Clones inherit the sprite's appearance and can run their own scripts, then delete themselves when done." },
        ],
        keyFormulas: [
          { name: "Broadcast", statement: "sprite → message → all sprites react" },
          { name: "Clone", statement: "runtime copy with own scripts" },
        ],
        workedExample: {
          problem: "Player sprite broadcasts 'hit' when touching enemy. Enemy listens for 'hit' and plays death animation. Explain the flow.",
          solution: "Player detects collision → broadcasts 'hit' → enemy's 'when I receive hit' script runs → plays animation → deletes self.",
        },
        questions: [
          {
            id: "cipc-u2-av-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a broadcast in Scratch?",
            response: { type: "mcq", choices: [
              { id: "a", text: "A message one sprite sends to all others" }, { id: "b", text: "A TV channel" }, { id: "c", text: "A file type" }, { id: "d", text: "A loop" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Broadcast", statement: "Sprite messaging." }],
              steps: [{ reasoning: "Broadcast sends a message all sprites can receive.", marks: 1, markCode: "M" }],
              finalAnswer: "Message to all sprites",
            },
          },
          {
            id: "cipc-u2-av-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a clone and when would you use one?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Clones", statement: "Runtime copies." }],
              steps: [
                { reasoning: "Clone = copy of sprite created during program.", marks: 1, markCode: "M" },
                { reasoning: "Use for many similar objects: bullets, enemies.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Runtime copy; e.g. bullets",
            },
          },
          {
            id: "cipc-u2-av-q3", difficulty: "core", totalMarks: 3,
            stem: "Explain how parallel scripts and events make a game feel interactive. Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Interactivity", statement: "Simultaneous scripts." }],
              steps: [
                { reasoning: "Multiple scripts run at once — movement, collision, timer.", marks: 1, markCode: "M" },
                { reasoning: "Events (key press) trigger responses instantly.", marks: 1, markCode: "M" },
                { reasoning: "Example: arrow keys move while collision script watches.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Parallel scripts + event triggers = responsive",
            },
          },
          {
            id: "cipc-u2-av-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define broadcast, clone, event handler, parallel script. (b) How do sprites communicate? (c) Why use clones instead of many sprites? (d) Design a 'pop' effect: balloon clicked → clone confetti. (e) What triggers a 'game over' broadcast? (f) How do clones differ from duplicates? (g) Describe a multi-sprite chase game structure. (h) What should clones do when finished?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Advanced programming", statement: "Events, broadcasts, clones." }],
              steps: [
                { reasoning: "(a) All four definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Broadcast messages; 'when I receive'.", marks: 1, markCode: "M" },
                { reasoning: "(c) Fewer sprites; clones created/deleted dynamically.", marks: 1, markCode: "M" },
                { reasoning: "(d) Click event → broadcast → clone confetti sprites.", marks: 1, markCode: "M" },
                { reasoning: "(e) Collision/lives=0 triggers broadcast.", marks: 1, markCode: "M" },
                { reasoning: "(f) Clones are temporary runtime copies; duplicates permanent.", marks: 1, markCode: "M" },
                { reasoning: "(g) Player moves, enemy chases via broadcasts/conditions.", marks: 1, markCode: "M" },
                { reasoning: "(h) Delete themselves after effect ends.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Events, broadcasts, clones, parallel scripts, game design.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-av-notes", title: "Advanced programming — notes",
      summary: "Events trigger scripts; broadcasts let sprites communicate; clones create dynamic copies.",
      sections: [
        { heading: "Key idea", body: "Real programs = multiple parallel scripts responding to events." },
        { heading: "Clones", body: "Perfect for temporary effects — remember to delete them." },
      ],
    },
  },
  {
    file: "lesson-2-12.ts", exportName: "lesson212",
    lesson: {
      id: "cipc-u2-lesson-2-12", code: "2-12",
      title: "Stage 6 — How Computers Store Data: Binary",
      goal: "I CAN explain binary representation and convert between binary and denary.",
      standards: ["Cambridge Primary Computing 0059 Stage 6: computer systems", "Cambridge Primary Computing 0059 framework strands: Computer systems"],
      stage: 6,
      vocabulary: [
        { term: "Binary", definition: "Base-2 number system using only 0 and 1." },
        { term: "Bit", definition: "One binary digit — 0 or 1." },
        { term: "Byte", definition: "8 bits grouped together." },
        { term: "Denary", definition: "Base-10 number system we normally use." },
        { term: "Place value", definition: "Each bit's value doubles: 128, 64, 32, 16, 8, 4, 2, 1." },
        { term: "Character encoding", definition: "Rules mapping characters to binary codes." },
      ],
      concept: {
        id: "cipc-u2-s6-binary", title: "Binary representation",
        skill: "Convert binary↔denary and explain why computers use binary at Stage 6 level.",
        sections: [
          { heading: "Why binary?", body: "Computers use binary because electronic switches are either on (1) or off (0) — two states. Everything — numbers, text, images, sound — is encoded as patterns of 0s and 1s." },
          { heading: "Converting", body: "Each bit has a place value doubling left to right: 128 64 32 16 8 4 2 1. To convert binary to denary, add the values of bits that are 1. Denary to binary: repeatedly halve and record remainders." },
        ],
        keyFormulas: [
          { name: "Place values", statement: "128 64 32 16 8 4 2 1" },
          { name: "Conversion", statement: "add place values of 1-bits" },
        ],
        workedExample: {
          problem: "Convert 0101 1010 to denary.",
          solution: "64 + 8 + 2 = 74. (Bits at 64, 8, 2 are set.)",
        },
        questions: [
          {
            id: "cipc-u2-bi-q1", difficulty: "foundation", totalMarks: 1,
            stem: "Why do computers use binary?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Electronic switches have two states: on/off" }, { id: "b", text: "It's faster to type" }, { id: "c", text: "It's smaller" }, { id: "d", text: "No reason" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Binary", statement: "Two-state representation." }],
              steps: [{ reasoning: "Hardware is on/off — binary matches naturally.", marks: 1, markCode: "M" }],
              finalAnswer: "On/off states",
            },
          },
          {
            id: "cipc-u2-bi-q2", difficulty: "foundation", totalMarks: 2,
            stem: "How many bits in a byte? What are the place values of an 8-bit number?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Bit and byte", statement: "8 bits = 1 byte." }],
              steps: [
                { reasoning: "8 bits.", marks: 1, markCode: "M" },
                { reasoning: "128 64 32 16 8 4 2 1.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "8; 128→1",
            },
          },
          {
            id: "cipc-u2-bi-q3", difficulty: "core", totalMarks: 3,
            stem: "Convert 0011 0101 to denary. Show your working.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Binary conversion", statement: "Sum place values." }],
              steps: [
                { reasoning: "Set bits at 32, 16, 4, 1.", marks: 1, markCode: "M" },
                { reasoning: "32+16+4+1 = 53.", marks: 1, markCode: "M" },
                { reasoning: "Answer: 53.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "53",
            },
          },
          {
            id: "cipc-u2-bi-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Why binary? (b) What is a bit and byte? (c) Convert 0101 1111 to denary. (d) Convert 42 to binary (8-bit). (e) How is text stored in binary? (f) What is character encoding? (g) Why can't denary be used directly by computers? (h) How many values can 8 bits represent?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Binary", statement: "Conversions, encoding, limits." }],
              steps: [
                { reasoning: "(a) Two-state hardware.", marks: 1, markCode: "M" },
                { reasoning: "(b) Bit=1 digit; byte=8 bits.", marks: 1, markCode: "M" },
                { reasoning: "(c) 64+8+4+2+1=79.", marks: 1, markCode: "M" },
                { reasoning: "(d) 0010 1010.", marks: 1, markCode: "M" },
                { reasoning: "(e) Each character → binary code.", marks: 1, markCode: "M" },
                { reasoning: "(f) Mapping rules character↔binary.", marks: 1, markCode: "M" },
                { reasoning: "(g) Hardware only has on/off states.", marks: 1, markCode: "M" },
                { reasoning: "(h) 256 values (0-255).", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Binary system, conversions, encoding, 256 values.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-bi-notes", title: "Binary — notes",
      summary: "Computers use 0/1 because hardware is on/off. 8 bits=1 byte; place values 128→1; 8 bits=256 values.",
      sections: [
        { heading: "Key idea", body: "Everything in computing is binary patterns at the lowest level." },
        { heading: "Convert", body: "Binary→denary: add place values of 1-bits." },
      ],
    },
  },
  {
    file: "lesson-2-13.ts", exportName: "lesson213",
    lesson: {
      id: "cipc-u2-lesson-2-13", code: "2-13",
      title: "Stage 6 — Programming Project: Design and Evaluate",
      goal: "I CAN design, build and evaluate a complete program using decomposition and testing.",
      standards: ["Cambridge Primary Computing 0059 Stage 6: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
      stage: 6,
      vocabulary: [
        { term: "Specification", definition: "A description of what the program must do." },
        { term: "Design", definition: "Planning the program's structure before coding." },
        { term: "Prototype", definition: "An early working version to test ideas." },
        { term: "Evaluation", definition: "Judging how well the program meets its goals." },
        { term: "Iteration", definition: "Repeating design-build-test cycles to improve." },
        { term: "User feedback", definition: "Opinions from people who tried the program." },
      ],
      concept: {
        id: "cipc-u2-s6-proj", title: "Designing and evaluating programs",
        skill: "Apply the design cycle: spec → design → build → test → evaluate at Stage 6 level.",
        sections: [
          { heading: "The design cycle", body: "Good programs follow: write a specification (what it must do), design the structure (sprites, scripts, variables), build a prototype, test it, get feedback, then improve — iterate until it works well." },
          { heading: "Evaluation", body: "Evaluate against the specification: does it do everything required? Is it easy to use? Are there bugs? Collect user feedback and suggest improvements. Real programmers iterate — version 1 is rarely final." },
        ],
        keyFormulas: [
          { name: "Design cycle", statement: "spec → design → build → test → evaluate → improve" },
          { name: "Evaluation", statement: "check vs spec + user feedback" },
        ],
        workedExample: {
          problem: "You built a quiz game. List three things to check in evaluation.",
          solution: "1. Does it meet the spec (questions, scoring, end screen)? 2. Are there bugs? 3. Is it fun/easy for users? Get feedback and improve.",
        },
        questions: [
          {
            id: "cipc-u2-pj-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a program specification?",
            response: { type: "mcq", choices: [
              { id: "a", text: "A description of what the program must do" }, { id: "b", text: "A computer part" }, { id: "c", text: "A type of virus" }, { id: "d", text: "A coding language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Specification", statement: "Requirements document." }],
              steps: [{ reasoning: "Spec defines what the program must achieve.", marks: 1, markCode: "M" }],
              finalAnswer: "What program must do",
            },
          },
          {
            id: "cipc-u2-pj-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name the stages of the design cycle in order.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Design cycle", statement: "Iterative process." }],
              steps: [
                { reasoning: "Spec → design → build → test → evaluate.", marks: 1, markCode: "M" },
                { reasoning: "Improve and repeat (iterate).", marks: 1, markCode: "M" },
              ],
              finalAnswer: "spec→design→build→test→evaluate→improve",
            },
          },
          {
            id: "cipc-u2-pj-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between a prototype and the final program? Why build a prototype first?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Prototyping", statement: "Early testing." }],
              steps: [
                { reasoning: "Prototype = early rough version.", marks: 1, markCode: "M" },
                { reasoning: "Test ideas cheaply before full build.", marks: 1, markCode: "M" },
                { reasoning: "Find problems early → less wasted work.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Rough version; test ideas early",
            },
          },
          {
            id: "cipc-u2-pj-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define specification, prototype, evaluation, iteration. (b) Describe the design cycle. (c) Why write a spec first? (d) What is user feedback and why gather it? (e) Your game has a bug where score doesn't update — which cycle stage? (f) What makes a good evaluation? (g) Design a spec for 'a catching game'. (h) List three improvements after testing your game.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Project management", statement: "Design cycle, evaluation." }],
              steps: [
                { reasoning: "(a) All four definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Spec→design→build→test→evaluate→improve.", marks: 1, markCode: "M" },
                { reasoning: "(c) Clear target prevents wasted work.", marks: 1, markCode: "M" },
                { reasoning: "(d) User opinions; reveals real problems.", marks: 1, markCode: "M" },
                { reasoning: "(e) Testing/debugging stage.", marks: 1, markCode: "M" },
                { reasoning: "(f) Checks spec, bugs, usability, improvements.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid game spec: basket, falling objects, score, lives.", marks: 1, markCode: "M" },
                { reasoning: "(h) Three plausible improvements.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Design cycle, prototyping, evaluation, iteration.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-pj-notes", title: "Design cycle — notes",
      summary: "Spec → design → build → test → evaluate → improve. Iterate until it meets goals.",
      sections: [
        { heading: "Key idea", body: "Programming is iterative — expect to test and improve." },
        { heading: "Evaluation", body: "Check against spec, hunt bugs, gather user feedback." },
      ],
    },
  },
];
