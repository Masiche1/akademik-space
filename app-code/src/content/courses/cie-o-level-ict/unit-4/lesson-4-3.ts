import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "olict-u4-lesson-4-3",
  code: "4-3",
  title: "The Internet and the WWW",
  goal: "I CAN distinguish the internet from the World Wide Web and describe web services.",
  standards: ["7014 6.1", "7014 6.2"],
  vocabulary: [
    { term: "Internet", definition: "Global network of networks connecting computers worldwide." },
    { term: "World Wide Web (WWW)", definition: "System of interlinked hypertext pages accessed via the internet." },
    { term: "URL", definition: "Uniform Resource Locator — web address." },
    { term: "Browser", definition: "Software for viewing web pages (Chrome, Firefox)." },
    { term: "ISP", definition: "Internet Service Provider — company providing internet access." },
    { term: "Search engine", definition: "Tool finding web pages by keywords (Google, Bing)." },
    { term: "Web server", definition: "Computer hosting websites." },
    { term: "Hyperlink", definition: "Clickable link connecting web pages." },
  ],
  concepts: [
    {
      id: "olict-u4-internet",
      title: "The internet",
      skill: "Explain the internet, ISPs, IP addresses and internet services.",
      lesson: {
        sections: [
          { heading: "Internet vs WWW", body: "The **internet** is the physical/global network infrastructure. The **World Wide Web** is one service running on it — websites and hyperlinked pages. Internet also carries email, file transfer, streaming." },
          { heading: "Connecting", body: "Devices connect via an **ISP** (internet service provider) using modem/router. Each device gets an IP address. URLs (e.g. www.example.com) locate resources; DNS translates names to IP addresses." },
          { heading: "Internet services", body: "Email, web browsing, file sharing (FTP), streaming video/music, VoIP calls, online banking, cloud storage, social media." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Explain the difference between the internet and the WWW in one sentence each.",
          solution: "Internet = global network infrastructure. WWW = websites/pages accessed through it.",
        },
      },
      questions: [
        {
          id: "olict-u4-nt-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The internet is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A cable type" },
            { id: "b", text: "A collection of websites" },
            { id: "c", text: "A browser" },
            { id: "d", text: "A global network of networks" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Internet", statement: "Global network." }], steps: [{ reasoning: "Internet = global network.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Global network" },
        },
        {
          id: "olict-u4-nt-q2", difficulty: "core", totalMarks: 2,
          stem: "What is an ISP?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "ISP", statement: "Internet access provider." }], steps: [
            { reasoning: "Company providing internet connection.", marks: 1, markCode: "M" },
            { reasoning: "e.g. phone/cable companies.", marks: 1, markCode: "A" },
          ], finalAnswer: "Internet Service Provider — company that connects you to the internet." },
        },
        {
          id: "olict-u4-nt-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between the internet and the World Wide Web.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Internet vs WWW", statement: "Infrastructure vs service." }], steps: [
            { reasoning: "Internet = physical network infrastructure.", marks: 1, markCode: "M" },
            { reasoning: "WWW = websites/pages running on it.", marks: 1, markCode: "M" },
            { reasoning: "Internet also carries email, streaming etc.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Internet = global network infrastructure; WWW = one service (websites) on it." },
        },
        {
          id: "olict-u4-nt-q4", difficulty: "challenge", totalMarks: 9,
          stem: "The internet review.",
          parts: [
            { label: "a", prompt: "Define the internet.", marks: 2 },
            { label: "b", prompt: "Define the WWW.", marks: 2 },
            { label: "c", prompt: "What is an ISP?", marks: 1 },
            { label: "d", prompt: "What does a URL do?", marks: 2 },
            { label: "e", prompt: "Give two internet services besides the web.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Internet", statement: "Network, WWW, ISP, URL, services." },
          ], steps: [
            { part: "a", reasoning: "Global network of networks.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Interlinked web pages via internet.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Internet Service Provider.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Web address locating resources.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Email/streaming/etc.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Two named.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) global network (b) web pages (c) ISP (d) web address (e) email/streaming" },
        },
        {
          id: "olict-u4-nt-q5", difficulty: "foundation", totalMarks: 1,
          stem: "What does DNS do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stores web pages" },
            { id: "b", text: "Translates domain names to IP addresses" },
            { id: "c", text: "Encrypts emails" },
            { id: "d", text: "Speeds up the CPU" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "DNS", statement: "Name to IP." }], steps: [{ reasoning: "DNS translates names to IPs.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Translates names to IPs" },
        },
        {
          id: "olict-u4-nt-q6", difficulty: "core", totalMarks: 2,
          stem: "How many numbers (octets) are in the IP address 192.168.1.1?",
          response: { type: "numeric", parts: [{ label: "octets", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "IPv4 address", statement: "Four octets." }], steps: [
            { reasoning: "192, 168, 1, 1 are four numbers.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 4 octets.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 octets" },
        },
        {
          id: "olict-u4-nt-q7", difficulty: "core", totalMarks: 1,
          stem: "Which service uses the internet but is NOT part of the World Wide Web?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A hyperlink" },
            { id: "b", text: "A web page" },
            { id: "c", text: "Email" },
            { id: "d", text: "A website" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Internet services", statement: "WWW is one service." }], steps: [{ reasoning: "Email runs on the internet outside the WWW.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Email" },
        },
        {
          id: "olict-u4-nt-q8", difficulty: "foundation", totalMarks: 1,
          stem: "The World Wide Web is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One service running on the internet" },
            { id: "b", text: "A computer brand" },
            { id: "c", text: "A type of ISP" },
            { id: "d", text: "The physical network cables" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "WWW", statement: "Service on internet." }], steps: [{ reasoning: "WWW is a service on the internet.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** A service on the internet" },
        },
        {
          id: "olict-u4-nt-q9", difficulty: "foundation", totalMarks: 2,
          stem: "Besides the web, how many internet services are listed: email, file transfer, streaming, VoIP, online banking, cloud storage, social media?",
          response: { type: "numeric", parts: [{ label: "services", answer: 7 }] },
          markscheme: { principles: [{ kind: "principle", name: "Internet services", statement: "Count services." }], steps: [
            { reasoning: "Count the seven listed services.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7 services" },
        },
        {
          id: "olict-u4-nt-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between the internet and the World Wide Web.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Internet vs WWW", statement: "Infrastructure vs service." }], steps: [
            { reasoning: "The internet is the global network infrastructure.", marks: 1, markCode: "M" },
            { reasoning: "The WWW is websites/pages accessed through it.", marks: 1, markCode: "M" },
            { reasoning: "The internet also carries email, streaming and other services.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction between the two.", marks: 1, markCode: "A" },
          ], finalAnswer: "Internet = global network infrastructure; WWW = one service (websites) running on it." },
        },
        {
          id: "olict-u4-nt-q11", difficulty: "core", totalMarks: 1,
          stem: "A URL is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An IP protocol" },
            { id: "b", text: "A type of cable" },
            { id: "c", text: "A search result" },
            { id: "d", text: "A web address identifying a resource" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "URL", statement: "Web address." }], steps: [{ reasoning: "URL locates a web resource.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Web address" },
        },
        {
          id: "olict-u4-nt-q12", difficulty: "core", totalMarks: 2,
          stem: "A school has 3 routers and each router connects 40 devices. How many devices are on the network?",
          response: { type: "numeric", parts: [{ label: "devices", answer: 120 }] },
          markscheme: { principles: [{ kind: "principle", name: "Network size", statement: "Routers × devices." }], steps: [
            { reasoning: "3 × 40 = 120.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 120 devices.", marks: 1, markCode: "A" },
          ], finalAnswer: "120 devices" },
        },
        {
          id: "olict-u4-nt-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe what happens when a user types a web address into a browser and presses Enter.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Web request", statement: "DNS → server → display." }], steps: [
            { reasoning: "The browser sends the URL to a DNS server to find the IP address.", marks: 1, markCode: "M" },
            { reasoning: "A request for the page is sent to the web server at that address.", marks: 1, markCode: "M" },
            { reasoning: "The server returns the page data to the browser.", marks: 1, markCode: "M" },
            { reasoning: "The browser displays the page.", marks: 1, markCode: "A" },
          ], finalAnswer: "DNS resolves the name, the server sends the page, and the browser displays it." },
        },
        {
          id: "olict-u4-nt-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Which organisation provides internet access to homes?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A browser" },
            { id: "b", text: "A search engine" },
            { id: "c", text: "An ISP" },
            { id: "d", text: "A web server" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "ISP", statement: "Provides access." }], steps: [{ reasoning: "ISP provides the connection.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** An ISP" },
        },
        {
          id: "olict-u4-nt-q15", difficulty: "core", totalMarks: 2,
          stem: "A search engine indexes 5 000 000 pages. Its crawler adds 200 000 new pages per day. How many pages are indexed after 10 days?",
          response: { type: "numeric", parts: [{ label: "pages", answer: 7000000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Index growth", statement: "Initial + rate × days." }], steps: [
            { reasoning: "200 000 × 10 = 2 000 000 new pages; total = 7 000 000.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 7 000 000 pages.", marks: 1, markCode: "A" },
          ], finalAnswer: "7 000 000 pages" },
        },
        {
          id: "olict-u4-nt-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Suggest two internet services a hospital could use and justify each choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Internet services", statement: "Telemedicine + records." }], steps: [
            { reasoning: "Telemedicine allows remote consultations.", marks: 1, markCode: "M" },
            { reasoning: "Justified: reaches patients without travel.", marks: 1, markCode: "A" },
            { reasoning: "Cloud storage/digital records share patient data securely.", marks: 1, markCode: "M" },
            { reasoning: "Justified: faster, organised access to records.", marks: 1, markCode: "A" },
          ], finalAnswer: "Telemedicine for remote care; digital records/cloud storage for organised patient data." },
        },
      ],
    },
    {
      id: "olict-u4-web",
      title: "The World Wide Web",
      skill: "Describe web pages, browsers, search engines and URLs.",
      lesson: {
        sections: [
          { heading: "Web basics", body: "Websites are collections of **web pages** — documents written in HTML, linked by **hyperlinks**. Pages are stored on **web servers** and requested by browsers." },
          { heading: "URLs", body: "A **URL** (web address) identifies a resource: `https://www.example.com/page`. Protocol (`https`) + domain + path." },
          { heading: "Browsers and search", body: "**Browsers** (Chrome, Firefox, Edge) request and display pages. **Search engines** (Google, Bing) index the web so you can find pages by keywords." },
        ],
        keyFormulas: [
          { name: "URL", statement: "protocol://domain/path" },
        ],
        workedExample: {
          problem: "Break down the URL `https://www.school.edu.lb/exams`.",
          solution: "Protocol: https. Domain: www.school.edu.lb. Path: /exams.",
        },
      },
      questions: [
        {
          id: "olict-u4-wb-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A browser's job is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Encrypt data" },
            { id: "b", text: "Provide internet" },
            { id: "c", text: "Store files" },
            { id: "d", text: "Display web pages" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Browser", statement: "Displays web pages." }], steps: [{ reasoning: "Browser displays pages.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Display web pages" },
        },
        {
          id: "olict-u4-wb-q2", difficulty: "core", totalMarks: 2,
          stem: "What is a hyperlink?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Hyperlink", statement: "Link between pages." }], steps: [
            { reasoning: "Clickable link to another page/resource.", marks: 1, markCode: "M" },
            { reasoning: "Foundation of the web.", marks: 1, markCode: "A" },
          ], finalAnswer: "A clickable link connecting one web page/resource to another." },
        },
        {
          id: "olict-u4-wb-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the parts of a URL using `https://shop.example.com/cart`.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "URL parts", statement: "Protocol + domain + path." }], steps: [
            { reasoning: "https = protocol.", marks: 1, markCode: "M" },
            { reasoning: "shop.example.com = domain/server.", marks: 1, markCode: "M" },
            { reasoning: "/cart = path to resource.", marks: 1, markCode: "M" },
            { reasoning: "All parts explained.", marks: 1, markCode: "A" },
          ], finalAnswer: "https = protocol; shop.example.com = domain; /cart = path." },
        },
        {
          id: "olict-u4-wb-q4", difficulty: "challenge", totalMarks: 9,
          stem: "The WWW review.",
          parts: [
            { label: "a", prompt: "What is a web page?", marks: 2 },
            { label: "b", prompt: "What is a browser?", marks: 2 },
            { label: "c", prompt: "What is a search engine?", marks: 2 },
            { label: "d", prompt: "Explain the three parts of a URL.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "WWW", statement: "Pages, browsers, search, URLs." },
          ], steps: [
            { part: "a", reasoning: "HTML document on a server.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Software displaying pages.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Finds pages by keywords.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Protocol.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Domain + path.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "All explained.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) HTML doc (b) displays pages (c) keyword search (d) protocol/domain/path" },
        },
        {
          id: "olict-u4-wb-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A website is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A collection of web pages" },
            { id: "b", text: "A single file" },
            { id: "c", text: "A search engine" },
            { id: "d", text: "A network cable" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Website", statement: "Collection of pages." }], steps: [{ reasoning: "Website = many linked pages.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Collection of web pages" },
        },
        {
          id: "olict-u4-wb-q6", difficulty: "core", totalMarks: 2,
          stem: "A website has 8 pages and each page is about 80 KB. What is the approximate total size?",
          response: { type: "numeric", parts: [{ label: "KB", answer: 640, unit: "KB" }] },
          markscheme: { principles: [{ kind: "principle", name: "Site size", statement: "Pages × size." }], steps: [
            { reasoning: "8 × 80 KB = 640 KB.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 640 KB.", marks: 1, markCode: "A" },
          ], finalAnswer: "640 KB" },
        },
        {
          id: "olict-u4-wb-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A hyperlink is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of server" },
            { id: "b", text: "A search result" },
            { id: "c", text: "A clickable link to another page" },
            { id: "d", text: "A web address" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Hyperlink", statement: "Link between pages." }], steps: [{ reasoning: "Hyperlink connects pages.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Clickable link" },
        },
        {
          id: "olict-u4-wb-q8", difficulty: "core", totalMarks: 2,
          stem: "Explain how a browser and a web server interact when a page loads.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Client-server", statement: "Request and response." }], steps: [
            { reasoning: "The browser sends a request to the web server.", marks: 1, markCode: "M" },
            { reasoning: "The server sends the page back and the browser displays it.", marks: 1, markCode: "A" },
          ], finalAnswer: "Browser requests the page; server responds with it; browser displays it." },
        },
        {
          id: "olict-u4-wb-q9", difficulty: "foundation", totalMarks: 2,
          stem: "A website has 4 pages and each page is about 50 KB. What is the total size?",
          response: { type: "numeric", parts: [{ label: "KB", answer: 200, unit: "KB" }] },
          markscheme: { principles: [{ kind: "principle", name: "Site size", statement: "Pages × size." }], steps: [
            { reasoning: "4 × 50 = 200 KB.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 200 KB.", marks: 1, markCode: "A" },
          ], finalAnswer: "200 KB" },
        },
        {
          id: "olict-u4-wb-q10", difficulty: "core", totalMarks: 1,
          stem: "Which software is used to display web pages?",
          response: { type: "mcq", choices: [
            { id: "a", text: "An operating system" },
            { id: "b", text: "A web browser" },
            { id: "c", text: "A spreadsheet" },
            { id: "d", text: "An antivirus" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Browser", statement: "Displays pages." }], steps: [{ reasoning: "Browser displays pages.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Web browser" },
        },
        {
          id: "olict-u4-wb-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a search engine helps a user find information on the web.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Search engine", statement: "Indexes + keywords." }], steps: [
            { reasoning: "It crawls and indexes web pages.", marks: 1, markCode: "M" },
            { reasoning: "The user enters keywords describing what they want.", marks: 1, markCode: "M" },
            { reasoning: "It returns a ranked list of matching pages.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation of the process.", marks: 1, markCode: "A" },
          ], finalAnswer: "Search engines index pages and return ranked results matching the user's keywords." },
        },
        {
          id: "olict-u4-wb-q12", difficulty: "core", totalMarks: 2,
          stem: "A web crawler visits 500 pages per hour. How many pages does it visit in 6 hours?",
          response: { type: "numeric", parts: [{ label: "pages", answer: 3000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Crawl rate", statement: "Rate × time." }], steps: [
            { reasoning: "500 × 6 = 3000 pages.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 3000 pages.", marks: 1, markCode: "A" },
          ], finalAnswer: "3000 pages" },
        },
        {
          id: "olict-u4-wb-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Web pages are stored on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "ISPs" },
            { id: "b", text: "Web servers" },
            { id: "c", text: "Search engines" },
            { id: "d", text: "Keyboards" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Web server", statement: "Hosts pages." }], steps: [{ reasoning: "Servers host pages.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Web servers" },
        },
        {
          id: "olict-u4-wb-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Web pages are written mainly in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "MP3" },
            { id: "b", text: "PDF" },
            { id: "c", text: "HTML" },
            { id: "d", text: "JPEG" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "HTML", statement: "Page markup." }], steps: [{ reasoning: "HTML structures pages.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** HTML" },
        },
        {
          id: "olict-u4-wb-q15", difficulty: "foundation", totalMarks: 2,
          stem: "How many web browsers are named in the lesson: Chrome, Firefox, Edge?",
          response: { type: "numeric", parts: [{ label: "browsers", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Browsers", statement: "Count named." }], steps: [
            { reasoning: "Chrome, Firefox and Edge are three browsers.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 browsers" },
        },
        {
          id: "olict-u4-wb-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A user types a web address but the page does not load. Suggest three possible causes and a check for each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Troubleshooting", statement: "Check each stage." }], steps: [
            { reasoning: "Wrong URL typed — check the address carefully.", marks: 1, markCode: "M" },
            { reasoning: "DNS failure — check internet connection.", marks: 1, markCode: "M" },
            { reasoning: "Web server down — try again later or another site.", marks: 1, markCode: "M" },
            { reasoning: "Three valid causes with checks.", marks: 1, markCode: "A" },
          ], finalAnswer: "Check the URL, the internet connection/DNS, and whether the server is reachable." },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u4-4-3-notes", title: "Internet and WWW — notes", summary: "Internet vs WWW, ISPs, URLs, browsers and search engines.",
      sections: [
        { heading: "Internet vs WWW", body: "Internet = network infrastructure; WWW = websites on it. ISP provides access." },
        { heading: "Web", body: "URL = protocol+domain+path; browser displays pages; search engines find them." },
      ] },
  ],
};
