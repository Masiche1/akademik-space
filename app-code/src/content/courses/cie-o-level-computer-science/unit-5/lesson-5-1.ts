import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "olcs-u5-lesson-5-1",
  code: "5-1",
  title: "The Internet and the World Wide Web",
  goal: "I CAN distinguish the internet from the WWW and explain URLs, HTTP/HTTPS, browsers and cookies.",
  standards: ["2210 5.1.1", "2210 5.1.2", "2210 5.1.6"],
  vocabulary: [
    { term: "Internet", definition: "The global network of interconnected computers using TCP/IP." },
    { term: "World Wide Web (WWW)", definition: "A service on the internet of interlinked hypertext pages accessed via browsers." },
    { term: "URL", definition: "Uniform Resource Locator — the address of a web resource." },
    { term: "HTTP/HTTPS", definition: "Protocol for transferring web pages; HTTPS adds encryption (TLS/SSL)." },
    { term: "Web browser", definition: "Software that requests, displays and navigates web pages." },
    { term: "Cookie", definition: "Small file a website stores on your device to remember you between visits." },
  ],
  concepts: [
    {
      id: "olcs-u5-internet",
      title: "Internet vs WWW, URLs and protocols",
      skill: "Distinguish the internet from the web and parse a URL.",
      lesson: {
        sections: [
          { heading: "Internet vs WWW", body: "The **internet** is the physical/global network infrastructure — cables, routers, servers. The **World Wide Web** is one service running on it: interlinked web pages. Other internet services include email, FTP, streaming, VoIP. The web is often confused with the internet but is only part of it." },
          { heading: "URLs", body: "A **URL** has parts: `https://www.example.com/path/page.html`\n\n- `https` — protocol\n- `www.example.com` — domain name (resolved to an IP by DNS)\n- `/path/page.html` — resource location on the server" },
          { heading: "HTTP and HTTPS", body: "**HTTP** transfers web pages unencrypted. **HTTPS** wraps HTTP in TLS/SSL encryption — protects data in transit and authenticates the server (padlock). Always prefer HTTPS; browsers warn on HTTP." },
        ],
        keyFormulas: [
          { name: "URL", statement: "protocol://domain/path" },
        ],
        workedExample: {
          problem: "Break down `https://shop.example.org/cart/item2` into its parts.",
          solution: "Protocol: HTTPS; domain: shop.example.org; path: /cart/item2.",
        },
      },
      questions: [
        {
          id: "olcs-u5-in-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The World Wide Web is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The same as the internet" },
            { id: "b", text: "A search engine" },
            { id: "c", text: "A service on the internet" },
            { id: "d", text: "A type of cable" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "WWW", statement: "Web service on internet." }], steps: [{ reasoning: "WWW is a service, not the whole internet.", working: "\\text{service}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** A service on the internet" },
        },
        {
          id: "olcs-u5-in-q2", difficulty: "core", totalMarks: 2,
          stem: "What does the 'S' in HTTPS stand for and what does it provide?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "HTTPS", statement: "Secure — TLS encryption." }], steps: [
            { reasoning: "Secure.", working: "\\text{Secure}", marks: 1, markCode: "M" },
            { reasoning: "Encrypts data in transit (TLS/SSL).", working: "\\text{TLS}", marks: 1, markCode: "A" },
          ], finalAnswer: "Secure — adds TLS encryption to HTTP." },
        },
        {
          id: "olcs-u5-in-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between the internet and the World Wide Web, giving an example of an internet service that is not the web.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Internet vs WWW", statement: "Infrastructure vs web pages." }], steps: [
            { reasoning: "Internet = global network infrastructure.", working: "\\text{network}", marks: 1, markCode: "M" },
            { reasoning: "WWW = web pages service on it.", working: "\\text{web pages}", marks: 1, markCode: "M" },
            { reasoning: "Example: email/FTP/streaming.", working: "\\text{email}", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Internet is the network; WWW is web pages on it. Email/FTP/streaming are non-web internet services." },
        },
        {
          id: "olcs-u5-in-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Internet and web review.",
          parts: [
            { label: "a", prompt: "State the three main parts of a URL.", marks: 2 },
            { label: "b", prompt: "Distinguish HTTP from HTTPS.", marks: 2 },
            { label: "c", prompt: "What does DNS do?", marks: 2 },
            { label: "d", prompt: "Explain how a browser displays a web page.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "DNS", statement: "Domain names → IP addresses." },
          ], steps: [
            { part: "a", reasoning: "Protocol, domain, path.", working: "\\text{protocol-domain-path}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All three.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "HTTP unencrypted.", working: "\\text{HTTP}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "HTTPS adds TLS encryption.", working: "\\text{TLS}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Translates domain names to IP addresses.", working: "\\text{name→IP}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct function.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Browser sends request to server.", working: "\\text{request}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Receives HTML/CSS/JS and renders page.", working: "\\text{render}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Displays to user.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) protocol/domain/path (b) unencrypted vs TLS (c) name→IP (d) request→receive→render" },
        },
        {
          id: "olcs-u5-in-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is NOT a service that runs on the internet?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ethernet cabling" },
            { id: "b", text: "File transfer (FTP)" },
            { id: "c", text: "Email" },
            { id: "d", text: "Video streaming" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Internet services", statement: "Email, FTP, streaming, web run on the internet." }], steps: [{ reasoning: "Cabling is hardware, not a service.", working: "\\text{hardware}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Ethernet cabling" },
        },
        {
          id: "olcs-u5-in-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A URL is made up of a protocol, a domain and a path. How many main parts does it have?",
          response: { type: "numeric", parts: [{ label: "URL parts", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "URL", statement: "protocol://domain/path." }], steps: [
            { reasoning: "Protocol, domain and path = 3 parts.", working: "3", marks: 1, markCode: "B" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u5-in-q7", difficulty: "core", totalMarks: 1,
          stem: "In the URL https://www.example.com/shop/item, what is the domain name?",
          response: { type: "mcq", choices: [
            { id: "a", text: "www.example.com" },
            { id: "b", text: "https" },
            { id: "c", text: "item" },
            { id: "d", text: "/shop/item" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Domain", statement: "The server address part of a URL." }], steps: [{ reasoning: "Domain is www.example.com.", working: "\\text{www.example.com}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** www.example.com" },
        },
        {
          id: "olcs-u5-in-q8", difficulty: "core", totalMarks: 1,
          stem: "An IPv4 address such as 192.168.1.1 contains how many numbers separated by dots?",
          response: { type: "numeric", parts: [{ label: "Numbers in IPv4 address", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "IPv4", statement: "Four octets separated by dots." }], steps: [
            { reasoning: "192, 168, 1, 1 = 4 numbers.", working: "4", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u5-in-q9", difficulty: "core", totalMarks: 1,
          stem: "Which protocol should be used when submitting a password on a website?",
          response: { type: "mcq", choices: [
            { id: "a", text: "HTTP" },
            { id: "b", text: "HTTPS" },
            { id: "c", text: "SMTP" },
            { id: "d", text: "FTP" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "HTTPS", statement: "Encrypted web protocol." }], steps: [{ reasoning: "HTTPS encrypts the password in transit.", working: "\\text{TLS}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** HTTPS" },
        },
        {
          id: "olcs-u5-in-q10", difficulty: "core", totalMarks: 2,
          stem: "State two ways HTTPS is more secure than HTTP.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "HTTPS", statement: "TLS encryption + server authentication." }], steps: [
            { reasoning: "Encrypts data in transit with TLS.", working: "\\text{TLS}", marks: 1, markCode: "M" },
            { reasoning: "Authenticates the server so data reaches the right site.", working: "\\text{auth}", marks: 1, markCode: "A" },
          ], finalAnswer: "TLS encryption in transit and server authentication." },
        },
        {
          id: "olcs-u5-in-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A browser displays a padlock icon next to a URL. This indicates…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The page has no adverts" },
            { id: "b", text: "The site is the fastest available" },
            { id: "c", text: "The connection uses HTTPS encryption" },
            { id: "d", text: "Cookies are disabled" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Padlock", statement: "Shows HTTPS is active." }], steps: [{ reasoning: "Padlock = encrypted HTTPS connection.", working: "\\text{HTTPS}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** HTTPS encryption is active" },
        },
        {
          id: "olcs-u5-in-q12", difficulty: "core", totalMarks: 1,
          stem: "In the URL https://site.com/a/b, how many path segments appear after the domain?",
          response: { type: "numeric", parts: [{ label: "Path segments", answer: 2 }] },
          markscheme: { principles: [{ kind: "definition", name: "Path", statement: "Resource location on the server." }], steps: [
            { reasoning: "Path is /a/b — two segments.", working: "2", marks: 1, markCode: "B" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u5-in-q13", difficulty: "core", totalMarks: 2,
          stem: "Explain what DNS does when you enter a web address.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "DNS", statement: "Domain names → IP addresses." }], steps: [
            { reasoning: "Translates the domain name into an IP address.", working: "\\text{name→IP}", marks: 1, markCode: "M" },
            { reasoning: "The browser then connects to that IP address.", working: "\\text{connect}", marks: 1, markCode: "A" },
          ], finalAnswer: "DNS translates the domain name to an IP address so the browser can connect." },
        },
        {
          id: "olcs-u5-in-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The 'https' at the start of a URL is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The protocol" },
            { id: "b", text: "The IP address" },
            { id: "c", text: "The file path" },
            { id: "d", text: "The domain name" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Protocol", statement: "Rules for transferring the resource." }], steps: [{ reasoning: "https is the protocol.", working: "\\text{protocol}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** The protocol" },
        },
        {
          id: "olcs-u5-in-q15", difficulty: "core", totalMarks: 2,
          stem: "For the URL https://shop.example.org/cart/item2, state how many path segments it has and how many dots are in the domain name.",
          response: { type: "numeric", parts: [
            { label: "Path segments", answer: 2 },
            { label: "Dots in domain", answer: 2 },
          ] },
          markscheme: { principles: [{ kind: "definition", name: "URL parts", statement: "Path /cart/item2; domain shop.example.org." }], steps: [
            { reasoning: "Path /cart/item2 has 2 segments.", working: "2", marks: 1, markCode: "M" },
            { reasoning: "shop.example.org has 2 dots.", working: "2", marks: 1, markCode: "A" },
          ], finalAnswer: "2 path segments; 2 dots" },
        },
        {
          id: "olcs-u5-in-q16", difficulty: "challenge", totalMarks: 9,
          stem: "URLs and protocols review.",
          parts: [
            { label: "a", prompt: "Identify the protocol, domain and path in https://mail.example.com/inbox.", marks: 3 },
            { label: "b", prompt: "State what the 'S' in HTTPS provides.", marks: 2 },
            { label: "c", prompt: "What does DNS do?", marks: 2 },
            { label: "d", prompt: "Name one internet service that is not the World Wide Web.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "URL", statement: "protocol://domain/path." },
          ], steps: [
            { part: "a", reasoning: "Protocol is https.", working: "\\text{https}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Domain is mail.example.com.", working: "\\text{mail.example.com}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Path is /inbox.", working: "\\text{/inbox}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Secure — adds TLS encryption.", working: "\\text{TLS}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Encrypts data in transit.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Translates domain names to IP addresses.", working: "\\text{name→IP}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct function.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Email / FTP / streaming / VoIP.", working: "\\text{email}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid non-web service.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) https/mail.example.com//inbox (b) Secure — TLS (c) name→IP (d) email/FTP" },
        },
      ],
    },
    {
      id: "olcs-u5-browsers",
      title: "Browsers and cookies",
      skill: "Explain what browsers do and the role of session and persistent cookies.",
      lesson: {
        sections: [
          { heading: "What a browser does", body: "A **web browser** (Chrome, Firefox, Edge, Safari):\n\n1. Takes a URL, resolves the domain via DNS.\n2. Sends an HTTP/HTTPS request to the server.\n3. Receives HTML, CSS and JavaScript.\n4. Renders (displays) the page.\n\nBrowsers also manage tabs, history, bookmarks, passwords and extensions." },
          { heading: "Cookies", body: "Small text files a site stores on your device:\n\n- **Session cookies**: temporary, deleted when the browser closes — keep you logged in during a visit, hold cart contents.\n- **Persistent cookies**: remain after closing — remember preferences, login details, track you across visits for advertising.\n\nCookies enable personalisation but raise privacy concerns; users can block/delete them." },
          { heading: "Privacy", body: "Cookies + browsing history can build a profile of you. HTTPS encrypts content but cookies still identify you to the site. Clearing cookies or using private browsing limits tracking." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do you stay logged in on a site after closing and reopening the browser?",
          solution: "A persistent cookie stored your login/session token, so the site recognises you on return.",
        },
      },
      questions: [
        {
          id: "olcs-u5-br-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A web browser's main job is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Store files permanently" },
            { id: "b", text: "Route packets" },
            { id: "c", text: "Request and display web pages" },
            { id: "d", text: "Encrypt all data" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Browser", statement: "Requests and renders pages." }], steps: [{ reasoning: "Browser displays web pages.", working: "\\text{display}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Request and display" },
        },
        {
          id: "olcs-u5-br-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish session cookies from persistent cookies.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Cookies", statement: "Session = temporary; persistent = lasting." }], steps: [
            { reasoning: "Session: deleted on browser close.", working: "\\text{temporary}", marks: 1, markCode: "M" },
            { reasoning: "Persistent: remain for future visits.", working: "\\text{lasting}", marks: 1, markCode: "A" },
          ], finalAnswer: "Session cookies are temporary; persistent cookies remain after closing." },
        },
        {
          id: "olcs-u5-br-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one benefit and one privacy concern of cookies.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cookies", statement: "Convenience vs tracking." }], steps: [
            { reasoning: "Benefit: remember logins/preferences.", working: "\\text{remember}", marks: 1, markCode: "M" },
            { reasoning: "Concern: track browsing across sites.", working: "\\text{tracking}", marks: 1, markCode: "M" },
            { reasoning: "Can build user profiles for ads.", marks: 1, markCode: "M" },
            { reasoning: "Mitigate by blocking/deleting.", marks: 1, markCode: "A" },
          ], finalAnswer: "Cookies remember you (benefit) but can track you across sites (privacy concern)." },
        },
        {
          id: "olcs-u5-br-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Browsers and cookies review.",
          parts: [
            { label: "a", prompt: "Describe the steps a browser takes to show a page.", marks: 3 },
            { label: "b", prompt: "Define a cookie.", marks: 1 },
            { label: "c", prompt: "Distinguish session vs persistent cookies.", marks: 2 },
            { label: "d", prompt: "Explain two ways users can reduce cookie tracking.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Cookie", statement: "Small file storing site data on device." },
          ], steps: [
            { part: "a", reasoning: "Resolve domain via DNS, send request.", working: "\\text{DNS+request}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Receive HTML/CSS/JS.", working: "\\text{receive}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Render and display.", working: "\\text{render}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Small file stored by a website on your device.", working: "\\text{small file}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Session = temporary.", working: "\\text{temp}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Persistent = remains after close.", working: "\\text{lasting}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Block/delete cookies.", working: "\\text{block}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Use private/incognito browsing.", working: "\\text{private}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Use privacy-focused browser/extensions.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) DNS→request→render (b) small file (c) temp vs lasting (d) block/private mode" },
        },
        {
          id: "olcs-u5-br-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is a web browser?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Microsoft Excel" },
            { id: "b", text: "Google Chrome" },
            { id: "c", text: "Notepad" },
            { id: "d", text: "TCP/IP" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Browser", statement: "Software that displays web pages." }], steps: [{ reasoning: "Chrome is a browser.", working: "\\text{Chrome}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Google Chrome" },
        },
        {
          id: "olcs-u5-br-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many of these are web browsers: Chrome, Firefox, Safari, Edge, Photoshop?",
          response: { type: "numeric", parts: [{ label: "Number of browsers", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Browsers", statement: "Chrome, Firefox, Safari, Edge." }], steps: [
            { reasoning: "Photoshop is not a browser.", working: "4", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u5-br-q7", difficulty: "core", totalMarks: 1,
          stem: "A session cookie is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of firewall" },
            { id: "b", text: "Deleted when the browser closes" },
            { id: "c", text: "An IP address" },
            { id: "d", text: "Permanent" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Session cookie", statement: "Temporary, deleted on close." }], steps: [{ reasoning: "Session cookies are temporary.", working: "\\text{temporary}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Deleted when the browser closes" },
        },
        {
          id: "olcs-u5-br-q8", difficulty: "core", totalMarks: 1,
          stem: "A site sets 2 session cookies and 1 persistent cookie. How many cookies remain after the browser is closed?",
          response: { type: "numeric", parts: [{ label: "Cookies remaining", answer: 1 }] },
          markscheme: { principles: [{ kind: "definition", name: "Cookies", statement: "Session deleted; persistent remains." }], steps: [
            { reasoning: "Only the persistent cookie remains.", working: "1", marks: 1, markCode: "B" },
          ], finalAnswer: "1" },
        },
        {
          id: "olcs-u5-br-q9", difficulty: "core", totalMarks: 1,
          stem: "Why do shopping sites use cookies?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To speed up the cable" },
            { id: "b", text: "To block adverts" },
            { id: "c", text: "To encrypt files" },
            { id: "d", text: "To remember your basket between pages" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Cookies", statement: "Remember state between visits." }], steps: [{ reasoning: "Cookies keep cart contents/login.", working: "\\text{remember}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Remember your basket" },
        },
        {
          id: "olcs-u5-br-q10", difficulty: "core", totalMarks: 2,
          stem: "Give two features a web browser provides besides displaying pages.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Browser features", statement: "Tabs, history, bookmarks, passwords, extensions." }], steps: [
            { reasoning: "Any two: tabs / history / bookmarks / passwords / extensions.", working: "\\text{features}", marks: 1, markCode: "M" },
            { reasoning: "Second valid feature.", marks: 1, markCode: "A" },
          ], finalAnswer: "Tabs, history, bookmarks, passwords, extensions (any two)." },
        },
        {
          id: "olcs-u5-br-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Using private (incognito) browsing mainly…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Does not save history or cookies for that session" },
            { id: "b", text: "Blocks all adverts" },
            { id: "c", text: "Speeds up pages" },
            { id: "d", text: "Encrypts all traffic" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Private browsing", statement: "Session data not kept." }], steps: [{ reasoning: "Private mode doesn't persist history/cookies.", working: "\\text{no save}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Doesn't save history or cookies" },
        },
        {
          id: "olcs-u5-br-q12", difficulty: "core", totalMarks: 1,
          stem: "A browser resolves the domain via DNS, sends a request, receives files, then renders the page. How many main steps is that?",
          response: { type: "numeric", parts: [{ label: "Main steps", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Page loading", statement: "DNS → request → receive → render." }], steps: [
            { reasoning: "Four steps listed.", working: "4", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u5-br-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how cookies can be used for targeted advertising.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Tracking", statement: "Cookies build a browsing profile." }], steps: [
            { reasoning: "Cookies record sites you visit.", working: "\\text{track}", marks: 1, markCode: "M" },
            { reasoning: "A profile of interests is built over time.", working: "\\text{profile}", marks: 1, markCode: "M" },
            { reasoning: "Ad networks show relevant adverts.", working: "\\text{ads}", marks: 1, markCode: "M" },
            { reasoning: "Persistent cookies enable this across visits.", marks: 1, markCode: "A" },
          ], finalAnswer: "Cookies track visited sites, build a profile, and ad networks target you with relevant adverts." },
        },
        {
          id: "olcs-u5-br-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which is a privacy risk of persistent cookies?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They make pages load faster" },
            { id: "b", text: "They can track you across visits" },
            { id: "c", text: "They fix software bugs" },
            { id: "d", text: "They encrypt passwords" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Cookie risk", statement: "Long-term tracking." }], steps: [{ reasoning: "Persistent cookies track across visits.", working: "\\text{tracking}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** They can track you across visits" },
        },
        {
          id: "olcs-u5-br-q15", difficulty: "core", totalMarks: 2,
          stem: "A user deletes all cookies and clears their browsing history. How many of the cleared items remain?",
          response: { type: "numeric", parts: [
            { label: "Cookies remaining", answer: 0 },
            { label: "History entries remaining", answer: 0 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Clearing data", statement: "Cookies and history can be removed." }], steps: [
            { reasoning: "Deleting cookies removes them.", working: "0", marks: 1, markCode: "M" },
            { reasoning: "Clearing history removes entries.", marks: 1, markCode: "A" },
          ], finalAnswer: "0 cookies; 0 history entries" },
        },
        {
          id: "olcs-u5-br-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Browsers and cookies review.",
          parts: [
            { label: "a", prompt: "Describe two things a web browser does.", marks: 3 },
            { label: "b", prompt: "Define a cookie.", marks: 2 },
            { label: "c", prompt: "Distinguish session from persistent cookies.", marks: 2 },
            { label: "d", prompt: "State one way users can reduce cookie tracking.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Cookie", statement: "Small file stored by a site on your device." },
          ], steps: [
            { part: "a", reasoning: "Resolves domain and sends request.", working: "\\text{request}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Receives HTML/CSS/JS.", working: "\\text{receive}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Renders and displays the page.", working: "\\text{render}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Small file a website stores on your device.", working: "\\text{small file}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Used to remember you between visits.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Session: temporary, deleted on close.", working: "\\text{temp}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Persistent: remains after closing.", working: "\\text{lasting}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Block/delete cookies.", working: "\\text{block}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Private browsing / cookie settings.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) request+render (b) small file (c) temp vs lasting (d) block/private" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u5-5-1-notes", title: "Internet and web — notes", summary: "Internet vs WWW, URLs, HTTP/HTTPS, DNS, browsers, cookies.",
      sections: [
        { heading: "Key distinctions", body: "Internet = network; WWW = web pages service. HTTPS = HTTP + TLS encryption. DNS = names→IP." },
        { heading: "Cookies", body: "Session = temporary; persistent = lasting. Enable personalisation but can track you." },
      ] },
  ],
};
