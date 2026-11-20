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
            { id: "a", text: "A global network of networks" }, { id: "b", text: "A collection of websites" }, { id: "c", text: "A browser" }, { id: "d", text: "A cable type" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Display web pages" }, { id: "b", text: "Store files" }, { id: "c", text: "Provide internet" }, { id: "d", text: "Encrypt data" },
          ], correctChoiceId: "a" },
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
