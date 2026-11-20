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
            { id: "a", text: "A service on the internet" }, { id: "b", text: "The same as the internet" }, { id: "c", text: "A type of cable" }, { id: "d", text: "A search engine" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "WWW", statement: "Web service on internet." }], steps: [{ reasoning: "WWW is a service, not the whole internet.", working: "\\text{service}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** A service on the internet" },
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
            { id: "a", text: "Request and display web pages" }, { id: "b", text: "Store files permanently" }, { id: "c", text: "Route packets" }, { id: "d", text: "Encrypt all data" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Browser", statement: "Requests and renders pages." }], steps: [{ reasoning: "Browser displays web pages.", working: "\\text{display}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Request and display" },
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
